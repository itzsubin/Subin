import React, { useState, useRef, useEffect } from 'react';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './ProjectsStyles.module.css';
import cover1 from '../../assets/Project Covers/cover1-opt.jpg';
import cover2 from '../../assets/Project Covers/allerly-opt.jpg';

const projects = [
  {
    title: "StudyPal",
    status: "",
    content: "An AI-powered learning platform that transforms study materials into interactive flashcards. Engineered an AI pipeline to auto-generate active recall cards, with an architecture designed to support SuperMemo-2 (SM-2) spaced repetition for optimized long-term memory retention.",
    tech: ["AI/ML", "React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/itzsubin/StudyPal",
    image: cover1,
  },
  {
    title: "Allerly",
    content: "A cross-platform mobile app that eliminates dining anxiety for people with severe food allergies. Combines real-time location data with AI-driven menu analysis to cross-reference personal allergy profiles against nearby restaurant menus, achieving <800ms latency for real-time safety flagging using optimized Gemini LLM prompts.",
    tech: ["Dart", "Flutter", "Supabase", "Gemini LLM", "Geolocation"],
    githubLink: "https://github.com/crobati/tab-12-allerly-CSCE3444",
    image: cover2,
  },
];

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const touchStartRef = useRef(null);
  const dragOffsetRef = useRef(0);

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
    touchStartRef.current = e.targetTouches[0].clientX;
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
    }
  };

  const onTouchMove = (e) => {
    if (touchStartRef.current === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = currentTouch - touchStartRef.current;
    dragOffsetRef.current = diff;

    if (sliderRef.current) {
      const baseTranslate = -currentSlide * 100;
      sliderRef.current.style.transform = `translateX(calc(${baseTranslate}% + ${diff}px))`;
    }
  };

  const onTouchEnd = () => {
    if (touchStartRef.current === null) return;

    const distance = dragOffsetRef.current;
    const isLeftSwipe = distance < -minSwipeDistance;
    const isRightSwipe = distance > minSwipeDistance;

    let newSlide = currentSlide;
    if (isLeftSwipe && currentSlide < projects.length - 1) {
      newSlide = currentSlide + 1;
    } else if (isRightSwipe && currentSlide > 0) {
      newSlide = currentSlide - 1;
    }

    if (newSlide !== currentSlide) {
      setCurrentSlide(newSlide);
    } else {
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
    }

    dragOffsetRef.current = 0;
    touchStartRef.current = null;
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    projects.forEach((proj) => {
      if (proj.image) {
        const img = new Image();
        img.src = proj.image;
      }
    });
  }, []);

  const currentProject = projects[currentSlide];

  const renderProjectContent = (project) => (
    <>
      {/* Title */}
      <h2 className={styles.projectTitle} style={project.image ? { color: '#ffffff' } : {}}>
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
      <p className={styles.projectContent} style={project.image ? { color: '#f3f4f6' } : {}}>
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
      {(project.githubLink || project.github) && (
        project.githubLink ? (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubInfo}
            style={project.image ? { color: '#e5e7eb', textDecoration: 'none', cursor: 'pointer' } : { textDecoration: 'none', cursor: 'pointer' }}
          >
            <FaGithub />
          </a>
        ) : (
          <div className={styles.githubInfo} style={project.image ? { color: '#e5e7eb' } : {}}>
            <FaGithub />
            <span>{project.github}</span>
          </div>
        )
      )}
    </>
  );

  return (
    <section id="projects" className={styles.container}>
      <div className={styles.info}>
        <h1>Projects</h1>
      </div>
      <div className={styles.narrativeContainer}>
        <div className={styles.desktopSlider}>
          <div className={styles.sliderWrapper}>
            <div
              className={styles.sliderContainer}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              style={
                currentProject?.image
                  ? {
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${currentProject.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }
                  : {}
              }
            >
              <div
                className={styles.slider}
                ref={sliderRef}
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={styles.slide}
                  >
                    {renderProjectContent(project)}
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

        {/* Mobile Cards */}
        <div className={styles.mobileCards}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.mobileCard}
              style={
                project.image
                  ? {
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }
                  : {}
              }
            >
              {renderProjectContent(project)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
