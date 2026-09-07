"use client";

import { useState } from "react";
import styles from "./Gallery.module.css";
import { portfolioData, PhotoItem } from "@/data/portfolioData";

export default function Gallery() {
  const { photos } = portfolioData;
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Dokumentasi & Prestasi</span>
          <h2 className="section-title">
            Rekam Jejak Prestasi <span className="gradient-text">di Telekomunikasi</span>
          </h2>
          <p className="section-description">
            Bentuk komitmen dan dedikasi tinggi kepada perusahaan sehingga tercapai pencapaian kerja.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {photos.map((photo: PhotoItem, idx) => (
            <div
              key={photo.id}
              className={`glass-card ${styles.photoCard} ${idx === 0 ? styles.primaryPhotoCard : ""}`}
              onClick={() => setSelectedPhoto(photo)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedPhoto(photo)}
              title="Klik untuk melihat foto ukuran penuh"
            >
              <div className={`${styles.imageWrapper} ${idx === 0 ? styles.aspectWide : styles.aspectTall}`}>
                <img
                  src={photo.imgUrl}
                  alt={photo.title}
                  className={styles.photoImg}
                  style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                  loading="lazy"
                />
                <span className={styles.badgeOverlay}>{photo.badge}</span>
                <div className={styles.zoomPrompt}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span>Lihat Penuh</span>
                </div>
              </div>

              <div className={styles.photoContent}>
                <h3 className={styles.photoTitle}>{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedPhoto(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedPhoto(null)}
              aria-label="Tutup foto"
            >
              ✕
            </button>
            <div className={styles.modalImageWrapper}>
              <img
                src={selectedPhoto.imgUrl}
                alt={selectedPhoto.title}
                className={styles.modalImg}
              />
            </div>
            <div className={styles.modalFooter}>
              <span className={styles.modalBadge}>{selectedPhoto.badge}</span>
              <h4 className={styles.modalTitle}>{selectedPhoto.title}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
