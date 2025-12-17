import React from "react";
import Link from "@docusaurus/Link";

import styles from "./Imprint.module.css";

const Imprint: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <Link to="/" className={styles.backLink}>
          ← Back to Portfolio
        </Link>
        <h1 className={styles.h1}>Imprint</h1>
        <p>Information pursuant to § 5 DDG</p>
        <p>Address: Stettinerstraße 1, 92224 Amberg, Germany</p>
        <p>Phone: +491723141775</p>
        <p>Email: nysascha1@gmail.com</p>
        <p>Managing Director: Sascha Nyßen</p>
        <p>
          Disclaimer: All information provided on this website is for general
          informational purposes only. Our website contains links to external
          third-party websites over whose content we have no influence.
          Therefore, we cannot accept any liability for this external content.
          The respective provider or operator of the linked pages is always
          responsible for their content. The linked pages were checked for
          possible legal violations at the time of linking. No illegal content
          was found at the time of linking. However, permanent monitoring of the
          content of the linked pages is not reasonable without concrete
          evidence of a violation of the law. If we become aware of any
          violations of the law, we will remove such links immediately.
        </p>
      </div>
    </main>
  );
};

export default Imprint;
