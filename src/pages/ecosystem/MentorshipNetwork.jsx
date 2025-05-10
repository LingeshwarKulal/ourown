import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsSearch, BsPeople, BsStarFill, BsPersonCheck } from 'react-icons/bs';

const MentorshipNetwork = () => {
  const mentorshipFeatures = [
    {
      title: "Mentor Directory & Expertise Tags",
      description: "Access our curated network of industry experts and seasoned entrepreneurs.",
      features: [
        "Searchable mentor profiles",
        "Industry-specific expertise tags",
        "Experience level indicators",
        "Availability calendar",
        "Direct messaging system",
        "Skill matching algorithm"
      ],
      icon: <BsSearch className="w-6 h-6" />
    },
    {
      title: "Mentorship Formats",
      description: "Flexible mentoring options to suit your learning style and schedule.",
      features: [
        "One-on-one sessions",
        "Group workshops",
        "Virtual office hours",
        "Monthly masterminds",
        "Industry roundtables",
        "Pitch practice sessions"
      ],
      icon: <BsPeople className="w-6 h-6" />
    },
    {
      title: "Feedback & Ratings System",
      description: "Transparent feedback system ensuring quality mentorship experiences.",
      features: [
        "Session ratings",
        "Detailed reviews",
        "Progress tracking",
        "Success stories",
        "Impact metrics",
        "Mentor recognition"
      ],
      icon: <BsStarFill className="w-6 h-6" />
    }
  ];

  const featuredMentors = [
    {
      name: "Sarah Chen",
      role: "Tech Innovation Lead",
      expertise: ["AI/ML", "Product Strategy", "Scaling"],
      rating: 4.9,
      reviews: 124,
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Serial Entrepreneur",
      expertise: ["Startup Growth", "Fundraising", "Market Entry"],
      rating: 4.8,
      reviews: 98,
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Dr. Lisa Wang",
      role: "Innovation Consultant",
      expertise: ["R&D", "Patents", "Technology Transfer"],
      rating: 4.9,
      reviews: 156,
      image: "https://randomuser.me/api/portraits/women/3.jpg"
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
            Mentorship Network
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Connect with industry experts and experienced entrepreneurs who can guide you on your journey to success.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mentorshipFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500"
            >
              <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-purple-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Featured Mentors Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img src={mentor.image} alt={mentor.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <BsStarFill className="text-yellow-400 w-5 h-5 mr-1" />
                    <span className="text-gray-900 font-medium">{mentor.rating}</span>
                    <span className="text-gray-500 ml-2">({mentor.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our mentorship network and get personalized guidance from industry experts who've been where you want to go.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact-get-involved"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Find a Mentor
              <BsPersonCheck className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact-get-involved"
              className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-base font-medium rounded-md text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Become a Mentor
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentorshipNetwork; 