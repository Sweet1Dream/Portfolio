'use client';
import { useState, useEffect } from 'react';

import ContactForm from './components/ContactForm';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import ScrollToTop from './components/ScrollToTop';


export default function Home() {
  const [lang, setLang] = useState<string>('ru');
  const [dict, setDict] = useState<Record<string, string> | null>(null);


  useEffect(() => {
    async function loadTranslation() {
      try {
      
        const response = await fetch(`/lang/${lang}.json`);
        const data = await response.json();
        setDict(data); 
      } catch (error) {
        console.error('Ошибка загрузки JSON-перевода:', error);
      }
    }
    
    loadTranslation();
  }, [lang]); 


  if (!dict) {
    return <div style={{ fontFamily: 'monospace', padding: '20px' }}>Loading application architecture...</div>;
  }

  return (
    <>
      {/* Раздаем пропсы со словарем dict во все компоненты сайта! */}
      <Header currentLang={lang} onLanguageChange={setLang} dict={dict} />
      
      <Hero dict={dict} />
      <Skills dict={dict} />

      <main className="main-layout">
        <div className="main-layout__left">
          <Projects dict={dict} />
          <Experience dict={dict} />
        </div>

        <div className="main-layout__right">
          <TechStack dict={dict} />
          <ContactForm dict={dict} />
        </div>
        
      </main>
    
      <footer className="footer">
        <div className="footer__logo">{"</> VLADISLAV DEV"}</div>
        <div className="footer__copy">© 2026 Vladislav Shepilka. All rights reserved.</div>
      </footer>

  <ScrollToTop/>
    </>
  );
}