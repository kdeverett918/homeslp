"use client";

import { useState, useMemo } from "react";
import { GraduationCap, BookOpen, Lightbulb, Scale, ChevronRight, Clock, Target } from "lucide-react";
import { homeschoolLessons, iepSections, curriculumTips, type HomeschoolAgeGroup } from "@/data/homeschool";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

const AGE_FILTERS: { label: string; value: HomeschoolAgeGroup | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Preschool (3-4)", value: "preschool" },
  { label: "Kindergarten (5-6)", value: "kindergarten" },
  { label: "Early Elementary (6-8)", value: "early-elementary" },
];

const SUBJECT_COLORS: Record<string, string> = {
  Science: "bg-sage-100 text-sage-800",
  Reading: "bg-rose-100 text-rose-800",
  Math: "bg-blue-100 text-blue-800",
  Writing: "bg-purple-100 text-purple-800",
  "Social Studies": "bg-amber-100 text-amber-800",
  Geography: "bg-teal-100 text-teal-800",
};

export default function HomeschoolPage() {
  const [ageFilter, setAgeFilter] = useState<HomeschoolAgeGroup | "all">("all");

  const filteredLessons = useMemo(() => {
    if (ageFilter === "all") return homeschoolLessons;
    return homeschoolLessons.filter((l) => l.ageGroup === ageFilter);
  }, [ageFilter]);

  return (
    <div className="max-w-3xl space-y-10">
      {/* ─── Section 1: Curriculum Integration Activities ─────────────── */}
      <FadeIn>
        <div className="flex items-center gap-3">
          <GraduationCap className="w-7 h-7 text-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">Homeschool + Speech</h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">
          Weave speech and language goals into your homeschool curriculum.
        </p>
      </FadeIn>

      {/* Age group filter pills */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-2">
          {AGE_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setAgeFilter(f.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                ageFilter === f.value
                  ? "bg-primary text-primary-foreground shadow-warm-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Lesson cards grid */}
      <StaggerChildren className="grid gap-4 sm:grid-cols-2">
        {filteredLessons.map((lesson) => (
          <StaggerItem key={lesson.id}>
            <div className="rounded-xl border bg-card p-5 space-y-3">
              {/* Subject badge + time */}
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-medium ${
                    SUBJECT_COLORS[lesson.subject] ?? "bg-muted text-muted-foreground"
                  }`}
                >
                  {lesson.subject}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {lesson.estimatedMinutes} min
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-base font-semibold leading-snug">{lesson.title}</h3>

              {/* Speech goal tag */}
              <div className="flex items-center gap-1.5 text-xs text-primary">
                <Target className="w-3.5 h-3.5" />
                <span className="font-medium">{lesson.speechGoal}</span>
              </div>

              {/* Expandable details */}
              <details className="group">
                <summary className="flex cursor-pointer items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90" />
                  View lesson details
                </summary>
                <div className="mt-3 space-y-3 text-sm">
                  <p className="leading-relaxed text-muted-foreground">{lesson.description}</p>

                  {/* Materials */}
                  <div>
                    <p className="font-medium mb-1">Materials</p>
                    <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                      {lesson.materials.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Steps */}
                  <div>
                    <p className="font-medium mb-1">Steps</p>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      {lesson.steps.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ol>
                  </div>

                  {/* Language extensions */}
                  <div className="rounded-lg bg-sage-50 border border-sage-200 p-3">
                    <p className="font-medium text-sage-800 mb-1 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      Language Extensions
                    </p>
                    <ul className="space-y-1 text-sage-700 text-xs">
                      {lesson.languageExtensions.map((ext, i) => (
                        <li key={i}>{ext}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <p className="text-xs text-muted-foreground text-center">
        {filteredLessons.length} lessons available
        {ageFilter !== "all" ? ` for ${AGE_FILTERS.find((f) => f.value === ageFilter)?.label}` : ""}
      </p>

      {/* ─── Section 2: IEP/504 Guidance ─────────────────────────────── */}
      <FadeIn>
        <div className="flex items-center gap-3 pt-4 border-t">
          <Scale className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-xl font-bold sm:text-2xl">IEP/504 Guidance for Homeschoolers</h2>
        </div>
        <p className="mt-1.5 text-muted-foreground">
          Your child has rights under federal law — even if they never set foot in a public school.
        </p>
      </FadeIn>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
        <p className="font-medium">Important</p>
        <p className="mt-0.5">This information describes general federal protections under IDEA and Section 504. Homeschooler protections vary significantly by state. This is not legal advice. For guidance specific to your situation, contact your state's Parent Training and Information Center (PTI) or a special education attorney.</p>
      </div>

      <StaggerChildren className="space-y-3">
        {iepSections.map((section) => (
          <StaggerItem key={section.id}>
            <details className="group rounded-xl border bg-card">
              <summary className="flex cursor-pointer items-center gap-2 p-5 text-sm font-semibold hover:text-primary transition-colors">
                <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90" />
                {section.title}
              </summary>
              <div className="px-5 pb-5 space-y-4 text-sm">
                <p className="leading-relaxed text-muted-foreground">{section.situation}</p>

                <div>
                  <p className="font-medium mb-2">Steps</p>
                  <ol className="list-decimal list-inside space-y-1.5 text-muted-foreground">
                    {section.steps.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-lg bg-sage-50 border border-sage-200 p-4">
                  <p className="font-medium text-sage-800 mb-2">Sample language you can use</p>
                  <pre className="whitespace-pre-wrap font-mono text-xs text-sage-700 leading-relaxed">
                    {section.sampleLanguage}
                  </pre>
                </div>
              </div>
            </details>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* ─── Section 3: Quick Tips ───────────────────────────────────── */}
      <FadeIn>
        <div className="flex items-center gap-3 pt-4 border-t">
          <Lightbulb className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-xl font-bold sm:text-2xl">Quick Tips</h2>
        </div>
        <p className="mt-1.5 text-muted-foreground">
          Small daily habits that make a big difference for speech and language development.
        </p>
      </FadeIn>

      <StaggerChildren className="space-y-3">
        {curriculumTips.map((tip, i) => (
          <StaggerItem key={i}>
            <div className="rounded-xl border bg-card p-4">
              <p className="font-semibold text-sm">{tip.title}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <p className="text-xs text-muted-foreground italic text-center pb-4">
        HomeSLP provides educational resources for parents. This content is not a substitute for
        professional speech-language evaluation or therapy.
      </p>
    </div>
  );
}
