import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import { submitPartnershipForm } from '../services/api';

function PartnerApply() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipType: '',
    industry: '',
    companySize: '',
    proposal: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  // Add useEffect to handle auto-hiding of success message
  useEffect(() => {
    let timeoutId;
    if (status.submitted) {
      timeoutId = setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000); // 5 seconds
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [status.submitted]);

  const handleCloseMessage = () => {
    setStatus(prev => ({ ...prev, submitted: false }));
  };

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
      await submitPartnershipForm(formData);
      setStatus({ submitting: false, submitted: true, error: null });
      // Reset form
      setFormData({
        organizationName: '',
        contactPerson: '',
        email: '',
        phone: '',
        partnershipType: '',
        industry: '',
        companySize: '',
        proposal: ''
      });
    } catch (error) {
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: error.message || 'An error occurred. Please try again.'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader 
        title="Partner Application"
        subtitle="Join OUROWN's ecosystem and unlock collaborative opportunities for growth and innovation."
        bgColor="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-primary hover:text-primary-dark font-medium transition duration-300 ease-in-out">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/contact-get-involved" className="text-primary hover:text-primary-dark font-medium transition duration-300 ease-in-out">Contact & Get Involved</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 font-medium">Partner Application</span>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glassmorphism rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Partnership Application Form</h2>
              <div className="fancy-separator mb-6 max-w-xs"></div>
              <p className="text-gray-600 mb-8">Complete the form below to apply for partnership with OUROWN. Our team will review your application and contact you to discuss next steps.</p>

              <AnimatePresence>
                {status.submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 relative"
                  >
                    <div className="pr-8">
                      Thank you for your partnership application! Our team will review and contact you soon.
                    </div>
                    <button
                      onClick={handleCloseMessage}
                      className="absolute top-4 right-4 text-green-600 hover:text-green-800 transition-colors"
                      aria-label="Close message"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {status.error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organizationName" className="block text-gray-700 mb-2 font-medium">Organization Name*</label>
                    <input
                      type="text"
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contactPerson" className="block text-gray-700 mb-2 font-medium">Contact Person*</label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="partnershipType" className="block text-gray-700 mb-2 font-medium">Partnership Type*</label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
                      required
                    >
                      <option value="">Select partnership type</option>
                      <option value="Associate">Associate Partner</option>
                      <option value="Strategic">Strategic Partner</option>
                      <option value="Alliance">Alliance Partner</option>
                      <option value="Corporate">Corporate Partner</option>
                      <option value="Academic">Academic Institution</option>
                      <option value="Government">Government Body</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-gray-700 mb-2 font-medium">Industry Sector*</label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
                      required
                    >
                      <option value="">Select industry sector</option>
                      <option value="Technology">Technology</option>
                      <option value="Finance">Finance & Banking</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Retail">Retail & Consumer</option>
                      <option value="Energy">Energy & Utilities</option>
                      <option value="Government">Government</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="companySize" className="block text-gray-700 mb-2 font-medium">Company Size*</label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input"
                    required
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="proposal" className="block text-gray-700 mb-2 font-medium">Partnership Objectives & Proposal*</label>
                  <textarea
                    id="proposal"
                    name="proposal"
                    value={formData.proposal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary input h-32"
                    placeholder="Please describe your objectives for partnership and how you envision collaborating with OUROWN..."
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    className="btn-primary inline-flex items-center relative overflow-hidden group"
                    disabled={status.submitting}
                  >
                    <span className="relative z-10">
                      {status.submitting ? 'Submitting...' : 'Submit Application'}
                    </span>
                    <span className="absolute top-0 left-0 w-full h-0 bg-indigo-700 group-hover:h-full transition-all duration-300 ease-in-out z-0"></span>
                    <svg className="w-5 h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PartnerApply; 