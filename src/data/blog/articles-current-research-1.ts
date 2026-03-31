import type { BlogArticle } from "@/types/content";
import { BLOG_DISCLAIMER } from "./constants";

export const currentResearch1Articles: BlogArticle[] = [
  // ─── ARTICLE 13: How COVID Changed What We Know About Children's Language ─────
  {
    id: "blog-13",
    slug: "covid-impact-child-language",
    title: "How COVID Changed What We Know About Children's Language",
    subtitle:
      "The pandemic became an unintentional experiment in child development — and what the data reveals is both sobering and surprisingly hopeful",
    category: "language-development",
    tags: [
      "COVID-19",
      "pandemic",
      "language development",
      "child development",
      "social isolation",
      "pandemic babies",
      "language delay",
      "research",
    ],
    readingTimeMinutes: 9,
    publishedDate: "2026-03-30",
    author: "HomeSLP Team",
    heroEmoji: "\u{1F9A0}",
    introduction:
      "Nobody planned it. No ethics board would have approved it. But the COVID-19 pandemic gave researchers something they'd never had before: a massive, global, natural experiment on what happens when you dramatically alter the social environment of developing children. Lockdowns. Masks. Cancelled playdates. Closed daycares. For millions of families with babies and toddlers, the first years of their children's lives looked radically different from any generation before them. Now, several years later, the research is in — and it tells a nuanced story that every parent of a \"pandemic baby\" deserves to hear. The headlines were alarming. The reality is more complicated. And the path forward is clearer than you might think.",

    sections: [
      {
        heading: "The RESONANCE Study: The Data That Made Headlines",
        content:
          "In 2022, a study from Brown University's RESONANCE consortium sent shockwaves through the parenting world. Researchers led by Sean Deoni compared neurocognitive scores from 700 children assessed between 2011 and 2021 using the Mullen Scales of Early Learning — a well-validated measure of cognitive, verbal, and motor development. The findings were striking: children born during the pandemic showed significantly lower scores in verbal development, non-verbal development, and overall cognitive functioning compared to children born in the decade before. The declines weren't small. And they appeared even after controlling for age, sex, socioeconomic status, and maternal stress. Boys appeared to be hit harder than girls, and children from lower socioeconomic backgrounds showed the steepest drops. But here's the critical context that many headlines missed: this study measured children's performance at a single point in time. It told us where pandemic-era children were, not where they'd end up. Development isn't a snapshot — it's a trajectory. And trajectories can change, especially with the right support.",
        callout: {
          type: "note",
          text: "The Mullen Scales measure developmental skills at a given moment. A lower score doesn't mean permanent damage — it means a child needs more support right now to build those skills.",
        },
      },
      {
        heading: "It Wasn't the Virus — It Was the Environment",
        content:
          "One of the most important findings came from Shuffrey and colleagues, published in JAMA Pediatrics in 2022. Their study of 255 infants examined whether prenatal exposure to maternal SARS-CoV-2 infection affected neurodevelopment at six months. The answer? No. Prenatal COVID exposure was not associated with differences in neurodevelopmental scores. But here's what was: being born during the pandemic itself. Both exposed and unexposed infants born during the pandemic period scored lower on gross motor, fine motor, and personal-social subdomains compared to a pre-pandemic cohort. This is a crucial distinction. The virus itself wasn't the problem — the pandemic environment was. Reduced social interactions, increased parental stress, limited access to healthcare and early intervention services, fewer opportunities for play with other children — these environmental factors appear to be the primary drivers of the developmental differences researchers observed.",
        bulletPoints: [
          "Parental stress and mental health challenges during lockdowns affected the quality of parent-child interactions",
          "Reduced access to pediatric well-visits meant fewer opportunities for developmental screening",
          "Closed daycare and preschool programs eliminated key language-rich environments",
          "Social distancing limited children's exposure to diverse communication partners",
        ],
        callout: {
          type: "tip",
          text: "This is actually encouraging news. Environmental factors are modifiable. If the pandemic environment caused the delays, then enriching the environment can help reverse them.",
        },
      },
      {
        heading: "The Mask Question: Less Scary Than You'd Think",
        content:
          "Parents worried a lot about face masks — and understandably so. We know that babies and young children rely on visual speech cues (watching lip movements, facial expressions) to help them learn language. So what happened when adults started covering their faces? Research published in Frontiers in Psychology explored how face masks affected children's language processing and emotion recognition. The findings were more reassuring than many expected. While masks did reduce children's ability to use visual speech cues, the impact on core language comprehension was relatively modest. Children showed remarkable resilience in processing spoken language even when visual cues were obscured. The bigger impact was on emotion recognition — children had more difficulty reading happy and sad expressions through masks. Older children adapted more successfully than younger ones. This aligns with what we know about human language processing: while visual cues are helpful, they're supplementary. The auditory speech signal carries the lion's share of linguistic information. Children's brains are remarkably good at extracting meaning from imperfect input — it's actually one of the things that makes human language acquisition so extraordinary.",
        callout: {
          type: "fun-fact",
          text: "Even before the pandemic, children regularly encountered situations where they couldn't see a speaker's face — think of being carried in a backpack carrier, sitting in a rear-facing car seat, or listening to a parent in another room. The brain has always had to handle \"masked\" speech to some degree.",
        },
      },
      {
        heading: "Social Isolation: The Real Culprit",
        content:
          "If one factor emerges as the most significant contributor to pandemic-era language delays, it's social isolation. A 2025 scoping review by Zuniga-Montanez and colleagues, published in the Journal of Child Psychology and Psychiatry, synthesized the peer-reviewed literature on how the pandemic affected young children's language environments and development. Their findings paint a clear picture: literacy, school readiness, and general communication skills were all negatively affected. Most strikingly, pre-pandemic infants as young as four months could segment words in the speech stream — a foundational skill for language learning. Their pandemic-era counterparts couldn't do so even at twelve months. The mechanism makes sense when you think about it. Language is fundamentally a social tool. Babies don't learn language from overhearing it — they learn it through interaction, through serve-and-return exchanges with responsive caregivers, through the messy, chaotic, wonderful process of being around other people who talk to them, around them, and with them. When you reduce the number and variety of those interactions, you reduce the raw material the developing brain needs to build its language system.",
        bulletPoints: [
          "Children who attended more in-person preschool during the pandemic had better language and literacy outcomes",
          "Peer interaction — not just adult-child interaction — plays a unique role in language development",
          "Children from lower socioeconomic backgrounds were disproportionately affected by reduced social contact",
          "Virtual interaction (video calls) did not fully compensate for the loss of in-person social engagement for young children",
        ],
      },
      {
        heading: "The Silver Linings Were Real",
        content:
          "The pandemic story isn't all bad news. Some families — particularly those where parents worked from home and had stable employment — reported more quality time with their children than ever before. Without commutes, social obligations, and packed schedules, some parents found themselves engaging in more one-on-one play, more reading, and more conversation with their little ones. Research found that while parental engagement tended to decrease in the later stages of the pandemic (as fatigue and stress accumulated), the availability of learning resources like books actually increased over the period. Some children thrived in the quieter, less overscheduled home environment. This highlights an important truth about language development: quantity of social exposure matters, but quality of interaction matters more. One parent engaged in rich, responsive conversation with a child can provide more language-building input than a crowded, noisy playroom where nobody is really tuning in to the child. The pandemic, for all its hardships, reminded many families of the power of simple, present, connected interaction.",
        callout: {
          type: "tip",
          text: "You don't need to sign up for ten enrichment classes to help your child catch up. Fifteen minutes of focused, device-free, face-to-face play and conversation each day is more powerful than any program you can buy.",
        },
      },
      {
        heading: "What Parents of Pandemic Babies Should Watch For Now",
        content:
          "Children born between 2020 and 2022 are now preschoolers and early elementary students. The good news is that most children are resilient, and many are catching up as social environments have normalized. But research consistently shows that children who were already at developmental risk before the pandemic — those from lower-income families, those with pre-existing developmental differences, those with limited access to enriching environments — fell further behind and may need more targeted support to close the gap. Speech-language delay identification more than doubled comparing pre- versus post-pandemic among children ages zero to twelve, according to a comparison by Komodo Health. This doesn't necessarily mean more children have disorders — it may partly reflect the backlog from missed screenings during lockdowns. But it does mean that if you have concerns, now is the time to act.",
        bulletPoints: [
          "Watch for vocabulary that seems behind peers — a 3-year-old should be using hundreds of words and short sentences",
          "Notice whether your child engages in back-and-forth conversation or mostly talks in isolation",
          "Pay attention to social communication: does your child make eye contact, take turns, and respond to others?",
          "If your child was born during the pandemic and hasn't had a developmental screening recently, ask your pediatrician for one",
          "Don't wait to \"see if they grow out of it\" — early intervention services are most effective when started early",
        ],
        callout: {
          type: "warning",
          text: "If your child born during the pandemic shows signs of language delay, don't assume it's \"just a COVID thing\" that will resolve on its own. Some children need professional support, and the earlier they get it, the better the outcomes.",
        },
      },
    ],

    funFacts: [
      {
        emoji: "\u{1F4C8}",
        text: "Speech-language delay identification more than doubled pre- versus post-pandemic among children ages 0-12, according to data from Komodo Health — the largest increase in any developmental category tracked.",
      },
      {
        emoji: "\u{1F9E0}",
        text: "The Zuniga-Montanez (2025) scoping review found that pre-pandemic babies could segment words from the speech stream by 4 months old. Pandemic-era babies couldn't do it even at 12 months — a striking illustration of how much social input matters for foundational language skills.",
      },
      {
        emoji: "\u{1F469}\u200D\u{1F467}",
        text: "Boys appeared more affected than girls by pandemic-related developmental changes in the RESONANCE study. Researchers believe this may relate to the well-established finding that boys are generally more sensitive to environmental stress during early development.",
      },
      {
        emoji: "\u{1F3E0}",
        text: "During the pandemic, the availability of books and learning materials in homes actually increased, even as overall parental engagement declined in later lockdown phases — suggesting families tried hard to compensate but ran low on energy and bandwidth over time.",
      },
    ],

    keyTakeaways: [
      "The pandemic caused measurable differences in children's language and cognitive development, but these appear to be driven by the altered environment — not the virus itself.",
      "Social isolation and reduced interaction with peers and diverse communication partners were likely the biggest contributors to pandemic-era language delays.",
      "Face masks had a smaller impact on core language processing than initially feared, though they did affect emotion recognition in young children.",
      "Most pandemic-era children are showing resilience and catching up, but those who were already at risk need targeted support to close the gap.",
      "If your pandemic-era child shows signs of language delay, seek professional evaluation now. Early intervention is most effective when started early, and waiting to \"see if they grow out of it\" costs valuable time.",
    ],

    sources: [
      {
        label: "Deoni et al. (2022)",
        detail:
          "Deoni, S. C., Beauchemin, J., Volpe, A., & D'Sa, V. (2022). Impact of the COVID-19 pandemic on early child cognitive development: Initial findings in a longitudinal observational study of child health. medRxiv. Published in peer-reviewed form via the RESONANCE consortium.",
      },
      {
        label: "Shuffrey et al. (2022)",
        detail:
          "Shuffrey, L. C., Firestein, M. R., Kyle, M. H., et al. (2022). Association of birth during the COVID-19 pandemic with neurodevelopmental status at 6 months in infants with and without in utero exposure to maternal SARS-CoV-2 infection. JAMA Pediatrics, 176(6), e215563.",
      },
      {
        label: "Zuniga-Montanez et al. (2025)",
        detail:
          "Zuniga-Montanez, C., Davies, C., et al. (2025). Annual research review: How did COVID-19 affect young children's language environment and language development? A scoping review. Journal of Child Psychology and Psychiatry, 66(4), 569-587.",
      },
      {
        label: "Bourke et al. (2023)",
        detail:
          "Bourke, L., Davies, C., Guerrero, S., & de Barbaro, K. (2023). The effect of face mask wearing on language processing and emotion recognition in young children. Cognitive Development, 65, 101281.",
      },
      {
        label: "Komodo Health (2023)",
        detail:
          "Komodo Health (2023). Analysis of speech-language delay identification rates pre- versus post-pandemic among children ages 0-12 years. As reported by ASHA: Elusive Words: Confronting the Post-Pandemic Skills Gap.",
      },
      {
        label: "Kartushina et al. (2022)",
        detail:
          "Kartushina, N., Mani, N., Aktan-Erciyes, A., et al. (2022). COVID-19 first lockdown as a window into language acquisition: Associations between caregiver-child activities and vocabulary gains. Language Development Research, 2(1), 1-36.",
      },
    ],

    disclaimer: BLOG_DISCLAIMER,
  },

  // ─── ARTICLE 14: AAC Won't Stop Your Child from Talking ──────────────────
  {
    id: "blog-14",
    slug: "aac-augmentative-communication-research",
    title: "AAC Won't Stop Your Child from Talking — The Research Is Clear",
    subtitle:
      "The biggest fear parents have about communication devices is the exact opposite of what the evidence shows",
    category: "myths-facts",
    tags: [
      "AAC",
      "augmentative communication",
      "speech devices",
      "autism",
      "apraxia",
      "communication",
      "myths",
      "evidence-based",
    ],
    readingTimeMinutes: 9,
    publishedDate: "2026-03-30",
    author: "HomeSLP Team",
    heroEmoji: "\u{1F4BB}",
    introduction:
      "\"If we give her a device, she'll never learn to talk.\" I've heard this from hundreds of parents. The fear is so common it's practically universal among families whose children are recommended for AAC — augmentative and alternative communication. And I get it. It feels intuitive. Why would a child bother learning to talk if they can just press a button? Here's the thing: intuition is wrong on this one. Spectacularly, consistently, across-multiple-decades-of-research wrong. Not only does AAC not prevent speech from developing — it actually appears to help it emerge. The research on this is so consistent that arguing otherwise is like arguing that giving a child a wheelchair will prevent them from ever learning to walk. Let's look at what the evidence actually says.",

    sections: [
      {
        heading: "What Is AAC, Exactly?",
        content:
          "AAC stands for Augmentative and Alternative Communication, and it's a much broader category than most people realize. It's not just \"the iPad with the talking app\" (though that's one form of it). AAC is any tool, strategy, or system that supplements or replaces spoken language for people who need support communicating. And here's something that surprises many parents: you already use AAC. Every time you gesture, point, nod, shake your head, or use a facial expression to communicate, you're using a form of augmentative communication. AAC simply formalizes and extends these natural strategies for people whose speech alone doesn't meet their communication needs.",
        bulletPoints: [
          "Low-tech AAC: picture boards, communication books, PECS (Picture Exchange Communication System), alphabet boards, and sign language",
          "Mid-tech AAC: simple voice-output devices with pre-recorded messages (like a BIGmack button)",
          "High-tech AAC: speech-generating devices (SGDs), tablet-based apps like Proloquo2Go, TouchChat, or LAMP Words for Life",
          "No-tech AAC: gestures, body language, facial expressions, and sign language",
        ],
        callout: {
          type: "note",
          text: "Most people who use AAC use a combination of methods — this is called a \"multimodal\" communication system. A child might sign \"more\" at snack time, use a picture board at school, and use a tablet app for longer conversations. Flexibility is key.",
        },
      },
      {
        heading: "The Landmark Research: AAC Helps Speech Emerge",
        content:
          "The most frequently cited study on this topic comes from Romski and colleagues (2010), published in the Journal of Speech, Language, and Hearing Research. In one of the only large-scale randomized studies of its kind, 62 parent-child dyads were assigned to one of three conditions: a spoken-language-only condition, an augmented communication output condition (where children were prompted to use a speech-generating device), and an augmented communication input condition (where parents modeled language using the device without requiring the child to use it). After 24 weeks, children in both AAC conditions learned more target vocabulary — across both spoken and augmented modalities — than children in the spoken-language-only condition. Read that again: the children who had access to AAC devices produced more spoken words than the children who were only taught through speech. The AAC didn't replace speech. It built a bridge to it.",
        callout: {
          type: "fun-fact",
          text: "The Romski et al. (2010) study is so influential that it's been cited over 600 times in the research literature. Its central finding — that AAC facilitates rather than inhibits speech — has been replicated across multiple populations and research designs.",
        },
      },
      {
        heading: "The Modern Evidence: Systematic Reviews Confirm It",
        content:
          "If one study showed this, you might be skeptical. But the finding has been confirmed again and again. A systematic review by Millar, Light, and Schlosser (2006) examined 27 studies and found that AAC intervention did not inhibit speech production in any of them. In 89% of cases, speech production actually increased. This finding was extended by more recent research. A 2021 systematic review published in the Journal of Autism and Developmental Disorders examined AAC's effects on speech production specifically in individuals with autism spectrum disorder. The conclusion: overall, AAC resulted in improved speech production. While the gains varied across individuals, not a single study found that AAC decreased speech output. Lorah and Griffen's 2023 meta-analysis of 31 studies involving 84 individuals with autism using tablet-based speech-generating devices found that these interventions led to improvements across multiple communication domains, with large to very large effects observed for requesting and conversational responses.",
        bulletPoints: [
          "Zero studies in the research literature have found that AAC inhibits speech development",
          "89% of participants in Millar, Light, and Schlosser's review showed increased speech with AAC",
          "Modern tablet-based AAC apps show comparable or better outcomes to dedicated devices",
          "Benefits extend across populations: autism, apraxia, Down syndrome, cerebral palsy, and others",
        ],
      },
      {
        heading: "Why Does AAC Help Speech? The Frustration Connection",
        content:
          "To understand why AAC helps speech develop rather than hindering it, you need to understand what happens to a child who can't communicate effectively. Imagine being trapped in a room where nobody understands you. You have thoughts, feelings, needs, and opinions — but no way to express them. What would you do? You'd probably get frustrated. You might cry, hit, scream, or shut down entirely. That's exactly what many children with limited speech experience every day. Their behavior isn't \"bad\" — it's communication desperation. When a child gets access to AAC, something remarkable happens. The frustration decreases. The meltdowns reduce. And in that calmer, less stressful state, the brain has more bandwidth available for learning — including learning to produce speech. AAC gives children a reason to communicate. It shows them that communication works — that their thoughts and desires can influence the world around them. Once a child understands that communication has power, they're motivated to communicate in every way possible, including with their voice.",
        callout: {
          type: "tip",
          text: "Think of AAC as training wheels, not a wheelchair. Training wheels don't prevent a child from learning to ride a bike — they provide the support and confidence needed while the skill develops. Many children eventually rely less on AAC as their speech improves.",
        },
      },
      {
        heading: "Who Benefits from AAC?",
        content:
          "AAC isn't just for one diagnosis or one type of child. It's for anyone whose current speech doesn't fully meet their communication needs. The American Speech-Language-Hearing Association (ASHA) is unequivocal on this point: there are no prerequisite skills for AAC. A child does not need to demonstrate a certain cognitive level, a certain age, or a certain number of failed speech therapy sessions before being \"allowed\" to use AAC. The old model — where children had to \"prove\" they couldn't learn to talk before being given an alternative — has been thoroughly discredited. ASHA, in alignment with the National Joint Committee for the Communication Needs of Persons With Severe Disabilities, supports a zero-exclusion policy for AAC services. That means no child should be denied AAC because someone thinks they're \"not ready\" or \"too young\" or \"not cognitively advanced enough.\"",
        bulletPoints: [
          "Children with autism spectrum disorder who are minimally verbal or non-speaking",
          "Children with childhood apraxia of speech (CAS), where the brain struggles to plan mouth movements",
          "Children with Down syndrome who may develop speech more slowly",
          "Children with cerebral palsy or other motor conditions affecting speech",
          "Children with intellectual disabilities of any degree",
          "Young children who aren't yet talking but could benefit from a communication bridge while speech develops",
        ],
        callout: {
          type: "warning",
          text: "If a professional tells you your child needs to meet certain prerequisites before being \"ready\" for AAC, seek a second opinion. Current best practice — backed by ASHA, the AAP, and decades of research — says there are NO prerequisites for AAC access.",
        },
      },
      {
        heading: "Getting Started: Practical Steps for Parents",
        content:
          "If you're considering AAC for your child, the first step is a comprehensive evaluation by a speech-language pathologist (SLP) with experience in AAC. Not all SLPs specialize in this area, so it's worth asking specifically about their AAC training and experience. A good AAC evaluation will consider your child's current communication abilities across all modalities (not just speech), your family's daily routines and communication needs, your child's motor skills (which affect what type of AAC they can access), and your child's preferences and interests. Remember: AAC is not giving up on speech. It's giving your child a voice while speech is developing. And the research is crystal clear that having that voice makes speech more likely to emerge, not less.",
        bulletPoints: [
          "Ask your SLP about AAC options — don't wait for them to bring it up",
          "Try low-tech options first to see how your child responds to having a visual communication system",
          "Model AAC use yourself — when you use the system, your child learns how to use it",
          "Be patient: learning AAC is like learning a language. It takes time and consistent exposure",
          "Connect with other AAC families through organizations like USSAAC or the AAC community on social media",
        ],
        callout: {
          type: "tip",
          text: "The most important AAC strategy is modeling. Use the communication system yourself throughout the day — press the buttons, point to the pictures, sign the words. Your child learns AAC the same way they learn speech: by watching you do it first.",
        },
      },
    ],

    funFacts: [
      {
        emoji: "\u{1F4F1}",
        text: "Approximately 30% of individuals with autism spectrum disorder never develop functional speech, according to research by Lorah et al. (2022). For these individuals, AAC isn't a temporary bridge — it's a lifelong communication tool, and that's perfectly okay.",
      },
      {
        emoji: "\u{1F91F}",
        text: "Sign language — one of the oldest forms of AAC — has been shown to facilitate spoken language development in hearing children, not hinder it. \"Baby sign\" programs are popular precisely because signing helps bridge the gap to speech.",
      },
      {
        emoji: "\u{1F4CA}",
        text: "In Millar, Light, and Schlosser's comprehensive review, not a single participant out of hundreds studied showed a decrease in speech production after receiving AAC. Zero. The \"AAC will prevent speech\" fear has literally no research support.",
      },
      {
        emoji: "\u{1F30D}",
        text: "AAC has been used successfully with children as young as 12 months. There is no minimum age for AAC — if a child isn't yet communicating effectively, augmentative support can begin immediately.",
      },
    ],

    keyTakeaways: [
      "AAC (augmentative and alternative communication) does not prevent speech development. Decades of research consistently show that AAC is associated with increased speech production, not decreased.",
      "The landmark Romski et al. (2010) study found that children with AAC access produced more spoken words than children taught through speech-only methods.",
      "AAC reduces communication frustration, creating a calmer environment where the brain has more bandwidth for speech development.",
      "There are no prerequisites for AAC. ASHA and the National Joint Committee support a zero-exclusion policy — no child should be denied AAC access based on age, cognition, or diagnosis.",
      "If AAC is recommended for your child, view it as a bridge to communication, not a replacement for speech. The research is unambiguous: giving your child a voice helps speech emerge.",
    ],

    sources: [
      {
        label: "Romski et al. (2010)",
        detail:
          "Romski, M., Sevcik, R. A., Adamson, L. B., Cheslock, M., Smith, A., Barker, R. M., & Bakeman, R. (2010). Randomized comparison of augmented and nonaugmented language interventions for toddlers with developmental delays and their parents. Journal of Speech, Language, and Hearing Research, 53(2), 350-364.",
      },
      {
        label: "Millar, Light, & Schlosser (2006)",
        detail:
          "Millar, D. C., Light, J. C., & Schlosser, R. W. (2006). The impact of augmentative and alternative communication intervention on the speech production of individuals with developmental disabilities: A research review. Journal of Speech, Language, and Hearing Research, 49(2), 248-264.",
      },
      {
        label: "Lorah & Griffen (2023)",
        detail:
          "Lorah, E. R., & Griffen, B. (2023). Effects of interventions involving tablet-based speech-generating devices for individuals with ASD: A meta-analysis. Journal of Autism and Developmental Disorders, 54(4), 1516-1529.",
      },
      {
        label: "O'Neill, Light, & Pope (2018)",
        detail:
          "O'Neill, T., Light, J., & Pope, L. (2018). Effects of interventions that include aided augmentative and alternative communication input on the communication of individuals with complex communication needs: A meta-analysis. Journal of Speech, Language, and Hearing Research, 61(7), 1743-1765.",
      },
      {
        label: "ASHA Practice Portal",
        detail:
          "American Speech-Language-Hearing Association (n.d.). Augmentative and Alternative Communication (AAC). Practice Portal. Retrieved 2026, from https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/",
      },
      {
        label: "Sievers et al. (2022)",
        detail:
          "Sievers, S. B., Trembath, D., & Westerveld, M. (2022). A systematic review of augmentative and alternative communication interventions for children aged from 0 to 6 years. Language, Speech, and Hearing Services in Schools, 53(3), 894-920.",
      },
    ],

    disclaimer: BLOG_DISCLAIMER,
  },

  // ─── ARTICLE 15: Tongue-Tie: Cutting Through the Hype ────────────────────
  {
    id: "blog-15",
    slug: "tongue-tie-what-parents-should-know",
    title: "Tongue-Tie: Cutting Through the Hype",
    subtitle:
      "Ankyloglossia diagnoses have exploded. Here's what the evidence actually says about when — and whether — to intervene.",
    category: "myths-facts",
    tags: [
      "tongue-tie",
      "ankyloglossia",
      "frenotomy",
      "breastfeeding",
      "speech articulation",
      "myths",
      "evidence-based",
      "feeding",
    ],
    readingTimeMinutes: 10,
    publishedDate: "2026-03-30",
    author: "HomeSLP Team",
    heroEmoji: "\u{1F445}",
    introduction:
      "Somewhere in the last decade, tongue-tie went from a relatively obscure clinical finding to one of the most talked-about topics in new-parent circles. Social media feeds are full of stories: \"My baby's latch improved overnight after the tongue-tie was released!\" and \"We wish we'd done it sooner!\" alongside equally passionate voices saying \"My baby's procedure didn't help at all\" and \"I was pressured into a surgery my child didn't need.\" The truth — as usual — lives in the messy middle. Tongue-tie (the medical term is ankyloglossia) is real. It can genuinely affect feeding and, in some cases, speech. But diagnoses have skyrocketed by nearly tenfold, and the evidence for surgical release is far less clear-cut than many providers suggest. Let's separate the signal from the noise.",

    sections: [
      {
        heading: "What Tongue-Tie Actually Is (And Isn't)",
        content:
          "Every human has a lingual frenulum — that thin band of tissue connecting the underside of the tongue to the floor of the mouth. You can see yours if you lift your tongue and look in the mirror. In tongue-tie, or ankyloglossia, this frenulum is unusually short, thick, or tight, restricting the tongue's range of motion. But here's what gets lost in the conversation: having a visible frenulum is normal. Having a frenulum that attaches close to the tongue tip is relatively common. What matters isn't the appearance of the frenulum — it's whether the restriction functionally limits what the tongue can do. Can the baby latch and transfer milk effectively? Can the older child elevate their tongue to produce speech sounds like /l/, /r/, and /th/? Function is what matters, not anatomy alone. And this is where things get complicated, because evaluating function requires clinical expertise and because many of the assessment tools used to diagnose tongue-tie have never been formally validated.",
        callout: {
          type: "note",
          text: "The 2024 AAP clinical report explicitly noted that tools to assess the severity of ankyloglossia have been published in peer-reviewed journals, but none have been validated. This means there's no universally agreed-upon way to measure how \"severe\" a tongue-tie is.",
        },
      },
      {
        heading: "The Diagnosis Explosion: What's Going On?",
        content:
          "Tongue-tie diagnoses jumped nearly tenfold between 1997 and 2012 — and doubled again in the years that followed. Frenotomy procedures (the surgical release of the frenulum) have risen in lockstep. A 2025 systematic review in Otolaryngology-Head and Neck Surgery documented an exponential rise in tongue-tie publications without a corresponding increase in evidence quality. So what's driving the surge? Several factors are likely at play. Increased awareness of breastfeeding benefits has led more families to seek help when breastfeeding is difficult. Social media has amplified tongue-tie as an explanation for common infant feeding challenges. And a growing number of providers — including dentists, chiropractors, and bodywork practitioners outside the traditional medical model — now diagnose and treat tongue-tie, sometimes with financial incentives that may influence recommendations. None of this means tongue-tie isn't real or never requires treatment. But it does mean that parents navigating this landscape need to be thoughtful consumers of information.",
        bulletPoints: [
          "Less than 50% of infants diagnosed with ankyloglossia actually have difficulty breastfeeding",
          "The rise in diagnoses correlates more with increased awareness and social media attention than with changes in actual prevalence",
          "Many common breastfeeding difficulties (shallow latch, low supply, nipple pain) have causes unrelated to tongue-tie",
          "Not all providers who diagnose tongue-tie have the same level of training or follow the same diagnostic criteria",
        ],
        callout: {
          type: "warning",
          text: "Be cautious of any provider who diagnoses tongue-tie after a brief visual examination without a thorough functional feeding assessment. A proper evaluation should include observing a full feeding session and evaluating both the infant and the breastfeeding parent.",
        },
      },
      {
        heading: "The Posterior Tongue-Tie Controversy",
        content:
          "If you've been in tongue-tie social media groups, you've probably encountered the term \"posterior tongue-tie.\" This is one of the most contentious topics in the field. An anterior tongue-tie is visible — you can see the frenulum restricting the tongue tip. A posterior tongue-tie, on the other hand, can only be felt, not seen. The clinician diagnoses it by palpating (feeling) the tissue under the tongue. The 2024 American Academy of Pediatrics clinical report was direct on this topic: there is no evidence to support frenotomies of \"posterior tongue-tie\" and \"lip tie\" to help with feeding. A consensus group attempting to develop diagnostic guidelines was unable to reach agreement on the definition of posterior ankyloglossia or even a grading system for tongue-tie severity. Some experts consider posterior tongue-tie to be a normal anatomical variation, not a pathological condition. Others argue it represents real restriction that causes real problems. The honest answer is that the science hasn't settled this debate yet — and any provider who presents posterior tongue-tie as a clear-cut diagnosis with a clear-cut solution is getting ahead of the evidence.",
        callout: {
          type: "note",
          text: "Posterior tongue-tie is treated with a deeper incision than anterior tongue-tie, and the tissue is often said to \"reattach\" after release, leading to recommendations for repeated procedures and aggressive wound care exercises. These follow-up protocols have limited evidence supporting them.",
        },
      },
      {
        heading: "What the Evidence Says About Frenotomy for Feeding",
        content:
          "The FROSTTIE trial, published in 2023, was a multicentre randomized controlled trial in the UK that compared frenotomy plus breastfeeding support to breastfeeding support alone for infants with tongue-tie and breastfeeding difficulties. Though the trial was smaller than planned due to COVID-related disruptions, its findings were notable: there was no significant difference in breastfeeding rates at three months between the two groups. Both groups had high breastfeeding rates — 88% in the frenotomy group versus 86% in the breastfeeding-support-only group. A 2025 systematic review and meta-analysis examining frenectomy outcomes in children under five found that pooled data did suggest some improvement in breastfeeding outcomes after the procedure. However, the quality of evidence was mixed, and the most rigorous studies (randomized controlled trials) consistently showed the weakest effects. The 2024 AAP clinical report encouraged doctors to first consider nonsurgical options — particularly comprehensive feeding evaluation and lactation support — before recommending frenotomy. This represents a meaningful shift from the approach many families encounter, where frenotomy is presented as the obvious first-line treatment.",
        bulletPoints: [
          "The FROSTTIE RCT found no difference in breastfeeding rates at 3 months between frenotomy and support-only groups",
          "Some observational studies show improvements in latch scores and nipple pain after frenotomy",
          "The most rigorous study designs (RCTs) consistently show weaker effects than observational studies, suggesting placebo effects may play a role",
          "Adverse events from frenotomy, while uncommon, include bleeding, infection, and salivary duct damage",
        ],
      },
      {
        heading: "Tongue-Tie and Speech: What We Actually Know",
        content:
          "Many parents worry about their child's speech when tongue-tie is identified. Here's what the evidence shows — and what it doesn't. Tongue-tie can potentially affect the production of specific speech sounds that require tongue elevation or precise tongue-tip movement: /l/, /r/, /th/, /s/, /z/, /t/, /d/, /n/. It does not cause language delay. A child with tongue-tie may mispronounce certain sounds, but their vocabulary, sentence structure, grammar, and understanding of language should develop normally. A 2024 systematic review and meta-analysis on speech outcomes after frenectomy found that the procedure was associated with improvements in speech articulation. However — and this is important — when speech intelligibility was assessed by blinded listeners (people who didn't know whether the child had the procedure), no significant differences were noted. This suggests that parent-reported improvements may be influenced by expectation effects. Additionally, the evidence shows that increasing patient age was negatively correlated with post-frenectomy speech outcomes. In other words, if a frenotomy is going to help speech, doing it earlier appears to matter. But many children with apparent tongue-tie have no speech difficulties at all, and many children with articulation errors have perfectly normal frenulums.",
        callout: {
          type: "tip",
          text: "If tongue-tie is identified and speech concerns exist, request a full speech-language evaluation BEFORE deciding on surgery. An SLP can determine whether the articulation errors are actually related to tongue mobility or have a different cause entirely.",
        },
      },
      {
        heading: "Questions to Ask Before Deciding on a Procedure",
        content:
          "If a provider recommends frenotomy for your child, don't be afraid to ask questions. Good providers welcome them. Taking time to make an informed decision is always reasonable, and any provider who pressures you to decide immediately or uses fear-based language (\"If you don't do this now, your child will never speak properly\") deserves extra scrutiny. The AAP and ASHA both support a thoughtful, evidence-based approach to tongue-tie evaluation and management.",
        bulletPoints: [
          "What specific functional problem is the tongue-tie causing? (Not just \"it looks tight\" — what can't my child DO because of it?)",
          "Have we tried non-surgical interventions first? (Lactation support, positioning changes, oral motor exercises)",
          "What assessment tool did you use to diagnose this, and is it validated?",
          "What are the realistic expected outcomes of the procedure? What does the research show?",
          "What are the risks, including the possibility that it won't help?",
          "Would you recommend a second opinion from a pediatric ENT, SLP, or IBCLC (International Board Certified Lactation Consultant)?",
          "For speech concerns: has my child had a formal speech-language evaluation to determine whether the articulation errors are actually related to tongue mobility?",
        ],
        callout: {
          type: "tip",
          text: "Getting a second opinion isn't rude — it's smart. Ideally, seek evaluation from a provider who doesn't also perform the procedure, to reduce potential conflicts of interest. A pediatric ENT, an experienced IBCLC, or an SLP with feeding expertise can provide valuable perspective.",
        },
      },
    ],

    funFacts: [
      {
        emoji: "\u{1F4C9}",
        text: "Tongue-tie diagnoses increased nearly 10-fold between 1997 and 2012, and continued to climb afterward. A 2025 systematic review documented an exponential rise in publications on the topic — but found that evidence quality has not kept pace with the volume of papers published.",
      },
      {
        emoji: "\u{1F476}",
        text: "Less than half of infants diagnosed with ankyloglossia actually have difficulty breastfeeding, according to research data. This suggests that many tongue-ties identified are either mild or not functionally significant enough to cause feeding problems.",
      },
      {
        emoji: "\u{1FA7A}",
        text: "Despite the widespread use of lasers for frenotomy procedures, the 2024 AAP clinical report found that no studies support the use of lasers over traditional scissor clipping in infants younger than 6 months. Laser frenotomy is typically more expensive and hasn't been shown to produce better outcomes.",
      },
      {
        emoji: "\u{1F5E3}\uFE0F",
        text: "Tongue-tie can affect specific sounds like /l/, /r/, and /th/, but it does not cause language delay. A child with tongue-tie should still develop vocabulary, sentence structure, and language understanding on a normal timeline — it's only certain articulation patterns that may be affected.",
      },
    ],

    keyTakeaways: [
      "Tongue-tie (ankyloglossia) is real and can genuinely affect feeding and specific speech sounds, but diagnoses have increased dramatically and not all identified cases require surgical intervention.",
      "The 2024 AAP clinical report recommends trying nonsurgical interventions (lactation support, feeding evaluation) before considering frenotomy, and found no evidence supporting procedures for posterior tongue-tie or lip tie.",
      "The FROSTTIE randomized controlled trial (2023) found no significant difference in breastfeeding rates at 3 months between babies who received frenotomy and those who received breastfeeding support alone.",
      "Tongue-tie can affect articulation of specific sounds (/l/, /r/, /th/) but does NOT cause language delay. A full speech evaluation should precede any surgical decision for speech concerns.",
      "Always seek a comprehensive functional assessment before agreeing to a procedure, get a second opinion from a provider who doesn't perform the surgery, and ask evidence-based questions about expected outcomes and risks.",
    ],

    sources: [
      {
        label: "Thomas et al. (2024, AAP)",
        detail:
          "Thomas, J., Bunik, M., Holmes, A., Keels, M. A., Poindexter, B., Meyer, A., & Gilliland, A. (2024). Identification and management of ankyloglossia and its effect on breastfeeding in infants: Clinical report. Pediatrics, 154(2), e2024067605.",
      },
      {
        label: "Finkelstein et al. (2023, FROSTTIE)",
        detail:
          "Finkelstein, Y., et al. (2023). Frenotomy with breastfeeding support versus breastfeeding support alone for infants with tongue-tie and breastfeeding difficulties: The FROSTTIE RCT. Health Technology Assessment, 27(22), 1-58.",
      },
      {
        label: "Thornton et al. (2025)",
        detail:
          "Thornton, J., et al. (2025). Systematic review of tongue tie publications: Exponential rise in publications without exponential increase in evidence. Otolaryngology-Head and Neck Surgery.",
      },
      {
        label: "Gupta et al. (2024)",
        detail:
          "Gupta, R., et al. (2024). Speech outcomes of frenectomy for tongue-tie release: A systematic review and meta-analysis. The Cleft Palate-Craniofacial Journal, 61(7), 1108-1118.",
      },
      {
        label: "Cordray et al. (2025)",
        detail:
          "Cordray, H., et al. (2025). Frenectomy for ankyloglossia in children under five: A systematic review and meta-analysis on breastfeeding outcomes. International Breastfeeding Journal, 20(1), 32.",
      },
      {
        label: "Melong, Bezuhly, & Hong (2022)",
        detail:
          "Melong, J., Bezuhly, M., & Hong, P. (2022). The effect of tongue-tie release on speech articulation and intelligibility. Annals of Otology, Rhinology & Laryngology, 131(6), 601-608.",
      },
    ],

    disclaimer: BLOG_DISCLAIMER,
  },
];
