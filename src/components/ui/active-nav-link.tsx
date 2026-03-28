"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActiveNavLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function ActiveNavLink({ href, icon: Icon, label }: ActiveNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-primary/10 text-primary font-semibold"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
    >
      <Icon className={cn("h-4 w-4", isActive && "text-primary")} />
      {label}
    </Link>
  );
}

export function ActiveBottomNavLink({ href, icon: Icon, label }: ActiveNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={cn(
        "flex flex-1 flex-col items-center gap-1 py-2 text-xs transition-colors",
        isActive
          ? "text-primary font-semibold"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
      {label}
    </Link>
  );
}
