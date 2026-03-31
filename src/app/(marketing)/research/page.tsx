import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  ClipboardCheck,
  Microscope,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research Standards",
  description:
    "How HomeSLP reviews developmental guidance, daily tips, and parent education content using trusted pediatric and speech-language sources.",
};

const sourceGroups = [
  {
    title: "Developmental milestones",
    description:
      "We anchor milestone guidance to major pediatric and speech-language references and cross-check age expectations before turning them into parent-facing summaries.",
    links: [
      {
        label: "CDC developmental milestones",
        href: "https://www.cdc.gov/milestones",
      },
      {
        label: "ASHA developmental milestones",
        href: "https://www.asha.org/public/developmental-milestones/",
      },
      {
        label: "HealthyChildren checkup and milestone guidance",
        href: "https://www.healthychildren.org/English/ages-stages/Your-Childs-Checkups/Pages/your-checkup-checklist-30-months-old.aspx",
      },
    ],
  },
  {
    title: "Speech, language, and parent action steps",
    description:
      "When we tell parents what to model, when to seek help, or how to raise concerns, we prioritize official family-facing pediatric or SLP guidance.",
    links: [
      {
        label: "HealthyChildren language delays in toddlers",
        href: "https://healthychildren.org/English/ages-stages/toddler/Pages/language-delay.aspx",
      },
      {
        label: "HealthyChildren on raising speech and language concerns",
        href: "https://www.healthychildren.org/English/ages-stages/toddler/Pages/How-to-Raise-Concerns-about-Childs-Speech-Language-Development.aspx",
      },
      {
        label: "ASHA communication milestone age ranges",
        href: "https://www.asha.org/public/developmental-milestones/communication-milestones/",
      },
    ],
  },
  {
    title: "Bilingual development and hearing concerns",
    description:
      "Parents are often given outdated advice here, so we call out these areas explicitly and defer to official family education whenever possible.",
    links: [
      {
        label: "HealthyChildren on young children learning multiple languages",
        href: "https://www.healthychildren.org/English/ages-stages/gradeschool/school/Pages/7-Myths-Facts-Bilingual-Children-Learning-Language.aspx",
      },
      {
        label: "HealthyChildren on pediatric hearing assessment updates",
        href: "https://www.healthychildren.org/English/news/Pages/AAP-updates-guidance-on-assessing-hearing-in-infants-children-and-adolescents.aspx",
      },
      {
        label: "CDC Learn the Signs. Act Early.",
        href: "https://www.cdc.gov/actearly",
      },
    ],
  },
];

const principles = [
  {
    icon: Microscope,
    title: "Primary-source first",
    description:
      "We prefer official pediatric and speech-language sources over recycled listicles, anonymous social posts, or trend-driven parenting content.",
  },
  {
    icon: ShieldCheck,
    title: "Educational, not diagnostic",
    description:
      "HomeSLP explains what is typical, what is worth watching, and when to escalate. It does not diagnose children or replace individualized care.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear escalation paths",
    description:
      "If a child is missing milestones, has lost skills, or a family has persistent concern, our content should point toward pediatricians, Early Intervention, and SLP evaluation.",
  },
  {
    icon: BadgeCheck,
    title: "Reviewed for parent usability",
    description:
      "We translate clinical guidance into routines, examples, and quick next steps so parents can act without feeling overwhelmed.",
  },
];

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <section className="hero-glow relative overflow-hidden rounded-[2rem] border border-border/70 bg-white/65 px-6 py-8 shadow-warm-lg sm:px-10 sm:py-12">
        <span className="floating-orb coral right-10 top-10 h-28 w-28 animate-[drift_9s_ease-in-out_infinite]" />
        <span className="floating-orb sage bottom-8 left-12 h-24 w-24 animate-[drift_11s_ease-in-out_infinite]" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-5">
            <div className="section-kicker">Research standards</div>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              How HomeSLP keeps parent guidance practical and research-backed.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Parents deserve content that is calm, current, and grounded in real pediatric
              sources. We use this framework to shape milestone guidance, daily hints, red-flag
              messaging, and the “what do I do next?” coaching throughout the site.
            </p>
          </div>

          <div className="guide-surface p-5">
            <div className="relative z-10 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Reviewed March 30, 2026
              </p>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <BookOpenText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Official developmental milestone references come first.
                </li>
                <li className="flex items-start gap-3">
                  <BookOpenText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Daily tips are framed as parent coaching, not a substitute for therapy.
                </li>
                <li className="flex items-start gap-3">
                  <BookOpenText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Screening tools are clearly labeled as educational and non-diagnostic.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="max-w-3xl space-y-3">
          <div className="section-kicker">What we optimize for</div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight">Our review principles</h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle) => (
            <article key={principle.title} className="guide-surface p-5">
              <div className="relative z-10 space-y-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                  <principle.icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-xl font-semibold">{principle.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="max-w-3xl space-y-3">
          <div className="section-kicker">Parent-facing source map</div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            Official references we rely on most often
          </h2>
          <p className="text-base leading-8 text-muted-foreground">
            These links are not exhaustive, but they show the kind of sources we use when shaping
            milestone pages, daily routine ideas, and parent education copy.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {sourceGroups.map((group) => (
            <article key={group.title} className="guide-surface p-6">
              <div className="relative z-10 space-y-4">
                <h3 className="font-heading text-2xl font-semibold">{group.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{group.description}</p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-[1.2rem] border border-border/70 bg-white/75 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="guide-surface p-6">
          <div className="relative z-10 space-y-4">
            <div className="section-kicker">What a label means</div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight">How to read HomeSLP content</h2>
            <div className="space-y-3 text-sm leading-7 text-muted-foreground">
              <p>
                <strong className="text-foreground">Milestones:</strong> Age-range expectations and
                red flags based on developmental references.
              </p>
              <p>
                <strong className="text-foreground">Daily tip:</strong> A routine-based home practice
                idea designed to increase opportunities for communication and learning.
              </p>
              <p>
                <strong className="text-foreground">Quick check or screener:</strong> An educational
                tool that helps families organize observations before speaking with a professional.
              </p>
              <p>
                <strong className="text-foreground">Trusted resource:</strong> A clinician-reviewed
                resource that may still include expert interpretation or community discussion, not
                just primary literature.
              </p>
            </div>
          </div>
        </article>

        <article className="guide-surface p-6">
          <div className="relative z-10 space-y-4">
            <div className="section-kicker">Where to go next</div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              Start with a milestone check, then move into daily practice.
            </h2>
            <p className="text-sm leading-7 text-muted-foreground">
              The most useful parent flow on HomeSLP is simple: learn what is typical for your
              child’s stage, notice what stands out, and use a few repeatable routines instead of
              trying to do everything at once.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { href: "/families", label: "Parent guide" },
                { href: "/check", label: "Quick check" },
                { href: "/milestones", label: "Milestones" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[1.2rem] border border-border/70 bg-white/75 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
