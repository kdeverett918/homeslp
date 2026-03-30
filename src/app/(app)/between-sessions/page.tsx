"use client";

import { useState } from "react";
import {
  RefreshCw,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Lightbulb,
} from "lucide-react";
import { carryoverGoals, sessionTips } from "@/data/between-sessions";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

const FREQUENCY_COLORS: Record<string, string> = {
  daily: "bg-green-100 text-green-800",
  "3x/week": "bg-blue-100 text-blue-800",
  "2x/week": "bg-blue-100 text-blue-800",
  always: "bg-green-100 text-green-800",
};

function getFrequencyColor(frequency: string): string {
  for (const [key, value] of Object.entries(FREQUENCY_COLORS)) {
    if (frequency.toLowerCase().includes(key)) return value;
  }
  return "bg-muted text-muted-foreground";
}

export default function BetweenSessionsPage() {
  const [selectedGoal, setSelectedGoal] = useState<string>("all");
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  const filteredGoals =
    selectedGoal === "all"
      ? carryoverGoals
      : carryoverGoals.filter((g) => g.id === selectedGoal);

  return (
    <div className="max-w-3xl space-y-8">
      {/* Header */}
      <FadeIn>
        <div className="flex items-center gap-3">
          <RefreshCw className="w-7 h-7 text-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">
            Between Sessions Guide
          </h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">
          What to practice at home and how to communicate with your SLP.
        </p>
      </FadeIn>

      {/* Goal area filter pills */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedGoal("all")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedGoal === "all"
                ? "bg-primary text-primary-foreground shadow-warm-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All
          </button>
          {carryoverGoals.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGoal(g.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedGoal === g.id
                  ? "bg-primary text-primary-foreground shadow-warm-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {g.goalArea}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Goal content */}
      <StaggerChildren className="space-y-8">
        {filteredGoals.map((goal) => (
          <StaggerItem key={goal.id}>
            <div className="space-y-5">
              {/* Goal header */}
              <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 p-6 space-y-3">
                <h2 className="font-heading text-xl font-bold">
                  {goal.goalArea}
                </h2>
                <p className="text-sm leading-relaxed">{goal.description}</p>
                <div className="rounded-xl bg-background/80 border border-border/50 p-4 space-y-1.5">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                    Why This Matters
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {goal.whyItMatters}
                  </p>
                </div>
              </div>

              {/* Home activity cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {goal.homeActivities.map((activity, j) => (
                  <div
                    key={j}
                    className="rounded-xl border bg-card p-5 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading font-semibold text-sm">
                        {activity.title}
                      </h3>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${getFrequencyColor(activity.frequency)}`}
                      >
                        {activity.frequency}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {activity.howTo}
                    </p>
                    <div className="rounded-lg bg-background/80 border border-border/50 p-3 text-sm italic text-muted-foreground">
                      &ldquo;{activity.example}&rdquo;
                    </div>
                  </div>
                ))}
              </div>

              {/* SLP communication tip */}
              <div className="rounded-xl bg-sage-50 border border-sage-200 p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-sage-700" />
                  <p className="font-heading font-semibold text-sm text-sage-800">
                    What to Tell Your SLP
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-sage-800">
                  {goal.slpCommunicationTip}
                </p>
              </div>

              {/* Tracking prompts */}
              <div className="rounded-xl bg-muted/50 border border-border p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <p className="font-heading font-semibold text-sm">
                    Weekly Check-In Questions
                  </p>
                </div>
                <ul className="space-y-2">
                  {goal.trackingPrompts.map((prompt, k) => (
                    <li key={k} className="flex items-start gap-2.5 text-sm">
                      <span className="w-5 h-5 rounded border-2 border-muted-foreground/30 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{prompt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Communicating with Your SLP section */}
      <FadeIn>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-xl font-bold">
              Communicating with Your SLP
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Not sure what to say at your next session? These common scenarios
            and scripts will help you get the most out of therapy.
          </p>

          <div className="space-y-3">
            {sessionTips.map((tip, i) => (
              <div key={i} className="rounded-xl border bg-card overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedTip(expandedTip === i ? null : i)
                  }
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="font-medium text-sm">
                      &ldquo;{tip.scenario}&rdquo;
                    </span>
                  </div>
                  {expandedTip === i ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </button>
                {expandedTip === i && (
                  <div className="px-4 pb-4 space-y-3 border-t pt-3">
                    <div className="rounded-lg bg-sage-50 border border-sage-200 p-3 space-y-1.5">
                      <p className="text-xs font-semibold text-sage-700 uppercase tracking-wide">
                        What to Ask Your SLP
                      </p>
                      <p className="text-sm leading-relaxed text-sage-800">
                        {tip.whatToAsk}
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3 space-y-1.5">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Why This Helps
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {tip.whyItHelps}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <p className="text-xs text-muted-foreground italic text-center">
        Generated by HomeSLP &mdash; Educational resource, not medical advice.
        Always consult with a licensed speech-language pathologist for
        personalized guidance.
      </p>
    </div>
  );
}
