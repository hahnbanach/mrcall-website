# MrCall Website — Event Tracking

## Overview

The website tracks user events to the shared **Scaleway PostgreSQL/TimescaleDB** database — the same database used by the MrCall backend (StarChat) and dashboard. This enables cross-product attribution: linking anonymous website visitors to dashboard signups and paying customers.

No Google Analytics. No third-party analytics cookies. GTM (`GTM-MW4TX4N`) is kept only for future ad pixel support.

## Architecture

```
┌─────────────┐     sendBeacon/fetch     ┌──────────────────┐     pg pool     ┌──────────────────────┐
│   Browser    │  ────────────────────►   │  /api/track      │  ──────────►    │  Scaleway PostgreSQL │
│  (tracking.  │   POST JSON              │  (Vercel fn)     │   INSERT        │  + TimescaleDB       │
│   ts)        │                          │  rate-limited    │                 │  website_events      │
└─────────────┘                          │  validated       │                 │  (hypertable)        │
                                          └──────────────────┘                 └──────────────────────┘
```

## Components

### 1. Client-Side Tracker (`lib/tracking.ts`)

Lightweight browser-side utility:
- **No cookies** — uses `localStorage` for anonymous session ID (`mrcall_sid`)
- **UTM persistence** — captures UTM params from URL, stores in `sessionStorage` for attribution across pageviews
- **All query params** — captures any non-UTM URL parameters (e.g. `?ref=partner`, `?promo=summer`) and includes them in `metadata.queryParams`
- **Cross-domain auth** — reads the `mrcall_uid` cookie (set by the dashboard) to include the Firebase UID in `metadata.uid` for cross-product attribution
- **`sendBeacon`** for reliable delivery (works even on page unload)
- **Silent failures** — tracking errors never break the user experience
- **Dev mode** — logs to console instead of hitting the API

#### Functions

| Function | Purpose | Event Type |
|----------|---------|------------|
| `track(type, options)` | Core tracker | Any allowed type |
| `trackCta(buttonName, locale)` | CTA button clicks | `cta_click` |
| `trackAppStore(store, locale)` | App store badge clicks | `app_store_click` |
| `trackDemo(step, locale)` | Demo flow interactions | `demo_start` / `demo_consent` |
| `trackLanguageSwitch(from, to)` | Language picker | `language_switch` |
| `trackOutbound(url, locale)` | External link clicks | `outbound_click` |

#### Tracked Data Per Event

| Field | Source |
|-------|--------|
| `sessionId` | `localStorage` (generated: `base36_timestamp-random`) |
| `eventType` | Passed by caller |
| `pagePath` | `window.location.pathname` |
| `referrer` | `document.referrer` |
| `utmSource/Medium/Campaign/Content/Term` | URL params or `sessionStorage` |
| `locale` | Passed by caller (from `useLocale()`) |
| `userAgent` | `navigator.userAgent` |
| `screenWidth` | `window.screen.width` |
| `metadata` | Event-specific JSONB (e.g. `{"button": "hero_try_free"}`) |
| `metadata.queryParams` | Non-UTM URL query params (e.g. `{"ref": "partner", "promo": "summer"}`) |
| `metadata.uid` | Firebase UID from cross-domain `mrcall_uid` cookie (if logged in) |

### 2. API Endpoint (`app/api/track/route.ts`)

Next.js API route (Vercel serverless function):

- **Rate limiting**: 60 events/minute per IP (in-memory counter, resets on cold start)
- **Input validation**: Whitelisted event types only, required `sessionId` + `eventType`
- **String sanitization**: All inputs truncated to column max lengths
- **Geo enrichment**: Reads `x-vercel-ip-country` and `x-vercel-ip-city` headers
- **Fail-safe**: Returns 200 even on DB errors (tracking must never block UX)

#### Allowed Event Types

```
pageview, cta_click, demo_start, demo_consent, demo_limit_reached,
pricing_view, app_store_click, language_switch, scroll_depth, outbound_click
```

### 3. Demo Rate Limiting (`app/api/demo-check/route.ts`)

Server-side gate for the "Talk to MrCall" voice demo. Checks how many `demo_consent` events the user has fired in the last 24 hours and returns whether they're allowed to start another.

| User Type | Limit | Identifier |
|-----------|-------|------------|
| Anonymous (no `mrcall_uid` cookie) | **3 demos/day** | `session_id` |
| Logged-in (has `mrcall_uid` cookie) | **10 demos/day** | `metadata.uid` |

