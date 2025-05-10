import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsFileText, BsPeople, BsBell, BsDownload, BsArrowRight } from 'react-icons/bs';

function GovernmentNGOs() {
  const [activeTab, setActiveTab] = useState('policy');

  const policyBriefs = [
    {
      id: 1,
      title: "Digital Transformation in Public Services",
      category: "Impact Study",
      date: "March 2024",
      summary: "Analysis of digital transformation initiatives in public service delivery across regions",
      impact: "30% improvement in service efficiency",
      downloadUrl: "#",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Sustainable Development Goals Progress",
      category: "Policy Brief",
      date: "February 2024",
      summary: "Comprehensive review of SDG implementation strategies and outcomes",
      impact: "Key recommendations for 5 SDG targets",
      downloadUrl: "#",
      image: "https://images.unsplash.com/photo-1535551951406-a19828b0a76b?fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Social Innovation in NGO Sector",
      category: "Impact Study",
      date: "January 2024",
      summary: "Assessment of innovative approaches in non-profit organizations",
      impact: "Case studies from 15 leading NGOs",
      downloadUrl: "#",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?fit=crop&w=800&q=80"
    }
  ];

  const collaborationTemplates = [
    {
      id: 1,
      title: "Public-Private Partnership Framework",
      type: "Template",
      description: "Standardized framework for establishing PPP initiatives",
      features: [
        "Legal compliance checklist",
        "Risk assessment matrix",
        "KPI tracking system"
      ],
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Grant Program Structure",
      type: "Proposal Template",
      description: "Comprehensive template for government grant programs",
      features: [
        "Eligibility criteria",
        "Evaluation metrics",
        "Reporting guidelines"
      ],
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "NGO Collaboration Agreement",
      type: "Legal Template",
      description: "Standard agreement format for NGO partnerships",
      features: [
        "Roles and responsibilities",
        "Resource allocation",
        "Impact measurement"
      ],
      downloadUrl: "#"
    }
  ];

  const regulatoryUpdates = [
    {
      id: 1,
      title: "New Data Protection Guidelines",
      category: "Compliance",
      date: "March 15, 2024",
      status: "Active",
      summary: "Updated guidelines for handling sensitive public data",
      deadline: "June 1, 2024",
      details: "https://example.com/guidelines"
    },
    {
      id: 2,
      title: "Green Technology Incentives",
      category: "Grants",
      date: "March 10, 2024",
      status: "Upcoming",
      summary: "New incentive scheme for sustainable technology adoption",
      deadline: "Open",
      details: "https://example.com/incentives"
    },
    {
      id: 3,
      title: "NGO Registration Process Update",
      category: "Administrative",
      date: "March 5, 2024",
      status: "Active",
      summary: "Simplified registration process for non-profit organizations",
      deadline: "Immediate",
      details: "https://example.com/registration"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-900 h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
        <div className="text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl font-bold text-white mb-6 tracking-tight"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
          >
            Government & NGOs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Access policy insights, impact studies, and collaboration frameworks designed for public sector and non-profit leaders
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Policy Briefs & Impact Studies Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsFileText className="w-6 h-6 text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Policy Briefs & Impact Studies</h2>
              <p className="text-gray-600 mt-1">In-depth reports on sectoral trends and social outcomes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policyBriefs.map((brief) => (
              <motion.div
                key={brief.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48">
                  <img
                    src={brief.image}
                    alt={brief.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-blue-600">
                      {brief.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{brief.title}</h3>
                    <p className="text-sm text-gray-500">{brief.date}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{brief.summary}</p>
                  <div className="text-blue-600 font-medium mb-6">{brief.impact}</div>
                  <a
                    href={brief.downloadUrl}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <BsDownload className="w-4 h-4" />
                    Download Report
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Collaboration Proposals Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsPeople className="w-6 h-6 text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Collaboration Proposals</h2>
              <p className="text-gray-600 mt-1">Templates and guidance for partnership programs</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationTemplates.map((template) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600">{template.type}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{template.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{template.description}</p>
                <ul className="space-y-3 mb-6">
                  {template.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={template.downloadUrl}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors border border-blue-200"
                >
                  Download Template
                  <BsArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Regulatory Updates Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <BsBell className="w-6 h-6 text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Regulatory Updates</h2>
              <p className="text-gray-600 mt-1">Latest compliance requirements and grant opportunities</p>
            </div>
          </div>

          <div className="space-y-6">
            {regulatoryUpdates.map((update) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{update.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        update.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {update.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>{update.date}</span>
                      <span>•</span>
                      <span>{update.category}</span>
                    </div>
                  </div>
                  <a
                    href={update.details}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    View Details
                    <BsArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{update.summary}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-gray-700">Deadline:</span>
                  <span className="text-gray-600">{update.deadline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default GovernmentNGOs; 