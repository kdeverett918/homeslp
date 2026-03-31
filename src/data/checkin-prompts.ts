/**
 * Weekly check-in prompts — rotating questions that keep check-ins fresh.
 * Parents see 4 prompts per check-in: one from each category.
 */

export interface CheckInPrompt {
  id: string;
  category: "observe" | "practice" | "confidence" | "celebrate";
  text: string;
  helpText?: string;
  inputType: "text" | "select" | "multi-select" | "rating";
  options?: string[];
}

// ── Observation prompts ─────────────────────────────────────────────────────
export const observePrompts: CheckInPrompt[] = [
  {
    id: "obs-1",
    category: "observe",
    text: "What new sound or word did you notice this week?",
    helpText: "Even small sounds count! Babbling, new syllables, or attempts at words.",
    inputType: "text",
  },
  {
    id: "obs-2",
    category: "observe",
    text: "What was a moment that made you smile about your child's communication?",
    helpText: "A gesture, a look, a sound — anything that showed connection.",
    inputType: "text",
  },
  {
    id: "obs-3",
    category: "observe",
    text: "Did your child try to tell you something new this week?",
    helpText: "New gestures, pointing, pulling your hand, showing you something.",
    inputType: "text",
  },
  {
    id: "obs-4",
    category: "observe",
    text: "What surprised you about your child's communication this week?",
    helpText: "Something unexpected — a word attempt, understanding something new, a reaction.",
    inputType: "text",
  },
  {
    id: "obs-5",
    category: "observe",
    text: "How did your child communicate a want or need this week?",
    helpText: "Crying, pointing, pulling, reaching, vocalizing, words — all count!",
    inputType: "text",
  },
  {
    id: "obs-6",
    category: "observe",
    text: "Did your child respond to their name, a question, or a direction this week?",
    helpText: "Even partial responses show growing understanding.",
    inputType: "text",
  },
];

// ── Practice prompts ────────────────────────────────────────────────────────
export const practicePrompts: CheckInPrompt[] = [
  {
    id: "prac-1",
    category: "practice",
    text: "Which moments did you use for language practice?",
    helpText: "Check all that apply — you might be doing more than you think!",
    inputType: "multi-select",
    options: ["mealtime", "bath", "play", "bedtime", "errands", "anytime"],
  },
  {
    id: "prac-2",
    category: "practice",
    text: "What technique felt most natural this week?",
    helpText: "Choose the one that flowed easiest for you.",
    inputType: "select",
    options: [
      "Narrating what I'm doing",
      "Waiting for my child to vocalize",
      "Offering two choices",
      "Repeating and expanding what they said",
      "Reading together",
      "Singing songs",
      "Playing turn-taking games",
    ],
  },
  {
    id: "prac-3",
    category: "practice",
    text: "How many days did you practice a speech/language activity?",
    helpText: "No judgment — even 1 day counts!",
    inputType: "select",
    options: ["1 day", "2-3 days", "4-5 days", "6-7 days"],
  },
];

// ── Confidence prompts ──────────────────────────────────────────────────────
export const confidencePrompts: CheckInPrompt[] = [
  {
    id: "conf-1",
    category: "confidence",
    text: "How confident do you feel supporting your child's speech right now?",
    helpText: "1 = just starting out, 5 = feeling great about it",
    inputType: "rating",
  },
  {
    id: "conf-2",
    category: "confidence",
    text: "How much do you feel like you know what to look for in your child's development?",
    helpText: "1 = still learning, 5 = feeling informed",
    inputType: "rating",
  },
];

// ── Celebration prompts ─────────────────────────────────────────────────────
export const celebrationPrompts: CheckInPrompt[] = [
  {
    id: "cele-1",
    category: "celebrate",
    text: "What's one thing YOU did well as a parent this week?",
    helpText: "You showed up. You're paying attention. That matters.",
    inputType: "text",
  },
  {
    id: "cele-2",
    category: "celebrate",
    text: "What's a small win from this week you want to remember?",
    helpText: "Big or small — first word attempt, a shared laugh, trying something new.",
    inputType: "text",
  },
  {
    id: "cele-3",
    category: "celebrate",
    text: "What do you want to try next week?",
    helpText: "Setting a small intention helps build momentum.",
    inputType: "text",
  },
  {
    id: "cele-4",
    category: "celebrate",
    text: "If another parent was feeling worried, what would you tell them based on this week?",
    helpText: "Sometimes the best encouragement is what you'd say to someone else.",
    inputType: "text",
  },
];

/**
 * Get a rotating set of prompts for the current week.
 * Returns one from each category.
 */
export function getWeeklyPrompts(weekSeed?: number): {
  observe: CheckInPrompt;
  practice: CheckInPrompt;
  confidence: CheckInPrompt;
  celebrate: CheckInPrompt;
} {
  const seed = weekSeed ?? Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  return {
    observe: observePrompts[seed % observePrompts.length],
    practice: practicePrompts[seed % practicePrompts.length],
    confidence: confidencePrompts[seed % confidencePrompts.length],
    celebrate: celebrationPrompts[seed % celebrationPrompts.length],
  };
}

// Context display labels
export const CONTEXT_LABELS: Record<string, { label: string; emoji: string }> = {
  mealtime: { label: "Mealtime", emoji: "🍽️" },
  bath: { label: "Bath Time", emoji: "🛁" },
  play: { label: "Playtime", emoji: "🎮" },
  bedtime: { label: "Bedtime", emoji: "🌙" },
  errands: { label: "Out & About", emoji: "🚗" },
  anytime: { label: "Anytime", emoji: "✨" },
};
