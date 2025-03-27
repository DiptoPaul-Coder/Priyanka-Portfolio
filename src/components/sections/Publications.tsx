
import { useEffect, useRef } from 'react';
import PublicationItem from '../ui/PublicationItem';

const Publications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const publications = [
    {
      title: "Screening of bioactive compounds from Piper Chaba leaf extract...",
      authors: "Paul, P., et al.",
      journal: "Phytotherapy Research",
      year: "2024",
      status: "Under Review"
    },
    {
      title: "Cinnamomum tamala leaf's role in liver protection...",
      authors: "Paul, P., et al.",
      journal: "ACS Omega",
      year: "2024",
      status: "Under Review"
    },
    {
      title: "Natural flavonoids effectively block the CD81 receptor...",
      authors: "Bibi, S., Paul, P., et al.",
      journal: "Molecular Diversity",
      year: "2023",
      link: "https://example.com/publication1",
      pages: "pp. 1309-1322"
    },
    {
      title: "SARS-CoV-2 studies...",
      authors: "Islam, M.A., Paul, P., et al.",
      journal: "Molecular Diversity",
      year: "2023",
      link: "https://example.com/publication2",
      pages: "pp. 857-871"
    },
    {
      title: "Chlorophytum borivilianum and Cimicifuga racemosa...",
      authors: "Hossain, R., Paul, P., et al.",
      journal: "Herbs, Shrubs, and Trees of Potential Medicinal Value, Taylor & Francis",
      year: "2022",
      link: "https://example.com/publication3"
    }
  ];

  return (
    <section id="publications" className="py-20 md:py-28 bg-publication">
      <div className="section-container">
        <h2 className="section-title text-center">Publications</h2>
        
        <div ref={sectionRef} className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden stagger-animation">
          {publications.map((pub, index) => (
            <PublicationItem
              key={index}
              title={pub.title}
              authors={pub.authors}
              journal={pub.journal}
              year={pub.year}
              link={pub.link}
              status={pub.status}
              delay={index * 100 + 100}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://scholar.google.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-md bg-white text-primary border border-primary/30 font-medium hover:bg-primary/5 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              <path d="M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 016.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z"></path>
            </svg>
            View Google Scholar Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
