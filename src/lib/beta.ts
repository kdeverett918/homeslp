/**
 * Beta mode: when enabled, the app works without Supabase or Stripe.
 * All content is unlocked, no login required.
 * Set NEXT_PUBLIC_BETA_MODE=true in .env.local to enable globally.
 * Use the runtime preview cookie to unlock beta mode for one browser on live.
 */
export const BETA_MODE = true;
export const BETA_PREVIEW_COOKIE = "homeslp-beta-preview";
export const BETA_PREVIEW_COOKIE_VALUE = "enabled";

export const SUPABASE_CONFIGURED =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function isBetaPreviewCookieEnabled(cookieValue?: string | null) {
  return cookieValue === BETA_PREVIEW_COOKIE_VALUE;
}

export function isBetaModeEnabled(cookieValue?: string | null) {
  return BETA_MODE || isBetaPreviewCookieEnabled(cookieValue);
}
