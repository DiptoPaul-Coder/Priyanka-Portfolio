
import { useEffect, useRef } from 'react';
import ProjectCard from '../ui/ProjectCard';

const Research = () => {
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

  const projects = [
    {
      title: "Hepatoprotective Effects of Cinnamomum tamala Leaf Extract",
      description: "Investigated the role of Cinnamomum tamala leaf extract in protecting against paracetamol-induced liver damage in Swiss albino mice. Identified 20 bioactive compounds via GC-MS and validated significant hepatoprotective activity through biochemical, histopathological, and computational studies.",
      role: "Principal Investigator (M.Sc. Thesis)",
      image: "https://images.unsplash.com/photo-1573495612077-a689013bf1f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cinnamomum tamala in Diabetes Management",
      description: "Exploring the anti-diabetic potential of Cinnamomum tamala through integrated in vitro, in vivo, and in silico approaches. Focusing on glucose regulation pathways and molecular mechanisms underlying antidiabetic activity.",
      role: "Lead Researcher (Ongoing Project)",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Research Assistant at Laboratory of Molecular Biology",
      description: "Isolating bioactive compounds from plants, fungi, and marine sources for multiple in vitro tests. Applying extracts to mice models and collecting samples for biochemical, histopathological, and molecular studies with computational validation.",
      role: "Research Assistant (Dec 2023-present)",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Medicinal Plants for Hepatoprotection",
      description: "Screening bioactive compounds from local Bangladeshi medicinal plants to assess their hepatoprotective activity using multi-disciplinary methods combining in vitro, in vivo, and in silico approaches.",
      role: "Collaborator (Ongoing Project)",
      image: "https://images.unsplash.com/photo-1555633514-abcee6ab92e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="research" className="py-20 md:py-28 bg-research">
      <div className="section-container">
        <h2 className="section-title text-center">Research Experience</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          My research focuses on exploring the therapeutic potential of natural compounds, particularly in addressing liver diseases and metabolic disorders through comprehensive laboratory and computational approaches.
        </p>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animation">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              role={project.role}
              image={project.image}
              delay={index * 100 + 100}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <h3 className="text-xl font-display font-medium mb-4">Research Presentations</h3>
          <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="mb-6">
              <h4 className="font-medium mb-2">Thesis Presentation</h4>
              <p className="text-gray-700">"Cinnamomum tamala leaf's role in liver protection from an over-dose of paracetamol-induced hepatotoxicity in Swiss Albino Mice model" (2023)</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Research Proposal Presentation</h4>
              <p className="text-gray-700">"Chemical fingerprinting of Laurus nobilis fruit part and assessment of its role in Breast cancer: in vitro, in vivo, and in-silico research approaches"</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Paper and Poster Presentation</h4>
              <p className="text-gray-700">"Specific inhibition of the NLRP3 inflammasome suppresses immune overactivation and alleviates COVID-19-like pathology in mice"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
