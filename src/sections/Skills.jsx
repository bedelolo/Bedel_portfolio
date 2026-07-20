import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-xxl" id="skills" ref={ref}>
      <div className="container-max mx-auto px-8 md:px-lg">
        <div className={`mb-xxl text-center max-w-2xl mx-auto animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-h2 text-h2 text-on-surface mb-md">
            {t.skills.title}
          </h2>
          <p className="font-body-lg text-body-lg text-outline">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-md auto-rows-[160px]">
          {/* Data Skills */}
          <div className={`md:col-span-8 md:row-span-2 glass-card rounded-2xl p-lg flex flex-col justify-between group overflow-hidden relative animate-fade-left delay-100 ${isVisible ? 'visible' : ''}`}>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
            <div>
              <div className="flex items-center gap-md mb-md">
                <span className="material-symbols-outlined text-primary p-sm bg-primary/10 rounded-lg">analytics</span>
                <h3 className="font-h3 text-h3">{t.skills.dataScience}</h3>
              </div>
              <div className="flex flex-wrap gap-sm">
                <span className="px-md py-sm bg-surface-container-highest border border-outline-variant rounded-full text-primary font-mono-label">Python (Pandas/NumPy)</span>
                <span className="px-md py-sm bg-surface-container-highest border border-outline-variant rounded-full text-primary font-mono-label">SQL &amp; NoSQL</span>
                <span className="px-md py-sm bg-surface-container-highest border border-outline-variant rounded-full text-primary font-mono-label">Power BI &amp; Tableau</span>
                <span className="px-md py-sm bg-surface-container-highest border border-outline-variant rounded-full text-primary font-mono-label">Excel (VBA/PowerPivot)</span>
                <span className="px-md py-sm bg-surface-container-highest border border-outline-variant rounded-full text-primary font-mono-label">{t.skills.statisticalModeling}</span>
              </div>
            </div>
            <p className="text-outline font-body-md mt-md">
              {t.skills.items.powerbi} • {t.skills.items.python} • {t.skills.items.sql}
            </p>
          </div>

          {/* Web Skills */}
          <div className={`md:col-span-4 md:row-span-3 glass-card rounded-2xl p-lg flex flex-col group relative overflow-hidden animate-fade-right delay-200 ${isVisible ? 'visible' : ''}`}>
            <div className="absolute -left-10 -top-10 w-48 h-48 bg-tertiary/5 rounded-full blur-3xl group-hover:bg-tertiary/10 transition-all"></div>
            <div className="flex items-center gap-md mb-md">
              <span className="material-symbols-outlined text-tertiary p-sm bg-tertiary/10 rounded-lg">dynamic_form</span>
              <h3 className="font-h3 text-h3">{t.skills.webEcosystem}</h3>
            </div>
            <div className="space-y-md flex-grow z-10">
              <div className="space-y-sm">
                <div className="flex justify-between text-caption font-mono-label">
                  <span>{t.skills.backend}</span>
                  <span>95%</span>
                </div>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className={`h-full bg-tertiary rounded-full transition-all duration-1000 ease-out ${isVisible ? 'w-[95%]' : 'w-0'}`}></div>
                </div>
              </div>
              <div className="space-y-sm">
                <div className="flex justify-between text-caption font-mono-label">
                  <span>{t.skills.frontend}</span>
                  <span>90%</span>
                </div>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className={`h-full bg-tertiary rounded-full transition-all duration-1000 ease-out delay-200 ${isVisible ? 'w-[90%]' : 'w-0'}`}></div>
                </div>
              </div>
              <div className="space-y-sm">
                <div className="flex justify-between text-caption font-mono-label">
                  <span>{t.skills.apiDesign}</span>
                  <span>85%</span>
                </div>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className={`h-full bg-tertiary rounded-full transition-all duration-1000 ease-out delay-400 ${isVisible ? 'w-[85%]' : 'w-0'}`}></div>
                </div>
              </div>
            </div>
            <div className="mt-xl flex flex-wrap gap-xs z-10">
              <span className="p-sm glass-card rounded-lg material-symbols-outlined">html</span>
              <span className="p-sm glass-card rounded-lg material-symbols-outlined">css</span>
              <span className="p-sm glass-card rounded-lg material-symbols-outlined">javascript</span>
            </div>
          </div>

          {/* Tools Skills */}
          <div className={`md:col-span-8 md:row-span-1 glass-card rounded-2xl p-lg flex flex-col md:flex-row md:items-center justify-between gap-md md:gap-xl animate-on-scroll delay-300 ${isVisible ? 'visible' : ''}`}>
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-primary p-sm bg-primary/10 rounded-lg">construction</span>
              <h3 className="font-h3 text-[24px]">{t.skills.workflowTools}</h3>
            </div>
            <div className="flex flex-wrap gap-md">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-outline">hub</span>
                <span className="text-caption font-mono-label mt-xs uppercase">Git</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-outline">terminal</span>
                <span className="text-caption font-mono-label mt-xs uppercase">Docker</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-outline">book</span>
                <span className="text-caption font-mono-label mt-xs uppercase">Jupyter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
