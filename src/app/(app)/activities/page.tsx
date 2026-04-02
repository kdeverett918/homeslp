"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Headphones,
  Shuffle,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ParentAudioCoach } from "@/components/activities/parent-audio-coach";
import { FadeIn } from "@/components/motion";
import { actionCards } from "@/data/action-cards";
import { type ParentLearningContext } from "@/data/parent-learning-lessons";
import { useChildProfile } from "@/lib/stores/child-profile";

const CONTEXTS = [
  "all",
  "mealtime",
  "bath",
  "play",
  "bedtime",
  "errands",
  "anytime",
] as const;

type ActivityContext = (typeof CONTEXTS)[number];

const contextLabels: Record<ActivityContext, string> = {
  all: "Any moment",
  mealtime: "Mealtime",
  bath: "Bath",
  play: "Play",
  bedtime: "Bedtime",
  errands: "Errands",
  anytime: "Anytime",
};

const contextDescriptions: Record<ActivityContext, string> = {
  all: "Browse the full bank of routines and shuffle until one fits the moment.",
  mealtime: "Keep the language load light and use choices, pauses, and easy labels.",
  bath: "Use repetition, sensory words, and playful routines while your child is already regulated.",
  play: "Follow your child's lead and turn shared play into language reps without over-prompting.",
  bedtime: "Slow the pace down and lean on predictable language, songs, and connection.",
  errands: "Use quick, real-world repetitions that fit short transitions and waiting moments.",
  anytime: "Pick a flexible routine that works when you need one fast communication opportunity.",
};

export default function ActivitiesPage() {
  const { childAgeMonths } = useChildProfile();
  const [context, setContext] = useState<ActivityContext>("all");
  const [cardIndex, setCardIndex] = useState(0);
  const activitySectionRef = useRef<HTMLElement | null>(null);

  const { cards: eligibleCards, usedFallback } = useMemo(() => {
    let baseCards = actionCards.filter((card) => card.path === "child");

    if (childAgeMonths != null) {
      baseCards = baseCards.filter(
        (card) =>
          childAgeMonths >= card.ageRangeStart &&
          childAgeMonths <= card.ageRangeEnd
      );
    }

    const contextCards =
      context === "all"
        ? baseCards
        : baseCards.filter((card) => card.context === context);

    if (contextCards.length > 0) {
      return { cards: contextCards, usedFallback: false };
    }

    return {
      cards: baseCards.length > 0 ? baseCards : actionCards.slice(0, 10),
      usedFallback: context !== "all",
    };
  }, [childAgeMonths, context]);

  const currentCard = eligibleCards[cardIndex % eligibleCards.length];

  const shuffle = useCallback(() => {
    setCardIndex((index) => (index + 1) % Math.max(eligibleCards.length, 1));
  }, [eligibleCards.length]);

  const loadRoutine = useCallback((nextContext: ParentLearningContext) => {
    setContext(nextContext);
    setCardIndex(0);
    activitySectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const syncRoutineContext = useCallback((nextContext: ParentLearningContext) => {
    setContext((currentContext) =>
      currentContext === nextContext ? currentContext : nextContext
    );
    setCardIndex(0);
  }, []);

  return (
    <div className="max-w-6xl space-y-8">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Dashboard
      </Link>

      <FadeIn>
        <section className="guide-surface p-5 sm:p-7">
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="section-kicker">Parent practice lab</span>
              <span className="trust-pill text-xs">Audio-guided routines</span>
              <span className="trust-pill text-xs">Child activity handoff</span>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="h-7 w-7 text-primary" />
                  <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                    Activities + Audio Coach
                  </h1>
                </div>
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  Start with a short ElevenLabs coaching clip built for parents,
                  then move straight into a matched child activity while the
                  routine is still fresh.
                </p>
              </div>

              <div className="field-note max-w-sm p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  How to use this
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground/85">
                  Listen. Try one rep. Reflect. Then shuffle a child activity
                  for the same moment in your day.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <ParentAudioCoach
          onUseRoutine={loadRoutine}
          onLessonContextChange={syncRoutineContext}
          preferredContext={context === "all" ? null : context}
        />
      </FadeIn>

      <FadeIn delay={0.14}>
        <section ref={activitySectionRef} className="space-y-5">
          <div className="rounded-[2rem] border border-border/70 bg-card/85 p-5 shadow-warm-sm sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <Headphones className="h-4 w-4" />
                  Match the coaching lesson with a child-facing rep
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold tracking-tight">
                    Quick activities for the same routine
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {contextDescriptions[context]}
                  </p>
                </div>
              </div>

              <div className="soft-panel px-4 py-3 text-sm text-muted-foreground">
                {childAgeMonths != null
                  ? `${eligibleCards.length} age-matched activities ready at ${childAgeMonths} months`
                  : `${eligibleCards.length} activities ready now`}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {CONTEXTS.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setContext(value);
                    setCardIndex(0);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    context === value
                      ? "bg-primary text-primary-foreground shadow-warm-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {contextLabels[value]}
                </button>
              ))}
            </div>

            {usedFallback && (
              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                No age-matched {contextLabels[context].toLowerCase()} cards are
                available yet, so the app is showing flexible routines that
                still fit this stage.
              </div>
            )}
          </div>

          {currentCard && (
            <AnimatePresence mode="wait">
              <motion.section
                key={currentCard.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]"
              >
                <div className="rounded-[2rem] border border-primary/15 bg-gradient-to-br from-card via-card to-primary/5 p-6 shadow-warm-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {contextLabels[currentCard.context]}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {currentCard.estimatedMinutes} min
                    </span>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="font-heading text-2xl font-bold tracking-tight">
                        {currentCard.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-foreground/85 sm:text-base">
                        {currentCard.technique}
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-border/70 bg-background/85 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        What to say
                      </p>
                      <p className="mt-2 text-base leading-7 text-foreground">
                        &ldquo;{currentCard.example}&rdquo;
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-sage-200 bg-sage-50 p-4 text-sm leading-7 text-sage-900">
                      <span className="font-semibold">Parent tip:</span>{" "}
                      {currentCard.parentTip}
                    </div>
                  </div>
                </div>

                <div className="soft-panel flex flex-col justify-between gap-4 p-5">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Next move
                    </p>
                    <p className="text-sm leading-7 text-foreground/85">
                      Keep the routine light. One clean rep is better than
                      dragging it out once your child is done.
                    </p>
                    <div className="rounded-2xl border border-border/70 bg-background/80 px-4 py-3 text-sm text-muted-foreground">
                      {eligibleCards.length} activities in this set
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={shuffle}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Shuffle className="h-4 w-4" />
                    Next Activity
                  </button>
                </div>
              </motion.section>
            </AnimatePresence>
          )}

          <p className="text-center text-xs italic text-muted-foreground">
            These routines are educational and are not a substitute for direct
            assessment or therapy from a licensed speech-language pathologist.
          </p>

          <div className="flex flex-wrap gap-3 border-t pt-6">
            <Link
              href="/blueprints"
              className="card-lift inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card px-4 py-3 text-sm font-medium shadow-warm-sm hover:text-primary"
            >
              <BookOpen className="h-4 w-4" />
              Weekly learning plans
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
