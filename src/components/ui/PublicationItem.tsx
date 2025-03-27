
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
      className="p-5 border-b border-gray-200 last:border-0 transition-colors duration-300 opacity-0 animate-fade-in"
      style={{ 
        animationDelay: `${delay}ms`,
        backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.7)' : 'transparent'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex">
        <div className="mr-4 mt-1">
          <FileText className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2">
            {title}
            {status && (
              <span className="ml-2 text-sm font-normal text-gray-500 italic">({status})</span>
            )}
          </h3>
          <p className="text-gray-700 mb-2">{authors}</p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">{journal}</span>, {year}
          </p>
          
          {link && (
            <div className="mt-3">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link text-sm"
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
