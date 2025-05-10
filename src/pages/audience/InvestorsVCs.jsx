import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsShieldLock, BsGraphUp, BsPeople, BsDownload, BsCalendar4Event } from 'react-icons/bs';

function InvestorsVCs() {
  const [showNDAModal, setShowNDAModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    investmentFocus: [],
    message: ''
  });

  const portfolioMetrics = [
    {
      id: 1,
      title: 'Portfolio Growth 2023',
      stats: [
        { label: 'Average Revenue Growth', value: '127%' },
        { label: 'Total Funding Raised', value: '$45M' },
        { label: 'Successful Exits', value: '3' }
      ],
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Sector Performance',
      stats: [
        { label: 'FinTech', value: '+85%' },
        { label: 'HealthTech', value: '+92%' },
        { label: 'Enterprise SaaS', value: '+73%' }
      ],
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Impact Metrics',
      stats: [
        { label: 'Jobs Created', value: '1200+' },
        { label: 'Market Expansion', value: '4 Countries' },
        { label: 'Patents Filed', value: '15' }
      ],
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?fit=crop&w=800&q=80'
    }
  ];

  const upcomingRoundtables = [
    {
      id: 1,
      title: 'Q2 2024 Investment Opportunities',
      date: '2024-04-15T14:00:00',
      format: 'Hybrid (In-person & Virtual)',
      speakers: [
        'Sarah Chen - Managing Partner, Tech Ventures',
        'Raj Patel - Investment Director, Global Fund',
        'Emma Wilson - Head of VC Relations'
      ],
      topics: [
        'Emerging Market Opportunities',
        'Deep Tech Investment Landscape',
        'Cross-border Venture Collaboration'
      ],
      location: 'OUROWN Innovation Hub + Virtual'
    },
    {
      id: 2,
      title: 'Portfolio Showcase & Networking',
      date: '2024-05-20T10:00:00',
      format: 'In-person',
      speakers: [
        'David Zhang - Portfolio Success Lead',
        'Maria Garcia - Investment Analyst',
        'Tom Johnson - Startup Founder'
      ],
      topics: [
        'Portfolio Company Presentations',
        'Co-investment Opportunities',
        'Networking Session'
      ],
      location: 'OUROWN Conference Center'
    }
  ];

  const investmentFocusAreas = [
    'FinTech',
    'HealthTech',
    'Enterprise SaaS',
    'Deep Tech',
    'Sustainability',
    'Consumer Tech'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (area) => {
    setFormData(prev => ({
      ...prev,
      investmentFocus: prev.investmentFocus.includes(area)
        ? prev.investmentFocus.filter(item => item !== area)
        : [...prev.investmentFocus, area]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setShowNDAModal(true);
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
            Investors & VCs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto px-4"
          >
            Access exclusive investment opportunities and portfolio insights
          </motion.p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Pitch Deck Access Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsShieldLock className="w-6 h-6 text-[#5D3FD3]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Pitch Deck Access & NDA</h2>
              <p className="text-gray-600 mt-1">Complete the form below to access our confidential pitch materials</p>
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
                    Company/Fund
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
                  Investment Focus Areas
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {investmentFocusAreas.map((area) => (
                    <label key={area} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.investmentFocus.includes(area)}
                        onChange={() => handleCheckboxChange(area)}
                        className="rounded border-gray-300 text-[#5D3FD3] focus:ring-[#5D3FD3]"
                      />
                      <span className="text-sm text-gray-600">{area}</span>
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
                  placeholder="Tell us about your investment interests and criteria..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#5D3FD3] text-white rounded-lg hover:bg-[#5D3FD3]/90 transition-colors flex items-center justify-center gap-2"
              >
                <BsShieldLock className="w-4 h-4" />
                Request Access
              </button>
            </form>
          </div>
        </section>

        {/* Portfolio Performance Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsGraphUp className="w-6 h-6 text-[#5D3FD3]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Portfolio Performance Reports</h2>
              <p className="text-gray-600 mt-1">Key metrics and growth indicators from our portfolio companies</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioMetrics.map((metric) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48">
                  <img
                    src={metric.thumbnail}
                    alt={metric.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{metric.title}</h3>
                  <div className="space-y-3">
                    {metric.stats.map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.label}</span>
                        <span className="font-semibold text-[#5D3FD3]">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 text-[#5D3FD3] rounded-lg hover:bg-gray-100 transition-colors">
                    <BsDownload className="w-4 h-4" />
                    Download Report
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Investor Roundtables Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <BsPeople className="w-6 h-6 text-[#5D3FD3]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Investor Roundtables</h2>
              <p className="text-gray-600 mt-1">Exclusive events for our investor community</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingRoundtables.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <BsCalendar4Event className="w-8 h-8 text-[#5D3FD3]" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <p className="text-[#5D3FD3]">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Format</h4>
                    <p className="text-gray-600">{event.format}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600">{event.location}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Speakers</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {event.speakers.map((speaker, index) => (
                        <li key={index}>{speaker}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Topics</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {event.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#5D3FD3] text-white rounded-lg hover:bg-[#5D3FD3]/90 transition-colors">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* NDA Modal */}
      {showNDAModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Non-Disclosure Agreement</h3>
            <p className="text-gray-600 mb-6">
              Please review and accept our NDA to access the pitch deck and confidential materials.
            </p>
            <div className="h-48 overflow-y-auto border rounded p-4 mb-6 text-sm text-gray-600">
              [NDA content would go here]
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowNDAModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowNDAModal(false);
                  // Handle NDA acceptance
                }}
                className="flex-1 px-4 py-2 bg-[#5D3FD3] text-white rounded-lg hover:bg-[#5D3FD3]/90"
              >
                Accept & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InvestorsVCs; 