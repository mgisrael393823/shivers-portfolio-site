
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24 px-6 md:px-12">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
      <footer className="py-6 px-6 md:px-12 border-t border-shivers-100">
        <div className="container mx-auto text-center">
          <p className="text-shivers-300 text-sm">
            &copy; {new Date().getFullYear()} Michael Israel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
