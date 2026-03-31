import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Lock,
  MessageCircle,
  Play,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { BETA_MODE } from "@/lib/beta";
import { pediatricBlueprints } from "@/data/blueprints/pediatric";
import { adultBlueprints } from "@/data/blueprints/adult";
import { dailyTips } from "@/data/daily-tips";
import { DailyTipCard } from "@/components/daily-tip-card";
import { CheckInCard } from "@/components/checkin-card";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  let profile: { display_name: string | null; active_path: string | null; onboarding_completed: boolean } | null = null;
  let subscription: { status: string; trial_end: string | null } | null = null;

  if (BETA_MODE) {
    // In beta mode, read path from cookie or default to child
    const cookieStore = await cookies();
    const betaPath = cookieStore.get("homeslp-beta-path")?.value ?? "child";
    profile = {
      display_name: "Beta Tester",
      active_path: betaPath,
      onboarding_completed: true,
    };
    subscription = { status: "active", trial_end: null };
  } else {
    const supabase = await createClient();
    if (!supabase) redirect("/login");

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) redirect("/login");

    const { data: profileData } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (!profileData?.onboarding_completed) redirect("/choose");
    profile = profileData;

    const { data: subData } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("user_id", user.id)
      .single();
    subscription = subData;
  }

  const isChild = profile?.active_path === "child";
  const blueprints = isChild ? pediatricBlueprints : adultBlueprints;
  const isPaid = BETA_MODE || subscription?.status === "active" || subscription?.status === "trialing";
  const isTrialing = !BETA_MODE && subscription?.status === "trialing";
  const trialEnd = subscription?.trial_end;

  const trialDaysLeft = trialEnd
    ? Math.max(0, Math.ceil((new Date(trialEnd).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : 0;

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Beta banner */}
      {BETA_MODE && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 flex items-center gap-2">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span><strong>Beta Mode</strong> — All content unlocked. No login required.</span>
        </div>
      )}

      {/* Welcome */}
      <div>
        <h1 className="font-heading text-2xl font-bold sm:text-3xl">
          Welcome{profile?.display_name ? `, ${profile.display_name}` : ""}
        </h1>
        <p className="mt-1 text-muted-foreground">
          {isChild
            ? "Your child's speech development roadmap"
            : "Caregiver support and guidance"}
        </p>
      </div>

      {/* Trial banner */}
      {isTrialing && (
        <div className="rounded-xl border border-primary/20 bg-gradient-to-r from-rose-50 to-sage-50 p-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-sm">
                {trialDaysLeft > 0
                  ? `${trialDaysLeft} day${trialDaysLeft === 1 ? "" : "s"} left in your free trial`
                  : "Your trial has ended"}
              </p>
              <p className="text-xs text-muted-foreground">Upgrade to keep access to all content</p>
            </div>
          </div>
          <Link href="/settings" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-warm-sm hover:bg-primary/90">
            Upgrade Now
          </Link>
        </div>
      )}

      {/* No subscription prompt (hidden in beta) */}
      {!isPaid && (
        <div className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center space-y-3">
          <h2 className="font-heading text-lg font-semibold">Start your free trial to unlock content</h2>
          <p className="text-sm text-muted-foreground">Get 7 days free access to Week 1 Blueprint and the community.</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-warm-sm hover:bg-primary/90">
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Weekly Check-In */}
      {isChild && <CheckInCard />}

      {/* Daily Tip */}
      <DailyTipCard
        tips={dailyTips}
        path={isChild ? "child" : "adult"}
        ageMonths={null}
      />

      {/* Blueprints */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-lg font-semibold">Your Weekly Roadmap</h2>
          <Link href="/blueprints" className="text-sm text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {blueprints.map((bp) => {
            const isAccessible = BETA_MODE || bp.accessTier === "trial" ? isPaid : bp.accessTier === "paid" ? subscription?.status === "active" : true;

            return (
              <Link
                key={bp.id}
                href={isAccessible ? `/blueprints/${bp.slug}` : "#"}
                className={`group relative rounded-xl border bg-card p-5 transition-all ${isAccessible ? "hover:shadow-warm-md hover:border-primary/30" : "opacity-60 cursor-default"}`}
              >
                {!isAccessible && (
                  <div className="absolute top-3 right-3">
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isChild ? "bg-rose-100" : "bg-sage-100"}`}>
                    <span className="font-heading font-bold text-sm">W{bp.weekNumber}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-semibold text-sm truncate">{bp.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{bp.subtitle}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Play className="w-3 h-3" /> Video</span>
                      <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> PDF</span>
                      <span>{bp.estimatedMinutes} min</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick links */}
      <section>
        <h2 className="font-heading text-lg font-semibold mb-4">Quick Access</h2>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
          {[
            { href: "/community", icon: MessageCircle, label: "Community" },
            { href: "/progress", icon: TrendingUp, label: "Progress" },
            { href: isChild ? "/blueprints" : "/recipes", icon: BookOpen, label: isChild ? "All Blueprints" : "Recipes" },
            { href: "/settings", icon: Sparkles, label: "Settings" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-2 rounded-xl border bg-card p-4 text-center transition-all hover:shadow-warm-sm hover:border-primary/30"
            >
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
