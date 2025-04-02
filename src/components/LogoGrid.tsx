
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface LogoItem {
  id: number;
  src: string;
  alt: string;
  link?: string;
}

const LogoGrid = () => {
  // Sample logos - in a real app, these would be loaded from /homepage-logos
  const [logos] = useState<LogoItem[]>([
    { id: 1, src: '/placeholder.svg', alt: 'Company 1' },
    { id: 2, src: '/placeholder.svg', alt: 'Company 2' },
    { id: 3, src: '/placeholder.svg', alt: 'Company 3' },
    { id: 4, src: '/placeholder.svg', alt: 'Company 4' },
    { id: 5, src: '/placeholder.svg', alt: 'Company 5' },
    { id: 6, src: '/placeholder.svg', alt: 'Company 6' },
  ]);

  // Animation variants for each logo
  const animationVariants = [
    'hover:opacity-80',
    'hover:scale-110',
    'hover:rotate-3',
    'hover:brightness-110',
    'hover:contrast-110',
    'hover:saturate-150',
  ];

  return (
    <div className="logo-grid">
      {logos.map((logo, index) => (
        <div key={logo.id} className="logo-container">
          {logo.link ? (
            <a href={logo.link} target="_blank" rel="noopener noreferrer">
              <img
                src={logo.src}
                alt={logo.alt}
                className={cn(
                  'w-24 h-24 object-contain transition-all duration-300',
                  animationVariants[index % animationVariants.length],
                  index % 2 === 0 ? 'animate-float' : 'animate-pulse-subtle'
                )}
              />
            </a>
          ) : (
            <img
              src={logo.src}
              alt={logo.alt}
              className={cn(
                'w-24 h-24 object-contain transition-all duration-300',
                animationVariants[index % animationVariants.length],
                index % 2 === 0 ? 'animate-float' : 'animate-pulse-subtle'
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
