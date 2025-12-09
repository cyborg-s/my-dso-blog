import React from "react";
import styles from "./contact.module.css";

const contacts = [
  { name: "GitHub", link: "https://github.com/deinusername" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/deinusername/" },
  { name: "Email", link: "mailto:deinemail@example.com" },
];

const Contact: React.FC = () => {
  return (
    <section id="projects" className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact me</h2>
        <div className={styles.content}>
          <div className={styles.left}>Text</div>
          <div className={styles.right}>Links</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

