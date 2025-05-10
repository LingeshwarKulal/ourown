import { motion } from 'framer-motion';
import { BsLaptop, BsCreditCard2Front, BsGear, BsArrowRight, BsCheckCircle, BsDownload } from 'react-icons/bs';

function MSMESupport() {
  const digitalisationRoadmaps = [
    {
      id: 1,
      title: "Digital Transformation Assessment",
      description: "Comprehensive evaluation of your current digital maturity and transformation needs",
      features: [
        "Technology infrastructure audit",
        "Digital capability assessment",
        "Gap analysis",
        "Priority identification"
      ],
      deliverables: [
        "Detailed assessment report",
        "Digital maturity score",
        "Improvement recommendations",
        "Implementation timeline"
      ],
      duration: "2-3 weeks"
    },
    {
      id: 2,
      title: "Technology Implementation Plan",
      description: "Structured approach to implementing digital solutions for your business",
      features: [
        "Solution selection guidance",
        "Implementation roadmap",
        "Change management plan",
        "Training framework"
      ],
      deliverables: [
        "Technology stack blueprint",
        "Implementation schedule",
        "Resource allocation plan",
        "ROI projections"
      ],
      duration: "4-6 weeks"
    },
    {
      id: 3,
      title: "Digital Operations Strategy",
      description: "Strategic planning for digitizing core business operations",
      features: [
        "Process digitization mapping",
        "Automation opportunities",
        "Digital workflow design",
        "Integration planning"
      ],
      deliverables: [
        "Digital operations manual",
        "Automation roadmap",
        "Integration architecture",
        "Performance metrics"
      ],
      duration: "6-8 weeks"
    }
  ];

  const creditServices = [
    {
      id: 1,
      title: "Loan Application Support",
      description: "Expert assistance in preparing and submitting loan applications",
      services: [
        "Documentation preparation",
        "Financial statement review",
        "Application packaging",
        "Lender matching"
      ],
      benefits: [
        "Higher approval rates",
        "Faster processing",
        "Better loan terms",
        "Expert guidance"
      ],
      timeline: "2-3 weeks"
    },
    {
      id: 2,
      title: "Credit Enhancement Program",
      description: "Comprehensive support to improve your business credit profile",
      services: [
        "Credit assessment",
        "Improvement strategy",
        "Monitoring setup",
        "Regular reviews"
      ],
      benefits: [
        "Improved credit score",
        "Better financing options",
        "Reduced costs",
        "Strategic advice"
      ],
      timeline: "3-6 months"
    },
    {
      id: 3,
      title: "Financial Advisory Services",
      description: "Strategic financial guidance for business growth",
      services: [
        "Financial planning",
        "Cash flow management",
        "Risk assessment",
        "Growth strategy"
      ],
      benefits: [
        "Optimized finances",
        "Better decisions",
        "Risk mitigation",
        "Growth support"
      ],
      timeline: "Ongoing"
    }
  ];

  const processToolkits = [
    {
      id: 1,
      title: "Operations Assessment Kit",
      category: "Analysis",
      description: "Comprehensive toolkit for analyzing and optimizing business operations",
      tools: [
        "Process mapping templates",
        "Efficiency calculators",
        "Cost analysis tools",
        "Performance metrics",
        "Bottleneck identifiers",
        "Improvement trackers"
      ],
      format: "Interactive spreadsheets",
      downloadable: true
    },
    {
      id: 2,
      title: "Workflow Optimization Suite",
      category: "Implementation",
      description: "Ready-to-use tools for streamlining business workflows",
      tools: [
        "Workflow templates",
        "SOP builders",
        "Task automation guides",
        "Quality checklists",
        "Time tracking tools",
        "Progress monitors"
      ],
      format: "Digital templates",
      downloadable: true
    },
    {
      id: 3,
      title: "Quality Management System",
      category: "Management",
      description: "Complete toolkit for implementing quality management processes",
      tools: [
        "Quality metrics dashboard",
        "Audit checklists",
        "Compliance trackers",
        "Training materials",
        "Documentation templates",
        "Review systems"
      ],
      format: "Web-based platform",
      downloadable: true
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
            MSME Support Schemes
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Comprehensive support solutions for Micro, Small & Medium Enterprises
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Digitalisation Roadmaps Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsLaptop className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Digitalisation Roadmaps</h2>
              <p className="text-gray-600 mt-1">Strategic guidance for digital transformation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalisationRoadmaps.map((roadmap) => (
              <motion.div
                key={roadmap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{roadmap.title}</h3>
                <p className="text-gray-600 mb-6">{roadmap.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {roadmap.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <BsCheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Deliverables:</h4>
                  <ul className="space-y-2">
                    {roadmap.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Duration: {roadmap.duration}</span>
                  <button className="flex items-center text-purple-600 hover:text-purple-700">
                    Get Started
                    <BsArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Credit Facilitation Services Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsCreditCard2Front className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Credit Facilitation Services</h2>
              <p className="text-gray-600 mt-1">Expert support for accessing business financing</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creditServices.map((service) => (
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
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Services:</h4>
                  <ul className="space-y-2">
                    {service.services.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <BsCheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Timeline: {service.timeline}</span>
                  <button className="flex items-center text-purple-600 hover:text-purple-700">
                    Learn More
                    <BsArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Optimisation Toolkits Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <BsGear className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Process Optimisation Toolkits</h2>
              <p className="text-gray-600 mt-1">Ready-to-use tools for business process improvement</p>
            </div>
          </div>

          <div className="space-y-6">
            {processToolkits.map((toolkit) => (
              <motion.div
                key={toolkit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                        {toolkit.category}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {toolkit.format}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{toolkit.title}</h3>
                    <p className="text-gray-600 mt-2">{toolkit.description}</p>
                  </div>
                  {toolkit.downloadable && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      <BsDownload className="w-4 h-4" />
                      Download Toolkit
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {toolkit.tools.map((tool, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <BsCheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                      {tool}
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

export default MSMESupport; 