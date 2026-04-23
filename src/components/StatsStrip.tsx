"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import styles from "./StatsStrip.module.css";

const STATS = [
  {
    value: 8,
    suffix: "",
    label: "States Licensed",
    accent: "#EC4899",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    value: 5,
    suffix: "★",
    label: "Average Rating",
    accent: "#F59E0B",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    value: 100,
    suffix: "%",
    label: "Honest Guidance",
    accent: "#22C55E",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    value: 15,
    suffix: "min",
    label: "Free Discovery Call",
    accent: "#3B82F6",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.3);
  const done = useRef(false);

  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={styles.value}>
      {count}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <div className={styles.outer}>
      <div className={styles.grid}>
        {STATS.map((s) => (
          <div
            key={s.label}
            className={styles.card}
            style={{ "--accent": s.accent } as React.CSSProperties}
          >
            <span className={styles.iconWrap}>{s.icon}</span>
            <Counter target={s.value} suffix={s.suffix} />
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
