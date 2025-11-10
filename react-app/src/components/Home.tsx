import type { FC } from 'react';
import sabishImage from '../assets/sabish.png';

const Home: FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 py-12 lg:px-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side - Text Content (now on the right at lg) */}
        <div className="order-2 lg:order-2 text-white space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 transition-all duration-300">Sabish</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
            I am a <span className="font-semibold text-white hover:text-blue-400 transition-colors duration-300">Full Stack Developer</span> and <span className="font-semibold text-white hover:text-purple-400 transition-colors duration-300">AI Researcher</span>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            <a 
              href="#" 
              className="w-12 h-12 bg-slate-700/50 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            
            <a 
              href="#" 
              className="w-12 h-12 bg-slate-700/50 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Download Resume + Assistant Buttons */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900">
              Download Resume
            </button>
            <button className="px-8 py-3 bg-slate-800/70 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-600 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
              Assistant
            </button>
          </div>
        </div>

        {/* Right Side - Image (now on the left at lg) */}
        <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative group">
            {/* Glow effect background */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500"></div>
            
            {/* Image container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 shadow-2xl">
              <img 
                src={sabishImage} 
                alt="Sabish - Full Stack Developer and AI Researcher" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;
