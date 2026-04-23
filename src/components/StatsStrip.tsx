"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import styles from "./StatsStrip.module.css";

const STATS = [
  { value: 8,    suffix: "",   label: "States Licensed" },
  { value: 5,    suffix: "★",  label: "Average Rating" },
  { value: 100,  suffix: "%",  label: "Honest Guidance" },
  { value: 15,   suffix: "min",label: "Free Discovery Call" },
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
    <div className={styles.strip}>
      {STATS.map((s) => (
        <div key={s.label} className={styles.stat}>
          <Counter target={s.value} suffix={s.suffix} />
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
