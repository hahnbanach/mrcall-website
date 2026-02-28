import { Pool } from 'pg';

// Singleton pool — reused across requests in serverless environment
let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      host: process.env.TRACKING_DB_HOST,
      port: parseInt(process.env.TRACKING_DB_PORT || '5432', 10),
      database: process.env.TRACKING_DB_NAME,
      user: process.env.TRACKING_DB_USER,
      password: process.env.TRACKING_DB_PASS,
      ssl: process.env.TRACKING_DB_SSL === 'true'
        ? { rejectUnauthorized: false }
        : false,
      // Vercel serverless: keep pool small, short idle timeout
      max: 5,
      idleTimeoutMillis: 10_000,
      connectionTimeoutMillis: 5_000,
    });
  }
  return pool;
}
