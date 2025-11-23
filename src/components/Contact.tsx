import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => setStatus('Message sent!'))
    .catch(() => setStatus('Failed to send message.'));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
      <div className="flex flex-col items-center gap-6">
        <p>Email: <a href="mailto:asimkhattak983@gmail.com" className="text-purple-500 hover:underline">asimkhattak983@gmail.com</a></p>
        <p>Phone: <a href="tel:+923374817436" className="text-purple-500 hover:underline">+92 333 748 17436</a></p>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
          <input type="text" name="name" placeholder="Your Name" className="p-3 rounded-md text-black" required/>
          <input type="email" name="email" placeholder="Your Email" className="p-3 rounded-md text-black" required/>
          <textarea name="message" placeholder="Your Message" className="p-3 rounded-md text-black h-32" required/>
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-md shadow-lg transition">
            Send Message
          </button>
          {status && <p className="mt-2 text-center">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
