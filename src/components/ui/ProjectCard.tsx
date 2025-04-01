
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

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
        "rounded-lg overflow-hidden border border-gray-100 h-full transition-all duration-500",
        isHovered ? "shadow-lg transform -translate-y-1" : "shadow-sm"
      )}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative h-44 sm:h-48 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{
              backgroundImage: `url(${image})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 p-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary">
              {role}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-4 sm:p-6 bg-white">        
        <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
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
            <ExternalLink className="ml-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300" 
                         style={{ transform: isHovered ? 'translateX(2px)' : 'translateX(0)' }} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
