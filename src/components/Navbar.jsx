import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-cyan-900/20' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-8 md:px-12 h-20 w-full max-w-7xl mx-auto">
        <a href="#home" className="text-2xl font-black tracking-tighter text-cyan-400 dark:text-cyan-400 font-['Plus_Jakarta_Sans']">
          BEDEL.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-slate-100 font-['Plus_Jakarta_Sans'] font-semibold tracking-tight transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-slate-300 hover:text-white font-mono-label font-bold px-3 py-1 rounded border border-white/10 hover:border-cyan-400 transition-colors"
          >
            {language.toUpperCase()}
          </button>
          <a href="#contact" className="bg-primary-container text-on-primary-container font-mono-label px-6 py-2.5 rounded-full hover:scale-105 transition-transform font-bold">
            {t.contact.title}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-slate-300 font-mono-label font-bold"
          >
            {language.toUpperCase()}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-white/10 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white font-semibold text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
