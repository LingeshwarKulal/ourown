import { Link } from 'react-router-dom';

const DataProtectionGuidelines = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-violet-800 to-purple-800 text-white py-16 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-pattern opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Data Protection Guidelines</h1>
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
            <span className="text-gray-600 font-medium">Data Protection Guidelines</span>
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
                OUROWN Entrepreneurs Solution India Ltd. ("OUROWN," "we," "our," or "us") is committed to safeguarding the confidentiality, integrity, and availability of personal and corporate data. These Data Protection Guidelines describe the technical and organizational measures we employ to protect data throughout its lifecycle and ensure compliance with applicable laws, including India's Personal Data Protection framework and GDPR where relevant.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Purpose & Scope</h2>
              <p className="text-gray-700">
                These Guidelines apply to all data processed by OUROWN—whether collected via our website, mobile applications, partner portals, or offline programmes. They govern the handling of personal data (any information relating to an identifiable individual) and sensitive business data belonging to ventures, partners, and third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Data Classification</h2>
              <p className="text-gray-700 mb-4">
                We classify data into categories with corresponding protection levels:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Public Data:</strong> Information intended for unrestricted publication (e.g., marketing collateral).</li>
                <li><strong>Internal Data:</strong> OUROWN's operational documents and non-sensitive communications.</li>
                <li><strong>Confidential Data:</strong> Personal Identifiable Information (PII), financial records, business plans.</li>
                <li><strong>Restricted Data:</strong> High-impact data such as health information, strategic roadmaps, or intellectual property.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security Measures</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 Access Control</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Role-Based Access:</strong> Permissions are granted on a need-to-know basis, enforced via single sign-on (SSO) and least-privilege principles.</li>
                <li><strong>Multi-Factor Authentication:</strong> Required for all administrative and remote access to systems hosting confidential data.</li>
                <li><strong>Periodic Reviews:</strong> Quarterly audits of user access rights and privilege escalations.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 Encryption</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>In Transit:</strong> TLS 1.2+ for all web traffic, email, and API communications.</li>
                <li><strong>At Rest:</strong> AES-256 encryption for databases, file storage, backups, and portable media.</li>
                <li><strong>Key Management:</strong> Hardware Security Modules (HSMs) or secure vaults for cryptographic keys, rotated annually.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.3 Network & Infrastructure Security</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Firewalls & IDS/IPS:</strong> Network segmentation via next-gen firewalls and intrusion detection/prevention systems.</li>
                <li><strong>Vulnerability Management:</strong> Monthly vulnerability scans and timely patching per SLAs.</li>
                <li><strong>Secure Configuration:</strong> Hardening guides for servers, containers, and cloud resources following CIS benchmarks.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.4 Physical Security</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Data Centers:</strong> Tier-III+ facilities with 24/7 monitoring, biometric access, and environmental controls.</li>
                <li><strong>Office Premises:</strong> Badge access, CCTV surveillance, and visitor log protocols for areas storing sensitive information.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Third-Party & Processor Management</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Due Diligence:</strong> Security and privacy assessments of vendors before engagement.</li>
                <li><strong>Contracts & SLAs:</strong> Data Processing Agreements (DPAs) that mandate confidentiality, breach notification, and audit rights.</li>
                <li><strong>Ongoing Oversight:</strong> Annual reviews of third-party controls and compliance certifications (e.g., ISO 27001, SOC 2).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cross-Border Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Where data is transferred outside India or the EEA, we implement:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Standard Contractual Clauses</strong> approved by regulators.</li>
                <li><strong>Adequacy Mechanisms</strong> such as Binding Corporate Rules (BCRs) for intra-group transfers.</li>
                <li><strong>Localization Measures</strong> if required by local law or client mandate.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Retention & Destruction</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Retention Schedules:</strong> Defined per data category (e.g., 3 years for CRM records; 7 years for financial ledgers).</li>
                <li><strong>Secure Deletion:</strong> Cryptographic erasure or certified shredding for physical media.</li>
                <li><strong>Anonymization:</strong> Aggregation or pseudonymization of data no longer needed in identifiable form.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Incident Response & Breach Notification</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Incident Management Plan:</strong> Defines detection, containment, eradication, and recovery processes.</li>
                <li><strong>Incident Response Team (IRT):</strong> Cross-functional group with clear roles and escalation paths.</li>
                <li><strong>Notification Obligations:</strong> Notify affected individuals and regulators within mandated timeframes (e.g., 72 hours under GDPR; as per India's PDP Bill).</li>
                <li><strong>Post-Incident Review:</strong> Root-cause analysis and remediation actions documented and implemented.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Compliance & Audits</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Internal Audits:</strong> Annual data protection reviews by our Compliance team.</li>
                <li><strong>External Assessments:</strong> Periodic third-party audits against ISO 27001, GDPR readiness, and regulatory requirements.</li>
                <li><strong>Reporting:</strong> Summary of audit findings and corrective actions presented to leadership and the Board.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Roles & Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Data Protection Officer (DPO):</strong> Oversees policy enforcement, data subject requests, and liaison with regulators.</li>
                <li><strong>Business Units:</strong> Ensure data handling aligns with these Guidelines and report incidents promptly.</li>
                <li><strong>IT & Security Teams:</strong> Implement and maintain technical controls.</li>
                <li><strong>All Employees:</strong> Complete regular data protection training and adhere to security policies.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Data Subject Rights & Requests</h2>
              <p className="text-gray-700">
                We uphold rights including access, rectification, erasure, restriction, portability, and objection. Individuals may submit requests via privacy@ourown.co.in. Requests are acknowledged within 3 business days and fulfilled in accordance with legal timelines.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Training & Awareness</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Onboarding Program:</strong> Mandatory data protection and security modules for all new hires.</li>
                <li><strong>Annual Refreshers:</strong> Scenario-based exercises and phishing simulations to reinforce best practices.</li>
                <li><strong>Executive Briefings:</strong> Quarterly updates for leadership on emerging risks and regulatory changes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Policy Review & Updates</h2>
              <p className="text-gray-700">
                These Guidelines are reviewed annually—or sooner if triggered by legal or technical changes—and approved by OUROWN's Executive Committee.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions, compliance matters, or to report a breach, contact:
              </p>
              <ul className="list-none pl-6 space-y-2 text-gray-700">
                <li><strong>Data Protection Officer:</strong> dpo@ourown.co.in</li>
                <li><strong>Compliance Hotline:</strong> +91-XXXXXXXXXX</li>
              </ul>
            </section>

            <p className="text-gray-700 text-center font-medium">
              Thank you for trusting OUROWN with your data security and privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProtectionGuidelines; 