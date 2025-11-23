import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  level: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level, color }) => {
  return (
    <div className="mb-4">
      <p className="mb-1 font-medium">{skill}</p>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <motion.div
          className={`h-4 rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
