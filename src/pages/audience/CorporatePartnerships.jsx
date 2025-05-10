import { motion } from 'framer-motion';
import { BsBuilding, BsGear, BsFileText, BsArrowRight, BsCheckCircle, BsLightbulb } from 'react-icons/bs';

function CorporatePartnerships() {
  const csrStrategies = [
    {
      id: 1,
      title: "Sustainable Innovation Program",
      description: "Design and implement CSR initiatives focused on fostering sustainable innovation in your industry",
      benefits: [
        "Environmental impact assessment",
        "Stakeholder engagement framework",
        "Impact measurement metrics",
        "Annual sustainability reporting"
      ],
      duration: "12 months",
      investment: "Custom pricing"
    },
    {
      id: 2,
      title: "Community Tech Education",
      description: "Develop programs that bridge the digital divide through technology education and skill development",
      benefits: [
        "Curriculum development",
        "Mentor network access",
        "Progress tracking tools",
        "Impact assessment"
      ],
      duration: "6-12 months",
      investment: "Custom pricing"
    },
    {
      id: 3,
      title: "Social Enterprise Support",
      description: "Create initiatives that support and scale social enterprises aligned with your corporate values",
      benefits: [
        "Enterprise selection framework",
        "Resource allocation strategy",
        "Progress monitoring system",
        "Impact reporting templates"
      ],
      duration: "12-24 months",
      investment: "Custom pricing"
    }
  ];

  const rdPackages = [
    {
      id: 1,
      title: "Innovation Lab Partnership",
      description: "Collaborate on cutting-edge research and development projects in our state-of-the-art innovation labs",
      features: [
        "Dedicated research team",
        "Access to testing facilities",
        "Quarterly innovation sprints",
        "IP sharing framework"
      ],
      deliverables: [
        "Prototype development",
        "Technical documentation",
        "Market validation reports",
        "Implementation roadmap"
      ]
    },
    {
      id: 2,
      title: "Technology Co-Creation",
      description: "Joint development of innovative solutions addressing specific industry challenges",
      features: [
        "Expert consultation",
        "Custom development team",
        "Regular milestone reviews",
        "Technology transfer support"
      ],
      deliverables: [
        "Solution architecture",
        "Working prototype",
        "Integration guidelines",
        "Training materials"
      ]
    },
    {
      id: 3,
      title: "Product Innovation Sprint",
      description: "Rapid development and testing of new product concepts through focused innovation sprints",
      features: [
        "Sprint planning workshop",
        "Agile development process",
        "User testing sessions",
        "Market feedback analysis"
      ],
      deliverables: [
        "Concept prototypes",
        "User testing results",
        "Market viability report",
        "Launch strategy"
      ]
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Global Tech Leader Partnership",
      industry: "Technology",
      challenge: "Developing sustainable AI solutions for environmental monitoring",
      solution: "12-month R&D collaboration resulting in patented eco-monitoring system",
      results: [
        "3 patents filed",
        "45% reduction in monitoring costs",
        "Implementation in 12 countries",
        "2 industry awards received"
      ],
      duration: "12 months",
      status: "Completed"
    },
    {
      id: 2,
      title: "Manufacturing Innovation Initiative",
      industry: "Manufacturing",
      challenge: "Optimizing production processes through IoT integration",
      solution: "Custom IoT solution development and implementation",
      results: [
        "30% efficiency improvement",
        "50% reduction in downtime",
        "ROI achieved in 8 months",
        "Industry benchmark status"
      ],
      duration: "18 months",
      status: "Ongoing"
    },
    {
      id: 3,
      title: "Healthcare Digital Transformation",
      industry: "Healthcare",
      challenge: "Modernizing patient care through digital solutions",
      solution: "Development of integrated digital health platform",
      results: [
        "90% patient satisfaction",
        "40% reduction in wait times",
        "5 hospital implementations",
        "Healthcare Tech Award 2023"
      ],
      duration: "24 months",
      status: "Completed"
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
            Corporate Partnerships
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Strategic collaboration opportunities for innovation and sustainable growth
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* CSR Strategy Design Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsBuilding className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">CSR Strategy Design</h2>
              <p className="text-gray-600 mt-1">Develop impactful corporate social responsibility initiatives</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {csrStrategies.map((strategy) => (
              <motion.div
                key={strategy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{strategy.title}</h3>
                <p className="text-gray-600 mb-6">{strategy.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {strategy.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <BsCheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-gray-600">
                  <p><span className="font-medium">Duration:</span> {strategy.duration}</p>
                  <p><span className="font-medium">Investment:</span> {strategy.investment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* R&D Co-development Packages Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsGear className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">R&D Co-development Packages</h2>
              <p className="text-gray-600 mt-1">Collaborative innovation opportunities for breakthrough solutions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rdPackages.map((package_) => (
              <motion.div
                key={package_.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{package_.title}</h3>
                <p className="text-gray-600 mb-6">{package_.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {package_.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <BsLightbulb className="w-4 h-4 text-purple-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Deliverables:</h4>
                  <ul className="space-y-2">
                    {package_.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Learn More
                  <BsArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Collaboration Case Studies Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <BsFileText className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Collaboration Case Studies</h2>
              <p className="text-gray-600 mt-1">Success stories from our corporate partnerships</p>
            </div>
          </div>

          <div className="space-y-6">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        study.status === 'Completed' 
                          ? 'bg-green-100 text-green-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {study.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-600"><span className="font-medium">Challenge:</span> {study.challenge}</p>
                      <p className="text-gray-600"><span className="font-medium">Solution:</span> {study.solution}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Results:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <BsCheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Duration: {study.duration}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CorporatePartnerships; 