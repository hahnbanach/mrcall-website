'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import MemoryGraph from './MemoryGraph';

export default function RelationshipBlock() {
  const t = useTranslations('relationship');

  return (
    <section className="py-24 lg:py-32 bg-brand-light-grey">
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
          <p className="mt-6 text-lg leading-relaxed text-brand-black/60 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Graph + Context cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Context cards — left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            <ContextCard
              icon="📞"
              title={t('calledTwice')}
              detail={t('calledTwiceDetail')}
            />
            <ContextCard
              icon="⚠️"
              title={t('invoiceIssue')}
              detail={t('invoiceDetail')}
            />
          </motion.div>

          {/* Memory Graph — center */}
          <div className="lg:col-span-3">
            <MemoryGraph />
          </div>

          {/* Context cards — right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            <ContextCard
              icon="📧"
              title={t('emailReceived')}
              detail={t('emailDetail')}
            />
            <ContextCard
              icon="📅"
              title={t('meetingScheduled')}
              detail={t('meetingDetail')}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContextCard({ icon, title, detail }: { icon: string; title: string; detail: string }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-brand-mid-grey/20">
      <div className="flex items-start gap-3">
        <span className="text-lg">{icon}</span>
        <div>
          <p className="text-sm font-bold text-brand-black">{title}</p>
          <p className="text-xs text-brand-black/50 mt-0.5">{detail}</p>
        </div>
      </div>
    </div>
  );
}
