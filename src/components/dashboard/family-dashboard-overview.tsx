"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Library,
  Microscope,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
  Volume2,
  Waves,
} from "lucide-react";
import { ParentStartMenu } from "@/components/start-menu/parent-start-menu";
import { DailyTipCard } from "@/components/daily-tip-card";
import { ContentImage } from "@/components/media/content-image";
import { dailyTips } from "@/data/daily-tips";
import { parentDomainLinks } from "@/data/parent-domains";
import { useChildProfile } from "@/lib/stores/child-profile";
import type { ContentImageAsset } from "@/types/content";

interface BlueprintPreview {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  weekNumber: number;
  estimatedMinutes: number;
  coverImage?: ContentImageAsset;
}

interface FamilyDashboardOverviewProps {
  displayName: string | null;
  blueprints: BlueprintPreview[];
}

const domainIcons = {
  speech: Volume2,
  language: BookOpen,
  play: Brain,
  feeding: UtensilsCrossed,
  behavior: Waves,
  resources: Library,
} as const;

export function FamilyDashboardOverview({
  displayName,
  blueprints,
}: FamilyDashboardOverviewProps) {
  const { childAgeMonths } = useChildProfile();

  return (
    <div className="space-y-6">
      <ParentStartMenu mode="app" displayName={displayName} />

      <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <DailyTipCard tips={dailyTips} path="child" ageMonths={childAgeMonths} />

        <section className="guide-surface p-5">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Guided next step
                </p>
                <h2 className="font-heading text-2xl font-semibold">This week&apos;s deeper plan</h2>
              </div>
            </div>

            <p className="text-sm leading-7 text-muted-foreground">
              Open a full weekly plan when you want more structure than today&apos;s quick tip.
            </p>

            <div className="space-y-3">
              {blueprints.map((blueprint) => (
                <Link
                  key={blueprint.id}
                  href={`/blueprints/${blueprint.slug}`}
                  className="card-lift block rounded-[1.5rem] border border-border/70 bg-white/78 p-4 transition-colors hover:border-primary/25"
                >
                  {blueprint.coverImage ? (
                    <ContentImage
                      image={blueprint.coverImage}
                      aspect="card"
                      sizes="(max-width: 1280px) 100vw, 22vw"
                      containerClassName="mb-4"
                      imageClassName="object-cover"
                    />
                  ) : null}

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-heading text-xl font-semibold">{blueprint.title}</p>
                      <p className="mt-1 text-sm leading-7 text-muted-foreground">
                        {blueprint.subtitle}
                      </p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Week {blueprint.weekNumber}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    <span>{blueprint.estimatedMinutes} min</span>
                    <span>Video</span>
                    <span>Printable</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/blueprints"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                View all learning plans
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                <Microscope className="h-4 w-4 text-primary" />
                Review research standards
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="guide-surface p-6">
        <div className="relative z-10 space-y-5">
          <div className="max-w-3xl space-y-3">
            <div className="section-kicker">Whole-child focus</div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              Move through the day by domain, not by panic.
            </h2>
            <p className="text-base leading-8 text-muted-foreground">
              Jump to the area that matches today&apos;s concern, or use these as a quick daily scan
              when you want to feel more organized.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {parentDomainLinks.map((domain) => {
              const Icon = domainIcons[domain.key];

              return (
                <Link key={domain.key} href={domain.href} className="soft-panel card-lift p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-2xl font-semibold">{domain.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{domain.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="guide-surface p-5">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                <ClipboardCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Quick parent tools
                </p>
                <h2 className="font-heading text-2xl font-semibold">Parent support tools</h2>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { href: "/check-in", label: "Weekly check-in", body: "Notice what changed this week." },
                { href: "/handouts", label: "Print a handout", body: "Grab a quick reference for home or daycare." },
                { href: "/progress", label: "Track progress", body: "Keep a record of wins and patterns over time." },
                { href: "/doctor-prep", label: "Prep for a visit", body: "Bring clearer examples to appointments." },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="card-lift rounded-[1.25rem] border border-border/70 bg-white/78 p-4 transition-colors hover:border-primary/25"
                >
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="guide-surface p-5">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                <Stethoscope className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  A calm reminder
                </p>
                <h2 className="font-heading text-2xl font-semibold">When in doubt, asking is enough.</h2>
              </div>
            </div>

            <p className="text-sm leading-7 text-muted-foreground">
              You do not need to “prove” a problem before you ask for help. If a skill feels off,
              a routine is stressful, or your child has lost words or abilities they used before,
              that is enough to start the conversation.
            </p>

            <ul className="space-y-3">
              {[
                "Bring one specific example from home or daycare.",
                "Use milestone and quick-check language to describe what you are seeing.",
                "Ask what to monitor, when to follow up, and whether an SLP evaluation is appropriate.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
