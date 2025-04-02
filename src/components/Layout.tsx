
import React, { useEffect } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 px-6 md:px-12">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
      <footer className="py-8 px-6 md:px-12 border-t border-shivers-400/20">
        <div className="container mx-auto text-center">
          <p className="text-shivers-300 text-sm">
            &copy; {new Date().getFullYear()} Michael Israel. All rights reserved.
          </p>
          <p className="text-shivers-400 text-xs mt-2">
            Built with precision and care. Designed for the future.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
