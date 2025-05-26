import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import CardGrid from '../components/shared/CardGrid';
import TestimonialsSlider from '../components/shared/TestimonialsSlider';
import { ContactForm } from './ContactGetInvolved';

const SolutionsServices = () => {
  // Incubation services data
  const incubationServices = [
    {
      title: "Corporate Partnerships",
      description: "Strategic partnerships with corporations for CSR initiatives, R&D co-development, and collaborative case studies.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      link: "/solutions-services/corporate-partnerships"
    },
    {
      title: "Government Programs & Grants",
      description: "Comprehensive support for policy alignment, grant applications, and compliance requirements for government initiatives.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      link: "/solutions-services/government-programs-grants"
    },
    {
      title: "Startup Incubation Packages",
      description: "Comprehensive support through ideation workshops, MVP development, and market-entry acceleration programs.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      link: "/solutions-services/startup-incubation-packages"
    },
    {
      title: "MSME Support Schemes",
      description: "Specialized support for MSMEs including digitalization roadmaps, credit facilitation, and process optimization toolkits.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      link: "/solutions-services/msme-support-schemes"
    },
    {
      title: "Wanapreneur Programs",
      description: "Empowering aspiring entrepreneurs through capacity building modules, networking events, and peer-learning circles.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      link: "/solutions-services/wanapreneur-programs"
    },
    {
      title: "Digital Transformation & Training",
      description: "Comprehensive digital transformation services including technology audits, custom training curricula, and certification pathways.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
      link: "/solutions-services/digital-transformation-training"
    }
  ];

  // Programs data
  const programsData = [
    {
      title: "Catalyst",
      description: "Our flagship 12-week acceleration program for early-stage startups with validated MVPs seeking product-market fit and initial traction. Includes intensive workshops, personalized mentoring, and investor showcase day.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      link: "/solutions-services/catalyst-program"
    },
    {
      title: "ScaleUp Studio",
      description: "A 6-month program designed for growth-stage ventures ready to operationalize expansion. Focused on systems development, team building, and securing Series A funding for qualified participants.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      link: "/solutions-services/scaleup-studio"
    },
    {
      title: "Enterprise Innovation Lab",
      description: "Corporate innovation programs that connect established businesses with complementary startups. Structured as 90-day proof-of-concept sprints with clear commercialization pathways.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
      link: "/solutions-services/enterprise-innovation-lab"
    },
    {
      title: "Ecosystem Builder",
      description: "A comprehensive program that partners with local governments, universities, and industry associations to develop regional innovation hubs. Includes policy framework development and talent pipeline creation.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      link: "/solutions-services/ecosystem-builder"
    }
  ];

  // Assessment offerings data
  const assessmentData = [
    {
      title: "Startup Readiness Assessment",
      description: "A comprehensive evaluation of your startup's operational foundations across 12 key dimensions, from team dynamics to market positioning.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      link: "/solutions-services/readiness-assessment"
    },
    {
      title: "Innovation Diagnostic",
      description: "An in-depth analysis of your organization's innovation capabilities, identifying specific barriers and opportunities for breakthrough growth.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      link: "/solutions-services/innovation-diagnostic"
    },
    {
      title: "Investment Readiness Report",
      description: "A detailed evaluation of your venture's funding preparedness, including valuation metrics, documentation review, and pitch optimization.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      link: "/solutions-services/investment-readiness"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "OUROWN's troup-based approach to incubation transformed our business from a concept into a market-ready solution in just 90 days. Their cross-functional team's insights helped us avoid costly mistakes.",
      author: "Neha Desai",
      position: "Founder, FinEdge Technologies",
      image: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    {
      quote: "The ScaleUp Studio program was instrumental in our Series A raise. Their financial engineering team helped us structure a deal that maximized valuation while keeping favorable terms.",
      author: "Raj Malhotra",
      position: "CEO, LogiSync Solutions",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      quote: "As a corporate partner, the Enterprise Innovation Lab connected us with startups that complemented our strategic roadmap. Two pilot projects have already transitioned to commercial contracts.",
      author: "Priya Sharma",
      position: "Head of Innovation, Nexus Industries",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader 
        title="Solutions & Services"
        subtitle="Strategic guidance, technical expertise, and market acceleration through our custom incubation methodology."
        bgColor="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900"
      />

      {/* Introduction Section */}
      <div className="py-16 bg-white relative overflow-hidden">
        {/* Add decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full -mr-32 -mt-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full -ml-32 -mb-16 opacity-50"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="section-title mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              The OUROWN Approach
            </motion.h2>
            <motion.div 
              className="fancy-separator mb-8 mx-auto max-w-xs"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our services are delivered through the innovative Troup-Based Business Incubation Model — a customized, cross-functional approach that adapts to your specific needs. Rather than forcing entrepreneurs into rigid programs, we assemble expert teams (troupes) around your venture to provide targeted support at exactly the right time.
            </motion.p>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/ecosystem/troup-based-incubation-model" 
                className="btn-primary inline-flex items-center relative overflow-hidden group"
              >
                <span className="relative z-10">Learn about our incubation methodology</span>
                <span className="absolute top-0 left-0 w-full h-0 bg-indigo-700 group-hover:h-full transition-all duration-300 ease-in-out z-0"></span>
                <svg className="w-5 h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Incubation Services */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50 relative">
        {/* Add decorative elements */}
        <div className="absolute top-1/4 left-0 w-16 h-32 bg-indigo-200 rounded-r-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-0 w-16 h-32 bg-purple-200 rounded-l-full opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-title">Core Incubation Services</h2>
            <p className="section-subtitle">
              Comprehensive support across all dimensions of your entrepreneurial journey
            </p>
            <div className="fancy-separator mb-0 mx-auto max-w-xs"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {incubationServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-500 h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-indigo-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-800">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Link 
                    to={service.link} 
                    className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/contact-get-involved" 
              className="btn-outline text-primary border-primary hover:bg-primary hover:text-white transition-colors duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Request a Service Consultation</span>
              <span className="absolute top-0 left-0 w-0 h-full bg-indigo-600 group-hover:w-full transition-all duration-300 ease-in-out z-0"></span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Flagship Programs Section */}
      <div className="py-16 bg-white relative overflow-hidden">
        {/* Add decorative background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-title">Flagship Programs</h2>
            <p className="section-subtitle">
              Structured interventions designed for different stages and objectives
            </p>
            <div className="fancy-separator mb-0 mx-auto max-w-xs"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programsData.map((program, index) => (
              <motion.div 
                key={index}
                className="glassmorphism rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-purple-600 to-indigo-600' : 'from-indigo-600 to-purple-600'} p-6`}>
                  <div className="bg-white/20 p-3 rounded-full w-14 h-14 flex items-center justify-center text-white mb-4">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{program.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <Link 
                    to={program.link} 
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    Explore this program
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Assessment Offerings */}
      <div className="py-16 bg-gradient-glass relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Assessment Offerings</h2>
            <p className="section-subtitle">
              In-depth diagnostics that provide actionable insights and roadmaps
            </p>
            <div className="fancy-separator mb-0 mx-auto max-w-xs"></div>
          </div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {assessmentData.map((assessment, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600 mr-4">
                    {assessment.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-purple-800">{assessment.title}</h3>
                    <p className="text-gray-700 mb-4">{assessment.description}</p>
                    <Link 
                      to={assessment.link} 
                      className="text-purple-600 font-medium hover:text-purple-800 transition-colors inline-flex items-center"
                    >
                      Request assessment
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Testimonials with enhanced styling */}
      <div className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">Success Stories</h2>
            <p className="section-subtitle text-indigo-200">
              Hear from entrepreneurs and partners who've accelerated their growth with us
            </p>
            <div className="fancy-separator bg-indigo-500 mb-0 mx-auto max-w-xs"></div>
          </div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 inline-block text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-indigo-100 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-400"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.author}</h4>
                    <p className="text-indigo-300">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsServices; 