import React from 'react';

interface Project {
  title: string;
  description: string;
  tech: string;
  link: string;
}

const projects: Project[] = Array.from({ length: 50 }).map((_, idx) => ({
  title: `Project ${idx + 1}`,
  description: `This is a description of project ${idx + 1}.`,
  tech: 'React, Tailwind, Framer Motion',
  link: '#'
}));

const Projects: React.FC = () => (
  <section id="projects" className="py-20 px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projects.map((p, idx) => (
        <div
          key={idx}
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <h3 className="text-xl font-bold mb-2">{p.title}</h3>
          <p className="mb-2">{p.description}</p>
          <p className="text-sm text-gray-400 mb-2">{p.tech}</p>
          <a href={p.link} className="text-purple-500 hover:underline">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
