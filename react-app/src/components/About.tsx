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
      items: ["ReactJS", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"] 
    },
    { 
      category: "AI / ML / LLM Tools", 
      icon: "🤖",
      items: ["PyTorch", "Neural Networks", "Machine Learning", "LLM", "Ollama", "Hugging Face"] 
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

            {/* Achievement Section - Compact Award Card */}
            <div className="pt-4 mb-4">
              <div className="group relative">
                {/* Subtle glow effect background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/10 via-orange-500/10 to-amber-600/10 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"></div>

                {/* Main award card */}
                <div className="relative bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-amber-900/20 backdrop-blur-sm rounded-xl border border-amber-600/25 hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 overflow-hidden">

                  {/* Content */}
                  <div className="relative p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row items-center gap-4">

                      {/* Left Section - Award Icon & Details */}
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        {/* Compact Award Icon */}
                        <div className="relative group/icon flex-shrink-0">
                          {/* Main icon container */}
                          <div className="relative bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm p-3 rounded-xl border border-amber-400/25 hover:border-amber-400/40 transition-all duration-300">
                            <span className="text-3xl sm:text-4xl filter drop-shadow-lg animate-pulse">🏆</span>
                            {/* Small sparkle effect */}
                            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-amber-300 rounded-full animate-ping"></div>
                          </div>
                        </div>

                        {/* Award Information */}
                        <div className="flex-1 min-w-0">
                          {/* Compact award badge */}
                          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm px-2.5 py-1 rounded-full border border-amber-400/25 mb-2">
                            <svg className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <span className="text-amber-300 text-[10px] sm:text-xs font-semibold">EXCELLENCE AWARD</span>
                          </div>

                          <h3 className="text-amber-300 font-bold text-base sm:text-lg mb-1 leading-tight">
                            Oracle Best Project Award
                          </h3>
                          <p className="text-amber-200/70 text-xs sm:text-sm mb-2">
                            Presented by Oracle APEX Team
                          </p>

                          {/* Compact achievement details */}
                          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-amber-200/60">
                            <span className="flex items-center gap-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                              </svg>
                              2024
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                              </svg>
                              National
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Section - Compact View Button */}
                      <div className="flex sm:flex-col items-center gap-3 sm:gap-2 ml-auto sm:ml-0">
                        <button
                          onClick={() => setShowAchievementModal(true)}
                          className="group/btn relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:via-orange-400 hover:to-amber-400 text-white font-semibold py-2 px-4 sm:px-5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 flex items-center gap-2 whitespace-nowrap border border-amber-400/25 hover:border-amber-400/40 overflow-hidden text-sm sm:text-base"
                        >
                          {/* Button shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>

                          <svg className="w-4 h-4 sm:w-4 sm:h-4 relative z-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="relative z-10">Certificate</span>
                        </button>

                        {/* Compact project info */}
                        <div className="text-center hidden sm:block">
                          <p className="text-amber-200/40 text-[10px]">College Admission Management System</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom decorative element */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-amber-500/30"></div>
                  </div>
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

      {/* Compact Achievement Modal Popup */}
      {showAchievementModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setShowAchievementModal(false)}
        >
          <div
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl max-w-3xl w-full relative border border-amber-600/30 shadow-2xl overflow-hidden animate-fade-in max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-2xl"></div>
            {/* Enhanced Close Button */}
            <button
              onClick={() => setShowAchievementModal(false)}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-slate-800/90 hover:bg-red-500/90 backdrop-blur-sm text-white rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 border border-white/10 hover:border-red-400/30 group"
            >
              <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Certificate Section - Compact Design */}
            <div className="w-full bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-amber-900/20 p-4 sm:p-5 rounded-t-2xl border-b border-amber-600/20">

              {/* Certificate Header */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-400/25 mb-3">
                  <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-amber-300 font-semibold text-sm">OFFICIAL CERTIFICATE</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-amber-300 mb-1.5">
                  Oracle Best Project Award
                </h2>
                <p className="text-amber-200/70 text-sm">
                  Certificate of Excellence • National Recognition
                </p>
              </div>

              {/* Certificate Image - Compact */}
              <div className="relative group">
                {/* Certificate frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>

                {/* Main certificate container */}
                <div className="relative bg-white/5 backdrop-blur-sm p-1.5 rounded-xl border border-amber-500/25 hover:border-amber-400/40 transition-all duration-300">
                  <div className="bg-slate-900 rounded-lg p-3 sm:p-4">
                    <img
                      src="https://via.placeholder.com/600x350/1F2937/F59E0B?text=Oracle+APEX+Award+Certificate+2024"
                      alt="Oracle Best Project Award Certificate"
                      className="w-full h-auto rounded-md shadow-xl border border-amber-500/20"
                    />

                    {/* Compact certificate details overlay */}
                    <div className="absolute bottom-3 left-3 right-3 bg-gradient-to-r from-amber-500/90 to-orange-500/90 backdrop-blur-sm p-2.5 rounded-md text-white text-xs">
                      <p className="font-semibold text-sm">College Admission Management System</p>
                      <p className="opacity-90 mt-0.5">Built on Oracle APEX Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Achievement Overview */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
                <div className="relative">
                  {/* Glow effect for trophy */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm p-4 rounded-2xl border border-amber-400/30">
                    <span className="text-5xl lg:text-6xl filter drop-shadow-lg">🏆</span>
                  </div>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-amber-300 mb-2">
                    Oracle Best Project Award
                  </h3>
                  <p className="text-amber-200/70 text-sm mb-4">
                    Presented by Oracle APEX Development Team
                  </p>

                  {/* Award badges */}
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-400/30">
                      <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                      </svg>
                      <span className="text-blue-300 text-xs font-medium">2024</span>
                    </span>
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-400/30">
                      <svg className="w-3 h-3 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-green-300 text-xs font-medium">Excellence</span>
                    </span>
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-400/30">
                      <svg className="w-3 h-3 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="text-purple-300 text-xs font-medium">Top Performer</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details Card */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-amber-600/30 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border border-amber-400/30">
                    <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  College Admission Management System
                </h4>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-600/30">
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Platform</p>
                    <p className="text-white font-semibold flex items-center gap-2">
                      <span className="text-red-400">🔴</span>
                      Oracle APEX
                    </p>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-600/30">
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Category</p>
                    <p className="text-white font-semibold">Full-Stack Development</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-amber-300 font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                      Project Overview
                    </h5>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      This award-winning project showcases a comprehensive <span className="text-amber-400 font-semibold">College Admission Management System</span> built entirely on the <span className="text-blue-400 font-semibold">Oracle APEX platform</span>. The application demonstrates enterprise-level development capabilities and modern web technologies integration.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-amber-300 font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.952 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                      </svg>
                      Key Features
                    </h5>
                    <ul className="text-slate-300 text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        Complete student registration and application workflow
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        Intelligent course allocation system with automated processing
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        Comprehensive fee management and payment tracking
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        Advanced admin dashboard with real-time analytics
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        Custom reporting system with data visualization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
