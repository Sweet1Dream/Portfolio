'use client';

interface StackCard {
  id: number;
  titleKey: string;
  tags: string[];
}

const stackData: StackCard[] = [
  { id: 1, titleKey: 'stack-card1-title', tags: ['Next.js / ', 'React 19 / ', 'React Router'] },
  { id: 2, titleKey: 'stack-card2-title', tags: ['Zustand / ', 'Redux Toolkit / ', 'TypeScript'] },
  { id: 3, titleKey: 'stack-card3-title', tags: ['Tailwind CSS / ', 'SCSS / Sass / ', 'Vite'] }
];

// Описываем интерфейс пропсов
interface TechStackProps {
  dict: Record<string, string>;
}

export default function TechStack({ dict }: TechStackProps) {
  return (
    <section id="certifications" className="certifications">
      <h2 data-lang="certs-heading">{dict['certs-heading']}</h2>
      
      {stackData.map((card) => (
        <div className="cert-card" key={card.id}>
          {/* Динамический заголовок карточки стека из JSON */}
          <div className="cert-card__title" data-lang={card.titleKey}>
            {dict[card.titleKey]}
          </div>
          
          <div className="tags" style={{ justifyContent: 'center', marginTop: '10px' }}>
            {card.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
      
      <a href="#" className="view-all-certs" data-lang="certs-btn-more">
        {dict['certs-btn-more']}
      </a>
    </section>
  );
}
