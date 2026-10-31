"use client";

import { useState } from "react";
import styles from "./Certificates.module.css";
import { portfolioData, CertificateItem } from "@/data/portfolioData";

export default function Certificates() {
  const { certificates } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const categories = ["Semua", "Teknis & Jaringan", "Security & K3", "Leadership & Team", "Budaya BUMN"];

  const filteredCerts =
    activeCategory === "Semua"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Sertifikat</span>
          <h2 className="section-title">
            Sertifikat & <span className="gradient-text">Kredensial Resmi</span>
          </h2>
          <p className="section-description">
            Koleksi sertifikat keahlian teknis jaringan, keselamatan kerja K3, cyber security, budaya BUMN, dan kepemimpinan tim.
          </p>
        </div>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className={styles.certsGrid}>
          {filteredCerts.map((cert: CertificateItem) => (
            <div key={cert.id} className={`glass-card ${styles.certCard}`}>
              <div className={styles.cardTop}>
                <span className={styles.categoryTag}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                  <span>{cert.category}</span>
                </span>

                <h3 className={styles.certTitle}>{cert.title}</h3>

                <div className={styles.issuerRow}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>{cert.issuer}</span>
                </div>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.pdfPill}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  <span>{cert.pdfUrl.toLowerCase().endsWith('.pdf') ? 'PDF RESMI' : 'DOKUMEN RESMI'}</span>
                </div>

                <div className={styles.actionRow}>
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewBtn}
                  >
                    <span>{cert.pdfUrl.toLowerCase().endsWith('.pdf') ? 'Buka PDF' : 'Lihat Berkas'}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a
                    href={cert.pdfUrl}
                    download={cert.fileName}
                    className={styles.downloadBtn}
                    aria-label={`Unduh ${cert.title}`}
                    title="Unduh Berkas"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
