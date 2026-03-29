"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface TrackedWord {
  id: string;
  word: string;
  dateAdded: string;
  category: "noun" | "verb" | "social" | "adjective" | "other";
  note?: string;
}

interface WordTrackerStore {
  words: TrackedWord[];
  addWord: (word: Omit<TrackedWord, "id" | "dateAdded">) => void;
  removeWord: (id: string) => void;
  getWordCount: () => number;
}

export const useWordTracker = create<WordTrackerStore>()(
  persist(
    (set, get) => ({
      words: [],
      addWord: (word) =>
        set((state) => ({
          words: [
            ...state.words,
            {
              ...word,
              id: `w-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
              dateAdded: new Date().toISOString(),
            },
          ],
        })),
      removeWord: (id) =>
        set((state) => ({ words: state.words.filter((w) => w.id !== id) })),
      getWordCount: () => get().words.length,
    }),
    { name: "homeslp-word-tracker" }
  )
);
