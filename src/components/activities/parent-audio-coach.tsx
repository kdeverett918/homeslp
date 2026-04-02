"use client";

import {
  CheckCircle2,
  ChevronRight,
  Headphones,
  RefreshCcw,
  Sparkles,
  Volume2,
} from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { ContentImage } from "@/components/media/content-image";
import { ReadAloudButton } from "@/components/media/read-aloud-button";
import {
  parentLearningLessons,
  type ParentLearningContext,
  type ParentLearningOutcomeTone,
} from "@/data/parent-learning-lessons";
import { useChildProfile } from "@/lib/stores/child-profile";
import { useParentLearningLab } from "@/lib/stores/parent-learning-lab";
import { cn } from "@/lib/utils";

const contextLabels: Record<ParentLearningContext, string> = {
  mealtime: "Mealtime",
  bath: "Bath",
  play: "Play",
  bedtime: "Bedtime",
  errands: "Errands",
  anytime: "Anytime",
};

const toneStyles: Record<
  ParentLearningOutcomeTone,
  { panel: string; badge: string }
> = {
  success: {
    panel: "border-sage-200 bg-sage-50 text-sage-900",
    badge: "bg-sage-600 text-white",
  },
  adjust: {
    panel: "border-amber-200 bg-amber-50 text-amber-900",
    badge: "bg-amber-600 text-white",
  },
  support: {
    panel: "border-sky-200 bg-sky-50 text-sky-900",
    badge: "bg-sky-600 text-white",
  },
};

interface ParentAudioCoachProps {
  onUseRoutine: (context: ParentLearningContext) => void;
  onLessonContextChange?: (context: ParentLearningContext) => void;
  preferredContext?: ParentLearningContext | null;
}

