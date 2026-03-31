"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

// ── Badge definitions ──────────────────────────────────────────────────────
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // emoji
  requirement: string;
  category: "streak" | "engagement" | "exploration" | "mastery";
}

export const BADGES: Badge[] = [
  // Streak badges
  { id: "first-checkin", name: "First Steps", description: "Completed your first check-in", icon: "🌱", requirement: "Complete 1 check-in", category: "streak" },
  { id: "streak-3", name: "Building Momentum", description: "3 check-ins in a row", icon: "🔥", requirement: "3-week streak", category: "streak" },
  { id: "streak-5", name: "Consistency Champion", description: "5 check-ins in a row", icon: "⭐", requirement: "5-week streak", category: "streak" },
  { id: "streak-8", name: "Unstoppable Parent", description: "8 check-ins in a row", icon: "💪", requirement: "8-week streak", category: "streak" },
  { id: "streak-12", name: "Quarter Champion", description: "12 check-ins in a row", icon: "🏆", requirement: "12-week streak", category: "streak" },

  // Engagement badges
  { id: "checkins-5", name: "Getting the Hang of It", description: "5 total check-ins completed", icon: "📋", requirement: "5 total check-ins", category: "engagement" },
  { id: "checkins-10", name: "Dedicated Parent", description: "10 total check-ins completed", icon: "💜", requirement: "10 total check-ins", category: "engagement" },
  { id: "checkins-20", name: "Super Supporter", description: "20 total check-ins completed", icon: "🌟", requirement: "20 total check-ins", category: "engagement" },

  // Exploration badges (unlocked via check-in answers)
  { id: "tried-mealtime", name: "Mealtime Motivator", description: "Tried a language activity during mealtime", icon: "🍽️", requirement: "Report a mealtime activity", category: "exploration" },
  { id: "tried-play", name: "Play Partner", description: "Practiced speech during play", icon: "🎮", requirement: "Report a play activity", category: "exploration" },
  { id: "tried-bath", name: "Bathtime Babbler", description: "Used bath time for language practice", icon: "🛁", requirement: "Report a bath activity", category: "exploration" },
  { id: "tried-bedtime", name: "Storytime Star", description: "Made bedtime a language moment", icon: "🌙", requirement: "Report a bedtime activity", category: "exploration" },
  { id: "tried-errands", name: "On-the-Go Learner", description: "Practiced during errands or outings", icon: "🚗", requirement: "Report an errands activity", category: "exploration" },
  { id: "explorer-3", name: "Language Explorer", description: "Tried activities in 3+ different settings", icon: "🗺️", requirement: "3 different activity contexts", category: "exploration" },

  // Mastery badges (cross-feature engagement)
  { id: "words-10", name: "Word Collector", description: "Logged 10+ words in the tracker", icon: "📝", requirement: "10 words tracked", category: "mastery" },
  { id: "milestones-10", name: "Milestone Master", description: "Checked off 10+ developmental milestones", icon: "🎯", requirement: "10 milestones checked", category: "mastery" },
  { id: "screener-done", name: "Informed Parent", description: "Completed a developmental screener", icon: "🔍", requirement: "Complete the screener", category: "mastery" },
  { id: "confident", name: "Confidence Boost", description: "Reported feeling confident about supporting your child", icon: "💎", requirement: "Rate confidence 4+/5", category: "mastery" },
];

// ── Level system ───────────────────────────────────────────────────────────
export interface ParentLevel {
  level: number;
  name: string;
  xpRequired: number;
  icon: string;
}

export const PARENT_LEVELS: ParentLevel[] = [
  { level: 1, name: "Curious Parent", xpRequired: 0, icon: "🌱" },
  { level: 2, name: "Active Learner", xpRequired: 50, icon: "📖" },
  { level: 3, name: "Speech Helper", xpRequired: 150, icon: "🗣️" },
  { level: 4, name: "Language Champion", xpRequired: 300, icon: "⭐" },
  { level: 5, name: "Communication Pro", xpRequired: 500, icon: "🏅" },
  { level: 6, name: "Family Advocate", xpRequired: 800, icon: "💪" },
  { level: 7, name: "SLP Partner", xpRequired: 1200, icon: "🤝" },
  { level: 8, name: "HomeSLP Hero", xpRequired: 1800, icon: "🏆" },
];

// XP rewards
const XP_VALUES = {
  checkin: 25,
  streak_bonus_per_week: 5, // extra XP per streak week
  badge_earned: 15,
  new_context_tried: 10,
} as const;

// ── Check-in entry ─────────────────────────────────────────────────────────
export interface CheckInEntry {
  id: string;
  date: string; // ISO date
  weekNumber: number; // which week of the year
  // Reflection answers
  noticedHighlight: string;
  activitiesTried: string[];
  contextsTried: string[]; // mealtime, bath, play, etc.
  confidenceRating: number; // 1-5
  celebrationNote: string;
  // Computed
  xpEarned: number;
  newBadges: string[]; // badge IDs earned from this check-in
}

// ── Store ──────────────────────────────────────────────────────────────────
interface CheckInStore {
  entries: CheckInEntry[];
  earnedBadges: string[];
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  allContextsEver: string[];

  // Actions
  submitCheckIn: (entry: Omit<CheckInEntry, "id" | "weekNumber" | "xpEarned" | "newBadges">) => CheckInEntry;
  getLevel: () => ParentLevel;
  getNextLevel: () => ParentLevel | null;
  getXPProgress: () => number; // 0-100 percent to next level
  getLastCheckIn: () => CheckInEntry | null;
  canCheckInThisWeek: () => boolean;
  getBadgeDetails: (id: string) => Badge | undefined;
}

