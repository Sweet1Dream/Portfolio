'use client';

import { useState } from 'react';

// 1. СТРОГАЯ БИРКА TYPESCRIPT ДЛЯ ВХОДЯЩИХ ДАННЫХ (Props Interface)
// ИСПРАВЛЕНО: Вместо any написали Record<string, string>
interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
  dict: Record<string, string>; // Теперь TS знает, что это объект-словарь с текстом!
}


// 2. Ловим наши пропсы в круглых скобках компонента и привязываем интерфейс через двоеточие
export default function Header({ currentLang, onLanguageChange,dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">{"</> VLADISLAV DEV"}</div>
      
      <button 
        className="navbar__burger" 
        id="burger-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      
      <div className={`navbar__collapse ${isOpen ? 'open' : ''}`} id="navbar-menu">
        <ul className="navbar__menu">
          <li><a href="#skills" onClick={() => setIsOpen(false)}>{dict['menu-skills']}</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>{dict['menu-projects']}</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>{dict['menu-experience']}</a></li>
          <li><a href="#certifications" onClick={() => setIsOpen(false)}>{dict['menu-certs']}</a></li>
        </ul>
        
        <div className="navbar__actions">
          {/* НАШИ КНОПКИ ПЕРЕКЛЮЧЕНИЯ ЯЗЫКОВ */}
          {/* Класс active теперь загорается динамически в зависимости от пропса currentLang */}
          <div className="lang-switcher">
            <button 
              className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
              onClick={() => onLanguageChange('en')}
            >
              EN
            </button>
            <button 
              className={`lang-btn ${currentLang === 'ru' ? 'active' : ''}`}
              onClick={() => onLanguageChange('ru')}
            >
              RU
            </button>
          </div>
          
           <a href="#contact" className="navbar__btn" onClick={() => setIsOpen(false)}>{dict['menu-contact']}</a>
        </div>
      </div>
    </nav>
  );
}
