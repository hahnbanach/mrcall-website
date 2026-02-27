import type { Metadata } from 'next';
import { Montserrat, Noto_Serif_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/constants';
import './globals.css';

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

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  metadataBase: new URL(`https://${SITE.domain}`),
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: `https://${SITE.domain}`,
    siteName: SITE.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  icons: {
    icon: '/logos/mrcall-icon.png',
    apple: '/logos/mrcall-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${notoSerif.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
