declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
  version: number;
}

const CONSENT_KEY = 'mrcall_cookie_consent';
const CONSENT_VERSION = 1;

export function getConsentPreferences(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const prefs = JSON.parse(raw) as ConsentPreferences;
    if (prefs.version !== CONSENT_VERSION) return null;
    return prefs;
  } catch {
    return null;
  }
}

export function hasConsentBeenGiven(): boolean {
  return getConsentPreferences() !== null;
}

export function updateGtagConsent({ analytics, marketing }: { analytics: boolean; marketing: boolean }): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: marketing ? 'granted' : 'denied',
    ad_personalization: marketing ? 'granted' : 'denied',
    personalization_storage: marketing ? 'granted' : 'denied',
  });
}

export function saveConsentPreferences(prefs: { analytics: boolean; marketing: boolean }): void {
  if (typeof window === 'undefined') return;

  const stored: ConsentPreferences = {
    ...prefs,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(stored));
  } catch {
    // localStorage might be unavailable (private browsing, etc.)
  }

  updateGtagConsent(prefs);
}
