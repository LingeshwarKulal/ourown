import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../../components/shared/PageHeader';

function TroupBasedIncubation() {
  return (
    <div>
      {/* Hero Section */}
      <PageHeader 
        title="Troup-Based Business Incubation Model (TBBIM)"
        subtitle="Our signature methodology that delivers end-to-end support through cross-functional teams and stage-gate milestones."
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
            <span className="text-gray-600 font-medium">Troup-Based Incubation Model</span>
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
            <h2 className="section-title mb-6">What is TBBIM?</h2>
            <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
            <p className="text-lg text-gray-700 mb-8">
              The Troup-Based Business Incubation Model (TBBIM) is OUROWN's proprietary methodology that combines cross-functional teams (troupes) with a structured stage-gate development framework to accelerate venture growth. Unlike traditional incubation approaches that provide generic mentorship and shared workspace, TBBIM delivers tailored, hands-on support across all business functions.
            </p>
            <div className="glassmorphism p-6 mb-8 rounded-xl">
              <p className="text-gray-700">
                <span className="font-bold text-gradient">TBBIM Philosophy:</span> Every venture needs specialized expertise at specific development stages, but no early-stage company can afford to hire full-time specialists across all domains. TBBIM provides right-sized, right-timed access to deep expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* TBBIM Core Components */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8 text-center">Core Components</h2>
            <p className="section-subtitle mb-10 text-center">
              TBBIM operates on two primary dimensions that work in concert to deliver structured, tailored support.
            </p>
            <div className="fancy-separator mb-12 mx-auto max-w-xs"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              {/* Troupes Component */}
              <motion.div 
                className="glassmorphism rounded-xl p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gradient mb-3">Troupes (Cross-Functional Teams)</h3>
                <p className="text-gray-700 mb-4">
                  Troupes are carefully assembled teams of 4-6 specialists who collaborate to address the specific needs of each venture. Each troupe combines domain expertise, industry knowledge, and practical experience.
                </p>
                <h4 className="font-semibold mb-2">Key Characteristics:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Customized composition based on venture needs</li>
                  <li>Vertical expertise (domain specialists)</li>
                  <li>Horizontal expertise (industry knowledge)</li>
                  <li>Balanced mix of senior advisors and hands-on implementers</li>
                  <li>Clear roles, responsibilities, and accountability measures</li>
                </ul>
                <div className="card p-4 rounded">
                  <h4 className="font-semibold mb-2">Troupe Selection Process:</h4>
                  <p className="text-gray-700">
                    Following initial venture assessment, OUROWN's AI-powered matching algorithm recommends optimal troupe members based on skills, experience, and personality fit. This recommendation is refined through human oversight to ensure perfect alignment.
                  </p>
                </div>
              </motion.div>
              
              {/* Stage-Gate Component */}
              <motion.div 
                className="glassmorphism rounded-xl p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gradient mb-3">Stage-Gate Framework</h3>
                <p className="text-gray-700 mb-4">
                  Our stage-gate system divides the incubation journey into well-defined phases, each with clear objectives, deliverables, and success criteria. This creates structure and allows for disciplined progression based on milestone achievement.
                </p>
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Clarity on expectations at each development phase</li>
                  <li>Resource optimization through focused deployment</li>
                  <li>Clear decision points for continuation, pivot, or exit</li>
                  <li>Standardized measurement of progress across portfolio</li>
                  <li>Objective evaluation criteria for investment readiness</li>
                </ul>
                <div className="card p-4 rounded">
                  <h4 className="font-semibold mb-2">Gate Review Process:</h4>
                  <p className="text-gray-700">
                    At each stage boundary, formal reviews assess milestone completion and readiness to progress. These collaborative sessions involve the venture team, troupe members, and OUROWN leadership to ensure alignment and quality control.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* TBBIM Stages */}
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8 text-center">TBBIM Stage-Gate Breakdown</h2>
            <p className="section-subtitle mb-10 text-center">
              Our incubation process maps ventures through five distinct stages, each with tailored support and clear progression criteria.
            </p>
            <div className="fancy-separator mb-12 mx-auto max-w-xs"></div>
            
            {/* Stage 1 */}
            <motion.div 
              className="mb-12 glassmorphism rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 border border-white/30">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">Ideation & Validation</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Focus Areas</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Problem definition</li>
                      <li>Market research</li>
                      <li>Value proposition</li>
                      <li>Initial user interviews</li>
                      <li>Competitive analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Troupe Composition</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Strategic advisor</li>
                      <li>Market research specialist</li>
                      <li>Industry expert</li>
                      <li>UX researcher</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Gate Criteria</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Validated problem statement</li>
                      <li>Target audience definition</li>
                      <li>Initial solution hypothesis</li>
                      <li>Preliminary business model</li>
                    </ul>
                  </div>
                </div>
                <div className="card p-4 rounded">
                  <h4 className="font-semibold mb-2">Typical Duration: 4-6 weeks</h4>
                  <p className="text-gray-700">
                    During this stage, we focus on determining whether the founding assumptions are valid through intensive customer discovery. Troupes help calibrate the initial business idea against market realities.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Stage 2 */}
            <motion.div 
              className="mb-12 glassmorphism rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-green-700 to-teal-700 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 border border-white/30">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">MVP Development</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Focus Areas</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Feature prioritization</li>
                      <li>Product roadmap</li>
                      <li>MVP design & development</li>
                      <li>Testing methodology</li>
                      <li>Early adopter identification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Troupe Composition</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Product manager</li>
                      <li>Technical architect</li>
                      <li>UI/UX designer</li>
                      <li>Development lead</li>
                      <li>QA specialist</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Gate Criteria</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Functional MVP</li>
                      <li>Technical architecture</li>
                      <li>Initial user feedback</li>
                      <li>Development roadmap</li>
                      <li>Quality standards</li>
                    </ul>
                  </div>
                </div>
                <div className="card p-4 rounded">
                  <h4 className="font-semibold mb-2">Typical Duration: 8-12 weeks</h4>
                  <p className="text-gray-700">
                    In this stage, we focus on creating the minimal viable product that delivers core value with optimal resource efficiency. Troupes guide technology stack decisions, feature prioritization, and UX design.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Stage 3 */}
            <motion.div 
              className="mb-12 glassmorphism rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-purple-700 to-pink-700 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 border border-white/30">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">Market Traction</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Focus Areas</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Go-to-market strategy</li>
                      <li>Sales process development</li>
                      <li>Customer acquisition</li>
                      <li>Initial revenue generation</li>
                      <li>Product iteration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Troupe Composition</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Sales strategist</li>
                      <li>Marketing specialist</li>
                      <li>Customer success expert</li>
                      <li>Product director</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Gate Criteria</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Paying customers</li>
                      <li>Repeatable sales process</li>
                      <li>Customer feedback loop</li>
                      <li>Product-market fit indicators</li>
                    </ul>
                  </div>
                </div>
                <div className="card p-4 rounded">
                  <h4 className="font-semibold mb-2">Typical Duration: 3-4 months</h4>
                  <p className="text-gray-700">
                    During market traction, we focus on acquiring early customers and establishing a repeatable sales process. Troupes provide go-to-market expertise and help refine the product based on real-world usage.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Stage 4 */}
            <motion.div 
              className="mb-12 glassmorphism rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-yellow-700 to-orange-700 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 border border-white/30">
                    4
                  </div>
                  <h3 className="text-2xl font-bold">Growth & Scaling</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Focus Areas</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Scaling operations</li>
                      <li>Revenue acceleration</li>
                      <li>Team expansion</li>
                      <li>Process optimization</li>
                      <li>Investment preparation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Troupe Composition</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Growth strategist</li>
                      <li>Operations expert</li>
                      <li>Financial advisor</li>
                      <li>Talent acquisition specialist</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Gate Criteria</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Month-over-month growth</li>
                      <li>Scalable operations</li>
                      <li>Healthy unit economics</li>
                      <li>Organizational structure</li>
                    </ul>
                  </div>
                </div>
                <div className="card p-4 rounded">
                  <h4 className="font-semibold mb-2">Typical Duration: 4-6 months</h4>
                  <p className="text-gray-700">
                    In this stage, we focus on accelerating growth and preparing the organization for scale. Troupes help establish scalable processes, prepare for investment rounds, and build the team structure needed for expansion.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Stage 5 */}
            <motion.div 
              className="mb-12 glassmorphism rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-red-700 to-rose-700 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 border border-white/30">
                    5
                  </div>
                  <h3 className="text-2xl font-bold">Maturity & Exit</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Focus Areas</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Leadership development</li>
                      <li>Strategic partnerships</li>
                      <li>Long-term planning</li>
                      <li>Exit preparation</li>
                      <li>Corporate governance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Troupe Composition</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Executive coach</li>
                      <li>Corporate development advisor</li>
                      <li>Board governance expert</li>
                      <li>Industry connector</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2">Exit Criteria</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Mature leadership team</li>
                      <li>Sustainable business model</li>
                      <li>Strong governance structure</li>
                      <li>Clear path to independence</li>
                    </ul>
                  </div>
                </div>
                <div className="card p-4 rounded">
                  <h4 className="font-semibold mb-2">Typical Duration: 3-6 months</h4>
                  <p className="text-gray-700">
                    The final stage focuses on transitioning from incubation to full independence. Troupes help prepare the organization for long-term success, including leadership development, strategic planning, and governance structures.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* TBBIM Benefits */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">TBBIM Key Benefits</h2>
            <p className="text-lg text-gray-700 mb-10">
              Our model delivers significant advantages over traditional incubation approaches across multiple dimensions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Accelerated Time-to-Market</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Focused expertise and structured development accelerate progress through critical startup phases. TBBIM ventures launch 40% faster than the industry average.
                </p>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-gray-700 text-sm italic">
                    "The troupe approach eliminated months of trial and error. Having experts guide us through each stage meant we didn't waste time figuring out processes—we could focus entirely on execution."
                  </p>
                  <p className="text-right text-sm mt-2">— Citadel Motors Founder</p>
                </div>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Optimized Resource Utilization</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  With TBBIM, ventures access specialized expertise precisely when needed without carrying the cost of full-time specialists, optimizing both capital efficiency and expertise impact.
                </p>
                <div className="bg-green-50 p-4 rounded">
                  <p className="text-gray-700 text-sm italic">
                    "As a bootstrapped startup, there's no way we could have afforded the caliber of expertise our troupe provided. Getting fractional access to industry veterans was game-changing for our runway."
                  </p>
                  <p className="text-right text-sm mt-2">— Primaveras IT Solutions CEO</p>
                </div>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Reduced Failure Risk</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Early identification of challenges, structured validation, and expert guidance at each stage significantly reduces the risk of venture failure. TBBIM ventures show an 78% survival rate after two years (vs. industry average of 32%).
                </p>
                <div className="bg-purple-50 p-4 rounded">
                  <p className="text-gray-700 text-sm italic">
                    "The stage-gate process forced us to validate assumptions we would have otherwise taken for granted. This early course correction saved us from pursuing what would have been a flawed business model."
                  </p>
                  <p className="text-right text-sm mt-2">— AgroConnect Technologies Founder</p>
                </div>
              </div>
              
              {/* Benefit 4 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Expanded Network Access</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Beyond direct troupe support, TBBIM connects ventures to OUROWN's broader ecosystem of industry partners, investors, customers, and talent, creating powerful network effects.
                </p>
                <div className="bg-yellow-50 p-4 rounded">
                  <p className="text-gray-700 text-sm italic">
                    "Our troupe members opened doors we didn't even know existed. Through their networks, we secured three enterprise pilots that would have taken years to land on our own."
                  </p>
                  <p className="text-right text-sm mt-2">— Healthcare Tech Startup Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TBBIM in Action */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">TBBIM in Action: Case Study</h2>
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl mr-4">
                  CM
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Citadel Motors</h3>
                  <p className="text-gray-600">Electric Mobility Startup</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3">Challenge</h4>
                <p className="text-gray-700">
                  Citadel Motors entered OUROWN with a prototype electric two-wheeler and ambitious plans for a battery-swap network, but faced regulatory hurdles, manufacturing challenges, and go-to-market uncertainty.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3">TBBIM Application</h4>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-semibold text-blue-900">Stage 1-2:</div>
                    <div className="flex-grow">
                      Regulatory expert in troupe identified compliance pathway while technical specialists refined battery architecture
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-semibold text-blue-900">Stage 3:</div>
                    <div className="flex-grow">
                      Supply chain expert negotiated manufacturing partnership; sales strategist secured pilot with e-commerce company
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-semibold text-blue-900">Stage 4:</div>
                    <div className="flex-grow">
                      Operations specialist designed swap station network; financial advisor structured Series A round
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-semibold text-blue-900">Stage 5:</div>
                    <div className="flex-grow">
                      Executive coach worked with founding team on leadership development; governance expert established board structure
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">Results</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <p className="text-3xl font-bold text-blue-600 mb-1">₹45 Cr</p>
                    <p className="text-gray-700">Series A funding secured</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <p className="text-3xl font-bold text-blue-600 mb-1">4 Cities</p>
                    <p className="text-gray-700">Operational networks</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <p className="text-3xl font-bold text-blue-600 mb-1">18 Mo</p>
                    <p className="text-gray-700">From concept to scale</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-gray-700 italic">
                    "Without TBBIM, we would have spent years navigating the complex web of regulations, manufacturing partnerships, and go-to-market challenges. Instead, we were able to launch in less than two years and secure significant funding for expansion."
                  </p>
                  <p className="text-right mt-2">— Citadel Motors Co-founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to experience TBBIM for your venture?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join OUROWN's ecosystem and access our Troup-Based Incubation Model to accelerate your journey from concept to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/solutions-services/startup-incubation-packages" 
              className="bg-white text-blue-900 hover:bg-blue-100 font-bold px-8 py-4 rounded-lg inline-block"
            >
              Apply for Incubation
            </Link>
            <Link 
              to="/contact-get-involved" 
              className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-4 rounded-lg inline-block"
            >
              Request TBBIM Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TroupBasedIncubation; 