"use client";

import { useState, useMemo } from "react";
import { Library, ExternalLink, Play, Star } from "lucide-react";
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
  "general",
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
    <div className="max-w-3xl space-y-6">
      <FadeIn>
        <PageHeader
          icon={Library}
          title="SLP Resource Library"
          subtitle="Curated by a licensed SLP — creators, communities, and content we trust."
        />
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
        <div className="rounded-xl bg-sage-50 border border-sage-200 p-4 text-sm leading-relaxed text-sage-800">
          <strong>Why this list?</strong> Social media is full of speech-language
          advice — some great, some misleading. Every resource here has been
          reviewed by a licensed SLP for accuracy, helpfulness, and alignment
          with current evidence. These creators and communities supplement (never
          replace) professional therapy.
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
              <div className="rounded-xl border bg-card p-5 space-y-3 hover:shadow-warm-sm hover:border-primary/30 transition-all h-full flex flex-col">
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
                      Editor's Pick
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
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                  {resource.description}
                </p>

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
            </StaggerItem>
          ))}
        </StaggerChildren>
      )}
    </div>
  );
}
