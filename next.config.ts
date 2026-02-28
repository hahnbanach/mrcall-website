import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/contatti',
        destination: '/contacts',
        permanent: true,
      },
      // Blog is English-only — redirect locale-prefixed blog URLs
      ...['it', 'de', 'da', 'fr', 'es', 'pt', 'ar'].flatMap((locale) => [
        {
          source: `/${locale}/blog`,
          destination: '/blog',
          permanent: true,
        },
        {
          source: `/${locale}/blog/:slug`,
          destination: '/blog/:slug',
          permanent: true,
        },
      ]),
    ];
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
const withMDX = createMDX({});

export default withNextIntl(withMDX(nextConfig));
