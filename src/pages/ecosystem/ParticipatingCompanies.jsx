import { Link } from 'react-router-dom';

function ParticipatingCompanies() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Participating Companies (PCs)</h1>
            <p className="text-xl">Discover the innovative ventures that showcase the success of our ecosystem support model.</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/ecosystem" className="text-blue-600 hover:text-blue-800">Ecosystem</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">Participating Companies</span>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Incubation Success Stories</h2>
            <p className="text-lg text-gray-700 mb-8">
              OUROWN's Participating Companies (PCs) represent the heart of our ecosystem—ventures that have leveraged our Troup-Based Incubation Model to accelerate their growth and impact. Each company serves as both a beneficiary and contributor to our collective wisdom.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-gray-700">
                <span className="font-bold">Selection Criteria:</span> Our PCs are chosen based on innovation potential, team strength, market opportunity, and alignment with OUROWN's focus sectors. We maintain a diverse portfolio across industries, stages, and business models.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Companies Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Featured Companies</h2>
            <p className="text-lg text-gray-700 mb-10">
              These select ventures exemplify the outcomes possible through structured incubation support and the power of our ecosystem approach.
            </p>
            
            {/* Company 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
              <div className="md:flex">
                <div className="md:w-1/3 bg-blue-100 flex items-center justify-center p-8">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-blue-800 font-bold text-xl">
                    Citadel Motors
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-blue-900">Citadel Motors</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Scale-up Stage</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    An electric mobility startup that has successfully navigated regulatory challenges to launch India's first battery-swappable two-wheeler fleets for last-mile delivery services.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Incubation Milestones:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>MVP deployment: 15-vehicle pilot with a major e-commerce player</li>
                      <li>Series A funding: ₹45 crores secured with VC partner support</li>
                      <li>Market expansion: Operations in 4 metro cities</li>
                    </ul>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-4">
                      <span className="font-semibold">Joined:</span> September 2020
                    </span>
                    <span className="mr-4">
                      <span className="font-semibold">Sector:</span> Clean Mobility
                    </span>
                    <span>
                      <span className="font-semibold">Team Size:</span> 47
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Company 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
              <div className="md:flex">
                <div className="md:w-1/3 bg-green-100 flex items-center justify-center p-8">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-green-800 font-bold text-xl">
                    Primaveras IT
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-green-900">Primaveras IT Solutions</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Growth Stage</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A specialized software development firm focused on AI-powered supply chain optimization solutions for manufacturing SMEs, creating affordable technology access.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Incubation Milestones:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Product-market fit: 25+ initial customers with 90% retention</li>
                      <li>Seed extension: ₹8 crores from strategic industry partners</li>
                      <li>Team expansion: Grew from founding team of 3 to cross-functional team of 18</li>
                    </ul>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-4">
                      <span className="font-semibold">Joined:</span> January 2021
                    </span>
                    <span className="mr-4">
                      <span className="font-semibold">Sector:</span> Enterprise SaaS
                    </span>
                    <span>
                      <span className="font-semibold">Team Size:</span> 18
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Company 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-purple-100 flex items-center justify-center p-8">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-purple-800 font-bold text-xl">
                    AgroConnect
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-purple-900">AgroConnect Technologies</h3>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Early Traction</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A farm-to-fork platform that combines IoT sensors, satellite imagery, and predictive analytics to help smallholder farmers maximize yields and connect directly with buyers.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Incubation Milestones:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Pilot completion: 200+ farmers across 3 districts with demonstrated 18% yield improvement</li>
                      <li>Grant funding: ₹1.2 crore from government agricultural innovation fund</li>
                      <li>Strategic partnerships: 2 major food processing companies for guaranteed procurement</li>
                    </ul>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-4">
                      <span className="font-semibold">Joined:</span> June 2022
                    </span>
                    <span className="mr-4">
                      <span className="font-semibold">Sector:</span> AgriTech
                    </span>
                    <span>
                      <span className="font-semibold">Team Size:</span> 12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PC Sector Distribution */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">PC Sector Distribution</h2>
            <p className="text-lg text-gray-700 mb-10">
              OUROWN maintains a diverse portfolio of participating companies across strategic sectors, each with tailored incubation pathways.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sector 1 */}
              <div className="bg-blue-50 rounded-lg p-6 border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Climate & Sustainability</h3>
                <p className="text-gray-700 mb-4">Ventures focusing on clean energy, waste management, sustainable materials, and environmental solutions.</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">8 Companies</span>
                  <span className="text-sm text-gray-600">24% of Portfolio</span>
                </div>
              </div>
              
              {/* Sector 2 */}
              <div className="bg-green-50 rounded-lg p-6 border-t-4 border-green-600">
                <h3 className="text-xl font-bold text-green-900 mb-3">Digital Transformation</h3>
                <p className="text-gray-700 mb-4">Enterprise solutions, SaaS platforms, AI/ML applications, and digital workflow innovations.</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">11 Companies</span>
                  <span className="text-sm text-gray-600">34% of Portfolio</span>
                </div>
              </div>
              
              {/* Sector 3 */}
              <div className="bg-purple-50 rounded-lg p-6 border-t-4 border-purple-600">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Healthcare & Wellness</h3>
                <p className="text-gray-700 mb-4">MedTech, telehealth platforms, diagnostic innovations, and preventive health solutions.</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">6 Companies</span>
                  <span className="text-sm text-gray-600">18% of Portfolio</span>
                </div>
              </div>
              
              {/* Sector 4 */}
              <div className="bg-yellow-50 rounded-lg p-6 border-t-4 border-yellow-600">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">Agriculture & Food</h3>
                <p className="text-gray-700 mb-4">Precision farming, food supply chain innovations, alternative proteins, and farm management platforms.</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">4 Companies</span>
                  <span className="text-sm text-gray-600">12% of Portfolio</span>
                </div>
              </div>
              
              {/* Sector 5 */}
              <div className="bg-red-50 rounded-lg p-6 border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-900 mb-3">Mobility & Logistics</h3>
                <p className="text-gray-700 mb-4">Electric vehicles, shared mobility platforms, last-mile delivery innovations, and logistics optimization.</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">3 Companies</span>
                  <span className="text-sm text-gray-600">9% of Portfolio</span>
                </div>
              </div>
              
              {/* Sector 6 */}
              <div className="bg-indigo-50 rounded-lg p-6 border-t-4 border-indigo-600">
                <h3 className="text-xl font-bold text-indigo-900 mb-3">Emerging Technologies</h3>
                <p className="text-gray-700 mb-4">Blockchain applications, AR/VR solutions, IoT platforms, and quantum computing ventures.</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">1 Company</span>
                  <span className="text-sm text-gray-600">3% of Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">PC Success Metrics</h2>
            <p className="text-lg text-gray-700 mb-10">
              Our incubation approach delivers measurable results across key performance indicators that matter for sustainable growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Metric 1 */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Funding Success</h3>
                    <p className="text-gray-600">Capital raised post-OUROWN engagement</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Portfolio Average</span>
                    <span className="font-bold">₹12.8 Cr</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  86% of PCs secure follow-on funding within 12 months of program completion—3.2× higher than the industry average.
                </p>
              </div>
              
              {/* Metric 2 */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-800 mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Team Growth</h3>
                    <p className="text-gray-600">Talent acquisition & retention</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Average Team Expansion</span>
                    <span className="font-bold">3.7×</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full w-4/5"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  PCs demonstrate 92% talent retention rates and expand from an average of 4 to 15 team members during incubation.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Metric 3 */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Revenue Traction</h3>
                    <p className="text-gray-600">Customer acquisition & growth</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Annual Revenue Growth</span>
                    <span className="font-bold">214%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full w-5/6"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  On average, PCs achieve product-market fit within 7 months and demonstrate consistent 25%+ month-over-month growth.
                </p>
              </div>
              
              {/* Metric 4 */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-800 mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Time-to-Market</h3>
                    <p className="text-gray-600">Validation & launch efficiency</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Time Reduction</span>
                    <span className="font-bold">41%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-600 h-2.5 rounded-full w-2/5"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  OUROWN's structured approach reduces time from concept to commercial launch by an average of 41% compared to independent startups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Criteria */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">PC Onboarding Criteria</h2>
            <p className="text-lg text-gray-700 mb-10">
              Interested in becoming a Participating Company? We evaluate potential ventures based on these key dimensions:
            </p>
            
            <div className="space-y-8">
              {/* Criteria 1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-full h-20 bg-blue-900 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                    Team
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Founder & Team Assessment</h3>
                  <p className="text-gray-700 mb-3">
                    We evaluate founder commitment, team composition, domain expertise, and complementary skill sets.
                  </p>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">Key Questions We Ask:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Does the founding team demonstrate deep domain expertise?</li>
                      <li>Is there a balance of technical, business, and operational capabilities?</li>
                      <li>What is the team's track record of execution and resilience?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Criteria 2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-full h-20 bg-green-800 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                    Market
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Market Opportunity</h3>
                  <p className="text-gray-700 mb-3">
                    We assess market size, growth potential, entry barriers, competitive landscape, and timing factors.
                  </p>
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">Key Questions We Ask:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Is there a clear, sizable market need that's currently underserved?</li>
                      <li>What is the total addressable market and serviceable obtainable market?</li>
                      <li>Is the market timing appropriate for this solution?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Criteria 3 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-full h-20 bg-purple-800 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                    Product
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Solution & Technology</h3>
                  <p className="text-gray-700 mb-3">
                    We evaluate product innovation, technical feasibility, intellectual property potential, and competitive advantages.
                  </p>
                  <div className="bg-purple-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">Key Questions We Ask:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Does the solution address the problem in a novel, effective way?</li>
                      <li>What is the technological differentiation and defensibility?</li>
                      <li>Is there a clear product roadmap with well-defined milestones?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Criteria 4 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-full h-20 bg-red-800 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                    Business
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-red-800 mb-2">Business Model & Scalability</h3>
                  <p className="text-gray-700 mb-3">
                    We assess revenue model clarity, unit economics, scaling potential, and operational efficiency.
                  </p>
                  <div className="bg-red-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">Key Questions We Ask:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Is there a clear monetization strategy with realistic pricing assumptions?</li>
                      <li>Do the unit economics work at scale?</li>
                      <li>What are the capital requirements and projected path to profitability?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Criteria 5 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-full h-20 bg-yellow-700 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                    Impact
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-yellow-700 mb-2">Social & Environmental Impact</h3>
                  <p className="text-gray-700 mb-3">
                    We evaluate alignment with sustainable development goals, community benefits, and ethical considerations.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">Key Questions We Ask:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Does the venture address meaningful social or environmental challenges?</li>
                      <li>Is impact integrated into the core business model rather than as an afterthought?</li>
                      <li>Can the impact be measured, verified, and scaled alongside business growth?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to accelerate your venture?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Applications for our next cohort of Participating Companies are now open. Join OUROWN's ecosystem and access our Troup-Based Incubation Model.
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
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticipatingCompanies; 