import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), camera=(), microphone=(self), payment=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com blob: data:",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com",
              "font-src 'self'",
              "connect-src 'self' https://api.mrcall.ai wss://api.mrcall.ai https://www.google-analytics.com https://analytics.google.com",
              "frame-src https://www.googletagmanager.com",
              "worker-src 'self' blob: data:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
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
