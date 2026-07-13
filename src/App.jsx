import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderFinish = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LanguageProvider>
      {loading && <Preloader onFinish={handlePreloaderFinish} />}
      <CustomCursor />
      <div className={`App dark bg-background min-h-screen ${loading ? 'overflow-hidden max-h-screen' : ''}`}>
        <Navbar />
        <main className="relative pt-20">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <WhatsAppButton />
        <BackToTop />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
