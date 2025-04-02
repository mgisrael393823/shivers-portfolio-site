
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ size = 'md' }: LogoProps) => {
  // Size classes based on prop
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
  };

  return (
    <Link to="/" className="inline-block">
      <h1 className={`font-poppins font-light ${sizeClasses[size]} tracking-wider text-shivers-500 logo`}>
        Shivers
      </h1>
    </Link>
  );
};

export default Logo;
