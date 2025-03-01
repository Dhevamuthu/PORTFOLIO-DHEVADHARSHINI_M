import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <img
        src="/profile.JPG"
        alt="Profile"
        className={styles.heroImage}
      />
      <h1 className={styles.heroTitle}>Hi, I'm Dhevadharshini</h1>
      <p className={styles.heroSubtitle}>
        I'm a full-stack developer blending creativity with technology, seeking
        internships to contribute passionately and grow through experience.
        Let’s connect and create impact!
      </p>
      <a href="#contact" className={styles.contactButton}>
        Contact Me
      </a>
    </section>
  );
};
