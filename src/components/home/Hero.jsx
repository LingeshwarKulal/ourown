import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    // Simple parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      const decorElements = heroRef.current.querySelectorAll('.decor-element');
      decorElements.forEach((el, i) => {
        const depth = (i + 1) * 10;
        const moveX = x * depth;
        const moveY = y * depth;
        el.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.1}deg)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-secondary-50 opacity-80 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-noise-pattern opacity-10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="decor-element absolute top-20 left-[10%] w-60 h-60 bg-gradient-ocean rounded-blob opacity-20 mix-blend-multiply blur-xl"></div>
      <div className="decor-element absolute bottom-20 right-[5%] w-72 h-72 bg-gradient-candy rounded-blob opacity-20 mix-blend-multiply blur-xl"></div>
      <div className="decor-element absolute top-40 right-[15%] w-40 h-40 bg-gradient-sunset rounded-blob opacity-20 mix-blend-multiply blur-xl"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary-700 via-accent-600 to-secondary-600 bg-clip-text text-transparent"
          >
            Connecting Ambition to Opportunity
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-dark-300 mb-8 max-w-2xl mx-auto"
          >
            OUROWN's ecosystem empowers entrepreneurs, corporates, and governments to innovate, collaborate, and grow.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base md:text-lg text-dark-200 mb-10 max-w-xl mx-auto"
          >
            Join a unified platform where strategic guidance, capital access, and operational expertise converge to transform bold ideas into impactful ventures.
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link 
              to="/contact-get-involved/partner-apply" 
              className="px-8 py-3 rounded-xl bg-gradient-candy text-white font-medium text-base shadow-glow hover:shadow-none transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/resources/media" 
              className="px-8 py-3 rounded-xl bg-white border border-gray-200 text-dark-300 font-medium text-base hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              Watch Overview Video
            </Link>
          </motion.div>
        </div>
        
        {/* Curved shape divider */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,288L48,277.3C96,267,192,245,288,229.3C384,213,480,203,576,213.3C672,224,768,256,864,250.7C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero; 