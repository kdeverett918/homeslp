export interface WaitlistActivity {
  title: string;
  description: string;
  howTo: string;
  example: string;
  estimatedMinutes: number;
  context: "mealtime" | "play" | "bath" | "bedtime" | "anytime";
}

export interface WaitlistWeek {
  weekNumber: number;
  title: string;
  focus: string;
  description: string;
  activities: WaitlistActivity[];
  advocacyTip: string;
  parentAffirmation: string;
}

export interface UrgencySign {
  sign: string;
  whatToSay: string;
  whyUrgent: string;
}

export const waitlistWeeks: WaitlistWeek[] = [
  {
    weekNumber: 1,
    title: "Watch and Learn",
    focus: "Observe your child's current communication",
    description:
      "Before changing anything, spend this week becoming a detective. Notice HOW your child communicates — not just with words, but with sounds, gestures, facial expressions, pointing, pulling your hand, and crying. Every behavior is communication. Write it down. This journal becomes your baseline and a powerful tool when you finally meet the SLP.",
    activities: [
      {
        title: "Communication Journal",
        description:
          "Track everything your child does to communicate throughout the day. Include words, word approximations, gestures, sounds, pointing, leading you by the hand, eye gaze, and even tantrums that seem driven by frustration.",
        howTo:
          "Keep a small notebook or phone note open. Every time your child communicates (any way at all), jot down: what they did, what they seemed to want, and whether it worked. Do this for 5 minutes during 3 different times of day (morning routine, play, meals).",
        example:
          "7:15am — Pulled my hand toward the fridge, made 'uh uh' sounds. Wanted milk. I gave it when he pointed at the milk carton. | 10:00am — Said 'bah' while holding a ball and looking at me. I said 'ball!' and he smiled.",
        estimatedMinutes: 5,
        context: "anytime",
      },
      {
        title: "Follow Their Lead",
        description:
          "Sit on the floor with your child during play and let THEM choose the activity. Your only job is to narrate what they do — no questions, no redirecting, no teaching. Just describe their actions like a sportscaster.",
        howTo:
          "Set a timer for 10 minutes. Sit at their level. Watch what they pick up or do. Narrate using short, simple phrases: 'You got the car. Vroom vroom! You're pushing it. Fast car!' Resist the urge to ask questions or test them.",
        example:
          "Your child picks up blocks. You say: 'Blocks! You got a blue one. Stack it up. One block... two blocks... tall tower!' When it falls: 'Uh oh! It fell down! Crash!'",
        estimatedMinutes: 10,
        context: "play",
      },
      {
        title: "Mealtime Pause Game",
        description:
          "During meals, offer two choices and then WAIT. Give your child 5-10 seconds of silence to attempt any form of communication before you help. The pause is where the magic happens — silence creates a reason to communicate.",
        howTo:
          "Hold up two foods where your child can see them. Say the names clearly: 'Banana or crackers?' Then stop talking. Wait 5 full seconds (count in your head). Accept ANY attempt — a reach, a point, a sound, a look, a word. Then name what they chose: 'Crackers! You want crackers!'",
        example:
          "Hold up banana in one hand, crackers in the other. Say 'banana or crackers?' and wait. Child reaches toward crackers. You say: 'Crackers! Yummy crackers!' and hand them over. You've just practiced requesting and choice-making.",
        estimatedMinutes: 5,
        context: "mealtime",
      },
    ],
    advocacyTip:
      "Call the waitlist clinic today. Ask: 'Can you put us on the cancellation list so we can be seen sooner if someone cancels?' Call weekly — squeaky wheels get seen faster, and it shows the clinic your child's need is real and ongoing.",
    parentAffirmation:
      "Noticing your child's communication patterns is the first step. By paying attention this week, you're already helping them. You don't need a degree to be your child's best language partner.",
  },
  {
    weekNumber: 2,
    title: "Reduce the Questions",
    focus: "Shifting from testing to modeling",
    description:
      "Parents naturally quiz kids: 'What's this? What color? How many?' But for children with language delays, questions create pressure without teaching new words. This week, flip the script. Instead of asking, TELL. Model the language you want to hear. Comments teach; questions test.",
    activities: [
      {
        title: "Comment Instead of Quiz",
        description:
          "Replace questions with comments throughout the day. Instead of 'What's that?' say 'It's a dog! Big dog!' Instead of 'What color is the truck?' say 'Red truck! Beep beep!' This removes pressure and gives your child the words they need.",
        howTo:
          "Pick 3 routines today (getting dressed, playing, a meal). During those times, catch yourself before every question and turn it into a comment. Keep a tally of how many questions you convert. Aim for 80% comments, 20% questions by end of week.",
        example:
          "Instead of: 'What's the doggy doing?' say 'The doggy is running! Run, run, run!' Instead of: 'Can you say ball?' say 'Ball! I see the ball! Big bouncy ball!' Instead of: 'What do you want?' say 'You're pointing at the juice. Juice! You want juice!'",
        estimatedMinutes: 10,
        context: "anytime",
      },
      {
        title: "Self-Talk Narration",
        description:
          "Narrate YOUR OWN actions throughout daily routines. Your child hears language connected to visible actions, which builds comprehension. This is one of the most evidence-based language stimulation strategies used by SLPs.",
        howTo:
          "As you do everyday tasks, describe what YOU are doing in short, clear sentences. Use a warm, slightly exaggerated tone. Emphasize key words. Do this during cooking, cleaning, getting dressed, or any routine your child can see.",
        example:
          "While making lunch: 'Mommy is getting the bread. Open the bag. One piece... two pieces! Now the peanut butter. Scoop it up. Spread, spread, spread. Mmm, smells yummy!' While getting dressed: 'Shirt on! Arms up, over your head. Now pants. One leg, two legs. All dressed!'",
        estimatedMinutes: 10,
        context: "anytime",
      },
      {
        title: "Parallel Talk",
        description:
          "Narrate what your CHILD is doing as they do it. This is different from self-talk — here you describe their actions, connecting words directly to their experience. This builds vocabulary because the words match exactly what they're living in that moment.",
        howTo:
          "Watch your child during play or daily activities. Describe exactly what they're doing in short phrases: 'You're stacking! Up, up, up!' Match your words to their pace — when they move fast, you can too. When they pause, pause with them.",
        example:
          "Child is coloring: 'You're coloring! Round and round. Blue crayon. You're drawing a circle! Big circle.' Child is playing in water: 'Splash! You're splashing the water. Wet hands! Pour it in. More water!'",
        estimatedMinutes: 10,
        context: "play",
      },
    ],
    advocacyTip:
      "Ask your pediatrician to document speech and language concerns in your child's medical chart and write a referral letter. Say: 'I'd like this documented in the chart, and I need a written referral for a speech-language evaluation.' Having it in writing speeds up the process.",
    parentAffirmation:
      "Changing how you talk to your child takes real effort. It feels awkward at first — that's normal. Every time you catch a question and turn it into a comment, you're giving your child a gift. Progress over perfection.",
  },
  {
    weekNumber: 3,
    title: "Routines Are Gold",
    focus: "Building language into daily routines",
    description:
      "Routines are a language therapist's secret weapon. When the same words happen at the same time in the same order every day, children start to predict what comes next — and prediction is the doorway to participation. Once they know the pattern, they can fill in the blanks.",
    activities: [
      {
        title: "Bath Time Script",
        description:
          "Create a predictable bath time routine with the same words and phrases every single night. Repetition is not boring for your child — it's how they learn. After a week of the same script, pause before a key word and see if they fill it in.",
        howTo:
          "Write out 5-6 key phrases for bath time and say them in the same order every night. Use animated expressions and emphasis. After 5-7 nights, start pausing before the last word of each phrase to see if your child fills it in with a sound or word. Never leave your child unattended in or near water, even for a moment.",
        example:
          "Every night: 'Bath time! Water ON! [feel the water] Warm water! Get in the tub. Splash, splash, splash! Get the soap. Wash your tummy. Wash your toes! Rubber ducky — SQUEAK! All done! Water OFF! Towel time — wrap you up!'",
        estimatedMinutes: 15,
        context: "bath",
      },
      {
        title: "Mealtime Choices",
        description:
          "Turn every meal into a structured choice-making opportunity. Hold up two real options, name them, and wait for your child to indicate a preference. This builds requesting skills and gives them a reason to communicate.",
        howTo:
          "Before and during each meal, offer choices of 2 items (foods, drinks, utensils). Hold them up at your child's eye level. Say both names clearly. Wait 5 seconds. Honor whatever communication they give — a point, reach, look, sound, or word. Do this at least 5 times per meal.",
        example:
          "Hold up cup and juice box: 'Cup or juice box?' Wait. Child reaches for cup: 'Cup! You chose the cup!' During eating: 'More banana or more yogurt?' Hold both up. Child looks at yogurt: 'Yogurt! You want more yogurt!' Say 'yoooogurt' slowly to let them hear the word clearly.",
        estimatedMinutes: 10,
        context: "mealtime",
      },
      {
        title: "Bedtime Countdown",
        description:
          "Create a predictable 3-step bedtime sequence that your child can learn to anticipate. When children know what comes next, they feel safe — and that security frees up brain space for language learning. Use the same words every single night.",
        howTo:
          "Pick 3 bedtime steps and announce them the same way each night. Hold up fingers to count. Use a visual schedule if possible (3 pictures in order). Say the same phrases. After a week, pause before the last step and see if your child fills in the routine.",
        example:
          "Every night: 'Three things before sleep! [hold up 3 fingers] Number one: brush teeth! [brush together] Number two: read a book! [read together] Number three: night-night! [lights off, kiss] One... two... three. Night-night!'",
        estimatedMinutes: 15,
        context: "bedtime",
      },
    ],
    advocacyTip:
      "Contact your state's Early Intervention program (for children under 3) or your school district's Child Find program (ages 3-5). You do NOT need a doctor's referral for either. These are free evaluations guaranteed by federal law. Google '[your state] early intervention referral' for the phone number.",
    parentAffirmation:
      "You're building a language-rich environment with routines your child can count on. Consistency isn't boring — it's the scaffold your child needs to start participating with words.",
  },
  {
    weekNumber: 4,
    title: "Play is Therapy",
    focus: "Turning play into language opportunities",
    description:
      "Play is not a break from learning — it IS learning. In fact, every speech therapy session for young children is built around play. This week, learn the specific types of play that create natural opportunities for your child to communicate. The key: create situations where they NEED to say something.",
    activities: [
      {
        title: "Cause-and-Effect Toys",
        description:
          "Use toys where an action causes an exciting result: pop-up toys, ball towers, jack-in-the-box, cars down ramps, bubble machines. The predictable sequence lets you insert language at the key moment — right before the exciting part.",
        howTo:
          "Set up the toy. Do it once to show the exciting result. Then hold the toy and say 'Ready... set...' and PAUSE. Wait for your child to do ANYTHING — a look, a bounce, a vocalization — then say 'GO!' and release the action. Gradually shape their response toward saying 'go.'",
        example:
          "Hold a ball at the top of a ramp. Say 'Ready... set...' then WAIT and look at your child expectantly. They bounce or say 'guh!' — you say 'GO!' and let the ball roll. After 5 turns, they might start anticipating and saying 'go' or 'gah' on their own. Celebrate any attempt!",
        estimatedMinutes: 10,
        context: "play",
      },
      {
        title: "People Games",
        description:
          "Games where YOU are the toy — tickle, chase, peekaboo, swinging, bouncing on your knee. These create intense motivation for your child to request 'more' or 'again' because you control when the fun happens.",
        howTo:
          "Start a physical game your child loves (tickle, chase, peekaboo). Do it 2-3 times with big energy. Then STOP and wait with an expectant face. Hold your hands up ready to go but don't start. Wait 5-10 seconds for ANY communication attempt. Then do it again. You're teaching them that communication makes good things happen.",
        example:
          "Tickle your child's tummy while saying 'Tickle, tickle, tickle!' Stop. Put your hands up, fingers wiggling, big smile. Wait. They might: grab your hands, lean toward you, make a sound, sign 'more,' or say something. ANY of those = 'more tickle!' and you restart. This is requesting in its purest form.",
        estimatedMinutes: 10,
        context: "play",
      },
      {
        title: "Building and Crashing",
        description:
          "Stack blocks, cups, or boxes together — then let your child knock them down. The crash is the reward. The building is the language opportunity. This game naturally produces high-frequency words: 'more,' 'up,' 'uh oh,' 'boom,' 'again.'",
        howTo:
          "Stack 3-5 blocks while narrating: 'Up! Up! Up! More blocks! So tall!' When the tower is tall, pause and look at your child. Say 'Ready to crash?' Wait for any signal. When they push or you push: 'BOOM! Uh oh! It fell! All gone!' Then: 'More? Build again?' Wait for a response before rebuilding.",
        example:
          "Stack blocks: 'One block... up! Two blocks... up! Tall tower!' Pause, look at child. They reach to knock it down — 'BOOM! Crash! Uh oh!' Laugh together. Hold a new block: 'More? More blocks?' Wait. Child reaches or vocalizes. 'More blocks! Let's build again!'",
        estimatedMinutes: 10,
        context: "play",
      },
    ],
    advocacyTip:
      "If you've been on a waitlist for more than 3 months, call back and say: 'I'm calling to check our status. My child is now [age] and we've been waiting since [date]. Is there any way to expedite this or be seen by a different provider?' Ask about university speech clinics — they often have shorter waits and lower costs.",
    parentAffirmation:
      "When you pause and wait for your child to communicate during play, you're doing exactly what an SLP would do in a therapy session. You are your child's most important language partner.",
  },
  {
    weekNumber: 5,
    title: "Expand and Extend",
    focus: "Adding to what your child says",
    description:
      "Now that you've been modeling language for a month, your child may be attempting more sounds or words. This week's focus: take whatever your child gives you and make it slightly bigger. If they say one word, you say two. If they use a gesture, you add the word. This is called expansion, and it's one of the most powerful language-teaching strategies in the research.",
    activities: [
      {
        title: "Add One Word",
        description:
          "When your child says a word (or a word approximation), repeat it and add exactly ONE more word. Don't add three or four — just one. You're showing them the next step without overwhelming them.",
        howTo:
          "Listen for any words or word attempts throughout the day. Immediately respond by repeating what they said and adding one word. Keep your tone warm and encouraging — you're validating their attempt AND showing the next level. Do this every time you catch a word attempt.",
        example:
          "Child says 'ball' → You say 'Big ball!' or 'Throw ball!' or 'Red ball!' Child says 'mama' → You say 'Mama's here!' or 'Hi mama!' Child says 'da' (meaning dog) → You say 'Dog! Big dog!' Child says 'moh' (meaning more) → You say 'More crackers!' or 'Want more!'",
        estimatedMinutes: 5,
        context: "anytime",
      },
      {
        title: "Recast Incorrect Speech",
        description:
          "When your child says something grammatically wrong or unclear, don't correct them — just say it back the right way naturally. This is called recasting. It keeps conversation flowing while still providing the correct model. Never say 'No, say it like this.'",
        howTo:
          "When you hear an error, repeat the idea using correct grammar in a natural, conversational tone. Don't emphasize the correction — just model it casually. The child hears the right version without feeling criticized. Research shows recasting is more effective than direct correction.",
        example:
          "Child says 'Him go!' → You say 'He's going! He's running fast!' Child says 'Me want cookie' → You say 'You want a cookie! Let's get one.' Child says 'Daddy car goed' → You say 'Daddy's car went vroom! It went fast.' Child says 'Foots wet' → You say 'Your feet are wet! Silly wet feet!'",
        estimatedMinutes: 5,
        context: "anytime",
      },
      {
        title: "Choices with New Words",
        description:
          "Offer choices using one familiar word and one new word. This is a low-pressure way to introduce new vocabulary because your child can always fall back on the familiar option, but they're hearing the new word in context multiple times.",
        howTo:
          "During meals, play, or getting dressed, offer a choice where one option uses a word your child already knows and the other introduces a new word. Hold both up, name them clearly, and emphasize the new word with slightly more energy. If they pick the new item, celebrate and repeat the word 3-4 times.",
        example:
          "Your child knows 'crackers' but not 'pretzels': 'Do you want crackers or PRETZELS? Pretzels are crunchy! Crackers or pretzels?' If they point to pretzels: 'Pretzels! You want pretzels! Yummy pretzels!' During play: 'Do you want the car or the HELICOPTER? Helicopter goes up, up, up!'",
        estimatedMinutes: 10,
        context: "anytime",
      },
    ],
    advocacyTip:
      "Ask about teletherapy options. Many SLPs now offer virtual sessions that may have shorter waitlists. For children 2 and older, teletherapy can be effective, especially when a parent is coached in real time. Ask: 'Do you offer teletherapy or parent coaching while we wait for in-person evaluation?'",
    parentAffirmation:
      "You've been at this for over a month. Even if it feels like nothing is changing, your child's brain is absorbing everything. Language development often works like a pot of water — it heats invisibly until suddenly it boils. Keep going.",
  },
  {
    weekNumber: 6,
    title: "Music and Movement",
    focus: "Using songs and movement for language",
    description:
      "Music activates language centers in the brain differently than speech alone. Songs are repetitive, predictable, and emotionally engaging — the perfect combination for language learning. Children who struggle to say words in conversation will often sing them. This week, use music strategically to build language.",
    activities: [
      {
        title: "Fill-in-the-Blank Songs",
        description:
          "Sing familiar songs but pause right before the last word of each line. Let your child fill in the missing word. This works because the melody and rhythm create a strong prediction — their brain knows what word comes next, making it easier to produce.",
        howTo:
          "Choose 3-4 songs your child hears often (Twinkle Twinkle, Wheels on the Bus, Old MacDonald, ABC song). Sing the line normally but stop just before the last word. Look at your child expectantly and wait 5 seconds. Accept any attempt — a sound, a hum, a word approximation. Then finish the word together and keep going.",
        example:
          "Sing: 'Twinkle twinkle little...' [pause, look at child] — they say 'tah!' or 'star!' You say: 'STAR! Twinkle twinkle little star!' Continue: 'How I wonder what you...' [pause] — 'ah!' → 'ARE! What you are!' Wheels on the Bus: 'The wheels on the bus go round and...' [pause] — even a wiggle or hand motion counts!",
        estimatedMinutes: 10,
        context: "anytime",
      },
      {
        title: "Action Songs",
        description:
          "Songs with movements pair words with actions, giving children two ways to learn each word — through sound AND through their body. The physical movement often helps children remember and produce the words later.",
        howTo:
          "Sing action songs 2-3 times daily. Do the motions slowly and exaggerate them. Help your child do the motions hand-over-hand if needed, but don't force it. Over time, they'll start doing the actions independently, and the words often follow the actions.",
        example:
          "Head, Shoulders, Knees, and Toes — touch each body part slowly, name it. If You're Happy and You Know It — clap hands, stomp feet, shout hooray. Itsy Bitsy Spider — finger motions for climbing, rain, and sun. Ring Around the Rosie — 'all fall DOWN!' (kids love the falling part and often start saying 'down!').",
        estimatedMinutes: 10,
        context: "play",
      },
      {
        title: "Silly Routine Songs",
        description:
          "Make up simple songs about everyday routines using familiar tunes. When teeth-brushing or hand-washing has its own song, the routine becomes more predictable and language-rich. Kids learn these fast because the activity anchors the words.",
        howTo:
          "Pick a daily routine that needs a song (diaper change, getting in the car, washing hands). Set simple words to a tune you know (like Twinkle Twinkle or Happy Birthday). Sing the same song every time you do that activity. Keep lyrics simple: 3-5 words per line, lots of repetition.",
        example:
          "Hand washing (to the tune of Happy Birthday): 'We are washing hands now, we are washing hands now, soap and water, scrub scrub scrub, we are washing hands now!' Diaper change (to Twinkle Twinkle): 'Lie down, lie down, little one, diaper change has just begun, wipe and clean and all brand new, fresh and dry just for you!'",
        estimatedMinutes: 5,
        context: "anytime",
      },
    ],
    advocacyTip:
      "Look into your insurance coverage now. Call your insurance company and ask: 'Does my plan cover speech-language therapy for children? Do I need prior authorization? Is there a limit on the number of sessions?' Write down the representative's name and reference number. Being prepared speeds everything up when you finally get the appointment.",
    parentAffirmation:
      "If your child is bobbing, swaying, or attempting any sounds during songs — that's participation. That's communication. Music reaches children in ways that conversation sometimes can't. You're finding another door in.",
  },
  {
    weekNumber: 7,
    title: "Books and Stories",
    focus: "Reading strategies that build language",
    description:
      "Reading books the 'right way' for language development is different from traditional reading. You don't need to read every word on every page. The goal is interaction — making books a conversation, not a performance. This approach is called dialogic reading, and research shows it significantly accelerates vocabulary growth.",
    activities: [
      {
        title: "Interactive Reading",
        description:
          "Let your child control the book experience. They turn pages, point to pictures, and make sounds. Your job is to follow their interest on each page and talk about what THEY notice, not what you think they should notice.",
        howTo:
          "Choose a sturdy book with clear, simple pictures. Let your child hold it and turn pages (even backwards — that's fine). When they pause on a page, point to what they seem to be looking at and name it. Use short phrases: 'A cat! Meow! Soft cat.' If they point, label immediately: 'You see the ball! Red ball!' Don't worry about reading the actual words on the page.",
        example:
          "Child opens to a page with a farm scene. They point at the cow. You say: 'COW! Moo moo! Big cow. The cow is eating. Munch munch.' They turn the page. You follow. They slap the page — 'You see the duck! Quack quack! Yellow duck swimming.' Total time: 5-8 minutes. That's perfect.",
        estimatedMinutes: 10,
        context: "anytime",
      },
      {
        title: "Repetitive Book Routine",
        description:
          "Read the same book every day for a full week. Children need to hear a book 10-15 times before they start 'reading' along. Repetition isn't tedious for them — it's empowering. By day 5, they'll start filling in words and turning pages at the right time.",
        howTo:
          "Pick ONE book with simple, repetitive text (like Brown Bear Brown Bear, Goodnight Moon, or Dear Zoo). Read it at the same time each day (bedtime is great). By day 3-4, start pausing before key words to let your child fill them in. By day 7, let them 'read' it to you — accept any approximation.",
        example:
          "Day 1-2: You read: 'Brown Bear, Brown Bear, what do you see? I see a red bird looking at me.' Day 3-4: 'Brown Bear, Brown Bear, what do you...' [pause] child says 'see!' or 'ee!' Day 5-7: Hand the book to child. They turn pages and say parts: 'Beh beh... wha you see... buh birdie.' Celebrate like they've won a prize.",
        estimatedMinutes: 10,
        context: "bedtime",
      },
      {
        title: "Story Box",
        description:
          "Gather small objects or toys that match a book's characters and act out the story. This moves language from the page into 3D play, making it more concrete and memorable. Children who can act out a story understand it deeply.",
        howTo:
          "Choose a favorite book. Find small toys or objects that match key characters or items in the story (stuffed animals, toy cars, play food, etc.). Put them in a small box or bag. Read the book, then open the box and act it out together. Use the same words from the book during play.",
        example:
          "For 'The Very Hungry Caterpillar': Put a green sock (caterpillar), play food items, and a butterfly toy in a box. Read the book. Then: 'Let's play the story! Here's the caterpillar [put sock on hand]. He's hungry! What did he eat? Apple! Nom nom nom. Still hungry!' Child picks up next food. You narrate.",
        estimatedMinutes: 15,
        context: "play",
      },
    ],
    advocacyTip:
      "If you still haven't been seen, write a formal letter to the clinic. Written complaints move through systems faster than phone calls. Say: 'My child has been on the waitlist since [date] and is now [age]. I am requesting an expedited evaluation due to the ongoing developmental impact of this delay in services.' Send via email with a read receipt.",
    parentAffirmation:
      "Reading with your child — even if they squirm, turn pages backwards, or only last 2 minutes — is building their brain. There is no wrong way to share a book when you're following your child's lead.",
  },
  {
    weekNumber: 8,
    title: "Celebrate and Continue",
    focus: "Reflecting on growth and planning ahead",
    description:
      "You've spent 8 weeks building real skills — observation, modeling, routines, play-based language stimulation, expansion, music, and interactive reading. This week is about recognizing how far you've come, documenting your child's progress, and making a plan to keep going. When that SLP appointment finally comes, you'll walk in prepared and empowered.",
    activities: [
      {
        title: "Compare Your Communication Journals",
        description:
          "Pull out your Week 1 communication journal and compare it to now. How has your child's communication changed? Are there new words, new sounds, more gestures, more intentional communication? Write down every gain, no matter how small.",
        howTo:
          "Sit down with your Week 1 notes and a fresh page. List: (1) new words or sounds since Week 1, (2) new gestures or communication behaviors, (3) situations where they communicate more than before, (4) things YOU do differently now. This document becomes your SLP intake gift — they'll love having this data.",
        example:
          "Week 1: 'Uses 3 words (mama, dada, uh-oh), points sometimes, cries when frustrated.' Week 8: 'Uses 8 word approximations, points to request, looks at me and vocalizes during play, fills in words during songs, makes choices at meals without crying. I now comment instead of quiz and use wait time after questions.'",
        estimatedMinutes: 15,
        context: "anytime",
      },
      {
        title: "Words We Know Poster",
        description:
          "Create a visual celebration of every word, sound, or sign your child uses. Include word approximations (a 'bah' for 'ball' absolutely counts). Display it where your child can see it. This builds confidence for both of you.",
        howTo:
          "Get a large piece of paper or poster board. Write down every word, sound, and sign your child uses consistently. Include the real word AND how they say it. Add small drawings or stickers for each one. Hang it on the fridge or wall. Add to it as new words come. Celebrate: 'Look at all your words!'",
        example:
          "Poster might read: 'mama, dada, bah (ball), moh (more), uh-oh, da (dog), nah-nah (banana), bye-bye, go!, no' — with a sticker or drawing next to each one. Even 5-6 words on a poster looks impressive and meaningful. Point to it daily: 'You know SO many words!'",
        estimatedMinutes: 20,
        context: "anytime",
      },
      {
        title: "Set Goals for Next Month",
        description:
          "Pick 2-3 specific strategies from the past 8 weeks that worked best and commit to continuing them daily. Also set 1-2 language goals for your child based on what you've observed. Having clear goals keeps momentum going even without a therapist.",
        howTo:
          "Review your favorite activities from Weeks 1-7. Pick the 2-3 your child responded to most. Write them down as daily commitments. Then set 1-2 goals: What's the next communication skill you'd like to see? First words? Two-word combos? More consistent requesting? Write these down and put them where you'll see them daily.",
        example:
          "My daily commitments: (1) Follow their lead in play for 10 min with no questions, (2) Offer choices at every meal, (3) Sing fill-in-the-blank songs at bath time. My goals: (1) Increase word approximations from 8 to 12, (2) Start hearing two-word combos like 'more cracker' or 'mama up.'",
        estimatedMinutes: 10,
        context: "anytime",
      },
    ],
    advocacyTip:
      "Prepare your SLP intake packet now so you're ready when the appointment comes. Include: your communication journal, the Words We Know poster, a list of your concerns, what strategies you've tried, and any videos of your child communicating. Walking in prepared means the SLP can skip basic questions and start helping immediately.",
    parentAffirmation:
      "Eight weeks ago, you were anxious on a waitlist feeling helpless. Now you have real skills, real data, and real evidence of your child's growth. You didn't just wait — you worked. You are your child's champion, and that SLP is going to be amazed at what you've already accomplished.",
  },
];

