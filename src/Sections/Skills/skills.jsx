import React from 'react';
import styles from './skillsStyles.module.css';
import { Check } from 'lucide-react';
import { useTheme } from '../../Common/Theme/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const technologies = [
    "Python",
    "Typescript",
    "Javascript",
    "React",
    "C/C++",
    "Dart",
    "Flutter"
  ];

  return (
    <section id='skills' className={styles.container}>
      <div className={styles.info}>
        <h1>Skills</h1>
      </div>

      <div className={styles.content}>
        <p className={styles.bio}>
          Here are some technologies I have been working with:
        </p>

        <div className={styles.techCard}>
          {/* Decorative star particles — dark mode only */}
          {theme === 'dark' && (
            <div className={styles.stars}>
              <span className={styles.star} style={{ top: '10%', left: '5%', animationDelay: '0s' }} />
              <span className={styles.star} style={{ top: '25%', right: '8%', animationDelay: '1.2s' }} />
              <span className={styles.star} style={{ top: '60%', left: '12%', animationDelay: '2.4s' }} />
              <span className={styles.star} style={{ top: '80%', right: '15%', animationDelay: '0.8s' }} />
              <span className={styles.star} style={{ top: '45%', left: '90%', animationDelay: '1.8s' }} />
              <span className={styles.star} style={{ top: '15%', left: '50%', animationDelay: '3s' }} />
              <span className={styles.star} style={{ top: '70%', left: '40%', animationDelay: '2s' }} />
            </div>
          )}

          <ul className={styles.techList}>
            {technologies.map((tech, index) => (
              <li key={index} className={styles.techItem}>
                <span className={styles.checkWrap}>
                  <Check className={styles.checkIcon} size={18} />
                </span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
