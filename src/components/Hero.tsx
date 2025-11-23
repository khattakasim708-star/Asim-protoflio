import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold mb-4 gradient-text"
      >
        Hi, I'm Asim
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl mb-6"
      >
        I craft cinematic, interactive web experiences.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg transform transition hover:scale-105"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transform transition hover:scale-105"
        >
          Contact
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
