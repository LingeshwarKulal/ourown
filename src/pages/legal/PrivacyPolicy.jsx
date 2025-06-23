import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../../components/shared/PageHeader';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 1,
      title: 'Introduction',
      content: 'Welcome to OUROWN Entrepreneurs Solution India Ltd. ("OUROWN," "we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website (ourown.co.in) or engage with our services. We are committed to protecting your privacy and ensuring transparency in our practices.'
    },
    {
      id: 2,
      title: 'Scope',
      content: 'This policy applies to all personal data collected through our website, mobile applications, offline interactions, and any other platforms or channels that link to this Privacy Policy. By accessing or using our services, you acknowledge that you have read and understand the practices described below.'
    },
    {
      id: 3,
      title: 'Information We Collect',
      subsections: [
        {
          title: 'Personal Data You Provide',
          items: [
            'Contact Information: Name, email address, postal address, phone number.',
            'Professional Details: Organization, role/title, industry sector.',
            'User Content: Messages, form submissions, uploaded files (e.g., pitch decks).'
          ]
        },
        {
          title: 'Usage Data',
          items: [
            'Log Data: IP address, browser type, operating system, pages visited, time stamps.',
            'Analytics: Clickstream data, session duration, scroll events, interaction patterns.'
          ]
        },
        {
          title: 'Cookies & Tracking Technologies',
          items: [
            'Cookies: Small data files saved on your device to remember preferences and improve experience.',
            'Web Beacons & Pixel Tags: Invisible images used to track website traffic and user behavior.'
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'How We Use Your Information',
      items: [
        'Service Delivery: Process your inquiries, applications, and requests; provide access to gated resources.',
        'Platform Improvement: Analyze usage trends to enhance website functionality, content, and performance.',
        'Communication: Send newsletters, updates, invitations to events, and marketing materials where consented.',
        'Security & Compliance: Detect and prevent fraud, enforce our Terms of Use, and comply with legal obligations.'
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
              Privacy Policy
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
              {section.subsections && section.subsections.map((subsection, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{subsection.title}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {subsection.items.map((item, i) => (
                      <li key={i} className="text-gray-600">{item}</li>
                    ))}
                </ul>
              </div>
              ))}
              {section.items && (
                <ul className="list-disc list-inside space-y-2">
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
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out:
              </p>
            <ul className="space-y-2 text-gray-600">
              <li>Email: privacy@ourown.co.in</li>
                  <li>
                Mailing Address:<br />
                    OUROWN Entrepreneurs Solution India Ltd.<br />
                    [Full office address]
                  </li>
                </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 