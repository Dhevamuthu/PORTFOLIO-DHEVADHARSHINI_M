import React from 'react';
import styles from './Education.module.css';

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={"/education.png"} // Ensure you have this image in the public folder
          alt="education"
          className={styles.aboutImage}
        />
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
          <img
          src={"/blue_dot.png"} // Ensure you have this image in the public folder
          className={styles.blueDot}
        />
            <div className={styles.educationItemText}>
              <h3>Sri Eshwar College of Engineering</h3>
              <p>B.E (CCE) | CGPA: 8.85 | 2022-2026</p>
            </div>
          </li>
          <li className={styles.educationItem}>
          <img
          src={"/blue_dot.png"} // Ensure you have this image in the public folder
          className={styles.blueDot}
        />
            <div className={styles.educationItemText}>
              <h3>Nirmala Matha Convent Matric Hr Sec School</h3>
              <p>HSC 96% | 2020-2022</p>
            </div>
          </li>
          <li className={styles.educationItem}>
          <img 
          src={"/blue_dot.png"} // Ensure you have this image in the public folder
          className={styles.blueDot}
        />
            <div className={styles.educationItemText}>
              <h3>Nirmala Matha Convent Matric Hr Sec School</h3>
              <p>SSLC 99% | 2019-2020</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
