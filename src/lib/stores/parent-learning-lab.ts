"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ParentLearningLabStore {
  completedLessonIds: string[];
  lessonOutcomeById: Record<string, string>;
  activeLessonId: string | null;
  setActiveLesson: (lessonId: string) => void;
  setOutcome: (lessonId: string, outcomeId: string) => void;
  clearOutcome: (lessonId: string) => void;
  toggleCompleted: (lessonId: string) => void;
  reset: () => void;
}

export const useParentLearningLab = create<ParentLearningLabStore>()(
  persist(
    (set) => ({
      completedLessonIds: [],
      lessonOutcomeById: {},
      activeLessonId: null,
      setActiveLesson: (lessonId) => set({ activeLessonId: lessonId }),
      setOutcome: (lessonId, outcomeId) =>
        set((state) => ({
          lessonOutcomeById: {
            ...state.lessonOutcomeById,
            [lessonId]: outcomeId,
          },
        })),
      clearOutcome: (lessonId) =>
        set((state) => {
          const nextOutcomes = { ...state.lessonOutcomeById };
          delete nextOutcomes[lessonId];
          return { lessonOutcomeById: nextOutcomes };
        }),
      toggleCompleted: (lessonId) =>
        set((state) => ({
          completedLessonIds: state.completedLessonIds.includes(lessonId)
            ? state.completedLessonIds.filter((id) => id !== lessonId)
            : [...state.completedLessonIds, lessonId],
        })),
      reset: () =>
        set({
          completedLessonIds: [],
          lessonOutcomeById: {},
          activeLessonId: null,
        }),
    }),
    { name: "homeslp-parent-learning-lab" }
  )
);
