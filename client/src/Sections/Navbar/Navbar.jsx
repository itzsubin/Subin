import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '../../Common/ThemeContext';
import styles from './NavbarStyles.module.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  //const scrollTimeout = useRef(null);
  const { theme } = useTheme();
  const sections = useMemo(() => ['home', 'skills', 'projects', 'contact'], []);

  useEffect(() => {
    const handleScroll = () => {
      updateScrollProgress();
      updateActiveSection();
    };

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / winHeight) * 100;
      setScrollProgress(scrolled);
    };

    const updateActiveSection = () => {
      let current = '';
      let maxVisible = 0;

      sections.forEach((section) => {
        const id = section === 'home' ? 'subu' : section;
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        if (visibleHeight > maxVisible && visibleHeight > 100) { 
          maxVisible = visibleHeight;
          current = section;
        }
      });

      setActiveSection(current);
    };

    updateScrollProgress();
    updateActiveSection();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <>
      <div className={styles['scroll-indicator']} style={{ width: `${scrollProgress}%` }} />

      <nav
        aria-label="Main navigation"
        className={`${styles.navbar} ${theme === 'dark' ? styles.dark : styles.light}`}
      >
        <ul>
          {sections.map((section) => (
            <li
              key={section}
              className={`${activeSection === section ? styles.active : ''}`}
            >
              <a href={`#${section === 'home' ? 'subu' : section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;


