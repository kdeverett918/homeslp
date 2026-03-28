import type { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
}

export function PageHeader({ icon: Icon, title, subtitle, badge, children }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-7 h-7 text-primary shrink-0" />}
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">{title}</h1>
          {badge && (
            <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
              {badge}
            </span>
          )}
        </div>
        {subtitle && <p className="mt-1.5 text-muted-foreground">{subtitle}</p>}
      </div>
      {children && <div className="shrink-0">{children}</div>}
    </div>
  );
}
