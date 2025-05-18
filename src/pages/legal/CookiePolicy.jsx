import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../../components/shared/PageHeader';
import CardGrid from '../../components/shared/CardGrid';

const CookiePolicy = () => {
  const sections = [
    {
      id: 1,
      title: 'Introduction',
      content: 'This Cookie Policy explains how OUROWN Entrepreneurs Solution India Ltd. ("OUROWN," "we," "us," or "our") uses cookies and similar tracking technologies on our website (ourown.co.in). By continuing to browse or use our site, you consent to the use of cookies as described below.'
    },
    {
      id: 2,
      title: 'What Are Cookies?',
      content: 'Cookies are small text files placed on your device (computer or mobile) when you visit a website. They enable the site to recognize your device on subsequent visits, remember your preferences, and provide a better user experience.'
    },
    {
      id: 3,
      title: 'Types of Cookies We Use',
      items: [
        'Essential Cookies: Necessary for core site functionality (e.g., maintaining session state, secure areas access). Without these, certain features will not work.',
        'Performance Cookies: Collect anonymous information on how visitors use our site (e.g., pages visited, load times). Used to optimize site performance and user experience.',
        'Functional Cookies: Remember choices you make (e.g., language, region) to personalize your visit and deliver enhanced features.',
        'Marketing & Advertising Cookies: Track browsing habits to deliver relevant ads and measure campaign effectiveness across other sites and platforms.'
      ]
    },
    {
      id: 4,
      title: 'How We Use Cookies',
      items: [
        'Improve Site Functionality: Remember your preferences and login status.',
        'Analyze Usage: Gain insights into site traffic and user behavior to optimize content and navigation.',
        'Deliver Targeted Content: Show relevant promotions and recommendations based on your interests.',
        'Facilitate Analytics: Integrate with third-party analytics tools (e.g., Google Analytics) under strict data-protection agreements.'
      ]
    },
    {
      id: 5,
      title: 'Third-Party Cookies',
      content: 'We may allow trusted third parties—such as analytics providers, advertising partners, and social media platforms—to set cookies on our site. These cookies are governed by the third party\'s own privacy and cookie policies.'
    },
    {
      id: 6,
      title: 'Your Choices & Managing Cookies',
      items: [
        'Cookie Banner Controls: Use the on-screen banner to accept or reject non-essential cookies when you first visit.',
        'Browser Settings: You can disable or delete cookies via your browser\'s settings (e.g., Chrome, Firefox, Safari). Refer to your browser\'s help section for instructions.',
        'Opt-Out Links: To opt out of certain advertising cookies, visit industry-recognized opt-out pages such as youronlinechoices.com.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-900 py-20">
        <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Cookie Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/90"
            >
              Last Updated: April 30, 2025
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          {sections.map((section) => (
          <motion.div 
              key={section.id}
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              {section.content && (
                <p className="text-gray-600 mb-6">{section.content}</p>
              )}
              {section.items && (
                <ul className="list-disc list-inside space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              )}
                </motion.div>
          ))}
                
          {/* Contact Section */}
                <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-6 bg-purple-50 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions or concerns about our use of cookies, please contact:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>Email: privacy@ourown.co.in</li>
              <li>
                Address:<br />
                    OUROWN Entrepreneurs Solution India Ltd.<br />
                    [Full office address]
                  </li>
                </ul>
          </motion.div>

          <p className="text-center text-gray-600 mt-8">
            Thank you for choosing OUROWN.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 