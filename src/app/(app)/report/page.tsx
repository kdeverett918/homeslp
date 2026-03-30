"use client";

import { FileText, Printer, BookOpen, CheckCircle2, AlertTriangle } from "lucide-react";
import { useChildProfile } from "@/lib/stores/child-profile";
import { useWordTracker } from "@/lib/stores/word-tracker";
import { useMilestoneTracker } from "@/lib/stores/milestone-tracker";
import { milestones } from "@/data/milestones";
import { wordNorms, getNormForAge } from "@/data/word-norms";
import { PrintControls } from "@/components/ui/print-controls";
import { FadeIn } from "@/components/motion";

export default function ReportPage() {
  const { childName, childAgeMonths } = useChildProfile();
  const { words } = useWordTracker();
  const { checked } = useMilestoneTracker();

  const milestone = childAgeMonths
    ? milestones.find(m => childAgeMonths >= m.ageMonthsStart && childAgeMonths <= m.ageMonthsEnd)
    : null;

  const norm = childAgeMonths ? getNormForAge(childAgeMonths) : null;
  const wordCount = words.length;

  const totalMilestones = milestone
    ? milestone.speech.length + milestone.language.length + milestone.social.length + milestone.feeding.length
    : 0;
  const checkedCount = checked.length;

  return (
    <div className="max-w-2xl space-y-6">
      <FadeIn>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <FileText className="w-7 h-7 text-primary" />
              <h1 className="font-heading text-2xl font-bold sm:text-3xl">SLP Report</h1>
            </div>
            <p className="mt-1.5 text-muted-foreground">A printable summary to bring to your SLP or pediatrician appointment.</p>
          </div>
          <PrintControls targetId="slp-report" />
        </div>
      </FadeIn>

      <div className="rounded-2xl border bg-card p-6 space-y-6 print:border-0 print:shadow-none print:p-0" id="slp-report">
        <div className="text-center border-b pb-4">
          <h2 className="font-heading text-lg font-bold">Communication Development Summary</h2>
          <p className="text-sm text-muted-foreground">
            {childName || "Child"} — {childAgeMonths ? `${childAgeMonths} months old` : "Age not set"} — Generated {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Word count */}
        <div className="space-y-2">
          <h3 className="font-heading font-semibold text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" /> Vocabulary
          </h3>
          <div className="rounded-lg bg-muted/50 p-4">
            <p className="text-sm"><strong>Words logged:</strong> {wordCount}</p>
            {norm && childAgeMonths && (
              <p className="text-sm text-muted-foreground">
                Typical range at {childAgeMonths} months: {norm.p25}&ndash;{norm.p75} words (median: {norm.p50})
              </p>
            )}
            {wordCount > 0 && (
              <div className="mt-2">
                <p className="text-xs font-medium text-muted-foreground mb-1">Recent words added:</p>
                <p className="text-xs text-muted-foreground">{words.slice(-20).map(w => w.word).join(", ")}</p>
              </div>
            )}
          </div>
        </div>

        {/* Milestones */}
        {milestone && (
          <div className="space-y-2">
            <h3 className="font-heading font-semibold text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sage-600" /> Milestone Completion ({milestone.ageRangeLabel})
            </h3>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="text-sm"><strong>{checkedCount}</strong> milestones checked out of <strong>{totalMilestones}</strong> for this age range</p>
            </div>
          </div>
        )}

        {/* Red flags */}
        {milestone && milestone.redFlags.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-heading font-semibold text-sm flex items-center gap-2 text-amber-700">
              <AlertTriangle className="w-4 h-4" /> Red Flags to Discuss
            </h3>
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
              <ul className="space-y-1 text-sm text-amber-800">
                {milestone.redFlags.map((flag, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded border shrink-0 mt-0.5" />
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Questions */}
        <div className="space-y-2">
          <h3 className="font-heading font-semibold text-sm">Questions for Your Provider</h3>
          <ul className="space-y-1.5 text-sm">
            <li className="flex items-start gap-2"><span className="w-5 h-5 rounded border shrink-0 mt-0.5" /> Based on this data, should my child be evaluated by an SLP?</li>
            <li className="flex items-start gap-2"><span className="w-5 h-5 rounded border shrink-0 mt-0.5" /> Should we schedule a hearing test?</li>
            <li className="flex items-start gap-2"><span className="w-5 h-5 rounded border shrink-0 mt-0.5" /> Can you refer us to Early Intervention or a speech therapist?</li>
            <li className="flex items-start gap-2"><span className="w-5 h-5 rounded border shrink-0 mt-0.5" /> What should I focus on at home while we wait?</li>
          </ul>
        </div>

        <p className="text-xs text-muted-foreground italic text-center border-t pt-4">
          Generated by HomeSLP (homeslp.onrender.com) — Educational resource created by a licensed SLP. This is not a diagnostic assessment.
        </p>
      </div>
    </div>
  );
}
