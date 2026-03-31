"use client";

import { Flame, Star, BookOpen, Trophy, TrendingUp, CheckCircle2, MessageCircle, CalendarCheck, ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { ProgressRing } from "@/components/ui/progress-ring";
import { useWordTracker } from "@/lib/stores/word-tracker";
import { useMilestoneTracker } from "@/lib/stores/milestone-tracker";
import { useCheckInStore, BADGES } from "@/lib/stores/checkin-store";
import { useChildProfile } from "@/lib/stores/child-profile";
import { pediatricBlueprints } from "@/data/blueprints/pediatric";
import Link from "next/link";

export default function ProgressPage() {
  const { getWordCount, words } = useWordTracker();
  const { getCheckedCount } = useMilestoneTracker();
  const checkInStore = useCheckInStore();
  const { childName } = useChildProfile();

  const wordCount = getWordCount();
  const milestoneCount = getCheckedCount();
  const blueprints = pediatricBlueprints;
  const level = checkInStore.getLevel();

  // Calculate word growth milestones
  const wordMilestones = [
    { threshold: 1, label: "First word logged!" },
    { threshold: 10, label: "10 words" },
    { threshold: 25, label: "25 words" },
    { threshold: 50, label: "50 words — word explosion territory!" },
    { threshold: 100, label: "100 words" },
    { threshold: 200, label: "200 words" },
  ];
  const nextWordMilestone = wordMilestones.find(m => wordCount < m.threshold);
  const wordsToNext = nextWordMilestone ? nextWordMilestone.threshold - wordCount : 0;

  // Recent words (last 5)
  const recentWords = [...words].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()).slice(0, 5);

  return (
    <div className="max-w-3xl space-y-8">
      <FadeIn>
        <div className="flex items-center gap-3">
          <TrendingUp className="w-7 h-7 text-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">Your Progress</h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">
          {childName ? `Tracking ${childName}'s journey` : "Track your journey and celebrate milestones."}
        </p>
      </FadeIn>

      {/* Stats Row */}
      <StaggerChildren className="grid grid-cols-3 gap-4">
        <StaggerItem>
          <div className="rounded-xl border bg-card p-5 text-center space-y-2">
            <div className="mx-auto w-16 h-16 flex items-center justify-center">
              <ProgressRing value={Math.min((wordCount / 50) * 100, 100)} size={64} label={`${wordCount}`} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Words Tracked</p>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <MessageCircle className="w-3.5 h-3.5 text-primary" />
                <span className="font-heading font-bold text-sm">{wordCount} word{wordCount !== 1 ? "s" : ""}</span>
              </div>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="rounded-xl border bg-card p-5 text-center space-y-2">
            <div className="mx-auto w-16 h-16 flex items-center justify-center">
              <ProgressRing value={Math.min((milestoneCount / 20) * 100, 100)} size={64} color="hsl(150, 60%, 40%)" label={`${milestoneCount}`} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Milestones Checked</p>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage-600" />
                <span className="font-heading font-bold text-sm">{milestoneCount} checked</span>
              </div>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="rounded-xl border bg-card p-5 text-center space-y-2">
            <div className="mx-auto w-16 h-16 flex items-center justify-center">
              <ProgressRing
                value={Math.min((checkInStore.entries.length / 12) * 100, 100)}
                size={64}
                color="hsl(350, 55%, 55%)"
                label={`${checkInStore.entries.length}`}
              />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Check-Ins</p>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <CalendarCheck className="w-3.5 h-3.5 text-primary" />
                <span className="font-heading font-bold text-sm">{checkInStore.entries.length} done</span>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerChildren>

      {/* Word Progress */}
      <FadeIn delay={0.2}>
        <div className="rounded-xl border bg-card p-5 space-y-4">
          <h2 className="font-heading font-semibold text-sm flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500" /> Word Tracker Progress
          </h2>
          {wordCount === 0 ? (
            <div className="text-center py-4 space-y-2">
              <p className="text-sm text-muted-foreground">No words tracked yet.</p>
              <Link href="/words" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Start Tracking Words
              </Link>
            </div>
          ) : (
            <>
              {nextWordMilestone && (
                <div className="rounded-lg bg-primary/5 p-3">
                  <p className="text-xs text-muted-foreground">
                    Next milestone: <strong className="text-foreground">{nextWordMilestone.label}</strong> — {wordsToNext} word{wordsToNext !== 1 ? "s" : ""} to go!
                  </p>
                  <div className="h-2 bg-muted rounded-full overflow-hidden mt-2">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${(wordCount / nextWordMilestone.threshold) * 100}%` }}
                    />
                  </div>
                </div>
              )}
              {recentWords.length > 0 && (
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Recently added:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {recentWords.map(w => (
                      <span key={w.id} className="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-700">
                        {w.word}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </FadeIn>

      {/* Milestone Progress */}
      <FadeIn delay={0.25}>
        <div className="rounded-xl border bg-card p-5 space-y-3">
          <h2 className="font-heading font-semibold text-sm flex items-center gap-2">
            <Trophy className="w-4 h-4 text-primary" /> Milestone Tracking
          </h2>
          {milestoneCount === 0 ? (
            <div className="text-center py-4 space-y-2">
              <p className="text-sm text-muted-foreground">No milestones checked off yet.</p>
              <Link href="/milestones" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Check Milestones
              </Link>
            </div>
          ) : (
            <div className="rounded-lg bg-sage-50 p-3">
              <p className="text-sm text-sage-700">
                <strong>{milestoneCount}</strong> milestone{milestoneCount !== 1 ? "s" : ""} checked off!{" "}
                <Link href="/milestones" className="text-primary hover:underline">View all milestones</Link>
              </p>
            </div>
          )}
        </div>
      </FadeIn>

      {/* Check-In Journey (child path) */}
      <FadeIn delay={0.28}>
        <div className="rounded-xl border bg-card p-5 space-y-4">
          <h2 className="font-heading font-semibold text-sm flex items-center gap-2">
            <CalendarCheck className="w-4 h-4 text-primary" /> Parent Journey
          </h2>
          {checkInStore.entries.length === 0 ? (
            <div className="text-center py-4 space-y-2">
              <p className="text-sm text-muted-foreground">Start weekly check-ins to track your journey.</p>
              <Link href="/check-in" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                First Check-In <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-4 rounded-lg bg-muted/40 p-3">
                <span className="text-2xl">{level.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{level.name}</p>
                  <p className="text-[10px] text-muted-foreground">{checkInStore.totalXP} XP · {checkInStore.entries.length} check-ins</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <Flame className={`w-4 h-4 ${checkInStore.currentStreak > 0 ? "text-orange-500" : "text-muted-foreground/30"}`} />
                  <span className="font-heading font-bold text-sm">{checkInStore.currentStreak}</span>
                </div>
              </div>
              {checkInStore.earnedBadges.length > 0 && (
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Badges earned ({checkInStore.earnedBadges.length}/{BADGES.length}):</p>
                  <div className="flex flex-wrap gap-1.5">
                    {checkInStore.earnedBadges.map(bId => {
                      const badge = BADGES.find(b => b.id === bId);
                      return badge ? (
                        <span key={bId} className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800" title={badge.description}>
                          {badge.icon} {badge.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
              <Link href="/check-in" className="text-sm text-primary hover:underline flex items-center gap-1">
                View full journey <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      </FadeIn>

      {/* Blueprint Checklist */}
      <FadeIn delay={0.3}>
        <div className="rounded-xl border bg-card p-5">
          <h2 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" /> Blueprint Roadmap
          </h2>
          <div className="space-y-2">
            {blueprints.map((bp) => (
              <Link
                key={bp.id}
                href={`/blueprints/${bp.slug}`}
                className="flex items-center gap-3 rounded-lg p-2.5 text-sm hover:bg-muted/50 transition-colors"
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 border-muted">
                  <span className="text-[10px] font-bold text-muted-foreground">{bp.weekNumber}</span>
                </div>
                <span className="text-muted-foreground">Week {bp.weekNumber}: {bp.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