function getWeekNumber(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - start.getTime();
  return Math.ceil((diff / 86400000 + start.getDay() + 1) / 7);
}

function getWeekKey(date: Date): string {
  return `${date.getFullYear()}-W${getWeekNumber(date)}`;
}

export const useCheckInStore = create<CheckInStore>()(
  persist(
    (set, get) => ({
      entries: [],
      earnedBadges: [],
      totalXP: 0,
      currentStreak: 0,
      longestStreak: 0,
      allContextsEver: [],

      submitCheckIn: (input) => {
        const state = get();
        const now = new Date();
        const weekNum = getWeekNumber(now);

        // Calculate streak
        let newStreak = 1;
        if (state.entries.length > 0) {
          const lastEntry = state.entries[state.entries.length - 1];
          const lastDate = new Date(lastEntry.date);
          const lastWeekKey = getWeekKey(lastDate);
          const thisWeekKey = getWeekKey(now);

          // Check if last check-in was last week (adjacent weeks)
          const lastWeekNum = getWeekNumber(lastDate);
          const lastYear = lastDate.getFullYear();
          const thisYear = now.getFullYear();

          if (lastWeekKey !== thisWeekKey) {
            const isConsecutive =
              (thisYear === lastYear && weekNum === lastWeekNum + 1) ||
              (thisYear === lastYear + 1 && lastWeekNum >= 52 && weekNum === 1);
            newStreak = isConsecutive ? state.currentStreak + 1 : 1;
          } else {
            newStreak = state.currentStreak; // same week, don't change streak
          }
        }

        // Merge new contexts
        const updatedContexts = [...new Set([...state.allContextsEver, ...input.contextsTried])];

        // Calculate new badges
        const newBadgeIds: string[] = [];
        const totalEntries = state.entries.length + 1;

        // Streak badges
        if (!state.earnedBadges.includes("first-checkin")) newBadgeIds.push("first-checkin");
        if (newStreak >= 3 && !state.earnedBadges.includes("streak-3")) newBadgeIds.push("streak-3");
        if (newStreak >= 5 && !state.earnedBadges.includes("streak-5")) newBadgeIds.push("streak-5");
        if (newStreak >= 8 && !state.earnedBadges.includes("streak-8")) newBadgeIds.push("streak-8");
        if (newStreak >= 12 && !state.earnedBadges.includes("streak-12")) newBadgeIds.push("streak-12");

        // Engagement badges
        if (totalEntries >= 5 && !state.earnedBadges.includes("checkins-5")) newBadgeIds.push("checkins-5");
        if (totalEntries >= 10 && !state.earnedBadges.includes("checkins-10")) newBadgeIds.push("checkins-10");
        if (totalEntries >= 20 && !state.earnedBadges.includes("checkins-20")) newBadgeIds.push("checkins-20");

        // Exploration badges
        const contextBadgeMap: Record<string, string> = {
          mealtime: "tried-mealtime",
          play: "tried-play",
          bath: "tried-bath",
          bedtime: "tried-bedtime",
          errands: "tried-errands",
        };
        for (const ctx of input.contextsTried) {
          const badgeId = contextBadgeMap[ctx];
          if (badgeId && !state.earnedBadges.includes(badgeId)) {
            newBadgeIds.push(badgeId);
          }
        }
        if (updatedContexts.length >= 3 && !state.earnedBadges.includes("explorer-3")) {
          newBadgeIds.push("explorer-3");
        }

        // Mastery badges
        if (input.confidenceRating >= 4 && !state.earnedBadges.includes("confident")) {
          newBadgeIds.push("confident");
        }

        // Calculate XP
        const xpEarned =
          XP_VALUES.checkin +
          (newStreak > 1 ? XP_VALUES.streak_bonus_per_week * newStreak : 0) +
          newBadgeIds.length * XP_VALUES.badge_earned +
          input.contextsTried.filter(c => !state.allContextsEver.includes(c)).length * XP_VALUES.new_context_tried;

        const entry: CheckInEntry = {
          ...input,
          id: `ci-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          weekNumber: weekNum,
          xpEarned,
          newBadges: newBadgeIds,
        };

        set({
          entries: [...state.entries, entry],
          earnedBadges: [...state.earnedBadges, ...newBadgeIds],
          totalXP: state.totalXP + xpEarned,
          currentStreak: newStreak,
          longestStreak: Math.max(state.longestStreak, newStreak),
          allContextsEver: updatedContexts,
        });

        return entry;
      },

      getLevel: () => {
        const xp = get().totalXP;
        let current = PARENT_LEVELS[0];
        for (const level of PARENT_LEVELS) {
          if (xp >= level.xpRequired) current = level;
          else break;
        }
        return current;
      },

      getNextLevel: () => {
        const current = get().getLevel();
        return PARENT_LEVELS.find(l => l.level === current.level + 1) ?? null;
      },

      getXPProgress: () => {
        const xp = get().totalXP;
        const current = get().getLevel();
        const next = get().getNextLevel();
        if (!next) return 100;
        const range = next.xpRequired - current.xpRequired;
        const progress = xp - current.xpRequired;
        return Math.min(100, Math.round((progress / range) * 100));
      },

      getLastCheckIn: () => {
        const entries = get().entries;
        return entries.length > 0 ? entries[entries.length - 1] : null;
      },

      canCheckInThisWeek: () => {
        const last = get().getLastCheckIn();
        if (!last) return true;
        const lastWeek = getWeekKey(new Date(last.date));
        const thisWeek = getWeekKey(new Date());
        return lastWeek !== thisWeek;
      },

      getBadgeDetails: (id: string) => BADGES.find(b => b.id === id),
    }),
    { name: "homeslp-checkin" }
  )
);
