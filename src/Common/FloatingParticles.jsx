
import './FloatingParticles.css';

const FloatingParticles = () => {

  return (
    <>
      <div className="particles-container" aria-hidden="true">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: '2px',
              height: '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FloatingParticles;
