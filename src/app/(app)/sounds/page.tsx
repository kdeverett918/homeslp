"use client";

import { useState, useMemo } from "react";
import { Volume2, CheckCircle2, Clock, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { sounds } from "@/data/sounds";
import { useChildProfile } from "@/lib/stores/child-profile";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

export default function SoundsPage() {
  const { childAgeMonths } = useChildProfile();
  const [filterAge, setFilterAge] = useState<number>(childAgeMonths ?? 24);

  const categorized = useMemo(() => {
    return sounds.map(s => ({
      ...s,
      status: filterAge >= s.masteryMonths
        ? "mastered" as const
        : filterAge >= s.emergenceMonths
          ? "developing" as const
          : "not-yet" as const,
    })).sort((a, b) => {
      const order = { mastered: 0, developing: 1, "not-yet": 2 };
      return order[a.status] - order[b.status];
    });
  }, [filterAge]);

  const mastered = categorized.filter(s => s.status === "mastered");
  const developing = categorized.filter(s => s.status === "developing");
  const notYet = categorized.filter(s => s.status === "not-yet");

  return (
    <div className="max-w-3xl space-y-6">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Dashboard
      </Link>

      <FadeIn>
        <div className="flex items-center gap-3">
          <Volume2 className="w-7 h-7 text-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">Sound Development</h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">See which speech sounds are typical at your child&apos;s age.</p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="rounded-xl border bg-card p-5 space-y-3">
          <label className="text-sm font-medium">Child&apos;s age</label>
          <div className="flex items-center gap-4">
            <input type="range" min={6} max={84} value={filterAge} onChange={(e) => setFilterAge(Number(e.target.value))} className="flex-1 accent-primary" />
            <div className="text-center min-w-[80px]">
              <span className="font-heading text-2xl font-bold text-primary">{filterAge}</span>
              <span className="text-sm text-muted-foreground block">months</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Summary */}
      <FadeIn delay={0.15}>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl bg-sage-50 border border-sage-200 p-3">
            <p className="font-heading text-xl font-bold text-sage-700">{mastered.length}</p>
            <p className="text-[10px] text-sage-600">Expected</p>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
            <p className="font-heading text-xl font-bold text-amber-700">{developing.length}</p>
            <p className="text-[10px] text-amber-600">Developing</p>
          </div>
          <div className="rounded-xl bg-muted border p-3">
            <p className="font-heading text-xl font-bold text-muted-foreground">{notYet.length}</p>
            <p className="text-[10px] text-muted-foreground">Not yet</p>
          </div>
        </div>
      </FadeIn>

      {/* Sound cards */}
      {[
        { title: "Expected at this age", items: mastered, icon: CheckCircle2, color: "text-sage-600", bg: "bg-sage-50" },
        { title: "Still developing (normal!)", items: developing, icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
        { title: "Not expected yet", items: notYet, icon: AlertCircle, color: "text-muted-foreground", bg: "bg-muted/30" },
      ].filter(g => g.items.length > 0).map((group) => (
        <div key={group.title} className="space-y-3">
          <h2 className="font-heading text-sm font-semibold flex items-center gap-2">
            <group.icon className={`w-4 h-4 ${group.color}`} />
            {group.title}
          </h2>
          <StaggerChildren className="grid gap-2 sm:grid-cols-2">
            {group.items.map((s) => (
              <StaggerItem key={s.sound}>
                <div className={`rounded-xl border p-3 space-y-1 ${group.bg}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-lg">{s.symbol}</span>
                    <span className="text-[10px] text-muted-foreground">Mastery: ~{s.masteryMonths}mo</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{s.examples.join(", ")}</p>
                  {s.commonSubstitutions.length > 0 && (
                    <p className="text-[10px] text-muted-foreground">Kids often say: {s.commonSubstitutions.join(", ")}</p>
                  )}
                  {s.parentNote && (
                    <p className="text-[10px] text-muted-foreground/80 italic border-t border-dashed pt-1.5 mt-1.5">{s.parentNote}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      ))}

      <p className="text-xs text-muted-foreground text-center italic">
        Sound development timelines are general guidelines based on research averages (Sander 1972, Shriberg 1993). Individual variation is normal and many sounds aren&apos;t expected until age 6-7. This information does not replace evaluation by a licensed speech-language pathologist.
      </p>
    </div>
  );
}
