import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Microscope,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { redirect } from "next/navigation";
import { pediatricBlueprints } from "@/data/blueprints/pediatric";
import { CheckInCard } from "@/components/checkin-card";
import { FamilyDashboardOverview } from "@/components/dashboard/family-dashboard-overview";
import { createClient } from "@/lib/supabase/server";
import { getBetaModeServer } from "@/lib/beta-server";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const betaMode = await getBetaModeServer();
  let profile: {
    display_name: string | null;
    active_path: string | null;
    onboarding_completed: boolean;
  } | null = null;
  let subscription: { status: string; trial_end: string | null } | null = null;

  if (betaMode) {
    profile = {
      display_name: "Beta Tester",
      active_path: "child",
      onboarding_completed: true,
    };
    subscription = { status: "active", trial_end: null };
  } else {
    const supabase = await createClient();
    if (!supabase) redirect("/login");

    const {
      data: { user },
    } = await supabase.auth.getUser();
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

  const blueprints = pediatricBlueprints;
  const isPaid =
    betaMode || subscription?.status === "active" || subscription?.status === "trialing";
  const isTrialing = !betaMode && subscription?.status === "trialing";
  const trialEnd = subscription?.trial_end
    ? new Date(subscription.trial_end).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="space-y-6">
      {betaMode ? (
        <div className="guide-surface p-4">
          <div className="relative z-10 flex flex-wrap items-center gap-3 text-sm text-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>
              <strong>Preview mode</strong> is on for this browser. The parent guide is fully open,
              so you can review milestones, tools, and daily routines without logging in.
            </span>
          </div>
        </div>
      ) : null}

      {isTrialing ? (
        <div className="guide-surface p-4">
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">
                {trialEnd ? `Free trial active through ${trialEnd}` : "Your free trial is active"}
              </p>
              <p className="text-sm text-muted-foreground">
                Keep access to guided plans, printables, and parent support tools.
              </p>
            </div>
            <Link
              href="/settings"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-warm-sm"
            >
              Upgrade now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}

      {!isPaid ? (
        <div className="guide-surface p-5 text-center">
          <div className="relative z-10 space-y-3">
            <h2 className="font-heading text-3xl font-semibold">Unlock the guided parent path</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Start your free trial to open the full weekly learning plans, printables, and progress tools.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm-sm"
            >
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}

      <FamilyDashboardOverview
        displayName={profile?.display_name ?? null}
        blueprints={blueprints.slice(0, 3).map((blueprint) => ({
          id: blueprint.id,
          slug: blueprint.slug,
          title: blueprint.title,
          subtitle: blueprint.subtitle,
          weekNumber: blueprint.weekNumber,
          estimatedMinutes: blueprint.estimatedMinutes,
        }))}
      />
      <CheckInCard />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            href: "/progress",
            icon: TrendingUp,
            title: "Progress log",
            body: "Keep a running record of wins, new skills, and the questions you still have.",
          },
          {
            href: "/research",
            icon: Microscope,
            title: "Research standards",
            body: "See how HomeSLP frames milestones, daily tips, and screening tools.",
          },
          {
            href: "/doctor-prep",
            icon: Heart,
            title: "Bring clear examples",
            body: "Turn daily observations into a better pediatrician or SLP conversation.",
          },
        ].map((item) => (
          <Link key={item.href} href={item.href} className="guide-surface p-5">
            <div className="relative z-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-heading text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
