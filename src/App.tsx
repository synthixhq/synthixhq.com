import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Architecture } from './components/Architecture';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Language, translations } from './i18n/translations';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('synthix_lang') as Language;
    return saved && translations[saved] ? saved : 'en';
  });

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('synthix_lang', newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white">
      <Navbar lang={lang} onLanguageChange={handleLanguageChange} t={t.nav} />
      <main className="flex-grow">
        <Hero t={t.hero} />
        <Projects t={t.solutions} />
        <TechStack t={t.tech} />
        <Architecture t={t.architecture} />
        <InteractiveShowcase t={t.showcase} />
        <CallToAction t={t.cta} />
      </main>
      <Footer t={t.footer} />
    </div>
  );
};

export default App;
