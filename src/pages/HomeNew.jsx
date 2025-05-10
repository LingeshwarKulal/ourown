import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomeNew() {
  // For animation on scroll
  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const elements = {
        section1: document.getElementById('section1'),
        section2: document.getElementById('section2'),
        section3: document.getElementById('section3'),
        section4: document.getElementById('section4'),
      };

      for (const [key, element] of Object.entries(elements)) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top <= window.innerHeight * 0.75;
          setIsVisible(prev => ({ ...prev, [key]: isInViewport }));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-primary-800 to-accent-800 relative overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 pattern-dots pattern-blue-500 pattern-bg-transparent pattern-size-4 pattern-opacity-10"></div>
        
        {/* Animated shapes */}
        <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-primary-400/20 to-primary-600/20 blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-accent-400/20 to-accent-600/20 blur-xl animate-float"></div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-white/10 text-white inline-block px-3 py-1 rounded-full text-sm font-medium mb-5 backdrop-blur-sm border border-white/10">
                Entrepreneurship Ecosystem Platform
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Connecting <span className="text-secondary-300">Ambition</span> to <span className="text-secondary-300">Opportunity</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-3xl mx-auto">
                OUROWN empowers entrepreneurs, corporates, and governments to innovate, collaborate, and grow through our integrated platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="/contact-get-involved" className="btn-primary rounded-full px-8 py-4 text-lg shadow-lg shadow-primary-900/30 hover:-translate-y-1 transition-all duration-300">
                  Get Started
                </Link>
                <button className="flex items-center gap-3 text-white bg-white/10 hover:bg-white/20 rounded-full px-6 py-4 backdrop-blur-sm transition-all duration-300 border border-white/20">
                  <span className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
                    <svg className="w-5 h-5 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Watch Overview</span>
                </button>
              </div>
            </div>
            
            <div className="relative mx-auto max-w-3xl">
              <div className="p-2 md:p-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Entrepreneurship Platform" 
                  className="w-full rounded-xl shadow-inner"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Success Rate</div>
                    <div className="text-sm font-semibold">92% Growth</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Network</div>
                    <div className="text-sm font-semibold">2,500+ Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="absolute bottom-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 54">
            <path fill="#ffffff" fillOpacity="1" d="M0,0L40,5.3C80,11,160,21,240,26.7C320,32,400,32,480,26.7C560,21,640,11,720,10.7C800,11,880,21,960,26.7C1040,32,1120,32,1200,26.7C1280,21,1360,11,1400,5.3L1440,0L1440,54L1400,54C1360,54,1280,54,1200,54C1120,54,1040,54,960,54C880,54,800,54,720,54C640,54,560,54,480,54C400,54,320,54,240,54C160,54,80,54,40,54L0,54Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Trusted By Section */}
      <section className="py-8 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 font-medium text-sm uppercase tracking-wider mb-8">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {['Google', 'Microsoft', 'Amazon', 'IBM', 'Oracle'].map((logo, index) => (
              <div key={index} className="h-8 flex items-center justify-center">
                <div className="text-gray-400 font-semibold text-xl">{logo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="section1" className={`py-20 bg-gray-50 ${isVisible.section1 ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes OUROWN Different</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">Our platform creates a powerful ecosystem that connects all the key elements needed for entrepreneurial success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Structured Support',
                description: 'Custom troupes delivering expertise in strategy, technology, finance, and marketing to accelerate your growth.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                title: 'Capital Access',
                description: 'Connect with the right investors and financial resources tailored to your specific stage and needs.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Stage-Gate Framework',
                description: 'Clear milestones and progression paths ensuring efficient resource allocation and goal alignment.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft p-8 transition-all duration-300 hover:shadow-medium border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="section2" className={`py-20 bg-white ${isVisible.section2 ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How OUROWN Works</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">Our platform simplifies the entrepreneurial journey through a proven process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="max-w-md mx-auto">
                {[
                  {
                    title: 'Assessment & Onboarding',
                    description: 'We evaluate your venture and create a custom strategic plan aligned with your goals.',
                    number: '01'
                  },
                  {
                    title: 'Troup Assembly',
                    description: 'We match you with the right expertise and resources tailored to your specific needs.',
                    number: '02'
                  },
                  {
                    title: 'Milestone Achievement',
                    description: 'Through structured guidance, you systematically hit key growth objectives.',
                    number: '03'
                  },
                  {
                    title: 'Scale & Connection',
                    description: 'Access our vast network of partners, customers, and investors as you grow.',
                    number: '04'
                  }
                ].map((step, index) => (
                  <div key={index} className="mb-8 last:mb-0 flex">
                    <div className="mr-6">
                      <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center font-bold text-lg border-2 border-primary-100">
                        {step.number}
                      </div>
                      {index < 3 && <div className="h-12 w-px bg-primary-100 mx-auto"></div>}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-xl opacity-70"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Team Collaboration" 
                  className="rounded-2xl shadow-xl"
                />
                
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Average Time to Market</div>
                      <div className="text-lg font-bold">30% Faster</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section id="section3" className={`py-20 bg-gray-900 text-white ${isVisible.section3 ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-secondary-500 to-accent-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300">Learn how entrepreneurs transformed their vision into reality with OUROWN.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'TechSpark Innovations',
                quote: "OUROWN's approach helped us scale from local to international markets in just 18 months.",
                founder: "Rajiv Mehta, Founder",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
              },
              {
                name: 'GreenLeaf Solutions',
                quote: "Their structured guidance transformed our business model and accelerated our growth.",
                founder: "Priya Sharma, Co-founder",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                name: 'DataFlow Analytics',
                quote: "Partnering with OUROWN gave us direct access to enterprise clients we couldn't have reached.",
                founder: "Amit Patel, CTO",
                image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-secondary-400 mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-lg mb-5 italic text-gray-300">{story.quote}</p>
                  <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                  <p className="text-gray-400">{story.founder}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/success-stories" className="inline-flex items-center gap-2 text-secondary-400 hover:text-secondary-300 font-medium">
              View All Success Stories
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="section4" className={`py-20 bg-white ${isVisible.section4 ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="p-10 md:p-16 relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Vision into Reality?</h2>
                  <p className="text-white/80 text-lg mb-8">Join OUROWN today and get the resources, expertise, and connections you need to succeed.</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link to="/contact-get-involved" className="btn bg-white text-primary-700 hover:bg-gray-100 rounded-full px-8 py-3 text-lg shadow-lg shadow-primary-900/30 hover:-translate-y-1 transition-all duration-300">
                      Get Started
                    </Link>
                    <Link to="/ecosystem" className="text-white hover:text-white/80 inline-flex items-center gap-2 font-medium">
                      Learn more about our ecosystem
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="hidden lg:block w-64 h-64 bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="h-full w-full bg-white/90 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-5">
                        <div className="p-3 bg-primary-50 rounded-lg">
                          <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-500">Last 12 months</span>
                      </div>
                      <div className="flex items-end gap-2 mb-2">
                        <span className="text-3xl font-bold">92%</span>
                        <span className="text-green-500 flex items-center text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                          14.2%
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">Average success rate of startups in our ecosystem</p>
                    </div>
                    
                    <div className="h-20 overflow-hidden">
                      <div className="flex items-end h-full gap-1">
                        {[40, 35, 50, 32, 43, 48, 60, 55, 65, 75, 70, 92].map((height, i) => (
                          <div 
                            key={i} 
                            className="w-full bg-primary-500/80 rounded-sm" 
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest entrepreneurship insights and opportunities.</p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 input focus:ring-primary-500 focus:border-primary-500"
                  required
                />
                <button 
                  type="submit" 
                  className="btn-primary rounded-lg whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-gray-500 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeNew; 