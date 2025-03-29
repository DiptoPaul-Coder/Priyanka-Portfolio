
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPos = window.scrollY;
        const opacity = Math.max(1 - scrollPos / 700, 0);
        const translateY = scrollPos * 0.3;
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] md:h-screen flex items-center pt-16 md:pt-20 overflow-hidden" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/95"></div>
      
      <div ref={heroRef} className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 opacity-0 animate-fade-in" style={{
          animationDelay: '200ms'
        }}>
          Priyanka Paul
        </h1>
        
        <div className="h-0.5 w-12 sm:w-16 bg-primary my-4 sm:my-6 opacity-0 animate-fade-in" style={{
          animationDelay: '400ms'
        }}></div>
        
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl font-medium text-gray-700 mb-6 sm:mb-8 px-4 opacity-0 animate-fade-in" style={{
          animationDelay: '600ms'
        }}>
          <span className="highlight-text">Biochemistry & Molecular Biology Researcher</span> | Investigating Hepatoprotective Mechanisms & Natural Therapeutic Compounds
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in" style={{
          animationDelay: '800ms'
        }}>
          <button onClick={scrollToAbout} className="px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-primary text-white font-medium tracking-wide shadow-sm hover:bg-primary/90 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
            Discover My Research
          </button>
          
          <a href="#publications" className="px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-white text-primary border border-primary font-medium tracking-wide shadow-sm hover:bg-primary/5 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
            View Publications
          </a>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200/50 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full max-w-2xl opacity-0 animate-fade-in" style={{
          animationDelay: '1000ms'
        }}>
          <div className="text-center mb-4 sm:mb-0">
            <p className="text-2xl sm:text-3xl font-bold text-primary">4.00</p>
            <p className="text-sm sm:text-base text-gray-600">M.Sc. WES GPA (4.00 scale)</p>
          </div>
          <div className="text-center mb-4 sm:mb-0">
            <p className="text-2xl sm:text-3xl font-bold text-primary">12+</p>
            <p className="text-sm sm:text-base text-gray-600">Research Publications</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary">4+</p>
            <p className="text-sm sm:text-base text-gray-600">Years Research Experience</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{
        animationDelay: '1000ms'
      }}>
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm text-gray-600 mb-2">Scroll to explore</span>
          <div className="w-0.5 h-8 sm:h-10 bg-gray-400 relative overflow-hidden">
            <div className="w-full h-1/2 bg-primary absolute top-0 animate-[scroll_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
