"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const FALLBACK = { id: "JjEbd-vSZV4", title: "How To Get Prequalified For A Home Loan" };

const drawerVariants = {
  hidden: { y: "100%", opacity: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  visible: {
    y: 0, opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30, mass: 0.8, staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 } },
};

function VideoPanel({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: "0.55rem" }}>
      <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
        Latest Video
      </span>

      <div style={{ position: "relative", borderRadius: "10px", overflow: "hidden", width: "100%", aspectRatio: "16/9", background: "var(--teal-mist)", flexShrink: 0 }}>
        {playing ? (
          <iframe
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", background: "none", cursor: "pointer", padding: 0 }}
            aria-label={`Play: ${title}`}
          >
            <Image
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              alt={title}
              fill
              sizes="260px"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,28,33,0.88) 0%, rgba(17,28,33,0.1) 55%, transparent 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0.65rem" }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.4rem" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--teal-dark)"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--white)", lineHeight: 1.3, margin: 0 }}>{title}</p>
            </div>
          </button>
        )}
      </div>

      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.55, flex: 1 }}>
        Free education on YouTube — home buying, loans, and market updates explained simply.
      </p>

      <a
        href={`https://www.youtube.com/@DarrenTsai_`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.65rem 1rem", background: "var(--teal-dark)", color: "var(--white)", borderRadius: "8px", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}
      >
        Visit Channel
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
        </svg>
      </a>
    </div>
  );
}

function CalcPanel() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: "0.75rem" }}>
      <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
        Mortgage Calculator
      </span>
      <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--teal-pale)", color: "var(--teal-mid)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2"/>
          <line x1="8" y1="6" x2="16" y2="6"/>
          <line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/>
          <line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/>
          <line x1="8" y1="18" x2="10" y2="18"/><line x1="14" y1="18" x2="16" y2="18"/>
        </svg>
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 700, color: "var(--text-dark)", lineHeight: 1.3, marginBottom: "0.45rem" }}>
          Plan your payment before you apply.
        </p>
        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
          Estimate your monthly payment, compare loan types, and see how rate changes affect your costs — before you fill out an application.
        </p>
      </div>
      <a
        href="https://www.realdarrentsai.com/mortgage-calculator"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.65rem 1rem", background: "var(--teal-dark)", color: "var(--white)", borderRadius: "8px", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}
      >
        Open Calculator
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
        </svg>
      </a>
    </div>
  );
}

export default function StartupDrawer() {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState(FALLBACK);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    fetch("/api/latest-video")
      .then(r => r.json())
      .then(data => { if (data.id) setVideo(data); })
      .catch(() => {});
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(17,28,33,0.5)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}
          />

          {/* Drawer — pinned to bottom center */}
          <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", zIndex: 1000, width: "calc(100% - 2rem)", maxWidth: "560px" }}>
            <motion.div
              key="drawer"
              variants={drawerVariants as any}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{ background: "var(--sand)", borderRadius: "20px 20px 0 0", border: "1.5px solid var(--border)", borderBottom: "none", boxShadow: "0 -8px 48px rgba(0,0,0,0.18)", padding: "0.5rem 1.1rem 1.25rem" }}
            >
              {/* Drag handle */}
              <div style={{ width: 40, height: 4, borderRadius: 9999, background: "var(--border)", margin: "0 auto 0.85rem" }} />

              {/* Header */}
              <motion.div variants={itemVariants as any} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem" }}>
                <div>
                  <p style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--teal-mid)", marginBottom: "0.15rem" }}>
                    Smarter Home Buyers
                  </p>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--text-dark)", letterSpacing: "-0.01em", margin: 0 }}>
                    Quick Tools
                  </h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  aria-label="Close"
                  style={{ width: "30px", height: "30px", borderRadius: "50%", background: "var(--white)", border: "1.5px solid var(--border)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", flexShrink: 0 }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </motion.button>
              </motion.div>

              {/* Cards */}
              <motion.div
                variants={itemVariants as any}
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.75rem" }}
              >
                <div style={{ background: "var(--white)", borderRadius: "12px", border: "1.5px solid var(--border)", padding: "0.8rem", display: "flex", flexDirection: "column" }}>
                  <VideoPanel id={video.id} title={video.title} />
                </div>
                <div style={{ background: "var(--white)", borderRadius: "12px", border: "1.5px solid var(--border)", padding: "0.8rem", display: "flex", flexDirection: "column" }}>
                  <CalcPanel />
                </div>
              </motion.div>

              {/* Dismiss */}
              <motion.button
                variants={itemVariants as any}
                onClick={handleClose}
                style={{ width: "100%", padding: "0.58rem", background: "transparent", color: "var(--text-muted)", border: "1.5px solid var(--border)", borderRadius: "8px", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", fontFamily: "var(--font-body)" }}
              >
                Maybe Later
              </motion.button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
