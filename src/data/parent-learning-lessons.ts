import type { ContentImageAsset, ContentNarration } from "@/types/content";

export type ParentLearningContext =
  | "mealtime"
  | "bath"
  | "play"
  | "bedtime"
  | "errands"
  | "anytime";
export type ParentLearningOutcomeTone = "success" | "adjust" | "support";

export interface ParentLearningOutcome {
  id: string;
  label: string;
  feedback: string;
  nextMove: string;
  tone: ParentLearningOutcomeTone;
}

export interface ParentLearningLesson {
  id: string;
  title: string;
  subtitle: string;
  context: ParentLearningContext;
  ageRangeStart: number;
  ageRangeEnd: number;
  estimatedMinutes: number;
  image: ContentImageAsset;
  narration: ContentNarration;
  prepChecklist: string[];
  tryLine: string;
  watchFor: string[];
  reflectionPrompt: string;
  outcomes: ParentLearningOutcome[];
  carryoverTitle: string;
  carryoverSteps: string[];
}

export const parentLearningLessons: ParentLearningLesson[] = [
  {
    id: "parent-lesson-choice-wait",
    title: "Choice + Wait",
    subtitle:
      "Turn a snack moment into an easy communication rep without turning it into a quiz.",
    context: "mealtime",
    ageRangeStart: 10,
    ageRangeEnd: 48,
    estimatedMinutes: 3,
    image: {
      src: "/images/start-menu/feeding-watch.svg",
      alt: "Illustration of a parent holding up two snack choices and waiting calmly.",
      width: 960,
      height: 720,
    },
    narration: {
      title: "Choice and wait coach",
      audioSrc: "/audio/parent-lessons/choice-and-wait-coach.mp3",
      durationLabel: "35 sec",
      transcript:
        "At mealtime, make communication easier, not harder. Hold up two simple choices at your child's eye level, pause, and wait without repeating yourself. A look, a reach, a point, or even a small sound all count as communication. The goal is not a perfect word. The goal is helping your child notice that their action changes what happens next. When they respond, calmly name the choice and hand it over. One short pause and one simple model usually teach more than a long stream of questions.",
      voice: "Sarah - Mature, Reassuring, Confident",
    },
    prepChecklist: [
      "Pick two foods your child already likes.",
      "Hold both options still at eye level.",
      "Decide now that a gesture counts as success.",
    ],
    tryLine: "Banana or cracker? ... I’m waiting.",
    watchFor: [
      "Eye gaze shifts between the choices",
      "Reach, point, or body lean",
      "Any sound, word attempt, or excited face",
    ],
    reflectionPrompt: "What happened when you paused instead of prompting again?",
    outcomes: [
      {
        id: "connection",
        label: "They looked, reached, or made a sound",
        feedback:
          "That counts. Treat it like a real communication turn and reinforce it right away.",
        nextMove:
          "Name the choice once, hand it over, and stop talking so the success stays clear.",
        tone: "success",
      },
      {
        id: "needs-wait",
        label: "They needed longer than I expected",
        feedback:
          "Good. That means the pause is doing useful work. Most parents cut it short too early.",
        nextMove:
          "Keep your face expectant, stay quiet for one more beat, then model the word simply.",
        tone: "adjust",
      },
      {
        id: "frustrated",
        label: "They got upset or pushed the choices away",
        feedback:
          "Lower the demand. The routine should feel supportive, not like a test they can fail.",
        nextMove:
          "Offer one obvious favorite, help quickly, and try the two-choice setup later in an easier moment.",
        tone: "support",
      },
    ],
    carryoverTitle: "Use it again today",
    carryoverSteps: [
      "Try it once more during the next snack or drink.",
      "Keep the language to one short model after they respond.",
      "End the turn fast so your child feels the cause-and-effect clearly.",
    ],
  },
  {
    id: "parent-lesson-bath-one-action",
    title: "One Action, One Line",
    subtitle:
      "Use a bath routine like pour, wash, or pop to make language repetitive and easy to follow.",
    context: "bath",
    ageRangeStart: 8,
    ageRangeEnd: 48,
    estimatedMinutes: 3,
    image: {
      src: "/images/start-menu/bath-routines.svg",
      alt: "Illustration of a parent guiding a simple bath routine with cups and bubbles.",
      width: 960,
      height: 720,
    },
    narration: {
      title: "Bath action coach",
      audioSrc: "/audio/parent-lessons/bath-action-coach.mp3",
      durationLabel: "38 sec",
      transcript:
        "Bath time works best when you slow the language down and pair it with one visible action. Pick one easy routine like pour, wash, or pop bubbles, and say one short line while it happens. Pour water. Wash tummy. Pop bubble. Then pause. Children learn more from repeated, predictable language than from lots of questions. If your child splashes, laughs, reaches, or looks toward you, stay with that action and repeat the same simple words again. The goal is not to run bath time like a lesson. The goal is to make the language easy to notice inside a routine your child already enjoys.",
      voice: "Sarah - Mature, Reassuring, Confident",
    },
    prepChecklist: [
      "Pick one bath action your child already likes.",
      "Keep the toy setup simple so the routine is easy to repeat.",
      "Choose one short phrase you can say the same way each time.",
    ],
    tryLine: "Pour water. Wash toes. Pop bubble.",
    watchFor: [
      "Your child reaches for the cup, cloth, or bubbles again",
      "They smile or vocalize during the repeated action",
      "They pause to watch you right before the action happens",
    ],
    reflectionPrompt: "What changed when you matched one short line to one bath action?",
    outcomes: [
      {
        id: "joined-routine",
        label: "They stayed with the action and wanted more",
        feedback:
          "That is what you want. Repetition plus anticipation is strong early communication practice.",
        nextMove:
          "Repeat the same action and phrase two or three more times before switching toys or words.",
        tone: "success",
      },
      {
        id: "splashed-through",
        label: "They kept splashing and barely noticed my words",
        feedback:
          "That is still workable. The routine may be too busy, not a sign that the language was useless.",
        nextMove:
          "Slow the action down, say even less, and let the repeated movement carry the lesson.",
        tone: "adjust",
      },
      {
        id: "washing-upset",
        label: "They got upset when I tried to guide the routine",
        feedback:
          "Shift toward comfort first. Bath language works best when the sensory piece already feels safe.",
        nextMove:
          "Move to their preferred bath action, join that one, and keep the phrase gentle and familiar.",
        tone: "support",
      },
    ],
    carryoverTitle: "Use it again today",
    carryoverSteps: [
      "Reuse the same phrase during the next pour or bubble turn.",
      "Stick with one action long enough for anticipation to build.",
      "Let delight, waiting, and reaching count as communication.",
    ],
  },
  {
    id: "parent-lesson-join-narrate",
    title: "Join + Narrate",
    subtitle:
      "Build language in play by describing what your child is already doing instead of questioning them.",
    context: "play",
    ageRangeStart: 8,
    ageRangeEnd: 60,
    estimatedMinutes: 4,
    image: {
      src: "/images/start-menu/play-routines.svg",
      alt: "Illustration of a parent sitting beside a child and narrating child-led floor play.",
      width: 960,
      height: 720,
    },
    narration: {
      title: "Join and narrate coach",
      audioSrc: "/audio/parent-lessons/join-and-narrate-coach.mp3",
      durationLabel: "32 sec",
      transcript:
        "During play, try talking less and noticing more. Sit beside your child, watch what they are already doing, and describe it with one short line at a time. Car go. Block up. Baby sleep. When parents stop quizzing and start narrating, children get rich language without pressure. That lowers frustration and builds shared attention. Your job is not to run the play. Your job is to join it, name it, and leave enough quiet space for your child to take a turn when they are ready.",
      voice: "Sarah - Mature, Reassuring, Confident",
    },
    prepChecklist: [
      "Sit beside your child instead of across from them.",
      "Choose one toy or action they already started.",
      "Use two- or three-word descriptions only.",
    ],
    tryLine: "Car go. Up up up. Crash.",
    watchFor: [
      "Your child glances toward you during play",
      "They repeat an action after you label it",
      "They stay with the play longer instead of leaving",
    ],
    reflectionPrompt: "How did the play shift when you stopped asking questions?",
    outcomes: [
      {
        id: "stayed-close",
        label: "They stayed with me and kept playing",
        feedback:
          "That is the target. Shared attention often improves before words do, and that still matters.",
        nextMove:
          "Keep matching their play and sprinkle in one fresh word only after a few successful turns.",
        tone: "success",
      },
      {
        id: "ignored",
        label: "They ignored me and kept doing their own thing",
        feedback:
          "That is still workable. Narration can be quiet background language, not a demand for engagement.",
        nextMove:
          "Shorten your comments even more and wait longer between them. Let the toy do most of the talking.",
        tone: "adjust",
      },
      {
        id: "resisted",
        label: "They got tense when I joined the play",
        feedback:
          "Back off a little. Some children need you near them before they need you inside the play.",
        nextMove:
          "Narrate from the side for one minute, then copy a single action without changing the game.",
        tone: "support",
      },
    ],
    carryoverTitle: "Use it again today",
    carryoverSteps: [
      "Pick another routine toy later today and narrate for one minute only.",
      "Aim for one short line, then a pause.",
      "Count connection as a win even if no words show up yet.",
    ],
  },
  {
    id: "parent-lesson-bedtime-predict",
    title: "Predict + Repeat",
    subtitle:
      "Use the same short phrases each night so your child can anticipate and join the bedtime routine.",
    context: "bedtime",
    ageRangeStart: 10,
    ageRangeEnd: 60,
    estimatedMinutes: 3,
    image: {
      src: "/images/start-menu/bedtime-routine.svg",
      alt: "Illustration of a parent guiding a calm bedtime routine with a book and moonlight.",
      width: 960,
      height: 720,
    },
    narration: {
      title: "Bedtime predictable phrases coach",
      audioSrc: "/audio/parent-lessons/bedtime-predictable-phrases-coach.mp3",
      durationLabel: "33 sec",
      transcript:
        "At bedtime, predict the routine instead of filling the room with new language. Use the same short pattern every night. Book, hug, lights out. Pajamas on, story time, sleep. Predictable phrases help children process what comes next and lower resistance. You do not need a long script. A calm voice and the same sequence matter more. If your child joins the last word, reaches for the next step, or settles faster, that is a strong communication win. Bedtime language should feel steady and safe. Repetition is the teaching tool here.",
      voice: "Sarah - Mature, Reassuring, Confident",
    },
    prepChecklist: [
      "Pick one bedtime sequence you already do every night.",
      "Choose three short phrases you can reuse in the same order.",
      "Lower the room noise so your child can hear the pattern clearly.",
    ],
    tryLine: "Pajamas on. Story time. Lights out.",
    watchFor: [
      "Your child moves toward the next step before you help",
      "They fill in the last word or imitate part of the phrase",
      "Their body settles faster once the routine starts",
    ],
    reflectionPrompt: "How did the routine feel when you predicted it instead of explaining it?",
    outcomes: [
      {
        id: "anticipated",
        label: "They started anticipating the next step",
        feedback:
          "That is a strong response. Predictability supports both regulation and communication.",
        nextMove:
          "Keep the same phrases tomorrow so your child can lean on the pattern again.",
        tone: "success",
      },
      {
        id: "quiet-listening",
        label: "They stayed quiet but seemed to listen",
        feedback:
          "Quiet processing still counts. Bedtime routines often show understanding before they show words.",
        nextMove:
          "Keep the same three phrases and leave a tiny pause before the final word each night.",
        tone: "adjust",
      },
      {
        id: "stalling",
        label: "The routine still turned into stalling or resistance",
        feedback:
          "Reduce the language load and hold the boundary. Too many words can accidentally feed the delay.",
        nextMove:
          "Shorten the phrase list, keep your tone calm, and pair each phrase with the next physical step right away.",
        tone: "support",
      },
    ],
    carryoverTitle: "Use it again today",
    carryoverSteps: [
      "Reuse the same phrase order tomorrow night.",
      "Pause for one beat before the last word of the routine.",
      "Count anticipation and calmer transitions as meaningful progress.",
    ],
  },
  {
    id: "parent-lesson-errands-point-name",
    title: "Point + Name",
    subtitle:
      "Turn short store and waiting-line moments into easy language reps without over-talking.",
    context: "errands",
    ageRangeStart: 12,
    ageRangeEnd: 60,
    estimatedMinutes: 2,
    image: {
      src: "/images/start-menu/errands-language.svg",
      alt: "Illustration of a parent naming simple objects with a child during an errand.",
      width: 960,
      height: 720,
    },
    narration: {
      title: "Errand point and name coach",
      audioSrc: "/audio/parent-lessons/errand-point-and-name-coach.mp3",
      durationLabel: "32 sec",
      transcript:
        "Errands are full of short waiting moments, and that makes them good for quick language reps. Point to one thing your child notices, name it with one or two words, and wait. Red apples. Big truck. More grapes. Keep it concrete and keep moving. You are not trying to quiz your child in the store. You are helping them connect what they see to simple language in real time. If they point, look back at you, copy a word, or stay engaged in the cart a little longer, count that as progress. Small real-world reps add up fast.",
      voice: "Sarah - Mature, Reassuring, Confident",
    },
    prepChecklist: [
      "Pick one part of the errand where your child can actually see what you are naming.",
      "Use one- or two-word labels instead of questions.",
      "Aim for two or three clean reps, not a running commentary the whole trip.",
    ],
    tryLine: "Red apples. Big truck. More grapes.",
    watchFor: [
      "Your child points or looks back at you after you label something",
      "They echo part of a word or sound while watching",
      "They stay engaged in the cart, stroller, or line a little longer",
    ],
    reflectionPrompt: "What happened when you named what they noticed instead of asking them to perform?",
    outcomes: [
      {
        id: "noticed-with-you",
        label: "They pointed, looked back, or copied a word",
        feedback:
          "That is the target. Shared attention in a busy setting is a meaningful communication win.",
        nextMove:
          "Name the object once more, then move on before the moment gets overloaded.",
        tone: "success",
      },
      {
        id: "distracted",
        label: "They bounced between everything and I lost the moment",
        feedback:
          "Normal. Errands are noisy and full of competing input, so keep the target even smaller.",
        nextMove:
          "Pick one object that is close, obvious, and interesting, then label only that one.",
        tone: "adjust",
      },
      {
        id: "overwhelmed",
        label: "They were overwhelmed and the errand was too hard",
        feedback:
          "Protect regulation first. Busy environments are not always the right place to push language.",
        nextMove:
          "Save the strategy for the car, parking lot, or checkout line when the sensory load is lower.",
        tone: "support",
      },
    ],
    carryoverTitle: "Use it again today",
    carryoverSteps: [
      "Pick one more short wait during the next errand or car ride.",
      "Name what your child is already looking at, then pause.",
      "Count pointing, looking back, and calmer waiting as valid gains.",
    ],
  },
  {
    id: "parent-lesson-pause-before-helping",
    title: "Pause Before Helping",
    subtitle:
      "Use a five-second pause to create more communication during stuck or whiny moments.",
    context: "anytime",
    ageRangeStart: 6,
    ageRangeEnd: 60,
    estimatedMinutes: 2,
    image: {
      src: "/images/start-menu/regulation-rhythm.svg",
      alt: "Illustration of a calm parent taking a breath before helping a child.",
      width: 960,
      height: 720,
    },
    narration: {
      title: "Pause before helping coach",
      audioSrc: "/audio/parent-lessons/pause-before-helping-coach.mp3",
      durationLabel: "32 sec",
      transcript:
        "When your child is reaching, whining, or getting stuck, the fastest fix is often to slow yourself down. Pause a full five seconds before helping, prompting, or guessing for them. That extra wait gives them time to process, plan, and show you what they want. Most parents jump in too early because silence feels uncomfortable. But silence is often where communication starts. If your child looks, gestures, reaches, or makes a sound during that pause, treat it like a meaningful turn and respond warmly.",
      voice: "Sarah - Mature, Reassuring, Confident",
    },
    prepChecklist: [
      "Pick a low-stress moment like a toy request or simple routine.",
      "Count the pause in your head so you don’t rush it.",
      "Decide what you will count as communication before you start.",
    ],
    tryLine: "I see you. I’m waiting ... one, two, three, four, five.",
    watchFor: [
      "A clearer look toward the item or toward you",
      "Reach, pull, sign, or body shift",
      "A sound that happens after the pause, not before it",
    ],
    reflectionPrompt: "What showed up when you made yourself wait the full five seconds?",
    outcomes: [
      {
        id: "showed-you",
        label: "They showed me what they wanted",
        feedback:
          "That is the whole point of the pause. You created room for them to take the turn.",
        nextMove:
          "Respond fast and warmly. Briefly name the item or action, then move on.",
        tone: "success",
      },
      {
        id: "still-waited",
        label: "They waited for me to guess for them",
        feedback:
          "Stay calm. Many children need repeated practice before they realize the pause means their turn.",
        nextMove:
          "After the five seconds, give a simple model or gesture prompt instead of a long explanation.",
        tone: "adjust",
      },
      {
        id: "meltdown",
        label: "They melted down before five seconds",
        feedback:
          "That means the moment was too loaded for this strategy right now, not that the strategy is wrong.",
        nextMove:
          "Try again in a lighter routine, shorten the wait to three seconds, and rebuild confidence first.",
        tone: "support",
      },
    ],
    carryoverTitle: "Use it again today",
    carryoverSteps: [
      "Pick one more tiny request moment before bedtime.",
      "Count slowly in your head instead of talking through the pause.",
      "Reward the smallest communication move like it mattered, because it did.",
    ],
  },
];
