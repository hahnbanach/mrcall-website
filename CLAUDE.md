# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MrCall marketing website (mrcall.ai) — a Next.js 16 app with i18n for 8 languages, static generation, MDX blog, voice demo, and custom event tracking.

## Commands

```bash
npm run dev      # Development server (Turbopack)
npm run build    # Production build
npm start        # Start production server
npm run lint     # ESLint
```

No test framework is configured.

## Architecture

### Stack
- **Next.js 16** (App Router, standalone output for Docker)
- **TypeScript** (strict mode, `@/*` path alias)
- **Tailwind CSS v4** (inline `@theme` syntax, PostCSS)
- **next-intl 4.8** for i18n
- **Framer Motion** for scroll animations
- **MDX** for blog posts

### Routing

All marketing pages live under `app/[locale]/` with static generation via `generateStaticParams()` for 8 locales: `en` (default), `it`, `de`, `da`, `fr`, `es`, `pt`, `ar`. Every `[locale]` page must call `setRequestLocale(locale)`.

The blog is **English-only** at `app/blog/` (outside `[locale]`), with its own root layout. Non-English blog URLs redirect to English via `next.config.ts`.

### i18n

- **Locales**: en, it, de, da, fr, es, pt, ar
- **Prefix**: `as-needed` (English has no prefix)
- **Translation files**: `messages/{locale}.json` (~350 keys each)
- **RTL**: Arabic gets `dir="rtl"`, Noto Sans Arabic font, logical CSS properties (`text-start`, `ms-*`, `ps-*`), and `rtl:scale-x-[-1]` for directional icons
- **Navigation helpers**: use `Link`, `usePathname`, `useRouter` from `i18n/navigation.ts`

### Pricing

Currency and prices are in the **message files** (not `lib/constants.ts`). EN/AR use `$`, EU locales use `€`.

### Tracking

Custom analytics via Starchat backend — no Google Analytics. Browser calls `/api/track`, the Next.js API route proxies to `https://api.mrcall.ai` with server-only `TRACKING_API_KEY`. GTM is kept for future ad pixels only.

### Voice Demo

`TalkToMrCallBlock` provides live AI voice calls. Browser detects WebCodecs support, calls `/api/voice-init` (server adds Basic Auth), gets back a WebSocket URL, then streams audio via the MrCallDirectVoice SDK (`public/MrCallDirectVoice.bundle.min.js`). Uses `startStream(wsUrl)`, not `startCall()`.

### Cross-Domain Auth

Dashboard (`dashboard.mrcall.ai`) sets `mrcall_uid` cookie on `.mrcall.ai`. Website reads it via `lib/auth.ts` to show "My Dashboard" vs "Sign In" in the Header.

### Legal Pages

Privacy and Terms use **per-locale TSX components** in `content/legal/{privacy,terms}/{locale}.tsx` (not JSON keys), because legal docs are large structured HTML.

### Component Pattern

Section components are client components using `useTranslations('namespace')`, `useLocale()`, Framer Motion `whileInView` animations, and tracking calls on interactions.

### Deployment

- **Docker**: Multi-stage build, Node 22 Alpine, port 8080
- **CI/CD**: `.gitlab-ci.yml` → Scaleway Containers
- **Branches**: `dev` → dev.mrcall.ai, `production` → mrcall.ai
- **Vercel**: `vercel.json` present (cleanUrls, no trailing slash)

### Environment Variables

All server-only (no `NEXT_PUBLIC_` prefix):
- `TRACKING_API_KEY` — analytics proxy auth
- `MRCALL_VOICE_BASE_URL`, `MRCALL_VOICE_BUSINESS_ID`, `MRCALL_VOICE_AUTH_USER`, `MRCALL_VOICE_AUTH_PASSWORD` — voice demo credentials
