import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Home page sections
function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxValue = scrollY * 0.2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white pt-32 pb-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-blue-500 blur-[80px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-600 blur-[100px]"></div>
          <div className="absolute top-[40%] right-[30%] w-72 h-72 rounded-full bg-indigo-500 blur-[90px]"></div>
        </div>
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-[15%] left-[15%] w-24 h-24 rounded-lg border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transform: `translateY(${parallaxValue * -0.3}px)` }}
        />
        
        <motion.div 
          className="absolute bottom-[20%] left-[25%] w-16 h-16 rounded-full border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{ transform: `translateY(${parallaxValue * 0.2}px)` }}
        />
        
        <motion.div 
          className="absolute top-[30%] right-[15%] w-32 h-32 rounded-lg border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{ transform: `translateY(${parallaxValue * -0.4}px)` }}
        />
        
        <motion.div 
          className="absolute bottom-[15%] right-[20%] w-20 h-20 rounded-full border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{ transform: `translateY(${parallaxValue * 0.3}px)` }}
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-indigo-200">
              Connecting Ambition <br className="hidden md:block"/> to Opportunity
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-xl md:text-2xl font-light mb-6 text-white/90">
              OUROWN's ecosystem empowers entrepreneurs, corporates, and governments 
              to innovate, collaborate, and grow.
            </p>
            <p className="text-lg mb-10 text-white/80 max-w-3xl mx-auto">
              Join a unified platform where strategic guidance, capital access, and operational expertise 
              converge to transform bold ideas into impactful ventures.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link 
              to="/contact-get-involved" 
              className="px-8 py-4 rounded-xl bg-white text-indigo-900 font-medium shadow-xl transition-all duration-300 hover:translate-y-[-2px] hover:shadow-white/30 text-center"
            >
              Get Started
            </Link>
            <button className="px-8 py-4 rounded-xl border-2 border-white/30 text-white backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Watch Overview</span>
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-[-60px] left-0 right-0 flex justify-center"
          >
            <div className="flex items-center flex-col">
              <span className="text-white/60 text-sm mb-2">Discover More</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="bg-white py-6 shadow-soft sticky top-20 z-40">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <a href="#platform" className="text-primary-800 hover:text-primary-600 font-medium transition-colors duration-300 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Platform</span>
          </a>
          <a href="#ecosystem" className="text-primary-800 hover:text-primary-600 font-medium transition-colors duration-300 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Ecosystem</span>
          </a>
          <a href="#programs" className="text-primary-800 hover:text-primary-600 font-medium transition-colors duration-300 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span>Programs</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your API
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      role: '',
      interest: '',
      message: ''
    });
    alert('Thank you for your interest! We will be in touch soon.');
  };

  return (
    <div className="section bg-gray-50" id="platform">
      <div className="container">
        <div className="max-w-2xl mx-auto card p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Ready to Explore OUROWN?</h2>
          <p className="text-gray-600 text-center mb-8">Unlock exclusive insights, invitations, and personalized support. Share your details below.</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
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
              <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="organization" className="block text-gray-700 mb-2 font-medium">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-gray-700 mb-2 font-medium">Role</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>
            <div>
              <label htmlFor="interest" className="block text-gray-700 mb-2 font-medium">Area of Interest</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Select an option</option>
                <option value="startup">Startup Incubation</option>
                <option value="corporate">Corporate Partnership</option>
                <option value="government">Government Programs</option>
                <option value="investor">Investment Opportunities</option>
                <option value="mentor">Mentorship</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message (optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="input h-32 resize-none"
              />
            </div>
            <button 
              type="submit" 
              className="btn-primary w-full py-4 mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ValuePropositionBlocks() {
  return (
    <div className="section bg-white" id="ecosystem">
      <div className="container">
        <h2 className="section-title">Why Choose OUROWN</h2>
        <div className="fancy-separator mb-12 mx-auto max-w-xs"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card p-8 card-lift">
            <div className="text-primary-600 mb-6">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Structured Support</h3>
            <p className="text-gray-600">Custom troupes delivering expertise in strategy, technology, finance, and marketing to accelerate your growth journey.</p>
          </div>
          
          {/* Card 2 */}
          <div className="card p-8 card-lift">
            <div className="text-primary-600 mb-6">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Unified Network</h3>
            <p className="text-gray-600">Seamless access to industry partners, investors, and mentors through our carefully curated ecosystem of innovation.</p>
          </div>
          
          {/* Card 3 */}
          <div className="card p-8 card-lift">
            <div className="text-primary-600 mb-6">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Scalable Growth</h3>
            <p className="text-gray-600">Stage-gate milestones ensuring clarity from ideation to scale, with measurable outcomes at every step of your venture's journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformHighlights() {
  return (
    <div className="section bg-gray-50" id="programs">
      <div className="container">
        <h2 className="section-title">Platform Highlights</h2>
        <div className="fancy-separator mb-12 mx-auto max-w-xs"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card overflow-hidden group">
            <div className="bg-primary-600 h-2 group-hover:h-3 transition-all duration-300"></div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary-700 transition-colors duration-300">Governance Bodies</h3>
              <p className="text-gray-600 mb-6">Structured oversight ensuring transparent, accountable incubation frameworks for sustainable growth.</p>
              <Link to="/ecosystem/associate-bodies" className="text-primary-600 hover:text-primary-800 inline-flex items-center font-medium transition-colors duration-300 group">
                Learn more
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="card overflow-hidden group">
            <div className="bg-secondary-600 h-2 group-hover:h-3 transition-all duration-300"></div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 group-hover:text-secondary-700 transition-colors duration-300">Startup Showcases</h3>
              <p className="text-gray-600 mb-6">Real-world examples of ventures that scaled through our ecosystem with innovative approaches.</p>
              <Link to="/ecosystem/participating-companies" className="text-secondary-600 hover:text-secondary-800 inline-flex items-center font-medium transition-colors duration-300 group">
                Learn more
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="card overflow-hidden group">
            <div className="bg-accent-600 h-2 group-hover:h-3 transition-all duration-300"></div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 group-hover:text-accent-700 transition-colors duration-300">Incubation Model</h3>
              <p className="text-gray-600 mb-6">Our unique troup-based model combines diverse expertise to catalyze transformation and growth.</p>
              <Link to="/ecosystem/troup-based-incubation-model" className="text-accent-600 hover:text-accent-800 inline-flex items-center font-medium transition-colors duration-300 group">
                Learn more
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsCarousel() {
  const testimonials = [
    {
      quote: "OUROWN's comprehensive approach helped us scale from local operations to international markets in just 18 months.",
      author: "Rajiv Mehta",
      position: "Founder & CEO, TechSpark Innovations",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The structured guidance and capital access through OUROWN transformed our business model and accelerated our growth trajectory.",
      author: "Priya Sharma",
      position: "Co-founder, GreenLeaf Solutions",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Partnering with OUROWN gave us direct access to enterprise clients we couldn't have reached otherwise.",
      author: "Amit Patel",
      position: "CTO, DataFlow Analytics",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    }
  ];

  return (
    <div className="section bg-gradient-primary text-white relative overflow-hidden">
      <div className="hero-pattern absolute inset-0 opacity-20"></div>
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Partners Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="mb-6">
                <svg className="w-10 h-10 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                </svg>
              </div>
              <p className="text-lg mb-6 font-light italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 border-2 border-white/30" />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm opacity-80">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PartnerLogos() {
  return (
    <div className="py-16 bg-white">
      <div className="container">
        <p className="text-center text-gray-500 uppercase tracking-wider text-sm font-medium mb-10">Trusted By Leading Organizations</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 1</div>
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 2</div>
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 3</div>
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 4</div>
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 5</div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="pt-16"> {/* Add padding-top to account for fixed header */}
      <HeroSection />
      <QuickLinks />
      <ValuePropositionBlocks />
      <PlatformHighlights />
      <TestimonialsCarousel />
      <LeadCaptureForm />
      <PartnerLogos />
    </div>
  );
}

export default Home; 