"use client";

import type { LucideIcon } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";

const TILT_MAX = 9;
const TILT_SPRING = { stiffness: 300, damping: 28 } as const;
const GLOW_SPRING = { stiffness: 180, damping: 22 } as const;

export interface SpotlightItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface CardProps {
  item: SpotlightItem;
  dimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

function Card({ item, dimmed, onHoverStart, onHoverEnd }: CardProps) {
  const Icon = item.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const normX = useMotionValue(0.5);
  const normY = useMotionValue(0.5);
  const rawRotateX = useTransform(normY, [0, 1], [TILT_MAX, -TILT_MAX]);
  const rawRotateY = useTransform(normX, [0, 1], [-TILT_MAX, TILT_MAX]);
  const rotateX = useSpring(rawRotateX, TILT_SPRING);
  const rotateY = useSpring(rawRotateY, TILT_SPRING);
  const glowOpacity = useSpring(0, GLOW_SPRING);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    normX.set((e.clientX - rect.left) / rect.width);
    normY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    glowOpacity.set(1);
    onHoverStart();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    normX.set(0.5);
    normY.set(0.5);
    glowOpacity.set(0);
    onHoverEnd();
  };

  return (
    <motion.div
      animate={{ scale: dimmed ? 0.96 : 1, opacity: dimmed ? 0.5 : 1 }}
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        background: "var(--white)",
        border: `1.5px solid ${isHovered ? item.color + "40" : "var(--border)"}`,
        borderRadius: "12px",
        padding: "2.25rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.65rem",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: isHovered ? `0 8px 28px ${item.color}18` : "var(--shadow-sm)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {/* Static accent tint */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          borderRadius: "12px",
          background: `radial-gradient(ellipse at 20% 20%, ${item.color}14, transparent 65%)`,
        }}
      />

      {/* Hover glow */}
      <motion.div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          borderRadius: "12px",
          opacity: glowOpacity,
          background: `radial-gradient(ellipse at 20% 20%, ${item.color}22, transparent 65%)`,
        }}
      />

      {/* Icon badge */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          background: `${item.color}18`,
          boxShadow: `inset 0 0 0 1px ${item.color}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={17} strokeWidth={1.9} style={{ color: item.color }} />
      </div>

      {/* Text */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <h3 style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.98rem",
          fontWeight: 600,
          color: "var(--text-dark)",
          lineHeight: 1.35,
        }}>
          {item.title}
        </h3>
        <p style={{
          fontSize: "0.865rem",
          color: "var(--text-muted)",
          lineHeight: 1.65,
          margin: 0,
        }}>
          {item.description}
        </p>
      </div>

      {/* Accent bottom line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          borderRadius: "9999px",
          background: `linear-gradient(to right, ${item.color}80, transparent)`,
          width: isHovered ? "100%" : "0%",
          transition: "width 0.5s ease",
        }}
      />
    </motion.div>
  );
}

export interface SpotlightCardsProps {
  items?: SpotlightItem[];
  eyebrow?: string;
  heading?: string;
  className?: string;
}

export default function SpotlightCards({
  items = [],
  eyebrow,
  heading,
}: SpotlightCardsProps) {
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {(eyebrow || heading) && (
        <div style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {eyebrow && (
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--teal-mid)" }}>
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--text-dark)" }}>
              {heading}
            </h2>
          )}
        </div>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1rem",
      }}>
        {items.map((item) => (
          <Card
            key={item.title}
            dimmed={hoveredTitle !== null && hoveredTitle !== item.title}
            item={item}
            onHoverEnd={() => setHoveredTitle(null)}
            onHoverStart={() => setHoveredTitle(item.title)}
          />
        ))}
      </div>
    </div>
  );
}
