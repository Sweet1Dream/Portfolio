'use client';

// 1. Добавляем строгую бирку для пропсов (Убрали any, пишем Record!)
interface SkillsProps {
  dict: Record<string, string>;
}

// 2. Учим компонент ловить этот dict в круглых скобках
export default function Skills({ dict }: SkillsProps) {
  return (
    <section id="skills" className="skills-bar">
      {/* 3. Теперь мы можем использовать его внутри верстки! */}
      <div className="skills-bar__title">
        {dict['skills-title']}
      </div>
      
      <div className="skills-bar__list">
        <div className="skill-item">⚛️ React</div>
        <div className="skill-item">📜 TypeScript</div>
        <div className="skill-item">🟢 Node.js</div>
        <div className="skill-item">🎨 Tailwind CSS</div>
        <div className="skill-item">🍃 MongoDB</div>
        <div className="skill-item">🐙 Git</div>
      </div>
    </section>
  );
}
