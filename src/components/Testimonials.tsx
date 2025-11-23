import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Sara Ahmed', role: 'CEO, WebStart', message: 'Asim delivered an outstanding portfolio website. Modern, fast, and interactive.' },
  { name: 'Ali Khan', role: 'CTO, CodeLabs', message: 'Professional, creative, and detail-oriented. Highly recommended for web projects.' },
  { name: 'Maria Lopez', role: 'Founder, DevHive', message: 'Fantastic animations and responsive design. Truly cinematic work.' },
  { name: 'John Doe', role: 'Product Manager, TechCorp', message: 'Fast delivery, high quality, and excellent communication.' },
  { name: 'Fatima Noor', role: 'Designer, Creatix', message: 'Transformed our website into a visually stunning experience.' },
  { name: 'Ahmed Raza', role: 'Developer, PixelEdge', message: 'Clean code, interactive animations, and modern UI.' },
  { name: 'Leila Hussein', role: 'Entrepreneur', message: 'Highly skilled, creative, and professional. Loved working with Asim.' },
  { name: 'Omar Farooq', role: 'CEO, NextGen', message: 'Cinematic animations with perfect responsiveness on all devices.' },
  { name: 'Sana Malik', role: 'Designer, BrightWorks', message: 'Exceptional design sense and technical skills.' },
  { name: 'Bilal Shah', role: 'Tech Lead, Innovate', message: 'Reliable, talented, and delivers high-quality projects on time.' },
];

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-20 px-4 bg-gray-800 text-white">
    <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {testimonials.map((t, idx) => (
        <motion.div
          key={idx}
          className="bg-gray-700 p-6 rounded-xl shadow-lg w-80 card-hover"
          whileHover={{ scale: 1.05, rotateY: 10 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <p className="mb-4">"{t.message}"</p>
          <h3 className="font-bold">{t.name}</h3>
          <p className="text-sm text-gray-400">{t.role}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
