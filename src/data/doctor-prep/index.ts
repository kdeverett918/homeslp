export interface ConcernOption {
  id: string;
  label: string;
  category: "speech" | "language" | "social" | "feeding" | "hearing" | "behavior";
  whatToTellDoctor: string;
  whatToAsk: string;
  ageRelevance?: string;
}

export interface DoctorPrepRight {
  title: string;
  description: string;
}

export const concerns: ConcernOption[] = [
  {
    id: "concern-01",
    label: "Not saying any words yet",
    category: "language",
    whatToTellDoctor:
      "My child is [age] months old and is not saying any recognizable words yet. I've been tracking and they have [number] words total. I've tried [strategies you've used] at home.",
    whatToAsk:
      "At what point should we refer to Early Intervention or a speech-language pathologist? Can you write a referral today so I don't have to wait until the next visit?",
    ageRelevance:
      "Typical children say their first word around 12 months. If no words by 16 months, a referral is appropriate. Don't wait for the 2-year checkup.",
  },
  {
    id: "concern-02",
    label: "Hard to understand when talking",
    category: "speech",
    whatToTellDoctor:
      "My child talks, but people outside our family can't understand them. I'd estimate about [percentage]% of what they say is understandable to strangers. Here are some examples of what they say vs. what they mean.",
    whatToAsk:
      "Is their speech intelligibility appropriate for their age? Should we get a formal speech sound assessment from an SLP?",
    ageRelevance:
      "By age 2, strangers should understand about 50% of speech. By age 3, about 75%. By age 4, about 90-100%. If they're below these benchmarks, ask for a referral.",
  },
  {
    id: "concern-03",
    label: "Doesn't respond to their name",
    category: "social",
    whatToTellDoctor:
      "I've noticed my child doesn't consistently turn to look at me when I say their name. This happens even when they're not distracted or absorbed in play. I've tried calling their name from different distances and volumes.",
    whatToAsk:
      "Could this indicate a hearing concern or a developmental difference? I'd like a hearing test and, if appropriate, a developmental screening.",
    ageRelevance:
      "Responding to their name reliably should develop by 9-12 months. Inconsistent name response after 12 months warrants evaluation for hearing loss or autism spectrum.",
  },
  {
    id: "concern-04",
    label: "Not pointing to things",
    category: "social",
    whatToTellDoctor:
      "My child is [age] months old and doesn't point to things they want or to show me things they notice. They tend to [describe what they do instead -- pull your hand, cry, reach silently].",
    whatToAsk:
      "Pointing is a milestone I've been watching for. Is this a concern at their age? Should we do a developmental screening like the M-CHAT?",
    ageRelevance:
      "Pointing to request typically develops by 12 months. Pointing to share interest (protodeclarative pointing) by 14-16 months. Absence by 18 months is a red flag.",
  },
  {
    id: "concern-05",
    label: "Lost words they used to say",
    category: "language",
    whatToTellDoctor:
      "My child used to say [specific words] but has stopped using them in the past [timeframe]. They had about [number] words and now they have [number]. This isn't a case of not hearing the word -- they've just stopped.",
    whatToAsk:
      "Language regression can be a sign of several things. What evaluations would you recommend? I'd like referrals to both an SLP and a developmental pediatrician.",
    ageRelevance:
      "Any loss of previously acquired words at any age warrants immediate evaluation. Do not wait. This is different from normal fluctuation in word use.",
  },
  {
    id: "concern-06",
    label: "Only uses single words, no combinations",
    category: "language",
    whatToTellDoctor:
      "My child has about [number] single words but isn't putting two words together yet, like 'more milk' or 'daddy go.' They communicate one word at a time.",
    whatToAsk:
      "Is their language development on track for their age? What can I do at home to encourage word combinations, and should we also get a professional evaluation?",
    ageRelevance:
      "Two-word combinations typically emerge between 18-24 months. If not combining words by 24 months with at least 50 single words, a referral is warranted.",
  },
  {
    id: "concern-07",
    label: "Stuttering or getting stuck on words",
    category: "speech",
    whatToTellDoctor:
      "My child has been repeating sounds or words, like 'b-b-b-ball' or 'I-I-I want.' It started about [timeframe] ago. It happens most when they're [excited/tired/rushed]. They [do/don't] seem frustrated by it.",
    whatToAsk:
      "Is this normal developmental disfluency or should we see an SLP who specializes in fluency? What signs would tell us it's becoming a problem?",
    ageRelevance:
      "Developmental stuttering is common between 2-5 years and often resolves. If it lasts more than 6 months, involves visible tension/struggle, or the child avoids talking, refer to an SLP.",
  },
  {
    id: "concern-08",
    label: "Doesn't follow simple directions",
    category: "language",
    whatToTellDoctor:
      "My child has trouble following simple directions like 'give me the ball' or 'put it on the table.' I've tried using gestures and pointing but they still seem confused. It's not a defiance issue -- they look like they genuinely don't understand.",
    whatToAsk:
      "Could this be a receptive language delay? Should we start with a hearing test and then a language evaluation with an SLP?",
    ageRelevance:
      "One-step directions should be followed by 12-15 months. Two-step directions by 24-30 months. If a child can't follow age-appropriate directions, evaluate hearing first, then language.",
  },
  {
    id: "concern-09",
    label: "Doesn't make eye contact",
    category: "social",
    whatToTellDoctor:
      "My child rarely makes eye contact with me or other people. This happens during conversations, play, and when I try to get their attention. I've noticed it's been consistent for [timeframe].",
    whatToAsk:
      "I know limited eye contact can be associated with several things. Can we do a full developmental screening? I'd like referrals for both developmental pediatrics and possibly an autism evaluation.",
    ageRelevance:
      "Babies typically begin making consistent eye contact by 2-3 months. Limited eye contact combined with other social differences after 12 months warrants developmental evaluation.",
  },
  {
    id: "concern-10",
    label: "Doesn't play pretend",
    category: "social",
    whatToTellDoctor:
      "My child is [age] and doesn't do pretend play -- they don't feed a baby doll, talk on a pretend phone, or act out scenes with toys. They tend to line up objects, spin wheels, or play with parts of toys instead of the whole toy.",
    whatToAsk:
      "Is the absence of pretend play a developmental concern at this age? What kind of specialist should we see for a play-based developmental assessment?",
    ageRelevance:
      "Simple pretend play (feeding a doll, pretend drinking) typically emerges by 18 months. Absence by 24 months, especially combined with other social differences, is worth evaluating.",
  },
  {
    id: "concern-11",
    label: "Very picky eater / refuses textures",
    category: "feeding",
    whatToTellDoctor:
      "My child will only eat [list specific foods/textures]. They gag, spit out, or refuse anything with a [crunchy/lumpy/mixed] texture. Mealtimes are stressful and they eat fewer than [number] foods total.",
    whatToAsk:
      "Could this be a feeding disorder or sensory processing issue? Can you refer us to a feeding therapist (SLP or OT)? I want to rule out any physical causes too.",
    ageRelevance:
      "Some pickiness is normal in toddlers, but eating fewer than 20 foods, gagging on entire texture categories, or losing weight/not growing are red flags at any age.",
  },
  {
    id: "concern-12",
    label: "Drools excessively past infancy",
    category: "feeding",
    whatToTellDoctor:
      "My child still drools heavily during the day even though they're past teething age. I notice it most when they're concentrating, talking, or with their mouth open. I go through multiple bibs or shirt changes per day.",
    whatToAsk:
      "Could excessive drooling indicate low muscle tone in the mouth? Should we see an SLP for an oral motor evaluation?",
    ageRelevance:
      "Drooling during teething is normal. Persistent drooling after 24 months that's not teething-related may indicate low oral motor tone and should be evaluated.",
  },
  {
    id: "concern-13",
    label: "Seems to hear but ignores speech",
    category: "hearing",
    whatToTellDoctor:
      "My child responds to some sounds (music, loud noises) but seems to ignore when people talk to them. They passed the newborn hearing screen, but I'm concerned something may have changed or they may have fluid in their ears.",
    whatToAsk:
      "Can we get an updated hearing test? Could chronic ear infections or fluid be affecting their hearing even if the newborn screen was normal?",
    ageRelevance:
      "Hearing can change at any age. Chronic ear infections can cause fluctuating hearing loss that affects speech development. Retest hearing if there's any concern.",
  },
  {
    id: "concern-14",
    label: "Only communicates through tantrums",
    category: "behavior",
    whatToTellDoctor:
      "My child screams, cries, or throws themselves on the floor when they want something instead of using words, gestures, or pointing. This happens [number] times per day and I believe it's because they can't express what they need.",
    whatToAsk:
      "Could these tantrums be driven by a communication delay? I'd like a speech-language evaluation to see if building their communication skills could reduce the frustration.",
    ageRelevance:
      "Tantrums peak between 18-36 months as children's desires outpace their language skills. If tantrums are frequent AND the child has limited language, address the language gap first.",
  },
  {
    id: "concern-15",
    label: "Voice sounds hoarse or raspy",
    category: "speech",
    whatToTellDoctor:
      "My child's voice has sounded hoarse or raspy for [timeframe]. It's not related to a cold -- it's been persistent. They [do/don't] yell or scream frequently.",
    whatToAsk:
      "Should we see an ENT to look at their vocal cords? If there's something on the cords (like nodules), should we also see an SLP who specializes in pediatric voice therapy?",
    ageRelevance:
      "Persistent hoarseness lasting more than 2-3 weeks in any child (not related to illness) should be evaluated by an ENT. Voice disorders in children are treatable.",
  },
  {
    id: "concern-16",
    label: "Echoes everything instead of responding",
    category: "language",
    whatToTellDoctor:
      "When I ask my child a question, they repeat the question back instead of answering. For example, I say 'Do you want juice?' and they say 'Want juice?' instead of 'yes.' This happens with most questions.",
    whatToAsk:
      "Is this echolalia normal for their age, or could it indicate a language processing difference? Should we get a full language evaluation?",
    ageRelevance:
      "Some echoing is normal up to age 2-2.5 as children learn to process language. Persistent echolalia past 30 months, especially if it replaces functional responses, warrants evaluation.",
  },
  {
    id: "concern-17",
    label: "Doesn't seem interested in other children",
    category: "social",
    whatToTellDoctor:
      "My child shows little interest in other children their age. At playgrounds or playgroups, they play alone and don't watch, approach, or interact with peers. They [do/don't] interact differently with familiar adults.",
    whatToAsk:
      "Is this within the range of normal temperament, or could it indicate a social communication difference? What kind of evaluation would help us understand this better?",
    ageRelevance:
      "Parallel play (near but not with peers) is normal up to age 2-3. Interactive peer play develops gradually from 3-4. Complete lack of interest in peers by 3 warrants evaluation.",
  },
  {
    id: "concern-18",
    label: "Mouth breathing / open mouth posture",
    category: "feeding",
    whatToTellDoctor:
      "My child's mouth is open most of the time and they breathe through their mouth even when not congested. This happens during the day and while sleeping. I'm concerned about how this might affect their speech and dental development.",
    whatToAsk:
      "Could enlarged adenoids or tonsils be causing the mouth breathing? I'd like a referral to an ENT and possibly an orofacial myologist or SLP for oral motor assessment.",
    ageRelevance:
      "Chronic mouth breathing at any age can affect facial development, dental alignment, sleep quality, and speech sound production. Address the cause first (ENT), then the oral posture.",
  },
  {
    id: "concern-19",
    label: "Talks a lot but doesn't make sense",
    category: "language",
    whatToTellDoctor:
      "My child talks constantly and uses lots of words, but their sentences often don't make sense or seem off-topic. They jump between subjects, use scripts from TV shows, or string words together in unusual ways.",
    whatToAsk:
      "Could this be a pragmatic language difference? I'd like a comprehensive language evaluation that looks at social use of language, not just vocabulary and grammar.",
    ageRelevance:
      "Pragmatic language issues can be hard to spot because the child 'seems like a talker.' If the content doesn't match the context after age 3, get a pragmatic language evaluation.",
  },
  {
    id: "concern-20",
    label: "Only talks about one topic obsessively",
    category: "social",
    whatToTellDoctor:
      "My child talks almost exclusively about one topic (like trains, numbers, or a specific show). They bring it into every conversation and get upset when the topic changes. Other interests are very limited.",
    whatToAsk:
      "Could this be a restricted interest pattern? Should we pursue a developmental evaluation that looks at the broader picture, including an autism screening?",
    ageRelevance:
      "Strong interests are normal in preschoolers, but if the interest is so intense it prevents other learning or social interaction, it's worth evaluating the bigger picture.",
  },
];

