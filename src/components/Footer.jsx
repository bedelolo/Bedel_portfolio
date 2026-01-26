import React from 'react';
import './Footer.css';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <p className="footer-text">
                        &copy; {currentYear} Bedel OLOUKPONA – {t.footer.copyright}
                    </p>
                </div>

                <div className="footer-socials">
                    <a href="https://github.com/bedeloloukpona" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                    <a href="mailto:boloukpona@gmail.com"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