**Flow:**
1. User clicks "Talk to MrCall" → client-side cookie pre-check (`mrcall_demo` cookie stores today's count)
2. If pre-check passes → consent screen appears
3. User clicks "Start conversation" → `POST /api/demo-check` with `{ sessionId, uid? }`
4. Server queries `website_events` for `demo_consent` count in last 24h
5. Returns `{ allowed, remaining, limit, used }`
6. If allowed → consent cookie updated, `demo_consent` event tracked, demo starts
7. If denied → `demo_limit_reached` event tracked, "limit reached" screen shown

**Cookie:** `mrcall_demo` — stores daily demo count. `Path=/; SameSite=Lax; Secure; Max-Age=86400`. Used for fast client-side pre-check only; server is the real gate.

Anonymous users who hit the limit see a "Sign in for up to 10 demos per day" CTA.

### 4. Auto Pageview Tracking (`components/TrackingProvider.tsx`)

React component that wraps the app (inside `NextIntlClientProvider`) and automatically fires a `pageview` event whenever `usePathname()` changes.

Included in both:
- `app/[locale]/layout.tsx` — main site (all locales)
- `app/blog/layout.tsx` — blog (English only)

### 5. Database Connection (`lib/db.ts`)

Singleton `pg.Pool` configured for Vercel serverless:
- Max 5 connections (serverless instances are short-lived)
- 10s idle timeout
- 5s connection timeout
- SSL configurable via env var

### 6. Database Table (`scripts/create-tracking-table.sql`)

`website_events` table in the `public` schema, converted to a TimescaleDB hypertable (7-day chunks).

## Currently Tracked Interactions

| Component | Event | Metadata |
|-----------|-------|----------|
| TrackingProvider | `pageview` | locale |
| HeroBlock (Try Free) | `cta_click` | `{"button": "hero_try_free"}` |
| Header (Try Free) | `cta_click` | `{"button": "header_try_free"}` |
| Header (Sign In) | `outbound_click` | `{"url": "https://dashboard.mrcall.ai"}` |
| Header (Language) | `language_switch` | `{"from": "en", "to": "it"}` |
| PricingBlock (Get Started) | `cta_click` | `{"button": "pricing_essential"}` etc. |
| MobileBlock (App Store) | `app_store_click` | `{"store": "ios"}` |
| MobileBlock (Google Play) | `app_store_click` | `{"store": "android"}` |
| TalkToMrCallBlock (Talk) | `demo_start` | locale |
| TalkToMrCallBlock (Consent) | `demo_consent` | locale |
| TalkToMrCallBlock (Limit) | `demo_limit_reached` | `{"source": "cookie"/"server", "used": N, "limit": N}` |

## Environment Variables

```env
TRACKING_DB_HOST=51.159.26.37
TRACKING_DB_PORT=51494
TRACKING_DB_NAME=mrcall-test
TRACKING_DB_USER=mrcalltest
TRACKING_DB_PASS=<password>
TRACKING_DB_SSL=false
```

These must be set in the **Vercel project settings** (not committed to git).

## Deployment Checklist

1. **Run the SQL migration** on Scaleway DB:
   ```bash
   psql -h 51.159.26.37 -p 51494 -U mrcalltest -d mrcall-test -f scripts/create-tracking-table.sql
   ```

2. **Whitelist Vercel IPs** in the Scaleway firewall (or the DB security group) for port 51494.

3. **Set env vars** in Vercel dashboard → Settings → Environment Variables.

4. **Deploy** — the `/api/track` route will start accepting events.

5. **Verify** — visit the site, check the DB:
   ```sql
   SELECT * FROM website_events ORDER BY created_at DESC LIMIT 10;
   ```

## Development

In development (`NODE_ENV=development`), tracking events are logged to the browser console instead of being sent to the API:
```
[tracking] pageview {locale: 'en'}
[tracking] cta_click {locale: 'en', metadata: {button: 'hero_try_free'}}
```

## Useful Queries

```sql
-- Daily pageviews by locale (last 30 days)
SELECT locale, date_trunc('day', created_at) AS day, count(*)
FROM website_events
WHERE event_type = 'pageview' AND created_at > NOW() - INTERVAL '30 days'
GROUP BY locale, day ORDER BY day DESC, count DESC;

-- Top CTAs clicked (last 7 days)
SELECT metadata->>'button' AS button, count(*)
FROM website_events
WHERE event_type = 'cta_click' AND created_at > NOW() - INTERVAL '7 days'
GROUP BY button ORDER BY count DESC;

-- Full visitor journey
SELECT event_type, page_path, metadata, created_at
FROM website_events
WHERE session_id = '<session_id>'
ORDER BY created_at;

-- Country breakdown
SELECT country, count(DISTINCT session_id) AS visitors, count(*) AS events
FROM website_events
WHERE created_at > NOW() - INTERVAL '30 days'
GROUP BY country ORDER BY visitors DESC;

-- Conversion funnel: pageview → CTA click → app store
SELECT event_type, count(DISTINCT session_id) AS unique_sessions
FROM website_events
WHERE event_type IN ('pageview', 'cta_click', 'app_store_click')
  AND created_at > NOW() - INTERVAL '30 days'
GROUP BY event_type;
```

## Cross-Domain Auth Cookie

The dashboard (`dashboard.mrcall.ai`) sets a `mrcall_uid` cookie on the `.mrcall.ai` domain when a user logs in via Firebase. This enables:

1. **Personalized header**: The website shows "My Dashboard" instead of "Sign In" / "Try Free" for logged-in users
2. **Tracking attribution**: The Firebase UID is included in every tracking event's `metadata.uid` field, linking anonymous website activity to known dashboard users

### Cookie Details

| Attribute | Value |
|-----------|-------|
| Name | `mrcall_uid` |
| Value | Firebase UID (e.g. `a1B2c3D4e5F6g7H8i9`) |
| Domain | `.mrcall.ai` (shared across subdomains) |
| Path | `/` |
| SameSite | `Lax` |
| Secure | `true` |
| Max-Age | 30 days (`2592000` seconds) |

### How It Works

```
Dashboard login (dashboard.mrcall.ai)
  → Firebase onAuthStateChanged fires
  → authUtils.js sets mrcall_uid cookie on .mrcall.ai
  → Cookie is readable by mrcall.ai

Website visit (mrcall.ai)
  → lib/auth.ts reads mrcall_uid cookie
  → Header.tsx shows "My Dashboard" if cookie exists
  → lib/tracking.ts includes uid in metadata of every event

Dashboard logout
  → authUtils.js clears mrcall_uid cookie (Max-Age=0)
  → store/index.js logout action also clears it (safety net)
  → Website reverts to "Sign In" / "Try Free"
```

### Files Involved

| File | Project | Role |
|------|---------|------|
| `src/firebase/authUtils.js` | dashboard | Sets/clears cookie in `onAuthStateChanged` |
| `src/store/index.js` | dashboard | Clears cookie in `logout` action |
| `lib/auth.ts` | website | `getDashboardUid()` reads the cookie |
| `components/Header.tsx` | website | Conditional "My Dashboard" vs "Sign In"/"Try Free" |
| `lib/tracking.ts` | website | Includes `uid` in tracking metadata |

### Useful Queries

```sql
-- Find all website activity for a specific dashboard user
SELECT event_type, page_path, metadata, created_at
FROM website_events
WHERE metadata->>'uid' = '<firebase_uid>'
ORDER BY created_at;

-- Which pages do logged-in users visit most?
SELECT page_path, count(*) AS views
FROM website_events
WHERE metadata->>'uid' IS NOT NULL AND event_type = 'pageview'
GROUP BY page_path ORDER BY views DESC;
```

## URL Query Parameter Tracking

All non-UTM URL query parameters are automatically captured and stored in `metadata.queryParams`. This is useful for tracking partner referrals, promo codes, A/B test variants, or any custom campaign parameters.

### Example

A visit to `mrcall.ai/?ref=partner&promo=summer2025` produces:
```json
{
  "metadata": {
    "queryParams": {
      "ref": "partner",
      "promo": "summer2025"
    }
  }
}
```

UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`) are excluded from `queryParams` — they're already stored in dedicated top-level columns.

### Useful Queries

```sql
-- Top referral sources (non-UTM)
SELECT metadata->'queryParams'->>'ref' AS ref_source, count(*)
FROM website_events
WHERE metadata->'queryParams'->>'ref' IS NOT NULL
  AND created_at > NOW() - INTERVAL '30 days'
GROUP BY ref_source ORDER BY count DESC;

-- Promo code usage
SELECT metadata->'queryParams'->>'promo' AS promo, count(DISTINCT session_id) AS visitors
FROM website_events
WHERE metadata->'queryParams'->>'promo' IS NOT NULL
GROUP BY promo ORDER BY visitors DESC;
```

## Future: Cross-Product Attribution (Session-Level)

In addition to the UID-based attribution above, session-level attribution is also possible. When a website visitor signs up on the dashboard (`dashboard.mrcall.ai`), the `mrcall_sid` from `localStorage` can be sent during registration. This creates a link:

```
website_events.session_id  →  customers_registry.id (or business.owner)
```

Enabling queries like:
```sql
-- Which landing pages lead to paying customers?
SELECT we.page_path, count(DISTINCT b.business_id) AS conversions
FROM website_events we
JOIN customers_registry cr ON we.session_id = cr.document->>'website_session_id'
JOIN business b ON cr.id = b.owner AND b.subscription_status = 'active'
WHERE we.event_type = 'pageview'
GROUP BY we.page_path ORDER BY conversions DESC;
```

This requires adding `website_session_id` to the signup flow on the dashboard side.
