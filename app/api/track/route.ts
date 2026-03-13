import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

const STARCHAT_TRACKING_URL = 'https://api.mrcall.ai/mrcall/v1/tracking/events';
const TRACKING_API_KEY = process.env.TRACKING_API_KEY || '';

export async function POST(request: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: true }); // fail-safe
  }

  if (!TRACKING_API_KEY) {
    // No API key configured — silently accept (dev mode or misconfigured)
    return NextResponse.json({ ok: true });
  }

  // Extract client IP to forward to Starchat
  const headersList = await headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const clientIp = forwardedFor?.split(',')[0]?.trim() || '';

  try {
    const res = await fetch(STARCHAT_TRACKING_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Tracking-Key': TRACKING_API_KEY,
        ...(clientIp && { 'X-Forwarded-For': clientIp }),
      },
      body: JSON.stringify(body),
    });

    // Forward Starchat's response (usually { ok: true })
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    // Fail-safe: tracking should never break the website
    return NextResponse.json({ ok: true });
  }
}
