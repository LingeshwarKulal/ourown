import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission with a delay
      setTimeout(() => {
        // Show success message
        setShowSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          inquiryType: '',
          message: ''
        });
        
        setIsSubmitting(false);
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-soft relative">
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-4 right-4 bg-green-100 text-green-800 px-6 py-4 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Message sent successfully! We'll get back to you soon.
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="text-green-800 hover:text-green-900"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-[#7C3AED] font-medium mb-2">
              Name <span className="text-[#7C3AED]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.name ? 'border-red-500' : 'border-[#7C3AED]/20'
              } focus:outline-none focus:border-[#7C3AED]`}
              placeholder="Your name"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-[#7C3AED] font-medium mb-2">
              Email <span className="text-[#7C3AED]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.email ? 'border-red-500' : 'border-[#7C3AED]/20'
              } focus:outline-none focus:border-[#7C3AED]`}
              placeholder="Your email"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-[#7C3AED] font-medium mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#7C3AED]/20 focus:outline-none focus:border-[#7C3AED]"
              placeholder="Your company"
              disabled={isSubmitting}
            />
          </div>

          {/* Inquiry Type Field */}
          <div>
            <label htmlFor="inquiryType" className="block text-[#7C3AED] font-medium mb-2">
              Inquiry Type <span className="text-[#7C3AED]">*</span>
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.inquiryType ? 'border-red-500' : 'border-[#7C3AED]/20'
              } focus:outline-none focus:border-[#7C3AED] bg-white`}
              disabled={isSubmitting}
            >
              <option value="">Select a category</option>
              <option value="business">Business Inquiry</option>
              <option value="technical">Technical Support</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
            {errors.inquiryType && (
              <p className="mt-1 text-red-500 text-sm">{errors.inquiryType}</p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-[#7C3AED] font-medium mb-2">
            Message <span className="text-[#7C3AED]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className={`w-full px-4 py-3 rounded-lg border-2 ${
              errors.message ? 'border-red-500' : 'border-[#7C3AED]/20'
            } focus:outline-none focus:border-[#7C3AED]`}
            placeholder="Your message"
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            * Required fields
          </p>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-3 bg-[#7C3AED] text-white rounded-full font-medium text-lg transition-all duration-300 flex items-center ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#6D28D9]'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm; 