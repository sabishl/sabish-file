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
  description: string;
  image: string;
  technologies: string[];
  link: string;
  linkType: 'github' | 'live';
  isPrivate?: boolean;
}

const mainProjects: ProjectData[] = [
  {
    id: 1,
    title: 'Wavex Translation AI',
    description: 'Translates English audio, video, and PDF files into 6 Indian languages in real-time using Gemma and FastWhisper — live in production at wisright.com.',
    image: wavexImage,
    technologies: ['Gemma', 'Faster Whisper', 'React'],
    link: 'https://wavex.wisright.com/',
    linkType: 'live',
  },
  {
    id: 2,
    title: 'E-Commerce Site',
    description: 'MERN stack shopping platform with user auth, product management, cart, and order tracking built on MongoDB, Express, React, and Node.js.',
    image: ecommerceImage,
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: '#',
    linkType: 'github',
    isPrivate: true,
  },
  {
    id: 3,
    title: 'AI Movie Review Summarizer',
    description: 'Locally-run AI pipeline using Gemma + TinyLlama via Ollama to summarize film reviews — no cloud API needed, fully self-hosted.',
    image: aiMovieSummarizerImage,
    technologies: ['Gemma', 'TinyLlama', 'Ollama', 'HTML', 'CSS', 'JS'],
    link: '#',
    linkType: 'github',
    isPrivate: true,
  },
];

const additionalProjects: ProjectData[] = [
  {
    id: 4,
    title: 'Learning Management System',
    description: 'Full-stack learning platform with course management, student tracking, and AI assistant integration built on React + Node + PostgreSQL.',
    image: lmsImage,
    technologies: ['ReactJS', 'NodeJS', 'ExpressJS', 'PostgreSQL', 'Kimi'],
    link: 'https://lms.wisright.com/',
    linkType: 'live',
  },
  {
    id: 5,
    title: 'Mano Crackers E-commerce',
    description: 'WooCommerce e-commerce site serving real customers with product catalog, cart, and payment flow — live in production.',
    image: manoCrackersImage,
    technologies: ['WordPress', 'WooCommerce'],
    link: 'https://manocrackers.co.in/shop/',
    linkType: 'live',
  },
];

const techColors: Record<string, string> = {
  React: 'bg-blue-100 text-blue-700 border-blue-300',
  ReactJS: 'bg-blue-100 text-blue-700 border-blue-300',
  'Node.js': 'bg-green-100 text-green-700 border-green-300',
  NodeJS: 'bg-green-100 text-green-700 border-green-300',
  Express: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  ExpressJS: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  MongoDB: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  PostgreSQL: 'bg-indigo-100 text-indigo-700 border-indigo-300',
  Gemma: 'bg-purple-100 text-purple-700 border-purple-300',
  'Faster Whisper': 'bg-pink-100 text-pink-700 border-pink-300',
  TinyLlama: 'bg-orange-100 text-orange-700 border-orange-300',
  Ollama: 'bg-gray-100 text-gray-700 border-gray-300',
  HTML: 'bg-orange-100 text-orange-700 border-orange-300',
  CSS: 'bg-cyan-100 text-cyan-700 border-cyan-300',
  JS: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  WordPress: 'bg-blue-100 text-blue-700 border-blue-300',
  WooCommerce: 'bg-purple-100 text-purple-700 border-purple-300',
  Kimi: 'bg-pink-100 text-pink-700 border-pink-300',
};

const Projects: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 380 + 24;
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + (direction === 'left' ? -cardWidth : cardWidth),
        behavior: 'smooth',
      });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderProjectCard = (project: ProjectData, index: number) => (
    <div
      key={project.id}
      className="flex-shrink-0 w-[320px] md:w-[380px] bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-gray-100 hover:border-yellow-300 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 overflow-hidden group hover:-translate-y-2"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4">
          {project.linkType === 'live' && (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">LIVE</span>
          )}
          {project.isPrivate && (
            <span className="bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">PRIVATE</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 min-h-[3.75rem]">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${techColors[tech] ?? 'bg-gray-100 text-gray-700 border-gray-300'}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action */}
        {project.isPrivate ? (
          <div className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-500 font-bold py-3 px-6 rounded-xl border-2 border-gray-200 cursor-not-allowed text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Private Repository
          </div>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-gray-800 font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-yellow-400 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            Visit Live Site
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" ref={sectionRef} className={`relative min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-200/8 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">

        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 delay-300 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 animate-gradient bg-300">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full animate-pulse"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Production-ready applications spanning Full Stack, AI agent integration, and automation — each one shipped and serving real users.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-6 mb-14">
          <button
            onClick={() => scroll('left')}
            className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-gray-800 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-yellow-300"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-x-auto pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth' }}
          >
            <div className="flex gap-6">
              {[...mainProjects, ...additionalProjects].map((project, i) => renderProjectCard(project, i))}
            </div>
          </div>

          <button
            onClick={() => scroll('right')}
            className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-gray-800 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-yellow-300"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Freelance CTA */}
        <div className="text-center bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-2xl p-8">
          <p className="text-gray-700 text-lg font-medium mb-2">Have a project in mind?</p>
          <p className="text-gray-500 mb-6">I'm available for freelance work — let's build something together.</p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-gray-800 font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/40"
          >
            Let's Talk
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

if (typeof document !== 'undefined' && !document.querySelector('style[data-projects-scrollbar]')) {
  const style = document.createElement('style');
  style.dataset.projectsScrollbar = '';
  style.textContent = `.projects-scroll::-webkit-scrollbar { display: none; }`;
  document.head.appendChild(style);
}
