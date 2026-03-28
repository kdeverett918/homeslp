"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { BETA_MODE, SUPABASE_CONFIGURED } from "@/lib/beta";
import { useAuth } from "@/components/auth/AuthProvider";
import { getUserTier, getTrialDaysLeft, canAccess as checkAccess } from "@/lib/content-gating";
import type { Subscription, SubscriptionStatus, AccessTier } from "@/types";

interface SubscriptionContextType {
  subscription: Subscription | null;
  status: SubscriptionStatus | null;
  isTrialing: boolean;
  isActive: boolean;
  isPaid: boolean;
  daysLeftInTrial: number;
  canAccess: (tier: AccessTier) => boolean;
  loading: boolean;
  refresh: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType>({
  subscription: null,
  status: null,
  isTrialing: false,
  isActive: false,
  isPaid: false,
  daysLeftInTrial: 0,
  canAccess: () => false,
  loading: true,
  refresh: async () => {},
});

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(!BETA_MODE);

  const supabase = SUPABASE_CONFIGURED ? createClient() : null;

  const fetchSubscription = useCallback(async () => {
    if (BETA_MODE || !supabase || !user?.id) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("user_id", user.id)
      .single();

    setSubscription(data);
    setLoading(false);
  }, [user?.id, supabase]);

  useEffect(() => {
    if (BETA_MODE) {
      setLoading(false);
      return;
    }
    if (isAuthenticated) {
      fetchSubscription();
    } else {
      setSubscription(null);
      setLoading(false);
    }
  }, [isAuthenticated, fetchSubscription]);

  useEffect(() => {
    if (BETA_MODE || !supabase) return;
    const handleFocus = () => {
      if (isAuthenticated) fetchSubscription();
    };
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [isAuthenticated, fetchSubscription, supabase]);

  // In beta mode, grant full access
  if (BETA_MODE) {
    return (
      <SubscriptionContext.Provider
        value={{
          subscription: null,
          status: "active",
          isTrialing: false,
          isActive: true,
          isPaid: true,
          daysLeftInTrial: 0,
          canAccess: () => true,
          loading: false,
          refresh: async () => {},
        }}
      >
        {children}
      </SubscriptionContext.Provider>
    );
  }

  const status = subscription?.status as SubscriptionStatus | null;
  const isTrialing = status === "trialing";
  const isActive = status === "active";
  const isPaid = isTrialing || isActive;
  const daysLeftInTrial = getTrialDaysLeft(subscription?.trial_end ?? null);
  const userTier = getUserTier(status);

  const canAccessTier = useCallback(
    (tier: AccessTier): boolean => checkAccess(userTier, tier),
    [userTier]
  );

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        status,
        isTrialing,
        isActive,
        isPaid,
        daysLeftInTrial,
        canAccess: canAccessTier,
        loading,
        refresh: fetchSubscription,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  return useContext(SubscriptionContext);
}
