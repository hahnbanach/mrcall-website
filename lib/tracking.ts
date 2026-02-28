/**
 * Client-side website event tracking.
 *
 * Sends events to /api/track which writes them to the Scaleway PostgreSQL DB.
 * Designed to be lightweight, non-blocking, and privacy-respectful:
 * - No cookies — uses localStorage for anonymous session ID
 * - No fingerprinting — only collects screen width + user agent
 * - Uses sendBeacon for reliable delivery (even on page unload)
 * - Silently fails — tracking should never break the user experience
 */

import { getDashboardUid } from './auth';

const SESSION_KEY = 'mrcall_sid';
const UTM_KEY = 'mrcall_utm';
const TRACK_ENDPOINT = '/api/track';

// ─── Session ID ──────────────────────────────────────────────

function generateSessionId(): string {
  // Compact random ID: timestamp + random hex
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 10);
  return `${ts}-${rand}`;
}

function getSessionId(): string {
  if (typeof window === 'undefined') return '';

  let sid = localStorage.getItem(SESSION_KEY);
  if (!sid) {
    sid = generateSessionId();
    localStorage.setItem(SESSION_KEY, sid);
  }
  return sid;
}

// ─── UTM Parameters ──────────────────────────────────────────

interface UtmParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

function captureUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const utm: UtmParams = {};

  const source = params.get('utm_source');
  const medium = params.get('utm_medium');
  const campaign = params.get('utm_campaign');
  const content = params.get('utm_content');
  const term = params.get('utm_term');

  if (source) utm.utmSource = source;
  if (medium) utm.utmMedium = medium;
  if (campaign) utm.utmCampaign = campaign;
  if (content) utm.utmContent = content;
  if (term) utm.utmTerm = term;

  // Persist UTMs for the session (so subsequent pageviews retain attribution)
  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem(UTM_KEY, JSON.stringify(utm));
  }

  // Return persisted UTMs if no fresh ones in URL
  if (Object.keys(utm).length === 0) {
    try {
      const stored = sessionStorage.getItem(UTM_KEY);
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
  }

  return utm;
}

// ─── Query Parameters ────────────────────────────────────────

const UTM_PARAMS = new Set(['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']);

function captureQueryParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};

  params.forEach((value, key) => {
    // Skip UTM params — they're already handled by captureUtmParams()
    if (!UTM_PARAMS.has(key.toLowerCase())) {
      result[key] = value;
    }
  });

  return result;
}

// ─── Core Track Function ─────────────────────────────────────

export type TrackEventType =
  | 'pageview'
  | 'cta_click'
  | 'demo_start'
  | 'demo_consent'
  | 'pricing_view'
  | 'app_store_click'
  | 'language_switch'
  | 'scroll_depth'
  | 'outbound_click';

export interface TrackOptions {
  /** Current page locale (e.g. 'en', 'it', 'ar') */
  locale?: string;
  /** Extra data specific to this event */
  metadata?: Record<string, unknown>;
}

export function track(eventType: TrackEventType, options: TrackOptions = {}) {
  if (typeof window === 'undefined') return;

  // Don't track in development
  if (process.env.NODE_ENV === 'development') {
    console.debug('[tracking]', eventType, options);
    return;
  }

  const utm = captureUtmParams();
  const queryParams = captureQueryParams();
  const uid = getDashboardUid();

  const payload = {
    sessionId: getSessionId(),
    eventType,
    pagePath: window.location.pathname,
    referrer: document.referrer || undefined,
    ...utm,
    locale: options.locale,
    userAgent: navigator.userAgent,
    screenWidth: window.screen?.width,
    metadata: {
      ...options.metadata,
      ...(Object.keys(queryParams).length > 0 && { queryParams }),
      ...(uid && { uid }),
    },
  };

  // Prefer sendBeacon (works on page unload), fall back to fetch
  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    navigator.sendBeacon(TRACK_ENDPOINT, new Blob([body], { type: 'application/json' }));
  } else {
    fetch(TRACK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {
      // Silently fail — tracking should never break UX
    });
  }
}

// ─── Convenience Helpers ─────────────────────────────────────

/** Track a CTA button click */
export function trackCta(buttonName: string, locale?: string) {
  track('cta_click', { locale, metadata: { button: buttonName } });
}

/** Track an app store badge click */
export function trackAppStore(store: 'ios' | 'android', locale?: string) {
  track('app_store_click', { locale, metadata: { store } });
}

/** Track demo interaction */
export function trackDemo(step: 'start' | 'consent', locale?: string) {
  track(step === 'start' ? 'demo_start' : 'demo_consent', { locale });
}

/** Track language switch */
export function trackLanguageSwitch(from: string, to: string) {
  track('language_switch', { locale: to, metadata: { from, to } });
}

/** Track outbound link click */
export function trackOutbound(url: string, locale?: string) {
  track('outbound_click', { locale, metadata: { url } });
}
