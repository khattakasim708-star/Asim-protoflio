import React, { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && heroRef.current) {
      const children = Array.from(heroRef.current.children);
      children.forEach((el, i) => {
        animate(0, 1, { duration: 1, delay: i * 0.3, onUpdate: v => ((el as HTMLElement).style.opacity = v.toString()) });
      });
    }
  }, []);

  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center px-4" ref={heroRef}>
      <h1 className="text-6xl md:text-7xl font-extrabold mb-4 opacity-0">Hi, I'm <span className="text-purple-500">Asim</span></h1>
      <p className="text-xl md:text-2xl mb-6 opacity-0">I craft cinematic, interactive web experiences.</p>
      <div className="flex gap-4 opacity-0">
        <a href="#projects" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg transform transition hover:scale-105">Projects</a>
        <a href="#contact" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transform transition hover:scale-105">Contact</a>
      </div>
    </section>
  );
};

export default Hero;
