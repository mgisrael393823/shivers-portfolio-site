
import React from 'react';
import Layout from '@/components/Layout';
import Logo from '@/components/Logo';
import LogoGrid from '@/components/LogoGrid';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-12">
        <div className="mb-8">
          <Logo size="lg" />
        </div>
        
        <h2 className="text-center text-xl md:text-2xl font-poppins font-light text-shivers-400 mb-16 max-w-2xl mx-auto">
          Ventures, Projects, and Experiments by Michael Israel
        </h2>
        
        <div className="w-full max-w-4xl mx-auto mb-16">
          <LogoGrid />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
