
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

  return (
    <div className={cn(
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 transition-all duration-700 z-20 relative",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    )}>
      {logos.map((logo, index) => (
        <div 
          key={logo.id} 
          className="logo-container bg-white dark:bg-white/20 p-8 rounded-xl border border-shivers-300/20 shadow-lg"
        >
          {logo.link ? (
            <a href={logo.link} target="_blank" rel="noopener noreferrer" className="block">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto max-h-24 object-contain"
                style={{ 
                  filter: logo.id === 1 ? 'drop-shadow(0 0 4px rgba(0,0,0,0.3)) brightness(1.2) contrast(1.2)' : 'drop-shadow(0 0 2px rgba(0,0,0,0.2))'
                }}
              />
            </a>
          ) : (
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-auto max-h-24 object-contain"
              style={{ 
                filter: logo.id === 1 ? 'drop-shadow(0 0 4px rgba(0,0,0,0.3)) brightness(1.2) contrast(1.2)' : 'drop-shadow(0 0 2px rgba(0,0,0,0.2))'
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
