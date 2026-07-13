import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="relative w-full py-12 mt-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-black text-slate-100 text-xl font-['Plus_Jakarta_Sans']">
          BEDEL.
        </div>
        
        <div className="flex gap-8">
          <a href="https://github.com/bedelolo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm uppercase tracking-widest text-slate-500 hover:text-cyan-300 transition-colors group">
            <img alt="GitHub" className="w-5 h-5 invert opacity-70 group-hover:opacity-100 transition-all" src="/ghithub.png"/>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/bedel-oloukpona-8190722a0/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm uppercase tracking-widest text-slate-500 hover:text-cyan-300 transition-colors group">
            <img alt="LinkedIn" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-all" src="/linkdin.png"/>
            LinkedIn
          </a>
        </div>
        
        <div className="font-['Plus_Jakarta_Sans'] text-sm uppercase tracking-widest text-slate-500">
          © {new Date().getFullYear()} BEDEL. {t.footer.copyright}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
