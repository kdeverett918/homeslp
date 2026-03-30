export interface HomeActivity {
  title: string;
  howTo: string;
  example: string;
  frequency: string;
}

export interface CarryoverGoal {
  id: string;
  goalArea: string;
  description: string;
  whyItMatters: string;
  homeActivities: HomeActivity[];
  slpCommunicationTip: string;
  trackingPrompts: string[];
}

export interface SessionTip {
  scenario: string;
  whatToAsk: string;
  whyItHelps: string;
}

export const carryoverGoals: CarryoverGoal[] = [
  {
    id: "first-words",
    goalArea: "First Words",
    description:
      "Building your child's initial spoken vocabulary — helping them move from sounds and gestures to intentional, meaningful words. This is about making words functional and motivating, not memorizing labels.",
    whyItMatters:
      "First words are the foundation of all future language. Children typically need many repetitions in meaningful contexts — often dozens of times or more — before they use a word. Your role at home is to provide those repetitions naturally throughout the day, especially around things your child is already interested in.",
    homeActivities: [
      {
        title: "Target Word Bombardment",
        howTo:
          "Pick 3-5 words your SLP is targeting. Use those words as many times as possible during natural routines — aim for 20+ repetitions per word per day. Don't ask your child to say the word; just let them hear it over and over in context.",
        example:
          "If the target word is 'up': 'Arms UP! Pick you UP! The ball went UP! Let's go UP the stairs. Up, up, up! Can you climb UP? The airplane flies UP!'",
        frequency: "daily",
      },
      {
        title: "First Word Jar",
        howTo:
          "Put small objects or pictures representing target words in a jar or bag. Let your child pull one out. Name it with excitement, play with it for 30 seconds using the word repeatedly, then put it back and draw another.",
        example:
          "Child pulls out a toy car: 'CAR! You got a car! Vroom vroom car! Push the car! Fast car, go go go!' Play with it, then put it back. Next pull: a ball. 'BALL! Bounce the ball! Catch the ball!'",
        frequency: "3x/week",
      },
      {
        title: "Environmental Sabotage",
        howTo:
          "Intentionally set up situations where your child NEEDS to use a word. Put a favorite toy in sight but out of reach. Give them a closed container they can't open. Offer a snack in a sealed bag. Then wait — they need to communicate to get what they want.",
        example:
          "Put their favorite crackers in a clear container they can't open. When they bring it to you, model: 'Open! You want me to OPEN it.' Wait 3 seconds. If they attempt any sound or gesture, open it immediately and celebrate: 'You asked me to open it! Here you go!'",
        frequency: "daily",
      },
      {
        title: "Bedtime Word Review",
        howTo:
          "Before bed, look at 3-4 photos from the day (or just talk about the day) and use target words one more time. This 'sleeping on it' effect helps consolidate new vocabulary in the brain.",
        example:
          "At bedtime: 'Today we played with the BALL! You threw the ball to Daddy. And at lunch you had banana — BANANA! And we saw a DOG on our walk. Big dog! Night-night, sweet dreams about balls and dogs and bananas.'",
        frequency: "daily",
      },
    ],
    slpCommunicationTip:
      "Ask your SLP: 'Which 3-5 words should we focus on this week? Can you write them down for me so I can bombard at home?' Also ask which words your child is closest to saying — those are the best targets.",
    trackingPrompts: [
      "Which target words did your child attempt this week?",
      "In what situations did they try to use a word? (requesting, labeling, greeting?)",
      "How did they say it? (whole word, approximation, first sound only?)",
      "Did any new words pop up that weren't on the target list?",
    ],
  },
  {
    id: "following-directions",
    goalArea: "Following Directions",
    description:
      "Helping your child understand and respond to spoken instructions — from simple one-step commands to multi-step directions. This is about receptive language: what your child understands, not what they say.",
    whyItMatters:
      "Understanding language always comes before using it. If your child struggles to follow directions, it may not be defiance — they may genuinely not understand the words. Building comprehension creates the foundation for everything else: following classroom instructions, staying safe, and eventually using those same words expressively.",
    homeActivities: [
      {
        title: "One-Step Direction Drills (Disguised as Play)",
        howTo:
          "During play, give simple one-step directions that involve fun actions. Start with directions that have clear visual cues (pointing, gesturing). Gradually reduce the gestures so your child relies more on the words alone.",
        example:
          "During play with stuffed animals: 'Kiss the bear! [model kiss] Now hug the bear! Put the bear in the box. Give me the bear.' During art: 'Get the red crayon. Draw a circle. Put the cap on.' Start with pointing at the object, then try without pointing.",
        frequency: "daily",
      },
      {
        title: "Silly Simon Says",
        howTo:
          "Play a simplified version of Simon Says using actions your child knows. Make it silly and fun so they want to keep playing. No elimination — just do the actions together. Gradually increase complexity from one action to two.",
        example:
          "Start simple: 'Touch your nose! Stomp your feet! Clap your hands!' Make it silly: 'Put the sock on your head! Kiss your knee! Tickle your elbow!' Level up: 'Touch your nose AND stomp your feet!'",
        frequency: "3x/week",
      },
      {
        title: "Routine-Based Directions",
        howTo:
          "During daily routines (getting dressed, cleaning up, setting the table), give specific directions instead of doing things for your child. Start with one step, then chain two steps together. Always pause and give them time to process (3-5 seconds).",
        example:
          "Getting dressed: 'Get your shoes. [wait] Now put them on.' Clean-up: 'Pick up the blocks. [wait] Put them in the bin.' Setting table: 'Get a plate. [wait] Put it on the table.' Gradually chain: 'Get your shoes AND your jacket.'",
        frequency: "during routines",
      },
    ],
    slpCommunicationTip:
      "Ask your SLP: 'How many steps should the directions be right now — one step or two? Should I use gestures with the words, or is my child ready to follow verbal-only directions?' This tells you exactly what level to practice at home.",
    trackingPrompts: [
      "Can your child follow one-step directions without gestures?",
      "Can they follow two-step directions? (e.g., 'Get the ball and bring it to me')",
      "Do they need you to repeat directions? How many times?",
      "Are there specific concepts they struggle with? (on/in/under, big/little, etc.)",
    ],
  },
  {
    id: "articulation",
    goalArea: "Articulation (Sound Practice)",
    description:
      "Practicing specific speech sounds your child is working on in therapy — helping them say sounds more clearly so others can understand them. Your SLP will tell you exactly which sounds to target.",
    whyItMatters:
      "Speech sound development follows a predictable sequence, but some children need extra practice to master certain sounds. Home practice is critical because children need hundreds of correct repetitions to build new motor patterns. Five minutes of practice daily at home can be more impactful than weekly therapy alone.",
    homeActivities: [
      {
        title: "Sound Scavenger Hunt",
        howTo:
          "Walk around the house (or look through a picture book) and find items that start with your child's target sound. Name each one together, emphasizing the target sound slightly. Make it a game: 'Let's find everything that starts with /s/!'",
        example:
          "For the /s/ sound: 'Look, a SOCK! Ssssock. And there's the SINK! Sssssink. A SPOON! Ssssspoon. Let's find more! Oh, SOAP! Sssssoap!' Keep it fun and enthusiastic. If they say the sound wrong, just model it correctly — don't say 'No, try again.'",
        frequency: "3x/week",
      },
      {
        title: "Mirror Practice",
        howTo:
          "Sit together in front of a mirror for 3-5 minutes. Practice the target sound together so your child can see how your mouth moves AND how their mouth moves. Start with the sound alone, then in simple words. Keep it short and positive.",
        example:
          "For /f/ sound: 'Let's make the /f/ sound together. Watch — my teeth go on my lip. Fffff. You try! Great, I can see your teeth! Now let's try: fish. Fffff-ish. Fan. Fffff-an. Foot. Fffff-oot.' Give high fives between each word.",
        frequency: "daily, 3-5 minutes",
      },
      {
        title: "Target Sound Reading",
        howTo:
          "When reading books, pause on words that contain your child's target sound. Say the word slowly, stretching out the target sound, and let your child try it after you. Choose books that naturally have lots of the target sound.",
        example:
          "For /b/ sound, read books about bears, balls, babies, buses. When you reach a /b/ word: 'Look — a BIG BEAR! Bbb-ear. Can you say bear? BBBear! Yes! And he has a BALL! Bbb-all. Nice /b/ sound!'",
        frequency: "during reading time",
      },
      {
        title: "Sound of the Day Game",
        howTo:
          "Pick your child's target sound as the 'sound of the day.' Throughout the day, whenever you or your child notices something with that sound, point it out and practice it together. Give a special sticker or stamp on their hand each time they try.",
        example:
          "Today's sound is /k/: At breakfast — 'CUP! /k/ word! Stamp!' During play — 'CAR! Another /k/ word!' At the store — 'CART! /k/ word — stamp!' Count how many /k/ words you found together at the end of the day.",
        frequency: "2x/week",
      },
    ],
    slpCommunicationTip:
      "Ask your SLP: 'Which sounds should I practice at home and at what level — in isolation, in words, in sentences, or in conversation? How should I correct errors — should I model it back or ask them to try again?' Different sounds at different stages need different approaches.",
    trackingPrompts: [
      "Which sounds did you practice this week?",
      "Can your child say the sound by itself? In words? In sentences?",
      "Does accuracy change when they're tired, excited, or talking fast?",
      "Are there specific words where the sound is easier or harder?",
    ],
  },
  {
    id: "two-word-combos",
    goalArea: "Two-Word Combinations",
    description:
      "Helping your child move from single words to two-word phrases — the critical leap from labeling to real communication. Two-word combos like 'more milk,' 'daddy go,' and 'big truck' are the building blocks of sentences.",
    whyItMatters:
      "The jump from one word to two words is one of the biggest milestones in language development. It means your child is starting to combine ideas, not just label things. Children typically need about 50 single words before they start combining, and they need to hear two-word models constantly to learn the patterns.",
    homeActivities: [
      {
        title: "Two-Word Model Flooding",
        howTo:
          "Throughout the day, speak in two-word phrases to match the level your child is working toward. Instead of long sentences, drop down to their level: 'Push car,' 'Big dog,' 'Want more?' 'Shoes on,' 'All done.' This shows them exactly what the next step looks like.",
        example:
          "At meals: 'Want banana? More milk? All done? Yummy food!' During play: 'Push car. Fast car! Red block. Stack up. Uh oh, fall down!' Getting dressed: 'Shirt on. Arms up. Socks on. Shoes on. All ready!'",
        frequency: "daily",
      },
      {
        title: "Expansion Every Time",
        howTo:
          "Every time your child says a single word, immediately add one word to make it a two-word phrase. Don't ask them to repeat your model — just provide it. Over time, they'll start imitating the longer version on their own.",
        example:
          "Child says 'milk' → You say 'More milk!' or 'Want milk!' Child says 'car' → You say 'Push car!' or 'Fast car!' Child says 'mama' → You say 'Mama up!' or 'Hi mama!' Child says 'no' → You say 'No bath!' or 'No more!'",
        frequency: "daily",
      },
      {
        title: "Choice Phrases",
        howTo:
          "Offer choices where both options are two-word phrases. This exposes your child to the phrase structure and motivates them to attempt the longer form to get what they want.",
        example:
          "Instead of 'What do you want?' say: 'Want BLUE cup or RED cup?' or 'Big ball or little ball?' or 'Push car or throw ball?' If they say one word ('blue'), expand: 'BLUE CUP! Great choice!'",
        frequency: "during meals, during play",
      },
    ],
    slpCommunicationTip:
      "Ask your SLP: 'What types of two-word combinations should we target first — action + object (push car), descriptive (big ball), or requesting (more cracker)? Which combinations is my child closest to producing?' Your SLP can prioritize the combinations that match your child's current vocabulary.",
    trackingPrompts: [
      "Has your child put any two words together this week? What did they say?",
      "What single words does your child use most? (These are good candidates for combining)",
      "Do they imitate two-word phrases when you model them?",
      "How many single words does your child have now? (50+ usually means ready for combos)",
    ],
  },
  {
    id: "answering-questions",
    goalArea: "Answering Questions",
    description:
      "Teaching your child to respond to different types of questions — starting with yes/no and 'what' questions, then building to 'who,' 'where,' and eventually 'why' and 'when.' This is harder than it seems because it requires both understanding the question AND generating a response.",
    whyItMatters:
      "Being able to answer questions is essential for conversation, social interaction, and school readiness. Many children with language delays understand more than they can express, so they may know the answer but struggle to produce it. Others may not yet understand question words. Knowing which type your child struggles with helps you target the right skill.",
    homeActivities: [
      {
        title: "Forced-Choice Questions First",
        howTo:
          "Before asking open-ended questions, start with choices. Instead of 'What do you want?' say 'Do you want crackers or apple?' This gives your child the answer within the question, reducing the demand while still practicing the skill of responding.",
        example:
          "Instead of 'What should we read?' → 'Do you want THIS book or THIS book?' Instead of 'What do you want to drink?' → 'Milk or juice?' Instead of 'Who's that?' → 'Is that Grandma or Daddy?' Gradually fade the choices as they get better.",
        frequency: "daily",
      },
      {
        title: "What's In the Bag?",
        howTo:
          "Put familiar objects in an opaque bag. Pull one out, show it, name it: 'It's a ball!' Put it back. Then ask: 'What was in the bag?' They just heard the answer, so the demand is lower. Gradually increase the delay between showing and asking.",
        example:
          "Show the ball, hide it: 'What's in the bag?' Child says 'ball' → 'YES! A ball!' Next: show a car, hide it. 'What's in the bag?' 'Car!' Level up: put 2-3 items in, pull each one: 'What's in the bag? What ELSE?'",
        frequency: "3x/week",
      },
      {
        title: "Real-Life Where Questions",
        howTo:
          "During daily routines, ask 'where' questions about things your child can point to or see. Start with visible answers: 'Where's your cup?' (it's on the table in front of them). Then move to less visible: 'Where are your shoes?' (in the closet).",
        example:
          "During play: 'Where's the ball? [it's right there] You found it — under the chair!' At home: 'Where's the cat? Let's find the cat! Where did she go? THERE she is — on the couch!' Outside: 'Where's the bird? [child points up] UP in the tree!'",
        frequency: "daily",
      },
    ],
    slpCommunicationTip:
      "Ask your SLP: 'What types of questions should I focus on at home — yes/no, what, where, who, or why? Does my child struggle more with understanding the question or with formulating the answer?' This distinction changes how you practice.",
    trackingPrompts: [
      "Can your child answer yes/no questions accurately?",
      "Can they respond to 'what' questions about objects they can see?",
      "Can they answer 'where' questions?",
      "Do they need choices in the question, or can they generate answers independently?",
    ],
  },
  {
    id: "social-communication",
    goalArea: "Social Communication",
    description:
      "Building the social foundations of communication — eye contact, joint attention (sharing focus on an object with someone), turn-taking, and using communication to connect with others, not just to get things.",
    whyItMatters:
      "Language isn't just about words — it's about connection. Joint attention (the ability to share focus between a person and an object or event) is one of the strongest predictors of language development. If a child can look at you, look at a toy, and look back at you to share the experience, they have the social foundation that words are built on.",
    homeActivities: [
      {
        title: "Face-to-Face Play",
        howTo:
          "Get at your child's eye level during play. Position yourself across from them, not beside them. When they look at you — even briefly — respond immediately with a big smile, a word, or an action. You're reinforcing that looking at people's faces leads to good things.",
        example:
          "Sit across from your child during block play. When they look up at you (even accidentally), immediately: 'Hi! I see you! Let's build!' Put a block on their tower. Blow bubbles at face level — they naturally look toward your face to see where the bubbles come from.",
        frequency: "daily",
      },
      {
        title: "Point and Share",
        howTo:
          "Throughout the day, point to interesting things and react with excitement. You're modeling joint attention — the act of directing someone else's attention to share an experience. When your child points at something, always respond by looking, naming, and reacting.",
        example:
          "On a walk: 'Look! [point] A big truck! Wow!' At the window: 'Look! [point] A bird! Tweet tweet!' When your CHILD points: drop everything, look where they're pointing, and name it with enthusiasm: 'You see the airplane! Way up high! Good pointing!'",
        frequency: "daily",
      },
      {
        title: "Turn-Taking Games",
        howTo:
          "Play simple games that require taking turns. Start with very short turns (roll a ball back and forth) and narrate: 'My turn... YOUR turn!' Use a clear, predictable structure so your child learns to wait for and anticipate their turn.",
        example:
          "Roll a ball: 'My turn — roll! Now YOUR turn!' Stack blocks: 'Mommy's block... [child's name]'s block... Mommy's block...' Take turns putting food in a toy mouth: 'My turn to feed bear, your turn!' Any back-and-forth pattern counts.",
        frequency: "daily",
      },
    ],
    slpCommunicationTip:
      "Ask your SLP: 'How is my child's joint attention? Can they share focus between an object and a person? Are there specific social communication goals I should work on at home — like responding to greetings, initiating interaction, or taking turns?' These skills are as important as vocabulary.",
    trackingPrompts: [
      "Does your child make eye contact during interactions?",
      "Do they point to show you things (not just to request)?",
      "Can they take turns during simple games?",
      "Do they look at you to share excitement or surprise?",
    ],
  },
  {
    id: "requesting",
    goalArea: "Requesting",
    description:
      "Teaching your child to ask for what they want or need using words, signs, gestures, or a communication device — instead of crying, screaming, or grabbing. This is often the first functional use of language children learn.",
    whyItMatters:
      "Requesting is the most motivating type of communication because your child gets something they want. When children learn that communication works — that making a sound, sign, or word gets them what they need — they're motivated to communicate more. This is the engine that drives all further language development.",
    homeActivities: [
      {
        title: "Controlled Access Setup",
        howTo:
          "Strategically place favorite items where your child can see them but can't reach them independently. On high shelves, in clear containers they can't open, or in zip-lock bags. This creates natural opportunities for them to request help.",
        example:
          "Put favorite snacks in a clear jar on the counter. When your child leads you to it or reaches, model: 'Open! You want me to OPEN it. Open please!' Wait 3 seconds for any attempt, then open it. Over time, they learn that communicating opens the jar.",
        frequency: "daily",
      },
      {
        title: "Small Portions Strategy",
        howTo:
          "Give tiny amounts of food, drink, or materials so your child needs to ask for MORE. Instead of filling the cup, give a sip. Instead of a full serving, give one cracker. Then wait for them to communicate wanting more.",
        example:
          "Give 2 goldfish crackers instead of a bowl. When they want more: 'MORE? You want MORE crackers? More!' Wait for any attempt (sign, sound, word). 'More crackers! Here you go!' Give 2 more. Repeat. This creates 10+ requesting opportunities per snack instead of zero.",
        frequency: "during meals and snacks",
      },
      {
        title: "Preferred Item Choices",
        howTo:
          "Always offer choices between two items rather than asking 'What do you want?' Hold up two real objects at the child's eye level, name each one, and wait for them to indicate a preference through any form of communication.",
        example:
          "Toy time: Hold up car and ball — 'Car or ball? Which one?' Child reaches for car — 'CAR! You want the car!' Drink time: Hold up two cups — 'Blue cup or green cup?' Getting dressed: Hold up two shirts — 'Stripes or stars?'",
        frequency: "daily",
      },
    ],
    slpCommunicationTip:
      "Ask your SLP: 'What should my child be using to request right now — words, signs, gestures, or a picture/device? How long should I wait before helping them? Is there a specific prompt hierarchy I should follow?' Some children need sign language or picture cards as a bridge to spoken words — this is not giving up on speech, it's building a bridge to it.",
    trackingPrompts: [
      "How does your child currently request things? (crying, pointing, words, signs?)",
      "Are they requesting more often than last week?",
      "What items/activities are most motivating for requesting practice?",
      "Are they starting to request without a prompt from you?",
    ],
  },
  {
    id: "vocabulary-building",
    goalArea: "Vocabulary Building",
    description:
      "Expanding your child's understanding and use of words across categories — not just nouns (things), but also verbs (actions), adjectives (descriptors), and social words (hi, bye, please, more, all done).",
    whyItMatters:
      "Children need a balance of word types to build sentences. A child who knows 50 nouns but no verbs can label everything in the room but can't tell you what's happening. Verbs are especially important because they're the glue that holds sentences together: 'push car,' 'throw ball,' 'want cookie' — the verb makes it a phrase.",
    homeActivities: [
      {
        title: "Verb Narration",
        howTo:
          "Throughout the day, emphasize ACTION words when you talk. Instead of just naming objects, describe what's happening with them. Exaggerate the verb and pair it with a physical action when possible.",
        example:
          "Instead of 'Look, a ball!' say 'THROW the ball! CATCH the ball! BOUNCE the ball! KICK the ball! ROLL the ball!' Each action word is paired with doing it. At the park: 'CLIMB up! SLIDE down! SWING high! JUMP off! RUN fast!'",
        frequency: "daily",
      },
      {
        title: "Descriptor Games",
        howTo:
          "During daily activities, highlight descriptive words by comparing two things. Hold up a big thing and a little thing. Show something wet and something dry. Compare hot and cold. Use the same descriptor words across many contexts so your child hears them frequently.",
        example:
          "At bath time: 'Big towel and little towel! Hot water and cold water! Wet hair... now dry hair!' During play: 'Big block and little block. Tall tower! Uh oh, short tower now.' At snack: 'Crunchy cracker. Soft banana. Yummy!'",
        frequency: "3x/week",
      },
      {
        title: "Category Sorting",
        howTo:
          "Gather items from one category (animals, foods, clothes, vehicles) and sort them together. Name each item as you sort. This builds word knowledge by connecting related concepts — children learn words faster when they're organized into groups.",
        example:
          "Grab toy animals: 'These are animals! Dog — woof! Cat — meow! Horse — neigh! Bird — tweet!' Then sort: 'Animals that live on a farm... animals that are pets...' With food: 'These are fruits! Apple, banana, grapes. These are vegetables!'",
        frequency: "2x/week",
      },
    ],
    slpCommunicationTip:
      "Ask your SLP: 'What types of words should we focus on expanding — nouns, verbs, descriptors, or social words? Can you give me a list of the next 10-15 words to target at home?' A good SLP will choose words that are functional, motivating, and appear frequently in your child's daily life.",
    trackingPrompts: [
      "How many words does your child understand? How many do they use?",
      "What word types do they have? (nouns, verbs, adjectives, social words)",
      "Are there categories of words they're missing? (no action words? no descriptors?)",
      "What new words appeared this week?",
    ],
  },
  {
    id: "storytelling",
    goalArea: "Storytelling / Narrative",
    description:
      "Helping your child learn to tell about events, retell stories, and eventually create their own narratives. This starts with sequencing — first, then, last — and builds toward describing experiences with who, what, where, and when details.",
    whyItMatters:
      "Narrative skills are one of the strongest predictors of school success. Children who can tell a simple story or recount what happened during their day use higher-level language skills: sequencing, cause-and-effect, perspective-taking, and vocabulary. These skills begin developing around age 3 and should be intentionally nurtured.",
    homeActivities: [
      {
        title: "Recount the Day",
        howTo:
          "At dinner or bedtime, tell your child about something that happened that day in 3 simple steps: 'First... then... and then!' Show them how to organize a story. Over time, ask THEM to tell you about something using the same structure.",
        example:
          "Parent models: 'Today at the park — FIRST we went on the slide. THEN we played in the sand. AND THEN we saw a puppy!' Later: 'What did we do today? First we...' [pause for child]. 'Then we...' [pause]. 'And then we...' [pause].",
        frequency: "daily at dinner or bedtime",
      },
      {
        title: "Photo Narration",
        howTo:
          "Take 3-4 photos during an outing or activity. Later, show the photos in order and narrate the story together. The photos serve as visual supports that make storytelling much easier for children who struggle to recall and sequence events.",
        example:
          "Take photos at the zoo: (1) entering the gate, (2) seeing the elephants, (3) eating lunch, (4) leaving. At bedtime, show the photos: 'Tell me about the zoo! [show photo 1] First we...' 'Went in!' 'Then we...' [show photo 2] 'Saw elephants!' 'Big elephants! Then what?'",
        frequency: "after outings or events",
      },
      {
        title: "Story Retelling with Props",
        howTo:
          "After reading a familiar book, use toys or props to act it out. Narrate together, taking turns being the characters. This bridges receptive understanding (hearing the story) to expressive language (telling the story).",
        example:
          "After reading 'Goldilocks': Use 3 bowls, 3 stuffed bears. 'Who came to the house? [child holds Goldilocks toy] She tried the FIRST bowl. Was it too hot or too cold? TOO HOT! Then the next bowl...' Let the child fill in the parts they remember.",
        frequency: "2x/week",
      },
    ],
    slpCommunicationTip:
      "Ask your SLP: 'What level of narrative is my child working on — is it labeling events, sequencing two things, or telling a full story? Should I use picture supports or verbal cues? What connector words should they be using (first, then, and, because)?'",
    trackingPrompts: [
      "Can your child tell you about something that happened today?",
      "Do they sequence events (first, then, last)?",
      "Can they retell a familiar story from a book?",
      "Do they include details (who, what, where) or just actions?",
    ],
  },
  {
    id: "feeding-skills",
    goalArea: "Feeding Skills",
    description:
      "Supporting your child's mealtime goals — which may include accepting new textures, improving chewing, reducing gagging, expanding diet variety, or building oral motor skills needed for both eating and speaking.",
    whyItMatters:
      "Feeding and speech share the same muscles. The tongue, lips, jaw, and cheeks that move food around are the same structures that produce speech sounds. Children who have oral motor weakness often show it in both feeding and speech. Additionally, mealtime is a high-stress area for many families, and reducing that stress benefits everyone.",
    homeActivities: [
      {
        title: "Food Chaining",
        howTo:
          "Start with a food your child already eats and make tiny changes to bridge to new foods. Change one property at a time: same shape but different brand, same food but different temperature, same flavor but different texture. Never force — just offer and let them explore.",
        example:
          "If child eats plain Cheerios: Step 1 — try a different brand of plain O-shaped cereal. Step 2 — try honey Cheerios. Step 3 — try O-shaped cereal with a light coating (like yogurt). Step 4 — try a different shape with honey flavor. Each step changes only ONE thing.",
        frequency: "during meals, introduce one new link per week",
      },
      {
        title: "Food Exploration (No Pressure to Eat)",
        howTo:
          "Let your child interact with new foods without any pressure to eat them. They can touch, smell, lick, squish, poke, and play with food. This builds comfort and reduces anxiety. The path to eating is: tolerates on plate → touches → smells → licks → tastes → eats.",
        example:
          "Put a new food on a separate 'exploring plate.' Say: 'You don't have to eat it. Let's just look at it! Can you poke it? What does it feel like? Squishy! Can you smell it? Let's see if it bounces!' Make it scientific and playful. If they lick it, celebrate quietly. Zero pressure.",
        frequency: "daily, one new food exposure",
      },
      {
        title: "Oral Motor Warm-Ups",
        howTo:
          "Before meals (if recommended by your SLP), do simple oral motor exercises to wake up the muscles. These should be fun and quick — silly faces in the mirror, blowing activities, or crunchy snack warm-ups. Always follow your SLP's specific recommendations.",
        example:
          "Blow bubbles for 1 minute (builds lip rounding and breath control). Make funny faces in the mirror: big smile, fishy lips, tongue out, tongue side to side. Blow a cotton ball across the table through a straw. Crunch on a pretzel rod (jaw strengthening). Then transition to the meal.",
        frequency: "before meals, if SLP recommends",
      },
    ],
    slpCommunicationTip:
      "Ask your SLP: 'What textures should we be working toward? Are there specific oral motor exercises I should do at home? How do I respond when my child gags — is that a danger sign or a normal part of learning? Should I use a specific seating position or utensil?' Feeding therapy is very specific — always follow your SLP's plan.",
    trackingPrompts: [
      "How many foods does your child currently eat?",
      "Did they try any new foods this week? What happened?",
      "Is gagging increasing, decreasing, or staying the same?",
      "How is mealtime stress — for your child and for you?",
    ],
  },
  {
    id: "fluency",
    goalArea: "Fluency (Stuttering)",
    description:
      "Supporting your child's smooth speech at home — creating a communication environment that reduces pressure and supports fluency. If your child stutters, your home environment can have a significant impact on their comfort and confidence with speaking.",
    whyItMatters:
      "Stuttering in young children (ages 2-5) is common, and many children outgrow it. However, how the people around them respond matters enormously. A child who feels time pressure, gets interrupted, or sees worried faces when they stutter may develop anxiety about speaking that makes the stuttering worse and more likely to persist.",
    homeActivities: [
      {
        title: "Slow Your Own Speech",
        howTo:
          "Reduce your own speaking rate — not robotically, but gently and naturally. When you slow down, your child feels less time pressure and their fluency often improves. You're not telling THEM to slow down (never do that) — you're modeling a relaxed pace by changing YOUR behavior.",
        example:
          "Instead of rapid-fire: 'Hey-what-do-you-want-for-lunch-we-have-turkey-or-PBJ-hurry-up-we-gotta-go!' Try: 'Hey buddy... [pause] let's think about lunch. [pause] We could have turkey... [pause] or peanut butter. [pause] What sounds good?' Add natural pauses between your phrases.",
        frequency: "daily, especially during conversations",
      },
      {
        title: "Reduce Time Pressure",
        howTo:
          "Give your child extra time to speak without showing impatience. Don't finish their sentences. Don't look away. Don't say 'slow down' or 'take a breath.' Just wait calmly with a warm expression. Eliminating time pressure is the single most impactful thing a parent can do.",
        example:
          "Child: 'I-I-I-I want the... the... the...' Parent: [maintains warm eye contact, nods gently, waits] Child: '...the blue one!' Parent: 'The blue one! Great choice.' Do NOT say: 'Slow down,' 'Take a breath,' 'Start over,' 'Think about what you want to say.' Just wait and listen.",
        frequency: "always",
      },
      {
        title: "Special Talk Time",
        howTo:
          "Set aside 5 minutes of one-on-one time daily where you follow your child's lead, speak slowly, pause frequently, and let them talk without any agenda. No questions, no corrections, no teaching. Just calm, connected, low-pressure conversation or play.",
        example:
          "Sit together with a favorite toy or activity. Narrate slowly: 'You're building with the Legos... [pause] I see a tall tower... [pause] What are you making?' Then wait. If they talk, listen fully. If they stutter, keep your expression calm and wait. When they finish, respond to the content: 'Wow, a castle! That's so cool!'",
        frequency: "daily, 5 minutes",
      },
    ],
    slpCommunicationTip:
      "Ask your SLP: 'Should I acknowledge the stuttering or ignore it? What do I say if my child asks why they get stuck on words? Are there specific things I should avoid doing at home? Is this the type of stuttering that is likely to resolve, or should we be doing direct therapy?' Fluency therapy approaches vary widely — make sure you and your SLP are on the same page.",
    trackingPrompts: [
      "How often does your child stutter — is it happening more or less than before?",
      "Does it happen more in certain situations? (tired, excited, new people?)",
      "Does your child seem aware of or frustrated by the stuttering?",
      "Have you noticed any secondary behaviors? (eye blinking, head nodding, avoiding words?)",
    ],
  },
  {
    id: "play-skills",
    goalArea: "Play Skills",
    description:
      "Building symbolic and imaginative play — the kind of play where a box becomes a boat, a banana becomes a phone, and stuffed animals have conversations. Play isn't just play — it's where children practice the thinking skills that underlie language.",
    whyItMatters:
      "There is a direct, research-proven link between play complexity and language complexity. Children who engage in pretend play are using symbols — one thing representing another — which is exactly what words do (a sound representing a meaning). Building play skills builds the cognitive foundation for language. If your child isn't playing pretend by age 2-3, it may indicate a need for support.",
    homeActivities: [
      {
        title: "Pretend Routines",
        howTo:
          "Act out familiar daily routines with dolls or stuffed animals: feeding, bathing, putting to bed, going to the doctor. Start by modeling it yourself, narrating each step. Then hand the toy to your child and see if they imitate. Don't correct — just model again if needed.",
        example:
          "With a baby doll: 'Baby is hungry! Let's feed baby. Here's the spoon — open wide! Nom nom nom. Yummy! Baby is all done. Let's wipe her face. Now baby is sleepy. Night-night, baby! [tuck doll in a blanket]' Hand the doll to your child: 'Can you feed baby?'",
        frequency: "3x/week",
      },
      {
        title: "Object Substitution",
        howTo:
          "Model using one object as something else — a block as a phone, a box as a car, a blanket as a cape. This is the beginning of symbolic thinking. Start with objects that are similar in shape to the real thing, then gradually make the substitution more abstract.",
        example:
          "Pick up a banana: 'Ring ring! Hello? Oh hi, Grandma! [talk into banana like a phone]' Hand it to child: 'Someone's calling you!' Push a shoebox: 'VROOM! This is my car! Let's drive to the store!' Put a towel around shoulders: 'I'm a superhero! Whoooosh!'",
        frequency: "during play",
      },
      {
        title: "Role Play Scenarios",
        howTo:
          "Set up simple pretend scenarios based on your child's experiences: going to the store, visiting the doctor, cooking dinner, going on a trip. Provide a few props and take on roles together. Narrate everything and add dialogue for the characters.",
        example:
          "Set up a pretend restaurant: plates, play food, a notepad. 'Welcome to our restaurant! I'll be the waiter. What would you like to eat? [child points at play food] Pizza! One pizza, coming right up! [pretend to cook] Here's your pizza! Is it yummy? Would you like more?' Then switch: 'Now YOU be the waiter!'",
        frequency: "2x/week",
      },
    ],
    slpCommunicationTip:
      "Ask your SLP: 'What level of play is my child at right now — are they exploring objects, doing functional play (using toys correctly), or starting pretend play? What's the next play milestone I should be encouraging? Are there specific play activities that connect to their language goals?'",
    trackingPrompts: [
      "Does your child use toys for their intended purpose? (push a car, feed a doll)",
      "Do they pretend? (talking on a toy phone, feeding a stuffed animal)",
      "Can they use one object as something else? (block as a phone)",
      "Do they create scenarios or sequences in play? (cook food, then serve it, then eat it)",
    ],
  },
];

