'use client'; 

import { useState } from 'react';

// 1. Описываем строгую бирку для входящих параметров (Props)
interface ProjectsProps {
  dict: Record<string, string>;
}

// 2. ИСПРАВЛЕНО ТУТ: Распаковываем { dict } в круглых скобках функции!
export default function Projects({ dict }: ProjectsProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = 2; 

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        {/* 3. Магия: заменяем статичные английские тексты на динамический вызов из JSON! */}
        <h2 data-lang="projects-heading">{dict['projects-heading']}</h2>
        <div className="slider-controls">
          <button className="slider-btn slider-btn--prev" onClick={prevSlide}>{"<"}</button>
          <button className="slider-btn slider-btn--next" onClick={nextSlide}>{">"}</button>
        </div>
      </div>

      <div className="slider-container">
        <div 
          className="slider-track" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          
          {/* Слайд 1: Weatherly */}
          <div className="project-card">
            <div className="project-card__image project-card__image--blue">
              <div className="weather-mock">☁️ 24°C</div>
            </div>
            {/* Текст берется из файла локализации по ключу */}
            <h3 data-lang="project1-title">{dict['project1-title']}</h3>
            <p data-lang="project1-text">{dict['project1-text']}</p>
            <div className="tags"><span>React</span><span>TypeScript</span><span>API</span></div>
            <a href="#" className="view-details-btn" data-lang="project-btn-details">
              {dict['project-btn-details']}
            </a>
          </div>

          {/* Слайд 2: Shop Cart */}
          <div className="project-card">
            <div className="project-card__image project-card__image--pink">
              <div className="weather-mock">💼 E-Commerce</div>
            </div>
            <h3 data-lang="project2-title">{dict['project2-title']}</h3>
            <p data-lang="project2-text">{dict['project2-text']}</p>
            <div className="tags"><span>Next.js</span><span>Redux</span><span>Stripe</span></div>
            <a href="#" className="view-details-btn" data-lang="project-btn-details">
              {dict['project-btn-details']}
            </a>
          </div>

        </div>
      </div>

      <div className="slider-dots">
        <span 
          className={`dot ${currentSlide === 0 ? 'active' : ''}`} 
          onClick={() => setCurrentSlide(0)}
        ></span>
        <span 
          className={`dot ${currentSlide === 1 ? 'active' : ''}`} 
          onClick={() => setCurrentSlide(1)}
        ></span>
      </div>
    </section>
  );
}
