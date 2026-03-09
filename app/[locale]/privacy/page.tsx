import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE.name}`,
  description: `Privacy policy for ${SITE.name}`,
};

const privacyComponents: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  en: () => import('@/content/legal/privacy/en'),
  it: () => import('@/content/legal/privacy/it'),
  de: () => import('@/content/legal/privacy/de'),
  da: () => import('@/content/legal/privacy/da'),
  fr: () => import('@/content/legal/privacy/fr'),
  es: () => import('@/content/legal/privacy/es'),
  pt: () => import('@/content/legal/privacy/pt'),
  ar: () => import('@/content/legal/privacy/ar'),
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loader = privacyComponents[locale] || privacyComponents.en;
  const { default: PrivacyContent } = await loader();

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <a href="/" className="text-sm text-brand-blue hover:underline mb-8 inline-block">&larr; Back to home</a>
        <PrivacyContent />
      </div>
    </div>
  );
}
