import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../../components/shared/PageHeader';
import CardGrid from '../../components/shared/CardGrid';

const CookiePolicy = () => {
  // Cookie types data for the CardGrid
  const cookieTypesData = [
    {
      title: "Necessary Cookies",
      description: "These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      title: "Functional Cookies",
      description: "These cookies enhance the functionality and personalization of your website experience. They may be set by us or by third-party providers whose services we've added to our pages.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They allow us to measure and improve website performance.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    },
    {
      title: "Marketing Cookies",
      description: "These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad. They share this information with other advertisers or organizations.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHeader 
        title="Cookie Policy"
        subtitle="Last Updated: April 30, 2025"
      />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-primary hover:text-primary-dark font-medium transition duration-300 ease-in-out">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/legal" className="text-primary hover:text-primary-dark font-medium transition duration-300 ease-in-out">Legal</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 font-medium">Cookie Policy</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="py-12 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <section className="mb-12">
              <h2 className="section-title mb-6">Understanding Our Cookie Usage</h2>
              <div className="fancy-separator mb-8 mx-auto max-w-xs"></div>
              
              <p className="text-lg text-gray-700 mb-6">
                At OUROWN, we use cookies and similar technologies to enhance your browsing experience, personalize content, analyze traffic patterns, and provide certain functionality on our website. This Cookie Policy explains how we use these technologies, what types of cookies we use, and how you can manage your preferences.
              </p>
              
              <div className="glassmorphism p-6 rounded-xl mb-8">
                <h3 className="font-bold text-xl mb-3">What Are Cookies?</h3>
                <p className="text-gray-700">
                  Cookies are small text files that websites place on your device (computer, tablet, or mobile) when you visit. They allow the website to recognize your device and remember information about your visit, such as your preferred language, login information, and other settings. This makes your next visit easier and enhances the site's functionality.
                </p>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Types of Cookies We Use</h2>
              
              <CardGrid 
                items={cookieTypesData} 
                columns={2}
                cardType="feature" 
              />
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">How We Use Cookies</h2>
              <div className="card p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  We use cookies for various purposes, including:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-700">
                  <li>Authenticating users and keeping you logged in to secure areas of our website</li>
                  <li>Storing your preferences and settings to enhance user experience</li>
                  <li>Gathering analytics data to help us understand how visitors use our website</li>
                  <li>Improving our website's performance and functionality</li>
                  <li>Personalizing content and recommendations based on your interests</li>
                  <li>Enabling certain interactive features like forms and chat functions</li>
                  <li>Facilitating social sharing and integration with social media platforms</li>
                </ul>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Third-Party Cookies</h2>
              <div className="bg-gradient-glass p-6 rounded-xl mb-8">
                <p className="text-gray-800 mb-4">
                  Some cookies are placed by third parties on our website. These third parties may include:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-800">
                  <li><strong>Analytics providers</strong> (like Google Analytics) to help us understand how visitors engage with our site</li>
                  <li><strong>Social media platforms</strong> when you use social sharing buttons or log in using social media credentials</li>
                  <li><strong>Service providers</strong> who help us deliver certain functionality like chat support or forms</li>
                </ul>
                <p className="text-gray-800 mt-4">
                  These third parties may use cookies, web beacons, and similar technologies to collect information about your use of our website and other websites. They use this information to provide measurement services and target advertisements.
                </p>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Managing Your Cookie Preferences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className="card p-6 card-lift"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-bold text-xl mb-3">Browser Settings</h3>
                  <p className="text-gray-700">
                    Most web browsers allow you to manage your cookie preferences through their settings. You can:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li>Delete cookies from your device</li>
                    <li>Block cookies by default</li>
                    <li>Allow cookies from specific websites</li>
                    <li>Block third-party cookies</li>
                    <li>Clear cookies when you close your browser</li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  className="card p-6 card-lift"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-bold text-xl mb-3">Cookie Consent Tool</h3>
                  <p className="text-gray-700">
                    We provide a cookie consent management tool when you first visit our website, allowing you to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your preferences by category</li>
                    <li>Update your preferences at any time through our footer link</li>
                  </ul>
                </motion.div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Please note:</strong> If you choose to block certain cookies, some features of our website may not function properly, and your experience may be impacted.
                </p>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Changes to Our Cookie Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised policy on this page. We encourage you to periodically review this page for the latest information on our cookie practices.
              </p>
              <p className="text-gray-700">
                The "Last Updated" date at the top of this policy indicates when it was last revised.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <div className="glassmorphism p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <ul className="list-none space-y-2 text-gray-700">
                  <li><strong>Email:</strong> privacy@ourown.co.in</li>
                  <li>
                    <strong>Mailing Address:</strong><br />
                    OUROWN Entrepreneurs Solution India Ltd.<br />
                    [Full office address]
                  </li>
                </ul>
              </div>
            </section>
            
            <div className="text-center py-6">
              <Link 
                to="/legal/privacy-policy" 
                className="btn-primary inline-flex items-center mx-auto"
              >
                <span>View Our Privacy Policy</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 