export const questionsToAsk: string[] = [
  "Can you write a referral for a speech-language evaluation today? I don't want to take a wait-and-see approach.",
  "What specific milestones should my child be hitting right now for speech and language, and which ones are they missing?",
  "Is my child eligible for Early Intervention services, and how do I self-refer in our state?",
  "Should we get a hearing test before the speech evaluation, or can they happen at the same time?",
  "If I disagree with a 'wait and see' recommendation, can I still get a referral for evaluation?",
  "Are there any medical conditions we should rule out that could be causing the speech or language delay?",
  "How long is the typical wait for a speech-language evaluation in this area, and are there ways to get seen sooner?",
  "Will our insurance cover speech therapy, and do I need a formal referral or can I self-refer to an SLP?",
  "What can I do at home RIGHT NOW while we wait for the evaluation to be scheduled?",
  "If my child qualifies for services, how often will they need therapy and for how long?",
];

export const parentRights: DoctorPrepRight[] = [
  {
    title: "You Can Self-Refer to Early Intervention",
    description:
      "Under IDEA Part C, any parent can refer their child (birth to 3) directly to their state's Early Intervention program. You do NOT need a doctor's referral. Call your state's EI program directly. The evaluation is free.",
  },
  {
    title: "You Can Request a Written Referral",
    description:
      "If your doctor says 'wait and see,' you have the right to ask: 'I'd like a written referral for a speech-language evaluation anyway.' Doctors must document if they refuse a parent's request for referral. Most will write it when asked directly.",
  },
  {
    title: "You Can Get a Second Opinion",
    description:
      "If you feel your concerns are being dismissed, you are allowed to seek a second opinion from another pediatrician, a developmental pediatrician, or go directly to a speech-language pathologist. Trust your instincts -- you know your child best.",
  },
  {
    title: "You Can Request School District Evaluation",
    description:
      "For children ages 3-5, your local school district must evaluate your child for free if you suspect a disability, including speech-language delays. This is your right under IDEA Part B (Child Find). Send a written request to your district's special education department.",
  },
  {
    title: "Your Concerns Must Be Documented",
    description:
      "Under federal law, your concerns as a parent are part of the evaluation process. If you raise a concern at a well-child visit, the doctor should document it in the medical record. If they don't, you can request that your concern be noted in writing.",
  },
];
