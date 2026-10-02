'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  // Коробка-тумблер: true — показать кнопку, false — спрятать
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Навешиваем слушатель скролла при загрузке компонента
  useEffect(() => {
    const toggleVisibility = () => {
      // Если прокрутили больше 400 пикселей — показываем стрелку
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Включаем "ухо" скролла у глобального окна window
    window.addEventListener('scroll', toggleVisibility);

    // Важное мидловое правило: всегда убираем за собой "уши", когда компонент удаляется!
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Функция плавной прокрутки наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Делает прокрутку плавной
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
