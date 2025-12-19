import React from "react";
import styles from "./About.module.css";
import Link from "@docusaurus/Link";
import profilePic from "../../../assets/imgGroß.png";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.preferences}>Hey there, 👋 I am</p>
          <h1>Sascha Nyßen</h1>
          <p className={styles.preferences}>DevSecOps Engineer</p>

          <p className={styles.description}>
            Programming is my passion, combining creativity with logical
            thinking to solve complex problems efficiently. The fast evolution
            of technology motivates me to continuously improve my skills. I
            enjoy debugging for its analytical challenges and the thrill when a
            program finally works. I stay updated on tech trends relevant to my
            projects and am proud of my work on the OWASP Juice Shop, which
            strengthened my IT security knowledge.{" "}
          </p>

          <Link
            className={styles.aboutlink}
            to="#contact"
          >
            Contact me
          </Link>
        </div>
        <div className={styles.right}>
          <img className={styles.profilePic} src={profilePic} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

const scrollToSection = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;

  const start = window.scrollY;
  const end = target.offsetTop;
  const distance = end - start;
  const duration = 500;
  let startTime: number | null = null;

  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

  const animate = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeOut(progress);

    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

export default About;
