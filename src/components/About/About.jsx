import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={"/about_girl.png"} // Ensure you have this image in the public folder
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={"/cursorIcon.png"} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I have worked on projects where I handled both frontend and backend development, creating seamless user experiences with optimized backend systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={"/cursorIcon.png"} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solver</h3>
              <p>
                I consistently work on solving problems across global platforms, constantly learning and evolving my skills in algorithmic problem solving.
              </p>
              <div className={styles.linkButtons}>
                <a
                  href="https://leetcode.com/u/_dhevamuthu2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  LeetCode
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/dhevadharshini2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  GeeksforGeeks
                </a>
                <a
                  href="https://www.codechef.com/users/dheva_2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  CodeChef
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
