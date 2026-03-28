"use client";

import { useState } from "react";
import { UtensilsCrossed, Clock, Users } from "lucide-react";
import { recipes } from "@/data/recipes";
import { FadeIn, StaggerChildren, StaggerItem, ScaleOnHover } from "@/components/motion";

const IDDSI_LEVELS = [
  { level: 0, label: "All Levels" },
  { level: 3, label: "Level 3 \u2014 Liquidised" },
  { level: 4, label: "Level 4 \u2014 Pureed" },
  { level: 5, label: "Level 5 \u2014 Minced & Moist" },
  { level: 6, label: "Level 6 \u2014 Soft & Bite-Sized" },
];

const LEVEL_COLORS: Record<number, string> = {
  3: "bg-blue-100 text-blue-700",
  4: "bg-orange-100 text-orange-700",
  5: "bg-amber-100 text-amber-700",
  6: "bg-sage-100 text-sage-700",
};

export default function RecipesPage() {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);

  const filtered = recipes.filter((r) => {
    if (selectedLevel > 0 && r.iddsiLevel !== selectedLevel) return false;
    if (selectedMeal && r.mealType !== selectedMeal) return false;
    return true;
  });

  return (
    <div className="max-w-4xl space-y-6">
      <FadeIn>
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-7 h-7 text-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">IDDSI Recipe Library</h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">
          Delicious, texture-modified recipes. Each tested to ensure the right consistency.
        </p>
      </FadeIn>

      {/* IDDSI Level Filters */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-2">
          {IDDSI_LEVELS.map((l) => (
            <button
              key={l.level}
              onClick={() => setSelectedLevel(l.level)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedLevel === l.level
                  ? "bg-primary text-primary-foreground shadow-warm-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Meal type pills */}
      <FadeIn delay={0.15}>
        <div className="flex flex-wrap gap-2">
          {["breakfast", "lunch", "dinner", "snack", "dessert"].map((meal) => (
            <button
              key={meal}
              onClick={() => setSelectedMeal(selectedMeal === meal ? null : meal)}
              className={`rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors ${
                selectedMeal === meal
                  ? "bg-sage-600 text-white"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted"
              }`}
            >
              {meal}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Recipe Grid */}
      <StaggerChildren className="grid gap-4 sm:grid-cols-2">
        {filtered.map((recipe) => (
          <StaggerItem key={recipe.id}>
            <ScaleOnHover>
              <div className="rounded-xl border bg-card p-5 space-y-3 h-full">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading font-semibold text-sm">{recipe.title}</h3>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${LEVEL_COLORS[recipe.iddsiLevel] ?? "bg-muted text-muted-foreground"}`}>
                    L{recipe.iddsiLevel}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{recipe.description}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{recipe.prepTimeMinutes} min</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{recipe.servings}</span>
                  <span className="capitalize">{recipe.mealType}</span>
                </div>
                {/* Expandable details */}
                <details className="group">
                  <summary className="text-xs font-medium text-primary cursor-pointer hover:underline">
                    View recipe
                  </summary>
                  <div className="mt-3 space-y-3 text-xs">
                    <div>
                      <p className="font-semibold mb-1">Ingredients</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-muted-foreground">
                        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Instructions</p>
                      <ol className="list-decimal pl-4 space-y-0.5 text-muted-foreground">
                        {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
                      </ol>
                    </div>
                    <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-amber-800">
                      <p className="font-semibold text-[11px]">Safety Tip</p>
                      <p>{recipe.safetyTip}</p>
                    </div>
                    <div className="rounded-lg bg-sage-50 border border-sage-200 p-3 text-sage-800">
                      <p className="font-semibold text-[11px]">Caregiver Note</p>
                      <p>{recipe.caregiverNote}</p>
                    </div>
                  </div>
                </details>
              </div>
            </ScaleOnHover>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {filtered.length === 0 && (
        <div className="rounded-xl bg-muted/30 p-8 text-center text-sm text-muted-foreground">
          No recipes match your filters. Try adjusting your selection.
        </div>
      )}

      {/* IDDSI Attribution */}
      <div className="rounded-lg bg-muted/50 p-4 text-xs text-muted-foreground space-y-1">
        <p><strong>Attribution:</strong> IDDSI Framework &copy; The International Dysphagia Diet Standardisation Initiative. <a href="https://iddsi.org" target="_blank" rel="noopener noreferrer" className="underline">iddsi.org</a></p>
        <p>This is not the official IDDSI website. Recipes are IDDSI-informed original content.</p>
      </div>
    </div>
  );
}
