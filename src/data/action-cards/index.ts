export interface ActionCard {
  id: string;
  title: string;
  technique: string;
  example: string;
  parentTip: string;
  ageRangeStart: number;
  ageRangeEnd: number;
  context: "mealtime" | "bath" | "play" | "bedtime" | "errands" | "anytime";
  estimatedMinutes: number;
  path: "child";
}

export const actionCards: ActionCard[] = [
  // ─── MEALTIME (10 cards) ──────────────────────────────────────────────
  {
    id: "ac-meal-01",
    title: "Mystery Bag Snack",
    technique:
      "Put 3 different snacks in a paper bag. Let your child reach in without looking and feel one. Before pulling it out, describe what they might be feeling: crunchy? smooth? squishy?",
    example:
      "Put a cracker, a grape, and a cheese stick in the bag. 'Reach in! What do you feel? Is it squishy? Pull it out... a GRAPE! Squishy grape!'",
    parentTip:
      "This builds descriptive vocabulary (texture words) while keeping snack time exciting. Works best with foods your child already likes.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "mealtime",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-meal-02",
    title: "Dip and Name",
    technique:
      "Offer a dip (ketchup, hummus, yogurt) and require your child to name (or attempt to name) each food before dipping it. The dip is the motivator.",
    example:
      "Hold the hummus cup: 'What are you dipping?' Child holds up a carrot. 'Carrot! Dip the carrot!' Hand over the dip. Repeat for each piece.",
    parentTip:
      "Don't withhold the dip if your child can't say the word -- any attempt counts. A point, a gesture, a sound approximation all earn the dip.",
    ageRangeStart: 14,
    ageRangeEnd: 36,
    context: "mealtime",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-meal-03",
    title: "Cereal Sort",
    technique:
      "Give your child a small handful of multi-colored cereal and sort by color into cups. Name each color as pieces go in. Then eat from their favorite color cup.",
    example:
      "'Red ones in this cup! Put the red ones here. Red, red, red. Now the yellow ones. Yellow! Which cup do you want to eat from?'",
    parentTip:
      "This works with any food that comes in varieties -- goldfish flavors, fruit snacks, mixed berries. Sorting is a pre-academic skill that pairs naturally with language.",
    ageRangeStart: 24,
    ageRangeEnd: 48,
    context: "mealtime",
    estimatedMinutes: 4,
    path: "child",
  },
  {
    id: "ac-meal-04",
    title: "Cook Together Commentary",
    technique:
      "Let your child help with one safe step in cooking (stirring, pouring, tearing lettuce). Narrate the action words: stir, pour, tear, mix, scoop.",
    example:
      "Hand your child a spoon: 'Let's stir! Stir stir stir. Round and round! You're stirring the soup!' Pour together: 'Ready? Pour! You poured the water in!'",
    parentTip:
      "Action words (verbs) are the bridge between single words and two-word phrases. A child who knows 'pour' can soon say 'pour milk' or 'I pour.'",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "mealtime",
    estimatedMinutes: 5,
    path: "child",
  },
  {
    id: "ac-meal-05",
    title: "Napkin Peek",
    technique:
      "Cover a piece of food with a napkin and play peek-a-boo with the food. Name the food when it appears. This keeps young toddlers engaged at the table.",
    example:
      "Cover a strawberry: 'Where's the strawberry? Is it... HERE?' Lift the napkin. 'Peek-a-boo strawberry!' Let your child try hiding food for you.",
    parentTip:
      "This is great for babies 8-16 months who are bored in highchairs. It practices object permanence AND food vocabulary at the same time.",
    ageRangeStart: 8,
    ageRangeEnd: 24,
    context: "mealtime",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-meal-06",
    title: "Pretend Restaurant",
    technique:
      "Let your child 'order' food from you by looking at a simple picture menu (draw 3-4 foods on paper). Take their order and serve it dramatically.",
    example:
      "Draw a pizza, apple, and sandwich. 'Welcome to our restaurant! What would you like?' Child points. 'One pizza, coming right up!' Pretend to cook and serve it.",
    parentTip:
      "This works even before your child can talk -- pointing at the menu IS communication. Gradually they'll start saying the word as they point.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "mealtime",
    estimatedMinutes: 5,
    path: "child",
  },
  {
    id: "ac-meal-07",
    title: "Crunchy or Soft?",
    technique:
      "Before each bite, ask 'Is it crunchy or soft?' and exaggerate the chewing motion for each. This teaches adjective pairs through direct sensory experience.",
    example:
      "Bite a cracker: 'CRUNCH! Crunchy!' Bite a banana: 'Mmmm... soft. So soft.' Hold up the next food: 'Will this be crunchy or soft? Let's find out!' Bite. 'CRUNCHY!'",
    parentTip:
      "Adjective pairs (hot/cold, big/little, crunchy/soft) are easier to learn together than alone because the contrast helps define each word.",
    ageRangeStart: 14,
    ageRangeEnd: 36,
    context: "mealtime",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-meal-08",
    title: "Fruit Face Plate",
    technique:
      "Arrange food on a plate to make a face. Name each body part as you place it: 'blueberry eyes, banana smile, strawberry nose.' Then eat each part.",
    example:
      "Place blueberries: 'Eyes! Two blueberry eyes!' Banana slice: 'A big banana smile!' Your child eats the nose: 'You ate the nose! Where's the nose? All gone!'",
    parentTip:
      "This combines body-part vocabulary with food names in a playful way. Let your child place pieces too and name what they add.",
    ageRangeStart: 14,
    ageRangeEnd: 36,
    context: "mealtime",
    estimatedMinutes: 4,
    path: "child",
  },
  {
    id: "ac-meal-09",
    title: "Stacking Snacks",
    technique:
      "Stack food items (crackers, cucumber slices, cheese cubes) and count as you go. When the tower falls, practice 'uh oh' and 'crash.' Rebuild and recount.",
    example:
      "Stack crackers: 'One... two... three... four...' CRASH! 'Uh oh! It fell! Let's try again. One...' Your child will start counting along or saying 'uh oh.'",
    parentTip:
      "This merges math language with exclamatory words. Even if your child only says 'uh oh' or 'crash,' those are valuable early word productions.",
    ageRangeStart: 12,
    ageRangeEnd: 36,
    context: "mealtime",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-meal-10",
    title: "Taste Test Panel",
    technique:
      "Line up 4 small bites of different foods. Your child tastes each one and you label the reaction: 'yummy,' 'yucky,' 'sour,' 'sweet.' Use dramatic faces.",
    example:
      "Taste lemon: 'SOUR! Pucker face!' Taste honey: 'SWEET! Mmm, sweet!' Taste pickle: 'Sour again! Or yummy?' Accept and label whatever reaction your child gives.",
    parentTip:
      "Taste words are feeling words, and feeling words are some of the most important vocabulary for emotional development. This is language AND sensory exploration.",
    ageRangeStart: 12,
    ageRangeEnd: 42,
    context: "mealtime",
    estimatedMinutes: 3,
    path: "child",
  },

  // ─── BATH (8 cards) ───────────────────────────────────────────────────
  {
    id: "ac-bath-01",
    title: "Color Drops",
    technique:
      "Add a drop of food coloring to bath water and name the color as it spreads. Mix two colors and name the result. This is a magical, memorable vocabulary moment.",
    example:
      "Drop in blue: 'Blue! Watch the blue spread!' Add yellow: 'Now yellow! Blue and yellow make... GREEN! Wow, green water!' Let your child choose the next color.",
    parentTip:
      "Use just 1-2 drops -- it won't stain skin but will stain grout if splashed. Stick to food-grade coloring. The 'wow' factor makes color words unforgettable.",
    ageRangeStart: 14,
    ageRangeEnd: 48,
    context: "bath",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-bath-02",
    title: "Cup Waterfall",
    technique:
      "Stack cups with holes in the bottom (or poke holes in plastic cups). Pour water in the top and narrate: 'pouring, dripping, falling, empty, full.'",
    example:
      "Pour water: 'It's dripping! Drip drip drip! The water is falling down. Now the cup is... empty! Fill it up again? FULL!' Repeat with varying excitement.",
    parentTip:
      "Spatial and state-change words (full/empty, in/out, up/down) are foundational vocabulary. Bath time is the easiest place to teach them because water makes them visible.",
    ageRangeStart: 10,
    ageRangeEnd: 30,
    context: "bath",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-bath-03",
    title: "Bath Painting",
    technique:
      "Give your child a foam brush and let them 'paint' the tub wall with water. Name what they're painting: lines, circles, their name, letters.",
    example:
      "'You're painting a circle! Round and round. Now a line! Up and down. Can you paint a big circle? BIG circle! Wow, that's huge!'",
    parentTip:
      "This works spatial vocabulary (up, down, around, big, little) into a calming sensory activity. Add shaving cream for even more fun (parent-supervised only).",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "bath",
    estimatedMinutes: 4,
    path: "child",
  },
  {
    id: "ac-bath-04",
    title: "Washing Station",
    technique:
      "Give your child a washcloth and a dirty toy. Let them 'wash' the toy while you narrate: 'scrub the feet, wash the tummy, rinse the arms.' They learn body parts on a doll.",
    example:
      "Hand them a soapy cloth and a doll: 'Let's wash baby! Scrub the feet -- clean feet! Now wash baby's tummy. Scrub scrub! Baby is all clean!'",
    parentTip:
      "Children learn body parts faster on dolls/toys than on themselves because they can see the full body at once. This also builds pretend play skills.",
    ageRangeStart: 14,
    ageRangeEnd: 36,
    context: "bath",
    estimatedMinutes: 4,
    path: "child",
  },
  {
    id: "ac-bath-05",
    title: "Rain Shower Cup",
    technique:
      "Poke tiny holes in a cup and hold it up high to make 'rain.' Sing a rain song while the water falls. Let your child hold it and make their own rain.",
    example:
      "Hold up the cup: 'It's raining! Rain rain go away, come again another day!' Hand it to your child: 'YOUR turn! Make rain! Rain is falling on your toes!'",
    parentTip:
      "Pairing songs with actions creates multisensory language moments. The same song every bath time becomes a cue your child can eventually request.",
    ageRangeStart: 8,
    ageRangeEnd: 30,
    context: "bath",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-bath-06",
    title: "Letter Foam Fishing",
    technique:
      "Use foam bath letters. Float a few in the water and name each letter sound as your child grabs it. Focus on the sound, not the letter name.",
    example:
      "Your child grabs 'B': 'B says buh! Buh buh ball! Buh buh baby!' Grab 'M': 'M says mmm! Mmm mmm mama! Mmm mmm milk!' Keep it to 4-5 letters per bath.",
    parentTip:
      "Letter sounds (phonics) matter more than letter names for early reading. But keep it light -- if your child just wants to splash with the letters, let them. Exposure counts.",
    ageRangeStart: 24,
    ageRangeEnd: 60,
    context: "bath",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-bath-07",
    title: "Bubble Beard",
    technique:
      "Put bubbles on your chin like a beard and on your child's nose, cheeks, and head. Name each body part as you decorate with bubbles. Silly = memorable.",
    example:
      "'Bubbles on your NOSE! Bubbles on your CHEEKS! Bubbles on my CHIN -- I'm Santa! Ho ho ho! Where should bubbles go next?'",
    parentTip:
      "Silly, high-energy moments create emotional memories that help vocabulary stick. Children remember words attached to laughter better than words attached to drills.",
    ageRangeStart: 12,
    ageRangeEnd: 36,
    context: "bath",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-bath-08",
    title: "Toy Boat Race",
    technique:
      "Float two toys and blow them across the water. Race them by blowing through straws. Blowing exercises strengthen the muscles used for speech sounds like /f/, /s/, and /sh/.",
    example:
      "Line up a duck and a boat: 'Ready, set, BLOW! Go duck, go! The boat is winning! Blow harder! The duck won!' Let your child choose a racer.",
    parentTip:
      "Blowing through a straw develops oral motor strength. If your child struggles to blow, model it and let them try. Even weak blowing attempts build the right muscles.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "bath",
    estimatedMinutes: 3,
    path: "child",
  },

  // ─── PLAY (15 cards) ──────────────────────────────────────────────────
  {
    id: "ac-play-01",
    title: "Color Hunt",
    technique:
      "Pick one color and race around the house finding things that match. Touch each item and say '[color] [object]!' Make it a game with enthusiasm.",
    example:
      "'Let's find RED things! Red... pillow! Red... cup! Red... shirt! You found red socks! How many red things did we find? Let's count!'",
    parentTip:
      "This builds color words, object names, AND counting in one quick activity. Let your child lead after the first round -- they'll surprise you with what they find.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "play",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-play-02",
    title: "Box Car",
    technique:
      "Put your child in a large cardboard box and push them around the room. Narrate the journey: 'Going fast! Turning left! Stopping! Beep beep!'",
    example:
      "'Vroom vroom! Here we go! Going fast! Whoaaa, turning! Stop! Red light! Green light... GO!' Let your child say 'go' and 'stop' to control the car.",
    parentTip:
      "Giving your child the power to control movement with their words is incredibly motivating. Accept any approximation of 'go' or 'stop' -- even just 'g' or 'tah.'",
    ageRangeStart: 10,
    ageRangeEnd: 36,
    context: "play",
    estimatedMinutes: 5,
    path: "child",
  },
  {
    id: "ac-play-03",
    title: "Freeze Dance",
    technique:
      "Play music and dance. When the music stops, everyone freezes. Practice 'go' and 'stop' in the most physical, embodied way possible.",
    example:
      "Play music: 'Dance dance dance!' Stop it: 'FREEZE! You froze! Like a statue!' Play again: 'Go! Dance!' Your child learns go/stop through whole-body movement.",
    parentTip:
      "This also builds self-regulation skills (impulse control). Start with long music intervals and short freezes for younger kids. Gradually increase freeze time.",
    ageRangeStart: 14,
    ageRangeEnd: 48,
    context: "play",
    estimatedMinutes: 4,
    path: "child",
  },
  {
    id: "ac-play-04",
    title: "Laundry Basket Boat",
    technique:
      "Put your child in a laundry basket and pretend it's a boat. 'Row' together while singing 'Row Row Row Your Boat.' Add sea creatures along the way.",
    example:
      "Sit facing your child, hold hands, and rock: 'Row row row your boat! Oh look, a FISH! Row row row -- a WHALE! Splash!' Add animals as you go.",
    parentTip:
      "Familiar songs with added vocabulary is called 'song expansion.' Your child knows the song, so the new animal words get extra attention from their brain.",
    ageRangeStart: 8,
    ageRangeEnd: 30,
    context: "play",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-play-05",
    title: "Matching Sounds",
    technique:
      "Fill small containers with different items (rice, bells, coins). Shake each one and describe the sound: 'shaky,' 'jingly,' 'clicky.' Make two of each and find the matches.",
    example:
      "Shake a rice container: 'This one goes shh shh shh! Can you find the one that sounds the same?' Your child shakes containers until they find the match.",
    parentTip:
      "Auditory discrimination (telling sounds apart) is a foundational skill for speech sound development. If your child can hear the difference, they can learn to produce the difference.",
    ageRangeStart: 18,
    ageRangeEnd: 42,
    context: "play",
    estimatedMinutes: 5,
    path: "child",
  },
  {
    id: "ac-play-06",
    title: "Doctor Kit Turn-Taking",
    technique:
      "Take turns being the doctor and patient with a toy medical kit. 'Check' body parts and name them. Then let your child be the doctor and check YOU.",
    example:
      "'I'll check your ears. Ears look good! Now your mouth -- say ahhh! Now YOUR turn. You be the doctor. Check my nose!' Hand over the stethoscope.",
    parentTip:
      "Pretend play with role reversal is a huge milestone. When your child pretends to be the doctor, they're building narrative language, turn-taking, and perspective-taking.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "play",
    estimatedMinutes: 5,
    path: "child",
  },
  {
    id: "ac-play-07",
    title: "Shape Hunt",
    technique:
      "Walk around a room finding shapes: circles (clocks, plates), squares (windows, books), triangles (hangers, pizza slices). Touch each one and name the shape.",
    example:
      "'Let's find circles! The clock is a circle. The plate is a circle. Your eyes are circles! How many circles can we find?' Count on your fingers.",
    parentTip:
      "Shapes in the real world are more meaningful than shapes on a worksheet. Point out shapes during everyday moments and your child will start noticing them everywhere.",
    ageRangeStart: 24,
    ageRangeEnd: 48,
    context: "play",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-play-08",
    title: "Stuffed Animal Party",
    technique:
      "Line up stuffed animals and serve them pretend food. Narrate each animal's 'preferences': 'Bear wants cake! Bunny wants juice!' Let your child serve them.",
    example:
      "'It's a party! What does Bear want? Bear wants... CAKE! Can you give Bear the cake? Now Bunny is thirsty. Bunny wants juice!' Hand your child the pretend items.",
    parentTip:
      "Third-person narration ('Bear wants...') builds subject-verb-object sentence structure. Your child hears a complete sentence model every time you speak for an animal.",
    ageRangeStart: 18,
    ageRangeEnd: 42,
    context: "play",
    estimatedMinutes: 5,
    path: "child",
  },
  {
    id: "ac-play-09",
    title: "Scarf Peek-a-boo",
    technique:
      "Drape a scarf over a toy and say 'Where's the [toy]?' Pull it off with a 'ta-da!' Then let your child hide toys for you to find.",
    example:
      "Cover the dinosaur: 'Where's the dinosaur? Is he hiding? Let's look... TA-DA! There he is! ROAR!' Give your child the scarf: 'YOUR turn to hide someone!'",
    parentTip:
      "Hiding games work at every age from 6 months to 4 years. For younger babies, it's object permanence. For older toddlers, it's the question words 'where' and 'who.'",
    ageRangeStart: 6,
    ageRangeEnd: 30,
    context: "play",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-play-10",
    title: "Pillow Jump Counting",
    technique:
      "Put pillows on the floor in a line. Your child jumps from pillow to pillow while you count each landing. Combine gross motor movement with number language.",
    example:
      "'Jump! ONE! Jump! TWO! Jump! THREE! You jumped on three pillows!' Add more pillows to make it longer. Let your child count while YOU jump too.",
    parentTip:
      "Physical movement anchors abstract concepts like numbers in the body. Children who learn to count while moving understand number quantity better than those who only count orally.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "play",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-play-11",
    title: "Tape Road on the Floor",
    technique:
      "Use painter's tape to make roads on the floor. Drive toy cars along the roads and narrate: 'Going straight! Turning! Parking!' Add stop signs drawn on paper.",
    example:
      "'Vroom! The red car is going straight. Oh, a turn! Turn turn turn. Now the blue car. Where is blue car going? To the store? To the park?'",
    parentTip:
      "This activity can last 15+ minutes but the language-rich version only needs 3-5 minutes of narration. Let your child play independently after you model the language.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "play",
    estimatedMinutes: 5,
    path: "child",
  },
  {
    id: "ac-play-12",
    title: "Tickle Request",
    technique:
      "Start a tickle game and then stop. Wait for your child to request more using any communication: a sound, a word, a sign, or pulling your hands back.",
    example:
      "Tickle your child briefly. Stop. Say 'More tickles?' Wait 5 seconds. Any communication attempt = more tickles. 'You said more! More tickles coming!'",
    parentTip:
      "Physical play is the most motivating context for early communicators. Your child WILL try to communicate because the reward (tickles) is immediate and delightful.",
    ageRangeStart: 6,
    ageRangeEnd: 24,
    context: "play",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-play-13",
    title: "Paper Bag Puppets",
    technique:
      "Draw a simple face on a paper bag. Put it on your hand and create a character with a name and a voice. Have the puppet ask your child simple questions.",
    example:
      "Draw eyes and a mouth on a bag. 'Hi! I'm Mr. Bag! What's YOUR name? Do you like pizza? I LOVE pizza! Nom nom nom!' Use a silly voice and wait for responses.",
    parentTip:
      "Children who are shy or reluctant to talk directly to adults will often talk to a puppet. The puppet lowers social pressure and makes talking feel like play, not a test.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "play",
    estimatedMinutes: 5,
    path: "child",
  },
  {
    id: "ac-play-14",
    title: "Ball Pit Treasure Hunt",
    technique:
      "Hide small toys in a ball pit (or a bin of balls/dried pasta). Ask your child to find specific items by name. Each find is a vocabulary repetition.",
    example:
      "'Find the... COW! Dig dig dig... you found the cow! Moo! Now find the... SPOON! Where's the spoon? Keep looking... you got it!'",
    parentTip:
      "This works receptive language (understanding words) which always develops before expressive language (saying words). If your child can find the cow, they know the word cow even if they can't say it yet.",
    ageRangeStart: 12,
    ageRangeEnd: 36,
    context: "play",
    estimatedMinutes: 4,
    path: "child",
  },
  {
    id: "ac-play-15",
    title: "Crayon Choice Board",
    technique:
      "Spread out 4-5 crayons. Ask your child which color they want before each stroke. Even if they just point, say the color name. Then draw what they direct.",
    example:
      "'Which color? Red? Blue? Green?' Child points. 'GREEN! What should I draw with green? A tree? A frog?' Draw it. 'Now which color?'",
    parentTip:
      "This creates dozens of communication turns in just a few minutes. Each crayon swap is a chance for your child to practice requesting.",
    ageRangeStart: 14,
    ageRangeEnd: 42,
    context: "play",
    estimatedMinutes: 4,
    path: "child",
  },

  // ─── BEDTIME (8 cards) ────────────────────────────────────────────────
  {
    id: "ac-bed-01",
    title: "Stuffed Animal Tuck-In",
    technique:
      "Before your child gets in bed, let them tuck in a stuffed animal. Narrate the routine: blanket, pillow, goodnight kiss. Then your child gets the same routine.",
    example:
      "'Teddy needs to go to sleep! Put the blanket on. Good. Now a pillow. Now give Teddy a kiss. Night-night, Teddy! Now it's YOUR turn!'",
    parentTip:
      "Caring for a stuffed animal develops empathy vocabulary and sequencing skills. It also makes the bedtime routine feel longer and more special without actually taking more time.",
    ageRangeStart: 14,
    ageRangeEnd: 42,
    context: "bedtime",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-bed-02",
    title: "Shadow Puppets",
    technique:
      "Use a flashlight to make simple hand shadows on the wall. Name each shadow: bird, dog, bunny. Make the animal sound. Let your child try.",
    example:
      "Make a bird: 'Look! A bird! Tweet tweet!' Make a dog: 'Woof woof! It's a dog!' Shine the light at your child's hands: 'What can YOU make?'",
    parentTip:
      "Shadow puppets build fine motor skills, imagination, and animal vocabulary all at once. Even formless shadows become something when your child names them.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "bedtime",
    estimatedMinutes: 4,
    path: "child",
  },
  {
    id: "ac-bed-03",
    title: "Whisper Game",
    technique:
      "Whisper a word to your child and see if they can whisper it back. Whispering is inherently fascinating and changes the way sounds feel in the mouth.",
    example:
      "Lean in close: (whisper) 'banana.' See if your child whispers back. 'You said banana!' Try another: (whisper) 'dinosaur.' The novelty keeps them engaged.",
    parentTip:
      "Whispering forces children to listen more carefully. It also creates an intimate, connected moment that makes bedtime feel cozy rather than something to fight.",
    ageRangeStart: 24,
    ageRangeEnd: 48,
    context: "bedtime",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-bed-04",
    title: "Body Scan Goodnight",
    technique:
      "Touch each body part and say goodnight to it as your child lies in bed. This teaches body-part vocabulary through a calming, repetitive routine.",
    example:
      "Touch their toes: 'Goodnight, toes.' Touch their knees: 'Goodnight, knees.' Touch their tummy: 'Goodnight, tummy.' All the way up to 'Goodnight, head. Sleep tight!'",
    parentTip:
      "This doubles as a relaxation technique. Many children calm down noticeably by the time you reach their head. Use the same order every night.",
    ageRangeStart: 6,
    ageRangeEnd: 36,
    context: "bedtime",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-bed-05",
    title: "Three Stars",
    technique:
      "Before lights out, name three things your child did well today (their 'three stars'). Use specific language, not just 'good job.'",
    example:
      "'Star one: you shared your toy with your sister. Star two: you used a big voice to say please. Star three: you tried broccoli!' Hold up fingers for each.",
    parentTip:
      "Specific praise builds self-concept AND vocabulary. 'You shared your toy' teaches the word 'shared.' 'Good job' teaches nothing. Be specific whenever you can.",
    ageRangeStart: 18,
    ageRangeEnd: 60,
    context: "bedtime",
    estimatedMinutes: 1,
    path: "child",
  },
  {
    id: "ac-bed-06",
    title: "Dream Question",
    technique:
      "Ask your child what they want to dream about tonight. Accept any answer and build a quick 2-sentence story around it. This primes imagination and narrative language.",
    example:
      "'What do you want to dream about? Trucks? Okay! Tonight you'll dream about driving a big red truck allll the way to the moon! Vroom vroom, goodnight!'",
    parentTip:
      "Even if your child can't answer the question yet, asking it and then providing the answer models question-response conversation structure. They'll start answering eventually.",
    ageRangeStart: 24,
    ageRangeEnd: 60,
    context: "bedtime",
    estimatedMinutes: 1,
    path: "child",
  },
  {
    id: "ac-bed-07",
    title: "Pajama Choice",
    technique:
      "Hold up two sets of pajamas and let your child choose. Name the pattern or color on each pair. Making choices is communication even without words.",
    example:
      "'Dinosaur pajamas or star pajamas? These have dinosaurs -- roar! These have stars -- twinkle twinkle! Which ones?' Accept a reach, point, or word.",
    parentTip:
      "Embedding choices into routines creates communication opportunities without extra effort. Clothing, books, songs, blankets -- any time there are two options, pause and let your child pick.",
    ageRangeStart: 10,
    ageRangeEnd: 36,
    context: "bedtime",
    estimatedMinutes: 1,
    path: "child",
  },
  {
    id: "ac-bed-08",
    title: "Nightlight Story",
    technique:
      "In a dim room with a nightlight, tell a quick 30-second story about your child as the hero. Use their name and a simple adventure.",
    example:
      "'Once upon a time, [child's name] found a magic key. They opened a door and found... a room full of puppies! The puppies licked their face. The end!'",
    parentTip:
      "Personalized stories where your child is the character are more engaging than any picture book. Keep it to 3-4 sentences. Your child will start requesting 'tell me a story' at bedtime.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "bedtime",
    estimatedMinutes: 2,
    path: "child",
  },

  // ─── ERRANDS (8 cards) ────────────────────────────────────────────────
  {
    id: "ac-errand-01",
    title: "Parking Lot Spotter",
    technique:
      "As you walk through a parking lot, name the color of each car you pass. This fills an otherwise dead moment with color vocabulary practice.",
    example:
      "'Red car! White car! Black car! Blue car! Look, another red car! How many red cars do we see? One... two! Two red cars!' Keep walking and counting.",
    parentTip:
      "Parking lots are boring for kids but FULL of language opportunities. Colors, sizes, counting, describing ('the big truck, the little car') all happen naturally.",
    ageRangeStart: 14,
    ageRangeEnd: 48,
    context: "errands",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-errand-02",
    title: "People Watcher",
    technique:
      "In a waiting room, quietly describe what people are doing: 'That man is reading. That lady is talking on the phone.' Action verbs in real-time context.",
    example:
      "'Look, that boy is drawing. She's drinking coffee. He's typing on his computer. What am I doing? I'm sitting! What are YOU doing?'",
    parentTip:
      "Present progressive verbs (is reading, is walking) are some of the first verb forms children learn. Real-world observation makes them concrete and memorable.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "errands",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-errand-03",
    title: "Drive-Through Order",
    technique:
      "Before pulling up to a drive-through, practice the order with your child. Let them 'help' by saying one word of the order.",
    example:
      "'We're going to say chicken nuggets. Can you say chicken? Let's practice: chicken! Your turn!' At the window, let them hear you order and say 'thank you' together.",
    parentTip:
      "Real-world communication practice with a real audience (the drive-through worker) is powerful. Even if you end up ordering for them, hearing the social exchange teaches scripts.",
    ageRangeStart: 24,
    ageRangeEnd: 48,
    context: "errands",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-errand-04",
    title: "Stroller Narrator",
    technique:
      "During a walk in the stroller, narrate everything you pass like a tour guide. Point to each thing and pause occasionally for your child to point at something.",
    example:
      "'There's a tree! It's a big tree. Oh, a dog! Hi doggy! I hear a bird. Tweet tweet! Do you see the bird? There! Up in the tree!'",
    parentTip:
      "Walking narration exposes your child to 30-50 vocabulary words per walk. Even if they can't respond, the input is building their understanding of the world.",
    ageRangeStart: 6,
    ageRangeEnd: 24,
    context: "errands",
    estimatedMinutes: 5,
    path: "child",
  },
  {
    id: "ac-errand-05",
    title: "Up and Down Escalator",
    technique:
      "Ride an escalator and narrate the direction: 'going UP up up!' or 'going DOWN down down!' Count the steps as you get on and off.",
    example:
      "'Step on! Going UUUUP! Up up up! We're going higher! Now step off -- we're at the top! Can you say UP?' Do it again on the way down.",
    parentTip:
      "Escalators are inherently thrilling for small children. Pairing movement direction with spatial words (up/down) creates a physical memory that sticks.",
    ageRangeStart: 12,
    ageRangeEnd: 36,
    context: "errands",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-errand-06",
    title: "Bag Helper",
    technique:
      "Let your child carry one light grocery bag from the car to the house. Name the item in the bag and describe its weight: heavy or light.",
    example:
      "'Can you carry the bread? The bread is LIGHT! Easy to carry! I'll carry the milk -- it's HEAVY! Oof!' Exaggerate the weight difference.",
    parentTip:
      "Giving children real jobs with real objects builds functional vocabulary (heavy/light, carry, help) and self-confidence. Use the same descriptive words each time.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "errands",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-errand-07",
    title: "Countdown to Leave",
    technique:
      "Instead of saying 'time to go,' give a 5-count: 'Five... four... three... two... one... time to go!' Predictable countdowns reduce transition tantrums and teach number sequence.",
    example:
      "'We're leaving in five! Five... four... three... two... one! Time to go! Say bye-bye, park!' Do this EVERY time. Consistency is key.",
    parentTip:
      "Transition tantrums often happen because children can't predict when fun will end. A consistent countdown gives them control and time to process. Start the habit now.",
    ageRangeStart: 12,
    ageRangeEnd: 48,
    context: "errands",
    estimatedMinutes: 1,
    path: "child",
  },
  {
    id: "ac-errand-08",
    title: "Thank You Practice",
    technique:
      "After any interaction with a store clerk, cashier, or server, model 'thank you' and pause for your child to attempt it. Social words get immediate real-world reinforcement.",
    example:
      "Cashier hands you the bag. You say 'Thank you!' Turn to your child: 'Can you say thank you?' Even a 'dah doo' attempt works. The cashier will smile, reinforcing the behavior.",
    parentTip:
      "Politeness words are some of the most practiced words in a child's day because they happen SO often. Every 'thank you' opportunity is a repetition that moves closer to mastery.",
    ageRangeStart: 14,
    ageRangeEnd: 48,
    context: "errands",
    estimatedMinutes: 1,
    path: "child",
  },

  // ─── ANYTIME (11 cards) ───────────────────────────────────────────────
  {
    id: "ac-any-01",
    title: "Photo Album Talk",
    technique:
      "Look at photos on your phone with your child and name the people and places. Family photos are the most engaging 'book' your child will ever look at.",
    example:
      "'Look, it's Grandma! Hi Grandma! And there's YOU at the beach! You were playing in the sand. And there's Daddy with the dog!'",
    parentTip:
      "Phone photos are free, always available, and personally meaningful. Just 2 minutes of scrolling and narrating builds proper nouns, verbs, and past-tense language.",
    ageRangeStart: 10,
    ageRangeEnd: 48,
    context: "anytime",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-any-02",
    title: "Weather Report",
    technique:
      "Look out the window together and describe the weather using simple words. Touch the window to feel the temperature difference. Make it a daily ritual.",
    example:
      "'Let's check the weather! I see... clouds! It's cloudy today. Is it cold?' Touch the window. 'Brrr, cold! Cloudy and cold. We need a jacket!'",
    parentTip:
      "Weather vocabulary (sunny, cloudy, rainy, cold, hot, windy) is revisited daily, giving your child massive repetition. After a few weeks, let them be the weather reporter.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "anytime",
    estimatedMinutes: 1,
    path: "child",
  },
  {
    id: "ac-any-03",
    title: "Hand Stamp Game",
    technique:
      "Use a washable stamp or draw a small star on your child's hand. Every time they say a target word, they earn another stamp. Visual rewards motivate word attempts.",
    example:
      "Draw a star on their hand: 'Every time you say please, you get a star!' Throughout the day, draw stars and count them together. 'Wow, five stars! Five pleases!'",
    parentTip:
      "Keep the target word achievable -- something your child already says sometimes, not a brand new word. The goal is increased frequency, not first-time production.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "anytime",
    estimatedMinutes: 1,
    path: "child",
  },
  {
    id: "ac-any-04",
    title: "Same But Different",
    technique:
      "Find two objects that are similar and describe what's the same and what's different. This builds comparison language (bigger, smaller, same, different).",
    example:
      "Hold up two shoes: 'These are both shoes! They're the SAME. But this one is big and this one is little. Big shoe, little shoe. Which one is yours?'",
    parentTip:
      "Comparison words are a major language milestone. Start with obvious differences (big/little) and gradually move to subtler ones (rough/smooth, fast/slow).",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "anytime",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-any-05",
    title: "Copy Cat",
    technique:
      "Imitate whatever sound or action your child makes. If they bang a table, you bang a table. If they say 'ba,' you say 'ba.' Imitation teaches your child that communication is a back-and-forth game.",
    example:
      "Child: bangs cup on table. You: bang cup on table. Child: looks surprised. Child: bangs again. You: bang again. Then add a variation and see if they copy YOU.",
    parentTip:
      "Following your child's lead by imitating them FIRST -- before adding anything new -- builds trust and engagement. It tells your child 'I hear you and you matter.'",
    ageRangeStart: 6,
    ageRangeEnd: 24,
    context: "anytime",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-any-06",
    title: "Silly Wrong Names",
    technique:
      "Point to objects and call them the wrong name on purpose. Wait for your child to correct you. This is a playful way to test comprehension and encourage speaking up.",
    example:
      "Point to your nose: 'Is this my... ELBOW?' Wait for a laugh or correction. 'Nooo! It's my NOSE!' Point to a dog: 'Is that a... CAT?' Let your child correct you.",
    parentTip:
      "Children LOVE catching adults making mistakes. This works best after age 18 months when they understand enough words to recognize the error. Their corrections are real language.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "anytime",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-any-07",
    title: "Nose-to-Nose Check-In",
    technique:
      "Get nose-to-nose with your child, make eye contact, and say three words slowly: 'I love you.' Then wait. This moment of connection primes them for all the language to come.",
    example:
      "Hold your child close, touch noses. Say slowly: 'I... love... you.' Smile. Wait. Many children will try to repeat some version back. Accept anything.",
    parentTip:
      "This isn't really about the words -- it's about connection. A connected child is a communicating child. Do this once a day, especially after hard moments.",
    ageRangeStart: 0,
    ageRangeEnd: 60,
    context: "anytime",
    estimatedMinutes: 1,
    path: "child",
  },
  {
    id: "ac-any-08",
    title: "Action Song with Stops",
    technique:
      "Sing 'Head Shoulders Knees and Toes' but stop randomly and freeze on a body part. Wait for your child to finish the word or touch the body part.",
    example:
      "Sing: 'Head, shoulders, knees and...' STOP. Look at your child. If they say 'toes!' or touch their toes, celebrate. 'TOES! You knew it was toes!'",
    parentTip:
      "Songs with predictable words and pauses are the #1 easiest way to elicit first words. If your child isn't filling in words in songs yet, keep singing -- they will.",
    ageRangeStart: 12,
    ageRangeEnd: 36,
    context: "anytime",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-any-09",
    title: "Cleanup Countdown",
    technique:
      "Turn cleanup into a counting game. Count each toy as it goes into the bin. This makes cleanup less of a fight and adds number language naturally.",
    example:
      "'Let's count! Put the block in -- ONE! Another block -- TWO! The car -- THREE! The doll -- FOUR! Wow, we cleaned up FOUR things!'",
    parentTip:
      "Children resist cleanup because it means fun is over. Turning it into a game with counting or a timer ('Can we do it before I count to 10?') reframes it as a new activity.",
    ageRangeStart: 14,
    ageRangeEnd: 48,
    context: "anytime",
    estimatedMinutes: 2,
    path: "child",
  },
  {
    id: "ac-any-10",
    title: "Texture Walk",
    technique:
      "Walk around the house touching different textures and naming them: smooth, rough, soft, hard, bumpy, squishy. Use the same descriptive words each time.",
    example:
      "Touch the couch: 'Soft!' Touch the wall: 'Smooth!' Touch a pinecone: 'Bumpy!' Touch a pillow: 'Squishy!' Let your child touch each one and repeat the word.",
    parentTip:
      "Texture words are adjectives, and adjectives are the key to building longer sentences. A child who knows 'soft' can soon say 'soft blanket' or 'the soft one.'",
    ageRangeStart: 12,
    ageRangeEnd: 36,
    context: "anytime",
    estimatedMinutes: 3,
    path: "child",
  },
  {
    id: "ac-any-11",
    title: "Whispering Secrets",
    technique:
      "Cup your hands around your child's ear and whisper a silly secret. Then let them whisper one back. Whispering builds listening skills and makes communication feel special.",
    example:
      "Cup hands: (whisper) 'I think the dog is sleeping on the couch!' Giggle together. 'Your turn! Tell me a secret!' Put your ear near their mouth and accept whatever they say.",
    parentTip:
      "This works even with pre-verbal children. They'll put their mouth near your ear and make sounds -- and that's beautiful. You're teaching them the conversational structure of sharing information.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "anytime",
    estimatedMinutes: 2,
    path: "child",
  },
];
