import type { ContentImageAsset, ContentNarration } from "@/types/content";
import { handoutCategoryPreviewImages, handoutMedia } from "./media";

export type HandoutCategory = "education" | "home-practice" | "milestone-summary";

export interface HandoutCallout {
  type: "tip" | "warning" | "note";
  text: string;
}

export interface HandoutSection {
  heading: string;
  content: string;
  bulletPoints?: string[];
  callout?: HandoutCallout;
}

export interface Handout {
  id: string;
  slug: string;
  title: string;
  category: HandoutCategory;
  description: string;
  targetAudience: string;
  coverImage?: ContentImageAsset;
  narration?: ContentNarration;
  sections: HandoutSection[];
  disclaimer: string;
}

const STANDARD_DISCLAIMER =
  "This handout is for educational purposes and does not replace professional evaluation or treatment. If you have concerns about your child's development, consult a licensed speech-language pathologist.";

const baseHandouts: Handout[] = [
  // ─── EDUCATION HANDOUTS ─────────────────────────────────────────────
  {
    id: "edu-1",
    slug: "what-is-speech-delay",
    title: "What is a Speech Delay?",
    category: "education",
    description:
      "Learn the difference between a speech delay and a language disorder, what causes them, and when to take action.",
    targetAudience: "Parents of children 12-36 months",
    sections: [
      {
        heading: "Definition",
        content:
          "A speech delay means your child is developing speech sounds on a typical path, but at a slower rate than expected for their age. Children with speech delays understand what is said to them and communicate in other ways (pointing, gesturing, making sounds), but their spoken words are behind where we would expect them to be.",
        bulletPoints: [
          "Speech delay is one of the most common developmental concerns in young children",
          "Up to 15-20% of children may be considered late talkers at age 2",
          "Many late talkers catch up on their own by age 3, but evaluation is still recommended",
          "A speech delay does not mean your child has low intelligence",
        ],
      },
      {
        heading: "Speech vs. Language: What's the Difference?",
        content:
          "Speech and language are related but different skills. Speech refers to the physical production of sounds and words — how clearly your child talks. Language refers to understanding and using words, sentences, and grammar to communicate meaning. A child can have a speech delay without a language delay, or vice versa, or both.",
        bulletPoints: [
          "Speech = the sounds and clarity of talking (articulation, fluency, voice)",
          "Language = understanding words (receptive) and using words to communicate (expressive)",
          "A child who understands everything but says few words may have an expressive language delay",
          "A child who talks a lot but is very hard to understand may have a speech sound disorder",
        ],
        callout: {
          type: "tip",
          text: "Think of it this way: speech is the vehicle, language is the passenger. You need both working well to get your message across.",
        },
      },
      {
        heading: "Common Causes",
        content:
          "Speech delays can happen for many reasons, and often there is no single identifiable cause. Some factors that may contribute include hearing loss, oral-motor weakness, family history of speech-language difficulties, premature birth, or limited language exposure. In many cases, the cause is simply that development is unfolding at a different pace.",
        bulletPoints: [
          "Hearing loss (even mild or temporary from ear infections) is the #1 thing to rule out",
          "Family history of late talking or speech-language disorders",
          "Premature birth or low birth weight",
          "Frequent ear infections (otitis media)",
          "Limited social interaction or language-rich environments",
          "Oral-motor differences (tongue-tie, low muscle tone)",
        ],
      },
      {
        heading: "When to Worry",
        content:
          "While every child develops at their own pace, there are certain benchmarks that help us know when a child may need support. Trust your instincts — you know your child best. If something feels off, it is always better to get an evaluation and find out everything is fine than to wait and miss an important window for intervention.",
        bulletPoints: [
          "No babbling by 9-10 months",
          "No first words by 15 months",
          "Fewer than 50 words by age 2",
          "No two-word combinations by age 2 (e.g., 'more milk,' 'daddy go')",
          "Speech is less than 50% understandable by age 2",
          "Loss of words or skills at any age (regression)",
        ],
        callout: {
          type: "warning",
          text: "Loss of previously acquired words or skills at any age warrants an immediate evaluation. Do not wait.",
        },
      },
      {
        heading: "What to Do",
        content:
          "If you suspect your child has a speech delay, the best thing you can do is seek an evaluation from a licensed speech-language pathologist (SLP). Early intervention is key — research consistently shows that the earlier a child receives support, the better the outcomes. You do not need a doctor referral to see an SLP in most states.",
        bulletPoints: [
          "Request a free evaluation through your state's Early Intervention program (birth to age 3)",
          "Contact your local school district for a free evaluation (ages 3-5)",
          "See a private SLP for a comprehensive evaluation",
          "Get a hearing test — this should be the first step for any speech concern",
          "Talk to your pediatrician, but don't accept 'wait and see' if you have concerns",
        ],
      },
      {
        heading: "What NOT to Worry About",
        content:
          "There are many normal variations in speech development that parents sometimes worry about unnecessarily. Understanding what is typical can help ease anxiety while you focus on the things that actually matter.",
        bulletPoints: [
          "Using baby words like 'baba' for bottle — this is normal early word approximation",
          "Mixing up sounds like 'wabbit' for 'rabbit' — many sound errors are age-appropriate",
          "Talking later than an older sibling — each child is different",
          "Being quieter in social situations but talking at home — some children are more reserved",
          "Preferring to point and gesture rather than talk — this is actually a good sign of communication intent",
        ],
        callout: {
          type: "note",
          text: "If your child communicates their wants and needs using gestures, sounds, and eye contact, that is a great foundation. Words will build on those skills.",
        },
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "edu-2",
    slug: "what-is-language-disorder",
    title: "What is a Language Disorder?",
    category: "education",
    description:
      "Understand the difference between receptive and expressive language, warning signs, and how treatment works.",
    targetAudience: "Parents of children 18 months to 5 years",
    sections: [
      {
        heading: "Definition",
        content:
          "A language disorder (sometimes called a developmental language disorder or DLD) is a condition in which a child has significant difficulty understanding language, using language, or both. Unlike a speech delay where a child is simply developing more slowly, a language disorder involves differences in how the brain processes and organizes language. Language disorders are persistent and often require ongoing support.",
        bulletPoints: [
          "Language disorders affect roughly 7-10% of children",
          "They can occur in children with normal intelligence and hearing",
          "A language disorder is not caused by lack of exposure or bad parenting",
          "Early identification and intervention significantly improve long-term outcomes",
        ],
      },
      {
        heading: "Receptive vs. Expressive Language",
        content:
          "There are two main types of language skills: receptive language (understanding what is said to you) and expressive language (using words and sentences to communicate). A child can have difficulty with one or both. Receptive language disorders can be harder to spot because a child may appear to understand more than they do by following visual cues and routines.",
        bulletPoints: [
          "Receptive language: understanding words, following directions, comprehending stories",
          "Expressive language: using vocabulary, forming sentences, telling stories, asking questions",
          "Mixed receptive-expressive language disorder affects both areas",
          "Receptive difficulties are often more significant for long-term learning",
        ],
        callout: {
          type: "tip",
          text: "To test receptive understanding, give your child simple directions without gestures or visual cues. If they need you to point or show them, they may be relying on context clues rather than understanding the words.",
        },
      },
      {
        heading: "Signs to Watch For",
        content:
          "The signs of a language disorder vary by age. In toddlers, it may look like limited vocabulary and difficulty following simple directions. In preschoolers, it may show up as short, simple sentences, difficulty answering questions, or trouble retelling a story. Here are some key indicators.",
        bulletPoints: [
          "Doesn't respond to their name consistently by 12 months",
          "Difficulty following simple directions ('give me the ball') by 18 months",
          "Uses mainly single words or gestures at age 2 when peers are combining words",
          "Difficulty answering simple questions ('what's that?', 'where's daddy?') by age 2-3",
          "Uses very short sentences and leaves out small words at age 3-4",
          "Has trouble telling you about their day or retelling a simple story at age 4-5",
        ],
      },
      {
        heading: "How It's Diagnosed",
        content:
          "A licensed speech-language pathologist diagnoses language disorders through a comprehensive evaluation. This includes standardized tests, language samples, parent interviews, and observation. The evaluation compares your child's abilities to what is expected for their age and determines whether a disorder is present.",
        bulletPoints: [
          "Standardized tests measure receptive and expressive language skills",
          "A language sample analyzes how your child uses language in conversation",
          "Parent questionnaires provide information about communication at home",
          "Hearing screening rules out hearing loss as a contributing factor",
          "The evaluation typically takes 1-2 hours",
        ],
      },
      {
        heading: "Treatment Options",
        content:
          "Speech-language therapy is the primary treatment for language disorders. Therapy focuses on building the specific language skills your child needs, whether that's understanding vocabulary, combining words into sentences, following directions, or using language socially. Therapy is most effective when parents are actively involved and carry over strategies at home.",
        bulletPoints: [
          "Individual speech-language therapy (typically 1-2 sessions per week)",
          "Parent coaching to build language in daily routines",
          "Group therapy for social communication skills",
          "Classroom-based services in school settings",
          "Augmentative and alternative communication (AAC) if needed",
        ],
        callout: {
          type: "note",
          text: "Therapy is not just about what happens in the session. The most effective approach is when parents learn strategies and use them throughout the day in natural routines.",
        },
      },
      {
        heading: "How You Can Help at Home",
        content:
          "Parents play the most important role in supporting language development. You spend far more time with your child than any therapist ever will. Small changes in how you interact can make a big difference. Focus on creating a language-rich environment and following your child's lead.",
        bulletPoints: [
          "Talk about what you're doing throughout the day (narrate your actions)",
          "Follow your child's interests — talk about what they're looking at or playing with",
          "Read books together every day, pointing to pictures and asking simple questions",
          "Expand on what your child says: if they say 'car,' you say 'big red car!'",
          "Give your child time to respond — wait 5-10 seconds before jumping in",
          "Reduce screen time and increase face-to-face interaction",
        ],
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "edu-3",
    slug: "apraxia-basics",
    title: "Apraxia of Speech: What Parents Need to Know",
    category: "education",
    description:
      "A parent-friendly guide to childhood apraxia of speech (CAS) — what it is, how it differs from other delays, and what treatment looks like.",
    targetAudience: "Parents of children suspected or diagnosed with CAS",
    sections: [
      {
        heading: "What is CAS?",
        content:
          "Childhood apraxia of speech (CAS) is a motor speech disorder. The brain has difficulty planning and coordinating the precise movements needed to produce speech. It is not a problem with muscle weakness or understanding language — the muscles work fine, and the child typically understands what is said to them. The challenge is in the brain's ability to tell the muscles what to do, in what order, and with the right timing.",
        bulletPoints: [
          "CAS is a neurological motor planning disorder, not a muscle problem",
          "Children with CAS know what they want to say but have difficulty getting the words out",
          "It is relatively rare, estimated to affect approximately 1-2 children per 1,000, though exact prevalence data is limited",
          "CAS can occur on its own or alongside other developmental conditions",
          "It requires specialized treatment that differs from typical speech therapy",
        ],
      },
      {
        heading: "How It's Different from Other Delays",
        content:
          "CAS is different from a typical speech delay or articulation disorder. In a regular speech delay, the child is simply developing sounds more slowly but follows the typical pattern. In CAS, the errors are inconsistent — the child may say a word correctly one moment and differently the next. The core issue is motor planning, not learning sounds.",
        bulletPoints: [
          "Inconsistent errors: the same word may be said differently each time",
          "Difficulty with longer words and sequences (can say 'up' but struggles with 'open up')",
          "Limited babbling as an infant (quieter than expected)",
          "May use many gestures to compensate for limited speech",
          "Groping movements visible when trying to produce words",
          "Prosody differences: speech may sound flat, choppy, or have unusual rhythm",
        ],
        callout: {
          type: "note",
          text: "A child who says 'banana' three different ways in the same conversation ('nana,' 'bana,' 'mana') is showing a hallmark sign of CAS — inconsistency.",
        },
      },
      {
        heading: "Signs of Apraxia",
        content:
          "CAS can be suspected as early as 18-24 months, but a formal diagnosis is typically most reliable around age 2-3. Some children show signs in infancy, while others are not identified until they fail to make progress with typical speech therapy. Here are the key signs that suggest CAS.",
        bulletPoints: [
          "Very limited babbling as an infant",
          "First words are late and hard to understand",
          "Can say a word once but can't repeat it on demand",
          "Simplifies words significantly (e.g., 'dah' for 'doggy')",
          "Omits many sounds, especially at the beginning or end of words",
          "Has difficulty imitating speech sounds or words",
          "Makes 'groping' movements with their mouth when trying to talk",
          "Seems to understand much more than they can say",
        ],
      },
      {
        heading: "Diagnosis Process",
        content:
          "Diagnosing CAS requires evaluation by a speech-language pathologist who has experience with motor speech disorders. The SLP will look at how your child plans and produces speech movements, analyze error patterns, and assess whether the characteristics are consistent with CAS. Diagnosis is based on clinical judgment — there is no single test that confirms CAS.",
        bulletPoints: [
          "Comprehensive evaluation by an SLP experienced in motor speech disorders",
          "Assessment of speech sound production, including imitation of sounds and words",
          "Analysis of error patterns (consistency, types of errors, effect of word length)",
          "Observation of oral-motor movements and coordination",
          "Ruling out other conditions (hearing loss, muscle weakness, language disorder)",
        ],
        callout: {
          type: "warning",
          text: "Not all SLPs have expertise in CAS. If you suspect apraxia, seek out an SLP who specializes in motor speech disorders. Ask about their experience with CAS specifically.",
        },
      },
      {
        heading: "Treatment Approaches",
        content:
          "CAS requires intensive, specialized therapy. Traditional articulation therapy (drill-based practice of individual sounds) is not effective for CAS. Instead, treatment focuses on motor planning — helping the brain learn to sequence and coordinate the movements needed for speech. Frequency of therapy matters: research supports 3-5 sessions per week for best outcomes.",
        bulletPoints: [
          "DTTC (Dynamic Temporal and Tactile Cueing): multi-sensory cueing approach",
          "ReST (Rapid Syllable Transition Treatment): focuses on smooth transitions between sounds",
          "Kaufman Speech to Language Protocol: uses approximations and shapes them toward targets",
          "PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets): tactile-kinesthetic approach",
          "PROMPT is a registered trademark of The PROMPT Institute. These are examples of evidence-based approaches; your SLP will determine the best approach for your child.",
          "Frequent therapy sessions (3-5x/week) produce better outcomes than 1x/week",
          "AAC (communication devices/apps) may be recommended alongside therapy — this does NOT prevent speech development",
        ],
      },
      {
        heading: "Home Support",
        content:
          "Supporting a child with CAS at home means creating a communication-friendly environment where your child feels safe to try. It also means following through on your SLP's home practice recommendations. Practice should be frequent, short, and positive.",
        bulletPoints: [
          "Practice words and phrases from therapy in short, frequent sessions (5-10 minutes, 2-3 times daily)",
          "Use multi-sensory cues: let your child see your mouth, feel the vibration, look in a mirror",
          "Celebrate all attempts at communication, even if the word isn't perfect",
          "Accept and honor AAC use — it builds language while speech catches up",
          "Reduce pressure to perform: don't ask your child to say words on command in front of others",
          "Sing songs, read books with repetitive phrases, and use gestures alongside words",
        ],
        callout: {
          type: "tip",
          text: "Kids with CAS often do better with songs and memorized phrases than spontaneous speech. Use music and repetitive books to build motor plans for common words.",
        },
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "edu-4",
    slug: "bilingual-development",
    title: "Bilingual Children and Speech Development",
    category: "education",
    description:
      "Myths debunked and facts about raising bilingual children, including when bilingual development is typical and when to seek help.",
    targetAudience: "Bilingual and multilingual families",
    sections: [
      {
        heading: "Common Myths — Busted",
        content:
          "There are many misconceptions about bilingualism and speech-language development. These myths can lead families to unnecessarily drop a home language, which can harm family connections and cultural identity. Here are the facts.",
        bulletPoints: [
          "MYTH: Bilingualism causes speech delays. FACT: Research consistently shows it does not.",
          "MYTH: You should only speak one language to avoid confusion. FACT: Children's brains are wired for multiple languages.",
          "MYTH: Mixing languages is a sign of confusion. FACT: Code-switching is a normal, sophisticated skill.",
          "MYTH: You need to stop the home language if your child has a delay. FACT: Dropping a language can harm family relationships and does not help the delay.",
          "MYTH: Bilingual children will fall behind in school. FACT: Bilingualism does not cause academic disadvantage and may provide cognitive benefits.",
        ],
        callout: {
          type: "warning",
          text: "Never let anyone tell you to stop speaking your home language to your child. Research is clear: maintaining the home language supports, not hinders, overall development.",
        },
      },
      {
        heading: "Normal Bilingual Development",
        content:
          "Bilingual children may develop language slightly differently than monolingual children, but these differences are normal variations, not delays. Their total vocabulary across both languages is typically comparable to monolingual peers. Each language may develop at a different rate depending on exposure.",
        bulletPoints: [
          "Bilingual toddlers may have fewer words in each individual language but a comparable total vocabulary",
          "First words may appear at the same age or slightly later — both are normal",
          "One language will typically be stronger (the dominant language) based on exposure",
          "Language dominance can shift over time as exposure changes (e.g., starting school)",
          "Bilingual milestones (babbling, first words, two-word combinations) follow the same timeline",
        ],
      },
      {
        heading: "Code-Switching is Normal",
        content:
          "Code-switching — mixing two languages in the same sentence or conversation — is a completely normal part of bilingual development. It is not a sign of confusion or delay. In fact, it requires sophisticated language knowledge because the child must understand the grammar rules of both languages to blend them correctly.",
        bulletPoints: [
          "Children code-switch for the same reasons adults do: some words or ideas are easier in one language",
          "Code-switching follows grammatical rules — it is not random",
          "Children as young as 2 adjust which language they use based on who they are talking to",
          "Code-switching is more common when the conversation partner is also bilingual",
        ],
        callout: {
          type: "tip",
          text: "If your child says 'I want leche,' they are not confused — they are being efficient. They used the word that came to mind first. This is a sign of healthy bilingual development.",
        },
      },
      {
        heading: "When to Seek Help",
        content:
          "A true speech or language disorder will show up in ALL of a child's languages, not just one. If your child is struggling only in their second language but communicating well in their first, they likely do not have a disorder — they may just need more exposure. Seek evaluation when concerns are present across both languages.",
        bulletPoints: [
          "Concerns are present in BOTH languages, not just one",
          "Your child is not meeting developmental milestones in either language",
          "Your child has difficulty understanding in both languages",
          "Other bilingual children in similar situations are developing language faster",
          "Your child is frustrated by communication breakdowns in both languages",
        ],
      },
      {
        heading: "Supporting Both Languages",
        content:
          "The best thing you can do for your bilingual child is to provide rich, meaningful exposure to both languages. Speak the language you are most comfortable in — quality of interaction matters more than which language you use. Both languages need consistent, daily exposure to develop well.",
        bulletPoints: [
          "Speak the language you are most fluent in — your child needs to hear rich, natural language",
          "Ensure your child hears both languages daily from fluent speakers",
          "Read books, sing songs, and play in both languages",
          "Create opportunities for your child to interact with other speakers of each language",
          "Do not correct code-switching — simply respond in your preferred language",
          "Value and celebrate your home language and culture",
        ],
      },
      {
        heading: "What to Tell Your SLP",
        content:
          "If your bilingual child is being evaluated, it is important that the SLP understands your child's full language profile. Be ready to share information about all the languages your child is exposed to.",
        bulletPoints: [
          "Which languages your child hears at home and how much of each",
          "Which language your child prefers or uses most",
          "Whether concerns are present in one or both languages",
          "Your child's language history: when each language was introduced",
          "Whether other family members had speech or language delays",
          "Ask whether the SLP has experience with bilingual children or can consult with someone who does",
        ],
        callout: {
          type: "note",
          text: "Your child has a right to be assessed in all languages they speak. If your SLP does not speak your home language, they should use an interpreter or collaborate with a bilingual professional.",
        },
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "edu-5",
    slug: "when-to-seek-evaluation",
    title: "When to Seek a Speech-Language Evaluation",
    category: "education",
    description:
      "An age-by-age guide to communication milestones and red flags, plus how to request an evaluation and what your rights are.",
    targetAudience: "All parents with developmental concerns",
    sections: [
      {
        heading: "Age-by-Age Guide",
        content:
          "Every child develops at their own pace, but there are general benchmarks that help us know when a child may benefit from evaluation. Here is a quick guide to what most children are doing at each age. Remember, these are averages — some variation is normal.",
        bulletPoints: [
          "By 12 months: babbling with consonants (ba, da, ma), responding to name, waving/pointing",
          "By 18 months: at least 5-20 words, following simple directions, pointing to show you things",
          "By 24 months: 50+ words, starting to combine two words, following two-step directions",
          "By 36 months: 200+ words, using 3-word sentences, understood by familiar people 75% of time",
          "By 48 months: telling simple stories, asking questions, understood by strangers most of the time",
          "By 60 months: using complex sentences, engaging in conversations, understood by everyone",
        ],
      },
      {
        heading: "Red Flags at Any Age",
        content:
          "While some variation in development is normal, certain signs suggest you should not wait to seek an evaluation. These red flags warrant prompt assessment regardless of your child's age.",
        bulletPoints: [
          "Loss of words, babbling, or social skills at any age (regression)",
          "No pointing or gesturing by 12 months",
          "No words by 16 months",
          "No response to their name (consistently)",
          "Lack of eye contact or social engagement",
          "Not interested in other children by age 2-3",
          "Significant frustration due to not being understood",
        ],
        callout: {
          type: "warning",
          text: "If your child has lost any skills they previously had — words, gestures, or social skills — seek evaluation immediately. Regression always warrants prompt assessment.",
        },
      },
      {
        heading: "How to Request an Evaluation",
        content:
          "You have the right to request a free evaluation through your public school system or Early Intervention program at any time. You do not need a doctor's referral. You can also self-refer to a private SLP. Here is how to access each option.",
        bulletPoints: [
          "Birth to 3: Contact your state's Early Intervention program (free, federally mandated)",
          "Ages 3-5: Contact your local school district for a free developmental evaluation",
          "Private SLP: Search ASHA ProFind (asha.org) or ask your pediatrician for referrals",
          "You can request an evaluation in writing to create a paper trail",
          "The school district must respond to your request within a set timeframe (typically 60 days)",
        ],
        callout: {
          type: "tip",
          text: "Put your request in writing. A simple email or letter saying 'I am requesting a speech-language evaluation for my child due to concerns about [specific concern]' creates a record and starts the clock.",
        },
      },
      {
        heading: "What to Expect at an Evaluation",
        content:
          "A speech-language evaluation typically takes 45 minutes to 2 hours. The SLP will play with your child, ask you questions, and use formal and informal assessments. The goal is to understand your child's current communication abilities and determine whether they need services.",
        bulletPoints: [
          "Parent interview: your concerns, developmental history, daily communication",
          "Hearing screening to rule out hearing loss",
          "Standardized testing: formal assessments of receptive and expressive language",
          "Play-based observation: how your child communicates naturally",
          "Oral-motor examination: how the mouth muscles work for speech",
          "A written report with results, diagnosis, and recommendations",
        ],
      },
      {
        heading: "Your Rights as a Parent",
        content:
          "Parents have strong legal rights when it comes to accessing evaluations and services for their children. Whether through Early Intervention or the school system, these services are guaranteed by federal law (IDEA — Individuals with Disabilities Education Act).",
        bulletPoints: [
          "You have the right to a free evaluation through the public system",
          "You can request an evaluation at any time — you do not need a doctor's referral",
          "The school cannot refuse to evaluate if you make a formal request",
          "You have the right to an Independent Educational Evaluation (IEE) if you disagree with results",
          "You have the right to participate in all decisions about your child's services",
          "Services through Early Intervention and schools are provided at no cost to families",
        ],
      },
      {
        heading: "Early Intervention vs. School Services",
        content:
          "The system changes when your child turns 3. Before age 3, services are provided through Early Intervention (Part C of IDEA). After age 3, services transition to the school district (Part B of IDEA). The transition can feel overwhelming, but understanding the process helps.",
        bulletPoints: [
          "Early Intervention (birth-3): services are provided in your home or natural environment",
          "School services (3-5): services may be in a classroom, preschool, or therapy room",
          "The transition from EI to school typically begins at age 2.5 with a transition meeting",
          "Your child must re-qualify for school services — EI eligibility does not automatically transfer",
          "You can pursue both public and private services simultaneously",
          "If your child doesn't qualify for school services, you can appeal or seek private therapy",
        ],
        callout: {
          type: "note",
          text: "Don't wait until age 3 for the transition. Start the conversation with your EI coordinator at age 2.5 to ensure a smooth handoff to the school system.",
        },
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "edu-6",
    slug: "understanding-slp-report",
    title: "Understanding Your Child's SLP Report",
    category: "education",
    description:
      "A guide to decoding SLP evaluation reports, test scores, clinical terminology, and what it all means for your child.",
    targetAudience: "Parents who have received an SLP evaluation report",
    sections: [
      {
        heading: "Common Terms Explained",
        content:
          "SLP reports are full of professional terminology that can feel overwhelming. Here is a glossary of the most common terms you will encounter and what they actually mean in plain language.",
        bulletPoints: [
          "Receptive language: how well your child understands language (words, directions, questions)",
          "Expressive language: how well your child uses language (vocabulary, sentences, stories)",
          "Articulation: how clearly your child produces individual speech sounds",
          "Phonological processes: patterns of sound errors (e.g., leaving off final consonants)",
          "Pragmatic language: social communication skills (turn-taking, topic maintenance, eye contact)",
          "Mean Length of Utterance (MLU): the average length of your child's sentences in words or morphemes",
        ],
      },
      {
        heading: "What Percentiles Mean",
        content:
          "Percentile ranks are one of the most common ways results are reported. A percentile tells you where your child falls compared to other children the same age. It does NOT mean the percentage of questions they got right.",
        bulletPoints: [
          "50th percentile = average (half of same-age children scored higher, half scored lower)",
          "25th percentile = low end of average (75% of same-age peers scored higher)",
          "10th percentile = below average (90% of peers scored higher) — this often qualifies for services",
          "Below the 7th percentile is generally considered significantly below average",
          "Percentiles are based on a large sample of same-age children across the country",
        ],
        callout: {
          type: "tip",
          text: "A percentile of 10 does NOT mean your child got 10% correct. It means 90% of same-age children scored higher. Think of it as a ranking, not a grade.",
        },
      },
      {
        heading: "Understanding Standardized Scores",
        content:
          "Standard scores are another way test results are reported. They use a different scale than percentiles but tell you the same information — how your child compares to same-age peers. Most standardized tests use a mean (average) score of 100 with a standard deviation of 15.",
        bulletPoints: [
          "Standard score of 100 = exactly average",
          "85-115 = within normal limits (within one standard deviation)",
          "70-84 = below average (between one and two standard deviations below)",
          "Below 70 = significantly below average (more than two standard deviations below)",
          "Severity descriptors: mild (78-85), moderate (70-77), severe (below 70) — varies by test. These ranges are approximate and vary significantly by test. Your SLP can explain what specific scores mean for your child.",
        ],
      },
      {
        heading: "What Goals Mean",
        content:
          "If your child qualifies for therapy, the report will include goals — specific, measurable targets for what your child will work on in therapy. Goals should be written in a way that you can understand what success looks like.",
        bulletPoints: [
          "Goals should be specific: 'produce /s/ in the initial position of words' not 'improve articulation'",
          "Goals include a criteria: 'with 80% accuracy over 3 consecutive sessions'",
          "Short-term goals are stepping stones to long-term goals",
          "Goals should be functional: connected to real communication your child needs",
          "You have the right to provide input on goals and request changes",
        ],
        callout: {
          type: "note",
          text: "If a goal doesn't make sense to you, ask the SLP to explain it. Good goals are meaningful — they should connect to things that will actually help your child communicate better in daily life.",
        },
      },
      {
        heading: "How to Use the Report",
        content:
          "Your child's SLP report is a valuable document. It is not just a one-time assessment — it becomes part of your child's record and can be shared with other providers, schools, and specialists to ensure everyone is on the same page.",
        bulletPoints: [
          "Keep a copy for your records — you may need it for school enrollment, insurance, or future evaluations",
          "Share it with your pediatrician and any other therapists your child sees",
          "Use it to track progress: compare future evaluations to the baseline",
          "Bring it to IEP or IFSP meetings as supporting documentation",
          "It can support insurance appeals if services are denied",
        ],
      },
      {
        heading: "Questions to Ask Your SLP",
        content:
          "After reviewing the report, it is normal to have questions. A good SLP will welcome your questions and take the time to explain results in a way that makes sense to you. Here are some important questions to ask.",
        bulletPoints: [
          "Where is my child compared to same-age peers in each area tested?",
          "What are my child's strengths, not just their weaknesses?",
          "What does this mean for everyday communication at home and school?",
          "What can I do at home to support these goals?",
          "How often should my child receive therapy, and for how long?",
          "When should we re-evaluate to check progress?",
        ],
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  // ─── HOME PRACTICE HANDOUTS ────────────────────────────────────────

  {
    id: "prac-1",
    slug: "first-words-activities",
    title: "First Words: 10 Activities for Every Day",
    category: "home-practice",
    description:
      "Simple, everyday activities to encourage first words during morning routines, mealtimes, play, and bedtime.",
    targetAudience: "Parents of children 10-24 months working on first words",
    sections: [
      {
        heading: "Morning Routine Activities",
        content:
          "Morning routines are full of repetitive, predictable moments — exactly what children need to learn first words. Use the same words and phrases every morning to build familiarity.",
        bulletPoints: [
          "Wake up routine: Say 'up! up! up!' as you lift your child out of the crib. Pause and wait for them to reach up or vocalize before lifting.",
          "Diaper change: Narrate 'diaper off... diaper on!' Use 'wet' and 'dry.' Count toes or fingers.",
          "Getting dressed: Hold up two options and name them: 'shirt or dress?' Wait for a point, reach, or sound before dressing.",
        ],
        callout: {
          type: "tip",
          text: "Predictability is your superpower. When your child knows what comes next, they can start to anticipate and attempt the words themselves.",
        },
      },
      {
        heading: "Mealtime Activities",
        content:
          "Mealtimes happen multiple times a day, making them one of the richest opportunities for language learning. Children are highly motivated by food, which makes them more likely to try to communicate.",
        bulletPoints: [
          "Offer small portions so your child has to request 'more' — model the sign and the word together.",
          "Name every food as you serve it: 'banana! Here's your banana.' Use the same word each time.",
          "Create choices: 'milk or juice?' Hold up both and wait. Accept pointing, sounds, or words.",
          "Use 'all done' with a gesture when the meal is finished. Pause before clearing the plate to see if they'll signal.",
        ],
      },
      {
        heading: "Play Activities",
        content:
          "Play is the most natural context for language learning. Follow your child's lead — talk about what they are interested in, not what you want them to play with. Simple cause-and-effect toys are great for early words.",
        bulletPoints: [
          "Bubbles: Blow bubbles and wait. Say 'pop! pop! pop!' Model 'more' or 'bubble' and wait before blowing again.",
          "Ball play: Roll a ball and say 'roll!' or 'go!' Take turns and model 'my turn, your turn.'",
          "Stacking blocks: Build up and say 'up, up, up!' then 'crash!' when they knock them down. Repeat.",
        ],
        callout: {
          type: "tip",
          text: "The magic ratio is 1:1 — for every word you say, give your child an equal pause to respond. Most parents talk too much and wait too little.",
        },
      },
      {
        heading: "Bath and Bedtime Activities",
        content:
          "Bath time and bedtime routines offer calm, focused one-on-one time that is ideal for language practice. The relaxed atmosphere helps children feel safe to experiment with sounds and words.",
        bulletPoints: [
          "Bath: Label body parts as you wash ('wash your toes!'), pour water and say 'splash!' or 'pour'",
          "Bath toys: 'duck! duck says quack!' Make animal sounds — they are often easier than words.",
          "Bedtime books: Read the same book every night. Pause at predictable parts and let your child fill in.",
          "Goodnight routine: Name things as you say goodnight: 'night-night bear, night-night light'",
        ],
      },
      {
        heading: "Tips for Success",
        content:
          "The strategies above work best when you keep these key principles in mind. Language learning is a marathon, not a sprint. Consistency and patience matter more than perfection.",
        bulletPoints: [
          "Model, don't test: say the word yourself instead of asking 'what's this?' or 'say ball'",
          "Wait 5-10 seconds after modeling a word — silence is where learning happens",
          "Accept any attempt: a sound, a point, a look, or a word approximation all count",
          "Be face-to-face: get down to your child's level so they can see your mouth",
          "Repeat, repeat, repeat: children need many repetitions in meaningful contexts before they say a word",
          "Keep it fun: if your child is frustrated or disengaged, stop and try again later",
        ],
        callout: {
          type: "note",
          text: "Research shows children need many repetitions in meaningful contexts — often dozens of times or more — before they use a new word. Every repetition counts, even if it doesn't feel like progress.",
        },
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "prac-2",
    slug: "following-directions",
    title: "Building Comprehension at Home",
    category: "home-practice",
    description:
      "A step-by-step guide to helping your child follow directions, from one-step commands to multi-step sequences.",
    targetAudience: "Parents of children 12-48 months working on comprehension",
    sections: [
      {
        heading: "One-Step Directions",
        content:
          "Before your child can follow complex directions, they need to master one-step commands. Start with directions that are connected to a visible context — the object should be nearby and the action familiar. Use gestures initially, then fade them over time.",
        bulletPoints: [
          "Start with routine-based directions: 'sit down,' 'come here,' 'give me the cup'",
          "Point to the object while giving the direction, then gradually fade the point",
          "Use the same phrasing consistently: 'put it in' rather than alternating with 'drop it inside'",
          "Give one direction at a time and wait for your child to complete it",
          "Celebrate success: 'You did it! You put the ball in the box!'",
        ],
        callout: {
          type: "tip",
          text: "If your child doesn't follow a direction, don't repeat it multiple times. Instead, help them do it (hand-over-hand if needed) while saying the direction again. Then try again independently.",
        },
      },
      {
        heading: "Two-Step Directions",
        content:
          "Once your child can reliably follow one-step directions, you can begin combining two steps. Children typically begin following two-step directions between 24 and 36 months. Start with two related actions before moving to unrelated steps.",
        bulletPoints: [
          "Related steps first: 'Get your shoes AND put them on' (natural sequence)",
          "Then unrelated steps: 'Get your cup AND sit down' (no logical connection)",
          "Use 'and' or 'then' to connect the two steps: 'First get the ball, then bring it to me'",
          "Give both steps at once — don't give the second step after the first is completed",
          "If your child forgets step two, give a verbal reminder rather than repeating both steps",
        ],
      },
      {
        heading: "Making It Fun",
        content:
          "Following directions can feel like a chore for kids. Turning it into a game increases motivation and engagement. The key is to make the activity feel like play, not a test.",
        bulletPoints: [
          "Obstacle courses: 'Go UNDER the table, then jump OVER the pillow'",
          "Treasure hunts: 'Look BEHIND the couch, then look IN the box'",
          "Simon Says: a classic game that practices listening and following directions",
          "Art projects: 'First draw a circle, then color it red'",
          "Cooking together: 'Stir the batter, then pour it in the pan'",
          "Toy cleanup: 'Put the blocks in the bucket AND the cars on the shelf'",
        ],
        callout: {
          type: "tip",
          text: "Use stuffed animals or dolls as the 'student' first. Let your child watch as you give the toy a direction and help the toy follow it. Then it's your child's turn.",
        },
      },
      {
        heading: "Troubleshooting",
        content:
          "If your child is consistently struggling to follow directions, it could mean several things. It does not necessarily mean they have a language disorder — there may be simpler explanations that are easy to address.",
        bulletPoints: [
          "Check hearing: Can they hear you? Have they had recent ear infections?",
          "Reduce distractions: Turn off screens and get face-to-face before giving a direction",
          "Simplify your language: use fewer words and shorter sentences",
          "Check understanding: Does your child know the vocabulary in the direction?",
          "Check attention: Is your child engaged, or are they focused on something else?",
          "Rule out receptive language delay: if your child consistently struggles, seek evaluation",
        ],
      },
      {
        heading: "When to Make It Harder",
        content:
          "Move to the next level when your child is succeeding 80% of the time at the current level. Progression should feel natural, not rushed. Here is the general sequence for increasing difficulty.",
        bulletPoints: [
          "Level 1: One-step directions with gestures and visual context",
          "Level 2: One-step directions without gestures (verbal only)",
          "Level 3: Two-step related directions with visual context",
          "Level 4: Two-step unrelated directions (verbal only)",
          "Level 5: Three-step directions",
          "Level 6: Directions with concepts (color, size, location) — 'Get the BIG red ball'",
        ],
        callout: {
          type: "note",
          text: "If your child was doing well and suddenly regresses, don't worry. Illness, stress, sleep disruption, and developmental leaps can temporarily affect comprehension. Go back a level and build back up.",
        },
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "prac-3",
    slug: "sound-practice-fun",
    title: "Sound Practice Made Fun",
    category: "home-practice",
    description:
      "How speech sounds develop, plus creative ways to practice sounds at the word, sentence, and conversation level.",
    targetAudience: "Parents of children 2-6 years working on speech sounds",
    sections: [
      {
        heading: "How Speech Sounds Develop",
        content:
          "Speech sounds develop in a predictable order. Some sounds (like /m/, /b/, /p/) come early, while others (like /r/, /s/, /th/) come later. Understanding this timeline helps you know which errors are normal for your child's age and which ones may need attention.",
        bulletPoints: [
          "By age 2: p, b, m, d, n, h, w (early developing sounds)",
          "By age 3: t, k, g, f, ng, y (emerging sounds)",
          "By age 4: sh, ch, j, s, z (developing sounds)",
          "By age 5-6: r, v, th (later developing sounds)",
          "By age 7-8: all sounds should be mastered, including blends (sp, str, bl)",
          "Sound errors that are age-appropriate do NOT require therapy",
        ],
        callout: {
          type: "note",
          text: "A 3-year-old who says 'wabbit' for 'rabbit' is completely normal. The /r/ sound isn't expected to be mastered until age 5-6. Don't drill sounds your child isn't developmentally ready for.",
        },
      },
      {
        heading: "Practice at Word Level",
        content:
          "Word-level practice is where sound work begins. Your child practices the target sound in individual words before moving to longer contexts. Keep sessions short (5-10 minutes) and use games to keep it fun.",
        bulletPoints: [
          "Flashcard games: spread word cards face down and take turns flipping — say the word on each card",
          "Fishing game: attach cards to paper clips and 'fish' for words with a magnetic fishing pole",
          "Bowling: set up cups with word pictures and knock them down — say the word on each cup",
          "Memory match: match pairs of cards and say the word each time a card is flipped",
          "Practice 10-15 target words per session, repeating each 3-5 times",
        ],
      },
      {
        heading: "Practice in Sentences",
        content:
          "Once your child can say the sound correctly in words most of the time (around 80%), it is time to practice in sentences. This is a big jump, so expect some regression. Use carrier phrases — predictable sentence starters — to make it easier.",
        bulletPoints: [
          "Carrier phrases: 'I see a ___,' 'I have a ___,' 'It's a ___'",
          "Describe pictures: 'The snake is sleeping on the sand' (for /s/ practice)",
          "Tell silly stories using as many target words as possible",
          "Use books: find books with lots of target sound words and read together",
          "Don't correct every error — focus on the target sound practice, not perfection in conversation",
        ],
        callout: {
          type: "tip",
          text: "If your child was saying the sound correctly in words but is now struggling in sentences, that's normal. Going from words to sentences is like going from walking to running — it takes practice.",
        },
      },
      {
        heading: "Games for Sound Practice",
        content:
          "The most effective practice doesn't feel like practice at all. Here are games you can play that naturally create many opportunities to say target words.",
        bulletPoints: [
          "Go Fish: use cards with target words instead of numbers",
          "Board games: say a target word before each turn (modify any board game)",
          "Scavenger hunts: find objects that start with the target sound around the house",
          "I Spy: 'I spy something that starts with /s/' — great for sound awareness",
          "Coloring pages: say the word before you can color that section",
          "Cooking: find a recipe with lots of target sound words and talk through each step",
        ],
      },
      {
        heading: "When to Move to the Next Level",
        content:
          "Progress through the levels of sound practice when your child is consistently successful at the current level. The general hierarchy goes from isolation to conversation.",
        bulletPoints: [
          "Sound in isolation (just the sound by itself): 80% accuracy before moving to syllables",
          "Sound in syllables (ba, bee, bo): 80% before moving to words",
          "Sound in words: 80% before moving to phrases and sentences",
          "Sound in sentences: 80% before moving to structured conversation",
          "Sound in conversation: the final level — using the sound correctly in everyday talking",
          "If accuracy drops below 50% at a new level, go back to the previous level for more practice",
        ],
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "prac-4",
    slug: "building-sentences",
    title: "From 1 Word to 3+: Building Sentences",
    category: "home-practice",
    description:
      "How to help your child go from using single words to combining words into phrases and short sentences.",
    targetAudience: "Parents of children 18-36 months transitioning to multi-word speech",
    sections: [
      {
        heading: "The Building Blocks",
        content:
          "Before your child can combine words, they need a vocabulary foundation. Research suggests children typically start combining two words when they have around 50 words in their vocabulary. These building blocks include nouns, verbs, descriptors, and social words.",
        bulletPoints: [
          "Nouns (naming words): mama, ball, dog, car, cup, shoe",
          "Verbs (action words): go, eat, open, push, help, want",
          "Descriptors: big, hot, yucky, more, all gone",
          "Social words: hi, bye, no, yes, please, uh-oh",
          "Location words: up, down, in, out, here",
          "Aim for a mix of word types — verbs are especially important for combining",
        ],
        callout: {
          type: "tip",
          text: "Children who know mostly nouns have a harder time combining words. Verbs are the glue of sentences. Model lots of action words: push, go, eat, open, help, want, see, hear.",
        },
      },
      {
        heading: "Expanding Utterances",
        content:
          "The simplest strategy for building sentences is expansion: take what your child says and add one word to it. This models the next step without overwhelming them. Keep your expansion just one step ahead of where they are.",
        bulletPoints: [
          "Child says 'ball' → You say 'big ball' or 'throw ball' or 'red ball'",
          "Child says 'more' → You say 'more crackers' or 'want more'",
          "Child says 'go' → You say 'car go' or 'daddy go' or 'go fast'",
          "Child says 'mama up' → You say 'mama pick up' or 'mama stand up'",
          "Always keep your expansion natural — don't make it feel like a correction",
        ],
      },
      {
        heading: "Using Carrier Phrases",
        content:
          "Carrier phrases are short, predictable sentence starters that your child can learn to use with many different words. Once they learn the phrase, they can swap in new words to create many different sentences.",
        bulletPoints: [
          "'I want ___' (I want milk, I want ball, I want up)",
          "'I see ___' (I see dog, I see bird, I see mama)",
          "'More ___' (more juice, more play, more book)",
          "'Go ___' (go car, go outside, go park)",
          "'No ___' (no bath, no bed, no peas)",
          "'___ gone' (milk gone, daddy gone, all gone)",
        ],
        callout: {
          type: "note",
          text: "Carrier phrases may sound a bit robotic at first, and that's okay. They give your child a framework for combining words. Natural sentence variation will come with time and practice.",
        },
      },
      {
        heading: "Daily Opportunities",
        content:
          "Every moment of your day has opportunities to model and encourage multi-word combinations. You don't need to set aside special practice time — just build it into what you're already doing.",
        bulletPoints: [
          "Meals: 'eat banana,' 'drink milk,' 'more please,' 'all done eating'",
          "Getting dressed: 'shoes on,' 'shirt off,' 'blue socks,' 'zip up'",
          "Outside: 'big truck,' 'bird fly,' 'dog run,' 'push swing'",
          "Bath time: 'wash hands,' 'water hot,' 'pour water,' 'rubber duck'",
          "Car rides: 'go fast,' 'red car,' 'see bus,' 'beep beep'",
          "Bedtime: 'read book,' 'night night bear,' 'light off,' 'hug mama'",
        ],
      },
      {
        heading: "Celebrating Progress",
        content:
          "Language development is a gradual process. Celebrate the small steps and recognize that every new word combination is a milestone worth acknowledging. Your enthusiasm and responsiveness are the most powerful motivators for your child.",
        bulletPoints: [
          "Respond with excitement to new word combinations: 'You said two words together!'",
          "Repeat their combination back to confirm: Child says 'big dog' → 'Yes! Big dog!'",
          "Don't correct grammar at this stage — 'me want' is a great two-word combination",
          "Keep a log of new word combinations to track progress over time",
          "Share successes with your SLP so therapy goals can be updated",
          "Remember: word approximations count — 'mo cah' for 'more crackers' is combining!",
        ],
        callout: {
          type: "tip",
          text: "Progress isn't always linear. Your child might have a burst of new combinations, then plateau for a few weeks. This is completely normal. Keep modeling and the next burst will come.",
        },
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "prac-5",
    slug: "social-communication",
    title: "Social Communication: Play Dates and Beyond",
    category: "home-practice",
    description:
      "Activities for building joint attention, turn-taking, and social cue reading in young children.",
    targetAudience: "Parents of children 18 months to 5 years",
    sections: [
      {
        heading: "Joint Attention",
        content:
          "Joint attention is the ability to share focus with another person on an object or event. It's one of the earliest social communication skills and is foundational for language learning. When your child points at a dog and looks at you to make sure you see it too, that's joint attention.",
        bulletPoints: [
          "Point to interesting things and wait for your child to look: 'Look! A bird!'",
          "Follow your child's point or gaze and comment on what they're looking at",
          "Play with toys together, taking turns acting on the same toy",
          "Read books together, pointing to pictures and checking that your child is looking",
          "Share excitement about discoveries: 'Wow, did you see that truck?!'",
        ],
        callout: {
          type: "note",
          text: "Joint attention is a critical predictor of language development. Children who have difficulty with joint attention may benefit from early evaluation, especially if combined with limited eye contact or social engagement.",
        },
      },
      {
        heading: "Turn-Taking Skills",
        content:
          "Turn-taking is the foundation of conversation. Before children can take turns in dialogue, they need to practice taking turns in play. Start with simple back-and-forth activities and gradually build up to more complex exchanges.",
        bulletPoints: [
          "Roll a ball back and forth: 'My turn... your turn!'",
          "Take turns stacking blocks: you place one, then they place one",
          "Sing songs with pauses: sing a familiar line and wait for your child to fill in the next word",
          "Take turns feeding a stuffed animal or doll",
          "Play simple board games designed for toddlers (matching, colors)",
          "Model turn-taking language: 'My turn to pour, your turn to stir'",
        ],
      },
      {
        heading: "Reading Social Cues",
        content:
          "Understanding facial expressions, tone of voice, and body language is an important part of social communication. Young children are still learning to read these cues, and you can help by making them explicit.",
        bulletPoints: [
          "Name emotions you see: 'That boy looks sad. He's crying.'",
          "Use exaggerated facial expressions when playing to help your child learn to read faces",
          "Talk about characters' feelings in books: 'How does the bear feel? He looks scared.'",
          "Label your own emotions: 'Mama is frustrated because the jar won't open.'",
          "Point out body language: 'She's waving — that means hello!'",
        ],
        callout: {
          type: "tip",
          text: "Use picture books with clear facial expressions to practice emotion identification. Ask 'How does he feel?' and help your child name the emotion. Start with happy, sad, mad, and scared.",
        },
      },
      {
        heading: "Structured Play Activities",
        content:
          "Structured play activities give children a framework for social interaction. They provide clear rules, predictable turns, and defined roles, which makes social interaction easier for children who find unstructured play overwhelming.",
        bulletPoints: [
          "Pretend play with roles: 'You be the doctor, I'll be the patient'",
          "Cooking together: each person has a job (stir, pour, mix)",
          "Building projects: 'You find the red blocks, I'll build the base'",
          "Art activities side by side: draw together, share supplies, comment on each other's work",
          "Music activities: take turns choosing songs, play instruments together",
          "Outdoor games with clear rules: tag, hide and seek, follow the leader",
        ],
      },
      {
        heading: "Preparing for School",
        content:
          "School requires a whole set of social communication skills that children may not have practiced at home. Preparing your child for the social demands of a classroom can help ease the transition and set them up for success.",
        bulletPoints: [
          "Practice raising a hand and waiting (play 'school' at home)",
          "Work on asking for help: model 'I need help' and 'Can you help me?'",
          "Practice joining play: role-play approaching another child and saying 'Can I play?'",
          "Build narrative skills: practice telling what happened ('First... then... and then...')",
          "Practice greetings: saying hello, using names, making eye contact",
          "Discuss school routines: circle time, lining up, transitioning between activities",
        ],
        callout: {
          type: "note",
          text: "If your child has significant difficulty with social communication — limited eye contact, difficulty with joint attention, little interest in peers — discuss these concerns with your pediatrician or an SLP. These can be early signs that warrant further evaluation.",
        },
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "prac-6",
    slug: "mealtime-language",
    title: "Mealtime Language: Turning Meals into Learning",
    category: "home-practice",
    description:
      "Strategies for building vocabulary, requesting skills, and conversation during meals and snacks.",
    targetAudience: "Parents of children 12 months to 4 years",
    sections: [
      {
        heading: "Setting Up for Success",
        content:
          "The environment matters. A calm, screen-free mealtime with face-to-face interaction is the foundation for language learning at the table. Set the stage before the food arrives.",
        bulletPoints: [
          "Turn off screens — TV, tablets, and phones should be off during meals",
          "Sit face-to-face so your child can see your mouth and expressions",
          "Serve small portions so your child needs to request more",
          "Have the food visible but slightly out of reach to create communication opportunities",
          "Keep meals relaxed — mealtime should not feel like a therapy session",
        ],
        callout: {
          type: "warning",
          text: "Never withhold food from a hungry child to force communication. The goal is to create natural opportunities, not to make your child earn their meal. If they are upset or frustrated, give them the food.",
        },
      },
      {
        heading: "Vocabulary at the Table",
        content:
          "Meals introduce a rich set of vocabulary that your child encounters multiple times every day. Take advantage of this repetition by consistently naming foods, actions, utensils, and descriptions.",
        bulletPoints: [
          "Food names: banana, cracker, milk, apple, cheese, water",
          "Action words: eat, drink, pour, stir, cut, mix, blow (to cool food)",
          "Descriptors: hot, cold, yummy, crunchy, sticky, wet, more, all gone",
          "Utensils: spoon, fork, cup, bowl, plate, napkin",
          "Social words at the table: please, thank you, more, all done, help",
        ],
      },
      {
        heading: "Requesting Practice",
        content:
          "Mealtimes are the most natural time to practice requesting because children are highly motivated. They want the food! Use this motivation to encourage any form of communication — gestures, sounds, signs, or words.",
        bulletPoints: [
          "Offer choices: hold up two items and name them. Wait for your child to indicate.",
          "Give small amounts so they need to ask for more",
          "Model 'more please' (sign + word) and wait before giving more",
          "Pause before pouring juice or serving the next item — create a communicative opportunity",
          "Accept any communication attempt: a look, a point, a sign, a sound, or a word",
        ],
        callout: {
          type: "tip",
          text: "The 'small portions' strategy is one of the most effective for encouraging requesting. Instead of filling the entire bowl with cereal, put in a few pieces. When they want more, that's your opportunity.",
        },
      },
      {
        heading: "Conversation Starters by Age",
        content:
          "As children get older, mealtimes become opportunities for more complex language. Adjust your conversation expectations based on your child's age and language level.",
        bulletPoints: [
          "12-18 months: Name foods, model signs, narrate ('You're eating banana!')",
          "18-24 months: Ask simple questions: 'Want more?' 'All done?' Offer choices.",
          "24-36 months: Talk about the food: 'This apple is crunchy!' Ask 'What's that?'",
          "3-4 years: Ask about their day: 'What did you do at school?' 'Who did you play with?'",
          "4-5 years: Play games like 'tell me something that happened today' or 'would you rather...'",
        ],
      },
      {
        heading: "Managing Distractions",
        content:
          "If mealtime conversations feel impossible because of distractions, tantrums, or picky eating, start small. You do not need to turn every meal into a language lesson. Pick one meal or snack a day to focus on and keep it low-pressure.",
        bulletPoints: [
          "Start with snack time, which is usually shorter and less stressful than a full meal",
          "Focus on one strategy at a time — don't try to do everything at once",
          "If your child is upset about food, focus on calming first and language second",
          "Siblings can actually help — older children model language for younger ones",
          "Even 5 minutes of focused interaction at one meal a day makes a difference",
          "Consistency matters more than duration — a little bit every day beats a lot once a week",
        ],
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "prac-7",
    slug: "bath-time-talk",
    title: "Bath Time Talk: Water Play Activities",
    category: "home-practice",
    description:
      "Turn bath time into a language-rich experience with water play activities for vocabulary, prepositions, and action words.",
    targetAudience: "Parents of children 12-36 months",
    sections: [
      {
        heading: "Why Bath Time is Great for Language",
        content:
          "Bath time is a uniquely powerful learning environment. Your child is contained, face-to-face, with limited distractions and your undivided attention. The sensory experience of water play is engaging, and the routine is predictable — all ideal conditions for language learning.",
        bulletPoints: [
          "One-on-one time with your child's full attention",
          "Rich sensory experience: warm water, bubbles, pouring, splashing",
          "Predictable routine that supports word learning through repetition",
          "Natural opportunities for requesting and commenting",
          "A calm, positive emotional state supports learning",
        ],
      },
      {
        heading: "Action Words in Water Play",
        content:
          "Water play naturally introduces many action words that are easy to demonstrate. Pair each action with its word, using short, clear sentences. Repeat the word multiple times during the activity.",
        bulletPoints: [
          "Pour: fill a cup and pour water. 'Pour! Pour the water. Pour it out.'",
          "Splash: slap the water and say 'splash!' Encourage your child to splash too.",
          "Dump: fill a container and dump it. 'Dump it! All the water dumped out!'",
          "Squeeze: squeeze a sponge or washcloth. 'Squeeze! Squeeze the water out.'",
          "Wash: wash body parts, a doll, or bath toys. 'Wash! Wash your tummy.'",
          "Float and sink: drop items in water. 'The duck floats! The rock sinks!'",
        ],
        callout: {
          type: "tip",
          text: "Use a loud, enthusiastic voice for exciting actions (SPLASH!) and a quiet, gentle voice for calm actions (pour...). Varying your tone keeps your child's attention and teaches them about prosody.",
        },
      },
      {
        heading: "Preposition Practice",
        content:
          "Bath time is a fantastic context for teaching location words (prepositions). Use cups, containers, and bath toys to practice in, on, under, behind, and next to.",
        bulletPoints: [
          "IN: 'Put the duck IN the cup. Where's the duck? IN the cup!'",
          "ON: 'Put the boat ON your head! The soap is ON the shelf.'",
          "UNDER: 'The fish went UNDER the water. Where is it? UNDER!'",
          "BEHIND: 'The duck is hiding BEHIND your back!'",
          "OUT: 'Take the fish OUT of the cup. Fish is OUT!'",
          "BETWEEN: 'The boat is BETWEEN the two ducks.'",
        ],
      },
      {
        heading: "Song and Routine Ideas",
        content:
          "Songs and predictable routines give children a framework for participation. When they know what comes next, they are more likely to fill in words and join in.",
        bulletPoints: [
          "Sing 'Head, Shoulders, Knees and Toes' while washing each body part",
          "Create a washing song: 'This is the way we wash our arms, wash our arms, wash our arms...'",
          "Count toys as you put them in and take them out: 'One duck, two ducks, three ducks!'",
          "Use a predictable ending routine: 'Water goes bye-bye! Pull the plug!' every night",
          "Sing 'Row Row Row Your Boat' while rocking gently in the water",
          "Create a cleanup song for putting bath toys away",
        ],
      },
      {
        heading: "Safety First",
        content:
          "While bath time is a wonderful language learning opportunity, safety always comes first. Never leave your child unattended in or near water, even for a moment.",
        bulletPoints: [
          "Never leave your child unattended in the bath — not even for a second",
          "Keep water temperature comfortable (around 100 degrees F / 38 degrees C)",
          "Have all supplies within arm's reach before putting your child in the tub",
          "Use non-slip mats in the tub",
          "Keep the focus on fun and interaction, not on getting clean as fast as possible",
          "If your child is afraid of the bath, start with water play at the sink or in a small tub",
        ],
        callout: {
          type: "warning",
          text: "Children can drown in as little as 1 inch of water. Never leave your child unattended during bath time, even if they can sit up independently. Stay within arm's reach at all times.",
        },
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "prac-8",
    slug: "bedtime-language",
    title: "Bedtime Routine Language Activities",
    category: "home-practice",
    description:
      "Language-building activities for the bedtime routine, including book strategies, daily recaps, and calming language games.",
    targetAudience: "Parents of children 12 months to 5 years",
    sections: [
      {
        heading: "Building a Verbal Routine",
        content:
          "Bedtime routines are one of the most predictable parts of a child's day. This predictability makes them ideal for language learning. When your child knows what comes next, they can start to anticipate and participate verbally.",
        bulletPoints: [
          "Use the same sequence every night: bath → pajamas → teeth → books → bed",
          "Narrate each step: 'First we brush teeth. Now pajamas. Time for books!'",
          "Let your child help narrate: 'What comes after teeth?' Pause and wait.",
          "Create a simple visual schedule if your child benefits from visual supports",
          "Use transitional phrases: 'All done with bath. Next is pajamas!'",
        ],
      },
      {
        heading: "Book Reading Strategies",
        content:
          "Reading together at bedtime is one of the most impactful things you can do for your child's language development. But how you read matters as much as what you read. Interactive reading — where your child participates — is far more effective than simply reading the words on the page.",
        bulletPoints: [
          "Point to pictures and name them before reading the text",
          "Pause at predictable parts and let your child fill in the word",
          "Ask 'what's that?' and 'what happened?' questions (open-ended)",
          "Connect the story to your child's life: 'You have a teddy bear too!'",
          "Read the same favorite books over and over — repetition builds language",
          "Let your child turn pages and choose which book to read",
        ],
        callout: {
          type: "tip",
          text: "Don't feel pressured to read every word on every page. For young children, pointing to pictures, making sound effects, and talking about what's happening is MORE valuable than reading the text verbatim.",
        },
      },
      {
        heading: "Recap the Day",
        content:
          "Talking about the day's events at bedtime builds narrative skills — the ability to tell stories in sequence. This is an important skill for school readiness. Start simple and build complexity over time.",
        bulletPoints: [
          "For toddlers: 'We went to the park! You went on the slide! Wheee!'",
          "For 2-3 year olds: 'What did we do today? We went to the... (park!)'",
          "For 3-4 year olds: 'Tell me three things that happened today.'",
          "For 4-5 year olds: 'What was the best part of your day? What was hard?'",
          "Use photos from the day as visual support for recapping events",
          "Model telling your own day: 'First I went to work. Then I picked you up. Then we made dinner.'",
        ],
      },
      {
        heading: "Predictable Phrases",
        content:
          "Bedtime is full of predictable phrases that children can learn to say independently. These routine phrases build confidence and give children ownership over the bedtime process.",
        bulletPoints: [
          "'Night night, ___' — say goodnight to every stuffed animal, family member, or room object",
          "'One more book' — a great two-word combination to practice",
          "'Lights off / lights on' — with control of the light switch",
          "'Love you' — one of the most motivating phrases for a child to learn to say",
          "'See you in the morning' — a reassuring phrase that provides comfort",
          "'Cozy!' or 'All tucked in' — labeling the comfortable feeling",
        ],
        callout: {
          type: "note",
          text: "Saying 'night night' to every item in the room (like in Goodnight Moon) is not just a cute habit — it's genuine language practice. Each item they name is a vocabulary word reinforced.",
        },
      },
      {
        heading: "Calming Language Activities",
        content:
          "Bedtime should wind down, not ramp up. These language activities are designed to be calming and soothing while still building communication skills. Keep your voice soft and your pace slow.",
        bulletPoints: [
          "Whisper game: take turns whispering words or phrases to each other",
          "Gratitude list: 'What are you thankful for today?' Name three things.",
          "Breathing words: breathe in and say 'calm,' breathe out and say 'sleepy'",
          "Quiet counting: count backward slowly from 10 with your eyes closed",
          "Imagination game: 'If you could dream about anything tonight, what would it be?'",
          "Progressive relaxation with labeling: 'Relax your toes... relax your legs... relax your tummy...'",
        ],
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  // ─── MILESTONE SUMMARY SHEETS ──────────────────────────────────────

  {
    id: "mile-1",
    slug: "milestones-0-6",
    title: "Milestone Snapshot: 0-6 Months",
    category: "milestone-summary",
    description:
      "Communication, feeding, and social milestones for the first 6 months of life.",
    targetAudience: "Parents of infants 0-6 months",
    sections: [
      {
        heading: "Speech & Sounds",
        content:
          "In the first six months, your baby is learning to use their voice. They progress from reflexive crying to purposeful cooing and vocal play. These early sounds are the building blocks of speech.",
        bulletPoints: [
          "Birth-2 months: cries to communicate needs; different cries for hunger, pain, and discomfort",
          "2-3 months: begins cooing — soft vowel sounds like 'ooo' and 'aah'",
          "3-4 months: vocal play begins — squealing, growling, blowing raspberries",
          "4-6 months: babbling begins with consonant-vowel combinations ('ba,' 'da,' 'ma')",
          "Laughs out loud by 3-4 months",
          "Experiments with volume — yells, whispers, makes loud and soft sounds",
        ],
      },
      {
        heading: "Language & Understanding",
        content:
          "Even before your baby says their first word, they are building receptive language skills. They are learning to recognize voices, respond to their name, and understand the rhythm and melody of language.",
        bulletPoints: [
          "Recognizes parent's voice from birth",
          "Startles to loud sounds and calms to familiar voices",
          "Begins to respond to their name by 4-6 months",
          "Turns head toward sounds and voices",
          "Recognizes familiar words like 'mama,' 'dada,' and 'bottle' in context by 6 months",
          "Responds differently to happy vs. angry tones of voice",
        ],
      },
      {
        heading: "Social Communication",
        content:
          "Social communication starts from birth. Your baby is learning to connect with you through eye contact, smiling, and turn-taking vocalizations. These early social exchanges are the foundation for future conversation.",
        bulletPoints: [
          "Makes eye contact during feeding and face-to-face interaction",
          "Social smile emerges by 6-8 weeks",
          "Takes vocal turns: you talk, baby coos, you respond, baby coos again",
          "Shows excitement when seeing familiar people",
          "Reaches toward people and objects of interest",
          "Imitates facial expressions (tongue protrusion, mouth opening) by 2-3 months",
        ],
      },
      {
        heading: "Feeding Skills",
        content:
          "Feeding development in the first six months is primarily about breast or bottle feeding. Oral-motor skills for feeding are closely connected to skills needed for speech development.",
        bulletPoints: [
          "Rooting reflex helps baby find the nipple",
          "Coordinates suck-swallow-breathe pattern for feeding",
          "Gradually develops more efficient and faster feeding",
          "May begin showing interest in solid foods by 4-6 months (watching you eat, reaching for food)",
          "Introduction of purees typically begins around 4-6 months per pediatrician guidance",
        ],
      },
      {
        heading: "Red Flags",
        content:
          "While all babies develop at their own pace, certain signs suggest a baby may benefit from early evaluation. Trust your instincts — you know your baby best.",
        bulletPoints: [
          "No smiling or social engagement by 3 months",
          "Does not startle or respond to loud sounds",
          "Does not make eye contact during feeding or interaction",
          "Very quiet — no cooing, squealing, or vocal play by 4-5 months",
          "Does not turn toward sounds by 5-6 months",
          "Stiff or floppy body tone affecting feeding or interaction",
        ],
        callout: {
          type: "warning",
          text: "If your baby does not respond to loud sounds or seems not to hear you, request a hearing screening immediately. Early hearing loss can significantly impact speech and language development.",
        },
      },
      {
        heading: "What You Can Do",
        content:
          "The most important thing you can do for your baby's communication development is to interact with them. Talk, sing, read, and respond to their cues. You are your baby's first and most important communication partner.",
        bulletPoints: [
          "Talk to your baby throughout the day — narrate what you are doing",
          "Respond to their coos and sounds as if they are talking to you",
          "Sing songs and nursery rhymes",
          "Read board books with high-contrast pictures",
          "Make face-to-face time a priority (tummy time, feeding, diaper changes)",
          "Imitate your baby's sounds — this teaches them that communication is a two-way exchange",
        ],
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "mile-2",
    slug: "milestones-6-12",
    title: "Milestone Snapshot: 6-12 Months",
    category: "milestone-summary",
    description:
      "Communication, feeding, and social milestones for babies 6-12 months old.",
    targetAudience: "Parents of infants 6-12 months",
    sections: [
      {
        heading: "Speech & Sounds",
        content:
          "Between 6 and 12 months, babbling becomes more complex and starts to sound more like real speech. Your baby is practicing the sounds, rhythms, and patterns of your language. This is a critical period for speech sound development.",
        bulletPoints: [
          "Canonical babbling with repeated syllables: 'bababa,' 'mamama,' 'dadada'",
          "Variegated babbling emerges: mixing syllables like 'badaga' or 'magaba'",
          "Babbling begins to have the rhythm and melody of real speech (jargon)",
          "May produce first true word by 12 months (often 'mama,' 'dada,' 'uh-oh')",
          "Imitates speech sounds and simple words you model",
          "Uses voice to express emotions: excitement, frustration, pleasure",
        ],
      },
      {
        heading: "Language & Understanding",
        content:
          "Receptive language grows rapidly during this period. Your baby understands far more than they can say. They begin to follow simple directions, respond to familiar words, and understand routine phrases.",
        bulletPoints: [
          "Responds to 'no' (may pause or stop briefly)",
          "Looks at familiar objects when named: 'Where's your bottle?'",
          "Follows simple directions with gestures: 'Give it to me' (with outstretched hand)",
          "Understands common words: 'bye-bye,' 'bottle,' 'ball,' names of family members",
          "Responds to own name consistently by 9 months",
          "Begins to understand simple questions: 'Want more?' 'All done?'",
        ],
      },
      {
        heading: "Social Communication",
        content:
          "This is a period of major social communication development. Your baby begins using intentional communication — pointing, reaching, and vocalizing to share interests and make requests. These gestures are precursors to words.",
        bulletPoints: [
          "Points to objects of interest (sharing attention, not just requesting)",
          "Waves 'bye-bye' and plays 'peek-a-boo' and 'pat-a-cake'",
          "Shows objects to you (proto-declarative pointing — 'Look at this!')",
          "Gives objects to you and takes them back",
          "Checks your reaction before touching something new (social referencing)",
          "Imitates actions and gestures: clapping, blowing kisses",
        ],
        callout: {
          type: "tip",
          text: "Pointing is one of the most important milestones in this age range. Children who point to share interest (not just to request) are showing a key building block of communication. If your child is not pointing by 12 months, mention it to your pediatrician.",
        },
      },
      {
        heading: "Feeding Skills",
        content:
          "The transition to solid foods introduces new oral-motor skills that are directly related to speech development. The same muscles used for chewing are used for producing speech sounds.",
        bulletPoints: [
          "Eats pureed foods from a spoon",
          "Begins managing soft solid foods with emerging chewing skills",
          "Drinks from a cup with some spilling (introduction of open cup)",
          "Picks up small foods with pincer grasp (self-feeding finger foods)",
          "May start using a straw by 9-12 months",
          "Beginning to handle more textured foods (mashed, soft chunks)",
        ],
      },
      {
        heading: "Red Flags",
        content:
          "The following signs at 6-12 months suggest your child may benefit from an evaluation. Remember, early intervention leads to better outcomes.",
        bulletPoints: [
          "No babbling by 9 months",
          "Does not respond to their name by 9 months",
          "No pointing or gesturing by 12 months",
          "No imitation of sounds, words, or actions",
          "Does not follow your gaze or point to look where you're looking",
          "Limited interest in social interaction (does not play peek-a-boo or wave)",
        ],
      },
      {
        heading: "What You Can Do",
        content:
          "This age is all about back-and-forth interaction. Respond to every attempt your baby makes to communicate. They are learning that their actions and sounds have an effect on the world around them.",
        bulletPoints: [
          "Respond to pointing by naming what they're pointing at: 'Yes! That's a dog!'",
          "Play turn-taking games: peek-a-boo, rolling a ball back and forth, stacking blocks",
          "Name objects and actions throughout the day in simple, short sentences",
          "Read books with flaps, textures, and simple pictures",
          "Sing songs with actions: 'Itsy Bitsy Spider,' 'Wheels on the Bus'",
          "Wait before giving your child what they want — give them a chance to point, reach, or vocalize first",
        ],
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "mile-3",
    slug: "milestones-12-18",
    title: "Milestone Snapshot: 12-18 Months",
    category: "milestone-summary",
    description:
      "Communication, feeding, and social milestones for toddlers 12-18 months old.",
    targetAudience: "Parents of toddlers 12-18 months",
    sections: [
      {
        heading: "Speech & Sounds",
        content:
          "Between 12 and 18 months, most children say their first words and begin building an early vocabulary. Words may not sound perfect — approximations are normal and expected at this stage.",
        bulletPoints: [
          "First words typically emerge between 10-15 months",
          "Vocabulary of 5-20 words by 18 months",
          "Words may be approximations: 'ba' for ball, 'dah' for dog",
          "Uses a mix of jargon (babbling that sounds like sentences) and real words",
          "Common first words: mama, dada, uh-oh, no, hi, bye, more, ball",
          "May use words inconsistently — says a word then stops using it for a while",
        ],
        callout: {
          type: "note",
          text: "Words don't have to be said perfectly to count. If your child consistently uses 'ba' for 'ball,' that's a word! They are using a consistent sound pattern to represent a meaning.",
        },
      },
      {
        heading: "Language & Understanding",
        content:
          "Receptive language continues to outpace expressive language. Your toddler understands many more words than they can say. They can follow simple directions and identify familiar objects and people.",
        bulletPoints: [
          "Understands 50+ words even if they say fewer than 20",
          "Follows simple one-step directions: 'Get your shoes,' 'Come here'",
          "Points to body parts when named: 'Where's your nose?'",
          "Points to familiar objects in books when asked: 'Where's the dog?'",
          "Understands simple questions: 'Want milk?' 'Where's daddy?'",
          "Responds to their name and to 'no' consistently",
        ],
      },
      {
        heading: "Social Communication",
        content:
          "Social communication skills are rapidly expanding. Your toddler is becoming a more intentional communicator, using gestures, words, and eye contact together to get their point across.",
        bulletPoints: [
          "Uses pointing, gestures, and words together to communicate",
          "Brings objects to show you (sharing interests)",
          "Imitates household activities (talking on phone, sweeping)",
          "Plays simple pretend (feeds a doll, drives a car with 'vroom')",
          "Shows affection to familiar people (hugs, pats)",
          "May show distress when separated from caregivers (separation anxiety)",
        ],
      },
      {
        heading: "Feeding Skills",
        content:
          "By 12-18 months, your toddler is transitioning from baby food to table food. They are learning to self-feed and handle a wider variety of textures.",
        bulletPoints: [
          "Eats a variety of soft table foods cut into small pieces",
          "Self-feeds with fingers — may start attempting to use a spoon",
          "Drinks from an open cup with some spilling",
          "Drinks from a straw",
          "Chewing skills are improving — can manage soft solids, soft meats",
          "May become more selective about foods (normal picky eating begins)",
        ],
      },
      {
        heading: "Red Flags",
        content:
          "These signs at 12-18 months suggest an evaluation may be helpful. Early intervention during this period can have a significant positive impact on long-term outcomes.",
        bulletPoints: [
          "No words by 15-16 months",
          "Does not point to request or show interest by 14 months",
          "Does not follow simple directions (even with gestures)",
          "Limited eye contact during interaction",
          "Does not imitate actions or sounds",
          "Loss of words or skills previously acquired (regression)",
        ],
        callout: {
          type: "warning",
          text: "If your child had words and lost them, contact your pediatrician right away. Regression of any kind warrants prompt evaluation.",
        },
      },
      {
        heading: "What You Can Do",
        content:
          "This is a critical period for language growth. Your interaction style has a direct impact on how quickly your child's vocabulary grows. Focus on following their lead, modeling language, and creating opportunities to communicate.",
        bulletPoints: [
          "Model single words and short phrases throughout the day",
          "Follow your child's interest: talk about what THEY are looking at or playing with",
          "Expand on their words: if they say 'car,' you say 'red car!' or 'car go!'",
          "Read simple books with one picture per page and name the objects",
          "Offer choices: 'banana or apple?' Hold up both and wait",
          "Don't quiz or test: say the word yourself instead of asking 'What's this?'",
        ],
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "mile-4",
    slug: "milestones-18-24",
    title: "Milestone Snapshot: 18-24 Months",
    category: "milestone-summary",
    description:
      "Communication, feeding, and social milestones for toddlers 18-24 months old — the vocabulary explosion period.",
    targetAudience: "Parents of toddlers 18-24 months",
    sections: [
      {
        heading: "Speech & Sounds",
        content:
          "Between 18 and 24 months, many children experience a 'vocabulary explosion' — rapidly adding new words to their vocabulary. They begin combining words into two-word phrases, which is a major language milestone.",
        bulletPoints: [
          "Vocabulary grows from 20 words at 18 months to 50+ words by 24 months",
          "The vocabulary explosion typically happens around 18-20 months",
          "Begins combining two words: 'more milk,' 'daddy go,' 'big truck'",
          "Speech is approximately 25-50% intelligible to strangers",
          "Uses a variety of consonant sounds in words (m, b, p, d, n, t, h, w)",
          "May still use jargon (babbling that sounds like sentences) mixed with real words",
        ],
        callout: {
          type: "note",
          text: "Not all children have a dramatic vocabulary explosion. Some children add words gradually and steadily. Both patterns are normal. What matters is that vocabulary is growing over time.",
        },
      },
      {
        heading: "Language & Understanding",
        content:
          "Receptive language is growing even faster than expressive language. Your toddler can now follow two-step directions, understand new words quickly, and answer simple questions.",
        bulletPoints: [
          "Understands 200-300 words",
          "Follows two-step related directions: 'Get your shoes and bring them to me'",
          "Points to pictures in books when named",
          "Points to body parts (at least 6) when asked",
          "Understands action words: 'eat,' 'drink,' 'sleep,' 'run'",
          "Understands simple questions: 'Where's the ball?' 'What's that?'",
        ],
      },
      {
        heading: "Social Communication",
        content:
          "Social communication becomes more sophisticated during this period. Your toddler is beginning to use language for different purposes — requesting, commenting, protesting, and greeting.",
        bulletPoints: [
          "Uses words or word combinations to request: 'more juice,' 'help me'",
          "Comments on things they notice: points and says 'dog!' or 'big truck!'",
          "Beginning to engage in simple pretend play with others",
          "Shows interest in other children (watching, parallel play)",
          "Uses language to protest: 'no!' 'mine!' 'don't want!'",
          "Beginning to take turns in simple games and activities",
        ],
      },
      {
        heading: "Feeding Skills",
        content:
          "By 18-24 months, your toddler is eating most table foods and becoming more independent with self-feeding. Picky eating often peaks during this period.",
        bulletPoints: [
          "Eats most table foods, including a variety of textures",
          "Uses a spoon with some spilling (improving accuracy)",
          "Drinks from an open cup independently",
          "Can bite through harder foods (crackers, raw vegetables with supervision)",
          "Picky eating may peak — this is a normal developmental phase",
          "May want to feed themselves and resist being fed by a caregiver",
        ],
      },
      {
        heading: "Red Flags",
        content:
          "At 18-24 months, the following signs warrant evaluation. This is a critical window for early intervention — services started before age 2 tend to have the strongest outcomes.",
        bulletPoints: [
          "Fewer than 50 words by 24 months",
          "No two-word combinations by 24 months",
          "Does not follow simple one-step directions without gestures",
          "Not pointing to share interests (only pointing to request)",
          "Does not engage in pretend play",
          "Difficulty understanding simple questions",
        ],
        callout: {
          type: "warning",
          text: "If your child has fewer than 50 words at age 2, they are considered a 'late talker.' While some late talkers catch up, research shows that seeking evaluation now leads to better outcomes than waiting.",
        },
      },
      {
        heading: "What You Can Do",
        content:
          "During the vocabulary explosion, your child is like a sponge — absorbing new words at an incredible rate. Maximize this window by providing rich, varied language input throughout the day.",
        bulletPoints: [
          "Use two-to-three-word phrases when talking to your child ('throw ball,' 'wash hands,' 'big dog')",
          "Expand their two-word phrases to three words: 'more milk' → 'want more milk'",
          "Narrate your actions: 'Mama is cooking. Stir stir stir. Hot!'",
          "Read books with simple stories and ask questions about the pictures",
          "Offer choices throughout the day to encourage requesting",
          "Play pretend: feed the baby, drive the car, cook in the kitchen — and narrate the play",
        ],
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "mile-5",
    slug: "milestones-24-36",
    title: "Milestone Snapshot: 24-36 Months",
    category: "milestone-summary",
    description:
      "Communication, feeding, and social milestones for toddlers 24-36 months — the language explosion era.",
    targetAudience: "Parents of toddlers 2-3 years old",
    sections: [
      {
        heading: "Speech & Sounds",
        content:
          "Between ages 2 and 3, speech clarity improves significantly. Your child is using more consonant sounds correctly and is becoming easier to understand. By age 3, familiar listeners should understand about 75% of what your child says.",
        bulletPoints: [
          "Vocabulary grows to 200-1000+ words",
          "Uses 2-3 word sentences consistently, moving to 3-4 word sentences by age 3",
          "Speech is approximately 50-75% intelligible to unfamiliar listeners",
          "Masters early sounds: p, b, m, n, t, d, h, w",
          "Emerging sounds: k, g, f, s (may still have errors with these — that's normal)",
          "May stutter briefly during rapid language growth — this is usually normal developmental disfluency",
        ],
        callout: {
          type: "note",
          text: "Brief stuttering (repeating words or parts of words) is common around age 2-3, especially during a language growth spurt. It usually resolves on its own within 6 months. If it persists or worsens, consult an SLP.",
        },
      },
      {
        heading: "Language & Understanding",
        content:
          "Language comprehension becomes much more sophisticated during this period. Your child understands concepts like size, color, and quantity, and can follow more complex directions.",
        bulletPoints: [
          "Follows two-step unrelated directions: 'Put your cup on the table and get your shoes'",
          "Understands basic concepts: big/little, in/on/under, hot/cold",
          "Answers 'what,' 'where,' and 'who' questions",
          "Understands simple stories read aloud",
          "Begins to understand 'why' questions (simple cause-and-effect)",
          "Knows names of common objects and can categorize (animals, foods, clothes)",
        ],
      },
      {
        heading: "Social Communication",
        content:
          "Social communication takes a big leap between 2 and 3. Your child begins engaging in actual conversations, playing cooperatively with other children, and using language for a wider range of social purposes.",
        bulletPoints: [
          "Engages in short back-and-forth conversations (2-3 turns)",
          "Begins to play cooperatively with other children (not just parallel play)",
          "Uses language to describe, comment, and ask questions — not just request",
          "Beginning to understand and express emotions: 'I'm mad,' 'baby sad'",
          "Uses 'please' and 'thank you' with reminders",
          "Can name a friend and talk about what they did together",
        ],
      },
      {
        heading: "Feeding Skills",
        content:
          "By age 2-3, your child should be eating a wide variety of foods and becoming proficient with utensils. While picky eating is common, extreme selectivity may warrant evaluation.",
        bulletPoints: [
          "Uses a spoon and fork with increasing accuracy",
          "Drinks from an open cup without spilling (most of the time)",
          "Can chew a wide variety of textures including raw fruits and vegetables, meats",
          "Feeds independently for most of the meal",
          "Some picky eating is normal — most children have 10-15 preferred foods",
          "Can drink from a straw proficiently",
        ],
      },
      {
        heading: "Red Flags",
        content:
          "By age 2-3, certain communication skills should be well established. The following signs suggest your child would benefit from evaluation if not already receiving services.",
        bulletPoints: [
          "Not combining words into phrases by 24-27 months",
          "Speech is less than 50% understandable to unfamiliar listeners",
          "Not asking simple questions by age 3",
          "Difficulty following two-step directions",
          "Not engaging in pretend play by age 2.5",
          "Persistent stuttering lasting more than 6 months",
        ],
      },
      {
        heading: "What You Can Do",
        content:
          "This age is a critical window for building conversational skills and narrative language. Engage your child in back-and-forth exchanges and help them learn to tell simple stories about their experiences.",
        bulletPoints: [
          "Have conversations: ask open-ended questions and wait for responses",
          "Expand sentences: child says 'doggy run' → you say 'the big doggy is running fast!'",
          "Tell stories about your day and encourage your child to tell you about theirs",
          "Play pretend together: create scenarios, take on roles, narrate the action",
          "Read longer books with simple plots and talk about what happened",
          "Practice following two-step directions during play: 'First build the tower, then knock it down!'",
        ],
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },

  {
    id: "mile-6",
    slug: "milestones-36-60",
    title: "Milestone Snapshot: 3-5 Years",
    category: "milestone-summary",
    description:
      "Communication, feeding, and social milestones for preschoolers ages 3-5 years — preparing for school.",
    targetAudience: "Parents of preschool-aged children (3-5 years)",
    sections: [
      {
        heading: "Speech & Sounds",
        content:
          "Between ages 3 and 5, speech clarity improves dramatically. By age 4, strangers should understand most of what your child says. By age 5, all early and middle developing sounds should be mastered, with only later sounds like /r/ and /th/ still emerging.",
        bulletPoints: [
          "By age 3: speech is 75% intelligible to strangers",
          "By age 4: speech is 90-100% intelligible to strangers",
          "By age 3-4: masters k, g, f, t, d, n and most early sounds",
          "By age 4-5: masters s, z, sh, ch, j, l sounds",
          "By age 5-6: r, v, th sounds are emerging or mastered",
          "Can produce consonant blends (sp, st, bl, tr) with increasing accuracy",
        ],
      },
      {
        heading: "Language & Understanding",
        content:
          "Language becomes increasingly complex and abstract during the preschool years. Your child can understand and use longer sentences, tell stories, and begin to grasp concepts like time, cause and effect, and humor.",
        bulletPoints: [
          "Uses sentences of 4-6+ words by age 4",
          "Tells stories with a beginning, middle, and end by age 4-5",
          "Answers 'why' and 'how' questions",
          "Understands concepts: before/after, same/different, first/last",
          "Follows three-step directions",
          "Uses past tense ('I walked'), plurals ('dogs'), and possessives ('mommy's')",
        ],
        callout: {
          type: "tip",
          text: "Narrative skills — the ability to tell stories in order — are one of the strongest predictors of school readiness. Practice by asking your child to tell you about a movie they watched, a trip to the park, or what happened at school.",
        },
      },
      {
        heading: "Social Communication",
        content:
          "Preschoolers become much more socially sophisticated. They can engage in longer conversations, negotiate with peers, understand feelings, and use language to solve problems.",
        bulletPoints: [
          "Engages in extended conversations with multiple turn-taking exchanges",
          "Plays cooperatively with peers: negotiates roles, shares, takes turns",
          "Uses language to solve problems: 'Let's take turns. You go first, then me.'",
          "Understands and expresses a range of emotions",
          "Can adjust language for different listeners (simpler talk for a baby, polite language with adults)",
          "Tells jokes and understands simple humor (often knock-knock jokes or silly words)",
        ],
      },
      {
        heading: "Feeding Skills",
        content:
          "By ages 3-5, your child should be eating a varied diet independently and managing all food textures. Persistent feeding difficulties at this age may warrant evaluation by an SLP or occupational therapist.",
        bulletPoints: [
          "Eats independently using fork and spoon with minimal spilling",
          "Can use a knife to spread by age 4-5",
          "Manages all food textures including tough meats, mixed textures, and raw vegetables",
          "Drinks independently from open cups and straw cups",
          "Can tolerate new foods being on their plate (even if they don't eat them)",
          "Sits through a family meal for a reasonable duration (15-20 minutes)",
        ],
      },
      {
        heading: "Red Flags",
        content:
          "By age 3-5, the following concerns should be addressed. If your child will be entering kindergarten soon, it is especially important to address communication difficulties before school entry.",
        bulletPoints: [
          "Strangers cannot understand most of what your child says by age 4",
          "Cannot tell a simple story or describe an event in sequence by age 4-5",
          "Does not ask questions or engage in back-and-forth conversation",
          "Significant difficulty with peer interaction: no friends, can't play cooperatively",
          "Persistent stuttering or changes in fluency",
          "Difficulty following classroom-type instructions with multiple steps",
        ],
        callout: {
          type: "warning",
          text: "If your child is entering kindergarten with speech or language concerns, do not wait. Contact your school district now to request an evaluation. Services can begin before or right at the start of school.",
        },
      },
      {
        heading: "What You Can Do",
        content:
          "The preschool years are about building the complex language skills your child will need for academic success. Focus on conversation, storytelling, and building background knowledge through rich experiences.",
        bulletPoints: [
          "Have real conversations: share opinions, discuss your day, talk about plans",
          "Build narrative skills: 'Tell me about your day. What happened first? Then what?'",
          "Read chapter books and discuss characters, predictions, and feelings",
          "Play word games: rhyming, I Spy, categories ('name all the animals you can think of')",
          "Expose your child to new vocabulary through experiences: trips, cooking, nature walks",
          "Practice 'school skills': raising hand, waiting, following group directions, sitting for activities",
        ],
      },
    ],
    disclaimer: STANDARD_DISCLAIMER,
  },
];

export const handouts: Handout[] = baseHandouts.map((handout) => ({
  ...handout,
  coverImage:
    handoutMedia[handout.slug]?.coverImage ??
    handout.coverImage ??
    handoutCategoryPreviewImages[handout.category],
  narration: handoutMedia[handout.slug]?.narration ?? handout.narration,
}));
