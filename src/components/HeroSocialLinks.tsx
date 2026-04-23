"use client";

import { motion } from "motion/react";

const SOCIALS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@DarrenTsai_",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path fill="#FF0000" d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon fill="#FFFFFF" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
    color: "#FF0000",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/darrentsai_/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    color: "#E1306C",
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@darrentsai_/reposts",
    icon: (
      <svg width="18" height="18" viewBox="0 0 192 192" fill="currentColor">
        <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.695 8.453-15.363 9.899-26.3 5.942 3.586 10.338 8.309 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.35-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.195 47.292 9.642 32.788 28.08 19.882 44.485 13.224 67.315 13.01 95.932L13 96v.068c.214 28.617 6.872 51.447 19.778 67.852C47.292 182.358 68.882 191.805 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.189 18.963-18.945 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.944-24.723-24.553zm-47.565 42.289c-10.44.588-21.286-4.098-21.82-14.135-.397-7.442 5.296-15.746 22.461-16.735 1.966-.113 3.895-.169 5.79-.169 6.235 0 12.068.606 17.371 1.765-1.978 24.705-13.754 28.713-23.802 29.274z"/>
      </svg>
    ),
    color: "#000000",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/soldwithtsai/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    color: "#0A66C2",
  },
];

export default function HeroSocialLinks() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", justifyContent: "center" }}>
      {SOCIALS.map((s, i) => (
        <motion.a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.92 }}
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--white)",
            textDecoration: "none",
            backdropFilter: "blur(8px)",
            transition: "background 0.2s, border-color 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = `${s.color}22`;
            (e.currentTarget as HTMLElement).style.borderColor = `${s.color}55`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
          }}
        >
          {s.icon}
        </motion.a>
      ))}
    </div>
  );
}