export const urgencySigns: UrgencySign[] = [
  {
    sign: "Loss of previously acquired words or skills",
    whatToSay:
      "My child used to say [specific words] and has stopped speaking entirely. They had approximately [number] words and now use [fewer/none]. This is a regression, not a fluctuation. I need this evaluated urgently — I do not want to wait.",
    whyUrgent:
      "Language regression — the loss of words a child previously used — can indicate a neurological condition, hearing change, or autism spectrum disorder. Any loss of skills at any age warrants immediate evaluation, not a wait-and-see approach. Time matters.",
  },
  {
    sign: "No babbling (consonant sounds like 'ba,' 'da,' 'ma') by 9 months",
    whatToSay:
      "My child is [age] months old and is not babbling. They don't make consonant-vowel combinations like 'bababa,' 'mamama,' or 'dadada.' I rarely hear varied sounds from them. I'd like a hearing test and a speech-language referral.",
    whyUrgent:
      "Babbling (strings of consonant-vowel syllables) is a critical precursor to first words. Its absence by 9 months may indicate hearing loss, oral motor difficulty, or a broader developmental concern. Early identification leads to significantly better outcomes.",
  },
  {
    sign: "No words by 15 months",
    whatToSay:
      "My child is [age] months old and does not say any real words — not even 'mama' or 'dada' used meaningfully. I don't want to 'wait until 2' because research shows earlier intervention leads to better outcomes. I'd like a referral now.",
    whyUrgent:
      "While there is natural variation in when first words appear, the absence of any words by 15 months is a clinical red flag. The outdated advice to 'wait until age 2' can result in months of lost intervention time during a critical brain development window.",
  },
  {
    sign: "No two-word combinations by 24 months",
    whatToSay:
      "My child is [age] months old and is not putting two words together yet. They have about [number] single words but don't combine them into phrases like 'more milk,' 'daddy go,' or 'want that.' I'd like a language evaluation.",
    whyUrgent:
      "By 24 months, children should be combining two words regularly. This milestone requires having at least 50 single words first. If a child isn't combining by 24 months, they may need support with expressive language development. Early support can prevent the gap from widening.",
  },
  {
    sign: "Does not respond to name consistently",
    whatToSay:
      "My child does not turn to look at me when I say their name, even in quiet settings when they're not distracted. This has been consistent. I'd like a hearing screening and a developmental evaluation, including an autism screening.",
    whyUrgent:
      "Consistent name response develops by 9-12 months. If a child does not reliably respond to their name after 12 months, it may indicate hearing loss, an auditory processing difference, or a social communication difference such as autism. A hearing test should be the first step.",
  },
  {
    sign: "Frequent meltdowns driven by communication frustration",
    whatToSay:
      "My child has intense, frequent meltdowns that seem directly related to not being able to tell me what they want or need. These happen [number] times per day and are getting worse. I believe a communication evaluation could help us reduce these behaviors by giving them better tools to express themselves.",
    whyUrgent:
      "When children cannot communicate their needs effectively, frustration builds and often manifests as tantrums, aggression, or withdrawal. These are not behavior problems — they are communication problems. Addressing the underlying language gap typically reduces the challenging behaviors significantly.",
  },
];
