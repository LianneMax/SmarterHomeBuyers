"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PlaylistFlipCard from "./kokonutui/playlist-flip-card";
import styles from "./VideoSection.module.css";

interface VideoCardProps {
  id: string;
  title: string;
  label?: string;
  large?: boolean;
}

interface PlaylistItem {
  title: string;
  description: string;
  url: string;
  gradient: string;
  badge: string;
  icon: ReactNode;
}

const FEATURED = {
  id: "JjEbd-vSZV4",
  title: "How To Get Prequalified For A Home Loan",
  label: "Start Here",
};

const SECONDARY = [
  { id: "TD1ahQAGkuQ", title: "VA vs Conventional: Which Loan Is Right for You?" },
  { id: "ulTVOMnOVS4", title: "How To Buy A House In 2024: 5 Steps" },
  { id: "I4sXpzq5AF0", title: "5 Mortgage Mistakes That Cost You Thousands" },
];

const PLAYLISTS: PlaylistItem[] = [
  {
    title: "Real Estate Market Updates & News",
    description: "Is now the right time to buy? Darren tracks rate shifts, market trends, and what they actually mean for your move.",
    url: "https://youtube.com/playlist?list=PLmNxrYNLvOsf4_9eI1odG0RtvvI7V0vzh&si=clU1r1HaNLokys0F",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
    badge: "Market Intel",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    title: "Maximizing Home Equity & Refinancing",
    description: "Already own? Cash-out, rate drops, smart refi timing. Make your equity work harder without getting burned.",
    url: "https://youtube.com/playlist?list=PLmNxrYNLvOsfX_sHuKsVtESbIeifmjDpa&si=cDKxnZXeubXsMTbG",
    gradient: "linear-gradient(135deg, #10B981 0%, #0891B2 100%)",
    badge: "For Owners",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "First-Time Home Buyer's Guide",
    description: "Never bought before? This is where you start. Pre-approval to closing day, every step covered, zero confusion.",
    url: "https://youtube.com/playlist?list=PLmNxrYNLvOsf0vIMZzpjHo6OGklQIw5T0&si=62_zqBkOcXKYR6",
    gradient: "linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)",
    badge: "Start Here",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
      </svg>
    ),
  },
];

function VideoCard({ id, title, label, large = false }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`${styles.card} ${large ? styles.large : ""}`}>
      {playing ? (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          className={styles.thumb}
          onClick={() => setPlaying(true)}
          aria-label={`Play: ${title}`}
        >
          <Image
            src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
            fill
            sizes={
              large
                ? "(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1100px) calc(100vw - 3rem), 1040px"
                : "(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1100px) calc((100vw - 5rem) / 3), 336px"
            }
            className={styles.thumbImg}
          />
          <div className={styles.overlay}>
            {label && <span className={styles.label}>{label}</span>}
            <div className={styles.play}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--teal-dark)">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <p className={styles.thumbTitle}>{title}</p>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ytLink}
            onClick={(e) => e.stopPropagation()}
          >
            Watch on YouTube ↗
          </a>
        </button>
      )}
    </div>
  );
}

export default function VideoSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const videosRef = useScrollReveal<HTMLDivElement>(80);
  const playlistsRef = useScrollReveal<HTMLDivElement>(80);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <div className={styles.tag}>Free Education</div>
          <h2 className={styles.heading}>Yes, you can buy a house.</h2>
          <div className={styles.headerRow}>
            <p className={styles.sub}>
              Darren breaks down the whole process, free on YouTube, no fluff.
            </p>
            <a
              href="https://www.youtube.com/@DarrenTsai_"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelBtn}
            >
              <span className={styles.ytDot} aria-hidden="true" />
              Visit the Channel
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        <div ref={videosRef} className="reveal">
          <VideoCard id={FEATURED.id} title={FEATURED.title} label={FEATURED.label} large />
          <div className={styles.grid}>
            {SECONDARY.map((v) => (
              <VideoCard key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        </div>

        {/* Playlists */}
        <div ref={playlistsRef} className={`${styles.playlistsSection} reveal`}>
          <div className={styles.playlistsHeader}>
            <h3 className={styles.playlistsTitle}>Browse the Series</h3>
            <p className={styles.playlistsSub}>Structured playlists for wherever you are in the journey.</p>
          </div>
          <div className={styles.playlistsGrid}>
            {PLAYLISTS.map((p) => (
              <PlaylistFlipCard
                key={p.title}
                title={p.title}
                description={p.description}
                badge={p.badge}
                gradient={p.gradient}
                url={p.url}
                icon={p.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
