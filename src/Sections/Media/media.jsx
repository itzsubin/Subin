import { useTheme } from '../../Common/ThemeContext';
import styles from './mediaStyles.module.css';
import twitterLight from '../../assets/social-icons/twitter-light.svg';
import twitterDark from '../../assets/social-icons/twitter-dark.svg';
import linkedinLight from '../../assets/social-icons/linkedin-light.svg';
import linkedinDark from '../../assets/social-icons/linkedin-dark.svg';
import githubLight from '../../assets/social-icons/github-light.svg';
import githubDark from '../../assets/social-icons/github-dark.svg';
import blogDark from '../../assets/social-icons/blogldark.png';
import blogLight from '../../assets/social-icons/bloglight.png';

function Media() {
  const { theme } = useTheme();
  
  const icons = {
    twitter: theme === 'light' ? twitterLight : twitterDark,
    linkedin: theme === 'light' ? linkedinLight : linkedinDark,
    github: theme === 'light' ? githubLight : githubDark,
    blog: theme === 'light' ? blogLight : blogDark
  };

  return (
    <div className={styles.socialNav}>
      <a href="https://x.com/ItzSubin" target="_blank" rel="noopener noreferrer">
        <img src={icons.twitter} alt="Twitter" className={styles.socialIcon} />
      </a>
      <a href="https://github.com/itzsubin" target="_blank" rel="noopener noreferrer">
        <img src={icons.github} alt="GitHub" className={styles.socialIcon} />
      </a>
      <a href="https://www.linkedin.com/in/subin-ghimire-856523255/" target="_blank" rel="noopener noreferrer">
        <img src={icons.linkedin} alt="LinkedIn" className={styles.socialIcon} />
      </a>
      <a href="#blog" onClick={(e) => e.preventDefault()}>
        <img src={icons.blog} alt="Blog" className={`${styles.socialIcon} ${styles.blogIcon}`} />
      </a>
    </div>
  );
}

export default Media;