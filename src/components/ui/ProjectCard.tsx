
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  link?: string;
  image?: string;
  delay: number;
}

const ProjectCard = ({ title, description, role, link, image, delay }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden border border-gray-100 h-full transition-all duration-500 opacity-0 animate-fade-in",
        isHovered ? "shadow-lg transform -translate-y-1" : "shadow-sm"
      )}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative h-36 sm:h-48 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{
              backgroundImage: `url(${image})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-70" />
        </div>
      )}
      
      <div className="p-4 sm:p-6 bg-white">
        <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2 sm:mb-4">
          {role}
        </div>
        
        <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-4">
          {description}
        </p>
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm sm:text-base text-primary font-medium hover:text-primary/80 transition-colors"
          >
            <span>View Project</span>
            <svg
              className="ml-1 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 transform"
              style={{
                transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
