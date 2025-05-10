import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../../components/shared/PageHeader';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHeader 
        title="Privacy Policy"
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
            <span className="text-gray-600 font-medium">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto prose prose-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                Welcome to OUROWN Entrepreneurs Solution India Ltd. ("OUROWN," "we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website (ourown.co.in) or engage with our services. We are committed to protecting your privacy and ensuring transparency in our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Scope</h2>
              <p className="text-gray-700">
                This policy applies to all personal data collected through our website, mobile applications, offline interactions, and any other platforms or channels that link to this Privacy Policy. By accessing or using our services, you acknowledge that you have read and understand the practices described below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Personal Data You Provide</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Contact Information:</strong> Name, email address, postal address, phone number.</li>
                  <li><strong>Professional Details:</strong> Organization, role/title, industry sector.</li>
                  <li><strong>User Content:</strong> Messages, form submissions, uploaded files (e.g., pitch decks).</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Usage Data</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Log Data:</strong> IP address, browser type, operating system, pages visited, time stamps.</li>
                  <li><strong>Analytics:</strong> Clickstream data, session duration, scroll events, interaction patterns.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Cookies & Tracking Technologies</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Cookies:</strong> Small data files saved on your device to remember preferences and improve experience.</li>
                  <li><strong>Web Beacons & Pixel Tags:</strong> Invisible images used to track website traffic and user behavior.</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. How We Use Your Information</h2>
              <div className="glassmorphism-dark p-6 rounded-lg">
                <ul className="list-disc pl-6 space-y-2 text-gray-200">
                  <li><strong>Service Delivery:</strong> Process your inquiries, applications, and requests; provide access to gated resources.</li>
                  <li><strong>Platform Improvement:</strong> Analyze usage trends to enhance website functionality, content, and performance.</li>
                  <li><strong>Communication:</strong> Send newsletters, updates, invitations to events, and marketing materials where consented.</li>
                  <li><strong>Security & Compliance:</strong> Detect and prevent fraud, enforce our Terms of Use, and comply with legal obligations.</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Disclosure of Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> Third-party vendors who assist with hosting, analytics, email delivery, and CRM.</li>
                <li><strong>Business Transfers:</strong> In the event of merger, acquisition, or sale of assets, personal data may be transferred under confidentiality terms.</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority to disclose personal data.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookies & Similar Technologies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Essential Cookies:</strong> Necessary for core site functionality (e.g., session management).</li>
                <li><strong>Performance Cookies:</strong> Collect anonymous usage data to optimize user experience.</li>
                <li><strong>Marketing Cookies:</strong> Track visitor behavior to deliver relevant promotions and measure campaign effectiveness.</li>
                <li><strong>Your Choices:</strong> You can manage or disable cookies through your browser settings or via our Cookie Consent banner.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Security</h2>
              <div className="card p-6">
                <p className="text-gray-700">
                  We implement technical and organizational measures—encryption, firewalls, access controls—to protect your data against unauthorized access, alteration, or destruction. However, no method of transmission over the internet is entirely secure; absolute security cannot be guaranteed.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Data Retention</h2>
              <div className="card p-6">
                <p className="text-gray-700">
                  We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or to meet legal and regulatory requirements. When no longer needed, data is securely deleted or anonymized.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Under applicable data protection laws, you may have the right to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="card p-4">
                  <h4 className="font-bold mb-2">Access & Correction</h4>
                  <p className="text-gray-600">Request a copy of your data and correct inaccuracies.</p>
                </div>
                <div className="card p-4">
                  <h4 className="font-bold mb-2">Deletion & Restriction</h4>
                  <p className="text-gray-600">Ask for erasure or limit processing of your personal data.</p>
                </div>
                <div className="card p-4">
                  <h4 className="font-bold mb-2">Data Portability</h4>
                  <p className="text-gray-600">Receive your data in a structured, commonly used format.</p>
                </div>
                <div className="card p-4">
                  <h4 className="font-bold mb-2">Objection</h4>
                  <p className="text-gray-600">Object to processing based on legitimate interests or direct marketing.</p>
                </div>
                <div className="card p-4">
                  <h4 className="font-bold mb-2">Withdraw Consent</h4>
                  <p className="text-gray-600">Revoke consent for marketing communications at any time.</p>
                </div>
                <div className="card p-4">
                  <h4 className="font-bold mb-2">Lodge a Complaint</h4>
                  <p className="text-gray-600">Contact the relevant data protection authority if you believe your rights have been violated.</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us as described below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-700">
                Your information may be transferred to and processed in countries other than your own. We ensure that appropriate safeguards—such as standard contractual clauses—are in place to protect your data in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected data from a minor, please contact us for deletion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this policy from time to time. The "Last Updated" date at the top reflects the most recent changes. We encourage you to review this page periodically for updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out:
              </p>
              <div className="glassmorphism p-6 rounded-lg">
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

            <p className="text-gradient text-center font-medium text-xl py-4">
              Thank you for trusting OUROWN with your information.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 