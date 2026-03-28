export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { LayoutGrid } from "lucide-react";

export const metadata: Metadata = {
  title: "Practice Games",
};

export default function GamesPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold flex items-center gap-2">
          <LayoutGrid className="w-6 h-6" />
          Practice Games
        </h1>
        <p className="mt-1 text-muted-foreground">
          Fun, therapeutic games for language, memory, and cognitive practice.
        </p>
      </div>

      <div className="rounded-xl border-2 border-dashed bg-muted/30 p-12 text-center space-y-4">
        <LayoutGrid className="w-12 h-12 text-muted-foreground mx-auto" />
        <h2 className="font-heading text-lg font-semibold">Coming Soon</h2>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          30+ cognitive therapy games including word finding, memory match,
          attention training, and daily puzzles — with difficulty progression
          and score tracking.
        </p>
      </div>
    </div>
  );
}
