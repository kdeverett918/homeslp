"use client";

import { Flame, Star, BookOpen, Trophy, TrendingUp, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { ProgressRing } from "@/components/ui/progress-ring";

const MOCK_STATS = {
  streak: 5,
  totalXp: 340,
  blueprintsCompleted: 3,
  totalBlueprints: 8,
};

const WEEKLY_ACTIVITY = [true, true, false, true, true, false, true]; // Mon-Sun

const BLUEPRINTS = [
  { title: "Week 1: First Words", completed: true },
  { title: "Week 2: Everyday Routines", completed: true },
  { title: "Week 3: Play-Based Learning", completed: true },
  { title: "Week 4: Building Sentences", completed: false },
  { title: "Week 5: Reading Together", completed: false },
  { title: "Week 6: Songs and Music", completed: false },
  { title: "Week 7: Social Words", completed: false },
  { title: "Week 8: Putting It All Together", completed: false },
];

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

export default function ProgressPage() {
  const completionPercent = Math.round((MOCK_STATS.blueprintsCompleted / MOCK_STATS.totalBlueprints) * 100);

  return (
    <div className="max-w-3xl space-y-8">
      <FadeIn>
        <div className="flex items-center gap-3">
          <TrendingUp className="w-7 h-7 text-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">Your Progress</h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">Track your journey and celebrate milestones.</p>
      </FadeIn>

      {/* Stats Row */}
      <StaggerChildren className="grid grid-cols-3 gap-4">
        <StaggerItem>
          <div className="rounded-xl border bg-card p-5 text-center space-y-2">
            <div className="mx-auto w-16 h-16 flex items-center justify-center">
              <ProgressRing value={Math.min((MOCK_STATS.streak / 7) * 100, 100)} size={64} color="hsl(var(--destructive))" label={`${MOCK_STATS.streak}`} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Day Streak</p>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                <span className="font-heading font-bold text-sm">{MOCK_STATS.streak} days</span>
              </div>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="rounded-xl border bg-card p-5 text-center space-y-2">
            <div className="mx-auto w-16 h-16 flex items-center justify-center">
              <ProgressRing value={completionPercent} size={64} label={`${completionPercent}%`} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Completed</p>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <BookOpen className="w-3.5 h-3.5 text-primary" />
                <span className="font-heading font-bold text-sm">{MOCK_STATS.blueprintsCompleted}/{MOCK_STATS.totalBlueprints}</span>
              </div>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="rounded-xl border bg-card p-5 text-center space-y-2">
            <div className="mx-auto w-16 h-16 flex items-center justify-center">
              <ProgressRing value={Math.min((MOCK_STATS.totalXp / 500) * 100, 100)} size={64} color="hsl(150, 60%, 40%)" label={`${MOCK_STATS.totalXp}`} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total XP</p>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <Star className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-heading font-bold text-sm">{MOCK_STATS.totalXp} XP</span>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerChildren>

      {/* Weekly Activity */}
      <FadeIn delay={0.2}>
        <div className="rounded-xl border bg-card p-5">
          <h2 className="font-heading font-semibold text-sm mb-3">This Week</h2>
          <div className="flex items-center gap-2 justify-between">
            {DAYS.map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${
                  WEEKLY_ACTIVITY[i]
                    ? "bg-primary/15 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {WEEKLY_ACTIVITY[i] ? <CheckCircle2 className="w-5 h-5" /> : "\u2014"}
                </div>
                <span className="text-[10px] text-muted-foreground font-medium">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Blueprint Checklist */}
      <FadeIn delay={0.3}>
        <div className="rounded-xl border bg-card p-5">
          <h2 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-primary" /> Blueprint Roadmap
          </h2>
          <div className="space-y-2">
            {BLUEPRINTS.map((bp, i) => (
              <div key={i} className={`flex items-center gap-3 rounded-lg p-2.5 text-sm ${bp.completed ? "bg-sage-50" : ""}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  bp.completed ? "bg-sage-500 text-white" : "border-2 border-muted"
                }`}>
                  {bp.completed && <CheckCircle2 className="w-4 h-4" />}
                </div>
                <span className={bp.completed ? "text-sage-700 font-medium" : "text-muted-foreground"}>{bp.title}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
