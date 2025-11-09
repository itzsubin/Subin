import { useState, useEffect, useMemo, useCallback } from 'react';
import { useTheme } from '../../Common/ThemeContext';
import styles from './NavbarStyles.module.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const { theme } = useTheme();
  const sections = useMemo(() => ['home', 'skills', 'projects', 'contact'], []);

  const handleScroll = useCallback(() => {
    let current = '';
    let maxVisible = 0;

    for (const section of sections) {
      const id = section === 'home' ? 'subu' : section;
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      
      if (visibleHeight > maxVisible && visibleHeight > 100) {
        maxVisible = visibleHeight;
        current = section;
      }

      if (visibleHeight > window.innerHeight * 0.8) {
        break;
      }
    }

    setActiveSection(current);
  }, [sections]);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [handleScroll]);

  const handleNavClick = useCallback((e, section) => {
    e.preventDefault();
    const targetId = section === 'home' ? 'subu' : section;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      
      if (section === 'home' ) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`${styles.navbar} ${theme === 'dark' ? styles.dark : styles.light}`}
    >
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={activeSection === section ? styles.active : ''}
          >
            <a 
              href={`#${section === 'home' ? 'subu' : section}`}
              onClick={(e) => handleNavClick(e, section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;


