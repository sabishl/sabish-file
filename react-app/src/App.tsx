import { useState } from 'react';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import FloatingButtons from './components/FloatingButtons.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    if (!isChatOpen) {
      setIsChatOpen(true);
    } else {
      setIsChatOpen(false);
    }
  };

  return (
    <>
      <Home toggleChat={toggleChat} />
      <About />
      <Experience />
      <Projects />
      <FloatingButtons isChatOpen={isChatOpen} toggleChat={toggleChat} />
      <Footer />
    </>
  );
}

export default App;
