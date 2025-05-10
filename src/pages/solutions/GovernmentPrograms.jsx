import { motion } from 'framer-motion';
import { BsShield, BsFileEarmarkText, BsClipboardCheck, BsArrowRight, BsCheckCircle, BsDownload } from 'react-icons/bs';

function GovernmentPrograms() {
  const policyGuides = [
    {
      id: 1,
      title: "Innovation Policy Framework",
      description: "Comprehensive guide to align your initiatives with government innovation policies",
      keyAreas: [
        "R&D tax incentives alignment",
        "Innovation grant eligibility",
        "Industry collaboration frameworks",
        "Technology transfer guidelines"
      ],
      downloadUrl: "#",
      lastUpdated: "March 2024"
    },
    {
      id: 2,
      title: "Sustainability Compliance",
      description: "Guidelines for meeting government sustainability and environmental standards",
      keyAreas: [
        "Environmental compliance",
        "Sustainable practice requirements",
        "Reporting frameworks",
        "Green technology initiatives"
      ],
      downloadUrl: "#",
      lastUpdated: "February 2024"
    },
    {
      id: 3,
      title: "Digital Transformation",
      description: "Alignment guide for government digital transformation initiatives",
      keyAreas: [
        "Digital service standards",
        "Data protection requirements",
        "Accessibility guidelines",
        "Technology modernization"
      ],
      downloadUrl: "#",
      lastUpdated: "January 2024"
    }
  ];

  const grantSupport = [
    {
      id: 1,
      title: "Grant Writing Assistance",
      description: "Expert support in preparing compelling grant applications",
      services: [
        "Proposal development",
        "Budget planning",
        "Technical writing",
        "Review and editing"
      ],
      benefits: [
        "Higher success rate",
        "Professional documentation",
        "Timely submission",
        "Expert guidance"
      ],
      duration: "4-6 weeks"
    },
    {
      id: 2,
      title: "Application Review Service",
      description: "Comprehensive review and optimization of your grant applications",
      services: [
        "Compliance check",
        "Content optimization",
        "Documentation review",
        "Feedback implementation"
      ],
      benefits: [
        "Enhanced quality",
        "Compliance assurance",
        "Strategic positioning",
        "Expert insights"
      ],
      duration: "2-3 weeks"
    },
    {
      id: 3,
      title: "Post-Award Management",
      description: "Support in managing and reporting on awarded grants",
      services: [
        "Progress tracking",
        "Financial management",
        "Report preparation",
        "Compliance monitoring"
      ],
      benefits: [
        "Efficient management",
        "Compliance maintenance",
        "Clear reporting",
        "Risk mitigation"
      ],
      duration: "Ongoing"
    }
  ];

  const complianceChecklists = [
    {
      id: 1,
      title: "Pre-Application Checklist",
      category: "Planning",
      items: [
        "Eligibility criteria verification",
        "Required documentation list",
        "Timeline planning",
        "Budget preparation",
        "Team resource allocation",
        "Stakeholder identification"
      ],
      importance: "Critical",
      downloadable: true
    },
    {
      id: 2,
      title: "Documentation Checklist",
      category: "Documentation",
      items: [
        "Legal documents",
        "Financial statements",
        "Technical specifications",
        "Project plans",
        "Team qualifications",
        "Partnership agreements"
      ],
      importance: "High",
      downloadable: true
    },
    {
      id: 3,
      title: "Reporting Compliance",
      category: "Monitoring",
      items: [
        "Progress report templates",
        "Financial tracking sheets",
        "Milestone verification",
        "Impact assessment forms",
        "Stakeholder feedback logs",
        "Audit preparation guides"
      ],
      importance: "Essential",
      downloadable: true
    }
  ];

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
            Government Programs & Grants
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Navigate government initiatives and secure funding opportunities
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Policy Alignment Guides Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsShield className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Policy Alignment Guides</h2>
              <p className="text-gray-600 mt-1">Comprehensive resources for government policy compliance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policyGuides.map((guide) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{guide.title}</h3>
                <p className="text-gray-600 mb-6">{guide.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Key Areas:</h4>
                  <ul className="space-y-2">
                    {guide.keyAreas.map((area, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <BsCheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Last updated: {guide.lastUpdated}</span>
                  <a
                    href={guide.downloadUrl}
                    className="flex items-center text-purple-600 hover:text-purple-700"
                  >
                    <BsDownload className="w-4 h-4 mr-1" />
                    Download Guide
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Grant Application Support Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsFileEarmarkText className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Grant Application Support</h2>
              <p className="text-gray-600 mt-1">Expert assistance throughout your grant application journey</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grantSupport.map((support) => (
              <motion.div
                key={support.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{support.title}</h3>
                <p className="text-gray-600 mb-6">{support.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Services:</h4>
                  <ul className="space-y-2">
                    {support.services.map((service, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <BsCheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    {support.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: {support.duration}</span>
                  <button className="flex items-center text-purple-600 hover:text-purple-700">
                    Learn More
                    <BsArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Compliance Checklists Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <BsClipboardCheck className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Compliance Checklists</h2>
              <p className="text-gray-600 mt-1">Essential checklists to ensure program compliance</p>
            </div>
          </div>

          <div className="space-y-6">
            {complianceChecklists.map((checklist) => (
              <motion.div
                key={checklist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                        {checklist.category}
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                        {checklist.importance}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{checklist.title}</h3>
                  </div>
                  {checklist.downloadable && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      <BsDownload className="w-4 h-4" />
                      Download Checklist
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {checklist.items.map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <BsCheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default GovernmentPrograms; 