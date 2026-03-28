import Stripe from 'stripe';

function createStripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    // Return a proxy that throws on use — allows build to succeed without keys
    return new Proxy({} as Stripe, {
      get(_, prop) {
        if (prop === 'then') return undefined;
        throw new Error('STRIPE_SECRET_KEY is not configured');
      },
    });
  }
  return new Stripe(key, {
    apiVersion: '2026-03-25.dahlia',
    typescript: true,
  });
}

export const stripe = createStripeClient();
