import React from 'react';

const projects = [
  { title: 'Project One', desc: 'Interactive web app with cinematic animations.', tech: 'React, Tailwind, Framer Motion', link: '#' },
  { title: 'Project Two', desc: 'GPU-accelerated dashboard with charts.', tech: 'JavaScript, D3, Tailwind', link: '#' },
  { title: 'Project Three', desc: 'Responsive portfolio website with animations.', tech: 'HTML, CSS, Tailwind', link: '#' },
];

const Projects: React.FC = () => (
  <section id="projects" className="py-20 px-4">
    <h2 className="text-3xl font-bold text-center mb-10 opacity-0">Projects</h2>
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
      {projects.map((p, idx) => (
        <div key={idx} className="project-card">
          <div className="card-inner bg-gray-800 rounded-xl shadow-lg">
            <div className="card-front p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="mb-4 text-center">{p.desc}</p>
            </div>
            <div className="card-back p-6 flex flex-col items-center justify-center">
              <p className="mb-2">Tech: {p.tech}</p>
              <a href={p.link} className="text-purple-500 hover:underline">View Project</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
