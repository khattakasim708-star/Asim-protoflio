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
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" placeholder="Your Message" required/>
        <button type="submit">Send</button>
        {status && <p>{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
