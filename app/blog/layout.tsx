import { Montserrat, Noto_Serif_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
        <NextIntlClientProvider locale="en" messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
