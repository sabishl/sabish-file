import type { FC } from 'react';
import { useState } from 'react';
import aboutImage from '../assets/ab6.png';

const About: FC = () => {
  const [showAchievementModal, setShowAchievementModal] = useState(false);
  const skills = [
    { 
      category: "Programming Languages", 
      icon: "🧩",
      items: ["Java", "Python", "JavaScript", "SQL"] 
    },
    { 
      category: "Web Technologies", 
      icon: "🌐",
      items: ["ReactJS", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"] 
    },
    { 
      category: "AI / ML / LLM Tools", 
      icon: "🤖",
      items: ["PyTorch", "Neural Networks", "Machine Learning", "LLM", "Anthropic", "OpenAI", "Gemma", "Kimi", "Ollama", "Hugging Face"] 
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center px-6 py-20 lg:px-20">
      <div className="max-w-7xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I'm <span className="text-white font-semibold">Sabish</span>, a <span className="text-blue-400 font-semibold">Full Stack Developer</span> skilled in <span className="text-cyan-400">React</span>, <span className="text-green-400">Node</span>, <span className="text-yellow-400">Express</span>, and <span className="text-blue-300">PostgreSQL</span>, with hands-on experience in <span className="text-purple-400 font-semibold">AI, Machine Learning, and Neural Networks</span>.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I love combining <span className="text-blue-400 font-semibold">web development</span> and <span className="text-purple-400 font-semibold">AI innovation</span> to create <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">smart, scalable, and impactful solutions</span> using platforms like <span className="text-orange-400">OpenAI</span>, <span className="text-green-400">Anthropic</span>, <span className="text-pink-400">Gemma</span>, and <span className="text-yellow-400">Hugging Face</span>.
              </p>
            </div>

            {/* Achievement Featured Card - Full Width */}
            <div className="pt-6 mb-6">
              <div className="bg-gradient-to-r from-yellow-900/20 via-orange-900/20 to-yellow-900/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-700/30 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {/* Left: Award Info */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="bg-yellow-500/10 p-4 rounded-full border border-yellow-500/30">
                      <span className="text-5xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="text-yellow-400 font-bold text-2xl mb-1">
                        Oracle Best Project Award
                      </h3>
                      <p className="text-yellow-200/70 text-sm">
                        Provided by Oracle APEX Team
                      </p>
                    </div>
                  </div>

                  {/* Right: View Details Button */}
                  <button
                    onClick={() => setShowAchievementModal(true)}
                    className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white text-sm font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 whitespace-nowrap"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Skills Cards - Horizontal Layout (3 cards below) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skills.map((skillSet, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  {/* Header with Icon */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{skillSet.icon}</span>
                    <h3 className="text-white font-bold text-sm">
                      {skillSet.category}
                    </h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="flex flex-wrap gap-1.5">
                    {skillSet.items.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] text-blue-300 bg-blue-900/30 px-2 py-0.5 rounded border border-blue-700/30 hover:bg-blue-800/40 hover:border-blue-600/50 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group overflow-visible">
              
              {/* Animated background circles */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Tech icons floating effect */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-400/30 animate-bounce group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-purple-400/30 animate-bounce group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">🤖</span>
              </div>
              
              {/* Image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm shadow-2xl border border-slate-700/50 group-hover:shadow-purple-500/30 group-hover:border-purple-500/50 transition-all duration-500 overflow-visible">
                <div className="w-full h-full rounded-3xl overflow-hidden">
                  <img 
                    src={aboutImage}
                    alt="Full Stack Developer and AI Researcher"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>

      {/* Achievement Modal Popup */}
      {showAchievementModal && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAchievementModal(false)}
        >
          <div 
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-2xl w-full relative border border-yellow-700/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAchievementModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-700/80 hover:bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Certificate Image */}
            <div className="w-full bg-gradient-to-br from-yellow-900/10 to-orange-900/10 p-6 rounded-t-2xl">
              <img 
                src="https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Oracle+APEX+Award+Certificate"
                alt="Oracle Best Project Award Certificate"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏆</span>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400">
                    Oracle Best Project Award
                  </h3>
                  <p className="text-yellow-200/70 text-sm">
                    Provided by Oracle APEX Team
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About This Award
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  This award was given for developing a <span className="text-yellow-400 font-semibold">College Admission Management System</span> fully built on <span className="text-blue-400 font-semibold">Oracle APEX platform</span>. The application covered the entire admission workflow including student registration, course allocation, fee management, admin dashboard and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
