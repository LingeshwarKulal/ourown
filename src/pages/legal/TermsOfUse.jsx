import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-800 text-white py-16 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-pattern opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Terms of Use</h1>
            <p className="text-xl font-light">Last Updated: April 30, 2025</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/legal" className="text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out">Legal</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 font-medium">Terms of Use</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                Welcome to OUROWN Entrepreneurs Solution India Ltd. ("OUROWN," "we," "us," or "our"). These Terms of Use ("Terms") govern your access to and use of our website (ourown.co.in) and any related services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Acceptance of Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Eligibility:</strong> You must be at least 18 years of age and have the legal capacity to enter into binding agreements.</li>
                <li><strong>Agreement:</strong> Your use of the Service constitutes a binding agreement to comply with these Terms and our Privacy Policy.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Use of the Website</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Permitted Use:</strong> You may view, download, and print content solely for your personal, non-commercial use, provided you retain all copyright and other proprietary notices.</li>
                <li><strong>Prohibited Use:</strong> You agree not to (a) reproduce, distribute, or commercially exploit content; (b) modify or create derivative works; (c) bypass security measures; (d) transmit harmful code; or (e) use the Service in violation of any applicable law.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. User Accounts & Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Registration:</strong> Certain features require you to register and create an account. You must provide accurate information and promptly update any changes.</li>
                <li><strong>Credentials:</strong> You are solely responsible for safeguarding your login credentials and for all activities under your account. Notify us immediately of any unauthorized use.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Intellectual Property Rights</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Ownership:</strong> All content, trademarks, logos, designs, and software on the Service are owned or licensed by OUROWN and protected by copyright, trademark, and other laws.</li>
                <li><strong>License Grant:</strong> We grant you a limited, revocable, non-exclusive license to access and use the Service in accordance with these Terms.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. User Content</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Definition:</strong> "User Content" means any text, images, files, or other content you submit through forms or interactive features.</li>
                <li><strong>License to OUROWN:</strong> By submitting User Content, you grant OUROWN a perpetual, worldwide, royalty-free license to use, reproduce, modify, and display such content in connection with the Service.</li>
                <li><strong>Standards:</strong> You agree not to submit content that is unlawful, defamatory, infringing, or otherwise objectionable. OUROWN reserves the right to remove or disable any User Content at its discretion.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Disclaimers</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>AS IS:</strong> The Service is provided "as is" and "as available," without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, or non-infringement.</li>
                <li><strong>No Guarantee:</strong> We do not guarantee accuracy, completeness, or timeliness of content. You use the Service at your own risk.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700">
                To the maximum extent permitted by law, OUROWN and its affiliates, officers, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the Service, even if advised of the possibility of such damages. Our total cumulative liability for direct damages shall not exceed ₹10,000.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify and hold OUROWN, its directors, officers, employees, and agents harmless from any claim, demand, loss, liability, or expense (including reasonable attorneys' fees) arising out of your breach of these Terms or your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Third-Party Links</h2>
              <p className="text-gray-700">
                The Service may contain links to third-party websites or resources. These links are provided for convenience only. OUROWN does not endorse and is not responsible for the content or practices of any third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Modifications to Terms</h2>
              <p className="text-gray-700">
                We may revise these Terms at any time by posting an updated version on this page with a new "Last Updated" date. Continued use of the Service after changes constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Governing Law & Dispute Resolution</h2>
              <p className="text-gray-700">
                These Terms are governed by the laws of India, without regard to conflict-of-law principles. Any dispute arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or concerns regarding these Terms, please contact us at:
              </p>
              <ul className="list-none pl-6 space-y-2 text-gray-700">
                <li><strong>Email:</strong> legal@ourown.co.in</li>
                <li>
                  <strong>Address:</strong><br />
                  OUROWN Entrepreneurs Solution India Ltd.<br />
                  [Full office address]
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse; 