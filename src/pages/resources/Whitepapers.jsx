import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiDownload, FiShare2, FiCopy, FiBookmark } from 'react-icons/fi';

const Whitepapers = () => {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const topics = [
    { id: 'all', label: 'All Topics' },
    { id: 'innovation', label: 'Innovation & Strategy' },
    { id: 'digital', label: 'Digital Transformation' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'policy', label: 'Policy & Regulation' }
  ];

  const whitepapers = [
    {
      id: 1,
      title: 'Digital Innovation Ecosystem Framework 2024',
      topic: 'innovation',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=800&q=80',
      description: 'A comprehensive framework for building and scaling digital innovation ecosystems in the modern era.',
      author: 'OUROWN Research Team',
      date: 'Feb 2024',
      pages: 42,
      fileSize: '3.8 MB',
      citations: 156,
      downloads: 2890
    },
    {
      id: 2,
      title: 'Sustainable Tech Practices: Case Study Collection',
      topic: 'sustainability',
      thumbnail: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?fit=crop&w=800&q=80',
      description: 'Analysis of successful sustainable technology implementations across various industries.',
      author: 'Environmental Tech Division',
      date: 'Jan 2024',
      pages: 68,
      fileSize: '5.2 MB',
      citations: 89,
      downloads: 1567
    },
    {
      id: 3,
      title: 'Policy Impact on Tech Startups: 2024 Analysis',
      topic: 'policy',
      thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?fit=crop&w=800&q=80',
      description: 'Comprehensive analysis of how recent policy changes affect technology startups.',
      author: 'Policy Research Group',
      date: 'Feb 2024',
      pages: 35,
      fileSize: '2.9 MB',
      citations: 42,
      downloads: 986
    }
  ];

  const handleDownload = (whitepaper) => {
    // In a real implementation, check authentication and handle gated content
    setShowLoginModal(true);
  };

  const handleCitation = (whitepaper) => {
    const citation = `${whitepaper.author} (${whitepaper.date}). ${whitepaper.title}. OUROWN Research.`;
    navigator.clipboard.writeText(citation);
    // You would typically show a toast notification here
  };

  const filteredWhitepapers = whitepapers.filter(paper => {
    const matchesTopic = selectedTopic === 'all' || paper.topic === selectedTopic;
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTopic && matchesSearch;
  });

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
            Whitepapers & Case Studies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto px-4"
          >
            In-depth research and analysis from industry experts
          </motion.p>
        </div>
      </div>

      {/* Search and Topics */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search whitepapers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-[#5D3FD3] focus:ring-2 focus:ring-[#5D3FD3]/20 transition-all duration-300"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap justify-center md:justify-end">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedTopic === topic.id
                    ? 'bg-[#5D3FD3] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Whitepapers Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWhitepapers.map((paper) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48">
                <img
                  src={paper.thumbnail}
                  alt={paper.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => handleCitation(paper)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                    title="Copy Citation"
                  >
                    <FiCopy className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleDownload(paper)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                    title="Download PDF"
                  >
                    <FiDownload className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#5D3FD3]/10 text-[#5D3FD3] rounded-full text-sm font-medium">
                    {topics.find(t => t.id === paper.topic)?.label}
                  </span>
                  <span className="text-sm text-gray-500">{paper.pages} pages</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {paper.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {paper.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{paper.author}</span>
                  <span>{paper.date}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FiBookmark className="w-4 h-4" />
                    <span>{paper.citations} citations</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <FiDownload className="w-4 h-4" />
                    <span>{paper.downloads} downloads</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Login Required</h3>
            <p className="text-gray-600 mb-6">
              Please log in or create an account to download this whitepaper.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowLoginModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <Link
                to="/login"
                className="flex-1 px-4 py-2 bg-[#5D3FD3] text-white rounded-lg hover:bg-[#5D3FD3]/90"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Whitepapers; 