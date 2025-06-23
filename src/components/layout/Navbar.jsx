import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import logoImage from '../../assets/images/logo-ourown.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  // Handle scrolling effect and track active page
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Set active link based on current path
    setActiveLink(location.pathname);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // Add location.pathname as dependency to update on route changes

  const navLinks = [
    { 
      name: 'Home', 
      path: '/',
      dropdown: false
    },
    { 
      name: 'About Us', 
      path: '/about-us',
      dropdown: false
    },
    { 
      name: 'Ecosystem', 
      path: '/ecosystem',
      dropdown: true,
      submenu: [
        { name: 'Associate Bodies', path: '/ecosystem/associate-bodies' },
        { name: 'Participating Companies', path: '/ecosystem/participating-companies' },
        { name: 'Troup-Based Incubation Model', path: '/ecosystem/troup-based-incubation-model' },
        { name: 'Mentorship Network', path: '/ecosystem/mentorship-network' },
        { name: 'Industry Partners', path: '/ecosystem/industry-partners' },
      ]
    },
    { 
      name: 'Solutions & Services', 
      path: '/solutions-services',
      dropdown: true,
      submenu: [
        { name: 'Corporate Partnerships', path: '/solutions-services/corporate-partnerships' },
        { name: 'Government Programs', path: '/solutions-services/government-programs-grants' },
        { name: 'Startup Incubation', path: '/solutions-services/startup-incubation-packages' },
        { name: 'MSME Support', path: '/solutions-services/msme-support-schemes' },
        { name: 'Wanapreneur Programs', path: '/solutions-services/wanapreneur-programs' },
        { name: 'Digital Transformation', path: '/solutions-services/digital-transformation-training' },
      ]
    },
    { 
      name: 'Audience Hub', 
      path: '/audience-hub',
      dropdown: true,
      submenu: [
        { name: 'Industry & Corporate', path: '/audience-hub/industry-corporate' },
        { name: 'Investors & VCs', path: '/audience-hub/investors-vcs' },
        { name: 'Entrepreneurs & Startups', path: '/audience-hub/entrepreneurs-startups' },
        { name: 'Government & NGOs', path: '/audience-hub/government-ngos' },
        { name: 'Consultants & Academics', path: '/audience-hub/consultants-academics' },
      ]
    },
    { 
      name: 'Resources', 
      path: '/resources',
      dropdown: true,
      submenu: [
        { name: 'Blog & Articles', path: '/resources/blog' },
        { name: 'Whitepapers', path: '/resources/whitepapers' },
        { name: 'Events & Webinars', path: '/resources/events' },
        { name: 'Tools & Templates', path: '/resources/tools' },
        { name: 'Media Library', path: '/resources/media' },
      ]
    },
    { 
      name: 'Contact', 
      path: '/contact-get-involved',
      dropdown: false
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md py-2 shadow-lg' 
        : 'bg-gradient-to-r from-indigo-900/40 to-purple-800/40 backdrop-blur-lg py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center py-1 group">
            <motion.img 
              src={logoImage} 
              alt="OUROWN" 
              className={`h-12 md:h-14 w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'brightness-100' : 'brightness-100'
              }`}
              initial={{ opacity: 1 }}
              whileHover={{ 
                scale: 1.02,
                filter: isScrolled ? "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))" : "drop-shadow(0px 2px 4px rgba(255,255,255,0.2))"
              }}
              style={{ 
                filter: isScrolled 
                  ? "drop-shadow(0px 1px 2px rgba(0,0,0,0.05))" 
                  : "drop-shadow(0px 2px 4px rgba(255,255,255,0.1))",
                maxWidth: "180px",
                padding: "2px"
              }} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={link.path}
                  className={`px-3 py-2 rounded-xl text-sm md:text-base font-medium transition-all duration-300 relative overflow-hidden group ${
                    activeLink === link.path || activeLink.startsWith(link.path + '/') 
                      ? 'text-[#6E62FF] font-semibold' 
                      : isScrolled ? 'text-dark-300 hover:text-[#4837E6]' : 'text-white hover:text-white/80'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <motion.span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4837E6] to-[#8A6FFF] transform origin-left`}
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: activeLink === link.path || activeLink.startsWith(link.path + '/') ? 1 : 0 
                    }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                
                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-0 mt-1 py-2 rounded-xl min-w-[240px] border border-indigo-100 overflow-hidden ${
                      isScrolled 
                        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
                        : 'bg-indigo-900/90 backdrop-blur-md shadow-indigo-900/30'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-500/5 to-purple-500/5 opacity-80"></div>
                    {link.submenu.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        to={subItem.path} 
                        className={`block px-4 py-2.5 text-sm relative z-10 transition-all duration-300 ${
                          activeLink === subItem.path
                            ? (isScrolled ? 'bg-indigo-50 text-indigo-700 font-medium' : 'bg-indigo-800/50 text-white font-medium')
                            : (isScrolled ? 'text-dark-300 hover:bg-indigo-50 hover:text-indigo-700' : 'text-white/90 hover:bg-indigo-800/30 hover:text-white')
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          {subItem.name}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block ml-2">
            <Link 
              to="/contact-get-involved/partner-apply" 
              className={`px-5 py-2 rounded-xl font-medium text-sm shadow-xl transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-[#4837E6] to-[#6E62FF] text-white hover:shadow-indigo-300/30 hover:translate-y-[-2px]'
                  : 'bg-white text-indigo-900 hover:bg-white/90 hover:shadow-white/30 hover:translate-y-[-2px]'
              }`}
            >
              <span className="relative bg-gradient-to-r from-[#4837E6] to-[#6E62FF] bg-clip-text">
                Get Started
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="sr-only">Open menu</span>
            <div className="relative w-6 h-5">
              <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-in-out ${
                isScrolled ? 'bg-[#4837E6]' : 'bg-white'
              } ${mobileMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
              
              <span className={`absolute block h-0.5 transform transition-all duration-300 ease-in-out ${
                isScrolled ? 'bg-[#4837E6]' : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0 top-2 w-0' : 'opacity-100 top-2 w-6'}`}></span>
              
              <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-in-out ${
                isScrolled ? 'bg-[#4837E6]' : 'bg-white'
              } ${mobileMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden overflow-hidden ${
              isScrolled 
                ? 'bg-white border-t border-indigo-100 shadow-lg' 
                : 'bg-gradient-to-b from-indigo-900/90 to-purple-900/90 backdrop-blur-md border-t border-white/10'
            }`}
          >
            <div className="container mx-auto px-4 py-3">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <div 
                      className="flex items-center justify-between py-2"
                      onClick={() => link.dropdown && setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    >
                      <Link 
                        to={link.path}
                        className={`font-medium transition-colors ${
                          activeLink === link.path || activeLink.startsWith(link.path + '/')
                            ? (isScrolled ? 'text-indigo-700' : 'text-white font-semibold')
                            : (isScrolled ? 'text-dark-300 hover:text-[#4837E6]' : 'text-white/80 hover:text-white')
                        }`}
                        onClick={(e) => link.dropdown && e.preventDefault()}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <svg 
                          className={`w-4 h-4 transition-transform ${
                            isScrolled ? 'text-[#4837E6]' : 'text-white/80'
                          } ${activeDropdown === link.name ? 'transform rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Mobile Dropdown */}
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`pl-4 ml-2 space-y-1 py-2 ${
                          isScrolled 
                            ? 'border-l-2 border-[#4837E6]/20' 
                            : 'border-l-2 border-white/20'
                        }`}
                      >
                        {link.submenu.map((subItem) => (
                          <Link 
                            key={subItem.name}
                            to={subItem.path} 
                            className={`block py-2 text-sm transition-colors ${
                              activeLink === subItem.path
                                ? (isScrolled ? 'text-indigo-700 font-medium' : 'text-white font-medium')
                                : (isScrolled ? 'text-dark-200 hover:text-[#4837E6]' : 'text-white/70 hover:text-white')
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                
                <div className="pt-3">
                  <Link 
                    to="/contact-get-involved/partner-apply" 
                    className={`block w-full text-center px-4 py-2 rounded-xl font-medium shadow-lg transition-all duration-300 hover:translate-y-[-2px] ${
                      isScrolled
                        ? 'bg-gradient-to-r from-[#4837E6] to-[#6E62FF] text-white hover:shadow-indigo-300/50'
                        : 'bg-white text-indigo-900 hover:bg-white/90 hover:shadow-white/30'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

 