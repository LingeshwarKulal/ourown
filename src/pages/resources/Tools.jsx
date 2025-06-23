import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsDownload, BsFileEarmarkText, BsTable, BsDisplay } from 'react-icons/bs';

function Tools() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);

  const toolCategories = [
    {
      id: 'business-plans',
      title: 'Business Plan Templates',
      icon: <BsFileEarmarkText className="w-6 h-6" />,
      description: 'Professional templates to help you create comprehensive business plans',
      tools: [
        {
          id: 1,
          title: 'Startup Business Plan Template',
          description: 'A detailed template perfect for new ventures and startup companies',
          format: 'DOCX',
          downloads: 1234,
          thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=800&q=80'
        },
        {
          id: 2,
          title: 'Social Enterprise Plan Template',
          description: 'Specialized template for social impact businesses and nonprofits',
          format: 'DOCX',
          downloads: 856,
          thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: 'financial-models',
      title: 'Financial Model Spreadsheets',
      icon: <BsTable className="w-6 h-6" />,
      description: 'Ready-to-use financial models and calculation templates',
      tools: [
        {
          id: 3,
          title: 'Startup Financial Model',
          description: 'Complete 5-year financial projection model with metrics and charts',
          format: 'XLSX',
          downloads: 2156,
          thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?fit=crop&w=800&q=80'
        },
        {
          id: 4,
          title: 'SaaS Metrics Dashboard',
          description: 'Track key SaaS metrics including MRR, CAC, and LTV',
          format: 'XLSX',
          downloads: 1789,
          thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: 'pitch-decks',
      title: 'Pitch Deck Frameworks',
      icon: <BsDisplay className="w-6 h-6" />,
      description: 'Professional pitch deck templates for investor presentations',
      tools: [
        {
          id: 5,
          title: 'Startup Pitch Deck Template',
          description: 'Modern and clean pitch deck template following best practices',
          format: 'PPTX',
          downloads: 3421,
          thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fit=crop&w=800&q=80'
        },
        {
          id: 6,
          title: 'Series A Pitch Deck Framework',
          description: 'Comprehensive template for Series A fundraising presentations',
          format: 'PPTX',
          downloads: 2567,
          thumbnail: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?fit=crop&w=800&q=80'
        }
      ]
    }
  ];

  const handleDownload = (tool) => {
    setSelectedTool(tool);
    setShowDownloadModal(true);
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
            Tools & Templates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto px-4"
          >
            Download professional templates and tools to accelerate your business
          </motion.p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {toolCategories.map((category) => (
            <div key={category.id} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="text-[#5D3FD3]">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.tools.map((tool) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative h-48">
                      <img
                        src={tool.thumbnail}
                        alt={tool.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-[#5D3FD3]">
                          {tool.format}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {tool.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          {tool.downloads.toLocaleString()} downloads
                        </div>
                        <button
                          onClick={() => handleDownload(tool)}
                          className="flex items-center gap-2 px-4 py-2 bg-[#5D3FD3] text-white rounded-full hover:bg-[#5D3FD3]/90 transition-colors"
                        >
                          <BsDownload className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download Modal */}
      {showDownloadModal && selectedTool && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Download Template</h3>
            <div className="mb-6">
              <h4 className="font-medium mb-2">{selectedTool.title}</h4>
              <p className="text-sm text-gray-500">
                Please enter your email to receive the download link
              </p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#5D3FD3]/20 focus:border-[#5D3FD3]"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowDownloadModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#5D3FD3] text-white rounded-lg hover:bg-[#5D3FD3]/90"
                >
                  Send Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tools; 