"use client";

import { useState, useMemo } from "react";
import {
  Heart,
  Flame,
  Trophy,
  Star,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  Eye,
  Dumbbell,
  ThumbsUp,
  PartyPopper,
  ChevronRight,
  Lock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { ProgressRing } from "@/components/ui/progress-ring";
import {
  useCheckInStore,
  BADGES,
  PARENT_LEVELS,
  type Badge,
} from "@/lib/stores/checkin-store";
import {
  getWeeklyPrompts,
  CONTEXT_LABELS,
} from "@/data/checkin-prompts";
import Link from "next/link";

type Step = "welcome" | "observe" | "practice" | "confidence" | "celebrate" | "results";

const STEP_ORDER: Step[] = ["welcome", "observe", "practice", "confidence", "celebrate", "results"];

const STEP_META: Record<Step, { icon: typeof Eye; label: string; color: string }> = {
  welcome: { icon: Heart, label: "Welcome", color: "text-primary" },
  observe: { icon: Eye, label: "Observe", color: "text-blue-600" },
  practice: { icon: Dumbbell, label: "Practice", color: "text-sage-600" },
  confidence: { icon: ThumbsUp, label: "Confidence", color: "text-amber-600" },
  celebrate: { icon: PartyPopper, label: "Celebrate", color: "text-rose-600" },
  results: { icon: Trophy, label: "Results", color: "text-primary" },
};

export default function CheckInPage() {
  const store = useCheckInStore();
  const canCheckIn = store.canCheckInThisWeek();
  const prompts = useMemo(() => getWeeklyPrompts(), []);

  const [step, setStep] = useState<Step>(canCheckIn ? "welcome" : "results");
  const [observeAnswer, setObserveAnswer] = useState("");
  const [practiceContexts, setPracticeContexts] = useState<string[]>([]);
  const [practiceActivities, setPracticeActivities] = useState<string[]>([]);
  const [confidenceRating, setConfidenceRating] = useState(0);
  const [celebrateAnswer, setCelebrateAnswer] = useState("");
  const [submittedEntry, setSubmittedEntry] = useState<ReturnType<typeof store.submitCheckIn> | null>(null);

  const currentStepIndex = STEP_ORDER.indexOf(step);
  const progress = (currentStepIndex / (STEP_ORDER.length - 1)) * 100;

  function goNext() {
    const nextIdx = currentStepIndex + 1;
    if (nextIdx < STEP_ORDER.length) {
      setStep(STEP_ORDER[nextIdx]);
    }
  }

  function goBack() {
    const prevIdx = currentStepIndex - 1;
    if (prevIdx >= 0) {
      setStep(STEP_ORDER[prevIdx]);
    }
  }

  function handleSubmit() {
    const entry = store.submitCheckIn({
      date: new Date().toISOString(),
      noticedHighlight: observeAnswer,
      activitiesTried: practiceActivities,
      contextsTried: practiceContexts,
      confidenceRating,
      celebrationNote: celebrateAnswer,
    });
    setSubmittedEntry(entry);
    setStep("results");
  }

  function toggleContext(ctx: string) {
    setPracticeContexts(prev =>
      prev.includes(ctx) ? prev.filter(c => c !== ctx) : [...prev, ctx]
    );
  }

  function toggleActivity(act: string) {
    setPracticeActivities(prev =>
      prev.includes(act) ? prev.filter(a => a !== act) : [...prev, act]
    );
  }

  // ── Already checked in this week ──
  if (!canCheckIn && step !== "results") {
    setStep("results");
  }

  const level = store.getLevel();
  const nextLevel = store.getNextLevel();
  const xpProgress = store.getXPProgress();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Dashboard
      </Link>

      {/* Header */}
      <FadeIn>
        <div className="flex items-center gap-3">
          <Heart className="w-7 h-7 text-primary fill-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">Weekly Check-In</h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">
          Take 2 minutes to reflect on your week. Every check-in helps YOU grow as your child&apos;s best communication partner.
        </p>
      </FadeIn>

      {/* Progress bar (during check-in flow) */}
      {step !== "results" && (
        <FadeIn delay={0.05}>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              {STEP_ORDER.filter(s => s !== "results").map((s) => {
                const meta = STEP_META[s];
                const idx = STEP_ORDER.indexOf(s);
                const isActive = idx <= currentStepIndex;
                return (
                  <span
                    key={s}
                    className={`flex items-center gap-1 ${isActive ? meta.color + " font-medium" : ""}`}
                  >
                    <meta.icon className="w-3 h-3" />
                    <span className="hidden sm:inline">{meta.label}</span>
                  </span>
                );
              })}
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-rose-400 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        </FadeIn>
      )}

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
        >
          {/* ── WELCOME ── */}
          {step === "welcome" && (
            <div className="space-y-6">
              {/* Streak display */}
              <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 p-6 text-center space-y-4">
                {store.currentStreak > 0 ? (
                  <>
                    <div className="flex items-center justify-center gap-2">
                      <Flame className="w-8 h-8 text-orange-500" />
                      <span className="font-heading text-4xl font-bold text-orange-500">{store.currentStreak}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      week streak! Keep it going!
                    </p>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-10 h-10 text-primary mx-auto" />
                    <p className="font-heading text-lg font-semibold">
                      {store.entries.length === 0
                        ? "Ready for your first check-in?"
                        : "Start a new streak!"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {store.entries.length === 0
                        ? "It only takes 2 minutes. Let's see how your week went."
                        : "Check in each week to build momentum and earn badges."}
                    </p>
                  </>
                )}

                {/* Level display */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <span className="text-2xl">{level.icon}</span>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Your Level</p>
                    <p className="font-heading font-semibold text-sm">{level.name}</p>
                  </div>
                  {nextLevel && (
                    <div className="ml-4">
                      <ProgressRing value={xpProgress} size={44} label={`${store.totalXP}`} />
                      <p className="text-[10px] text-muted-foreground mt-0.5">XP</p>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={goNext}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-warm-sm hover:bg-primary/90 transition-colors"
              >
                Start Check-In <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* ── OBSERVE ── */}
          {step === "observe" && (
            <div className="space-y-5">
              <div className="rounded-xl border bg-card p-5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <Eye className="w-4.5 h-4.5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="font-heading font-semibold">{prompts.observe.text}</h2>
                    {prompts.observe.helpText && (
                      <p className="text-xs text-muted-foreground mt-0.5">{prompts.observe.helpText}</p>
                    )}
                  </div>
                </div>
                <textarea
                  value={observeAnswer}
                  onChange={(e) => setObserveAnswer(e.target.value)}
                  placeholder="Tell us what you noticed..."
                  className="w-full rounded-lg border bg-background px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[100px]"
                />
              </div>

              <div className="flex gap-3">
                <button onClick={goBack} className="inline-flex items-center gap-1 rounded-xl border bg-card px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={goNext}
                  disabled={!observeAnswer.trim()}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── PRACTICE ── */}
          {step === "practice" && (
            <div className="space-y-5">
              {/* Contexts */}
              <div className="rounded-xl border bg-card p-5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sage-100">
                    <Dumbbell className="w-4.5 h-4.5 text-sage-600" />
                  </div>
                  <div>
                    <h2 className="font-heading font-semibold">Where did you practice this week?</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Tap all that apply — you&apos;re probably doing more than you think!</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.entries(CONTEXT_LABELS).map(([key, { label, emoji }]) => {
                    const isSelected = practiceContexts.includes(key);
                    return (
                      <button
                        key={key}
                        onClick={() => toggleContext(key)}
                        className={`rounded-xl border-2 p-3 text-sm font-medium transition-all ${
                          isSelected
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-muted bg-card hover:border-primary/30"
                        }`}
                      >
                        <span className="text-lg block mb-1">{emoji}</span>
                        {label}
                        {isSelected && <Check className="w-3.5 h-3.5 inline ml-1.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Techniques */}
              <div className="rounded-xl border bg-card p-5 space-y-4">
                <h3 className="font-heading font-semibold text-sm">What techniques did you try?</h3>
                <div className="space-y-2">
                  {[
                    "Narrating what I'm doing",
                    "Waiting for my child to respond",
                    "Offering choices",
                    "Expanding their words",
                    "Reading together",
                    "Singing songs or nursery rhymes",
                    "Playing turn-taking games",
                  ].map((act) => {
                    const isSelected = practiceActivities.includes(act);
                    return (
                      <button
                        key={act}
                        onClick={() => toggleActivity(act)}
                        className={`w-full text-left rounded-lg border px-4 py-2.5 text-sm transition-all flex items-center gap-3 ${
                          isSelected
                            ? "border-sage-300 bg-sage-50"
                            : "hover:border-sage-200"
                        }`}
                      >
                        <div className={`w-5 h-5 shrink-0 rounded-md border-2 flex items-center justify-center transition-colors ${
                          isSelected ? "bg-sage-500 border-sage-500 text-white" : "border-muted-foreground/30"
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        {act}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={goBack} className="inline-flex items-center gap-1 rounded-xl border bg-card px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={goNext}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── CONFIDENCE ── */}
          {step === "confidence" && (
            <div className="space-y-5">
              <div className="rounded-xl border bg-card p-5 space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                    <ThumbsUp className="w-4.5 h-4.5 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="font-heading font-semibold">{prompts.confidence.text}</h2>
                    {prompts.confidence.helpText && (
                      <p className="text-xs text-muted-foreground mt-0.5">{prompts.confidence.helpText}</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-center gap-3">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onClick={() => setConfidenceRating(n)}
                      className="group flex flex-col items-center gap-1.5"
                    >
                      <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all ${
                        confidenceRating >= n
                          ? "border-amber-400 bg-amber-100 scale-110"
                          : "border-muted hover:border-amber-200"
                      }`}>
                        <Star
                          className={`w-6 h-6 transition-colors ${
                            confidenceRating >= n
                              ? "text-amber-500 fill-amber-500"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      </div>
                      <span className="text-[10px] text-muted-foreground">
                        {n === 1 ? "Just starting" : n === 2 ? "Learning" : n === 3 ? "Growing" : n === 4 ? "Confident" : "Thriving"}
                      </span>
                    </button>
                  ))}
                </div>

                {confidenceRating > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-center"
                  >
                    <p className="text-sm text-amber-800">
                      {confidenceRating <= 2
                        ? "That's okay — you're here and learning. That's what matters most."
                        : confidenceRating === 3
                          ? "You're building skills every day. Keep going!"
                          : "Amazing! Your confidence shows in how you support your child."}
                    </p>
                  </motion.div>
                )}
              </div>

              <div className="flex gap-3">
                <button onClick={goBack} className="inline-flex items-center gap-1 rounded-xl border bg-card px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={goNext}
                  disabled={confidenceRating === 0}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── CELEBRATE ── */}
          {step === "celebrate" && (
            <div className="space-y-5">
              <div className="rounded-xl border bg-card p-5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-100">
                    <PartyPopper className="w-4.5 h-4.5 text-rose-600" />
                  </div>
                  <div>
                    <h2 className="font-heading font-semibold">{prompts.celebrate.text}</h2>
                    {prompts.celebrate.helpText && (
                      <p className="text-xs text-muted-foreground mt-0.5">{prompts.celebrate.helpText}</p>
                    )}
                  </div>
                </div>
                <textarea
                  value={celebrateAnswer}
                  onChange={(e) => setCelebrateAnswer(e.target.value)}
                  placeholder="Share your win..."
                  className="w-full rounded-lg border bg-background px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[100px]"
                />
              </div>

              <div className="flex gap-3">
                <button onClick={goBack} className="inline-flex items-center gap-1 rounded-xl border bg-card px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!celebrateAnswer.trim()}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-rose-400 px-6 py-3 text-sm font-medium text-primary-foreground shadow-warm-sm hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Sparkles className="w-4 h-4" /> Complete Check-In
                </button>
              </div>
            </div>
          )}

          {/* ── RESULTS ── */}
          {step === "results" && (
            <div className="space-y-6">
              {/* Celebration header */}
              {submittedEntry && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="rounded-2xl bg-gradient-to-br from-primary/10 via-rose-50 to-amber-50 border-2 border-primary/20 p-6 text-center space-y-3"
                >
                  <motion.div
                    initial={{ rotate: -10, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <PartyPopper className="w-12 h-12 text-primary mx-auto" />
                  </motion.div>
                  <h2 className="font-heading text-xl font-bold">Check-In Complete!</h2>
                  <p className="text-sm text-muted-foreground">
                    You earned <span className="font-bold text-primary">+{submittedEntry.xpEarned} XP</span> this week
                  </p>
                </motion.div>
              )}

              {/* New badges earned */}
              {submittedEntry && submittedEntry.newBadges.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3"
                >
                  <h3 className="font-heading font-semibold text-sm text-center">New Badges Earned!</h3>
                  <div className="grid gap-3">
                    {submittedEntry.newBadges.map((badgeId, i) => {
                      const badge = BADGES.find(b => b.id === badgeId);
                      if (!badge) return null;
                      return (
                        <motion.div
                          key={badgeId}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                          className="rounded-xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-amber-100 p-4 flex items-center gap-4"
                        >
                          <span className="text-3xl">{badge.icon}</span>
                          <div>
                            <p className="font-heading font-bold text-sm">{badge.name}</p>
                            <p className="text-xs text-muted-foreground">{badge.description}</p>
                          </div>
                          <Trophy className="w-5 h-5 text-amber-500 ml-auto shrink-0" />
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Level & XP progress */}
              <div className="rounded-xl border bg-card p-5 space-y-4">
                <h3 className="font-heading font-semibold text-sm flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500" /> Your Parent Journey
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{level.icon}</span>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="font-heading font-semibold">{level.name}</span>
                      <span className="text-muted-foreground text-xs">{store.totalXP} XP</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${xpProgress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                    {nextLevel && (
                      <p className="text-[10px] text-muted-foreground">
                        {nextLevel.xpRequired - store.totalXP} XP to {nextLevel.icon} {nextLevel.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Streak */}
              <div className="rounded-xl border bg-card p-5">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Flame className={`w-6 h-6 ${store.currentStreak > 0 ? "text-orange-500" : "text-muted-foreground/30"}`} />
                    <span className="font-heading text-2xl font-bold">{store.currentStreak}</span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm">Week Streak</p>
                    <p className="text-xs text-muted-foreground">
                      {store.currentStreak === 0
                        ? "Check in weekly to build a streak!"
                        : store.currentStreak < 3
                          ? `${3 - store.currentStreak} more week${3 - store.currentStreak === 1 ? "" : "s"} to earn "Building Momentum" badge`
                          : `Best streak: ${store.longestStreak} weeks`}
                    </p>
                  </div>
                </div>
              </div>

              {/* All badges */}
              <div className="rounded-xl border bg-card p-5 space-y-4">
                <h3 className="font-heading font-semibold text-sm flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-primary" /> Badge Collection
                  <span className="text-xs text-muted-foreground ml-auto">
                    {store.earnedBadges.length}/{BADGES.length}
                  </span>
                </h3>

                {(["streak", "engagement", "exploration", "mastery"] as const).map(category => {
                  const categoryBadges = BADGES.filter(b => b.category === category);
                  const categoryLabel = category === "streak" ? "Consistency" : category === "engagement" ? "Engagement" : category === "exploration" ? "Exploration" : "Mastery";
                  return (
                    <div key={category} className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{categoryLabel}</p>
                      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                        {categoryBadges.map(badge => {
                          const earned = store.earnedBadges.includes(badge.id);
                          return (
                            <div
                              key={badge.id}
                              className={`rounded-lg border p-2.5 text-center transition-all ${
                                earned
                                  ? "border-amber-200 bg-amber-50"
                                  : "border-muted bg-muted/30 opacity-40"
                              }`}
                              title={earned ? `${badge.name}: ${badge.description}` : `Locked: ${badge.requirement}`}
                            >
                              <span className={`text-xl block ${earned ? "" : "grayscale"}`}>{badge.icon}</span>
                              <p className="text-[9px] font-medium mt-1 leading-tight truncate">{badge.name}</p>
                              {!earned && <Lock className="w-2.5 h-2.5 mx-auto mt-0.5 text-muted-foreground" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Journey map */}
              <div className="rounded-xl border bg-card p-5 space-y-4">
                <h3 className="font-heading font-semibold text-sm">Parent Journey Map</h3>
                <div className="space-y-0">
                  {PARENT_LEVELS.map((lvl, i) => {
                    const isReached = store.totalXP >= lvl.xpRequired;
                    const isCurrent = lvl.level === level.level;
                    return (
                      <div key={lvl.level} className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg ${
                            isReached
                              ? isCurrent
                                ? "border-primary bg-primary/10 ring-2 ring-primary/30"
                                : "border-sage-300 bg-sage-50"
                              : "border-muted bg-muted/30"
                          }`}>
                            {isReached ? lvl.icon : <Lock className="w-4 h-4 text-muted-foreground/40" />}
                          </div>
                          {i < PARENT_LEVELS.length - 1 && (
                            <div className={`w-0.5 h-6 ${isReached ? "bg-sage-300" : "bg-muted"}`} />
                          )}
                        </div>
                        <div className={`pb-6 ${isReached ? "" : "opacity-50"}`}>
                          <p className={`text-sm font-medium ${isCurrent ? "text-primary" : ""}`}>
                            {lvl.name}
                            {isCurrent && <span className="text-xs text-primary ml-1.5">(You are here)</span>}
                          </p>
                          <p className="text-[10px] text-muted-foreground">{lvl.xpRequired} XP</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent check-ins */}
              {store.entries.length > 0 && (
                <div className="rounded-xl border bg-card p-5 space-y-3">
                  <h3 className="font-heading font-semibold text-sm">Recent Check-Ins</h3>
                  <div className="space-y-2">
                    {[...store.entries].reverse().slice(0, 5).map(entry => (
                      <div key={entry.id} className="flex items-center gap-3 rounded-lg bg-muted/40 p-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium truncate">{entry.noticedHighlight}</p>
                          <p className="text-[10px] text-muted-foreground">
                            {new Date(entry.date).toLocaleDateString()} · +{entry.xpEarned} XP
                          </p>
                        </div>
                        {entry.newBadges.length > 0 && (
                          <div className="flex -space-x-1">
                            {entry.newBadges.slice(0, 3).map(bId => {
                              const b = BADGES.find(x => x.id === bId);
                              return <span key={bId} className="text-sm">{b?.icon}</span>;
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              {!canCheckIn ? (
                <div className="rounded-xl bg-sage-50 border border-sage-200 p-4 text-center space-y-2">
                  <p className="text-sm text-sage-700 font-medium">You&apos;ve already checked in this week!</p>
                  <p className="text-xs text-sage-600">Come back next week to keep your streak going.</p>
                  <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-1">
                    Back to Dashboard <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ) : (
                <Link
                  href="/activities"
                  className="flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-4 hover:bg-primary/10 transition-colors group"
                >
                  <div>
                    <h3 className="font-heading font-semibold text-sm">Need activity ideas?</h3>
                    <p className="text-xs text-muted-foreground">Browse quick activities to try this week.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <p className="text-xs text-muted-foreground text-center italic">
        Check-ins are private and stored on your device. They help you build awareness — not replace professional guidance.
      </p>
    </div>
  );
}
