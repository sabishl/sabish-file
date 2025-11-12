import { useRef } from 'react';
import type { FC } from 'react';

interface ProjectData {
  id: number;
  title: string;
  image: string;
  technologies: string[];
  link: string;
  linkType: 'github' | 'live';
}

const mainProjects: ProjectData[] = [
  {
    id: 1,
    title: "Wavex Translation AI Application",
    image: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Wavex+AI",
    technologies: ["Gemma 4n e34b", "Faster Whisper", "React"],
    link: "https://wavex.wisright.com/",
    linkType: "live"
  },
  {
    id: 2,
    title: "E-Commerce Site",
    image: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=E-Commerce",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://wavex.wisright.com/",
    linkType: "github"
  },
  {
    id: 3,
    title: "AI Movie Review Summarizer",
    image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=AI+Summarizer",
    technologies: ["Gemma", "TinyLlama", "Ollama", "HTML", "CSS", "JS"],
    link: "https://wavex.wisright.com/",
    linkType: "github"
  }
];

const additionalProjects: ProjectData[] = [
  {
    id: 4,
    title: "Learning Management System",
    image: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=LMS",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "PostgreSQL", "Kimi"],
    link: "https://lms.wisright.com/",
    linkType: "live"
  },
  {
    id: 5,
    title: "Mano Crackers E-commerce Site",
    image: "https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Mano+Crackers",
    technologies: ["WordPress", "WooCommerce"],
    link: "https://manocrackers.co.in/shop/",
    linkType: "live"
  }
];

const Projects: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 350; // Card width
      const gap = 24; // Gap between cards
      const scrollAmount = cardWidth + gap; // Total scroll amount
      const newScrollPosition = direction === 'left'
        ? Math.max(0, scrollContainerRef.current.scrollLeft - scrollAmount)
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const renderProjectCard = (project: ProjectData) => (
    <div
      key={project.id}
      className="flex-shrink-0 w-[320px] md:w-[350px] bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Project Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 min-h-[3.5rem]">
          {project.title}
        </h3>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx}
              className="text-[10px] text-blue-300 bg-blue-900/30 px-2 py-0.5 rounded border border-blue-700/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 ${
            project.linkType === 'github'
              ? 'bg-slate-700 hover:bg-slate-600'
              : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
          } text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg`}
        >
          {project.linkType === 'github' ? (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Github
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Site
            </>
          )}
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="min-h-[60vh] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in Full Stack Development, AI/ML, and Web Technologies
          </p>
        </div>

        {/* All Projects - Horizontal Scroll with Arrow Buttons */}
        <div className="relative group/carousel flex items-center gap-4">

          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500/90 to-purple-500/90 hover:from-blue-500 hover:to-purple-500 text-white rounded-full shadow-xl shadow-purple-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white/20 backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Projects Container */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <div className="flex gap-6">
              {[...mainProjects, ...additionalProjects].map((project) => renderProjectCard(project))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500/90 to-purple-500/90 hover:from-blue-500 hover:to-purple-500 text-white rounded-full shadow-xl shadow-purple-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white/20 backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
};

export default Projects;

// Hide scrollbar CSS
const style = document.createElement('style');
style.textContent = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;
if (typeof document !== 'undefined') {
  document.head.appendChild(style);
}
