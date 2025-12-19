import React from "react";
import styles from "./About.module.css";
import Link from "@docusaurus/Link";
import profilePic from "../../../assets/imgGroß.png";

const AboutMobile: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <p className={styles.preferences}>Hey there, 👋 I am</p>

        <h1>Sascha Nyßen</h1>

        <p className={styles.preferences}>DevSecOps Engineer</p>

        <img className={styles.profilePic} src={profilePic} alt="Profile" />

        <p className={styles.description}>
          Programming is my passion, combining creativity with logical thinking
          to solve complex problems efficiently. The fast evolution of
          technology motivates me to continuously improve my skills. I enjoy
          debugging for its analytical challenges and the thrill when a program
          finally works.
        </p>

        <Link
          className={styles.aboutlink}
          to="#contact"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
};

export default AboutMobile;
