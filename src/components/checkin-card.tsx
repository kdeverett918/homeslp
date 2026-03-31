"use client";

import Link from "next/link";
import { Flame, ArrowRight, Heart, Star, Trophy, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useCheckInStore } from "@/lib/stores/checkin-store";
import { ProgressRing } from "@/components/ui/progress-ring";

export function CheckInCard() {
  const store = useCheckInStore();
  const canCheckIn = store.canCheckInThisWeek();
  const level = store.getLevel();
  const nextLevel = store.getNextLevel();
  const xpProgress = store.getXPProgress();

  // First time — warm intro
  if (store.entries.length === 0) {
    return (
      <Link
        href="/check-in"
        className="group block rounded-2xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-rose-50/80 to-sage-50/80 p-5 transition-all hover:border-primary/50 hover:shadow-warm-md"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h3 className="font-heading font-bold text-sm">Start Your Parent Journey</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Quick weekly check-ins help you notice your child&apos;s progress, build confidence, and earn badges along the way.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-1">
              Take your first check-in <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/check-in"
      className="group block rounded-2xl border bg-card p-5 transition-all hover:shadow-warm-md hover:border-primary/30"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          {store.currentStreak > 0 ? (
            <>
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="font-heading text-lg font-bold text-orange-500">{store.currentStreak}</span>
              <span className="text-xs text-muted-foreground">week streak</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xs text-muted-foreground">Start a new streak!</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">{level.icon}</span>
          <span className="text-xs font-medium">{level.name}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ProgressRing value={xpProgress} size={52} label={`${store.totalXP}`} />
        <div className="flex-1 space-y-1">
          {nextLevel && (
            <p className="text-[10px] text-muted-foreground">
              {nextLevel.xpRequired - store.totalXP} XP to {nextLevel.icon} {nextLevel.name}
            </p>
          )}
          <div className="flex gap-1">
            {store.earnedBadges.slice(-4).map(bId => {
              const badge = store.getBadgeDetails(bId);
              return badge ? (
                <span key={bId} className="text-sm" title={badge.name}>{badge.icon}</span>
              ) : null;
            })}
            {store.earnedBadges.length > 4 && (
              <span className="text-xs text-muted-foreground">+{store.earnedBadges.length - 4}</span>
            )}
          </div>
        </div>
        <div className={`rounded-lg px-3 py-2 text-xs font-medium ${
          canCheckIn
            ? "bg-primary text-primary-foreground"
            : "bg-sage-100 text-sage-700"
        }`}>
          {canCheckIn ? (
            <span className="flex items-center gap-1">Check In <ArrowRight className="w-3 h-3" /></span>
          ) : (
            <span className="flex items-center gap-1"><Star className="w-3 h-3" /> Done!</span>
          )}
        </div>
      </div>
    </Link>
  );
}
