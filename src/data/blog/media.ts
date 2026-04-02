import type {
  BlogCategory,
  ContentImageAsset,
  ContentNarration,
} from "@/types/content";

interface BlogArticleMediaEntry {
  heroImage?: ContentImageAsset;
  narration?: ContentNarration;
}

export const blogCategoryPreviewImages: Record<BlogCategory, ContentImageAsset> = {
  "speech-development": {
    src: "/images/start-menu/speech-sounds.svg",
    alt: "Warm illustration of a parent helping a child explore early speech sounds.",
    width: 960,
    height: 720,
  },
  "language-development": {
    src: "/images/start-menu/language-ladder.svg",
    alt: "Illustration of language building blocks arranged like a gentle ladder for parents and children.",
    width: 960,
    height: 720,
  },
  "feeding-swallowing": {
    src: "/images/start-menu/feeding-watch.svg",
    alt: "Illustration of a calm family mealtime with simple food choices and language support.",
    width: 960,
    height: 720,
  },
  "parent-tips": {
    src: "/images/start-menu/parent-guide.svg",
    alt: "Illustration of a parent using simple coaching strategies during daily routines.",
    width: 960,
    height: 720,
  },
  "myths-facts": {
    src: "/images/start/concern-lens.svg",
    alt: "Illustration of a parent sorting common myths from useful developmental guidance.",
    width: 960,
    height: 720,
  },
  milestones: {
    src: "/images/start/age-map.svg",
    alt: "Illustration of an age-based developmental map for parents tracking communication growth.",
    width: 960,
    height: 720,
  },
};

export const blogArticleMedia: Record<string, BlogArticleMediaEntry> = {
  "secret-language-of-babbling": {
    heroImage: {
      src: "/images/start-menu/speech-sounds.svg",
      alt: "Warm illustration of a baby and parent facing each other during a babbling exchange.",
      width: 960,
      height: 720,
    },
    narration: {
      title: "Babbling article summary",
      audioSrc: "/audio/blog/babbling-summary.mp3",
      durationLabel: "39 sec",
      transcript:
        "Babbling is not random noise. It is one of the clearest early signs that your baby's speech system is getting organized. Watch for canonical babbling, those repeated sounds like bababa or dadada, between about six and ten months. Respond to your baby's sounds like a real conversation. Smile, imitate, pause, and say a simple word back. That back and forth teaches turn-taking and builds more advanced speech. If babbling is very limited, disappears, or those repeated syllables are still missing around ten to eleven months, it is worth bringing up with your pediatrician or a speech-language pathologist.",
      voice: "Sarah - Mature, Reassuring, Confident",
    },
  },
  "play-builds-language": {
    heroImage: {
      src: "/images/start-menu/play-routines.svg",
      alt: "Illustration of a parent joining a child's floor play with blocks, toys, and shared attention.",
      width: 960,
      height: 720,
    },
    narration: {
      title: "Play article summary",
      audioSrc: "/audio/blog/play-builds-language-summary.mp3",
      durationLabel: "38 sec",
      transcript:
        "Play is one of the strongest language-building tools you already have at home. When a child stacks blocks, feeds a doll, or crashes cars together, they are practicing the same thinking skills that support words, sentences, and conversation. The best toys are usually the simplest ones because they leave room for you and your child to create the story together. Try getting on the floor, following your child's lead, and using short comments like car go, baby sleep, or up up up. You do not need flashcards or fancy apps. Warm, playful interaction is the real language engine.",
      voice: "Sarah - Mature, Reassuring, Confident",
    },
  },
};
