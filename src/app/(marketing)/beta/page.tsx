import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, ShieldCheck, Sparkles } from "lucide-react";
import { getBetaModeServer } from "@/lib/beta-server";

export const metadata: Metadata = {
  title: "Beta Preview",
  description:
    "Turn browser-level beta preview on or off to unlock all HomeSLP content without changing production access for every visitor.",
};

export default async function BetaPreviewPage() {
  const betaMode = await getBetaModeServer();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <section className="guide-surface p-8 sm:p-10">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <div className="section-kicker">Beta preview</div>
            <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              See the full site without turning beta mode on for everyone.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground">
              This browser-level preview unlocks the app, bypasses login and paywalls,
              and lets you review new content on the live site before deciding whether
              to enable global beta mode in production.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="soft-panel p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Current state
                </p>
                <p className="mt-3 font-heading text-2xl font-semibold">
                  {betaMode ? "Preview is on" : "Preview is off"}
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {betaMode
                    ? "This browser can open the full HomeSLP app right now."
                    : "Turn preview on to unlock all app content on this browser."}
                </p>
              </div>

              <div className="soft-panel p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  What it does
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                  <li>Unlocks all app content</li>
                  <li>Bypasses login for protected routes</li>
                  <li>Leaves global production access unchanged</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="soft-panel p-5">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                  {betaMode ? <Sparkles className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Browser-only access
                  </p>
                  <h2 className="font-heading text-2xl font-semibold">
                    {betaMode ? "Preview enabled" : "Enable preview"}
                  </h2>
                </div>
              </div>

              <p className="text-sm leading-7 text-muted-foreground">
                {betaMode
                  ? "You can jump straight into the dashboard or turn preview off when you are done reviewing."
                  : "Use this when live production is up but you want to inspect the full content library without enabling beta mode for everyone."}
              </p>

              <div className="grid gap-3">
                {betaMode ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-warm-sm"
                    >
                      Open dashboard
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/api/beta/disable?redirect=/families"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-white/75 px-5 py-3 text-sm font-semibold text-foreground"
                    >
                      Turn preview off
                    </Link>
                  </>
                ) : (
                  <Link
                    href="/api/beta/enable?redirect=/dashboard"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-warm-sm"
                  >
                    Turn preview on
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>

              <div className="rounded-[1.2rem] border border-border/70 bg-white/70 p-4">
                <p className="flex items-start gap-2 text-sm leading-7 text-muted-foreground">
                  <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  Global beta mode still works through `NEXT_PUBLIC_BETA_MODE=true`. This page is
                  just the safer per-browser option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
