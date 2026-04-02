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
    coverImage: {
      src: "/images/blueprints/wait-and-model.svg",
      alt: "Warm illustrated scene of a parent pausing with two snack choices while a toddler reaches and vocalizes.",
      width: 1200,
      height: 900,
      caption: "Pause. Wait. Model the word after the child shows interest.",
    },
    commentary: {
      type: "text",
      textContent:
        "Wait and Model is the #1 technique I teach parents. Instead of prompting your child to say words, you create natural opportunities by waiting expectantly, then modeling the word yourself. Watch how Ms. Rachel uses this exact technique in the video below.",
      slpNote:
        "This is the technique that makes the biggest difference for late talkers. Most parents talk too much and wait too little. Give your child 3-5 seconds of silence with an expectant look before modeling the word.",
      narration: {
        title: "Read-aloud: Blueprint week one commentary",
        audioSrc: "/audio/blueprints/wait-and-model-commentary.mp3",
        durationLabel: "52 sec",
        voice: "Sarah",
        transcript:
          "Wait and Model is one of the first techniques I teach parents. You create a natural opportunity, pause with an expectant look, and then model the word after your child reaches, points, or vocalizes. The goal is not pressure. The goal is a clear language model inside a real routine.",
      },
    },
    curatedMedia: {
      youtubeVideoId: "kcmqqHApxhE",
      title: "Songs for Littles - Learning Words",
      channelName: "Ms Rachel",
      slpAnnotation:
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
    coverImage: {
      src: "/images/blueprints/everyday-routines.svg",
      alt: "Illustrated family routine board showing bath time, dressing, and breakfast with repeatable language prompts.",
      width: 1200,
      height: 900,
      caption: "The same short phrases repeated inside familiar routines.",
    },
    commentary: {
      type: "text",
      textContent:
        "Routines are gold for language development because they're predictable. When your child knows what comes next, they can start to anticipate and fill in words. Use the same phrases every time during routines — consistency is key.",
      slpNote:
        "Pick ONE routine this week (bath time is perfect) and use the exact same 3-4 phrases every single time. Within days, you'll notice your child starting to anticipate.",
    },
    curatedMedia: {
      youtubeVideoId: "dFrSJOTGpFo",
      title: "Bath Time Songs & Words",
      channelName: "Songs for Littles",
      slpAnnotation:
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
    coverImage: {
      src: "/images/blueprints/play-based-language.svg",
      alt: "Illustrated parent and child building blocks side by side with language bubbles and playful arrows.",
      width: 1200,
      height: 900,
      caption: "Let the child lead the play while the adult narrates the action.",
    },
    commentary: {
      type: "text",
      textContent:
        "Parallel talk (narrating what your child does) and self-talk (narrating what you do) are two of the most natural ways to model language during play. No flashcards, no drilling — just talking about what's happening right now.",
      slpNote:
        "Follow your child's lead. Whatever toy they pick up, that's your language target. Don't redirect their play to teach — teach within their play.",
    },
    curatedMedia: {
      youtubeVideoId: "kcmqqHApxhE",
      title: "Learning Through Play",
      channelName: "Ms Rachel",
      slpAnnotation:
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
      slpNote:
        "Start modeling two-word phrases as soon as your child has any single words — even just 5-10. You're not expecting them to copy you immediately. You're planting seeds. Some children combine at 50 words, others at 10. There's no magic number, and there's no pressure.",
    },
    curatedMedia: {
      youtubeVideoId: "dFrSJOTGpFo",
      title: "Two-Word Phrases for Toddlers",
      channelName: "Songs for Littles",
      slpAnnotation:
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
  {
    id: "ped-week-5",
    slug: "reading-together",
    path: "child",
    weekNumber: 5,
    title: "Reading Together",
    subtitle: "Dialogic reading technique",
    description:
      "Transform story time into the most powerful language-building activity of the day. Learn to read WITH your child, not just TO them.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "Dialogic reading flips the script on traditional story time. Instead of reading every word on the page, you ask questions, let your child lead, and comment on pictures together. The book becomes a conversation starter, not a script to follow.",
      slpNote:
        "The single best predictor of language development is how many books a child is exposed to. But HOW you read matters more than how many books you own.",
    },
    curatedMedia: {
      youtubeVideoId: "kcmqqHApxhE",
      title: "Reading with Toddlers",
      channelName: "Speech Pathology Tips",
      slpAnnotation:
        "Notice how the reader pauses on each page, points to pictures, and waits for the child to respond before turning. This is dialogic reading.",
    },
    refrigeratorPdf: {
      title: "3 Ways to Make Story Time Interactive",
      pdfUrl: "/content/pdfs/ped-week-5-fridge.pdf",
      techniques: [
        {
          activityContext: "Before reading",
          technique: "Let your child choose the book and hold it",
          example:
            "Offer two books and let them pick. Hand them the book so they control the page turns.",
          parentTip:
            "Re-reading the same book over and over is great — repetition builds familiarity and confidence.",
        },
        {
          activityContext: "During reading",
          technique: "Ask open-ended questions about the pictures",
          example:
            '"What do you see? What\'s the doggy doing? Where is the ball?" Point to pictures as you talk.',
          parentTip:
            "Don't worry about reading every word on the page. The conversation matters more than the text.",
        },
        {
          activityContext: "After reading",
          technique: "Connect the story to your child's life",
          example:
            '"The boy had a dog! We have a dog too! What\'s our dog\'s name?"',
          parentTip:
            "Making personal connections helps children remember and use new vocabulary.",
        },
      ],
    },
    tags: ["reading", "vocabulary", "dialogic-reading", "books"],
    estimatedMinutes: 15,
  },
  {
    id: "ped-week-6",
    slug: "songs-and-music",
    path: "child",
    weekNumber: 6,
    title: "Songs & Music for Language",
    subtitle: "Fill-in-the-blank singing",
    description:
      "Music activates language centers in the brain differently than speech. Use songs to build vocabulary, rhythm, and early sentence patterns.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "Fill-in-the-blank singing is one of the easiest ways to elicit words from toddlers. Sing a familiar song like 'Twinkle twinkle little ___' and pause before the key word. Your child's brain will want to fill in that gap — and eventually, they will.",
      slpNote:
        "Children often sing words before they speak them. Song lyrics are stored in a different part of the brain, which is why music therapy works even for severe delays.",
    },
    curatedMedia: {
      youtubeVideoId: "dFrSJOTGpFo",
      title: "Nursery Rhymes for Speech",
      channelName: "Songs for Littles",
      slpAnnotation:
        "Listen for the pauses before key words. The child fills in the blank naturally. This is implicit language learning.",
    },
    refrigeratorPdf: {
      title: "3 Musical Activities for Language Building",
      pdfUrl: "/content/pdfs/ped-week-6-fridge.pdf",
      techniques: [
        {
          activityContext: "Singing familiar songs",
          technique: "Pause before the last word of each line",
          example:
            '"Twinkle twinkle little ___. Old MacDonald had a ___." Wait 3-5 seconds for them to fill in.',
          parentTip:
            "Even if they just hum or babble the missing word, that counts as participation!",
        },
        {
          activityContext: "Action songs",
          technique: "Pair movements with words in songs",
          example:
            '"Head, shoulders, knees and toes — touch each body part as you sing. Wheels on the Bus with hand motions."',
          parentTip:
            "Movement helps children remember words. The gestures become cues for the vocabulary.",
        },
        {
          activityContext: "Throughout the day",
          technique: "Make up simple songs for daily routines",
          example:
            '"This is the way we brush our teeth, brush our teeth..." Sing during transitions to signal what comes next.',
          parentTip:
            "You don't need to be a good singer. Your child thinks your voice is the best sound in the world.",
        },
      ],
    },
    tags: ["music", "songs", "nursery-rhymes", "vocabulary"],
    estimatedMinutes: 15,
  },
  {
    id: "ped-week-7",
    slug: "social-words",
    path: "child",
    weekNumber: 7,
    title: "Social Words & Greetings",
    subtitle: "Teaching hi, bye, please, thank you",
    description:
      "Social words are among the most motivating for toddlers because they get immediate responses from everyone around them.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "Social words work because they're embedded in natural routines that happen dozens of times a day. Practice 'hi' and 'bye' at every door, 'please' and 'thank you' at every handoff. The key is consistency across family members and settings.",
      slpNote:
        "Social words are 'power words' — they work in every situation. A child who can say 'hi' and 'bye' gets smiles from everyone, which reinforces more communication.",
    },
    curatedMedia: {
      youtubeVideoId: "kcmqqHApxhE",
      title: "Teaching Social Words",
      channelName: "Speech Sisters",
      slpAnnotation:
        "Watch how social words are modeled in natural contexts, not drilled. The child learns because saying 'hi' gets an enthusiastic response.",
    },
    refrigeratorPdf: {
      title: "3 Ways to Practice Social Words Daily",
      pdfUrl: "/content/pdfs/ped-week-7-fridge.pdf",
      techniques: [
        {
          activityContext: "At doors and transitions",
          technique: "Wave and say 'hi' or 'bye' at every entrance and exit",
          example:
            "Every time you walk through a door or someone arrives/leaves, wave and model the word. Make it a game.",
          parentTip:
            "Exaggerate your wave and make eye contact. The bigger the gesture, the more likely they'll imitate.",
        },
        {
          activityContext: "During handoffs",
          technique: "Model 'please' and 'thank you' when giving and receiving items",
          example:
            '"Hand me the cup? Say please! Here you go — thank you!" Use a singsong voice.',
          parentTip:
            "Don't withhold items until they say the word perfectly. Model it and move on — pressure backfires.",
        },
        {
          activityContext: "With family and friends",
          technique: "Recruit everyone to respond enthusiastically to social words",
          example:
            "Tell grandparents, siblings, and babysitters to make a big deal when they hear 'hi,' 'bye,' or 'thank you.'",
          parentTip:
            "The more people who respond warmly to these words, the more motivating they become for your child.",
        },
      ],
    },
    tags: ["social-skills", "greetings", "pragmatics", "functional-words"],
    estimatedMinutes: 15,
  },
  {
    id: "ped-week-8",
    slug: "putting-it-together",
    path: "child",
    weekNumber: 8,
    title: "Putting It All Together",
    subtitle: "Review, celebrate, and plan ahead",
    description:
      "Look back at 8 weeks of progress, combine all strategies into a sustainable daily routine, and plan your next steps.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "You've learned Wait and Model, routine-based language, play-based narration, word combinations, dialogic reading, musical language, and social words. Now it's time to combine them into a daily routine that fits your family's life — and decide what comes next. Important: if your child has lost words they previously used, stopped babbling, or avoids eye contact, contact your pediatrician right away — these are red flags that shouldn't wait.",
      slpNote:
        "After 8 weeks, most families notice changes — even small ones count. If you haven't seen progress, that's okay and it's NOT your fault. It tells your SLP valuable information about what kind of support your child needs. Some children need more intensive, individualized therapy, and your home practice data helps your SLP plan that.",
    },
    curatedMedia: {
      youtubeVideoId: "dFrSJOTGpFo",
      title: "Language Development Recap",
      channelName: "Speech Pathology Tips",
      slpAnnotation:
        "This recap video ties together all the techniques from previous weeks. Use it as a refresher anytime.",
    },
    refrigeratorPdf: {
      title: "Your Weekly Language Routine Planner",
      pdfUrl: "/content/pdfs/ped-week-8-fridge.pdf",
      techniques: [
        {
          activityContext: "Morning routine",
          technique: "Use social words and routine narration during wake-up and breakfast",
          example:
            '"Good morning! Hi! Let\'s get dressed — shirt on, pants on. What do you want? Cereal or toast?"',
          parentTip:
            "Mornings are a goldmine for language. Narrate, give choices, and wait for responses.",
        },
        {
          activityContext: "Playtime and reading",
          technique: "Combine parallel talk, expansion, and dialogic reading",
          example:
            "Follow their lead during play. Read one book using dialogic strategies. Sing one song with fill-in-the-blank pauses.",
          parentTip:
            "You don't need a dedicated 'therapy time.' Weave strategies into what you're already doing.",
        },
        {
          activityContext: "Planning next steps",
          technique: "Track progress and decide if professional evaluation is needed",
          example:
            "Count how many words they use now vs. 8 weeks ago. Are they combining words? Communicating more? Share this with your pediatrician or SLP.",
          parentTip:
            "Progress looks different for every child. Even small gains — more eye contact, more gestures, more babbling — are meaningful.",
        },
      ],
    },
    tags: ["review", "routine", "next-steps", "celebration"],
    estimatedMinutes: 15,
  },
];
