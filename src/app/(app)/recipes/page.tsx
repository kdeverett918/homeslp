export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { UtensilsCrossed } from "lucide-react";

export const metadata: Metadata = {
  title: "IDDSI Recipes",
};

export default function RecipesPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold flex items-center gap-2">
          <UtensilsCrossed className="w-6 h-6" />
          IDDSI Recipe Library
        </h1>
        <p className="mt-1 text-muted-foreground">
          Delicious, texture-modified recipes that keep mealtimes safe and
          dignified.
        </p>
      </div>

      <div className="rounded-xl border-2 border-dashed bg-muted/30 p-12 text-center space-y-4">
        <UtensilsCrossed className="w-12 h-12 text-muted-foreground mx-auto" />
        <h2 className="font-heading text-lg font-semibold">Coming Soon</h2>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          100+ IDDSI-informed recipes organized by diet level, cuisine, and meal
          type. Each recipe includes texture testing tips and caregiver notes.
        </p>
      </div>

      <div className="rounded-lg bg-muted/50 p-4 text-xs text-muted-foreground space-y-1">
        <p>
          <strong>Attribution:</strong> IDDSI Framework &copy; The International
          Dysphagia Diet Standardisation Initiative.{" "}
          <a
            href="https://iddsi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            iddsi.org
          </a>
        </p>
        <p>
          This is not the official IDDSI website. Recipes are IDDSI-informed
          original content.
        </p>
      </div>
    </div>
  );
}
