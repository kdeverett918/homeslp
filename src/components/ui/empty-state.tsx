import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  cta?: { label: string; href: string };
}

export function EmptyState({ icon: Icon, title, description, features, cta }: EmptyStateProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-muted/50 via-background to-muted/30 border p-8 sm:p-12 text-center space-y-5">
      <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div>
        <h2 className="font-heading text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">{description}</p>
      </div>
      {features && features.length > 0 && (
        <ul className="inline-flex flex-col items-start gap-2 text-sm text-left">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      {cta && (
        <Link
          href={cta.href}
          className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-warm-sm transition-colors hover:bg-primary/90"
        >
          {cta.label}
        </Link>
      )}
    </div>
  );
}
