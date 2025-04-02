
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
  
  // Updated with actual logo files
  const [logos] = useState<LogoItem[]>([
    { id: 1, src: '/homepage-logos/MODE_LOGO.webp', alt: 'MODE', title: 'MODE' },
    { id: 2, src: '/homepage-logos/bumpout_logo.webp', alt: 'Bumpout', title: 'Bumpout' },
    { id: 3, src: '/homepage-logos/finalyze_logo.webp', alt: 'Finalyze', title: 'Finalyze' },
    { id: 4, src: '/homepage-logos/mcc_logo.webp', alt: 'MCC', title: 'MCC' },
    { id: 5, src: '/homepage-logos/shapack_logo.webp', alt: 'Shapack', title: 'Shapack' },
    { id: 6, src: '/homepage-logos/xco_logo.webp', alt: 'XCO', title: 'XCO' },
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
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transition-all duration-700 z-10 relative",
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
                  'w-full h-auto max-h-20 object-contain transition-all duration-300',
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
                  'w-full h-auto max-h-20 object-contain transition-all duration-300',
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
