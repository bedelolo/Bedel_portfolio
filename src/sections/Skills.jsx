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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                  <h4 className="text-on-surface font-bold text-[12px] mb-2 opacity-70 uppercase tracking-wider">{t.skills.categories.languagesDb}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full text-primary font-mono-label text-[11px]">Python (Pandas, NumPy)</span>
                    <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full text-primary font-mono-label text-[11px]">SQL & MySQL / PostgreSQL</span>
                    <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full text-primary font-mono-label text-[11px]">{t.skills.statisticalModeling}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-on-surface font-bold text-[12px] mb-2 opacity-70 uppercase tracking-wider">{t.skills.categories.vizTools}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full text-primary font-mono-label text-[11px]">Power BI & DAX</span>
                    <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full text-primary font-mono-label text-[11px]">Excel (TCD, PowerPivot)</span>
                    <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full text-primary font-mono-label text-[11px]">Tableau</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Web Skills */}
          <div className={`md:col-span-4 md:row-span-3 glass-card rounded-2xl p-lg flex flex-col group relative overflow-hidden animate-fade-right delay-200 ${isVisible ? 'visible' : ''}`}>
            <div className="absolute -left-10 -top-10 w-48 h-48 bg-tertiary/5 rounded-full blur-3xl group-hover:bg-tertiary/10 transition-all"></div>
            <div className="flex items-center gap-md mb-md">
              <span className="material-symbols-outlined text-tertiary p-sm bg-tertiary/10 rounded-lg">dynamic_form</span>
              <h3 className="font-h3 text-h3">{t.skills.webEcosystem}</h3>
            </div>
            <div className="space-y-4 flex-grow z-10 mt-2">
              <div className="space-y-2">
                <h4 className="text-tertiary font-bold text-[12px] opacity-90 uppercase tracking-wider">{t.skills.categories.backend}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-tertiary/10 text-tertiary border border-tertiary/20 rounded font-mono-label text-[11px]">Django (Python)</span>
                  <span className="px-2 py-1 bg-tertiary/10 text-tertiary border border-tertiary/20 rounded font-mono-label text-[11px]">Laravel (PHP)</span>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-tertiary font-bold text-[12px] opacity-90 uppercase tracking-wider">{t.skills.categories.frontend}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-tertiary/10 text-tertiary border border-tertiary/20 rounded font-mono-label text-[11px]">React.js</span>
                  <span className="px-2 py-1 bg-tertiary/10 text-tertiary border border-tertiary/20 rounded font-mono-label text-[11px]">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-tertiary/10 text-tertiary border border-tertiary/20 rounded font-mono-label text-[11px]">JavaScript (ES6+)</span>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-tertiary font-bold text-[12px] opacity-90 uppercase tracking-wider">{t.skills.categories.architecture}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-tertiary/10 text-tertiary border border-tertiary/20 rounded font-mono-label text-[11px]">API REST</span>
                  <span className="px-2 py-1 bg-tertiary/10 text-tertiary border border-tertiary/20 rounded font-mono-label text-[11px]">MVC Pattern</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Skills */}
          <div className={`md:col-span-8 md:row-span-1 glass-card rounded-2xl p-lg flex flex-col md:flex-row md:items-center justify-between gap-md md:gap-xl animate-on-scroll delay-300 ${isVisible ? 'visible' : ''}`}>
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-primary p-sm bg-primary/10 rounded-lg">construction</span>
              <h3 className="font-h3 text-[24px]">{t.skills.workflowTools}</h3>
            </div>
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
              <div className="flex flex-col items-center group/tool">
                <span className="material-symbols-outlined text-outline group-hover/tool:text-primary transition-colors text-3xl">hub</span>
                <span className="text-caption font-mono-label mt-xs uppercase">Git/GitHub</span>
              </div>
              <div className="flex flex-col items-center group/tool">
                <span className="material-symbols-outlined text-outline group-hover/tool:text-primary transition-colors text-3xl">terminal</span>
                <span className="text-caption font-mono-label mt-xs uppercase">Docker</span>
              </div>
              <div className="flex flex-col items-center group/tool">
                <span className="material-symbols-outlined text-outline group-hover/tool:text-primary transition-colors text-3xl">design_services</span>
                <span className="text-caption font-mono-label mt-xs uppercase">Figma</span>
              </div>
              <div className="flex flex-col items-center group/tool">
                <span className="material-symbols-outlined text-outline group-hover/tool:text-primary transition-colors text-3xl">book</span>
                <span className="text-caption font-mono-label mt-xs uppercase">Jupyter</span>
              </div>
              <div className="flex flex-col items-center group/tool">
                <span className="material-symbols-outlined text-outline group-hover/tool:text-primary transition-colors text-3xl">api</span>
                <span className="text-caption font-mono-label mt-xs uppercase">Postman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
