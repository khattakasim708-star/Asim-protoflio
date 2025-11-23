import { useEffect } from 'react';

export const useScrollAnimation = (className: string) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [className]);
};
