export interface RedFlag {
  id: string;
  category: "pediatric" | "adult";
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

export const adultRedFlags: RedFlag[] = [
  {
    id: "arf1",
    category: "adult",
    title: "Sudden difficulty swallowing (new onset)",
    description:
      "Your loved one suddenly can't swallow food or liquids that were previously fine. This came on quickly — within hours or days.",
    urgency: "immediate",
    whatToDo:
      "Go to the emergency room or call 911. Sudden onset dysphagia can indicate a new stroke, tumor, or neurological event. This is a medical emergency.",
    whyItMatters:
      "New-onset swallowing difficulty that wasn't there before requires immediate medical investigation. Time-sensitive conditions like stroke have treatment windows.",
  },
  {
    id: "arf2",
    category: "adult",
    title: "Fever within 24-72 hours after a meal",
    description:
      "Your loved one develops a fever, new cough, or congestion within a few days of eating or drinking. They may seem more tired than usual.",
    urgency: "immediate",
    whatToDo:
      "Call their doctor today. This pattern can indicate aspiration pneumonia — when food or liquid enters the lungs and causes infection. Mention their swallowing difficulty and the timing of symptoms.",
    whyItMatters:
      "Aspiration pneumonia is a leading cause of death in people with dysphagia. It can develop 24-72 hours after aspiration. Early antibiotic treatment is critical.",
  },
  {
    id: "arf3",
    category: "adult",
    title: "Choking on saliva or their own secretions",
    description:
      "Your loved one coughs or chokes even when not eating — just from their own saliva or mucus.",
    urgency: "immediate",
    whatToDo:
      "Contact their doctor urgently. This suggests severe swallowing impairment that affects their ability to manage even their own secretions. They may need modified positioning, suctioning, or medication changes.",
    whyItMatters:
      "If someone can't manage their own saliva safely, eating and drinking are even more dangerous. This level of impairment needs professional management.",
  },
  {
    id: "arf4",
    category: "adult",
    title: "Unexplained weight loss (more than 5% in a month)",
    description:
      "Your loved one is losing weight without trying. Clothes fit looser, they look thinner, or you've noticed they eat less than before.",
    urgency: "soon",
    whatToDo:
      "Schedule an appointment with their doctor. Request a nutritional assessment and swallowing re-evaluation. Weight loss in people with swallowing difficulty often means they're not getting enough calories because eating is too difficult or tiring.",
    whyItMatters:
      "Malnutrition weakens the body, slows recovery, and increases infection risk. Catching weight loss early allows for dietary modifications before it becomes dangerous.",
  },
  {
    id: "arf5",
    category: "adult",
    title: "Wet or gurgly voice after eating/drinking",
    description:
      "After meals or sips of liquid, their voice sounds 'wet', 'gurgly', or like they're talking through liquid. This may clear after they cough.",
    urgency: "soon",
    whatToDo:
      "Mention this to their SLP or doctor at the next visit. A wet vocal quality after swallowing often indicates food or liquid is sitting on or near the vocal folds — very close to the airway.",
    whyItMatters:
      "This is one of the most reliable signs of penetration (food/liquid entering the top of the airway). Even if they cough it clear, it means the swallow isn't fully protecting the airway.",
  },
  {
    id: "arf6",
    category: "adult",
    title: "Refusing to eat or drink",
    description:
      "Your loved one avoids meals, pushes food away, or becomes distressed at mealtimes. This is new behavior that wasn't there before.",
    urgency: "soon",
    whatToDo:
      "Don't force them to eat. Something is wrong — it could be pain, fear of choking, depression, or worsening swallowing function. Contact their doctor and describe the change in behavior.",
    whyItMatters:
      "Food refusal in someone with dysphagia is a red flag for either worsening physical function or psychological distress. Both need professional attention.",
  },
  {
    id: "arf7",
    category: "adult",
    title: "Recurrent pneumonia (2+ episodes)",
    description:
      "Your loved one has been hospitalized or treated for pneumonia more than once in the past year.",
    urgency: "immediate",
    whatToDo:
      "Request a swallowing evaluation (MBSS or FEES) if one hasn't been done recently. Recurrent pneumonia in someone with known swallowing difficulty is almost certainly aspiration-related.",
    whyItMatters:
      "Each episode of aspiration pneumonia damages the lungs further. Breaking the cycle requires identifying exactly how and when aspiration is happening.",
  },
];
