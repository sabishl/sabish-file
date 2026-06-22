import { useState, useEffect } from 'react';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Navigation from './components/Navigation.tsx';
import FloatingButtons from './components/FloatingButtons.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-linear-to-r from-yellow-400 to-amber-500 z-100 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navigation activeSection={activeSection} />

      <main className="relative z-10">
        <Home />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <FloatingButtons isChatOpen={isChatOpen} toggleChat={toggleChat} />
    </div>
  );
}

export default App;
