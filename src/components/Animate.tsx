"use client";

import { useInView } from "@/hooks/useInView";

interface AnimateProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
}

export default function Animate({ children, delay = 0, className = "" }: AnimateProps) {
  const { ref, inView } = useInView();
  const delayClass = delay > 0 ? `fade-up-delay-${delay}` : "";

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`fade-up ${inView ? "visible" : ""} ${delayClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
