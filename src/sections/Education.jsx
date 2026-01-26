import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Education.css';

const Education = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="education" className="education section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {t.education.title}
                </motion.h2>
                <div className="education-content">
                    {t.education.items.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="education-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="education-icon">
                                <GraduationCap size={40} />
                            </div>
                            <div className="education-details">
                                <h3>{edu.degree}</h3>
                                <div className="school">{edu.school}</div>
                                <div className="period">{edu.period}</div>
                                <p>{edu.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
