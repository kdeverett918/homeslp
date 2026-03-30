"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { FilterPills } from "@/components/ui/filter-pills";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { handouts, type HandoutCategory } from "@/data/handouts";

const filterOptions = ["All", "Education", "Home Practice", "Milestone Summaries"] as const;
type FilterOption = (typeof filterOptions)[number];

function filterToCategory(filter: FilterOption): HandoutCategory | null {
  switch (filter) {
    case "Education":
      return "education";
    case "Home Practice":
      return "home-practice";
    case "Milestone Summaries":
      return "milestone-summary";
    default:
      return null;
  }
}

const categoryBadge: Record<HandoutCategory, { label: string; className: string }> = {
  education: { label: "Education", className: "bg-blue-100 text-blue-700" },
  "home-practice": { label: "Home Practice", className: "bg-sage-100 text-sage-700" },
  "milestone-summary": { label: "Milestone Summary", className: "bg-rose-100 text-rose-700" },
};

export default function HandoutsPage() {
  const [filter, setFilter] = useState<FilterOption>("All");

  const category = filterToCategory(filter);
  const filtered = category ? handouts.filter((h) => h.category === category) : handouts;

  return (
    <div className="max-w-5xl space-y-6">
      <FadeIn>
        <PageHeader
          icon={FileText}
          title="Printable Handouts"
          subtitle="Evidence-based handouts for education and home practice. Print in color or black and white."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <FilterPills
          options={filterOptions}
          value={filter}
          onChange={setFilter}
        />
      </FadeIn>

      <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((handout) => {
          const badge = categoryBadge[handout.category];
          return (
            <StaggerItem key={handout.id}>
              <div className="flex h-full flex-col rounded-xl border bg-card p-5 shadow-warm-sm transition-all hover:shadow-warm-md">
                <div className="mb-3">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.className}`}
                  >
                    {badge.label}
                  </span>
                </div>
                <h2 className="font-heading text-base font-semibold leading-snug">
                  {handout.title}
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                  {handout.description}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{handout.targetAudience}</p>
                <div className="mt-auto pt-4">
                  <Link
                    href={`/handouts/${handout.slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    View &amp; Print
                  </Link>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </div>
  );
}
