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
      kristineNote:
        "The most important thing is: if something doesn't feel right during a meal — they're coughing, their voice sounds gurgly, or they seem to be struggling — stop and wait. Trust your instincts.",
    },
    curatedMedia: {
      youtubeVideoId: "sIHHKCmcbxQ",
      title: "Understanding Dysphagia: What Caregivers Need to Know",
      channelName: "Dysphagia Education",
      kristineAnnotation:
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
      kristineNote:
        "The most common mistake caregivers make is over-blending everything into baby food. Many modified diets allow much more appealing textures than you'd think. Let's make meals dignified and delicious.",
    },
    curatedMedia: {
      youtubeVideoId: "sIHHKCmcbxQ",
      title: "IDDSI Framework Explained",
      channelName: "IDDSI Education",
      kristineAnnotation:
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
      kristineNote:
        "The biggest mistake I see families make is talking louder or slower as if the person can't understand. With aphasia, the problem isn't hearing — it's language processing. Use these strategies instead.",
    },
    curatedMedia: {
      youtubeVideoId: "sIHHKCmcbxQ",
      title: "Communicating with Someone Who Has Aphasia",
      channelName: "Aphasia Education",
      kristineAnnotation:
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
      kristineNote:
        "Consistency matters more than intensity. Ten minutes twice a day is better than one hour once a week. Set a routine — pair exercises with an existing habit like after morning coffee.",
    },
    curatedMedia: {
      youtubeVideoId: "sIHHKCmcbxQ",
      title: "Swallowing Exercises You Can Do at Home",
      channelName: "SLP Education",
      kristineAnnotation:
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
];
