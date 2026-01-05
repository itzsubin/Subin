import { useTheme } from '../../Common/ThemeContext';
import styles from './mediaStyles.module.css';
import { Github, Linkedin, BookOpen } from 'lucide-react'; 
import { FaXTwitter as Twitter } from 'react-icons/fa6';

function Media() {
  const { theme } = useTheme();
  
  const iconColor = theme === 'light' ? '#000000' : '#ffffff';

  return (
    
    <div className={styles.socialNav}>
      <a href="https://x.com/ItzSubin" target="_blank" rel="noopener noreferrer">
        <Twitter
          className={styles.socialIcon}
          color={iconColor}
          size = {23}
        />
      </a>
      <a href="https://github.com/itzsubin" target="_blank" rel="noopener noreferrer">
        <Github
          className={styles.socialIcon}
          color={iconColor}
        />
      </a>
      <a href="https://www.linkedin.com/in/subin-ghimire-856523255/" target="_blank" rel="noopener noreferrer">
        <Linkedin
          className={styles.socialIcon}
          color={iconColor}
        />
      </a>
    </div>
  );
}

export default Media;