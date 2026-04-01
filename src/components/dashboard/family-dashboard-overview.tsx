"use client";

import Link from "next/link";
import {
  ArrowRight,
  Baby,
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
import { dailyTips } from "@/data/daily-tips";
import { milestones } from "@/data/milestones";
import { useChildProfile } from "@/lib/stores/child-profile";
import { DailyTipCard } from "@/components/daily-tip-card";

interface BlueprintPreview {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  weekNumber: number;
  estimatedMinutes: number;
}

interface FamilyDashboardOverviewProps {
  displayName: string | null;
  blueprints: BlueprintPreview[];
}

const domainLinks = [
  {
    href: "/milestones",
    icon: Volume2,
    title: "Speech & sounds",
    description: "See what clear sound growth can look like at this stage.",
  },
  {
    href: "/check",
    icon: BookOpen,
    title: "Language",
    description: "Check vocabulary, understanding, and question-asking routines.",
  },
  {
    href: "/activities",
    icon: Brain,
    title: "Play & cognition",
    description: "Use routines and play to build attention, imitation, and flexibility.",
  },
  {
    href: "/milestones",
    icon: UtensilsCrossed,
    title: "Feeding",
    description: "Review mealtime watch-fors and how feeding ties into development.",
  },
  {
    href: "/waitlist-guide",
    icon: Waves,
    title: "Behavior & regulation",
    description: "Support regulation with predictable communication and routines.",
  },
  {
    href: "/resources",
    icon: Library,
    title: "Trusted resources",
    description: "Go deeper with clinician-reviewed creators and communities.",
  },
];

function formatAge(months: number | null) {
  if (months === null) return "No age saved yet";
  if (months < 24) return `${months} months`;
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  return remainder === 0 ? `${years} year${years > 1 ? "s" : ""}` : `${years}y ${remainder}m`;
}

export function FamilyDashboardOverview({
  displayName,
  blueprints,
}: FamilyDashboardOverviewProps) {
  const { childAgeMonths, childName } = useChildProfile();
  const previewAge = childAgeMonths ?? 20;
  const milestone =
    milestones.find((item) => previewAge >= item.ageMonthsStart && previewAge <= item.ageMonthsEnd) ??
    milestones[5];

  const highlightSkills = [
    milestone.speech[0],
    milestone.language[0],
    milestone.social[0],
  ].filter(Boolean);

  const greetingName = childName || displayName || "there";

  return (
    <div className="space-y-6">
      <section className="grid gap-5 xl:grid-cols-[1.12fr_0.88fr]">
        <div className="guide-surface p-6 sm:p-7">
          <div className="relative z-10 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <div className="section-kicker">Today in your parent guide</div>
              <span className="rounded-full border border-border/80 bg-white/75 px-3 py-1 text-xs font-semibold text-foreground">
                {formatAge(childAgeMonths)}
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                Welcome, {greetingName}.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                Start with one clear milestone snapshot, one doable tip, and one next action.
                HomeSLP is built to help parents move from worry to organized support.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              <div className="soft-panel p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Current stage
                </p>
                <p className="mt-3 font-heading text-2xl font-semibold">{milestone.ageRangeLabel}</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Use this age band as your anchor for milestones, watch-fors, and daily ideas.
                </p>
              </div>

              <div className="soft-panel p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Best next step
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Check what is typical, then bring one or two observations into the quick check.
                </p>
                <Link
                  href="/check"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Run the quick check
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="soft-panel p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  If concern stays high
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Use visit prep to collect examples, red flags, and questions for your pediatrician or SLP.
                </p>
                <Link
                  href="/doctor-prep"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Organize concerns
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="guide-surface p-5">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                <Baby className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  At this stage
                </p>
                <h2 className="font-heading text-2xl font-semibold">{milestone.ageRangeLabel}</h2>
              </div>
            </div>

            <div className="space-y-3">
              {highlightSkills.map((skill) => (
                <div key={skill.skill} className="rounded-xl border border-border/70 bg-white/78 p-4">
                  <p className="text-sm font-semibold text-foreground">{skill.skill}</p>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>

            <div className="field-note p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Top watch-for
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground">{milestone.redFlags[0]}</p>
            </div>
          </div>
        </div>
      </section>

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
                  This week&apos;s learning plan
                </p>
                <h2 className="font-heading text-2xl font-semibold">Featured blueprints</h2>
              </div>
            </div>

            <div className="space-y-3">
              {blueprints.map((blueprint) => (
                <Link
                  key={blueprint.id}
                  href={`/blueprints/${blueprint.slug}`}
                  className="block rounded-xl border border-border/70 bg-white/78 p-4 transition-colors hover:border-primary/25"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-heading text-xl font-semibold">{blueprint.title}</p>
                      <p className="mt-1 text-sm leading-7 text-muted-foreground">{blueprint.subtitle}</p>
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
              These are the core parent paths inside HomeSLP. You can start where the concern is
              loudest, or use them as a daily scan when you want to feel more organized.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {domainLinks.map((domain) => (
              <Link
                key={domain.title}
                href={domain.href}
                className="soft-panel card-lift p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                  <domain.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-2xl font-semibold">{domain.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{domain.description}</p>
              </Link>
            ))}
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
                  Useful next clicks
                </p>
                <h2 className="font-heading text-2xl font-semibold">Parent support tools</h2>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { href: "/check-in", label: "Weekly pulse", body: "Notice what changed this week." },
                { href: "/handouts", label: "Printables", body: "Grab a quick reference for home or daycare." },
                { href: "/progress", label: "Progress log", body: "Track wins and patterns over time." },
                { href: "/doctor-prep", label: "Visit prep", body: "Bring clearer examples to appointments." },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-border/70 bg-white/78 p-4 transition-colors hover:border-primary/25"
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
