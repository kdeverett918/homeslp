import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Heart,
  MessageCircle,
  Play,
  Shield,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { QuizFunnelWrapper } from "./quiz-wrapper";

export const metadata: Metadata = {
  title: "For Caregivers - Swallowing & Communication Support",
  description:
    "Caring for someone with swallowing difficulties or communication challenges after stroke? Get IDDSI recipes, exercises, and expert guidance from a licensed SLP.",
};

export default function CaregiversLanding() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-50/50 to-background pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="texture-dots absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-4 py-1.5 text-sm font-medium text-sage-700 mb-6">
              <Heart className="w-4 h-4" />
              Created by a licensed SLP
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Sent home with a modified diet and{" "}
              <span className="text-sage-600">no guidance?</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              I&apos;m a licensed SLP, and I built the resource I wish every
              caregiver had. IDDSI recipes, swallowing exercises, communication
              tools, and weekly guidance — all in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup?path=adult"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sage-600 px-8 py-4 text-lg font-medium text-white shadow-warm-md transition-colors hover:bg-sage-700"
              >
                Start Free 7-Day Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#quiz"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-input bg-background px-8 py-4 text-lg font-medium shadow-warm-sm transition-colors hover:bg-accent"
              >
                Take the Swallow Safety Check
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
            Does this sound like your experience?
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "Discharged with a sheet of paper",
                description:
                  'Your loved one came home from the hospital with a blurry photocopy about "swallow precautions" and you\'re supposed to figure it out.',
              },
              {
                icon: Heart,
                title: "Terrified of choking",
                description:
                  "Every meal feels like a risk. You second-guess every bite and every sip, afraid of making things worse.",
              },
              {
                icon: UtensilsCrossed,
                title: 'No idea what "nectar thick" means',
                description:
                  "The doctor prescribed a modified diet but nobody showed you how to actually prepare safe, appetizing food.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border bg-card p-6 text-center space-y-3"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-sage-600" />
                </div>
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted-foreground max-w-xl mx-auto">
            You&apos;re not alone. Caregivers are sent home with almost no
            guidance. I built HomeSLP to change that.
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
              Everything you need to care with confidence
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Expert-guided resources designed specifically for family caregivers.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Calendar,
                title: "Weekly Care Blueprints",
                description:
                  "Structured weekly plans covering swallowing safety, communication strategies, and home exercises.",
              },
              {
                icon: UtensilsCrossed,
                title: "IDDSI Recipe Library",
                description:
                  "100+ texture-modified recipes that look and taste delicious. No more bland, blended food.",
              },
              {
                icon: Play,
                title: "Exercise Video Library",
                description:
                  "Swallowing and communication exercises demonstrated step-by-step for safe home practice.",
              },
              {
                icon: BookOpen,
                title: "Communication Boards",
                description:
                  "Printable communication boards for daily needs, pain scales, and emergency situations.",
              },
              {
                icon: Star,
                title: "EAT-10 Progress Tracker",
                description:
                  "Monitor swallowing symptoms over time with a validated screening tool. Share reports with doctors.",
              },
              {
                icon: MessageCircle,
                title: "Caregiver Community",
                description:
                  "Connect with other caregivers who understand. Share recipes, wins, and support.",
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
                title: "Take the Swallow Safety Check",
                description:
                  "Answer 5 quick questions about your loved one's eating and swallowing.",
              },
              {
                step: "2",
                title: "Get your Week 1 Blueprint",
                description:
                  "Immediately access mealtime safety guides, IDDSI basics, and communication tips.",
              },
              {
                step: "3",
                title: "Build confidence week by week",
                description:
                  "Each week covers a new topic — from safe meal prep to exercises to daily routines.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 rounded-full bg-sage-600 text-white font-heading text-xl font-bold flex items-center justify-center">
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

      {/* About */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-sage-100 mx-auto flex items-center justify-center">
              <span className="font-heading text-2xl font-bold text-sage-700">
                KE
              </span>
            </div>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Hi, I&apos;m Kristine
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a licensed Speech-Language Pathologist (MA, CCC-SLP) with
                experience across hospital, rehabilitation, and outpatient settings.
                I&apos;ve worked with hundreds of patients recovering from strokes,
                brain injuries, and neurological conditions.
              </p>
              <p>
                I created HomeSLP because I&apos;ve seen too many caregivers sent
                home without the knowledge they need. The IDDSI recipes,
                communication strategies, and exercises on this platform are
                based on the same evidence-based practices I use in clinical
                settings.
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
            <div className="rounded-2xl border-2 border-sage-500 bg-card p-8 shadow-warm-lg text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-3 py-1 text-sm font-medium text-sage-700">
                Full Access
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
                  "Weekly expert-guided care blueprints",
                  "100+ IDDSI texture-modified recipes",
                  "Swallowing exercise video library",
                  "Communication boards & tools",
                  "EAT-10 swallow symptom tracker",
                  "Caregiver community access",
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
                href="/signup?path=adult"
                className="block w-full rounded-xl bg-sage-600 px-6 py-3.5 text-center font-medium text-white shadow-warm-sm transition-colors hover:bg-sage-700"
              >
                Start Your Free Trial
              </Link>
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
                q: "My loved one has Parkinson's — is this for them?",
                a: "Yes. Our adult path covers swallowing and communication challenges common in Parkinson's, stroke, TBI, and other neurological conditions. The strategies are broadly applicable.",
              },
              {
                q: "What is IDDSI?",
                a: "IDDSI (International Dysphagia Diet Standardisation Initiative) is the global framework for classifying food textures and liquid thickness. We help you understand and prepare meals at any IDDSI level.",
              },
              {
                q: "Is this a replacement for therapy?",
                a: "No. HomeSLP provides educational content to supplement professional care. Always follow the diet and exercise recommendations from your loved one's medical team.",
              },
              {
                q: "Can I share my EAT-10 scores with their doctor?",
                a: "Absolutely! The EAT-10 tracker generates a printable report designed for sharing with healthcare providers.",
              },
              {
                q: "What if I need to change my loved one's diet level?",
                a: "Never change a prescribed diet level without medical clearance. Our content helps you prepare meals within the level your SLP or doctor has recommended.",
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
      <section className="py-16 sm:py-20 bg-gradient-to-b from-sage-50/50 to-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Care with confidence. Start today.
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert guidance for safe mealtimes, better communication, and peace
            of mind.
          </p>
          <Link
            href="/signup?path=adult"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sage-600 px-10 py-4 text-lg font-medium text-white shadow-warm-md transition-colors hover:bg-sage-700"
          >
            Begin Your Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
