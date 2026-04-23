import Image from "next/image";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { label: "Privacy Policy",            href: "https://www.saxtonmortgage.com/privacy-policy" },
  { label: "Check my license at NMLS Consumer Access", href: "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/2438102" },
  { label: "Legal",                     href: "https://www.saxtonmortgage.com/legal" },
  { label: "Terms of Use",              href: "https://www.saxtonmortgage.com/terms-of-use" },
  { label: "Accessibility",             href: "https://www.saxtonmortgage.com/accessibility-statement" },
  { label: "Site Map",                  href: "https://www.saxtonmortgage.com/site-map" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.identity}>
            <div className={styles.avatar}>
              <Image src="/darren.jpg" alt="Darren Tsai" fill sizes="56px" className={styles.avatarImg} />
            </div>
            <div>
              <p className={styles.name}>Darren Tsai</p>
              <p className={styles.role}>Senior Loan Officer · Saxton Mortgage</p>
            </div>
          </div>

          <div className={styles.disclosures}>
            <p>Darren Tsai | NMLS #2438102 | CA DRE Broker #02103705</p>
            <p>Saxton Mortgage, LLC | NMLS #1717191</p>
            <p>
              Licensed in{" "}
              {["AZ","CA","FL","HI","OR","PA","TN","TX"].map((s, i, arr) => (
                <span key={s}>
                  <strong>{s}</strong>
                  {i < arr.length - 1 && <span className={styles.dot}> · </span>}
                </span>
              ))}
            </p>
            <p className={styles.dre}>
              Real Estate Broker, California Department of Real Estate. Loans made or arranged pursuant to California Department of Real Estate License.
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <a href="tel:+17148875432" className={styles.contactRow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5.05 2 2 0 0 1 3.58 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (714) 887-5432
          </a>
          <a href="mailto:darrent@saxtonmortgage.com" className={styles.contactRow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7L12 13 2 7" />
            </svg>
            darrent@saxtonmortgage.com
          </a>
          <a
            href="https://www.linkedin.com/in/soldwithtsai/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactRow}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <div className={styles.housingBadge}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Equal Housing Lender
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <p className={styles.copy}>© {new Date().getFullYear()} Darren Tsai. All rights reserved.</p>
        <p className={styles.disclaimer}>
          This is not a commitment to lend. All loans are subject to credit approval, underwriting, and property valuation. Equal Housing Opportunity.
        </p>
      </div>

      <div className={styles.legalLinks}>
        {FOOTER_LINKS.map((l, i) => (
          <span key={l.label} className={styles.legalItem}>
            <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
            {i < FOOTER_LINKS.length - 1 && <span className={styles.dot}>·</span>}
          </span>
        ))}
      </div>
    </footer>
  );
}
