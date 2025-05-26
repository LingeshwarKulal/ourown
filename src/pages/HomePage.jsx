import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import ValueProposition from '../components/home/ValueProposition';
import TestimonialsSlider from '../components/shared/TestimonialsSlider';
import ChatWidget from '../components/shared/ChatWidget';
import GetInTouch from '../components/home/GetInTouch';

const QuickLinks = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { title: "Platform", description: "Overview of OUROWN's structure", link: "/platform" },
            { title: "Ecosystem", description: "Dive into AOBs, PCs & TBBIM", link: "/ecosystem" },
            { title: "Programs", description: "Explore incubation, grants & services", link: "/programs" }
          ].map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link 
                to={link.link}
                className="flex items-center px-5 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-indigo-100"
              >
                <span className="font-medium text-indigo-900">{link.title}</span>
                <span className="ml-2 text-xs text-gray-500 hidden md:inline">→ {link.description}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlatformHighlights = () => {
  const highlights = [
    {
      title: "Governance Bodies",
      description: "AOB & AOC: The strategic oversight committees guiding OUROWN's ecosystem development.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
        </svg>
      )
    },
    {
      title: "Startup Showcases",
      description: "PC success stories: Featuring ventures that have thrived through our ecosystem.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      title: "Incubation Model",
      description: "TBBIM explained: Our unique troupe-based approach to supporting ventures at every stage.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      title: "Investor Hub",
      description: "Connect with funding opportunities through pitch events and investor connects.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Resource Library",
      description: "Access our collection of whitepapers, templates, and tools for entrepreneurs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-6">Platform Highlights</h2>
          <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our comprehensive ecosystem provides everything you need to turn your vision into a thriving venture.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-6 text-center"
            >
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-5">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerLogos = () => {
  const partners = [
    { 
      name: "Bluella Ltd.", 
      logo: "https://cdn-icons-png.flaticon.com/512/2593/2593063.png" 
    },
    { 
      name: "BusyAge", 
      logo: "https://cdn-icons-png.flaticon.com/512/3170/3170733.png" 
    },
    { 
      name: "Government Seal", 
      logo: "https://cdn-icons-png.flaticon.com/512/3790/3790176.png" 
    },
    { 
      name: "VC Firm", 
      logo: "https://cdn-icons-png.flaticon.com/512/2830/2830284.png" 
    },
    { 
      name: "University", 
      logo: "https://cdn-icons-png.flaticon.com/512/8074/8074788.png" 
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Trusted By</h2>
          <div className="fancy-separator mb-0 mx-auto max-w-xs"></div>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-16 md:h-20 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  const text = document.createElement('div');
                  text.textContent = partner.name;
                  text.className = 'text-center text-gray-800 font-medium';
                  e.target.parentNode.appendChild(text);
                }}
              />
              <div className="text-center text-xs mt-2 text-gray-600">{partner.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FooterQuickLinks = () => {
  const linkGroups = [
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about-us" },
        { name: "Ecosystem", url: "/ecosystem" },
        { name: "Leadership", url: "/about-us/leadership" }
      ]
    },
    {
      title: "Engage",
      links: [
        { name: "Solutions", url: "/solutions-services" },
        { name: "Get Involved", url: "/contact-get-involved" },
        { name: "Contact", url: "/contact-get-involved" }
      ]
    },
    {
      title: "Discover",
      links: [
        { name: "Resources", url: "/resources" },
        { name: "Blog", url: "/resources/blog" },
        { name: "Events", url: "/resources/events" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Use", url: "/terms-of-service" }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {linkGroups.map((group, index) => (
        <div key={index}>
          <h3 className="text-lg font-bold mb-4 text-white">{group.title}</h3>
          <ul className="space-y-2">
            {group.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link 
                  to={link.url} 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const testimonials = [
  {
    quote: "OUROWN's ecosystem approach has transformed how we engage with startups, leading to three successful proof-of-concept integrations in just six months.",
    author: "Jennifer Roberts",
    position: "VP of Digital Innovation, Fortune 500 Company",
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2U2ZTZmYSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMzYiIHI9IjE0IiBmaWxsPSIjYzdjN2YyIi8+PHBhdGggZD0iTTUwLDM2YzksOSAyMCwxNyAyMCwzM2E0MCw0MCAwIDAgMS00MCwwYzAtMTYgMTEtMjQgMjAtMzN6IiBmaWxsPSIjYzdjN2YyIi8+PHRleHQgeD0iNTAiIHk9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMzMzMiPkplbm5pZmVyPC90ZXh0Pjwvc3ZnPg=="
  },
  {
    quote: "From concept to seed round in under a year. The troupe-based model gave us access to expertise we couldn't have afforded otherwise at our early stage.",
    author: "Amit Sharma",
    position: "Founder & CEO, OUROWN-incubated FinTech Startup",
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2U2ZjRmYSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMzYiIHI9IjE0IiBmaWxsPSIjYzdjN2YyIi8+PHBhdGggZD0iTTUwLDM2YzksOSAyMCwxNyAyMCwzM2E0MCw0MCAwIDAgMS00MCwwYzAtMTYgMTEtMjQgMjAtMzN6IiBmaWxsPSIjYzdjN2YyIi8+PHRleHQgeD0iNTAiIHk9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMzMzMiPkFtaXQ8L3RleHQ+PC9zdmc+"
  },
  {
    quote: "Partnering with OUROWN has allowed us to deploy innovation funds more efficiently and track measurable outcomes across our supported ventures.",
    author: "Dr. Rajiv Patel",
    position: "Director, Government Innovation Program",
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2U2ZmFlZiIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMzYiIHI9IjE0IiBmaWxsPSIjYzdjN2YyIi8+PHBhdGggZD0iTTUwLDM2YzksOSAyMCwxNyAyMCwzM2E0MCw0MCAwIDAgMS00MCwwYzAtMTYgMTEtMjQgMjAtMzN6IiBmaWxsPSIjYzdjN2YyIi8+PHRleHQgeD0iNTAiIHk9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMzMzMiPlJhaml2PC90ZXh0Pjwvc3ZnPg=="
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Quick Links */}
      <QuickLinks />
      
      {/* Value Proposition */}
      <ValueProposition />
      
      {/* Platform Highlights */}
      <PlatformHighlights />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-6 text-center">What Our Partners Say</h2>
            <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
            <TestimonialsSlider 
              testimonials={testimonials} 
              style="gradient" 
              autoplay={true} 
              autoplaySpeed={5000} 
              showHeading={false}
            />
          </div>
        </div>
      </section>
      
      {/* Get in Touch Section */}
      <GetInTouch />
      
      {/* Partner Logos */}
      <PartnerLogos />
      
      {/* AI Chatbot Widget */}
      <ChatWidget />
    </div>
  );
};

export default HomePage; 