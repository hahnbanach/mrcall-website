-- Website event tracking table for mrcall.ai
-- Run this on the Scaleway PostgreSQL/TimescaleDB database before deploying
--
-- Usage:
--   psql -h 51.159.26.37 -p 51494 -U mrcalltest -d mrcall-test -f create-tracking-table.sql
--
-- Note: This DB already has TimescaleDB active (sessions table is a hypertable).
--       We enable hypertable for website_events too, for efficient time-range queries.

CREATE TABLE IF NOT EXISTS website_events (
  id            CHARACTER VARYING NOT NULL DEFAULT gen_random_uuid()::text,
  session_id    CHARACTER VARYING(64)   NOT NULL,
  event_type    CHARACTER VARYING(50)   NOT NULL,
  page_path     CHARACTER VARYING(500),
  referrer      CHARACTER VARYING(1000),
  utm_source    CHARACTER VARYING(200),
  utm_medium    CHARACTER VARYING(200),
  utm_campaign  CHARACTER VARYING(200),
  utm_content   CHARACTER VARYING(200),
  utm_term      CHARACTER VARYING(200),
  locale        CHARACTER VARYING(10),
  user_agent    CHARACTER VARYING(1000),
  screen_width  INTEGER,
  country       CHARACTER VARYING(2),
  city          CHARACTER VARYING(200),
  metadata      JSONB DEFAULT '{}',
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id, created_at)
);

-- Convert to TimescaleDB hypertable (partitioned by created_at)
-- The composite PK (id, created_at) is required by TimescaleDB
SELECT create_hypertable('website_events', 'created_at',
  chunk_time_interval => INTERVAL '7 days',
  if_not_exists => true
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_website_events_session
  ON website_events (session_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_website_events_type_created
  ON website_events (event_type, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_website_events_page
  ON website_events (page_path, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_website_events_locale
  ON website_events (locale, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_website_events_country
  ON website_events (country, created_at DESC);

-- Table and column documentation
COMMENT ON TABLE website_events IS 'Tracks visitor events from mrcall.ai marketing website';
COMMENT ON COLUMN website_events.id IS 'Unique event ID (UUID as text, matching DB convention)';
COMMENT ON COLUMN website_events.session_id IS 'Anonymous browser session ID (persisted in localStorage, format: base36_timestamp-random)';
COMMENT ON COLUMN website_events.event_type IS 'Event type: pageview, cta_click, demo_start, demo_consent, app_store_click, language_switch, outbound_click, scroll_depth, pricing_view';
COMMENT ON COLUMN website_events.page_path IS 'URL path (e.g. /it/contacts, /pricing)';
COMMENT ON COLUMN website_events.referrer IS 'HTTP Referer header from the browser';
COMMENT ON COLUMN website_events.utm_source IS 'UTM source parameter (persisted for session duration)';
COMMENT ON COLUMN website_events.utm_medium IS 'UTM medium parameter';
COMMENT ON COLUMN website_events.utm_campaign IS 'UTM campaign parameter';
COMMENT ON COLUMN website_events.utm_content IS 'UTM content parameter';
COMMENT ON COLUMN website_events.utm_term IS 'UTM term parameter';
COMMENT ON COLUMN website_events.locale IS 'Website language: en, it, de, da, fr, es, pt, ar';
COMMENT ON COLUMN website_events.user_agent IS 'Browser User-Agent string';
COMMENT ON COLUMN website_events.screen_width IS 'Screen width in pixels (for device type segmentation)';
COMMENT ON COLUMN website_events.country IS 'ISO 3166-1 alpha-2 country code (from Vercel x-vercel-ip-country header)';
COMMENT ON COLUMN website_events.city IS 'City name (from Vercel x-vercel-ip-city header)';
COMMENT ON COLUMN website_events.metadata IS 'Flexible JSONB for event-specific data (e.g. {"button": "hero_try_free"}, {"store": "ios"}, {"from": "en", "to": "it"})';
COMMENT ON COLUMN website_events.created_at IS 'Event timestamp (hypertable partition key, 7-day chunks)';

-- Example useful queries:
--
-- Daily pageviews by locale (last 30 days):
--   SELECT locale, date_trunc('day', created_at) AS day, count(*)
--   FROM website_events
--   WHERE event_type = 'pageview' AND created_at > NOW() - INTERVAL '30 days'
--   GROUP BY locale, day ORDER BY day DESC, count DESC;
--
-- Top CTAs clicked (last 7 days):
--   SELECT metadata->>'button' AS button, count(*)
--   FROM website_events
--   WHERE event_type = 'cta_click' AND created_at > NOW() - INTERVAL '7 days'
--   GROUP BY button ORDER BY count DESC;
--
-- Visitor journey (by session):
--   SELECT event_type, page_path, metadata, created_at
--   FROM website_events
--   WHERE session_id = 'abc123'
--   ORDER BY created_at;
--
-- Country breakdown:
--   SELECT country, count(DISTINCT session_id) AS visitors, count(*) AS events
--   FROM website_events
--   WHERE created_at > NOW() - INTERVAL '30 days'
--   GROUP BY country ORDER BY visitors DESC;
