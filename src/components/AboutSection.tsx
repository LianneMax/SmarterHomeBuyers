"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./AboutSection.module.css";

const pillars = [
  {
    number: "01",
    title: "Step-by-Step Guidance",
    body: "From pre-approval to closing, we walk you through every phase — no surprises, no confusion.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "All Loan Types, No Games",
    body: "FHA, VA, Conventional, Jumbo — Darren lays out your options honestly. If a loan is a bad idea for you, he will say so.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Licensed Across 8 States",
    body: "Serving buyers in AZ, CA, FL, HI, OR, PA, TN, and TX with the same level of care and responsiveness.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Long-Term Planning",
    body: "Homeownership is a milestone, not just a transaction. We help you think beyond the purchase — equity, refinancing, and what comes next.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "5-Star Client Experience",
    body: "Speed, communication, and honesty — that is what clients consistently highlight. Darren reviews every file personally.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    number: "06",
    title: "Always In Your Corner",
    body: "Questions after close? Still here. Darren's commitment doesn't end at the wire transfer.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
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

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {pillars.map((p) => (
            <div key={p.number} className={styles.card}>
              <span className={styles.cornerIcon}>{p.icon}</span>
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
