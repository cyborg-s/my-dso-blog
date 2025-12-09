import React from "react";
import styles from "./projects.module.css";

// interface Project {
//   title: string;
//   description: string;
//   link?: string;
// }

// const projects: Project[] = [
//   {
//     title: "Baby Tools Shop",
//     description: "Ein kleines E-Commerce-Projekt mit React und Node.js.",
//     link: "https://github.com/deinusername/baby-tools-shop",
//   },
//   {
//     title: "OWASP Juice Shop",
//     description: "Sicherheitsprojekt zum Testen von Webanwendungen.",
//     link: "https://github.com/deinusername/owasp-juice-shop",
//   },
//   {
//     title: "Truck Signs API",
//     description: "API für das Verwalten von LKW-Signalen.",
//     link: "https://github.com/deinusername/truck_signs_api",
//   },
// ];

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.myProjects}>
      <div className={styles.container}>
        <h2>My project highlights</h2>
        <div className={styles.content}>
          <div className={styles.left}>liste</div>
          <div className={styles.right}>overview</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
