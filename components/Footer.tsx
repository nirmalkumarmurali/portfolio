import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 z-10 relative transition-colors duration-300">
      <p className="text-slate-500 dark:text-gray-500 flex items-center justify-center gap-2 text-sm">
        © 2025 Nirmal Kumar Murali. Built with React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;