import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsBook, BsLightbulb, BsCalendar4, BsDownload, BsArrowRight, BsSearch } from 'react-icons/bs';

function ConsultantsAcademics() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const researchPapers = [
    {
      id: 1,
      title: "Innovation in Incubation Models",
      author: "Dr. Sarah Chen",
      institution: "Stanford University",
      category: "Technology",
      publishDate: "March 2024",
      citations: 45,
      abstract: "A comprehensive analysis of modern incubation approaches and their impact on startup success rates.",
      downloadUrl: "#",
      keywords: ["incubation", "innovation", "startup success"]
    },
    {
      id: 2,
      title: "Digital Transformation in Business Incubators",
      author: "Prof. Michael Roberts",
      institution: "MIT",
      category: "Digital",
      publishDate: "February 2024",
      citations: 32,
      abstract: "Examining the role of digital technologies in transforming business incubation practices.",
      downloadUrl: "#",
      keywords: ["digital transformation", "technology adoption"]
    },
    {
      id: 3,
      title: "Sustainable Development in Startup Ecosystems",
      author: "Dr. Emma Thompson",
      institution: "Oxford University",
      category: "Sustainability",
      publishDate: "January 2024",
      citations: 28,
      abstract: "Research on incorporating sustainability principles in startup development and scaling.",
      downloadUrl: "#",
      keywords: ["sustainability", "ecosystem development"]
    }
  ];

  const advisoryServices = [
    {
      id: 1,
      title: "Research Collaboration",
      description: "Partner with our experts for joint research projects and academic publications",
      expertise: [
        "Data Analysis & Interpretation",
        "Research Methodology",
        "Publication Support"
      ],
      duration: "3-6 months",
      contactPerson: "Dr. James Wilson"
    },
    {
      id: 2,
      title: "Academic Consulting",
      description: "Expert consultation for academic institutions and research organizations",
      expertise: [
        "Curriculum Development",
        "Program Assessment",
        "Academic-Industry Integration"
      ],
      duration: "Variable",
      contactPerson: "Prof. Lisa Anderson"
    },
    {
      id: 3,
      title: "Industry Research",
      description: "Specialized research services for industry-specific challenges",
      expertise: [
        "Market Analysis",
        "Technology Assessment",
        "Innovation Strategy"
      ],
      duration: "2-4 months",
      contactPerson: "Dr. Mark Davis"
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "Future of Business Incubation",
      speaker: "Dr. Rachel Adams",
      role: "Director of Innovation Studies",
      date: "April 15, 2024",
      time: "2:00 PM EST",
      topics: [
        "Emerging incubation models",
        "AI in startup development",
        "Global collaboration trends"
      ],
      registrationUrl: "#"
    },
    {
      id: 2,
      title: "Research Methods in Startup Analysis",
      speaker: "Prof. David Miller",
      role: "Research Lead, Startup Analytics",
      date: "April 22, 2024",
      time: "3:00 PM EST",
      topics: [
        "Quantitative analysis methods",
        "Data collection strategies",
        "Impact measurement"
      ],
      registrationUrl: "#"
    },
    {
      id: 3,
      title: "Academic-Industry Partnership Models",
      speaker: "Dr. Emily Watson",
      role: "Head of Academic Relations",
      date: "April 29, 2024",
      time: "1:00 PM EST",
      topics: [
        "Partnership frameworks",
        "Success metrics",
        "Case studies"
      ],
      registrationUrl: "#"
    }
  ];

  const categories = ['All', 'Technology', 'Digital', 'Sustainability', 'Innovation'];

  const filteredPapers = researchPapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-900 h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
        <div className="text-center z-10 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white mb-6"
          >
            Consultants & Academics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Access research resources, advisory opportunities, and thought leadership platforms
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Research Papers Repository Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsBook className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Research Papers Repository</h2>
              <p className="text-gray-600 mt-1">Access peer-reviewed studies and academic publications</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <BsSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPapers.map((paper) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6"
              >
                <div className="mb-4">
                  <span className="text-sm font-medium text-purple-600">{paper.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{paper.title}</h3>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">{paper.author}</p>
                  <p className="text-sm text-gray-500">{paper.institution}</p>
                </div>
                <p className="text-gray-600 mb-4">{paper.abstract}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>{paper.publishDate}</span>
                  <span>{paper.citations} citations</span>
                </div>
                <a
                  href={paper.downloadUrl}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <BsDownload className="w-4 h-4" />
                  Download Paper
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Advisory Services Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsLightbulb className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Advisory Services Inquiry</h2>
              <p className="text-gray-600 mt-1">Engage with our experts for research and consulting</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisoryServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Areas of Expertise:</h4>
                  <ul className="space-y-2">
                    {service.expertise.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-gray-600 mb-6">
                  <p><span className="font-medium">Duration:</span> {service.duration}</p>
                  <p><span className="font-medium">Contact:</span> {service.contactPerson}</p>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors border border-purple-200">
                  Submit Inquiry
                  <BsArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Thought Leadership Webinars Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <BsCalendar4 className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Thought Leadership Webinars</h2>
              <p className="text-gray-600 mt-1">Join live discussions with global experts and thought leaders</p>
            </div>
          </div>

          <div className="space-y-6">
            {webinars.map((webinar) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                    <div className="mb-4">
                      <p className="text-purple-600 font-medium">{webinar.speaker}</p>
                      <p className="text-sm text-gray-500">{webinar.role}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{webinar.date}</span>
                      <span>•</span>
                      <span>{webinar.time}</span>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <a
                      href={webinar.registrationUrl}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Register Now
                      <BsArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Topics Covered:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {webinar.topics.map((topic, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ConsultantsAcademics; 