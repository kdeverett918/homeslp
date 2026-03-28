import type { AccessTier, SubscriptionStatus } from '@/types';

type UserTier = 'anonymous' | 'trial' | 'paid';

const TIER_RANK: Record<UserTier, number> = {
  anonymous: 0,
  trial: 1,
  paid: 2,
};

const ACCESS_TIER_MAP: Record<AccessTier, UserTier> = {
  free: 'anonymous',
  trial: 'trial',
  paid: 'paid',
};

export function getUserTier(status: SubscriptionStatus | null): UserTier {
  if (!status) return 'anonymous';
  if (status === 'trialing') return 'trial';
  if (status === 'active') return 'paid';
  return 'anonymous';
}

export function canAccess(userTier: UserTier, requiredTier: AccessTier): boolean {
  return TIER_RANK[userTier] >= TIER_RANK[ACCESS_TIER_MAP[requiredTier]];
}

export function getTrialDaysLeft(trialEnd: string | null): number {
  if (!trialEnd) return 0;
  const end = new Date(trialEnd);
  const now = new Date();
  return Math.max(0, Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
}
