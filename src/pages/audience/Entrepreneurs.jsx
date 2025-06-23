import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsLightbulb, BsCheckCircle, BsPeople, BsArrowRight, BsStar, BsChatDots } from 'react-icons/bs';

function Entrepreneurs() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [checklist, setChecklist] = useState({
    businessPlan: false,
    financials: false,
    pitch: false,
    market: false,
    team: false,
    legal: false,
    ip: false,
    metrics: false
  });

  const successStories = [
    {
      id: 1,
      company: 'TechFlow Solutions',
      founder: 'Priya Sharma',
      category: 'SaaS',
      funding: '$2.5M Seed Round',
      impact: 'Revolutionizing workflow automation for SMEs',
      achievement: '10x growth in 18 months',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=800&q=80',
      logo: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?fit=crop&w=100&q=80'
    },
    {
      id: 2,
      company: 'GreenTech Innovations',
      founder: 'Marcus Chen',
      category: 'CleanTech',
      funding: '$5M Series A',
      impact: 'Sustainable energy solutions for urban areas',
      achievement: 'Expanded to 5 countries',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?fit=crop&w=800&q=80',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?fit=crop&w=100&q=80'
    },
    {
      id: 3,
      company: 'HealthAI Labs',
      founder: 'Sarah Martinez',
      category: 'HealthTech',
      funding: '$3.8M Seed Round',
      impact: 'AI-powered diagnostic solutions',
      achievement: 'FDA approval in 12 months',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?fit=crop&w=800&q=80',
      logo: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?fit=crop&w=100&q=80'
    }
  ];

  const categories = ['All', 'SaaS', 'CleanTech', 'HealthTech', 'FinTech'];

  const checklistItems = [
    {
      id: 'businessPlan',
      title: 'Business Plan',
      description: 'Comprehensive business plan with clear vision and strategy',
      tips: [
        'Include detailed market analysis',
        'Clear revenue model',
        'Growth strategy'
      ]
    },
    {
      id: 'financials',
      title: 'Financial Projections',
      description: 'Detailed financial models and projections',
      tips: [
        'Cash flow forecasts',
        'Revenue projections',
        'Cost structure'
      ]
    },
    {
      id: 'pitch',
      title: 'Pitch Deck',
      description: 'Compelling pitch deck that tells your story',
      tips: [
        'Clear problem statement',
        'Unique value proposition',
        'Market opportunity'
      ]
    },
    {
      id: 'market',
      title: 'Market Research',
      description: 'In-depth market analysis and validation',
      tips: [
        'Target market size',
        'Competitor analysis',
        'Market trends'
      ]
    },
    {
      id: 'team',
      title: 'Team Structure',
      description: 'Strong team with relevant expertise',
      tips: [
        'Key roles filled',
        'Advisory board',
        'Skills matrix'
      ]
    },
    {
      id: 'legal',
      title: 'Legal Documentation',
      description: 'All necessary legal documents in place',
      tips: [
        'Company registration',
        'Contracts template',
        'IP protection'
      ]
    },
    {
      id: 'ip',
      title: 'IP & Assets',
      description: 'Protected intellectual property and assets',
      tips: [
        'Patents filed',
        'Trademarks registered',
        'Trade secrets documented'
      ]
    },
    {
      id: 'metrics',
      title: 'Key Metrics',
      description: 'Tracking and reporting key performance indicators',
      tips: [
        'Growth metrics',
        'Customer acquisition cost',
        'Lifetime value'
      ]
    }
  ];

  const communityForums = [
    {
      id: 1,
      title: 'Startup Discussion Hub',
      description: 'Connect with fellow entrepreneurs and share experiences',
      members: '5,000+',
      topics: ['Ideation', 'Growth', 'Funding'],
      link: '#'
    },
    {
      id: 2,
      title: 'Tech Founders Network',
      description: 'Technical discussions and problem-solving community',
      members: '3,200+',
      topics: ['Development', 'Architecture', 'Scale'],
      link: '#'
    },
    {
      id: 3,
      title: 'Investor Connect',
      description: 'Forum for startup-investor networking and discussions',
      members: '2,800+',
      topics: ['Pitch Practice', 'Due Diligence', 'Term Sheets'],
      link: '#'
    }
  ];

  const handleChecklistToggle = (id) => {
    setChecklist(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const calculateProgress = () => {
    const totalItems = Object.keys(checklist).length;
    const completedItems = Object.values(checklist).filter(Boolean).length;
    return Math.round((completedItems / totalItems) * 100);
  };

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
            Entrepreneurs & Startups
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto px-4"
          >
            Resources and support to help you build and scale your startup
          </motion.p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Success Stories Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsStar className="w-6 h-6 text-[#5D3FD3]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Success Stories Gallery</h2>
              <p className="text-gray-600 mt-1">Inspiring journeys of startups that scaled with us</p>
            </div>
          </div>

          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-[#5D3FD3] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories
              .filter(story => activeFilter === 'All' || story.category === activeFilter)
              .map((story) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-48">
                    <img
                      src={story.image}
                      alt={story.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-[#5D3FD3]">
                        {story.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={story.logo}
                        alt={`${story.company} logo`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900">{story.company}</h3>
                        <p className="text-sm text-gray-600">{story.founder}</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-green-600">
                        <span className="font-semibold">Funding:</span>
                        <span className="ml-2">{story.funding}</span>
                      </div>
                      <p className="text-gray-600">{story.impact}</p>
                      <p className="text-[#5D3FD3] font-medium">{story.achievement}</p>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 text-[#5D3FD3] rounded-lg hover:bg-gray-100 transition-colors">
                      Read Full Story
                      <BsArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Funding Readiness Checklist Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsCheckCircle className="w-6 h-6 text-[#5D3FD3]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Funding Readiness Checklist</h2>
              <p className="text-gray-600 mt-1">Ensure you're prepared for your funding journey</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-medium text-gray-900">Overall Progress</span>
                <span className="text-[#5D3FD3] font-bold">{calculateProgress()}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#5D3FD3] transition-all duration-300"
                  style={{ width: `${calculateProgress()}%` }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {checklistItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={checklist[item.id]}
                        onChange={() => handleChecklistToggle(item.id)}
                        className="w-5 h-5 rounded border-gray-300 text-[#5D3FD3] focus:ring-[#5D3FD3]"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.tips.map((tip, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-[#5D3FD3] rounded-full mr-2" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Forums Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <BsChatDots className="w-6 h-6 text-[#5D3FD3]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Community Forum Links</h2>
              <p className="text-gray-600 mt-1">Connect with fellow entrepreneurs and mentors</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityForums.map((forum) => (
              <motion.div
                key={forum.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{forum.title}</h3>
                <p className="text-gray-600 mb-4">{forum.description}</p>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-[#5D3FD3]">Active Members</span>
                    <p className="text-gray-900 font-bold">{forum.members}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#5D3FD3]">Popular Topics</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {forum.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <a
                  href={forum.link}
                  className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#5D3FD3] text-white rounded-lg hover:bg-[#5D3FD3]/90 transition-colors"
                >
                  Join Discussion
                  <BsArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Entrepreneurs; 