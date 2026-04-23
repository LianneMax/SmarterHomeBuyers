"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./VideoSection.module.css";

const FEATURED = {
  id: "xds3hsK1Oqo",
  title: "How To Get Prequalified For A Home Loan",
  label: "Start Here",
};

const SECONDARY = [
  { id: "RbpStZHnPCI", title: "VA vs Conventional — Which Loan Is Right for You?" },
  { id: "E-5uS0c8kYs", title: "How To Buy A House In 2024: 5 Steps" },
  { id: "rjCXXDPljE4", title: "5 Mortgage Mistakes That Cost You Thousands" },
];

function VideoCard({
  id,
  title,
  label,
  large = false,
}: {
  id: string;
  title: string;
  label?: string;
  large?: boolean;
}) {
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
            sizes={large ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
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

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <div className={styles.tag}>Free Education</div>
          <h2 className={styles.heading}>Yes, you can buy a house.</h2>
          <div className={styles.headerRow}>
            <p className={styles.sub}>
              Darren breaks down the whole process — free, on YouTube, no fluff.
            </p>
            <a
              href="https://www.youtube.com/@DarrenTsai_"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              Visit the Channel
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
      </div>
    </section>
  );
}
