import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../../components/shared/PageHeader';
import CardGrid from '../../components/shared/CardGrid';

function AssociateBodies() {
  // AOB data for CardGrid
  const aobData = [
    {
      title: "Strategy & Innovation AOB",
      description: "Guides overall ecosystem strategy, identifies emerging opportunities, and ensures innovation remains at the core of all initiatives.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      details: [
        "Long-term roadmap development",
        "Cross-sector innovation frameworks",
        "Performance monitoring systems"
      ],
      cycle: "Quarterly strategic reviews"
    },
    {
      title: "Financial Governance AOB",
      description: "Establishes financial protocols, grant distribution mechanisms, and investment thesis alignment across the ecosystem.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      details: [
        "Fund allocation frameworks",
        "Financial compliance oversight",
        "Investment portfolio management"
      ],
      cycle: "Monthly financial reviews"
    },
    {
      title: "Ecosystem Partnerships AOB",
      description: "Develops alliance strategies, cross-organization collaboration frameworks, and stakeholder engagement protocols.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      details: [
        "Partnership evaluation criteria",
        "Alliance success metrics",
        "Ecosystem expansion strategy"
      ],
      cycle: "Bi-monthly partnership reviews"
    },
    {
      title: "Technology & Infrastructure AOB",
      description: "Sets technology standards, digital infrastructure roadmaps, and security protocols across all platforms.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      details: [
        "Platform architecture oversight",
        "Data governance standards",
        "Technology adoption frameworks"
      ],
      cycle: "Sprint-based reviews (bi-weekly)"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader 
        title="Associate Bodies (AOBs & AOCs)"
        subtitle="Discover the governance structures that drive transparency and accountability across our ecosystem."
        bgColor="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-primary hover:text-primary-dark font-medium transition duration-300 ease-in-out">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/ecosystem" className="text-primary hover:text-primary-dark font-medium transition duration-300 ease-in-out">Ecosystem</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 font-medium">Associate Bodies</span>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">Governance Framework</h2>
            <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
            <p className="text-lg text-gray-700 mb-8">
              OUROWN's Associate Operating Bodies (AOBs) and Associate Operational Cells (AOCs) form the backbone of our governance ecosystem. These structured entities ensure transparent decision-making, standardized processes, and accountable leadership across all initiatives.
            </p>
            <div className="glassmorphism p-6 rounded-xl mb-8">
              <p className="text-gray-700">
                <span className="font-bold text-gradient">Our Governance Philosophy:</span> Clear roles, documented procedures, and performance metrics create the foundation for sustainable growth and impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* AOB Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8 text-center">Associate Operating Bodies (AOBs)</h2>
            <p className="section-subtitle mb-10 text-center">
              AOBs function as strategic oversight entities, focusing on long-term planning, policy formation, and resource allocation. Each AOB specializes in a specific domain while maintaining alignment with OUROWN's overarching vision.
            </p>
            <div className="fancy-separator mb-12 mx-auto max-w-xs"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {aobData.map((aob, index) => (
                <motion.div 
                  key={index}
                  className="glassmorphism rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white mr-4">
                      {aob.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gradient">{aob.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {aob.description}
                  </p>
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    {aob.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Governance Cycle:</span> {aob.cycle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AOC Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8 text-center">Associate Operational Cells (AOCs)</h2>
            <p className="section-subtitle mb-10 text-center">
              AOCs serve as execution-focused entities that implement strategies, manage day-to-day operations, and ensure tactical milestones are achieved. Each AOC operates with defined SOPs and clear deliverables.
            </p>
            <div className="fancy-separator mb-12 mx-auto max-w-xs"></div>
            
            <motion.div 
              className="glassmorphism rounded-xl overflow-hidden mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-4 px-6">
                <h3 className="text-xl font-bold">Incubation Excellence AOC</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Ensures consistent implementation of the Troup-Based Business Incubation Model across all cohorts and programs.
                </p>
                
                <h4 className="font-semibold mb-3">Key Operational Protocols:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">1</div>
                    <div>
                      <span className="font-medium text-gradient">Intake Process</span>
                      <p className="text-gray-600">Standardized selection criteria, documentation requirements, and onboarding procedures.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">2</div>
                    <div>
                      <span className="font-medium text-gradient">Troup Composition & Assignment</span>
                      <p className="text-gray-600">Skill mapping, team formation guidelines, and rotation protocols.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">3</div>
                    <div>
                      <span className="font-medium text-gradient">Stage-Gate Management</span>
                      <p className="text-gray-600">Milestone definitions, progress assessment frameworks, and advancement criteria.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">4</div>
                    <div>
                      <span className="font-medium text-gradient">Graduate Transition</span>
                      <p className="text-gray-600">Exit readiness assessment, alumni network integration, and support tapering protocols.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="card p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Review Cadence:</span> Weekly sprint reviews, monthly progress dashboards, quarterly outcome assessments
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glassmorphism rounded-xl overflow-hidden mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-green-700 to-teal-700 text-white py-4 px-6">
                <h3 className="text-xl font-bold">Resources & Community AOC</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Manages all knowledge assets, community engagement initiatives, and collaboration tools across the ecosystem.
                </p>
                
                <h4 className="font-semibold mb-3">Key Operational Protocols:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">1</div>
                    <div>
                      <span className="font-medium text-gradient">Content Management</span>
                      <p className="text-gray-600">Creation workflows, quality standards, and knowledge classification systems.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">2</div>
                    <div>
                      <span className="font-medium text-gradient">Community Engagement</span>
                      <p className="text-gray-600">Event design templates, networking frameworks, and interaction tracking.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">3</div>
                    <div>
                      <span className="font-medium text-gradient">Platform Development</span>
                      <p className="text-gray-600">Digital experience standards, feature prioritization, and user feedback loops.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="card p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Review Cadence:</span> Weekly content reviews, bi-weekly community metrics, monthly platform updates
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Add other AOCs here with the same style pattern */}
          </div>
        </div>
      </div>
      
      {/* Governance Integration Section */}
      <div className="py-16 bg-gradient-glass">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">Governance Integration</h2>
            <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
            
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glassmorphism rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6 text-gradient">The OUROWN Governance Matrix</h3>
                <p className="text-lg text-gray-700 mb-8">
                  Our governance bodies work together in a coordinated matrix model, ensuring both strategic alignment and operational excellence. AOBs establish direction and policies, while AOCs implement and execute with precision.
                </p>
                
                <div className="relative z-10 max-w-3xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-xl blur-xl"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center py-4 border-b md:border-b-0 md:border-r border-gray-200">
                        <h4 className="font-bold text-xl mb-4 text-primary">AOBs</h4>
                        <ul className="space-y-2 text-left text-gray-700 max-w-xs mx-auto">
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Strategic direction setting
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Policy formulation
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Resource allocation
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Performance oversight
                          </li>
                        </ul>
                      </div>
                      <div className="text-center py-4">
                        <h4 className="font-bold text-xl mb-4 text-primary">AOCs</h4>
                        <ul className="space-y-2 text-left text-gray-700 max-w-xs mx-auto">
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Operational execution
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Process implementation
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Day-to-day management
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Performance reporting
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Interested in our governance approach?</h2>
              <p className="text-xl mb-8 text-white/80">
                Learn how our structured governance model can be applied to your organization or partnership.
              </p>
              <Link 
                to="/contact-get-involved" 
                className="bg-white text-indigo-900 hover:bg-blue-100 font-bold px-8 py-4 rounded-lg inline-block btn-hover-effect"
              >
                Contact Our Governance Team
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssociateBodies; 