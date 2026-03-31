"use client";

import { AuthProvider } from "@/components/auth/AuthProvider";
import { SubscriptionProvider } from "@/components/subscription/SubscriptionProvider";
import { PathProvider } from "@/components/path/PathProvider";

export function AppProviders({
  children,
  betaMode,
}: {
  children: React.ReactNode;
  betaMode: boolean;
}) {
  return (
    <AuthProvider betaMode={betaMode}>
      <SubscriptionProvider betaMode={betaMode}>
        <PathProvider betaMode={betaMode}>{children}</PathProvider>
      </SubscriptionProvider>
    </AuthProvider>
  );
}
