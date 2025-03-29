
import { useState } from 'react';
import { FileText } from 'lucide-react';

interface PublicationItemProps {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link?: string;
  status?: string;
  delay: number;
}

const PublicationItem = ({ title, authors, journal, year, link, status, delay }: PublicationItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="p-3 sm:p-4 md:p-5 border-b border-gray-200 last:border-0 transition-colors duration-300 opacity-0 animate-fade-in"
      style={{ 
        animationDelay: `${delay}ms`,
        backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.7)' : 'transparent'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex">
        <div className="mr-2 sm:mr-3 md:mr-4 mt-1">
          <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm sm:text-base md:text-lg font-medium mb-1 sm:mb-2">
            {title}
            {status && (
              <span className="ml-2 text-xs sm:text-sm font-normal text-gray-500 italic">({status})</span>
            )}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-none">{authors}</p>
          <p className="text-xs md:text-sm text-gray-600">
            <span className="font-medium">{journal}</span>, {year}
          </p>
          
          {link && (
            <div className="mt-2 sm:mt-3">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link text-xs md:text-sm"
              >
                View Publication
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationItem;
