"use client";

import { useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { useSubscription } from "@/components/subscription/SubscriptionProvider";
import { usePath } from "@/components/path/PathProvider";
import { CreditCard, Loader2, LogOut, Settings, User } from "lucide-react";

export default function SettingsPage() {
  const { user, profile, signOut } = useAuth();
  const { subscription, status, isTrialing, isActive, daysLeftInTrial } =
    useSubscription();
  const { activePath, setPath } = usePath();
  const [portalLoading, setPortalLoading] = useState(false);

  const handleManageBilling = async () => {
    setPortalLoading(true);
    try {
      const res = await fetch("/api/subscription/portal", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      alert("Unable to open billing portal. Please try again.");
    }
    setPortalLoading(false);
  };

  const handleStartSubscription = async () => {
    try {
      const res = await fetch("/api/checkout/create", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      alert("Unable to start checkout. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold flex items-center gap-2">
          <Settings className="w-6 h-6" />
          Settings
        </h1>
      </div>

      {/* Account */}
      <section className="rounded-xl border bg-card p-6 space-y-4">
        <h2 className="font-heading font-semibold flex items-center gap-2">
          <User className="w-4 h-4" />
          Account
        </h2>
        <div className="grid gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Name</span>
            <span>{profile?.display_name ?? "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Email</span>
            <span>{user?.email ?? "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Content Path</span>
            <div className="flex gap-2">
              <button
                onClick={() => setPath("child")}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  activePath === "child"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Child
              </button>
              <button
                onClick={() => setPath("adult")}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  activePath === "adult"
                    ? "bg-sage-600 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Adult
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="rounded-xl border bg-card p-6 space-y-4">
        <h2 className="font-heading font-semibold flex items-center gap-2">
          <CreditCard className="w-4 h-4" />
          Subscription
        </h2>
        <div className="grid gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Status</span>
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                isActive
                  ? "bg-sage-100 text-sage-700"
                  : isTrialing
                    ? "bg-amber-100 text-amber-700"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {status === "active"
                ? "Active"
                : status === "trialing"
                  ? `Trial (${daysLeftInTrial} days left)`
                  : status ?? "No subscription"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Plan</span>
            <span>$9/month</span>
          </div>
        </div>
        <div className="pt-2">
          {subscription ? (
            <button
              onClick={handleManageBilling}
              disabled={portalLoading}
              className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors disabled:opacity-50"
            >
              {portalLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              Manage Billing
            </button>
          ) : (
            <button
              onClick={handleStartSubscription}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-warm-sm hover:bg-primary/90"
            >
              Start Free Trial
            </button>
          )}
        </div>
      </section>

      {/* Sign out */}
      <button
        onClick={signOut}
        className="inline-flex items-center gap-2 rounded-lg border border-destructive/30 px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/5 transition-colors"
      >
        <LogOut className="w-4 h-4" />
        Sign Out
      </button>
    </div>
  );
}
