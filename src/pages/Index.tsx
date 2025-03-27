
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Research from '@/components/sections/Research';
import Publications from '@/components/sections/Publications';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

const Index = () => {
  useEffect(() => {
    // Add intersection observer for reveal animations
    const revealElements = document.querySelectorAll('.reveal-animation');
    const staggerElements = document.querySelectorAll('.stagger-animation');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    revealElements.forEach((el) => observer.observe(el));
    staggerElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      staggerElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
