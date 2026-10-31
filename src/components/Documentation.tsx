"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import styles from "./Documentation.module.css";
import { portfolioData, PhotoItem } from "@/data/portfolioData";

export default function Documentation() {
  const { activities } = portfolioData;
  const [activeTab, setActiveTab] = useState<"all" | "harian" | "rapat">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const harianItems = useMemo(
    () => (activities ? activities.filter((item) => item.category === "harian") : []),
    [activities]
  );

  const rapatItems = useMemo(
    () => (activities ? activities.filter((item) => item.category === "rapat") : []),
    [activities]
  );

  // Active pool of photos for the lightbox slider
  const currentPool = useMemo(() => {
    if (activeTab === "harian") return harianItems;
    if (activeTab === "rapat") return rapatItems;
    return activities || [];
  }, [activeTab, harianItems, rapatItems, activities]);

  const selectedIndex = useMemo(() => {
    if (!selectedPhoto) return -1;
    return currentPool.findIndex((item) => item.id === selectedPhoto.id);
  }, [selectedPhoto, currentPool]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === -1 || currentPool.length === 0) return;
    const nextIdx = selectedIndex > 0 ? selectedIndex - 1 : currentPool.length - 1;
    setSelectedPhoto(currentPool[nextIdx]);
  }, [selectedIndex, currentPool]);

  const handleNext = useCallback(() => {
    if (selectedIndex === -1 || currentPool.length === 0) return;
    const nextIdx = selectedIndex < currentPool.length - 1 ? selectedIndex + 1 : 0;
    setSelectedPhoto(currentPool[nextIdx]);
  }, [selectedIndex, currentPool]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, handlePrev, handleNext]);

  const renderGrid = (items: PhotoItem[]) => (
    <div className={styles.galleryGrid}>
      {items.map((item) => (
        <div
          key={item.id}
          className={`glass-card ${styles.photoCard}`}
          onClick={() => setSelectedPhoto(item)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setSelectedPhoto(item)}
          title="Klik untuk melihat foto ukuran penuh"
        >
          <div className={styles.imageWrapper}>
            <img
              src={item.imgUrl}
              alt={item.title}
              className={styles.photoImg}
              style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
              loading="lazy"
            />
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
        </div>
      ))}
    </div>
  );

  return (
    <section id="documentation" className={`section ${styles.docSection}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Dokumentasi</span>
          <h2 className="section-title">
            Dokumentasi <span className="gradient-text">Kegiatan Harian</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterTabs}>
          <button
            className={`${styles.tabButton} ${activeTab === "all" ? styles.tabButtonActive : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <span>Semua Foto</span>
            <span className={styles.tabCount}>{activities?.length || 0}</span>
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "harian" ? styles.tabButtonActive : ""}`}
            onClick={() => setActiveTab("harian")}
          >
            <span>📋 Persiapan Harian</span>
            <span className={styles.tabCount}>{harianItems.length}</span>
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "rapat" ? styles.tabButtonActive : ""}`}
            onClick={() => setActiveTab("rapat")}
          >
            <span>💼 Rapat</span>
            <span className={styles.tabCount}>{rapatItems.length}</span>
          </button>
        </div>

        {/* Content based on Active Tab */}
        {activeTab === "all" && (
          <>
            {/* Kelompok 1: Kegiatan Persiapan Harian */}
            <div className={styles.groupBlock}>
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                </span>
                <h3 className={styles.groupTitle}>Kegiatan Persiapan Harian</h3>
                <span className={styles.groupBadge}>{harianItems.length} Foto</span>
              </div>
              {renderGrid(harianItems)}
            </div>

            {/* Kelompok 2: Rapat */}
            <div className={styles.groupBlock}>
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
                <h3 className={styles.groupTitle}>Rapat</h3>
                <span className={styles.groupBadge}>{rapatItems.length} Foto</span>
              </div>
              {renderGrid(rapatItems)}
            </div>
          </>
        )}

        {activeTab === "harian" && (
          <div className={styles.groupBlock}>
            {renderGrid(harianItems)}
          </div>
        )}

        {activeTab === "rapat" && (
          <div className={styles.groupBlock}>
            {renderGrid(rapatItems)}
          </div>
        )}
      </div>

      {/* Lightbox Modal Slider */}
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

            {currentPool.length > 1 && (
              <>
                <button
                  className={`${styles.navArrow} ${styles.prevArrow}`}
                  onClick={handlePrev}
                  aria-label="Foto Sebelumnya"
                  title="Foto Sebelumnya (Panah Kiri)"
                >
                  ❮
                </button>
                <button
                  className={`${styles.navArrow} ${styles.nextArrow}`}
                  onClick={handleNext}
                  aria-label="Foto Berikutnya"
                  title="Foto Berikutnya (Panah Kanan)"
                >
                  ❯
                </button>
              </>
            )}

            <div className={styles.modalImageWrapper}>
              <img
                src={selectedPhoto.imgUrl}
                alt={selectedPhoto.title}
                className={styles.modalImg}
              />
            </div>

            <div className={styles.modalFooter}>
              <span className={styles.modalCategoryTag}>
                {selectedPhoto.category === "harian" ? "Persiapan Harian" : "Rapat"}
              </span>
              {currentPool.length > 0 && selectedIndex !== -1 && (
                <span className={styles.modalCounter}>
                  Foto {selectedIndex + 1} dari {currentPool.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
