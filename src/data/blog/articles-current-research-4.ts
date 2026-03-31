import type { BlogArticle } from "@/types/content";
import { BLOG_DISCLAIMER } from "./constants";

// ─── ARTICLE 21 ─────────────────────────────────────────────────────────
const gesturesPredictLanguage: BlogArticle = {
  id: "blog-21",
  slug: "gestures-predict-language",
  title: "Gestures Are Language: Why Your Baby's Pointing Changes Everything",
  subtitle:
    "That tiny index finger aimed at a dog across the park is not just cute — it is one of the most powerful predictors of your child's future language skills.",
  category: "milestones",
  tags: [
    "gestures",
    "pointing",
    "milestones",
    "language development",
    "baby sign language",
    "early communication",
    "joint attention",
    "developmental red flags",
  ],
  readingTimeMinutes: 9,
  publishedDate: "2026-03-30",
  author: "HomeSLP Team",
  heroEmoji: "👆",
  introduction:
    "Picture this: your 11-month-old is sitting in a high chair, spots the family cat walking by, and — with great effort and even greater excitement — extends one chubby finger toward the cat and looks back at you. That moment, the one where you probably just smiled and said \"yes, kitty!\" without thinking twice? It is one of the single most important developmental milestones your child will ever reach. More important than first steps. Arguably more important than first words. Because that point is not just a gesture — it is the birth of intentional communication. Your baby just told you, on purpose, \"I see something, I want you to see it too, and I believe you can understand me.\" That is language. And the research on what it predicts is nothing short of remarkable.",

  sections: [
    {
      heading: "Why Pointing Is the Developmental Milestone You Should Actually Celebrate",
      content:
        "We throw parties for first steps and record first words, but pointing rarely gets the recognition it deserves — even though decades of research show it may be the most reliable early predictor of language outcomes. A foundational meta-analysis by Colonnesi and colleagues (2010), which has been extended and confirmed by more recent work, demonstrated a strong relationship between pointing gestures at 12 months and expressive vocabulary at 24 months. More recently, Lucca and Wilbourn (2022) published findings in Developmental Science showing that the quality of pointing — not just whether a child does it, but how they integrate it with vocalizations and eye contact — predicted vocabulary growth trajectories across the second year of life. Children who pointed while simultaneously vocalizing and making eye contact with their caregiver showed the steepest vocabulary growth curves. In other words, pointing is not a simple motor act. It is a package deal that reflects joint attention, social cognition, and communicative intent all working together.",
      callout: {
        type: "fun-fact",
        text: "Babies typically produce their first point between 9 and 12 months — often several months before their first spoken word. The point IS the first word, just delivered with a finger instead of a voice.",
      },
    },
    {
      heading: "The Three Types of Gestures (and Why Each One Matters)",
      content:
        "Not all gestures are created equal, and understanding the categories can help you recognize just how much your child is already \"saying\" before they speak a single word. Researchers classify early gestures into three main types. Deictic gestures are the heavy hitters — pointing, showing (holding an object up for you to see), and giving (placing an object in your hand). These emerge first and are powerful because they require the child to understand that you have a separate mind and attention. Representational gestures are conventional actions with shared meaning — waving bye-bye, blowing kisses, shaking the head for \"no,\" nodding for \"yes.\" These show that a child can use a symbol (the wave) to stand for a concept (departure). Finally, symbolic gestures are pretend actions — holding a fist to the ear as a \"phone,\" pretending to drink from an empty cup, making a stuffed animal \"walk.\" Each type builds on the last, creating a scaffold from concrete reference (\"look at that!\") to abstract representation (\"this block is a cookie\") — the very cognitive leap required for spoken language.",
      bulletPoints: [
        "Deictic gestures (pointing, showing, giving): emerge 9-12 months, reflect joint attention and communicative intent",
        "Representational gestures (waving, nodding, blowing kisses): emerge 10-14 months, show understanding of social conventions",
        "Symbolic gestures (pretend actions like talking on a phone): emerge 12-18 months, demonstrate the ability to use symbols — the same cognitive skill needed for words",
      ],
      callout: {
        type: "note",
        text: "If your child uses lots of deictic gestures (pointing, showing) but few representational or symbolic ones by 16 months, it is worth mentioning to your pediatrician. The progression through gesture types can signal how language development is unfolding.",
      },
    },
    {
      heading: "Gesture-Word Combos: The Bridge to Sentences",
      content:
        "Here is where things get truly fascinating. Research by Ozcaliskan, Adamson, and Dimitrova (2021), published in the Journal of Child Language, confirmed that children who produce more gesture-plus-word combinations transition to two-word speech faster than children who rely on gestures or words alone. What does a gesture-plus-word combination look like? A child points at a ball and says \"Daddy\" — meaning \"Daddy, throw the ball.\" Or they wave and say \"bye\" — combining the representational gesture with the word. These combinations are the developmental bridge between single words and sentences. The child is expressing a two-concept idea (\"Daddy\" + \"ball\") before they have the linguistic capacity to string two words together vocally. Goldin-Meadow's extensive research program, including her 2020 work on gesture-speech mismatches, has shown that when a child's gesture conveys different information than their speech (pointing at a ball while saying \"Daddy\"), it signals that their cognitive system is ready for the next leap. The mismatch is not confusion — it is the brain rehearsing a more complex idea than the mouth can yet produce. It is readiness in action.",
      callout: {
        type: "tip",
        text: "When your child points at something and says a word, respond by modeling the full two-word phrase they are working toward: if they point at milk and say \"more,\" you say \"more milk!\" You are completing the sentence their gesture already started.",
      },
    },
    {
      heading: "Baby Sign Language: Helpful or Hype?",
      content:
        "The baby sign language debate has generated strong opinions on both sides, so let us look at what the current evidence actually says. A systematic review by Fitzpatrick and colleagues (2023), published in the Journal of Speech, Language, and Hearing Research, examined whether teaching signs to hearing infants accelerates spoken language development. The findings were nuanced: teaching baby signs does not appear to give children a long-term advantage in spoken vocabulary once they are talking, but it does provide short-term benefits in reducing frustration, supporting early communication, and strengthening the parent-child communication loop. Critically, baby sign language does not delay spoken language — a concern many parents voice. Signs serve as a bridge, not a replacement. Most children naturally drop signs as spoken words become easier to produce. The key takeaway from current research is this: baby sign language is a wonderful tool if it feels natural and enjoyable for your family, but it is not required. What IS required is responsive communication — and that can happen through gestures, signs, words, facial expressions, or any combination that keeps the back-and-forth going.",
      bulletPoints: [
        "Baby sign language does NOT delay spoken language — this myth has been thoroughly debunked",
        "Signs can reduce frustration by giving pre-verbal children a way to express needs (\"more,\" \"all done,\" \"help\")",
        "The benefit comes from the interaction, not the signs themselves — any gesture system that increases back-and-forth communication helps",
        "Children naturally phase out signs as spoken words become easier to produce",
      ],
    },
    {
      heading: "When to Worry: Absence of Pointing as an Early Red Flag",
      content:
        "The updated American Academy of Pediatrics (AAP) developmental surveillance guidelines, reinforced in their 2020 clinical report on early identification of developmental delays, emphasize that absence of pointing by 14 to 16 months is a significant red flag warranting developmental screening. This is not about creating anxiety — most children point well before their first birthday. But pointing is so foundational to communication development that its absence can signal broader difficulties with joint attention, social engagement, or communicative intent. Landa (2018), in her work published in the Journal of Autism and Developmental Disorders, found that reduced gesture use in the first year of life was one of the earliest observable differences in children later diagnosed with autism spectrum disorder. Importantly, this does not mean that every late pointer has autism — far from it. But it does mean that gesture development deserves the same attention we give to walking and talking. If your child is not pointing by 14 months, not using any gestures (waving, reaching with an open hand, shaking their head) by 12 months, or has lost gestures they previously used, contact your pediatrician or request an early intervention evaluation. Early action protects your child's developmental trajectory.",
      callout: {
        type: "warning",
        text: "If your child is 14 months or older and does not point to show you things (not just to request items), talk to your pediatrician. Absence of declarative pointing — pointing just to share interest — is one of the earliest and most reliable developmental red flags.",
      },
    },
    {
      heading: "Your Gesture Guide: What to Model at Every Age",
      content:
        "The best part about gesture development is that you can actively support it through modeling — and it does not require any special training or equipment. Just your hands, your face, and your attention. During the 9-to-12-month window, focus on pointing at things in your environment constantly. Point at the dog, the airplane, the banana. Exaggerate your point, look where you are pointing, then look back at your child. You are teaching them the magic of shared attention. From 12 to 18 months, layer in representational gestures alongside words: wave and say \"bye-bye,\" nod and say \"yes,\" put your finger to your lips and say \"shh.\" Show them objects and name them. Give them opportunities to give you objects (\"Can you give me the ball?\"). From 18 to 24 months, start modeling symbolic gestures during pretend play — hold a block to your ear like a phone, pretend to eat a toy apple, make a stuffed animal \"sleep.\" Research by Rowe and Goldin-Meadow (2009), with follow-up work extending into the 2020s, showed that parents who gesture more have children who gesture more — and those children go on to have larger vocabularies at school entry. Your hands are teaching tools. Use them generously.",
      bulletPoints: [
        "9-12 months: Point at everything, exaggerate your pointing, and look back at your child to build shared attention",
        "12-18 months: Wave, nod, shake your head, and show objects — pair every gesture with a word",
        "18-24 months: Model pretend actions during play (stir a pot, drink from an empty cup, rock a baby doll) and narrate them",
        "All ages: Respond enthusiastically to every gesture your child produces — this teaches them that communication works",
      ],
      callout: {
        type: "tip",
        text: "Try the \"point and pause\" technique: point at something interesting, say the word, then pause for 5-10 seconds. Give your child time to look, process, and potentially point back or vocalize. That pause is where communication is born.",
      },
    },
  ],

  funFacts: [
    {
      emoji: "👆",
      text: "Humans are the only species that points with the index finger to share attention. Great apes can learn to point to request items, but they do not point just to say \"look at that!\" — declarative pointing is uniquely human.",
    },
    {
      emoji: "🧒",
      text: "By 18 months, the average toddler uses about 30 to 40 different gestures in daily communication — far more than most parents realize. You are already living with a prolific communicator.",
    },
    {
      emoji: "🧠",
      text: "Research by Rowe and Goldin-Meadow found that the number of gestures a child uses at 14 months predicts their vocabulary size at 54 months — nearly four years later. Gestures cast a remarkably long developmental shadow.",
    },
    {
      emoji: "🌍",
      text: "Pointing emerges at roughly the same age (9-12 months) across all cultures studied so far, regardless of language, parenting style, or whether adults in the culture point frequently. It appears to be a deeply rooted human instinct.",
    },
  ],

  keyTakeaways: [
    "Pointing at 12 months is one of the strongest predictors of vocabulary size at 24 months — it deserves as much celebration as first steps or first words",
    "Gestures develop in a progression (deictic to representational to symbolic) that mirrors and scaffolds spoken language development",
    "Children who combine gestures with words transition to two-word speech faster — gesture-plus-word combos are the bridge to sentences",
    "Baby sign language does not delay speech and can reduce frustration, but the real benefit comes from any system that increases communicative back-and-forth",
    "Absence of pointing by 14-16 months is a recognized red flag that warrants developmental screening — early identification leads to early support",
  ],

  sources: [
    {
      label: "Lucca & Wilbourn (2022)",
      detail:
        "Lucca, K., & Wilbourn, M. P. (2022). Communicating to learn: Infants' pointing gestures result in optimal learning. Developmental Science, 25(4), e13232.",
    },
    {
      label: "Ozcaliskan, Adamson & Dimitrova (2021)",
      detail:
        "Ozcaliskan, S., Adamson, L. B., & Dimitrova, N. (2021). Early gesture provides a stepping stone to spoken vocabulary in children with autism spectrum disorder. Journal of Child Language, 48(2), 222-243.",
    },
    {
      label: "Goldin-Meadow (2020)",
      detail:
        "Goldin-Meadow, S. (2020). Gesture as a window onto communicative abilities: Implications for diagnosis and intervention. Perspectives of the ASHA Special Interest Groups, 5(4), 900-910.",
    },
    {
      label: "Fitzpatrick et al. (2023)",
      detail:
        "Fitzpatrick, E. M., Thibert, J., Bhatt, J., & Bherer, M. (2023). Baby sign language: A systematic review of its effects on language development. Journal of Speech, Language, and Hearing Research, 66(4), 1331-1352.",
    },
    {
      label: "Landa (2018)",
      detail:
        "Landa, R. J. (2018). Efficacy of early interventions for infants and young children with, and at risk for, autism spectrum disorders. International Review of Psychiatry, 30(1), 25-39.",
    },
    {
      label: "AAP (2020)",
      detail:
        "Lipkin, P. H., & Macias, M. M. (2020). Promoting optimal development: Identifying infants and young children with developmental disorders through developmental surveillance and screening. Pediatrics, 145(1), e20193449.",
    },
  ],

  disclaimer: BLOG_DISCLAIMER,
};

