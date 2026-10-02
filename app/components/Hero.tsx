'use client'; 

// 1. Импортируем умный компонент картинки из Next.js
import Image from 'next/image';

// ИСПРАВЛЕНО: Заменили any на строгий Record
interface HeroProps {
  dict: Record<string, string>;
}
export default function Hero({ dict }: HeroProps) {
  return (
    <header className="hero">
      <div className="hero__content">
         <span className="badge">{dict['hero-badge']}</span>
        <h1 className="hero__title">{dict['hero-title']}</h1>
        <p className="hero__text">{dict['hero-text']}</p>
        <div className="hero__actions">
          <a href="#" className="btn btn--primary">{dict['hero-btn-work']}</a>
          <a href="#" className="btn btn--secondary">{dict['hero-btn-resume']}</a>
        </div>
      </div>
      
      <div className="hero__visual">
        <div className="photo-card">
          <a href="#" className="hero__photo-link">
           
            <Image 
              src="/738019.jpg" 
              alt="Vladislav Dev" 
              className="photo-card__img" 
              width={400} 
              height={220}
              priority // Этот атрибут заставит картинку грузиться мгновенно, так как она на первом экране!
            /> 
          </a>
          <div className="code-badge">
            <pre><code>{`const developer = {
  name: 'TypeScript',
  uses: 'React',
  deploys: 'Vercel',
  passion: 'Solving problems'
}`}</code></pre>
          </div>
        </div>
      </div>
    </header>
  );
}
