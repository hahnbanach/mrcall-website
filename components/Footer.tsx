'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { URLS, SITE } from '@/lib/constants';
import DashboardLink from './DashboardLink';

export default function Footer() {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');
  const tNav = useTranslations('nav');
  const tMeta = useTranslations('metadata');

  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logos/mrcall-icon.png"
                alt="MrCall"
                width={36}
                height={36}
                className="w-9 h-9 brightness-0 invert"
              />
              <span className="text-xl font-bold tracking-tight">MrCall</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {tMeta('homeDescription')}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">
              {t('product')}
            </h3>
            <ul className="space-y-3">
              <li>
                <DashboardLink href={URLS.signup} className="text-white/70 hover:text-white transition-colors text-sm">
                  {tCommon('getStarted')}
                </DashboardLink>
              </li>
              <li>
                <DashboardLink href={URLS.signin} className="text-white/70 hover:text-white transition-colors text-sm">
                  {tCommon('signIn')}
                </DashboardLink>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t('features')}
                </a>
              </li>
              <li>
                <Link href="/usecases" className="text-white/70 hover:text-white transition-colors text-sm">
                  {tNav('useCases')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">
              {t('company')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contacts" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <a href="/blog" className="text-white/70 hover:text-white transition-colors text-sm">
                  {tNav('blog')}
                </a>
              </li>
              <li>
                <a href={URLS.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={URLS.youtube} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">
              {t('legal')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t('privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t('termsOfService')}
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t('cookiePolicy')}
                </Link>
              </li>
              <li>
                <a href="/llms.txt" className="text-white/70 hover:text-white transition-colors text-sm">
                  llms.txt
                </a>
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new Event('open-cookie-consent'))}
                  className="text-white/70 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  {t('manageCookies')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-center">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} {SITE.name}. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
