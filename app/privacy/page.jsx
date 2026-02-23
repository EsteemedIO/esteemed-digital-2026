export const metadata = {
  title: "Privacy Policy",
  description: "Learn how Esteemed Digital collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8">Privacy Policy</h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
            <strong>Last updated:</strong> {currentDate}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Introduction</h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Esteemed Digital ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI services and platforms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Information We Collect</h2>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Personal Information</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              We may collect personal information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Account credentials and profile information</li>
              <li>Company information and job title</li>
              <li>Payment and billing information</li>
              <li>Communications with our support team</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Usage Data</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              We automatically collect information about how you use our services:
            </p>
            <ul className="list-disc pl-6 mb-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>API usage patterns and frequency</li>
              <li>Device information and browser type</li>
              <li>IP address and location data</li>
              <li>Performance metrics and error logs</li>
              <li>Feature usage and interaction data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">How We Use Your Information</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>Provide, maintain, and improve our AI services</li>
              <li>Process transactions and manage your account</li>
              <li>Provide customer support and technical assistance</li>
              <li>Send important updates about our services</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Data Security and AI Training</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              <strong>Important:</strong> We do not use your data to train our AI models without explicit consent. Your data is processed according to your instructions and is protected with enterprise-grade security measures.
            </p>
            <ul className="list-disc pl-6 mb-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>Data encryption in transit and at rest</li>
              <li>SOC 2 Type II compliance</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and audit logging</li>
              <li>Data residency options for enterprise customers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Information Sharing</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>With your explicit consent</li>
              <li>With trusted service providers who assist in our operations</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect the rights and safety of our users and the public</li>
              <li>In connection with a business transaction (merger, acquisition, etc.)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Your Rights and Choices</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>Access and review your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete your personal information (subject to legal requirements)</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of marketing communications</li>
              <li>Request restrictions on processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Data Retention</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              We retain your information for as long as necessary to provide our services and comply with legal obligations. Enterprise customers can configure custom retention periods based on their requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">International Data Transfers</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              We may transfer your information to countries outside your jurisdiction. We ensure appropriate safeguards are in place, including standard contractual clauses and adequacy decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Children's Privacy</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13 without parental consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Changes to This Policy</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of material changes by email or through our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6">
              <p className="text-zinc-700 dark:text-zinc-300">
                <strong>Email:</strong> privacy@esteemed.digital<br />
                <strong>Address:</strong> Esteemed Digital, 123 Market St, Suite 400, San Francisco, CA 94105<br />
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
