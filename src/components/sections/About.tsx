
import { useEffect, useRef } from 'react';

const About = () => {
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

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        
        <div ref={sectionRef} className="reveal-animation max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:space-x-12 mb-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 mb-8 md:mb-0">
                <div className="absolute inset-0 border-2 rounded-full border-primary transform rotate-6"></div>
                <div className="absolute inset-0 border-2 rounded-full border-accent transform -rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/30 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 text-primary/80">
                    <path d="M10.1 3.14c1.69-.53 3.73-.53 5.42 0 2.65.84 4.32 2.9 5.05 6.27M21.29 13.7c-.45 2.54-1.34 4.47-2.72 5.92-2.62 2.8-6.03 3.13-8.57 2.17M11.95 17c-5.1-1.84-5.27-12.57-.17-14.67" />
                    <path d="M3.09 15.42c-.63-2.87-.36-6.47 2.4-9.42 3.76-3.8 9.97-3.6 13.8 0 1.48 1.4 2.73 3.6 3.2 6.11" />
                    <path d="M2.5 17.5c-.2-4.38.25-7.95 1.7-9.52" />
                    <path d="M8 20.5c3.94.24 7.58.05 10.28-2.64 1.9-1.9 3.2-5.17 3.22-8.36h0c-.1-.92-.28-1.32-.8-1.89" />
                    <path d="M17.2 6.78c-4.4-1.87-9.6-.03-11.4 4.96-1.7 4.66.54 9.1 5.3 10.39" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                I'm Priyanka Paul, an M.Sc. graduate in Biochemistry and Molecular Biology from BSMRSTU, Bangladesh (GPA: 3.93/4.00), with a passion for unraveling the therapeutic potential of natural compounds.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                My research bridges <span className="highlight-text">biochemistry</span>, <span className="highlight-text">molecular biology</span>, and <span className="highlight-text">bioinformatics</span> to address critical health challenges, with particular focus on hepatoprotective mechanisms and diabetes treatment using natural compounds.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                With extensive laboratory experience and computational skills, I aim to contribute to innovative solutions in medical science through multidisciplinary approaches combining in vitro, in vivo, and in silico methodologies.
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-display font-semibold mb-3 text-primary">Education</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">M.Sc. (with Thesis), Biochemistry and Molecular Biology</p>
                    <p className="text-gray-600">BSMRSTU, Bangladesh (Apr 2022–Oct 2024)</p>
                    <p className="text-gray-600">GPA: 3.93/4.00</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">B.Sc. (Hons), Biochemistry and Molecular Biology</p>
                    <p className="text-gray-600">BSMRSTU, Bangladesh (Jan 2017–Feb 2022)</p>
                    <p className="text-gray-600">GPA: 3.80/4.00, WES Evaluation: 3.88/4.00</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-display font-semibold mb-3 text-primary">Certifications & Awards</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">Research Article Design, Writing, and Submission</p>
                    <p className="text-gray-600">Workshop (August 2024)</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">RESEARCH 360: Research Methodology</p>
                    <p className="text-gray-600">BSMRSTU Research Society (Sep-Dec 2023)</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">CRISPR Training</p>
                    <p className="text-gray-600">BMB Dept & Bio Bangla, BSMRSTU (2020)</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">Chairman's Award for Scholastic Excellence</p>
                    <p className="text-gray-600">Dept. of BMB, BSMRSTU (2018)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 glass-card p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-display font-semibold mb-3 text-primary">Language Proficiency</h3>
            <p className="text-gray-700">
              <span className="font-medium">Duolingo English Test (DET):</span> Overall Score 105
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">Listening</p>
                <p className="font-medium">100</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">Reading</p>
                <p className="font-medium">110</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">Writing</p>
                <p className="font-medium">105</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">Speaking</p>
                <p className="font-medium">100</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 glass-card p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-display font-semibold mb-3 text-primary">Extra-curricular Activities</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-gray-700">Research advisor, BMB research association, BSMRSTU</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-gray-700">Active member, Badhan blood donation center, BSMRSTU</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-gray-700">Member, Debating Club, BSMRSTU</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-gray-700">Dance instructor, Bangladesh Child Academy, Jessore</p>
              </li>
              <li className="flex items-start col-span-1 md:col-span-2">
                <div className="mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-gray-700">Winter clothes distribution for underprivileged families (2018-present)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
