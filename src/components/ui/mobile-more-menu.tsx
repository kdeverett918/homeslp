"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Baby,
  BookOpen,
  CalendarCheck,
  Clock,
  FileText,
  GraduationCap,
  LayoutGrid,
  Library,
  Menu,
  MessageCircle,
  Newspaper,
  RefreshCw,
  Search,
  Settings,
  Stethoscope,
  TrendingUp,
  UtensilsCrossed,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

import type { LucideIcon } from "lucide-react";

interface MenuLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

interface MenuSection {
  title: string;
  links: MenuLink[];
}

const menuSections: MenuSection[] = [
  {
    title: "Understand",
    links: [
      { href: "/milestones", label: "Milestones", icon: Baby },
      { href: "/check", label: "Quick Check", icon: Search },
      { href: "/blueprints", label: "Learning Plans", icon: BookOpen },
      { href: "/blog", label: "Articles", icon: Newspaper },
    ],
  },
  {
    title: "Do Today",
    links: [
      { href: "/activities", label: "Daily Ideas", icon: Zap },
      { href: "/handouts", label: "Printables", icon: FileText },
      { href: "/resources", label: "Trusted Resources", icon: Library },
    ],
  },
  {
    title: "Track & Support",
    links: [
      { href: "/progress", label: "Progress", icon: TrendingUp },
      { href: "/check-in", label: "Weekly Pulse", icon: CalendarCheck },
      { href: "/doctor-prep", label: "Visit Prep", icon: Stethoscope },
      { href: "/words", label: "Word Tracker", icon: BookOpen },
    ],
  },
  {
    title: "More",
    links: [
      { href: "/sounds", label: "Sounds", icon: Volume2 },
      { href: "/games", label: "Games", icon: LayoutGrid },
      { href: "/between-sessions", label: "Between Sessions", icon: RefreshCw },
      { href: "/waitlist-guide", label: "Waitlist Guide", icon: Clock },
      { href: "/community", label: "Community", icon: MessageCircle },
      { href: "/report", label: "SLP Report", icon: FileText },
      { href: "/recipes", label: "Recipes", icon: UtensilsCrossed },
      { href: "/homeschool", label: "Homeschool", icon: GraduationCap },
      { href: "/settings", label: "Profile & Plan", icon: Settings },
    ],
  },
];

export function MobileMoreMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex flex-1 flex-col items-center gap-1.5 rounded-[1.2rem] py-2 text-[11px] font-medium text-muted-foreground transition-[background-color,color,transform] duration-200 hover:bg-background/80 hover:text-foreground"
      >
        <Menu className="h-5 w-5" />
        More
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="animate-slide-up relative z-10 max-h-[80vh] overflow-y-auto rounded-t-2xl border-t border-border/70 bg-card shadow-[var(--shadow-warm-lg)]">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/50 bg-card px-5 py-4">
              <h2 className="font-heading text-lg font-semibold tracking-tight">
                All Pages
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-white/70 text-foreground shadow-warm-sm transition-colors hover:bg-white"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <div className="space-y-5 px-5 py-5">
              {menuSections.map((section) => (
                <div key={section.title}>
                  <p className="px-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {section.title}
                  </p>
                  <div className="space-y-0.5">
                    {section.links.map((link) => {
                      const Icon = link.icon;
                      const isActive =
                        pathname === link.href ||
                        pathname.startsWith(link.href + "/");

                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                            isActive
                              ? "bg-primary/10 font-semibold text-primary"
                              : "text-foreground hover:bg-white/70"
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-4.5 w-4.5 shrink-0",
                              isActive
                                ? "text-primary"
                                : "text-muted-foreground"
                            )}
                          />
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
