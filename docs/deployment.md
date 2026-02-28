# MrCall Website — Deployment

## Hosting

The website is deployed on **Vercel** with automatic deployments from the Git repository.

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
- **1 dynamic API route** (`/api/track`)
- **2 dynamic blog routes** (`/blog`, `/blog/[slug]`)
- **Middleware** for locale detection (Vercel calls this "Proxy" in newer versions)

## Environment Variables

### Required for Tracking (Vercel → Settings → Environment Variables)

| Variable | Value | Notes |
|----------|-------|-------|
| `TRACKING_DB_HOST` | `51.159.26.37` | Scaleway PostgreSQL host |
| `TRACKING_DB_PORT` | `51494` | Non-standard port |
| `TRACKING_DB_NAME` | `mrcall-test` | Database name |
| `TRACKING_DB_USER` | `mrcalltest` | Database user |
| `TRACKING_DB_PASS` | `(secret)` | Database password |
| `TRACKING_DB_SSL` | `false` | Set to `true` if SSL is configured |

### Not Required

- No Google Analytics ID needed (tracking is self-hosted)
- GTM ID (`GTM-MW4TX4N`) is hardcoded in `components/GoogleTagManager.tsx`
- No API keys for the marketing site itself

## DNS / Domain

- **Production**: `mrcall.ai` (managed via Vercel DNS or external)
- **Dashboard**: `dashboard.mrcall.ai` (separate Vue.js app)

## Database Setup (One-Time)

Before the tracking endpoint works in production:

### 1. Create the tracking table

```bash
psql -h 51.159.26.37 -p 51494 -U mrcalltest -d mrcall-test -f scripts/create-tracking-table.sql
```

This creates:
- `website_events` table in the `public` schema
- Converts it to a TimescaleDB hypertable (7-day chunks)
- Creates indexes on `session_id`, `event_type`, `page_path`, `locale`, `country`

### 2. Whitelist Vercel IPs

The Scaleway PostgreSQL database is behind a firewall. Whitelist Vercel's IP ranges for port `51494`.

Vercel's IP ranges can be found at: https://vercel.com/docs/security/deployment-protection/ip-allowlisting

Alternatively, use a connection pooler (e.g., PgBouncer) with a fixed IP.

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

## Monitoring

### Tracking Health Check

```bash
curl https://mrcall.ai/api/track
# Should return: {"status":"tracking endpoint active"}
```

### Verify Events Are Recording

```sql
SELECT count(*), min(created_at), max(created_at)
FROM website_events;
```

### Check for Errors

In Vercel dashboard → Deployments → Functions → `/api/track` → Logs, look for:
```
[tracking] Failed to record event: ...
```

Common issues:
- **Connection refused**: Vercel IPs not whitelisted in Scaleway firewall
- **Authentication failed**: Wrong `TRACKING_DB_PASS` env var
- **Table not found**: SQL migration hasn't been run yet
