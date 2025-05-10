import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import { BsBuilding, BsPeople, BsBank, BsGear, BsBook } from 'react-icons/bs';

const AudienceHub = () => {
  const audienceCategories = [
    {
      title: "Industry & Corporate",
      icon: <BsBuilding className="w-8 h-8" />,
      description: "Connect with industry leaders and corporate innovators seeking partnerships and solutions.",
      link: "/audience-hub/industry-corporate",
      color: "blue",
      features: [
        "Innovation partnerships",
        "Corporate venturing",
        "Digital transformation",
        "R&D collaboration"
      ]
    },
    {
      title: "Investors & VCs",
      icon: <BsBank className="w-8 h-8" />,
      description: "Discover investment opportunities and connect with promising startups and scale-ups.",
      link: "/audience-hub/investors-vcs",
      color: "green",
      features: [
        "Investment opportunities",
        "Portfolio companies",
        "Due diligence support",
        "Deal flow access"
      ]
    },
    {
      title: "Entrepreneurs & Startups",
      icon: <BsPeople className="w-8 h-8" />,
      description: "Access resources, mentorship, and support to grow your startup venture.",
      link: "/audience-hub/entrepreneurs-startups",
      color: "purple",
      features: [
        "Incubation programs",
        "Funding access",
        "Technical support",
        "Market entry"
      ]
    },
    {
      title: "Government & NGOs",
      icon: <BsGear className="w-8 h-8" />,
      description: "Partner with us to drive economic development and social innovation initiatives.",
      link: "/audience-hub/government-ngos",
      color: "yellow",
      features: [
        "Policy innovation",
        "Economic development",
        "Social impact",
        "Public-private partnerships"
      ]
    },
    {
      title: "Consultants & Academics",
      icon: <BsBook className="w-8 h-8" />,
      description: "Collaborate on research, innovation consulting, and knowledge exchange.",
      link: "/audience-hub/consultants-academics",
      color: "red",
      features: [
        "Research collaboration",
        "Innovation consulting",
        "Knowledge exchange",
        "Academic partnerships"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader 
        title="Audience Hub: Tailored Solutions for Every Stakeholder"
        subtitle="Discover resources and opportunities customized for your role in the innovation ecosystem."
      />

      {/* Main Content */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {audienceCategories.map((category, index) => (
          <motion.div 
                  key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}-500/10 to-${category.color}-600/10 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]`}></div>
                  <div className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className={`bg-gradient-to-br from-${category.color}-100 to-${category.color}-200 p-4 rounded-xl w-16 h-16 flex items-center justify-center text-${category.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
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
                      <Link 
                      to={category.link}
                      className={`inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-xl hover:from-${category.color}-600 hover:to-${category.color}-700 transform transition-all duration-300 group`}
                    >
                      Learn More
                      <svg className="ml-2 -mr-1 w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                </div>
              </motion.div>
            ))}
          </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 text-center max-w-4xl mx-auto"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-xl">
                <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
                  <p className="text-xl text-white/90 mb-10">
                    Connect with our team to explore how we can support your innovation journey
              </p>
              <Link 
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 text-lg font-medium text-purple-600 bg-white rounded-xl hover:bg-gray-50 transform transition-all duration-300 group shadow-md hover:shadow-lg"
                  >
                    Contact Us
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

export default AudienceHub; 