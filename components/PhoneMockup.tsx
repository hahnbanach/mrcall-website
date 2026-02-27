'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const voiceQueries = [
  'Who called while I was in the meeting?',
  'Summarize my morning emails.',
  'Schedule a callback with Alessandro for tomorrow at 3 PM.',
];

export default function PhoneMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

  return (
    <div ref={containerRef} className="flex justify-center" style={{ perspective: '1200px' }}>
      <motion.div
        style={{ rotateY, rotateX }}
        className="w-72 sm:w-80"
      >
        {/* Phone frame */}
        <div className="bg-brand-black rounded-[2.5rem] p-3 shadow-2xl">
          <div className="bg-white rounded-[2rem] overflow-hidden">
            {/* App header */}
            <div className="bg-brand-blue px-6 py-5 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-70">MrCall</p>
                  <p className="text-sm font-bold">Direct Talk</p>
                </div>
              </div>

              {/* Voice wave animation */}
              <div className="flex items-center justify-center gap-1 h-12">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-white/80 rounded-full"
                    animate={{
                      height: [4, 8 + Math.random() * 28, 4],
                    }}
                    transition={{
                      duration: 0.8 + Math.random() * 0.6,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Query examples */}
            <div className="px-5 py-5 space-y-3">
              {voiceQueries.map((query, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z" />
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-brand-black/70 leading-relaxed italic">
                    &ldquo;{query}&rdquo;
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="px-5 py-4 border-t border-brand-mid-grey/30">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-brand-light-grey rounded-full h-10 flex items-center px-4">
                  <span className="text-xs text-brand-black/40">Ask your agent anything...</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z" />
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
