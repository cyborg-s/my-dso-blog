import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./Header.module.css";

const HeaderMobil: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="header" className={styles.headerMobil}>
      <div className={styles.containerMobil}>
        <button
          className={styles.burgerMobil}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button
            className={styles.closeMobil}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>

          <nav className={styles.menuLinksMobil}>
            <Link
              to="#about"
              onClick={closeMenu}
            >
              About me
            </Link>
            <Link
              to="#skills"
              onClick={closeMenu}
            >
              My skills
            </Link>
            <Link
              to="#projects"
              onClick={closeMenu}
            >
              My projects
            </Link>
            <Link
              to="#contact"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderMobil;
