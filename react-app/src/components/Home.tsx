import { useEffect, useState } from 'react';
import type { FC } from 'react';
import sabishImage from '../assets/sabish.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HomeProps {
  toggleChat: () => void;
}

const Home: FC<HomeProps> = ({ toggleChat }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [textAnimation, setTextAnimation] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = ['Full Stack Developer', 'AI Researcher', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    setTextAnimation(true);
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-12 lg:px-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div ref={ref} className={`relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>

        {/* Left Side - Text Content with animations */}
        <div className="order-2 lg:order-2 text-white space-y-8">
          {/* Main Heading */}
          <h1 className={`overflow-hidden transition-all duration-700 delay-500 ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
              I'm <span className="inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-purple-500 hover:to-blue-400 transition-all duration-500 animate-gradient bg-300">
                  Sabish L
                </span>
              </span>
            </span>
          </h1>

          {/* Animated Role */}
          <div className={`overflow-hidden h-12 transition-all duration-700 delay-700 ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
              I am a <span className="relative">
                <span className="font-semibold text-white inline-block transition-all duration-500">
                  {roles[currentRoleIndex]}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-500"></span>
              </span>
            </p>
          </div>

          {/* Social Icons with enhanced animations */}
          <div className={`flex gap-4 pt-4 transition-all duration-700 delay-900 ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a
              href="https://github.com/sabishl"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-slate-700/50 hover:bg-slate-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 overflow-hidden"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="https://www.linkedin.com/in/sabish-l/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-slate-700/50 hover:bg-slate-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 overflow-hidden"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Enhanced Buttons */}
          <div className={`flex flex-wrap items-center gap-6 pt-8 transition-all duration-700 delay-1100 ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a
              href="/Sabish L_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sabish_L_resume.pdf"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50 overflow-hidden"
            >
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-75 blur group-hover:blur-lg transition-all duration-500"></div>

              {/* Button content */}
              <div className="relative flex items-center justify-center">
                <span>Download Resume</span>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </a>

            <button
              onClick={toggleChat}
              className="group relative px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-white font-bold rounded-2xl border-2 border-slate-600 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-500/50 overflow-hidden"
            >
              {/* Button content */}
              <div className="flex items-center justify-center">
                <span>AI Assistant</span>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            </button>
          </div>

              </div>

        {/* Right Side - Enhanced Image */}
        <div className={`order-1 lg:order-1 flex justify-center lg:justify-start transition-all duration-700 delay-500 ${
          textAnimation ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        }`}>
          <div className="relative group">
            {/* Multiple glow layers */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-30 group-hover:opacity-50 blur-2xl transition-all duration-700 animate-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-700"></div>

            {/* Image container with enhanced effects */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-700/50 shadow-2xl backdrop-blur-sm border border-slate-700/50 group-hover:border-purple-500/30 transition-all duration-700">
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <img
                src={sabishImage}
                alt="Sabish - Full Stack Developer and AI Researcher"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />

                        </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float-delayed"></div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;
