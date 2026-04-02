import type { ContentImageAsset, ContentNarration } from "@/types/content";

interface HandoutMediaEntry {
  coverImage?: ContentImageAsset;
  narration?: ContentNarration;
}

export const handoutCategoryPreviewImages = {
  education: {
    src: "/images/start-menu/parent-guide.svg",
    alt: "Illustration of a parent-friendly guide with supportive developmental coaching.",
    width: 960,
    height: 720,
  },
  "home-practice": {
    src: "/images/start/routine-lab.svg",
    alt: "Illustration of a daily routine board showing simple home-practice moments for language.",
    width: 960,
    height: 720,
  },
  "milestone-summary": {
    src: "/images/start/age-map.svg",
    alt: "Illustration of an age-based developmental milestone overview for families.",
    width: 960,
    height: 720,
  },
} as const satisfies Record<
  "education" | "home-practice" | "milestone-summary",
  ContentImageAsset
>;

export const handoutMedia: Record<string, HandoutMediaEntry> = {
  "what-is-speech-delay": {
    coverImage: {
      src: "/images/start-menu/speech-sounds.svg",
      alt: "Illustration of a parent tracking early speech development with warmth and clarity.",
      width: 960,
      height: 720,
    },
    narration: {
      title: "Speech delay handout summary",
      audioSrc: "/audio/handouts/what-is-speech-delay-summary.mp3",
      durationLabel: "39 sec",
      transcript:
        "A speech delay means a child is following the general path of speech development, but more slowly than expected. Some children understand a lot, point, gesture, and try to communicate, but they are late to use spoken words. That is different from a language disorder, where understanding or using language itself is harder. A few signs that deserve attention are no babbling by around nine to ten months, no first words by fifteen months, fewer than fifty words by age two, no word combinations by age two, or any loss of words or skills. If you are concerned, seek an evaluation early rather than waiting it out.",
      voice: "Sarah - Mature, Reassuring, Confident",
    },
  },
  "first-words-activities": {
    coverImage: {
      src: "/images/start/routine-lab.svg",
      alt: "Illustration of mealtime, play, and bedtime routines organized as first-word practice moments.",
      width: 960,
      height: 720,
    },
    narration: {
      title: "First words handout summary",
      audioSrc: "/audio/handouts/first-words-activities-summary.mp3",
      durationLabel: "39 sec",
      transcript:
        "First words grow best inside routines your child already loves. Use short, repeatable words during meals, bath time, play, and bedtime. Offer two choices, pause expectantly, and accept any attempt to communicate, including a look, a point, a sound, or an approximation. During play, follow your child's lead and model simple words like pop, go, up, more, or open. At bedtime, repeat familiar books and pause at predictable parts. The goal is not to quiz your child. The goal is to make communication useful, warm, and easy to practice again and again throughout the day.",
      voice: "Sarah - Mature, Reassuring, Confident",
    },
  },
};
