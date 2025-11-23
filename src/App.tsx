import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <ParticlesBackground />
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
