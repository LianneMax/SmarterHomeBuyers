"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 0.5 };
const DOT_SPACING = 28;
const DOT_SIZE = 2.5;
const REPULSION_RADIUS = 90;
const REPULSION_STRENGTH = 26;

interface Dot {
  id: string;
  baseX: number;
  baseY: number;
  opacity: number;
}

function generateDots(width: number, height: number): Dot[] {
  const dots: Dot[] = [];
  const cols = Math.ceil(width / DOT_SPACING);
  const rows = Math.ceil(height / DOT_SPACING);
  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      const pattern = (row + col) % 3;
      const baseOpacities = [0.14, 0.22, 0.32];
      dots.push({
        id: `d-${row}-${col}`,
        baseX: col * DOT_SPACING,
        baseY: row * DOT_SPACING,
        opacity: baseOpacities[pattern],
      });
    }
  }
  return dots;
}

function DotItem({
  dot,
  index,
  mouseX,
  mouseY,
}: {
  dot: Dot;
  index: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const posX = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get(), my = mouseY.get();
    if (!Number.isFinite(mx) || !Number.isFinite(my)) return 0;
    const dx = dot.baseX - mx, dy = dot.baseY - my;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < REPULSION_RADIUS) {
      const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH;
      return Math.cos(Math.atan2(dy, dx)) * force;
    }
    return 0;
  });

  const posY = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get(), my = mouseY.get();
    if (!Number.isFinite(mx) || !Number.isFinite(my)) return 0;
    const dx = dot.baseX - mx, dy = dot.baseY - my;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < REPULSION_RADIUS) {
      const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH;
      return Math.sin(Math.atan2(dy, dx)) * force;
    }
    return 0;
  });

  const x = useSpring(posX, SPRING_CONFIG);
  const y = useSpring(posY, SPRING_CONFIG);
  const delay = (index * 0.02) % 1.5;

  return (
    <motion.div
      animate={{ opacity: [dot.opacity * 0.55, dot.opacity, dot.opacity * 0.55] }}
      initial={{ opacity: dot.opacity * 0.55 }}
      style={{
        position: "absolute",
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: "50%",
        left: dot.baseX,
        top: dot.baseY,
        x,
        y,
        background: "rgba(255, 255, 255, 0.65)",
        willChange: "transform",
        pointerEvents: "none",
      }}
      transition={{
        opacity: {
          duration: 2 + (index % 4) * 0.3,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
          delay,
          times: [0, 0.5, 1],
        },
      }}
    />
  );
}

interface HeroDotBgProps {
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: () => void;
}

export function useHeroDotHandlers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(Infinity);
    mouseY.set(Infinity);
  };

  return { containerRef, mouseX, mouseY, handleMouseMove, handleMouseLeave };
}

interface HeroDotBgInternalProps {
  containerRef: React.RefObject<HTMLDivElement>;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}

export default function HeroDotBg({ containerRef, mouseX, mouseY }: HeroDotBgInternalProps) {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      if (width > 0 && height > 0) setDots(generateDots(width, height));
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [containerRef]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {dots.map((dot, i) => (
        <DotItem key={dot.id} dot={dot} index={i} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </div>
  );
}
