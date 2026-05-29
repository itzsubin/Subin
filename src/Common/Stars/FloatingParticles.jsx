import { useEffect, useState } from 'react';
import './FloatingParticles.css';

const FloatingParticles = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      // Use requestAnimationFrame for smooth performance
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="particles-container" aria-hidden="true">
        {/* Layer 1 - Far (Slowest, smallest) */}
        <div className="parallax-layer" style={{ transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={`far-${i}`}
              className="particle"
              style={{
                width: '1.5px',
                height: '1.5px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${8 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.4
              }}
            />
          ))}
        </div>

        {/* Layer 2 - Mid */}
        <div className="parallax-layer" style={{ transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)` }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={`mid-${i}`}
              className="particle"
              style={{
                width: '2px',
                height: '2px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${6 + Math.random() * 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.7
              }}
            />
          ))}
        </div>

        {/* Layer 3 - Near (Fastest, largest) */}
        <div className="parallax-layer" style={{ transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -50}px)` }}>
          {[...Array(10)].map((_, i) => (
            <div
              key={`near-${i}`}
              className="particle"
              style={{
                width: '3px',
                height: '3px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                boxShadow: '0 0 6px 1px rgba(255,255,255,0.4)',
                opacity: 1
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingParticles;
