import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  MessageCircle,
  Play,
  Search,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { QuizFunnelWrapper } from "./quiz-wrapper";

export const metadata: Metadata = {
  title: "For Parents - Speech Therapy Support While You Wait",
  description:
    "Stuck on a speech therapy waitlist? Get expert-guided weekly blueprints, curated videos, and printable activities from a licensed SLP. Start your free 7-day trial.",
};

export default function FamiliesLanding() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/50 to-background pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="texture-dots absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Clock className="w-4 h-4" />
              Created by a licensed SLP
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Stuck on a 6-month waitlist?{" "}
              <span className="text-primary">
                Start helping your child today.
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              A licensed SLP&apos;s weekly roadmap for parents of late talkers.
              Expert-guided videos, printable activities, and proven strategies
              — delivered in bite-sized weekly blueprints.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup?path=child"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-warm-md transition-colors hover:bg-primary/90"
              >
                Start Free 7-Day Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#quiz"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-input bg-background px-8 py-4 text-lg font-medium shadow-warm-sm transition-colors hover:bg-accent"
              >
                Take the Free Quiz
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                7-day free trial
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4" />
                $9/month after
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-center sm:text-3xl mb-12">
            Sound familiar?
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "The waitlist is 6+ months",
                description:
                  "Your pediatrician flagged a concern, but every clinic in your area has a months-long wait for evaluation.",
              },
              {
                icon: Search,
                title: "Google advice is overwhelming",
                description:
                  "You've searched for hours but can't tell what's evidence-based vs. clickbait. Every article contradicts the last.",
              },
              {
                icon: Users,
                title: "You want to help NOW",
                description:
                  "You know early intervention matters. Every week on the waitlist feels like lost time. You need a plan.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border bg-card p-6 text-center space-y-3"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted-foreground max-w-xl mx-auto">
            I know this feeling. As an SLP, I see families waiting months for the
            help they need today. That&apos;s why I built HomeSLP.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section id="quiz" className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <QuizFunnelWrapper />
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              What&apos;s inside your weekly blueprint
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Every week, you get a structured plan designed by a licensed SLP.
              No guessing, no overwhelm — just follow the roadmap.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Play,
                title: "SLP Video Commentary",
                description:
                  "I explain exactly what technique to focus on this week and why it works — in plain parent language.",
              },
              {
                icon: BookOpen,
                title: "Curated YouTube Videos",
                description:
                  "I handpick the best clips (Ms. Rachel, Speech Sisters, etc.) and tell you exactly what to watch for.",
              },
              {
                icon: FileText,
                title: "Refrigerator PDFs",
                description:
                  "Printable 1-page activity cards with 3 specific ways to practice during everyday routines.",
              },
              {
                icon: Calendar,
                title: "4-Week Structured Roadmap",
                description:
                  "A progressive plan that builds skills week over week, designed for 18-36 month late talkers.",
              },
              {
                icon: MessageCircle,
                title: "Parent Community",
                description:
                  "Connect with other parents on the same journey. Share wins, ask questions, and feel supported.",
              },
              {
                icon: Star,
                title: "Progress Tracking",
                description:
                  "Watch your child's progress over time with milestone checklists and weekly reviews.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-card p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-sage-600" />
                </div>
                <h3 className="font-heading font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-center sm:text-3xl mb-12">
            How it works
          </h2>
          <div className="grid gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              {
                step: "1",
                title: "Start your free trial",
                description:
                  "Sign up in 30 seconds. No credit card needed until day 7.",
              },
              {
                step: "2",
                title: "Get your Week 1 Blueprint",
                description:
                  "Immediately access expert-guided videos, strategies, and printable activities.",
              },
              {
                step: "3",
                title: "Follow the weekly roadmap",
                description:
                  "Each week builds on the last. Watch your child's communication grow.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground font-heading text-xl font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Kristine */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
              <span className="font-heading text-2xl font-bold text-primary">
                KE
              </span>
            </div>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Hi, I&apos;m Kristine
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a licensed Speech-Language Pathologist (MA, CCC-SLP)
                with experience across pediatric and adult populations. I&apos;ve
                worked in hospitals, clinics, and schools — and I&apos;ve seen
                firsthand how devastating the waitlist crisis is for families.
              </p>
              <p>
                I created HomeSLP because no parent should have to spend 6 months
                feeling helpless. The strategies I teach here are the same ones
                I use in my own practice. You deserve access to this knowledge
                now — not after months of waiting.
              </p>
            </div>
            <p className="text-sm font-medium">
              Kristine Everett, MA, CCC-SLP
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-md">
            <div className="rounded-2xl border-2 border-primary bg-card p-8 shadow-warm-lg text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Most Popular
              </div>
              <div>
                <div className="font-heading text-4xl font-bold">
                  $9
                  <span className="text-lg font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  7-day free trial included
                </p>
              </div>
              <ul className="space-y-3 text-left text-sm">
                {[
                  "Weekly expert-guided blueprints",
                  "Curated video library with SLP annotations",
                  "Printable refrigerator activity cards",
                  "4-week structured roadmap",
                  "Parent community access",
                  "Progress milestone tracker",
                  "New content added weekly",
                  "Cancel anytime — no contracts",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/signup?path=child"
                className="block w-full rounded-xl bg-primary px-6 py-3.5 text-center font-medium text-primary-foreground shadow-warm-sm transition-colors hover:bg-primary/90"
              >
                Start Your Free Trial
              </Link>
              <p className="text-xs text-muted-foreground">
                Less than two lattes a month for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-center sm:text-3xl mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Will this replace speech therapy?",
                a: "No. HomeSLP is designed to supplement, not replace, professional speech-language services. We provide educational strategies and activities to use while you wait for or alongside professional therapy.",
              },
              {
                q: "What age range is this for?",
                a: "Our pediatric path is designed primarily for parents of children aged 18-36 months who are late talkers. However, many strategies are beneficial for children up to age 5.",
              },
              {
                q: "Do I need any special materials?",
                a: "No! All activities use everyday items you already have at home — toys, books, mealtimes, and bath time. No flashcards or special equipment needed.",
              },
              {
                q: "What if my child has already been evaluated?",
                a: "HomeSLP is a great complement to ongoing therapy. The strategies we teach align with evidence-based practices used by SLPs. You can share your home practice with your therapist.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, absolutely. Cancel anytime from your account settings. You'll keep access through the end of your billing period. No contracts, no cancellation fees.",
              },
              {
                q: "Is my information secure?",
                a: "Yes. We use industry-standard encryption and never share your data. We do not collect any health information about your child beyond optional profile details.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border bg-card"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 font-medium">
                  {faq.q}
                  <span className="text-muted-foreground transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-rose-50/50 to-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Your child doesn&apos;t have to wait.
          </h2>
          <p className="text-lg text-muted-foreground">
            Start today with expert-guided strategies you can use right now.
          </p>
          <Link
            href="/signup?path=child"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-10 py-4 text-lg font-medium text-primary-foreground shadow-warm-md transition-colors hover:bg-primary/90"
          >
            Begin Your Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
