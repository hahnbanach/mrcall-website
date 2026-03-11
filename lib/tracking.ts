/**
 * Client-side website event tracking.
 *
 * Sends events to the Starchat backend at /mrcall/v1/tracking/events.
 * Designed to be lightweight, non-blocking, and privacy-respectful:
 * - No cookies — uses localStorage for anonymous session ID
 * - No fingerprinting — only collects screen width + user agent
 * - Uses fetch with keepalive for reliable delivery (even on page unload)
 * - Silently fails — tracking should never break the user experience
 */

import { getDashboardUid } from './auth';

const SESSION_KEY = 'mrcall_sid';
const UTM_KEY = 'mrcall_utm';

// ─── Starchat Endpoint URLs (runtime detection) ─────────────

function getTrackingUrl(): string {
  if (typeof window === 'undefined') return '';
  const host = window.location.hostname;
  if (host === 'mrcall.ai' || host === 'www.mrcall.ai' || host === 'dev.mrcall.ai')
    return 'https://api.mrcall.ai/mrcall/v1/tracking/events';
  return ''; // local dev: log only
}

function getDemoCheckUrl(): string {
  if (typeof window === 'undefined') return '';
  const host = window.location.hostname;
  if (host === 'mrcall.ai' || host === 'www.mrcall.ai' || host === 'dev.mrcall.ai')
    return 'https://api.mrcall.ai/mrcall/v1/tracking/demo-check';
  return '';
}

function getTrackingApiKey(): string {
  // In production, this should be set as NEXT_PUBLIC_TRACKING_API_KEY
  // It's a write-only key for the tracking table — safe to expose client-side
  return process.env.NEXT_PUBLIC_TRACKING_API_KEY || '';
}

// ─── Session ID ──────────────────────────────────────────────

function generateSessionId(): string {
  // Compact random ID: timestamp + random hex
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 10);
  return `${ts}-${rand}`;
}

export function getSessionId(): string {
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

// Denylist: never track query params that look like secrets or credentials
const SENSITIVE_PARAMS = new Set([
  'token', 'key', 'apikey', 'api_key', 'secret', 'password', 'pass',
  'auth', 'authorization', 'access_token', 'refresh_token', 'session',
  'credential', 'jwt', 'bearer', 'otp', 'code', 'pin', 'ssn',
]);

function captureQueryParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};

  params.forEach((value, key) => {
    const lower = key.toLowerCase();
    // Skip UTM params (handled separately) and anything that looks like a secret
    if (!UTM_PARAMS.has(lower) && !SENSITIVE_PARAMS.has(lower)) {
      result[key] = value;
    }
  });

  return result;
}

// ─── Core Track Function ─────────────────────────────────────

export type TrackEventType =
  | 'pageview'
  | 'cta_click'
  | 'demo_consent'
  | 'demo_start'
  | 'demo_end'
  | 'signup_start'
  | 'signup_complete'
  | 'scroll_depth'
  | 'time_on_page'
  | 'form_interaction'
  | 'video_play'
  | 'video_complete'
  | 'download'
  | 'share'
  | 'error'
  | 'custom';

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

  const trackingUrl = getTrackingUrl();
  if (!trackingUrl) return; // No endpoint configured for this hostname

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

  const body = JSON.stringify(payload);
  const apiKey = getTrackingApiKey();

  // Use fetch with keepalive (same reliability as sendBeacon for page unload)
  // sendBeacon doesn't support custom headers — we need X-Tracking-Key
  fetch(trackingUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(apiKey && { 'X-Tracking-Key': apiKey }),
    },
    body,
    keepalive: true,
  }).catch(() => {
    // Silently fail — tracking should never break UX
  });
}

// ─── Demo Check ──────────────────────────────────────────────

export interface DemoCheckResponse {
  allowed: boolean;
  remaining: number;
  limit: number;
  used: number;
}

export async function checkDemoLimit(): Promise<DemoCheckResponse> {
  const demoCheckUrl = getDemoCheckUrl();
  const apiKey = getTrackingApiKey();

  if (!demoCheckUrl) {
    // Local dev or unknown hostname — allow
    return { allowed: true, remaining: 3, limit: 3, used: 0 };
  }

  const res = await fetch(demoCheckUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(apiKey && { 'X-Tracking-Key': apiKey }),
    },
    body: JSON.stringify({
      sessionId: getSessionId(),
      uid: getDashboardUid() || undefined,
    }),
  });

  return res.json();
}

// ─── Dashboard URL Builder (Attribution Bridging) ────────────

/**
 * Build a dashboard URL with _tsid (tracking session ID) appended.
 * This enables cross-product attribution: website visit → dashboard signup → paying customer.
 * The dashboard captures _tsid and writes it to the business as TRACKING_SESSION_ID.
 */
export function buildDashboardUrl(url: string): string {
  if (typeof window === 'undefined') return url;

  try {
    const parsed = new URL(url);
    const sessionId = getSessionId();
    if (sessionId) {
      parsed.searchParams.set('_tsid', sessionId);
    }

    // Forward current UTM params if present in the current page URL
    const currentParams = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    for (const key of utmKeys) {
      const value = currentParams.get(key);
      if (value && !parsed.searchParams.has(key)) {
        parsed.searchParams.set(key, value);
      }
    }

    return parsed.toString();
  } catch {
    return url;
  }
}

// ─── Convenience Helpers ─────────────────────────────────────

/** Track a CTA button click */
export function trackCta(buttonName: string, locale?: string) {
  track('cta_click', { locale, metadata: { button: buttonName } });
}

/** Track an app store badge click (mapped to cta_click with store metadata) */
export function trackAppStore(store: 'ios' | 'android', locale?: string) {
  track('cta_click', { locale, metadata: { button: `app_store_${store}`, store } });
}

/** Track demo interaction */
export function trackDemo(step: 'start' | 'consent', locale?: string) {
  track(step === 'start' ? 'demo_start' : 'demo_consent', { locale });
}

/** Track language switch (mapped to custom event) */
export function trackLanguageSwitch(from: string, to: string) {
  track('custom', { locale: to, metadata: { action: 'language_switch', from, to } });
}

/** Track outbound link click (mapped to custom event) */
export function trackOutbound(url: string, locale?: string) {
  track('custom', { locale, metadata: { action: 'outbound_click', url } });
}
