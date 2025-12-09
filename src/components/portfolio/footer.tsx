import React from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
            <a href="#header"><img className={styles.upArrow} src={require('../../assets/upArrow.png').default} alt="UP" /></a>
            <p>© Sascha Nyßen 2025</p>
            <a className={styles.footerLinks} href="#">Legal Notice</a>
            <a className={styles.footerLinks} href="#">Imprint</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

