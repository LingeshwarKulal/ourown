import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-blue-300">About Us</Link></li>
              <li><Link to="/ecosystem" className="hover:text-blue-300">Ecosystem</Link></li>
              <li><Link to="/about-us#leadership" className="hover:text-blue-300">Leadership</Link></li>
            </ul>
          </div>

          {/* Engage */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Engage</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions-services" className="hover:text-blue-300">Solutions</Link></li>
              <li><Link to="/contact-get-involved" className="hover:text-blue-300">Get Involved</Link></li>
              <li><Link to="/contact-get-involved" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li><Link to="/resources" className="hover:text-blue-300">Resources</Link></li>
              <li><Link to="/resources#blog" className="hover:text-blue-300">Blog</Link></li>
              <li><Link to="/resources#events" className="hover:text-blue-300">Events</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/legal#privacy" className="hover:text-blue-300">Privacy Policy</Link></li>
              <li><Link to="/legal#terms" className="hover:text-blue-300">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Social */}
        <div className="border-t border-blue-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Newsletter */}
            <div className="mb-4 md:mb-0">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="px-4 py-2 w-64 rounded-l text-gray-900"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-300" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-300" aria-label="YouTube">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-sm text-blue-300 mt-8">
            © 2025 OUROWN Entrepreneurs Solution India Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 