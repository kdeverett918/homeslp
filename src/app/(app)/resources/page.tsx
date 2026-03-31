"use client";

import { useState, useMemo } from "react";
import {
  ExternalLink,
  Library,
  Microscope,
  Play,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { FilterPills } from "@/components/ui/filter-pills";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import {
  curatedResources,
  type ResourcePlatform,
  type ResourceTopic,
} from "@/data/resources";

const PLATFORMS = [
  "all",
  "youtube",
  "instagram",
  "tiktok",
  "facebook",
  "podcast",
] as const;

const TOPICS = [
  "all",
  "late-talkers",
  "articulation",
  "apraxia",
  "feeding",
  "bilingual",
  "autism",
  "stuttering",
  "general",
  "toddler-activities",
  "parent-support",
] as const;

type PlatformFilter = (typeof PLATFORMS)[number];
type TopicFilter = (typeof TOPICS)[number];

function formatLabel(value: string): string {
  if (value === "all") return "All";
  return value
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const platformColors: Record<ResourcePlatform, string> = {
  youtube: "bg-rose-100 text-rose-700",
  instagram: "bg-purple-100 text-purple-700",
  tiktok: "bg-slate-200 text-slate-800",
  facebook: "bg-blue-100 text-blue-700",
  podcast: "bg-sage-100 text-sage-700",
};

const platformLabels: Record<ResourcePlatform, string> = {
  youtube: "YouTube",
  instagram: "Instagram",
  tiktok: "TikTok",
  facebook: "Facebook Group",
  podcast: "Podcast",
};

const platformSignals: Record<
  ResourcePlatform,
  { label: string; note: string }
> = {
  youtube: {
    label: "Best for guided demonstrations",
    note: "Useful for seeing technique modeled. Still pair what you watch with your child’s actual developmental stage.",
  },
  instagram: {
    label: "Best for quick clinician tips",
    note: "Helpful for short reminders and parent education, but not a substitute for individualized clinical advice.",
  },
  tiktok: {
    label: "Best for quick idea capture",
    note: "Use for simple prompts and myth-busting, then verify anything high-stakes with a licensed professional.",
  },
  facebook: {
    label: "Best for community support",
    note: "Strong for emotional support and shared experience. Care decisions should still come from your child’s care team.",
  },
  podcast: {
    label: "Best for deeper context",
    note: "Great for parents who want more nuance, especially on milestones, language development, and advocacy.",
  },
};

export default function ResourcesPage() {
  const [platform, setPlatform] = useState<PlatformFilter>("all");
  const [topic, setTopic] = useState<TopicFilter>("all");

  const filtered = useMemo(() => {
    return curatedResources.filter((r) => {
      if (platform !== "all" && r.platform !== platform) return false;
      if (topic !== "all" && !r.topics.includes(topic as ResourceTopic))
        return false;
      return true;
    });
  }, [platform, topic]);

  return (
    <div className="max-w-5xl space-y-6">
      <FadeIn>
        <PageHeader
          icon={Library}
          title="Trusted Resource Library"
          subtitle="Clinician-curated creators, communities, and educational resources that can support parents between visits."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="guide-surface p-5">
          <div className="relative z-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                How this library is reviewed
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                Parents often need one safe place to start. We review resources for clinical
                accuracy, usefulness, and whether the content stays within appropriate educational
                boundaries.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="soft-panel p-4">
                <Microscope className="h-5 w-5 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Evidence-aware</p>
                <p className="mt-1 text-xs leading-6 text-muted-foreground">
                  We prefer resources that align with current pediatric and SLP guidance.
                </p>
              </div>
              <div className="soft-panel p-4">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Clearly framed</p>
                <p className="mt-1 text-xs leading-6 text-muted-foreground">
                  We note when a resource is best used for ideas, education, or community support.
                </p>
              </div>
              <div className="soft-panel p-4">
                <Users className="h-5 w-5 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Parent usable</p>
                <p className="mt-1 text-xs leading-6 text-muted-foreground">
                  We bias toward resources parents can actually use in real routines and decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Platform filter */}
      <FadeIn delay={0.1}>
        <FilterPills
          options={PLATFORMS}
          value={platform}
          onChange={(v) => {
            setPlatform(v);
          }}
          formatLabel={formatLabel}
        />
      </FadeIn>

      {/* Topic filter */}
      <FadeIn delay={0.15}>
        <FilterPills
          options={TOPICS}
          value={topic}
          onChange={(v) => {
            setTopic(v);
          }}
          formatLabel={formatLabel}
        />
      </FadeIn>

      {/* Educational preamble */}
      <FadeIn delay={0.2}>
        <div className="field-note p-4 text-sm leading-relaxed text-foreground">
          <strong>How to use this page:</strong> Think of this as a curated starter map. Some
          resources are strongest for demonstrations, some for longer explanations, and some for
          parent community. None of them replace direct evaluation or treatment.
        </div>
      </FadeIn>

      <p className="text-xs text-muted-foreground italic">
        The creators and communities listed here have not endorsed HomeSLP. Descriptions reflect our editorial perspective. HomeSLP has no affiliate or financial relationship with any listed resource.
      </p>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        Showing {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
        {platform !== "all" ? ` on ${formatLabel(platform)}` : ""}
        {topic !== "all" ? ` about ${formatLabel(topic)}` : ""}
      </p>

      {/* Resource cards */}
      {filtered.length === 0 ? (
        <FadeIn>
          <div className="rounded-xl border border-dashed p-8 text-center text-muted-foreground">
            No resources match your current filters. Try adjusting the platform
            or topic.
          </div>
        </FadeIn>
      ) : (
        <StaggerChildren className="grid gap-4 sm:grid-cols-2">
          {filtered.map((resource) => (
            <StaggerItem key={resource.id}>
              <div className="guide-surface h-full p-5">
                <div className="relative z-10 flex h-full flex-col space-y-3">
                {/* Header: platform badge + staff pick */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${platformColors[resource.platform]}`}
                  >
                    {resource.platform === "youtube" && (
                      <Play className="w-3 h-3" />
                    )}
                    {platformLabels[resource.platform]}
                  </span>
                  {resource.isStaffPick && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                      <Star className="w-3 h-3 fill-amber-500" />
                      Editor&apos;s Pick
                    </span>
                  )}
                </div>

                {/* Creator name + handle */}
                <div>
                  <h3 className="font-heading font-bold leading-tight">
                    {resource.name}
                  </h3>
                  {resource.handle && (
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {resource.handle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {resource.description}
                </p>

                <div className="soft-panel p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {platformSignals[resource.platform].label}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    {platformSignals[resource.platform].note}
                  </p>
                </div>

                {/* Topic tags */}
                <div className="flex flex-wrap gap-1.5">
                  {resource.topics.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {formatLabel(t)}
                    </span>
                  ))}
                </div>

                {/* Why we recommend — expandable */}
                <details className="group text-sm">
                  <summary className="cursor-pointer font-medium text-primary hover:underline list-none flex items-center gap-1">
                    <span className="transition-transform group-open:rotate-90">
                      &#9654;
                    </span>
                    Why we recommend
                  </summary>
                  <p className="mt-2 text-muted-foreground leading-relaxed pl-4">
                    {resource.whyRecommended}
                  </p>
                </details>

                {/* External link */}
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors self-start"
                >
                  Visit <ExternalLink className="w-3.5 h-3.5" />
                </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      )}
    </div>
  );
}
