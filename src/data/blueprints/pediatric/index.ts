import type { WeeklyBlueprint } from "@/types/content";

export const pediatricBlueprints: WeeklyBlueprint[] = [
  {
    id: "ped-week-1",
    slug: "wait-and-model",
    path: "child",
    weekNumber: 1,
    title: "First Words: Building a Foundation",
    subtitle: 'The "Wait and Model" technique',
    description:
      "Learn the most powerful strategy SLPs use to encourage first words. This technique gives your child the space and model they need to start communicating.",
    accessTier: "trial",
    commentary: {
      type: "text",
      textContent:
        "Wait and Model is the #1 technique I teach parents. Instead of prompting your child to say words, you create natural opportunities by waiting expectantly, then modeling the word yourself. Watch how Ms. Rachel uses this exact technique in the video below.",
      kristineNote:
        "This is the technique that makes the biggest difference for late talkers. Most parents talk too much and wait too little. Give your child 3-5 seconds of silence with an expectant look before modeling the word.",
    },
    curatedMedia: {
      youtubeVideoId: "kcmqqHApxhE",
      title: "Songs for Littles - Learning Words",
      channelName: "Ms Rachel",
      kristineAnnotation:
        'Watch how she pauses and waits before saying each word. Notice the expectant pause at the beginning of each segment — that\'s "Wait and Model" in action.',
    },
    refrigeratorPdf: {
      title: "3 Ways to Practice Wait & Model During Mealtime",
      pdfUrl: "/content/pdfs/ped-week-1-fridge.pdf",
      techniques: [
        {
          activityContext: "During mealtime",
          technique:
            "Hold up two food choices and wait 3-5 seconds before naming them",
          example:
            'Hold up a banana and crackers. Wait. If they point, say "Banana! You want banana."',
          parentTip:
            "Don't worry if they don't say the word. Pointing and reaching count as communication!",
        },
        {
          activityContext: "During snack time",
          technique: "Give a small portion so they need to request more",
          example:
            'Give 2 crackers instead of the whole bag. When they reach, model "More. More crackers."',
          parentTip:
            "Keep your language simple — use 1-2 word phrases at their level.",
        },
        {
          activityContext: "During drinks",
          technique: "Pause before pouring and wait for any communication attempt",
          example:
            'Hold the cup visible but out of reach. Wait. Model "Milk" or "Drink please."',
          parentTip:
            "Any sound, gesture, or eye contact is a communication attempt. Celebrate it!",
        },
      ],
    },
    tags: ["expressive-language", "late-talker", "mealtime", "first-words"],
    estimatedMinutes: 15,
  },
  {
    id: "ped-week-2",
    slug: "everyday-routines",
    path: "child",
    weekNumber: 2,
    title: "Everyday Routines as Learning",
    subtitle: "Routine-based language intervention",
    description:
      "Turn bath time, diaper changes, and getting dressed into powerful language-learning moments. Routines are predictable, which helps your child anticipate and eventually use words.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "Routines are gold for language development because they're predictable. When your child knows what comes next, they can start to anticipate and fill in words. Use the same phrases every time during routines — consistency is key.",
      kristineNote:
        "Pick ONE routine this week (bath time is perfect) and use the exact same 3-4 phrases every single time. Within days, you'll notice your child starting to anticipate.",
    },
    curatedMedia: {
      youtubeVideoId: "dFrSJOTGpFo",
      title: "Bath Time Songs & Words",
      channelName: "Songs for Littles",
      kristineAnnotation:
        "Notice the repetition of key words during the routine. This is exactly how to use bath time as a language-learning opportunity.",
    },
    refrigeratorPdf: {
      title: "3 Ways to Practice During Bath Time",
      pdfUrl: "/content/pdfs/ped-week-2-fridge.pdf",
      techniques: [
        {
          activityContext: "Getting into the bath",
          technique: "Narrate every step with simple, consistent phrases",
          example:
            '"Water on! Warm water. In you go! Splash splash!"',
          parentTip:
            "Use the exact same words in the exact same order every time.",
        },
        {
          activityContext: "During the bath",
          technique: "Use toys to model action words",
          example:
            '"Duck swims. Splash! Duck goes under. Where did duck go?"',
          parentTip:
            "Pause after asking a question to give them time to respond in any way.",
        },
        {
          activityContext: "Getting out of the bath",
          technique: "Create an anticipation routine",
          example:
            '"Ready? 1... 2... 3... UP! All done bath. Dry dry dry."',
          parentTip:
            "Counting routines build anticipation — your child may start saying '3' or 'up' on their own!",
        },
      ],
    },
    tags: ["routines", "bath-time", "toddler", "language-building"],
    estimatedMinutes: 15,
  },
  {
    id: "ped-week-3",
    slug: "play-based-learning",
    path: "child",
    weekNumber: 3,
    title: "Play-Based Language Building",
    subtitle: "Parallel talk and self-talk strategies",
    description:
      "Learn two simple narration techniques that SLPs use during play to flood your child with language in a natural, pressure-free way.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "Parallel talk (narrating what your child does) and self-talk (narrating what you do) are two of the most natural ways to model language during play. No flashcards, no drilling — just talking about what's happening right now.",
      kristineNote:
        "Follow your child's lead. Whatever toy they pick up, that's your language target. Don't redirect their play to teach — teach within their play.",
    },
    curatedMedia: {
      youtubeVideoId: "kcmqqHApxhE",
      title: "Learning Through Play",
      channelName: "Ms Rachel",
      kristineAnnotation:
        "Watch how the language follows the action, not the other way around. The child leads, the adult narrates. This is parallel talk in action.",
    },
    refrigeratorPdf: {
      title: "3 Ways to Practice During Playtime",
      pdfUrl: "/content/pdfs/ped-week-3-fridge.pdf",
      techniques: [
        {
          activityContext: "Playing with cars/trucks",
          technique:
            "Narrate what your child does (parallel talk)",
          example:
            "\"You're pushing the car. Vroom! Fast car. It crashed! Uh oh!\"",
          parentTip:
            "Match your excitement to theirs. If they're gentle, be soft-spoken. If they're crashing cars, be animated!",
        },
        {
          activityContext: "Building with blocks",
          technique:
            "Narrate what you do (self-talk)",
          example:
            "\"I'm stacking. One block. Two blocks. Tall tower! Should I knock it down?\"",
          parentTip:
            "Build something next to them rather than taking over their creation.",
        },
        {
          activityContext: "Any play activity",
          technique: "Add one word to what your child says",
          example:
            'Child says "car." You say "Red car!" or "Car goes!" This is called expansion.',
          parentTip:
            "Don't correct — expand. If they say 'goggy,' you say 'Yes! Big doggy!'",
        },
      ],
    },
    tags: ["play", "parallel-talk", "self-talk", "toddler"],
    estimatedMinutes: 15,
  },
  {
    id: "ped-week-4",
    slug: "building-sentences",
    path: "child",
    weekNumber: 4,
    title: "Building Toward Two Words",
    subtitle: "Expanding from single words to combinations",
    description:
      "Once your child has some single words, help them start combining words into two-word phrases — the building blocks of sentences.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "The jump from single words to two-word combinations is one of the most exciting milestones. Use these strategies to help bridge the gap: model two-word phrases frequently, use carrier phrases, and create opportunities for requesting.",
      kristineNote:
        "Don't wait for 50 words before expecting combinations. If your child has 10-20 words, start modeling two-word phrases. They might surprise you!",
    },
    curatedMedia: {
      youtubeVideoId: "dFrSJOTGpFo",
      title: "Two-Word Phrases for Toddlers",
      channelName: "Songs for Littles",
      kristineAnnotation:
        "Listen for the simple two-word phrases used throughout. 'More please,' 'big ball,' 'go car' — these are the building blocks we're targeting.",
    },
    refrigeratorPdf: {
      title: "3 Ways to Encourage Word Combinations",
      pdfUrl: "/content/pdfs/ped-week-4-fridge.pdf",
      techniques: [
        {
          activityContext: "During any activity",
          technique: 'Use carrier phrases: "more ___," "go ___," "big ___"',
          example:
            '"More milk? More crackers? More bubbles?" The word "more" becomes the carrier.',
          parentTip:
            "Pick one carrier phrase and use it ALL day. Consistency builds patterns.",
        },
        {
          activityContext: "During play",
          technique: "Model adjective + noun combinations",
          example:
            '"Big ball! Little ball. Red car. Fast car."',
          parentTip:
            "Point to the object as you say each word to help your child connect language to meaning.",
        },
        {
          activityContext: "During transitions",
          technique: "Model action + object combinations",
          example:
            '"Open door. Close door. Wash hands. Get shoes."',
          parentTip:
            "Transitions happen dozens of times a day — each one is a free language lesson!",
        },
      ],
    },
    tags: ["word-combinations", "two-word-phrases", "expressive-language"],
    estimatedMinutes: 15,
  },
];
