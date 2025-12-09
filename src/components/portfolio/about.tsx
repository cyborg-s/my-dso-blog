import React from "react";
import styles from "./about.module.css";
import { Link } from "react-scroll";
import profilePic from '../../assets/imgGroß.png';


const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.preferences}>Hey there, 👋 I am</p>
        <h1>Sascha Nyßen</h1>
        <p className={styles.preferences}>DevSecOps Engeneer</p>

        <p className={styles.description}>
          Write some information about yourself that is IT related. For example:
          Why are you passionate about coding? Do you have a deep interest in
          games? What is your source of inspiration for improving your
          programming skills? Are you constantly learning and keeping up to
          date?
        </p>

        <Link
          className={styles.aboutlink}
          to="contact"
          smooth={true} // animiertes Scrollen
          duration={500} // 500ms
          spy={true}
          offset={-50} // optional für fixierten Header
        >
          Contact me
        </Link>
      </div>
      <div className={styles.right}>
<img className={styles.profilePic} src={profilePic} alt="Profile" /></div></div>
    </section>
  );
};

const scrollToSection = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;

  const start = window.scrollY;
  const end = target.offsetTop;
  const distance = end - start;
  const duration = 500; // 500ms
  let startTime: number | null = null;

  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3); // cubic ease-out

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
