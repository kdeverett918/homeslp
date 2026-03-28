export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Progress",
};

export default function ProgressPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold flex items-center gap-2">
          <TrendingUp className="w-6 h-6" />
          Progress
        </h1>
        <p className="mt-1 text-muted-foreground">
          Track your journey and celebrate milestones.
        </p>
      </div>

      <div className="rounded-xl border-2 border-dashed bg-muted/30 p-12 text-center space-y-4">
        <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto" />
        <h2 className="font-heading text-lg font-semibold">Coming Soon</h2>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          Progress tracking with streaks, XP, milestone checklists, and for
          caregivers — EAT-10 symptom tracking over time.
        </p>
      </div>
    </div>
  );
}
