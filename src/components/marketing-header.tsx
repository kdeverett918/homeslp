"use client";

import Link from "next/link";
import { ArrowRight, Heart, Menu, Microscope, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/families", label: "For Parents" },
  { href: "/pricing", label: "Pricing" },
  { href: "/research", label: "Our Standards" },
];

export function MarketingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="border-b border-border/50 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:px-6">
          <span className="inline-flex items-center gap-2">
            <Microscope className="h-3.5 w-3.5 text-primary" />
            Research-backed by licensed SLP review
          </span>
          <span>ASHA + CDC + AAP aligned</span>
          <span>Daily parent-friendly guidance</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/families" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary shadow-warm-sm">
            <Heart className="h-5 w-5 fill-current" />
          </span>
          <span className="min-w-0">
            <span className="block font-heading text-xl font-semibold tracking-tight text-foreground">
              HomeSLP
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              A field guide for child speech, language, feeding, and milestones
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-white/65 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/signup?path=child">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white/70 text-foreground shadow-warm-sm lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background/95 px-4 py-5 shadow-warm-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[1.2rem] border border-border/70 bg-white/70 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild variant="outline">
                <Link href="/login" onClick={() => setOpen(false)}>
                  Log in
                </Link>
              </Button>
              <Button asChild>
                <Link href="/signup?path=child" onClick={() => setOpen(false)}>
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
