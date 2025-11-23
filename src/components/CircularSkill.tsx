import React from 'react';
import { motion } from 'framer-motion';

interface SkillProps {
  skill: string;
  level: number;
  color: string;
}

const CircularSkill: React.FC<SkillProps> = ({ skill, level, color }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width={120} height={120}>
        <circle
          cx={60}
          cy={60}
          r={radius}
          stroke="#333"
          strokeWidth={10}
          fill="transparent"
        />
        <motion.circle
          cx={60}
          cy={60}
          r={radius}
          stroke={color.replace('bg-', '')}
          strokeWidth={10}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          strokeLinecap="round"
        />
      </svg>
      <p className="mt-3 font-semibold">{skill}</p>
      <p className="text-sm text-gray-400">{level}%</p>
    </div>
  );
};

export default CircularSkill;
