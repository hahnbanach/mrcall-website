import { NextResponse } from 'next/server';

const VOICE_BASE_URL = process.env.MRCALL_VOICE_BASE_URL || '';
const VOICE_BUSINESS_ID = process.env.MRCALL_VOICE_BUSINESS_ID || '';
const VOICE_AUTH_USER = process.env.MRCALL_VOICE_AUTH_USER || '';
const VOICE_AUTH_PASSWORD = process.env.MRCALL_VOICE_AUTH_PASSWORD || '';

export async function POST(request: Request) {
  if (!VOICE_BASE_URL || !VOICE_BUSINESS_ID || !VOICE_AUTH_USER || !VOICE_AUTH_PASSWORD) {
    return NextResponse.json(
      { error: 'Voice service not configured' },
      { status: 503 },
    );
  }

  let body: { username?: string; displayName?: string; email?: string; encoding?: string; sampleRate?: number } = {};
  try {
    body = await request.json();
  } catch {
    // No body is fine — username/displayName are optional
  }

  // encoding and sampleRate are determined client-side based on WebCodecs capability:
  // - WebCodecs available (modern desktop/mobile) → opus + 24000
  // - WebCodecs unavailable (iOS < 16.4, older Android) → pcm16 + 16000
  // Using the client's value avoids a server-session/client-encoding mismatch.
  const encoding = body.encoding === 'pcm16' ? 'pcm16' : 'opus';
  const sampleRate = body.sampleRate ?? (encoding === 'opus' ? 24000 : 16000);

  // Build query params matching the SDK's init pattern (query params, no JSON body)
  const params = new URLSearchParams();
  params.set('sampleRate', String(sampleRate));
  params.set('username', body.username || 'website-visitor');
  params.set('encoding', encoding);
  if (body.displayName) params.set('displayName', body.displayName);
  if (body.email) params.set('email', body.email);

  const initUrl = `${VOICE_BASE_URL}/mrcall/v1/voice/init/${encodeURIComponent(VOICE_BUSINESS_ID)}?${params.toString()}`;
  const credentials = Buffer.from(`${VOICE_AUTH_USER}:${VOICE_AUTH_PASSWORD}`).toString('base64');

  try {
    const res = await fetch(initUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`Voice init failed: ${res.status} ${text}`);
      return NextResponse.json(
        { error: 'Voice service unavailable' },
        { status: 503 },
      );
    }

    const data = await res.json();

    // Only return what the browser needs — no credentials
    return NextResponse.json({
      wsUrl: data.wsUrl,
      sessionId: data.sessionId,
      encoding: data.encoding,
    });
  } catch (err) {
    console.error('Voice init error:', err);
    return NextResponse.json(
      { error: 'Voice service unavailable' },
      { status: 503 },
    );
  }
}
