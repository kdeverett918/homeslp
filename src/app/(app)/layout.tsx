"use client";

import Link from "next/link";
import {
  Baby,
  BookOpen,
  CalendarCheck,
  FileText,
  Heart,
  Home,
  Library,
  Newspaper,
  Search,
  Settings,
  Stethoscope,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AppProviders } from "@/components/providers";
import { ActiveBottomNavLink, ActiveNavLink } from "@/components/ui/active-nav-link";

function NavSectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-1 pb-2 pt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground first:pt-0">
      {children}
    </p>
  );
}

function ExploreLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-[1rem] border border-border/70 bg-white/70 px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/25 hover:text-primary"
    >
      {label}
    </Link>
  );
}

const navSections = [
  {
    title: "Today",
    items: [
      {
        href: "/dashboard",
        icon: Home,
        label: "Today",
        description: "Your tip, milestone snapshot, and next best action.",
      },
      {
        href: "/check-in",
        icon: CalendarCheck,
        label: "Weekly pulse",
        description: "Notice small changes and build confidence over time.",
      },
    ],
  },
  {
    title: "Understand",
    items: [
      {
        href: "/milestones",
        icon: Baby,
        label: "Milestones",
        description: "Age-based guidance across speech, language, social, and feeding.",
      },
      {
        href: "/check",
        icon: Search,
        label: "Quick check",
        description: "Screen concerns and organize what you are noticing.",
      },
      {
        href: "/blueprints",
        icon: BookOpen,
        label: "Learning plans",
        description: "Weekly coaching for what to model and why it matters.",
      },
      {
        href: "/blog",
        icon: Newspaper,
        label: "Articles",
        description: "Evidence-based reads on speech, language, and development.",
      },
    ],
  },
  {
    title: "Do Today",
    items: [
      {
        href: "/activities",
        icon: Zap,
        label: "Daily ideas",
        description: "Routine-based activities you can use right away.",
      },
      {
        href: "/handouts",
        icon: FileText,
        label: "Printables",
        description: "Fridge-ready reminders, handouts, and carryover sheets.",
      },
      {
        href: "/resources",
        icon: Library,
        label: "Trusted resources",
        description: "Clinician-reviewed creators, communities, and guides.",
      },
    ],
  },
  {
    title: "Track & Support",
    items: [
      {
        href: "/progress",
        icon: TrendingUp,
        label: "Progress",
        description: "Track wins, concerns, and what has changed.",
      },
      {
        href: "/doctor-prep",
        icon: Stethoscope,
        label: "Visit prep",
        description: "Turn observations into a clearer pediatrician or SLP conversation.",
      },
      {
        href: "/settings",
        icon: Settings,
        label: "Profile & plan",
        description: "Update your path, billing, and saved details.",
      },
    ],
  },
];

const exploreLinks = [
  { href: "/sounds", label: "Sounds" },
  { href: "/games", label: "Games" },
  { href: "/words", label: "Word tracker" },
  { href: "/waitlist-guide", label: "Waitlist guide" },
  { href: "/between-sessions", label: "Between sessions" },
  { href: "/community", label: "Community" },
  { href: "/report", label: "SLP report" },
  { href: "/recipes", label: "Recipes" },
  { href: "/homeschool", label: "Homeschool" },
];

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders>
      <div className="min-h-screen bg-transparent lg:grid lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="hidden border-r border-border/70 bg-white/35 px-4 py-4 backdrop-blur-xl lg:flex lg:flex-col">
          <div className="guide-surface p-5">
            <div className="relative z-10 space-y-4">
              <Link href="/dashboard" className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary shadow-warm-sm">
                  <Heart className="h-5 w-5 fill-current" />
                </span>
                <span>
                  <span className="block font-heading text-2xl font-semibold tracking-tight">HomeSLP</span>
                  <span className="block text-xs text-muted-foreground">
                    Daily speech + milestone guide
                  </span>
                </span>
              </Link>

              <div className="field-note p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Parent-first navigation
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Start with what matters today, then move into milestones, practice, and support.
                </p>
              </div>
            </div>
          </div>

          <nav className="mt-5 flex-1 overflow-y-auto pr-1">
            {navSections.map((section) => (
              <div key={section.title}>
                <NavSectionHeader>{section.title}</NavSectionHeader>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <ActiveNavLink
                      key={item.href}
                      href={item.href}
                      icon={item.icon}
                      label={item.label}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-6 soft-panel p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                More to explore
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {exploreLinks.map((item) => (
                  <ExploreLink key={item.href} href={item.href} label={item.label} />
                ))}
              </div>
            </div>
          </nav>
        </aside>

        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 px-4 py-3 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between gap-4">
              <Link href="/dashboard" className="flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary shadow-warm-sm">
                  <Heart className="h-4.5 w-4.5 fill-current" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-heading text-xl font-semibold tracking-tight">
                    HomeSLP
                  </span>
                  <span className="block truncate text-[11px] text-muted-foreground">
                    Today, milestones, and parent support
                  </span>
                </span>
              </Link>

              <Link
                href="/settings"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-white/70 text-foreground shadow-warm-sm"
              >
                <Settings className="h-4.5 w-4.5" />
              </Link>
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {[
                { href: "/milestones", label: "Milestones" },
                { href: "/check", label: "Quick check" },
                { href: "/resources", label: "Resources" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="shrink-0 rounded-full border border-border/70 bg-white/70 px-3 py-2 text-xs font-semibold text-foreground shadow-warm-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </header>

          <main className="flex-1 px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:py-8">
            <div className="mx-auto w-full max-w-7xl">{children}</div>
          </main>

          <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border/70 bg-background/88 px-3 py-2 backdrop-blur-xl lg:hidden">
            <div className="mx-auto grid max-w-3xl grid-cols-5 gap-2">
              <ActiveBottomNavLink href="/dashboard" icon={Home} label="Today" />
              <ActiveBottomNavLink href="/milestones" icon={Baby} label="Milestones" />
              <ActiveBottomNavLink href="/check" icon={Search} label="Check" />
              <ActiveBottomNavLink href="/activities" icon={Zap} label="Ideas" />
              <ActiveBottomNavLink href="/resources" icon={Library} label="Library" />
            </div>
          </nav>
        </div>
      </div>
    </AppProviders>
  );
}
