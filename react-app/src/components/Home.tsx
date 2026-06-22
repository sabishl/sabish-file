import { useEffect, useState } from 'react';
import type { FC } from 'react';
import sabishImage from '../assets/sabish-bg.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

const roles = ['Full Stack Developer', 'AI Agent Developer', 'Automation Engineer', 'LLM Integration Expert'];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Shipped' },
  { value: '4+', label: 'LLMs Integrated' },
  { value: '3', label: 'Live Production Sites' },
];

const Home: FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [textAnimation, setTextAnimation] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setTextAnimation(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-200/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div ref={ref} className={`relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>

        {/* Left Side — Text Content */}
        <div className="order-1 lg:order-1 text-gray-800 space-y-6">

          {/* Availability badge */}
          <div className={`transition-all duration-700 delay-300 ${textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for freelance &amp; full-time opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className={`overflow-hidden transition-all duration-700 delay-500 ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 hover:from-yellow-500 hover:to-amber-500 transition-all duration-500 animate-gradient bg-300">
                Sabish L
              </span>
            </span>
          </h1>

          {/* Hero tagline */}
          <p className={`text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl transition-all duration-700 delay-500 ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            I build AI-powered web applications that automate what used to take hours.
          </p>

          {/* Typewriter role */}
          <div className={`transition-all duration-700 delay-700 ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed">
              I am a{' '}
              <span className="relative inline-block">
                <span className="font-semibold text-yellow-600">
                  {displayText}
                  <span className="inline-block w-0.5 h-6 bg-yellow-500 ml-0.5 align-middle animate-pulse"></span>
                </span>
                <span
                  key={currentRoleIndex}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 origin-left animate-underline-expand"
                ></span>
              </span>
            </p>
          </div>

          {/* Social Icons */}
          <div className={`flex gap-4 transition-all duration-700 delay-700 ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a
              href="https://github.com/sabishl"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-white/80 hover:bg-white border-2 border-gray-200 hover:border-yellow-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/30"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-gray-700 group-hover:text-yellow-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sabish-l/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-white/80 hover:bg-white border-2 border-gray-200 hover:border-yellow-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/30"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-gray-700 group-hover:text-yellow-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Buttons */}
          <div className={`flex flex-wrap items-center gap-6 transition-all duration-700 delay-1000 ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a
              href="/Sabish L_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sabish_L_resume.pdf"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 text-gray-800 font-bold rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 opacity-75 blur group-hover:blur-lg transition-all duration-500"></div>
              <span className="relative">Download Resume</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </a>

            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-white/80 hover:bg-white text-gray-700 hover:text-yellow-600 font-bold rounded-2xl border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 overflow-hidden"
            >
              <span className="relative z-10">See My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Stats Row */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 transition-all duration-700 delay-1000 ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {stats.map((stat, i) => (
              <div key={i} className="bg-yellow-50/60 border border-yellow-100 rounded-xl p-3 text-center hover:bg-yellow-50 transition-colors">
                <div className="text-2xl font-bold text-yellow-600">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side — Image */}
        <div className={`order-2 lg:order-2 flex justify-center lg:justify-end transition-all duration-700 delay-500 ${
          textAnimation ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        }`}>
          <div className="relative group">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-3xl">
              <img
                src={sabishImage}
                alt="Sabish — Full Stack & AI Agent Developer"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
