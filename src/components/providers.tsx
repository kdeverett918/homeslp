"use client";

import { AuthProvider } from "@/components/auth/AuthProvider";
import { SubscriptionProvider } from "@/components/subscription/SubscriptionProvider";
import { PathProvider } from "@/components/path/PathProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SubscriptionProvider>
        <PathProvider>{children}</PathProvider>
      </SubscriptionProvider>
    </AuthProvider>
  );
}
