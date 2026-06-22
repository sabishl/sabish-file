import type { FC } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const whatsappNumber = '919095399164';

const Contact: FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section id="contact" className="relative bg-white px-6 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-200/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-200/6 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div ref={ref} className={`max-w-3xl mx-auto relative z-10 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ready to build something <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-600 animate-gradient bg-300">together?</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-yellow-400 to-amber-500 mx-auto rounded-full mb-4"></div>
          <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Currently open to freelance projects and full-time opportunities
          </span>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-100 hover:border-yellow-200 p-8 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300">

          {/* WhatsApp CTA — primary */}
          <div className="mb-8">
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/40 text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Message me on WhatsApp
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">Fastest response — usually within a few hours</p>
          </div>

          {/* Other contact options */}
          <div className="space-y-4 text-gray-700">
            <div className="bg-linear-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-200 hover:border-yellow-300 transition-all duration-300">
              <span className="font-semibold text-gray-800">Email:</span>{' '}
              <a className="text-yellow-600 hover:text-yellow-700 font-medium hover:underline transition-colors duration-300" href="mailto:lsabish2001@gmail.com">
                lsabish2001@gmail.com
              </a>
            </div>

            <div className="bg-linear-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-200 hover:border-yellow-300 transition-all duration-300">
              <span className="font-semibold text-gray-800">Phone:</span>{' '}
              <a className="text-yellow-600 hover:text-yellow-700 font-medium hover:underline transition-colors duration-300" href="tel:+919095399164">
                +91 90953 99164
              </a>
            </div>

            <div className="bg-linear-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-200 hover:border-yellow-300 transition-all duration-300">
              <span className="font-semibold text-gray-800">LinkedIn:</span>{' '}
              <a
                className="text-yellow-600 hover:text-yellow-700 font-medium hover:underline transition-colors duration-300"
                href="https://www.linkedin.com/in/sabish-l"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's connect — I respond within 24 hours
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
