import React, { useState } from 'react';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './ProjectsStyles.module.css';

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const projects = [
    {
      title: "Welcome",
      content: "Explore my latest projects and see what I've been building. Navigate through my work.",
    },
    {
      title: "StudyPal",
      status: "In Development",
      content: "An AI-powered learning platform that transforms study materials into interactive flashcards, quizzes, and notes. Features intelligent content generation and adaptive learning tools to enhance retention and comprehension.",
      tech: ["AI/ML", "React", "TypeScript", "Tailwind CSS"],
      github: "Public README with regular updates",
    }
  ];

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    setDragOffset(currentTouch - touchStart);
  };

  const onTouchEnd = () => {
    if (!touchStart) return;

    const distance = dragOffset;
    const isLeftSwipe = distance < -minSwipeDistance;
    const isRightSwipe = distance > minSwipeDistance;

    if (isLeftSwipe && currentSlide < projects.length - 1) {
      nextSlide();
    } else if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }

    setDragOffset(0);
    setTouchStart(null);
    setIsDragging(false);
  };

  const getSliderStyle = () => {
    const baseTranslate = -currentSlide * 100;
    return {
      transform: `translateX(calc(${baseTranslate}% + ${dragOffset}px))`,
      transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  return (
    <section id="projects" className={styles.container}>
      <div className={styles.info}>
        <h1>Projects</h1>
      </div>
      <div className={styles.narrativeContainer}>
        <div className={styles.sliderWrapper}>
          <div
            className={styles.sliderContainer}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={styles.slider}
              style={getSliderStyle()}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={styles.slide}
                >
                  {/* Title */}
                  <h2 className={styles.projectTitle}>
                    {project.title}
                  </h2>

                  {/* Status Badge */}
                  {project.status && (
                    <div className={styles.statusBadge}>
                      <span className={styles.pulseDot}></span>
                      {project.status}
                    </div>
                  )}

                  {/* Content */}
                  <p className={styles.projectContent}>
                    {project.content}
                  </p>

                  {/* Tech Stack */}
                  {project.tech && (
                    <div className={styles.techStack}>
                      {project.tech.map((tech, i) => (
                        <span key={i} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* GitHub Info */}
                  {project.github && (
                    <div className={styles.githubInfo}>
                      <FaGithub />
                      <span>{project.github}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={styles.prevButton}
              aria-label="Previous Slide"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === projects.length - 1}
              className={styles.nextButton}
              aria-label="Next slide"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className={styles.dotsContainer}>
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
