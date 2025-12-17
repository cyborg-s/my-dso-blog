import React, { useState } from "react";
import styles from "./Contact.module.css";

import MailIcon from "../../../assets/mailIcon.png";
import MailIconHover from "../../../assets/mailHover.png";
import LinkedInIcon from "../../../assets/linkedInIcon.png";
import LinkedInIconHover from "../../../assets/linkedInHover.png";

const Contact: React.FC = () => {
  const [mailHover, setMailHover] = useState(false);
  const [linkedInHover, setLinkedInHover] = useState(false);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contentHead}>
          <h2>Contact me</h2>
          <p className={styles.linkHeader}>
            Looking forward to hearing from you!
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.contactText}>
              &middot; Feel free to reach out with job offers to Front/Backend
              Developer
            </p>
            <p className={styles.contactText}>
              &middot; I am a Fullstack Developer
            </p>
            <p className={styles.contactText}>
              &middot; with skills in DevSecOps
            </p>
            <p className={styles.contactText}>
              &middot; I´m open to work in Remote
            </p>
          </div>
          <div className={styles.right}>
            <a
              className={styles.socialLinks}
              href="mailto:nysascha1@gmail.com"
              onMouseEnter={() => setMailHover(true)}
              onMouseLeave={() => setMailHover(false)}
            >
              <img
                className={styles.socialIcon}
                src={mailHover ? MailIconHover : MailIcon}
                alt="Email"
              />
              nysascha1@gmail.com
            </a>

            <a
              className={styles.socialLinks}
              href="https://www.linkedin.com/in/sascha-nyßen-13228b27b/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setLinkedInHover(true)}
              onMouseLeave={() => setLinkedInHover(false)}
            >
              <img
                className={styles.socialIcon}
                src={linkedInHover ? LinkedInIconHover : LinkedInIcon}
                alt="LinkedIn"
              />
              <p className={styles.linkText}>Sascha Nyßen</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
