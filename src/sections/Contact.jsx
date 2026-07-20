import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Envoi en cours...");
    
    const formData = new FormData(event.target);
    
    // Clé d'accès Web3Forms
    formData.append("access_key", "6d320835-0c3d-4b12-a5e6-746f4783c122");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message envoyé avec succès !");
        event.target.reset();
      } else {
        console.log("Error", data);
        setStatus(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setStatus("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <section className="py-xxl bg-surface-container-low border-t border-white/5" id="contact">
      <div className="container-max mx-auto px-8 md:px-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl">
          
          <div className="space-y-lg">
            <h2 className="font-h2 text-h2 text-on-surface">
              {t.contact.title} <span className="text-gradient">{t.contact.extraordinary}</span>
            </h2>
            <p className="font-body-lg text-body-lg text-outline">
              {t.contact.description}
            </p>
            
            <div className="space-y-md pt-lg">
              <div className="flex items-center gap-md">
                <div className="p-sm bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <div className="text-caption font-mono-label text-outline uppercase">{t.contact.email}</div>
                  <div className="text-body-lg text-on-surface">boloukpona@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-md">
                <div className="p-sm bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary">phone_iphone</span>
                </div>
                <div>
                  <div className="text-caption font-mono-label text-outline uppercase">{t.contact.whatsapp}</div>
                  <div className="text-body-lg text-on-surface">+229 54 65 56 76</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-md pt-lg">
              <a className="p-md glass-card rounded-full hover:bg-primary/20 transition-all" href="https://github.com/bedelolo" target="_blank" rel="noopener noreferrer">
                <img alt="GitHub" className="w-6 h-6 invert" src="/ghithub.png"/>
              </a>
              <a className="p-md glass-card rounded-full hover:bg-primary/20 transition-all" href="https://www.linkedin.com/in/bedel-oloukpona-8190722a0/" target="_blank" rel="noopener noreferrer">
                <img alt="LinkedIn" className="w-6 h-6" src="/linkdin.png"/>
              </a>
              <a className="px-6 py-2 glass-card rounded-full hover:bg-primary hover:text-on-primary font-bold transition-all flex items-center justify-center border border-primary text-primary" href="/CV_Bedel_OLOUKPONA.pdf" target="_blank" rel="noopener noreferrer">
                {t.contact.downloadCV}
              </a>
            </div>
          </div>
          
          <div className="glass-card p-xl rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-lg opacity-10">
              <span className="material-symbols-outlined text-[80px]">send</span>
            </div>
            <form className="space-y-md relative z-10 sm:space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-sm">
                  <label className="text-caption font-mono-label text-outline uppercase">{t.contact.form.nameLabel}</label>
                  <input name="name" required className="w-full bg-slate-950/50 border border-outline-variant rounded-lg p-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder={t.contact.form.namePlaceholder} type="text" />
                </div>
                <div className="space-y-sm">
                  <label className="text-caption font-mono-label text-outline uppercase">{t.contact.form.emailLabel}</label>
                  <input name="email" required className="w-full bg-slate-950/50 border border-outline-variant rounded-lg p-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder={t.contact.form.emailPlaceholder} type="email" />
                </div>
              </div>
              
              <div className="space-y-sm">
                <label className="text-caption font-mono-label text-outline uppercase">{t.contact.form.projectTypeLabel}</label>
                <select name="projectType" required className="w-full bg-slate-950/50 border border-outline-variant rounded-lg p-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                  <option>{t.contact.form.projectTypes.fullstack}</option>
                  <option>{t.contact.form.projectTypes.data}</option>
                  <option>{t.contact.form.projectTypes.api}</option>
                  <option>{t.contact.form.projectTypes.general}</option>
                </select>
              </div>
              
              <div className="space-y-sm">
                <label className="text-caption font-mono-label text-outline uppercase">{t.contact.form.messageLabel}</label>
                <textarea name="message" required className="w-full bg-slate-950/50 border border-outline-variant rounded-lg p-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder={t.contact.form.messagePlaceholder} rows="4"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-primary text-on-primary font-bold py-md rounded-lg hover:glow-cyan transition-all">
                {t.contact.sendEmail}
              </button>
              {status && <p className="text-center mt-4 text-primary font-mono-label">{status}</p>}
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
