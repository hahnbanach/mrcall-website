'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import PillButton from './PillButton';
import { URLS, NAV_LINKS } from '@/lib/constants';
import { trackLanguageSwitch, trackCta, trackOutbound } from '@/lib/tracking';
import { getDashboardUid } from '@/lib/auth';
import { routing } from '@/i18n/routing';

const LOCALE_LABELS: Record<string, string> = {
  en: 'EN',
  it: 'IT',
  de: 'DE',
  da: 'DA',
  fr: 'FR',
  es: 'ES',
  pt: 'PT',
  ar: 'AR',
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [uid, setUid] = useState<string | null>(null);
  const t = useTranslations('common');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Detect logged-in dashboard user via cross-domain cookie
    setUid(getDashboardUid());

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    trackLanguageSwitch(locale, newLocale);
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logos/mrcall-icon.png"
              alt="MrCall"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <Image
              src="/logos/mrcall-wordmark.png"
              alt="MrCall"
              width={120}
              height={30}
              className="h-7 w-auto hidden sm:block"
            />
          </Link>

          {/* Navigation links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-brand-black/70 hover:text-brand-black transition-colors"
              >
                {tNav(link.key)}
              </Link>
            ))}
          </div>

          {/* Auth buttons + language switcher */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="text-xs font-bold text-brand-black/50 hover:text-brand-black transition-colors px-2 py-1 rounded cursor-pointer"
              >
                {LOCALE_LABELS[locale] || locale.toUpperCase()} &#9662;
              </button>
              {langOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangOpen(false)}
                  />
                  <div className="absolute end-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-brand-mid-grey/30 py-1 z-50 min-w-[80px]">
                    {routing.locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => handleLocaleChange(loc)}
                        className={`block w-full text-start px-4 py-1.5 text-xs cursor-pointer hover:bg-brand-light-grey transition-colors ${
                          loc === locale ? 'font-bold text-brand-blue' : 'text-brand-black/70'
                        }`}
                      >
                        {LOCALE_LABELS[loc]}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {uid ? (
              // Logged-in user: show "My Dashboard" link
              <a
                href={URLS.signin}
                className="text-sm font-medium text-brand-blue hover:text-brand-black transition-colors"
              >
                {t('myDashboard')}
              </a>
            ) : (
              // Not logged in: show "Sign In" + "Try Free"
              <>
                <a
                  href={URLS.signin}
                  onClick={() => trackOutbound(URLS.signin, locale)}
                  className="text-sm text-brand-black/70 hover:text-brand-black transition-colors hidden sm:inline"
                >
                  {t('signIn')}
                </a>
                <span onClick={() => trackCta('header_try_free', locale)}>
                  <PillButton href={URLS.signup} size="small" external>
                    {t('tryFree')}
                  </PillButton>
                </span>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
