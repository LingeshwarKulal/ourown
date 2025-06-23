import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import CardGrid from '../components/shared/CardGrid';

function SuccessStories() {
  // Success metrics data for CardGrid
  const metricsData = [
    {
      title: "₹750Cr+",
      description: "Total funding secured by portfolio companies",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    {
      title: "12,000+",
      description: "Jobs created across ecosystem",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    },
    {
      title: "85%",
      description: "Venture success rate (vs 20% industry average)",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    },
    {
      title: "250+",
      description: "Ventures supported since inception",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    }
  ];

  // Recognition data for CardGrid
  const recognitionData = [
    {
      title: "Top Incubator Award",
      description: "National Startup Association",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    },
    {
      title: "Innovation Excellence",
      description: "Digital India Initiative",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    },
    {
      title: "Ecosystem Builder",
      description: "Tech Founders Alliance",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader 
        title="Success Stories"
        subtitle="Discover how companies and entrepreneurs have achieved remarkable growth through OUROWN's ecosystem."
        bgColor="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-primary hover:text-primary-dark font-medium transition duration-300 ease-in-out">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 font-medium">Success Stories</span>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">Ecosystem Impact Stories</h2>
            <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
            <p className="text-lg text-gray-700 mb-8">
              At OUROWN, we measure our success through the achievements of our ecosystem participants. 
              These stories highlight the transformative journeys of companies, entrepreneurs, and initiatives 
              that have leveraged our methodology and support to achieve remarkable outcomes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Success Stories */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-10">Featured Success Stories</h2>
            <div className="fancy-separator mb-12 mx-auto max-w-xs"></div>
            
            {/* Success Story 1 */}
            <motion.div 
              className="glassmorphism rounded-2xl overflow-hidden mb-12 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-xl">
                    NexGen Health
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-bold text-gradient mb-4">NexGen Health: Revolutionizing Rural Healthcare</h3>
                  <p className="text-gray-700 mb-6">
                    When NexGen Health joined OUROWN, they had a vision for AI-powered diagnostic tools for underserved communities,
                    but faced challenges in clinical validation and distribution. Within 18 months of engagement:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="card p-4 rounded text-center">
                      <p className="text-3xl font-bold text-gradient">₹32Cr</p>
                      <p className="text-sm text-gray-600">Funding Secured</p>
                    </div>
                    <div className="card p-4 rounded text-center">
                      <p className="text-3xl font-bold text-gradient">120+</p>
                      <p className="text-sm text-gray-600">Clinics Deployed</p>
                    </div>
                    <div className="card p-4 rounded text-center">
                      <p className="text-3xl font-bold text-gradient">35,000+</p>
                      <p className="text-sm text-gray-600">Patients Served</p>
                    </div>
                  </div>
                  <Link to="/case-studies/nexgen-health" className="btn-text flex items-center btn-hover-effect">
                    <span>Read the full case study</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Success Story 2 */}
            <motion.div 
              className="glassmorphism rounded-2xl overflow-hidden mb-12 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-xl">
                    EcoHarvest
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-bold text-gradient mb-4">EcoHarvest: Transforming Sustainable Agriculture</h3>
                  <p className="text-gray-700 mb-6">
                    EcoHarvest joined with innovative hydroponic technology but struggled with the commercial model.
                    Through OUROWN's Troup-Based Incubation, they transformed their approach:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="card p-4 rounded text-center">
                      <p className="text-3xl font-bold text-gradient">85%</p>
                      <p className="text-sm text-gray-600">Water Usage Reduction</p>
                    </div>
                    <div className="card p-4 rounded text-center">
                      <p className="text-3xl font-bold text-gradient">12x</p>
                      <p className="text-sm text-gray-600">Revenue Growth</p>
                    </div>
                    <div className="card p-4 rounded text-center">
                      <p className="text-3xl font-bold text-gradient">5,000+</p>
                      <p className="text-sm text-gray-600">Farmers Onboarded</p>
                    </div>
                  </div>
                  <Link to="/case-studies/ecoharvest" className="btn-text flex items-center btn-hover-effect">
                    <span>Read the full case study</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Success Story 3 */}
            <motion.div 
              className="glassmorphism rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-xl">
                    FinEdge
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-bold text-gradient mb-4">FinEdge: Democratizing Financial Access</h3>
                  <p className="text-gray-700 mb-6">
                    FinEdge came to OUROWN with a mission to provide financial services to the unbanked.
                    With regulatory challenges and scaling hurdles, our ecosystem approach delivered:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="card p-4 rounded text-center">
                      <p className="text-3xl font-bold text-gradient">3.2M</p>
                      <p className="text-sm text-gray-600">New Accounts</p>
                    </div>
                    <div className="card p-4 rounded text-center">
                      <p className="text-3xl font-bold text-gradient">₹50Cr</p>
                      <p className="text-sm text-gray-600">Series B Round</p>
                    </div>
                    <div className="card p-4 rounded text-center">
                      <p className="text-3xl font-bold text-gradient">18</p>
                      <p className="text-sm text-gray-600">States Covered</p>
                    </div>
                  </div>
                  <Link to="/case-studies/finedge" className="btn-text flex items-center btn-hover-effect">
                    <span>Read the full case study</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8">Ecosystem Impact Metrics</h2>
            <p className="section-subtitle mb-10">
              Our collective impact across all ecosystem participants demonstrates the power of our approach:
            </p>
            <div className="fancy-separator mb-12 mx-auto max-w-xs"></div>
            
            <CardGrid 
              items={metricsData} 
              columns={4}
              cardType="gradient" 
            />
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Industry Recognition</h3>
              
              <CardGrid 
                items={recognitionData} 
                columns={3}
                cardType="minimal" 
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Venture Spotlight */}
      <div className="py-16 bg-gradient-glass">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8 text-center">Venture Spotlight</h2>
            <div className="fancy-separator mb-12 mx-auto max-w-xs"></div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <p className="text-sm font-semibold text-primary mb-2">FEATURED VENTURE</p>
                  <h3 className="text-2xl font-bold mb-4">SwiftLogistics</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    "OUROWN's strategic guidance and operational support helped us scale from a local delivery startup to a nationwide logistics platform in just 24 months."
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Aditya Sharma</h4>
                      <p className="text-sm text-gray-600">CEO, SwiftLogistics</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium">₹18Cr Raised</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-sm font-medium">400+ Jobs Created</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gradient-primary flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <p className="text-6xl font-bold mb-4">32x</p>
                    <p className="text-xl">Growth in Monthly Deliveries</p>
                    <div className="mt-6 inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm border border-white/30">
                      Troup Accelerated Venture
                    </div>
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
              <h2 className="text-3xl font-bold mb-6">Ready to write your success story with OUROWN?</h2>
              <p className="text-xl mb-8 text-white/80">
                Join our ecosystem and become the next breakthrough venture in our portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact-get-involved" 
                  className="bg-white text-indigo-900 hover:bg-blue-100 font-bold px-8 py-4 rounded-lg inline-block btn-hover-effect"
                >
                  Apply to Our Programs
                </Link>
                <Link 
                  to="/solutions-services" 
                  className="bg-transparent border border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg inline-block transition-colors duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories; 