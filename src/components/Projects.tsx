import React from 'react';
import ProjectCard from './ProjectCard';

const projects = Array.from({ length: 100 }).map((_, idx) => ({
  title: `Project ${idx + 1}`,
  description: `This is a detailed description of Project ${idx + 1}. It demonstrates interactive web design and modern development techniques.`,
  tech: 'React, TypeScript, Tailwind, Framer Motion',
  link: '#'
}));

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
