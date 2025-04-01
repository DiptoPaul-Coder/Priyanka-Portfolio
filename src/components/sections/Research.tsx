
import { useEffect, useRef } from 'react';
import ProjectCard from '../ui/ProjectCard';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';

const Research = () => {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.1 });
  const [presentationsRef, isPresentationsVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
  
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
    <section id="research" className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-research via-white to-research/70">
      <div className="section-container">
        <h2 className={`section-title text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Research Experience
        </h2>
        <p className={`text-center text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
           style={{ animationDelay: '200ms' }}>
          My research focuses on exploring the therapeutic potential of natural compounds, particularly in addressing liver diseases and metabolic disorders through comprehensive laboratory and computational approaches.
        </p>
        
        <div ref={sectionRef} className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ${isVisible ? 'stagger-animation revealed' : 'stagger-animation'}`}>
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
        
        <div 
          ref={presentationsRef} 
          className={`mt-12 sm:mt-16 text-center transition-all duration-700 transform ${isPresentationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-display font-medium mb-4">Research Presentations</h3>
          <div className="max-w-2xl mx-auto p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
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
