import { useState, useEffect } from 'react';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Navigation from './components/Navigation.tsx';
import FloatingButtons from './components/FloatingButtons.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects'];
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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main Content */}
      <main className="relative z-10">
        <Home toggleChat={toggleChat} />
        <About />
        <Experience />
        <Projects />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <FloatingButtons isChatOpen={isChatOpen} toggleChat={toggleChat} />
    </div>
  );
}

export default App;
