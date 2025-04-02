
import React from 'react';
import Layout from '@/components/Layout';
import Logo from '@/components/Logo';
import LogoGrid from '@/components/LogoGrid';
import { Globe } from '@/components/Globe';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20">
        <div className="mt-10 pt-16 pb-8">
          <Logo size="lg" />
        </div>
        
        <h2 className="text-center text-2xl md:text-4xl font-light tracking-wide text-shivers-200 mb-10 max-w-2xl mx-auto fade-in fade-in-delay-1">
          Ventures, Projects, and Experiments by Michael Israel
        </h2>
        
        <div className="relative w-full">
          <div className="absolute inset-0 z-0">
            <Globe />
          </div>
          
          <div className="relative z-10 pt-20 pb-20 w-full max-w-5xl mx-auto fade-in fade-in-delay-3">
            <LogoGrid />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
