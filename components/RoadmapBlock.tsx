'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PillButton from './PillButton';
import { URLS } from '@/lib/constants';

export default function RoadmapBlock() {
  const t = useTranslations('roadmap');
  const tc = useTranslations('common');

  const featuresLive = [
    { title: t('liveVoiceTitle'), description: t('liveVoiceDesc') },
    { title: t('liveAppsTitle'), description: t('liveAppsDesc') },
    { title: t('liveTranscriptionTitle'), description: t('liveTranscriptionDesc') },
    { title: t('liveCalendarTitle'), description: t('liveCalendarDesc') },
    { title: t('liveSecurityTitle'), description: t('liveSecurityDesc') },
  ];

  const featuresSoon = [
    { title: t('soonEmailTitle'), description: t('soonEmailDesc') },
    { title: t('soonCrmTitle'), description: t('soonCrmDesc') },
    { title: t('soonTaskTitle'), description: t('soonTaskDesc') },
    { title: t('soonMemoryTitle'), description: t('soonMemoryDesc') },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-brand-light-grey">
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
            <span className="text-brand-blue">{t('titleAccent')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Live features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <h3 className="text-xl font-bold text-brand-black">{t('liveNow')}</h3>
            </div>
            <div className="space-y-4">
              {featuresLive.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-brand-mid-grey/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-black">{feature.title}</h4>
                      <p className="text-sm text-brand-black/50 mt-1 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coming soon features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-brand-blue animate-pulse" />
              <h3 className="text-xl font-bold text-brand-black">{t('comingSoon')}</h3>
            </div>
            <div className="space-y-4">
              {featuresSoon.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/70 rounded-xl p-6 shadow-sm border border-brand-mid-grey/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-black">{feature.title}</h4>
                      <p className="text-sm text-brand-black/50 mt-1 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <PillButton href={URLS.signup} external>
            {tc('tryFree')}
          </PillButton>
        </motion.div>
      </div>
    </section>
  );
}
