import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Microscope,
  TrendingUp,
} from "lucide-react";
import { pediatricBlueprints } from "@/data/blueprints/pediatric";
import { CheckInCard } from "@/components/checkin-card";
import { FamilyDashboardOverview } from "@/components/dashboard/family-dashboard-overview";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const profile = {
    display_name: null as string | null,
    active_path: "child",
    onboarding_completed: true,
  };

  const blueprints = pediatricBlueprints;

  return (
    <div className="space-y-6">
      <FamilyDashboardOverview
        displayName={profile?.display_name ?? null}
        blueprints={blueprints.slice(0, 3).map((blueprint) => ({
          id: blueprint.id,
          slug: blueprint.slug,
          title: blueprint.title,
          subtitle: blueprint.subtitle,
          weekNumber: blueprint.weekNumber,
          estimatedMinutes: blueprint.estimatedMinutes,
          coverImage: blueprint.coverImage,
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
            href: "/blog",
            icon: Microscope,
            title: "Read our articles",
            body: "Browse parent-friendly articles on speech, language, and child development.",
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
