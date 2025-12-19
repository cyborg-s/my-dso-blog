import React, { useState } from "react";
import styles from "./Projects.module.css";
import minecraftImg from "../../../assets/projects/minecraftImg.png";
import wordPressImg from "../../../assets/projects/wordPressImg.png";
import truckSignsImg from "../../../assets/projects/truckSignImg.png";
import babyToolsImg from "../../../assets/projects/babyToolsImg.png";
import juiceShopImg from "../../../assets/projects/shellImg.png";
import arrow from "../../../assets/arrow.png";
import Link from "@docusaurus/Link";
import { projects } from "../data/ProjectsData";

const projectImages = {
  minecraftImg,
  wordPressImg,
  truckSignsImg,
  babyToolsImg,
  juiceShopImg,
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className={styles.myProjects}>
      <div className={styles.container}>
        <h2>My project highlights</h2>

        <div className={styles.wrapper}>
          <div className={styles.projectList}>
            {projects.map((project) => (
              <button
                key={project.id}
                className={`${styles.projectButton} 
                            ${
                              selectedProject.id === project.id
                                ? styles.active
                                : ""
                            }`}
                onClick={() => setSelectedProject(project)}
              >
                <span className={styles.projectId}>{project.id}.</span>
                <span className={styles.projectTitle}>{project.title}</span>
              </button>
            ))}

            <Link to="/docs/projects/overview" className={styles.projectButton}>
              <img src={arrow} className={styles.arrowIcon} />
              <span className={styles.moreButton}>see more projects</span>
            </Link>
          </div>

          <div className={styles.projectDetail}>
            <div className={styles.detailsTop}>
              <h3 className={styles.h3}>{selectedProject.title}</h3>
              <div className={styles.iconsWrapper}>
                {selectedProject.icons?.map((iconObj, index) => (
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
            </div>

            <div className={styles.detailsBottom}>
              {selectedProject.img && (
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className={styles.projectImg}
                />
              )}
              <div className={styles.detailText}>
                <p className={styles.description}>
                  {selectedProject.description}
                </p>
                <div className={styles.projectLinks}>
                  <Link to={selectedProject.doc} className={styles.projectDoc}>
                    Documentation
                  </Link>

                  <a
                    href={selectedProject.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectGit}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
