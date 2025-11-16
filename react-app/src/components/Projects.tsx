import { useRef } from 'react';
import type { FC } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import wavexImage from '../assets/wavex-ai-translator.webp';
import lmsImage from '../assets/lms-project.png';
import manoCrackersImage from '../assets/mano-crackers.webp';
import ecommerceImage from '../assets/ecommerce-project.jpg';
import aiMovieSummarizerImage from '../assets/ai-movie-summarizer.png';

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
    image: wavexImage,
    technologies: ["Gemma 4n e34b", "Faster Whisper", "React"],
    link: "https://wavex.wisright.com/",
    linkType: "live"
  },
  {
    id: 2,
    title: "E-Commerce Site",
    image: ecommerceImage,
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://wavex.wisright.com/",
    linkType: "github"
  },
  {
    id: 3,
    title: "AI Movie Review Summarizer",
    image: aiMovieSummarizerImage,
    technologies: ["Gemma", "TinyLlama", "Ollama", "HTML", "CSS", "JS"],
    link: "https://wavex.wisright.com/",
    linkType: "github"
  }
];

const additionalProjects: ProjectData[] = [
  {
    id: 4,
    title: "Learning Management System",
    image: lmsImage,
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "PostgreSQL", "Kimi"],
    link: "https://lms.wisright.com/",
    linkType: "live"
  },
  {
    id: 5,
    title: "Mano Crackers E-commerce Site",
    image: manoCrackersImage,
    technologies: ["WordPress", "WooCommerce"],
    link: "https://manocrackers.co.in/shop/",
    linkType: "live"
  }
];

const Projects: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 350;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      const newScrollPosition = direction === 'left'
        ? Math.max(0, scrollContainerRef.current.scrollLeft - scrollAmount)
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const getProjectTypeColor = (tech: string) => {
    const techColors: { [key: string]: string } = {
      'React': 'bg-blue-100 text-blue-700 border-blue-300',
      'ReactJS': 'bg-blue-100 text-blue-700 border-blue-300',
      'Node.js': 'bg-green-100 text-green-700 border-green-300',
      'NodeJS': 'bg-green-100 text-green-700 border-green-300',
      'Express': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'ExpressJS': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'MongoDB': 'bg-emerald-100 text-emerald-700 border-emerald-300',
      'PostgreSQL': 'bg-indigo-100 text-indigo-700 border-indigo-300',
      'Gemma': 'bg-purple-100 text-purple-700 border-purple-300',
      'AI': 'bg-pink-100 text-pink-700 border-pink-300',
      'LLMs': 'bg-pink-100 text-pink-700 border-pink-300',
      'HTML': 'bg-orange-100 text-orange-700 border-orange-300',
      'CSS': 'bg-cyan-100 text-cyan-700 border-cyan-300',
      'JS': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'WordPress': 'bg-blue-100 text-blue-700 border-blue-300',
      'WooCommerce': 'bg-purple-100 text-purple-700 border-purple-300',
    };

    return techColors[tech] || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  const renderProjectCard = (project: ProjectData) => (
    <div
      key={project.id}
      className="flex-shrink-0 w-[320px] md:w-[380px] bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-gray-100 hover:border-yellow-300 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 overflow-hidden group hover:-translate-y-2"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%'
          }}
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            const fallbackImages = {
              "Wavex Translation AI Application": "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Wavex+AI",
              "E-Commerce Site": "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=E-Commerce",
              "Learning Management System": "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=LMS",
              "Mano Crackers E-commerce Site": "https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Mano+Crackers",
              "AI Movie Review Summarizer": "https://via.placeholder.com/400x300/10B981/FFFFFF?text=AI+Summarizer"
            };
            target.src = fallbackImages[project.title as keyof typeof fallbackImages] || "https://via.placeholder.com/400x300/6B7280/FFFFFF?text=Project";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

        {/* Project Type Badge */}
        <div className="absolute top-4 right-4">
          {project.linkType === 'live' && (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
              LIVE
            </span>
          )}
          {project.linkType === 'github' && (
            <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
              CODE
            </span>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 min-h-[3rem] group-hover:text-yellow-600 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`text-xs font-medium px-3 py-1 rounded-full border transition-all duration-300 hover:scale-105 ${getProjectTypeColor(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 ${
            project.linkType === 'github'
              ? 'bg-gray-800 hover:bg-gray-900 text-white'
              : 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 text-gray-800'
          } font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 ${
            project.linkType === 'github' ? 'border-gray-700' : 'border-yellow-400'
          }`}
        >
          {project.linkType === 'github' ? (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Visit Live Site
            </>
          )}
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" ref={sectionRef} className={`relative min-h-screen bg-white flex items-center justify-center px-6 py-20 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-200/8 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">

        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 delay-300 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 animate-gradient bg-300">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full animate-pulse"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore my portfolio of innovative projects spanning Full Stack Development,
            AI/ML applications, and cutting-edge web technologies. Each project demonstrates
            my commitment to excellence and problem-solving.
          </p>
        </div>

            {/* All Projects - Horizontal Scroll with Arrow Buttons */}
        <div className="relative group/carousel flex items-center gap-6">

          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 text-gray-800 rounded-full shadow-2xl shadow-yellow-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-yellow-300 backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 text-gray-800 rounded-full shadow-2xl shadow-yellow-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-yellow-300 backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
