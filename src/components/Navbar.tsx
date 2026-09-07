"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const brand = portfolioData.personal.brandName || "Costa Banten";

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navWrapper}`}>
        <Link href="#hero" className={styles.brand}>
          <img
            src="/foto/foto profil.jpg"
            alt={brand}
            className={styles.brandLogoImg}
          />
          <span>{brand}</span>
        </Link>

        <nav>
          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>

            <li>
              <Link href="#certificates" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Sertifikat
              </Link>
            </li>
            <li>
              <Link href="#gallery" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Galeri Prestasi
              </Link>
            </li>
            <li>
              <Link href="#skills" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Keahlian
              </Link>
            </li>
            <li>
              <Link href="#experience" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Pengalaman
              </Link>
            </li>
            <li>
              <Link href="#contact" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Kontak
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.navActions}>
          <button
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Buka Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
