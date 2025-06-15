import styles from './subuStyles.module.css';
import myPhoto from '../../assets/images/subu-img.png';
import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg'; 
import Resume from '../../assets/resumes/Subin Ghimire Resume Tech.pdf'; 
import { useTheme } from '../../Common/ThemeContext';

function Subu() {
  const {theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon; 

     const handleMouseMove = (e) => {
          const x = e.nativeEvent.offsetX;
          const y = e.nativeEvent.offsetY;
          const centerX = e.target.offsetWidth / 2;
          const centerY = e.target.offsetHeight / 2;
          e.currentTarget.style.transform = `
            rotateY(${(x - centerX) / 20}deg)
            rotateX(${(centerY - y) / 20}deg)
          `;
        };
        
        const handleMouseLeave = (e) => {
          e.currentTarget.style.transform = '';
        };   
  return (
  <section id="subu" className={styles.Container}>
     <div 
             className={styles.photoContainer}
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
           >
             <img
               src={myPhoto}
               alt="Profile"
               className={styles.profilePhoto}
             />
             </div>
            <div className={styles.colormodecontainer}>
             <img 
              src = {themeIcon}
              alt ="color mode icon"
              className={styles.colormode}
              onClick={toggleTheme}
             />
      </div>
           <div
            className = {styles.info}>
              <h1>Subin <br />
              Ghimire
              </h1>
              <h2>Cloud Architecture and Big Data Enthusiast</h2>
              <p className={styles.description}>
              Driven by a passion for diving into the world of data science, where algorithms come to life to uncover insights and create meaningful visualizations.
              </p>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
              <button>
               Resume
              </button>
              </a>
              
           </div>
    </section>
  );
};

export default Subu;