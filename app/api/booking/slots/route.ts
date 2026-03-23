import { NextResponse } from 'next/server';
import { getAvailableSlots } from '@/lib/google-calendar';

export async function GET() {
  if (!process.env.GOOGLE_CALENDAR_CLIENT_EMAIL || !process.env.GOOGLE_CALENDAR_PRIVATE_KEY) {
    return NextResponse.json({ error: 'Calendar not configured' }, { status: 503 });
  }

  try {
    const slots = await getAvailableSlots();
    return NextResponse.json(slots, {
      headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=30' },
    });
  } catch (err) {
    console.error('Failed to fetch slots:', err);
    return NextResponse.json({ error: 'Failed to fetch availability' }, { status: 500 });
  }
}
