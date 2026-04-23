"use client";

import { useState } from "react";
import Image from "next/image";
import ApplyModal from "./ApplyModal";
import BookModal from "./BookModal";
import HeroDotBg, { useHeroDotHandlers } from "./HeroDotBg";
import HeroSocialLinks from "./HeroSocialLinks";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [showApply, setShowApply] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const { containerRef, mouseX, mouseY, handleMouseMove, handleMouseLeave } = useHeroDotHandlers();

  return (
    <section className={styles.section}>
      {/* Left — dynamic photo panel */}
      <div
        ref={containerRef}
        className={styles.panel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <HeroDotBg containerRef={containerRef} mouseX={mouseX} mouseY={mouseY} />

        <div className={styles.photoArea}>
          {/* Floating stat badges */}
          <div className={`${styles.chip} ${styles.chipRating}`} aria-hidden="true">
            <span className={styles.chipIconWrap}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
            <div>
              <p className={styles.chipVal}>5.0 Stars</p>
              <p className={styles.chipLbl}>Avg. Rating</p>
            </div>
          </div>

          <div className={`${styles.chip} ${styles.chipClose}`} aria-hidden="true">
            <span className={styles.chipIconWrap}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </span>
            <div>
              <p className={styles.chipVal}>18-Day Close</p>
              <p className={styles.chipLbl}>Fastest Close</p>
            </div>
          </div>

          <div className={`${styles.chip} ${styles.chipStates}`} aria-hidden="true">
            <span className={styles.chipIconWrap}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div>
              <p className={styles.chipVal}>8 States</p>
              <p className={styles.chipLbl}>Licensed</p>
            </div>
          </div>

          {/* Circular portrait */}
          <div className={styles.photoWrap}>
            <Image
              src="/darren.jpg"
              alt="Darren Tsai"
              fill
              sizes="240px"
              className={styles.photo}
              priority
            />
          </div>
        </div>

        <div className={styles.nameBlock}>
          <p className={styles.panelLabel}>Senior Loan Officer · Saxton Mortgage</p>
          <h2 className={styles.panelName}>Darren Tsai</h2>
          <div className={styles.socialRow}>
            <HeroSocialLinks />
          </div>
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
