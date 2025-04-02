
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LogoItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  link?: string;
}

const LogoGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800); // 0.8s delay
    
    return () => clearTimeout(timer);
  }, []);
  
  // Sample logos - in a real app, these would be loaded from /homepage-logos
  const [logos] = useState<LogoItem[]>([
    { id: 1, src: '/homepage-logos/sample-logo.svg', alt: 'Venture 1', title: 'Venture One' },
    { id: 2, src: '/placeholder.svg', alt: 'Project 2', title: 'Project Two' },
    { id: 3, src: '/placeholder.svg', alt: 'Experiment 3', title: 'Experiment Three' },
    { id: 4, src: '/placeholder.svg', alt: 'Venture 4', title: 'Venture Four' },
    { id: 5, src: '/placeholder.svg', alt: 'Project 5', title: 'Project Five' },
    { id: 6, src: '/placeholder.svg', alt: 'Experiment 6', title: 'Experiment Six' },
  ]);

  // Animation variants for each logo
  const animationVariants = [
    'hover:opacity-90',
    'hover:rotate-3',
    'hover:brightness-110',
    'hover:contrast-110',
    'hover:saturate-150',
    'hover:hue-rotate-15',
  ];

  return (
    <div className={cn(
      "logo-grid transition-all duration-700",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    )}>
      {logos.map((logo, index) => (
        <div 
          key={logo.id} 
          className="logo-container"
          style={{ 
            animationDelay: `${0.2 + (index * 0.1)}s`,
            transitionDelay: `${0.1 * index}s`
          }}
        >
          {logo.link ? (
            <a href={logo.link} target="_blank" rel="noopener noreferrer" className="block">
              <img
                src={logo.src}
                alt={logo.alt}
                className={cn(
                  'w-28 h-28 object-contain transition-all duration-300',
                  animationVariants[index % animationVariants.length],
                  index % 2 === 0 ? 'animate-float' : 'animate-pulse-subtle'
                )}
              />
              <div className="logo-title">{logo.title}</div>
            </a>
          ) : (
            <>
              <img
                src={logo.src}
                alt={logo.alt}
                className={cn(
                  'w-28 h-28 object-contain transition-all duration-300',
                  animationVariants[index % animationVariants.length],
                  index % 2 === 0 ? 'animate-float' : 'animate-pulse-subtle'
                )}
              />
              <div className="logo-title">{logo.title}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
