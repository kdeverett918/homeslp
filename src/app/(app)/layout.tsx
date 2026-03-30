"use client";

import Link from "next/link";
import {
  Baby,
  BookOpen,
  Clock,
  FileText,
  GraduationCap,
  Heart,
  Home,
  LayoutGrid,
  Library,
  MessageCircle,
  RefreshCw,
  Search,
  Settings,
  Stethoscope,
  TrendingUp,
  UtensilsCrossed,
  Volume2,
  Zap,
} from "lucide-react";
import { AppProviders } from "@/components/providers";
import { ActiveNavLink, ActiveBottomNavLink } from "@/components/ui/active-nav-link";

function NavSectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-3 pt-5 pb-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider first:pt-0">
      {children}
    </p>
  );
}

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders>
      <div className="flex min-h-screen">
        {/* Desktop sidebar */}
        <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:bg-gradient-to-b lg:from-card lg:to-card/95">
          <div className="flex h-16 items-center gap-2 border-b px-6">
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <span className="font-heading text-xl font-bold">HomeSLP</span>
          </div>
          <nav className="flex-1 overflow-y-auto space-y-0.5 px-3 py-4">
            <ActiveNavLink href="/dashboard" icon={Home} label="Dashboard" />

            <NavSectionHeader>Learn</NavSectionHeader>
            <ActiveNavLink href="/blueprints" icon={BookOpen} label="Blueprints" />
            <ActiveNavLink href="/resources" icon={Library} label="Resource Library" />
            <ActiveNavLink href="/milestones" icon={Baby} label="Milestones" />
            <ActiveNavLink href="/sounds" icon={Volume2} label="Sounds" />

            <NavSectionHeader>Do</NavSectionHeader>
            <ActiveNavLink href="/activities" icon={Zap} label="Quick Activities" />
            <ActiveNavLink href="/games" icon={LayoutGrid} label="Games" />

            <NavSectionHeader>Guides</NavSectionHeader>
            <ActiveNavLink href="/waitlist-guide" icon={Clock} label="Waitlist Guide" />
            <ActiveNavLink href="/between-sessions" icon={RefreshCw} label="Between Sessions" />
            <ActiveNavLink href="/handouts" icon={FileText} label="Handouts" />
            <ActiveNavLink href="/homeschool" icon={GraduationCap} label="Homeschool" />

            <NavSectionHeader>Tools</NavSectionHeader>
            <ActiveNavLink href="/check" icon={Search} label="Is My Child On Track?" />
            <ActiveNavLink href="/words" icon={BookOpen} label="Word Tracker" />
            <ActiveNavLink href="/doctor-prep" icon={Stethoscope} label="Doctor Prep" />
            <ActiveNavLink href="/report" icon={FileText} label="SLP Report" />
            <ActiveNavLink href="/recipes" icon={UtensilsCrossed} label="Recipes" />

            <NavSectionHeader>You</NavSectionHeader>
            <ActiveNavLink href="/progress" icon={TrendingUp} label="Progress" />
            <ActiveNavLink href="/community" icon={MessageCircle} label="Community" />
            <ActiveNavLink href="/settings" icon={Settings} label="Settings" />
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:hidden">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <span className="font-heading text-lg font-bold">HomeSLP</span>
          </header>

          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {children}
          </main>

          {/* Mobile bottom nav */}
          <nav className="flex border-t bg-background lg:hidden">
            <ActiveBottomNavLink href="/dashboard" icon={Home} label="Home" />
            <ActiveBottomNavLink href="/check" icon={Search} label="Check" />
            <ActiveBottomNavLink href="/words" icon={BookOpen} label="Words" />
            <ActiveBottomNavLink href="/activities" icon={Zap} label="Activities" />
            <ActiveBottomNavLink href="/settings" icon={Settings} label="More" />
          </nav>
        </div>
      </div>
    </AppProviders>
  );
}
