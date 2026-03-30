export type HomeschoolAgeGroup = "preschool" | "kindergarten" | "early-elementary";

export interface HomeschoolLesson {
  id: string;
  title: string;
  ageGroup: HomeschoolAgeGroup;
  subject: string;
  speechGoal: string;
  description: string;
  materials: string[];
  steps: string[];
  languageExtensions: string[];
  estimatedMinutes: number;
}

export interface IEPSection {
  id: string;
  title: string;
  situation: string;
  steps: string[];
  sampleLanguage: string;
}

export interface CurriculumTip {
  title: string;
  description: string;
}

// ─── LESSONS ────────────────────────────────────────────────────────────────

export const homeschoolLessons: HomeschoolLesson[] = [
  // ─── PRESCHOOL (ages 3-4) ───────────────────────────────────────────────
  {
    id: "hs-pre-01",
    title: "Color Sorting and Naming",
    ageGroup: "preschool",
    subject: "Science",
    speechGoal: "Vocabulary building",
    description:
      "Children sort everyday objects by color while practicing color names, descriptive phrases, and early counting. This hands-on activity builds categorization skills and expressive vocabulary at the same time.",
    materials: [
      "Colored blocks, crayons, or pom-poms (at least 4 colors)",
      "Sorting containers (bowls, muffin tins, or paper plates)",
      "Optional: color cards or paint swatches for matching",
    ],
    steps: [
      "Spread all the colored items on the table and let your child explore them freely for a minute.",
      "Place the sorting containers in a row and label each one with a color: 'This bowl is for RED things.'",
      "Ask your child to pick up one item at a time and name its color before placing it in the matching container.",
      "Once sorted, point to each group and model a descriptive phrase: 'Big red block. Little red pom-pom.'",
      "Count the items in each container together: 'One, two, three! Three blue things!'",
      "Ask comparison questions: 'Which group has the most? Which has the fewest?'",
      "Mix everything up and let your child sort again independently while you narrate what they are doing.",
    ],
    languageExtensions: [
      "'What color is this?' — pause and wait at least 5 seconds before helping.",
      "Model two-word descriptive phrases: 'big red,' 'little blue,' 'soft yellow.'",
      "Use comparison words: 'more,' 'less,' 'same,' 'most,' 'fewest.'",
      "Expand single-word answers into sentences: Child says 'red' — you say 'Yes! It is a red block.'",
    ],
    estimatedMinutes: 15,
  },
  {
    id: "hs-pre-02",
    title: "Story Retelling with Props",
    ageGroup: "preschool",
    subject: "Reading",
    speechGoal: "Narrative skills",
    description:
      "After reading a favorite picture book, your child retells the story using small toys, puppets, or household items as props. Retelling strengthens sequencing, memory, and expressive language.",
    materials: [
      "A familiar picture book with a simple plot (3-5 main events)",
      "Small toys or figures to represent characters",
      "A blanket or placemat as a 'stage'",
      "Optional: simple puppets (sock puppets work great)",
    ],
    steps: [
      "Read the book together, pausing at key moments to ask 'What happens next?'",
      "After reading, set out the props and say: 'Let us tell the story again with our toys!'",
      "Help your child identify which prop represents each character: 'Who is this going to be?'",
      "Guide the retelling by asking sequence questions: 'What happened first? Then what?'",
      "Let your child move the props and narrate the action, even if the retelling is imperfect.",
      "After the retelling, ask your child to tell you their favorite part and why.",
      "For an extension, ask: 'What if the story ended differently? What could happen instead?'",
    ],
    languageExtensions: [
      "Model sequencing words: 'First... then... next... finally...'",
      "Ask 'why' and 'how' questions about character motivations: 'Why was the bear sad?'",
      "Encourage use of character dialogue: 'What did the bunny say?'",
      "Praise specific language: 'I love how you said the bear was grumpy! Great describing word.'",
    ],
    estimatedMinutes: 20,
  },
  {
    id: "hs-pre-03",
    title: "Counting Songs",
    ageGroup: "preschool",
    subject: "Math",
    speechGoal: "Sequencing and articulation",
    description:
      "Singing counting songs like 'Five Little Monkeys' or 'Ten in the Bed' builds number sequencing while giving repeated practice with speech sounds in a fun, low-pressure way.",
    materials: [
      "Finger puppets or small figures (5-10 of the same kind)",
      "A surface to line them up on (table, shelf edge, or bed)",
      "Printed or handwritten lyrics (optional)",
      "A pillow or cushion for 'Ten in the Bed' rolling",
    ],
    steps: [
      "Choose a counting song your child enjoys. Start with 'Five Little Monkeys' if you are unsure.",
      "Set up the corresponding number of figures on the surface.",
      "Sing the song together slowly, removing one figure at each verse.",
      "Pause before key words and let your child fill them in: 'Five little monkeys jumping on the...'",
      "After the song, count the figures back onto the surface: 'One monkey back! Two monkeys back!'",
      "Sing it again faster, then slower — notice how speed changes articulation.",
      "Let your child pick a new counting song or make one up about a different animal.",
    ],
    languageExtensions: [
      "Emphasize rhyming words: 'bed/head,' 'more/floor' — ask 'What rhymes with ___?'",
      "Practice specific sounds that appear in the song (e.g., /m/ in 'monkeys,' /b/ in 'bed').",
      "Have your child hold up fingers as you count down together.",
      "Ask your child to 'teach' the song to a stuffed animal, which reinforces recall and articulation.",
    ],
    estimatedMinutes: 10,
  },
  {
    id: "hs-pre-04",
    title: "Nature Walk Vocabulary",
    ageGroup: "preschool",
    subject: "Science",
    speechGoal: "Expanding vocabulary",
    description:
      "A short outdoor walk becomes a vocabulary-building adventure when you narrate what you see, hear, and feel. Children learn new words best through real-world, multisensory experiences.",
    materials: [
      "A small bag or bucket for collecting items",
      "A magnifying glass (optional but exciting for kids)",
      "A nature checklist (draw or print simple pictures of: leaf, rock, flower, bird, bug)",
      "Comfortable shoes and weather-appropriate clothing",
    ],
    steps: [
      "Before heading out, show the checklist and name each item together: 'We are going to look for these things.'",
      "Walk slowly and let your child lead. When they stop to look at something, narrate: 'You found a bumpy rock!'",
      "Pick up safe items and describe them using multiple senses: 'This leaf is smooth and green and it smells fresh.'",
      "When you hear a sound, stop and identify it together: 'I hear chirping. A bird! Where is it?'",
      "Check items off the list as you find them. Celebrate each find: 'We found a flower! Check!'",
      "Back inside, spread out your collected items and sort them: big/small, rough/smooth, natural/not natural.",
      "Have your child pick their favorite item and tell you three things about it.",
    ],
    languageExtensions: [
      "Introduce rich adjectives: 'rough,' 'smooth,' 'damp,' 'crunchy,' 'tiny,' 'enormous.'",
      "Use location words: 'under the bush,' 'on top of the fence,' 'next to the tree.'",
      "Ask open-ended questions: 'What do you think this bug eats?' to encourage reasoning language.",
      "Model full sentences: Child says 'rock!' — you say 'You found a gray, bumpy rock under the tree!'",
    ],
    estimatedMinutes: 25,
  },
  {
    id: "hs-pre-05",
    title: "Shape Hunt",
    ageGroup: "preschool",
    subject: "Math",
    speechGoal: "Following directions",
    description:
      "Go on a shape hunt around your home, following directions to find specific shapes in everyday objects. This builds spatial vocabulary and direction-following skills alongside shape recognition.",
    materials: [
      "Shape cards (draw or print: circle, square, triangle, rectangle, star)",
      "A clipboard or paper and crayon for tallying finds",
      "Stickers or stamps for marking found shapes (optional)",
      "A camera or phone to photograph shapes you find",
    ],
    steps: [
      "Review the shape cards together. Trace each shape with your finger and name it.",
      "Give a direction: 'Find something that is a circle in the kitchen.' Wait for your child to search.",
      "When they find one (clock, plate, lid), confirm: 'Yes! The clock is a circle. Great looking!'",
      "Add complexity: 'Now find something square that is above the counter.'",
      "Take a photo of each shape they find. This creates a visual record to review later.",
      "After hunting in two or three rooms, sit together and tally how many of each shape you found.",
      "Challenge: 'Can you find a shape we have not found yet? Look for a triangle!'",
    ],
    languageExtensions: [
      "Practice direction words: 'Go to the living room. Look under the table. Find a rectangle.'",
      "Ask multi-step directions: 'First get the red crayon, then draw a circle on your paper.'",
      "Compare shapes: 'How is a square different from a rectangle?'",
      "Encourage your child to give YOU directions: 'Tell me where to find a triangle!'",
    ],
    estimatedMinutes: 15,
  },
  {
    id: "hs-pre-06",
    title: "Pretend Restaurant",
    ageGroup: "preschool",
    subject: "Social Studies",
    speechGoal: "Requesting and social language",
    description:
      "Set up a pretend restaurant where your child practices ordering, making requests, and using polite social language. Dramatic play is one of the most powerful language-building activities for preschoolers.",
    materials: [
      "Play food or real snack items",
      "A notepad and crayon for taking 'orders'",
      "An apron or hat for the 'server'",
      "Paper plates, cups, and napkins",
      "A simple menu (draw pictures of 3-5 food items with names)",
    ],
    steps: [
      "Set up a table with place settings. Show the menu and read it together.",
      "Take turns being the server and the customer. Model the interaction first: 'Welcome! What would you like today?'",
      "When your child orders, require a full request: 'May I please have the pizza?' instead of just 'pizza.'",
      "The server writes down the order (scribbles count!) and repeats it back: 'One pizza, coming right up!'",
      "Deliver the food and model polite exchanges: 'Here is your pizza.' 'Thank you!'",
      "Introduce a problem: 'Oh no, we are out of juice. What else would you like?' to practice flexible language.",
      "Switch roles so your child practices both asking and responding.",
    ],
    languageExtensions: [
      "Practice polite phrases: 'please,' 'thank you,' 'excuse me,' 'may I have.'",
      "Role-play scenarios: complaining politely, asking for the check, requesting a substitution.",
      "Expand vocabulary: 'appetizer,' 'entree,' 'dessert,' 'menu,' 'bill.'",
      "Ask: 'What would you say if your food was cold?' to practice problem-solving language.",
    ],
    estimatedMinutes: 20,
  },

  // ─── KINDERGARTEN (ages 5-6) ────────────────────────────────────────────
  {
    id: "hs-kind-01",
    title: "Letter Sound Safari",
    ageGroup: "kindergarten",
    subject: "Reading",
    speechGoal: "Phonological awareness",
    description:
      "Go on a 'safari' around your home or yard to find items that start with a target letter sound. This activity directly builds the phonological awareness skills that are foundational to both reading and clear speech.",
    materials: [
      "A letter card showing the target letter (uppercase and lowercase)",
      "A bag or basket for collecting items",
      "A whiteboard or paper to write discovered words",
      "Binoculars (real or made from toilet paper rolls) for extra fun",
    ],
    steps: [
      "Choose a target sound (start with sounds your child can say clearly, like /b/, /m/, or /s/).",
      "Show the letter card and say the sound together three times: '/b/ /b/ /b/ — like in ball!'",
      "Put on your 'safari gear' and begin searching: 'I spy something that starts with /b/...'",
      "When your child finds an item, have them say the word slowly, emphasizing the first sound: 'B-b-book!'",
      "Write each word on the whiteboard. Read the growing list together after each new find.",
      "After finding 5-8 items, play a sorting game: 'Which of these things starts with /b/? Which does not?'",
      "Choose a new letter sound and safari through a different room.",
    ],
    languageExtensions: [
      "Ask: 'What other words start with the same sound as ball?' — build word families.",
      "Play 'odd one out': say three words, two starting with the target sound, one different.",
      "Practice blending: 'What word do these sounds make? /b/ - /a/ - /t/? ... bat!'",
      "Connect to writing: have your child write or trace the letter each time they find a new item.",
    ],
    estimatedMinutes: 15,
  },
  {
    id: "hs-kind-02",
    title: "Science Experiment Narration",
    ageGroup: "kindergarten",
    subject: "Science",
    speechGoal: "Sequencing and explaining",
    description:
      "Conduct a simple science experiment while your child practices narrating each step as it happens. Explaining a process in order is a crucial language skill that transfers to reading comprehension and writing.",
    materials: [
      "Baking soda and vinegar (classic volcano experiment)",
      "A tray or baking sheet to contain the mess",
      "Food coloring (optional)",
      "A cup or small container",
      "A spoon for scooping",
      "Paper and crayons for drawing results",
    ],
    steps: [
      "Show your child the materials and ask: 'What do you think will happen when we mix these together?'",
      "Write down their prediction. This models scientific thinking and pre-writing skills.",
      "Guide them through each step, asking them to narrate: 'What are we doing now?' 'First, I am scooping baking soda.'",
      "When the reaction happens, prompt excited describing: 'What do you see? What does it look like? What does it sound like?'",
      "After the experiment, ask your child to tell you the steps in order: 'What did we do first? Then what?'",
      "Have them draw three pictures showing the beginning, middle, and end of the experiment.",
      "Compare the result to their prediction: 'Was your guess right? What surprised you?'",
    ],
    languageExtensions: [
      "Use sequencing language: 'first,' 'next,' 'then,' 'after that,' 'finally.'",
      "Introduce cause-and-effect language: 'Because we added vinegar, the baking soda fizzed.'",
      "Practice prediction language: 'I think... I predict... I wonder if...'",
      "Retell the experiment to another family member or stuffed animal to practice narrative skills.",
    ],
    estimatedMinutes: 20,
  },
  {
    id: "hs-kind-03",
    title: "Story Writing Together",
    ageGroup: "kindergarten",
    subject: "Writing",
    speechGoal: "Sentence formation",
    description:
      "Collaboratively write a short story where your child dictates sentences and you write them down. This bridges the gap between spoken and written language and builds sentence structure awareness.",
    materials: [
      "Blank paper or a small notebook (staple pages together for a 'book')",
      "Crayons, colored pencils, or markers",
      "Stickers for decorating the finished book (optional)",
      "A topic idea card or two to spark imagination",
    ],
    steps: [
      "Choose a topic together. Offer choices: 'A story about a lost puppy, a magic treehouse, or a silly monster?'",
      "Ask: 'Who is in our story? What is their name? Where do they live?' Write down the answers.",
      "Prompt the opening: 'How does our story start? Once upon a time...' Write exactly what your child says.",
      "After each sentence, read it back and ask: 'What happens next?' Keep the story to 5-7 sentences.",
      "When the story has an ending, read the whole thing aloud together.",
      "Have your child draw an illustration for each page or for their favorite part.",
      "Share the finished book with a family member, practicing reading it aloud with expression.",
    ],
    languageExtensions: [
      "Gently expand short sentences: Child says 'The dog ran.' You write 'The fluffy dog ran fast.'",
      "Ask for details: 'What color was the treehouse? How did the monster feel?'",
      "Practice sentence starters: 'Then...,' 'Suddenly...,' 'But then...'",
      "Model complex sentences: 'The puppy was lost because he wandered too far from home.'",
    ],
    estimatedMinutes: 25,
  },
  {
    id: "hs-kind-04",
    title: "Measurement Exploration",
    ageGroup: "kindergarten",
    subject: "Math",
    speechGoal: "Comparative language",
    description:
      "Use non-standard measurement (hands, blocks, shoes) and standard tools (ruler) to measure objects around the house while practicing comparative vocabulary that builds mathematical and linguistic reasoning.",
    materials: [
      "A ruler or measuring tape",
      "Non-standard units: paper clips, blocks, shoes, hand spans",
      "A recording sheet (draw a simple chart: item | measurement)",
      "5-6 objects to measure (book, table, stuffed animal, shoe, pillow)",
    ],
    steps: [
      "Start with non-standard measurement: 'How many paper clips long is your book?' Lay them end to end.",
      "Record the measurement together. Your child can draw the item and write the number.",
      "Measure the same object with a different unit: 'Now how many blocks long is it?'",
      "Introduce comparative language: 'The table is longer than the book. The shoe is shorter than the pillow.'",
      "Ask prediction questions: 'Which do you think is taller — the lamp or the bookshelf?'",
      "Introduce the ruler and show how standard units work: 'Inches are always the same size, unlike our hands.'",
      "Challenge: 'Find something that is exactly 6 inches long!' Let your child search and measure.",
    ],
    languageExtensions: [
      "Practice comparative and superlative forms: 'long, longer, longest' and 'short, shorter, shortest.'",
      "Use estimation language: 'I estimate... I think it is about... it is approximately...'",
      "Ask 'why' questions: 'Why did we get a different number with blocks than with paper clips?'",
      "Model complete comparison sentences: 'The table is longer than the book but shorter than the couch.'",
    ],
    estimatedMinutes: 20,
  },
  {
    id: "hs-kind-05",
    title: "Community Helper Interviews",
    ageGroup: "kindergarten",
    subject: "Social Studies",
    speechGoal: "Question asking",
    description:
      "Your child prepares interview questions for community helpers (or a family member pretending to be one). Learning to formulate and ask questions is a critical expressive language skill.",
    materials: [
      "Pictures or books about community helpers (firefighter, doctor, mail carrier, teacher, farmer)",
      "A notebook or paper for writing interview questions",
      "A pretend microphone (a hairbrush or wooden spoon works)",
      "Optional: dress-up items related to the community helper",
    ],
    steps: [
      "Look at pictures of different community helpers and discuss what each one does.",
      "Choose one community helper to 'interview.' Ask: 'What do you want to know about being a firefighter?'",
      "Help your child formulate 4-5 questions. Model question structure: 'We start with who, what, where, when, why, or how.'",
      "Write the questions down, with your child helping sound out beginning letters.",
      "Conduct the interview! You (or a sibling) play the community helper while your child asks questions.",
      "After the interview, help your child summarize: 'Tell me three things you learned about firefighters.'",
      "Extension: draw a picture of the community helper at work and label it with new vocabulary words.",
    ],
    languageExtensions: [
      "Practice question formation: 'What do you do?' vs. 'You do what?' — model correct syntax.",
      "Introduce job-specific vocabulary: 'hose,' 'siren,' 'stethoscope,' 'uniform.'",
      "Practice follow-up questions: 'You said you drive a truck — what kind of truck?'",
      "Role-reverse: let the community helper ask your child questions to practice answering in full sentences.",
    ],
    estimatedMinutes: 20,
  },
  {
    id: "hs-kind-06",
    title: "Weather Journal",
    ageGroup: "kindergarten",
    subject: "Science",
    speechGoal: "Descriptive language",
    description:
      "Keep a daily weather journal where your child observes, describes, and records the weather. This ongoing activity builds descriptive vocabulary, observation skills, and the habit of daily expressive language practice.",
    materials: [
      "A dedicated notebook or stapled pages for the weather journal",
      "Crayons or colored pencils",
      "Weather symbol stickers or stamps (optional)",
      "A thermometer (real outdoor thermometer or a printable one)",
      "A window with a view of outside",
    ],
    steps: [
      "Each morning, go to the window or step outside. Ask: 'What do you notice about the weather today?'",
      "Model rich descriptions: 'I see gray clouds. I feel cold wind on my face. The ground looks wet.'",
      "Have your child draw the weather in their journal. Encourage detail: 'Are there clouds? What kind?'",
      "Help them write or dictate a weather sentence: 'Today is cloudy and cold. I think it might rain.'",
      "Add the temperature reading (or an estimate): 'The thermometer says 45 degrees. Is that warm or cool?'",
      "At the end of the week, review the journal together: 'How many sunny days did we have? How many rainy?'",
      "Make predictions: 'Based on this week, what do you think the weather will be like tomorrow?'",
    ],
    languageExtensions: [
      "Build weather vocabulary: 'overcast,' 'breezy,' 'humid,' 'drizzle,' 'frost,' 'partly cloudy.'",
      "Practice sensory descriptions: 'The air feels crisp,' 'The sun looks bright,' 'I hear thunder rumbling.'",
      "Use comparison language: 'Today is warmer than yesterday. This is the coldest day this week.'",
      "Connect to cause and effect: 'Because it rained, there are puddles outside.'",
    ],
    estimatedMinutes: 10,
  },

  // ─── EARLY ELEMENTARY (ages 6-8) ───────────────────────────────────────
  {
    id: "hs-elem-01",
    title: "Reading Comprehension Conversations",
    ageGroup: "early-elementary",
    subject: "Reading",
    speechGoal: "Answering wh-questions",
    description:
      "Transform reading time into deep comprehension practice by using structured 'wh-question' conversations before, during, and after reading. This builds the higher-order language skills needed for academic success.",
    materials: [
      "A chapter book or longer picture book at your child's reading level",
      "Sticky notes or bookmarks for marking pages",
      "A 'question jar' with wh-question starters written on slips of paper",
      "A notebook for recording predictions and responses (optional)",
    ],
    steps: [
      "Before reading, look at the cover and ask prediction questions: 'What do you think this book is about? Why?'",
      "Read a section together (take turns reading aloud if your child is able).",
      "Stop at a natural pause point and pull a question from the jar: 'WHO was the main character in this part?'",
      "Ask follow-up wh-questions: 'WHERE did the story take place? WHEN did the problem start? WHY did the character do that?'",
      "For harder questions, model thinking aloud: 'Hmm, I think the character felt scared BECAUSE...'",
      "After reading, ask your child to summarize: 'Tell me the most important things that happened.'",
      "Ask one 'HOW' question that requires inference: 'How do you think the character will solve the problem?'",
    ],
    languageExtensions: [
      "Explicitly teach wh-question types: 'WHO asks about people, WHERE asks about places, WHEN asks about time.'",
      "Practice answering in complete sentences: 'The dog ran away because he was scared' not just 'he was scared.'",
      "Connect to personal experience: 'Has anything like this ever happened to you? Tell me about it.'",
      "Have your child write one question they want answered by the end of the book.",
    ],
    estimatedMinutes: 25,
  },
  {
    id: "hs-elem-02",
    title: "Math Word Problems Out Loud",
    ageGroup: "early-elementary",
    subject: "Math",
    speechGoal: "Verbal reasoning",
    description:
      "Instead of writing math problems on paper, work through word problems verbally. Explaining mathematical thinking out loud strengthens verbal reasoning, problem-solving language, and logical sequencing.",
    materials: [
      "Word problem cards (write simple problems on index cards)",
      "Manipulatives for solving: blocks, counters, or coins",
      "A whiteboard for drawing visual models (optional)",
      "A 'math talk' sentence starter chart",
    ],
    steps: [
      "Read a word problem aloud: 'Sam had 8 apples. He gave 3 to his friend. How many does Sam have now?'",
      "Ask your child to repeat the problem in their own words: 'Tell me what is happening in this problem.'",
      "Prompt them to identify the question: 'What are we trying to figure out?'",
      "Have them explain their strategy BEFORE solving: 'I am going to start with 8 and take away 3.'",
      "Let them solve using manipulatives while narrating each step aloud.",
      "After solving, ask: 'How do you know your answer is right? Prove it to me.'",
      "Create a new problem together using the same operation but different numbers or a real-life scenario.",
    ],
    languageExtensions: [
      "Teach math language: 'altogether,' 'remaining,' 'difference,' 'in all,' 'how many more.'",
      "Practice 'because' sentences: 'The answer is 5 BECAUSE 8 minus 3 equals 5.'",
      "Model self-correction: 'Wait, that does not seem right. Let me try again.' This teaches flexible thinking.",
      "Have your child create word problems for YOU to solve — this requires high-level language planning.",
    ],
    estimatedMinutes: 20,
  },
  {
    id: "hs-elem-03",
    title: "Biography Presentations",
    ageGroup: "early-elementary",
    subject: "Social Studies",
    speechGoal: "Narrative and public speaking",
    description:
      "Research a historical or community figure and prepare a short presentation. This integrates reading, writing, and oral language skills while building the confidence needed for public speaking.",
    materials: [
      "Age-appropriate biography books or kid-friendly websites",
      "Index cards for notes (3-5 facts)",
      "A poster or paper for a visual aid",
      "Markers, printed pictures, or drawings for the poster",
      "A timer for practice presentations",
    ],
    steps: [
      "Choose a person to learn about together. Give your child a choice of 2-3 options.",
      "Read about the person together, stopping to discuss interesting facts: 'What surprised you about that?'",
      "Help your child identify 3-5 key facts to include in their presentation.",
      "Write each fact on an index card in your child's words (not copied from the book).",
      "Create a simple visual aid: a poster with the person's name, a picture, and 2-3 key words.",
      "Practice the presentation together. Model how to stand, make eye contact, and speak clearly.",
      "Deliver the presentation to family members, stuffed animals, or a video camera. Celebrate the effort!",
    ],
    languageExtensions: [
      "Teach presentation phrases: 'Today I am going to tell you about...' and 'In conclusion...'",
      "Practice speaking in a 'presentation voice' — louder and slower than conversation.",
      "Ask the audience to ask questions afterward — practice answering on the spot.",
      "Model how to paraphrase: 'The book said this, but let us put it in YOUR words.'",
    ],
    estimatedMinutes: 30,
  },
  {
    id: "hs-elem-04",
    title: "Plant Growth Log",
    ageGroup: "early-elementary",
    subject: "Science",
    speechGoal: "Expository language",
    description:
      "Plant a seed and maintain a growth log with regular observations. Describing changes over time builds expository (informational) language skills — the kind of language needed for academic writing and presentations.",
    materials: [
      "Fast-growing seeds (bean, sunflower, or radish)",
      "A pot or cup with soil",
      "A ruler for measuring growth",
      "A dedicated observation journal or notebook",
      "Colored pencils for drawing observations",
      "A spray bottle for watering",
    ],
    steps: [
      "Plant the seed together. Narrate each step: 'First, we fill the pot with soil. Next, we make a small hole.'",
      "Set up an observation schedule: every other day, observe and record together.",
      "Each observation day, measure any growth and describe what you see: 'The stem is 2 inches tall. It has two small leaves.'",
      "Draw the plant in the journal and write a descriptive sentence (your child dictates, you write, or they write independently).",
      "Compare to previous entries: 'How has the plant changed since last time? What is different?'",
      "After 2-3 weeks, help your child write a summary: 'My plant grew from a seed to a sprout in 14 days.'",
      "Present the growth log to a family member, explaining the whole process from planting to now.",
    ],
    languageExtensions: [
      "Use observation language: 'I notice... I observe... I see that... compared to before...'",
      "Practice time-order words: 'on day one,' 'by the end of the week,' 'after two weeks.'",
      "Introduce scientific vocabulary: 'germinate,' 'sprout,' 'root,' 'stem,' 'seedling,' 'photosynthesis.'",
      "Ask prediction and hypothesis language: 'I think the plant will grow faster if we put it near the window because...'",
    ],
    estimatedMinutes: 15,
  },
  {
    id: "hs-elem-05",
    title: "Creative Writing and Sharing",
    ageGroup: "early-elementary",
    subject: "Writing",
    speechGoal: "Story structure",
    description:
      "Write an original short story with a clear beginning, middle, and end, then share it aloud. This activity targets narrative structure — a critical language skill that impacts reading comprehension, writing, and social communication.",
    materials: [
      "A story planning worksheet (draw three boxes labeled: Beginning, Middle, End)",
      "Writing paper or a notebook",
      "Pencils, erasers, and colored pencils for illustrations",
      "A 'story starter' prompt card (optional)",
      "A special 'author's chair' for sharing time",
    ],
    steps: [
      "Start with planning. In the 'Beginning' box, draw or write: Who is in the story? Where are they?",
      "In the 'Middle' box: What problem or adventure happens? This is the exciting part!",
      "In the 'End' box: How does the problem get solved? How does the character feel?",
      "Now write the full story using the plan. Encourage at least 5 sentences for early elementary.",
      "Read the story aloud together. Ask: 'Does it make sense? Is there anything you want to add or change?'",
      "Add illustrations that match the story events.",
      "Sit in the 'author's chair' and read the story to an audience. Practice reading with expression and clear articulation.",
    ],
    languageExtensions: [
      "Teach story structure vocabulary: 'character,' 'setting,' 'problem,' 'solution,' 'plot.'",
      "Practice transition words: 'Once upon a time,' 'Suddenly,' 'After that,' 'In the end.'",
      "Ask comprehension questions about their own story: 'Why did your character make that choice?'",
      "Model revision language: 'What is another word for said? Let us try shouted, whispered, or exclaimed.'",
    ],
    estimatedMinutes: 30,
  },
  {
    id: "hs-elem-06",
    title: "Map Reading Directions",
    ageGroup: "early-elementary",
    subject: "Geography",
    speechGoal: "Spatial and directional language",
    description:
      "Use maps (real or hand-drawn) to practice giving and following multi-step directions. Spatial and directional language is essential for clear communication and is often a challenge for children with language delays.",
    materials: [
      "A simple hand-drawn map of your home, yard, or neighborhood (or print one)",
      "Small stickers or markers to place on the map",
      "A compass (real or printed — to introduce N/S/E/W)",
      "A small toy figure to 'walk' along the map",
      "A hidden 'treasure' item (a small treat or sticker) for a treasure hunt",
    ],
    steps: [
      "Create or study the map together. Label key locations: 'Here is the kitchen. Here is the front door.'",
      "Model giving directions using the map: 'Start at the front door. Walk north to the kitchen. Turn left at the table.'",
      "Hide the treasure and write 3-5 directional clues: 'Walk 10 steps forward. Turn right. Look under something soft.'",
      "Have your child follow the directions to find the treasure. If they get lost, ask: 'What direction should you go now?'",
      "Switch roles: your child hides the treasure and writes (or dictates) directions for you to follow.",
      "Introduce compass directions on the map: 'North is toward the top of our map. Which way is the backyard?'",
      "Challenge: give directions to a real nearby place (the mailbox, a neighbor's house) using the map.",
    ],
    languageExtensions: [
      "Practice directional vocabulary: 'north,' 'south,' 'left,' 'right,' 'forward,' 'between,' 'past,' 'beyond.'",
      "Use ordinal language in directions: 'First go to... Second, turn at... Third, look for...'",
      "Introduce spatial prepositions: 'next to,' 'across from,' 'behind,' 'in front of,' 'diagonal from.'",
      "Practice clarity: 'Is that direction clear enough? What would happen if I turned the wrong way?'",
    ],
    estimatedMinutes: 25,
  },
];

