import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl font-bold sm:text-4xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            One plan that includes everything. Start with a free 7-day trial —
            cancel anytime.
          </p>
        </div>

        <div className="mx-auto max-w-md">
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
                "Weekly expert-guided blueprints (both paths)",
                "Curated video library with SLP commentary",
                "Printable refrigerator activity cards",
                "4-week structured roadmap for parents or caregivers",
                "IDDSI recipe library (100+ recipes)",
                "Communication boards and tools",
                "EAT-10 swallowing symptom tracker",
                "30+ cognitive therapy practice games",
                "Parent and caregiver community access",
                "Progress tracking with streaks and milestones",
                "New content added weekly",
                "Switch between child and adult paths anytime",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/signup"
              className="block w-full rounded-xl bg-primary px-6 py-4 text-center text-lg font-medium text-primary-foreground shadow-warm-sm transition-colors hover:bg-primary/90"
            >
              Start Your Free Trial
            </Link>

            <p className="text-xs text-muted-foreground">
              Less than two lattes a month for peace of mind and expert guidance.
            </p>
          </div>
        </div>

        <div className="mt-16 mx-auto max-w-2xl text-center space-y-4">
          <h2 className="font-heading text-xl font-bold">
            Frequently asked questions
          </h2>
          <div className="text-left space-y-4">
            {[
              {
                q: "Do I need a credit card for the free trial?",
                a: "Yes, a credit card is required to start the trial, but you won't be charged until day 8. Cancel anytime during the trial with no charge.",
              },
              {
                q: "Can I access both child and adult content?",
                a: "Yes! Your subscription includes both paths. You can switch between them anytime in your settings.",
              },
              {
                q: "What happens when I cancel?",
                a: "You keep full access through the end of your current billing period. After that, you'll lose access to premium content but can re-subscribe anytime.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group rounded-xl border bg-card">
                <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-medium">
                  {faq.q}
                  <span className="text-muted-foreground transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-muted-foreground">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
