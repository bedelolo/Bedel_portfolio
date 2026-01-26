import React from 'react';
import { motion } from 'framer-motion';
import { Github, Folder } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Projects.css';

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const projectsData = [
        {
            tech: ['Excel', 'Dashboard', 'Analyse'],
            github: 'https://github.com/bedeloloukpona/Tableau_de_bord'
        },
        {
            tech: ['Power BI', 'DAX', 'Data Viz'],
            github: 'https://github.com/bedeloloukpona/Human_Analytics_dashboard'
        },
        {
            tech: ['Django', 'Python', 'Tailwind', 'SQLite'],
            github: 'https://github.com/bedelolo/django-gestion-employe'
        },
        {
            tech: ['Python', 'Streamlit', 'Pandas', 'Data Analysis'],
            github: 'https://github.com/bedelolo/Optimisation-services-publics'
        },
        {
            tech: ['Laravel', 'PHP', 'MySQL', 'Blade'],
            github: 'https://github.com/bedelolo/essai2-laravel'
        },
        {
            tech: ['Rust', 'Python', 'LLM', 'Actix-web'],
            github: 'https://github.com/remiboivin021/llm-consensus-system'
        }
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {t.projects.title}
                </motion.h2>
                <div className="projects-grid">
                    {t.projects.items.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-header">
                                <Folder size={40} className="folder-icon" />
                                <div className="project-links">
                                    <a href={projectsData[index].github} target="_blank" rel="noopener noreferrer">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>
                            <ul className="project-tech-list">
                                {projectsData[index].tech.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
