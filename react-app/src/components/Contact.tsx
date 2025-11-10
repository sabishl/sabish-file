import type { FC } from 'react';

const Contact: FC = () => {
  return (
    <section id="contact" className="min-h-[40vh] bg-white/5 backdrop-blur-sm flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-gradient-to-br from-white/5 to-white/3 rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <p className="text-slate-300 mb-6">Reach out to me — I usually reply within a day.</p>

        <div className="space-y-3 text-slate-200">
          <div>
            <span className="font-semibold">Email:</span>{' '}
            <a className="text-blue-400 hover:underline" href="mailto:lsabish2001@gmail.com">lsabish2001@gmail.com</a>
          </div>

          <div>
            <span className="font-semibold">Phone:</span>{' '}
            <a className="text-blue-400 hover:underline" href="tel:+919095399164">+91 90953 99164</a>
          </div>

          <div>
            <span className="font-semibold">LinkedIn:</span>{' '}
            <a className="text-blue-400 hover:underline" href="https://www.linkedin.com/in/sabish-l" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/sabish-l</a>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-slate-400">You can also use the WhatsApp button at the bottom-right to message me directly.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
