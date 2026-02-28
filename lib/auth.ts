/**
 * Cross-domain authentication utilities.
 *
 * The MrCall dashboard (dashboard.mrcall.ai) sets a `mrcall_uid` cookie
 * on the `.mrcall.ai` domain when a user logs in. This allows the marketing
 * website (mrcall.ai) to detect logged-in users and personalize the header
 * (e.g., showing "My Dashboard" instead of "Sign In" / "Try Free").
 *
 * The cookie contains the Firebase UID — a non-sensitive public identifier.
 * No authentication tokens or sensitive data are stored in the cookie.
 */

/**
 * Reads the Firebase UID from the cross-domain auth cookie.
 * Returns null if the cookie doesn't exist or we're on the server.
 */
export function getDashboardUid(): string | null {
  if (typeof document === 'undefined') return null;

  const match = document.cookie.match(/(?:^|;\s*)mrcall_uid=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
}
