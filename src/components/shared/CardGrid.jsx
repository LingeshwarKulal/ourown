import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CardGrid = ({ 
  items, 
  title, 
  subtitle,
  columns = 3,
  cardType = "default", // Options: default, gradient, minimal, feature
  showAnimation = true
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Column class based on number of columns
  const getColumnClass = () => {
    switch(columns) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-1 md:grid-cols-2";
      case 3: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };
  
  // Render card based on type
  const renderCard = (item, index) => {
    switch(cardType) {
      case "gradient":
        return <GradientCard key={index} item={item} />;
      case "minimal":
        return <MinimalCard key={index} item={item} />;
      case "feature":
        return <FeatureCard key={index} item={item} />;
      default:
        return <DefaultCard key={index} item={item} />;
    }
  };

  return (
    <div className="section bg-white">
      <div className="container">
        {/* Section Heading */}
        {title && (
          <div className="mb-12 text-center">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
            <div className="fancy-separator mb-0 mx-auto max-w-xs"></div>
          </div>
        )}
        
        {/* Card Grid */}
        <motion.div 
          className={`grid ${getColumnClass()} gap-8`}
          variants={showAnimation ? containerVariants : {}}
          initial={showAnimation ? "hidden" : "visible"}
          whileInView={showAnimation ? "visible" : ""}
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, index) => (
            <motion.div 
              key={index}
              variants={showAnimation ? itemVariants : {}}
            >
              {renderCard(item, index)}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Card Variants
const DefaultCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card p-6 md:p-8 h-full card-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon or Image */}
      {item.icon && (
        <div className="mb-6 text-primary-600">
          {typeof item.icon === 'string' ? (
            <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
          ) : (
            <div className="w-12 h-12 text-primary-600">
              {item.icon}
            </div>
          )}
        </div>
      )}
      
      {/* Content */}
      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
      <p className="text-gray-600 mb-4">{item.description}</p>
      
      {/* Link */}
      {item.link && (
        <Link 
          to={item.link} 
          className="inline-flex items-center text-primary-600 font-medium"
        >
          <span>Learn more</span>
          <svg 
            className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
};

const GradientCard = ({ item }) => {
  return (
    <div className="group h-full overflow-hidden relative rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-purple-700 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {item.icon && (
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
            <div className="text-white w-8 h-8">
              {item.icon}
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
        <p className="text-white/80 mb-6 flex-grow">{item.description}</p>
        
        {item.link && (
          <Link 
            to={item.link} 
            className="inline-flex items-center text-white font-medium mt-auto"
          >
            <span className="border-b-2 border-white/50 pb-1 group-hover:border-white transition-colors duration-300">
              Learn more
            </span>
            <svg 
              className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-tl-full"></div>
      <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"></div>
      <div className="absolute top-8 right-8 w-2 h-2 bg-white/20 rounded-full"></div>
    </div>
  );
};

const MinimalCard = ({ item }) => {
  return (
    <div className="group p-6 border border-gray-100 rounded-xl bg-white hover:border-indigo-100 transition-all duration-300 h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors duration-300">{item.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
      
      {item.link && (
        <Link 
          to={item.link} 
          className="text-primary-600 inline-flex items-center mt-auto font-medium"
        >
          <span>Learn more</span>
          <svg 
            className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
};

const FeatureCard = ({ item }) => {
  return (
    <div className="card overflow-hidden h-full flex flex-col group">
      <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:h-3 transition-all duration-300"></div>
      <div className="p-8 flex flex-col flex-grow">
        {item.icon && (
          <div className="w-14 h-14 rounded-lg bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors duration-300">
            <div className="text-indigo-600 w-7 h-7">
              {item.icon}
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-700 transition-colors duration-300">{item.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
        
        {item.link && (
          <Link 
            to={item.link} 
            className="text-indigo-600 inline-flex items-center mt-auto font-medium group-hover:text-indigo-800 transition-colors duration-300"
          >
            <span>Learn more</span>
            <svg 
              className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardGrid; 