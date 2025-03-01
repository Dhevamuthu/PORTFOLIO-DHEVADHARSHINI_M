import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/emailIcon.png" alt="Email icon" />
          <a href="mailto:dhevadharshini.m2022cce@sece.ac.in">dhevadharshini.m2022cce@sece.ac.in</a>
        </li>
        <li className={styles.link}>
          <img src="/linkedinIcon.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/dhevadharshini-muthukkumaar/">
            linkedin.com/in/dhevadharshini-muthukkumaar/
          </a>
        </li>
        <li className={styles.link}>
          <img src="/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/Dhevamuthu">github.com/Dhevamuthu</a>
        </li>
      </ul>
    </footer>
  );
};
