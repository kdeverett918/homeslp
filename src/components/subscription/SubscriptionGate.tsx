"use client";

import { useSubscription } from "./SubscriptionProvider";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AccessTier } from "@/types";

interface SubscriptionGateProps {
  requiredTier: AccessTier;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function SubscriptionGate({ requiredTier, children, fallback }: SubscriptionGateProps) {
  const { canAccess, loading } = useSubscription();

  if (loading) {
    return <div className="animate-pulse rounded-xl bg-muted h-48" />;
  }

  if (canAccess(requiredTier)) {
    return <>{children}</>;
  }

  if (fallback) return <>{fallback}</>;

  return (
    <div className="relative rounded-xl overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md bg-background/60 z-10 flex flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
          <Lock className="w-6 h-6 text-muted-foreground" />
        </div>
        <div>
          <p className="font-heading font-semibold text-lg">
            {requiredTier === "paid" ? "Unlock Full Access" : "Start Your Free Trial"}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {requiredTier === "paid"
              ? "Subscribe for $9/month to access all content"
              : "Sign up for a free 7-day trial"}
          </p>
        </div>
        <Button asChild size="lg">
          <a href="/pricing">View Plans</a>
        </Button>
      </div>
      <div className="opacity-30 pointer-events-none" aria-hidden>
        {children}
      </div>
    </div>
  );
}
