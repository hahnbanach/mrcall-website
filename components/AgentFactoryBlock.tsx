'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ChatDemo from './ChatDemo';

export default function AgentFactoryBlock() {
  const t = useTranslations('agentFactory');
  const tc = useTranslations('common');

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
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

            {/* Vertical divider accent */}
            <div className="mt-8 flex items-stretch gap-[50px]">
              <div className="w-px bg-brand-black" />
              <blockquote className="text-brand-black/50 text-base leading-relaxed italic max-w-sm">
                {t('quote')}
              </blockquote>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 bg-brand-light-grey rounded-full px-4 py-2">
              <span className="text-xs text-brand-black/50">{t('poweredBy')}</span>
              <span className="text-xs font-bold text-brand-black">{t('zylchEngine')}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded-full">
                {tc('comingSoon')}
              </span>
            </div>
          </motion.div>

          {/* Chat demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <ChatDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
