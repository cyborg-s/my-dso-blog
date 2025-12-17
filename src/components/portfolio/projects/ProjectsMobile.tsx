import React from "react";
import styles from "./ProjectsMobile.module.css";
import { projects } from "../data/ProjectsDataMobile";
import Link from "@docusaurus/Link";
import arrow from "../../assets/arrow.png";

const ProjectsMobile: React.FC = () => {
  const firstThreeProjects = projects.slice(0, 3);

  return (
    <section id="projects" className={styles.projectsMobile}>
      <div className={styles.container}>
        <h2 className={styles.h2}>My project highlights</h2>

        <div className={styles.projectList}>
          {firstThreeProjects.map((project, index) => (
            <div key={project.id} className={styles.projectCard}>
              {/* Nr + Titel */}
              <div className={styles.projectHeader}>
                <span className={styles.projectId}>{project.id}.</span>
                <span className={styles.projectTitle}>{project.title}</span>
              </div>

              {/* Icons */}
                            <div className={styles.iconsWrapper}>
                {project.icons?.map((iconObj, index) => (
                  <div key={index} className={styles.iconBox}>
                    {iconObj.isSvg ? (
                      <iconObj.icon className={styles.iconSvg} />
                    ) : (
                      <img
                        src={iconObj.icon}
                        alt={iconObj.title}
                        className={styles.iconPng}
                      />
                    )}
                    <span className={styles.iconTitle}>{iconObj.title}</span>
                  </div>
                ))}
              </div>

              {/* Projektbild */}
              {project.img && (
                <img
                  src={project.img}
                  alt={project.title}
                  className={styles.projectImg}
                />
              )}

              {/* Beschreibung */}
              <p className={styles.description}>{project.description}</p>

              {/* Links */}
              <div className={styles.projectLinks}>
                <Link to={project.doc} className={styles.projectDoc}>
                  Documentation
                </Link>

                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectGit}
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}

          {/* See more projects */}
          <p className={styles.moreText}>Further projects, <br/>such as Minecraft Server,<br/> WordPress,<br/> or containerization and deployment,<br/> can be found at :</p>
          <div className={styles.center}><Link to="/docs/projects/overview" className={styles.seeMoreButton}>
            <span>See more projects</span>
          </Link></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMobile;
