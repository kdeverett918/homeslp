"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MilestoneTrackerStore {
  checked: string[];
  toggle: (milestoneId: string) => void;
  isChecked: (milestoneId: string) => boolean;
  getCheckedCount: () => number;
}

export const useMilestoneTracker = create<MilestoneTrackerStore>()(
  persist(
    (set, get) => ({
      checked: [],
      toggle: (id) =>
        set((state) => ({
          checked: state.checked.includes(id)
            ? state.checked.filter((c) => c !== id)
            : [...state.checked, id],
        })),
      isChecked: (id) => get().checked.includes(id),
      getCheckedCount: () => get().checked.length,
    }),
    { name: "homeslp-milestone-tracker" }
  )
);
