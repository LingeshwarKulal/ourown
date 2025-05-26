import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import CardGrid from '../components/shared/CardGrid';
import TestimonialsSlider from '../components/shared/TestimonialsSlider';

function AboutUs() {
  // Values data for CardGrid
  const valuesData = [
    {
      title: "Collaboration",
      description: "Leveraging cross-functional troupes and deep stakeholder networks to solve complex challenges.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    },
    {
      title: "Integrity",
      description: "Upholding the highest standards of transparency, accountability, and ethical governance.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      title: "Innovation",
      description: "Continuously iterating our model and services to anticipate emerging industry trends.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: "Inclusivity",
      description: "Designing programs and policies that welcome entrepreneurs from all backgrounds and geographies.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    }
  ];

  // Leadership team data
  const leadershipData = [
    {
      title: "Vinayak Yambadwar",
      description: "Co-Founder & Managing Director. With over 15 years of entrepreneurial leadership, Vinayak has architected multi-vertical incubation frameworks, forged strategic alliances across industry and government, and continues to guide OUROWN's long-term vision.",
      icon: <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
    },
    {
      title: "[Name]",
      description: "Chief Operating Officer. An operations expert who codifies governance SOPs, orchestrates cross-functional troupes, and drives continuous performance optimization.",
      icon: <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
    },
    {
      title: "[Name]",
      description: "Head of Ecosystem Development. Specializing in stakeholder engagement, program design, and mentorship networks, [Name] ensures every cohort enjoys seamless access to partners, mentors, and resources.",
      icon: <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
    }
  ];

  // Partners data
  const partnerData = [
    {
      title: "BusyAge Consultancy Services",
      description: "Foundational mentorship and incubation model development.",
      link: "/ecosystem/associate-bodies"
    },
    {
      title: "Bluella Ltd.",
      description: "Secure hosting, digital innovation support, and technical architecture.",
      link: "/ecosystem/associate-bodies"
    },
    {
      title: "Government Agencies",
      description: "Policy guidance, grant facilitation, and regulatory alignment.",
      link: "/ecosystem/associate-bodies"
    },
    {
      title: "Academic Institutions",
      description: "Research partnerships and talent development.",
      link: "/ecosystem/associate-bodies"
    },
    {
      title: "Investment Firms",
      description: "Growth capital, market insights, and strategic counsel.",
      link: "/ecosystem/associate-bodies"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "OUROWN's troup-based model accelerated our market entry by at least 6 months. The cross-functional expertise in their ecosystem saved us from costly pivots and helped us secure our first enterprise clients.",
      author: "Rohit Sharma",
      position: "CEO, Citadel Motors",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The mentorship we received through OUROWN transformed not just our product but our entire go-to-market strategy. Their hands-on approach to incubation is truly unique in the Indian startup ecosystem.",
      author: "Priya Mehta",
      position: "Founder, Primaveras IT Solutions",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "What sets OUROWN apart is their ability to bring together the right stakeholders at the right time. They don't just incubate startups - they build collaborative ecosystems where innovation can thrive.",
      author: "Ajay Patel",
      position: "Director, KSR Ventures",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    }
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <PageHeader 
        title="About OUROWN: Cultivating Collaborative Innovation"
        subtitle="Learn how our journey, fueled by strategic partnerships and custom incubation troupes, unlocks sustainable growth for every entrepreneur."
      />

      {/* Our Story */}
      <div className="py-16 bg-white" id="our-story">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Story</h2>
            <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
            
            <p className="text-lg mb-4 text-gray-700">
              OUROWN began in FY 2015-16 as a provisional initiative under the mentorship of BusyAge Consultancy Services. What started as a pilot for a new incubation approach quickly evolved into a formal ecosystem dedicated to inclusive entrepreneurship.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              By February 2019, OUROWN Entrepreneurs Solution India Ltd was incorporated as a public limited company—anchoring our commitment to transparency, governance, and impact. Over the next eighteen months, we guided our first cohorts through hands-on incubation: from Citadel Motors' market-entry acceleration to Primaveras IT Solutions' MVP launches. In July 2020, the formation of Bluella Ltd. marked our expansion into IoT and digital-twin innovations. Each milestone reflects our data-driven refinement of the Troup-Based Business Incubation Model, ensuring tailored support in strategy, technology, finance, and marketing.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission, Vision & Values */}
      <div className="py-16 bg-gray-50" id="mission">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Mission, Vision & Values</h2>
            <div className="fancy-separator mb-0 mx-auto max-w-xs"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div 
                className="p-8 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gradient">Mission</h3>
                <p className="text-lg text-gray-700">
                  "To democratize access to capital, expertise, and operational excellence—empowering visionaries to build resilient, high-impact ventures."
                </p>
              </motion.div>
              
              <motion.div 
                className="p-8 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gradient">Vision</h3>
                <p className="text-lg text-gray-700">
                  "To be India's most collaborative incubation network, where startups, corporates, governments, and investors co-create solutions that drive economic and social progress."
                </p>
              </motion.div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-center">Core Values</h3>
            <CardGrid 
              items={valuesData} 
              columns={4}
              cardType="minimal" 
            />
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16 bg-white" id="leadership">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Leadership Team</h2>
            <div className="fancy-separator mb-0 mx-auto max-w-xs"></div>
          </div>
          
          <CardGrid 
            items={leadershipData} 
            columns={3}
            cardType="feature" 
          />
        </div>
      </div>

      {/* Testimonials */}
      <TestimonialsSlider 
        testimonials={testimonials}
        style="gradient"
      />

      {/* Our Partners */}
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Partners</h2>
            <p className="section-subtitle">
              We collaborate with leading corporations, government agencies, academic institutions, and investment firms to amplify our impact:
            </p>
            <div className="fancy-separator mb-0 mx-auto max-w-xs"></div>
          </div>
          
          <CardGrid 
            items={partnerData} 
            columns={3}
            cardType="gradient" 
          />
        </div>
      </div>
      
      {/* Download Brochure */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center glassmorphism p-10 rounded-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">Download Our Brochure</h2>
              <p className="text-lg mb-6">
                Get the complete OUROWN overview—program details, impact metrics, and partnership models—in one concise PDF.
              </p>
              <button className="btn-primary flex items-center mx-auto btn-hover-effect">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download the OUROWN Overview Brochure
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to join the OUROWN movement?</h2>
            <Link to="/contact-get-involved" className="btn-primary inline-block">
              Get Involved
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs; 