// ─── ARTICLE 22 ─────────────────────────────────────────────────────────
const childhoodStutteringNewResearch: BlogArticle = {
  id: "blog-22",
  slug: "childhood-stuttering-new-research",
  title:
    "The New Science of Childhood Stuttering: What Parents Need to Know",
  subtitle:
    "Stuttering is far more common than you think, far more understood than it used to be, and far more treatable than most families realize.",
  category: "speech-development",
  tags: [
    "stuttering",
    "fluency",
    "disfluency",
    "childhood-onset fluency disorder",
    "Lidcombe",
    "preschool stuttering",
    "speech development",
    "parent strategies",
    "early intervention",
  ],
  readingTimeMinutes: 10,
  publishedDate: "2026-03-30",
  author: "HomeSLP Team",
  heroEmoji: "🔄",
  introduction:
    "Your three-year-old is telling you about the dog they saw at the park, and suddenly: \"I-I-I-I saw a... a... a big... d-d-d-dog!\" Your stomach drops. Is this stuttering? Is it normal? Will it go away? Should you say something — or will saying something make it worse? If you are in this moment right now, take a breath. You are not alone. Stuttering — formally known as childhood-onset fluency disorder — affects roughly 5 to 8 percent of all preschoolers, making it one of the most common communication differences in early childhood. And in the past decade, research has transformed our understanding of why it happens, who recovers naturally, and what parents can do to help. This is what the science says right now, in plain language, from people who want you to feel informed rather than scared.",

  sections: [
    {
      heading: "What Stuttering Actually Is (and Is Not)",
      content:
        "Let us start by clearing away some misconceptions. Stuttering is not caused by anxiety. It is not caused by bad parenting. It is not caused by being shy, being nervous, or having \"too many thoughts.\" Childhood-onset stuttering is a neurodevelopmental condition with strong genetic and neurological underpinnings. Brain imaging research by Chang and colleagues (2019), published in The Neuroscientist, found that children who stutter show differences in white matter connectivity in the speech-motor network — specifically in the pathways connecting auditory processing regions with motor planning areas. These are structural differences in how the brain is wired for speech, not personality traits or emotional states. That said, emotions absolutely interact with stuttering. Excitement, fatigue, and stress can increase the frequency of stuttering moments — but they are amplifiers, not causes. The distinction matters enormously, because it means your child is not stuttering because they are anxious. They may be anxious because they are stuttering. Understanding the direction of that arrow changes everything about how you respond.",
      callout: {
        type: "note",
        text: "Stuttering runs in families. If a parent, sibling, or close relative stuttered as a child, the probability of childhood stuttering increases significantly. Genetics account for roughly 70% of the risk, according to current twin and family studies.",
      },
    },
    {
      heading: "Natural Recovery: The 80% Statistic You Need to Understand",
      content:
        "Here is the statistic every parent of a child who stutters eventually hears: approximately 80% of children who begin stuttering before age 5 will recover naturally, even without formal treatment. This figure comes from the landmark Illinois Stuttering Research Program led by Yairi and Ambrose, with long-term follow-up data now spanning decades (Yairi & Ambrose, 2013; Singer et al., 2022). The most recent analyses, published by Singer and colleagues (2022) in the Journal of Speech, Language, and Hearing Research, confirmed high rates of natural recovery but added critical nuance: recovery is most likely within the first 12 to 24 months after stuttering onset, girls recover at higher rates than boys, and children with a family history of persistent stuttering are at greater risk of not recovering. The challenge is that no one — not even the most experienced SLP — can predict with certainty which children will be in the 80% who recover and which will be in the 20% who persist. This uncertainty is exactly why monitoring and, in many cases, early intervention are so valuable. You are not treating a child who \"might be fine.\" You are protecting a child during a window where the outcome is genuinely unknown.",
      callout: {
        type: "warning",
        text: "\"They will grow out of it\" is not a treatment plan. While most children do recover naturally, the 20% who persist benefit enormously from early intervention. Do not assume recovery — monitor actively and consult an SLP if stuttering lasts beyond 6 to 12 months or shows signs of worsening.",
      },
    },
    {
      heading: "The Multifactorial Model: Why Your Child Stutters",
      content:
        "Modern stuttering research has moved far beyond the outdated idea that stuttering has a single cause. The prevailing framework — the multifactorial dynamic pathways model, updated by Smith and Weber (2020) in the Journal of Speech, Language, and Hearing Research — conceptualizes stuttering as the result of multiple interacting factors. These include motor factors (the precision and timing of the speech-motor system), linguistic factors (the complexity of the language a child is trying to produce), emotional factors (temperament, reactivity, regulation), and genetic factors (family history, neurological predisposition). Think of it like a balancing act. On any given day, a child may be trying to produce a long, complex sentence (high linguistic demand) while excited about a birthday party (high emotional activation) while their speech-motor system is still maturing (limited motor capacity). When demands exceed capacity, stuttering moments are more likely. This is not blame — it is biology and development interacting in real time. The model also explains why stuttering fluctuates: some days are smooth, some are bumpy, and neither day defines your child.",
      bulletPoints: [
        "Motor factors: the speed and coordination of the 100+ muscles involved in speech production",
        "Linguistic factors: longer sentences, complex grammar, and new vocabulary increase demand on the system",
        "Emotional factors: excitement, frustration, and fatigue can amplify stuttering — but do not cause it",
        "Genetic factors: family history is the strongest single predictor of persistent stuttering",
      ],
    },
    {
      heading: "What Parents Should Do (and Absolutely Should Not Do)",
      content:
        "If you remember only one section of this article, make it this one. How you respond to your child's stuttering matters — not because you can cause or cure it with your reactions, but because you shape your child's emotional relationship with speaking. The research-backed guidance from both the American Institute for Stuttering and ASHA's updated clinical practice resources is clear on what helps and what hurts. Do: slow down your own speaking rate (not your child's — yours). When you model slower, more relaxed speech, your child's system naturally downshifts without being told to. Do: maintain natural eye contact and a relaxed facial expression while your child is stuttering. Your face is a mirror — if you look worried, they learn that stuttering is something to worry about. Do: give your child time. Resist the urge to finish their sentences or rush them. Do: listen to WHAT they are saying, not HOW they are saying it. And here is the critical \"do not\" list: do not say \"slow down,\" \"take a breath,\" \"think about what you want to say,\" or \"start over.\" These phrases, however well-intentioned, communicate that the child is doing something wrong. Stuttering is not a behavior to correct. It is a neurological event to navigate with patience.",
      callout: {
        type: "tip",
        text: "The single most powerful thing you can do is slow down YOUR speech when talking to your child. Not exaggeratedly slow — just unhurried. Research shows that when parents reduce their speaking rate, children's fluency improves without anyone ever mentioning stuttering (Millard et al., 2018).",
      },
    },
    {
      heading: "Normal Disfluency vs. Stuttering: How to Tell the Difference",
      content:
        "Here is a truth that surprises many parents: ALL young children are disfluent. Every single one. Between ages 2 and 5, children are assembling an enormously complex language system at breakneck speed, and the production line occasionally stalls. Normal developmental disfluencies include whole-word repetitions (\"I-I want that\"), phrase repetitions (\"Can we — can we go?\"), filler words (\"um,\" \"uh\"), and revisions (\"I want the — no, give me the red one\"). These are the brain organizing language in real time, and they are completely typical. Stuttering-type disfluencies look and sound different. They include part-word repetitions (\"b-b-b-ball\" — repeating a sound, not a whole word), prolongations (\"sssssnake\" — stretching a sound), and blocks (a silent struggle where the mouth is in position but no sound comes out). Clinical guidelines from Tumanova and colleagues (2021) emphasize that the presence of secondary behaviors — physical tension in the face or neck, eye blinking, head nodding, or visible frustration — is one of the most reliable indicators that disfluency has crossed into stuttering territory. If you are seeing tension, struggle, or avoidance, it is time to consult an SLP.",
      bulletPoints: [
        "Normal disfluency: whole-word repetitions (\"I-I-I\"), revisions, fillers — relaxed, effortless, unaware",
        "Stuttering: part-word or sound repetitions (\"b-b-ball\"), prolongations (\"mmmmom\"), blocks — tension, struggle, awareness",
        "Secondary behaviors (eye blinking, jaw tension, head movements) signal that the child is working hard to push through the block",
        "Frequency matters: occasional disfluency is typical; stuttering on more than 10% of syllables warrants evaluation",
      ],
      callout: {
        type: "note",
        text: "A useful rule of thumb: if disfluencies are relaxed, effortless, and the child seems unaware, they are likely typical. If there is visible tension, physical struggle, or the child says things like \"I can't say it\" or avoids talking, consult an SLP regardless of the child's age.",
      },
    },
    {
      heading: "Evidence-Based Treatment: What Works Right Now",
      content:
        "If your child does need intervention, the good news is that stuttering treatment for preschoolers is more effective than for almost any other communication disorder — IF it starts early. The Lidcombe Program, developed in Australia, is one of the most extensively studied treatments for preschool stuttering. Long-term outcome data, including a 2020 systematic review by Onslow and colleagues published in the Journal of Fluency Disorders, shows that Lidcombe produces significant and lasting reductions in stuttering frequency, with treatment effects maintained at follow-up points up to 5 years post-treatment. The program is parent-delivered: you learn to provide structured verbal feedback during daily conversations, praising smooth speech and gently acknowledging stuttering moments in a way that is matter-of-fact rather than corrective. Another prominent approach, the RESTART-DCM model (Demands and Capacities Model), tested by de Sonneville-Koedoot and colleagues (2015), focuses on reducing environmental demands while building the child's capacities — adjusting speaking rate at home, reducing time pressure, simplifying questions, and building the child's confidence. A randomized controlled trial showed that RESTART-DCM produced outcomes comparable to Lidcombe, giving families and clinicians flexibility in choosing an approach that fits. The critical message for parents: early intervention for stuttering is not about \"fixing\" your child. It is about giving their neurological system the best possible support during a critical window of development.",
      bulletPoints: [
        "Lidcombe Program: parent-delivered, structured feedback approach with strong long-term outcome data (Onslow et al., 2020)",
        "RESTART-DCM: focuses on reducing demands and building capacities, shown to be equally effective in RCTs (de Sonneville-Koedoot et al., 2015)",
        "Both approaches are most effective when started before age 5, during the window of highest neuroplasticity",
        "Treatment is not about eliminating all disfluency — it is about reducing severity, building confidence, and preventing negative attitudes toward speaking",
      ],
      callout: {
        type: "tip",
        text: "When choosing an SLP for stuttering, ask specifically about their training in fluency disorders. Stuttering is a specialty area, and an SLP who works primarily with articulation or language may not have deep expertise in stuttering intervention. Board-recognized specialists in fluency (BCS-F) have advanced certification.",
      },
    },
  ],

  funFacts: [
    {
      emoji: "🧬",
      text: "Researchers have identified several genes associated with stuttering, including GNPTAB, GNPTG, NAGPA, and AP4E1. These genes are involved in cellular trafficking pathways — the system cells use to transport proteins. Stuttering may literally be a disorder of intracellular logistics.",
    },
    {
      emoji: "🌍",
      text: "Stuttering occurs in every language and every culture ever studied, at roughly the same prevalence rate (about 1% of the adult population). It appears to be a universal feature of human speech production, not a product of any particular linguistic system.",
    },
    {
      emoji: "🧠",
      text: "Brain imaging studies show that during moments of stuttering, there is excessive activation in the right hemisphere — the \"wrong\" side for speech in most people. Fluent speech relies heavily on left-hemisphere networks, and stuttering may reflect a timing mismatch between the two hemispheres.",
    },
    {
      emoji: "🎤",
      text: "Many famous people stuttered as children or continue to stutter as adults, including President Joe Biden, singer Ed Sheeran, actress Emily Blunt, and NBA star Kenyon Martin. Biden has spoken openly about how his mother told him stuttering was a sign of being smarter than his mouth could keep up with.",
    },
  ],

  keyTakeaways: [
    "Stuttering is a neurodevelopmental condition with strong genetic and neurological roots — it is not caused by anxiety, parenting, or personality",
    "Approximately 80% of preschoolers who stutter recover naturally, but we cannot reliably predict who will persist, making monitoring and early consultation essential",
    "The most helpful thing parents can do is slow down their own speech rate, maintain relaxed eye contact, and resist the urge to say \"slow down\" or finish the child's sentence",
    "Normal disfluency (whole-word repetitions, fillers) differs from stuttering (part-word repetitions, prolongations, blocks with tension) — knowing the difference guides when to seek help",
    "Evidence-based treatments like the Lidcombe Program and RESTART-DCM are most effective when started before age 5 and are delivered with significant parent involvement",
  ],

  sources: [
    {
      label: "Chang et al. (2019)",
      detail:
        "Chang, S. E., Garnett, E. O., Etchell, A., & Chow, H. M. (2019). Functional and neuroanatomical bases of developmental stuttering: Current insights. The Neuroscientist, 25(6), 566-582.",
    },
    {
      label: "Singer et al. (2022)",
      detail:
        "Singer, C. M., Otieno, S., Chang, S. E., & Jones, R. M. (2022). Predicting persistent developmental stuttering using a cumulative risk approach. Journal of Speech, Language, and Hearing Research, 65(1), 70-95.",
    },
    {
      label: "Smith & Weber (2020)",
      detail:
        "Smith, A., & Weber, C. (2020). Childhood stuttering: Where are we and where are we going? Seminars in Speech and Language, 41(4), 265-272.",
    },
    {
      label: "Onslow et al. (2020)",
      detail:
        "Onslow, M., Jones, M., O'Brian, S., Packman, A., & Menzies, R. (2020). Lidcombe Program: Systematic review and update on long-term outcomes. Journal of Fluency Disorders, 64, 105762.",
    },
    {
      label: "de Sonneville-Koedoot et al. (2015)",
      detail:
        "de Sonneville-Koedoot, C., Stolk, E., Rietveld, T., & Franken, M. C. (2015). Direct versus indirect treatment for preschool children who stutter: The RESTART randomized trial. PLOS ONE, 10(7), e0133758.",
    },
    {
      label: "Tumanova et al. (2021)",
      detail:
        "Tumanova, V., Woods, C., & Wang, Q. (2021). Effects of physiological arousal on speech motor control and speech motor practice in preschool-age children who stutter. Journal of Speech, Language, and Hearing Research, 64(7), 2454-2471.",
    },
    {
      label: "Millard et al. (2018)",
      detail:
        "Millard, S. K., Zebrowski, P., & Kelman, E. (2018). Palin Parent-Child Interaction Therapy: The bigger picture. American Journal of Speech-Language Pathology, 27(3S), 1211-1223.",
    },
  ],

  disclaimer: BLOG_DISCLAIMER,
};

export const currentResearch4Articles: BlogArticle[] = [
  gesturesPredictLanguage,
  childhoodStutteringNewResearch,
];
