
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white/95"></div>
      
      <div 
        ref={heroRef}
        className="section-container relative z-10 flex flex-col items-center justify-center text-center"
      >
        <div className="mb-6 pulse-glow">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">PP</div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Priyanka Paul
        </h1>
        
        <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-secondary my-6 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}></div>
        
        <h2 className="text-xl md:text-2xl leading-relaxed max-w-3xl font-medium text-gray-700 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <span className="gradient-text font-semibold">Biochemistry & Molecular Biology Researcher</span> | Investigating Hepatoprotective Mechanisms & Natural Therapeutic Compounds
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <button 
            onClick={scrollToAbout}
            className="btn-primary flex items-center justify-center gap-2"
          >
            Discover My Research
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          
          <a 
            href="#publications" 
            className="btn-secondary"
          >
            View Publications
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200/50 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <div className="card-lift bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm">
            <p className="text-3xl font-bold gradient-text">3.93</p>
            <p className="text-gray-600">M.Sc. GPA (4.00 scale)</p>
          </div>
          <div className="card-lift bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm">
            <p className="text-3xl font-bold gradient-text">8+</p>
            <p className="text-gray-600">Research Publications</p>
          </div>
          <div className="card-lift bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm">
            <p className="text-3xl font-bold gradient-text">4+</p>
            <p className="text-gray-600">Years Research Experience</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1200ms' }}>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-600 mb-2">Scroll to explore</span>
          <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center animate-float">
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
