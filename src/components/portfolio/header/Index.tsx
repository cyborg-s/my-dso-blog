import React from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerDiv}>
          <Link
            to="about"
            className={styles.headerlink}
            smooth={true}
            duration={500}
            offset={-50}
          >
            About me
          </Link>

          <Link
            to="skills"
            className={styles.headerlink}
            smooth={true}
            duration={500}
            offset={-50}
          >
            My skills
          </Link>

          <Link
            to="projects"
            className={styles.headerlink}
            smooth={true}
            duration={500}
            offset={-50}
          >
            My projects
          </Link>

          <Link
            to="contact"
            className={styles.headerlink}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
