import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsBuilding, BsLightbulb, BsStarFill } from 'react-icons/bs';

const IndustryPartners = () => {
  const benefits = [
    {
      title: "Access to Innovation",
      description: "Early access to emerging technologies and innovative solutions.",
      features: [
        "Priority access to startup demos",
        "Innovation scouting reports",
        "Technology trend insights",
        "Proof-of-concept opportunities"
      ]
    },
    {
      title: "Network Expansion",
      description: "Connect with key players in the innovation ecosystem.",
      features: [
        "Industry networking events",
        "Partner matchmaking",
        "Joint venture opportunities",
        "Cross-sector collaborations"
      ]
    },
    {
      title: "Brand Visibility",
      description: "Enhanced visibility in the innovation ecosystem.",
      features: [
        "Featured partner spotlights",
        "Co-branded content",
        "Event speaking opportunities",
        "Success story features"
      ]
    },
    {
      title: "Resource Access",
      description: "Exclusive access to resources and expertise.",
      features: [
        "Research facilities",
        "Technical expertise",
        "Market intelligence",
        "Talent pipeline"
      ]
    }
  ];

  const projects = [
    {
      title: "Smart Manufacturing Initiative",
      partner: "TechCorp Industries",
      description: "Developing IoT solutions for predictive maintenance in manufacturing facilities.",
      status: "In Progress",
      impact: "30% reduction in downtime",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Sustainable Supply Chain",
      partner: "GreenLogistics Co",
      description: "Implementing blockchain for end-to-end supply chain transparency.",
      status: "Completed",
      impact: "40% improved traceability",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
    },
    {
      title: "FinTech Innovation Lab",
      partner: "Global Finance Group",
      description: "Creating AI-powered risk assessment tools for SME lending.",
      status: "In Progress",
      impact: "50% faster loan processing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    }
  ];

  const testimonials = [
    {
      quote: "The partnership has been transformative for our innovation strategy. We've launched three successful pilots and expanded our digital capabilities significantly.",
      author: "Jennifer Lee",
      position: "Chief Innovation Officer",
      company: "TechCorp Industries",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      quote: "Working with the ecosystem has accelerated our R&D efforts by years. The access to cutting-edge startups and research has been invaluable.",
      author: "David Martinez",
      position: "Head of Strategy",
      company: "GreenLogistics Co",
      image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      quote: "The co-innovation projects have delivered real business value. We've seen improved efficiency and created new revenue streams.",
      author: "Sarah Thompson",
      position: "VP of Digital Transformation",
      company: "Global Finance Group",
      image: "https://randomuser.me/api/portraits/women/6.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-900 h-[400px] flex items-center justify-center mt-16">
        <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
        <div className="text-center z-10 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white mb-6"
          >
            Industry Partners
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Join our ecosystem of industry leaders driving innovation and transformation
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        {/* Partnership Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <BsBuilding className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our network of industry leaders and gain exclusive benefits that drive innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Co-innovation Projects Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <BsLightbulb className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Co-innovation Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our ongoing and completed innovation projects with industry partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-600 font-medium">{project.partner}</span>
                    <span className="text-gray-500">{project.impact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partner Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <BsStarFill className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our partners about their experience and success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-purple-600">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic">"{testimonial.quote}"</blockquote>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Become a Partner</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our ecosystem of industry leaders and drive innovation together. Let's explore partnership opportunities that align with your strategic goals.
          </p>
          <Link
            to="/contact-get-involved/partner-apply"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Apply for Partnership
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustryPartners; 