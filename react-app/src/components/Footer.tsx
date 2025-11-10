import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full py-8 bg-transparent mt-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-300 text-sm">
          © {new Date().getFullYear()} Sabish L — Built with React & Tailwind
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="text-blue-400 hover:underline text-sm">Contact</a>
          <a href="mailto:lsabish2001@gmail.com" className="text-slate-300 hover:underline text-sm">lsabish2001@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
