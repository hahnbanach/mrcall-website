'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import PhoneMockup from './PhoneMockup';
import { URLS } from '@/lib/constants';
import { trackAppStore } from '@/lib/tracking';

export default function MobileBlock() {
  const t = useTranslations('mobile');
  const tc = useTranslations('common');
  const locale = useLocale();

  const features = [
    t('featureNativeApps'),
    t('featureVoiceFirst'),
    t('featureCallHistory'),
    t('featureNotifications'),
  ];

  return (
    <section className="py-24 lg:py-32 bg-brand-light-grey">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
            className="order-2 lg:order-1"
          >
            <PhoneMockup />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-4">
              {t('label')}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-brand-black">
              {t('titleStart')}{' '}
              <span className="text-brand-blue">{t('titleAccent')}</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-black/60 max-w-lg">
              {t('description')}
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-brand-black/80 text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* App Store badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={URLS.appStoreIos}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAppStore('ios', locale)}
                className="inline-flex items-center gap-2.5 h-[48px] px-5 bg-brand-black text-white rounded-xl hover:bg-brand-grey-80 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-start">
                  <div className="text-[9px] uppercase tracking-wide opacity-70 leading-none">{t('downloadOnThe')}</div>
                  <div className="text-sm font-bold leading-tight">{t('appStore')}</div>
                </div>
              </a>
              <a
                href={URLS.appStoreAndroid}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAppStore('android', locale)}
                className="inline-flex items-center gap-2.5 h-[48px] px-5 bg-brand-black text-white rounded-xl hover:bg-brand-grey-80 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.991l-2.302 2.302-8.634-8.635z"/>
                </svg>
                <div className="text-start">
                  <div className="text-[9px] uppercase tracking-wide opacity-70 leading-none">{t('getItOn')}</div>
                  <div className="text-sm font-bold leading-tight">{t('googlePlay')}</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
