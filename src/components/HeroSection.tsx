"use client";

import { useState } from "react";
import Image from "next/image";
import ApplyModal from "./ApplyModal";
import BookModal from "./BookModal";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [showApply, setShowApply] = useState(false);
  const [showBook, setShowBook] = useState(false);

  return (
    <section className={styles.section}>
      {/* Left — photo panel */}
      <div className={styles.panel}>
        <div className={styles.photoWrap}>
          <Image
            src="/darren.jpg"
            alt="Darren Tsai"
            fill
            sizes="42vw"
            className={styles.photo}
            priority
          />
        </div>
        <div className={styles.panelOverlay}>
          <p className={styles.panelLabel}>Senior Loan Consultant</p>
          <h2 className={styles.panelName}>Darren Tsai</h2>
        </div>
      </div>

      {/* Right — content */}
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Smarter Home Buyers</span>
        </div>

        <div className={styles.headline}>
          <h1 className={styles.headlineMain}>Your Path to<br />Homeownership,<br />Simplified.</h1>
          <p className={styles.headlineSub}>Honest guidance. No games. No pressure.</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.credentials}>
          <div className={styles.credRow}>
            <span className={styles.credTag}>NMLS #2438102</span>
            <span className={styles.credTag}>DRE #02103705</span>
          </div>
          <div className={styles.credRow}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7L12 13 2 7" />
            </svg>
            <a href="mailto:Darren@realdarrentsai.com">Darren@realdarrentsai.com</a>
          </div>
          <div className={styles.credRow}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5.05 2 2 0 0 1 3.58 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <a href="tel:+17148875432">+1 (714) 887-5432</a>
          </div>
          <div className={styles.credRow}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Licensed in AZ, CA, FL, HI, OR, PA, TN, TX
          </div>
        </div>

        <div className={styles.buttons}>
          <button className="btn-primary" onClick={() => setShowApply(true)}>Apply Now</button>
          <button className="btn-outline" onClick={() => setShowBook(true)}>Book a Call</button>
        </div>
      </div>

      {showApply && <ApplyModal onClose={() => setShowApply(false)} />}
      {showBook && <BookModal onClose={() => setShowBook(false)} />}
    </section>
  );
}
