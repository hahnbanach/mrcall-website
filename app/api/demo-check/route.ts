import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

const STARCHAT_DEMO_CHECK_URL = 'https://api.mrcall.ai/mrcall/v1/tracking/demo-check';
const TRACKING_API_KEY = process.env.TRACKING_API_KEY || '';

// Fail-open defaults — same as Starchat's behavior on DB errors
const FAIL_OPEN_RESPONSE = { allowed: true, remaining: 1, limit: 3, used: 0 };

export async function POST(request: Request) {
  let body: { sessionId?: string; uid?: string } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(FAIL_OPEN_RESPONSE);
  }

  if (!body.sessionId) {
    return NextResponse.json(FAIL_OPEN_RESPONSE);
  }

  if (!TRACKING_API_KEY) {
    // No API key configured — allow (dev mode)
    return NextResponse.json(FAIL_OPEN_RESPONSE);
  }

  // Extract client IP to forward to Starchat
  const headersList = await headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const clientIp = forwardedFor?.split(',')[0]?.trim() || '';

  try {
    const res = await fetch(STARCHAT_DEMO_CHECK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Tracking-Key': TRACKING_API_KEY,
        ...(clientIp && { 'X-Forwarded-For': clientIp }),
      },
      body: JSON.stringify({
        sessionId: body.sessionId,
        ...(body.uid && { uid: body.uid }),
      }),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    // Fail-open: if Starchat is unreachable, allow the demo
    return NextResponse.json(FAIL_OPEN_RESPONSE);
  }
}
