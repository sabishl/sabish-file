import { useState, useEffect } from 'react';
import type { FC } from 'react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 right-4 z-50 transition-all duration-500">
      <div className="hidden md:flex items-center bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-600/50 p-1 shadow-xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative px-4 py-2.5 rounded-full font-medium transition-all duration-300 group text-sm ${
              activeSection === item.id
                ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30'
                : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <span className="relative z-10">
              {item.label}
            </span>

            {/* Hover effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Active indicator */}
            {activeSection === item.id && (
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-white/50"></div>
            )}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button - Always visible */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden relative w-10 h-10 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center group shadow-xl"
      >
        <div className="w-6 h-5 flex flex-col justify-center gap-1">
          <div className={`h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></div>
          <div className={`h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></div>
          <div className={`h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></div>
        </div>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full right-0 mt-2 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-600/50 shadow-2xl p-4 min-w-[150px] z-40">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;