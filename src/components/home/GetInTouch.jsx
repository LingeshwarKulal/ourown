import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
  return (
    <section className="bg-[#7C3AED] py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight font-display">
            Need Custom Resources?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed">
            Our team can help you find the right resources and create customized solutions for your specific needs
          </p>
          <Link
            to="/contact-get-involved"
            className="inline-flex items-center px-8 py-4 bg-white rounded-full text-[#7C3AED] font-medium text-xl hover:bg-opacity-95 transition-all duration-300 group"
          >
            Get in Touch
            <svg
              className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8l4 4m0 0l-4 4m4-4H4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch; 