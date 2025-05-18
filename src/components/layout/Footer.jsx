import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../../assets/images/logo-ourown.svg';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Log the API URL to verify environment variable is working
console.log('API URL from environment:', import.meta.env.VITE_API_URL);
console.log('Final API URL with fallback:', API_URL);

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about-us' },
        { name: 'Leadership', path: '/about-us/leadership' },
        { name: 'Partners', path: '/about-us/partners' },
        { name: 'Careers', path: '/about-us/careers' }
      ]
    },
    {
      title: 'Ecosystem',
      links: [
        { name: 'Associate Bodies', path: '/ecosystem/associate-bodies' },
        { name: 'Participating Companies', path: '/ecosystem/participating-companies' },
        { name: 'Incubation Model', path: '/ecosystem/troup-based-incubation-model' },
        { name: 'Mentors', path: '/ecosystem/mentorship-network' },
        { name: 'Industry Partners', path: '/ecosystem/industry-partners' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Corporate Partnerships', path: '/solutions-services/corporate-partnerships' },
        { name: 'Startup Incubation', path: '/solutions-services/startup-incubation-packages' },
        { name: 'MSME Support', path: '/solutions-services/msme-support-schemes' },
        { name: 'Wanapreneur Programs', path: '/solutions-services/wanapreneur-programs' },
        { name: 'Digital Transformation', path: '/solutions-services/digital-transformation-training' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog & Articles', path: '/resources/blog' },
        { name: 'Whitepapers', path: '/resources/whitepapers' },
        { name: 'Events & Webinars', path: '/resources/events' },
        { name: 'Tools & Templates', path: '/resources/tools' },
        { name: 'Media Library', path: '/resources/media' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/legal/privacy-policy' },
        { name: 'Terms of Use', path: '/legal/terms-of-use' },
        { name: 'Cookie Policy', path: '/legal/cookie-policy' },
        { name: 'Data Protection', path: '/legal/data-protection-guidelines' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', path: 'https://facebook.com', icon: 'facebook' },
    { name: 'Twitter', path: 'https://twitter.com', icon: 'twitter' },
    { name: 'LinkedIn', path: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Instagram', path: 'https://instagram.com', icon: 'instagram' },
    { name: 'YouTube', path: 'https://youtube.com', icon: 'youtube' }
  ];

  // SVG icons for social media
  const socialIcons = {
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />,
    twitter: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />,
    linkedin: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />,
    instagram: <><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /></>,
    youtube: <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
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
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <motion.img 
                src={logoImage} 
                alt="OUROWN" 
                className="h-14 w-auto object-contain"
                whileHover={{ scale: 1.05 }}
                style={{ filter: "drop-shadow(0px 2px 4px rgba(255,255,255,0.2))" }}
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

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex justify-center">
          <div className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} OUROWN Entrepreneurs Solution India Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 