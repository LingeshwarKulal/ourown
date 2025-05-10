import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';

function Ecosystem() {
  // Ecosystem components data
  const ecosystemComponents = [
    {
      title: "Associate Bodies (AOBs & AOCs)",
      description: "Our Associate Operating Bodies (AOBs) and Associate Operational Cells (AOCs) provide structured governance and operational oversight, ensuring every initiative aligns with OUROWN's high standards.",
      features: [
        "Roles & Responsibilities",
        "SOPs & Governance Frameworks",
        "Enrollment Process",
        "Performance Dashboards"
      ],
      link: "/ecosystem/associate-bodies",
      color: "blue",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    },
    {
      title: "Participating Companies (PCs)",
      description: "Our Participating Companies represent diverse sectors and serve as live case studies for the Troup-Based Incubation Model's effectiveness.",
      features: [
        "Company Profiles & Logos",
        "Sector-Wise Case Studies",
        "Success Metrics",
        "Onboarding Criteria"
      ],
      link: "/ecosystem/participating-companies",
      color: "green",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    {
      title: "Troup-Based Incubation Model (TBBIM)",
      description: "TBBIM is our signature methodology: small, cross-functional troupes deliver end-to-end support, from concept validation to growth acceleration.",
      features: [
        "Stage-Gate Breakdown (Ideation → Scaling)",
        "Troup Composition Guidelines",
        "Resource Allocation Matrix",
        "KPI & Review Cycles"
      ],
      link: "/ecosystem/troup-based-incubation",
      color: "purple",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    {
      title: "Mentorship Network",
      description: "Our global roster of mentors accelerates learning through direct guidance, specialized workshops, and peer collaboration.",
      features: [
        "Mentor Directory & Expertise Tags",
        "Mentorship Formats (1:1, Workshops)",
        "Feedback & Ratings System"
      ],
      link: "/ecosystem/mentorship-network",
      color: "yellow",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    },
    {
      title: "Industry Partners",
      description: "We partner with leading corporations, research institutions, and government bodies to co-innovate and scale high-impact solutions.",
      features: [
        "Partnership Benefits",
        "Co-innovation Projects",
        "Partner Testimonials"
      ],
      link: "/ecosystem/industry-partners",
      color: "red",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    {
      title: "Investment Network",
      description: "Our curated investor network spans angel investors, VCs, impact funds, and strategic corporate investors with aligned investment theses.",
      features: [
        "Investor Directory",
        "Investment Thesis Mapping",
        "Demo Day Events",
        "Due Diligence Support"
      ],
      link: "/ecosystem/investment-network",
      color: "indigo",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader 
        title="Our Ecosystem: A Holistic Support Network"
        subtitle="Explore the pillars that empower entrepreneurs through governance, partnerships, and tailored incubation troupes."
      />

      {/* Associate Bodies (AOBs & AOCs) */}
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Associate Bodies (AOBs & AOCs)</h2>
            <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
            
            <p className="text-lg mb-6 text-gray-700">
              Our Associate Operating Bodies (AOBs) and Associate Operational Cells (AOCs) provide structured governance and operational oversight, ensuring every initiative aligns with OUROWN's high standards.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glassmorphism rounded-xl p-6 border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-700">Roles & Responsibilities</h3>
                <p className="text-gray-700">
                  Define strategic direction, approve resource allocations, and monitor troupe performance.
                </p>
              </div>
              
              <div className="glassmorphism rounded-xl p-6 border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-700">SOPs & Governance Frameworks</h3>
                <p className="text-gray-700">
                  Standard Operating Procedures guarantee consistency, risk mitigation, and compliance across all engagements.
                </p>
              </div>
              
              <div className="glassmorphism rounded-xl p-6 border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-700">Enrollment Process</h3>
                <p className="text-gray-700">
                  A transparent application and vetting procedure for new AOB/AOC members, including charter agreements and orientation sessions.
                </p>
              </div>
              
              <div className="glassmorphism rounded-xl p-6 border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-700">Performance Dashboards</h3>
                <p className="text-gray-700">
                  Real-time analytics track key metrics—project milestones, budget utilization, and impact indicators—to inform data-driven decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Participating Companies (PCs) */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Participating Companies (PCs)</h2>
            <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
            
            <p className="text-lg mb-6 text-gray-700">
              Our Participating Companies represent diverse sectors and serve as live case studies for the Troup-Based Incubation Model's effectiveness.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Company Profiles & Logos",
                  description: "Detailed snapshots of each venture's mission, offerings, and brand identity.",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                },
                {
                  title: "Sector-Wise Case Studies",
                  description: "Success stories organized by industry—automotive, IT, IoT, and more—highlighting challenges addressed and results achieved.",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                },
                {
                  title: "Success Metrics",
                  description: "Quantifiable outcomes such as revenue growth, market expansion, and job creation.",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                },
                {
                  title: "Onboarding Criteria",
                  description: "Clear eligibility guidelines and selection benchmarks to ensure alignment with OUROWN's strategic focus areas.",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-700">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Troup-Based Incubation Model (TBBIM) */}
      <div className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full -mr-32 -mt-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full -ml-32 -mb-16 opacity-50"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Troup-Based Incubation Model (TBBIM)</h2>
            <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
            
            <p className="text-lg mb-10 text-gray-700">
              TBBIM is our signature methodology: small, cross-functional troupes deliver end-to-end support, from concept validation to growth acceleration.
            </p>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-lg mb-12">
              <div className="grid grid-cols-5 gap-4 mb-6">
                {['Ideation', 'Validation', 'Setup', 'Growth', 'Scaling'].map((stage, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 rounded-full bg-purple-${index*100 + 100} flex items-center justify-center text-white mx-auto mb-2`}>
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div className="text-sm font-medium text-purple-900">{stage}</div>
                  </div>
                ))}
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-purple-300 to-indigo-500 top-1/2 -z-10"></div>
              </div>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Stage-Gate Breakdown</h3>
                <p className="text-white/90">
                  Five phases—Ideation, Validation, Setup, Growth, Scaling—each with defined deliverables and approval gates.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Troup Composition Guidelines</h3>
                <p className="text-white/90">
                  Best practices for assembling legal, finance, marketing, technology, and operations experts tailored to each venture's needs.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-purple-600 to-indigo-500 rounded-xl p-6 text-white shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Resource Allocation Matrix</h3>
                <p className="text-white/90">
                  A transparent tool mapping available budgets, human capital, and technology assets against project milestones.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-indigo-600 to-purple-500 rounded-xl p-6 text-white shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">KPI & Review Cycles</h3>
                <p className="text-white/90">
                  Monthly and quarterly performance reviews anchored by quantitative KPIs and qualitative feedback loops.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mentorship Network */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Mentorship Network</h2>
            <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
            
            <p className="text-lg mb-6 text-gray-700">
              Our global roster of mentors accelerates learning through direct guidance, specialized workshops, and peer collaboration.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
              <div className="w-full md:w-1/3">
                <div className="aspect-square bg-yellow-100 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-yellow-200 rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-4 border-yellow-300 rounded-full opacity-50"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border-4 border-yellow-200 rounded-full opacity-30"></div>
                  </div>
                  <svg className="w-16 h-16 text-yellow-600 z-10 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 space-y-4">
                <motion.div 
                  className="bg-white rounded-xl shadow p-6 border-b-4 border-yellow-400"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-2 text-yellow-700">Mentor Directory & Expertise Tags</h3>
                  <p className="text-gray-700">
                    Searchable profiles categorized by domain expertise, industry experience, and availability.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white rounded-xl shadow p-6 border-b-4 border-yellow-400"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-2 text-yellow-700">Mentorship Formats (1:1, Workshops)</h3>
                  <p className="text-gray-700">
                    Flexible engagement options—from personalized one-on-one coaching to cohort-based skill-building sessions.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white rounded-xl shadow p-6 border-b-4 border-yellow-400"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-2 text-yellow-700">Feedback & Ratings System</h3>
                  <p className="text-gray-700">
                    Anonymous participant ratings and testimonial highlights ensure continuous improvement and mentor quality control.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Partners */}
      <div className="py-16 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Industry Partners</h2>
            <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
            
            <p className="text-lg mb-6 text-gray-700">
              We partner with leading corporations, research institutions, and government bodies to co-innovate and scale high-impact solutions.
            </p>
            
            <div className="grid grid-cols-1 gap-8 mb-8">
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-red-500 to-pink-600 p-6 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-3 text-red-700">Partnership Benefits</h3>
                    <p className="text-gray-700 mb-4">
                      Access to R&D facilities, pilot programs, co-branding opportunities, and CSR alignment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['R&D Access', 'Pilot Programs', 'Co-branding', 'CSR Alignment'].map((tag, i) => (
                        <span key={i} className="bg-red-50 text-red-600 text-xs font-medium px-2.5 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-pink-500 to-red-600 p-6 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                    </svg>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-3 text-red-700">Co-innovation Projects</h3>
                    <p className="text-gray-700 mb-4">
                      Case examples of joint product development, technology trials, and market pilots.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Product Development', 'Technology Trials', 'Market Pilots', 'Joint Research'].map((tag, i) => (
                        <span key={i} className="bg-red-50 text-red-600 text-xs font-medium px-2.5 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-red-600 to-pink-500 p-6 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-3 text-red-700">Partner Testimonials</h3>
                    <p className="text-gray-700 mb-4">
                      First-hand accounts of collaboration outcomes, ROI metrics, and strategic learnings.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Success Stories', 'ROI Metrics', 'Strategic Learnings', 'Case Studies'].map((tag, i) => (
                        <span key={i} className="bg-red-50 text-red-600 text-xs font-medium px-2.5 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6">Ready to dive deeper?</h2>
              <Link 
                to="/solutions-services" 
                className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-8 py-4 rounded-lg inline-block transition-colors duration-300 shadow-lg"
              >
                Explore Our Solutions & Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem; 