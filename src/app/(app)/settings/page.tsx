"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { useSubscription } from "@/components/subscription/SubscriptionProvider";
import { usePath } from "@/components/path/PathProvider";
import { useChildProfile } from "@/lib/stores/child-profile";
import { ArrowLeft, Baby, CreditCard, Loader2, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  const { user, profile, signOut } = useAuth();
  const { subscription, status, isTrialing, isActive, daysLeftInTrial } =
    useSubscription();
  const { setPath } = usePath();
  const { childName, childAgeMonths, setProfile } = useChildProfile();
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    if (profile?.active_path !== "child") {
      void setPath("child");
    }
  }, [profile?.active_path, setPath]);

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
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Dashboard
      </Link>

      <div>
        <h1 className="font-heading text-2xl font-bold sm:text-3xl flex items-center gap-2">
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
            <span className="text-muted-foreground">Guide focus</span>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Child development
            </span>
          </div>
        </div>
      </section>

      {/* Child Profile */}
      <section className="rounded-xl border bg-card p-6 space-y-4">
        <h2 className="font-heading font-semibold flex items-center gap-2">
          <Baby className="w-4 h-4" />
          Child Profile
        </h2>
        <p className="text-xs text-muted-foreground">
          Setting your child&apos;s info helps personalize milestones, activities, and tracking.
        </p>
        <div className="grid gap-4 text-sm">
          <div className="space-y-1.5">
            <label htmlFor="child-name" className="text-sm font-medium">
              Child&apos;s name
            </label>
            <input
              id="child-name"
              type="text"
              value={childName}
              onChange={(e) => setProfile({ childName: e.target.value })}
              placeholder="Enter name"
              className="flex h-9 w-full rounded-lg border bg-background px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="child-age" className="text-sm font-medium">
              Age in months
            </label>
            <div className="flex items-center gap-3">
              <input
                id="child-age"
                type="range"
                min={0}
                max={72}
                value={childAgeMonths ?? 18}
                onChange={(e) =>
                  setProfile({ childAgeMonths: Number(e.target.value) })
                }
                className="flex-1 accent-primary"
              />
              <div className="text-center min-w-[70px]">
                <span className="font-heading text-xl font-bold text-primary">
                  {childAgeMonths ?? 18}
                </span>
                <span className="text-xs text-muted-foreground block">
                  months
                  {(childAgeMonths ?? 18) >= 12 &&
                    ` (${Math.floor((childAgeMonths ?? 18) / 12)}y ${(childAgeMonths ?? 18) % 12}m)`}
                </span>
              </div>
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
