"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./AboutSection.module.css";

const pillars = [
  { number: "01", title: "Step-by-Step Guidance",      body: "From pre-approval to closing, we walk you through every phase — no surprises, no confusion." },
  { number: "02", title: "All Loan Types, No Games",   body: "FHA, VA, Conventional, Jumbo — Darren lays out your options honestly. If a loan is a bad idea for you, he will say so." },
  { number: "03", title: "Licensed Across 8 States",   body: "Serving buyers in AZ, CA, FL, HI, OR, PA, TN, and TX with the same level of care and responsiveness." },
  { number: "04", title: "Long-Term Planning",          body: "Homeownership is a milestone, not just a transaction. We help you think beyond the purchase — equity, refinancing, and what comes next." },
  { number: "05", title: "5-Star Client Experience",   body: "Speed, communication, and honesty — that is what clients consistently highlight. Darren reviews every file personally." },
  { number: "06", title: "Always In Your Corner",      body: "Questions after close? Still here. Darren's commitment doesn't end at the wire transfer." },
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

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {pillars.map((p) => (
            <div key={p.number} className={styles.card}>
              <span className={styles.num}>{p.number}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
