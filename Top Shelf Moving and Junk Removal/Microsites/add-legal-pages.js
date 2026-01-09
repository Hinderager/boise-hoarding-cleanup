const fs = require('fs');
const path = require('path');

// Microsites that need privacy/terms pages
const sitesToUpdate = [
  {
    dir: 'boise-commercial-movers',
    businessName: 'Commercial Moving Pros',
    serviceType: 'commercial moving',
    domain: 'boise-commercial-movers.com',
    email: 'info@boise-commercial-movers.com'
  },
  {
    dir: 'boise-construction-debris-removal',
    businessName: 'Construction Debris Removal Pros',
    serviceType: 'construction debris removal',
    domain: 'boise-construction-debris-removal.com',
    email: 'info@boise-construction-debris-removal.com'
  },
  {
    dir: 'boise-demolition',
    businessName: 'Demolition Pros',
    serviceType: 'demolition',
    domain: 'boise-demolition.com',
    email: 'info@boise-demolition.com'
  },
  {
    dir: 'boise-dumpster-rental',
    businessName: 'Dumpster Rental Pros',
    serviceType: 'dumpster rental',
    domain: 'boise-dumpster-rental.com',
    email: 'info@boise-dumpster-rental.com'
  },
  {
    dir: 'boise-hot-tub-removal',
    businessName: 'Hot Tub Removal Pros',
    serviceType: 'hot tub removal',
    domain: 'boise-hot-tub-removal.com',
    email: 'info@boise-hot-tub-removal.com'
  },
  {
    dir: 'boise-movers',
    businessName: 'Moving Pros',
    serviceType: 'moving',
    domain: 'boise-movers.com',
    email: 'info@boise-movers.com'
  },
  {
    dir: 'boise-tire-removal',
    businessName: 'Tire Removal Pros',
    serviceType: 'tire removal',
    domain: 'boise-tire-removal.com',
    email: 'info@boise-tire-removal.com'
  },
  {
    dir: 'mobile-home-demolition-boise',
    businessName: 'Mobile Home Demolition Pros',
    serviceType: 'mobile home demolition',
    domain: 'mobile-home-demolition-boise.com',
    email: 'info@mobile-home-demolition-boise.com'
  }
];

function generatePrivacyPage(site) {
  return `import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | ${site.businessName}',
  description: 'Privacy policy for ${site.businessName} - how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://${site.domain}/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gunmetal mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: December 13, 2024</p>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              ${site.businessName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-bold text-gunmetal mt-6 mb-3">Information You Provide</h3>
            <p>When you fill out our contact form, call us, or request our services, we may collect:</p>
            <ul>
              <li>Name and contact information (phone number, email address)</li>
              <li>Service address and location information</li>
              <li>Details about your ${site.serviceType} needs</li>
              <li>Preferred appointment dates and times</li>
              <li>Payment information (when applicable)</li>
            </ul>

            <h3 className="text-xl font-bold text-gunmetal mt-6 mb-3">Information Collected Automatically</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide quotes</li>
              <li>Schedule and perform ${site.serviceType} services</li>
              <li>Communicate with you about your service appointment</li>
              <li>Send appointment reminders and follow-up communications</li>
              <li>Process payments for services rendered</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Information Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties for marketing purposes. We may share your information with:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our business, such as our scheduling and CRM system</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or other legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can set your browser to refuse cookies, but some features of our website may not function properly.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information below.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <ul>
              <li><strong>Phone:</strong> (208) 361-1982</li>
              <li><strong>Email:</strong> ${site.email}</li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link href="/" className="text-dark-blue underline hover:text-light-blue">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
`;
}

