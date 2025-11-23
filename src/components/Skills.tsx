import React, { useEffect } from 'react';

const Skills: React.FC = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      const skillBars = document.querySelectorAll('.skill-bar');
      skillBars.forEach((bar, i) => {
        const width = (bar as HTMLElement).dataset.width || '80%';
        setTimeout(() => (bar as HTMLElement).style.width = width, 500 + i * 300);
      });
    }
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 opacity-0">Skills</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <p className="mb-1">HTML / CSS / Tailwind</p>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div className="bg-purple-500 h-4 rounded-full skill-bar w-0" data-width="80%"></div>
          </div>
        </div>
        <div>
          <p className="mb-1">JavaScript / TypeScript</p>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div className="bg-blue-500 h-4 rounded-full skill-bar w-0" data-width="80%"></div>
          </div>
        </div>
        <div>
          <p className="mb-1">React / Framer Motion</p>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div className="bg-pink-500 h-4 rounded-full skill-bar w-0" data-width="75%"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
