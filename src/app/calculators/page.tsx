"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./calculators.module.css";

function fmt(n: number) {
  return n > 0
    ? n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
    : "—";
}

/* ── Monthly Payment Calculator ── */
function PaymentCalc() {
  const [loan, setLoan] = useState("400000");
  const [rate, setRate] = useState("7.0");
  const [term, setTerm] = useState("30");
  const [tax, setTax] = useState("400");
  const [ins, setIns] = useState("120");

  const P = parseFloat(loan.replace(/,/g, "")) || 0;
  const r = (parseFloat(rate) || 0) / 100 / 12;
  const n = (parseFloat(term) || 30) * 12;
  const pi = P && r ? P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : 0;
  const total = pi + (parseFloat(tax) || 0) + (parseFloat(ins) || 0);

  return (
    <div className={styles.calcCard}>
      <div className={styles.calcHeader}>
        <div className={styles.calcIcon} style={{ background: "#3B82F615", color: "#3B82F6" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <div>
          <h3 className={styles.calcTitle}>Monthly Payment</h3>
          <p className={styles.calcSub}>Estimate your total monthly housing cost</p>
        </div>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label>Home Price / Loan Amount</label>
          <div className={styles.inputWrap}><span className={styles.prefix}>$</span><input type="number" value={loan} onChange={e => setLoan(e.target.value)} placeholder="400000"/></div>
        </div>
        <div className={styles.row2}>
          <div className={styles.field}>
            <label>Interest Rate</label>
            <div className={styles.inputWrap}><input type="number" step="0.1" value={rate} onChange={e => setRate(e.target.value)} placeholder="7.0"/><span className={styles.suffix}>%</span></div>
          </div>
          <div className={styles.field}>
            <label>Loan Term</label>
            <select value={term} onChange={e => setTerm(e.target.value)}>
              <option value="10">10 years</option>
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="30">30 years</option>
            </select>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.field}>
            <label>Property Tax / mo</label>
            <div className={styles.inputWrap}><span className={styles.prefix}>$</span><input type="number" value={tax} onChange={e => setTax(e.target.value)} placeholder="400"/></div>
          </div>
          <div className={styles.field}>
            <label>Insurance / mo</label>
            <div className={styles.inputWrap}><span className={styles.prefix}>$</span><input type="number" value={ins} onChange={e => setIns(e.target.value)} placeholder="120"/></div>
          </div>
        </div>
      </div>
      <div className={styles.result}>
        <div className={styles.resultRow}><span>Principal &amp; Interest</span><strong>{fmt(pi)}</strong></div>
        <div className={styles.resultRow}><span>Property Tax</span><strong>{fmt(parseFloat(tax) || 0)}</strong></div>
        <div className={styles.resultRow}><span>Insurance</span><strong>{fmt(parseFloat(ins) || 0)}</strong></div>
        <div className={styles.resultTotal}><span>Total Monthly</span><strong>{fmt(total)}</strong></div>
      </div>
    </div>
  );
}

/* ── Affordability Calculator ── */
function AffordabilityCalc() {
  const [income, setIncome] = useState("8000");
  const [debts, setDebts] = useState("500");
  const [rate, setRate] = useState("7.0");
  const [term, setTerm] = useState("30");
  const [down, setDown] = useState("20");

  const maxDebt = (parseFloat(income) || 0) * 0.43;
  const availablePI = maxDebt - (parseFloat(debts) || 0);
  const r = (parseFloat(rate) || 0) / 100 / 12;
  const n = (parseFloat(term) || 30) * 12;
  const maxLoan = r && availablePI > 0 ? availablePI * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)) : 0;
  const downAmt = (parseFloat(down) || 0) / 100;
  const maxPrice = downAmt < 1 ? maxLoan / (1 - downAmt) : maxLoan;

  return (
    <div className={styles.calcCard}>
      <div className={styles.calcHeader}>
        <div className={styles.calcIcon} style={{ background: "#22C55E15", color: "#22C55E" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
        </div>
        <div>
          <h3 className={styles.calcTitle}>Home Affordability</h3>
          <p className={styles.calcSub}>See how much home you can qualify for</p>
        </div>
      </div>
      <div className={styles.fields}>
        <div className={styles.row2}>
          <div className={styles.field}>
            <label>Gross Monthly Income</label>
            <div className={styles.inputWrap}><span className={styles.prefix}>$</span><input type="number" value={income} onChange={e => setIncome(e.target.value)} placeholder="8000"/></div>
          </div>
          <div className={styles.field}>
            <label>Monthly Debt Payments</label>
            <div className={styles.inputWrap}><span className={styles.prefix}>$</span><input type="number" value={debts} onChange={e => setDebts(e.target.value)} placeholder="500"/></div>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.field}>
            <label>Interest Rate</label>
            <div className={styles.inputWrap}><input type="number" step="0.1" value={rate} onChange={e => setRate(e.target.value)} placeholder="7.0"/><span className={styles.suffix}>%</span></div>
          </div>
          <div className={styles.field}>
            <label>Down Payment</label>
            <div className={styles.inputWrap}><input type="number" value={down} onChange={e => setDown(e.target.value)} placeholder="20"/><span className={styles.suffix}>%</span></div>
          </div>
        </div>
      </div>
      <div className={styles.result}>
        <div className={styles.resultRow}><span>Max Loan Amount</span><strong>{fmt(maxLoan)}</strong></div>
        <div className={styles.resultRow}><span>Down Payment ({down}%)</span><strong>{fmt(maxPrice - maxLoan)}</strong></div>
        <div className={styles.resultTotal}><span>Est. Home Price</span><strong>{fmt(maxPrice)}</strong></div>
      </div>
      <p className={styles.disclaimer}>Based on 43% DTI ratio. Actual approval depends on credit score and full financial profile.</p>
    </div>
  );
}

