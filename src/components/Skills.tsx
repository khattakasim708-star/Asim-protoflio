import React from 'react';
import CircularSkill from './CircularSkill';

const skills = [
  { name: 'HTML / CSS / Tailwind', level: 90, color: 'bg-purple-500' },
  { name: 'JavaScript / TypeScript', level: 85, color: 'bg-blue-500' },
  { name: 'React / Framer Motion', level: 80, color: 'bg-pink-500' },
  { name: 'Node.js / Express', level: 70, color: 'bg-green-500' },
  { name: 'Git / GitHub', level: 90, color: 'bg-yellow-500' }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, idx) => (
          <CircularSkill key={idx} skill={skill.name} level={skill.level} color={skill.color} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
