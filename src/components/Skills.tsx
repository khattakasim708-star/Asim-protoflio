import React from 'react';
import CircularSkill from './CircularSkill';
import SkillBar from './SkillBar';

const circularSkills = [
  { name: 'HTML / CSS / Tailwind', level: 95, color: 'bg-purple-500' },
  { name: 'JavaScript / TypeScript', level: 90, color: 'bg-blue-500' },
  { name: 'React / Framer Motion', level: 85, color: 'bg-pink-500' },
  { name: 'Node.js / Express', level: 80, color: 'bg-green-500' },
  { name: 'Git / GitHub', level: 95, color: 'bg-yellow-500' },
];

const barSkills = [
  { name: 'UI/UX Design', level: 80, color: 'bg-purple-400' },
  { name: 'SEO & Performance', level: 75, color: 'bg-blue-400' },
  { name: 'Testing & QA', level: 70, color: 'bg-pink-400' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {circularSkills.map((skill, idx) => (
          <CircularSkill key={idx} skill={skill.name} level={skill.level} color={skill.color} />
        ))}
      </div>
      <div className="max-w-4xl mx-auto">
        {barSkills.map((skill, idx) => (
          <SkillBar key={idx} skill={skill.name} level={skill.level} color={skill.color} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
