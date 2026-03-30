"use client";

interface FilterPillsProps<T extends string> {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
  formatLabel?: (value: T) => string;
}

export function FilterPills<T extends string>({
  options,
  value,
  onChange,
  formatLabel,
}: FilterPillsProps<T>) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
            value === option
              ? "bg-primary text-primary-foreground shadow-warm-sm"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {formatLabel ? formatLabel(option) : option}
        </button>
      ))}
    </div>
  );
}
