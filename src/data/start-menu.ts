import { dailyTips } from "@/data/daily-tips";
import { milestones, type Milestone, type MilestoneItem } from "@/data/milestones";
import type { ContentImageAsset } from "@/types/content";

export type StartMenuConcern =
  | "speech"
  | "language"
  | "play"
  | "feeding"
  | "behavior"
  | "not-sure";

export type StartMenuGoal = "typical" | "idea" | "concern";

export interface StartMenuOption<TValue extends string> {
  value: TValue;
  label: string;
  description: string;
}

export interface StartMenuAction {
  href: string;
  label: string;
}

export interface StartMenuPreview {
  concern: StartMenuOption<StartMenuConcern>;
  goal: StartMenuOption<StartMenuGoal>;
  ageLabel: string;
  ageSummary: string;
  image: ContentImageAsset;
  milestoneLabel: string;
  milestoneTitle: string;
  milestoneDescription: string;
  tipTitle: string;
  tipDescription: string;
  watchFor: string;
  parentNote: string;
  primaryAction: StartMenuAction;
  secondaryActions: StartMenuAction[];
}

export const startMenuConcerns: StartMenuOption<StartMenuConcern>[] = [
  {
    value: "speech",
    label: "Speech & sounds",
    description: "Clearer talking, first sounds, and how understandable speech should feel right now.",
  },
  {
    value: "language",
    label: "Language",
    description: "Understanding, vocabulary, following directions, and putting words together.",
  },
  {
    value: "play",
    label: "Play & attention",
    description: "Joint attention, imitation, pretend play, and flexible thinking in routines.",
  },
  {
    value: "feeding",
    label: "Feeding",
    description: "Mealtime skills, textures, routines, and when feeding stress deserves a closer look.",
  },
  {
    value: "behavior",
    label: "Behavior & regulation",
    description: "Frustration, transitions, emotional language, and calmer parent support tools.",
  },
  {
    value: "not-sure",
    label: "I'm not sure yet",
    description: "Start broad when the worry is real but you cannot name the domain yet.",
  },
];

export const startMenuGoals: StartMenuOption<StartMenuGoal>[] = [
  {
    value: "typical",
    label: "See what's typical",
    description: "Get a calm age-based snapshot before you spiral through ten tabs.",
  },
  {
    value: "idea",
    label: "Try one idea today",
    description: "Pick one realistic routine-based move you can use in the next five minutes.",
  },
  {
    value: "concern",
    label: "Organize a concern",
    description: "Turn worry into clearer observations, watch-fors, and next steps.",
  },
];

const goalImages: Record<StartMenuGoal, ContentImageAsset> = {
  typical: {
    src: "/images/start/age-map.svg",
    alt: "Illustrated milestone map with age cards and a calm parent checklist.",
    width: 1200,
    height: 900,
    caption: "Age-based guidance, watch-fors, and one clear next click.",
    preload: true,
  },
  idea: {
    src: "/images/start/routine-lab.svg",
    alt: "Illustrated family routine board with meal, play, and bedtime activity cards.",
    width: 1200,
    height: 900,
    caption: "One small idea that fits the routine you already have.",
  },
  concern: {
    src: "/images/start/concern-lens.svg",
    alt: "Illustrated concern organizer with notes, red flags, and doctor visit prep cards.",
    width: 1200,
    height: 900,
    caption: "Turn concern into specifics you can actually bring to an SLP or pediatrician.",
  },
};

const concernRoutes: Record<
  StartMenuConcern,
  Record<StartMenuGoal, StartMenuAction>
> = {
  speech: {
    typical: { href: "/milestones", label: "See speech milestones" },
    idea: { href: "/activities", label: "Open a speech-friendly idea" },
    concern: { href: "/check", label: "Run the speech check" },
  },
  language: {
    typical: { href: "/milestones", label: "See language milestones" },
    idea: { href: "/activities", label: "Try a language routine" },
    concern: { href: "/check", label: "Start the language check" },
  },
  play: {
    typical: { href: "/milestones", label: "Review play expectations" },
    idea: { href: "/activities", label: "Try a play-based idea" },
    concern: { href: "/doctor-prep", label: "Organize a play concern" },
  },
  feeding: {
    typical: { href: "/milestones", label: "Review feeding milestones" },
    idea: { href: "/activities", label: "Try a mealtime routine" },
    concern: { href: "/doctor-prep", label: "Prep a feeding concern" },
  },
  behavior: {
    typical: { href: "/milestones", label: "Review regulation watch-fors" },
    idea: { href: "/activities", label: "Try a calmer routine" },
    concern: { href: "/doctor-prep", label: "Bring behavior notes" },
  },
  "not-sure": {
    typical: { href: "/milestones", label: "Start with milestone snapshots" },
    idea: { href: "/activities", label: "Try a starter routine" },
    concern: { href: "/check", label: "Start the quick check" },
  },
};

