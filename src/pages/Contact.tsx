
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Open email client when component mounts
    window.location.href = 'mailto:yourname@example.com';
    
    // Navigate back to home after a short delay
    const timeout = setTimeout(() => {
      navigate('/');
    }, 100);
    
    return () => clearTimeout(timeout);
  }, [navigate]);
  
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-4xl font-poppins font-light text-shivers-500 mb-8">
          Contact
        </h1>
        
        <p className="text-shivers-400 mb-8">
          Opening your email client...
        </p>
        
        <p className="text-shivers-300">
          If nothing happens, please email directly at: 
          <a 
            href="mailto:yourname@example.com" 
            className="ml-2 text-shivers-400 hover:text-shivers-500 transition-colors duration-300"
          >
            yourname@example.com
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
