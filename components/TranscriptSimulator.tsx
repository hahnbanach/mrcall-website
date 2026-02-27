'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TRANSCRIPT_LINES } from '@/lib/constants';

export default function TranscriptSimulator() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleLines < TRANSCRIPT_LINES.length) {
      setIsTyping(true);
      const typingDelay = setTimeout(() => {
        setIsTyping(false);
        setVisibleLines((prev) => prev + 1);
      }, 1800 + Math.random() * 1000);
      return () => clearTimeout(typingDelay);
    } else {
      const notifDelay = setTimeout(() => setShowNotification(true), 800);
      const resetDelay = setTimeout(() => {
        setShowNotification(false);
        setVisibleLines(0);
      }, 4500);
      return () => {
        clearTimeout(notifDelay);
        clearTimeout(resetDelay);
      };
    }
  }, [visibleLines]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines, isTyping]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Phone frame */}
      <div className="bg-brand-black rounded-[2.5rem] p-3 shadow-2xl">
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="bg-brand-light-grey px-6 py-4 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-bold text-brand-black tracking-wide uppercase">
              Live Call — Studio Rossi
            </span>
          </div>

          {/* Transcript area */}
          <div ref={scrollRef} className="h-80 overflow-y-auto px-5 py-4 space-y-3 scroll-smooth">
            <AnimatePresence>
              {TRANSCRIPT_LINES.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`flex ${line.speaker === 'agent' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      line.speaker === 'agent'
                        ? 'bg-brand-light-grey text-brand-black'
                        : 'bg-brand-blue text-white'
                    }`}
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wider mb-1 opacity-50">
                      {line.speaker === 'agent' ? 'MrCall Agent' : 'Caller'}
                    </span>
                    {line.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            {isTyping && visibleLines < TRANSCRIPT_LINES.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`flex ${TRANSCRIPT_LINES[visibleLines].speaker === 'agent' ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`rounded-2xl px-4 py-3 ${
                  TRANSCRIPT_LINES[visibleLines].speaker === 'agent'
                    ? 'bg-brand-light-grey'
                    : 'bg-brand-blue'
                }`}>
                  <div className="flex gap-1">
                    {[0, 1, 2].map((dot) => (
                      <motion.div
                        key={dot}
                        className={`w-2 h-2 rounded-full ${
                          TRANSCRIPT_LINES[visibleLines].speaker === 'agent'
                            ? 'bg-brand-grey-80'
                            : 'bg-white/70'
                        }`}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: dot * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Task Completed notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-bold text-sm">Appointment Booked</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
