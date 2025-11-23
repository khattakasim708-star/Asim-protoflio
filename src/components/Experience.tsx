import React from 'react';

const experiences = [
  { year: '2020', event: 'Started Web Development', description: 'Learning HTML, CSS, JS and building small projects.' },
  { year: '2021', event: 'React & Tailwind', description: 'Started building dynamic websites using React and Tailwind CSS.' },
  { year: '2022', event: 'Freelancing', description: 'Delivered multiple web projects for clients worldwide.' },
  { year: '2023', event: 'Advanced Animations', description: 'Focused on Framer Motion and cinematic web experiences.' },
  { year: '2024', event: 'Full Portfolio', description: 'Built this complete Asim Portfolio showcasing skills & projects.' }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Experience & Achievements</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-500 h-full"></div>
        {experiences.map((exp, idx) => (
          <div key={idx} className={`mb-10 flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} w-full relative`}>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-80 relative z-10">
              <h3 className="font-bold text-purple-400">{exp.year}</h3>
              <h4 className="font-semibold text-lg">{exp.event}</h4>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
