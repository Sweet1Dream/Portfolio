'use client';

import { useState, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  // Координаты смещения для интерактивной картинки
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // 1. ДВИЖЕНИЕ МЫШКИ (ПК)
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Высчитываем смещение от центра экрана (максимум 25 пикселей для мягкости)
    const x = ((clientX - width / 2) / (width / 2)) * 25;
    const y = ((clientY - height / 2) / (height / 2)) * 25;
    
    setOffset({ x, y });
  };

  // 2. НАКЛОН ТЕЛЕФОНА (Мобильные)
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      // gamma — наклон влево/вправо, beta — наклон вперед/назад
      const { gamma, beta } = e;
      
      if (gamma && beta) {
        const x = (gamma / 90) * 30;
        const y = ((beta - 45) / 90) * 30; // Оптимизируем под стандартный угол удержания телефона
        setOffset({ x, y });
      }
    };

    // Запрашиваем доступ к гироскопу на iOS, если требуется
    if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  return (
    <div className="not-found-page" onMouseMove={handleMouseMove}>
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">ARCHITECTURAL ERROR / NOT FOUND</h2>
        <p className="not-found-text">
          The requested data vector does not exist or has been decoupled from the production server.
        </p>

        {/* ИНТЕРАКТИВНАЯ КАРТИНКА */}
        <div className="not-found-visual">
          <div 
            className="not-found-image-wrapper"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Твоя ссылка под картинку 404. Замени /img/404-neo.png на свою картинку из папки public */}
            <Image 
              src="/img/404-neo.png" 
              alt="Error 404 Illustration" 
              width={300} 
              height={300}
              className="not-found-img"
              priority
              onError={(e) => {
                // Если картинки нет, покажем красивый необрутальный смайл-заглушку
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = parent.querySelector('.not-found-fallback');
                  if (fallback) fallback.classList.add('active');
                }
              }}
            />
            <div className="not-found-fallback">⚠️ [404 :(]</div>
          </div>
        </div>

        <Link href="/" className="btn btn--primary not-found-btn">
          RETURN TO MAIN TERMINAL →
        </Link>
      </div>
    </div>
  );
}
