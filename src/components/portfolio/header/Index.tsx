import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerDiv}>
          <Link
            to="#about"
            className={styles.headerlink}
          >
            About me
          </Link>

          <Link
            to="#skills"
            className={styles.headerlink}
          >
            My skills
          </Link>

          <Link
            to="#projects"
            className={styles.headerlink}
          >
            My projects
          </Link>

          <Link
            to="#contact"
            className={styles.headerlink}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