// ─── IEP/504 GUIDANCE ───────────────────────────────────────────────────────

export const iepSections: IEPSection[] = [
  {
    id: "iep-01",
    title: "How to Request an Evaluation Through Your School District",
    situation:
      "Even if you homeschool, your child has the right to be evaluated by the local public school district for suspected disabilities, including speech-language delays. This right exists under the Individuals with Disabilities Education Act (IDEA), which applies to all children regardless of educational setting. You do not need a doctor's referral to request an evaluation — you can initiate this process yourself.",
    steps: [
      "Find your local school district's special education department. Call the main office of your zoned school and ask to speak with the Special Education Coordinator or Child Find contact.",
      "Put your request in writing. A verbal request is not enough — a written request starts the legal clock. Email is fine and creates a paper trail.",
      "Include your child's full name, date of birth, your address, and the specific concerns you have (be detailed — not just 'speech delay' but 'my child is 4 and only uses about 50 words').",
      "Request a 'comprehensive speech-language evaluation' specifically. You can also request evaluations in other areas (occupational therapy, educational) if you have concerns.",
      "Send the letter via email AND certified mail if possible. Keep copies of everything.",
      "The district has a specific timeframe to respond (varies by state, typically 15-30 school days to propose an evaluation plan, then 60 days to complete the evaluation once you consent).",
      "You will receive a 'Prior Written Notice' or evaluation plan — review it carefully and sign to give consent. The evaluation cannot proceed without your written consent.",
    ],
    sampleLanguage:
      "Dear [School District Special Education Director],\n\nI am writing to formally request a comprehensive speech-language evaluation for my child, [Full Name], date of birth [DOB]. We reside at [Address] within the [District Name] school district boundaries. [He/She/They] is currently homeschooled.\n\nMy specific concerns include: [describe 2-3 specific concerns, e.g., 'At age 4, my child uses approximately 50 words and is difficult for unfamiliar listeners to understand. She struggles to form 3-word sentences and becomes frustrated when she cannot communicate her needs.']\n\nI understand that under IDEA and [your state's] Child Find obligations, my child is entitled to a free evaluation regardless of educational setting. Please send me the necessary consent forms and evaluation plan at your earliest convenience.\n\nThank you for your prompt attention to this request.\n\nSincerely,\n[Your Name]\n[Phone Number]\n[Email Address]",
  },
  {
    id: "iep-02",
    title: "Understanding IFSP vs IEP",
    situation:
      "Parents often hear the terms IFSP and IEP but are unsure which applies to their child. The IFSP (Individualized Family Service Plan) covers children birth through age 2 under Part C of IDEA and is family-centered — services often happen in the home. The IEP (Individualized Education Program) is for children ages 3-21 under Part B and is educationally focused. The transition from IFSP to IEP happens around age 3 and can feel overwhelming.",
    steps: [
      "If your child is under 3 and you have concerns, contact your state's Early Intervention (EI) program directly (not the school district). Search '[your state] early intervention' to find the contact.",
      "EI services are provided under an IFSP, which is a family-centered plan. Services typically come to your home and focus on coaching parents.",
      "Around age 2.5, the EI team will begin transition planning to move from IFSP to IEP services (Part C to Part B). Your EI coordinator should initiate this.",
      "If your child turns 3 and still needs services, the school district takes over. You will go through the IEP evaluation process at that point.",
      "Key difference: IFSP goals focus on the family ('The family will use strategies to expand [child's] vocabulary during meals'), while IEP goals focus on the child ('[Child] will use 3-4 word sentences in 80% of opportunities').",
      "Homeschooling families can receive IEP services through the school district even if the child does not attend that school. These are sometimes called 'service plans' rather than IEPs.",
    ],
    sampleLanguage:
      "At our upcoming transition meeting, I would like to discuss the following:\n\n1. What specific speech-language services will be available to my child once we transition from the IFSP to the school district?\n2. How will services be delivered since we homeschool — will they be provided at the school building, or are other arrangements available?\n3. Can we schedule the IEP evaluation early enough to avoid any gap in services when the IFSP ends at age 3?\n4. What documentation from our Early Intervention team should we bring to the school district evaluation?\n\nI want to ensure a smooth transition with no interruption in the speech-language support my child has been receiving.",
  },
  {
    id: "iep-03",
    title: "Your Rights as a Homeschooling Parent",
    situation:
      "Many homeschooling parents do not realize that IDEA's 'Child Find' obligation requires school districts to identify, locate, and evaluate ALL children with suspected disabilities in their jurisdiction — including homeschooled children. However, the services available to homeschooled children can differ from those available to enrolled students due to 'proportionate share' funding rules.",
    steps: [
      "Understand Child Find: Your district MUST evaluate your child if you request it, even if your child has never been enrolled in public school. Refusal to evaluate is a violation of federal law.",
      "Know about 'proportionate share': Districts receive federal IDEA funds and must spend a proportionate amount on 'parentally placed private school children' — which includes homeschoolers in most states.",
      "Services under proportionate share are NOT the same as a full IEP. The district creates a 'service plan' and may offer a limited set of services. This is legal but frustrating.",
      "You have the right to attend all meetings about your child, review all records, and receive 'Prior Written Notice' of any decisions the district makes.",
      "If you disagree with the evaluation results, you can request an Independent Educational Evaluation (IEE) at public expense.",
      "You can file a state complaint or request due process if the district fails to follow proper procedures.",
      "Some states have additional protections for homeschooled children beyond federal IDEA requirements. Research your specific state's laws.",
    ],
    sampleLanguage:
      "I want to confirm my understanding of our rights under IDEA as a homeschooling family:\n\n1. Under Child Find (34 CFR 300.111), the district is obligated to identify and evaluate my child regardless of our educational setting.\n2. We are entitled to review all evaluation data and participate in all meetings regarding our child.\n3. We have the right to request an Independent Educational Evaluation if we disagree with the district's findings.\n4. Our child is eligible for services under the proportionate share requirements of IDEA.\n\nPlease provide written documentation of what services are available to parentally placed children in our district and how service plans are developed for homeschooled students.",
  },
  {
    id: "iep-04",
    title: "What to Expect During an Evaluation",
    situation:
      "Once you've requested an evaluation and signed consent, the actual evaluation process can feel mysterious. Knowing what to expect helps you prepare your child, gather relevant information, and feel confident in the process. A typical speech-language evaluation takes 1-2 hours and involves both standardized testing and informal observation.",
    steps: [
      "Before the evaluation, the SLP will likely send you a case history form. Fill it out thoroughly — include pregnancy/birth history, developmental milestones, family history of speech/language difficulties, and your specific concerns.",
      "Bring any relevant documentation: previous evaluations, medical records, a list of words your child says, or video clips of your child communicating at home.",
      "The SLP will typically assess: articulation (speech sounds), receptive language (understanding), expressive language (using words/sentences), voice quality, fluency, and social communication skills.",
      "Standardized tests compare your child to same-age peers. The SLP may also use informal measures like language samples (recording your child talking naturally), observation, and parent interview.",
      "Your child does not need to 'perform' perfectly. Evaluators are trained to work with children who are shy, anxious, or uncooperative. If your child does not demonstrate a skill during testing, share what you see at home.",
      "After the evaluation, you will receive a written report and be invited to a meeting to discuss results. The report will state whether your child qualifies for services and may include recommendations.",
      "You can request a copy of the full report before the meeting so you have time to review it. This is your right.",
    ],
    sampleLanguage:
      "To help prepare for my child's upcoming evaluation, I wanted to share some additional context:\n\nAt home, [child's name] communicates primarily using [words/gestures/a mix]. [He/She/They] can [describe what they can do], but struggles with [specific difficulties]. I have noticed these challenges most during [specific situations, e.g., 'conversations with unfamiliar people' or 'when trying to tell me about something that happened'].\n\nI am attaching [a list of words my child currently uses / video clips from home / previous evaluation reports] for your review prior to the evaluation.\n\nPlease let me know if there is anything else I can provide that would be helpful. I would also like to request a copy of the written evaluation report before our results meeting so I can review it in advance.",
  },
  {
    id: "iep-05",
    title: "If Your Child Qualifies: Service Options for Homeschoolers",
    situation:
      "If your child qualifies for speech-language services after the evaluation, the service delivery options for homeschooled children vary by state and district. Understanding your options helps you make the best decision for your family. You may have more flexibility than you think.",
    steps: [
      "Option 1 — Services at the public school: Your child attends the local school for speech therapy sessions only (typically 1-2 times per week, 20-30 minutes each). This is the most common option offered.",
      "Option 2 — Private speech therapy: You can hire a private SLP and pay out of pocket, use health insurance, or (in some states) use the district's service plan funding. Private therapy offers more scheduling flexibility and individualized attention.",
      "Option 3 — Teletherapy: Many SLPs now offer online speech therapy sessions. This can be especially convenient for homeschooling families. Check if your district offers this or if your insurance covers private teletherapy.",
      "Option 4 — Dual enrollment: Some states allow homeschooled children to 'dual enroll' and participate in select public school services (including speech therapy) while continuing to homeschool for academics.",
      "Ask the school district specifically: 'What service delivery options are available for homeschooled students in our district?' — the answer varies widely by location.",
      "Compare frequency and duration: Private therapy might offer more sessions per week but cost more; school services are free but may only be 20 minutes once a week.",
      "You can always supplement school-based services with private therapy or home practice programs. They are not mutually exclusive.",
    ],
    sampleLanguage:
      "Thank you for sharing the evaluation results. As we discuss next steps, I would like to understand all available service delivery options for our family since we homeschool:\n\n1. What speech-language services are available through the district for homeschooled students? How often and for how long?\n2. Can services be delivered at a location other than the school building? Is teletherapy an option?\n3. Does our district offer dual enrollment for homeschooled students seeking related services?\n4. If we pursue private speech therapy, can the district provide any funding or reimbursement under proportionate share?\n5. What home practice recommendations do you have that I can integrate into our homeschool day?\n\nOur goal is to find the right balance of professional support and home practice that fits our family's schedule and our child's needs.",
  },
  {
    id: "iep-06",
    title: "Advocating for Your Child",
    situation:
      "Advocating for your child in the special education process can feel intimidating, especially if you are new to IEP meetings or disagree with the district's decisions. Remember: you are an equal member of the team, and you know your child better than anyone at the table. Effective advocacy is not about being confrontational — it is about being informed, prepared, and persistent.",
    steps: [
      "Prepare for IEP/service plan meetings: Review all documents beforehand, write down your questions, and bring a summary of your child's strengths AND needs.",
      "Bring support: You have the right to bring anyone to the meeting — a spouse, friend, parent advocate, or even a private SLP who knows your child.",
      "Take notes or ask to record the meeting (check your state's laws on recording). If you get overwhelmed, say: 'I need a moment to process this.'",
      "If you disagree with findings, you do NOT have to sign anything on the spot. Say: 'I would like time to review this before I respond.' Take the documents home.",
      "Request an Independent Educational Evaluation (IEE) at public expense if you disagree with the school's evaluation. The district must either fund the IEE or file for a due process hearing to prove their evaluation was appropriate.",
      "Know your escalation path: informal conversation first, then written letter to the special education director, then state complaint, then due process hearing. Each step is more formal.",
      "Connect with parent advocacy organizations in your state. Many offer free training on IEP rights and can attend meetings with you.",
    ],
    sampleLanguage:
      "Thank you for meeting today. Before we begin, I want to share a few things:\n\n1. I have reviewed the documents you sent and I have some questions I would like to address.\n2. I have brought [name/relationship] to support me in this meeting.\n3. I would like to take notes during our discussion.\n\n[If disagreeing with a decision:]\nI appreciate the team's perspective, but I respectfully disagree with [specific decision or finding]. My concerns are based on [what you observe at home, private evaluation results, etc.]. I would like to request [specific action: additional evaluation, increased service time, different goals, IEE].\n\nI am not prepared to sign today. I would like to take these documents home to review carefully before responding. Please provide me with a copy of everything discussed today, including the Prior Written Notice of the team's decisions.\n\nI would like to schedule a follow-up meeting within [timeframe] to continue this discussion.",
  },
];

