import { Link } from 'react-router-dom';

function PressRoom() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Press Room</h1>
            <p className="text-xl">The latest news, announcements, and media resources about OUROWN's ecosystem.</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">Press Room</span>
          </div>
        </div>
      </div>

      {/* Press Releases Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
            
            {/* Press Release 1 */}
            <div className="mb-10 border-b border-gray-200 pb-10">
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">Announcement</span>
                <span>April 15, 2023</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">OUROWN Launches ₹100 Crore Fund to Support Climate Tech Startups</h3>
              <p className="text-gray-700 mb-4">
                OUROWN today announced the launch of a ₹100 crore fund dedicated to supporting early-stage climate tech startups across India. The fund will focus on innovations in renewable energy, sustainable agriculture, water conservation, and circular economy solutions.
              </p>
              <div className="flex items-center">
                <Link to="/press/climate-tech-fund" className="text-blue-600 font-medium hover:text-blue-800">
                  Read Full Release
                </Link>
                <span className="mx-3 text-gray-400">|</span>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
                  Download Media Kit
                </a>
              </div>
            </div>
            
            {/* Press Release 2 */}
            <div className="mb-10 border-b border-gray-200 pb-10">
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mr-3">Partnership</span>
                <span>March 2, 2023</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">OUROWN Partners with Government of Karnataka for Rural Innovation Hub</h3>
              <p className="text-gray-700 mb-4">
                OUROWN has signed a Memorandum of Understanding (MoU) with the Government of Karnataka to establish a Rural Innovation Hub that will support entrepreneurs addressing challenges in agriculture, healthcare, and education in rural communities.
              </p>
              <div className="flex items-center">
                <Link to="/press/karnataka-partnership" className="text-blue-600 font-medium hover:text-blue-800">
                  Read Full Release
                </Link>
                <span className="mx-3 text-gray-400">|</span>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
                  Download Media Kit
                </a>
              </div>
            </div>
            
            {/* Press Release 3 */}
            <div className="mb-10">
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-2">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium mr-3">Milestone</span>
                <span>January 18, 2023</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">OUROWN Ecosystem Ventures Raise ₹500 Crore in 2022</h3>
              <p className="text-gray-700 mb-4">
                Startups incubated in the OUROWN ecosystem raised a combined ₹500 crore in funding during 2022, marking a 75% increase from the previous year and demonstrating the efficacy of the Troup-Based Incubation Model.
              </p>
              <div className="flex items-center">
                <Link to="/press/2022-funding-milestone" className="text-blue-600 font-medium hover:text-blue-800">
                  Read Full Release
                </Link>
                <span className="mx-3 text-gray-400">|</span>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
                  Download Media Kit
                </a>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/press/archive" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg inline-flex items-center">
                View All Press Releases
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Media Coverage Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Media Coverage</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Coverage 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-10 bg-gray-200 flex items-center justify-center rounded">
                    <span className="font-bold text-gray-700 text-sm">ET</span>
                  </div>
                  <span className="text-sm text-gray-600">March 28, 2023</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">The Economic Times</h3>
                <p className="text-gray-700 mb-4">
                  "OUROWN's Innovative Approach to Startup Incubation Sets New Industry Standard"
                </p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read Article
                </a>
              </div>
              
              {/* Coverage 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-10 bg-gray-200 flex items-center justify-center rounded">
                    <span className="font-bold text-gray-700 text-sm">YS</span>
                  </div>
                  <span className="text-sm text-gray-600">February 15, 2023</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">YourStory</h3>
                <p className="text-gray-700 mb-4">
                  "How OUROWN is Revolutionizing the Entrepreneurship Ecosystem in India"
                </p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read Article
                </a>
              </div>
              
              {/* Coverage 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-10 bg-gray-200 flex items-center justify-center rounded">
                    <span className="font-bold text-gray-700 text-sm">TC</span>
                  </div>
                  <span className="text-sm text-gray-600">December 12, 2022</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">TechCrunch</h3>
                <p className="text-gray-700 mb-4">
                  "OUROWN's Troup-Based Model Shows Promising Results for Early-Stage Startups"
                </p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read Article
                </a>
              </div>
              
              {/* Coverage 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-10 bg-gray-200 flex items-center justify-center rounded">
                    <span className="font-bold text-gray-700 text-sm">BW</span>
                  </div>
                  <span className="text-sm text-gray-600">November 5, 2022</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Business World</h3>
                <p className="text-gray-700 mb-4">
                  "OUROWN Founder on Building Sustainable Entrepreneurship Ecosystems"
                </p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Media Resources */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Media Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Brand Assets */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-blue-50 p-6">
                  <h3 className="text-xl font-bold text-blue-900">Brand Assets</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Download our official logos, brand guidelines, and visual assets for use in press coverage and partner communications.
                  </p>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded inline-block">
                    Download Brand Kit
                  </a>
                </div>
              </div>
              
              {/* Executive Bios */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-blue-50 p-6">
                  <h3 className="text-xl font-bold text-blue-900">Executive Bios</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Access professional biographies and high-resolution images of OUROWN's leadership team for media use.
                  </p>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded inline-block">
                    View Leadership Profiles
                  </a>
                </div>
              </div>
              
              {/* Fact Sheet */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-blue-50 p-6">
                  <h3 className="text-xl font-bold text-blue-900">Fact Sheet</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Key facts and figures about OUROWN's ecosystem, impact metrics, and organizational milestones.
                  </p>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded inline-block">
                    Download Fact Sheet
                  </a>
                </div>
              </div>
              
              {/* Media Contact */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-blue-50 p-6">
                  <h3 className="text-xl font-bold text-blue-900">Media Contact</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    For press inquiries, interview requests, or additional information, please contact our media relations team.
                  </p>
                  <div className="mb-4">
                    <p className="font-semibold">Priya Sharma</p>
                    <p className="text-gray-700">Director of Communications</p>
                    <p className="text-gray-700">
                      <a href="mailto:press@ourown.org" className="text-blue-600 hover:text-blue-800">press@ourown.org</a>
                    </p>
                    <p className="text-gray-700">+91 98765 43210</p>
                  </div>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                    Submit Media Request
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg mb-8">
              Subscribe to our press mailing list to receive the latest announcements and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg bg-white text-gray-900 w-full sm:w-96"
              />
              <button className="bg-blue-600 hover:bg-blue-700 border border-blue-600 text-white font-bold py-3 px-6 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressRoom; 