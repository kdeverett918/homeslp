"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ChildProfile {
  childName: string;
  childAgeMonths: number | null;
  path: "child" | "adult" | null;
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
      setProfile: (profile) => set((state) => ({ ...state, ...profile })),
      reset: () => set({ childName: "", childAgeMonths: null, path: null }),
    }),
    { name: "homeslp-child-profile" }
  )
);
