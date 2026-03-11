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

### Not Required

- No database credentials — the website has no direct DB connection (all tracking goes through Starchat)
- No Google Analytics ID needed (tracking is self-hosted via Starchat)
- GTM ID (`GTM-MW4TX4N`) is hardcoded in `components/GoogleTagManager.tsx`

## DNS / Domain

- **Production**: `mrcall.ai` (Scaleway Containers)
- **Dev**: `dev.mrcall.ai` (Scaleway Containers)
- **Dashboard**: `dashboard.mrcall.ai` (separate Vue.js app)

## Security Headers

`next.config.ts` sets the following headers on all routes:

| Header | Value |
|--------|-------|
| X-Frame-Options | `DENY` |
| X-Content-Type-Options | `nosniff` |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Permissions-Policy | `geolocation=(), camera=(), microphone=(), payment=()` |
| Content-Security-Policy | `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com; font-src 'self'; connect-src 'self' https://starchat.mrcall.ai https://starchat-dev.mrcall.ai https://www.google-analytics.com https://analytics.google.com; frame-src https://www.googletagmanager.com; object-src 'none'; base-uri 'self'; form-action 'self'` |

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
