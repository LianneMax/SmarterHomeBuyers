"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Drawer,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";

const LATEST_VIDEO = {
  id: "JjEbd-vSZV4",
  title: "How To Get Prequalified For A Home Loan",
};

function MiniCalculator() {
  const [loan, setLoan] = useState("400000");
  const [rate, setRate] = useState("7.0");
  const [term, setTerm] = useState("30");

  const monthly = (() => {
    const P = parseFloat(loan.replace(/,/g, "")) || 0;
    const r = (parseFloat(rate) || 0) / 100 / 12;
    const n = (parseFloat(term) || 30) * 12;
    if (!P || !r) return 0;
    return P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  })();

  const fmt = (n: number) =>
    n > 0 ? n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }) : "—";

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.5rem 0.65rem",
    borderRadius: "8px",
    border: "1.5px solid var(--border)",
    background: "var(--white)",
    fontSize: "0.85rem",
    color: "var(--text-dark)",
    fontFamily: "var(--font-body)",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.67rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "var(--text-muted)",
    marginBottom: "0.3rem",
    display: "block",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      <div>
        <label style={labelStyle}>Loan Amount</label>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: "0.65rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontSize: "0.85rem" }}>$</span>
          <input
            type="number"
            value={loan}
            onChange={(e) => setLoan(e.target.value)}
            style={{ ...inputStyle, paddingLeft: "1.4rem" }}
            placeholder="400000"
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem" }}>
        <div>
          <label style={labelStyle}>Interest Rate</label>
          <div style={{ position: "relative" }}>
            <input
              type="number"
              value={rate}
              step="0.1"
              onChange={(e) => setRate(e.target.value)}
              style={{ ...inputStyle, paddingRight: "1.6rem" }}
              placeholder="7.0"
            />
            <span style={{ position: "absolute", right: "0.65rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontSize: "0.85rem" }}>%</span>
          </div>
        </div>
        <div>
          <label style={labelStyle}>Loan Term</label>
          <select
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="10">10 yr</option>
            <option value="15">15 yr</option>
            <option value="20">20 yr</option>
            <option value="30">30 yr</option>
          </select>
        </div>
      </div>

      <div style={{
        background: "var(--teal-dark)",
        borderRadius: "10px",
        padding: "0.85rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>Est. Monthly Payment</span>
        <motion.span
          key={fmt(monthly)}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--white)", fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
        >
          {fmt(monthly)}
        </motion.span>
      </div>

      <p style={{ fontSize: "0.68rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
        Principal &amp; interest only. Does not include taxes, insurance, or HOA.
      </p>
    </div>
  );
}

function VideoThumb() {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ position: "relative", borderRadius: "10px", overflow: "hidden", aspectRatio: "16/9", background: "var(--teal-mist)" }}>
      {playing ? (
        <iframe
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          src={`https://www.youtube.com/embed/${LATEST_VIDEO.id}?autoplay=1&rel=0`}
          title={LATEST_VIDEO.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", background: "none", cursor: "pointer", padding: 0 }}
          aria-label="Play video"
        >
          <Image
            src={`https://img.youtube.com/vi/${LATEST_VIDEO.id}/maxresdefault.jpg`}
            alt={LATEST_VIDEO.title}
            fill
            sizes="480px"
            style={{ objectFit: "cover" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(17,28,33,0.75) 0%, transparent 60%)",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "0.85rem 1rem", gap: "0.5rem",
          }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "50%",
              background: "rgba(255,255,255,0.92)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--teal-dark)">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
            <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--white)", lineHeight: 1.35, margin: 0 }}>
              {LATEST_VIDEO.title}
            </p>
          </div>
        </button>
      )}
    </div>
  );
}

export default function StartupDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("drawer-seen")) return;
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("drawer-seen", "1");
  };

  return (
    <Drawer open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DrawerContent
        style={{
          background: "var(--sand)",
          borderTop: "1.5px solid var(--border)",
          maxHeight: "92svh",
          outline: "none",
        }}
      >
        <div style={{ overflowY: "auto", padding: "1.5rem 1.5rem 2rem", maxWidth: "860px", margin: "0 auto", width: "100%" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
            <div>
              <p style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--teal-mid)", marginBottom: "0.2rem" }}>
                Smarter Home Buyers
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 700, color: "var(--text-dark)", letterSpacing: "-0.02em" }}>
                Quick Tools
              </h2>
            </div>
            <DrawerClose asChild>
              <button
                onClick={handleClose}
                style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: "var(--white)", border: "1.5px solid var(--border)",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-muted)", flexShrink: 0,
                }}
                aria-label="Close"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </DrawerClose>
          </div>

          {/* Two-column grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>

            {/* Video card */}
            <div style={{ background: "var(--white)", borderRadius: "16px", border: "1.5px solid var(--border)", padding: "1.1rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: "#FF000015", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path fill="#FF0000" d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                  </svg>
                </div>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-dark)" }}>Latest Video</span>
              </div>
              <VideoThumb />
              <a
                href={`https://www.youtube.com/watch?v=${LATEST_VIDEO.id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.78rem", color: "var(--teal-mid)", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "0.3rem" }}
              >
                Watch on YouTube
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>

            {/* Calculator card */}
            <div style={{ background: "var(--white)", borderRadius: "16px", border: "1.5px solid var(--border)", padding: "1.1rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: "var(--teal-pale)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--teal-mid)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2"/>
                    <line x1="8" y1="6" x2="16" y2="6"/>
                    <line x1="8" y1="10" x2="10" y2="10"/>
                    <line x1="14" y1="10" x2="16" y2="10"/>
                    <line x1="8" y1="14" x2="10" y2="14"/>
                    <line x1="14" y1="14" x2="16" y2="14"/>
                    <line x1="8" y1="18" x2="10" y2="18"/>
                    <line x1="14" y1="18" x2="16" y2="18"/>
                  </svg>
                </div>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-dark)" }}>Mortgage Calculator</span>
              </div>
              <MiniCalculator />
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              href="/calculators"
              onClick={handleClose}
              style={{
                flex: 1,
                minWidth: "180px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.45rem",
                padding: "0.75rem 1.5rem",
                background: "var(--teal-dark)",
                color: "var(--white)",
                borderRadius: "8px",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              All Calculators
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <DrawerClose asChild>
              <button
                onClick={handleClose}
                style={{
                  flex: 1,
                  minWidth: "140px",
                  padding: "0.75rem 1.5rem",
                  background: "transparent",
                  color: "var(--text-muted)",
                  border: "1.5px solid var(--border)",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                }}
              >
                Maybe Later
              </button>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
