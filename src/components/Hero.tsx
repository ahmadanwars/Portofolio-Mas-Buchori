import Link from "next/link";
import styles from "./Hero.module.css";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal, contact } = portfolioData;

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroGrid}`}>
        {/* Kolom Informasi Diri */}
        <div className={styles.heroContent}>
          <div className={styles.statusIndicator}>
            <span className={styles.statusDot}></span>
            <span>{personal.statusBadge}</span>
          </div>

          <h1 className={styles.headline}>
            Halo, Saya <span className="gradient-text">{personal.fullName}</span>
          </h1>


          <p className={styles.tagline}>
            {personal.tagline}
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#certificates" className={styles.primaryBtn}>
              <span>Sertifikat</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <a
              href={`https://wa.me/6282211697461`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Hubungi via WhatsApp
            </a>
          </div>

          <div className={styles.socialBar}>
            {contact.whatsapp && (
              <a
                href={`https://wa.me/6282211697461`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp"
                style={{ color: "#34d399" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            )}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className={styles.socialLink}
                aria-label="Kirim Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn Profile"
                style={{ color: "#38bdf8" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Kolom Foto Profil Profesional */}
        <div className={styles.profileCard}>
          <div className={styles.photoFrame}>
            <img
              src={personal.avatarUrl}
              alt={personal.fullName}
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
