import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Hero.css';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="home" className="hero section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="greeting">{t.hero.greeting}</h2>
                    <h1 className="title">Bedel OLOUKPONA<span className="dot">.</span></h1>
                    <h3 className="subtitle">{t.hero.title}</h3>
                    <p className="description">
                        {t.hero.description}
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">
                            {t.hero.viewProjects} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            {t.hero.contact}
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="image-wrapper">
                        <img src="/photo_Bedel.jpeg" alt="Bedel OLOUKPONA" className="profile-photo" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
