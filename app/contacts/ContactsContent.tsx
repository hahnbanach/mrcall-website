'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PillButton from '@/components/PillButton';
import { CONTACT, URLS } from '@/lib/constants';

const contactMethods = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: 'Call us',
    description: 'Speak directly with our team during business hours.',
    action: `tel:${CONTACT.legalPhoneRaw}`,
    actionLabel: CONTACT.legalPhone,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: 'Email us',
    description: 'Send us a message and we will respond within 24 hours.',
    action: `mailto:${CONTACT.support}`,
    actionLabel: CONTACT.support,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
    title: 'Book a meeting',
    description: 'Schedule a call with our team at a time that works for you.',
    action: `mailto:${CONTACT.support}?subject=Meeting%20Request`,
    actionLabel: 'Schedule now',
  },
];

export default function ContactsContent() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Link href="/" className="text-sm text-brand-blue hover:underline mb-8 inline-block">
          &larr; Back to home
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-black mb-4">
            Get in <span className="text-brand-blue">touch</span>
          </h1>
          <p className="text-lg text-brand-black/60 max-w-2xl mx-auto">
            Have a question, need support, or want to see MrCall in action?
            We are here to help.
          </p>
        </motion.div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.title}
              href={method.action}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-brand-mid-grey/20 text-center hover:shadow-md hover:border-brand-blue/20 transition-all group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-brand-light-grey flex items-center justify-center mx-auto mb-5 text-brand-blue group-hover:bg-brand-blue/10 transition-colors">
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-black mb-2">{method.title}</h3>
              <p className="text-sm text-brand-black/50 mb-4">{method.description}</p>
              <span className="text-brand-blue font-bold text-sm">{method.actionLabel}</span>
            </motion.a>
          ))}
        </div>

        {/* Support Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-brand-light-grey rounded-2xl p-8 lg:p-12 text-center"
        >
          <h2 className="text-2xl font-bold text-brand-black mb-4">Support Information</h2>
          <p className="text-brand-black/60 max-w-2xl mx-auto mb-4">
            Our support team is available Monday to Friday, 9:00 - 18:00 CET.
            For existing customers, the fastest way to get help is through the MrCall dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-brand-black/50 mb-8">
            <span>Legal: <a href={`mailto:${CONTACT.legal}`} className="text-brand-blue hover:underline">{CONTACT.legal}</a></span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Privacy: <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a></span>
          </div>
          <PillButton href={URLS.signup} size="small" external>
            Try free
          </PillButton>
        </motion.div>
      </div>
    </div>
  );
}
