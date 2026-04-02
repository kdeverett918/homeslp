"use client";

import Link from "next/link";
import { startTransition, useState, type ComponentType } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Compass,
  UtensilsCrossed,
  Volume2,
  Waves,
} from "lucide-react";
import { ContentImage } from "@/components/media/content-image";
import { Button } from "@/components/ui/button";
import {
  getStartMenuPreview,
  startMenuConcerns,
  startMenuGoals,
  type StartMenuConcern,
  type StartMenuGoal,
} from "@/data/start-menu";
import { useChildProfile } from "@/lib/stores/child-profile";
import { cn } from "@/lib/utils";

const concernIcons = {
  speech: Volume2,
  language: BookOpen,
  play: Brain,
  feeding: UtensilsCrossed,
  behavior: Waves,
  "not-sure": Compass,
} satisfies Record<StartMenuConcern, ComponentType<{ className?: string }>>;

const ageQuickPicks = [6, 12, 18, 24, 36, 48];

interface ParentStartMenuProps {
  mode: "preview" | "app";
  displayName?: string | null;
  className?: string;
}

export function ParentStartMenu({
  mode,
  displayName,
  className,
}: ParentStartMenuProps) {
  const { childAgeMonths, childName, parentFocus, parentGoal, setProfile } = useChildProfile();
  const [ageMonths, setAgeMonths] = useState(childAgeMonths ?? (mode === "preview" ? 24 : 20));
  const [concern, setConcern] = useState<StartMenuConcern>(parentFocus ?? "not-sure");
  const [goal, setGoal] = useState<StartMenuGoal>(parentGoal ?? (mode === "app" ? "idea" : "typical"));

  const greetingName = childName || displayName;
  const preview = getStartMenuPreview(ageMonths, concern, goal);
  const launcherTitle =
    mode === "preview"
      ? "See the next step a parent would actually take."
      : greetingName
        ? `Welcome back, ${greetingName}. Start with what feels biggest today.`
        : "Start with what feels biggest today.";
  const launcherDescription =
    mode === "preview"
      ? "Choose an age, name the worry, and pick the kind of help you want first. The preview updates instantly so parents can see the next click without guessing."
      : "Set the age, pick the focus, and jump straight to the tool that fits today instead of digging through the app.";
  const layoutClassName =
    mode === "app" ? "xl:grid-cols-[0.92fr_1.08fr] xl:items-start" : undefined;
  const milestoneGridClassName =
    mode === "app" ? "lg:grid-cols-[0.9fr_1.1fr]" : undefined;
  const actionGridClassName =
    mode === "app" ? "lg:grid-cols-[0.98fr_1.02fr]" : undefined;

  const handleAgeChange = (nextAge: number) => {
    setAgeMonths(nextAge);
    startTransition(() => {
      setProfile({ childAgeMonths: nextAge, path: "child" });
    });
  };

  const handleConcernChange = (nextConcern: StartMenuConcern) => {
    setConcern(nextConcern);
    startTransition(() => {
      setProfile({ parentFocus: nextConcern, path: "child" });
    });
  };

  const handleGoalChange = (nextGoal: StartMenuGoal) => {
    setGoal(nextGoal);
    startTransition(() => {
      setProfile({ parentGoal: nextGoal, path: "child" });
    });
  };

  return (
    <section
      id={mode === "preview" ? "parent-start-menu" : "dashboard-start-menu"}
      className={cn("guide-surface p-5 sm:p-6 lg:p-7", className)}
    >
      <div className={cn("relative z-10 grid gap-6", layoutClassName)}>
        <div className="space-y-5">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="section-kicker">
                {mode === "preview" ? "Start here" : "Today inside HomeSLP"}
              </div>
              <span className="rounded-full border border-border/80 bg-white/75 px-3 py-1 text-xs font-semibold text-foreground">
                {preview.ageLabel}
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                {launcherTitle}
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
                {launcherDescription}
              </p>
            </div>
          </div>

          <div className="soft-panel space-y-4 p-4 sm:p-5">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Child age right now
                  </p>
                  <p className="mt-1 text-sm text-foreground">{preview.ageSummary}</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {preview.ageLabel}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {ageQuickPicks.map((age) => (
                  <button
                    key={age}
                    type="button"
                    onClick={() => handleAgeChange(age)}
                    className={cn(
                      "rounded-full border px-3 py-2 text-xs font-semibold transition-colors",
                      ageMonths === age
                        ? "border-primary/35 bg-primary text-primary-foreground"
                        : "border-border/80 bg-white/75 text-foreground hover:border-primary/25",
                    )}
                  >
                    {age < 24 ? `${age} mo` : `${Math.floor(age / 12)} yr`}
                  </button>
                ))}
              </div>

              <input
                type="range"
                min={0}
                max={60}
                value={ageMonths}
                onChange={(event) => handleAgeChange(Number(event.target.value))}
                className="w-full accent-primary"
                aria-label="Select child age in months"
              />
            </div>

            <div className="story-divider" />

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What feels most urgent right now?
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {startMenuConcerns.map((item) => {
                  const Icon = concernIcons[item.value];
                  const isActive = item.value === concern;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => handleConcernChange(item.value)}
                      className={cn(
                        "rounded-[1.4rem] border p-4 text-left transition-[transform,box-shadow,border-color,background-color] duration-200",
                        isActive
                          ? "border-primary/30 bg-primary/8 shadow-warm-md"
                          : "border-border/80 bg-white/78 hover:-translate-y-px hover:border-primary/20 hover:shadow-warm-sm",
                      )}
                    >
                      <span className="flex items-start gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="space-y-1">
                          <span className="block font-semibold text-foreground">{item.label}</span>
                          <span className="block text-xs leading-6 text-muted-foreground">
                            {item.description}
                          </span>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="story-divider" />

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What kind of help do you want first?
              </p>
              <div className="grid gap-2">
                {startMenuGoals.map((item) => {
                  const isActive = item.value === goal;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => handleGoalChange(item.value)}
                      className={cn(
                        "rounded-[1.35rem] border px-4 py-3 text-left transition-[transform,box-shadow,border-color,background-color] duration-200",
                        isActive
                          ? "border-primary/30 bg-background/90 shadow-warm-sm"
                          : "border-border/80 bg-white/72 hover:-translate-y-px hover:border-primary/20",
                      )}
                    >
                      <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                      <span className="mt-1 block text-xs leading-6 text-muted-foreground">
                        {item.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {mode === "preview" ? "Live preview" : "Today's snapshot"}
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              {mode === "preview"
                ? "This is the age snapshot, idea, and next action a parent would see next."
                : "A quick read on the milestone anchor, one idea, and the next best click."}
            </p>
          </div>

          <div className={cn("grid gap-4", milestoneGridClassName)}>
            <ContentImage
              image={preview.image}
              className="min-h-[250px] bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(244,232,220,0.96))]"
              imageClassName="h-full min-h-[250px] object-cover"
              sizes="(max-width: 1280px) 100vw, 42vw"
            />

            <div className="soft-panel flex flex-col justify-between p-4 sm:p-5">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="trust-pill">{preview.concern.label}</span>
                  <span className="trust-pill">{preview.goal.label}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {preview.milestoneLabel}
                  </p>
                  <h3 className="font-heading text-2xl font-semibold tracking-tight">
                    {preview.milestoneTitle}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {preview.milestoneDescription}
                  </p>
                </div>
              </div>

              <div className="mt-4 field-note p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Parent note
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground">{preview.parentNote}</p>
              </div>
            </div>
          </div>

          <div className={cn("grid gap-4", actionGridClassName)}>
            <article className="soft-panel h-full p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                One doable next step
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold">{preview.tipTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {preview.tipDescription}
              </p>
            </article>

            <article className="guide-surface p-5">
              <div className="relative z-10 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Worth watching
                  </p>
                  <p className="mt-3 text-sm leading-7 text-foreground">{preview.watchFor}</p>
                </div>

                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full justify-between">
                    <Link href={preview.primaryAction.href}>
                      {preview.primaryAction.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {preview.secondaryActions.map((action) => (
                      <Link
                        key={action.href}
                        href={action.href}
                        className="card-lift rounded-[1.15rem] border border-border/80 bg-white/78 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                      >
                        {action.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {mode === "preview" ? (
            <p className="text-sm leading-7 text-muted-foreground">
              Parents should not have to decode the whole product before they can trust it. This
              launcher shows the age anchor, one small idea, and the next click immediately.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
