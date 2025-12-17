import React, { useState, useRef } from "react";
import styles from "./SkillsMobile.module.css";
import { skillsData } from "../data/SkillsData";

const ITEMS_PER_SLIDE = 3;

const SkillsMobile: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const slides = [];
  for (let i = 0; i < skillsData.length; i += ITEMS_PER_SLIDE) {
    slides.push(skillsData.slice(i, i + ITEMS_PER_SLIDE));
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50 && currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }

    if (diff < -50 && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }

    touchStartX.current = null;
  };

  return (
    <section id="skills" className={styles.skillsMobile}>
      <h2 className={styles.h2}>My skills</h2>

      <div
        className={styles.slider}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.track}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((group, slideIndex) => (
            <div key={slideIndex} className={styles.slide}>
              {group.map((skill, index) => (
                <div key={index} className={styles.skillRow}>
                  <div className={styles.left}>
                    {skill.isSvg ? (
                      <skill.logo className={styles.icon} />
                    ) : (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={styles.icon}
                      />
                    )}
                    <p className={styles.name}>{skill.name}</p>
                  </div>

                  <div
                    className={styles.right}
                    dangerouslySetInnerHTML={{ __html: skill.descText }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsMobile;
