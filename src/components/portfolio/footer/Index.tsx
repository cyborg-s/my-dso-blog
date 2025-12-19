import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link
            to="#about"
            className={styles.upArrowLink}

          >
            <img
              className={styles.upArrow}
              src={require("../../../assets/upArrow.png").default}
              alt="UP"
            />
          </Link>
          <p>© Sascha Nyßen 2025</p>
          <a className={styles.footerLinks} href="./privacy">
            Privacy Police
          </a>
          <a className={styles.footerLinks} href="./imprint">
            Imprint
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
