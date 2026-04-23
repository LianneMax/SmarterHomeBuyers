"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About",     href: "#about" },
  { label: "Reviews",   href: "#reviews" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const [bookOpen, setBookOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleApply = () => {
    window.open(
      "https://apply.getapprovedwith.com/app/signup/p/saxton/darrentsai",
      "_blank",
      "noopener,noreferrer"
    );
    setMenuOpen(false);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          {/* Brand */}
          <a href="#" className={styles.brand} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <span className={styles.avatar}>
              <img
                src="/darren.jpg"
                alt=""
                className={styles.avatarImg}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <span className={styles.avatarFallback} aria-hidden="true">DT</span>
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>Darren Tsai</span>
              <span className={styles.brandSub}>Senior Loan Officer &middot; Saxton Mortgage</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className={styles.links}>
            {NAV_LINKS.map((l) => (
              <button key={l.label} className={styles.link} onClick={() => scrollTo(l.href)}>
                {l.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className={styles.ctas}>
            <button className={styles.ctaBook} onClick={() => { setBookOpen(true); }}>Book a Call</button>
            <button className={styles.ctaApply} onClick={handleApply}>Apply Now</button>
          </div>

          {/* Hamburger */}
          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            {NAV_LINKS.map((l) => (
              <button key={l.label} className={styles.mobileLink} onClick={() => scrollTo(l.href)}>
                {l.label}
              </button>
            ))}
            <div className={styles.mobileCtas}>
              <button className={styles.ctaBook} onClick={() => { setBookOpen(true); setMenuOpen(false); }}>Book a Call</button>
              <button className={styles.ctaApply} onClick={handleApply}>Apply Now</button>
            </div>
          </div>
        )}
      </header>

      {/* Lazy-load modals only when triggered */}
      {bookOpen  && <BookModalLazy  onClose={() => setBookOpen(false)} />}
      {applyOpen && <ApplyModalLazy onClose={() => setApplyOpen(false)} />}
    </>
  );
}

/* Dynamic imports to avoid loading Calendly script unless needed */
import dynamic from "next/dynamic";
const BookModalLazy  = dynamic(() => import("./BookModal"),  { ssr: false });
const ApplyModalLazy = dynamic(() => import("./ApplyModal"), { ssr: false });