export const sessionTips: SessionTip[] = [
  {
    scenario: "I'm not sure what to practice at home",
    whatToAsk:
      "Can you show me exactly what to do at home? I learn best when I can watch you do it first. Could you also write down 2-3 specific activities with the words I should use? I want to practice, I just need clear instructions.",
    whyItHelps:
      "SLPs want parents to practice at home, and most are happy to demonstrate techniques and write them down. Being specific about needing written instructions and demonstrations lets your SLP tailor the home program to your learning style. There's no shame in needing a clear plan.",
  },
  {
    scenario: "My child does it in therapy but not at home",
    whatToAsk:
      "My child does great in your sessions but doesn't use these skills at home. What can I change about how I'm practicing? Could you watch me interact with my child for a few minutes and coach me in real time? I want to figure out what I'm doing differently.",
    whyItHelps:
      "This is one of the most common issues in speech therapy. The therapy room is structured and has fewer distractions. By asking the SLP to observe YOU, they can give specific, actionable feedback on your interaction style, pacing, and prompting. This is called parent coaching and it's one of the most evidence-based approaches in pediatric speech therapy.",
  },
  {
    scenario: "I'm feeling overwhelmed by the homework",
    whatToAsk:
      "I'm struggling to fit all the home activities into our routine. Can we prioritize? If I can only do ONE thing consistently, what should it be? Also, can we build practice into things I'm already doing (meals, bath, car rides) instead of adding separate practice time?",
    whyItHelps:
      "An effective SLP will respect your real-life constraints and help you integrate practice into existing routines rather than piling on separate activities. Quality matters more than quantity — five minutes of embedded practice during meals is often better than 20 minutes of forced drill that everyone dreads.",
  },
  {
    scenario: "I want to know if we're making progress",
    whatToAsk:
      "Can you help me understand where my child started and where they are now? I'd love to see specific numbers or examples of progress. What should I be looking for at home that tells me things are improving? When should I expect to see changes in everyday communication?",
    whyItHelps:
      "SLPs track progress through standardized goals, but parents don't always see that data. Asking for concrete progress markers helps you understand the trajectory and also helps your SLP articulate gains that might be subtle but significant — like going from 20% accuracy to 50% on a target sound, even though it doesn't sound different to your ear yet.",
  },
  {
    scenario: "I disagree with the therapy approach",
    whatToAsk:
      "I've noticed [specific concern]. Can you help me understand why you're using this approach? I want to make sure we're on the same page. If I have a different perspective, how can we work together to adjust the plan? I'm committed to this but I want to understand the reasoning.",
    whyItHelps:
      "You are part of the therapy team. Good SLPs welcome parent input and can explain their clinical reasoning. If something doesn't feel right — maybe the sessions seem too play-based, or too drill-based, or focused on the wrong goals — you have the right and responsibility to speak up. The best outcomes happen when parents and SLPs collaborate.",
  },
  {
    scenario: "I think we need more frequent sessions",
    whatToAsk:
      "Based on my child's progress, do you think we need more frequent sessions? What would the ideal therapy schedule be for their needs? If insurance limits us, are there things I can do at home to compensate for less frequent sessions? Would a parent coaching model make sense for us?",
    whyItHelps:
      "Therapy frequency matters, and your SLP may agree that more sessions would be beneficial but hasn't brought it up because of insurance constraints. This opens the door for a creative solution — perhaps a mix of direct therapy and parent coaching sessions, or a home program that supplements less frequent therapy.",
  },
  {
    scenario: "My child cries or refuses to participate in therapy",
    whatToAsk:
      "My child seems upset during sessions. Is this a normal adjustment period, or should we try a different approach? What does the warm-up look like? Can I stay in the room or watch through a window? Is there anything I should do (or not do) before sessions to help them transition?",
    whyItHelps:
      "Some resistance is normal, especially in the first few sessions, but persistent distress should be addressed. A good SLP will adapt their approach to the child's temperament and needs. Asking about specific strategies shows you're a partner in the process and helps the SLP understand the full picture.",
  },
  {
    scenario: "I want to understand the goals on the treatment plan",
    whatToAsk:
      "Can you walk me through the treatment goals in plain language? I want to understand what each goal means, why it was chosen, and what 'mastery' looks like for each one. How will I know when a goal is met? And how were these specific goals chosen over other possible ones?",
    whyItHelps:
      "Treatment plans are often written in clinical jargon that parents can't easily interpret. Understanding the goals empowers you to work toward them at home and track progress yourself. It also ensures the goals align with YOUR priorities — if something your child struggles with at home isn't on the plan, this is the time to add it.",
  },
];
