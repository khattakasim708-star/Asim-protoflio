import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="py-20 px-4 bg-gray-800">
    <h2 className="text-3xl font-bold text-center mb-10 opacity-0">Contact Me</h2>
    <div className="flex flex-col items-center gap-6">
      <p>Reach out via email, phone, or social links:</p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
        <a href="mailto:asimkhattak983@gmail.com" className="hover:text-purple-500 transition">Email: asimkhattak983@gmail.com</a>
        <a href="tel:+923374817436" className="hover:text-purple-500 transition">Phone: +92 333 748 17436</a>
        <a href="https://www.linkedin.com/in/asim-khattak" target="_blank" className="hover:text-purple-500 transition">LinkedIn</a>
        <a href="https://github.com/asimkhattak" target="_blank" className="hover:text-purple-500 transition">GitHub</a>
      </div>
      <form className="mt-8 flex flex-col gap-4 w-full max-w-md">
        <input type="text" placeholder="Your Name" className="p-3 rounded-md text-black" />
        <input type="email" placeholder="Your Email" className="p-3 rounded-md text-black" />
        <textarea placeholder="Your Message" className="p-3 rounded-md text-black h-32" />
        <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-md shadow-lg transition">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
