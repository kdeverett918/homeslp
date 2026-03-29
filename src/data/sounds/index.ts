export interface SoundDevelopment {
  sound: string;
  symbol: string;
  emergenceMonths: number;
  masteryMonths: number;
  commonSubstitutions: string[];
  examples: string[];
  parentNote: string;
}

export const sounds: SoundDevelopment[] = [
  {
    sound: "p",
    symbol: "/p/",
    emergenceMonths: 6,
    masteryMonths: 36,
    commonSubstitutions: ["b"],
    examples: ["pop", "puppy", "cup"],
    parentNote:
      "One of the earliest sounds! Your child may already be making this in babbling like 'baba' and 'papa.' It's a great first sound to practice.",
  },
  {
    sound: "b",
    symbol: "/b/",
    emergenceMonths: 6,
    masteryMonths: 36,
    commonSubstitutions: ["p"],
    examples: ["ball", "baby", "tub"],
    parentNote:
      "Another early sound that shows up in babbling. 'Ball' and 'bye-bye' are great first words that use this sound.",
  },
  {
    sound: "m",
    symbol: "/m/",
    emergenceMonths: 6,
    masteryMonths: 36,
    commonSubstitutions: ["n"],
    examples: ["mama", "more", "yummy"],
    parentNote:
      "This is often the very first consonant sound babies make. 'Mama' and 'more' are excellent early words to encourage.",
  },
  {
    sound: "n",
    symbol: "/n/",
    emergenceMonths: 6,
    masteryMonths: 36,
    commonSubstitutions: ["m", "d"],
    examples: ["no", "night", "nana"],
    parentNote:
      "An early nasal sound. 'No' is a powerful early word for toddlers because it gives them control, so don't worry if they love saying it!",
  },
  {
    sound: "t",
    symbol: "/t/",
    emergenceMonths: 6,
    masteryMonths: 42,
    commonSubstitutions: ["d", "k"],
    examples: ["toe", "top", "hat"],
    parentNote:
      "An early developing sound. You can practice by exaggerating it in words like 'tick-tock' and 'tap-tap.'",
  },
  {
    sound: "d",
    symbol: "/d/",
    emergenceMonths: 6,
    masteryMonths: 42,
    commonSubstitutions: ["t", "g"],
    examples: ["dog", "daddy", "bed"],
    parentNote:
      "Develops alongside /t/. 'Dada' and 'dog' are high-interest words for most toddlers. Pair the word with the real thing or a picture.",
  },
  {
    sound: "h",
    symbol: "/h/",
    emergenceMonths: 12,
    masteryMonths: 36,
    commonSubstitutions: ["(omitted)"],
    examples: ["hi", "hat", "hot"],
    parentNote:
      "A breathy sound that's easy to produce. 'Hi' is a wonderful social word to practice because your child gets an instant response every time.",
  },
  {
    sound: "w",
    symbol: "/w/",
    emergenceMonths: 12,
    masteryMonths: 36,
    commonSubstitutions: ["(omitted)", "b"],
    examples: ["water", "want", "wow"],
    parentNote:
      "This sound uses lip rounding. Practice during play with 'whee!' and 'wow!' Your child will love the excitement in your voice.",
  },
  {
    sound: "y",
    symbol: "/j/",
    emergenceMonths: 12,
    masteryMonths: 48,
    commonSubstitutions: ["w", "(omitted)"],
    examples: ["yes", "you", "yummy"],
    parentNote:
      "'Yes' is a wonderful word to model. When your child points at something, say 'yes!' enthusiastically to reinforce communication.",
  },
  {
    sound: "k",
    symbol: "/k/",
    emergenceMonths: 12,
    masteryMonths: 42,
    commonSubstitutions: ["t"],
    examples: ["cup", "cookie", "kick"],
    parentNote:
      "Many toddlers replace /k/ with /t/ (saying 'tup' for 'cup'). This is normal up to about age 3.5. Gargling and making animal sounds can help strengthen the back of the tongue.",
  },
  {
    sound: "g",
    symbol: "/g/",
    emergenceMonths: 12,
    masteryMonths: 42,
    commonSubstitutions: ["d"],
    examples: ["go", "girl", "big"],
    parentNote:
      "The voiced partner of /k/. 'Go' is a perfect early word because it's exciting and functional. Say 'ready, set, GO!' during play.",
  },
  {
    sound: "f",
    symbol: "/f/",
    emergenceMonths: 18,
    masteryMonths: 48,
    commonSubstitutions: ["p", "b"],
    examples: ["fish", "food", "off"],
    parentNote:
      "Your child needs to gently bite their lower lip to make this sound. Don't worry if they say 'pish' for 'fish' early on -- that's a normal stepping stone.",
  },
  {
    sound: "v",
    symbol: "/v/",
    emergenceMonths: 24,
    masteryMonths: 60,
    commonSubstitutions: ["b", "f"],
    examples: ["very", "van", "love"],
    parentNote:
      "The voiced partner of /f/. It's one of the later-developing lip-teeth sounds. Saying 'vroom vroom' with toy cars is a fun way to practice.",
  },
  {
    sound: "s",
    symbol: "/s/",
    emergenceMonths: 24,
    masteryMonths: 60,
    commonSubstitutions: ["th", "t"],
    examples: ["sun", "see", "bus"],
    parentNote:
      "Many children develop a lisp with this sound and that's completely normal through age 4.5. Snake sounds ('sssss') are a playful way to practice.",
  },
  {
    sound: "z",
    symbol: "/z/",
    emergenceMonths: 24,
    masteryMonths: 60,
    commonSubstitutions: ["d", "s"],
    examples: ["zoo", "zip", "buzz"],
    parentNote:
      "The buzzy partner of /s/. Practice by pretending to be a buzzing bee. If your child can make /s/, /z/ usually follows naturally.",
  },
  {
    sound: "sh",
    symbol: "/\u0283/",
    emergenceMonths: 24,
    masteryMonths: 60,
    commonSubstitutions: ["s", "t"],
    examples: ["shoe", "she", "fish"],
    parentNote:
      "A later sound that requires lip rounding. 'Shh, the baby is sleeping' is a fun pretend-play activity that gives lots of natural practice.",
  },
  {
    sound: "ch",
    symbol: "/t\u0283/",
    emergenceMonths: 24,
    masteryMonths: 60,
    commonSubstitutions: ["t", "sh"],
    examples: ["cheese", "chair", "watch"],
    parentNote:
      "A combination of /t/ and /sh/. If your child can make both of those sounds separately, /ch/ will likely develop on its own. Train sounds ('choo choo') are great practice.",
  },
  {
    sound: "j",
    symbol: "/d\u0292/",
    emergenceMonths: 24,
    masteryMonths: 60,
    commonSubstitutions: ["d", "z"],
    examples: ["jump", "juice", "page"],
    parentNote:
      "The voiced partner of /ch/. 'Jump' is a wonderful action word -- say it while actually jumping together for multisensory learning.",
  },
  {
    sound: "l",
    symbol: "/l/",
    emergenceMonths: 24,
    masteryMonths: 72,
    commonSubstitutions: ["w", "y"],
    examples: ["light", "love", "ball"],
    parentNote:
      "Many children say 'wight' for 'light' until age 5 or 6. This is a later-developing sound and usually not a concern before kindergarten.",
  },
  {
    sound: "r",
    symbol: "/r/",
    emergenceMonths: 36,
    masteryMonths: 72,
    commonSubstitutions: ["w"],
    examples: ["red", "run", "car"],
    parentNote:
      "The last major sound most children master. Saying 'wabbit' for 'rabbit' is completely normal through age 6 or even 7. Don't pressure your child to practice this one early.",
  },
  {
    sound: "ng",
    symbol: "/\u014B/",
    emergenceMonths: 12,
    masteryMonths: 36,
    commonSubstitutions: ["n"],
    examples: ["ring", "sing", "running"],
    parentNote:
      "This sound only appears at the ends of words and syllables in English. Singing songs together is a natural way to practice it.",
  },
  {
    sound: "th (voiceless)",
    symbol: "/\u03B8/",
    emergenceMonths: 36,
    masteryMonths: 84,
    commonSubstitutions: ["f", "t"],
    examples: ["think", "bath", "three"],
    parentNote:
      "One of the very last sounds to develop. Most children don't master it until age 6-7. Saying 'fink' for 'think' is perfectly normal for preschoolers.",
  },
  {
    sound: "th (voiced)",
    symbol: "/\u00F0/",
    emergenceMonths: 36,
    masteryMonths: 84,
    commonSubstitutions: ["d", "v"],
    examples: ["this", "that", "brother"],
    parentNote:
      "The buzzy version of 'th.' It's one of the latest sounds to develop in English. Saying 'dat' for 'that' is typical well into elementary school.",
  },
  {
    sound: "zh",
    symbol: "/\u0292/",
    emergenceMonths: 36,
    masteryMonths: 72,
    commonSubstitutions: ["z", "sh"],
    examples: ["measure", "treasure", "beige"],
    parentNote:
      "This sound is rare in English and only appears in the middle or end of words. It's the last sound most kids need to learn, and it's not commonly targeted unless other sounds are already mastered.",
  },
];
