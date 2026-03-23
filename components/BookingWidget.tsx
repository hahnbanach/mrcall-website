'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface TimeSlot {
  start: string;
  end: string;
  startLocal: string;
  endLocal: string;
}

type Step = 'date' | 'form' | 'success' | 'error';

export default function BookingWidget() {
  const t = useTranslations('booking');
  const [slots, setSlots] = useState<Record<string, TimeSlot[]>>({});
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [step, setStep] = useState<Step>('date');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/booking/slots')
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error);
        setSlots(data);
        const firstDate = Object.keys(data)[0];
        if (firstDate) setSelectedDate(firstDate);
      })
      .catch(() => setErrorMsg(t('loadError')))
      .finally(() => setLoading(false));
  }, [t]);

  const dates = Object.keys(slots);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + 'T12:00:00');
    return new Intl.DateTimeFormat(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }).format(d);
  };

  const handleSlotClick = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setStep('form');
  };

  const handleBack = () => {
    setStep('date');
    setSelectedSlot(null);
    setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;
    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/booking/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          start: selectedSlot.start,
          end: selectedSlot.end,
          name,
          email,
          phone,
          message,
        }),
      });

      if (res.status === 409) {
        setErrorMsg(t('slotTaken'));
        setStep('date');
        setSelectedSlot(null);
        // Refresh slots
        const freshSlots = await fetch('/api/booking/slots').then(r => r.json());
        setSlots(freshSlots);
        return;
      }

      if (!res.ok) throw new Error('Failed');
      setStep('success');
    } catch {
      setErrorMsg(t('bookError'));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-mid-grey/20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-light-grey flex items-center justify-center mx-auto mb-5">
          <div className="w-6 h-6 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-sm text-brand-black/50">{t('loading')}</p>
      </div>
    );
  }

  // Success state
  if (step === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-mid-grey/20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-5 text-green-600">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-brand-black mb-2">{t('confirmed')}</h3>
        <p className="text-sm text-brand-black/50">{t('confirmedDesc')}</p>
      </div>
    );
  }

  // No slots available
  if (dates.length === 0 && !errorMsg) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-mid-grey/20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-light-grey flex items-center justify-center mx-auto mb-5 text-brand-blue">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-brand-black mb-2">{t('noSlots')}</h3>
        <p className="text-sm text-brand-black/50">{t('noSlotsDesc')}</p>
      </div>
    );
  }

  // Error loading
  if (errorMsg && step === 'date' && dates.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-mid-grey/20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-5 text-red-500">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-brand-black mb-2">{t('error')}</h3>
        <p className="text-sm text-brand-black/50">{errorMsg}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-mid-grey/20">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-light-grey flex items-center justify-center mx-auto mb-5 text-brand-blue">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-brand-black mb-1">{t('title')}</h3>
        <p className="text-sm text-brand-black/50">{t('subtitle')}</p>
      </div>

      {step === 'date' && (
        <>
          {errorMsg && (
            <p className="text-sm text-red-500 text-center mb-4">{errorMsg}</p>
          )}

          {/* Date selector */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-2 px-2">
            {dates.map(date => (
              <button
                key={date}
                onClick={() => { setSelectedDate(date); setSelectedSlot(null); }}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  selectedDate === date
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-light-grey text-brand-black/70 hover:bg-brand-blue/10'
                }`}
              >
                {formatDate(date)}
              </button>
            ))}
          </div>

          {/* Time slots */}
          {selectedDate && slots[selectedDate] && (
            <div className="grid grid-cols-2 gap-2">
              {slots[selectedDate].map(slot => (
                <button
                  key={slot.start}
                  onClick={() => handleSlotClick(slot)}
                  className="px-4 py-3 rounded-xl text-sm font-medium bg-brand-light-grey text-brand-black/70 hover:bg-brand-blue hover:text-white transition-colors cursor-pointer"
                >
                  {slot.startLocal} – {slot.endLocal}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      {step === 'form' && selectedSlot && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Selected time display */}
          <div className="flex items-center justify-between bg-brand-light-grey rounded-xl px-4 py-3 mb-2">
            <span className="text-sm font-medium text-brand-black">
              {selectedDate && formatDate(selectedDate)} · {selectedSlot.startLocal} – {selectedSlot.endLocal}
            </span>
            <button
              type="button"
              onClick={handleBack}
              className="text-xs text-brand-blue hover:underline cursor-pointer"
            >
              {t('change')}
            </button>
          </div>

          {errorMsg && (
            <p className="text-sm text-red-500 text-center">{errorMsg}</p>
          )}

          <input
            type="text"
            required
            placeholder={t('namePlaceholder')}
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-brand-mid-grey/30 text-sm focus:outline-none focus:border-brand-blue transition-colors"
          />
          <input
            type="email"
            required
            placeholder={t('emailPlaceholder')}
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-brand-mid-grey/30 text-sm focus:outline-none focus:border-brand-blue transition-colors"
          />
          <input
            type="tel"
            required
            placeholder={t('phonePlaceholder')}
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-brand-mid-grey/30 text-sm focus:outline-none focus:border-brand-blue transition-colors"
          />
          <textarea
            placeholder={t('messagePlaceholder')}
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-brand-mid-grey/30 text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none"
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full h-[44px] rounded-[22px] bg-brand-blue text-white font-bold text-sm hover:bg-brand-grey-80 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {submitting ? t('booking') : t('confirmBooking')}
          </button>
        </form>
      )}
    </div>
  );
}
