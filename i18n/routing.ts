import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'it', 'da', 'fr', 'es', 'pt', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});
