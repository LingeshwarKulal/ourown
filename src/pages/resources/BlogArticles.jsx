import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, gradients, typography, spacing, components, animations } from '../../utils/theme';

const BlogArticles = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'tech', label: 'Tech' },
    { id: 'policy', label: 'Policy' }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of Innovation Ecosystems',
      category: 'ecosystem',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      author: {
        name: 'Dr. Sarah Chen',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        role: 'Innovation Strategist'
      },
      date: 'Feb 15, 2024',
      readTime: '8 min',
      tags: ['Innovation', 'Strategy', 'Future']
    },
    {
      id: 2,
      title: 'Emerging Technologies Shaping 2024',
      category: 'tech',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      author: {
        name: 'Raj Patel',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        role: 'Tech Analyst'
      },
      date: 'Feb 12, 2024',
      readTime: '6 min',
      tags: ['Technology', 'AI', 'Innovation']
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: 'Policy Changes Affecting Startups',
      category: 'policy',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      author: {
        name: 'Emma Wilson',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        role: 'Policy Advisor'
      },
      date: 'Feb 10, 2024',
      readTime: '5 min',
      tags: ['Policy', 'Startups', 'Regulation']
    },
    {
      id: 4,
      title: 'Building Sustainable Tech Communities',
      category: 'ecosystem',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
      author: {
        name: 'Michael Chang',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        role: 'Community Lead'
      },
      date: 'Feb 8, 2024',
      readTime: '7 min',
      tags: ['Community', 'Sustainability', 'Tech']
    },
    {
      id: 5,
      title: 'AI Ethics in Modern Development',
      category: 'tech',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      author: {
        name: 'Lisa Anderson',
        avatar: 'https://randomuser.me/api/portraits/women/95.jpg',
        role: 'AI Researcher'
      },
      date: 'Feb 5, 2024',
      readTime: '6 min',
      tags: ['AI', 'Ethics', 'Technology']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-900 h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
        <div className="text-center z-10">
          <motion.h1 
            {...animations.fadeIn}
            className="font-display text-6xl font-bold text-white mb-6 tracking-tight"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
          >
            Blog & Articles
          </motion.h1>
          <motion.p 
            {...animations.fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto px-4"
          >
            Discover insights on innovation, technology, and policy from industry experts
          </motion.p>
        </div>
      </div>

      {/* Search and Categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Search Bar */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
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

          {/* Category Filters */}
          <div className="flex gap-3 flex-wrap justify-center md:justify-end">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#5D3FD3] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <motion.article
              key={post.id}
              {...animations.fadeIn}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium text-[#5D3FD3]">
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 hover:text-[#5D3FD3] transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/40x40';
                    }}
                  />
                  <div>
                    <p className="font-medium text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime} read</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <motion.article
              key={post.id}
              {...animations.fadeIn}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300';
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#5D3FD3]/10 text-[#5D3FD3] rounded-full text-sm font-medium">
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime} read</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 hover:text-[#5D3FD3] transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/32x32';
                    }}
                  />
                  <span className="text-sm text-gray-700">{post.author.name}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArticles; 