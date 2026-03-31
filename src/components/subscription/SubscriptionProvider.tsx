"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { SUPABASE_CONFIGURED } from "@/lib/beta";
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

export function SubscriptionProvider({
  children,
  betaMode,
}: {
  children: React.ReactNode;
  betaMode: boolean;
}) {
  const { user, isAuthenticated } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(!betaMode && SUPABASE_CONFIGURED);

  const supabase = SUPABASE_CONFIGURED ? createClient() : null;

  const refresh = useCallback(async () => {
    if (betaMode || !supabase || !user?.id) {
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
  }, [betaMode, supabase, user]);

  useEffect(() => {
    if (betaMode || !supabase) {
      return;
    }

    let cancelled = false;

    const syncSubscription = async () => {
      if (!isAuthenticated || !user?.id) {
        if (!cancelled) {
          setSubscription(null);
          setLoading(false);
        }
        return;
      }

      const { data } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (!cancelled) {
        setSubscription(data);
        setLoading(false);
      }
    };

    void syncSubscription();

    return () => {
      cancelled = true;
    };
  }, [betaMode, isAuthenticated, supabase, user]);

  useEffect(() => {
    if (betaMode || !supabase) return;

    const handleFocus = () => {
      if (isAuthenticated && user?.id) {
        void refresh();
      }
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [betaMode, isAuthenticated, refresh, supabase, user]);

  if (betaMode) {
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
  const canAccessTier = (tier: AccessTier): boolean => checkAccess(userTier, tier);

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
        refresh,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  return useContext(SubscriptionContext);
}
