import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Heart } from "lucide-react";
import { FadeIn, ScaleOnHover } from "@/components/motion";
import { FaqAccordion } from "@/components/ui/faq-accordion";

export const metadata: Metadata = {
  title: "Pricing",
};

const faqItems = [
  {
    question: "Do I need a credit card for the free trial?",
    answer:
      "Yes, a credit card is required to start the trial, but you won't be charged during the 7-day trial period. Cancel anytime during the trial with no charge.",
  },
  {
    question: "Who is HomeSLP for?",
    answer:
      "HomeSLP is now focused on children. The membership is built for parents and family members who want research-backed guidance for speech, language, play, feeding, behavior, and developmental milestones.",
  },
  {
    question: "What happens when I cancel?",
    answer:
      "You keep full access through the end of your current billing period. After that, you'll lose access to premium content but can re-subscribe anytime.",
  },
];

export default function PricingPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              One plan that includes everything. Start with a free 7-day trial —
              cancel anytime.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-md">
          <ScaleOnHover>
            <div className="rounded-2xl border-2 border-primary bg-card p-8 shadow-warm-lg text-center space-y-6">
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-primary fill-primary" />
                <span className="font-heading text-lg font-semibold">
                  HomeSLP Monthly
                </span>
              </div>

              <div>
                <div className="font-heading text-5xl font-bold">
                  $9
                  <span className="text-xl font-normal text-muted-foreground">
                    /mo
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Free 7-day trial. Cancel anytime.
                </p>
              </div>

              <ul className="space-y-3 text-left text-sm">
                {[
                  "Weekly expert-guided child-development blueprints",
                  "Curated video library with SLP commentary",
                  "Printable refrigerator activity cards",
                  "Daily parent-friendly tips for routines at home",
                  "Milestones across speech, language, play, feeding, and behavior",
                  "Printable handouts and home practice sheets",
                  "Curated SLP resource library",
                  "Interactive learning games",
                  "Parent community access",
                  "Progress tracking with streaks and milestones",
                  "Content library growing regularly",
                  "Research standards and escalation guidance",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/signup?path=child"
                className="block w-full rounded-xl bg-primary px-6 py-4 text-center text-lg font-medium text-primary-foreground shadow-warm-sm transition-colors hover:bg-primary/90"
              >
                Start Your Free Trial
              </Link>

              <p className="text-xs text-muted-foreground">
                Less than two lattes a month for peace of mind and expert guidance.
              </p>
            </div>
          </ScaleOnHover>
        </div>

        <FadeIn>
          <div className="mt-16 mx-auto max-w-2xl text-center space-y-4">
            <h2 className="font-heading text-xl font-bold">
              Frequently asked questions
            </h2>
            <div className="text-left">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
