"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Baby,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Lightbulb,
  HelpCircle,
  MessageCircle,
  Volume2,
  BookOpen,
  Users,
  UtensilsCrossed,
  ChevronRight,
  Search,
} from "lucide-react";
import Link from "next/link";
import { milestones } from "@/data/milestones";
import { useMilestoneTracker } from "@/lib/stores/milestone-tracker";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

const SECTION_CONFIG = [
  {
    key: "speech" as const,
    label: "Speech & Sounds",
    icon: Volume2,
    color: "bg-rose-100 text-rose-700",
    iconColor: "text-rose-600",
  },
  {
    key: "language" as const,
    label: "Language & Understanding",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700",
    iconColor: "text-blue-600",
  },
  {
    key: "social" as const,
    label: "Social Communication",
    icon: Users,
    color: "bg-purple-100 text-purple-700",
    iconColor: "text-purple-600",
  },
  {
    key: "feeding" as const,
    label: "Feeding Skills",
    icon: UtensilsCrossed,
    color: "bg-sage-100 text-sage-700",
    iconColor: "text-sage-600",
  },
];

export default function MilestonesPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = milestones[selectedIndex];
  const { toggle, isChecked } = useMilestoneTracker();

  return (
    <div className="max-w-4xl space-y-6">
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
          <Baby className="w-7 h-7 text-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">
            Developmental Milestones
          </h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">
          Evidence-based milestones from birth to age 5. See what to expect,
          when to act, and what you can do right now.
        </p>
      </FadeIn>

      {/* Age Range Selector */}
      <FadeIn delay={0.1}>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none">
          {milestones.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setSelectedIndex(i)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                selectedIndex === i
                  ? "bg-primary text-primary-foreground shadow-warm-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {m.ageRangeLabel}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Selected Milestone Content */}
      <FadeIn key={selected.id} delay={0.05}>
        <div className="space-y-5">
          {/* Milestone Sections: Speech, Language, Social, Feeding */}
          {SECTION_CONFIG.map((section) => {
            const items = selected[section.key];
            return (
              <details key={section.key} className="group" open>
                <summary className="flex cursor-pointer items-center gap-3 rounded-xl border bg-card p-4 transition-colors hover:border-primary/30">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${section.color}`}
                  >
                    <section.icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-sm font-semibold sm:text-base">
                      {section.label}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {items.length} milestones
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                </summary>

                <div className="mt-2 space-y-2 pl-2">
                  <StaggerChildren>
                    {items.map((item, idx) => {
                      const milestoneId = `${selected.id}-${section.key}-${idx}`;
                      const checked = isChecked(milestoneId);
                      return (
                        <StaggerItem key={idx}>
                          <div
                            className={`rounded-lg border p-4 transition-colors cursor-pointer ${checked ? "bg-sage-50 border-sage-200" : "bg-card/50"}`}
                            onClick={() => toggle(milestoneId)}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`mt-0.5 h-5 w-5 shrink-0 rounded-md border-2 flex items-center justify-center transition-colors ${
                                  checked
                                    ? "bg-sage-500 border-sage-500 text-white"
                                    : "border-muted-foreground/30"
                                }`}
                              >
                                {checked && (
                                  <CheckCircle2 className="h-3.5 w-3.5" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0 space-y-1.5">
                                <h3 className="font-heading text-sm font-semibold">
                                  {item.skill}
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                  {item.description}
                                </p>
                                {item.example && (
                                  <div className="rounded-md bg-muted/50 px-3 py-2">
                                    <p className="text-xs text-muted-foreground italic">
                                      <span className="not-italic font-medium text-foreground/70">
                                        Example:{" "}
                                      </span>
                                      {item.example}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </StaggerItem>
                      );
                    })}
                  </StaggerChildren>
                </div>
              </details>
            );
          })}

          {/* Red Flags */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 space-y-3 dark:border-amber-900/50 dark:bg-amber-950/30">
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-500" />
              <h2 className="font-heading text-sm font-semibold text-amber-800 dark:text-amber-400 sm:text-base">
                When to Talk to Your Pediatrician
              </h2>
            </div>
            <p className="text-xs text-amber-700 dark:text-amber-400/80">
              These are signs that it may be worth requesting a speech-language
              evaluation. Having one or two doesn&apos;t automatically mean
              there&apos;s a problem, but it&apos;s always better to ask than to
              wait and wonder.
            </p>
            <ul className="space-y-2">
              {selected.redFlags.map((flag, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                    {flag}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Can Do */}
          <div className="rounded-xl border border-sage-200 bg-sage-50 p-5 space-y-3 dark:border-sage-900/50 dark:bg-sage-950/30">
            <div className="flex items-center gap-2.5">
              <Lightbulb className="h-5 w-5 text-sage-600 dark:text-sage-400" />
              <h2 className="font-heading text-sm font-semibold text-sage-800 dark:text-sage-300 sm:text-base">
                What You Can Do Right Now
              </h2>
            </div>
            <div className="space-y-3">
              {selected.whatYouCanDo.map((tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg bg-white/60 dark:bg-sage-900/20 p-3"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-200 dark:bg-sage-800 text-[10px] font-bold text-sage-700 dark:text-sage-300">
                    {i + 1}
                  </span>
                  <p className="text-xs text-sage-800 dark:text-sage-300 leading-relaxed">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Worries */}
          <div className="rounded-xl border bg-card p-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
              <h2 className="font-heading text-sm font-semibold sm:text-base">
                Things Parents Worry About at This Age
              </h2>
            </div>
            <div className="space-y-2">
              {selected.commonWorries.map((worry, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 rounded-lg bg-muted/40 p-3"
                >
                  <MessageCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    &ldquo;{worry}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Parent Reassurance */}
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-5 dark:border-rose-900/50 dark:bg-rose-950/30">
            <div className="flex items-start gap-3">
              <Heart className="mt-0.5 h-5 w-5 shrink-0 text-rose-500 fill-rose-500 dark:text-rose-400 dark:fill-rose-400" />
              <div className="space-y-2">
                <h2 className="font-heading text-sm font-semibold text-rose-800 dark:text-rose-300">
                  A Note from an SLP
                </h2>
                <p className="text-xs text-rose-700 dark:text-rose-300/80 leading-relaxed">
                  {selected.parentReassurance}
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Bottom Disclaimer */}
      <FadeIn delay={0.2}>
        <div className="rounded-lg bg-muted/50 p-4 text-xs text-muted-foreground space-y-2">
          <p>
            <strong>Every child develops at their own pace.</strong> These
            milestones are guidelines, not deadlines. If you have concerns, talk
            to your pediatrician or request a speech-language evaluation. You do
            not need a referral in most states.
          </p>
          <p>
            Milestones aligned with{" "}
            <strong>
              ASHA developmental norms, CDC &ldquo;Learn the Signs. Act
              Early&rdquo; (2022 update), AAP Bright Futures guidelines,
            </strong>{" "}
            and the <strong>Rossetti Infant-Toddler Language Scale</strong>.
            Premature babies should use their adjusted age for milestone
            comparisons until age 2.
          </p>
        </div>
      </FadeIn>

      <div className="mt-8 flex flex-wrap gap-3 border-t pt-6">
        <Link href="/check" className="card-lift inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card px-4 py-3 text-sm font-medium shadow-warm-sm hover:text-primary">
          <Search className="w-4 h-4" /> Quick developmental check
        </Link>
      </div>
    </div>
  );
}
