"use client";

import { useState } from "react";
import { Search, CheckCircle2, AlertTriangle, Heart, Lightbulb, HelpCircle } from "lucide-react";
import { milestones } from "@/data/milestones";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

export default function CheckPage() {
  const [ageMonths, setAgeMonths] = useState<number | null>(null);

  const milestone = ageMonths !== null
    ? milestones.find(m => ageMonths >= m.ageMonthsStart && ageMonths <= m.ageMonthsEnd)
    : null;

  return (
    <div className="max-w-3xl space-y-6">
      <FadeIn>
        <div className="flex items-center gap-3">
          <Search className="w-7 h-7 text-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">Is My Child On Track?</h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">Select your child's age to see what's typical and what to watch for.</p>
      </FadeIn>

      {/* Age selector */}
      <FadeIn delay={0.1}>
        <div className="rounded-xl border bg-card p-5 space-y-4">
          <label className="text-sm font-medium">How old is your child?</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={0}
              max={60}
              value={ageMonths ?? 18}
              onChange={(e) => setAgeMonths(Number(e.target.value))}
              className="flex-1 accent-primary"
            />
            <div className="text-center min-w-[80px]">
              <span className="font-heading text-2xl font-bold text-primary">{ageMonths ?? 18}</span>
              <span className="text-sm text-muted-foreground block">months</span>
            </div>
          </div>
          {ageMonths !== null && ageMonths >= 24 && (
            <p className="text-xs text-muted-foreground">That's {Math.floor(ageMonths / 12)} year{Math.floor(ageMonths / 12) > 1 ? "s" : ""} and {ageMonths % 12} month{ageMonths % 12 !== 1 ? "s" : ""} old</p>
          )}
        </div>
      </FadeIn>

      {milestone && (
        <div className="space-y-4">
          {/* Parent reassurance - show first! */}
          <FadeIn delay={0.15}>
            <div className="rounded-xl bg-gradient-to-br from-rose-50 to-sage-50 border border-rose-200/30 p-5">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{milestone.parentReassurance}</p>
              </div>
            </div>
          </FadeIn>

          {/* What to expect */}
          <FadeIn delay={0.2}>
            <h2 className="font-heading text-lg font-semibold">At {milestone.ageRangeLabel}, you might see:</h2>
          </FadeIn>

          <StaggerChildren className="grid gap-3 sm:grid-cols-2">
            {[
              { title: "Speech & Sounds", items: milestone.speech, icon: "\u{1F5E3}\u{FE0F}", color: "bg-rose-50 border-rose-200" },
              { title: "Understanding & Words", items: milestone.language, icon: "\u{1F4AC}", color: "bg-blue-50 border-blue-200" },
              { title: "Social Communication", items: milestone.social, icon: "\u{1F44B}", color: "bg-amber-50 border-amber-200" },
              { title: "Feeding & Eating", items: milestone.feeding, icon: "\u{1F37D}\u{FE0F}", color: "bg-sage-50 border-sage-200" },
            ].map((section) => (
              <StaggerItem key={section.title}>
                <div className={`rounded-xl border p-4 space-y-2 ${section.color}`}>
                  <h3 className="font-heading font-semibold text-sm flex items-center gap-2">
                    <span>{section.icon}</span> {section.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sage-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">{item.skill}</span>
                          {item.example && <span className="text-muted-foreground"> — {item.example}</span>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Red flags */}
          {milestone.redFlags.length > 0 && (
            <FadeIn delay={0.3}>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 space-y-3">
                <h3 className="font-heading font-semibold text-sm flex items-center gap-2 text-amber-800">
                  <AlertTriangle className="w-4 h-4" /> When to check with your pediatrician
                </h3>
                <ul className="space-y-1.5">
                  {milestone.redFlags.map((flag, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-amber-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      {flag}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-amber-700 italic">Having one or two of these doesn't automatically mean there's a problem — but it's always better to ask than to wait.</p>
              </div>
            </FadeIn>
          )}

          {/* What you can do */}
          <FadeIn delay={0.35}>
            <div className="rounded-xl border border-sage-200 bg-sage-50 p-5 space-y-3">
              <h3 className="font-heading font-semibold text-sm flex items-center gap-2 text-sage-800">
                <Lightbulb className="w-4 h-4" /> What you can do right now
              </h3>
              <ul className="space-y-2">
                {milestone.whatYouCanDo.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-sage-800">
                    <span className="font-bold text-sage-600">{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Common worries */}
          {milestone.commonWorries.length > 0 && (
            <FadeIn delay={0.4}>
              <div className="rounded-xl border bg-card p-5 space-y-3">
                <h3 className="font-heading font-semibold text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-muted-foreground" /> Things parents worry about at this age
                </h3>
                <ul className="space-y-1.5">
                  {milestone.commonWorries.map((worry, i) => (
                    <li key={i} className="text-xs text-muted-foreground italic flex items-start gap-2">
                      <span className="text-primary shrink-0">"</span>
                      {worry}
                      <span className="text-primary shrink-0">"</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}
        </div>
      )}

      <p className="text-xs text-muted-foreground text-center italic">
        Every child develops at their own pace. These are guidelines, not deadlines. Sources: ASHA, CDC 2022, AAP.
      </p>
    </div>
  );
}
