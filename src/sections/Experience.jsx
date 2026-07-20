import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-xxl bg-surface-container-lowest" id="experience" ref={ref}>
      <div className="container-max mx-auto px-8 md:px-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl">
          
          {/* Experience */}
          <div>
            <h2 className={`font-h2 text-h2 text-on-surface mb-xxl flex flex-wrap items-center gap-md animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              {t.experience.title} <span className="text-primary">{t.experience.journey}</span>
            </h2>
            <div className="relative border-l border-white/10 pl-lg space-y-xxl">
              
              {t.experience.items.map((exp, index) => (
                <div className={`relative animate-fade-left ${isVisible ? 'visible' : ''}`} key={index} style={{ transitionDelay: `${200 + index * 150}ms` }}>
                  <div className={`absolute -left-[33px] top-0 w-4 h-4 rounded-full ${index === 0 ? 'bg-primary shadow-[0_0_15px_rgba(76,215,246,0.8)]' : 'bg-slate-700'}`}></div>
                  <div className="space-y-sm">
                    <span className={`font-mono-label ${index === 0 ? 'text-primary' : 'text-outline'}`}>
                      {exp.period}
                    </span>
                    <h3 className="font-h3 text-[24px] text-on-surface">{exp.title} @ {exp.company}</h3>
                    <p className="text-body-md text-outline">
                      {exp.description[0]} {exp.description[1]}
                    </p>
                  </div>
                </div>
              ))}
              
            </div>
          </div>

          {/* Education */}
          <div id="education">
            <h2 className={`font-h2 text-h2 text-on-surface mb-xxl flex flex-wrap items-center gap-md animate-on-scroll delay-100 ${isVisible ? 'visible' : ''}`}>
              {t.education.title}
            </h2>
            <div className="relative border-l border-white/10 pl-lg space-y-xxl">
              {t.education.items.map((edu, index) => (
                <div className={`relative animate-fade-right ${isVisible ? 'visible' : ''}`} key={index} style={{ transitionDelay: `${300 + index * 150}ms` }}>
                  <div className={`absolute -left-[33px] top-0 w-4 h-4 rounded-full ${index === 0 ? 'bg-tertiary shadow-[0_0_15px_rgba(192,193,255,0.8)]' : 'bg-slate-700'}`}></div>
                  <div className="space-y-sm">
                    {edu.period && (
                      <span className={`font-mono-label ${index === 0 ? 'text-tertiary' : 'text-outline'}`}>
                        {edu.period}
                      </span>
                    )}
                    <h3 className="font-h3 text-[24px] text-on-surface">{edu.degree}</h3>
                    <p className="text-body-md text-tertiary font-medium">
                      {edu.school}
                    </p>
                    {edu.desc && (
                      <p className="text-body-md text-outline">
                        {edu.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
