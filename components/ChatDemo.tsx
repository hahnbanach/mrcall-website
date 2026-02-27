'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const userMessage = "I need an agent who handles real estate leads, remembers client preferences, and schedules viewings in my Outlook.";

const agentSteps = [
  { icon: '🧠', text: 'Analyzing requirements...' },
  { icon: '🏠', text: 'Loading real estate knowledge base' },
  { icon: '📋', text: 'Enabling client preference memory' },
  { icon: '📅', text: 'Connecting Outlook calendar integration' },
  { icon: '✅', text: 'Agent "Arianna — Real Estate" is ready!' },
];

export default function ChatDemo() {
  const [step, setStep] = useState(0);
  const [showUser, setShowUser] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showSteps, setShowSteps] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Start animation when in view
  useEffect(() => {
    const timer1 = setTimeout(() => setShowUser(true), 500);
    return () => clearTimeout(timer1);
  }, []);

  // Type the user message
  useEffect(() => {
    if (!showUser) return;
    if (typedText.length < userMessage.length) {
      const timer = setTimeout(() => {
        setTypedText(userMessage.slice(0, typedText.length + 1));
      }, 25);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowSteps(true), 600);
      return () => clearTimeout(timer);
    }
  }, [showUser, typedText]);

  // Show agent steps one by one
  useEffect(() => {
    if (!showSteps) return;
    if (currentStep < agentSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      // Reset after a pause
      const timer = setTimeout(() => {
        setShowUser(false);
        setTypedText('');
        setShowSteps(false);
        setCurrentStep(0);
        setTimeout(() => setShowUser(true), 500);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showSteps, currentStep]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [typedText, currentStep]);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-brand-mid-grey/30 overflow-hidden">
        {/* Header */}
        <div className="bg-brand-black px-6 py-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-brand-blue flex items-center justify-center">
            <Image
              src="/logos/mrcall-icon.png"
              alt="MrCall"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-white text-sm font-bold">MrCall Configurator</p>
            <p className="text-white/50 text-xs">Describe your perfect agent</p>
          </div>
        </div>

        {/* Chat area */}
        <div ref={containerRef} className="h-72 overflow-y-auto px-5 py-5 space-y-4 bg-brand-light-grey/50 scroll-smooth">
          {/* System greeting */}
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl px-4 py-3 text-sm text-brand-black/70 shadow-sm max-w-[85%]">
              Tell me what you need. I&apos;ll build your agent in seconds.
            </div>
          </div>

          {/* User message */}
          <AnimatePresence>
            {showUser && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-end"
              >
                <div className="bg-brand-blue text-white rounded-2xl px-4 py-3 text-sm max-w-[85%] leading-relaxed">
                  {typedText}
                  {typedText.length < userMessage.length && (
                    <span className="inline-block w-0.5 h-4 bg-white/70 ml-0.5 animate-pulse align-middle" />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Agent assembly steps */}
          <AnimatePresence>
            {showSteps && agentSteps.slice(0, currentStep).map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-start"
              >
                <div className={`rounded-2xl px-4 py-2.5 text-sm shadow-sm max-w-[85%] flex items-center gap-2 ${
                  i === agentSteps.length - 1 && currentStep === agentSteps.length
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-white text-brand-black/70'
                }`}>
                  <span>{s.icon}</span>
                  <span>{s.text}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Loading indicator */}
          {showSteps && currentStep < agentSteps.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      className="w-2 h-2 rounded-full bg-brand-grey-80/40"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: dot * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input bar */}
        <div className="px-5 py-4 border-t border-brand-mid-grey/20 bg-white">
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-brand-light-grey rounded-full h-10 flex items-center px-4">
              <span className="text-xs text-brand-black/40">Describe your agent...</span>
            </div>
            <button className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
