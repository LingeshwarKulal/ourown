import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function DataProtection() {
  const sections = [
    {
      id: 1,
      title: 'Introduction',
      content: 'OUROWN Entrepreneurs Solution India Ltd. ("OUROWN," "we," "our," or "us") is committed to safeguarding the confidentiality, integrity, and availability of personal and corporate data. These Data Protection Guidelines describe the technical and organizational measures we employ to protect data throughout its lifecycle and ensure compliance with applicable laws, including India\'s Personal Data Protection framework and GDPR where relevant.'
    },
    {
      id: 2,
      title: 'Purpose & Scope',
      content: 'These Guidelines apply to all data processed by OUROWN—whether collected via our website, mobile applications, partner portals, or offline programmes. They govern the handling of personal data (any information relating to an identifiable individual) and sensitive business data belonging to ventures, partners, and third parties.'
    },
    {
      id: 3,
      title: 'Data Classification',
      items: [
        'Public Data: Information intended for unrestricted publication (e.g., marketing collateral).',
        'Internal Data: OUROWN\'s operational documents and non-sensitive communications.',
        'Confidential Data: Personal Identifiable Information (PII), financial records, business plans.',
        'Restricted Data: High-impact data such as health information, strategic roadmaps, or intellectual property.'
      ]
    },
    {
      id: 4,
      title: 'Data Security Measures',
      subsections: [
        {
          title: 'Access Control',
          items: [
            'Role-Based Access: Permissions are granted on a need-to-know basis, enforced via single sign-on (SSO) and least-privilege principles.',
            'Multi-Factor Authentication: Required for all administrative and remote access to systems hosting confidential data.',
            'Periodic Reviews: Quarterly audits of user access rights and privilege escalations.'
          ]
        },
        {
          title: 'Encryption',
          items: [
            'In Transit: TLS 1.2+ for all web traffic, email, and API communications.',
            'At Rest: AES-256 encryption for databases, file storage, backups, and portable media.',
            'Key Management: Hardware Security Modules (HSMs) or secure vaults for cryptographic keys, rotated annually.'
          ]
        },
        {
          title: 'Network & Infrastructure Security',
          items: [
            'Firewalls & IDS/IPS: Network segmentation via next-gen firewalls and intrusion detection/prevention systems.',
            'Vulnerability Management: Monthly vulnerability scans and timely patching per SLAs.',
            'Secure Configuration: Hardening guides for servers, containers, and cloud resources following CIS benchmarks.'
          ]
        },
        {
          title: 'Physical Security',
          items: [
            'Data Centers: Tier-III+ facilities with 24/7 monitoring, biometric access, and environmental controls.',
            'Office Premises: Badge access, CCTV surveillance, and visitor log protocols for areas storing sensitive information.'
          ]
        }
      ]
    },
    {
      id: 5,
      title: 'Third-Party & Processor Management',
      items: [
        'Due Diligence: Security and privacy assessments of vendors before engagement.',
        'Contracts & SLAs: Data Processing Agreements (DPAs) that mandate confidentiality, breach notification, and audit rights.',
        'Ongoing Oversight: Annual reviews of third-party controls and compliance certifications (e.g., ISO 27001, SOC 2).'
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
              Data Protection Guidelines
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
              For questions, compliance matters, or to report a breach, contact:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>Data Protection Officer: dpo@ourown.co.in</li>
              <li>Compliance Hotline: +91-XXXXXXXXXX</li>
            </ul>
          </motion.div>

          <p className="text-center text-gray-600 mt-8">
            Thank you for trusting OUROWN with your data security and privacy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataProtection; 