/* ── Refinance Break-Even ── */
function RefinanceCalc() {
  const [balance, setBalance] = useState("350000");
  const [currentRate, setCurrentRate] = useState("7.5");
  const [newRate, setNewRate] = useState("6.5");
  const [closingCosts, setClosingCosts] = useState("5000");
  const [term, setTerm] = useState("30");

  const r1 = (parseFloat(currentRate) || 0) / 100 / 12;
  const r2 = (parseFloat(newRate) || 0) / 100 / 12;
  const n = (parseFloat(term) || 30) * 12;
  const P = parseFloat(balance.replace(/,/g, "")) || 0;
  const pay1 = r1 && P ? P * (r1 * Math.pow(1 + r1, n)) / (Math.pow(1 + r1, n) - 1) : 0;
  const pay2 = r2 && P ? P * (r2 * Math.pow(1 + r2, n)) / (Math.pow(1 + r2, n) - 1) : 0;
  const savings = pay1 - pay2;
  const cc = parseFloat(closingCosts.replace(/,/g, "")) || 0;
  const breakEven = savings > 0 ? Math.ceil(cc / savings) : 0;

  return (
    <div className={styles.calcCard}>
      <div className={styles.calcHeader}>
        <div className={styles.calcIcon} style={{ background: "#F9731615", color: "#F97316" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
          </svg>
        </div>
        <div>
          <h3 className={styles.calcTitle}>Refinance Break-Even</h3>
          <p className={styles.calcSub}>Is now the right time to refinance?</p>
        </div>
      </div>
      <div className={styles.fields}>
        <div className={styles.row2}>
          <div className={styles.field}>
            <label>Current Loan Balance</label>
            <div className={styles.inputWrap}><span className={styles.prefix}>$</span><input type="number" value={balance} onChange={e => setBalance(e.target.value)} placeholder="350000"/></div>
          </div>
          <div className={styles.field}>
            <label>Closing Costs</label>
            <div className={styles.inputWrap}><span className={styles.prefix}>$</span><input type="number" value={closingCosts} onChange={e => setClosingCosts(e.target.value)} placeholder="5000"/></div>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.field}>
            <label>Current Rate</label>
            <div className={styles.inputWrap}><input type="number" step="0.1" value={currentRate} onChange={e => setCurrentRate(e.target.value)} placeholder="7.5"/><span className={styles.suffix}>%</span></div>
          </div>
          <div className={styles.field}>
            <label>New Rate</label>
            <div className={styles.inputWrap}><input type="number" step="0.1" value={newRate} onChange={e => setNewRate(e.target.value)} placeholder="6.5"/><span className={styles.suffix}>%</span></div>
          </div>
        </div>
      </div>
      <div className={styles.result}>
        <div className={styles.resultRow}><span>Current Payment</span><strong>{fmt(pay1)}</strong></div>
        <div className={styles.resultRow}><span>New Payment</span><strong>{fmt(pay2)}</strong></div>
        <div className={styles.resultRow}><span>Monthly Savings</span><strong style={{ color: savings > 0 ? "#22C55E" : "var(--text-muted)" }}>{savings > 0 ? fmt(savings) : "—"}</strong></div>
        <div className={styles.resultTotal}><span>Break-Even</span><strong>{breakEven > 0 ? `${breakEven} months` : "—"}</strong></div>
      </div>
    </div>
  );
}

/* ── Down Payment / PMI ── */
function DownPaymentCalc() {
  const [price, setPrice] = useState("500000");
  const [down, setDown] = useState("10");

  const P = parseFloat(price.replace(/,/g, "")) || 0;
  const pct = (parseFloat(down) || 0) / 100;
  const downAmt = P * pct;
  const loan = P - downAmt;
  const needsPMI = pct < 0.2;
  const pmi = needsPMI ? (loan * 0.008) / 12 : 0;

  return (
    <div className={styles.calcCard}>
      <div className={styles.calcHeader}>
        <div className={styles.calcIcon} style={{ background: "#A855F715", color: "#A855F7" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
          </svg>
        </div>
        <div>
          <h3 className={styles.calcTitle}>Down Payment &amp; PMI</h3>
          <p className={styles.calcSub}>Plan your down payment and avoid PMI</p>
        </div>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label>Home Purchase Price</label>
          <div className={styles.inputWrap}><span className={styles.prefix}>$</span><input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="500000"/></div>
        </div>
        <div className={styles.field}>
          <label>Down Payment Percentage</label>
          <div className={styles.inputWrap}><input type="range" min="3" max="50" value={down} onChange={e => setDown(e.target.value)} style={{ flex: 1, accentColor: "var(--teal-mid)" }}/><span style={{ minWidth: "3rem", textAlign: "right", fontWeight: 700, color: "var(--teal-mid)" }}>{down}%</span></div>
        </div>
      </div>
      <div className={styles.result}>
        <div className={styles.resultRow}><span>Down Payment</span><strong>{fmt(downAmt)}</strong></div>
        <div className={styles.resultRow}><span>Loan Amount</span><strong>{fmt(loan)}</strong></div>
        {needsPMI && <div className={styles.resultRow}><span>Est. PMI / mo</span><strong style={{ color: "#F97316" }}>{fmt(pmi)}</strong></div>}
        <div className={styles.resultTotal}>
          <span>{needsPMI ? "PMI Required" : "PMI Not Required ✓"}</span>
          <strong style={{ color: needsPMI ? "#F97316" : "#22C55E" }}>
            {needsPMI ? `Need ${fmt(P * 0.2 - downAmt)} more` : "Great choice"}
          </strong>
        </div>
      </div>
      {needsPMI && <p className={styles.disclaimer}>PMI estimated at 0.8% annually. Removed once you reach 20% equity.</p>}
    </div>
  );
}

export default function CalculatorsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        {/* Header */}
        <div className={styles.pageHeader}>
          <Link href="/" className={styles.back}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back
          </Link>
          <div className={styles.tag}>Free Tools</div>
          <h1 className={styles.pageTitle}>Mortgage Calculators</h1>
          <p className={styles.pageSub}>
            Crunch the numbers before you commit. All calculators are free — no sign-up, no strings attached.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          <PaymentCalc />
          <AffordabilityCalc />
          <RefinanceCalc />
          <DownPaymentCalc />
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>Numbers looking good? Let's make it official.</p>
          <div className={styles.ctaBtns}>
            <a href="https://apply.saxtoncorp.com/darren-tsai" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>Apply Now</a>
            <a href="https://calendly.com/darrent-saxtonmortgage/15min" target="_blank" rel="noopener noreferrer" className={styles.ctaOutline}>Book a Free Call</a>
          </div>
        </div>
      </div>
    </div>
  );
}
