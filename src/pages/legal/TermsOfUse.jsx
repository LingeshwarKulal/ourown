import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function TermsOfUse() {
  const sections = [
    {
      id: 1,
      title: 'Introduction',
      content: 'Welcome to OUROWN Entrepreneurs Solution India Ltd. ("OUROWN," "we," "us," or "our"). These Terms of Use ("Terms") govern your access to and use of our website (ourown.co.in) and any related services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.'
    },
    {
      id: 2,
      title: 'Acceptance of Terms',
      items: [
        'Eligibility: You must be at least 18 years of age and have the legal capacity to enter into binding agreements.',
        'Agreement: Your use of the Service constitutes a binding agreement to comply with these Terms and our Privacy Policy.'
      ]
    },
    {
      id: 3,
      title: 'Use of the Website',
      items: [
        'Permitted Use: You may view, download, and print content solely for your personal, non-commercial use, provided you retain all copyright and other proprietary notices.',
        'Prohibited Use: You agree not to (a) reproduce, distribute, or commercially exploit content; (b) modify or create derivative works; (c) bypass security measures; (d) transmit harmful code; or (e) use the Service in violation of any applicable law.'
      ]
    },
    {
      id: 4,
      title: 'User Accounts & Security',
      items: [
        'Registration: Certain features require you to register and create an account. You must provide accurate information and promptly update any changes.',
        'Credentials: You are solely responsible for safeguarding your login credentials and for all activities under your account. Notify us immediately of any unauthorized use.'
      ]
    },
    {
      id: 5,
      title: 'Intellectual Property Rights',
      items: [
        'Ownership: All content, trademarks, logos, designs, and software on the Service are owned or licensed by OUROWN and protected by copyright, trademark, and other laws.',
        'License Grant: We grant you a limited, revocable, non-exclusive license to access and use the Service in accordance with these Terms.'
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
              Terms of Use
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
                If you have questions or concerns regarding these Terms, please contact us at:
              </p>
            <ul className="space-y-2 text-gray-600">
              <li>Email: legal@ourown.co.in</li>
                <li>
                Address:<br />
                  OUROWN Entrepreneurs Solution India Ltd.<br />
                  [Full office address]
                </li>
              </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse; 