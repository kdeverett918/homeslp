export interface RedFlag {
  id: string;
  category: "pediatric";
  title: string;
  description: string;
  urgency: "immediate" | "soon" | "monitor";
  whatToDo: string;
  whyItMatters: string;
}

export const pediatricRedFlags: RedFlag[] = [
  {
    id: "prf1",
    category: "pediatric",
    title: "No babbling by 9 months",
    description:
      "Your baby doesn't make consonant sounds like 'ba-ba', 'da-da', or 'ma-ma' — even without meaning.",
    urgency: "soon",
    whatToDo:
      "Request a hearing test and mention this to your pediatrician at the next visit. Hearing loss is the #1 hidden cause of speech delays.",
    whyItMatters:
      "Babbling is the foundation of speech. Babies practice sounds before they use words. No babbling may signal a hearing or motor issue that's easier to address early.",
  },
  {
    id: "prf2",
    category: "pediatric",
    title: "No words by 16 months",
    description:
      "Your child doesn't say any words — not even 'mama', 'dada', or 'uh-oh'. Sounds and animal noises count as words!",
    urgency: "soon",
    whatToDo:
      "Ask your pediatrician for a referral to a speech-language pathologist. Also request a hearing screening if one hasn't been done recently.",
    whyItMatters:
      "While some late talkers do catch up on their own (about 50-70%), others have persistent delays. Early evaluation helps distinguish 'late bloomers' from children who need support.",
  },
  {
    id: "prf3",
    category: "pediatric",
    title: "Loss of words or skills (regression)",
    description:
      "Your child used to say words or babble but has stopped. They may also have lost social skills like waving or pointing.",
    urgency: "immediate",
    whatToDo:
      "Contact your pediatrician THIS WEEK. Regression can indicate several conditions that benefit from early intervention. Request a comprehensive developmental evaluation.",
    whyItMatters:
      "Losing skills that were previously present is always worth investigating. It can be associated with autism spectrum disorder, hearing changes, or rare neurological conditions. Early identification leads to better outcomes.",
  },
  {
    id: "prf4",
    category: "pediatric",
    title: "Not responding to their name by 12 months",
    description:
      "When you say your child's name in a normal voice (not shouting), they don't look at you or react most of the time.",
    urgency: "soon",
    whatToDo:
      "Mention this to your pediatrician and request both a hearing test and developmental screening. This could be a hearing issue OR a social communication concern.",
    whyItMatters:
      "Responding to your name requires both hearing the sound AND understanding that it refers to you. Issues with either system are treatable when caught early.",
  },
  {
    id: "prf5",
    category: "pediatric",
    title: "No pointing or gestures by 12 months",
    description:
      "Your child doesn't point to things they want, wave bye-bye, shake their head 'no', or reach up to be held.",
    urgency: "soon",
    whatToDo:
      "Bring this up with your pediatrician. Gestures are a precursor to spoken language — they show your child understands communication even before they can talk.",
    whyItMatters:
      "Gestures are one of the strongest predictors of later language development. Children who don't gesture by 12 months are at higher risk for persistent language delays.",
  },
  {
    id: "prf6",
    category: "pediatric",
    title: "Not understanding simple words by 12 months",
    description:
      "Your child doesn't seem to understand familiar words like 'no', 'bottle', 'mommy', or 'look' — even when you point or gesture.",
    urgency: "soon",
    whatToDo:
      "Request a hearing test first (this rules out the most common cause). If hearing is normal, ask for a speech-language evaluation to assess receptive language.",
    whyItMatters:
      "Understanding language (receptive language) develops before speaking. If a child can't understand words, speaking them will be delayed too.",
  },
  {
    id: "prf7",
    category: "pediatric",
    title: "No two-word phrases by 24 months",
    description:
      "Your child isn't combining any two words together — like 'more milk', 'daddy go', 'big truck'. They may have single words but don't put them together.",
    urgency: "soon",
    whatToDo:
      "This is a good time to request an SLP evaluation. Many pediatricians take a 'wait and see' approach, but research shows earlier intervention leads to better outcomes.",
    whyItMatters:
      "By 24 months, most children are combining words. While some late combiners catch up, this is the age where professional guidance can make the biggest difference.",
  },
  {
    id: "prf8",
    category: "pediatric",
    title: "Difficulty with feeding or frequent choking",
    description:
      "Your child gags often on food, refuses new textures, pockets food in their cheeks, or chokes more than occasionally during meals.",
    urgency: "soon",
    whatToDo:
      "Mention feeding difficulties to your pediatrician. Request a feeding evaluation with an SLP who specializes in pediatric feeding. This is NOT about being a picky eater — it could be a sensory or motor issue.",
    whyItMatters:
      "Feeding difficulties and speech delays often go together because they use the same muscles. An SLP can evaluate both at the same time.",
  },
  {
    id: "prf9",
    category: "pediatric",
    title: "Strangers can't understand any of what your 3-year-old says",
    description:
      "By age 3, unfamiliar adults should understand about 75% of what your child says. If even familiar people struggle to understand them, this is worth looking into.",
    urgency: "soon",
    whatToDo:
      "Request an articulation/phonology evaluation with an SLP. Sound errors are very treatable and respond well to therapy.",
    whyItMatters:
      "Intelligibility matters because it affects a child's ability to communicate, socialize, and eventually succeed in school.",
  },
  {
    id: "prf10",
    category: "pediatric",
    title: "Your gut says something isn't right",
    description:
      "You can't pinpoint exactly what's wrong, but something about your child's communication feels off compared to other kids their age.",
    urgency: "monitor",
    whatToDo:
      "Trust your instincts. You know your child better than anyone. Ask your pediatrician for an evaluation. You can NEVER be 'too early' — if everything is fine, you'll get peace of mind. If something is there, you've just given your child a head start.",
    whyItMatters:
      "Parent intuition is remarkably accurate. Research shows parents correctly identify communication concerns about 70% of the time. You're not overreacting.",
  },
];
