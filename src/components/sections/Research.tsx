
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
      title: "M.Sc. Thesis: Cinnamomum tamala Leaf's Role in Liver Protection",
      description: "Explored the hepatoprotective effects of Cinnamomum tamala leaf extract against paracetamol-induced liver damage in Swiss albino mice. Identified 20 bioactive compounds via GC-MS, validated antioxidant activity, and performed molecular docking against CYP2E1.",
      role: "Principal Investigator",
      image: "https://images.unsplash.com/photo-1573495612077-a689013bf1f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Ongoing Project: Cinnamomum tamala in Diabetes",
      description: "Investigating the anti-diabetic potential of Cinnamomum tamala through in vitro, in vivo, and in silico approaches, focusing on glucose regulation and molecular pathways.",
      role: "Lead Researcher",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Ongoing Project: Local Medicinal Plants for Hepatoprotection",
      description: "Screening bioactive compounds from local Bangladeshi plants to assess their hepatoprotective activity using multi-disciplinary methods.",
      role: "Collaborator",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="research" className="py-20 md:py-28 bg-research">
      <div className="section-container">
        <h2 className="section-title text-center">Research Projects</h2>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
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
            <h4 className="font-medium mb-2">Thesis Presentation</h4>
            <p className="text-gray-700 mb-4">"Cinnamomum tamala Leaf's Role in Liver Protection" (2023)</p>
            
            <h4 className="font-medium mb-2">Conference Paper</h4>
            <p className="text-gray-700">"NLRP3 Inflammasome Suppression in COVID-19 Pathology" (Date TBD)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
