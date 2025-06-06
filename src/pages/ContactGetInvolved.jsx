import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import { submitContactForm, submitIncubationForm } from '../services/api';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
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
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await submitContactForm(formData);
      setStatus({ submitting: false, submitted: true, error: null });
      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        message: ''
      });
    } catch (error) {
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: error.message || 'An error occurred. Please try again.'
      });
    }
  };

  const handleCloseMessage = () => {
    setStatus(prev => ({ ...prev, submitted: false }));
  };

  return (
    <motion.div 
      className="glassmorphism rounded-xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4 text-gradient">Have a Question or Idea?</h2>
      <div className="fancy-separator mb-6 max-w-xs"></div>
      <p className="text-gray-600 mb-6">Whether you're curious about our services, need bespoke support, or simply want to say hello, drop us a line.</p>
      
      {status.submitted && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 relative"
        >
          <div className="pr-8">
            Thank you for your message! We will be in touch soon.
          </div>
          <button
            onClick={handleCloseMessage}
            className="absolute top-4 right-4 text-green-600 hover:text-green-800"
            aria-label="Close message"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}

      {status.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {status.error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="">
            <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
              required
              disabled={status.submitting}
            />
          </div>
          <div className="">
            <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
              required
              disabled={status.submitting}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="">
            <label htmlFor="organization" className="block text-gray-700 mb-2 font-medium">Organization / Affiliation</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
              disabled={status.submitting}
            />
          </div>
          <div className="">
            <label htmlFor="role" className="block text-gray-700 mb-2 font-medium">Role / Title</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
              disabled={status.submitting}
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message*</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input h-32"
            required
            disabled={status.submitting}
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn-primary inline-flex items-center relative overflow-hidden group"
          disabled={status.submitting}
        >
          <span className="relative z-10">
            {status.submitting ? 'Sending...' : 'Send Message'}
          </span>
          <span className="absolute top-0 left-0 w-full h-0 bg-indigo-700 group-hover:h-full transition-all duration-300 ease-in-out z-0"></span>
          <svg className="w-5 h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </form>
    </motion.div>
  );
}

export { ContactForm };

function OfficeLocations() {
  return (
    <motion.div 
      className="glassmorphism rounded-xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4 text-gradient">Our Locations</h2>
      <div className="fancy-separator mb-6 max-w-xs"></div>
      <p className="text-gray-600 mb-6">Visit us or schedule an in-person meeting at one of our offices.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Head Office */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 10px 40px -15px rgba(0, 0, 0, 0.1)" }}
          className="transition-all duration-300"
        >
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-lg border border-indigo-100 h-full">
            <h3 className="text-xl font-semibold mb-3 text-gradient">Head Office (Pune)</h3>
            <address className="not-italic text-gray-600 mb-4">
              [Full address here]<br />
              <div className="flex items-center mt-3">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-XXX-XXX-XXXX
              </div>
              <div className="flex items-center mt-2">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                pune@ourown.co.in
              </div>
            </address>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors flex items-center text-sm mt-2 font-medium">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>
        </motion.div>
        
        {/* Corporate Office */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 10px 40px -15px rgba(0, 0, 0, 0.1)" }}
          className="transition-all duration-300"
        >
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-lg border border-indigo-100 h-full">
            <h3 className="text-xl font-semibold mb-3 text-gradient">Corporate Office (Bengaluru)</h3>
            <address className="not-italic text-gray-600 mb-4">
              [Full address here]<br />
              <div className="flex items-center mt-3">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-XXX-XXX-XXXX
              </div>
              <div className="flex items-center mt-2">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                bangalore@ourown.co.in
              </div>
            </address>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors flex items-center text-sm mt-2 font-medium">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Interactive Map */}
      <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 mix-blend-overlay"></div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.92836449512!2d73.7929532758288!3d18.524564859548273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650956755154!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="OUROWN Office Locations"
          className="z-10 relative"
        ></iframe>
      </div>
    </motion.div>
  );
}

function JoinProgram() {
  const [formData, setFormData] = useState({
    companyName: '',
    founderName: '',
    email: '',
    industrySector: '',
    stage: '',
    pitchDeck: '',
    motivation: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    applicationId: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert file to base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prevState => ({
          ...prevState,
          pitchDeck: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null, applicationId: null });

    try {
      // Basic validation
      if (!formData.companyName || !formData.founderName || !formData.email || !formData.industrySector || !formData.stage || !formData.motivation) {
        throw new Error('Please fill in all required fields');
      }

      console.log('Submitting form data:', formData);
      const response = await submitIncubationForm(formData);
      console.log('Form submission response:', response);
      
      // Check if we have a valid response
      if (response && (response.success || response.applicationId)) {
        setStatus({ 
          submitting: false, 
          submitted: true, 
          error: null,
          applicationId: response.applicationId 
        });
        // Reset form
        setFormData({
          companyName: '',
          founderName: '',
          email: '',
          industrySector: '',
          stage: '',
          pitchDeck: '',
          motivation: ''
        });
      } else {
        throw new Error(response?.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: error.message || 'An error occurred while submitting your application. Please try again.',
        applicationId: null
      });
    }
  };

  return (
    <motion.div 
      className="glassmorphism rounded-xl p-8 shadow-lg h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4 text-gradient">Join an Incubation Programme</h2>
      <div className="fancy-separator mb-6 max-w-xs"></div>
      <p className="text-gray-600 mb-6">Startup founder or entrepreneur? Apply to our incubation cohorts and gain access to troupes, mentors, and funding networks.</p>
      
      {status.submitted && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
        >
          <div className="pr-8">
            <p className="font-medium">Application Submitted Successfully!</p>
            <p className="mt-1">Thank you for your application! Our team will review and contact you soon.</p>
            {status.applicationId && (
              <p className="text-sm mt-2">Your Application ID: <span className="font-medium">{status.applicationId}</span></p>
            )}
          </div>
        </motion.div>
      )}

      {status.error && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{status.error}</span>
          </div>
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-gray-700 mb-2 font-medium">Company / Venture Name*</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
            required
            disabled={status.submitting}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="founderName" className="block text-gray-700 mb-2 font-medium">Founder Name*</label>
            <input
              type="text"
              id="founderName"
              name="founderName"
              value={formData.founderName}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
              required
              disabled={status.submitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
              required
              disabled={status.submitting}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="industrySector" className="block text-gray-700 mb-2 font-medium">Industry Sector*</label>
            <select
              id="industrySector"
              name="industrySector"
              value={formData.industrySector}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
              required
              disabled={status.submitting}
            >
              <option value="">Select industry</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="FinTech">FinTech</option>
              <option value="Sustainability">Sustainability</option>
              <option value="Education">Education</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="stage" className="block text-gray-700 mb-2 font-medium">Stage*</label>
            <select
              id="stage"
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
              required
              disabled={status.submitting}
            >
              <option value="">Select stage</option>
              <option value="Idea">Idea</option>
              <option value="Prototype">Prototype</option>
              <option value="Early Revenue">Early Revenue</option>
              <option value="Scaling">Scaling</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="pitchDeck" className="block text-gray-700 mb-2 font-medium">Pitch Deck Upload</label>
          <div className="border border-gray-300 rounded-lg px-4 py-6 bg-gray-50 text-center relative">
            <input
              type="file"
              id="pitchDeck"
              name="pitchDeck"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept=".pdf,.ppt,.pptx"
              disabled={status.submitting}
            />
            <svg className="w-10 h-10 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-sm text-gray-500">Drag and drop your file here, or click to browse</p>
            <p className="text-xs text-gray-400 mt-1">Supported formats: PDF, PPT, PPTX (Max 10MB)</p>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="motivation" className="block text-gray-700 mb-2 font-medium">Motivation Statement*</label>
          <textarea
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input h-24"
            required
            disabled={status.submitting}
            placeholder="Tell us about your venture and why you're interested in our programme..."
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn-primary inline-flex items-center relative overflow-hidden group"
          disabled={status.submitting}
        >
          <span className="relative z-10">
            {status.submitting ? 'Submitting...' : 'Apply Now'}
          </span>
          <span className="absolute top-0 left-0 w-full h-0 bg-indigo-700 group-hover:h-full transition-all duration-300 ease-in-out z-0"></span>
          <svg className="w-5 h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </form>
    </motion.div>
  );
}

function ContactGetInvolved() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader 
        title="Get Involved: Let's Build Together"
        subtitle="Reach out, partner with us, or join a programme—OUROWN's doors are open to every stakeholder ready to drive impact."
        bgColor="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900"
      />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-primary hover:text-primary-dark font-medium transition duration-300 ease-in-out">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 font-medium">Contact & Get Involved</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="section-title mb-6">Connect With Our Ecosystem</h2>
              <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Whether you're looking to innovate with us, join our programs, or simply learn more about what we do, 
                we're here to help you navigate the OUROWN ecosystem.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-10">
              {/* General Inquiry Form */}
              <div id="contact-form">
                <ContactForm />
              </div>
              
              {/* Office Locations & Map */}
              <OfficeLocations />
              
              {/* Join Program Section */}
              <div className="max-w-2xl mx-auto">
                <JoinProgram />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary Call to Action */}
      <div className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glassmorphism-dark p-10 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-6">Still Unsure?</h2>
              <p className="text-xl mb-8 text-white/90">
                Our team is here to guide you—no question is too big or small.
              </p>
              <a 
                href="#contact-form" 
                className="bg-white text-indigo-900 hover:bg-indigo-100 font-bold px-8 py-4 rounded-lg inline-flex items-center btn-hover-effect relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Our Team</span>
                <span className="absolute top-0 left-0 w-0 h-full bg-indigo-100 group-hover:w-full transition-all duration-300 ease-in-out z-0"></span>
                <svg className="w-5 h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactGetInvolved; 