export const STRIPE_CONFIG = {
  priceId: process.env.STRIPE_PRICE_ID!,
  trialDays: 7,
  currency: 'usd',
  amount: 900, // $9.00 in cents
  productName: 'HomeSLP Monthly',
  successUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?subscription=success`,
  cancelUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
} as const;
