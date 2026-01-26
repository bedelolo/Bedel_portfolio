import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Contact.css';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="contact" className="contact section">
            <div className="container contact-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {t.contact.title}
                </motion.h2>
                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="contact-text">
                        {t.contact.description}
                    </p>

                    <div className="contact-methods">
                        <a href="mailto:boloukpona@gmail.com" className="contact-method">
                            <Mail size={24} />
                            <div className="contact-method-info">
                                <span className="contact-method-label">{t.contact.email}</span>
                                <span className="contact-method-value">boloukpona@gmail.com</span>
                            </div>
                        </a>

                        <a href="https://wa.me/2290154655676" target="_blank" rel="noopener noreferrer" className="contact-method">
                            <MessageCircle size={24} />
                            <div className="contact-method-info">
                                <span className="contact-method-label">{t.contact.whatsapp}</span>
                                <span className="contact-method-value">+229 01 54 65 56 76</span>
                            </div>
                        </a>
                    </div>

                    <div className="contact-actions">
                        <a href="mailto:boloukpona@gmail.com" className="btn btn-primary">
                            <Mail size={18} style={{ marginRight: '8px' }} />
                            {t.contact.sendEmail}
                        </a>
                        <a href="/CV_Bedel_OLOUKPONA.pdf" download className="btn btn-outline">
                            <Download size={18} style={{ marginRight: '8px' }} />
                            {t.contact.downloadCV}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
