import React from "react";
import styles from "./Skills.module.css";
import { skillsData } from "../data/SkillsData";

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2>My skills</h2>
        <div className={styles.skillSection}>
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.mySkills}>
              {skill.isSvg ? (
                <skill.logo className={styles.skillImg} />
              ) : (
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className={styles.skillPng}
                />
              )}
              <p className={styles.skillName}>{skill.name}</p>
              <div className={styles.skillDesc}>
                <p className={styles.descHead}>{skill.descHead}</p>
                <p
                  className={styles.descText}
                  dangerouslySetInnerHTML={{ __html: skill.descText }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
