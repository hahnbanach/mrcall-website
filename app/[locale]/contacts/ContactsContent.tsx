'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PillButton from '@/components/PillButton';
import BookingWidget from '@/components/BookingWidget';
import { CONTACT, URLS } from '@/lib/constants';

export default function ContactsContent() {
  const t = useTranslations('contacts');
  const tc = useTranslations('common');

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Link href="/" className="text-sm text-brand-blue hover:underline mb-8 inline-block">
          &larr; {tc('backToHome')}
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-black mb-4">
            {t('titleStart')} <span className="text-brand-blue">{t('titleAccent')}</span>
          </h1>
          <p className="text-lg text-brand-black/60 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          {/* Email card */}
          <motion.a
            href={`mailto:${CONTACT.support}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-brand-mid-grey/20 text-center hover:shadow-md hover:border-brand-blue/20 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-light-grey flex items-center justify-center mx-auto mb-5 text-brand-blue group-hover:bg-brand-blue/10 transition-colors">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-brand-black mb-2">{t('emailUs')}</h3>
            <p className="text-sm text-brand-black/50 mb-4">{t('emailDesc')}</p>
            <span className="text-brand-blue font-bold text-sm">{CONTACT.support}</span>
          </motion.a>

          {/* Booking widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BookingWidget />
          </motion.div>
        </div>

        {/* Support Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-brand-light-grey rounded-2xl p-8 lg:p-12 text-center"
        >
          <h2 className="text-2xl font-bold text-brand-black mb-4">{t('supportInfo')}</h2>
          <p className="text-brand-black/60 max-w-2xl mx-auto mb-4">
            {t('supportHours')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-brand-black/50 mb-8">
            <span>{t('legal')}: <a href={`mailto:${CONTACT.legal}`} className="text-brand-blue hover:underline">{CONTACT.legal}</a></span>
            <span className="hidden sm:inline">&middot;</span>
            <span>{t('privacy')}: <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a></span>
          </div>
          <PillButton href={URLS.signup} size="small" external>
            {tc('tryFree')}
          </PillButton>
        </motion.div>
      </div>
    </div>
  );
}
