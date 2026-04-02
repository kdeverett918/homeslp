import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookOpenText,
  Brain,
  CalendarHeart,
  CheckCircle2,
  MessageCircleHeart,
  Microscope,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
  Volume2,
  Waves,
} from "lucide-react";
import { pediatricBlueprints } from "@/data/blueprints/pediatric";
import { dailyTips } from "@/data/daily-tips";
import { parentDomainLinks } from "@/data/parent-domains";
import { ContentImage } from "@/components/media/content-image";
import { ReadAloudButton } from "@/components/media/read-aloud-button";
import { ParentStartMenu } from "@/components/start-menu/parent-start-menu";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FadeIn, SlideUp, StaggerChildren, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { formatFriendlyAgeRange } from "@/lib/format-age";
import { QuizFunnelWrapper } from "./quiz-wrapper";

export const metadata: Metadata = {
  title: "For Parents | Developmental Milestones, Daily Speech Tips, and SLP Guidance",
  description:
    "A research-backed home SLP guide for parents. Learn developmental milestones, spot red flags, and use daily routines to support speech, language, play, feeding, and behavior.",
};

const faqItems = [
  {
    question: "Will this replace speech therapy?",
    answer:
      "No. HomeSLP is designed to help parents learn, practice, and organize concerns between appointments or while waiting for an evaluation. It does not replace individualized medical or speech-language care.",
  },
  {
    question: "What ages does the parent guide cover?",
    answer:
      "HomeSLP covers birth through age 5 with milestone guidance, routine-based daily tips, red flags, and parent education written in clear, practical language.",
  },
  {
    question: "Is this only for children with delays?",
    answer:
      "No. Many families use HomeSLP as a reference tool to learn what is typical, what supports communication growth, and when it is worth asking for an evaluation.",
  },
  {
    question: "How do you keep the information research-backed?",
    answer:
      "We review official pediatric and speech-language sources first, clearly label educational tools versus diagnostic care, and keep our research standards visible so parents can see how content is framed.",
  },
  {
    question: "My family uses more than one language. Does that cause delays?",
    answer:
      "No. Bilingualism does not cause speech or language delay. We encourage families to count words across all languages and continue using the language that creates the richest, warmest communication at home.",
  },
  {
    question: "What if I am worried right now?",
    answer:
      "Use the quick check or milestone guide to organize what you are seeing, then bring those concerns to your pediatrician, Early Intervention team, or a licensed speech-language pathologist. If your child has lost skills or words they used before, seek evaluation promptly.",
  },
];

const featuredBlueprints = pediatricBlueprints.slice(0, 3);
const featuredTips = [
  dailyTips.find((tip) => tip.id === "meal-01"),
  dailyTips.find((tip) => tip.id === "play-01"),
  dailyTips.find((tip) => tip.id === "any-01"),
].filter(Boolean) as typeof dailyTips;

const domainIcons = {
  speech: Volume2,
  language: BookOpen,
  play: Brain,
  feeding: UtensilsCrossed,
  behavior: Waves,
  resources: MessageCircleHeart,
} as const;

const trustPrinciples = [
  {
    title: "Official sources first",
    body:
      "We start with CDC, ASHA, AAP, and related pediatric references before we turn guidance into parent-friendly explanations.",
  },
  {
    title: "Daily tips with a purpose",
    body:
      "Routine-based ideas are framed around communication opportunities, not pressure. Parents get one small thing to try instead of an impossible checklist.",
  },
  {
    title: "Escalation is never hidden",
    body:
      "When a child is missing skills, losing words, or showing red flags, we tell parents clearly when to bring concerns to a pediatrician or SLP.",
  },
];

const contextNotes: Record<(typeof featuredTips)[number]["context"], string> = {
  mealtime: "Turns a favorite routine into a natural reason to request, point, or vocalize.",
  bath: "Predictable repetition helps language stick without making it feel like work.",
  play: "Child-led play is one of the richest places to model words and join attention.",
  bedtime: "Books, songs, and recaps build memory, vocabulary, and calm routines.",
  errands: "Real-world repetition helps language generalize beyond one toy or one room.",
  anytime: "Short, repeatable parent habits compound over the course of the week.",
};

const contextLabels: Record<(typeof featuredTips)[number]["context"], string> = {
  mealtime: "Mealtime",
  bath: "Bath time",
  play: "Play",
  bedtime: "Bedtime",
  errands: "Errands",
  anytime: "Any routine",
};

