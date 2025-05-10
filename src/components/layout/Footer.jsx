import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../../assets/images/logo.jpg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the email to your server/API
    setSubscribeStatus('success');
    setTimeout(() => setSubscribeStatus(null), 3000);
    setEmail('');
  };

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about-us' },
        { name: 'Leadership', path: '/about-us/leadership' },
        { name: 'Partners', path: '/about-us/partners' },
        { name: 'Careers', path: '/about-us/careers' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
      ]
    },
    {
      title: 'Ecosystem',
      links: [
        { name: 'Associate Bodies', path: '/ecosystem/associate-bodies' },
        { name: 'Participating Companies', path: '/ecosystem/participating-companies' },
        { name: 'Incubation Model', path: '/ecosystem/troup-based-incubation-model' },
        { name: 'Mentors', path: '/ecosystem/mentorship-network' },
        { name: 'Industry Partners', path: '/ecosystem/industry-partners' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Corporate Partnerships', path: '/solutions-services/corporate-partnerships' },
        { name: 'Startup Incubation', path: '/solutions-services/startup-incubation-packages' },
        { name: 'MSME Support', path: '/solutions-services/msme-support-schemes' },
        { name: 'Wanapreneur Programs', path: '/solutions-services/wanapreneur-programs' },
        { name: 'Digital Transformation', path: '/solutions-services/digital-transformation-training' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog & Articles', path: '/resources/blog' },
        { name: 'Whitepapers', path: '/resources/whitepapers' },
        { name: 'Events & Webinars', path: '/resources/events' },
        { name: 'Tools & Templates', path: '/resources/tools' },
        { name: 'Media Library', path: '/resources/media' },
      ]
    },
  ];

  const socialLinks = [
    { name: 'Facebook', path: 'https://facebook.com', icon: 'facebook' },
    { name: 'Twitter', path: 'https://twitter.com', icon: 'twitter' },
    { name: 'LinkedIn', path: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Instagram', path: 'https://instagram.com', icon: 'instagram' },
    { name: 'YouTube', path: 'https://youtube.com', icon: 'youtube' },
  ];

  // SVG icons for social media
  const socialIcons = {
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />,
    twitter: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />,
    linkedin: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />,
    instagram: <><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /></>,
    youtube: <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />,
  };

  return (
    <footer className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Background geometric patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-3/4 h-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-[150px] transform -translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-1/2 rounded-full bg-gradient-to-l from-blue-500 to-indigo-500 blur-[150px] transform translate-x-1/3 translate-y-1/4"></div>
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 rounded-full bg-gradient-to-t from-purple-600 to-fuchsia-600 blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and company info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <motion.img 
                src={logoImage} 
                alt="OUROWN" 
                className="h-14 w-auto object-contain"
                whileHover={{ scale: 1.05 }}
                style={{ filter: "brightness(1.2) drop-shadow(0px 2px 4px rgba(255,255,255,0.2))" }}
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
              OUROWN is India's premier entrepreneurship solutions platform, connecting entrepreneurs, investors, corporates, and government bodies to fuel innovation and growth.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/5"
                  aria-label={social.name}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    {socialIcons[social.icon]}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-white/70 hover:text-white text-sm transition-colors inline-block transform translate-x-0 hover:translate-x-1 duration-200 relative"
                    >
                      <span className="inline-block">
                        {link.name}
                        <span className="block h-0.5 w-0 group-hover:w-full bg-white/40 transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="relative bg-gradient-to-r from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10 overflow-hidden shadow-xl">
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 blur-3xl opacity-30"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-500 blur-3xl opacity-30"></div>
          
          <div className="md:flex items-center justify-between relative z-10">
            <div className="mb-6 md:mb-0 md:pr-6">
              <h4 className="text-xl text-white font-bold mb-2">Stay Updated</h4>
              <p className="text-white/80 max-w-md">Subscribe to our newsletter for the latest updates on entrepreneurship news, events, and resources.</p>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative w-full sm:w-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 py-3 pr-10 rounded-lg w-full sm:w-64 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/40" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  className="py-3 px-6 rounded-lg bg-white text-indigo-900 font-medium shadow-xl transition-all duration-300 hover:translate-y-[-2px] hover:shadow-white/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
              
              <AnimatePresence>
                {subscribeStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-400 mt-2 text-sm font-medium"
                  >
                    Successfully subscribed to our newsletter!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OUROWN. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-white/60 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
            <Link to="/sitemap" className="text-white/60 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 