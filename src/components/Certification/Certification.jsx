import React, { useEffect, useState } from 'react';
import styles from './Certification.module.css';

// The JSON data will be imported
import certifications from '../../data/certifications.json';

export const Certification = () => {
  const [certification, setCertifications] = useState([]);

  useEffect(() => {
    // Load the certifications data (assuming the data file is static and doesn't change)
    setCertifications(certifications);
  }, []);

  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        <img
          src={"/certificate_img.png"} // Ensure you have this image in the public folder
          alt="certificate"
          className={styles.aboutImage}
        />
        <ul className={styles.certificationItems}>
          {certification.map((cert, index) => (        
            <li className={styles.certificationItem} key={index}>
                <img src={"/blue_dot.png"} className={styles.blueDot} alt="dot" />
              <div className={styles.certificationItemText}>
                <h3>{cert.title}</h3>
                <p>Year: {cert.year}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certificationLink}
                >
                  View Certificate
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
