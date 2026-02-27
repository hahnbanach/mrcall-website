import { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE.name}`,
  description: `Privacy policy for ${SITE.name}`,
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link href="/" className="text-sm text-brand-blue hover:underline mb-8 inline-block">&larr; Back to home</Link>
        <h1 className="text-4xl font-bold text-brand-black mb-2">Privacy Policy</h1>
        <p className="text-brand-black/50 text-sm mb-12">Last updated: January 2024</p>

        <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-brand-black mt-0">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and business details when you create an account.</li>
              <li><strong>Call Data:</strong> Recordings, transcriptions, and metadata from calls handled by our AI assistant.</li>
              <li><strong>Automatic Collection:</strong> Usage data, device information, and cookies when you interact with our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our AI assistant services</li>
              <li>Process transactions and send related notifications</li>
              <li>Improve our AI models and service quality</li>
              <li>Communicate updates and respond to inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">3. Data Sharing</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party services that assist in delivering our platform.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
              <li><strong>Business Transfers:</strong> In connection with any merger or acquisition.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption for data in transit and at rest</li>
              <li>Strict access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">5. Data Retention</h2>
            <p>We retain your data for as long as your account is active or as needed to provide services. You may request deletion of your data at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">6. Your Rights (GDPR)</h2>
            <p>Under the General Data Protection Regulation, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">7. Contact Us</h2>
            <p>For privacy-related inquiries:</p>
            <p>
              Email: <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a><br />
              Phone: <a href={`tel:${CONTACT.legalPhoneRaw}`} className="text-brand-blue hover:underline">{CONTACT.legalPhone}</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
