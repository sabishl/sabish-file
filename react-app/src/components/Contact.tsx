import type { FC } from 'react';

const Contact: FC = () => {
  return (
    <section id="contact" className="min-h-[40vh] bg-white flex items-center justify-center px-6 py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-200/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-200/6 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-3xl w-full relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-100 hover:border-yellow-200 p-8 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 mb-8 text-center">Reach out to me — I usually reply within a day.</p>

          <div className="space-y-4 text-gray-700">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-200 hover:border-yellow-300 transition-all duration-300">
              <span className="font-semibold text-gray-800">Email:</span>{' '}
              <a className="text-yellow-600 hover:text-yellow-700 font-medium hover:underline transition-colors duration-300" href="mailto:lsabish2001@gmail.com">lsabish2001@gmail.com</a>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-200 hover:border-yellow-300 transition-all duration-300">
              <span className="font-semibold text-gray-800">Phone:</span>{' '}
              <a className="text-yellow-600 hover:text-yellow-700 font-medium hover:underline transition-colors duration-300" href="tel:+919095399164">+91 90953 99164</a>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-200 hover:border-yellow-300 transition-all duration-300">
              <span className="font-semibold text-gray-800">LinkedIn:</span>{' '}
              <a className="text-yellow-600 hover:text-yellow-700 font-medium hover:underline transition-colors duration-300" href="https://www.linkedin.com/in/sabish-l" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/sabish-l</a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-2 rounded-full border border-yellow-300">
                <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                You can also use the WhatsApp button at the bottom-right to message me directly.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;