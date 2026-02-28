import type { Metadata } from 'next';
import { Montserrat, Noto_Serif_Display, Noto_Sans_Arabic } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleTagManagerHead, GoogleTagManagerNoScript } from '@/components/GoogleTagManager';
import { SITE } from '@/lib/constants';
import { routing } from '@/i18n/routing';
import '../globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const notoSerif = Noto_Serif_Display({
  variable: '--font-noto-serif',
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
  display: 'swap',
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    metadataBase: new URL(`https://${SITE.domain}`),
    openGraph: {
      title: t('homeTitle'),
      description: t('homeDescription'),
      url: `https://${SITE.domain}`,
      siteName: SITE.name,
      locale: locale === 'ar' ? 'ar_SA' : `${locale}_${locale === 'en' ? 'US' : locale.toUpperCase()}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('homeTitle'),
      description: t('homeDescription'),
    },
    icons: {
      icon: '/favicon.svg',
      apple: '/favicon.svg',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isRtl = locale === 'ar';

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className="scroll-smooth"
    >
      <body
        className={`${montserrat.variable} ${notoSerif.variable} ${isRtl ? notoSansArabic.variable : ''} font-sans antialiased`}
      >
        <GoogleTagManagerNoScript />
        <GoogleTagManagerHead />
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
