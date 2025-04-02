
import React from 'react';
import Layout from '@/components/Layout';
import Logo from '@/components/Logo';
import LogoGrid from '@/components/LogoGrid';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20">
        <div className="mb-10 pt-8">
          <Logo size="lg" />
        </div>
        
        <h2 className="text-center text-xl md:text-2xl font-poppins font-light text-shivers-200 mb-20 max-w-2xl mx-auto fade-in fade-in-delay-1">
          Ventures, Projects, and Experiments by Michael Israel
        </h2>
        
        <div className="w-full max-w-5xl mx-auto mb-20 fade-in fade-in-delay-2">
          <LogoGrid />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
