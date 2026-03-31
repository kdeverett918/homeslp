import Link from "next/link";
import { ArrowRight, Heart, Microscope, ShieldCheck } from "lucide-react";
import { MarketingHeader } from "@/components/marketing-header";
import { Button } from "@/components/ui/button";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MarketingHeader />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border/70 bg-white/45">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="guide-surface px-6 py-8 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="section-kicker">Built for parents who want clear next steps</div>
                  <Link href="/families" className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary shadow-warm-sm">
                      <Heart className="h-5 w-5 fill-current" />
                    </span>
                    <span>
                      <span className="block font-heading text-2xl font-semibold tracking-tight">
                        HomeSLP
                      </span>
                      <span className="block text-sm text-muted-foreground">
                        Whole-child developmental guidance, reviewed by a licensed SLP
                      </span>
                    </span>
                  </Link>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                  HomeSLP helps families understand what is typical, what is worth watching,
                  and what to do next across speech, language, play, feeding, and day-to-day
                  routines. We prioritize practical parent coaching and clear escalation paths
                  when it is time to talk with a pediatrician or speech-language pathologist.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="trust-pill">
                    <Microscope className="h-3.5 w-3.5 text-primary" />
                    Research-backed editorial review
                  </span>
                  <span className="trust-pill">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                    Educational, not diagnostic
                  </span>
                </div>
              </div>

              <div className="soft-panel p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Start here
                </p>
                <div className="mt-4 grid gap-3">
                  {[
                    { href: "/families", label: "Explore the parent guide" },
                    { href: "/check", label: "Try the quick milestone check" },
                    { href: "/research", label: "Read our research standards" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between rounded-[1.2rem] border border-border/70 bg-white/75 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/login">Log in</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/signup?path=child">Start Free Trial</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="story-divider my-8" />

            <div className="grid gap-8 text-sm text-muted-foreground md:grid-cols-4">
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">For Parents</h3>
                <ul className="mt-3 space-y-2">
                  <li><Link href="/families" className="ink-link">Parent guide</Link></li>
                  <li><Link href="/milestones" className="ink-link">Milestones</Link></li>
                  <li><Link href="/check" className="ink-link">Quick check</Link></li>
                  <li><Link href="/resources" className="ink-link">Trusted resources</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">Research & Review</h3>
                <ul className="mt-3 space-y-2">
                  <li><Link href="/research" className="ink-link">Editorial standards</Link></li>
                  <li><Link href="/disclaimer" className="ink-link">Medical disclaimer</Link></li>
                  <li><Link href="/privacy" className="ink-link">Privacy policy</Link></li>
                  <li><Link href="/terms" className="ink-link">Terms of service</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">Plans & Access</h3>
                <ul className="mt-3 space-y-2">
                  <li><Link href="/beta" className="ink-link">Beta preview</Link></li>
                  <li><Link href="/pricing" className="ink-link">Pricing</Link></li>
                  <li><Link href="/login" className="ink-link">Log in</Link></li>
                  <li><a href="mailto:hello@homeslp.com" className="ink-link">hello@homeslp.com</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">Important Note</h3>
                <p className="mt-3 leading-7">
                  HomeSLP provides general educational guidance. It does not replace a medical
                  evaluation and does not create a patient-provider relationship.
                </p>
              </div>
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} HomeSLP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
