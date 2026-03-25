import { google } from 'googleapis';

const TIMEZONE = 'Europe/Rome';
const SLOT_DURATION_MIN = 15;
const SLOT_INTERVAL_MIN = 30;
const SLOT_START_HOUR = 16; // 4 PM
const SLOT_END_HOUR = 18;   // 6 PM (last slot starts at 17:30)
const LOOKAHEAD_DAYS = 14;

function getCalendar() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,
    key: process.env.GOOGLE_CALENDAR_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/calendar'],
    subject: process.env.GOOGLE_CALENDAR_ID || 'support@mrcall.ai',
  });
  return google.calendar({ version: 'v3', auth });
}

/** Generate all possible slot start times for a given date (in Europe/Rome). */
function generateSlotStarts(dateStr: string): Date[] {
  const slots: Date[] = [];
  for (let h = SLOT_START_HOUR; h < SLOT_END_HOUR; h++) {
    for (let m = 0; m < 60; m += SLOT_INTERVAL_MIN) {
      // Skip if the slot would end after SLOT_END_HOUR
      const slotEndMinutes = h * 60 + m + SLOT_DURATION_MIN;
      if (slotEndMinutes > SLOT_END_HOUR * 60) continue;

      // Create as UTC, then subtract Rome offset to get the actual UTC time
      // e.g. 16:00 Rome (CET, UTC+1) → 16:00Z - 1h = 15:00Z
      const asUtc = new Date(`${dateStr}T${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:00Z`);
      const romeOffsetMs = getRomeOffsetMs(asUtc);
      // romeOffsetMs is negative for positive UTC offsets (e.g. -3600000 for CET)
      // To go from "Rome local as UTC" to "actual UTC": add the offset (which subtracts the hours)
      const utc = new Date(asUtc.getTime() + romeOffsetMs);
      slots.push(utc);
    }
  }
  return slots;
}

/** Get the UTC offset in ms for Europe/Rome at a given approximate time. */
function getRomeOffsetMs(approxDate: Date): number {
  // Use Intl to get the actual offset for Europe/Rome
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: TIMEZONE,
    timeZoneName: 'longOffset',
  });
  const parts = formatter.formatToParts(approxDate);
  const tzPart = parts.find(p => p.type === 'timeZoneName')?.value || '+01:00';
  // Parse offset like "GMT+01:00" or "GMT+02:00"
  const match = tzPart.match(/GMT([+-])(\d{2}):(\d{2})/);
  if (!match) return -60 * 60 * 1000; // fallback CET
  const sign = match[1] === '+' ? -1 : 1; // invert: to go from local→UTC we subtract the offset
  const hours = parseInt(match[2], 10);
  const minutes = parseInt(match[3], 10);
  return sign * (hours * 60 + minutes) * 60 * 1000;
}

export interface TimeSlot {
  start: string; // ISO 8601
  end: string;   // ISO 8601
  startLocal: string; // "16:00"
  endLocal: string;   // "16:15"
}

/** Get available slots for the next LOOKAHEAD_DAYS days. */
export async function getAvailableSlots(): Promise<Record<string, TimeSlot[]>> {
  const calendar = getCalendar();
  const calendarId = process.env.GOOGLE_CALENDAR_ID || 'support@mrcall.ai';

  // Build date range
  const now = new Date();
  const end = new Date(now);
  end.setDate(end.getDate() + LOOKAHEAD_DAYS);

  // Get busy times from Google Calendar
  const freeBusy = await calendar.freebusy.query({
    requestBody: {
      timeMin: now.toISOString(),
      timeMax: end.toISOString(),
      timeZone: TIMEZONE,
      items: [{ id: calendarId }],
    },
  });

  const busyPeriods = freeBusy.data.calendars?.[calendarId]?.busy || [];

  // Generate slots for each day and filter out busy ones + past ones
  const result: Record<string, TimeSlot[]> = {};

  for (let d = 0; d < LOOKAHEAD_DAYS; d++) {
    const date = new Date(now);
    date.setDate(date.getDate() + d);

    // Format as YYYY-MM-DD in Rome timezone
    const dateStr = new Intl.DateTimeFormat('sv-SE', { timeZone: TIMEZONE }).format(date);

    // Skip weekends
    const dayOfWeek = new Date(dateStr).getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) continue;

    const slots = generateSlotStarts(dateStr);
    const available: TimeSlot[] = [];

    for (const slotStart of slots) {
      const slotEnd = new Date(slotStart.getTime() + SLOT_DURATION_MIN * 60 * 1000);

      // Skip past slots
      if (slotStart <= now) continue;

      // Check if slot overlaps with any busy period
      const isBusy = busyPeriods.some(busy => {
        const busyStart = new Date(busy.start!);
        const busyEnd = new Date(busy.end!);
        return slotStart < busyEnd && slotEnd > busyStart;
      });

      if (!isBusy) {
        // Format local times
        const startLocal = new Intl.DateTimeFormat('en-GB', {
          timeZone: TIMEZONE,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(slotStart);

        const endLocal = new Intl.DateTimeFormat('en-GB', {
          timeZone: TIMEZONE,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(slotEnd);

        available.push({
          start: slotStart.toISOString(),
          end: slotEnd.toISOString(),
          startLocal,
          endLocal,
        });
      }
    }

    if (available.length > 0) {
      result[dateStr] = available;
    }
  }

  return result;
}

export interface BookingRequest {
  start: string;
  end: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
}

/** Create a calendar event for the booking. */
export async function createBooking(booking: BookingRequest): Promise<string> {
  const calendar = getCalendar();
  const calendarId = process.env.GOOGLE_CALENDAR_ID || 'support@mrcall.ai';

  // Verify the slot is still available
  const freeBusy = await calendar.freebusy.query({
    requestBody: {
      timeMin: booking.start,
      timeMax: booking.end,
      timeZone: TIMEZONE,
      items: [{ id: calendarId }],
    },
  });

  const busyPeriods = freeBusy.data.calendars?.[calendarId]?.busy || [];
  if (busyPeriods.length > 0) {
    throw new Error('SLOT_TAKEN');
  }

  const event = await calendar.events.insert({
    calendarId,
    sendUpdates: 'all',
    requestBody: {
      summary: `MrCall Meeting — ${booking.name}`,
      description: [
        `Name: ${booking.name}`,
        `Email: ${booking.email}`,
        `Phone: ${booking.phone}`,
        booking.message ? `Message: ${booking.message}` : '',
      ].filter(Boolean).join('\n'),
      start: { dateTime: booking.start, timeZone: TIMEZONE },
      end: { dateTime: booking.end, timeZone: TIMEZONE },
      attendees: [
        { email: booking.email, displayName: booking.name },
        { email: calendarId, organizer: true },
      ],
    },
  });

  return event.data.id || '';
}
