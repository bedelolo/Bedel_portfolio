import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.scrollY * 0.3);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center px-8 md:px-xxl pt-[120px] pb-xxl overflow-hidden" id="home" ref={ref}>
      {/* Parallax background blurs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 parallax-slow"
        style={{ transform: `translateY(${parallaxY * 0.5}px)` }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px] -z-10 parallax-slow"
        style={{ transform: `translateY(${-parallaxY * 0.3}px)` }}
      ></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center container-max mx-auto relative z-10">
        <div className="lg:col-span-7 space-y-lg">

          <h1 className={`font-h1 text-h1 text-on-surface animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            {t.hero.greeting} <span className="text-gradient">Bedel.</span>
          </h1>
          
          <h2 className={`font-h3 text-h3 text-on-surface-variant max-w-2xl animate-on-scroll delay-200 ${isVisible ? 'visible' : ''}`}>
             <span className="text-primary">{t.hero.title}</span> {t.hero.subtitle}
          </h2>
          
          <p className={`font-body-lg text-body-lg text-outline max-w-xl animate-on-scroll delay-300 ${isVisible ? 'visible' : ''}`}>
            {t.hero.description}
          </p>
          
          <div className={`flex flex-wrap gap-md pt-md animate-on-scroll delay-400 ${isVisible ? 'visible' : ''}`}>
            <a href="#projects" className="bg-primary text-on-primary px-lg py-md rounded-lg font-bold hover:glow-cyan transition-all flex items-center gap-sm">
              {t.hero.viewProjects} <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a href="#contact" className="border border-primary text-primary px-lg py-md rounded-lg font-bold hover:bg-primary/5 transition-all flex items-center justify-center">
              {t.hero.contact}
            </a>
          </div>
        </div>

        <div className={`lg:col-span-5 relative hidden lg:block animate-fade-right delay-300 ${isVisible ? 'visible' : ''}`}>
          <div
            className="glass-card rounded-xl p-sm glow-cyan rotate-3 relative z-10 parallax-slow"
            style={{ transform: `rotate(3deg) translateY(${-parallaxY * 0.1}px)` }}
          >
            <img 
              alt="Data Visualization" 
              className="rounded-lg grayscale hover:grayscale-0 transition-all duration-700" 
              src="/Dashboard.png"
              loading="lazy"
            />
          </div>
          <div
            className="absolute -top-10 -right-10 glass-card p-lg rounded-xl -rotate-6 z-20 parallax-slow"
            style={{ transform: `rotate(-6deg) translateY(${-parallaxY * 0.2}px)` }}
          >
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-primary text-[32px]">database</span>
              <div>
                <div className="text-h3 font-h3 text-on-surface">98%</div>
                <div className="text-caption font-mono-label text-outline">{t.hero.accuracyRate}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
