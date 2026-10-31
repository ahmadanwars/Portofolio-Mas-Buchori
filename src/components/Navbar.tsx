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
                Prestasi
              </Link>
            </li>
            <li>
              <Link href="#documentation" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Dokumentasi
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
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
