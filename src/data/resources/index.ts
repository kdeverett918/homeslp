export type ResourcePlatform = "youtube" | "instagram" | "tiktok" | "facebook" | "podcast";
export type ResourceTopic =
  | "late-talkers"
  | "articulation"
  | "apraxia"
  | "feeding"
  | "bilingual"
  | "autism"
  | "stuttering"
  | "general"
  | "toddler-activities"
  | "parent-support";

export interface CuratedResource {
  id: string;
  name: string;
  platform: ResourcePlatform;
  handle?: string;
  url: string;
  description: string;
  whyRecommended: string;
  topics: ResourceTopic[];
  isStaffPick: boolean;
}

export const curatedResources: CuratedResource[] = [
  // ─── YOUTUBE (8) ──────────────────────────────────────────────────────
  {
    id: "yt-ms-rachel",
    name: "Ms. Rachel — Songs for Littles",
    platform: "youtube",
    handle: "@msrachel",
    url: "https://www.youtube.com/@msrachel",
    description:
      "Engaging musical videos designed specifically to encourage first words, baby sign language, and early language milestones. Her content naturally incorporates strategies like simplified language, repetition, and wait time that align with speech-language development principles.",
    whyRecommended:
      "Ms. Rachel consistently models evidence-based language stimulation strategies like recasting, expansion, and parallel talk — all wrapped in a format toddlers genuinely love. One of the few children's channels an SLP can recommend without caveats.",
    topics: ["late-talkers", "general", "toddler-activities"],
    isStaffPick: true,
  },
  {
    id: "yt-speech-sisters",
    name: "Speech Sisters",
    platform: "youtube",
    handle: "@TheSpeechSisters",
    url: "https://www.youtube.com/@TheSpeechSisters",
    description:
      "Two certified SLPs and sisters who create parent coaching content focused on late talkers, first words, and building communication confidence at home. Their approach blends professional expertise with relatable parenting experience.",
    whyRecommended:
      "They translate clinical jargon into actionable strategies parents can use immediately. Their focus on parent coaching aligns with what research shows is most effective — empowering caregivers rather than creating dependence on therapy sessions.",
    topics: ["late-talkers", "parent-support", "general"],
    isStaffPick: false,
  },
  {
    id: "yt-laura-mize",
    name: "Laura Mize — Teach Me To Talk",
    platform: "youtube",
    handle: "@teachmetotalk",
    url: "https://www.youtube.com/@teachmetotalk",
    description:
      "Veteran pediatric SLP Laura Mize provides in-depth video tutorials on toddler communication development, covering everything from pre-verbal skills to early sentence formation. Her content is thorough and clinically grounded.",
    whyRecommended:
      "Laura's decades of pediatric experience shows in every video. She explains the 'why' behind strategies, helping parents understand developmental progression rather than just memorizing techniques. Truly bridges the gap between clinical knowledge and home practice.",
    topics: ["late-talkers", "autism", "general", "parent-support"],
    isStaffPick: true,
  },
  {
    id: "yt-speechie-side-up",
    name: "Speechie Side Up",
    platform: "youtube",
    handle: "@SpeechieSideUp",
    url: "https://www.youtube.com/@SpeechieSideUp",
    description:
      "SLP-created educational content that breaks down speech-language concepts for parents and caregivers. Topics range from speech sound development to understanding therapy goals and what to expect at different ages.",
    whyRecommended:
      "Provides well-organized explanations of common speech-language concerns without the fear-mongering found on many parent forums. Helps parents become informed participants in their child's therapy journey.",
    topics: ["articulation", "general", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "yt-speech-scoop",
    name: "The Speech Scoop",
    platform: "youtube",
    handle: "@TheSpeechScoop",
    url: "https://www.youtube.com/@TheSpeechScoop",
    description:
      "Practical speech therapy tips and activity demonstrations aimed at parents who want to support their child's communication at home. Covers articulation, language, and early literacy connections.",
    whyRecommended:
      "Focuses on showing rather than telling — you can watch real demonstrations of techniques and immediately try them with your child. The activity ideas use everyday materials most families already have at home.",
    topics: ["articulation", "general", "toddler-activities"],
    isStaffPick: false,
  },
  {
    id: "yt-playing-with-purpose",
    name: "Playing With Purpose",
    platform: "youtube",
    handle: "@PlayingWithPurpose",
    url: "https://www.youtube.com/@PlayingWithPurpose",
    description:
      "Play-based speech and language activities that transform everyday toys and routines into language-learning opportunities. Emphasizes the power of following a child's lead during play.",
    whyRecommended:
      "Play is how young children learn best, and this channel models exactly how to embed language goals into natural play interactions. Aligns perfectly with naturalistic intervention approaches backed by research.",
    topics: ["late-talkers", "toddler-activities", "general"],
    isStaffPick: false,
  },
  {
    id: "yt-walkie-talkie",
    name: "Walkie Talkie Speech Therapy",
    platform: "youtube",
    handle: "@WalkieTalkieSpeech",
    url: "https://www.youtube.com/@WalkieTalkieSpeech",
    description:
      "Home practice videos that parents can use between therapy sessions, featuring clear demonstrations of speech exercises, language activities, and carryover strategies for various goals.",
    whyRecommended:
      "Research consistently shows that home practice between sessions is one of the strongest predictors of therapy success. This channel gives parents structured, easy-to-follow activities that complement what their SLP is already doing.",
    topics: ["articulation", "general", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "yt-speechpath-mommy",
    name: "SpeechPath Mommy",
    platform: "youtube",
    handle: "@SpeechPathMommy",
    url: "https://www.youtube.com/@SpeechPathMommy",
    description:
      "An SLP and mom sharing the intersection of her professional knowledge and personal parenting journey. Covers common parent questions about speech development, when to seek help, and what to do while waiting for an evaluation.",
    whyRecommended:
      "Her dual perspective as clinician and parent makes her content uniquely relatable. She addresses the emotional side of speech concerns — the worry, the comparisons — alongside practical strategies, which is exactly what most parents need.",
    topics: ["late-talkers", "general", "parent-support"],
    isStaffPick: false,
  },

  // ─── INSTAGRAM (9) ────────────────────────────────────────────────────
  {
    id: "ig-speech-sisters",
    name: "Speech Sisters",
    platform: "instagram",
    handle: "@speechsisters",
    url: "https://www.instagram.com/speechsisters",
    description:
      "Visual guides, infographics, and short video tips for parents of late talkers and toddlers. Their carousel posts break down complex speech-language concepts into digestible, shareable content.",
    whyRecommended:
      "Their visual format is perfect for busy parents — you can learn a new strategy in 30 seconds while scrolling. The tips are consistently accurate and avoid the oversimplification that plagues most social media speech advice.",
    topics: ["late-talkers", "parent-support", "general"],
    isStaffPick: true,
  },
  {
    id: "ig-busy-toddler",
    name: "Busy Toddler",
    platform: "instagram",
    handle: "@busytoddler",
    url: "https://www.instagram.com/busytoddler",
    description:
      "Simple, brilliant play activities that keep toddlers engaged using household items. While not SLP-specific, the activities naturally build vocabulary, following directions, and descriptive language skills.",
    whyRecommended:
      "Language development happens best during meaningful, engaging activities — not flashcards. Every activity on this account is a natural language-building opportunity, even though that is not the stated focus. We love recommending it as 'stealth therapy.'",
    topics: ["toddler-activities", "general"],
    isStaffPick: false,
  },
  {
    id: "ig-the-dad-lab",
    name: "TheDadLab",
    platform: "instagram",
    handle: "@thedadlab",
    url: "https://www.instagram.com/thedadlab",
    description:
      "Dad-led STEM experiments and creative activities that naturally incorporate rich vocabulary, problem-solving language, and descriptive communication. A refreshing perspective in the parenting content space.",
    whyRecommended:
      "These activities are goldmines for building cognitive vocabulary — words like predict, observe, compare, and explain. Plus, seeing a dad actively engaged in language-rich play normalizes caregiver involvement across the whole family.",
    topics: ["toddler-activities", "general"],
    isStaffPick: false,
  },
  {
    id: "ig-speech-with-jenna",
    name: "Speech With Jenna",
    platform: "instagram",
    handle: "@speechwithjenna",
    url: "https://www.instagram.com/speechwithjenna",
    description:
      "Quick, practical SLP technique demonstrations that parents can watch and replicate immediately. Focuses on making speech therapy strategies feel approachable and doable in daily life.",
    whyRecommended:
      "Jenna has a gift for making clinical techniques feel natural and unintimidating. Her short demos show parents exactly what a strategy looks like in real time, which is far more effective than reading about it.",
    topics: ["late-talkers", "articulation", "general"],
    isStaffPick: false,
  },
  {
    id: "ig-play-learn-chat",
    name: "Play Learn Chat",
    platform: "instagram",
    handle: "@playlearnchat",
    url: "https://www.instagram.com/playlearnchat",
    description:
      "Play-based speech and language strategies presented through colorful, well-organized content. Covers everything from first words to more complex language goals, always through the lens of play.",
    whyRecommended:
      "Consistently evidence-based while remaining highly visual and engaging. One of the few accounts that successfully makes the research-to-practice connection accessible for parents without oversimplifying the science.",
    topics: ["late-talkers", "toddler-activities", "parent-support"],
    isStaffPick: true,
  },
  {
    id: "ig-speech-mom-slp",
    name: "Speech Mom SLP",
    platform: "instagram",
    handle: "@speechmomslp",
    url: "https://www.instagram.com/speechmomslp",
    description:
      "Daily strategies from an SLP who is also navigating motherhood. Shares practical tips woven into real-life parenting moments — mealtime, bedtime routines, car rides, and grocery store trips.",
    whyRecommended:
      "Demonstrates that speech-language support does not require dedicated 'therapy time' — it happens in the moments you are already living. This mindset shift is one of the most empowering things a parent can learn.",
    topics: ["late-talkers", "general", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "ig-raising-littles",
    name: "Raising Littles",
    platform: "instagram",
    handle: "@raising_littles",
    url: "https://www.instagram.com/raising_littles",
    description:
      "Child development content covering speech milestones, behavior, and whole-child growth. Infographics clearly outline what to expect at each age and when to seek professional guidance.",
    whyRecommended:
      "Understanding the full developmental picture — not just speech in isolation — helps parents recognize how motor, cognitive, and social-emotional development all connect to communication. This account does that beautifully.",
    topics: ["general", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "ig-toddler-approved",
    name: "Toddler Approved",
    platform: "instagram",
    handle: "@toddlerapproved",
    url: "https://www.instagram.com/toddlerapproved",
    description:
      "Creative, low-prep activities designed for toddlers and preschoolers that naturally build language, vocabulary, and social communication through hands-on play and exploration.",
    whyRecommended:
      "Every activity is an opportunity to model new vocabulary, practice following directions, and build narrative skills. Parents do not need to add 'speech work' on top — the language building is built right into the fun.",
    topics: ["toddler-activities", "general"],
    isStaffPick: false,
  },
  {
    id: "ig-feeding-littles",
    name: "Feeding Littles",
    platform: "instagram",
    handle: "@feedinglittles",
    url: "https://www.instagram.com/feedinglittles",
    description:
      "Evidence-based feeding guidance from an SLP and a dietitian team. Covers everything from baby-led weaning to picky eating to managing mealtime anxiety, with a compassionate, pressure-free philosophy.",
    whyRecommended:
      "Feeding and swallowing are core SLP scope-of-practice areas, and this account gets the clinical side right while keeping content parent-friendly. Their emphasis on reducing mealtime stress aligns with what feeding therapists recommend.",
    topics: ["feeding", "parent-support"],
    isStaffPick: false,
  },

  // ─── TIKTOK (6) ───────────────────────────────────────────────────────
  {
    id: "tt-speech-teacher",
    name: "The Speech Teacher",
    platform: "tiktok",
    handle: "@thespeechteacher",
    url: "https://www.tiktok.com/@thespeechteacher",
    description:
      "Short-form SLP tips that cut through the noise — quick explanations of speech milestones, red flags, and home strategies that parents can absorb in under a minute.",
    whyRecommended:
      "TikTok is where many parents first encounter speech-language information, and this creator provides accurate, nuanced content in a format that actually reaches families who might not otherwise seek out an SLP.",
    topics: ["general", "late-talkers", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "tt-maboro-speech",
    name: "Maboro Speech Therapy",
    platform: "tiktok",
    handle: "@maborospeechtherapy",
    url: "https://www.tiktok.com/@maborospeechtherapy",
    description:
      "Technique demonstrations and therapy session glimpses that show parents what speech therapy actually looks like. Demystifies the therapy process and gives parents confidence in what their SLP is doing.",
    whyRecommended:
      "Many parents feel anxious about what happens behind the therapy room door. Seeing real techniques demonstrated builds trust in the therapeutic process and helps parents understand how to reinforce skills at home.",
    topics: ["articulation", "general"],
    isStaffPick: false,
  },
  {
    id: "tt-speechgal-slp",
    name: "Speech Gal SLP",
    platform: "tiktok",
    handle: "@speechgalslp",
    url: "https://www.tiktok.com/@speechgalslp",
    description:
      "Quick articulation and language tips covering common sound errors, language-building games, and myth-busting about speech development timelines.",
    whyRecommended:
      "Addresses common misconceptions head-on — like the myth that bilingualism causes speech delays or that boys are 'just late talkers.' Accurate information delivered quickly is exactly what parents scrolling for answers need.",
    topics: ["articulation", "bilingual", "general"],
    isStaffPick: false,
  },
  {
    id: "tt-talking-with-tyler",
    name: "Talking With Tyler",
    platform: "tiktok",
    handle: "@talkingwithtyler",
    url: "https://www.tiktok.com/@talkingwithtyler",
    description:
      "A male SLP sharing tips, busting myths, and normalizing speech therapy for all families. Brings a fresh perspective and humor to speech-language education on social media.",
    whyRecommended:
      "Representation matters — seeing a male SLP helps normalize speech therapy and broadens the face of the profession. His myth-busting content is especially valuable for families who may be getting outdated advice from well-meaning relatives.",
    topics: ["general", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "tt-speechy-things",
    name: "Speechy Things",
    platform: "tiktok",
    handle: "@speechy.things",
    url: "https://www.tiktok.com/@speechy.things",
    description:
      "Daily speech therapy hacks and activity ideas that parents can implement immediately. Focuses on making home practice feel like play rather than homework.",
    whyRecommended:
      "Consistency matters more than intensity in speech therapy. These quick, fun ideas make it realistic for parents to incorporate speech practice into everyday life without it feeling like a burden.",
    topics: ["articulation", "toddler-activities", "general"],
    isStaffPick: false,
  },
  {
    id: "tt-slp-mom-life",
    name: "SLP Mom Life",
    platform: "tiktok",
    handle: "@slpmomlife",
    url: "https://www.tiktok.com/@slpmomlife",
    description:
      "An SLP mom sharing daily strategies, relatable parenting moments, and honest reflections on raising kids while knowing 'too much' about development. Balances professional knowledge with real-life parenting.",
    whyRecommended:
      "Validates the experience of parents who worry about their child's speech — even SLPs have those moments. Her honest, non-judgmental approach helps reduce parental anxiety while still providing actionable strategies.",
    topics: ["late-talkers", "parent-support", "general"],
    isStaffPick: false,
  },

  // ─── FACEBOOK GROUPS (5) ──────────────────────────────────────────────
  {
    id: "fb-late-talkers",
    name: "Late Talkers",
    platform: "facebook",
    handle: undefined,
    url: "https://www.facebook.com/search/groups/?q=late%20talkers%20speech%20delay",
    description:
      "Search for Facebook support groups for parents of late-talking children. These communities share experiences, resources, and encouragement — a lifeline for parents in the early stages of concern.",
    whyRecommended:
      "Peer support from other parents who understand the worry is invaluable. While not a substitute for professional guidance, the emotional support and shared experiences in this group help parents feel less alone during a stressful time.",
    topics: ["late-talkers", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "fb-apraxia-kids",
    name: "Apraxia Kids",
    platform: "facebook",
    handle: undefined,
    url: "https://www.facebook.com/search/groups/?q=apraxia%20kids%20speech",
    description:
      "Dedicated support community for families navigating childhood apraxia of speech (CAS). Members share therapy experiences, celebrate progress, and connect with others who understand the unique challenges of apraxia.",
    whyRecommended:
      "CAS is a complex diagnosis that can feel isolating. This group connects families with others on the same journey and often shares information about evidence-based treatment approaches like DTTC and the Kaufman method.",
    topics: ["apraxia", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "fb-speech-delay-support",
    name: "Speech Delay Support for Parents",
    platform: "facebook",
    handle: undefined,
    url: "https://www.facebook.com/search/groups/?q=speech%20delay%20support%20parents",
    description:
      "A welcoming community for parents at any stage of the speech delay journey — from first concerns to active therapy to celebrating breakthroughs. Moderated to keep advice supportive and evidence-informed.",
    whyRecommended:
      "The general focus makes this group accessible for parents who are not sure what their child's specific diagnosis is yet. It is a good starting point for families who are just beginning to explore speech-language concerns.",
    topics: ["late-talkers", "general", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "fb-feeding-therapy",
    name: "Feeding Therapy Support Group",
    platform: "facebook",
    handle: undefined,
    url: "https://www.facebook.com/search/groups/?q=feeding%20therapy%20support",
    description:
      "Parent community focused on pediatric feeding challenges, therapy approaches, and mealtime strategies. Covers everything from sensory-based food refusal to tube feeding to transitioning textures.",
    whyRecommended:
      "Feeding difficulties are deeply stressful and often misunderstood by friends and family. This group provides a judgment-free space where parents can discuss the realities of feeding therapy without hearing 'they will eat when they are hungry.'",
    topics: ["feeding", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "fb-bilingual-kids",
    name: "Bilingual Kids Speech and Language",
    platform: "facebook",
    handle: undefined,
    url: "https://www.facebook.com/search/groups/?q=bilingual%20kids%20speech%20language",
    description:
      "Support group for bilingual and multilingual families navigating speech-language development. Addresses common concerns about language mixing, dual-language milestones, and finding bilingual SLPs.",
    whyRecommended:
      "Bilingual families frequently receive outdated advice to 'drop a language' — this group counters that myth with evidence-based support. Bilingualism does not cause speech delays, and families deserve a community that affirms their linguistic choices.",
    topics: ["bilingual", "parent-support"],
    isStaffPick: false,
  },

  // ─── PODCASTS (5) ─────────────────────────────────────────────────────
  {
    id: "pod-harkla-sensory",
    name: "All Things Sensory by Harkla",
    platform: "podcast",
    handle: undefined,
    url: "https://podcasts.apple.com/us/podcast/all-things-sensory-by-harkla/id1286106014",
    description:
      "Explores the connections between sensory processing, communication, and behavior. Episodes cover practical strategies for supporting kids with sensory needs and how sensory challenges can impact speech and language development.",
    whyRecommended:
      "Many children in speech therapy also have sensory processing differences that directly affect communication. Understanding the sensory-communication connection helps parents create environments where their child can focus, engage, and communicate more effectively.",
    topics: ["autism", "general", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "pod-speechie-side-up",
    name: "Speechie Side Up Podcast",
    platform: "podcast",
    handle: undefined,
    url: "https://podcasts.apple.com/us/podcast/speechie-side-up/id1539218284",
    description:
      "Evidence-based speech-language pathology information presented in an accessible, parent-friendly format. Episodes dive deep into specific topics like articulation norms, language milestones, and navigating the school IEP process.",
    whyRecommended:
      "Goes deeper than social media allows — you get thorough, nuanced discussions of topics that matter to families. Perfect for parents who want to truly understand their child's communication development rather than just skim the surface.",
    topics: ["articulation", "general", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "pod-two-talking-mamas",
    name: "Two Talking Mamas",
    platform: "podcast",
    handle: undefined,
    url: "https://podcasts.apple.com/us/podcast/two-talking-mamas/id1659450928",
    description:
      "Two SLP moms discussing child development, speech-language milestones, and the intersection of professional knowledge with real parenting life. Honest, relatable, and clinically sound.",
    whyRecommended:
      "Their conversational format makes clinical information feel like advice from a knowledgeable friend. They cover the topics parents actually ask about in therapy sessions — screen time, picky eating, late talking — with nuance and compassion.",
    topics: ["late-talkers", "general", "parent-support"],
    isStaffPick: false,
  },
  {
    id: "pod-informed-slp",
    name: "The Informed SLP",
    platform: "podcast",
    handle: undefined,
    url: "https://www.theinformedslp.com/",
    description:
      "Research summaries and clinical discussions that make the latest speech-language pathology research accessible. While geared toward professionals, motivated parents will find the evidence summaries incredibly valuable.",
    whyRecommended:
      "For parents who want to go straight to the source, this podcast distills peer-reviewed research into understandable takeaways. Knowing the evidence behind your child's therapy plan empowers you to be a more effective advocate.",
    topics: ["general", "articulation", "apraxia"],
    isStaffPick: true,
  },
  {
    id: "pod-speech-mama",
    name: "The Speech Mama Podcast",
    platform: "podcast",
    handle: undefined,
    url: "https://podcasts.apple.com/us/podcast/the-speech-mama-podcast/id1617583498",
    description:
      "SLP tips for everyday parenting — how to build language during routines, what to do when you are worried about your child's speech, and how to make the most of therapy sessions.",
    whyRecommended:
      "Focuses on the moments that matter most — daily routines, bedtime, car rides. This podcast helps parents realize they already have dozens of language-building opportunities every day and shows them how to make the most of each one.",
    topics: ["late-talkers", "toddler-activities", "parent-support"],
    isStaffPick: false,
  },
];
