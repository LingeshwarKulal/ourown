import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function SecurityPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md rounded-xl p-6 sm:p-8 lg:p-10"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Security Policy</h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Our Commitment to Security</h2>
            <p>
              At OUROWN, we take the security of our systems and your data seriously. We are committed to ensuring that our website and services are secure and that your data is protected.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Vulnerability Disclosure Policy</h2>
            <p>
              We appreciate the work of security researchers in improving the security of our website and services. We are committed to working with the security community to verify, reproduce, and respond to legitimate reported vulnerabilities.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Reporting a Vulnerability</h3>
            <p>
              If you believe you have found a security vulnerability on our website or any of our services, we encourage you to let us know right away. We will investigate all legitimate reports and do our best to quickly fix the problem.
            </p>
            
            <p>Please email your findings to <a href="mailto:security@ourown.co.in" className="text-primary hover:underline">security@ourown.co.in</a>.</p>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Guidelines</h3>
            <p>When reporting a vulnerability, please include the following information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Description of the vulnerability</li>
              <li>Steps to reproduce the issue</li>
              <li>Potential impact of the vulnerability</li>
              <li>Any suggested mitigation or remediation actions</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Scope</h3>
            <p>The following are in scope for our vulnerability disclosure program:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>https://ourown.co.in and all subdomains</li>
              <li>Our mobile applications</li>
              <li>Our APIs</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Out of Scope</h3>
            <p>The following are out of scope for our vulnerability disclosure program:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Social engineering attacks</li>
              <li>Denial of Service attacks</li>
              <li>Physical security vulnerabilities</li>
              <li>Third-party applications or websites</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Our Security Practices</h2>
            <p>We implement the following security measures to protect our systems and your data:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Regular security assessments and penetration testing</li>
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Implementation of security headers and best practices</li>
              <li>Regular updates and patches to our systems</li>
              <li>Employee security training and awareness</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Contact</h2>
            <p>
              If you have any questions about our security policy, please contact us at{' '}
              <a href="mailto:security@ourown.co.in" className="text-primary hover:underline">
                security@ourown.co.in
              </a>
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link to="/legal" className="text-primary hover:underline">
              &larr; Back to Legal Center
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SecurityPolicy; 