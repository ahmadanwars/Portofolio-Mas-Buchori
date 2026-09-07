import styles from "./About.module.css";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.metaInfoContainer}>
          <div className={styles.metaInfoGrid}>
            {/* Pengalaman */}
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <span className={styles.infoLabel}>Pengalaman</span>
                <span className={styles.infoIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </span>
              </div>
              <span className={styles.infoValue}>15+ Tahun (Telkom Akses)</span>
            </div>

            {/* Posisi Terakhir */}
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <span className={styles.infoLabel}>Posisi Terakhir</span>
                <span className={styles.infoIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
              </div>
              <span className={styles.infoValue}>Team Leader Telkom Akses</span>
            </div>

            {/* Domisili & Penugasan */}
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <span className={styles.infoLabel}>Domisili & Penugasan</span>
                <span className={styles.infoIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
              </div>
              <span className={styles.infoValue}>{personal.location}</span>
            </div>

            {/* Status Ketersediaan */}
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <span className={styles.infoLabel}>Status Ketersediaan</span>
                <span className={styles.infoIcon} style={{ color: "var(--accent-emerald)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </span>
              </div>
              <span className={styles.infoValue} style={{ color: "var(--accent-emerald)" }}>
                Siap Bergabung Segera
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
