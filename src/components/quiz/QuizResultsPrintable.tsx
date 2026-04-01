"use client";

import { Heart, CheckCircle2, AlertTriangle, Printer } from "lucide-react";
import type { QuizResultBand } from "@/types/content";

interface QuizResultsPrintableProps {
  quizTitle: string;
  score: number;
  maxScore: number;
  result: QuizResultBand;
  dateCompleted: string;
}

export function QuizResultsPrintable({
  quizTitle,
  score,
  maxScore,
  result,
  dateCompleted,
}: QuizResultsPrintableProps) {
  const handlePrint = (bw: boolean) => {
    const el = document.getElementById("quiz-results-print");
    if (bw && el) el.classList.add("print-bw");
    window.print();
    if (bw && el) el.classList.remove("print-bw");
  };

  const percentage = Math.round((score / maxScore) * 100);

  return (
    <div className="space-y-4">
      {/* Print buttons */}
      <div className="flex items-center gap-2 print:hidden">
        <button
          onClick={() => handlePrint(false)}
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
        >
          <Printer className="w-4 h-4" />
          Print (Color)
        </button>
        <button
          onClick={() => handlePrint(true)}
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
        >
          <Printer className="w-4 h-4" />
          Print (B&W)
        </button>
      </div>

      {/* Printable content */}
      <div id="quiz-results-print" className="rounded-xl border bg-card p-6 space-y-5 print:border-0 print:shadow-none print:p-0">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-primary print:text-black print:fill-black" />
            <span className="font-heading text-lg font-bold">HomeSLP</span>
          </div>
          <div className="text-right text-xs text-muted-foreground">
            <p>{quizTitle}</p>
            <p>Date: {dateCompleted}</p>
          </div>
        </div>

        {/* Score */}
        <div className="text-center space-y-2">
          <div
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ${
              result.riskLevel === "low"
                ? "bg-sage-100 text-sage-700"
                : result.riskLevel === "moderate"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-rose-100 text-rose-700"
            }`}
          >
            {result.riskLevel === "low"
              ? "Low Concern"
              : result.riskLevel === "moderate"
                ? "Moderate Concern"
                : "Higher Concern"}
          </div>
          <p className="text-sm text-muted-foreground">
            Score: {score}/{maxScore} ({percentage}%)
          </p>
        </div>

        {/* Result details */}
        <div className="space-y-2">
          <h3 className="font-heading font-semibold">{result.headline}</h3>
          <p className="text-sm text-muted-foreground">{result.description}</p>
        </div>

        {/* Recommendations */}
        <div className="space-y-2">
          <h4 className="font-heading text-sm font-semibold">Recommended Next Steps</h4>
          <ol className="space-y-2">
            {result.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0 mt-0.5" />
                <span>{rec}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Action items */}
        <div className="rounded-lg border border-dashed p-4 space-y-2">
          <h4 className="font-heading text-sm font-semibold flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            Things to discuss with your provider
          </h4>
          <div className="grid gap-1.5 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" /> Request a speech-language evaluation
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" /> Ask about Early Intervention services
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" /> Schedule a hearing screening
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" /> Discuss developmental milestones
            </label>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-muted-foreground italic border-t pt-3">
          This screening is for educational purposes only and does not constitute a medical diagnosis.
          Always consult a licensed Speech-Language Pathologist for professional evaluation.
          Generated by HomeSLP (homeslp.com).
        </p>
      </div>
    </div>
  );
}
