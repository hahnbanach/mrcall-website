'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PillButton from './PillButton';
import TranscriptSimulator from './TranscriptSimulator';
import { URLS, USE_CASE_KEYS } from '@/lib/constants';

export default function HeroBlock() {
  const t = useTranslations('hero');
  const tBadges = useTranslations('useCaseBadges');
  const tCommon = useTranslations('common');

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-brand-black">
              {t('titleStart')}{' '}
              <span className="text-brand-blue">{t('titleAccent')}</span> {t('titleEnd')}
            </h1>
            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-brand-black/60 max-w-lg">
              {t('description')}
            </p>
            <p className="mt-3 text-base text-brand-black/40 max-w-lg">
              {t('smeTagline')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <PillButton href={URLS.signup} external>
                {tCommon('tryFree')}
              </PillButton>
              <PillButton href="#how-it-works" variant="secondary" size="large">
                {t('seeHowItWorks')}
              </PillButton>
            </div>

            {/* SME use case badges */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {USE_CASE_KEYS.map((key) => (
                <span
                  key={key}
                  className="inline-block text-xs text-brand-black/40 bg-brand-light-grey px-3 py-1.5 rounded-full"
                >
                  {tBadges(key)}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Transcript Simulator */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <TranscriptSimulator />
          </motion.div>
        </div>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-light-grey/50 to-white pointer-events-none" />
    </section>
  );
}
