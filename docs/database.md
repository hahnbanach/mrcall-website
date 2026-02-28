# MrCall — Scaleway Database Reference

## Connection

| Parameter | Value |
|-----------|-------|
| Host | `51.159.26.37` |
| Port | `51494` |
| Database | `mrcall-test` |
| User | `mrcalltest` |
| SSL | `false` (internal network) |
| Engine | PostgreSQL + TimescaleDB |

The database is hosted on **Scaleway** and is shared between:
- **StarChat** (Scala backend) — reads/writes sessions, business data, decision tables
- **Dashboard** (Vue.js frontend) — reads via StarChat REST API
- **Website** (Next.js) — writes to `website_events` via `/api/track`

Access requires either VPN or IP whitelisting.

## Schema Overview

### `public` Schema — Application Tables

#### Core Business Tables

| Table | Purpose | Key Columns |
|-------|---------|-------------|
| `business` | Business accounts (one per MrCall subscriber) | `business_id`, `owner`, `template`, `business_phone_number`, `service_number`, `stripe_customer_id`, `subscription_status` |
| `customers_registry` | User accounts (Firebase-linked) | `id`, `role`, `realm`, `document` (JSONB) |
| `sessions` | Call session data (**TimescaleDB hypertable**) | `id`, `business_id`, `owner`, `start_timestamp`, `state_variables`, `data` (JSONB) |
| `sessions_ids` | Session ID index | `id`, `start_timestamp` |
| `contact` | Business contacts/address book | `contact_id`, `business_id`, `display_name`, `variables` (JSONB) |
| `phone_details` | Phone number metadata | `number`, `contact_id`, `country_alpha2`, `number_type` |

#### Product & Billing

| Table | Purpose | Key Columns |
|-------|---------|-------------|
| `product` | Subscription products/plans | `name`, `product_type`, `price_id` (JSONB), `resource_units` |
| `template` | Business templates (plan configurations) | `name`, `trial_days`, `recurrent_resources` (JSONB) |
| `payment_subscription` | Active subscriptions | `id`, `business_id`, `provider` (stripe/apple), `status` |
| `business_resources` | Allocated resources (minutes, calls) | `id`, `business_id`, `category`, `expiration` |
| `stripe_webhooks_registry` | Stripe webhook event log | `id`, `document` (JSONB) |
| `apple_webhooks_registry` | Apple IAP webhook event log | `id`, `document` (JSONB) |

#### Conversational AI

| Table | Purpose | Key Columns |
|-------|---------|-------------|
| `decision_table` | Conversation flow state machine | `instance`, `state`, `execution_order`, `action`, `transition`, `queries` (JSONB) |
| `business_variable` | Configurable business variables | `name`, `type`, `human_name_multilang` (JSONB) |
| `template_business_variable` | Template-variable associations | `template_name`, `variable_name`, `visible`, `modifiable` |
| `business_datastore` | Per-business key-value store | `id`, `namespace`, `document` (JSONB) |

#### Infrastructure

| Table | Purpose | Key Columns |
|-------|---------|-------------|
| `service_number` | Provisioned phone numbers | `id`, `provider`, `businessid`, `iso_alpha2` |
| `audio_cache` | TTS audio cache | `id`, `text`, `provider`, `language`, `audio_s3_key` |
| `api_key_users` | API authentication | `id`, `password`, `salt`, `permissions` (JSONB) |
| `session_retention_policies` | Per-business data retention | `business_id`, `archive_after_days`, `delete_after_days` |
| `business_cron_jobs` | Scheduled jobs per business | `job_id`, `business_id`, `cron_expression`, `enabled` |
| `cron_job_atoms` | Available cron job types | `atom_id`, `state_name`, `parameters_schema` (JSONB) |

#### Auth (OAuth 2.0)

| Table | Purpose |
|-------|---------|
| `oauth_clients` | Registered OAuth clients |
| `oauth_authorization_codes` | Auth code grants (PKCE supported) |
| `oauth_delegations` | User-granted OAuth permissions |
| `oauth_realm_config` | OAuth realm configuration |
| `token_blacklist` | Revoked JWT tokens |
| `user_oauth_providers` | Linked OAuth provider accounts |
| `auth_audit_log` | Authentication event audit trail |

#### Other

| Table | Purpose |
|-------|---------|
| `general_purpose_registry` | Generic namespaced key-value store |
| `keyvalue_registry` | Another key-value store |
| `webcall_registry` | WebCall (browser-based calling) sessions |
| `whatsapp_messages` | WhatsApp message log |
| `instance_registry` | StarChat service instances |
| `qrtz_*` | Quartz scheduler tables (Java cron) |

### Website Tracking (Added by us)

| Table | Purpose |
|-------|---------|
| `website_events` | TimescaleDB hypertable tracking mrcall.ai visitor events |

See [tracking.md](./tracking.md) for full schema and usage.

## TimescaleDB

The database uses TimescaleDB for time-series optimization:

- **`sessions`** — hypertable partitioned by `start_timestamp` (45+ chunks, covering call history)
- **`website_events`** — hypertable partitioned by `created_at` (7-day chunks)

TimescaleDB features available:
- `time_bucket()` for aggregation queries
- `create_hypertable()` for new time-series tables
- Chunk-level compression policies
- Continuous aggregates for materialized views

## Key Relationships

```
customers_registry.id ──────► business.owner (1:many)
business.business_id ──────► sessions.business_id (1:many)
business.business_id ──────► contact.business_id (1:many)
business.business_id ──────► business_resources.business_id (1:many)
business.business_id ──────► payment_subscription.business_id (1:many)
business.template ─────────► template.name
contact.contact_id ────────► phone_details.contact_id (1:many)
```

## Cross-Product Attribution (Future)

To link website visitors to dashboard users:

```
website_events.session_id  ──►  customers_registry.document->>'website_session_id'
                                         │
                                         ▼
                                    business.owner
                                         │
                                         ▼
                               payment_subscription.business_id
```

This requires passing the `mrcall_sid` (from browser localStorage) during the signup flow on `dashboard.mrcall.ai`.
