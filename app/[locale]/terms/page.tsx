import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Terms of Service — ${SITE.name}`,
  description: `Terms of service for ${SITE.name}`,
};

const termsComponents: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  en: () => import('@/content/legal/terms/en'),
  it: () => import('@/content/legal/terms/it'),
  de: () => import('@/content/legal/terms/de'),
  da: () => import('@/content/legal/terms/da'),
  fr: () => import('@/content/legal/terms/fr'),
  es: () => import('@/content/legal/terms/es'),
  pt: () => import('@/content/legal/terms/pt'),
  ar: () => import('@/content/legal/terms/ar'),
};

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loader = termsComponents[locale] || termsComponents.en;
  const { default: TermsContent } = await loader();

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <a href="/" className="text-sm text-brand-blue hover:underline mb-8 inline-block">&larr; Back to home</a>
        <TermsContent />
      </div>
    </div>
  );
}