function generateTermsPage(site) {
  return `import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | ${site.businessName}',
  description: 'Terms of service for ${site.businessName} ${site.serviceType} services in Boise and the Treasure Valley.',
  alternates: {
    canonical: 'https://${site.domain}/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gunmetal mb-4">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: December 13, 2024</p>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Welcome to ${site.businessName}. By accessing our website or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">1. Services</h2>
            <p>
              ${site.businessName} provides professional ${site.serviceType} and related services in Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding areas in Idaho. All services are subject to availability and our ability to safely perform the work.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">2. Service Agreement</h2>
            <p>
              By requesting services from ${site.businessName}, you represent that you are the property owner or have authorization from the property owner to request and authorize services. You agree to provide accurate information about the property and scope of work needed.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">3. Estimates and Pricing</h2>
            <ul>
              <li>We provide free estimates based on an on-site or virtual assessment of your property</li>
              <li>Estimates are valid for 30 days unless otherwise specified</li>
              <li>Final pricing may vary if the actual scope of work differs significantly from the initial assessment</li>
              <li>We will communicate any pricing changes and obtain your approval before proceeding with additional work</li>
              <li>All prices are quoted in US dollars</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">4. Payment Terms</h2>
            <ul>
              <li>Payment is due upon completion of services unless otherwise agreed in writing</li>
              <li>For larger projects, we may require a deposit or progress payments</li>
              <li>We accept cash, check, and major credit cards (Visa, Mastercard, American Express, Discover)</li>
              <li>Returned checks are subject to a $35 fee</li>
              <li>Past due accounts may be subject to collection fees and interest</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">5. Scheduling and Cancellation</h2>
            <ul>
              <li>We will make reasonable efforts to accommodate your preferred scheduling</li>
              <li>Please provide at least 24 hours notice if you need to reschedule or cancel your appointment</li>
              <li>Same-day cancellations may be subject to a cancellation fee</li>
              <li>We reserve the right to reschedule due to weather, safety concerns, or other unforeseen circumstances</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">6. Property Access and Safety</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide safe access to the property for our team and equipment</li>
              <li>Inform us of any known hazards, including but not limited to structural damage, pest infestations, or hazardous materials</li>
              <li>Secure pets during service appointments</li>
              <li>Ensure utilities (electricity, water) are available if needed for the job</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">7. Liability and Insurance</h2>
            <ul>
              <li>${site.businessName} is fully licensed and insured</li>
              <li>We carry general liability insurance and workers&apos; compensation coverage</li>
              <li>We take reasonable care to protect your property during service</li>
              <li>We are not responsible for pre-existing damage or hidden damage</li>
              <li>Our liability is limited to the cost of services provided</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">8. Communication Consent</h2>
            <p>
              By providing your phone number, you consent to receive calls and text messages from us regarding your inquiry, appointment scheduling, and service updates. Message and data rates may apply. You may opt out of text messages at any time by replying STOP.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">9. Website Use</h2>
            <p>
              The content on this website is for informational purposes only. We make no warranties about the accuracy or completeness of information on this site. You agree not to use this website for any unlawful purpose or in any way that could damage or impair the site.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">10. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design, is the property of ${site.businessName} and is protected by copyright and trademark laws. You may not reproduce, distribute, or use our content without written permission.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">11. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or our services shall be governed by the laws of the State of Idaho. You agree to attempt to resolve any disputes through good-faith negotiation before pursuing legal action.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">13. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li><strong>Phone:</strong> (208) 361-1982</li>
              <li><strong>Email:</strong> ${site.email}</li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link href="/" className="text-dark-blue underline hover:text-light-blue">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
`;
}

async function main() {
  console.log('========================================');
  console.log('Adding Privacy & Terms Pages');
  console.log('========================================\n');

  for (const site of sitesToUpdate) {
    const privacyDir = path.join(__dirname, site.dir, 'src', 'app', 'privacy');
    const termsDir = path.join(__dirname, site.dir, 'src', 'app', 'terms');

    // Create privacy directory and page
    if (!fs.existsSync(privacyDir)) {
      fs.mkdirSync(privacyDir, { recursive: true });
    }
    fs.writeFileSync(path.join(privacyDir, 'page.tsx'), generatePrivacyPage(site));
    console.log(`  Created: ${site.dir}/src/app/privacy/page.tsx`);

    // Create terms directory and page
    if (!fs.existsSync(termsDir)) {
      fs.mkdirSync(termsDir, { recursive: true });
    }
    fs.writeFileSync(path.join(termsDir, 'page.tsx'), generateTermsPage(site));
    console.log(`  Created: ${site.dir}/src/app/terms/page.tsx`);
  }

  console.log('\n========================================');
  console.log(`Added privacy & terms pages to ${sitesToUpdate.length} sites`);
  console.log('========================================');
}

main().catch(console.error);
