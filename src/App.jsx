import './App.css';
import Navbar from './Sections/Navbar';  
import Media from './Sections/Media';
import Subu from './Sections/Subu';      
import Skills from './Sections/Skills';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';

function App() {
  return (
      <>
      <Navbar />
      <Media />
      <Subu />
      <Skills />
      <Projects />
      <Contact />
      <footer > 
        © Subin
      </footer>
      </>
    
  );
}

export default App;