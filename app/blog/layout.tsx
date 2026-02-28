import type { Metadata } from 'next';
import { Montserrat, Noto_Serif_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleTagManagerHead, GoogleTagManagerNoScript } from '@/components/GoogleTagManager';
import TrackingProvider from '@/components/TrackingProvider';
import messages from '@/messages/en.json';
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

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${notoSerif.variable} font-sans antialiased`}
      >
        <GoogleTagManagerNoScript />
        <GoogleTagManagerHead />
        <NextIntlClientProvider locale="en" messages={messages}>
          <TrackingProvider locale="en">
            <Header />
            <main>{children}</main>
            <Footer />
          </TrackingProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
