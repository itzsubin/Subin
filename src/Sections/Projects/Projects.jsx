import styles from './ProjectsStyles.module.css';
import { useState } from 'react';

function Projects() {
     const [currentSlide, setCurrentSlide] = useState(0);



     const textSlides = [
          " First Slide Content: Welcome to Project Section.",
          " Second Slide Content: Working on."
     ];

     const nextSlide = () => {
          setCurrentSlide((prev) => (prev===textSlides.length-1?0: prev+1));
     };

     const prevSlide = () => {
          setCurrentSlide((prev) => (prev===0?textSlides.length-1:prev - 1));
     };

     const goToSlide = (index) => {
          setCurrentSlide(index);
     };
  return(
     <section id = "projects" className={styles.container}>
          <div className={styles.info}>
               <h1>Projects</h1>
          </div>     
           <div className={styles.narrativeContainer}>
             <div className={styles.sliderWrapper}>
                <div className={styles.sliderBackdrop}></div>
               <div className={styles.sliderContainer}>
                 <div className={styles.slider}>
                   {textSlides.map((text, index) => (
                     <div 
                       key={index}
                       className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                     >
                       <p className={styles.slideText}>{text}</p>
                     </div>
                   ))}
                 </div>
                 
                 <button 
                   className={styles.prevButton} 
                   onClick={prevSlide}
                   aria-label="Previous slide"
                 >
                   &#10094;
                 </button>
                 <button 
                   className={styles.nextButton} 
                   onClick={nextSlide}
                   aria-label="Next slide"
                 >
                   &#10095;
                 </button>
                 
                 <div className={styles.dotsContainer}>
                   {textSlides.map((_, index) => (
                     <button
                       key={index}
                       className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                       onClick={() => goToSlide(index)}
                       aria-label={`Go to slide ${index + 1}`}
                     />
                   ))}
                 </div>
               </div>
             </div>
     
     
           </div>
      </section>
  );
}

export default Projects;



