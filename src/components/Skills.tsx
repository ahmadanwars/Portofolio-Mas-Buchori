import styles from "./Skills.module.css";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Kompetensi</span>
          <h2 className="section-title">
            <span className="gradient-text">Keahlian</span>
          </h2>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((category: SkillCategory, idx) => (
            <div key={idx} className={`glass-card ${styles.categoryCard}`}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryDot}></span>
                <span>{category.category}</span>
              </h3>

              <div className={styles.itemList}>
                {category.items.map((item, itemIdx) => {
                  const isTodo = item.includes("[TODO");
                  return (
                    <span key={itemIdx} className={styles.skillPill}>
                      <span>{item}</span>
                      {isTodo && <span className="todo-pill">TODO</span>}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
