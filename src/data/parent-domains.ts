export type ParentDomainKey =
  | "speech"
  | "language"
  | "play"
  | "feeding"
  | "behavior"
  | "resources";

export interface ParentDomainLink {
  key: ParentDomainKey;
  href: string;
  title: string;
  description: string;
  action: string;
}

export const parentDomainLinks: ParentDomainLink[] = [
  {
    key: "speech",
    href: "/milestones",
    title: "Speech & Sounds",
    description:
      "See what clearer sounds and easier-to-understand talking can look like now.",
    action: "See speech milestones",
  },
  {
    key: "language",
    href: "/check",
    title: "Language & Understanding",
    description:
      "Check vocabulary, listening, and how language is building in daily routines.",
    action: "Start the quick check",
  },
  {
    key: "play",
    href: "/activities",
    title: "Play & Attention",
    description:
      "Use play to build attention, imitation, flexibility, and shared engagement.",
    action: "Try daily ideas",
  },
  {
    key: "feeding",
    href: "/milestones",
    title: "Feeding & Mealtime",
    description:
      "Review mealtime watch-fors and how feeding connects with development.",
    action: "See feeding watch-fors",
  },
  {
    key: "behavior",
    href: "/waitlist-guide",
    title: "Behavior & Regulation",
    description:
      "Support transitions and calmer routines with predictable communication.",
    action: "Try calmer routine ideas",
  },
  {
    key: "resources",
    href: "/resources",
    title: "Trusted Resources",
    description: "Go deeper with clinician-reviewed creators and communities.",
    action: "Explore trusted resources",
  },
];
