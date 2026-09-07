import styles from "./Timeline.module.css";
import { portfolioData, ExperienceItem, EducationItem } from "@/data/portfolioData";

export default function Timeline() {
  const { experiences, education } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Rekam Jejak Karir</span>
          <h2 className="section-title">
            Pengalaman Kerja & <span className="gradient-text">Pendidikan Formal</span>
          </h2>
        </div>

        <div className={styles.timelineGrid}>
          {/* Kolom Pengalaman */}
          <div>
            <h3 className={styles.columnTitle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span>Pengalaman Kerja & Organisasi</span>
            </h3>

            <div className={styles.timelineList}>
              {experiences.map((exp: ExperienceItem, idx) => {
                const isCompanyTodo = exp.company.includes("[TODO");
                const isRoleTodo = exp.role.includes("[TODO");

                return (
                  <div key={idx} className={styles.timelineItem}>
                    <span className={styles.timelineDot}></span>
                    <div className={`glass-card ${styles.itemCard}`}>
                      <div className={styles.itemHeader}>
                        <h4 className={styles.itemRole}>
                          {exp.role}
                          {isRoleTodo && <span className="todo-pill">[TODO]</span>}
                        </h4>
                        <div className={styles.itemCompany}>
                          {exp.company}
                          {isCompanyTodo && <span className="todo-pill">[TODO]</span>}
                        </div>
                        <span className={styles.itemPeriod}>{exp.period}</span>
                      </div>

                      <ul className={styles.itemPoints}>
                        {exp.points.map((point, pIdx) => {
                          const isPointTodo = point.includes("[TODO");
                          return (
                            <li key={pIdx}>
                              {point}
                              {isPointTodo && <span className="todo-pill">TODO</span>}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kolom Pendidikan */}
          <div>
            <h3 className={styles.columnTitle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              <span>Pendidikan Formal</span>
            </h3>

            <div className={styles.timelineList}>
              {education.map((edu: EducationItem, idx) => {
                const isInstTodo = edu.institution.includes("[TODO");
                const isMajorTodo = edu.major.includes("[TODO");

                return (
                  <div key={idx} className={styles.timelineItem}>
                    <span className={styles.timelineDot} style={{ borderColor: "var(--accent-indigo)" }}></span>
                    <div className={`glass-card ${styles.itemCard}`}>
                      <div className={styles.itemHeader}>
                        <h4 className={styles.itemRole}>
                          {edu.major}
                          {isMajorTodo && <span className="todo-pill">[TODO]</span>}
                        </h4>
                        <div className={styles.itemCompany} style={{ color: "var(--accent-indigo)" }}>
                          {edu.institution}
                          {isInstTodo && <span className="todo-pill">[TODO]</span>}
                        </div>
                        <span className={styles.itemPeriod}>{edu.period}</span>
                      </div>

                      {edu.notes && (
                        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                          {edu.notes}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