export default function FamiliesLanding() {
  return (
    <div className="pb-16">
      <section className="hero-glow relative overflow-hidden px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20">
        <span className="floating-orb coral left-0 top-10 h-36 w-36 animate-[drift_9s_ease-in-out_infinite]" />
        <span className="floating-orb sage right-10 top-0 h-28 w-28 animate-[drift_11s_ease-in-out_infinite]" />
        <span className="floating-orb sun bottom-10 right-20 h-32 w-32 animate-[drift_13s_ease-in-out_infinite]" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <SlideUp>
              <div className="space-y-6">
                <div className="section-kicker">Whole-child developmental guide for parents</div>
                <h1 className="max-w-3xl font-heading text-5xl font-semibold leading-none tracking-tight text-foreground sm:text-6xl">
                  Start with one calm next step, not twenty tabs of panic.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Preview milestones, routines, and concern pathways the same way a parent would
                  use the app: pick an age, name the worry, and see the next click immediately.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="trust-pill">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                    Licensed SLP reviewed
                  </span>
                  <span className="trust-pill">
                    <Microscope className="h-3.5 w-3.5 text-primary" />
                    CDC + ASHA + AAP aligned
                  </span>
                  <span className="trust-pill">
                    <CalendarHeart className="h-3.5 w-3.5 text-primary" />
                    Daily routine-based tips
                  </span>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="xl">
                    <Link href="#parent-start-menu">
                      Preview the Parent Start Menu
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="xl">
                    <Link href="/check">
                      Try the Milestone Check
                      <Sparkles className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <Link
                    href="/signup?path=child"
                    className="inline-flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    Start Free 7-Day Trial
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="text-muted-foreground">
                    Use the preview first if you want to see the app logic before signing up.
                  </span>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                  Best for parents who want one trustworthy place to check milestones, collect
                  concerns, and practice realistic routines at home while waiting for or working
                  alongside therapy.
                </p>

                <div className="field-note max-w-2xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    What you can preview here
                  </p>
                  <p className="mt-2 text-sm leading-7 text-foreground">
                    The live start menu shows the age snapshot, one doable idea, and the next best
                    click a parent would see based on your child&apos;s age and concern.
                  </p>
                </div>
              </div>
            </SlideUp>

            <FadeIn delay={0.1}>
              <ParentStartMenu mode="preview" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="guide-surface px-6 py-7 sm:px-8">
            <div className="relative z-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-4">
                <div className="section-kicker">Why families use HomeSLP</div>
                <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                  Less guessing. More clear next steps.
                </h2>
                <p className="text-base leading-8 text-muted-foreground">
                  Parents usually do not need more content. They need a smarter sequence:
                  understand the stage, spot red flags, practice one routine, and know when to
                  escalate.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[
                  {
                    icon: BookOpenText,
                    title: "Understand the stage",
                    description:
                      "Age-based milestone guidance across speech, language, social communication, feeding, and development.",
                  },
                  {
                    icon: PlayCircle,
                    title: "Try one routine today",
                    description:
                      "Daily practice ideas built around play, meals, bedtime, errands, and the moments families already have.",
                  },
                  {
                    icon: Stethoscope,
                    title: "Bring better questions",
                    description:
                      "Use red flags, screeners, and doctor-prep tools to speak clearly with pediatricians and SLPs.",
                  },
                ].map((item) => (
                  <article key={item.title} className="soft-panel card-lift p-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-heading text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-14 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="max-w-3xl space-y-3">
              <div className="section-kicker">Every domain in one parent-friendly system</div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Whole-child support, not just a speech handout.
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                HomeSLP helps parents connect speech and language growth with feeding, play,
                regulation, shared attention, and the routines that shape daily life.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {parentDomainLinks.map((domain) => {
              const Icon = domainIcons[domain.key];

              return (
                <StaggerItem key={domain.key}>
                  <article className="guide-surface card-lift p-5">
                    <div className="relative z-10 flex h-full flex-col">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 font-heading text-2xl font-semibold">{domain.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                        {domain.description}
                      </p>
                      <Link
                        href={domain.href}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                      >
                        {domain.action}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      <section id="quiz" className="px-4 pt-14 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="guide-surface px-6 py-8 sm:px-8">
              <div className="relative z-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                <div className="space-y-4">
                  <div className="section-kicker">Try the experience</div>
                  <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                    Start with a 60-second milestone check.
                  </h2>
                  <p className="text-base leading-8 text-muted-foreground">
                    Before asking parents to subscribe, we let them experience the value:
                    age-based guidance, clearer red flags, and a calmer sense of what to do next.
                  </p>
                </div>
                <QuizFunnelWrapper />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 pt-14 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <FadeIn>
              <div className="space-y-4">
                <div className="section-kicker">Daily hints parents will actually use</div>
                <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                  Fun, repeatable routines instead of impossible homework.
                </h2>
                <p className="text-base leading-8 text-muted-foreground">
                  The goal is not to turn families into therapists. It is to help them notice
                  communication opportunities hiding inside breakfast, bath time, play, and bedtime.
                </p>
                <div className="soft-panel p-5">
                  <p className="text-sm font-medium leading-7 text-muted-foreground">
                    HomeSLP daily tips are designed to feel playful, realistic, and short enough to
                    survive an actual family routine. Each one gives a parent a concrete thing to
                    model, a quick reason it matters, and a clear next step if concern persists.
                  </p>
                </div>
              </div>
            </FadeIn>

            <StaggerChildren className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {featuredTips.map((tip) => (
                <StaggerItem key={tip.id}>
                  <article className="guide-surface card-lift h-full p-5">
                    <div className="relative z-10 flex h-full flex-col">
                      {tip.image ? (
                        <ContentImage
                          image={tip.image}
                          aspect="landscape"
                          sizes="(max-width: 1024px) 100vw, 28vw"
                          containerClassName="mb-4"
                          imageClassName="object-cover object-center"
                        />
                      ) : null}

                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                          {contextLabels[tip.context]}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground">
                          {formatFriendlyAgeRange(tip.ageRangeStart, tip.ageRangeEnd)}
                        </span>
                      </div>
                      <h3 className="mt-4 font-heading text-2xl font-semibold">{tip.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{tip.technique}</p>
                      <div className="mt-4 rounded-xl bg-background/90 p-4 text-sm italic text-muted-foreground">
                        {tip.example}
                      </div>
                      {tip.narration ? (
                        <ReadAloudButton narration={tip.narration} compact className="mt-4" />
                      ) : null}
                      <div className="mt-4 field-note p-4 text-sm font-medium leading-7 text-foreground">
                        <strong>Why it helps:</strong> {contextNotes[tip.context]}
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      <section className="px-4 pt-14 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <FadeIn>
              <div className="space-y-4">
                <div className="section-kicker">How we keep it trustworthy</div>
                <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                  A visible research standard, not just a claim in the footer.
                </h2>
                <p className="text-base leading-8 text-muted-foreground">
                  Parents should be able to tell how advice is framed, where it comes from, and
                  when content stops being educational and starts needing professional care.
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link href="/research">
                    Read our research standards
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {trustPrinciples.map((principle) => (
                <FadeIn key={principle.title}>
                  <article className="guide-surface p-5">
                    <div className="relative z-10 space-y-3">
                      <h3 className="font-heading text-2xl font-semibold">{principle.title}</h3>
                      <p className="text-sm leading-7 text-muted-foreground">{principle.body}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-14 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="guide-surface px-6 py-8 sm:px-8">
            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
              <div className="space-y-4">
                <div className="section-kicker">Inside the guided plan</div>
                <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                  See how the guided plan is structured before you commit.
                </h2>
                <p className="text-base leading-8 text-muted-foreground">
                  The paid path adds a steadier weekly rhythm: one focus, one coaching explanation,
                  and printable support you can actually use at home.
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-[0.98fr_1.02fr]">
                <div className="soft-panel p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Included in the guided path
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-foreground">
                    {[
                      "Weekly blueprints that explain what to focus on and why",
                      "Printable handouts and refrigerator-ready routine ideas",
                      "SLP commentary that translates strategy into parent language",
                      "A calmer home practice rhythm while you wait for or work with therapy",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="soft-panel p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Example weekly modules
                  </p>
                  <div className="mt-4 space-y-3">
                    {featuredBlueprints.map((blueprint) => (
                      <div
                        key={blueprint.id}
                        className="card-lift rounded-xl border border-border/70 bg-white/80 p-4"
                      >
                        {blueprint.coverImage ? (
                          <ContentImage
                            image={blueprint.coverImage}
                            aspect="card"
                            sizes="(max-width: 1024px) 100vw, 20vw"
                            containerClassName="mb-4"
                            imageClassName="object-cover"
                          />
                        ) : null}
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-heading text-xl font-semibold">{blueprint.title}</p>
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            Week {blueprint.weekNumber}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">{blueprint.description}</p>
                        {blueprint.commentary.narration ? (
                          <ReadAloudButton
                            narration={blueprint.commentary.narration}
                            compact
                            className="mt-4"
                          />
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg">
                      <Link href="/blueprints">See full plan library</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/pricing">See full pricing</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-14 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="space-y-3 text-center">
              <div className="section-kicker">Frequently asked questions</div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Questions parents usually ask first
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8">
              <FaqAccordion items={faqItems} />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 pt-14 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-5xl">
          <div className="guide-surface px-6 py-8 text-center sm:px-10 sm:py-10">
            <div className="relative z-10 space-y-5">
              <div className="section-kicker">Start here if you want calmer guidance</div>
              <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                Help your child without carrying the whole internet on your back.
              </h2>
              <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Start with milestones and a quick check, then use daily routines to build momentum.
                When concern rises, HomeSLP helps you bring clearer observations to the professionals
                who can support your child next.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="xl">
                  <Link href="/signup?path=child">
                    Start Free 7-Day Trial
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link href="/check">Try the Milestone Check</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
