import React from 'react'; // Add this import
import styles from './skillsStyles.module.css';
import ReactLogo from '../../assets/react.png'; 
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
    [HTMLLogo, CSSLogo, ReactLogo], 
    [PythonLogo, CppLogo, CLogo],
    [GitLogo]
  ];

            const preventDefault = (f) => {
            f.preventDefault();
            f.stopPropagation();
            return false;
          };

            const handleTouchStart = (e) => {
    const logo = e.currentTarget;
    logo.style.transform = 'scale(0.85)';
    logo.style.filter = theme === 'light' 
      ? 'grayscale(0%) brightness(1.2)' 
      : 'grayscale(0%) brightness(1.3)';
  };

  const handleTouchEnd = (e) => {
    const logo = e.currentTarget;
    logo.style.transform = '';
    logo.style.filter = '';
  };

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
                  onContextMenu={preventDefault}
                  onDragStart={preventDefault}
                  onSelect={preventDefault}
                  onTouchStart={(e) => {
                    preventDefault(e);
                    handleTouchStart(e);
                  }
                  }

                  onTouchMove={preventDefault}
                  onTouchEnd={(e) => {
                    preventDefault(e);
                    handleTouchEnd(e);
                  }}
                  onTouchCancel={handleTouchEnd}
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


