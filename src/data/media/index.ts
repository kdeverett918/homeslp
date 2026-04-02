export interface MediaImageAsset {
  src: string;
  alt: string;
}

export interface NarrationAsset {
  audioSrc: string;
  durationSeconds: number;
  label: string;
  transcript: string;
  voiceName: string;
}

export const featuredTipNarrations = {
  "meal-01": {
    audioSrc: "/audio/daily-tips/the-two-choice-hold.mp3",
    durationSeconds: 42,
    label: "Listen to the mealtime tip",
    transcript:
      "Try the two-choice hold. Hold up two foods at eye level, wait three full seconds, and let your child show a preference before you name it. A look, reach, point, or sound all count as communication. Then model the word simply and warmly.",
    voiceName: "Sarah - Mature, Reassuring, Confident",
  },
  "play-01": {
    audioSrc: "/audio/daily-tips/parallel-play-narration.mp3",
    durationSeconds: 39,
    label: "Listen to the play tip",
    transcript:
      "Try parallel play narration. Sit next to your child and describe what they are already doing, instead of testing them with questions. Short, warm descriptions give your child rich language without pressure and help build shared attention.",
    voiceName: "Sarah - Mature, Reassuring, Confident",
  },
  "any-01": {
    audioSrc: "/audio/daily-tips/any-01-wait-five-seconds.mp3",
    durationSeconds: 0,
    label: "Listen to the coaching reminder",
    transcript:
      "Wait five full seconds before jumping in. Most parents respond fast, but a longer pause gives a child time to process, plan, and respond. That small change can create more communication than another question ever will.",
    voiceName: "Sarah - Mature, Reassuring, Confident",
  },
} as const satisfies Record<string, NarrationAsset>;

export interface BlueprintMediaEntry {
  image: MediaImageAsset;
  narration?: NarrationAsset;
}

export const blueprintMedia: Record<string, BlueprintMediaEntry> = {
  "wait-and-model": {
    image: {
      src: "/images/blueprints/wait-and-model.svg",
      alt: "Warm illustration of a parent pausing with two snack choices while a child points to communicate.",
    },
    narration: {
      audioSrc: "/audio/blueprints/wait-and-model-commentary.mp3",
      durationSeconds: 52,
      label: "Listen to the Week 1 blueprint commentary",
      transcript:
        "Wait and Model is one of the first techniques I teach parents. You create a natural opportunity, pause with an expectant look, and then model the word after your child reaches, points, or vocalizes. The goal is not pressure. The goal is a clear language model inside a real routine.",
      voiceName: "Sarah - Mature, Reassuring, Confident",
    },
  },
  "everyday-routines": {
    image: {
      src: "/images/blueprints/everyday-routines.svg",
      alt: "Soft illustration of bath time, getting dressed, and daily routines arranged as learning moments.",
    },
  },
  "play-based-learning": {
    image: {
      src: "/images/blueprints/play-based-language.svg",
      alt: "Playful illustration of blocks, a toy car, and a parent joining child-led floor play.",
    },
  },
};

export function getFeaturedTipNarration(id: string) {
  return featuredTipNarrations[id as keyof typeof featuredTipNarrations] ?? null;
}

export function getBlueprintMedia(slug: string): BlueprintMediaEntry | null {
  return blueprintMedia[slug as keyof typeof blueprintMedia] ?? null;
}
