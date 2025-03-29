
import { useEffect, useRef } from 'react';
import SkillCard from '../ui/SkillCard';
import { Microscope, Computer, Dna, Rat, Beaker } from 'lucide-react';

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
      icon: <Beaker className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: [
        "Protein/DNA/RNA extraction & purification",
        "Gel electrophoresis (SDS-PAGE and agarose)",
        "High-Performance Liquid Chromatography (HPLC)",
        "Gas Chromatography-Mass Spectrometry (GC-MS)",
        "Liquid Chromatography-Mass Spectrometry (LC-MS)"
      ]
    },
    {
      title: "Molecular & Immunological Techniques",
      icon: <Dna className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: [
        "PCR & RT-PCR",
        "Genome sequencing",
        "ELISA & Western blotting",
        "Immunofluorescence & Immunohistochemistry",
        "Flow cytometry & ELISPOT assay",
        "Confocal microscopy"
      ]
    },
    {
      title: "Microbiology",
      icon: <Microscope className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: [
        "Bacterial & fungal culture and isolation",
        "Disk diffusion & tube dilution assays",
        "Macro-dilution assay",
        "MIC/MBC determination"
      ]
    },
    {
      title: "Animal Models",
      icon: <Rat className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: [
        "Mice & rat handling",
        "Standard procedures (injections, oral gavage)",
        "Disease induction & dose administration",
        "Blood & organ collection",
        "Weight monitoring & safety maintenance"
      ]
    },
    {
      title: "Bioinformatics",
      icon: <Computer className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: [
        "Computer-aided drug/vaccine design",
        "SNP analysis",
        "Onco-informatic data interpretation",
        "Multi-OMIC data analysis",
        "R programming (moderate user)",
        "Molecular docking & dynamics simulation"
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
          Comprehensive laboratory and computational skills developed through extensive research experience in biochemistry, molecular biology, and bioinformatics.
        </p>
        
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 stagger-animation">
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
