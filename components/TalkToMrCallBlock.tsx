'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { trackDemo, track, checkDemoLimit } from '@/lib/tracking';
import DashboardLink from './DashboardLink';
import { getDashboardUid } from '@/lib/auth';
import { URLS } from '@/lib/constants';

// MrCallDirectVoice SDK is loaded globally via <Script> in layout.tsx
interface MrCallDirectVoiceInstance {
  startStream: (wsUrl: string) => Promise<void>;
  hangup: () => void;
  destroy: () => void;
  status: string;
  sessionId: string | null;
}

declare global {
  interface Window {
    MrCallDirectVoice?: new (opts: {
      baseUrl?: string;
      encoding?: string;
      onCallStarted?: (sessionId: string) => void;
      onCallEnded?: (reason: string) => void;
      onError?: (message: string) => void;
      onStatusChange?: (status: string) => void;
    }) => MrCallDirectVoiceInstance;
  }
}

type DemoState = 'idle' | 'consent' | 'checking' | 'active' | 'limited';
type CallStatus = 'connecting' | 'active' | null;

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
  const [callStatus, setCallStatus] = useState<CallStatus>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dvRef = useRef<MrCallDirectVoiceInstance | null>(null);

  // Cleanup SDK on unmount
  useEffect(() => {
    return () => {
      dvRef.current?.destroy();
      dvRef.current = null;
    };
  }, []);

  const handleTalkClick = () => {
    trackDemo('start', locale);
    setState('consent');
  };

  const startVoiceCall = useCallback(async () => {
    setCallStatus('connecting');
    setErrorMessage(null);

    try {
      // 1. Get wsUrl from our backend (credentials stay server-side)
      const initRes = await fetch('/api/voice-init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'website-demo' }),
      });

      if (!initRes.ok) {
        throw new Error('Voice service unavailable');
      }

      const { wsUrl } = await initRes.json();

      if (!wsUrl) {
        throw new Error('No WebSocket URL returned');
      }

      // 2. Check SDK is loaded
      if (!window.MrCallDirectVoice) {
        throw new Error('Voice SDK not loaded');
      }

      // 3. Instantiate SDK and start streaming
      const dv = new window.MrCallDirectVoice({
        baseUrl: 'https://api.mrcall.ai',
        encoding: 'opus',
        onCallStarted: () => {
          setCallStatus('active');
        },
        onCallEnded: (reason) => {
          track('demo_end', { locale, metadata: { reason } });
          dvRef.current?.destroy();
          dvRef.current = null;
          setCallStatus(null);
          setState('idle');
        },
        onError: (message) => {
          track('error', { locale, metadata: { action: 'voice_demo_error', error: message } });
          setErrorMessage(message);
          dvRef.current?.destroy();
          dvRef.current = null;
          setCallStatus(null);
        },
        onStatusChange: () => {
          // Status updates handled by onCallStarted/onCallEnded
        },
      });

      dvRef.current = dv;
      await dv.startStream(wsUrl);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';

      // Detect microphone permission denial
      const isMicDenied =
        message.includes('Permission denied') ||
        message.includes('NotAllowedError') ||
        message.includes('permission');

      track('error', {
        locale,
        metadata: {
          action: isMicDenied ? 'mic_permission_denied' : 'voice_demo_error',
          error: message,
        },
      });

      setErrorMessage(isMicDenied ? t('micPermissionDenied') : t('errorGeneric'));
      setCallStatus(null);
    }
  }, [locale, t]);

  const handleStartConversation = async () => {
    setState('checking');

    // TODO: re-enable demo limit check when tracking API is ready
    trackDemo('consent', locale);
    setState('active');
    startVoiceCall();
  };

  const handleEndDemo = () => {
    dvRef.current?.hangup();
    // onCallEnded callback will handle cleanup and state reset
    // But if SDK didn't fire callback, force reset after a short delay
    setTimeout(() => {
      if (dvRef.current) {
        dvRef.current.destroy();
        dvRef.current = null;
        setCallStatus(null);
        setState('idle');
      }
    }, 2000);
  };

  const handleDismissError = () => {
    setErrorMessage(null);
    setState('idle');
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

              {state === 'active' && !errorMessage && (
                <motion.div
                  key="active"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-brand-blue/20 max-w-lg mx-auto"
                >
                  <div className="flex flex-col items-center gap-4">
                    {/* Pulsing mic icon */}
                    <div className="relative">
                      <motion.div
                        animate={callStatus === 'active' ? {
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 0.1, 0.3],
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-brand-blue/20"
                        style={{ margin: '-12px' }}
                      />
                      <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center relative">
                        <motion.div
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <svg className="w-8 h-8 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z" />
                            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>

                    <p className="text-brand-black font-bold">
                      {callStatus === 'active' ? t('callActive') : t('connecting')}
                    </p>

                    {callStatus === 'active' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1"
                      >
                        {[0, 1, 2, 3, 4].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ scaleY: [0.4, 1, 0.4] }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: i * 0.15,
                            }}
                            className="w-1 h-6 bg-brand-blue/40 rounded-full"
                          />
                        ))}
                      </motion.div>
                    )}

                    <button
                      onClick={handleEndDemo}
                      className="mt-2 inline-flex items-center justify-center gap-2 h-[44px] rounded-[22px] px-8 bg-red-500 text-white font-bold text-sm cursor-pointer hover:bg-red-600 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                      </svg>
                      {t('endDemo')}
                    </button>
                  </div>
                </motion.div>
              )}

              {state === 'active' && errorMessage && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-red-200 max-w-lg mx-auto text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9.303 3.376c-.866 1.5-2.217 3.374-3.948 3.374H6.645c-1.73 0-3.082-1.874-2.216-3.374L10.051 3.378c.866-1.5 3.032-1.5 3.898 0l6.354 12.998zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <p className="text-sm text-brand-black/60 leading-relaxed mb-6">
                    {errorMessage}
                  </p>
                  <button
                    onClick={handleDismissError}
                    className="text-sm text-brand-black/40 hover:text-brand-black/60 transition-colors cursor-pointer"
                  >
                    {tc('backToHome')}
                  </button>
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
                    <DashboardLink
                      href={URLS.signin}
                      className="inline-flex items-center justify-center gap-2 h-[44px] rounded-[22px] px-8 bg-brand-blue text-white font-bold text-sm hover:bg-brand-grey-80 transition-colors duration-300 mb-3"
                    >
                      {t('signInForMore')}
                    </DashboardLink>
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
