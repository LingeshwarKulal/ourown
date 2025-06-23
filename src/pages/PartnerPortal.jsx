import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import CardGrid from '../components/shared/CardGrid';

function PartnerPortal() {
  // Portal features data for CardGrid
  const portalFeaturesData = [
    {
      title: "Collaboration Tracking",
      description: "Monitor ongoing projects, track milestones, and manage deliverables through our intuitive dashboard.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
      link: "#collaboration"
    },
    {
      title: "Resource Library",
      description: "Access exclusive training materials, case studies, and research papers to enhance your partnership value.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      link: "#resources"
    },
    {
      title: "Network Directory",
      description: "Connect with other partners, PCs, and ecosystem members to explore collaboration opportunities.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      link: "#network"
    },
    {
      title: "Event Management",
      description: "Register for exclusive partner events, workshops, and networking opportunities through our integrated calendar.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      link: "#events"
    },
    {
      title: "Performance Dashboard",
      description: "Monitor the impact of your partnership with real-time metrics, analytics, and ROI calculations.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      link: "#performance"
    }
  ];

  // Partnership tiers data
  const partnershipTiersData = [
    {
      tier: "Associate Partner",
      level: "Entry Level",
      features: [
        { name: "Basic portal access", available: true },
        { name: "Quarterly network events", available: true },
        { name: "Resource library access", available: true },
        { name: "Priority matching", available: false },
        { name: "Dedicated troupe access", available: false },
        { name: "Investment committee access", available: false },
        { name: "Co-branding opportunities", available: false }
      ],
      color: "blue"
    },
    {
      tier: "Strategic Partner",
      level: "Mid-Level",
      features: [
        { name: "Full portal access", available: true },
        { name: "Monthly network events", available: true },
        { name: "Complete resource library", available: true },
        { name: "Priority matching", available: true },
        { name: "Limited troupe access", available: true },
        { name: "Investment committee access", available: false },
        { name: "Co-branding opportunities", available: false }
      ],
      color: "purple",
      highlighted: true
    },
    {
      tier: "Alliance Partner",
      level: "Premium",
      features: [
        { name: "Premium portal access", available: true },
        { name: "Unlimited network events", available: true },
        { name: "Complete resource library", available: true },
        { name: "Priority matching", available: true },
        { name: "Unlimited troupe access", available: true },
        { name: "Investment committee access", available: true },
        { name: "Co-branding opportunities", available: true }
      ],
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader 
        title="Partner Portal"
        subtitle="Access exclusive resources, track collaborations, and engage with the OUROWN ecosystem."
        bgColor="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-primary hover:text-primary-dark font-medium transition duration-300 ease-in-out">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 font-medium">Partner Portal</span>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-md mx-auto glassmorphism overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-primary text-white py-4 px-6">
              <h2 className="text-xl font-bold">Partner Login</h2>
            </div>
            <div className="p-6">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="input"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="input"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <p className="text-sm text-primary mt-2 hover:underline cursor-pointer">
                    Forgot your password?
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="btn-primary w-full btn-hover-effect"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 text-sm">
                  Not yet a partner? <Link to="/contact-get-involved" className="text-primary hover:underline">Apply to join</Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Portal Features */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Portal Features</h2>
            <p className="section-subtitle">
              Our dedicated Partner Portal provides powerful tools to maximize your engagement with the OUROWN ecosystem.
            </p>
            <div className="fancy-separator mb-0 mx-auto max-w-xs"></div>
          </div>
          
          <CardGrid 
            items={portalFeaturesData} 
            columns={3}
            cardType="feature" 
          />
        </div>
      </div>
      
      {/* Partnership Tiers */}
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Partnership Tiers</h2>
            <p className="section-subtitle">
              OUROWN offers multiple partnership levels to accommodate organizations of all sizes and engagement capacities.
            </p>
            <div className="fancy-separator mb-0 mx-auto max-w-xs"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnershipTiersData.map((tier, index) => (
              <motion.div 
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg ${tier.highlighted ? 'border-2 border-purple-500 transform md:-translate-y-4' : 'border border-gray-200'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`bg-${tier.color}-100 p-6 text-center`}>
                  <h3 className={`text-xl font-bold text-${tier.color}-900`}>{tier.tier}</h3>
                  <div className="mt-4">
                    <span className={`text-2xl font-bold text-${tier.color}-600`}>{tier.level}</span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-3">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        {feature.available ? (
                          <svg className={`w-5 h-5 text-${tier.color}-500 mt-1 mr-2 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        <span className={feature.available ? "text-gray-700" : "text-gray-500 opacity-50"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link 
                      to="/contact-get-involved" 
                      className={`w-full block text-center py-2 px-4 rounded-lg ${
                        tier.highlighted 
                          ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                          : `text-${tier.color}-600 border border-${tier.color}-600 hover:bg-${tier.color}-50`
                      } transition-colors duration-300 font-medium`}
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16 bg-gradient-glass">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-12 text-center">What Our Partners Say</h2>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden p-8 md:p-0 md:flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/3 bg-gradient-primary flex items-center justify-center py-12">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-xl italic text-gray-700 mb-6 leading-relaxed">
                      "The Partner Portal has been instrumental in helping us identify and collaborate with the right startups. The streamlined communication and resource sharing has cut our integration time by 60%."
                    </p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Vikram Mehta</h4>
                        <p className="text-gray-600">Innovation Director, TechFusion Labs</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link to="/success-stories" className="text-primary flex items-center font-medium hover:text-primary-dark transition-colors">
                      <span>Read more partner stories</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to become an OUROWN partner?</h2>
              <p className="text-xl mb-8 text-white/80">
                Join our ecosystem and connect with innovative startups, industry experts, and fellow organizations.
              </p>
              <Link 
                to="/contact-get-involved" 
                className="bg-white text-indigo-900 hover:bg-blue-100 font-bold px-8 py-4 rounded-lg inline-block btn-hover-effect"
              >
                Apply for Partnership
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerPortal; 