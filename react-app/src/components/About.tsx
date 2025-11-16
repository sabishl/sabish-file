import type { FC } from 'react';
import { useState } from 'react';
import aboutImage from '../assets/ab6.png';
import awardImage from '../assets/best-project-award.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: FC = () => {
  const [showAchievementModal, setShowAchievementModal] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollReveal({ threshold: 0.1 });
  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "JavaScript", "SQL"]
    },
    {
      category: "Web Technologies",
      items: ["ReactJS", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"]
    },
    {
      category: "AI / ML / LLM Tools",
      items: ["PyTorch", "Neural Networks", "Machine Learning", "LLM", "Ollama", "Hugging Face"]
    }
  ];

  return (
    <section id="about" ref={sectionRef} className={`relative min-h-screen bg-white flex items-center justify-center px-6 py-20 lg:px-20 overflow-hidden transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-200/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-100/6 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">

        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 delay-300 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 animate-gradient bg-300">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side - Content */}
          <div ref={contentRef} className={`space-y-8 order-2 lg:order-1 transition-all duration-700 delay-500 ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I'm <span className="text-gray-900 font-semibold">Sabish</span>, a <span className="text-yellow-600 font-bold">Full Stack Developer</span> skilled in <span className="text-blue-600 font-semibold">React</span>, <span className="text-green-600 font-semibold">Node</span>, <span className="text-yellow-600 font-semibold">Express</span>, and <span className="text-indigo-600 font-semibold">PostgreSQL</span>, with hands-on experience in <span className="text-purple-600 font-bold">AI, Machine Learning, and Neural Networks</span>.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I love combining <span className="text-blue-600 font-semibold">web development</span> and <span className="text-purple-600 font-semibold">AI innovation</span> to create <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">smart, scalable, and impactful solutions</span> using platforms like <span className="text-green-600 font-semibold">OpenAI</span>, <span className="text-blue-500 font-semibold">Anthropic</span>, <span className="text-indigo-500 font-semibold">Gemma</span>, and <span className="text-orange-500 font-semibold">Hugging Face</span>.
              </p>
            </div>

            {/* Achievement Section - Compact Award Card */}
            <div className="pt-4 mb-4">
              <div className="group relative">
                {/* Subtle glow effect background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-yellow-400/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"></div>

                {/* Main award card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border-2 border-yellow-200/50 hover:border-yellow-300/70 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 overflow-hidden">

                  {/* Content */}
                  <div className="relative p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row items-center gap-4">

                      {/* Left Section - Award Icon & Details */}
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        {/* Compact Award Badge */}
                        <div className="relative group/icon flex-shrink-0">
                          {/* Main badge container */}
                          <div className="relative bg-gradient-to-r from-yellow-400 to-amber-400 px-4 py-2 rounded-xl border border-yellow-300 hover:border-yellow-500 transition-all duration-300">
                            <span className="text-white font-bold text-sm">AWARD</span>
                            {/* Small sparkle effect */}
                            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                          </div>
                        </div>

                        {/* Award Information */}
                        <div className="flex-1 min-w-0">
                          {/* Compact award badge */}
                          <div className="inline-flex items-center gap-1.5 bg-yellow-100 px-2.5 py-1 rounded-full border border-yellow-300 mb-2">
                            <svg className="w-3.5 h-3.5 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <span className="text-yellow-700 text-[10px] sm:text-xs font-semibold">EXCELLENCE AWARD</span>
                          </div>

                          <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-1 leading-tight">
                            Oracle Best Project Award
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm mb-2">
                            Presented by Oracle APEX Team
                          </p>

                          {/* Compact achievement details */}
                          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                              </svg>
                              2024
                            </span>
                            </div>
                        </div>
                      </div>

                      {/* Right Section - Compact View Button */}
                      <div className="flex sm:flex-col items-center gap-3 sm:gap-2 ml-auto sm:ml-0">
                        <button
                          onClick={() => {
                            console.log('Award button clicked!');
                            setShowAchievementModal(true);
                          }}
                          className="group/btn relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 text-white font-semibold py-2 px-4 sm:px-5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 flex items-center gap-2 whitespace-nowrap border border-yellow-300 overflow-hidden text-sm sm:text-base"
                        >
                          {/* Button shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>

                          <svg className="w-4 h-4 sm:w-4 sm:h-4 relative z-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="relative z-10">Certificate</span>
                        </button>

                        {/* Compact project info */}
                        <div className="text-center hidden sm:block">
                          <p className="text-gray-500 text-[10px]">College Admission Management System</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom decorative element */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400/30 via-amber-400/30 to-yellow-400/30"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Cards - Horizontal Layout (3 cards below) */}
            <div ref={skillsRef} className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 delay-700 ${
              skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              {skills.map((skillSet, index) => (
                <div
                  key={index}
                  className={`bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-2 card-hover`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header */}
                  <div className="mb-3">
                    <h3 className="text-gray-800 font-bold text-sm">
                      {skillSet.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-1.5">
                    {skillSet.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] text-yellow-700 bg-yellow-100/50 px-2 py-0.5 rounded border border-yellow-300/30 hover:bg-yellow-200/50 hover:border-yellow-400/50 transition-colors duration-200"
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
          <div className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-700 delay-700 ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="relative group overflow-visible">
              
              {/* Animated background circles */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Tech badges floating effect */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-400/30 animate-bounce group-hover:scale-110 transition-transform duration-300">
                <span className="text-blue-300 font-bold text-sm">React</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-purple-400/30 animate-bounce group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.5s' }}>
                <span className="text-purple-300 font-bold text-sm">AI</span>
              </div>
              
              {/* Clean Image container */}
              <div className="relative group">
                {/* Main image container - clean design */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="Full Stack Developer and AI Researcher"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                  />
                </div>

                {/* User-friendly hover info */}
                <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-center text-sm font-medium">
                    Sabish L - Full Stack Developer
                  </p>
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
            className="bg-white rounded-2xl max-w-3xl w-full relative shadow-2xl animate-fade-in max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-2xl"></div>
            {/* Close Button */}
            <button
              onClick={() => setShowAchievementModal(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:border-red-300 backdrop-blur-sm"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto bg-gray-50 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 hover:scrollbar-thumb-blue-400">
              {/* Certificate Section */}
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-4 sm:p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 mb-3">
                    <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-yellow-300 font-semibold text-xs">CERTIFICATE OF EXCELLENCE</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    Oracle Best Project Award
                  </h2>
                  <p className="text-white/80 text-xs mb-4">
                    Recognized for Outstanding Achievement in Full-Stack Development
                  </p>
                </div>

                {/* Certificate Image */}
                <div className="relative max-w-2xl mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg blur-lg opacity-50"></div>
                  <div className="relative bg-white p-3 sm:p-4 rounded-lg shadow-xl border-3 border-white">
                    <img
                      src={awardImage}
                      alt="Oracle Best Project Award Certificate"
                      className="w-full h-auto rounded"
                    />

                    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <span>🏆</span>
                      <span>Award</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Details */}
              <div className="p-4 sm:p-6 pb-8">
                {/* Achievement Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg mb-3">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    Oracle Best Project Award
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Presented by Oracle APEX Development Team
                  </p>

                  {/* Compact Award Badges */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                      </svg>
                      2024
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Excellence
                    </div>
                    <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      Top Performer
                    </div>
                  </div>
                </div>

                {/* Compact Project Details Card */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </div>
                      College Admission Management System
                    </h4>
                  </div>

                  <div className="p-4">
                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                        <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-1">Platform</p>
                        <p className="text-gray-800 font-bold">Oracle APEX</p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                        <p className="text-purple-600 text-xs font-semibold uppercase tracking-wider mb-1">Category</p>
                        <p className="text-gray-800 font-bold">Full-Stack Development</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="text-gray-800 font-bold mb-2 flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          Project Overview
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Award-winning <span className="font-semibold text-blue-600">College Admission Management System</span> built on <span className="font-semibold text-purple-600">Oracle APEX</span> demonstrating enterprise-level development capabilities.
                        </p>
                      </div>

                      <div>
                        <h5 className="text-gray-800 font-bold mb-2 flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.952 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                            </svg>
                          </div>
                          Key Features
                        </h5>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-gray-600 text-xs">Complete student registration workflow</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-gray-600 text-xs">Intelligent course allocation system</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-gray-600 text-xs">Comprehensive fee management</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-gray-600 text-xs">Advanced admin dashboard</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-gray-600 text-xs">Custom reporting system</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-gray-600 text-xs">Real-time analytics & insights</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
