import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function GET() {
  const host = process.env.TRACKING_DB_HOST;
  const hasPass = !!process.env.TRACKING_DB_PASS;
  const ssl = process.env.TRACKING_DB_SSL;

  // Safe diagnostic — never expose credentials
  const config = {
    host: host ? `${host.slice(0, 8)}...` : 'NOT SET',
    port: process.env.TRACKING_DB_PORT || 'NOT SET',
    name: process.env.TRACKING_DB_NAME || 'NOT SET',
    user: process.env.TRACKING_DB_USER ? 'SET' : 'NOT SET',
    pass: hasPass ? 'SET' : 'NOT SET',
    ssl: ssl || 'NOT SET',
  };

  try {
    const pool = getPool();
    await pool.query('SELECT 1');
    return NextResponse.json({ status: 'connected', config });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ status: 'failed', error: message, config });
  }
}
