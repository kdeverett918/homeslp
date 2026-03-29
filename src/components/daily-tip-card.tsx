"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Lightbulb, CheckCircle2 } from "lucide-react";
import type { DailyTip } from "@/data/daily-tips";

function getTodaysTip(tips: DailyTip[], path: string, ageMonths: number | null): DailyTip | null {
  // Filter by path and age range
  const eligible = tips.filter(t => {
    if (t.path !== path) return false;
    if (ageMonths !== null && (ageMonths < t.ageRangeStart || ageMonths > t.ageRangeEnd)) return false;
    return true;
  });
  if (eligible.length === 0) return tips[0] ?? null;
  // Deterministic daily selection based on day of year
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return eligible[dayOfYear % eligible.length];
}

interface DailyTipCardProps {
  tips: DailyTip[];
  path: string;
  ageMonths: number | null;
}

export function DailyTipCard({ tips, path, ageMonths }: DailyTipCardProps) {
  const tip = useMemo(() => getTodaysTip(tips, path, ageMonths), [tips, path, ageMonths]);
  if (!tip) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-gradient-to-br from-primary/5 via-rose-50/50 to-sage-50/50 border border-primary/10 p-5 space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-xs font-medium text-primary">Today's Tip</p>
            <p className="font-heading font-semibold text-sm">{tip.title}</p>
          </div>
        </div>
        <span className="text-[10px] text-muted-foreground capitalize rounded-full bg-muted px-2 py-0.5">{tip.context}</span>
      </div>
      <p className="text-sm">{tip.technique}</p>
      <div className="rounded-lg bg-background/80 p-3 text-sm text-muted-foreground italic">
        {tip.example}
      </div>
    </motion.div>
  );
}
