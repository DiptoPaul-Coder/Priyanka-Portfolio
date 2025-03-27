
import { useEffect, useRef } from 'react';
import SkillCard from '../ui/SkillCard';
import { Microscope, Computer, Flask, Rat, Dna } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Biochemistry",
      icon: <Flask className="w-6 h-6" />,
      skills: [
        "Protein/DNA/RNA extraction",
        "Gel electrophoresis",
        "HPLC",
        "GC-MS",
        "LC-MS"
      ]
    },
    {
      title: "Molecular Techniques",
      icon: <Dna className="w-6 h-6" />,
      skills: [
        "PCR, RT-PCR",
        "Genome sequencing",
        "ELISA",
        "Western blotting",
        "Confocal microscopy"
      ]
    },
    {
      title: "Microbiology",
      icon: <Microscope className="w-6 h-6" />,
      skills: [
        "Bacterial/fungal culture",
        "MIC/MBC determination"
      ]
    },
    {
      title: "Animal Models",
      icon: <Rat className="w-6 h-6" />,
      skills: [
        "Mice/rat handling",
        "Injections",
        "Organ collection"
      ]
    },
    {
      title: "Bioinformatics",
      icon: <Computer className="w-6 h-6" />,
      skills: [
        "Drug/vaccine design",
        "SNP analysis",
        "Multi-OMIC data",
        "R programming"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">Skills & Tools</h2>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index * 100 + 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
