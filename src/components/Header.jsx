import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight text-indigo-700 font-display">
            OUROWN
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className={`px-2 py-1 font-medium ${isActive('/') ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}`}>Home</Link>
            <Link to="/about-us" className={`px-2 py-1 font-medium ${isActive('/about-us') ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}`}>About Us</Link>
            <Link to="/ecosystem" className={`px-2 py-1 font-medium ${isActive('/ecosystem') ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}`}>Ecosystem</Link>
            <Link to="/solutions-services" className={`px-2 py-1 font-medium ${isActive('/solutions-services') ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}`}>Solutions & Services</Link>
            <Link to="/audience-hub" className={`px-2 py-1 font-medium ${isActive('/audience-hub') ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}`}>Audience Hub</Link>
            <Link to="/resources" className={`px-2 py-1 font-medium ${isActive('/resources') ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}`}>Resources</Link>
            <Link to="/contact-get-involved" className={`px-2 py-1 font-medium ${isActive('/contact-get-involved') ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}`}>Contact</Link>
          </nav>

          {/* Partner Portal Button */}
          <div className="hidden md:block">
            <Link 
              to="/partner-portal" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-5 py-2 shadow-md transition-all duration-200"
            >
              Partner Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 pt-4 border-t border-gray-200 md:hidden">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`px-2 py-2 ${isActive('/') ? 'text-indigo-600 font-semibold' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about-us" 
                className={`px-2 py-2 ${isActive('/about-us') ? 'text-indigo-600 font-semibold' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/ecosystem" 
                className={`px-2 py-2 ${isActive('/ecosystem') ? 'text-indigo-600 font-semibold' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ecosystem
              </Link>
              <Link 
                to="/solutions-services" 
                className={`px-2 py-2 ${isActive('/solutions-services') ? 'text-indigo-600 font-semibold' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions & Services
              </Link>
              <Link 
                to="/audience-hub" 
                className={`px-2 py-2 ${isActive('/audience-hub') ? 'text-indigo-600 font-semibold' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Audience Hub
              </Link>
              <Link 
                to="/resources" 
                className={`px-2 py-2 ${isActive('/resources') ? 'text-indigo-600 font-semibold' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/contact-get-involved" 
                className={`px-2 py-2 ${isActive('/contact-get-involved') ? 'text-indigo-600 font-semibold' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/partner-portal" 
                className="bg-indigo-600 text-white font-medium rounded-lg px-4 py-2 inline-block mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Partner Portal
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header; 