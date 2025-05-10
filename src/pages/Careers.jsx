import { Link } from 'react-router-dom';

function Careers() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl">Build your career at OUROWN and help shape the future of entrepreneurship ecosystems.</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">Careers</span>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              At OUROWN, we're building the next generation of entrepreneurial ecosystems that drive innovation, 
              economic growth, and social impact. Join a diverse team of passionate professionals committed to 
              transforming how businesses start, grow, and succeed.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Meaningful Work</h3>
                <p className="text-gray-700">
                  Make a tangible impact by supporting entrepreneurs and businesses that are solving real-world challenges.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Growth Opportunities</h3>
                <p className="text-gray-700">
                  Develop your skills in a dynamic environment with continuous learning and advancement pathways.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Collaborative Culture</h3>
                <p className="text-gray-700">
                  Work alongside diverse, passionate professionals in a supportive environment that values every voice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Culture Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
                <p className="text-gray-700 mb-4">
                  We've built a workplace where innovation thrives, collaboration is celebrated, and everyone has the opportunity to make an impact.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Entrepreneurial mindset that encourages ownership</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Inclusive environment that celebrates diversity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Results-oriented approach with flexible work options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Continuous learning through structured development programs</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-600 h-32 rounded-lg"></div>
                  <div className="bg-blue-800 h-32 rounded-lg"></div>
                  <div className="bg-indigo-600 h-32 rounded-lg"></div>
                  <div className="bg-blue-400 h-32 rounded-lg"></div>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">Our team collaborating at the annual strategy retreat</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Current Openings</h2>
            
            {/* Job 1 */}
            <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-blue-50 p-6">
                <h3 className="text-xl font-bold text-blue-900">Ecosystem Development Manager</h3>
                <div className="flex flex-wrap mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">Full-time</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">Mumbai</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">Senior Level</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Lead our ecosystem development initiatives, working with partners, startups, and stakeholders to create thriving entrepreneurial communities.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Develop and execute ecosystem growth strategies</li>
                    <li>Build and nurture partner relationships</li>
                    <li>Design and implement community engagement programs</li>
                    <li>Monitor ecosystem health metrics and KPIs</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>5+ years experience in ecosystem development or similar roles</li>
                    <li>Strong network in the entrepreneurship/innovation space</li>
                    <li>Excellent project management and communication skills</li>
                    <li>Experience with partnership development and stakeholder management</li>
                  </ul>
                </div>
                <Link to="/job/ecosystem-development-manager" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                  View Details & Apply
                </Link>
              </div>
            </div>
            
            {/* Job 2 */}
            <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-green-50 p-6">
                <h3 className="text-xl font-bold text-green-900">Troup Lead - Technology</h3>
                <div className="flex flex-wrap mt-2">
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">Full-time</span>
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">Bengaluru</span>
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">Mid-Senior Level</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Lead a cross-functional troupe providing technical expertise and guidance to startups in our incubation program.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Provide technical mentorship to startups</li>
                    <li>Lead technology assessment and roadmapping</li>
                    <li>Facilitate connections with relevant tech resources</li>
                    <li>Support product development and scaling challenges</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>7+ years experience in technology development or leadership</li>
                    <li>Strong understanding of modern tech stacks and architectures</li>
                    <li>Previous startup or mentorship experience preferred</li>
                    <li>Excellent communication and coaching abilities</li>
                  </ul>
                </div>
                <Link to="/job/troup-lead-technology" className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded">
                  View Details & Apply
                </Link>
              </div>
            </div>
            
            {/* Job 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-purple-50 p-6">
                <h3 className="text-xl font-bold text-purple-900">Impact Assessment Specialist</h3>
                <div className="flex flex-wrap mt-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">Full-time</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">Delhi NCR</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">Mid Level</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Design and implement frameworks to measure and communicate the social, economic, and environmental impact of our ecosystem initiatives.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Develop impact measurement frameworks and KPIs</li>
                    <li>Design and conduct impact assessments</li>
                    <li>Create impact reports and visualizations</li>
                    <li>Train teams on impact measurement best practices</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>3+ years experience in impact assessment or related fields</li>
                    <li>Strong analytical and data visualization skills</li>
                    <li>Experience with impact frameworks (IRIS+, SDGs, etc.)</li>
                    <li>Excellent communication and stakeholder management abilities</li>
                  </ul>
                </div>
                <Link to="/job/impact-assessment-specialist" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded">
                  View Details & Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Benefits & Perks</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Competitive Compensation</h3>
                <p className="text-gray-700">
                  Salary packages benchmarked to industry standards with performance-based bonuses.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Comprehensive Health Coverage</h3>
                <p className="text-gray-700">
                  Full medical, dental, and vision insurance for you and your dependents.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Flexible Work Arrangements</h3>
                <p className="text-gray-700">
                  Hybrid work options with flexible scheduling to support work-life balance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Modern Office Spaces</h3>
                <p className="text-gray-700">
                  Collaborative workspaces designed for productivity and creativity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Professional Development</h3>
                <p className="text-gray-700">
                  Annual learning stipend and dedicated time for skill development.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Generous Leave Policy</h3>
                <p className="text-gray-700">
                  Paid time off, parental leave, and volunteering days to support your wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Application Process</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-600 ml-8 md:ml-0"></div>
              
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row mb-12 relative">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">1. Application</h3>
                  <p className="text-gray-700">
                    Submit your application through our careers portal with your resume and a brief cover letter explaining why you're interested in OUROWN.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-xl -ml-8 md:-ml-8 z-10">1</div>
                <div className="md:w-1/2 md:pl-12">
                  <p className="mt-8 md:mt-0 text-gray-600 ml-16 md:ml-0">
                    <span className="font-semibold">Timeline:</span> We review all applications within 1-2 weeks
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row mb-12 relative">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 order-1 md:order-1">
                  <p className="text-gray-600 mt-8 md:mt-0">
                    <span className="font-semibold">Format:</span> 30-45 minute video call with a hiring manager
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-xl -ml-8 md:-ml-8 z-10">2</div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
                  <h3 className="text-xl font-bold text-blue-900 mb-2 ml-16 md:ml-0">2. Initial Interview</h3>
                  <p className="text-gray-700 ml-16 md:ml-0">
                    Discuss your experience, skills, and alignment with OUROWN's mission and values with a member of our team.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row mb-12 relative">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">3. Skills Assessment</h3>
                  <p className="text-gray-700">
                    Complete a role-specific assessment that helps us understand how you approach problems relevant to the position.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-xl -ml-8 md:-ml-8 z-10">3</div>
                <div className="md:w-1/2 md:pl-12">
                  <p className="mt-8 md:mt-0 text-gray-600 ml-16 md:ml-0">
                    <span className="font-semibold">Format:</span> Take-home assignment or in-person exercise depending on the role
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row mb-12 relative">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 order-1 md:order-1">
                  <p className="text-gray-600 mt-8 md:mt-0">
                    <span className="font-semibold">Format:</span> Series of interviews with team members and leadership
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-xl -ml-8 md:-ml-8 z-10">4</div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
                  <h3 className="text-xl font-bold text-blue-900 mb-2 ml-16 md:ml-0">4. Team Interviews</h3>
                  <p className="text-gray-700 ml-16 md:ml-0">
                    Meet with potential teammates and cross-functional colleagues to evaluate technical skills and cultural fit.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row relative">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">5. Offer & Onboarding</h3>
                  <p className="text-gray-700">
                    Receive and review your offer, followed by a comprehensive onboarding program to set you up for success.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-xl -ml-8 md:-ml-8 z-10">5</div>
                <div className="md:w-1/2 md:pl-12">
                  <p className="mt-8 md:mt-0 text-gray-600 ml-16 md:ml-0">
                    <span className="font-semibold">Timeline:</span> Offers typically extended within 1 week of final interviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to grow with us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our team and help build the future of entrepreneurship ecosystems. Check out our current openings and apply today.
          </p>
          <Link 
            to="#current-openings" 
            className="bg-white text-blue-900 hover:bg-blue-100 font-bold px-8 py-4 rounded-lg inline-block"
          >
            View Open Positions
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Careers; 