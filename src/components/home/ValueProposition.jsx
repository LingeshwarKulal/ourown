import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const ValueProposition = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const features = [
    {
      title: "Structured Support",
      description: "Custom troupes delivering expertise in strategy, technology, finance, and marketing.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      gradient: "bg-gradient-candy",
    },
    {
      title: "Unified Network",
      description: "Seamless access to industry partners, investors, and mentors.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      ),
      gradient: "bg-gradient-ocean",
    },
    {
      title: "Scalable Growth",
      description: "Stage-gate milestones ensuring clarity from ideation to scale.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      gradient: "bg-gradient-sunset",
    }
  ];
  
  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary-50">
              <span className="animate-morph w-12 h-12 rounded-blob bg-gradient-ocean flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </span>
            </div>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4 text-dark-300"
          >
            What Makes OUROWN Different?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-dark-200 max-w-2xl mx-auto"
          >
            Our collaborative ecosystem brings together strategic direction, operational expertise, and market access in a way that turns ambitious ideas into reality.
          </motion.p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" style={{ background: feature.gradient }}></div>
              <div className="h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col relative z-0 overflow-hidden">
                <div className={`w-14 h-14 rounded-xl ${feature.gradient} flex items-center justify-center text-white mb-6`}>
                  {feature.icon}
                </div>
                
                {/* Background Blob */}
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gray-50 rounded-full opacity-10"></div>
                
                <h3 className="text-xl font-display font-bold text-dark-300 mb-3">{feature.title}</h3>
                <p className="text-dark-200 flex-grow">{feature.description}</p>
                
                <div className="mt-6 pt-4 border-t border-gray-50">
                  <button className="text-primary-600 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition; 