# docs/

Documentation for the MrCall marketing website ([mrcall.ai](https://mrcall.ai)).

## What is MrCall?

MrCall is an **AI-powered agentic infrastructure** for businesses. It answers phone calls with natural, high-fidelity voice conversations, triages email, manages CRM operations, and acts as a complete virtual office agent. Think of it as a 24/7 AI receptionist that talks, remembers, and acts autonomously.

Founded in **Milan, Italy**. Available globally with multilingual support.

### The Product Ecosystem

| Component | URL | Tech | Purpose |
|-----------|-----|------|---------|
| **Website** (this repo) | [mrcall.ai](https://mrcall.ai) | Next.js 16 | Marketing, SEO, lead generation |
| **Dashboard** | [dashboard.mrcall.ai](https://dashboard.mrcall.ai) | Vue.js | Customer portal — configure agents, view calls, manage subscriptions |
| **StarChat** (backend) | Internal | Scala | Core AI engine — call handling, decision tables, integrations |
| **Mobile apps** | iOS + Android | Native | Call history, notifications, Direct Talk (talk to your agent) |

All four products share a single **Scaleway PostgreSQL/TimescaleDB** database. The website writes tracking events to it; the backend and dashboard read/write business data.

### What MrCall Does Today (Live)

- AI voice reception with natural conversation
- Automated call transcription and information extraction
- Calendar integration (Google Calendar, Outlook)
- WhatsApp and SMS notifications to the business owner
- Knowledge base creation (custom FAQ handling per business)
- Native iOS and Android mobile apps with Direct Talk
- Multi-tenant enterprise support
- Multilingual AI conversations

### What's Coming Next (Roadmap)

- **Email triage & drafting** — read, prioritize, and draft inbox responses
- **Deep CRM synchronization** — bidirectional sync with external CRMs
- **Autonomous task execution** — powered by the "Zylch Engine"
- **Cross-channel proactive memory** — one brain across calls, emails, and messages

### Target Customers

Small and medium businesses that receive phone calls and need professional, always-on call handling:

| Segment | Pain Point |
|---------|------------|
| Freelancers | Can't answer while working, missed calls = missed clients |
| Medical practices | Staff overwhelmed, patients on hold, critical calls missed |
| Real estate agencies | Agents on the move, leads call once then try the next agency |
| Restaurants | Peak hours = no one picks up, lost reservations |
| Car dealerships | Sales on the floor, every missed call is a competitor's sale |
| Property managers | Juggling tenants, owners, contractors, maintenance emergencies |

### Pricing (as of March 2025)

| Plan | EUR (EU) | USD (EN/AR) | Included |
|------|----------|-------------|----------|
| Essential | €25/mo | $29/mo | 100 min (~50 calls), basic features |
| Starter | €50/mo | $55/mo | 220 min (~110 calls), calendar, webhooks, multilingual |
| Professional | €150/mo | $160/mo | 700 min (~350 calls), CRM sync, custom models, phone support |

Free trial available. No hardware required.

## What This Website Does

This is the **marketing and lead generation website** for MrCall. Its goals:

1. **Explain the product** — hero section, feature blocks, live demo, use case pages
2. **Convert visitors** — CTAs leading to `dashboard.mrcall.ai/signup` (free trial)
3. **Rank in search** — 8-language SEO, blog, static generation for all locales
4. **Track attribution** — first-party event tracking to own database (no Google Analytics), enabling the full funnel: website visit → signup → paying customer
5. **Support logged-in users** — cross-domain auth cookie shows "My Dashboard" for existing customers

The website does NOT handle signups, payments, or agent configuration — that's all in the dashboard.

## Documentation Index

| File | What You'll Learn |
|------|-------------------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Full architecture reference: tech stack, project structure tree, every key decision (static generation, i18n, tracking, RTL, fonts, component patterns) explained in detail. **Start here for codebase orientation.** |
| [i18n.md](./i18n.md) | Internationalization: 8 supported locales, next-intl v4 configuration, message file structure (~350 keys each), RTL Arabic implementation, CSS logical properties reference, and a step-by-step guide for adding a new locale. |
| [tracking.md](./tracking.md) | First-party event tracking: client-side tracker (`lib/tracking.ts`), `/api/track` endpoint, demo rate limiting (`/api/demo-check`), cross-domain auth cookie (`mrcall_uid`), database schema, useful SQL queries, and deployment checklist. |
| [database.md](./database.md) | Shared Scaleway PostgreSQL/TimescaleDB database: connection details, complete schema overview across all products (core business, billing, conversational AI, OAuth, website tracking), entity relationships, and cross-product attribution strategy. |
| [deployment.md](./deployment.md) | Vercel deployment: build commands, required environment variables, DNS setup, database migration, GTM/GDPR consent defaults, blog redirect rules, favicon, and monitoring/health-check commands. |

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
```

Tracking events log to the browser console in development. No database connection needed for local dev.

For production deployment details, see [deployment.md](./deployment.md).
