import type { FC } from 'react';
import { useState } from 'react';
import aboutImage from '../assets/ab6.png';
import awardImage from '../assets/best-project-award.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

const specialties = [
  {
    title: 'Full Stack Web Apps',
    stack: 'React · Node · PostgreSQL',
    description: 'End-to-end delivery in days, not weeks.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'blue',
  },
  {
    title: 'AI Agent Development',
    stack: 'Gemma · Llama · Claude',
    description: 'Agents that take action, not just chat.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    color: 'purple',
  },
  {
    title: 'Automation & LLM Ops',
    stack: 'FastWhisper · Ollama · Groq',
    description: 'Pipelines that save hours of manual work.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'yellow',
  },
];

const skills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Web Technologies',
    items: ['ReactJS', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    category: 'AI / ML / LLM Tools',
    items: ['PyTorch', 'Neural Networks', 'Machine Learning', 'LLM', 'Hugging Face'],
  },
  {
    category: 'AI Agent & Automation',
    items: ['LangChain', 'Groq API', 'FastWhisper', 'Ollama', 'Prompt Engineering', 'AI Pipelines'],
  },
  {
    category: 'Dev Tools & Platforms',
    items: ['Git', 'REST APIs', 'XAMPP', 'Vite', 'VS Code', 'Postman'],
  },
];

const specialtyColorMap: Record<string, string> = {
  blue: 'bg-blue-50 border-blue-200 hover:border-blue-400 text-blue-600',
  purple: 'bg-purple-50 border-purple-200 hover:border-purple-400 text-purple-600',
  yellow: 'bg-yellow-50 border-yellow-200 hover:border-yellow-400 text-yellow-600',
};

const About: FC = () => {
  const [showAchievementModal, setShowAchievementModal] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" ref={sectionRef} className={`relative min-h-screen bg-white flex items-center justify-center px-6 py-20 lg:px-20 overflow-hidden transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-200/8 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">

        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 delay-300 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 animate-gradient bg-300">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Side */}
          <div ref={contentRef} className={`space-y-8 order-2 lg:order-1 transition-all duration-700 delay-500 ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I'm <span className="text-gray-900 font-semibold">Sabish</span>, a <span className="text-yellow-600 font-bold">Full Stack &amp; AI Agent Developer</span> with hands-on experience building production-ready web applications using <span className="text-blue-600 font-semibold">React</span>, <span className="text-green-600 font-semibold">Node.js</span>, <span className="text-yellow-600 font-semibold">Express</span>, and <span className="text-indigo-600 font-semibold">PostgreSQL</span> — integrated with AI backends powered by <span className="text-purple-600 font-semibold">Gemma, Llama, Kimi, and Anthropic</span> models.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                If you need a web application that does something intelligent — translates documents, summarizes content, automates a workflow, or talks to your users — I can build the entire thing: the UI, the backend, and the AI layer. <span className="font-semibold text-gray-800">No handoffs, no gaps.</span>
              </p>
            </div>

            {/* Specialty Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {specialties.map((sp, i) => (
                <div
                  key={i}
                  className={`rounded-xl border-2 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg ${specialtyColorMap[sp.color]}`}
                >
                  <div className="mb-2">{sp.icon}</div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">{sp.title}</h4>
                  <p className="text-xs text-gray-500 mb-2">{sp.stack}</p>
                  <p className="text-xs text-gray-600 font-medium">{sp.description}</p>
                </div>
              ))}
            </div>

            {/* Award Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-yellow-400/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border-2 border-yellow-200/50 hover:border-yellow-300/70 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 overflow-hidden">
                <div className="relative p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <div className="relative bg-gradient-to-r from-yellow-400 to-amber-400 px-4 py-2 rounded-xl border border-yellow-300 flex-shrink-0">
                        <span className="text-white font-bold text-sm">AWARD</span>
                        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="inline-flex items-center gap-1.5 bg-yellow-100 px-2.5 py-1 rounded-full border border-yellow-300 mb-2">
                          <svg className="w-3.5 h-3.5 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          <span className="text-yellow-700 text-[10px] sm:text-xs font-semibold">EXCELLENCE AWARD</span>
                        </div>
                        <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-1 leading-tight">Oracle Best Project Award</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">Presented by Oracle APEX Team · 2024</p>
                      </div>
                    </div>
                    <div className="ml-auto sm:ml-0">
                      <button
                        onClick={() => setShowAchievementModal(true)}
                        className="group/btn relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 text-white font-semibold py-2 px-4 sm:px-5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 flex items-center gap-2 whitespace-nowrap border border-yellow-300 overflow-hidden text-sm"
                      >
                        <svg className="w-4 h-4 relative z-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="relative z-10">Certificate</span>
                      </button>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400/30 via-amber-400/30 to-yellow-400/30"></div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef} className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 transition-all duration-700 delay-700 ${
              skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              {skills.map((skillSet, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-gray-800 font-bold text-sm mb-3">{skillSet.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skillSet.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300/50 hover:bg-yellow-200 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side — Image */}
          <div className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-700 delay-700 ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="relative group overflow-visible">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>

              {/* Floating badges with solid backgrounds */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-400 animate-bounce group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-sm">React</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-purple-400 animate-bounce group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ animationDelay: '0.5s' }}>
                <span className="text-white font-bold text-sm">AI</span>
              </div>

              <div className="relative group/img">
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="Sabish L — Full Stack & AI Agent Developer"
                    className="w-full h-full object-cover transition-all duration-500 group-hover/img:scale-105 group-hover/img:brightness-105"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 opacity-0 group-hover/img:opacity-100 transition-all duration-300">
                  <p className="text-white text-center text-sm font-medium">Sabish L — Full Stack & AI Agent Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Modal */}
      {showAchievementModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setShowAchievementModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full relative shadow-2xl animate-fade-in max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 pointer-events-none"></div>
            <button
              onClick={() => setShowAchievementModal(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:border-red-300"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-4 sm:p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 mb-3">
                    <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-yellow-300 font-semibold text-xs">CERTIFICATE OF EXCELLENCE</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Oracle Best Project Award</h2>
                  <p className="text-white/80 text-xs">Recognized for Outstanding Achievement in Full-Stack Development</p>
                </div>
                <div className="relative max-w-2xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg blur-lg opacity-50"></div>
                  <div className="relative bg-white p-3 sm:p-4 rounded-lg shadow-xl">
                    <img src={awardImage} alt="Oracle Best Project Award Certificate" className="w-full h-auto rounded" />
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <span>🏆</span>
                      <span>Award</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 pb-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Oracle Best Project Award</h3>
                  <p className="text-gray-600 text-sm mb-4">Presented by Oracle APEX Development Team · 2024</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">2024</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Excellence</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">Top Performer</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                    <h4 className="text-lg font-bold text-white">College Admission Management System</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Award-winning <span className="font-semibold text-blue-600">College Admission Management System</span> built on <span className="font-semibold text-purple-600">Oracle APEX</span> demonstrating enterprise-level full-stack development.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {['Complete student registration workflow', 'Intelligent course allocation system', 'Comprehensive fee management', 'Advanced admin dashboard', 'Custom reporting system', 'Real-time analytics & insights'].map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <p className="text-gray-600 text-xs">{f}</p>
                        </div>
                      ))}
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
