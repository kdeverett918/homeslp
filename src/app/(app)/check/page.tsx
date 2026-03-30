"use client";

import { useState, useMemo } from "react";
import { Search, CheckCircle2, AlertTriangle, Heart, Lightbulb, HelpCircle, ClipboardCheck, RotateCcw, ArrowRight } from "lucide-react";
import { milestones } from "@/data/milestones";
import { screenerQuestions } from "@/data/screener/pediatric";
import { useChildProfile } from "@/lib/stores/child-profile";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import Link from "next/link";

type Mode = "quick" | "screener";

export default function CheckPage() {
  const { childAgeMonths: savedAge } = useChildProfile();
  const [mode, setMode] = useState<Mode>("quick");
  const [ageMonths, setAgeMonths] = useState<number | null>(savedAge ?? null);

  // ── Screener state ──
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const milestone = ageMonths !== null
    ? milestones.find(m => ageMonths >= m.ageMonthsStart && ageMonths <= m.ageMonthsEnd)
    : null;

  const filteredQuestions = useMemo(() => {
    if (ageMonths === null) return [];
    return screenerQuestions.filter(
      (q) => ageMonths >= q.ageRangeStart && ageMonths <= q.ageRangeEnd
    );
  }, [ageMonths]);

  const allAnswered = filteredQuestions.length > 0 && filteredQuestions.every((q) => q.id in answers);

  const results = useMemo(() => {
    if (!allAnswered) return null;
    const totalWeight = filteredQuestions.reduce((sum, q) => sum + q.weight, 0);

    // scr-26 is "Has your child LOST any words" — "Yes" is bad, so invert scoring
    const earnedWeight = filteredQuestions.reduce((sum, q) => {
      const answered = answers[q.id];
      if (q.id === "scr-26") {
        // For this question, answering "No" (hasn't lost words) is the good answer
        return sum + (answered ? 0 : q.weight);
      }
      return sum + (answered ? q.weight : 0);
    }, 0);

    const percent = totalWeight > 0 ? Math.round((earnedWeight / totalWeight) * 100) : 0;

    const redFlags = filteredQuestions.filter((q) => {
      if (!q.redFlagIfNo) return false;
      if (q.id === "scr-26") return answers[q.id]; // "Yes lost words" is the red flag
      return !answers[q.id]; // answered No
    });

    const categories = ["speech", "language", "social", "feeding"] as const;
    const breakdown = categories.map((cat) => {
      const catQs = filteredQuestions.filter((q) => q.category === cat);
      if (catQs.length === 0) return null;
      const catTotal = catQs.reduce((s, q) => s + q.weight, 0);
      const catEarned = catQs.reduce((s, q) => {
        const ans = answers[q.id];
        if (q.id === "scr-26") return s + (ans ? 0 : q.weight);
        return s + (ans ? q.weight : 0);
      }, 0);
      return {
        category: cat,
        label: cat === "speech" ? "Speech & Sounds" : cat === "language" ? "Language" : cat === "social" ? "Social Communication" : "Feeding",
        percent: Math.round((catEarned / catTotal) * 100),
        total: catQs.length,
      };
    }).filter(Boolean) as { category: string; label: string; percent: number; total: number }[];

    let level: "low" | "some" | "concern";
    if (percent >= 80) level = "low";
    else if (percent >= 50) level = "some";
    else level = "concern";

    return { percent, redFlags, breakdown, level, earnedWeight, totalWeight };
  }, [allAnswered, filteredQuestions, answers]);

  function handleScreenerAnswer(id: string, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function resetScreener() {
    setAnswers({});
    setShowResults(false);
  }

  return (
    <div className="max-w-3xl space-y-6">
      <FadeIn>
        <div className="flex items-center gap-3">
          <Search className="w-7 h-7 text-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">Is My Child On Track?</h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">Select your child&apos;s age to see what&apos;s typical and what to watch for.</p>
      </FadeIn>

      {/* Mode toggle */}
      <FadeIn delay={0.05}>
        <div className="flex gap-2">
          <button
            onClick={() => setMode("quick")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
              mode === "quick"
                ? "bg-primary text-primary-foreground"
                : "border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            <Search className="w-4 h-4" />
            Quick Check
          </button>
          <button
            onClick={() => setMode("screener")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
              mode === "screener"
                ? "bg-primary text-primary-foreground"
                : "border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            <ClipboardCheck className="w-4 h-4" />
            Screener
          </button>
        </div>
      </FadeIn>

      {/* Age selector (shared) */}
      <FadeIn delay={0.1}>
        <div className="rounded-xl border bg-card p-5 space-y-4">
          <label className="text-sm font-medium">How old is your child?</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={0}
              max={60}
              value={ageMonths ?? 18}
              onChange={(e) => {
                setAgeMonths(Number(e.target.value));
                // Reset screener answers when age changes
                if (mode === "screener") {
                  setAnswers({});
                  setShowResults(false);
                }
              }}
              className="flex-1 accent-primary"
            />
            <div className="text-center min-w-[80px]">
              <span className="font-heading text-2xl font-bold text-primary">{ageMonths ?? 18}</span>
              <span className="text-sm text-muted-foreground block">months</span>
            </div>
          </div>
          {ageMonths !== null && ageMonths >= 24 && (
            <p className="text-xs text-muted-foreground">That&apos;s {Math.floor(ageMonths / 12)} year{Math.floor(ageMonths / 12) > 1 ? "s" : ""} and {ageMonths % 12} month{ageMonths % 12 !== 1 ? "s" : ""} old</p>
          )}
        </div>
      </FadeIn>

      {/* ═══ SCREENER MODE ═══ */}
      {mode === "screener" && (
        <div className="space-y-4">
          {filteredQuestions.length === 0 && ageMonths !== null && (
            <FadeIn>
              <div className="rounded-xl border bg-card p-5 text-center text-muted-foreground text-sm">
                No screener questions are available for this exact age. Try adjusting the slider.
              </div>
            </FadeIn>
          )}

          {filteredQuestions.length > 0 && !showResults && (
            <>
              <FadeIn delay={0.15}>
                <p className="text-sm text-muted-foreground">
                  Answer each question about your child. There are {filteredQuestions.length} questions for this age range.
                </p>
              </FadeIn>

              <StaggerChildren className="space-y-3">
                {filteredQuestions.map((q, idx) => (
                  <StaggerItem key={q.id}>
                    <div className="rounded-xl border bg-card p-4 space-y-3">
                      <p className="text-sm font-medium">
                        <span className="text-muted-foreground mr-2">{idx + 1}.</span>
                        {q.text}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleScreenerAnswer(q.id, true)}
                          className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${
                            answers[q.id] === true
                              ? "bg-sage-500 text-white"
                              : "border bg-card hover:border-sage-300 hover:bg-sage-50"
                          }`}
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => handleScreenerAnswer(q.id, false)}
                          className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${
                            answers[q.id] === false
                              ? "bg-rose-500 text-white"
                              : "border bg-card hover:border-rose-300 hover:bg-rose-50"
                          }`}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              {allAnswered && (
                <FadeIn>
                  <button
                    onClick={() => setShowResults(true)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    See Results <ArrowRight className="w-4 h-4" />
                  </button>
                </FadeIn>
              )}
            </>
          )}

          {/* ── Screener results ── */}
          {showResults && results && (
            <div className="space-y-4">
              {/* Overall score */}
              <FadeIn>
                <div className={`rounded-xl border p-6 space-y-3 ${
                  results.level === "low"
                    ? "bg-sage-50 border-sage-200"
                    : results.level === "some"
                      ? "bg-amber-50 border-amber-200"
                      : "bg-rose-50 border-rose-200"
                }`}>
                  <div className="flex items-center gap-3">
                    {results.level === "low" && <CheckCircle2 className="w-6 h-6 text-sage-600" />}
                    {results.level === "some" && <AlertTriangle className="w-6 h-6 text-amber-600" />}
                    {results.level === "concern" && <AlertTriangle className="w-6 h-6 text-rose-600" />}
                    <h2 className="font-heading text-lg font-bold">
                      {results.level === "low" && "Low Concern"}
                      {results.level === "some" && "Some Areas to Watch"}
                      {results.level === "concern" && "Consider Professional Evaluation"}
                    </h2>
                  </div>
                  <p className="text-sm">
                    Score: <span className="font-bold">{results.percent}%</span> ({results.earnedWeight}/{results.totalWeight} points)
                  </p>
                  <div className="h-3 bg-white/60 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        results.level === "low"
                          ? "bg-sage-500"
                          : results.level === "some"
                            ? "bg-amber-500"
                            : "bg-rose-500"
                      }`}
                      style={{ width: `${results.percent}%` }}
                    />
                  </div>
                </div>
              </FadeIn>

              {/* Category breakdown */}
              <FadeIn delay={0.1}>
                <div className="rounded-xl border bg-card p-5 space-y-3">
                  <h3 className="font-heading font-semibold text-sm">Category Breakdown</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {results.breakdown.map((cat) => (
                      <div key={cat.category} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium">{cat.label}</span>
                          <span className="text-muted-foreground">{cat.percent}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              cat.percent >= 80 ? "bg-sage-500" : cat.percent >= 50 ? "bg-amber-500" : "bg-rose-500"
                            }`}
                            style={{ width: `${cat.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Red flags */}
              {results.redFlags.length > 0 && (
                <FadeIn delay={0.15}>
                  <div className="rounded-xl border border-rose-200 bg-rose-50 p-5 space-y-3">
                    <h3 className="font-heading font-semibold text-sm flex items-center gap-2 text-rose-800">
                      <AlertTriangle className="w-4 h-4" /> Items to Discuss with Your Pediatrician
                    </h3>
                    <ul className="space-y-1.5">
                      {results.redFlags.map((q) => (
                        <li key={q.id} className="flex items-start gap-2 text-xs text-rose-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                          {q.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              )}

              {/* Doctor prep CTA */}
              <FadeIn delay={0.2}>
                <Link
                  href="/doctor-prep"
                  className="flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-5 hover:bg-primary/10 transition-colors group"
                >
                  <div className="space-y-1">
                    <h3 className="font-heading font-semibold text-sm flex items-center gap-2">
                      <Heart className="w-4 h-4 text-primary" /> Want to discuss these results?
                    </h3>
                    <p className="text-xs text-muted-foreground">Use our Doctor Prep tool to organize your concerns before your next visit.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>

              {/* Reassurance */}
              <FadeIn delay={0.25}>
                <div className="rounded-xl bg-gradient-to-br from-rose-50 to-sage-50 border border-rose-200/30 p-5">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">
                      This screener is not a diagnosis. It helps identify areas that may benefit from professional evaluation. Every child develops at their own pace, and many &quot;late bloomers&quot; catch up with time and support.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Action buttons */}
              <FadeIn delay={0.3}>
                <div className="flex gap-3">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 rounded-xl border bg-card px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                  >
                    <ClipboardCheck className="w-4 h-4" /> Print Results
                  </button>
                  <button
                    onClick={resetScreener}
                    className="inline-flex items-center gap-2 rounded-xl border bg-card px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" /> Start Over
                  </button>
                </div>
              </FadeIn>
            </div>
          )}
        </div>
      )}

      {/* ═══ QUICK CHECK MODE (existing) ═══ */}
      {mode === "quick" && milestone && (
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
                <p className="text-xs text-amber-700 italic">Having one or two of these doesn&apos;t automatically mean there&apos;s a problem — but it&apos;s always better to ask than to wait.</p>
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
                      <span className="text-primary shrink-0">&quot;</span>
                      {worry}
                      <span className="text-primary shrink-0">&quot;</span>
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
