"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Reviews.module.css";

const REVIEWS = [
  { id: 1,  initials: "EW", name: "Edward W.",   category: "Home Purchase",               text: "Darren went above and beyond to help us with a home purchase. He gave us quality time, and ran multiple scenarios to find what worked best for us. There were complications with our close on the sellers side, and he handled the obstacles easily. Everything he did for us was extremely transparent, and purposeful. Darren is super trustworthy, and honest. Thanks Darren!" },
  { id: 2,  initials: "ES", name: "Ernesto S.",   category: "Purchase Loan",               text: "Darren, went above and beyond to get us the best rate. He is honest and straightforward. Darren kept communication open throughout the process. I highly recommend Darren to anyone looking for a broker and will be working with Darren in the future." },
  { id: 3,  initials: "DA", name: "Donovan A.",   category: "Home Purchase & Refinance",   text: "Darren is the man! Darren is someone who has helped my wife & I a couple times now. First was our first home buying experience & from the jump, he made things easy to understand & was easy to work with. Darren has now recently assisted my wife & I with our refinance & again, service was great. He's patient, knowledgeable & makes you feel like you're always in good hands. I recommend working with Darren as I will continue to do so myself." },
  { id: 4,  initials: "AW", name: "Angela W.",    category: "Purchase Loan",               text: "Worked with Darren because I found him on YouTube! He has some good content on there. Anyways, he's amazing! And will go above and beyond to have all questions answered and if he doesn't know, he will find out and get back to you promptly. He's responsive and very knowledgeable. I will definitely work with him again and have referred my parents for an upcoming ADU project." },
  { id: 5,  initials: "FY", name: "Fen Y C.",     category: "Refinance",                   text: "Just closed on a refinance with Darren. He was so helpful throughout the whole process to my wife and I. Darren was very transparent and let us know everything that was going on. Ran into a few hiccups along the way, but Darren and Kim were able to take care of it without hassling us too much, which was a blessing. Thanks, Darren and Kim!" },
  { id: 6,  initials: "LJ", name: "Lety J.",      category: "Broker Services",             text: "It was great working with Darren. I highly recommend him, as he was very quick to respond to all the questions we had. He would always keep us in the loop in every step of the process and was also straightforward with everything that we needed to know. He has a great attitude and made us work comfortable with him." },
  { id: 7,  initials: "PP", name: "Paul P.",      category: "Transaction · REALTOR®",      text: "I recently worked with Darren Tsai at Saxton Mortgage on a transaction, and the entire process was very smooth from start to finish. Darren was professional, responsive, and proactive throughout escrow. Communication was clear and consistent, which helped ensure we stayed on track and closed without issues. It's always a pleasure working with a lender who understands timelines and works efficiently with all parties involved. I look forward to working together again on future transactions. — Paul Phan, REALTOR®" },
  { id: 8,  initials: "LP", name: "Lauren P.",    category: "Home Purchase · 18-day close", text: "Darren and his team were great to work with! They were communicative and efficient. They helped us close in 18 days! I would recommend them to anyone looking to buy a new home." },
  { id: 9,  initials: "ZB", name: "Zenebe B.",    category: "Birdeye Review",              text: "I'm so honored and blessed to have met and worked with Darren Tsai, Sam Hsu and Kim Miller. Honestly one of the best group of people to work with. The process was so smooth and effortless. They never pressure you and always there to answer all my questions. I will definitely be working with them in the near future and I would highly recommend them. Don't waste your time looking elsewhere. This is the company to work with." },
];

const AVATAR_COLORS = ["#4285F4","#EA4335","#34A853","#9C27B0","#FF5722","#00ACC1","#E91E63","#3F51B5","#F4511E"];
const STARS = "★★★★★";
const CHAR_LIMIT = 190;
const INTERVAL_MS = 5000;

type Review = typeof REVIEWS[number];

function getPerPage() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth <= 700) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 3;
}

