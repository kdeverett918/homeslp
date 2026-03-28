"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
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
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchSubscription = useCallback(async () => {
    if (!user?.id) {
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
    if (isAuthenticated) {
      fetchSubscription();
    } else {
      setSubscription(null);
      setLoading(false);
    }
  }, [isAuthenticated, fetchSubscription]);

  useEffect(() => {
    const handleFocus = () => {
      if (isAuthenticated) fetchSubscription();
    };
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [isAuthenticated, fetchSubscription]);

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
  const context = useContext(SubscriptionContext);
  if (!context) throw new Error("useSubscription must be used within SubscriptionProvider");
  return context;
}
