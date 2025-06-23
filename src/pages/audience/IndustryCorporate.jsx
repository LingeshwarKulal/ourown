import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsBuilding, BsGraphUp, BsPersonSquare, BsFileText } from 'react-icons/bs';

function IndustryCorporate() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interests: [],
    message: ''
  });

  const useCases = [
    {
      id: 1,
      title: 'Digital Transformation Initiative',
      company: 'Tech Manufacturing Corp',
      roi: '45% Cost Reduction',
      duration: '12 months',
      impact: [
        'Automated 80% of manual processes',
        'Reduced operational costs by 45%',
        'Improved customer satisfaction by 60%'
      ],
      industry: 'Manufacturing',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Supply Chain Optimization',
      company: 'Global Logistics Ltd',
      roi: '30% Efficiency Gain',
      duration: '8 months',
      impact: [
        'Reduced delivery times by 35%',
        'Improved inventory accuracy to 99.9%',
        'Decreased logistics costs by 25%'
      ],
      industry: 'Logistics',
      thumbnail: 'https://images.unsplash.com/photo-1566843972142-a7fcb2c1c22c?fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Customer Experience Enhancement',
      company: 'RetailTech Solutions',
      roi: '85% Customer Satisfaction',
      duration: '6 months',
      impact: [
        'Increased customer retention by 40%',
        'Reduced response time by 65%',
        'Boosted sales conversion by 25%'
      ],
      industry: 'Retail',
      thumbnail: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?fit=crop&w=800&q=80'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Chief Innovation Officer',
      company: 'Tech Manufacturing Corp',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=200&q=80',
      quote: 'The ROI we\'ve seen from implementing OUROWN\'s solutions has been remarkable. Their approach to digital transformation is both innovative and practical.',
      results: 'Achieved 45% cost reduction within first year'
    },
    {
      id: 2,
      name: 'Raj Patel',
      role: 'VP of Operations',
      company: 'Global Logistics Ltd',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&q=80',
      quote: 'OUROWN\'s expertise in supply chain optimization has transformed our operations. Their solutions are scalable and deliver measurable results.',
      results: 'Improved efficiency by 30% across operations'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'Director of Digital',
      company: 'RetailTech Solutions',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=200&q=80',
      quote: 'Working with OUROWN has significantly enhanced our customer experience metrics. Their team truly understands retail technology.',
      results: 'Increased customer satisfaction to 85%'
    }
  ];

  const engagementOptions = [
    'Digital Transformation',
    'Process Automation',
    'Supply Chain Optimization',
    'Customer Experience Enhancement',
    'Data Analytics & Insights',
    'Innovation Consulting'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (option) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(option)
        ? prev.interests.filter(item => item !== option)
        : [...prev.interests, option]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-900 h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
        <div className="text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl font-bold text-white mb-6 tracking-tight"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
          >
            Industry & Corporate
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto px-4"
          >
            Discover how we drive innovation and digital transformation for enterprises
          </motion.p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Use Cases Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsGraphUp className="w-6 h-6 text-[#5D3FD3]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Use Cases & ROI Examples</h2>
              <p className="text-gray-600 mt-1">Real-world implementation success stories with measurable results</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48">
                  <img
                    src={useCase.thumbnail}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-[#5D3FD3]">
                      {useCase.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{useCase.company}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-green-600">
                      <span className="font-semibold">ROI:</span>
                      <span className="ml-2">{useCase.roi}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold">Duration:</span>
                      <span className="ml-2">{useCase.duration}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {useCase.impact.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Executive Testimonials Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsPersonSquare className="w-6 h-6 text-[#5D3FD3]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Executive Testimonials</h2>
              <p className="text-gray-600 mt-1">Hear from our enterprise partners about their transformation journey</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-[#5D3FD3]">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-green-600 text-sm font-medium">
                  {testimonial.results}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom Engagement Form Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <BsFileText className="w-6 h-6 text-[#5D3FD3]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Custom Engagement Form</h2>
              <p className="text-gray-600 mt-1">Tell us about your needs and let's explore collaboration opportunities</p>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#5D3FD3]/20 focus:border-[#5D3FD3]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#5D3FD3]/20 focus:border-[#5D3FD3]"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#5D3FD3]/20 focus:border-[#5D3FD3]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#5D3FD3]/20 focus:border-[#5D3FD3]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Areas of Interest
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {engagementOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        className="rounded border-gray-300 text-[#5D3FD3] focus:ring-[#5D3FD3]"
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#5D3FD3]/20 focus:border-[#5D3FD3]"
                  placeholder="Tell us about your specific needs or challenges..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#5D3FD3] text-white rounded-lg hover:bg-[#5D3FD3]/90 transition-colors flex items-center justify-center"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default IndustryCorporate; 