
import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: ReactNode;
  delay: number;
}

const SkillCard = ({ title, skills, icon, delay }: SkillCardProps) => {
  return (
    <div 
      className="skill-card p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="icon-box w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
        {icon}
      </div>
      
      <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold mb-2 sm:mb-3 md:mb-4">{title}</h3>
      
      <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary mr-1 sm:mr-1.5 md:mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs sm:text-sm md:text-base text-gray-700">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
