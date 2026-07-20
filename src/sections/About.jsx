import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-xxl bg-surface-container-low" id="about" ref={ref}>
      <div className="container-max mx-auto px-8 md:px-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl items-center">
          <div className={`relative group animate-fade-left ${isVisible ? 'visible' : ''}`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-tertiary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <img 
              alt="Bedel Professional Portrait" 
              className="relative rounded-2xl w-full aspect-square object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 border border-white/10" 
              src="/photo_Bedel.jpeg"
              loading="lazy"
            />
          </div>
          
          <div className="space-y-lg">
            <h2 className={`font-h2 text-h2 text-on-surface animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              {t.about.title}
            </h2>
            <p className={`font-body-lg text-body-lg text-outline animate-on-scroll delay-100 ${isVisible ? 'visible' : ''}`}>
              {t.about.p1}
            </p>
            <p className={`font-body-lg text-body-lg text-outline animate-on-scroll delay-200 ${isVisible ? 'visible' : ''}`}>
              {t.about.p2}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md mt-8">
              <div className={`glass-card p-lg rounded-xl hover:border-primary/50 transition-colors animate-scale-in delay-200 ${isVisible ? 'visible' : ''}`}>
                <span className="material-symbols-outlined text-primary mb-sm">code</span>
                <h4 className="font-h3 text-[20px] text-on-surface mb-xs">{t.about.stats.webDev}</h4>
                <p className="text-caption text-outline">{t.about.statsDesc.webDev}</p>
              </div>
              <div className={`glass-card p-lg rounded-xl hover:border-primary/50 transition-colors animate-scale-in delay-300 ${isVisible ? 'visible' : ''}`}>
                <span className="material-symbols-outlined text-primary mb-sm">monitoring</span>
                <h4 className="font-h3 text-[20px] text-on-surface mb-xs">{t.about.stats.dataManagement}</h4>
                <p className="text-caption text-outline">{t.about.statsDesc.dataManagement}</p>
              </div>
              <div className={`glass-card p-lg rounded-xl hover:border-primary/50 transition-colors animate-scale-in delay-400 ${isVisible ? 'visible' : ''}`}>
                <span className="material-symbols-outlined text-primary mb-sm">insights</span>
                <h4 className="font-h3 text-[20px] text-on-surface mb-xs">{t.about.stats.strategicAnalysis}</h4>
                <p className="text-caption text-outline">{t.about.statsDesc.strategicAnalysis}</p>
              </div>
              <div className={`glass-card p-lg rounded-xl hover:border-primary/50 transition-colors animate-scale-in delay-500 ${isVisible ? 'visible' : ''}`}>
                <span className="material-symbols-outlined text-primary mb-sm">layers</span>
                <h4 className="font-h3 text-[20px] text-on-surface mb-xs">{t.about.stats.fullStack}</h4>
                <p className="text-caption text-outline">{t.about.statsDesc.fullStack}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
