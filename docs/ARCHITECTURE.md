# MrCall Website — Architecture

## Overview

The MrCall marketing website (mrcall.ai) is a Next.js 16 application with internationalization for 8 languages, server-side rendering, static page generation, and custom event tracking via the Starchat backend API.

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router, Turbopack) | 16.1.6 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS v4 (`@theme inline`) | 4.x |
| Animation | Framer Motion | 12.x |
| i18n | next-intl | 4.8.x |
| Blog | MDX via @next/mdx + gray-matter | 3.x |
| Tracking Backend | Starchat (Scala/Pekko HTTP) | — |
| Hosting | Scaleway Containers | — |
| Analytics | GTM (GTM-MW4TX4N) + custom tracking | — |

## Project Structure

```
mrcall-website/
├── app/
│   ├── [locale]/              # i18n routes (all 8 locales)
│   │   ├── layout.tsx         # Root layout: fonts, RTL, GTM, tracking, Header/Footer
│   │   ├── page.tsx           # Homepage
│   │   ├── contacts/page.tsx
│   │   ├── usecases/page.tsx
│   │   ├── privacy/page.tsx   # Dynamic loader for per-locale privacy content
│   │   ├── terms/page.tsx     # Dynamic loader for per-locale terms content
│   │   └── cookie-policy/page.tsx
│   ├── blog/                  # English-only blog (own root layout)
│   │   ├── layout.tsx         # Standalone layout with NextIntlClientProvider locale="en"
│   │   ├── page.tsx           # Blog listing
│   │   └── [slug]/page.tsx    # Individual blog post (MDX)
│   └── globals.css            # Tailwind CSS v4 theme + custom styles
├── components/
│   ├── Header.tsx             # Navigation + language switcher (8 locales)
│   ├── Footer.tsx
│   ├── HeroBlock.tsx          # Hero section with transcript simulator
│   ├── PricingBlock.tsx       # Locale-aware pricing (currency + prices from i18n)
│   ├── MobileBlock.tsx        # App store badges + tracking
│   ├── TalkToMrCallBlock.tsx  # Voice demo with consent flow + tracking
│   ├── TrackingProvider.tsx   # Auto pageview tracking on route changes
│   ├── GoogleTagManager.tsx   # GTM with GDPR consent defaults
│   ├── PillButton.tsx         # Reusable CTA button (internal/external)
│   └── ...                    # Other section components
├── content/
│   ├── blog/                  # MDX blog posts
│   └── legal/                 # Per-locale legal page content (TSX components)
│       ├── privacy/           # Privacy Policy — en.tsx, it.tsx, de.tsx, da.tsx, fr.tsx, es.tsx, pt.tsx, ar.tsx
│       └── terms/             # Terms of Service — en.tsx, it.tsx, de.tsx, da.tsx, fr.tsx, es.tsx, pt.tsx, ar.tsx
├── lib/
│   ├── auth.ts                # Cross-domain auth cookie reader (getDashboardUid)
│   ├── blog.ts                # MDX blog post loader (frontmatter parsing, listing)
│   ├── constants.ts           # Non-translatable data: URLs, pricing structure, nav, contact info
│   └── tracking.ts            # Client-side event tracking (fetch with keepalive to Starchat)
├── i18n/
│   ├── routing.ts             # Locale list + routing config
│   ├── request.ts             # Server-side message loading
│   └── navigation.ts          # Locale-aware Link, useRouter, usePathname
├── messages/
│   ├── en.json                # English (default) — ~350 keys
│   ├── it.json                # Italian
│   ├── de.json                # German
│   ├── da.json                # Danish
│   ├── fr.json                # French
│   ├── es.json                # Spanish (European)
│   ├── pt.json                # Portuguese (European)
│   └── ar.json                # Arabic (MSA, RTL)
├── docs/                      # This documentation
├── public/
│   ├── favicon.svg            # MrCall pittogramma (blue circle)
│   └── logos/                 # Brand assets
├── middleware.ts              # next-intl locale detection
├── next.config.ts             # MDX plugin + blog locale redirects + security headers
└── .env.example               # Environment variables template
```

## Key Architectural Decisions

### 1. Static Generation with Dynamic Locale Segment

All marketing pages use `generateStaticParams()` to pre-render for all 8 locales at build time. This means 8 × 6 pages = **48 static HTML pages** plus the blog.

Every `[locale]` page must call `setRequestLocale(locale)` for next-intl to work with static rendering.

### 2. Blog is English-Only

The blog lives at `app/blog/` (outside `[locale]`), with its own root `<html>` layout that hardcodes `locale="en"`. Non-English blog URLs (`/it/blog`, `/fr/blog/slug`) redirect to the English equivalent via `next.config.ts` redirects.

### 3. Locale-Aware Pricing

Currency symbols and prices are NOT in `lib/constants.ts`. They're in the message files:
- EN/AR: `$` with prices 29/55/160
- IT/DE/FR/ES/PT/DA: `€` with prices 25/50/150

VAT is mentioned only in EU locale `vatNote` strings, not in EN/AR.

### 4. RTL Arabic Support

When `locale === 'ar'`:
- `<html dir="rtl">` is set in the layout
- Noto Sans Arabic font is loaded
- CSS uses logical properties throughout: `text-start`, `ms-*`, `ps-*`, `end-*`, `inset-x-0`
- Directional icons use `rtl:scale-x-[-1]` to flip arrows

### 5. Tracking via Starchat Backend

Instead of Google Analytics, events are tracked via the **Starchat** backend API (`/mrcall/v1/tracking/events`), which writes to the shared Scaleway PostgreSQL/TimescaleDB database. The website has no direct database connection — all tracking goes through Next.js API routes that proxy to Starchat. This enables:
- Cross-product attribution (website visitor → dashboard signup → paying customer)
- Full data ownership, no third-party data sharing
- No analytics cookies needed (GDPR-friendly)
- All URL query parameters tracked (not just UTM — also `?ref=`, `?promo=`, etc.), with a denylist for sensitive params (tokens, passwords, keys)
- Logged-in dashboard users identified via cross-domain `mrcall_uid` cookie
- Demo rate limiting via Starchat's `/mrcall/v1/tracking/demo-check` endpoint

**Backend-proxy pattern (secure):** The API key (`TRACKING_API_KEY`) is stored as a server-only environment variable (no `NEXT_PUBLIC_` prefix). The browser calls `/api/track` and `/api/demo-check`, the Next.js API routes forward to Starchat (`https://api.mrcall.ai`) with the `X-Tracking-Key` header and the client IP via `X-Forwarded-For`. The API key never reaches the client.

- Production → always calls `https://api.mrcall.ai/mrcall/v1/tracking/events`
- Local dev → console logging only (no API calls)

GTM (`GTM-MW4TX4N`) is kept for future ad pixel support.

### 6. Cross-Domain Auth with Dashboard

The dashboard (`dashboard.mrcall.ai`) sets a `mrcall_uid` cookie on `.mrcall.ai` when a user logs in via Firebase. The website reads this cookie (`lib/auth.ts`) to:
- Show "My Dashboard" instead of "Sign In" / "Try Free" in the Header
- Include the Firebase UID in tracking event metadata for cross-product attribution

The cookie contains only the Firebase UID (non-sensitive) and expires after 30 days. See `docs/tracking.md` for full details.

### 7. Font System

Three Google Fonts loaded:
- **Montserrat** (300, 400, 700) — primary sans-serif (`--font-montserrat`)
- **Noto Serif Display** (700 italic) — accent font for prices and headings (`--font-noto-serif`)
- **Noto Sans Arabic** (400, 700) — Arabic locale only (`--font-arabic`)

### 8. Security Headers

`next.config.ts` sets security headers on all routes (`/(.*)`):

| Header | Value |
|--------|-------|
| X-Frame-Options | `DENY` |
| X-Content-Type-Options | `nosniff` |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Permissions-Policy | `geolocation=(), camera=(), microphone=(), payment=()` |
| Content-Security-Policy | Allows self + GTM + Google Analytics + Starchat endpoints |

### 9. Legal Content Pattern (Privacy & Terms)

Legal pages (Privacy Policy, Terms of Service) use **per-locale TSX component files** in `content/legal/` rather than JSON message keys. This is because legal documents are 5–10 KB of structured HTML with headings, lists, and links — impractical for flat JSON.

Each locale has its own file (e.g., `content/legal/privacy/en.tsx`, `content/legal/terms/it.tsx`) exporting a default React component. The page files (`app/[locale]/privacy/page.tsx`, `app/[locale]/terms/page.tsx`) use dynamic imports to load the correct locale at build time.

### 10. Component Pattern

All section components are client components (`'use client'`) using:
- `useTranslations('namespace')` for localized strings
- `useLocale()` for locale-aware behavior
- Framer Motion `motion.div` with `whileInView` for scroll animations
- Tracking calls on key user interactions

### 11. Voice Demo (MrCallDirectVoice SDK)

The "Live Demo" section (`TalkToMrCallBlock`) lets visitors have a real AI voice conversation with MrCall directly from the website.

**Architecture:**

```
Browser                          Next.js Server              StarChat (api.mrcall.ai)
  │                                   │                              │
  │  POST /api/voice-init             │                              │
  │──────────────────────────────────►│  POST /mrcall/v1/voice/init  │
  │                                   │  + Basic Auth credentials    │
  │                                   │─────────────────────────────►│
  │                                   │◄─────────────────────────────│
  │◄──────────────────────────────────│  { wsUrl, sessionId }        │
  │  { wsUrl, sessionId }            │                              │
  │                                   │                              │
  │  WebSocket (wss://api.mrcall.ai)  │                              │
  │──────────────────────────────────────────────────────────────────►│
  │◄────────────────────────────────────────────────────────────────►│
  │  Binary audio frames (Opus/PCM16) │                              │
```

**Backend-init pattern (secure):** API credentials (`MRCALL_VOICE_AUTH_USER`, `MRCALL_VOICE_AUTH_PASSWORD`) are stored as server-only environment variables (no `NEXT_PUBLIC_` prefix). The browser calls `/api/voice-init`, the Next.js API route calls StarChat's init endpoint with Basic Auth, and returns only the `wsUrl` to the browser. Credentials never reach the client.

**SDK:** The MrCallDirectVoice JS SDK (`public/MrCallDirectVoice.bundle.min.js`, sourced from the `mrcalldirectvoicejs` repository) is loaded via `<Script>` in the root layout (`strategy="afterInteractive"`). It provides zero-dependency browser-based voice calls via WebSocket binary audio streaming with Opus compression (automatic PCM16 fallback). The component uses `startStream(wsUrl)` — not `startCall()` — since the init is handled server-side. To update the SDK, copy the new bundle from the `mrcalldirectvoicejs` repo's `dist/` folder.

**CSP and Permissions-Policy changes:**
- `script-src`: Added `blob:` (AudioWorklet processors)
- `connect-src`: Added `https://api.mrcall.ai wss://api.mrcall.ai` (WebSocket streaming)
- `worker-src`: Added `blob:` (AudioWorklet)
- `Permissions-Policy`: Changed `microphone=()` → `microphone=(self)` (required for `getUserMedia`)

**Rate limiting:** Unchanged — the existing Starchat demo-check endpoint gates demo access (3/day anonymous, 10/day logged-in).
