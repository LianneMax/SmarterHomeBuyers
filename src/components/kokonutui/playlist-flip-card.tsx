"use client";

import { useState } from "react";

export interface PlaylistFlipCardProps {
  title: string;
  description: string;
  badge: string;
  gradient: string;
  url: string;
  icon: React.ReactNode;
}

export default function PlaylistFlipCard({
  title,
  description,
  badge,
  gradient,
  url,
  icon,
}: PlaylistFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{ position: "relative", height: "280px", width: "100%", perspective: "2000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Inner rotating container */}
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── Front face ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
            borderRadius: "16px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: "column",
            opacity: isFlipped ? 0 : 1,
            transition: "opacity 0.35s ease",
          }}
        >
          {/* Gradient banner */}
          <div
            style={{
              background: gradient,
              height: "100px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 1.4rem",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.9)" }}>{icon}</span>
            <span style={{
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.92)",
              background: "rgba(0,0,0,0.22)",
              padding: "0.22rem 0.65rem",
              borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              {badge}
            </span>
          </div>

          {/* Title + hint */}
          <div style={{
            padding: "1.2rem 1.4rem",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between",
          }}>
            <p style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--white)",
              lineHeight: 1.4,
              margin: 0,
              transition: "transform 0.5s ease",
              transform: isFlipped ? "translateY(-3px)" : "translateY(0)",
            }}>
              {title}
            </p>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "rgba(255,255,255,0.38)",
              marginTop: "0.75rem",
            }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Hover to explore
              </span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>

        {/* ── Back face ── */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            flexDirection: "column",
            padding: "1.25rem 1.4rem",
            textDecoration: "none",
            opacity: isFlipped ? 1 : 0,
            transition: "opacity 0.35s ease 0.2s",
          }}
        >
          {/* Gradient top bar */}
          <div style={{
            height: "3px",
            borderRadius: "9999px",
            background: gradient,
            flexShrink: 0,
            marginBottom: "1rem",
          }} />

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <p style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--white)",
              lineHeight: 1.35,
              margin: 0,
            }}>
              {title}
            </p>
            <p style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.52)",
              lineHeight: 1.65,
              margin: 0,
              transform: isFlipped ? "translateX(0)" : "translateX(-8px)",
              opacity: isFlipped ? 1 : 0,
              transition: "transform 0.5s ease 0.25s, opacity 0.5s ease 0.25s",
            }}>
              {description}
            </p>
          </div>

          {/* CTA button */}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              padding: "0.65rem 0.9rem",
              flexShrink: 0,
              transition: "background 0.2s",
            }}
          >
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "var(--white)",
            }}>
              Watch Playlist
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
