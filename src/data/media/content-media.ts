export interface ContentImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
}

export interface NarrationTrack {
  src: string;
  label: string;
  transcript: string;
  voice: string;
}

export interface ContentMediaEntry {
  image?: ContentImageAsset;
  narration?: NarrationTrack;
}

export const dailyTipMedia: Record<string, ContentMediaEntry> = {
  "meal-01": {
    image: {
      src: "/images/start-menu/feeding-watch.svg",
      alt: "Illustration of a parent offering two snack choices to support communication.",
      width: 960,
      height: 720,
      sizes: "(max-width: 1024px) 100vw, 42vw",
    },
    narration: {
      src: "/audio/daily-tips/meal-01-two-choice-hold.mp3",
      label: "Listen to today’s tip",
      voice: "Sarah",
      transcript:
        "Try the two-choice hold. Hold up two foods at eye level, wait three full seconds, and let your child show a preference before you name it. A look, reach, point, or sound all count as communication. Then model the word simply and warmly.",
    },
  },
  "play-01": {
    image: {
      src: "/images/start-menu/play-routines.svg",
      alt: "Illustration of a parent following a child's lead during floor play.",
      width: 960,
      height: 720,
      sizes: "(max-width: 1024px) 100vw, 42vw",
    },
    narration: {
      src: "/audio/daily-tips/play-01-parallel-play.mp3",
      label: "Listen to this play tip",
      voice: "Sarah",
      transcript:
        "Try parallel play narration. Sit next to your child and describe what they are already doing, instead of testing them with questions. Short, warm descriptions give your child rich language without pressure and help build shared attention.",
    },
  },
  "any-01": {
    image: {
      src: "/images/start-menu/regulation-rhythm.svg",
      alt: "Illustration of a calm parent pausing before responding to a child.",
      width: 960,
      height: 720,
      sizes: "(max-width: 1024px) 100vw, 42vw",
    },
    narration: {
      src: "/audio/daily-tips/any-01-wait-five-seconds.mp3",
      label: "Listen to this coaching reminder",
      voice: "Sarah",
      transcript:
        "Wait five full seconds before jumping in. Most parents respond fast, but a longer pause gives a child time to process, plan, and respond. That small change can create more communication than another question ever will.",
    },
  },
};

export const blueprintMedia: Record<string, ContentMediaEntry> = {
  "wait-and-model": {
    image: {
      src: "/images/start-menu/speech-sounds.svg",
      alt: "Illustration of a parent pausing expectantly during a toddler communication routine.",
      width: 1280,
      height: 960,
      sizes: "(max-width: 1024px) 100vw, 48vw",
    },
    narration: {
      src: "/audio/blueprints/wait-and-model-commentary.mp3",
      label: "Listen to the SLP commentary",
      voice: "Sarah",
      transcript:
        "Wait and Model is one of the most effective first-word strategies because it lowers pressure and creates a real reason to communicate. Instead of prompting over and over, pause with an expectant look, then calmly model the word your child needs. The goal is not perfect imitation. The goal is showing your child that communication works.",
    },
  },
};
