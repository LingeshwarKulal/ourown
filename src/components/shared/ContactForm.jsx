import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = ({ 
  style = "default", // default, modern, minimal, gradient
  formTitle = "Get in Touch",
  formSubtitle = "Fill out the form below and we'll get back to you as soon as possible.",
  successMessage = "Thank you for your message! We will get back to you shortly.",
  categories = ["General Inquiry", "Partnership", "Support", "Other"]
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    status: 'idle', // idle, submitting, success, error
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setFormStatus({
        status: 'submitting',
        message: 'Sending your message...'
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would send the data to your API here
      console.log('Form submitted with data:', formData);
      
      setFormStatus({
        status: 'success',
        message: successMessage
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        category: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        status: 'error',
        message: 'There was an error submitting your form. Please try again.'
      });
    }
  };
  
  // Render form based on style
  const renderForm = () => {
    switch(style) {
      case "modern":
        return <ModernContactForm 
          formData={formData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          formStatus={formStatus} 
          formTitle={formTitle}
          formSubtitle={formSubtitle}
          categories={categories}
        />;
      case "minimal":
        return <MinimalContactForm 
          formData={formData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          formStatus={formStatus}
          formTitle={formTitle}
          formSubtitle={formSubtitle}
          categories={categories}
        />;
      case "gradient":
        return <GradientContactForm 
          formData={formData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          formStatus={formStatus}
          formTitle={formTitle}
          formSubtitle={formSubtitle}
          categories={categories} 
        />;
      default:
        return <DefaultContactForm 
          formData={formData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          formStatus={formStatus}
          formTitle={formTitle}
          formSubtitle={formSubtitle}
          categories={categories} 
        />;
    }
  };
  
  return (
    <div className="section">
      <div className="container">
        {renderForm()}
      </div>
    </div>
  );
};

// Form Variants
const DefaultContactForm = ({ 
  formData, 
  handleChange, 
  handleSubmit, 
  formStatus, 
  formTitle,
  formSubtitle,
  categories 
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-title">{formTitle}</h2>
        <p className="section-subtitle">{formSubtitle}</p>
        <div className="fancy-separator mb-0 mx-auto max-w-xs"></div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
        {formStatus.status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-10"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
            <p className="text-gray-600 mb-6">{formStatus.message}</p>
            <button 
              onClick={() => setFormStatus({ status: 'idle', message: '' })}
              className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Inquiry Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="input h-36 resize-none"
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">* Required fields</p>
              <button
                type="submit"
                disabled={formStatus.status === 'submitting'}
                className={`btn-primary ${formStatus.status === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {formStatus.status === 'submitting' ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </div>
            
            {formStatus.status === 'error' && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {formStatus.message}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

const ModernContactForm = ({ 
  formData, 
  handleChange, 
  handleSubmit, 
  formStatus, 
  formTitle,
  formSubtitle,
  categories 
}) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 rounded-2xl overflow-hidden shadow-xl">
        {/* Left side info panel */}
        <div className="lg:col-span-2 bg-gradient-to-br from-indigo-700 to-purple-700 text-white p-8 md:p-12 flex flex-col">
          <h2 className="text-3xl font-bold mb-6">{formTitle}</h2>
          <p className="text-white/80 mb-8">{formSubtitle}</p>
          
          {/* Contact info */}
          <div className="mt-auto space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-white/70">+91 (123) 456-7890</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-white/70">contact@ourown.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Office</h3>
                <p className="text-white/70">123 Innovation Street<br />Mumbai, India 400001</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side form */}
        <div className="lg:col-span-3 bg-white p-8 md:p-12">
          {formStatus.status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-10"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
              <p className="text-gray-600 mb-6">{formStatus.message}</p>
              <button 
                onClick={() => setFormStatus({ status: 'idle', message: '' })}
                className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder="+91 123-456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Inquiry Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="input"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input h-36 resize-none"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">* Required fields</p>
                <motion.button
                  type="submit"
                  disabled={formStatus.status === 'submitting'}
                  className={`btn-primary ${formStatus.status === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus.status === 'submitting' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </motion.button>
              </div>
              
              {formStatus.status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                >
                  {formStatus.message}
                </motion.div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const MinimalContactForm = ({ 
  formData, 
  handleChange, 
  handleSubmit, 
  formStatus, 
  formTitle,
  formSubtitle,
  categories 
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">{formTitle}</h2>
        <p className="text-gray-600 max-w-xl mx-auto">{formSubtitle}</p>
      </div>
      
      {formStatus.status === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-10 border border-gray-100 rounded-xl p-8"
        >
          <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
          <p className="text-gray-600 mb-6">{formStatus.message}</p>
          <button 
            onClick={() => setFormStatus({ status: 'idle', message: '' })}
            className="px-6 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 border border-gray-100 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name *"
                className="w-full p-3 border-b border-gray-200 focus:border-indigo-600 outline-none bg-transparent transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email *"
                className="w-full p-3 border-b border-gray-200 focus:border-indigo-600 outline-none bg-transparent transition-colors"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full p-3 border-b border-gray-200 focus:border-indigo-600 outline-none bg-transparent transition-colors"
              />
            </div>
            <div>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border-b border-gray-200 focus:border-indigo-600 outline-none bg-transparent transition-colors"
                required
              >
                <option value="" disabled>Select inquiry type *</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message *"
              className="w-full p-3 border-b border-gray-200 focus:border-indigo-600 outline-none bg-transparent transition-colors h-32 resize-none"
              required
            />
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-gray-500">* Required fields</p>
            <button
              type="submit"
              disabled={formStatus.status === 'submitting'}
              className="px-8 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              {formStatus.status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          
          {formStatus.status === 'error' && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {formStatus.message}
            </div>
          )}
        </form>
      )}
    </div>
  );
};

const GradientContactForm = ({ 
  formData, 
  handleChange, 
  handleSubmit, 
  formStatus, 
  formTitle,
  formSubtitle,
  categories 
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">{formTitle}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{formSubtitle}</p>
      </div>
      
      <div className="rounded-2xl p-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl">
        <div className="bg-white rounded-2xl p-8 md:p-10">
          {formStatus.status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-10"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">{formStatus.message}</p>
              <button 
                onClick={() => setFormStatus({ status: 'idle', message: '' })}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg transition-shadow"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-indigo-600 mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    required
                  />
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-indigo-600 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="company" className="block text-sm font-medium text-indigo-600 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="category" className="block text-sm font-medium text-indigo-600 mb-1">Inquiry Type *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-indigo-600 mb-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors h-40 resize-none"
                  required
                />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <p className="text-sm text-gray-500">* Required fields</p>
                <motion.button
                  type="submit"
                  disabled={formStatus.status === 'submitting'}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transition-all"
                  whileHover={{ translateY: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus.status === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </motion.button>
              </div>
              
              {formStatus.status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border-l-4 border-red-500 rounded-md text-red-700"
                >
                  <div className="flex">
                    <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formStatus.message}
                  </div>
                </motion.div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 