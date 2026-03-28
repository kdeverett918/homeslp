"use client";

import Link from "next/link";
import {
  BookOpen,
  Heart,
  Home,
  LayoutGrid,
  MessageCircle,
  Settings,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react";
import { AppProviders } from "@/components/providers";
import { ActiveNavLink, ActiveBottomNavLink } from "@/components/ui/active-nav-link";

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
          <nav className="flex-1 space-y-1 px-3 py-4">
            <ActiveNavLink href="/dashboard" icon={Home} label="Dashboard" />
            <ActiveNavLink href="/blueprints" icon={BookOpen} label="Blueprints" />
            <ActiveNavLink href="/recipes" icon={UtensilsCrossed} label="Recipes" />
            <ActiveNavLink href="/games" icon={LayoutGrid} label="Games" />
            <ActiveNavLink href="/community" icon={MessageCircle} label="Community" />
            <ActiveNavLink href="/progress" icon={TrendingUp} label="Progress" />
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
            <ActiveBottomNavLink href="/blueprints" icon={BookOpen} label="Learn" />
            <ActiveBottomNavLink href="/community" icon={MessageCircle} label="Community" />
            <ActiveBottomNavLink href="/progress" icon={TrendingUp} label="Progress" />
            <ActiveBottomNavLink href="/settings" icon={Settings} label="Settings" />
          </nav>
        </div>
      </div>
    </AppProviders>
  );
}
