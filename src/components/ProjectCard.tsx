import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, link }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer card-hover flex flex-col justify-between"
      whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-2 text-gray-300">{description}</p>
        <p className="text-sm text-purple-400 mb-4">{tech}</p>
      </div>
      <a href={link} className="text-blue-400 hover:underline">
        View Project
      </a>
    </motion.div>
  );
};

export default ProjectCard;
