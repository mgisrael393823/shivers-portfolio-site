
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
  
  // Size classes based on prop - increased sizes by 20-30%
  const sizeClasses = {
    sm: 'text-3xl', // Increased from text-2xl
    md: 'text-6xl', // Increased from text-5xl
    lg: 'text-8xl', // Increased from text-7xl
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
      <h1 className={`font-poppins font-light ${sizeClasses[size]} tracking-wider text-shivers-100 logo`}>
        Shivers
      </h1>
    </Link>
  );
};

export default Logo;
