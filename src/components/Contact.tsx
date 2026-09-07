import styles from "./Contact.module.css";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Hubungi Saya</span>
          <h2 className="section-title">
            Saluran Komunikasi <span className="gradient-text">Resmi</span>
          </h2>
          <p className="section-description">
            Silakan hubungi melalui salah satu saluran langsung di bawah ini untuk tawaran pekerjaan, penugasan operasional, atau kolaborasi.
          </p>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.contactGrid}>
            {/* WhatsApp */}
            <a
              href={`https://wa.me/6282211697461`}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card ${styles.contactCard}`}
            >
              <div
                className={styles.iconWrapper}
                style={{
                  color: "#34d399",
                  borderColor: "rgba(16, 185, 129, 0.4)",
                  background: "rgba(16, 185, 129, 0.12)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span className={styles.cardLabel}>WhatsApp Langsung</span>
              <span className={styles.cardValue}>{contact.whatsapp}</span>
              <span className={styles.cardAction}>
                <span>Buka Chat</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className={`glass-card ${styles.contactCard}`}
            >
              <div className={styles.iconWrapper}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span className={styles.cardLabel}>Email Resmi</span>
              <span className={styles.cardValue}>{contact.email}</span>
              <span className={styles.cardAction}>
                <span>Kirim Pesan</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card ${styles.contactCard}`}
            >
              <div
                className={styles.iconWrapper}
                style={{
                  color: "#38bdf8",
                  borderColor: "rgba(56, 189, 248, 0.4)",
                  background: "rgba(56, 189, 248, 0.12)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <span className={styles.cardLabel}>Profil LinkedIn</span>
              <span className={styles.cardValue}>tolesheet-work</span>
              <span className={styles.cardAction}>
                <span>Kunjungi Profil</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
