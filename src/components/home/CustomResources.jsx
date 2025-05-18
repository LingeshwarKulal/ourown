import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CustomResources = () => {
  return (
    <section className="bg-[#6B46C1] py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-display tracking-tight">
            Need Custom Resources?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our team can help you find the right resources and create customized solutions for your specific needs
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact-get-involved"
              className="inline-flex items-center px-10 py-4 bg-white text-[#6B46C1] rounded-lg font-semibold text-xl hover:bg-opacity-95 transition-all duration-300"
            >
              Get in Touch
              <svg
                className="ml-3 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomResources; 