import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsDownload, BsPlayCircle, BsImage, BsFileEarmarkImage } from 'react-icons/bs';

function Media() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const visualGuides = [
    {
      id: 1,
      title: 'TBBIM Process Flow',
      description: 'Visual breakdown of our incubation methodology from intake to scale',
      category: 'Process',
      thumbnail: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'MSME Digital Transformation Roadmap',
      description: 'Step-by-step visualization of the digitalization journey for small businesses',
      category: 'Guide',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Startup Funding Landscape 2024',
      description: 'Overview of the Indian venture capital ecosystem and key funding sources',
      category: 'Infographic',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&q=80'
    }
  ];

  const brandAssets = [
    {
      id: 4,
      title: 'Logo Package',
      description: 'Full logo suite in various formats and color variations',
      format: 'ZIP',
      size: '12.5 MB',
      thumbnail: 'https://images.unsplash.com/photo-1557683316-973673baf926?fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Brand Guidelines',
      description: 'Comprehensive guide for logo usage, colors, typography, and more',
      format: 'PDF',
      size: '8.2 MB',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Icon Library',
      description: 'Collection of custom icons and UI elements',
      format: 'SVG',
      size: '5.8 MB',
      thumbnail: 'https://images.unsplash.com/photo-1554868093-b8e551a39d61?fit=crop&w=800&q=80'
    }
  ];

  const videoSnippets = [
    {
      id: 7,
      title: 'OUROWN Introduction',
      description: 'A brief overview of our ecosystem and mission',
      duration: '2:15',
      views: 1234,
      thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?fit=crop&w=800&q=80'
    },
    {
      id: 8,
      title: 'Success Stories',
      description: 'Testimonials from our successful incubated startups',
      duration: '4:30',
      views: 892,
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?fit=crop&w=800&q=80'
    },
    {
      id: 9,
      title: 'Partner Testimonials',
      description: 'Hear from our corporate and institutional partners',
      duration: '3:45',
      views: 567,
      thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?fit=crop&w=800&q=80'
    }
  ];

  const handleDownload = (asset) => {
    setSelectedAsset(asset);
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
            Media Library
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto px-4"
          >
            Access our collection of visual guides, brand assets, and video content
          </motion.p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Visual Guides Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsImage className="w-6 h-6 text-[#5D3FD3]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Visual Guides</h2>
              <p className="text-gray-600 mt-1">Comprehensive infographics and process visualizations</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visualGuides.map((guide) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48">
                  <img
                    src={guide.thumbnail}
                    alt={guide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-[#5D3FD3]">
                      {guide.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{guide.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                  <button
                    onClick={() => handleDownload(guide)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#5D3FD3] text-white rounded-full hover:bg-[#5D3FD3]/90 transition-colors w-full justify-center"
                  >
                    <BsDownload className="w-4 h-4" />
                    Download Guide
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Brand Assets Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <BsFileEarmarkImage className="w-6 h-6 text-[#5D3FD3]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Brand Assets</h2>
              <p className="text-gray-600 mt-1">Official logos, guidelines, and design resources</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandAssets.map((asset) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48">
                  <img
                    src={asset.thumbnail}
                    alt={asset.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-[#5D3FD3]">
                      {asset.format}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{asset.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{asset.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{asset.size}</span>
                    <button
                      onClick={() => handleDownload(asset)}
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
        </section>

        {/* Video Snippets Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <BsPlayCircle className="w-6 h-6 text-[#5D3FD3]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Video Snippets</h2>
              <p className="text-gray-600 mt-1">Short-form video content showcasing our ecosystem</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoSnippets.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <BsPlayCircle className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/75 px-2 py-1 rounded text-white text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{video.views.toLocaleString()} views</span>
                    <button
                      onClick={() => handleDownload(video)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#5D3FD3] text-white rounded-full hover:bg-[#5D3FD3]/90 transition-colors"
                    >
                      <BsPlayCircle className="w-4 h-4" />
                      Watch Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Download Modal */}
      {showDownloadModal && selectedAsset && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Download Asset</h3>
            <div className="mb-6">
              <h4 className="font-medium mb-2">{selectedAsset.title}</h4>
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

export default Media; 