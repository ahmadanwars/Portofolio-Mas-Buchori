"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerWrapper}`}>
        <div className={styles.topRow}>
          <div className={styles.brand}>{personal.brandName}</div>

          <ul className={styles.footerNav}>

            <li><Link href="#certificates" className={styles.footerLink}>Sertifikat</Link></li>
            <li><Link href="#skills" className={styles.footerLink}>Keahlian</Link></li>
            <li><Link href="#experience" className={styles.footerLink}>Pengalaman</Link></li>
            <li><Link href="#contact" className={styles.footerLink}>Kontak</Link></li>
          </ul>
        </div>

        <div className={styles.bottomRow}>
          <button onClick={scrollToTop} className={styles.backToTop}>
            <span>Kembali ke atas</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
