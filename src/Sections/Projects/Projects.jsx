import styles from './ProjectsStyles.module.css';
import { useState } from 'react';

function Projects() {
     const [currentSlide, setCurrentSlide] = useState(0);



     const textSlides = [
          " Welcome to Project Section",
          "StudyPal(Working On): An AI-powered learning platform that transforms study materials into interactive flashcards, quizzes, and notes. Features intelligent content generation and adaptive learning tools to enhance retention and comprehension. Also, on my GitHub, there is a public README.md for this project where I commit the same message as I do in my private repo, and I update the README.md as I make progress and changes to my application until I complete that project."
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
                   disabled={currentSlide === 0}
                   onClick={prevSlide}
                   aria-label="Previous slide"
                 >
                   &#10094;
                 </button>
                 <button 
                   className={styles.nextButton} 
                    disabled={currentSlide === textSlides.length - 1}
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



