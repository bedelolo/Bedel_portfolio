import React from 'react';
import { motion } from 'framer-motion';
import { Table, Database, FileSpreadsheet, BarChart, MessageSquare, Github, Server, Globe, Layout, Code2, Paintbrush } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Skills.css';

const Skills = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Custom Icon for Python since it's generic in lucide
    function CodeIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        )
    }

    const skills = [
        { name: 'Excel', icon: <FileSpreadsheet />, desc: t.skills.items.excel },
        { name: 'SQL', icon: <Database />, desc: t.skills.items.sql },
        { name: 'Python', icon: <CodeIcon />, desc: t.skills.items.python },
        { name: 'Django Rest', icon: <Server />, desc: t.skills.items.django },
        { name: 'Laravel', icon: <Globe />, desc: t.skills.items.laravel },
        { name: 'JavaScript', icon: <Code2 />, desc: t.skills.items.javascript },
        { name: 'HTML & CSS', icon: <Layout />, desc: t.skills.items.htmlcss },
        { name: 'Tailwind CSS', icon: <Paintbrush />, desc: t.skills.items.tailwind },
        { name: 'Power BI / Tableau', icon: <BarChart />, desc: t.skills.items.powerbi },
        { name: 'Data Storytelling', icon: <MessageSquare />, desc: t.skills.items.storytelling },
        { name: 'Git & GitHub', icon: <Github />, desc: t.skills.items.git },
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {t.skills.title}
                </motion.h2>
                <div className="skills-content">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <p className="skill-desc">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
