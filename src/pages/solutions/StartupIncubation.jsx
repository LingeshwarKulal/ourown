import { motion } from 'framer-motion';
import { BsLightbulb, BsCode, BsRocket, BsArrowRight, BsCheckCircle, BsCalendar } from 'react-icons/bs';

function StartupIncubation() {
  const ideationWorkshops = [
    {
      id: 1,
      title: "Design Thinking Sprint",
      description: "Intensive 5-day workshop to transform ideas into validated concepts",
      features: [
        "Problem space exploration",
        "User research techniques",
        "Rapid prototyping methods",
        "Validation frameworks"
      ],
      outcomes: [
        "Validated problem statement",
        "User personas",
        "Solution wireframes",
        "Testing strategy"
      ],
      duration: "5 days",
      nextSession: "April 15, 2024"
    },
    {
      id: 2,
      title: "Business Model Canvas",
      description: "Strategic workshop to develop and validate your business model",
      features: [
        "Value proposition design",
        "Market sizing",
        "Revenue modeling",
        "Cost structure analysis"
      ],
      outcomes: [
        "Complete business model",
        "Market analysis",
        "Financial projections",
        "Growth strategy"
      ],
      duration: "3 days",
      nextSession: "April 22, 2024"
    },
    {
      id: 3,
      title: "Innovation Lab",
      description: "Hands-on sessions to explore emerging technologies and market opportunities",
      features: [
        "Technology assessment",
        "Market trend analysis",
        "Innovation frameworks",
        "Competitive positioning"
      ],
      outcomes: [
        "Technology roadmap",
        "Innovation strategy",
        "Market opportunity map",
        "Action plan"
      ],
      duration: "4 days",
      nextSession: "May 1, 2024"
    }
  ];

  const mvpSupport = [
    {
      id: 1,
      title: "Technical Architecture",
      description: "Expert guidance in designing and implementing your MVP architecture",
      services: [
        "Technology stack selection",
        "Architecture design",
        "Scalability planning",
        "Security framework"
      ],
      deliverables: [
        "Architecture blueprint",
        "Technical specifications",
        "Implementation roadmap",
        "Resource planning"
      ],
      timeline: "2-4 weeks"
    },
    {
      id: 2,
      title: "Development Sprint",
      description: "Rapid development of your MVP with experienced development team",
      services: [
        "Agile development",
        "Regular iterations",
        "Quality assurance",
        "DevOps setup"
      ],
      deliverables: [
        "Working MVP",
        "Source code",
        "Documentation",
        "Deployment guide"
      ],
      timeline: "6-8 weeks"
    },
    {
      id: 3,
      title: "User Testing",
      description: "Comprehensive testing and validation of your MVP with target users",
      services: [
        "User testing sessions",
        "Feedback collection",
        "Analytics setup",
        "Performance monitoring"
      ],
      deliverables: [
        "User testing reports",
        "Analytics dashboard",
        "Improvement roadmap",
        "Launch strategy"
      ],
      timeline: "2-3 weeks"
    }
  ];

  const marketEntry = [
    {
      id: 1,
      title: "Market Analysis & Strategy",
      category: "Research",
      description: "Comprehensive market analysis and entry strategy development",
      components: [
        "Market size assessment",
        "Competitor analysis",
        "Customer segmentation",
        "Channel strategy",
        "Pricing model",
        "Growth projections"
      ],
      duration: "4-6 weeks",
      status: "Available"
    },
    {
      id: 2,
      title: "Launch Preparation",
      category: "Execution",
      description: "End-to-end support for successful market entry",
      components: [
        "Marketing plan",
        "Sales strategy",
        "Operations setup",
        "Team building",
        "Partnership development",
        "Launch timeline"
      ],
      duration: "8-10 weeks",
      status: "Available"
    },
    {
      id: 3,
      title: "Growth Acceleration",
      category: "Scale",
      description: "Strategic support to accelerate market penetration and growth",
      components: [
        "Growth metrics",
        "Scaling strategy",
        "Market expansion",
        "Investment readiness",
        "Team scaling",
        "Process optimization"
      ],
      duration: "12 weeks",
      status: "Limited Spots"
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
            Startup Incubation Packages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Transform your idea into a successful business with our comprehensive support
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Ideation Workshops Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsLightbulb className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Ideation Workshops</h2>
              <p className="text-gray-600 mt-1">Transform your ideas into validated business concepts</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ideationWorkshops.map((workshop) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{workshop.title}</h3>
                <p className="text-gray-600 mb-6">{workshop.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Workshop Features:</h4>
                  <ul className="space-y-2">
                    {workshop.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <BsCheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Key Outcomes:</h4>
                  <ul className="space-y-2">
                    {workshop.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div>
                    <p>Duration: {workshop.duration}</p>
                    <p className="flex items-center mt-1">
                      <BsCalendar className="w-4 h-4 mr-1" />
                      Next: {workshop.nextSession}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MVP Development Support Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsCode className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">MVP Development Support</h2>
              <p className="text-gray-600 mt-1">Expert guidance and resources for building your MVP</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mvpSupport.map((support) => (
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
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Deliverables:</h4>
                  <ul className="space-y-2">
                    {support.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Timeline: {support.timeline}</span>
                  <button className="flex items-center text-purple-600 hover:text-purple-700">
                    Learn More
                    <BsArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Market-Entry Accelerators Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <BsRocket className="w-6 h-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Market-Entry Accelerators</h2>
              <p className="text-gray-600 mt-1">Strategic support for successful market entry and growth</p>
            </div>
          </div>

          <div className="space-y-6">
            {marketEntry.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                        {program.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        program.status === 'Available' 
                          ? 'bg-green-100 text-green-600'
                          : 'bg-orange-100 text-orange-600'
                      }`}>
                        {program.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    <p className="text-gray-600 mt-2">{program.description}</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Apply Now
                    <BsArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {program.components.map((component, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <BsCheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                      {component}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <p>Program Duration: {program.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default StartupIncubation; 