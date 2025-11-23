import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Cinematic Portfolio Website',
    description: 'A portfolio website with full animations, interactive sections, and responsive design using React & Framer Motion.',
    tech: 'React, Tailwind, Framer Motion, TypeScript',
    link: '#'
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard for managing products, orders, and users with real-time analytics charts.',
    tech: 'React, Tailwind, Chart.js, Node.js',
    link: '#'
  },
  {
    title: 'Social Media Platform',
    description: 'A mini social media app with posts, comments, likes, and live updates.',
    tech: 'React, Firebase, Tailwind CSS',
    link: '#'
  },
  {
    title: 'Weather App',
    description: 'Dynamic weather application fetching live data and visualized with animated backgrounds.',
    tech: 'React, OpenWeather API, Tailwind',
    link: '#'
  },
  {
    title: 'Blog CMS',
    description: 'Content management system for blogs with admin panel and markdown editor.',
    tech: 'React, Node.js, Express, MongoDB',
    link: '#'
  },
  // Add more projects up to 50 realistic entries
];

const Projects: React.FC = () => (
  <section id="projects" className="py-20 px-4 bg-gray-900 text-white">
    <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {projects.map((p, idx) => (
        <ProjectCard key={idx} {...p} />
      ))}
    </div>
  </section>
);

export default Projects;
