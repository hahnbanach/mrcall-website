import { NextRequest, NextResponse } from 'next/server';
import { createBooking } from '@/lib/google-calendar';

export async function POST(req: NextRequest) {
  if (!process.env.GOOGLE_CALENDAR_CLIENT_EMAIL || !process.env.GOOGLE_CALENDAR_PRIVATE_KEY) {
    return NextResponse.json({ error: 'Calendar not configured' }, { status: 503 });
  }

  try {
    const body = await req.json();
    const { start, end, name, email, phone, message } = body;

    // Basic validation
    if (!start || !end || !name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Validate dates are valid ISO strings
    if (isNaN(Date.parse(start)) || isNaN(Date.parse(end))) {
      return NextResponse.json({ error: 'Invalid date format' }, { status: 400 });
    }

    const eventId = await createBooking({ start, end, name, email, phone, message });
    return NextResponse.json({ ok: true, eventId });
  } catch (err: unknown) {
    if (err instanceof Error && err.message === 'SLOT_TAKEN') {
      return NextResponse.json({ error: 'This slot is no longer available' }, { status: 409 });
    }
    console.error('Failed to create booking:', err);
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}