// ─── CURRICULUM TIPS ────────────────────────────────────────────────────────

export const curriculumTips: CurriculumTip[] = [
  {
    title: "Read aloud every day — even to older kids",
    description:
      "Shared reading is the single most impactful language activity you can do. Reading aloud to children of any age exposes them to complex sentence structures, rich vocabulary, and narrative patterns they would not encounter in everyday conversation. It also builds listening comprehension, which is the foundation for reading comprehension. Aim for at least 15 minutes of read-aloud time daily, separate from any independent reading your child does.",
  },
  {
    title: "Narrate your day out loud",
    description:
      "Running commentary throughout daily activities builds receptive language without requiring any 'work' from your child. As you cook, clean, or run errands, describe what you are doing: 'I am chopping the carrots into small pieces because they will cook faster that way.' This technique, called 'self-talk,' exposes your child to rich vocabulary, cause-and-effect language, and complex sentences naturally. It is especially powerful for younger children and children with language delays.",
  },
  {
    title: "Let them teach you",
    description:
      "When your child explains something they have learned — whether it is a math concept, a science fact, or how to play a game — they are strengthening expressive language, organization skills, and the ability to take another person's perspective. Ask genuine questions and resist the urge to correct or jump in. The act of teaching requires higher-level language processing than simply answering questions.",
  },
  {
    title: "Turn transitions into language games",
    description:
      "The time between activities is prime language-building territory. While walking to the car, waiting in line, or cleaning up, play quick verbal games: 'I Spy,' rhyming chains, category naming ('name all the animals you can think of'), or 'Would You Rather' questions. These micro-moments add up to significant language practice and make transitions smoother for everyone.",
  },
  {
    title: "Use audiobooks alongside print books",
    description:
      "Pairing audiobooks with physical books lets your child see the text while hearing fluent, expressive reading. This supports phonological awareness, reading fluency, and listening comprehension simultaneously. Many libraries offer free audiobook access through apps like Libby or Hoopla. For children with language delays, audiobooks provide a model of natural speech rhythm and intonation.",
  },
  {
    title: "Create a 'Word of the Week' tradition",
    description:
      "Choose one interesting word each week and make it your family's focus. Write it on a card, look it up together, use it in sentences throughout the week, and tally how often family members use it naturally. By the end of the year, your child will have learned 52 new vocabulary words deeply — not just definitions but real, flexible usage. Choose words that are useful across subjects: 'observe,' 'predict,' 'compare,' 'investigate.'",
  },
  {
    title: "Record their presentations and play them back",
    description:
      "When your child gives a presentation, tells a story, or reads aloud, record them on your phone and watch or listen together afterward. Children are often unaware of their own speech patterns, volume, or clarity until they hear themselves. This is not about criticism — it is about building self-awareness and self-monitoring, which are essential speech therapy skills. Celebrate what they did well before suggesting improvements.",
  },
  {
    title: "Embrace the mess — sensory play builds oral motor skills",
    description:
      "Activities like blowing bubbles, drinking through straws, whistling, chewing crunchy foods, and playing with playdough all build the oral motor strength and coordination needed for clear speech. Incorporate sensory play into your homeschool routine, especially for younger children. Blowing cotton balls across a table, making silly faces in the mirror, and licking peanut butter off lips are all legitimate speech exercises disguised as play.",
  },
];
