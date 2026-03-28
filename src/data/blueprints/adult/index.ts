import type { WeeklyBlueprint } from "@/types/content";

export const adultBlueprints: WeeklyBlueprint[] = [
  {
    id: "adult-week-1",
    slug: "safe-swallowing-basics",
    path: "adult",
    weekNumber: 1,
    title: "Safe Swallowing Basics",
    subtitle: "Understanding modified diets and mealtime safety",
    description:
      "Learn what a modified diet means, why it was recommended, and how to make mealtimes safer and less stressful for everyone.",
    accessTier: "trial",
    commentary: {
      type: "text",
      textContent:
        "When your loved one is discharged on a 'modified diet,' it can feel overwhelming. What does 'nectar thick' even mean? This week, we'll break down the basics of swallowing safety so you feel confident at every meal.",
      slpNote:
        "The most important thing is: if something doesn't feel right during a meal — they're coughing, their voice sounds gurgly, or they seem to be struggling — stop and wait. Trust your instincts.",
    },
    curatedMedia: {
      youtubeVideoId: "sIHHKCmcbxQ",
      title: "Understanding Dysphagia: What Caregivers Need to Know",
      channelName: "Dysphagia Education",
      slpAnnotation:
        "This video explains the swallowing process simply. Pay attention to the section about what happens when food goes down the wrong way — understanding this helps you know what to watch for.",
    },
    refrigeratorPdf: {
      title: "Mealtime Safety Checklist",
      pdfUrl: "/content/pdfs/adult-week-1-fridge.pdf",
      techniques: [
        {
          activityContext: "Before the meal",
          technique: "Set up for success: positioning, environment, timing",
          example:
            "Sit them upright at 90 degrees. Remove distractions (TV off). Make sure they're alert and awake.",
          parentTip:
            "Never rush a meal. If they're drowsy or fatigued, wait until they're more alert.",
        },
        {
          activityContext: "During the meal",
          technique: "Watch for warning signs of swallowing difficulty",
          example:
            "Coughing, throat clearing, wet/gurgly voice, food falling from mouth, taking very long to chew.",
          parentTip:
            "A wet or gurgly voice after swallowing can mean food or liquid entered the airway — even without coughing.",
        },
        {
          activityContext: "After the meal",
          technique: "Stay upright and do oral care",
          example:
            "Keep them sitting upright for 30 minutes after eating. Brush teeth or clean mouth to remove residue.",
          parentTip:
            "Good oral hygiene reduces pneumonia risk — bacteria in the mouth can travel to the lungs if aspirated.",
        },
      ],
    },
    tags: ["swallowing", "safety", "caregiver", "basics"],
    estimatedMinutes: 20,
  },
  {
    id: "adult-week-2",
    slug: "iddsi-made-simple",
    path: "adult",
    weekNumber: 2,
    title: "IDDSI Made Simple",
    subtitle: "Understanding texture-modified diets",
    description:
      "Demystify IDDSI diet levels so you know exactly what foods are safe to prepare. No more guessing with blenders and thickeners.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "IDDSI (International Dysphagia Diet Standardisation Initiative) is the global framework for describing food textures and liquid thickness. Your doctor or SLP prescribed a specific level — this week, we'll help you understand exactly what that means in your kitchen.",
      slpNote:
        "The most common mistake caregivers make is over-blending everything into baby food. Many modified diets allow much more appealing textures than you'd think. Let's make meals dignified and delicious.",
    },
    curatedMedia: {
      youtubeVideoId: "sIHHKCmcbxQ",
      title: "IDDSI Framework Explained",
      channelName: "IDDSI Education",
      slpAnnotation:
        "This overview explains each IDDSI level with visual examples. Focus on the level your loved one was prescribed — you don't need to memorize all of them.",
    },
    refrigeratorPdf: {
      title: "Quick IDDSI Level Guide for Your Kitchen",
      pdfUrl: "/content/pdfs/adult-week-2-fridge.pdf",
      techniques: [
        {
          activityContext: "Testing food texture",
          technique: "Use the fork drip test and spoon tilt test",
          example:
            "For IDDSI Level 4 (Pureed): food should not drip through fork prongs. For Level 3 (Liquidised): it should drip slowly through.",
          parentTip:
            "When in doubt, test the texture. These simple tests take seconds and keep meals safe.",
        },
        {
          activityContext: "Thickening liquids",
          technique: "Follow the product instructions exactly",
          example:
            "Measure thickener carefully. Under-thickened liquids may be unsafe. Over-thickened liquids are unpleasant and can cause dehydration.",
          parentTip:
            "Some thickeners continue to thicken over time. Prepare drinks close to when they'll be consumed.",
        },
        {
          activityContext: "Meal planning",
          technique: "Modify family recipes instead of making separate meals",
          example:
            "Making pasta? Blend theirs with extra sauce to the right texture. Same flavors, different texture.",
          parentTip:
            "Eating together matters for dignity and quality of life. Adapt the family meal whenever possible.",
        },
      ],
    },
    tags: ["iddsi", "modified-diet", "food-texture", "caregiver"],
    estimatedMinutes: 20,
  },
  {
    id: "adult-week-3",
    slug: "communication-strategies",
    path: "adult",
    weekNumber: 3,
    title: "Communication After Stroke",
    subtitle: "Supporting conversation with aphasia",
    description:
      "When your loved one can't find words or understand what you're saying, it's frustrating for everyone. Learn practical strategies to maintain meaningful connection.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "Aphasia affects language, not intelligence. Your loved one is still the same person inside — they just can't access words the way they used to. These supported conversation techniques can transform your daily interactions.",
      slpNote:
        "The biggest mistake I see families make is talking louder or slower as if the person can't understand. With aphasia, the problem isn't hearing — it's language processing. Use these strategies instead.",
    },
    curatedMedia: {
      youtubeVideoId: "sIHHKCmcbxQ",
      title: "Communicating with Someone Who Has Aphasia",
      channelName: "Aphasia Education",
      slpAnnotation:
        "Watch how the caregiver uses gestures, writing, and yes/no questions to support the conversation. These simple tools make a huge difference.",
    },
    refrigeratorPdf: {
      title: "3 Ways to Communicate Without Words",
      pdfUrl: "/content/pdfs/adult-week-3-fridge.pdf",
      techniques: [
        {
          activityContext: "Asking questions",
          technique: "Use yes/no questions instead of open-ended ones",
          example:
            'Instead of "What do you want for lunch?" ask "Do you want soup? Yes or no?"',
          parentTip:
            "Have them point to thumbs up/down or nod — don't require verbal yes/no if that's hard too.",
        },
        {
          activityContext: "During conversation",
          technique: "Use visual supports (photos, written words, gestures)",
          example:
            "Show a photo of family members and ask who they'd like to call. Point to a menu with pictures at a restaurant.",
          parentTip:
            "A simple communication board on the fridge with common needs (hungry, thirsty, tired, pain) can be life-changing.",
        },
        {
          activityContext: "When they're frustrated",
          technique: "Acknowledge the frustration, then try a different approach",
          example:
            '"I can see this is frustrating. Let\'s try another way. Can you show me? Point to it? Draw it?"',
          parentTip:
            "Never finish their sentences unless they signal they want help. Give them time — count to 10 in your head.",
        },
      ],
    },
    tags: ["aphasia", "communication", "stroke", "caregiver"],
    estimatedMinutes: 20,
  },
  {
    id: "adult-week-4",
    slug: "exercise-routine",
    path: "adult",
    weekNumber: 4,
    title: "Building an Exercise Routine",
    subtitle: "Swallowing exercises for home practice",
    description:
      "Learn safe, evidence-based exercises that can help maintain or improve swallowing function at home, under guidance from your SLP.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "Swallowing exercises should be prescribed by an SLP based on the specific impairments found during evaluation. The exercises below are general strengthening exercises commonly recommended for home practice. Always follow your SLP's specific recommendations.",
      slpNote:
        "Consistency matters more than intensity. Ten minutes twice a day is better than one hour once a week. Set a routine — pair exercises with an existing habit like after morning coffee.",
    },
    curatedMedia: {
      youtubeVideoId: "sIHHKCmcbxQ",
      title: "Swallowing Exercises You Can Do at Home",
      channelName: "SLP Education",
      slpAnnotation:
        "Follow along with the demonstrated exercises. Start slowly and stop if there is any pain. These exercises should feel like work, but not cause discomfort.",
    },
    refrigeratorPdf: {
      title: "Daily Swallowing Exercise Card",
      pdfUrl: "/content/pdfs/adult-week-4-fridge.pdf",
      techniques: [
        {
          activityContext: "Morning routine",
          technique: "Effortful swallow practice",
          example:
            "Swallow your saliva while squeezing all your throat muscles as hard as you can. Hold for 2 seconds. Repeat 10 times.",
          parentTip:
            "Do this before breakfast when the throat is rested. It should feel like hard work.",
        },
        {
          activityContext: "After lunch",
          technique: "Tongue strengthening exercises",
          example:
            "Press tongue hard against the roof of your mouth and hold for 5 seconds. Repeat 10 times. Then push tongue into each cheek.",
          parentTip:
            "These can be done anywhere — in front of the TV, during a car ride, or while reading.",
        },
        {
          activityContext: "Before dinner",
          technique: "Mendelsohn maneuver practice",
          example:
            "Swallow and try to hold your Adam's apple up at its highest point for 2-3 seconds before letting it drop.",
          parentTip:
            "Place fingers on the throat to feel the larynx rise. This exercise is tricky at first — it gets easier with practice.",
        },
      ],
    },
    tags: ["exercises", "swallowing", "home-practice", "rehabilitation"],
    estimatedMinutes: 20,
  },
  {
    id: "adult-week-5",
    slug: "preventing-dehydration",
    path: "adult",
    weekNumber: 5,
    title: "Preventing Dehydration",
    subtitle: "Thickened liquids and fluid tracking",
    description:
      "Dehydration is one of the most dangerous side effects of swallowing difficulty. Learn to ensure adequate fluid intake with modified liquids.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "When swallowing liquids becomes difficult or unsafe, many people simply stop drinking enough. Thickened liquids can help, but they need to be prepared correctly and offered consistently. Tracking daily intake is the only way to know if your loved one is getting enough fluids.",
      slpNote:
        "Dehydration is the silent danger of dysphagia. When drinking becomes difficult, people simply stop drinking enough. Track fluid intake daily — aim for 6-8 cups.",
    },
    curatedMedia: {
      youtubeVideoId: "sIHHKCmcbxQ",
      title: "Managing Thickened Liquids",
      channelName: "Dysphagia Education",
      slpAnnotation:
        "Pay attention to the different thickness levels shown. Your loved one's prescribed level is specific — don't guess.",
    },
    refrigeratorPdf: {
      title: "Daily Fluid Intake Tracker",
      pdfUrl: "/content/pdfs/adult-week-5-fridge.pdf",
      techniques: [
        {
          activityContext: "Morning routine",
          technique: "Start the day with a measured thickened drink",
          example:
            "Prepare 8 oz of thickened coffee or juice first thing. Mark it on the tracker sheet on the fridge.",
          parentTip:
            "Flavor matters — experiment with different beverages thickened to the prescribed level to find favorites.",
        },
        {
          activityContext: "Throughout the day",
          technique: "Offer fluids every 1-2 hours, not just at meals",
          example:
            "Set phone reminders. Keep pre-thickened drinks in the fridge. Offer small amounts frequently rather than large amounts rarely.",
          parentTip:
            "Many people with dysphagia won't ask for drinks. You need to offer proactively.",
        },
        {
          activityContext: "Monitoring for dehydration",
          technique: "Watch for signs: dark urine, dry mouth, confusion, fatigue",
          example:
            "Check urine color — pale yellow is the goal. Dry lips, decreased urine output, and increased confusion are red flags.",
          parentTip:
            "If you suspect dehydration, contact their doctor immediately. It can escalate quickly in older adults.",
        },
      ],
    },
    tags: ["hydration", "thickened-liquids", "tracking", "safety"],
    estimatedMinutes: 20,
  },
  {
    id: "adult-week-6",
    slug: "eating-out-safely",
    path: "adult",
    weekNumber: 6,
    title: "Eating Out Safely",
    subtitle: "Restaurant strategies and communication",
    description:
      "Modified diets don't mean the end of dining out. Learn to navigate restaurants, communicate needs, and enjoy meals together.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "Dining out is about more than food — it's about connection, normalcy, and quality of life. With some preparation — calling ahead, reviewing the menu, bringing portable thickener, and knowing how to communicate with servers — most restaurants can accommodate modified diets.",
      slpNote:
        "Social eating is essential for quality of life. Isolation during meals leads to depression. With preparation, most restaurants can accommodate modified diets.",
    },
    curatedMedia: {
      youtubeVideoId: "sIHHKCmcbxQ",
      title: "Dining Out with Dysphagia",
      channelName: "Caregiver Education",
      slpAnnotation:
        "The practical tips in this video — calling ahead, bringing your own thickener, choosing the right menu items — make dining out achievable.",
    },
    refrigeratorPdf: {
      title: "Restaurant Preparation Checklist",
      pdfUrl: "/content/pdfs/adult-week-6-fridge.pdf",
      techniques: [
        {
          activityContext: "Before going out",
          technique: "Call the restaurant and review the menu online",
          example:
            "Ask if they can modify textures (mashed potatoes, well-cooked vegetables, soups). Many restaurants are willing to accommodate.",
          parentTip:
            "Choose restaurants you've called ahead to — it removes stress and lets you focus on enjoying the meal.",
        },
        {
          activityContext: "What to bring",
          technique: "Pack a dining-out kit with essentials",
          example:
            "Portable thickener packets, a small blender or fork for mashing, napkins, and a card explaining the diet needs to show the server.",
          parentTip:
            "A simple card that says 'I need soft/pureed foods due to a swallowing condition' avoids awkward explanations.",
        },
        {
          activityContext: "At the restaurant",
          technique: "Communicate clearly with the server and choose wisely",
          example:
            "Soups, mashed sides, well-cooked fish, and ice cream are often safe choices. Avoid bread, raw vegetables, and mixed textures.",
          parentTip:
            "Focus on the experience, not just the food. Being out together matters more than a perfect menu choice.",
        },
      ],
    },
    tags: ["dining-out", "social", "quality-of-life", "preparation"],
    estimatedMinutes: 20,
  },
  {
    id: "adult-week-7",
    slug: "cognitive-communication",
    path: "adult",
    weekNumber: 7,
    title: "Cognitive-Communication Exercises",
    subtitle: "Attention, memory, and word-finding practice",
    description:
      "After stroke or brain injury, thinking and language often recover together. Simple daily exercises can strengthen both.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "Cognitive-communication connects thinking skills — attention, memory, problem-solving — with the ability to use language effectively. Daily practice routines that target these skills together can accelerate recovery. The exercises should be functional and meaningful, not just worksheets.",
      slpNote:
        "Cognitive-communication recovery is a marathon, not a sprint. Ten minutes of focused practice daily is more effective than one hour once a week.",
    },
    curatedMedia: {
      youtubeVideoId: "sIHHKCmcbxQ",
      title: "Brain Exercises After Stroke",
      channelName: "Cognitive Rehab",
      slpAnnotation:
        "These exercises target attention, memory, and word-finding. Start with the easiest level and progress when accuracy reaches 80%.",
    },
    refrigeratorPdf: {
      title: "3 Daily Brain Exercises",
      pdfUrl: "/content/pdfs/adult-week-7-fridge.pdf",
      techniques: [
        {
          activityContext: "Morning warm-up",
          technique: "Category naming: list as many items as you can in 60 seconds",
          example:
            "\"Name all the animals you can think of. Name all the foods in your kitchen. Name all the states you've visited.\"",
          parentTip:
            "Write down what they say and count the total. Track it over weeks — you'll likely see the numbers increase.",
        },
        {
          activityContext: "Midday practice",
          technique: "Memory exercises using daily events",
          example:
            "\"What did you have for breakfast? What was on the news this morning? What did we do yesterday afternoon?\"",
          parentTip:
            "Use real-life questions, not trivia. Functional memory practice transfers better to daily life.",
        },
        {
          activityContext: "Evening wind-down",
          technique: "Word-finding practice with descriptions",
          example:
            "\"I'm thinking of something you use to cut food — what is it?\" Give clues if they're stuck: \"It starts with K.\"",
          parentTip:
            "If they can't find the word, give the first sound as a cue. If that doesn't help, say the word together — no shame in it.",
        },
      ],
    },
    tags: ["cognitive", "memory", "attention", "word-finding", "stroke-recovery"],
    estimatedMinutes: 20,
  },
  {
    id: "adult-week-8",
    slug: "long-term-routine",
    path: "adult",
    weekNumber: 8,
    title: "Building Your Long-Term Routine",
    subtitle: "Sustainable daily care plan",
    description:
      "Combine everything you've learned into a sustainable daily routine that supports recovery without caregiver burnout.",
    accessTier: "paid",
    commentary: {
      type: "text",
      textContent:
        "Eight weeks of learning safe swallowing, modified diets, communication strategies, exercises, hydration, dining out, and cognitive exercises — now it's time to build a sustainable routine. The key word is sustainable. A routine that burns you out helps no one. Build in rest, ask for help, and adjust as needed.",
      slpNote:
        "Caregiver burnout is real and it directly affects your loved one's recovery. A sustainable routine protects both of you. If something isn't working, change it.",
    },
    curatedMedia: {
      youtubeVideoId: "sIHHKCmcbxQ",
      title: "Long-Term Caregiving Strategies",
      channelName: "Caregiver Support",
      slpAnnotation:
        "Focus on the section about building routines that work for YOUR life. Cookie-cutter schedules rarely survive contact with reality.",
    },
    refrigeratorPdf: {
      title: "Your Weekly Care Routine Planner",
      pdfUrl: "/content/pdfs/adult-week-8-fridge.pdf",
      techniques: [
        {
          activityContext: "Building your daily schedule",
          technique: "Anchor exercises and activities to existing habits",
          example:
            "Swallowing exercises after morning coffee. Cognitive practice after lunch. Fluid tracking on the fridge — check at every meal.",
          parentTip:
            "Don't add new time blocks. Attach new habits to things you already do — they're more likely to stick.",
        },
        {
          activityContext: "Caregiver self-care",
          technique: "Schedule breaks and ask for help before you need it",
          example:
            "Identify one person who can take over for 2 hours a week. Use that time for yourself — not errands.",
          parentTip:
            "You cannot pour from an empty cup. Your wellbeing is not optional — it's part of the care plan.",
        },
        {
          activityContext: "When to seek re-evaluation",
          technique: "Watch for changes and communicate with the care team",
          example:
            "If swallowing gets worse, new coughing appears, weight drops, or exercises become too easy — contact your SLP for a re-evaluation.",
          parentTip:
            "Progress isn't always linear. Plateaus are normal. But sudden changes deserve professional attention.",
        },
      ],
    },
    tags: ["routine", "self-care", "sustainability", "long-term", "burnout-prevention"],
    estimatedMinutes: 20,
  },
];
