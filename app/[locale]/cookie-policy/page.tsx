import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { CONTACT, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Cookie Policy — ${SITE.name}`,
  description: `Cookie policy for ${SITE.name}`,
};

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <a href="/" className="text-sm text-brand-blue hover:underline mb-8 inline-block">&larr; Back to home</a>
        <h1 className="text-4xl font-bold text-brand-black mb-2">Cookie Policy</h1>
        <p className="text-brand-black/50 text-sm mb-12">Last updated: January 2024</p>

        <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-brand-black mt-0">What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience and understand how our site is used.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">Types of Cookies We Use</h2>

            <h3 className="text-lg font-bold text-brand-black mt-6">Essential Cookies</h3>
            <p>Required for basic website functionality and navigation. These cannot be disabled.</p>

            <h3 className="text-lg font-bold text-brand-black mt-6">Analytics Cookies</h3>
            <p>Help us understand visitor behavior including pages visited, time spent, referral sources, and user interactions.</p>

            <h3 className="text-lg font-bold text-brand-black mt-6">Functional Cookies</h3>
            <p>Remember your preferences such as language and region settings to provide a personalized experience.</p>

            <h3 className="text-lg font-bold text-brand-black mt-6">Marketing Cookies</h3>
            <p>Used for cross-website tracking to deliver relevant advertisements. These may be set by our advertising partners.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">Third-Party Services</h2>
            <ul className="list-disc ps-6 space-y-2">
              <li><strong>Google Analytics:</strong> Website traffic analysis and reporting</li>
              <li><strong>LinkedIn:</strong> Social sharing and advertising</li>
              <li><strong>YouTube:</strong> Embedded video content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">Managing Cookies</h2>
            <p>You can control cookies through your browser settings:</p>
            <ul className="list-disc ps-6 space-y-2">
              <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies</li>
              <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies</li>
              <li><strong>Safari:</strong> Preferences &gt; Privacy</li>
              <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions</li>
            </ul>
            <p>Note that disabling cookies may affect the functionality of our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black">Contact Us</h2>
            <p>For questions about our cookie policy:</p>
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
