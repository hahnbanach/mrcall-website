'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import PillButton from './PillButton';
import { URLS, PRICING_PLANS } from '@/lib/constants';
import { trackCta } from '@/lib/tracking';

export default function PricingBlock() {
  const t = useTranslations('pricing');
  const tc = useTranslations('common');
  const locale = useLocale();

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-4">
            {t('label')}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-brand-black">
            {t('titleStart')}{' '}
            <span className="text-brand-blue">{t('titleAccent')}</span> {t('titleEnd')}
          </h2>
          <p className="mt-4 text-brand-black/50 text-base">
            {t('vatNote')}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, i) => {
            const planName = t(plan.key as 'essential' | 'starter' | 'professional');
            const features = t.raw(`${plan.key}Features` as 'essentialFeatures' | 'starterFeatures' | 'professionalFeatures') as string[];

            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-[20px] p-8 flex flex-col ${
                  plan.featured
                    ? 'bg-white shadow-xl border-2 border-brand-blue ring-1 ring-brand-blue/10 scale-[1.02]'
                    : 'bg-white shadow-sm border border-brand-mid-grey/30'
                }`}
              >
                {/* Featured badge */}
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    {t('mostPopular')}
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-lg font-bold text-brand-black">{planName}</h3>

                {/* Price */}
                <div className="mt-4 mb-1">
                  <span className="text-5xl font-bold text-brand-black">
                    {t('currency')}{t(`${plan.key}Price` as 'essentialPrice' | 'starterPrice' | 'professionalPrice')}
                  </span>
                  <span className="text-lg font-bold text-brand-black/60 ms-1">
                    {t('perMonth')}
                  </span>
                </div>

                {/* Minutes */}
                <p className="text-sm text-brand-black/50 mb-6">
                  {plan.minutes} ({plan.calls})
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((feature: string, j: number) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-brand-black/70">
                      {j === 0 && plan.key !== 'essential' ? (
                        <span className="text-brand-blue font-bold text-xs mt-0.5">+</span>
                      ) : (
                        <svg className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <span onClick={() => trackCta(`pricing_${plan.key}`, locale)}>
                  <PillButton
                    href={URLS.signup}
                    variant={plan.featured ? 'primary' : 'secondary'}
                    size="small"
                    className="w-full"
                    external
                  >
                    {tc('getStarted')}
                  </PillButton>
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 space-y-6"
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-brand-black/50">
            <span>{t('freeTrialNote')}</span>
            <span>&middot;</span>
            <span>{t('noHardware')}</span>
            <span>&middot;</span>
            <span>{t('upgradeAnytime')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
