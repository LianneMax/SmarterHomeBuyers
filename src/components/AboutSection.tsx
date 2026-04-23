"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import SpotlightCards from "./kokonutui/spotlight-cards";
import { ListOrdered, LayoutList, MapPin, TrendingUp, Star, ShieldCheck } from "lucide-react";
import styles from "./AboutSection.module.css";

const pillars = [
  {
    icon: ListOrdered,
    title: "Step-by-Step Guidance",
    description: "From pre-approval to closing, we walk you through every phase — no surprises, no confusion.",
    color: "#F97316",
  },
  {
    icon: LayoutList,
    title: "All Loan Types, No Games",
    description: "FHA, VA, Conventional, Jumbo — Darren lays out your options honestly. If a loan is a bad idea for you, he will say so.",
    color: "#EAB308",
  },
  {
    icon: MapPin,
    title: "Licensed Across 8 States",
    description: "Serving buyers in AZ, CA, FL, HI, OR, PA, TN, and TX with the same level of care and responsiveness.",
    color: "#22C55E",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Planning",
    description: "Homeownership is a milestone, not just a transaction. We help you think beyond the purchase — equity, refinancing, and what comes next.",
    color: "#3B82F6",
  },
  {
    icon: Star,
    title: "5-Star Client Experience",
    description: "Speed, communication, and honesty — that is what clients consistently highlight. Darren reviews every file personally.",
    color: "#A855F7",
  },
  {
    icon: ShieldCheck,
    title: "Always In Your Corner",
    description: "Questions after close? Still here. Darren's commitment doesn't end at the wire transfer.",
    color: "#EC4899",
  },
];

export default function AboutSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef   = useScrollReveal<HTMLDivElement>(80);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <div className={styles.tag}>Who We Are</div>
          <h2 className={styles.heading}>
            Built for buyers who want <em>clarity</em>, not confusion.
          </h2>
          <p className={styles.sub}>
            Darren Tsai built SmarterHomeBuyers around one idea: every client deserves straightforward answers from someone who actually knows their file.
          </p>
        </div>

        <div ref={gridRef} className="reveal">
          <SpotlightCards items={pillars} />
        </div>
      </div>
    </section>
  );
}
