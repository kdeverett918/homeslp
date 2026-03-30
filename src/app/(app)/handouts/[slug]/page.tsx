"use client";

import { use } from "react";
import { FadeIn } from "@/components/motion";
import { PrintControls } from "@/components/ui/print-controls";
import { handouts } from "@/data/handouts";
import Link from "next/link";
import { ArrowLeft, FileText, Lightbulb, AlertTriangle, Info } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const calloutConfig = {
  tip: {
    icon: Lightbulb,
    bg: "bg-sage-50 border-sage-200",
    text: "text-sage-800",
    label: "Tip",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-800",
    label: "Important",
  },
  note: {
    icon: Info,
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-800",
    label: "Note",
  },
};

export default function HandoutDetailPage({ params }: Props) {
  const { slug } = use(params);
  const handout = handouts.find((h) => h.slug === slug);

  if (!handout) {
    return (
      <div className="max-w-2xl space-y-6">
        <Link
          href="/handouts"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" /> All Handouts
        </Link>
        <div className="rounded-xl border bg-card p-8 text-center">
          <FileText className="mx-auto h-12 w-12 text-muted-foreground/40" />
          <h1 className="mt-4 font-heading text-xl font-bold">Handout Not Found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The handout you are looking for does not exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      <FadeIn>
        <div className="flex items-center justify-between gap-4 print:hidden">
          <Link
            href="/handouts"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" /> All Handouts
          </Link>
          <PrintControls targetId="handout-print" />
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div
          id="handout-print"
          className="rounded-2xl border bg-card p-6 space-y-6 print:border-0 print:shadow-none print:p-0"
        >
          {/* Header */}
          <div className="text-center border-b pb-4">
            <p className="text-xs font-medium text-primary tracking-wide uppercase">
              HomeSLP
            </p>
            <h1 className="mt-1 font-heading text-xl font-bold">{handout.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{handout.description}</p>
          </div>

          {/* Sections */}
          {handout.sections.map((section, i) => (
            <div key={i} className="space-y-2">
              <h2 className="font-heading font-semibold text-sm">{section.heading}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {section.content}
              </p>
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-1.5 text-sm">
                  {section.bulletPoints.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.callout && (
                <div
                  className={`rounded-lg border p-4 ${calloutConfig[section.callout.type].bg}`}
                >
                  <div className="flex items-start gap-2">
                    {(() => {
                      const Icon = calloutConfig[section.callout.type].icon;
                      return (
                        <Icon
                          className={`mt-0.5 h-4 w-4 shrink-0 ${calloutConfig[section.callout.type].text}`}
                        />
                      );
                    })()}
                    <div>
                      <p
                        className={`text-xs font-semibold ${calloutConfig[section.callout.type].text}`}
                      >
                        {calloutConfig[section.callout.type].label}
                      </p>
                      <p
                        className={`mt-0.5 text-sm ${calloutConfig[section.callout.type].text}`}
                      >
                        {section.callout.text}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground italic text-center border-t pt-4">
            {handout.disclaimer}
          </p>
          <p className="text-xs text-muted-foreground text-center">
            HomeSLP — homeslp.onrender.com
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
