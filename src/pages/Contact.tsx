
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [emailClicked, setEmailClicked] = useState(false);
  
  const handleEmailClick = () => {
    window.location.href = 'mailto:yourname@example.com';
    setEmailClicked(true);
    
    // Reset status after a delay
    setTimeout(() => {
      setEmailClicked(false);
    }, 3000);
  };
  
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-poppins font-light text-shivers-100 mb-16 fade-in">
          Contact
        </h1>
        
        <div className="max-w-2xl mx-auto text-center space-y-10 fade-in fade-in-delay-1">
          <p className="text-xl text-shivers-200">
            Feel free to reach out about ventures, collaborations, or just to connect.
          </p>
          
          <div className="py-6">
            <Button 
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-shivers-400 to-shivers-300 text-white text-lg py-6 px-10 rounded-full 
                        hover:from-shivers-300 hover:to-shivers-400 transition-all duration-300 shadow-lg"
            >
              {emailClicked ? 'Opening Email Client...' : 'Email Me'}
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 py-6 fade-in fade-in-delay-2">
            <SocialLink icon="linkedin" href="https://linkedin.com" />
            <SocialLink icon="twitter" href="https://twitter.com" />
            <SocialLink icon="github" href="https://github.com" />
            <SocialLink icon="instagram" href="https://instagram.com" />
          </div>
          
          <p className="text-shivers-300 mt-12 fade-in fade-in-delay-3">
            Or email directly at: 
            <a 
              href="mailto:yourname@example.com" 
              className="ml-2 text-shivers-200 hover:text-shivers-100 transition-colors duration-300 underline underline-offset-4"
            >
              yourname@example.com
            </a>
          </p>
        </div>
      </div>
      
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Button 
          onClick={handleEmailClick}
          className="bg-shivers-400 hover:bg-shivers-300 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        >
          <EmailIcon />
        </Button>
      </div>
    </Layout>
  );
};

const SocialLink = ({ icon, href }: { icon: string; href: string }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full border border-shivers-300/50 
                text-shivers-200 hover:text-shivers-100 hover:border-shivers-100 transition-all duration-300"
    >
      {icon === 'linkedin' && <LinkedInIcon />}
      {icon === 'twitter' && <TwitterIcon />}
      {icon === 'github' && <GitHubIcon />}
      {icon === 'instagram' && <InstagramIcon />}
    </a>
  );
};

// Simple icon components
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default Contact;
