"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StartMenuFocus, StartMenuGoal } from "@/types/start-menu";

interface ChildProfile {
  childName: string;
  childAgeMonths: number | null;
  path: "child" | null;
  parentFocus: StartMenuFocus | null;
  parentGoal: StartMenuGoal | null;
}

interface ChildProfileStore extends ChildProfile {
  setProfile: (profile: Partial<ChildProfile>) => void;
  reset: () => void;
}

export const useChildProfile = create<ChildProfileStore>()(
  persist(
    (set) => ({
      childName: "",
      childAgeMonths: null,
      path: null,
      parentFocus: null,
      parentGoal: null,
      setProfile: (profile) => set((state) => ({ ...state, ...profile })),
      reset: () =>
        set({
          childName: "",
          childAgeMonths: null,
          path: null,
          parentFocus: null,
          parentGoal: null,
        }),
    }),
    { name: "homeslp-child-profile" }
  )
);
