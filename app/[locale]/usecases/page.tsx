import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import UseCasesContent from './UseCasesContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('useCasesTitle'),
    description: t('useCasesDescription'),
  };
}

export default async function UseCasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <UseCasesContent />;
}
