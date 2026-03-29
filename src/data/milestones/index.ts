export interface MilestoneItem {
  skill: string;
  description: string;
  example?: string;
}

export interface Milestone {
  id: string;
  ageRangeLabel: string;
  ageMonthsStart: number;
  ageMonthsEnd: number;
  speech: MilestoneItem[];
  language: MilestoneItem[];
  social: MilestoneItem[];
  feeding: MilestoneItem[];
  redFlags: string[];
  parentReassurance: string;
  commonWorries: string[];
  whatYouCanDo: string[];
}

export const milestones: Milestone[] = [
  // ── 0-3 MONTHS ──────────────────────────────────────────────────────
  {
    id: "m-0-3",
    ageRangeLabel: "0-3 months",
    ageMonthsStart: 0,
    ageMonthsEnd: 3,
    speech: [
      {
        skill: "Cooing",
        description:
          "Your baby starts making soft, vowel-like sounds -- \"ooo\" and \"aah.\" These are the very first building blocks of speech.",
        example:
          "You might hear gentle \"ooo\" or \"aah\" sounds when your baby is calm and content, especially during diaper changes or quiet cuddle time.",
      },
      {
        skill: "Crying with different patterns",
        description:
          "Believe it or not, your baby is already communicating! Different cries mean different things -- hunger, discomfort, tiredness. You are learning their language.",
        example:
          "A short, rhythmic cry often means hunger. A high-pitched, sharp cry may signal pain. A fussy, on-and-off whimper usually means \"I'm tired.\"",
      },
      {
        skill: "Vocal play with sounds",
        description:
          "Your baby experiments with their voice -- squealing, gurgling, and making little noises just for the fun of it.",
        example:
          "During bath time or tummy time, you might hear random squeals and gurgles as your baby discovers what their voice can do.",
      },
    ],
    language: [
      {
        skill: "Startles to loud sounds",
        description:
          "Your baby's hearing is working! They'll jump, blink, or cry when they hear a sudden loud noise. This is a great sign that their hearing system is developing normally.",
        example:
          "If a door slams or a dog barks, your baby might flinch, throw their arms out, or start crying.",
      },
      {
        skill: "Quiets to familiar voices",
        description:
          "Your baby already knows YOUR voice from the womb. When you talk or sing softly, they'll often calm down and become still. This is the very beginning of understanding language.",
        example:
          "When your baby is fussy and you start talking gently, they may stop moving, widen their eyes, or turn toward you.",
      },
      {
        skill: "Recognizes caregiver's voice",
        description:
          "Research shows newborns prefer their mother's voice over other voices from birth. They may turn toward you, brighten their eyes, or become more alert when you speak.",
        example:
          "When dad or grandma is holding the baby and mom starts talking from across the room, baby may turn toward mom's voice.",
      },
    ],
    social: [
      {
        skill: "Makes eye contact",
        description:
          "Your baby starts gazing at faces, especially yours, from very close distances (about 8-12 inches -- roughly the distance from your arms to your face during feeding).",
        example:
          "During feeding, your baby locks eyes with you and seems to study your face intently.",
      },
      {
        skill: "Social smile emerges",
        description:
          "Around 6-8 weeks, you'll see the magical first \"real\" smile -- not gas, but a genuine response to seeing your face or hearing your voice. This is a major social milestone.",
        example:
          "You lean in close, smile and say \"Hi baby!\" and your baby breaks into a wide, gummy grin right back at you.",
      },
      {
        skill: "Calms when picked up or spoken to",
        description:
          "Your baby is learning that people are comforting. When they're upset and you hold them close or talk soothingly, they start to settle. This builds the foundation of trust and communication.",
      },
    ],
    feeding: [
      {
        skill: "Rooting and sucking reflexes",
        description:
          "Your baby automatically turns toward anything that touches their cheek and starts sucking. These reflexes are essential for breast or bottle feeding.",
        example:
          "When you stroke your baby's cheek, they turn toward your finger and open their mouth, ready to feed.",
      },
      {
        skill: "Coordinated suck-swallow-breathe",
        description:
          "By about 1 month, most babies can rhythmically suck, swallow, and breathe during feeding without too much difficulty. This three-part pattern is incredibly complex -- it's one of the first things SLPs assess.",
      },
      {
        skill: "Feeds every 2-3 hours",
        description:
          "Frequent feeding is completely normal at this age. Your baby's stomach is tiny (about the size of a walnut at birth) and they need to eat often.",
      },
    ],
    redFlags: [
      "Does not startle or react to loud sounds at all",
      "No social smile by 2 months (adjusted age for preemies)",
      "Does not seem to recognize your voice or look at faces",
      "Difficulty feeding -- frequent choking, gagging, or taking over 30 minutes per feed",
      "Very stiff body or very floppy body (not the typical newborn curl)",
      "No cooing or vocal sounds by 3 months",
    ],
    parentReassurance:
      "These first 3 months are sometimes called the \"fourth trimester\" -- your baby is still adjusting to the world. Some babies coo at 4 weeks, others not until 10 weeks, and both are perfectly normal. Preemies often hit milestones based on their adjusted age (due date, not birth date), so give them that extra time. Right now, the most important thing you can do is hold, talk to, and respond to your baby. That IS therapy.",
    commonWorries: [
      "My baby doesn't seem to look at me during feeding",
      "Is it normal that my newborn only cries and doesn't make other sounds?",
      "My baby doesn't smile yet -- is something wrong?",
      "My baby seems to ignore some sounds",
    ],
    whatYouCanDo: [
      "Talk to your baby during everyday routines -- narrate diaper changes, describe what you see on walks, tell them about your day. It doesn't matter what you say; your voice is building their brain.",
      "Get face-to-face during calm, alert moments. Hold your baby about 8-12 inches from your face and make exaggerated expressions -- big smiles, wide eyes, raised eyebrows. They're wired to study your face.",
      "When your baby coos or makes any sound, respond! Pause, look at them, and \"answer\" by imitating the sound back. This back-and-forth teaches them that communication is a two-way street.",
    ],
  },

  // ── 4-6 MONTHS ──────────────────────────────────────────────────────
  {
    id: "m-4-6",
    ageRangeLabel: "4-6 months",
    ageMonthsStart: 4,
    ageMonthsEnd: 6,
    speech: [
      {
        skill: "Babbling begins",
        description:
          "This is a big deal! Your baby starts combining consonants and vowels -- \"ba,\" \"da,\" \"ma.\" These aren't words yet, but they're practicing the mouth movements needed for real speech.",
        example:
          "You hear your baby say \"ba ba ba\" or \"da da da\" while playing on the floor. They might seem surprised by their own sounds!",
      },
      {
        skill: "Vocal turn-taking",
        description:
          "Your baby is learning the rhythm of conversation. They'll babble, pause, wait for you to respond, and then babble again. They're practicing how talking works even though they don't have words yet.",
        example:
          "You say \"Oh really? Tell me more!\" and your baby babbles back, then pauses and watches your face, waiting for your next response.",
      },
      {
        skill: "Experiments with volume and pitch",
        description:
          "Expect some LOUD moments! Your baby is discovering they can squeal, yell, growl, and whisper. They're learning to control their voice -- this is all healthy vocal exploration.",
        example:
          "Your baby lets out a shriek in the grocery store that makes everyone turn around. Embarrassing? Maybe. Developmentally appropriate? Absolutely.",
      },
    ],
    language: [
      {
        skill: "Responds to their name",
        description:
          "Around 5-6 months, your baby starts turning to look at you when you say their name. This shows they're connecting a specific sound pattern (their name) to themselves.",
        example:
          "You say your baby's name from behind them and they turn their head to find you.",
      },
      {
        skill: "Looks toward familiar objects when named",
        description:
          "Your baby is starting to understand that words stand for things. When you say \"Where's the dog?\" they may look toward the family pet.",
        example:
          "You say \"Want your bottle?\" and your baby turns to look toward the kitchen or where bottles are usually prepared.",
      },
      {
        skill: "Recognizes familiar words",
        description:
          "Words like \"mama,\" \"daddy,\" \"bottle,\" and \"bye-bye\" start to register. Your baby may not respond consistently yet, but the understanding is building every day.",
      },
    ],
    social: [
      {
        skill: "Laughs and giggles",
        description:
          "Those first belly laughs usually arrive around 4 months, and they are the BEST sound in the world. Laughing shows your baby understands social interaction and finds things funny.",
        example:
          "You play peekaboo and your baby erupts in giggles every time you reveal your face.",
      },
      {
        skill: "Shows interest in other babies",
        description:
          "Your baby starts noticing other children -- staring at them, reaching toward them, or vocalizing when they see another baby.",
        example:
          "At the park, your baby stares at another baby in a stroller and reaches out toward them.",
      },
      {
        skill: "Expresses emotions more clearly",
        description:
          "You can now read your baby's mood more easily. They show clear delight, frustration, boredom, and excitement through facial expressions, body movements, and vocalizations.",
      },
    ],
    feeding: [
      {
        skill: "Shows readiness for solid foods",
        description:
          "Around 6 months, most babies show signs they're ready for purees: good head control, sitting with support, showing interest in your food, and losing the tongue-thrust reflex (pushing food out with their tongue).",
        example:
          "Your baby watches you eat and reaches for your spoon, opens their mouth when food approaches, and can sit upright in a high chair.",
      },
      {
        skill: "Begins purees (around 6 months)",
        description:
          "First foods are exciting! Start with smooth, thin purees -- iron-fortified cereal, pureed fruits or vegetables. One new food at a time, a few days apart, to watch for reactions.",
      },
      {
        skill: "Drinks from a held cup (introduction)",
        description:
          "You can start offering tiny sips of water from an open cup that you hold. It will be messy, and that's fine! Early cup exposure helps with oral motor development.",
      },
    ],
    redFlags: [
      "No babbling at all by 6 months -- only vowel sounds (\"aah\") with no consonants",
      "Does not respond to their name by 6 months (consistently, in a quiet room)",
      "Does not turn toward sounds or voices",
      "No smiling or laughing in social situations",
      "Does not make eye contact or seem interested in people's faces",
      "Difficulty with purees -- gags or chokes frequently on smooth textures",
    ],
    parentReassurance:
      "This age is so fun because your baby is becoming a little person with opinions and reactions. If your baby isn't babbling much yet, that doesn't automatically mean there's a problem -- some babies are quiet observers who are taking it all in before they start producing sounds. Bilingual babies may babble slightly later because they're processing TWO sound systems, but they catch up quickly. Keep talking, keep singing, keep narrating your day.",
    commonWorries: [
      "My 5-month-old isn't babbling yet -- just squealing",
      "My baby doesn't always turn when I say their name",
      "My baby seems more interested in toys than people",
      "We speak two languages at home -- will that confuse my baby?",
    ],
    whatYouCanDo: [
      "Imitate your baby's sounds back to them, then add a little more. If they say \"ba,\" you say \"ba! ba-ba! ball!\" This technique is called \"expansion\" and SLPs use it constantly.",
      "Play peekaboo, pat-a-cake, and other face-to-face games. These are secret language lessons -- they teach turn-taking, anticipation, and social engagement, which are the foundations of conversation.",
      "Narrate what your baby is looking at. If they're staring at the dog, say \"Dog! You see the dog! The dog is big!\" Following their attention and labeling it is one of the most powerful language-building strategies that exists.",
    ],
  },

  // ── 7-9 MONTHS ──────────────────────────────────────────────────────
  {
    id: "m-7-9",
    ageRangeLabel: "7-9 months",
    ageMonthsStart: 7,
    ageMonthsEnd: 9,
    speech: [
      {
        skill: "Varied babbling (reduplicated)",
        description:
          "Your baby strings together different consonant-vowel combinations -- \"ba-da,\" \"ma-na,\" \"da-ga.\" This variety shows their brain is mapping out the different sounds of your language.",
        example:
          "Instead of just \"ba ba ba,\" you now hear mixtures like \"ba-da-ga\" or \"ma-ba-da\" -- it almost sounds like they're speaking another language!",
      },
      {
        skill: "Babbling with sentence-like rhythm",
        description:
          "Your baby's babbling starts to sound like real sentences -- it has the ups and downs (intonation) of actual speech. They're practicing the melody of language before they have the words.",
        example:
          "Your baby babbles \"ba-da-MA-ba?\" with a rising tone at the end, almost like they're asking you a question.",
      },
      {
        skill: "Copies speech sounds you make",
        description:
          "If you say \"ma ma ma,\" your baby may try to imitate you. This imitation is a huge cognitive leap -- they're connecting what they hear with what their mouth can do.",
      },
    ],
    language: [
      {
        skill: "Understands \"no\"",
        description:
          "Your baby starts to pause or stop what they're doing when you say \"no\" (at least sometimes!). They're reading your tone and facial expression as much as the word itself.",
        example:
          "Your baby reaches for the TV remote, you say \"No, not for baby\" in a firm but gentle voice, and they pause and look at you.",
      },
      {
        skill: "Follows your point or gaze",
        description:
          "When you point at something, your baby starts looking where you're pointing instead of just staring at your finger. This is called \"joint attention\" and it's one of the most important predictors of language development.",
        example:
          "You point at an airplane in the sky and say \"Look! Plane!\" and your baby actually looks up at the sky.",
      },
      {
        skill: "Understands common words in context",
        description:
          "Your baby understands more words than you realize -- \"cup,\" \"mommy,\" \"daddy,\" \"bath,\" \"eat.\" They may not respond every time, but comprehension is building fast.",
      },
    ],
    social: [
      {
        skill: "Waves bye-bye",
        description:
          "This gesture is a milestone because it shows your baby understands that hand movements can carry meaning. They're using their body to communicate before they have words.",
        example:
          "When grandma heads for the door, your baby opens and closes their hand in a wave (it might look more like a hand clench at first -- that counts!).",
      },
      {
        skill: "Stranger anxiety appears",
        description:
          "Your baby may suddenly become clingy and cry when unfamiliar people hold them. This is actually a GOOD sign -- it means they've formed a strong attachment to you and can tell the difference between familiar and unfamiliar people.",
      },
      {
        skill: "Plays simple back-and-forth games",
        description:
          "Your baby can now participate in games like rolling a ball back and forth, peekaboo, and \"give me / take it.\" These games teach the back-and-forth rhythm of conversation.",
        example:
          "You roll a ball to your baby. They grab it, giggle, and push it back toward you.",
      },
    ],
    feeding: [
      {
        skill: "Moves to thicker, lumpier purees",
        description:
          "Your baby can handle more texture now -- mashed foods with small soft lumps. This is important! The muscles used for chewing are the same muscles used for speaking.",
        example:
          "Instead of silky-smooth sweet potato puree, your baby can handle mashed sweet potato with small soft chunks.",
      },
      {
        skill: "Begins finger foods (soft dissolvables)",
        description:
          "Soft puffs, small pieces of banana, well-cooked pasta -- your baby is learning to pick up food with their fingers (the \"pincer grasp\" is developing) and move it to their mouth.",
      },
      {
        skill: "Drinks from a sippy or straw cup (with help)",
        description:
          "Introducing a straw cup around this age is great for oral motor development. Straw drinking actually uses the same tongue and lip muscles that are important for speech sounds.",
      },
    ],
    redFlags: [
      "No consonant sounds in babbling by 9 months (only vowels like \"aaa\" and \"eee\")",
      "Does not respond to their name consistently in a quiet room",
      "No back-and-forth babbling or vocal play with you",
      "Does not follow a point or look where you look (no joint attention)",
      "No gestures at all (no waving, reaching, showing)",
      "Extreme difficulty with any textured foods; gags or vomits on anything beyond thin purees",
    ],
    parentReassurance:
      "This is the age where you might start comparing your baby to others -- the neighbor's baby waves, your baby doesn't yet. Please remember: milestones are ranges, not deadlines. A baby who waves at 8 months and one who waves at 11 months are both within normal limits. What matters most is whether your baby is communicating with you in SOME way -- pointing, reaching, babbling, making eye contact. If they're doing those things, the words will come.",
    commonWorries: [
      "My 8-month-old only says \"ba ba\" and nothing else",
      "My baby doesn't wave bye-bye yet",
      "Other babies at daycare seem more talkative than mine",
      "My baby cries with everyone except me -- is that a social problem?",
    ],
    whatYouCanDo: [
      "Respond to ALL of your baby's communication attempts -- babbles, points, reaches, grunts. When they point at the dog, say \"Yes! Dog! Big dog!\" Responding teaches them that communication works and motivates them to do more of it.",
      "Read board books together. At this age, it doesn't matter if you read the actual words -- point at pictures, make animal sounds, let them turn the pages. The goal is shared attention and vocabulary exposure.",
      "Use gestures alongside words. Wave when you say \"bye-bye,\" raise your arms when you say \"up,\" shake your head when you say \"no.\" Pairing gestures with words helps babies learn what words mean.",
    ],
  },

  // ── 10-12 MONTHS ────────────────────────────────────────────────────
  {
    id: "m-10-12",
    ageRangeLabel: "10-12 months",
    ageMonthsStart: 10,
    ageMonthsEnd: 12,
    speech: [
      {
        skill: "First real words emerge",
        description:
          "The moment you've been waiting for! Somewhere around 12 months (give or take), your baby says their first intentional word. It might not sound perfect -- \"ba\" for \"ball\" or \"da\" for \"dog\" -- but if they use the same sound consistently for the same thing, it counts as a word.",
        example:
          "Every time they see the family dog, your baby says \"dah!\" That's a word! It doesn't have to sound like the adult version.",
      },
      {
        skill: "Jargon babbling",
        description:
          "Your baby produces long strings of babble that sound remarkably like real sentences -- with real intonation, pauses, and rhythm. It's like they're giving a speech in a language only they understand.",
        example:
          "Your baby looks at you very seriously and says something like \"da-ba-gee-da-BA!\" with hand gestures, as if making an important point.",
      },
      {
        skill: "Imitates new sounds and words",
        description:
          "Your baby actively tries to copy words they hear you say. They might not get it right, but the attempt matters enormously. This imitation drive is the engine of language learning.",
      },
    ],
    language: [
      {
        skill: "Follows simple directions",
        description:
          "Your baby can understand and follow one-step commands, especially when you use a gesture along with the words.",
        example:
          "You hold out your hand and say \"Give me the ball,\" and your baby places the ball in your hand.",
      },
      {
        skill: "Points to things they want or find interesting",
        description:
          "Pointing is one of the most important communication milestones. There are two types: pointing to REQUEST something (\"I want that cookie\") and pointing to SHARE interest (\"Look at that bird!\"). Both are critical.",
        example:
          "Your baby points at a bird outside the window and looks back at you to make sure you see it too.",
      },
      {
        skill: "Understands 50+ words",
        description:
          "Even if your baby only says 1-3 words, they likely understand 50 or more. Understanding always comes before speaking. If you say \"Where's your shoe?\" and they look at their shoe, that's comprehension.",
      },
    ],
    social: [
      {
        skill: "Shows objects to you",
        description:
          "Your baby picks things up and holds them out for you to see -- not to give them to you, but to share the experience. This \"showing\" behavior is a form of communication that means \"Hey, look at this!\"",
        example:
          "Your baby finds a leaf on the ground, picks it up, and holds it toward you with a big smile.",
      },
      {
        skill: "Looks to you for reactions (social referencing)",
        description:
          "When something new or uncertain happens, your baby checks your face to figure out how to feel about it. If you look happy, they'll approach. If you look worried, they'll hesitate. They're using you as their emotional guide.",
        example:
          "A friendly dog approaches and your baby looks at your face first -- if you smile, they reach toward the dog. If you look nervous, they pull back.",
      },
      {
        skill: "Plays give-and-take games",
        description:
          "Your baby loves handing you things and getting them back. This is practicing the fundamental turn-taking pattern that all conversation is built on.",
      },
    ],
    feeding: [
      {
        skill: "Self-feeds finger foods",
        description:
          "Your baby can pick up small pieces of soft food with their fingers (pincer grasp) and bring them to their mouth independently. This builds the fine motor control that later helps with utensil use.",
        example:
          "Your baby picks up individual Cheerios or small pieces of banana and feeds themselves at the high chair.",
      },
      {
        skill: "Begins to hold a spoon (with help)",
        description:
          "Let them try! They'll mostly bang it on the tray and fling food, but holding the spoon and bringing it to their mouth (even messily) is great practice for coordination.",
      },
      {
        skill: "Wider variety of soft textures",
        description:
          "By 12 months, most babies can handle soft table foods that are cut into small pieces -- cooked vegetables, soft fruits, small pasta, tender meats that are shredded or minced.",
      },
    ],
    redFlags: [
      "No babbling with consonants (still only vowel sounds)",
      "Does not point to things or use any gestures (waving, reaching, showing)",
      "Does not follow simple directions even with gestures",
      "Does not look where you point",
      "Does not seem to understand any common words (\"no,\" \"bottle,\" \"mama\")",
      "Loss of any skills they previously had (this always warrants a call to your pediatrician)",
    ],
    parentReassurance:
      "The first birthday is when \"word pressure\" kicks in -- everyone asks \"How many words does she say?\" Here's the truth from someone who has evaluated thousands of children: some completely typical kids don't say their first word until 14 or 15 months. What matters more at 12 months is whether your baby is COMMUNICATING -- using eye contact, gestures, sounds, and showing things to you. A baby who points, babbles with expression, and understands your words is on track even if they don't have a clear \"mama\" yet.",
    commonWorries: [
      "My 12-month-old doesn't say any real words yet",
      "My baby only says \"mama\" and \"dada\" -- is that enough?",
      "Other kids at the birthday party are saying more words than mine",
      "My baby used to babble a lot but seems quieter now",
    ],
    whatYouCanDo: [
      "Create \"communication temptations\" -- put a favorite toy in sight but out of reach, blow bubbles then pause and wait, eat a snack in front of them without offering. These setups motivate your baby to communicate (point, reach, vocalize) to get what they want.",
      "Label, label, label. Name everything your baby looks at, touches, or points to. Use short, simple phrases: \"Ball! You want the ball. Big ball.\" Research shows that the number of words babies hear directly predicts how many words they'll say later.",
      "Celebrate ALL communication, not just words. If your baby grunts and points at a cracker, say \"Cracker! You want a cracker!\" and give it to them. They just communicated successfully, and that success motivates more communication.",
    ],
  },

  // ── 13-18 MONTHS ────────────────────────────────────────────────────
  {
    id: "m-13-18",
    ageRangeLabel: "13-18 months",
    ageMonthsStart: 13,
    ageMonthsEnd: 18,
    speech: [
      {
        skill: "Vocabulary grows to 10-50 words",
        description:
          "Your toddler is collecting words! By 18 months, most children say somewhere between 10 and 50 words. \"Words\" include animal sounds (\"moo\" for cow), sound effects (\"vroom\" for car), and approximations (\"nana\" for banana).",
        example:
          "Your toddler's vocabulary might include: mama, dada, ball, dog (\"dah\"), more, no, up, bye-bye, hi, baby, banana (\"nana\"), water (\"wa-wa\"), and several animal sounds.",
      },
      {
        skill: "Uses words to request and label",
        description:
          "Words are becoming tools. Your toddler says \"more\" to get more snacks, \"up\" to be picked up, and \"dog\" while pointing at a dog in a book. They're using language for different purposes.",
        example:
          "At the dinner table, your toddler says \"mo!\" (more) and holds up their bowl. They're using a word to make something happen -- that's powerful communication.",
      },
      {
        skill: "Many sounds still unclear",
        description:
          "At this age, your toddler might only be understood about 25% of the time by strangers, and that's perfectly normal. Close family usually understand much more because you know the context.",
      },
    ],
    language: [
      {
        skill: "Follows 1-step directions without gestures",
        description:
          "Your toddler can follow a simple instruction using words alone -- without you pointing or gesturing.",
        example:
          "You say \"Go get your shoes\" (without pointing at the shoes) and your toddler walks to the closet and brings their shoes.",
      },
      {
        skill: "Points to body parts when named",
        description:
          "Ask \"Where's your nose?\" and your toddler points to their nose. This shows they're linking words to specific meanings -- a crucial language skill.",
        example:
          "During bath time, you say \"Where are your toes?\" and your toddler grabs their toes and laughs.",
      },
      {
        skill: "Understands much more than they say",
        description:
          "By 18 months, your toddler likely understands 200+ words even if they only say 20. They know the names of family members, pets, favorite foods, body parts, and common objects.",
      },
    ],
    social: [
      {
        skill: "Uses gestures with words",
        description:
          "Your toddler combines pointing with words -- pointing at the fridge and saying \"juice,\" or waving and saying \"bye.\" Gesture + word combos are a sign that two-word phrases are coming soon.",
        example:
          "Your toddler points at a dog across the street and says \"dah!\" while looking at you -- they're sharing their excitement.",
      },
      {
        skill: "Brings toys to show you",
        description:
          "Your toddler carries toys, books, and random objects to you constantly. This isn't just cute -- it's a sophisticated social behavior where they're initiating shared attention.",
      },
      {
        skill: "Begins pretend play",
        description:
          "Simple pretend play starts appearing -- feeding a doll, talking on a toy phone, stirring a pretend pot. Pretend play is closely linked to language development because both require using symbols (a block becomes a phone, a word becomes a thing).",
        example:
          "Your toddler holds a banana up to their ear like a phone and babbles into it.",
      },
    ],
    feeding: [
      {
        skill: "Uses a spoon (messily)",
        description:
          "Your toddler wants independence! They'll scoop food with a spoon and get at least some of it to their mouth. It will be messy, and that's developmentally appropriate.",
      },
      {
        skill: "Drinks from an open cup with help",
        description:
          "With your help steadying the cup, your toddler can take sips from an open cup. This is great for the lip and tongue control that supports speech development. Many SLPs recommend open cups and straw cups over sippy cups.",
      },
      {
        skill: "Eating a variety of table food textures",
        description:
          "By 18 months, most toddlers can eat a wide range of soft table foods. They're learning to bite, chew, and move food around in their mouth. If your child is stuck on purees, it's worth mentioning to your pediatrician.",
      },
    ],
    redFlags: [
      "Fewer than 5 words by 18 months",
      "Not pointing to request OR share interest",
      "Does not follow simple directions (\"Give me the cup\")",
      "No pretend play (doesn't feed a doll, talk on a toy phone, etc.)",
      "Does not imitate words or actions",
      "Loss of words or skills they used to have",
      "Does not bring or show objects to you",
    ],
    parentReassurance:
      "The 18-month mark is where parents often start to worry, especially if friends' kids are talking more. Here's what I want you to know: there is HUGE variation in what's normal between 13 and 18 months. Some typical 18-month-olds say 5 words, others say 50. What matters most is the trajectory -- are they adding new words over time? Are they understanding language? Are they communicating with gestures and eye contact? If yes, they're likely on their way. If your child speaks two languages, their words may be split between languages -- count ALL the words in ALL languages, and you'll often find they're right on track.",
    commonWorries: [
      "My 18-month-old only says 3 words",
      "My toddler understands everything but won't talk",
      "Should we stop speaking our second language at home to help them talk?",
      "My toddler just points and grunts instead of using words",
      "My friend's baby the same age is already saying sentences",
    ],
    whatYouCanDo: [
      "Use the \"one-up\" rule: if your toddler uses one word, you respond with two. If they say \"ball,\" you say \"big ball\" or \"throw ball.\" This naturally models the next step without overwhelming them. (Never say \"say ball\" -- modeling beats demanding every time.)",
      "Give choices instead of yes/no questions. Instead of \"Do you want juice?\" hold up two options and say \"Juice or milk?\" This gives them a reason to use a word AND a model for what to say.",
      "Read the same favorite books over and over (and over). Repetition is not boring to toddlers -- it's how they learn. By the 15th reading, they'll start filling in words and \"reading\" along with you.",
    ],
  },

  // ── 19-24 MONTHS ────────────────────────────────────────────────────
  {
    id: "m-19-24",
    ageRangeLabel: "19-24 months",
    ageMonthsStart: 19,
    ageMonthsEnd: 24,
    speech: [
      {
        skill: "50-200+ words",
        description:
          "Many toddlers hit a \"word explosion\" somewhere between 18 and 24 months where they suddenly start learning new words every single day. If your child was a slow starter, this is often when things take off.",
        example:
          "One week your toddler says 30 words, and by the next month they seem to have doubled. They're picking up words from books, songs, conversations -- like little sponges.",
      },
      {
        skill: "Two-word combinations begin",
        description:
          "This is a major milestone: your toddler starts putting two words together to make mini-sentences. \"More milk,\" \"Daddy go,\" \"Big truck.\" This means their brain has figured out that you can combine words to create new meanings.",
        example:
          "\"Mommy up\" (pick me up), \"all done\" (I'm finished), \"no bath\" (I don't want a bath), \"more cookie\" (another cookie please).",
      },
      {
        skill: "Strangers understand about 50% of speech",
        description:
          "By 24 months, an unfamiliar person should be able to understand roughly half of what your toddler says. You, as the parent, will understand much more -- and that's normal because you know the context.",
      },
    ],
    language: [
      {
        skill: "Follows 2-step directions",
        description:
          "Your toddler can handle instructions with two parts: \"Get your shoes and bring them to Daddy.\"",
        example:
          "You say \"Pick up the book and put it on the shelf\" and your toddler does both steps (maybe with a brief detour to look at the book first).",
      },
      {
        skill: "Points to pictures in books when named",
        description:
          "When you ask \"Where's the cat?\" while reading, your toddler points to the cat in the picture. They can identify many common objects, animals, and people in pictures.",
      },
      {
        skill: "Understands simple questions",
        description:
          "Your toddler can answer or respond to questions like \"Where's your cup?\" \"Do you want more?\" and \"What's that?\"",
        example:
          "You ask \"Where did Daddy go?\" and your toddler points at the door or says \"work.\"",
      },
    ],
    social: [
      {
        skill: "Plays alongside other children (parallel play)",
        description:
          "Your toddler plays next to other kids but not quite WITH them yet. They might imitate what the other child is doing, though. This parallel play is totally age-appropriate and is the stage before cooperative play.",
        example:
          "At a playdate, both toddlers build with blocks side by side but aren't sharing or taking turns yet.",
      },
      {
        skill: "Shows empathy and concern",
        description:
          "When someone is crying or upset, your toddler may look worried, try to pat them, or bring them a comfort object. The ability to notice and respond to others' emotions is a beautiful social milestone.",
        example:
          "When you bump your knee and say \"ow,\" your toddler toddles over, pats your leg, and says \"okay?\"",
      },
      {
        skill: "Asserts independence (says \"no!\" and \"mine!\")",
        description:
          "The \"terrible twos\" are actually a sign of healthy development. When your toddler says \"No!\" or \"Mine!\" they're testing their independence and using language as a tool. (Deep breaths.)",
      },
    ],
    feeding: [
      {
        skill: "Uses a fork to stab soft foods",
        description:
          "Your toddler can stab soft foods (like cut banana or cooked pasta) with a fork and bring it to their mouth. The coordination is getting better every week.",
      },
      {
        skill: "Drinks well from an open cup",
        description:
          "By 24 months, most toddlers can drink from an open cup with minimal spilling. Speech-language pathologists love open cups because they promote mature oral motor patterns.",
      },
      {
        skill: "Chews a variety of textures",
        description:
          "Your toddler can now handle most table food textures -- soft meats, raw soft fruits, crackers, cheese. They're using a rotary chew (moving food side to side) rather than just an up-and-down munch.",
      },
    ],
    redFlags: [
      "Fewer than 50 words by 24 months",
      "No two-word combinations by 24 months (\"more milk,\" \"daddy go\")",
      "Strangers cannot understand ANY of what your child says",
      "Not following simple 2-step directions",
      "Does not point to pictures in books",
      "Regression -- losing words or skills they previously had",
      "No interest in other children at all",
    ],
    parentReassurance:
      "If your toddler isn't hitting the 50-word mark or combining words yet, you may hear the term \"late talker.\" Here's the nuance: many late talkers DO catch up on their own by age 3, but some don't, and we can't always predict which group your child will fall into. That's why getting an evaluation is always a good idea -- not because something is definitely wrong, but because early support makes a big difference if it IS needed, and it gives you peace of mind if it isn't. An evaluation is not a label. It's information.",
    commonWorries: [
      "My 2-year-old only says about 20 words -- everyone says 'boys talk later'",
      "My toddler talks a lot but I can't understand most of it",
      "Should I be worried that my child isn't putting words together yet?",
      "Is screen time causing my child's speech delay?",
      "My pediatrician said 'wait and see' but my gut says something is off",
    ],
    whatYouCanDo: [
      "If your gut tells you something is off, request a speech-language evaluation. You do NOT need a doctor's referral in most states -- you can self-refer to your local Early Intervention program (before age 3) or contact an SLP directly. Trust your instincts.",
      "Reduce questions, increase comments. Instead of quizzing your toddler (\"What's this? What color? How many?\"), narrate what's happening: \"You're stacking the blocks! Tall tower! Oh no, it fell down!\" Commenting builds language; constant questioning creates pressure.",
      "Build on two-word combinations by modeling three words. If your toddler says \"more juice,\" you say \"Want more juice!\" or \"More apple juice!\" You're showing them the next step naturally.",
    ],
  },

  // ── 25-30 MONTHS ────────────────────────────────────────────────────
  {
    id: "m-25-30",
    ageRangeLabel: "25-30 months",
    ageMonthsStart: 25,
    ageMonthsEnd: 30,
    speech: [
      {
        skill: "200-500 words",
        description:
          "Your toddler's vocabulary is growing fast. They're naming colors, animals, body parts, foods, actions, and even feelings. Words for emotions (\"happy,\" \"sad,\" \"mad\") start appearing.",
        example:
          "Your child can name most common animals, several colors, many foods, body parts, and is starting to use words like \"scared\" or \"happy.\"",
      },
      {
        skill: "Short sentences (2-3 words)",
        description:
          "Two-word combos are old news now -- your toddler is moving toward 3-word phrases. \"I want cookie,\" \"Daddy go work,\" \"Where kitty go?\"",
        example:
          "\"Mommy come here,\" \"I do it,\" \"No want that,\" \"More juice please.\"",
      },
      {
        skill: "Strangers understand about 50-65% of speech",
        description:
          "Intelligibility (how well strangers understand your child) is steadily improving. Close family members should understand most of what they say. Strangers will get about half to two-thirds.",
      },
    ],
    language: [
      {
        skill: "Understands size concepts and basic spatial words",
        description:
          "Your toddler is starting to grasp concepts like big/little, in/on/under, and up/down. These aren't just vocabulary words -- they're thinking skills.",
        example:
          "You say \"Put the ball IN the box\" and they do it correctly. You ask \"Which one is bigger?\" and they point to the big one.",
      },
      {
        skill: "Follows directions with descriptive words",
        description:
          "Your toddler can handle more specific instructions: \"Get the BIG cup\" or \"Find the RED ball.\"",
      },
      {
        skill: "Beginning to understand \"why\" and \"how\" questions",
        description:
          "They might not answer correctly every time, but they're starting to process questions about reasons and methods, not just \"what\" and \"where.\"",
        example:
          "You ask \"Why are you crying?\" and they say \"I fall down\" or \"owie.\"",
      },
    ],
    social: [
      {
        skill: "Starts interactive pretend play",
        description:
          "Play becomes more creative and involves other people -- feeding you pretend food, being a doctor and checking your ears, playing house. This type of play is a major language driver.",
        example:
          "Your toddler says \"You sick. I doctor\" and listens to your chest with a toy stethoscope, then gives you pretend medicine.",
      },
      {
        skill: "Takes turns (with reminders)",
        description:
          "True turn-taking in play is emerging. They can wait briefly for a turn with a toy, especially when reminded. \"Your turn, then my turn.\"",
      },
      {
        skill: "Uses language to negotiate and protest",
        description:
          "Instead of just hitting or crying, your toddler starts using words to express displeasure: \"No! Mine!\" \"I don't want it!\" \"Stop it!\" This is actually progress -- words instead of actions.",
      },
    ],
    feeding: [
      {
        skill: "Uses utensils with increasing skill",
        description:
          "Your toddler is getting better with a spoon and fork. Less food on the floor, more in the mouth. They're developing the same fine motor skills that will later help with writing.",
      },
      {
        skill: "Tries to pour from a small pitcher",
        description:
          "With practice, your toddler can pour from a small, child-sized pitcher into a cup. It's messy at first but builds independence and coordination.",
      },
      {
        skill: "May become picky (this is normal!)",
        description:
          "Picky eating often peaks between ages 2 and 3. Toddlers may reject foods they previously loved. This is a normal developmental phase related to growing independence, not a feeding disorder in most cases.",
      },
    ],
    redFlags: [
      "Not combining words into 2-word phrases",
      "Cannot follow simple 2-step directions",
      "Vocabulary is not growing (seems stuck at the same number of words for months)",
      "Very difficult to understand, even for family members",
      "No pretend play at all",
      "Does not use words to make requests (relies only on gestures, crying, or pulling you to things)",
    ],
    parentReassurance:
      "If you're here because you're on a waitlist for an SLP evaluation, I want you to know: the waiting is the hardest part, and you're doing the right thing by seeking help. While you wait, everything you do at home -- talking, reading, playing, responding to your child's communication -- IS helping. You don't need a therapy room or special toys. Your everyday interactions are the most powerful language-building tool there is.",
    commonWorries: [
      "My child talks a lot but nobody can understand them",
      "My 2.5-year-old still isn't putting words together",
      "Is it normal that my child mixes up pronouns (says 'me go' instead of 'I go')?",
      "My child stutters sometimes -- should I be worried?",
    ],
    whatYouCanDo: [
      "If your child is hard to understand, don't pretend you understood when you didn't. Instead say, \"Show me\" or \"Tell me again\" -- and watch their face and gestures for clues. Honest communication builds trust and teaches them to be a clearer communicator.",
      "Add pretend play to daily routines. Set up a pretend grocery store, play restaurant, or have stuffed animals have a tea party. Narrate the play: \"Bear is hungry! Let's give bear some soup. Yum yum!\" Pretend play is one of the richest contexts for language learning.",
      "Stuttering that comes and goes is very common at this age (called \"normal disfluency\"). Don't tell them to slow down or start over. Just listen patiently, maintain eye contact, and respond to WHAT they said, not HOW they said it. If it lasts longer than 6 months or they seem frustrated, consult an SLP.",
    ],
  },

  // ── 31-36 MONTHS ────────────────────────────────────────────────────
  {
    id: "m-31-36",
    ageRangeLabel: "31-36 months",
    ageMonthsStart: 31,
    ageMonthsEnd: 36,
    speech: [
      {
        skill: "500-1000+ words",
        description:
          "Your child's vocabulary is exploding. They're learning words for feelings, time concepts (\"yesterday,\" though they might use it wrong), and abstract ideas. They're asking the names of everything.",
        example:
          "The constant \"What's that?\" phase is HERE. Your child points at everything and wants a label for it. This is how they're actively building their own dictionary.",
      },
      {
        skill: "3-4 word sentences",
        description:
          "Your child speaks in real sentences now: \"I want more milk,\" \"Daddy went to work,\" \"Where my shoes go?\" Grammar isn't perfect, but the sentence structure is there.",
        example:
          "\"I don't like it,\" \"Mommy is cooking dinner,\" \"Can I have that?\" \"The doggy is sleeping.\"",
      },
      {
        skill: "Strangers understand about 75% of speech",
        description:
          "A stranger should now be able to understand your child most of the time. Some sounds will still be tricky (r, l, s, th are later-developing and NOT expected to be perfect at this age).",
      },
    ],
    language: [
      {
        skill: "Asks \"what\" and \"where\" questions",
        description:
          "Your child is now actively seeking information by asking questions. \"What's that?\" \"Where Daddy go?\" This shows they understand that other people have information they need -- a big cognitive leap.",
        example:
          "\"Where we going?\" \"What that sound?\" \"Where my blankie?\"",
      },
      {
        skill: "Understands \"who,\" \"what,\" and \"where\" questions",
        description:
          "Your child can answer simple questions about their world: \"Who's that?\" (Grandma), \"What are you eating?\" (apple), \"Where's the ball?\" (under the table).",
      },
      {
        skill: "Begins using pronouns (I, me, you, mine)",
        description:
          "Pronouns are tricky! Your child starts using them, but mixing them up is completely normal. \"Me do it\" instead of \"I'll do it\" is typical at this age.",
        example:
          "\"Me want it,\" \"That's mine!\" \"You do it\" -- they'll sort out the grammar over the next year.",
      },
    ],
    social: [
      {
        skill: "Plays cooperatively with other children",
        description:
          "True cooperative play is starting! Your child can play WITH another child -- taking turns, sharing a goal, and building something together (with occasional meltdowns, because they're 2).",
        example:
          "Two children work together to build a block tower, taking turns adding blocks.",
      },
      {
        skill: "Uses language in pretend play scenarios",
        description:
          "Pretend play is more elaborate now -- your child creates little stories and assigns roles: \"You be the baby, I be the mommy.\" This narrative play is a huge indicator of healthy language development.",
      },
      {
        skill: "Expresses feelings with words",
        description:
          "Your child can name basic emotions: \"I'm mad!\" \"I'm scared.\" \"That makes me happy.\" Using words for feelings is one of the most important social-emotional skills.",
      },
    ],
    feeding: [
      {
        skill: "Uses fork and spoon well",
        description:
          "Your child can use utensils to eat most meals with minimal spilling. They may still use fingers for some foods, and that's fine.",
      },
      {
        skill: "Drinks from an open cup independently",
        description:
          "By 3, most children can drink from a regular cup without spilling. Dentists and SLPs both recommend transitioning away from bottles and sippy cups by this age.",
      },
      {
        skill: "Eats most family foods",
        description:
          "Your child should be eating a range of textures including raw fruits and vegetables, chewy meats, and crunchy foods. If they're still very limited in texture acceptance, mention it to your pediatrician.",
      },
    ],
    redFlags: [
      "Strangers cannot understand most of what your child says",
      "Not using 3-word sentences",
      "Does not ask any questions",
      "Cannot answer simple \"what\" or \"where\" questions",
      "Drooling during speech (beyond teething periods)",
      "Does not play with other children at all or shows no interest in peers",
      "Regression in any area -- losing words, skills, or social engagement",
    ],
    parentReassurance:
      "Three-year-olds are hilarious, exhausting, and wildly inconsistent. Your child might use a perfect 5-word sentence one day and grunt and point the next. That's normal. Language development isn't a straight line -- it's more like a staircase with some trips and tumbles. If your child stutters sometimes at this age, it's very common -- their brain is moving faster than their mouth can keep up. Be patient, don't finish their sentences, and give them time.",
    commonWorries: [
      "My 3-year-old still can't say the 'r' sound or 's' sound",
      "My child stutters on the first word of sentences",
      "Other kids at preschool talk in longer sentences than my child",
      "My child talks fine at home but won't talk at daycare or with strangers",
      "My child still uses 'me' instead of 'I'",
    ],
    whatYouCanDo: [
      "Don't correct speech sound errors directly (\"No, it's not 'wabbit,' it's 'rabbit'\"). Instead, just model the correct pronunciation naturally in your response: \"Yes, the rabbit is so fluffy!\" Your child's brain picks up the correct version without feeling criticized.",
      "Ask open-ended questions during play: \"What should we build next?\" \"Where is the bear going?\" \"What happened to the truck?\" These questions require more than a yes/no answer and stretch your child's language.",
      "Tell stories together. Start a story and let your child add parts: \"Once upon a time, there was a big bear, and he went to... where did he go?\" Co-creating stories builds vocabulary, grammar, narrative skills, and creativity all at once.",
    ],
  },

  // ── 37-48 MONTHS ────────────────────────────────────────────────────
  {
    id: "m-37-48",
    ageRangeLabel: "37-48 months (3-4 years)",
    ageMonthsStart: 37,
    ageMonthsEnd: 48,
    speech: [
      {
        skill: "Complex sentences",
        description:
          "Your child is now using sentences with 4-6+ words, connecting ideas with \"and,\" \"because,\" and \"but.\" They're also starting to use past tense (\"I walked\") and plurals (\"dogs\").",
        example:
          "\"I want the blue one because it's my favorite,\" \"We went to the park and I played on the slide,\" \"Can I have a snack but not the cheese one?\"",
      },
      {
        skill: "Tells simple stories",
        description:
          "Your child can recount something that happened -- a trip to the zoo, what happened at school, a favorite TV episode. The story might be jumbled or missing pieces, but the narrative ability is emerging.",
        example:
          "\"We went to Grandma's house and she made cookies and I helped and the dog ate one and Grandma said 'No, doggy!'\" -- a stream of connected events.",
      },
      {
        skill: "Understood by most people",
        description:
          "By 4 years old, your child should be understood about 90-100% of the time, even by strangers. Some sound errors are still normal (r, l, th, s-blends like \"sp\" or \"st\").",
      },
    ],
    language: [
      {
        skill: "Asks \"why\" questions (constantly!)",
        description:
          "The \"why\" phase is legendary. Your child wants to understand how the world works, and they use you as their personal encyclopedia. This is cognitively advanced, even when it's the 47th \"why\" in a row.",
        example:
          "\"Why is the sky blue?\" \"Why do dogs bark?\" \"Why can't I have ice cream for breakfast?\" \"But WHY?\"",
      },
      {
        skill: "Understands comparisons and time concepts",
        description:
          "Your child grasps bigger/smaller, more/less, same/different, and basic time words like \"today,\" \"tomorrow,\" and \"later\" (though they'll mix up yesterday and tomorrow regularly).",
      },
      {
        skill: "Follows multi-step directions reliably",
        description:
          "Your child can handle 2-3 step directions: \"Wash your hands, get a napkin, and sit at the table.\" They might need a reminder partway through, but they can manage the sequence.",
      },
    ],
    social: [
      {
        skill: "Cooperative play with negotiation",
        description:
          "Your child plays WITH other children in organized ways -- building things together, playing house, making up games. They can negotiate roles and rules (with some adult help).",
        example:
          "\"I'll be the firefighter and you be the person who needs help, okay?\" \"Let's take turns -- you go first, then me.\"",
      },
      {
        skill: "Uses language to solve problems",
        description:
          "Instead of immediately hitting or crying, your child is learning to use words: \"Stop, I don't like that!\" \"Can I have a turn?\" \"That's not fair!\" (Words before actions is a huge social milestone.)",
      },
      {
        skill: "Shows awareness of others' feelings",
        description:
          "Your child can identify when someone else is sad, angry, or scared and may try to help: \"Are you okay?\" \"Don't be sad.\" They're developing empathy through language.",
      },
    ],
    feeding: [
      {
        skill: "Independent with utensils",
        description:
          "Your child can eat a full meal using a fork and spoon with minimal spilling. They can cut soft foods with a fork.",
      },
      {
        skill: "Pours from a small pitcher into a cup",
        description:
          "With practice, your child can pour their own water or milk from a child-sized pitcher. This builds independence and fine motor control.",
      },
      {
        skill: "Can handle most food textures",
        description:
          "By age 4, your child should be eating all textures comfortably -- crunchy, chewy, mixed textures, raw vegetables. Picky eating may still be present but shouldn't severely limit food variety.",
      },
    ],
    redFlags: [
      "Cannot be understood by unfamiliar adults most of the time",
      "Not using 4+ word sentences",
      "Cannot tell a simple story or recount an event",
      "Does not ask questions",
      "Cannot follow 2-step directions consistently",
      "Persistent stuttering lasting more than 6 months, with visible tension or struggle",
      "Avoids or cannot play cooperatively with peers",
      "Very limited diet with extreme texture aversion (gags on many foods, only eats a handful of items)",
    ],
    parentReassurance:
      "Between 3 and 4, your child is becoming a real conversationalist. Some kids are chatterboxes who narrate their entire day, and others are quieter, more thoughtful communicators -- both can be perfectly typical. If your child has some speech sound errors at this age (saying \"wabbit\" for \"rabbit\" or \"fum\" for \"thumb\"), that's developmentally normal. The sounds r, l, s, z, sh, ch, j, and th are NOT expected to be mastered until ages 5-8. Anyone who tells you your 3-year-old should say a perfect \"r\" is wrong.",
    commonWorries: [
      "My 3-year-old can't say 'r' or 'l' -- do they need speech therapy?",
      "My child stutters more when they're excited or tired",
      "My child talks nonstop at home but is silent at preschool",
      "Other kids at preschool speak so much more clearly than mine",
      "My child still confuses 'he' and 'she'",
    ],
    whatYouCanDo: [
      "Have real conversations. Ask your child about their day, their opinions, their ideas -- and actually listen. When children feel heard, they talk more. Respond to what they say, ask follow-up questions, and share your own thoughts. Conversation is the #1 language builder at this age.",
      "Play \"I Spy\" and other describing games. \"I spy something round and red\" teaches descriptive language, categories, and problem-solving. Games like 20 Questions and Would You Rather are also fantastic for stretching language skills.",
      "If your child is silent at school but talks fine at home, look into \"selective mutism\" -- a treatable anxiety condition (not shyness or stubbornness). An SLP or child psychologist who specializes in this area can help enormously. The earlier it's addressed, the better the outcome.",
    ],
  },

  // ── 49-60 MONTHS ────────────────────────────────────────────────────
  {
    id: "m-49-60",
    ageRangeLabel: "49-60 months (4-5 years)",
    ageMonthsStart: 49,
    ageMonthsEnd: 60,
    speech: [
      {
        skill: "Full conversations",
        description:
          "Your child can have extended, multi-turn conversations on a topic. They can stay on topic, add new information, ask follow-up questions, and even tell jokes (badly, and they're the best jokes you'll ever hear).",
        example:
          "\"Mom, guess what happened at school today? Liam brought his lizard for show-and-tell and it jumped off the table and Ms. Sarah screamed!\" -- complete with dramatic reenactment.",
      },
      {
        skill: "Complex grammar",
        description:
          "Your child uses past tense, future tense, plurals, possessives, and irregular forms mostly correctly. They might still overgeneralize rules (\"I runned\" instead of \"I ran\" or \"mouses\" instead of \"mice\"), which actually shows they've LEARNED the grammar rule -- they just haven't learned the exceptions yet.",
        example:
          "\"Tomorrow we're going to the store and then we'll get ice cream\" -- future tense, conjunction, and a sequence all in one sentence.",
      },
      {
        skill: "Most speech sounds are clear",
        description:
          "By age 5, your child should be understood virtually 100% of the time. Most speech sounds are mastered, though a few tricky ones (r, th, and some blends like \"str\" or \"spl\") may still be developing.",
      },
    ],
    language: [
      {
        skill: "Pre-literacy skills emerge",
        description:
          "Your child is getting ready to read! They recognize some letters, know that print goes left to right, can identify rhyming words, and might recognize their own written name. These pre-reading skills are closely tied to speech-language development.",
        example:
          "Your child points to a stop sign and says \"That says STOP! S-T-O-P!\" or tells you that \"cat\" and \"hat\" rhyme.",
      },
      {
        skill: "Tells organized stories with a beginning, middle, and end",
        description:
          "Your child's stories now have structure. They can recount events in order, include important details, and even make up fictional stories with characters and a plot.",
        example:
          "\"Once there was a princess and she found a magic rock and it made her fly and she flew to the moon and came back for dinner.\"",
      },
      {
        skill: "Understands humor, sarcasm (basic), and figurative language",
        description:
          "Your child gets jokes, finds things funny on purpose, and is starting to understand that words don't always mean exactly what they say. They love knock-knock jokes and riddles.",
        example:
          "\"Why did the chicken cross the road?\" -- they might not get the joke, but they understand the FORMAT of humor and will make up their own (nonsensical but enthusiastic) versions.",
      },
    ],
    social: [
      {
        skill: "Maintains friendships",
        description:
          "Your child has preferred friends and can maintain friendships over time. They understand that friends have feelings, preferences, and perspectives different from their own.",
      },
      {
        skill: "Understands and follows social rules",
        description:
          "Your child is learning about taking turns in conversation, not interrupting (most of the time), using polite language, and adjusting how they talk depending on who they're speaking to (they talk differently to a baby than to a teacher).",
        example:
          "Your child uses a gentle voice with a baby and a louder, more enthusiastic voice with friends on the playground.",
      },
      {
        skill: "Resolves conflicts with words (most of the time)",
        description:
          "Your child can negotiate, compromise, and use words to solve problems with peers: \"That's not fair, let's take turns,\" \"You can have it when I'm done.\" Physical aggression should be decreasing significantly.",
      },
    ],
    feeding: [
      {
        skill: "Uses a knife to spread and cut soft foods",
        description:
          "Your child can use a child-safe knife to spread butter or jam and cut soft foods like pancakes or bananas. This completes the main utensil skills.",
      },
      {
        skill: "Eating is fully independent",
        description:
          "Your child can eat a complete meal independently with appropriate utensils, drink from a regular cup, and manage most food textures without difficulty.",
      },
      {
        skill: "Can describe food preferences and reasons",
        description:
          "Your child can tell you not just what they like and dislike but WHY: \"I don't like mushrooms because they feel slimy\" -- showing both language skills and sensory awareness.",
      },
    ],
    redFlags: [
      "Cannot be understood by unfamiliar listeners almost all the time",
      "Does not use complete sentences (5+ words)",
      "Cannot retell a simple story or event in order",
      "Does not ask questions or engage in back-and-forth conversation",
      "Cannot follow 3-step directions",
      "No interest in letters, rhyming, or pre-reading activities",
      "Cannot name basic colors, shapes, or count to 5",
      "Persistent difficulty with peer relationships -- unable to play cooperatively or maintain friendships",
      "Persistent stuttering with visible struggle or avoidance of speaking situations",
    ],
    parentReassurance:
      "As your child approaches kindergarten, you might feel pressure about \"school readiness.\" Here's what matters most from a speech-language perspective: Can your child have a conversation? Can they tell you about something that happened? Can they follow multi-step directions? Can they be understood by their teacher? If yes to those, they're in great shape. Perfect pronunciation is NOT required for kindergarten. Some children don't master the \"r\" sound until age 7 or 8, and they do just fine in school. If you have concerns, a quick screening with an SLP before kindergarten can give you peace of mind and catch anything that might need support.",
    commonWorries: [
      "My 5-year-old still can't say 'r' or 'th' -- will they be teased at school?",
      "Is my child ready for kindergarten if their speech isn't perfect?",
      "My child can't sit still and listen to a whole story -- is that a language problem?",
      "My child is a late reader -- is that connected to their speech?",
      "My child makes grammatical errors like 'goed' and 'mouses'",
    ],
    whatYouCanDo: [
      "Play with rhymes and sounds. Sing songs, read rhyming books (Dr. Seuss is perfect), and play games like \"What rhymes with cat?\" or \"What sound does 'ball' start with?\" This phonological awareness is the single best predictor of reading success, and it's a language skill, not just a reading skill.",
      "Encourage storytelling. Ask your child to tell you about their day, make up bedtime stories together, or retell their favorite movie. Story structure -- beginning, middle, end, characters, problem, solution -- is a skill that supports reading comprehension, writing, and social communication.",
      "If your child has persistent speech sound errors that bother them or make them hard to understand, an SLP evaluation before kindergarten is a great idea. Many school districts offer free screenings. Fixing speech sound errors is one of the most well-studied, effective areas of speech therapy -- most kids make great progress in a short time.",
    ],
  },
];
