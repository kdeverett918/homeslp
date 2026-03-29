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
import { FadeIn, SlideUp, StaggerChildren, StaggerItem, ScaleOnHover } from "@/components/motion";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { QuizFunnelWrapper } from "./quiz-wrapper";

export const metadata: Metadata = {
  title: "For Parents - Speech Therapy Support While You Wait",
  description:
    "Stuck on a speech therapy waitlist? Get expert-guided weekly blueprints, curated videos, and printable activities from a licensed SLP. Start your free 7-day trial.",
};

const faqItems = [
  {
    question: "Will this replace speech therapy?",
    answer:
      "No. HomeSLP is designed to supplement, not replace, professional speech-language services. We provide educational strategies and activities to use while you wait for or alongside professional therapy.",
  },
  {
    question: "What age range is this for?",
    answer:
      "Our pediatric path is designed primarily for parents of children aged 18-36 months who are late talkers. However, many strategies are beneficial for children up to age 5.",
  },
  {
    question: "Do I need any special materials?",
    answer:
      "No! All activities use everyday items you already have at home — toys, books, mealtimes, and bath time. No flashcards or special equipment needed.",
  },
  {
    question: "What if my child has already been evaluated?",
    answer:
      "HomeSLP is a great complement to ongoing therapy. The strategies we teach align with evidence-based practices used by SLPs. You can share your home practice with your therapist.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, absolutely. Cancel anytime from your account settings. You'll keep access through the end of your billing period. No contracts, no cancellation fees.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes. We use industry-standard encryption and never share your data. We do not collect any health information about your child beyond optional profile details.",
  },
  {
    question: "What if my child doesn't improve after 8 weeks?",
    answer:
      "Some children need more intensive support than home practice alone — and that's completely normal. Your 8 weeks of practice gives your SLP valuable data about what strategies work and what doesn't. You haven't failed. You've given your child a head start and your SLP a roadmap.",
  },
  {
    question: "My family speaks two languages. Is that causing the delay?",
    answer:
      "No. Bilingualism does NOT cause speech delays. Research consistently shows that growing up with two languages is beneficial for brain development. When counting your child's vocabulary, add up words in ALL languages — that total is what matters, not the count in any single language.",
  },
  {
    question: "Should I get my child's hearing tested?",
    answer:
      "Yes — always. Even if your child passed the newborn hearing screening, hearing can change. Ear infections, fluid in the ears, and other conditions can cause temporary or permanent hearing loss that mimics a speech delay. A simple hearing test can rule this out.",
  },
];

export default function FamiliesLanding() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/80 to-background pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="texture-dots absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SlideUp>
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
          </SlideUp>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold text-center sm:text-3xl mb-12">
              Sound familiar?
            </h2>
          </FadeIn>
          <StaggerChildren className="grid gap-6 sm:grid-cols-3">
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
              <StaggerItem key={item.title}>
                <ScaleOnHover>
                  <div className="rounded-xl border bg-card p-6 text-center space-y-3">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn>
            <p className="mt-8 text-center text-muted-foreground max-w-xl mx-auto">
              HomeSLP was created because no family should wait months for the
              help they need.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quiz */}
      <section id="quiz" className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <QuizFunnelWrapper />
          </FadeIn>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                What&apos;s inside your weekly blueprint
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Every week, you get a structured plan designed by a licensed SLP.
                No guessing, no overwhelm — just follow the roadmap.
              </p>
            </div>
          </FadeIn>
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Play,
                title: "SLP Video Commentary",
                description:
                  "Each week features expert commentary explaining what technique to focus on and why it works — in plain parent language.",
              },
              {
                icon: BookOpen,
                title: "Curated YouTube Videos",
                description:
                  "Handpicked clips (Ms. Rachel, Speech Sisters, etc.) with guidance on exactly what to watch for.",
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
              <StaggerItem key={feature.title}>
                <ScaleOnHover>
                  <div className="rounded-xl border bg-card p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-sage-600" />
                    </div>
                    <h3 className="font-heading font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold text-center sm:text-3xl mb-12">
              How it works
            </h2>
          </FadeIn>
          <StaggerChildren className="grid gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
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
              <StaggerItem key={item.step}>
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground font-heading text-xl font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Expert credentials */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center space-y-6">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-rose-50 to-sage-50 border px-6 py-3">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-heading font-semibold text-sm">Created by a Licensed SLP</span>
                <span className="text-xs text-muted-foreground">MA, CCC-SLP</span>
              </div>
              <p className="text-muted-foreground">
                Every blueprint, activity card, and video annotation on HomeSLP is
                created by a licensed Speech-Language Pathologist with clinical
                experience across pediatric and adult populations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-md">
            <ScaleOnHover>
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
            </ScaleOnHover>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold text-center sm:text-3xl mb-10">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FaqAccordion items={faqItems} />
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-rose-50/50 to-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-6">
          <FadeIn>
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
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
