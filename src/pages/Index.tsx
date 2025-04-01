
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
    // Initialize AOS elements
    const aosElements = document.querySelectorAll('.aos');
    
    // Add intersection observer for all AOS elements
    const aosObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          } else {
            // Optional: If we want animations to replay when elements leave view
            // entry.target.classList.remove('aos-animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    
    aosElements.forEach(el => aosObserver.observe(el));
    
    // Add intersection observer for reveal animations
    const revealElements = document.querySelectorAll('.reveal-animation');
    const staggerElements = document.querySelectorAll('.stagger-animation');
    
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    revealElements.forEach((el) => revealObserver.observe(el));
    staggerElements.forEach((el) => revealObserver.observe(el));
    
    return () => {
      aosElements.forEach(el => aosObserver.unobserve(el));
      revealElements.forEach((el) => revealObserver.unobserve(el));
      staggerElements.forEach((el) => revealObserver.unobserve(el));
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
