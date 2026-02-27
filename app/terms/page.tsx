import { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Terms of Service — ${SITE.name}`,
  description: `Terms of service for ${SITE.name}`,
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link href="/" className="text-sm text-brand-blue hover:underline mb-8 inline-block">&larr; Back to home</Link>
        <h1 className="text-4xl font-bold text-brand-black mb-2">Terms of Service</h1>
        <p className="text-brand-black/50 text-sm mb-12">Last updated: January 2024</p>

        <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-brand-black mt-0">1. Service Description</h2>
            <p>{SITE.name} provides AI-powered communication services including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Automated call answering and routing</li>
              <li>Information extraction and transcription</li>
              <li>Appointment scheduling and calendar integration</li>
              <li>Real-time notifications and reporting</li>
              <li>CRM and third-party integrations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">2. Account Registration</h2>
            <p>To use our services, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Be at least 18 years old or have legal authority to enter into agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">3. Acceptable Use</h2>
            <p>You agree not to use our services for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any illegal or unauthorized purpose</li>
              <li>Infringing intellectual property rights</li>
              <li>Distributing harmful or malicious content</li>
              <li>Interfering with or disrupting the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">4. Pricing & Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Services are billed on a monthly basis</li>
              <li>All prices are exclusive of applicable VAT</li>
              <li>Overage rates apply beyond plan limits</li>
              <li>30-day notice for price changes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">5. Service Level</h2>
            <p>While we strive to maintain high availability, we do not guarantee specific uptime percentages. Planned maintenance will be announced when possible.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">6. Data & Privacy</h2>
            <p>Use of our services is subject to our <Link href="/privacy" className="text-brand-blue hover:underline">Privacy Policy</Link>. You are responsible for ensuring that callers are aware their calls may be recorded and processed by AI.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">7. Intellectual Property</h2>
            <p>{SITE.name} retains all rights to its technology, including AI models and algorithms. You retain ownership of your business data and content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">8. Limitation of Liability</h2>
            <p>{SITE.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">9. Termination</h2>
            <p>You may cancel your subscription at any time. We reserve the right to suspend or terminate accounts that violate these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">10. Governing Law</h2>
            <p>These terms are governed by Italian law. Any disputes shall be resolved by the courts of Milan, Italy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">11. Contact Us</h2>
            <p>
              Email: <a href={`mailto:${CONTACT.legal}`} className="text-brand-blue hover:underline">{CONTACT.legal}</a><br />
              Phone: <a href={`tel:${CONTACT.legalPhoneRaw}`} className="text-brand-blue hover:underline">{CONTACT.legalPhone}</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
