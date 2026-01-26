import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, Code, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './About.css';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="about" className="about section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {t.about.title}
                </motion.h2>
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p>{t.about.p1}</p>
                        <p>{t.about.p2}</p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <Globe className="stat-icon" />
                                <span>{t.about.stats.webDev}</span>
                            </div>
                            <div className="stat-item">
                                <Database className="stat-icon" />
                                <span>{t.about.stats.dataManagement}</span>
                            </div>
                            <div className="stat-item">
                                <TrendingUp className="stat-icon" />
                                <span>{t.about.stats.strategicAnalysis}</span>
                            </div>
                            <div className="stat-item">
                                <Code className="stat-icon" />
                                <span>{t.about.stats.fullStack}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
