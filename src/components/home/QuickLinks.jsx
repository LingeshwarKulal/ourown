import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  const links = [
    {
      name: 'Platform',
      description: 'Overview of OUROWN\'s structure',
      path: '/about-us',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      name: 'Ecosystem',
      description: 'Dive into AOBs, PCs & TBBIM',
      path: '/ecosystem',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      name: 'Programs',
      description: 'Explore incubation, grants & services',
      path: '/solutions-services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      )
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      } 
    }
  };

  return (
    <section className="py-12 bg-white relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6"
        >
          {links.map((link, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="w-full md:w-1/3 max-w-sm"
            >
              <Link 
                to={link.path}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center transition-colors group-hover:bg-primary-100">
                  {link.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-display font-bold text-dark-300 group-hover:text-primary-600 transition-colors">{link.name}</h3>
                  <p className="text-sm text-dark-200">{link.description}</p>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks; 