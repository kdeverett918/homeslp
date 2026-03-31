"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Baby,
  BookOpen,
  CalendarCheck,
  FileText,
  Home,
  Library,
  Newspaper,
  Search,
  Settings,
  Stethoscope,
  TrendingUp,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  baby: Baby,
  "book-open": BookOpen,
  "calendar-check": CalendarCheck,
  "file-text": FileText,
  home: Home,
  library: Library,
  newspaper: Newspaper,
  search: Search,
  settings: Settings,
  stethoscope: Stethoscope,
  "trending-up": TrendingUp,
  zap: Zap,
};

type IconName = keyof typeof icons;

interface ActiveNavLinkProps {
  href: string;
  icon: IconName;
  label: string;
  description?: string;
}

export function ActiveNavLink({ href, icon, label, description }: ActiveNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");
  const Icon = icons[icon];

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-start gap-3 rounded-[1.35rem] border px-3.5 py-3 text-sm transition-[transform,background-color,border-color,box-shadow,color] duration-200 ease-out",
        isActive
          ? "border-primary/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,239,231,0.95))] text-foreground shadow-warm-md"
          : "border-transparent text-muted-foreground hover:border-border/80 hover:bg-white/70 hover:text-foreground"
      )}
    >
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border transition-colors",
          isActive
            ? "border-primary/20 bg-primary/12 text-primary"
            : "border-border/70 bg-background/70 text-muted-foreground group-hover:text-foreground"
        )}
      >
        <Icon className="h-4.5 w-4.5" />
      </span>
      <span className="min-w-0">
        <span className={cn("block font-semibold", isActive && "text-foreground")}>{label}</span>
        {description ? (
          <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
            {description}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export function ActiveBottomNavLink({ href, icon, label }: ActiveNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");
  const Icon = icons[icon];

  return (
    <Link
      href={href}
      className={cn(
        "flex flex-1 flex-col items-center gap-1.5 rounded-[1.2rem] py-2 text-[11px] font-medium transition-[background-color,color,transform] duration-200",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-background/80 hover:text-foreground"
      )}
    >
      <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
      {label}
    </Link>
  );
}
