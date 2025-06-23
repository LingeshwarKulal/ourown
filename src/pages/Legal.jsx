import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsShieldCheck, BsFileText, BsCookie, BsLock, BsShieldLock } from 'react-icons/bs';

function Legal() {
  const policies = [
    {
      id: 1,
      title: 'Privacy Policy',
      description: 'Details how OUROWN collects, uses, stores, and shares personal information. Covers data subjects\' rights, retention periods, and third-party disclosures.',
      icon: BsFileText,
      link: '/legal/privacy-policy'
    },
    {
      id: 2,
      title: 'Terms of Use',
      description: 'Defines the rules and conditions for accessing and using the OUROWN website and services. Includes acceptable use, intellectual property rights, and limitations of liability.',
      icon: BsShieldCheck,
      link: '/legal/terms-of-use'
    },
    {
      id: 3,
      title: 'Cookie Policy',
      description: 'Explains our use of cookies and similar tracking technologies to enhance user experience, including cookie categories, purposes, and opt-out mechanisms.',
      icon: BsCookie,
      link: '/legal/cookie-policy'
    },
    {
      id: 4,
      title: 'Data Protection Guidelines',
      description: 'Outlines our approach to securing personal and corporate data, including encryption standards, access controls, breach notification procedures, and compliance with applicable regulations.',
      icon: BsLock,
      link: '/legal/data-protection-guidelines'
    },
    {
      id: 5,
      title: 'Security Policy',
      description: 'Details our security practices and vulnerability disclosure program. Learn how we protect our systems and how to report security vulnerabilities.',
      icon: BsShieldLock,
      link: '/legal/security-policy'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-900 h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
        <div className="text-center z-10 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl font-bold text-white mb-6 tracking-tight"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
          >
            Legal & Compliance: Transparency and Trust
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Review our policies to understand how we protect your data, govern our platform, and uphold industry standards.
          </motion.p>
        </div>
      </div>

      {/* Policy Links Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy) => (
            <motion.div
              key={policy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <policy.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{policy.title}</h3>
                  <p className="text-gray-600 mb-4">{policy.description}</p>
                  <Link
                    to={policy.link}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions or Concerns?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Contact Our Legal Team
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Legal; 