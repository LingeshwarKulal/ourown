import { motion } from 'framer-motion';

const PageHeader = ({ 
  title, 
  subtitle, 
  bgColor = "bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900",
  align = "center"
}) => {
  return (
    <div className={`relative overflow-hidden ${bgColor} py-16 md:py-24`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-blue-500 blur-[80px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-600 blur-[100px]"></div>
          <div className="absolute top-[40%] right-[30%] w-72 h-72 rounded-full bg-indigo-500 blur-[90px]"></div>
        </div>
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-[15%] left-[15%] w-16 h-16 rounded-lg border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-[20%] left-[25%] w-12 h-12 rounded-full border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          animate={{ 
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute top-[30%] right-[15%] w-20 h-20 rounded-lg border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          animate={{ 
            y: [0, 12, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <div className={`max-w-4xl mx-auto text-${align}`}>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-indigo-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-xl text-white/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default PageHeader; 