const goalSecondaryActions: Record<StartMenuGoal, StartMenuAction[]> = {
  typical: [
    { href: "/check", label: "Compare with the quick check" },
    { href: "/blog", label: "Read parent-friendly explainers" },
  ],
  idea: [
    { href: "/blueprints", label: "Browse guided weekly plans" },
    { href: "/handouts", label: "Grab a printable reminder" },
  ],
  concern: [
    { href: "/doctor-prep", label: "Build a visit prep note" },
    { href: "/progress", label: "Track what changed this week" },
  ],
};

const tipIdsByConcern: Record<StartMenuConcern, string[]> = {
  speech: ["any-07", "meal-05", "bath-05", "play-01"],
  language: ["play-01", "any-06", "any-15", "meal-01"],
  play: ["play-01", "play-02", "any-08", "any-10"],
  feeding: ["meal-01", "meal-04", "meal-10", "any-19"],
  behavior: ["any-12", "any-20", "bath-10", "any-17"],
  "not-sure": ["play-01", "meal-01", "any-12", "any-15"],
};

function getConcernMeta(concern: StartMenuConcern) {
  return startMenuConcerns.find((item) => item.value === concern) ?? startMenuConcerns[0];
}

function getGoalMeta(goal: StartMenuGoal) {
  return startMenuGoals.find((item) => item.value === goal) ?? startMenuGoals[0];
}

function getAgeLabel(ageMonths: number) {
  if (ageMonths < 24) return `${ageMonths} months`;

  const years = Math.floor(ageMonths / 12);
  const remainder = ageMonths % 12;
  if (!remainder) {
    return `${years} year${years === 1 ? "" : "s"}`;
  }

  return `${years}y ${remainder}m`;
}

function getAgeSummary(ageMonths: number) {
  if (ageMonths < 12) return "Early rhythms, shared attention, and regulation foundations.";
  if (ageMonths < 24) return "First words, routines, and fast-moving developmental shifts.";
  if (ageMonths < 36) return "Big vocabulary growth, pretend play, and clearer communication patterns.";
  return "Conversation, storytelling, play flexibility, and pre-K readiness.";
}

function getMilestoneForAge(ageMonths: number) {
  return (
    milestones.find(
      (item) => ageMonths >= item.ageMonthsStart && ageMonths <= item.ageMonthsEnd,
    ) ?? milestones[0]
  );
}

function getMilestoneEntry(
  milestone: Milestone,
  concern: StartMenuConcern,
): MilestoneItem {
  switch (concern) {
    case "speech":
      return milestone.speech[0];
    case "language":
      return milestone.language[0];
    case "play":
      return milestone.social[0];
    case "feeding":
      return milestone.feeding[0];
    case "behavior":
      return milestone.whatYouCanDo[0]
        ? {
            skill: "Support regulation with language",
            description: milestone.whatYouCanDo[0],
          }
        : milestone.social[0];
    case "not-sure":
      return milestone.language[0];
    default:
      return milestone.speech[0];
  }
}

function getWatchFor(milestone: Milestone, concern: StartMenuConcern) {
  if (concern === "behavior" && milestone.commonWorries[0]) {
    return milestone.commonWorries[0];
  }

  return milestone.redFlags[0] ?? "Bring any loss of skills or rising stress to your pediatrician or SLP.";
}

function getParentNote(milestone: Milestone, goal: StartMenuGoal) {
  if (goal === "concern") {
    return "You do not need to prove a problem before you ask for help. Clear examples are enough.";
  }

  if (goal === "idea") {
    return milestone.whatYouCanDo[0] ?? milestone.parentReassurance;
  }

  return milestone.parentReassurance;
}

function getTip(ageMonths: number, concern: StartMenuConcern) {
  const desiredIds = tipIdsByConcern[concern];
  const eligible = desiredIds
    .map((id) => dailyTips.find((tip) => tip.id === id))
    .filter(Boolean)
    .filter(
      (tip) =>
        ageMonths >= (tip?.ageRangeStart ?? 0) &&
        ageMonths <= (tip?.ageRangeEnd ?? Number.POSITIVE_INFINITY),
    );

  return eligible[0] ?? dailyTips.find((tip) => tip.id === desiredIds[0]) ?? dailyTips[0];
}

export function getStartMenuPreview(
  ageMonths: number,
  concern: StartMenuConcern,
  goal: StartMenuGoal,
): StartMenuPreview {
  const milestone = getMilestoneForAge(ageMonths);
  const milestoneEntry = getMilestoneEntry(milestone, concern);
  const tip = getTip(ageMonths, concern);

  return {
    concern: getConcernMeta(concern),
    goal: getGoalMeta(goal),
    ageLabel: getAgeLabel(ageMonths),
    ageSummary: getAgeSummary(ageMonths),
    image: goalImages[goal],
    milestoneLabel: milestone.ageRangeLabel,
    milestoneTitle: milestoneEntry.skill,
    milestoneDescription: milestoneEntry.description,
    tipTitle: tip.title,
    tipDescription: tip.technique,
    watchFor: getWatchFor(milestone, concern),
    parentNote: getParentNote(milestone, goal),
    primaryAction: concernRoutes[concern][goal],
    secondaryActions: goalSecondaryActions[goal],
  };
}