export function ParentAudioCoach({
  onUseRoutine,
  onLessonContextChange,
  preferredContext = null,
}: ParentAudioCoachProps) {
  const { childAgeMonths } = useChildProfile();
  const {
    activeLessonId,
    completedLessonIds,
    lessonOutcomeById,
    setActiveLesson,
    setOutcome,
    clearOutcome,
    toggleCompleted,
    reset,
  } = useParentLearningLab();
  const previousPreferredContextRef = useRef<ParentLearningContext | null>(null);

  const eligibleLessons = useMemo(() => {
    const lessons = parentLearningLessons.filter((lesson) => {
      if (childAgeMonths == null) return true;
      return (
        childAgeMonths >= lesson.ageRangeStart &&
        childAgeMonths <= lesson.ageRangeEnd
      );
    });

    return lessons.length > 0 ? lessons : parentLearningLessons;
  }, [childAgeMonths]);

  useEffect(() => {
    if (eligibleLessons.length === 0) return;

    if (
      !activeLessonId ||
      !eligibleLessons.some((lesson) => lesson.id === activeLessonId)
    ) {
      setActiveLesson(eligibleLessons[0].id);
    }
  }, [activeLessonId, eligibleLessons, setActiveLesson]);

  useEffect(() => {
    if (!preferredContext) {
      previousPreferredContextRef.current = null;
      return;
    }

    if (preferredContext === previousPreferredContextRef.current) {
      return;
    }

    previousPreferredContextRef.current = preferredContext;

    const matchingLesson = eligibleLessons.find(
      (lesson) => lesson.context === preferredContext
    );

    if (matchingLesson) {
      setActiveLesson(matchingLesson.id);
    }
  }, [eligibleLessons, preferredContext, setActiveLesson]);

  const activeLesson =
    eligibleLessons.find((lesson) => lesson.id === activeLessonId) ??
    eligibleLessons[0];

  useEffect(() => {
    if (!activeLesson || !onLessonContextChange) return;
    onLessonContextChange(activeLesson.context);
  }, [activeLesson, onLessonContextChange]);

  if (!activeLesson) return null;

  const completedCount = eligibleLessons.filter((lesson) =>
    completedLessonIds.includes(lesson.id)
  ).length;
  const selectedOutcomeId = lessonOutcomeById[activeLesson.id];
  const selectedOutcome = activeLesson.outcomes.find(
    (outcome) => outcome.id === selectedOutcomeId
  );
  const isCompleted = completedLessonIds.includes(activeLesson.id);

  return (
    <section className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(18rem,22rem)]">
      <div className="guide-surface p-5 sm:p-6">
        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="section-kicker">Parent audio coach</span>
            <span className="trust-pill text-xs">
              {contextLabels[activeLesson.context]} routine
            </span>
            <span className="trust-pill text-xs">
              {activeLesson.estimatedMinutes} min practice
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] lg:items-start">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="font-heading text-2xl font-bold tracking-tight">
                  {activeLesson.title}
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {activeLesson.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <ReadAloudButton narration={activeLesson.narration} />
                <button
                  type="button"
                  onClick={() => onUseRoutine(activeLesson.context)}
                  className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background px-4 py-2 text-sm font-medium text-foreground shadow-warm-sm transition-colors hover:border-primary/30 hover:text-primary"
                >
                  Jump to matching activity
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-border/70 bg-background/85 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Set Up
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm text-foreground/85">
                    {activeLesson.prepChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/85 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Watch For
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm text-foreground/85">
                    {activeLesson.watchFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <ContentImage
                image={activeLesson.image}
                aspect="hero"
                sizes="(max-width: 1024px) 100vw, 34vw"
                loading="eager"
              />
              <div className="field-note p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Try this line
                </p>
                <p className="mt-2 text-base font-medium leading-7 text-foreground">
                  “{activeLesson.tryLine}”
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-[1.7rem] border border-border/70 bg-white/80 p-4 shadow-warm-sm">
            <div className="flex items-center gap-2">
              <Headphones className="h-4 w-4 text-primary" />
              <p className="text-sm font-semibold">{activeLesson.reflectionPrompt}</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              {activeLesson.outcomes.map((outcome) => (
                <button
                  key={outcome.id}
                  type="button"
                  onClick={() => setOutcome(activeLesson.id, outcome.id)}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-left text-sm transition-colors",
                    selectedOutcomeId === outcome.id
                      ? "border-primary bg-primary/10 text-foreground shadow-warm-sm"
                      : "border-border/70 bg-background/75 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  )}
                >
                  {outcome.label}
                </button>
              ))}
            </div>

            {selectedOutcome && (
              <div
                className={cn(
                  "rounded-2xl border p-4",
                  toneStyles[selectedOutcome.tone].panel
                )}
              >
                <span
                  className={cn(
                    "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
                    toneStyles[selectedOutcome.tone].badge
                  )}
                >
                  Coach note
                </span>
                <p className="mt-3 text-sm leading-7">{selectedOutcome.feedback}</p>
                <p className="mt-2 text-sm font-medium">
                  Next move: {selectedOutcome.nextMove}
                </p>
              </div>
            )}
          </div>

          <div className="soft-panel p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {activeLesson.carryoverTitle}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Keep this small. One extra rep today is enough.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleCompleted(activeLesson.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                    isCompleted
                      ? "bg-sage-600 text-white hover:bg-sage-700"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {isCompleted ? "Practiced today" : "Mark practiced"}
                </button>
                {selectedOutcomeId && (
                  <button
                    type="button"
                    onClick={() => clearOutcome(activeLesson.id)}
                    className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                  >
                    <RefreshCcw className="h-4 w-4" />
                    Try another response
                  </button>
                )}
              </div>
            </div>

            <ul className="mt-4 grid gap-2.5 text-sm text-foreground/85 md:grid-cols-3">
              {activeLesson.carryoverSteps.map((step) => (
                <li
                  key={step}
                  className="rounded-xl border border-border/60 bg-background/75 px-3 py-3"
                >
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="soft-panel p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Progress
              </p>
              <p className="mt-1 font-heading text-xl font-semibold">
                {completedCount} of {eligibleLessons.length} practiced
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Short, repeated reps are the point. You are building parent timing,
            not performing.
          </p>
          {(completedCount > 0 || Object.keys(lessonOutcomeById).length > 0) && (
            <button
              type="button"
              onClick={reset}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <RefreshCcw className="h-4 w-4" />
              Reset coach progress
            </button>
          )}
        </div>

        <div className="rounded-[1.7rem] border border-border/70 bg-card p-3 shadow-warm-sm">
          <div className="px-2 pb-2 pt-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Lessons
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
            {eligibleLessons.map((lesson) => {
              const lessonCompleted = completedLessonIds.includes(lesson.id);
              const isActive = lesson.id === activeLesson.id;

              return (
                <button
                  key={lesson.id}
                  type="button"
                  onClick={() => setActiveLesson(lesson.id)}
                  className={cn(
                    "w-full rounded-2xl border px-4 py-3 text-left transition-colors",
                    isActive
                      ? "border-primary bg-primary/10 shadow-warm-sm"
                      : "border-border/70 bg-background/75 hover:border-primary/30"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {contextLabels[lesson.context]}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {lesson.title}
                      </p>
                    </div>
                    {lessonCompleted && (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
                    )}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Volume2 className="h-3.5 w-3.5" />
                    {lesson.narration.durationLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </section>
  );
}
