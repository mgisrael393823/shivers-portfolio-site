
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event for navbar transition
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 flex items-center',
        scrolled ? 'navbar-scroll' : 'navbar-transparent'
      )}
    >
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-10 md:space-x-16">
          <NavLink to="/" active={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink to="/about" active={location.pathname === '/about'}>
            About
          </NavLink>
          <NavLink to="/contact" active={location.pathname === '/contact'}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        'font-poppins font-light text-sm tracking-wider uppercase relative transition-colors duration-300',
        active 
          ? 'text-shivers-100' 
          : 'text-shivers-200 hover:text-shivers-100',
        'after:content-[""] after:absolute after:w-full after:h-[1px] after:bottom-[-4px] after:left-0',
        active 
          ? 'after:bg-gradient-to-r after:from-shivers-300 after:to-shivers-100 after:opacity-100' 
          : 'after:bg-shivers-200 after:opacity-0 hover:after:opacity-100',
        'after:transition-all after:duration-300'
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