export default function Reviews() {
  const headerRef   = useScrollReveal<HTMLDivElement>();
  const carouselRef = useScrollReveal<HTMLDivElement>(80);

  const [perPage, setPerPage] = useState(getPerPage);
  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [expandedReview, setExpandedReview] = useState<Review | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxPos    = Math.max(0, REVIEWS.length - perPage);
  const loopSlides = [...REVIEWS, ...REVIEWS.slice(0, perPage)];

  useEffect(() => {
    setPerPage(getPerPage());
  }, []);

  useEffect(() => {
    const handler = () => {
      const next = getPerPage();
      setPerPage((prev) => {
        if (prev !== next) { setCurrent(0); setAnimated(false); }
        return next;
      });
    };
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    if (!expandedReview) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setExpandedReview(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [expandedReview]);

  useEffect(() => {
    document.body.style.overflow = expandedReview ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [expandedReview]);

  useEffect(() => {
    if (current > maxPos) {
      const t = setTimeout(() => { setAnimated(false); setCurrent(0); }, 500);
      return () => clearTimeout(t);
    }
  }, [current, maxPos]);

  useEffect(() => {
    if (!animated) {
      const t = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
      return () => cancelAnimationFrame(t);
    }
  }, [animated]);

  const advance = () => setCurrent((prev) => prev + 1);

  const resetTimer = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const clamped = ((idx % (maxPos + 1)) + maxPos + 1) % (maxPos + 1);
    setCurrent(clamped);
    timerRef.current = setInterval(advance, INTERVAL_MS);
  };

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <>
      <section id="reviews" className={styles.section}>
        <div className={styles.container}>
          <div ref={headerRef} className={`${styles.header} reveal`}>
            <span className={styles.eyebrow}>Client Reviews</span>
            <h2 className={styles.heading}>What Homeowners Are Saying</h2>
            <p className={styles.sub}>Real results from real clients. Straight talk, no pressure, and savings that actually show up on your bank statement.</p>
          </div>

          <div ref={carouselRef} className="reveal">
            <div className={styles.carousel}>
              <div
                className={styles.track}
                style={{
                  transform: `translateX(-${current * (100 / perPage)}%)`,
                  transition: animated ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
                }}
              >
                {loopSlides.map((r, i) => {
                  const isTruncated = r.text.length > CHAR_LIMIT;
                  const displayText = isTruncated ? r.text.slice(0, CHAR_LIMIT).trimEnd() + "…" : r.text;
                  return (
                    <div key={`${r.id}-${i}`} className={styles.slide} style={{ minWidth: `${100 / perPage}%` }}>
                      <div className={styles.card}>
                        <div className={styles.stars} aria-label="5 out of 5 stars">
                          {STARS.split("").map((s, j) => <span key={j} className={styles.star}>{s}</span>)}
                        </div>
                        <div className={styles.quoteWrap}>
                          <p className={styles.quote}>&ldquo;{displayText}&rdquo;</p>
                          {isTruncated && (
                            <button className={styles.seeMore} onClick={() => setExpandedReview(r)}>
                              See more
                            </button>
                          )}
                        </div>
                        <div className={styles.author}>
                          <div className={styles.avatar} style={{ background: AVATAR_COLORS[(r.id - 1) % AVATAR_COLORS.length] }}>
                            {r.initials}
                          </div>
                          <div>
                            <p className={styles.name}>{r.name}</p>
                            <p className={styles.meta}>{r.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.nav}>
              <button className={styles.navBtn} onClick={() => resetTimer(current - 1)} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className={styles.navBtn} onClick={() => resetTimer(current + 1)} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            <div className={styles.dots} role="tablist">
              {Array.from({ length: maxPos + 1 }, (_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                  onClick={() => resetTimer(i)}
                  aria-label={`Go to position ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {expandedReview && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" onClick={() => setExpandedReview(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setExpandedReview(null)} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className={styles.stars}>
              {STARS.split("").map((s, i) => <span key={i} className={styles.star}>{s}</span>)}
            </div>
            <p className={styles.modalQuote}>&ldquo;{expandedReview.text}&rdquo;</p>
            <div className={styles.author} style={{ marginTop: "20px" }}>
              <div className={styles.avatar} style={{ background: AVATAR_COLORS[(expandedReview.id - 1) % AVATAR_COLORS.length] }}>
                {expandedReview.initials}
              </div>
              <div>
                <p className={styles.name}>{expandedReview.name}</p>
                <p className={styles.meta}>{expandedReview.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
