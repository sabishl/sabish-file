import { useEffect } from 'react';
import type { FC } from 'react';
import awardImage from '../assets/best-project-award.jpg';

interface AwardPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AwardPopup: FC<AwardPopupProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup Content */}
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Main Popup Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 animate-pulse-once">

          {/* Yellow Header Strip */}
          <div className="h-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 shadow-lg"
            aria-label="Close award popup"
          >
            <svg className="w-5 h-5 text-gray-700 hover:text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Award Content */}
          <div className="p-8 text-center">
            {/* Award Title */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
                  Best Project Award
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
            </div>

            {/* Award Image */}
            <div className="relative mb-6 group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 via-amber-500/30 to-yellow-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                <img
                  src={awardImage}
                  alt="Best Project Award Certificate"
                  className="w-full h-auto max-h-[400px] object-contain bg-white transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Award Description */}
            <div className="space-y-4 text-gray-700">
              <p className="text-lg font-medium">
                🏆 <span className="text-yellow-600 font-bold">Outstanding Achievement</span>
              </p>
              <p className="text-base leading-relaxed max-w-lg mx-auto">
                This prestigious award recognizes exceptional innovation, technical excellence,
                and impactful problem-solving in project development. It represents the culmination
                of dedication, creativity, and technical mastery.
              </p>

              {/* Achievement Highlights */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium border border-yellow-300">
                  Innovation Excellence
                </span>
                <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium border border-amber-300">
                  Technical Mastery
                </span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium border border-yellow-300">
                  Impactful Solution
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 text-gray-800 font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 border-2 border-yellow-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardPopup;