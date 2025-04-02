
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className }: LogoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600); // 0.6s delay
    
    return () => clearTimeout(timer);
  }, []);
  
  // Size classes based on prop
  const sizeClasses = {
    sm: 'h-8', // Small logo size
    md: 'h-12', // Medium logo size
    lg: 'h-20', // Large logo size
  };

  return (
    <Link 
      to="/" 
      className={cn(
        "inline-block transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      <img 
        src="/homepage-logos/DISRVPT_WEBSITELOGO.png" 
        alt="DISRVPT" 
        className={cn(
          sizeClasses[size],
          "object-contain logo"
        )}
      />
    </Link>
  );
};

export default Logo;
