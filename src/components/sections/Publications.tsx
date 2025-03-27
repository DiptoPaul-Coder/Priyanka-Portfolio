
import { useEffect, useRef, useState } from 'react';
import PublicationItem from '../ui/PublicationItem';
import { Button } from '../ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Publications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  
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
      title: "Screening of bioactive compounds from Piper Chaba leaf extract and assessment of this role in hepatoprotective activity: in vitro, in vivo, and in silico research methodologies",
      authors: "Dey, D., Paul, P., Biswas, P., Saha, S., Bibi, S., Hasan, N.*, Mandal, M., Iftehimul, M., Fatema, B.*, Islam, M.T.*",
      journal: "Phytotherapy Research (Wiley)",
      year: "2024",
      status: "Under Review"
    },
    {
      title: "Cinnamomum tamala leaf's role in liver protection from over-dose paracetamol-induced hepatotoxicity in Swiss Albino mice model",
      authors: "Paul, P., Dey, D., Mia, M.A.R., Bibi, S., Hasan, N., Iftehimul, M., Fatema, B.*, Mandal, M.*, Islam, M.T.*",
      journal: "ACS Omega",
      year: "2024",
      status: "Under Review"
    },
    {
      title: "Investigating the potent TOPO IIα inhibitors in breast cancer through the study of computational drug discovery research approaches",
      authors: "Paul, P., Iftehimul, M., Dey, D., Mia, M.A.R., Al-Khafaji, K., Pal, B., Biswas, P., Mandal, M., Hasan, M.N.",
      journal: "Molecular Diversity",
      year: "2024",
      link: "https://doi.org/10.1007/s11030-023-10719-4",
      pages: "pp. 1-16"
    },
    {
      title: "Natural flavonoids effectively block the CD81 receptor of hepatocytes and inhibit HCV infection: A computational drug development approach",
      authors: "Dey, D., Biswas, P., Paul, P., Mahmud, S., Ema, T.I., Khan, A.A., Ahmed, S.Z., Hasan, M.M., Saikat, A.S.M., Fatema, B., Bibi, S.",
      journal: "Molecular Diversity",
      year: "2023",
      link: "https://doi.org/10.1007/s11030-022-10548-9",
      pages: "pp. 1309-1322"
    },
    {
      title: "Amentoflavone derivatives significantly act towards the main protease (3CLPRO/MPRO) of SARS-CoV-2: in silico ADMET profiling, molecular docking, molecular dynamics simulation, network pharmacology",
      authors: "Dey, D., Hossain, R., Biswas, P., Paul, P., Islam, M.A., Ema, T.I., Gain, B.K., Hasan, M.M., Bibi, S., Islam, M.T., Rahman, M.A.",
      journal: "Molecular Diversity",
      year: "2023",
      link: "https://doi.org/10.1007/s11030-022-10513-6",
      pages: "pp. 857-871"
    },
    {
      title: "The efficacy of natural bioactive compounds against prostate cancer: Molecular targets and synergistic activities",
      authors: "Mia, M.A.R., Dey, D., Sakib, M.R., Biswas, M.Y., Prottay, A.A.S., Paul, N., Rimti, F.H., Abdullah, Y., Biswas, P., Iftehimul, M., Paul, P.",
      journal: "Phytotherapy Research",
      year: "2023",
      link: "https://doi.org/10.1002/ptr.7723"
    },
    {
      title: "Chlorophytum borivilianum (musli) and Cimicifuga racemosa (black cohosh)",
      authors: "Hossain, R., Dey, D., Biswas, P., Paul, P., Ahmed, S.Z., Khan, A.A., Ema, T.I., Islam, M.T.",
      journal: "Herbs, Shrubs, and Trees of Potential Medicinal Benefits, Taylor & Francis",
      year: "2022",
      link: "https://doi.org/10.1201/9781003274131-3"
    },
    {
      title: "Exhaustive plant profile of 'Dimocarpus longan Lour' with significant phytomedicinal properties: A literature based-review",
      authors: "Paul, P., Biswas, P., Dey, D., Saikat, A.S.M., Islam, M.A., Sohel, M., Hossain, R., Mamun, A.A., Rahman, M.A., Hasan, M.N., Kim, B.",
      journal: "Processes",
      year: "2021",
      link: "https://doi.org/10.3390/pr9101803"
    }
  ];

  const displayedPublications = showAll ? publications : publications.slice(0, 5);

  return (
    <section id="publications" className="py-20 md:py-28 bg-publication">
      <div className="section-container">
        <h2 className="section-title text-center">Publications</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          My research has been published in peer-reviewed journals focusing on natural compounds, drug discovery, and therapeutic applications in various disease models.
        </p>
        
        <div ref={sectionRef} className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden stagger-animation">
          {displayedPublications.map((pub, index) => (
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
        
        {publications.length > 5 && (
          <div className="mt-6 flex justify-center">
            <Button 
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>Show Less <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>Show All Publications <ChevronDown className="h-4 w-4" /></>
              )}
            </Button>
          </div>
        )}
        
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
