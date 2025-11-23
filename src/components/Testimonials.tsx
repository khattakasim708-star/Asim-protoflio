import React from 'react';
import { motion } from 'framer-motion';

const testimonials = Array.from({ length: 10 }).map((_, idx) => ({
  name: `Client ${idx + 1}`,
  role: `Role ${idx + 1}`,
  message: `Asim created an amazing project for us. Highly professional and skilled developer. Project ${idx + 1} was delivered on time and exceeded expectations.`
}));

const Testimonials: React.FC = () => {
  return (
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
};

export default Testimonials;
