import React from "react";
import styles from "./skills.module.css";
import HtmlLogo from '../../assets/html.svg';
import CssLogo from '../../assets/css.svg';
import DocuLogo from '../../assets/docu.svg';
import PythonLogo from '../../assets/python.svg';
import ShellLogo from '../../assets/shell.svg';
import YamlLogo from '../../assets/yaml.svg';
import DockerLogo from '../../assets/docker.svg';
import GithubLogo from '../../assets/github.svg';




const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2>My skills</h2>
        <div className={styles.skillSection}>
          <div className={styles.mySkillsRow}>
            <div className={styles.mySkills}><HtmlLogo className={styles.skillImg}/><p className={styles.skillName}>HMTL</p></div>
            <div className={styles.mySkills}><CssLogo className={styles.skillImg}/><p className={styles.skillName}>CSS</p></div>
            <div className={styles.mySkills}><DocuLogo className={styles.skillImg}/><p className={styles.skillName}>Static site generator</p></div>
          </div>
          <div className={styles.mySkillsRow}>
            <div className={styles.mySkills}><PythonLogo className={styles.skillImg}/><p className={styles.skillName}>Python</p></div>
            <div className={styles.mySkills}><ShellLogo className={styles.skillImg}/><p className={styles.skillName}>Shell<br/>scripting</p></div>
            <div className={styles.mySkills}><YamlLogo className={styles.skillImg}/><p className={styles.skillName}>Yaml</p></div>
          </div>
          <div className={styles.mySkillsRow}>
            <div className={styles.mySkills}><DockerLogo className={styles.skillImg}/><p className={styles.skillName}>Container</p></div>
            <div className={styles.mySkills}><GithubLogo className={styles.skillImg}/><p className={styles.skillName}>CI/CD with<br/>GitHub Actions</p></div>
            <div className={styles.mySkills}><img className={styles.skillPng} src={require('../../assets/seclogo.png').default} alt="Security" /><p className={styles.skillName}>IT Security</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Skills;