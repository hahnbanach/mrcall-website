'use client';

import { motion } from 'framer-motion';
import PillButton from './PillButton';
import { URLS, PRICING_PLANS } from '@/lib/constants';

export default function PricingBlock() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
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
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-brand-black">
            Simple,{' '}
            <span className="text-brand-blue">transparent</span> pricing.
          </h2>
          <p className="mt-4 text-brand-black/50 text-base">
            All prices exclude VAT. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[20px] p-8 flex flex-col ${
                plan.featured
                  ? 'bg-white shadow-xl border-2 border-brand-blue ring-1 ring-brand-blue/10 scale-[1.02]'
                  : 'bg-white shadow-sm border border-brand-mid-grey/30'
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-lg font-bold text-brand-black">{plan.name}</h3>

              {/* Price — using Noto Serif accent font */}
              <div className="mt-4 mb-1">
                <span className="font-[family-name:var(--font-noto-serif)] italic text-5xl font-bold text-brand-black">
                  &euro;{plan.price}
                </span>
                <span className="font-[family-name:var(--font-noto-serif)] italic text-lg font-bold text-brand-black/60 ml-1">
                  /month
                </span>
              </div>

              {/* Minutes */}
              <p className="text-sm text-brand-black/50 mb-6">
                {plan.minutes} ({plan.calls})
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-brand-black/70">
                    {j === 0 && plan.name !== 'Essential' ? (
                      <span className="text-brand-blue font-bold text-xs mt-0.5">+</span>
                    ) : (
                      <svg className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <PillButton
                href={URLS.signup}
                variant={plan.featured ? 'primary' : 'secondary'}
                size="small"
                className="w-full"
                external
              >
                Get started
              </PillButton>
            </motion.div>
          ))}
        </div>

        {/* FAQ teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 space-y-6"
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-brand-black/50">
            <span>Free trial available</span>
            <span>&middot;</span>
            <span>No special hardware needed</span>
            <span>&middot;</span>
            <span>Upgrade or downgrade anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
