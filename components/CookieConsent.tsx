'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import {
  getConsentPreferences,
  hasConsentBeenGiven,
  saveConsentPreferences,
  updateGtagConsent,
} from '@/lib/consent';

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
        disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
      } ${checked ? 'bg-brand-blue' : 'bg-brand-mid-grey'}`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform duration-200 mt-0.5 ${
          checked ? 'translate-x-5 ms-0' : 'translate-x-0.5 ms-0'
        }`}
      />
    </button>
  );
}

export default function CookieConsent() {
  const t = useTranslations('cookieConsent');
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  // On mount: check if consent was already given
  useEffect(() => {
    if (hasConsentBeenGiven()) {
      const prefs = getConsentPreferences();
      if (prefs) updateGtagConsent(prefs);
    } else {
      setIsVisible(true);
    }
  }, []);

  // Listen for "Manage Cookies" event from Footer
  const handleOpenManage = useCallback(() => {
    const prefs = getConsentPreferences();
    setAnalyticsConsent(prefs?.analytics ?? false);
    setMarketingConsent(prefs?.marketing ?? false);
    setShowCustomize(true);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    window.addEventListener('open-cookie-consent', handleOpenManage);
    return () => window.removeEventListener('open-cookie-consent', handleOpenManage);
  }, [handleOpenManage]);

  const handleAcceptAll = () => {
    saveConsentPreferences({ analytics: true, marketing: true });
    setIsVisible(false);
    setShowCustomize(false);
  };

  const handleRejectAll = () => {
    saveConsentPreferences({ analytics: false, marketing: false });
    setIsVisible(false);
    setShowCustomize(false);
  };

  const handleSavePreferences = () => {
    saveConsentPreferences({ analytics: analyticsConsent, marketing: marketingConsent });
    setIsVisible(false);
    setShowCustomize(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="dialog"
          aria-label={t('title')}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 inset-x-0 z-[60] bg-white border-t border-brand-mid-grey/30 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
            {!showCustomize ? (
              /* ── Simple Banner ── */
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-brand-black mb-1">{t('title')}</p>
                  <p className="text-sm text-brand-black/70 leading-relaxed">
                    {t('description')}{' '}
                    <Link href="/cookie-policy" className="text-brand-blue hover:underline">
                      {t('cookiePolicy')}
                    </Link>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0">
                  <button
                    onClick={() => setShowCustomize(true)}
                    className="border border-brand-mid-grey text-brand-black hover:bg-brand-light-grey rounded-full px-6 py-2.5 text-sm font-bold transition-colors cursor-pointer"
                  >
                    {t('customize')}
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="border border-brand-mid-grey text-brand-black hover:bg-brand-light-grey rounded-full px-6 py-2.5 text-sm font-bold transition-colors cursor-pointer"
                  >
                    {t('rejectAll')}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="bg-brand-blue text-white hover:bg-brand-grey-80 rounded-full px-6 py-2.5 text-sm font-bold transition-colors cursor-pointer"
                  >
                    {t('acceptAll')}
                  </button>
                </div>
              </div>
            ) : (
              /* ── Customize Panel ── */
              <div>
                <p className="text-sm font-bold text-brand-black mb-4">{t('title')}</p>
                <div className="space-y-3 mb-5">
                  {/* Essential — always on */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-brand-black">{t('essential')}</p>
                      <p className="text-xs text-brand-black/60">{t('essentialDesc')}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-brand-black/40">{t('alwaysOn')}</span>
                      <Toggle checked disabled label={t('essential')} onChange={() => {}} />
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-brand-black">{t('analytics')}</p>
                      <p className="text-xs text-brand-black/60">{t('analyticsDesc')}</p>
                    </div>
                    <Toggle
                      checked={analyticsConsent}
                      onChange={setAnalyticsConsent}
                      label={t('analytics')}
                    />
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-brand-black">{t('marketing')}</p>
                      <p className="text-xs text-brand-black/60">{t('marketingDesc')}</p>
                    </div>
                    <Toggle
                      checked={marketingConsent}
                      onChange={setMarketingConsent}
                      label={t('marketing')}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="border border-brand-mid-grey text-brand-black hover:bg-brand-light-grey rounded-full px-6 py-2.5 text-sm font-bold transition-colors cursor-pointer"
                  >
                    {t('savePreferences')}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="bg-brand-blue text-white hover:bg-brand-grey-80 rounded-full px-6 py-2.5 text-sm font-bold transition-colors cursor-pointer"
                  >
                    {t('acceptAll')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
