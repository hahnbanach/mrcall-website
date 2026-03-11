# MrCall Website — Deployment

## Hosting

The website is deployed on **Scaleway Containers** with `output: 'standalone'` in next.config.ts.

## Build

```bash
npm run build     # Production build (Next.js + Turbopack)
npm run dev       # Development server (hot reload)
npm run start     # Serve production build locally
npm run lint      # ESLint
```

### Build Output

The build generates:
- **48+ static HTML pages** (8 locales × 6 pages each)
- **2 dynamic blog routes** (`/blog`, `/blog/[slug]`)
- **Middleware** for locale detection

## Environment Variables

### Required

| Variable | Description | Notes |
|----------|-------------|-------|
| `NEXT_PUBLIC_TRACKING_API_KEY` | Write-only API key for Starchat tracking endpoint | Public by design (exposed client-side, like Segment/Mixpanel keys). Only allows writing non-sensitive tracking events. |
| `MRCALL_VOICE_BASE_URL` | StarChat API base URL for voice init | Server-only. e.g. `https://api.mrcall.ai` |
| `MRCALL_VOICE_BUSINESS_ID` | Business ID for the website's voice demo agent | Server-only. |
| `MRCALL_VOICE_AUTH_USER` | API username for voice init Basic Auth | Server-only. Never exposed to browser. |
| `MRCALL_VOICE_AUTH_PASSWORD` | API password for voice init Basic Auth | Server-only. Never exposed to browser. |

### Not Required

- No database credentials — the website has no direct DB connection (all tracking goes through Starchat)
- No Google Analytics ID needed (tracking is self-hosted via Starchat)
- GTM ID (`GTM-MW4TX4N`) is hardcoded in `components/GoogleTagManager.tsx`

> **Note:** If voice env vars are missing, the `/api/voice-init` route returns 503 and the demo gracefully shows an error message. The rest of the website works fine.

## DNS / Domain

- **Production**: `mrcall.ai` (Scaleway Containers) — `main` branch
- **Dev / Staging**: `dev.mrcall.ai` (Scaleway Containers) — `test` branch
- **Dashboard**: `dashboard.mrcall.ai` (separate Vue.js app)

The `test` branch auto-deploys to `dev.mrcall.ai` for staging and QA before merging to `main`.

## Security Headers

`next.config.ts` sets the following headers on all routes:

| Header | Value |
|--------|-------|
| X-Frame-Options | `DENY` |
| X-Content-Type-Options | `nosniff` |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Permissions-Policy | `geolocation=(), camera=(), microphone=(self), payment=()` |
| Content-Security-Policy | `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com blob: data:; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com; font-src 'self'; connect-src 'self' https://api.mrcall.ai wss://api.mrcall.ai https://www.google-analytics.com https://analytics.google.com; frame-src https://www.googletagmanager.com; worker-src 'self' blob: data:; object-src 'none'; base-uri 'self'; form-action 'self'` |

## GTM (Google Tag Manager)

GTM container `GTM-MW4TX4N` is included in both layouts with GDPR-compliant consent defaults:

| Consent Type | Default |
|-------------|---------|
| `ad_personalization` | denied |
| `ad_storage` | denied |
| `ad_user_data` | denied |
| `analytics_storage` | denied |
| `functionality_storage` | granted |
| `security_storage` | granted |
| `ads_data_redaction` | true |
| `url_passthrough` | true |

All tracking is denied by default. To enable Google Ads or other marketing pixels in the future, configure them in the GTM dashboard and implement a cookie consent banner.

## Favicon

The favicon is `public/favicon.svg` — the MrCall blue circle pittogramma, sourced from `mrcall.ai`. Referenced in both layouts' metadata:

```typescript
icons: {
  icon: '/favicon.svg',
  apple: '/favicon.svg',
}
```

## Blog

Blog posts are MDX files in `content/blog/`. The blog is **English-only**. Non-English blog URLs redirect to English:

| Request | Redirects To |
|---------|-------------|
| `/it/blog` | `/blog` |
| `/fr/blog/my-post` | `/blog/my-post` |

These redirects are configured in `next.config.ts`.
