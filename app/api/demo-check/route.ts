import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

const DEMO_LIMIT_ANONYMOUS = 3;
const DEMO_LIMIT_LOGGED_IN = 10;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, uid } = body as { sessionId?: string; uid?: string };

    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 });
    }

    const limit = uid ? DEMO_LIMIT_LOGGED_IN : DEMO_LIMIT_ANONYMOUS;

    const pool = getPool();

    // Count demo_consent events in the last 24 hours.
    // If user is logged in (uid), check by uid; otherwise check by session_id.
    let result;
    if (uid) {
      result = await pool.query(
        `SELECT count(*) AS cnt FROM website_events
         WHERE event_type = 'demo_consent'
         AND metadata->>'uid' = $1
         AND created_at > NOW() - INTERVAL '24 hours'`,
        [uid]
      );
    } else {
      result = await pool.query(
        `SELECT count(*) AS cnt FROM website_events
         WHERE event_type = 'demo_consent'
         AND session_id = $1
         AND created_at > NOW() - INTERVAL '24 hours'`,
        [sessionId]
      );
    }

    const used = parseInt(result.rows[0]?.cnt || '0', 10);
    const allowed = used < limit;
    const remaining = Math.max(0, limit - used);

    return NextResponse.json({ allowed, remaining, limit, used });
  } catch (error) {
    console.error('[demo-check] Error:', error);
    // On error, allow the demo — don't block UX due to tracking DB issues
    return NextResponse.json({ allowed: true, remaining: 1, limit: 3, used: 0 });
  }
}
