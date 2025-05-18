import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#7C3AED] mb-6 text-center font-display">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Have questions or want to learn more? We're here to help you find the right solutions for your needs.
          </p>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 