import React from "react";
import history from "../../data/history.json"; // Assuming you save the JSON data as `history.json`
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";


export const Experience = () => {
    return (
      <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
          {/* Skills Section */}
          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.name} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <ul className={styles.history}>
            {history.map((historyItem, id) => (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                  className={styles.historyImage}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, index) => (
                      <li key={index}>{experience}</li>
                    ))}
                  </ul>
                  {historyItem.certificateLink && (
                    <a
                      href={historyItem.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.certificateLink}
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };