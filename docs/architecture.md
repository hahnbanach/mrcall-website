# MrCall Website — Architecture

## Overview

The MrCall marketing website (mrcall.ai) is a Next.js 16 application with internationalization for 8 languages, server-side rendering, static page generation, and custom event tracking to a shared PostgreSQL/TimescaleDB database on Scaleway.

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router, Turbopack) | 16.1.6 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS v4 (`@theme inline`) | 4.x |
| Animation | Framer Motion | 12.x |
| i18n | next-intl | 4.8.x |
| Blog | MDX via @next/mdx + gray-matter | 3.x |
| Database | PostgreSQL + TimescaleDB (Scaleway) | — |
| DB Client | pg (node-postgres) | 8.x |
| Hosting | Vercel | — |
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
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── cookie-policy/page.tsx
│   ├── blog/                  # English-only blog (own root layout)
│   │   ├── layout.tsx         # Standalone layout with NextIntlClientProvider locale="en"
│   │   ├── page.tsx           # Blog listing
│   │   └── [slug]/page.tsx    # Individual blog post (MDX)
│   ├── api/
│   │   └── track/route.ts     # POST /api/track — event tracking endpoint
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
├── lib/
│   ├── auth.ts                # Cross-domain auth cookie reader (getDashboardUid)
│   ├── constants.ts           # Non-translatable data: URLs, pricing structure, nav
│   ├── db.ts                  # PostgreSQL connection pool (singleton)
│   └── tracking.ts            # Client-side event tracking (sendBeacon + fetch)
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
├── content/
│   └── blog/                  # MDX blog posts
├── scripts/
│   └── create-tracking-table.sql  # DB migration for website_events
├── docs/                      # This documentation
├── public/
│   ├── favicon.svg            # MrCall pittogramma (blue circle)
│   └── logos/                 # Brand assets
├── middleware.ts              # next-intl locale detection
├── next.config.ts             # MDX plugin + blog locale redirects
└── .env.example               # DB connection env vars template
```

## Key Architectural Decisions

### 1. Static Generation with Dynamic Locale Segment

All marketing pages use `generateStaticParams()` to pre-render for all 8 locales at build time. This means 8 × 6 pages = **48 static HTML pages** plus the blog and API route.

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

### 5. Tracking: Own DB, Not Third-Party Analytics

Instead of Google Analytics, events are tracked to the shared Scaleway PostgreSQL/TimescaleDB database (same DB as the MrCall backend). This enables:
- Cross-product attribution (website visitor → dashboard signup → paying customer)
- Full data ownership, no third-party data sharing
- No analytics cookies needed (GDPR-friendly)
- All URL query parameters tracked (not just UTM — also `?ref=`, `?promo=`, etc.)
- Logged-in dashboard users identified via cross-domain `mrcall_uid` cookie

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

### 8. Component Pattern

All section components are client components (`'use client'`) using:
- `useTranslations('namespace')` for localized strings
- `useLocale()` for locale-aware behavior
- Framer Motion `motion.div` with `whileInView` for scroll animations
- Tracking calls on key user interactions
