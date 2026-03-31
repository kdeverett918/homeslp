export interface DailyTip {
  id: string;
  title: string;
  technique: string;
  example: string;
  ageRangeStart: number;
  ageRangeEnd: number;
  context: "mealtime" | "bath" | "play" | "bedtime" | "errands" | "anytime";
  path: "child";
}

export const dailyTips: DailyTip[] = [
  // ─── MEALTIME (15 tips) ───────────────────────────────────────────────
  {
    id: "meal-01",
    title: "The Two-Choice Hold",
    technique:
      "Hold up two foods at eye level and wait 3 full seconds before naming them. This encourages your child to look, point, or vocalize a preference before you label it.",
    example:
      "Hold up a banana in one hand and crackers in the other. Wait silently. If your child reaches, say 'Banana! You want banana.'",
    ageRangeStart: 8,
    ageRangeEnd: 24,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-02",
    title: "Narrate the Pour",
    technique:
      "Use slow, exaggerated language while pouring drinks or serving food. Stretch out key words so your child hears each sound clearly.",
    example:
      "As you pour milk, say 'Milk is going... in! More milk? Pouring... more... milk... all done!' Pause between phrases to give your child a chance to chime in.",
    ageRangeStart: 10,
    ageRangeEnd: 30,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-03",
    title: "Spoon as Microphone",
    technique:
      "Pretend the spoon is a microphone and 'interview' your child about their food. Ask simple questions and accept any vocalization as a valid answer.",
    example:
      "Hold the spoon near your child's mouth and say 'What do you think of the applesauce? Yummy?' Then move the spoon-mic to yourself: 'I think it's yummy too!'",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-04",
    title: "Tiny Portions on Purpose",
    technique:
      "Give only 2-3 pieces of a favorite snack at a time so your child has to request more. This creates natural communication opportunities without withholding food.",
    example:
      "Put 3 goldfish crackers on the tray. When they're gone, hold the bag visibly and wait. Any reach, point, vocalization, or word earns more crackers immediately.",
    ageRangeStart: 10,
    ageRangeEnd: 36,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-05",
    title: "Sound Effects Chef",
    technique:
      "Add silly sound effects to every step of food prep your child can see. Sounds are easier to imitate than words and build vocal imitation skills.",
    example:
      "Stirring: 'swish swish swish!' Chopping banana: 'chop chop chop!' Microwave beep: 'beep beep beep!' Exaggerate and repeat each one 3 times.",
    ageRangeStart: 6,
    ageRangeEnd: 24,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-06",
    title: "Name the Temperature",
    technique:
      "Before every bite, touch the food and describe whether it's hot, warm, or cold. Temperature words are early concepts that pair well with facial expressions.",
    example:
      "Touch the oatmeal and pull your hand back: 'Hot! Ooh, hot! Let's blow. Fffff. Now it's warm. Warm is okay.' Use a relieved face for 'warm.'",
    ageRangeStart: 12,
    ageRangeEnd: 30,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-07",
    title: "The Stuck Lid",
    technique:
      "Pretend you can't open a container and ask for help. When your child shows interest or tries to help, model the word 'open' and reward immediately by opening it.",
    example:
      "Struggle with a yogurt pouch: 'Oh no! It's stuck. Can you help? Open... OPEN!' When your child makes any attempt, open it right away and celebrate.",
    ageRangeStart: 12,
    ageRangeEnd: 30,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-08",
    title: "Counting Bites",
    technique:
      "Count each bite out loud as your child eats. Hearing numbers in a meaningful context builds early math language and gives rhythm to the meal.",
    example:
      "As your child eats peas: 'One pea... two peas... three peas! Three peas in your tummy!' Hold up fingers to match.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-09",
    title: "Color Plate",
    technique:
      "Point to each food on the plate and name its color before eating. Use the same sentence frame for each one so the pattern becomes predictable.",
    example:
      "Point and say 'Red strawberry. Yellow cheese. Green peas.' Then ask 'What color is THIS?' and point to the next food. Accept any attempt.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-10",
    title: "Taste Face",
    technique:
      "Make an exaggerated facial expression with every bite and pair it with a feeling word. This teaches emotional vocabulary through a multisensory experience.",
    example:
      "Take a bite of lemon: scrunch your face and say 'Sour! So sour!' Take a bite of cookie: big smile, 'Mmm, sweet! Yummy sweet.'",
    ageRangeStart: 8,
    ageRangeEnd: 36,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-11",
    title: "Where Did It Go?",
    technique:
      "Hide a piece of food under a cup or napkin and ask your child to find it. This builds early question words and the concept of object permanence.",
    example:
      "Put a blueberry under a cup. Say 'Where's the blueberry? Where did it go?' Lift the cup: 'There it is! You found it!' Let your child try hiding one next.",
    ageRangeStart: 10,
    ageRangeEnd: 24,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-12",
    title: "Big Bite, Little Bite",
    technique:
      "Offer your child a choice between a big piece and a little piece. Modeling size words during meals makes abstract concepts concrete.",
    example:
      "Hold up two pieces of toast: 'Big piece or little piece? You want the BIIIG piece? Here's the big piece!'",
    ageRangeStart: 14,
    ageRangeEnd: 36,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-13",
    title: "Slow Motion Sippy",
    technique:
      "Model drinking in slow motion with exaggerated sounds. This helps children with feeding awareness and builds sound imitation at the same time.",
    example:
      "Pick up your cup in slow motion: 'I'm going to... drink! Glug glug glug. Ahhh! That was good water.' Repeat the 'ahhh' and see if your child copies it.",
    ageRangeStart: 8,
    ageRangeEnd: 24,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-14",
    title: "First, Then Plate",
    technique:
      "Use a visual 'first-then' structure at mealtimes. Say what comes first and what comes next. This builds sequencing language and reduces frustration.",
    example:
      "Point to the chicken: 'First, chicken.' Point to the fruit: 'Then, strawberries.' Your child learns sequence words in a highly motivating context.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "mealtime",
    path: "child",
  },
  {
    id: "meal-15",
    title: "All Done Show",
    technique:
      "Teach 'all done' with a dramatic gesture. Turning both palms up and saying 'all done!' gives your child a clear signal they can imitate with words or hands.",
    example:
      "When your child pushes food away, flip your palms up: 'All done? All done! You're all done with lunch.' Repeat the phrase and gesture 3 times.",
    ageRangeStart: 8,
    ageRangeEnd: 24,
    context: "mealtime",
    path: "child",
  },

  // ─── BATH TIME (10 tips) ──────────────────────────────────────────────
  {
    id: "bath-01",
    title: "Splash Count",
    technique:
      "Count each splash out loud. Pausing before the next number builds anticipation and encourages your child to vocalize or fill in the next number.",
    example:
      "Splash the water together: 'One splash! Two splash! Threeeee...' and wait. If your child makes any sound, say 'Three! You said three!' and keep going.",
    ageRangeStart: 10,
    ageRangeEnd: 36,
    context: "bath",
    path: "child",
  },
  {
    id: "bath-02",
    title: "Wash and Name",
    technique:
      "Name each body part as you wash it, using a consistent phrase. Repetition of the same sentence frame helps children learn body-part vocabulary.",
    example:
      "As you wash each part: 'Wash your toes! Wash your tummy! Wash your nose!' Touch each part as you say it. Pause before the body word to let your child fill it in.",
    ageRangeStart: 8,
    ageRangeEnd: 30,
    context: "bath",
    path: "child",
  },
  {
    id: "bath-03",
    title: "Pour and Predict",
    technique:
      "Hold a cup of water above another container and ask 'Ready?' before pouring. Pausing builds anticipation and gives your child a reason to communicate 'go' or 'yes.'",
    example:
      "Hold the cup up high: 'Ready? Set...' Wait 3-4 seconds. Any vocalization, nod, or sign from your child = you pour. Say 'GO! Splaaash!' every time.",
    ageRangeStart: 8,
    ageRangeEnd: 30,
    context: "bath",
    path: "child",
  },
  {
    id: "bath-04",
    title: "Rubber Duck Chat",
    technique:
      "Give the rubber duck a voice and have it 'talk' to your child using simple sentences. Children often respond more to a toy's voice than direct questions.",
    example:
      "Make the duck bob over: 'Hi! I'm duck. Quack quack! Can I sit on your knee? Whee!' Use a silly high voice. Pause to see if your child 'answers' the duck.",
    ageRangeStart: 12,
    ageRangeEnd: 36,
    context: "bath",
    path: "child",
  },
  {
    id: "bath-05",
    title: "Bubble Pop Sounds",
    technique:
      "Blow bubbles and make a 'pop!' sound each time one bursts. Pop sounds practice the /p/ consonant and lip closure in a no-pressure way.",
    example:
      "Blow bubbles in the tub and pop each one: 'Pop! Pop! Pop!' Then blow one and wait for your child to pop it. When they do, say 'POP! You popped it!'",
    ageRangeStart: 6,
    ageRangeEnd: 30,
    context: "bath",
    path: "child",
  },
  {
    id: "bath-06",
    title: "Sink or Float Lab",
    technique:
      "Drop bath toys in the water and narrate whether they sink or float. This introduces cause-and-effect language and early science vocabulary naturally.",
    example:
      "Hold up a toy boat: 'Will it sink or float? Let's see... FLOAT! The boat floats!' Then try a washcloth: 'Uh oh... it's sinking! It sank!'",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "bath",
    path: "child",
  },
  {
    id: "bath-07",
    title: "Where's the Fishy?",
    technique:
      "Hide a bath toy under the bubbles or a washcloth and ask where it went. Hiding games build question words and keep attention in the tub.",
    example:
      "Push a toy fish under the bubbles: 'Where's the fishy? Is he HERE?' Lift the washcloth. 'No! Where is he?' Find him: 'THERE he is! Under the bubbles!'",
    ageRangeStart: 10,
    ageRangeEnd: 30,
    context: "bath",
    path: "child",
  },
  {
    id: "bath-08",
    title: "Drip Drop Song",
    technique:
      "Squeeze a washcloth slowly and sing 'drip, drip, drop' to a simple melody. Pausing before 'drop' builds anticipation and invites your child to fill in the word.",
    example:
      "Squeeze the washcloth over a cup: sing 'Drip... drip... drip...' then squeeze hard: 'DROP!' Do it several times. Start pausing before 'drop' and see if your child says it.",
    ageRangeStart: 8,
    ageRangeEnd: 24,
    context: "bath",
    path: "child",
  },
  {
    id: "bath-09",
    title: "Hot or Cold?",
    technique:
      "Let your child feel the water from two cups -- one warm, one cool. Labeling temperature with touch creates a memorable vocabulary moment.",
    example:
      "Hold up a cup of warm water to their arm: 'Warm! That's warm.' Then a cool cup: 'Brrr, cold! Cold water!' Ask 'Which one? Warm or cold?' before pouring.",
    ageRangeStart: 14,
    ageRangeEnd: 36,
    context: "bath",
    path: "child",
  },
  {
    id: "bath-10",
    title: "All Clean Song",
    technique:
      "Sing a consistent 'all clean' song at the end of every bath. Routines with songs help children learn to predict transitions and reduce tantrums.",
    example:
      "As you lift your child out, sing to the tune of 'Twinkle Twinkle': 'You are clean, you are clean, cleanest baby I have seen!' Use the same tune every time.",
    ageRangeStart: 6,
    ageRangeEnd: 30,
    context: "bath",
    path: "child",
  },

  // ─── PLAY-BASED (20 tips) ────────────────────────────────────────────
  {
    id: "play-01",
    title: "Parallel Play Narration",
    technique:
      "Sit next to your child and narrate what THEY are doing, not what you want them to do. This technique is called 'sportscasting' and builds vocabulary without pressure.",
    example:
      "As your child stacks blocks: 'You're putting the red block on top. Up, up, up! Oh it's so tall!' Don't ask questions -- just describe.",
    ageRangeStart: 6,
    ageRangeEnd: 36,
    context: "play",
    path: "child",
  },
  {
    id: "play-02",
    title: "Sabotage the Routine",
    technique:
      "During a familiar activity, do something 'wrong' on purpose and wait for your child to react. This creates communication pressure without asking direct questions.",
    example:
      "Put a shoe on your hand instead of your foot. Look confused. Wait. When your child laughs, points, or protests, say 'Silly! The shoe goes on my FOOT!'",
    ageRangeStart: 14,
    ageRangeEnd: 36,
    context: "play",
    path: "child",
  },
  {
    id: "play-03",
    title: "Car Ramp Countdown",
    technique:
      "Set up a ramp for toy cars and count down before each launch. The pause before 'go' is where language happens -- your child will want to fill in the word.",
    example:
      "Hold the car at the top: 'Three... two... one...' Wait 3 seconds. Any sound = release the car. 'GO! Zooom!' Repeat 5+ times so the pattern becomes predictable.",
    ageRangeStart: 12,
    ageRangeEnd: 36,
    context: "play",
    path: "child",
  },
  {
    id: "play-04",
    title: "Animal Sound Safari",
    technique:
      "Line up toy animals and walk past each one, making its sound. Animal sounds are often easier than real words and build sound imitation skills.",
    example:
      "Walk your fingers past a cow: 'Mooo!' Past a cat: 'Meow!' Past a dog: pause and look at your child expectantly. If they make any sound, celebrate it.",
    ageRangeStart: 8,
    ageRangeEnd: 30,
    context: "play",
    path: "child",
  },
  {
    id: "play-05",
    title: "Ball Pause",
    technique:
      "Roll a ball back and forth with your child. Before each roll, hold the ball still and say 'Ready?' Then wait. The child must do SOMETHING to get the ball rolling.",
    example:
      "Hold the ball: 'Ready?' Wait. Accept a look, reach, sound, or word. Then roll it. On your child's turn, put your hands out and wait for them to initiate the roll.",
    ageRangeStart: 8,
    ageRangeEnd: 24,
    context: "play",
    path: "child",
  },
  {
    id: "play-06",
    title: "Puzzle Piece Ransom",
    technique:
      "Hold each puzzle piece and name the picture before handing it over. This creates a built-in label for every piece without making it feel like a drill.",
    example:
      "Hold up the horse piece: 'Horse! The horse goes neigh.' Hand it over. Next piece: 'Apple! Red apple.' Keep your tone fun, not test-like.",
    ageRangeStart: 14,
    ageRangeEnd: 36,
    context: "play",
    path: "child",
  },
  {
    id: "play-07",
    title: "Tower Crash",
    technique:
      "Build a block tower together and let your child knock it down. Use 'uh oh,' 'crash,' and 'boom' -- exclamatory words are highly motivating for early talkers.",
    example:
      "Stack blocks slowly: 'Up... up... up... so tall!' Then pause. When your child knocks it down: 'CRASH! Uh oh! All fall down!' Rebuild and repeat.",
    ageRangeStart: 8,
    ageRangeEnd: 30,
    context: "play",
    path: "child",
  },
  {
    id: "play-08",
    title: "Blanket Peek-a-boo",
    technique:
      "Drape a blanket over yourself and wait for your child to pull it off. This classic game builds turn-taking, anticipation, and early social communication.",
    example:
      "Put the blanket over your head. Say 'Where's Mama?' Wait silently. When your child pulls it off: 'PEEK-A-BOO! You found me!' Vary your facial expression each time.",
    ageRangeStart: 6,
    ageRangeEnd: 18,
    context: "play",
    path: "child",
  },
  {
    id: "play-09",
    title: "Feed the Teddy",
    technique:
      "Set up a pretend meal for a stuffed animal. Pretend play with dolls/animals is one of the strongest predictors of language development.",
    example:
      "Give your child a spoon and a bowl: 'Teddy is hungry! Can you feed Teddy? Mmm, Teddy says yummy!' Model the feeding motion if they need help.",
    ageRangeStart: 14,
    ageRangeEnd: 36,
    context: "play",
    path: "child",
  },
  {
    id: "play-10",
    title: "One Word Up",
    technique:
      "Match your child's language level and add exactly one word. If they say 'car,' you say 'big car.' If they say 'go,' you say 'car go.' Don't add more than one word above their level.",
    example:
      "Child says 'ball.' You say 'red ball.' Child says 'throw.' You say 'throw ball.' Child says 'throw ball.' You say 'throw big ball.' Always just one word more.",
    ageRangeStart: 12,
    ageRangeEnd: 48,
    context: "play",
    path: "child",
  },
  {
    id: "play-11",
    title: "Play-Doh Requests",
    technique:
      "Keep the play-doh colors in separate containers. Your child has to request each color, practicing color words and polite forms like 'please.'",
    example:
      "Show the containers: 'I have red, blue, and yellow. Which one do you want?' Wait for any communication attempt. Hand it over: 'Blue! Here's the blue play-doh!'",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "play",
    path: "child",
  },
  {
    id: "play-12",
    title: "Chase and Freeze",
    technique:
      "Chase your child around the room and freeze when they say 'stop.' Then unfreeze when they say 'go.' This gives real power to their words.",
    example:
      "Start chasing slowly: 'I'm gonna get you!' When your child says 'stop' (or any attempt), freeze dramatically. Wait for 'go' to resume. Exaggerate the freeze pose.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "play",
    path: "child",
  },
  {
    id: "play-13",
    title: "Bubble Blow Wait",
    technique:
      "Hold the bubble wand to your lips but don't blow. Wait until your child communicates in any way -- a look, point, sign, or word -- before you blow the bubbles.",
    example:
      "Blow one round of bubbles. Then hold the wand up: 'Should I blow?' Count silently to 5. Any communication attempt = more bubbles. 'You said more! More bubbles!'",
    ageRangeStart: 8,
    ageRangeEnd: 30,
    context: "play",
    path: "child",
  },
  {
    id: "play-14",
    title: "Tunnel Talk",
    technique:
      "Make a tunnel from a blanket over chairs. Talk to your child through the tunnel -- the echo effect makes your voice interesting and encourages them to vocalize back.",
    example:
      "Call through the tunnel: 'Hello! Can you hear me? Come through the tunnel!' When your child crawls through: 'You made it! You went through the tunnel!'",
    ageRangeStart: 12,
    ageRangeEnd: 36,
    context: "play",
    path: "child",
  },
  {
    id: "play-15",
    title: "Sticker Scene",
    technique:
      "Give your child stickers one at a time. Before each one, name what's on it and let them choose where it goes. This creates dozens of labeling opportunities.",
    example:
      "Peel a sticker: 'Star! Where does the star go?' Your child puts it on the paper. 'You put the star on the paper! Now... a dog! Where does the dog go?'",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "play",
    path: "child",
  },
  {
    id: "play-16",
    title: "Sock Puppet Show",
    technique:
      "Put a sock on your hand and give it a simple voice. Puppets lower communication pressure because the child is talking to a character, not being tested.",
    example:
      "Make the sock puppet peek out from behind a pillow: 'Hi! I'm Socky! What's YOUR name?' Use a silly voice. Wait. Even a smile counts as engagement.",
    ageRangeStart: 14,
    ageRangeEnd: 42,
    context: "play",
    path: "child",
  },
  {
    id: "play-17",
    title: "Dump and Fill",
    technique:
      "Give your child a container and small objects. Narrate as they dump and fill: 'in, in, in... dump! All out!' These spatial words build understanding of prepositions.",
    example:
      "Hand your child a bucket and blocks: 'Put it IN. In! In! In! Now... dump it OUT! All out! Whee!' Exaggerate 'in' and 'out' each time.",
    ageRangeStart: 8,
    ageRangeEnd: 24,
    context: "play",
    path: "child",
  },
  {
    id: "play-18",
    title: "Phone Conversation",
    technique:
      "Hand your child a play phone (or a real one with no battery) and pretend to call them on yours. Phone play encourages back-and-forth conversational turns.",
    example:
      "Hold your phone to your ear: 'Ring ring! Hello? Is that you? What are you doing?' Pause after each question. Accept babble as a valid answer: 'Oh really? Wow!'",
    ageRangeStart: 14,
    ageRangeEnd: 48,
    context: "play",
    path: "child",
  },
  {
    id: "play-19",
    title: "Obstacle Course Narration",
    technique:
      "Set up a simple obstacle course with pillows and chairs. Narrate the action words as your child moves through it: 'over, under, through, around.'",
    example:
      "Set up pillows: 'Go OVER the pillow! Now UNDER the table! THROUGH the tunnel! AROUND the chair!' Emphasize the spatial word each time.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "play",
    path: "child",
  },
  {
    id: "play-20",
    title: "Surprise Box",
    technique:
      "Put 5 small toys in a box with a lid. Your child pulls out one at a time while you both react with surprise. Surprise creates emotional engagement that cements vocabulary.",
    example:
      "Your child opens the box and pulls out a dinosaur: 'WOW! A dinosaur! ROAR!' Put it aside. 'What's next? Let's see...' Build anticipation before each reveal.",
    ageRangeStart: 10,
    ageRangeEnd: 36,
    context: "play",
    path: "child",
  },

  // ─── BEDTIME / BOOK READING (15 tips) ─────────────────────────────────
  {
    id: "bed-01",
    title: "Point Before You Read",
    technique:
      "Before reading the text on each page, point to the main picture and name it. This ensures your child connects the picture to the word before hearing the full sentence.",
    example:
      "Open to a page with a dog: point and say 'Dog!' Then read the text. On the next page with a tree: point and say 'Tree!' Then read. Simple label first, then story.",
    ageRangeStart: 6,
    ageRangeEnd: 30,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-02",
    title: "Pause at the Rhyme",
    technique:
      "When reading a familiar rhyming book, pause before the rhyming word and let your child fill it in. This is called a 'cloze procedure' and builds phonological awareness.",
    example:
      "Read: 'One fish, two fish, red fish...' and stop. Look at your child expectantly. If they say 'blue!' celebrate. If not, whisper the first sound: 'bl...'",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-03",
    title: "Book Walk First",
    technique:
      "Before reading a new book, flip through all the pages quickly and just name the pictures. This 'book walk' previews the vocabulary so the child is primed when you read it for real.",
    example:
      "Flip through quickly: 'I see a bear... a boat... some rain... a house... and a moon! Now let's read it!' This takes 30 seconds and doubles comprehension.",
    ageRangeStart: 10,
    ageRangeEnd: 36,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-04",
    title: "Feelings Check at Bedtime",
    technique:
      "Ask your child how a character in the book is feeling by pointing to the character's face. Emotion vocabulary is critical and books are the safest place to learn it.",
    example:
      "Point to a sad-looking bear: 'Look at Bear's face. How does Bear feel? Bear is sad. His mouth goes down. Sad.' Trace the frown shape on the page.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-05",
    title: "Goodnight Tour",
    technique:
      "Walk around the room saying goodnight to objects. This builds vocabulary and creates a calming transition routine your child can eventually lead.",
    example:
      "Carry your child around: 'Goodnight, lamp. Goodnight, teddy bear. Goodnight, window.' Touch each object. After a few nights, pause and let your child name the next one.",
    ageRangeStart: 10,
    ageRangeEnd: 30,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-06",
    title: "Two Choices for Story",
    technique:
      "Hold up two books and let your child pick. Making a choice -- even by reaching -- is communication. Name both books so your child hears the titles.",
    example:
      "Hold up two books: 'Brown Bear or Goodnight Moon? Which one do you want?' Wait. A reach toward one counts: 'You picked Goodnight Moon! Great choice!'",
    ageRangeStart: 8,
    ageRangeEnd: 30,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-07",
    title: "Character Voice Switch",
    technique:
      "Give each character in the book a different silly voice. Varied voices hold attention longer and help your child understand that different characters are speaking.",
    example:
      "Papa bear gets a deep voice. Baby bear gets a squeaky voice. Mama bear gets a sing-song voice. Your child will start to anticipate and maybe imitate the voices.",
    ageRangeStart: 14,
    ageRangeEnd: 48,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-08",
    title: "What Happened Today?",
    technique:
      "Before lights out, name three things that happened that day using simple past tense. This builds narrative skills and helps your child start to sequence events.",
    example:
      "'Today we went to the park. You went on the slide. Then we ate lunch. We had mac and cheese! Then we played with blocks.' Use 3 events, past tense, simple sentences.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-09",
    title: "Sound Book Page",
    technique:
      "For books with animals or vehicles, skip the text and just make the sound for each page. Let your child try to copy. Sound imitation comes before word imitation.",
    example:
      "Farm animal book: page 1 -- 'Mooo!' page 2 -- 'Baaaa!' page 3 -- 'Oink oink!' page 4 -- look at your child and wait. See if they make the sound before you do.",
    ageRangeStart: 6,
    ageRangeEnd: 24,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-10",
    title: "Flashlight Words",
    technique:
      "Use a small flashlight to spotlight pictures in a book in a dark room. The novelty of the flashlight extends engagement and lets you control the pacing.",
    example:
      "Shine the flashlight on the dog in the picture: 'I see a DOG!' Move to the ball: 'And a BALL!' Give your child the flashlight: 'Your turn! What do YOU see?'",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-11",
    title: "Finish My Sentence",
    technique:
      "For books your child has heard many times, read the sentence but leave off the last word. Familiar books are predictable, making it easy for children to participate.",
    example:
      "Read: 'Goodnight, room. Goodnight...' and point to the moon. Wait 3-4 seconds. If your child says anything close to 'moon,' celebrate. If not, whisper 'moon.'",
    ageRangeStart: 18,
    ageRangeEnd: 42,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-12",
    title: "Touch the Page",
    technique:
      "Encourage your child to touch pictures in the book as you name them. Adding touch to looking and hearing creates a multisensory vocabulary experience.",
    example:
      "Say 'Where's the cat?' and guide your child's finger to the cat. 'You touched the cat! There's the cat!' Then: 'Where's the hat?' Let them try alone.",
    ageRangeStart: 8,
    ageRangeEnd: 24,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-13",
    title: "I Spy Bedtime",
    technique:
      "Play a simplified I Spy using the pictures in a book. Give clues that match your child's level -- for young children, use 'find the [noun]' instead of abstract clues.",
    example:
      "On a busy page: 'I spy something that goes quack! Can you find it?' Point to the area if your child needs help. 'You found the duck! Quack quack!'",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-14",
    title: "Sing the Book",
    technique:
      "Instead of reading the words, sing them to a simple melody like 'Twinkle Twinkle.' Singing slows down speech and emphasizes individual words, making them easier to learn.",
    example:
      "Take any short board book and sing the words to a familiar tune. 'Brown bear, brown bear, what do you see?' already has a natural melody. Lean into it.",
    ageRangeStart: 6,
    ageRangeEnd: 36,
    context: "bedtime",
    path: "child",
  },
  {
    id: "bed-15",
    title: "Tomorrow We'll...",
    technique:
      "End each bedtime with one thing to look forward to tomorrow. Future tense language is advanced but hearing it in a comforting context builds understanding over time.",
    example:
      "'Tomorrow we'll go to the playground! Tomorrow you can play on the swings. Night-night!' Keep it to one event, stated simply. Use 'tomorrow' and 'will' every night.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "bedtime",
    path: "child",
  },

  // ─── ERRANDS / CAR / WAITING ROOM (10 tips) ──────────────────────────
  {
    id: "errand-01",
    title: "Grocery Label Game",
    technique:
      "As you put items in the cart, name each one and let your child hold it briefly before it goes in. Touching an object while hearing its name strengthens the word-object connection.",
    example:
      "Hand your child the apple: 'Apple! A red apple. Can you put it in the cart? In it goes!' Do this for 5-6 items per trip.",
    ageRangeStart: 10,
    ageRangeEnd: 36,
    context: "errands",
    path: "child",
  },
  {
    id: "errand-02",
    title: "Car Window Spotter",
    technique:
      "Name things you see out the car window using a consistent phrase: 'I see a ___!' After several rounds, pause and see if your child points to or names something.",
    example:
      "'I see a truck! I see a tree! I see a dog! I see a...' and point to something, waiting for your child to name it or make a sound.",
    ageRangeStart: 14,
    ageRangeEnd: 48,
    context: "errands",
    path: "child",
  },
  {
    id: "errand-03",
    title: "Waiting Room I Spy",
    technique:
      "In a waiting room, play a simplified I Spy using colors your child knows. This keeps them engaged without screens and practices color vocabulary.",
    example:
      "'I spy something blue! Can you find something blue?' Point around the room to help. 'Yes! The chair is blue! You found blue!' Then let your child pick a color.",
    ageRangeStart: 24,
    ageRangeEnd: 48,
    context: "errands",
    path: "child",
  },
  {
    id: "errand-04",
    title: "Beep at the Checkout",
    technique:
      "As items get scanned at checkout, say 'beep!' for each one. Your child will likely start saying 'beep' too -- and that's great vocal imitation practice.",
    example:
      "As each item crosses the scanner: 'Beep! Beep! Beep!' Look at your child with big eyes each time. They'll start anticipating and joining in.",
    ageRangeStart: 10,
    ageRangeEnd: 30,
    context: "errands",
    path: "child",
  },
  {
    id: "errand-05",
    title: "Elevator Button Boss",
    technique:
      "Let your child push the elevator button while you say the number. Buttons are inherently motivating and this creates a natural reason to hear and practice number words.",
    example:
      "'We need floor three. Can you push... three!' Point to the button. 'You pushed three! Up we go to three!' Count floors as you pass them.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "errands",
    path: "child",
  },
  {
    id: "errand-06",
    title: "Gas Station Countdown",
    technique:
      "While pumping gas or waiting at a drive-through, count down from 10 together. Countdowns build number sequence knowledge and the anticipation of 'blast off!' is irresistible.",
    example:
      "'10, 9, 8, 7...' slow down as you get closer '...3... 2... 1... BLAST OFF!' Throw your hands up. Do it again -- your child will start joining in at the numbers they know.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "errands",
    path: "child",
  },
  {
    id: "errand-07",
    title: "Shopping List Helper",
    technique:
      "Give your child a 'job' to find one specific item. Having a purpose in the store builds receptive language (understanding) and gives them a sense of competence.",
    example:
      "'Can you help me find the bananas? Look for something yellow...' Walk slowly past the produce. When they spot it: 'You found the bananas! Great helping!'",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "errands",
    path: "child",
  },
  {
    id: "errand-08",
    title: "Red Light, Green Light Drive",
    technique:
      "Name the traffic light color at every stop. Children love patterns and traffic lights are perfectly predictable. This builds color words through real-world context.",
    example:
      "'Red light -- we stop! Now we wait...' When it changes: 'GREEN light -- we GO!' Your child will start announcing the color before you do.",
    ageRangeStart: 18,
    ageRangeEnd: 48,
    context: "errands",
    path: "child",
  },
  {
    id: "errand-09",
    title: "Song in the Car Seat",
    technique:
      "Sing the same 3-4 songs every car ride. Repetition of familiar songs is one of the strongest drivers of early word production because the melody provides memory scaffolding.",
    example:
      "Pick 3 songs (Wheels on the Bus, Itsy Bitsy Spider, Old MacDonald). Sing them in the same order every ride. Within a week, start pausing for your child to fill in words.",
    ageRangeStart: 6,
    ageRangeEnd: 36,
    context: "errands",
    path: "child",
  },
  {
    id: "errand-10",
    title: "Wave and Say Hi",
    technique:
      "Encourage your child to wave and say 'hi' or 'bye' to people you pass. Social greetings are highly motivating because they get an immediate response from another person.",
    example:
      "As you pass someone: 'Say hi! Hi!' Wave yourself. When the person waves back, say 'They said hi to YOU! You waved!' Praise any attempt, even just a hand lift.",
    ageRangeStart: 8,
    ageRangeEnd: 30,
    context: "errands",
    path: "child",
  },

  // ─── ANYTIME / GENERAL DAILY (20 tips) ────────────────────────────────
  {
    id: "any-01",
    title: "Wait 5 Seconds",
    technique:
      "After saying something to your child, count to 5 silently before speaking again. Most parents wait less than 1 second. Five seconds feels like forever but gives your child time to process and respond.",
    example:
      "Ask 'Do you want milk?' then silently count: one-Mississippi, two-Mississippi... all the way to five. You'll be surprised how often they respond in that gap.",
    ageRangeStart: 6,
    ageRangeEnd: 48,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-02",
    title: "Get on Their Level",
    technique:
      "Physically get down to your child's eye level when talking. Being face-to-face lets your child see your mouth, read your expressions, and feel like an equal conversation partner.",
    example:
      "Kneel, sit on the floor, or lie on your belly to match their height. When you talk about something, hold it near your mouth so they see the object AND your lips at the same time.",
    ageRangeStart: 6,
    ageRangeEnd: 36,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-03",
    title: "Diaper Change Narration",
    technique:
      "Narrate every step of a diaper change. It happens 6-8 times a day, making it one of the highest-frequency language opportunities you have.",
    example:
      "'Diaper time! Up you go. Let's take off the old diaper. Wipe wipe wipe. Clean! Now a new diaper. Snap snap. All done!' Same script every time.",
    ageRangeStart: 0,
    ageRangeEnd: 30,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-04",
    title: "Clothing Commentary",
    technique:
      "Name each piece of clothing as you dress your child. Include colors and body parts. This is another high-frequency daily routine with built-in vocabulary.",
    example:
      "'Shirt goes over your head! Arms through! Blue shirt on. Now pants... one leg, two legs. Red pants on! Socks on your feet. Shoes on. All dressed!'",
    ageRangeStart: 6,
    ageRangeEnd: 36,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-05",
    title: "Mirror Talk",
    technique:
      "Stand with your child in front of a mirror and point to body parts, make faces, and name emotions. Mirrors are captivating and let your child see their own mouth moving.",
    example:
      "'I see your nose! Boop! I see your eyes! Blink blink! Make a happy face... now a silly face!' Let your child lead and follow their gaze.",
    ageRangeStart: 6,
    ageRangeEnd: 30,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-06",
    title: "Name It, Don't Test It",
    technique:
      "Instead of asking 'What's this?' (a test question), just name things as you encounter them. Testing creates pressure. Labeling creates exposure without stress.",
    example:
      "DON'T: 'What's that? What color is it? How many are there?' DO: 'Look, a butterfly! A pretty orange butterfly. It's flying!' Your child absorbs more when relaxed.",
    ageRangeStart: 6,
    ageRangeEnd: 48,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-07",
    title: "Recast, Don't Correct",
    technique:
      "When your child says a word incorrectly, repeat it back correctly without saying 'no' or 'say it like this.' This is called recasting and it's the most effective error correction technique.",
    example:
      "Child: 'Look, a goggy!' You: 'Yes, a DOGGY! A big doggy!' Not: 'No, it's not a goggy, say doggy.' The recast keeps communication positive.",
    ageRangeStart: 12,
    ageRangeEnd: 60,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-08",
    title: "Follow Their Eyes",
    technique:
      "Watch what your child is looking at and name it. Joint attention -- looking at the same thing together -- is the foundation of all language learning.",
    example:
      "Your child stares at the ceiling fan. Say 'Fan! The fan is going around and around. Round and round!' You just turned a random glance into a language moment.",
    ageRangeStart: 0,
    ageRangeEnd: 24,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-09",
    title: "First Word of the Day",
    technique:
      "Pick one target word each morning and try to use it 20 times naturally throughout the day. High-frequency exposure to a single word dramatically increases the chance your child will learn it.",
    example:
      "Today's word: 'up.' Use it all day: 'Pick you UP! Stand UP! Hands UP! Look UP! The balloon went UP! Up up up!' By bedtime, your child has heard 'up' 20+ times.",
    ageRangeStart: 8,
    ageRangeEnd: 30,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-10",
    title: "Reduce Your Questions by Half",
    technique:
      "For the next hour, try to make statements instead of asking questions. Most parents ask too many questions, which puts children in a passive 'test-taker' role instead of an active communicator role.",
    example:
      "Instead of 'What are you building?' say 'You're building a tower!' Instead of 'Do you want milk?' say 'I think you want milk.' Comments invite conversation; questions demand answers.",
    ageRangeStart: 6,
    ageRangeEnd: 48,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-11",
    title: "Hands-Free Narration",
    technique:
      "While doing chores, narrate what you're doing even if your child is playing nearby. Children absorb language from overheard speech, especially when it describes visible actions.",
    example:
      "While folding laundry: 'I'm folding the towels. Fold, fold, fold. This one is big. This one is small. Now the socks. Where's the other sock? Found it!'",
    ageRangeStart: 6,
    ageRangeEnd: 36,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-12",
    title: "Emotion Coaching",
    technique:
      "When your child is upset, name the emotion before trying to fix the problem. Children who hear feeling words regularly develop better emotional regulation AND larger vocabularies.",
    example:
      "Child is crying because the tower fell: 'You're frustrated! Your tower fell down. That's so frustrating. You worked hard on that tower.' Then: 'Should we build it again?'",
    ageRangeStart: 12,
    ageRangeEnd: 60,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-13",
    title: "The Power of 'Uh Oh'",
    technique:
      "Say 'uh oh!' every time something drops, spills, or breaks. It's one of the easiest phrases for toddlers to imitate and it models appropriate reactions to small accidents.",
    example:
      "Your child drops a spoon: 'Uh oh! The spoon fell!' You spill water: 'Uh oh! I spilled it!' Soon your child will say 'uh oh' spontaneously -- and that's a two-word combo!",
    ageRangeStart: 8,
    ageRangeEnd: 24,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-14",
    title: "Expand the Gesture",
    technique:
      "When your child points at something, put a word on it immediately. Pointing is your child's way of telling you what they want to learn the word for.",
    example:
      "Child points to a bird: 'Bird! You see a bird! The bird is flying. Bye bye, bird!' You just gave them a word they were actively requesting. This is gold.",
    ageRangeStart: 8,
    ageRangeEnd: 30,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-15",
    title: "Repetition Is Love",
    technique:
      "Read the same book, sing the same song, play the same game. Children need to hear a word 50-100 times before they use it. Repetition isn't boring to them -- it's how they learn.",
    example:
      "If your child brings you the same book for the 30th time, read it enthusiastically. Each reading, they notice something new. Familiarity builds confidence to participate.",
    ageRangeStart: 6,
    ageRangeEnd: 48,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-16",
    title: "Slow Your Rate",
    technique:
      "Consciously slow your speaking rate by 50% when talking to your child. Slow speech gives the brain time to segment words from the speech stream.",
    example:
      "Normal: 'Let's go get your shoes and put them on.' Slowed: 'Let's go... get your shoes... and put... them... on.' Add pauses between phrases, not between every word.",
    ageRangeStart: 0,
    ageRangeEnd: 36,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-17",
    title: "Sign Plus Word",
    technique:
      "Pair 5-10 simple signs with their spoken words. Signing doesn't delay speech -- it actually accelerates it by giving children a way to communicate while their mouths catch up.",
    example:
      "Start with: MORE (tap fingertips together), ALL DONE (wave hands), EAT (fingers to mouth), HELP (thumbs up on fist), MILK (open/close fist). Always say the word as you sign.",
    ageRangeStart: 6,
    ageRangeEnd: 24,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-18",
    title: "Screen Narration",
    technique:
      "If your child watches a show, sit with them and narrate what's happening on screen. Passive screen time becomes active language input when you add your voice.",
    example:
      "While they watch: 'Oh look, Bluey is running! She's playing with Bingo. Uh oh, they fell down! They're laughing.' Keep it simple -- don't narrate every second.",
    ageRangeStart: 12,
    ageRangeEnd: 48,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-19",
    title: "Snack Time Choices",
    technique:
      "At snack time, offer two options and wait for your child to indicate a preference before giving either one. The goal is communication, not a specific word.",
    example:
      "Hold up goldfish in one hand and grapes in the other: 'Goldfish... or grapes?' Wait. A look toward one, a reach, a point, a vocalization -- all count. 'Goldfish! You chose goldfish!'",
    ageRangeStart: 8,
    ageRangeEnd: 30,
    context: "anytime",
    path: "child",
  },
  {
    id: "any-20",
    title: "End of Day Rewind",
    technique:
      "Before your child falls asleep, quickly recap the day using 3 simple sentences. Daily recaps build narrative memory and give your child words for their experiences.",
    example:
      "'Today we played at the park. We ate pizza for lunch. And you took a big bath! What a good day. Goodnight.' Same structure every night: three events, past tense.",
    ageRangeStart: 14,
    ageRangeEnd: 48,
    context: "anytime",
    path: "child",
  },
];
