
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      
      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(section => section.element !== null);
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view or we've scrolled past it
          if (rect.top <= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          className="flex items-center gap-3 font-display text-xl font-semibold tracking-tight text-primary transition-opacity hover:opacity-80"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://i.ibb.co.com/0sVCXL9/download.jpg" alt="Priyanka Paul" />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
          Priyanka Paul
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(
                    "nav-link",
                    activeSection === section.id && "text-primary after:scale-x-100"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 w-8 p-1 transition-colors hover:bg-gray-100 rounded"
          onClick={() => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
              mobileMenu.classList.toggle('translate-x-full');
              mobileMenu.classList.toggle('translate-x-0');
            }
          }}
        >
          <span className="w-full h-0.5 bg-gray-800 rounded-full"></span>
          <span className="w-full h-0.5 bg-gray-800 rounded-full"></span>
          <span className="w-full h-0.5 bg-gray-800 rounded-full"></span>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out z-50"
      >
        <div className="flex justify-end p-4">
          <button
            className="p-2"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              if (mobileMenu) {
                mobileMenu.classList.toggle('translate-x-full');
                mobileMenu.classList.toggle('translate-x-0');
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="px-4 py-2">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(
                    "block py-2 px-4 rounded-md transition-colors",
                    activeSection === section.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-gray-100"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu) mobileMenu.classList.add('translate-x-full');
                  }}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
