'use client';

interface TimelineItem {
  id: number;
  titleKey: string;
  dateKey: string;
  textKey: string;
}

const timelineData: TimelineItem[] = [
  { id: 1, titleKey: 'exp1-title', dateKey: 'exp1-date', textKey: 'exp1-text' },
  { id: 2, titleKey: 'exp2-title', dateKey: 'exp2-date', textKey: 'exp2-text' },
  { id: 3, titleKey: 'exp3-title', dateKey: 'exp3-date', textKey: 'exp3-text' }
];

// 1. Описываем интерфейс для пропсов
interface ExperienceProps {
  dict: Record<string, string>;
}

// 2. Ловим dict в круглых скобках функции
export default function Experience({ dict }: ExperienceProps) {
  return (
    <section id="experience" className="experience">
      <div className="experience__header">
        <h2 className="experience__title" data-lang="exp-heading">
          {dict['exp-heading']}
        </h2>
      </div>
      
      <div className="timeline">
        {timelineData.map((item) => (
          <div className="timeline-item" key={item.id}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-meta">
                {/* 3. Выводим текст динамически из нашего JSON по ключу! */}
                <h3 data-lang={item.titleKey}>{dict[item.titleKey]}</h3>
                <span className="timeline-date" data-lang={item.dateKey}>
                  {dict[item.dateKey]}
                </span>
              </div>
              <p data-lang={item.textKey}>{dict[item.textKey]}</p>
            </div>
          </div>
        ))}
      </div>
      
      <a href="#" className="view-full-resume" data-lang="exp-btn-more">
        {dict['exp-btn-more']}
      </a>
    </section>
  );
}
