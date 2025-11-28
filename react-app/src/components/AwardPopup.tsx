import { useEffect, useState } from 'react';
import type { FC } from 'react';
import awardImage from '../assets/best-project-award.jpg';

interface AwardPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AwardPopup: FC<AwardPopupProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Trigger entrance animation
      setTimeout(() => setIsVisible(true), 50);

      // Generate random sparkles
      const newSparkles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100
      }));
      setSparkles(newSparkles);
    } else {
      document.body.style.overflow = 'unset';
      setIsVisible(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for exit animation
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Animated Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Animated Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animation: `sparkle ${2 + sparkle.id * 0.3}s ease-in-out infinite`
          }}
        >
          <div className="relative">
            <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      ))}

      {/* Popup Content */}
      <div className="relative w-full max-w-lg mx-auto">
        {/* Main Popup Card with Entrance Animation */}
        <div className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 ${
          isVisible
            ? 'scale-100 opacity-100 translate-y-0 rotate-0'
            : 'scale-75 opacity-0 translate-y-8 rotate-2'
        }`}>

          {/* Animated Yellow Header Strip */}
          <div className="h-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>

          {/* Enhanced Close Button */}
          <button
            onClick={handleClose}
            className={`absolute top-6 right-6 w-10 h-10 bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-90 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
            aria-label="Close award popup"
          >
            <svg className="w-5 h-5 text-gray-700 hover:text-yellow-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Award Content with Staggered Animation */}
          <div className="p-6 text-center">
            {/* Award Title */}
            <div className={`mb-4 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '100ms' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 animate-gradient bg-300">
                  Best Project Award
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full animate-pulse"></div>
            </div>

            {/* Award Image */}
            <div className={`relative mb-4 group transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
            }`} style={{ transitionDelay: '200ms' }}>
              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 via-amber-500/30 to-yellow-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-bounce"
                    style={{
                      left: `${20 + i * 12}%`,
                      top: `${10 + (i % 2) * 60}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: `${2 + i * 0.3}s`
                    }}
                  />
                ))}
              </div>

              {/* Image Container with 3D Effect */}
              <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-white/50 transform transition-all duration-700 group-hover:rotate-1 group-hover:scale-105">
                <img
                  src={awardImage}
                  alt="Best Project Award Certificate"
                  className="w-full h-auto max-h-[280px] object-contain bg-white transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />

                {/* Shimmer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>

            {/* Award Description */}
            <div className={`space-y-3 text-gray-700 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              <p className="text-base font-medium group">
                🏆 <span className="text-yellow-600 font-bold transition-all duration-300 group-hover:scale-110 inline-block">Outstanding Achievement</span>
              </p>
              <p className="text-sm leading-relaxed max-w-md mx-auto">
                This prestigious award recognizes exceptional innovation, technical excellence,
                and impactful problem-solving in project development.
              </p>

              {/* Achievement Highlights with Hover Effects */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {[
                  { text: 'Innovation Excellence', color: 'yellow' },
                  { text: 'Technical Mastery', color: 'amber' },
                  { text: 'Impactful Solution', color: 'yellow' }
                ].map((badge, index) => (
                  <span
                    key={badge.text}
                    className={`px-3 py-1 bg-${badge.color}-100 text-${badge.color}-700 rounded-full text-xs font-medium border border-${badge.color}-300 transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-lg cursor-default`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced Close Button */}
            <button
              onClick={handleClose}
              className={`mt-6 px-6 py-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 text-gray-800 font-bold rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 border-2 border-yellow-400 transform hover:-translate-y-1 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <span className="flex items-center gap-2">
                Close
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardPopup;

// Custom CSS Animations
const style = document.createElement('style');
style.textContent = `
  @keyframes sparkle {
    0%, 100% {
      opacity: 0;
      transform: scale(0) rotate(0deg);
    }
    50% {
      opacity: 1;
      transform: scale(1) rotate(180deg);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes gradient {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }

  .animate-shimmer {
    animation: shimmer 2s ease-in-out infinite;
  }

  .animate-sparkle {
    animation: sparkle 2s ease-in-out infinite;
  }
`;
if (typeof document !== 'undefined') {
  document.head.appendChild(style);
}