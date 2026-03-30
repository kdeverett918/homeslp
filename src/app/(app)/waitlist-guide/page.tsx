"use client";

import { useState } from "react";
import {
  Clock,
  Heart,
  Shield,
  AlertTriangle,
  Printer,
  Lightbulb,
  Megaphone,
  Copy,
  Check,
} from "lucide-react";
import { waitlistWeeks, urgencySigns } from "@/data/waitlist-guide";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

const CONTEXT_LABELS: Record<string, string> = {
  mealtime: "Mealtime",
  play: "Play",
  bath: "Bath",
  bedtime: "Bedtime",
  anytime: "Anytime",
};

export default function WaitlistGuidePage() {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const week = waitlistWeeks[selectedWeek];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div className="max-w-3xl space-y-8">
      {/* Header */}
      <FadeIn>
        <div className="flex items-center gap-3">
          <Clock className="w-7 h-7 text-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">
            Waitlist Survival Guide
          </h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">
          You&apos;re on a waitlist &mdash; here&apos;s exactly what to do while
          you wait.
        </p>
      </FadeIn>

      {/* Reassurance banner */}
      <FadeIn delay={0.05}>
        <div className="rounded-2xl bg-gradient-to-r from-rose-50 to-sage-50 border border-rose-200/50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-rose-500 mt-0.5 shrink-0 fill-rose-500" />
            <div className="space-y-1.5">
              <p className="font-heading font-semibold text-sm text-rose-900">
                You are your child&apos;s best support
              </p>
              <p className="text-sm text-rose-800/80 leading-relaxed">
                Waiting for a speech evaluation is stressful, but you don&apos;t
                have to wait helplessly. Research shows that parent-led language
                stimulation during the waitlist period can significantly improve
                outcomes. This 8-week guide gives you the same strategies SLPs
                use &mdash; adapted for home use, no training required.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Week selector pills */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-2">
          {waitlistWeeks.map((w, i) => (
            <button
              key={w.weekNumber}
              onClick={() => setSelectedWeek(i)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedWeek === i
                  ? "bg-primary text-primary-foreground shadow-warm-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Week {w.weekNumber}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Selected week content */}
      <FadeIn key={week.weekNumber}>
        {/* Focus theme card */}
        <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 p-6 space-y-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Week {week.weekNumber} Focus
            </span>
          </div>
          <h2 className="font-heading text-xl font-bold">{week.title}</h2>
          <p className="text-sm font-medium text-primary">{week.focus}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {week.description}
          </p>
        </div>
      </FadeIn>

      {/* Activity cards */}
      <StaggerChildren className="space-y-4">
        {week.activities.map((activity, i) => (
          <StaggerItem key={i}>
            <div className="rounded-xl border bg-card p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-semibold text-base">
                  {activity.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-medium capitalize rounded-full bg-primary/10 text-primary px-3 py-1">
                    {CONTEXT_LABELS[activity.context] || activity.context}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activity.estimatedMinutes} min
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed">{activity.description}</p>
              <div className="space-y-2">
                <p className="text-sm font-medium">How to do it:</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {activity.howTo}
                </p>
              </div>
              <div className="rounded-xl bg-background/80 border border-border/50 p-4 text-sm italic text-muted-foreground">
                &ldquo;{activity.example}&rdquo;
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Advocacy tip */}
      <FadeIn>
        <div className="rounded-xl bg-sage-50 border border-sage-200 p-5 space-y-2">
          <div className="flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-sage-700" />
            <p className="font-heading font-semibold text-sm text-sage-800">
              Advocacy Tip for This Week
            </p>
          </div>
          <p className="text-sm leading-relaxed text-sage-800">
            {week.advocacyTip}
          </p>
        </div>
      </FadeIn>

      {/* Parent affirmation */}
      <FadeIn>
        <div className="rounded-xl bg-rose-50 border border-rose-200 p-5 space-y-2">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <p className="font-heading font-semibold text-sm text-rose-800">
              This Week&apos;s Affirmation
            </p>
          </div>
          <p className="text-sm leading-relaxed text-rose-800 italic">
            {week.parentAffirmation}
          </p>
        </div>
      </FadeIn>

      {/* Urgency signs section */}
      <FadeIn>
        <div className="rounded-2xl bg-amber-50 border-2 border-amber-300 p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <h2 className="font-heading text-lg font-bold text-amber-900">
              Signs You Should Not Wait
            </h2>
          </div>
          <p className="text-sm text-amber-800">
            While most children on waitlists are safe to practice at home, some
            signs indicate a need for urgent evaluation. If you see any of
            these, call your pediatrician and insist on an expedited referral.
          </p>

          <div className="space-y-4">
            {urgencySigns.map((sign, i) => (
              <div
                key={i}
                className="rounded-lg bg-white/70 border border-amber-200 p-4 space-y-3"
              >
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    <p className="font-medium text-sm text-amber-900">
                      {sign.sign}
                    </p>
                    <p className="text-xs text-amber-700">{sign.whyUrgent}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-lg bg-amber-100/70 border border-amber-200 p-3 pr-10 text-sm text-amber-900">
                    <p className="text-xs font-medium text-amber-700 mb-1">
                      What to say:
                    </p>
                    <p className="text-sm leading-relaxed">
                      &ldquo;{sign.whatToSay}&rdquo;
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(sign.whatToSay, i)}
                    className="absolute top-3 right-3 p-1.5 rounded-md hover:bg-amber-200/50 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copiedIndex === i ? (
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-amber-600" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Print button */}
      <FadeIn>
        <div className="flex justify-center pt-2">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-warm-sm hover:bg-primary/90 transition-colors"
          >
            <Printer className="w-4 h-4" /> Print This Guide
          </button>
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
