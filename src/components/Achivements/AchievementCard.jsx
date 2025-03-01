import React from 'react';
import styles from "./AchievementCard.module.css";

export const AchievementCard = ({ achievement: { title, image, description, certificateLink, paperLink } }) => {
  return (
    <div className={styles.container}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {certificateLink && (
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          View Certificate
        </a>
      )}
      {paperLink && (
        <a
          href={paperLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          View Paper
        </a>
      )}
    </div>
  );
};
