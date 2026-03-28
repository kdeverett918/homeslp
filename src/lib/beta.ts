/**
 * Beta mode: when enabled, the app works without Supabase or Stripe.
 * All content is unlocked, no login required.
 * Set NEXT_PUBLIC_BETA_MODE=true in .env.local to enable.
 */
export const BETA_MODE = process.env.NEXT_PUBLIC_BETA_MODE === "true";

export const SUPABASE_CONFIGURED =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
