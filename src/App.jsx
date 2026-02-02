import './App.css';
import Navbar from './Sections/Navbar';
import Media from './Sections/Media';
import Subu from './Sections/Subu';
import Skills from './Sections/Skills';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import FloatingParticles from './Common/Stars/FloatingParticles';
import { useTheme } from './Common/Theme/ThemeContext';
function App() {
  const { theme } = useTheme();

  return (
      <>
        {theme === 'dark' && <FloatingParticles />}
        <div style={{ zIndex: 1, position: 'relative' }}>
          <Navbar />
          <Media />
          <Subu />
          <Skills />
          <Projects />
          <Contact />
          <footer >
            © Subin
          </footer>
        </div>
      </>
  );
}

export default App;