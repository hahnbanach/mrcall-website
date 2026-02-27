'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PillButton from '@/components/PillButton';
import { URLS, USE_CASE_DETAILS } from '@/lib/constants';

export default function UseCasesContent() {
  const t = useTranslations('useCases');
  const tc = useTranslations('common');

  return (
    <div className="pt-28 pb-0">
      {/* Page Hero */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link href="/" className="text-sm text-brand-blue hover:underline mb-8 inline-block">
          &larr; {tc('backToHome')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-4">
            {t('label')}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-brand-black">
            {t('titleStart')}{' '}
            <span className="text-brand-blue">{t('titleAccent')}</span>
          </h1>
          <p className="mt-6 text-lg text-brand-black/60 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>
      </div>

      {/* Vertical Blocks */}
      {USE_CASE_DETAILS.map((useCase, index) => (
        <section
          key={useCase.id}
          id={useCase.id}
          className={`py-20 lg:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-brand-light-grey'}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className="mb-12"
            >
              <span className="text-4xl mb-4 block">{useCase.icon}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-2">
                {t(`${useCase.id}.name`)}
              </h2>
              <p className="text-xl text-brand-blue font-bold mb-4">
                {t(`${useCase.id}.tagline`)}
              </p>
              <p className="text-brand-black/60 max-w-2xl leading-relaxed">
                {t(`${useCase.id}.problem`)}
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: useCase.featureCount }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-brand-mid-grey/20"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-black">
                        {t(`${useCase.id}.feature${i + 1}Title`)}
                      </h4>
                      <p className="text-sm text-brand-black/50 mt-1 leading-relaxed">
                        {t(`${useCase.id}.feature${i + 1}Desc`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
              {t('readyToTry')}
            </h2>
            <p className="text-brand-black/60 mb-8 max-w-lg mx-auto">
              {t('readyDesc')}
            </p>
            <PillButton href={URLS.signup} external>
              {tc('tryFree')}
            </PillButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
