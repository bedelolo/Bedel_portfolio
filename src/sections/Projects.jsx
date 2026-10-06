import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];



  return (
    <section className="py-xxl" id="projects">
      <div className="container-max mx-auto px-8 md:px-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-lg mb-xxl">
          <div className="max-w-2xl">
            <h2 className="font-h2 text-h2 text-on-surface mb-md">
              {t.projects.title}
            </h2>
            <p className="font-body-lg text-body-lg text-outline">
              {t.projects.subtitle}
            </p>
          </div>
          <a href="https://github.com/bedelolo" target="_blank" rel="noopener noreferrer" className="font-mono-label text-primary flex items-center gap-sm group">
            {t.projects.viewAllRepos} <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {t.projects.items.map((proj, index) => {
            const imgSrc = proj.image;
            // determine if it's a data project to style tags differently
            const isDataProj = proj.tech && proj.tech.some(tag => ['PYTHON', 'POWER BI', 'EXCEL', 'STREAMLIT'].includes(tag));

            return (
              <div key={index} className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                {imgSrc && (
                  <div className="h-48 shrink-0 overflow-hidden relative">
                    <img 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 brightness-75" 
                      src={imgSrc}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent opacity-60"></div>
                  </div>
                )}
                
                <div className="p-lg space-y-md flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-sm">
                    {proj.tech && proj.tech.map((tag, i) => (
                      <span key={i} className={`text-[10px] font-mono-label px-sm py-xs border rounded ${isDataProj ? 'bg-primary/10 text-primary border-primary/20' : 'bg-tertiary/10 text-tertiary border-tertiary/20'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="font-h3 text-[20px] text-on-surface">{proj.title}</h3>
                  <div className="space-y-2">
                    <p className="text-caption text-outline">
                      {proj.desc}
                    </p>
                    
                    {proj.achievements && (
                      <div className="pt-2">
                        <p className="text-caption font-bold text-on-surface mb-1">{t.projects.achievementsTitle}</p>
                        <ul className="list-disc pl-4 text-caption text-outline space-y-1">
                          {proj.achievements.map((ach, j) => (
                            <li key={j}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-auto pt-4">
                    {proj.github && (
                      <a className="flex items-center gap-xs text-primary font-mono-label group/link" href={proj.github} target="_blank" rel="noopener noreferrer">
                        <img alt="GitHub" className="w-5 h-5 invert opacity-70 group-hover/link:opacity-100 transition-opacity" src="/ghithub.png" />
                        {t.projects.github} <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">open_in_new</span>
                      </a>
                    )}
                    {proj.live && (
                      <a className="flex items-center gap-xs text-tertiary font-mono-label group/link" href={proj.live} target="_blank" rel="noopener noreferrer">
                        <span className="material-symbols-outlined text-[20px] opacity-70 group-hover/link:opacity-100 transition-opacity">visibility</span>
                        {t.projects.live} <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">open_in_new</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
