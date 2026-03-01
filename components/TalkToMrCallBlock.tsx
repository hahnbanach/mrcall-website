'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { trackDemo, getSessionId, track } from '@/lib/tracking';
import { getDashboardUid } from '@/lib/auth';
import { URLS } from '@/lib/constants';

type DemoState = 'idle' | 'consent' | 'checking' | 'active' | 'limited';

const DEMO_COOKIE = 'mrcall_demo';
const DEMO_LIMIT_ANONYMOUS = 3;
const DEMO_LIMIT_LOGGED_IN = 10;

function getDemoCount(): number {
  if (typeof document === 'undefined') return 0;
  const match = document.cookie.match(/(?:^|;\s*)mrcall_demo=(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function setDemoCookie(count: number) {
  document.cookie = `${DEMO_COOKIE}=${count}; Path=/; SameSite=Lax; Secure; Max-Age=86400`;
}

export default function TalkToMrCallBlock() {
  const t = useTranslations('talkToMrCall');
  const tc = useTranslations('common');
  const locale = useLocale();
  const [state, setState] = useState<DemoState>('idle');

  const handleTalkClick = () => {
    // Quick client-side pre-check via cookie (server is the real gate)
    const count = getDemoCount();
    const uid = getDashboardUid();
    const limit = uid ? DEMO_LIMIT_LOGGED_IN : DEMO_LIMIT_ANONYMOUS;

    if (count >= limit) {
      track('demo_limit_reached', { locale, metadata: { source: 'cookie' } });
      setState('limited');
      return;
    }

    trackDemo('start', locale);
    setState('consent');
  };

  const handleStartConversation = async () => {
    setState('checking');

    try {
      const res = await fetch('/api/demo-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: getSessionId(),
          uid: getDashboardUid(),
        }),
      });

      const data = await res.json();

      if (!data.allowed) {
        // Update cookie to reflect server-side count
        setDemoCookie(data.used);
        track('demo_limit_reached', { locale, metadata: { source: 'server', used: data.used, limit: data.limit } });
        setState('limited');
        return;
      }

      // Server says OK — update cookie, track consent, start demo
      setDemoCookie(data.used + 1);
      trackDemo('consent', locale);
      // TODO: Insert MrCall voice widget / WebRTC / VAPI integration here
      setState('active');
    } catch {
      // On error, allow the demo — don't block UX due to network issues
      trackDemo('consent', locale);
      setState('active');
    }
  };

  const uid = typeof document !== 'undefined' ? getDashboardUid() : null;

  return (
    <section className="py-24 lg:py-32 bg-brand-light-grey">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
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
            <p className="mt-6 text-lg leading-relaxed text-brand-black/60">
              {t('description')}
            </p>
          </motion.div>

          {/* CTA / Consent / Checking / Active / Limited area */}
          <div className="mt-10">
            <AnimatePresence mode="wait">
              {state === 'idle' && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={handleTalkClick}
                    className="inline-flex items-center justify-center gap-3 h-[66px] rounded-[33px] px-12 bg-brand-blue text-white font-bold text-lg cursor-pointer hover:bg-brand-grey-80 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z" />
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                    {t('talkButton')}
                  </button>
                </motion.div>
              )}

              {state === 'consent' && (
                <motion.div
                  key="consent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-brand-mid-grey/30 text-start max-w-lg mx-auto"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-brand-black">{t('beforeYouStart')}</h3>
                  </div>

                  <p className="text-sm text-brand-black/60 leading-relaxed mb-6">
                    {t('consentText')}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleStartConversation}
                      className="inline-flex items-center justify-center gap-2 h-[44px] rounded-[22px] px-8 bg-brand-blue text-white font-bold text-sm cursor-pointer hover:bg-brand-grey-80 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z" />
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                      </svg>
                      {t('startConversation')}
                    </button>
                    <button
                      onClick={() => setState('idle')}
                      className="text-sm text-brand-black/40 hover:text-brand-black/60 transition-colors cursor-pointer"
                    >
                      {t('cancel')}
                    </button>
                  </div>
                </motion.div>
              )}

              {state === 'checking' && (
                <motion.div
                  key="checking"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-8 h-8 border-3 border-brand-blue/20 border-t-brand-blue rounded-full"
                  />
                  <p className="text-sm text-brand-black/50">{t('checking')}</p>
                </motion.div>
              )}

              {state === 'active' && (
                <motion.div
                  key="active"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-brand-blue/20 max-w-lg mx-auto"
                >
                  {/* TODO: Replace this placeholder with the actual MrCall voice widget */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <svg className="w-8 h-8 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z" />
                          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                        </svg>
                      </motion.div>
                    </div>
                    <p className="text-brand-black font-bold">{t('connecting')}</p>
                    <p className="text-sm text-brand-black/50">
                      {t('widgetPlaceholder')}
                    </p>
                    <button
                      onClick={() => setState('idle')}
                      className="mt-2 text-sm text-brand-black/40 hover:text-brand-black/60 transition-colors cursor-pointer"
                    >
                      {t('endDemo')}
                    </button>
                  </div>
                </motion.div>
              )}

              {state === 'limited' && (
                <motion.div
                  key="limited"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-brand-orange/30 max-w-lg mx-auto text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-black mb-2">{t('limitReached')}</h3>
                  <p className="text-sm text-brand-black/60 leading-relaxed mb-6">
                    {t('limitReachedDesc')}
                  </p>

                  {!uid && (
                    <a
                      href={URLS.signin}
                      className="inline-flex items-center justify-center gap-2 h-[44px] rounded-[22px] px-8 bg-brand-blue text-white font-bold text-sm hover:bg-brand-grey-80 transition-colors duration-300 mb-3"
                    >
                      {t('signInForMore')}
                    </a>
                  )}

                  <button
                    onClick={() => setState('idle')}
                    className="block mx-auto text-sm text-brand-black/40 hover:text-brand-black/60 transition-colors cursor-pointer mt-2"
                  >
                    {tc('backToHome')}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
