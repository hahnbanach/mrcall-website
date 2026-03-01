import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

// Rate limit: simple in-memory counter (resets per serverless cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 60;       // max events per window
const RATE_WINDOW = 60_000;  // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

// Allowed event types (whitelist to prevent abuse)
const ALLOWED_EVENTS = new Set([
  'pageview',
  'cta_click',
  'demo_start',
  'demo_consent',
  'demo_limit_reached',
  'pricing_view',
  'app_store_click',
  'language_switch',
  'scroll_depth',
  'outbound_click',
]);

interface TrackingEvent {
  sessionId: string;
  eventType: string;
  pagePath?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  locale?: string;
  userAgent?: string;
  screenWidth?: number;
  metadata?: Record<string, unknown>;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting (Vercel provides this header)
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }

    const body = (await request.json()) as TrackingEvent;

    // Validate required fields
    if (!body.sessionId || !body.eventType) {
      return NextResponse.json(
        { error: 'Missing sessionId or eventType' },
        { status: 400 }
      );
    }

    // Validate event type
    if (!ALLOWED_EVENTS.has(body.eventType)) {
      return NextResponse.json(
        { error: 'Invalid eventType' },
        { status: 400 }
      );
    }

    // Sanitize string lengths
    const sanitize = (s: string | undefined, max: number) =>
      s ? s.slice(0, max) : null;

    // Extract geo data from Vercel headers
    const country = request.headers.get('x-vercel-ip-country') || undefined;
    const city = request.headers.get('x-vercel-ip-city') || undefined;

    const pool = getPool();

    await pool.query(
      `INSERT INTO website_events
        (session_id, event_type, page_path, referrer,
         utm_source, utm_medium, utm_campaign, utm_content, utm_term,
         locale, user_agent, screen_width, country, city, metadata)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`,
      [
        sanitize(body.sessionId, 64),
        sanitize(body.eventType, 50),
        sanitize(body.pagePath, 500),
        sanitize(body.referrer, 1000),
        sanitize(body.utmSource, 200),
        sanitize(body.utmMedium, 200),
        sanitize(body.utmCampaign, 200),
        sanitize(body.utmContent, 200),
        sanitize(body.utmTerm, 200),
        sanitize(body.locale, 10),
        sanitize(body.userAgent, 1000),
        body.screenWidth ? Math.min(body.screenWidth, 10000) : null,
        sanitize(country, 2),
        sanitize(city, 200),
        body.metadata ? JSON.stringify(body.metadata) : '{}',
      ]
    );

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('[tracking] Failed to record event:', error);
    // Return 200 anyway — tracking should never block the user experience
    return NextResponse.json({ ok: true }, { status: 200 });
  }
}

// Health check / prevent caching
export async function GET() {
  return NextResponse.json({ status: 'tracking endpoint active' });
}
