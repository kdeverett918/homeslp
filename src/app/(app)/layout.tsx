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

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders>
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:bg-card">
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <Heart className="h-6 w-6 text-primary fill-primary" />
          <span className="font-heading text-xl font-bold">HomeSLP</span>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {[
            { href: "/dashboard", icon: Home, label: "Dashboard" },
            { href: "/blueprints", icon: BookOpen, label: "Blueprints" },
            { href: "/recipes", icon: UtensilsCrossed, label: "Recipes" },
            { href: "/games", icon: LayoutGrid, label: "Games" },
            { href: "/community", icon: MessageCircle, label: "Community" },
            { href: "/progress", icon: TrendingUp, label: "Progress" },
            { href: "/settings", icon: Settings, label: "Settings" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Mobile header */}
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:hidden">
          <Heart className="h-5 w-5 text-primary fill-primary" />
          <span className="font-heading text-lg font-bold">HomeSLP</span>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>

        {/* Mobile bottom nav */}
        <nav className="flex border-t bg-background lg:hidden">
          {[
            { href: "/dashboard", icon: Home, label: "Home" },
            { href: "/blueprints", icon: BookOpen, label: "Learn" },
            { href: "/community", icon: MessageCircle, label: "Community" },
            { href: "/progress", icon: TrendingUp, label: "Progress" },
            { href: "/settings", icon: Settings, label: "Settings" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-1 flex-col items-center gap-1 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
    </AppProviders>
  );
}
