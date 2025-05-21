import React from 'react'; // Add this import
import styles from './skillsStyles.module.css';
import ReactLogo from '../../assets/react.png'; // Changed from 'React' to 'ReactLogo'
import HTMLLogo from '../../assets/Html.png';
import PythonLogo from '../../assets/python.png';
import CSSLogo from '../../assets/Css.png';
import CppLogo from '../../assets/C++.png';
import CLogo from '../../assets/C.png';
import GitLogo from '../../assets/Git.png';
import { useTheme } from '../../Common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  
  const skillGroups = [
    [HTMLLogo, CSSLogo, ReactLogo], // Using ReactLogo instead of React
    [PythonLogo, CppLogo, CLogo],
    [GitLogo]
  ];

  return (
    <section id='skills' className={styles.container}>
      <div className={styles.info}>
        <h1>Skills</h1>
      </div>
      
      <div className={styles.skillsContainer}>
        {skillGroups.map((group, groupIndex) => (
          <React.Fragment key={`group-${groupIndex}`}>
            <div className={styles.logoGroup}>
              {group.map((logo, logoIndex) => (
                <img
                  key={`logo-${groupIndex}-${logoIndex}`}
                  src={logo}
                  alt={`${logo.split('/').pop().split('.')[0]} logo`}
                  className={styles.logo}
                  data-theme={theme}
                />
              ))}
            </div>
            {groupIndex < skillGroups.length - 1 && (
              <hr className={styles.logoDivider} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Skills;


