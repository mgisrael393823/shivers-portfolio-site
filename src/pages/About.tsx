
import React from 'react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-poppins font-light text-shivers-100 mb-16 tracking-wide fade-in">
          About
        </h1>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div className="fade-in fade-in-delay-1">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-shivers-300 to-shivers-400 flex items-center justify-center mx-auto md:mx-0 mb-8">
              <span className="text-4xl md:text-5xl font-light text-white">MI</span>
            </div>
            <h2 className="text-3xl font-poppins font-light text-shivers-100 mb-6 text-center md:text-left">
              About Michael
            </h2>
          </div>
          
          <div className="space-y-8 text-shivers-200 font-light fade-in fade-in-delay-2">
            <p className="leading-relaxed text-lg max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <p className="leading-relaxed text-lg max-w-xl">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
