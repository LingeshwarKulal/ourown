import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import { BsNewspaper, BsFileText, BsCalendar, BsTools, BsPlay } from 'react-icons/bs';

const Resources = () => {
  const resourceCategories = [
    {
      title: "Blog Articles",
      icon: <BsNewspaper className="w-8 h-8" />,
      description: "Stay updated with the latest insights, trends, and success stories from our ecosystem.",
      link: "/resources/blog",
      color: "blue",
      features: [
        "Industry insights",
        "Success stories",
        "Expert opinions",
        "Latest trends"
      ]
    },
    {
      title: "Whitepapers",
      icon: <BsFileText className="w-8 h-8" />,
      description: "Access in-depth research and analysis on innovation, entrepreneurship, and technology.",
      link: "/resources/whitepapers",
      color: "purple",
      features: [
        "Market research",
        "Industry reports",
        "Technical papers",
        "Case studies"
      ]
    },
    {
      title: "Events Calendar",
      icon: <BsCalendar className="w-8 h-8" />,
      description: "Discover upcoming events, workshops, and networking opportunities.",
      link: "/resources/events",
      color: "green",
      features: [
        "Workshops",
        "Webinars",
        "Networking events",
        "Training sessions"
      ]
    },
    {
      title: "Tools & Templates",
      icon: <BsTools className="w-8 h-8" />,
      description: "Access practical tools and templates to support your business journey.",
      link: "/resources/tools",
      color: "indigo",
      features: [
        "Business templates",
        "Financial models",
        "Planning tools",
        "Assessment frameworks"
      ]
    },
    {
      title: "Media Library",
      icon: <BsPlay className="w-8 h-8" />,
      description: "Watch expert interviews, tutorials, and success story showcases.",
      link: "/resources/media",
      color: "red",
      features: [
        "Expert interviews",
        "Tutorial series",
        "Success stories",
        "Event recordings"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader 
        title="Resources & Knowledge Hub"
        subtitle="Access a comprehensive library of tools, insights, and learning materials to support your innovation journey."
      />

      {/* Main Content */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Resources Section */}
            <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Resources</h2>
          </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resourceCategories.map((category, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Card Background with Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}-500/10 to-${category.color}-600/10 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]`}></div>
                    
                    {/* Card Content */}
                    <div className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                      {/* Icon */}
                      <div className={`bg-gradient-to-br from-${category.color}-100 to-${category.color}-200 p-4 rounded-xl w-16 h-16 flex items-center justify-center text-${category.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {category.icon}
            </div>
            
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                      
                      {/* Features List */}
                      <ul className="space-y-3 mb-8">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <svg className={`w-5 h-5 text-${category.color}-500 mr-3 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Action Button */}
                      <Link 
                        to={category.link}
                        className={`inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-xl hover:from-${category.color}-600 hover:to-${category.color}-700 transform transition-all duration-300 group shadow-md hover:shadow-lg`}
                      >
                        Explore Resources
                        <svg className="ml-2 -mr-1 w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 text-center max-w-4xl mx-auto"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-xl overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h2 className="text-4xl font-bold text-white mb-6">Need Custom Resources?</h2>
                  <p className="text-xl text-white/90 mb-10">
                    Our team can help you find the right resources and create customized solutions for your specific needs
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 text-lg font-medium text-purple-600 bg-white rounded-xl hover:bg-gray-50 transform transition-all duration-300 group shadow-md hover:shadow-lg"
                  >
                    Get in Touch
                    <svg className="ml-2 -mr-1 w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources; 