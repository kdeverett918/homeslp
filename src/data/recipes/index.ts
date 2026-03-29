export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  iddsiLevel: number;
  iddsiLevelName: string;
  mealType: "breakfast" | "lunch" | "dinner" | "snack" | "dessert";
  prepTimeMinutes: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  safetyTip: string;
  caregiverNote: string;
  tags: string[];
}

export const recipes: Recipe[] = [
  // Level 3 - Liquidised (4 recipes)
  {
    id: "r1",
    slug: "cream-of-tomato-soup",
    title: "Cream of Tomato Soup",
    description:
      "Silky smooth soup with a hint of basil. Strains perfectly to Level 3.",
    iddsiLevel: 3,
    iddsiLevelName: "Liquidised",
    mealType: "lunch",
    prepTimeMinutes: 25,
    servings: 4,
    ingredients: [
      "4 large tomatoes, chopped",
      "1 onion, diced",
      "2 cloves garlic",
      "1 cup vegetable broth",
      "1/2 cup heavy cream",
      "1 tbsp olive oil",
      "Fresh basil leaves",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Heat olive oil in a pot, saut\u00e9 onion and garlic until soft.",
      "Add tomatoes and broth, simmer 15 minutes.",
      "Blend until completely smooth.",
      "Strain through a fine mesh sieve.",
      "Stir in cream and season to taste.",
    ],
    safetyTip:
      "Ensure no lumps remain after straining. Test by pouring through fork prongs \u2014 liquid should flow freely.",
    caregiverNote:
      "This freezes beautifully in portions. Make a big batch on Sunday for the whole week.",
    tags: ["high-protein", "batch-friendly", "vegetarian"],
  },
  {
    id: "r2",
    slug: "mango-lassi",
    title: "Tropical Mango Lassi",
    description:
      "Sweet and creamy mango yogurt drink \u2014 refreshing and hydrating.",
    iddsiLevel: 3,
    iddsiLevelName: "Liquidised",
    mealType: "snack",
    prepTimeMinutes: 5,
    servings: 2,
    ingredients: [
      "1 ripe mango, peeled",
      "1 cup plain yogurt",
      "1/2 cup milk",
      "2 tbsp honey",
      "Pinch of cardamom",
    ],
    instructions: [
      "Combine all ingredients in a blender.",
      "Blend on high for 60 seconds until perfectly smooth.",
      "Strain if any mango fibers remain.",
      "Serve chilled.",
    ],
    safetyTip:
      "Always test thickness \u2014 it should pour freely. If too thick, add more milk.",
    caregiverNote:
      "Great for hydration. The yogurt adds protein and probiotics.",
    tags: ["quick-prep", "hydrating", "high-calorie"],
  },
  {
    id: "r3",
    slug: "pea-mint-soup",
    title: "Smooth Pea & Mint Soup",
    description:
      "Vibrant green soup with refreshing mint \u2014 looks and tastes amazing.",
    iddsiLevel: 3,
    iddsiLevelName: "Liquidised",
    mealType: "lunch",
    prepTimeMinutes: 20,
    servings: 4,
    ingredients: [
      "3 cups frozen peas",
      "1 onion, diced",
      "2 cups chicken broth",
      "1/4 cup fresh mint",
      "2 tbsp butter",
      "1/4 cup cream",
    ],
    instructions: [
      "Saut\u00e9 onion in butter until soft.",
      "Add peas and broth, simmer 10 minutes.",
      "Add mint, blend until completely smooth.",
      "Strain through fine mesh sieve.",
      "Stir in cream and serve.",
    ],
    safetyTip:
      "Pea skins can leave fibers that are a significant choking hazard. Blend thoroughly, then strain TWICE through a fine mesh sieve. Check the final product by rubbing between your fingers — it should feel completely smooth.",
    caregiverNote:
      "The bright green color makes this visually appealing, which matters for appetite.",
    tags: ["high-protein", "colorful", "batch-friendly"],
  },
  {
    id: "r4",
    slug: "vanilla-custard",
    title: "Classic Vanilla Custard",
    description:
      "Rich, smooth custard \u2014 comforting and easy to swallow.",
    iddsiLevel: 3,
    iddsiLevelName: "Liquidised",
    mealType: "dessert",
    prepTimeMinutes: 15,
    servings: 4,
    ingredients: [
      "2 cups whole milk",
      "3 egg yolks",
      "1/4 cup sugar",
      "2 tbsp cornstarch",
      "1 tsp vanilla extract",
      "Pinch of salt",
    ],
    instructions: [
      "Whisk egg yolks, sugar, and cornstarch in a bowl.",
      "Heat milk in a saucepan until steaming.",
      "Slowly pour hot milk into egg mixture, whisking constantly.",
      "Return to pot and cook, stirring, until thickened.",
      "Strain through sieve, add vanilla. Serve warm or chilled.",
    ],
    safetyTip:
      "Ensure custard is smooth with no lumps. Strain if needed.",
    caregiverNote:
      "High in calories and protein \u2014 great when weight maintenance is a concern.",
    tags: ["high-calorie", "comfort-food", "easy"],
  },
  // Level 4 - Pureed (5 recipes)
  {
    id: "r5",
    slug: "butternut-squash-puree",
    title: "Silky Butternut Squash Pur\u00e9e",
    description:
      "Sweet, velvety pur\u00e9e with a touch of nutmeg \u2014 restaurant quality.",
    iddsiLevel: 4,
    iddsiLevelName: "Pureed",
    mealType: "dinner",
    prepTimeMinutes: 35,
    servings: 4,
    ingredients: [
      "1 butternut squash, peeled and cubed",
      "2 tbsp butter",
      "1/4 cup cream",
      "1/4 tsp nutmeg",
      "Salt and pepper",
    ],
    instructions: [
      "Steam squash until very tender, about 20 minutes.",
      "Transfer to blender with butter and cream.",
      "Blend until silky smooth \u2014 no lumps.",
      "Season with nutmeg, salt, and pepper.",
      "Test: should not fall through fork prongs.",
    ],
    safetyTip:
      "Fork drip test: turn fork upside down \u2014 pur\u00e9e should sit on prongs, not drip through.",
    caregiverNote:
      "The natural sweetness makes this popular even when appetite is low.",
    tags: ["vegetarian", "batch-friendly", "naturally-sweet"],
  },
  {
    id: "r6",
    slug: "creamy-mashed-potato",
    title: "Creamy Mashed Potato with Gravy",
    description:
      "Ultra-smooth potatoes with rich gravy \u2014 comfort food at its finest.",
    iddsiLevel: 4,
    iddsiLevelName: "Pureed",
    mealType: "dinner",
    prepTimeMinutes: 30,
    servings: 4,
    ingredients: [
      "4 large potatoes, peeled and cubed",
      "4 tbsp butter",
      "1/2 cup warm milk",
      "1/4 cup cream",
      "Salt and white pepper",
      "Prepared gravy (strained smooth)",
    ],
    instructions: [
      "Boil potatoes until very soft, 15-20 minutes.",
      "Drain well and mash with a ricer (not a masher \u2014 avoids lumps).",
      "Beat in butter, milk, and cream until silky.",
      "Season to taste.",
      "Serve with strained smooth gravy.",
    ],
    safetyTip:
      "A potato ricer gives the smoothest result. Never use a food processor \u2014 makes potatoes gluey.",
    caregiverNote:
      "Add protein by stirring in a scoop of unflavored protein powder. Won\u2019t change the taste.",
    tags: ["comfort-food", "high-calorie", "easy"],
  },
  {
    id: "r7",
    slug: "hummus-smooth",
    title: "Smooth Mediterranean Hummus",
    description:
      "Restaurant-smooth hummus \u2014 far beyond store-bought quality.",
    iddsiLevel: 4,
    iddsiLevelName: "Pureed",
    mealType: "snack",
    prepTimeMinutes: 10,
    servings: 6,
    ingredients: [
      "1 can chickpeas, drained",
      "3 tbsp tahini",
      "2 tbsp lemon juice",
      "1 clove garlic",
      "3 tbsp olive oil",
      "2-4 tbsp water",
      "Salt to taste",
    ],
    instructions: [
      "Process chickpeas in food processor for 2 full minutes.",
      "Add tahini, lemon, garlic, and oil.",
      "Blend another 2 minutes, scraping sides.",
      "Add water 1 tbsp at a time until perfectly smooth.",
      "Spoon tilt test: should hold shape on a spoon.",
    ],
    safetyTip:
      "Chickpea skins can create texture. For extra smoothness, remove skins before processing.",
    caregiverNote:
      "Tahini adds healthy fats and calcium. A great snack between meals.",
    tags: ["high-protein", "quick-prep", "vegetarian"],
  },
  {
    id: "r8",
    slug: "berry-yogurt-bowl",
    title: "Berry Yogurt Smoothie Bowl",
    description:
      "Thick, fruity smoothie bowl with swirls of berry pur\u00e9e.",
    iddsiLevel: 4,
    iddsiLevelName: "Pureed",
    mealType: "breakfast",
    prepTimeMinutes: 10,
    servings: 2,
    ingredients: [
      "1 cup Greek yogurt",
      "1 cup mixed frozen berries",
      "1 banana",
      "2 tbsp honey",
      "1/4 cup milk",
    ],
    instructions: [
      "Blend all ingredients until completely smooth.",
      "Pour into bowls.",
      "Swirl additional berry pur\u00e9e on top for visual appeal.",
      "Serve immediately.",
    ],
    safetyTip:
      "Berry seeds can be a risk. Strain through a fine sieve if seeds are visible.",
    caregiverNote:
      "Greek yogurt packs double the protein of regular yogurt. Great breakfast option.",
    tags: ["high-protein", "quick-prep", "naturally-sweet"],
  },
  {
    id: "r9",
    slug: "chocolate-avocado-mousse",
    title: "Chocolate Avocado Mousse",
    description:
      "Incredibly rich and creamy \u2014 no one guesses the secret ingredient is avocado.",
    iddsiLevel: 4,
    iddsiLevelName: "Pureed",
    mealType: "dessert",
    prepTimeMinutes: 10,
    servings: 4,
    ingredients: [
      "2 ripe avocados",
      "1/3 cup cocoa powder",
      "1/4 cup honey or maple syrup",
      "1/4 cup milk",
      "1 tsp vanilla extract",
      "Pinch of salt",
    ],
    instructions: [
      "Scoop avocado flesh into food processor.",
      "Add cocoa, honey, milk, vanilla, and salt.",
      "Process for 2-3 minutes until completely smooth.",
      "Chill for 30 minutes before serving.",
      "Test consistency \u2014 should hold shape on spoon.",
    ],
    safetyTip:
      "If avocado has brown spots or strings, strain after blending.",
    caregiverNote:
      "Avocado is loaded with healthy fats and calories \u2014 perfect for maintaining weight.",
    tags: ["high-calorie", "dairy-free", "easy"],
  },
  // Level 5 - Minced & Moist (5 recipes)
  {
    id: "r10",
    slug: "cottage-pie",
    title: "Comfort Cottage Pie",
    description:
      "Fork-tender minced beef topped with creamy potato \u2014 pure comfort.",
    iddsiLevel: 5,
    iddsiLevelName: "Minced & Moist",
    mealType: "dinner",
    prepTimeMinutes: 45,
    servings: 4,
    ingredients: [
      "400g beef mince",
      "1 onion, finely diced",
      "1 carrot, grated fine",
      "1 cup beef gravy",
      "3 large potatoes",
      "3 tbsp butter",
      "1/4 cup milk",
    ],
    instructions: [
      "Cook mince until browned, breaking into very fine pieces.",
      "Add onion and carrot, cook until very soft.",
      "Add gravy, simmer until pieces are < 4mm.",
      "Make smooth mashed potato topping.",
      "Layer mince in dish, top with potato, bake 350F for 20 min.",
    ],
    safetyTip:
      "All pieces must be under 4mm. Use a fork to check \u2014 pieces should squash easily between fingers.",
    caregiverNote:
      "The gravy keeps everything moist. Dry mince is a choking risk \u2014 extra gravy is better than not enough.",
    tags: ["high-protein", "comfort-food", "batch-friendly"],
  },
  {
    id: "r11",
    slug: "soft-scrambled-eggs",
    title: "Soft Scrambled Eggs with Cheese",
    description:
      "Pillowy soft eggs with melted cheese \u2014 ready in 5 minutes.",
    iddsiLevel: 5,
    iddsiLevelName: "Minced & Moist",
    mealType: "breakfast",
    prepTimeMinutes: 5,
    servings: 1,
    ingredients: [
      "3 eggs",
      "2 tbsp butter",
      "2 tbsp cream",
      "1/4 cup grated cheddar",
      "Salt and pepper",
    ],
    instructions: [
      "Whisk eggs with cream.",
      "Melt butter in nonstick pan over LOW heat.",
      "Add eggs, stir constantly with spatula.",
      "Remove from heat while still slightly wet.",
      "Fold in cheese, season, serve immediately.",
    ],
    safetyTip:
      "Eggs must be soft and moist, not dry or rubbery. Remove from heat early \u2014 they continue cooking.",
    caregiverNote:
      "Quick, high-protein breakfast. Add a splash of cream to keep them extra soft.",
    tags: ["quick-prep", "high-protein", "easy"],
  },
  {
    id: "r12",
    slug: "tuna-salad",
    title: "Flaked Tuna Salad",
    description:
      "Moist, flaked tuna with mayo and soft vegetables \u2014 protein-packed.",
    iddsiLevel: 5,
    iddsiLevelName: "Minced & Moist",
    mealType: "lunch",
    prepTimeMinutes: 10,
    servings: 2,
    ingredients: [
      "1 can tuna, well drained",
      "3 tbsp mayonnaise",
      "1 stick celery, grated fine",
      "1 tbsp lemon juice",
      "Salt and pepper",
    ],
    instructions: [
      "Flake tuna finely with a fork \u2014 no large chunks.",
      "Grate celery on fine grater (discard strings).",
      "Mix tuna, celery, mayo, and lemon juice.",
      "Ensure all pieces are under 4mm.",
      "Add extra mayo if needed for moisture.",
    ],
    safetyTip:
      "Celery strings are a choking hazard. Grate finely and check for strings before serving.",
    caregiverNote:
      "Tuna is an excellent protein source. Serve on soft bread (crusts removed) or alone.",
    tags: ["high-protein", "quick-prep", "no-cook"],
  },
  {
    id: "r13",
    slug: "minced-chicken-curry",
    title: "Mild Minced Chicken Curry",
    description:
      "Aromatic, moist curry with tender minced chicken \u2014 deeply flavorful.",
    iddsiLevel: 5,
    iddsiLevelName: "Minced & Moist",
    mealType: "dinner",
    prepTimeMinutes: 30,
    servings: 4,
    ingredients: [
      "500g chicken mince",
      "1 onion, finely diced",
      "2 tbsp mild curry paste",
      "1 can coconut milk",
      "1/2 cup chicken broth",
      "1 tbsp oil",
    ],
    instructions: [
      "Cook chicken mince in oil, breaking into tiny pieces.",
      "Add onion, cook until very soft.",
      "Stir in curry paste, cook 1 minute.",
      "Add coconut milk and broth, simmer 15 minutes.",
      "Mash with fork to ensure pieces < 4mm.",
    ],
    safetyTip:
      "Check particle size after cooking. All pieces must squash easily between thumb and finger.",
    caregiverNote:
      "Coconut milk adds calories and makes the sauce naturally smooth. Serve with very soft rice.",
    tags: ["high-protein", "flavorful", "batch-friendly"],
  },
  {
    id: "r14",
    slug: "banana-pancakes",
    title: "Fluffy Banana Pancakes",
    description:
      "Soft, moist pancakes that melt in the mouth \u2014 naturally sweet.",
    iddsiLevel: 5,
    iddsiLevelName: "Minced & Moist",
    mealType: "breakfast",
    prepTimeMinutes: 15,
    servings: 2,
    ingredients: [
      "1 ripe banana, mashed",
      "2 eggs",
      "1/4 cup flour",
      "1/4 tsp baking powder",
      "Butter for cooking",
      "Maple syrup to serve",
    ],
    instructions: [
      "Mash banana until no lumps remain.",
      "Whisk in eggs, flour, and baking powder.",
      "Cook small pancakes in buttered pan on low heat.",
      "Flip when bubbles form, cook until golden.",
      "Serve with plenty of maple syrup for moisture.",
    ],
    safetyTip:
      "Pancakes must be very soft — not crispy edges. Press with fork RIGHT BEFORE SERVING to check they compress easily. Pancakes firm up as they cool, so re-check texture if they've been sitting.",
    caregiverNote:
      "The syrup provides essential moisture. Dry pancakes are not safe at this level.",
    tags: ["easy", "naturally-sweet", "quick-prep"],
  },
  // Level 6 - Soft & Bite-Sized (6 recipes)
  {
    id: "r15",
    slug: "salmon-dill-sauce",
    title: "Baked Salmon with Creamy Dill Sauce",
    description:
      "Tender, flaky salmon in a silky dill sauce \u2014 elegant and nutritious.",
    iddsiLevel: 6,
    iddsiLevelName: "Soft & Bite-Sized",
    mealType: "dinner",
    prepTimeMinutes: 25,
    servings: 2,
    ingredients: [
      "2 salmon fillets",
      "1/4 cup sour cream",
      "1 tbsp fresh dill",
      "1 tbsp lemon juice",
      "1 tbsp butter",
      "Salt and pepper",
    ],
    instructions: [
      "Bake salmon at 375F for 15-18 minutes until flaky.",
      "Mix sour cream, dill, lemon juice for sauce.",
      "Flake salmon into 1.5cm bite-sized pieces.",
      "Ensure no bones remain.",
      "Serve with generous sauce.",
    ],
    safetyTip:
      "Check carefully for small bones. Salmon should flake easily \u2014 if it resists, cook longer.",
    caregiverNote:
      "Omega-3 fatty acids in salmon support brain health. Perfect for stroke recovery nutrition.",
    tags: ["high-protein", "omega-3", "elegant"],
  },
  {
    id: "r16",
    slug: "soft-pasta-bake",
    title: "Creamy Soft Pasta Bake",
    description:
      "Well-cooked pasta in cheese sauce \u2014 warm, filling comfort food.",
    iddsiLevel: 6,
    iddsiLevelName: "Soft & Bite-Sized",
    mealType: "dinner",
    prepTimeMinutes: 35,
    servings: 4,
    ingredients: [
      "2 cups small pasta (macaroni)",
      "2 cups cheese sauce",
      "1/2 cup grated cheddar",
      "1/4 cup cream",
      "Butter for dish",
    ],
    instructions: [
      "Cook pasta 2-3 minutes BEYOND package directions until very soft.",
      "Test: pasta should squash easily between fingers.",
      "Mix with cheese sauce and cream.",
      "Pour into buttered dish, top with cheese.",
      "Bake 350F for 15 minutes until bubbly.",
    ],
    safetyTip:
      "Pasta must be overcooked by normal standards. It should squash easily between tongue and palate.",
    caregiverNote:
      "Cut any long pasta into 1.5cm pieces. Small shapes like macaroni are safest.",
    tags: ["comfort-food", "high-calorie", "easy"],
  },
  {
    id: "r17",
    slug: "steamed-fish-vegetables",
    title: "Steamed White Fish with Mashed Vegetables",
    description:
      "Delicate steamed fish with colorful vegetable mash \u2014 light and nutritious.",
    iddsiLevel: 6,
    iddsiLevelName: "Soft & Bite-Sized",
    mealType: "dinner",
    prepTimeMinutes: 20,
    servings: 2,
    ingredients: [
      "2 white fish fillets",
      "1 carrot",
      "1 potato",
      "1/2 cup peas",
      "2 tbsp butter",
      "Lemon juice",
    ],
    instructions: [
      "Steam fish for 8-10 minutes until easily flaked.",
      "Boil vegetables until very soft.",
      "Mash vegetables with butter.",
      "Flake fish into bite-sized pieces (1.5cm max).",
      "Serve fish on bed of mashed vegetables with lemon.",
    ],
    safetyTip:
      "Remove ALL bones. Fish should flake with zero resistance.",
    caregiverNote:
      "Light and easily digestible. Good for days when heavier meals feel like too much.",
    tags: ["light", "high-protein", "easy"],
  },
  {
    id: "r18",
    slug: "chicken-stew",
    title: "Tender Chicken & Vegetable Stew",
    description:
      "Fork-tender chicken in rich broth with soft vegetables \u2014 deeply satisfying.",
    iddsiLevel: 6,
    iddsiLevelName: "Soft & Bite-Sized",
    mealType: "dinner",
    prepTimeMinutes: 40,
    servings: 4,
    ingredients: [
      "500g chicken thighs, cubed small",
      "2 potatoes, cubed",
      "2 carrots, cubed",
      "1 onion, diced",
      "2 cups chicken broth",
      "1 tbsp flour",
      "Herbs to taste",
    ],
    instructions: [
      "Brown chicken in pot.",
      "Add onion, cook until soft.",
      "Add potatoes, carrots, broth, and herbs.",
      "Simmer 25-30 minutes until everything is very tender.",
      "Cut all pieces to 1.5cm or smaller.",
    ],
    safetyTip:
      "All pieces must be 1.5cm or smaller and soft enough to squash with a fork.",
    caregiverNote:
      "Make a big batch \u2014 this reheats perfectly. The broth keeps everything moist.",
    tags: ["batch-friendly", "comfort-food", "high-protein"],
  },
  {
    id: "r19",
    slug: "french-toast",
    title: "Soft French Toast",
    description:
      "Custardy, melt-in-your-mouth French toast \u2014 breakfast luxury.",
    iddsiLevel: 6,
    iddsiLevelName: "Soft & Bite-Sized",
    mealType: "breakfast",
    prepTimeMinutes: 15,
    servings: 2,
    ingredients: [
      "4 slices thick white bread (crusts removed)",
      "2 eggs",
      "1/4 cup milk",
      "1 tsp cinnamon",
      "Butter for cooking",
      "Maple syrup",
    ],
    instructions: [
      "Whisk eggs, milk, and cinnamon.",
      "Soak bread slices for 30 seconds each side.",
      "Cook in buttered pan on medium-low until golden.",
      "Cut into 1.5cm bite-sized pieces.",
      "Serve with plenty of maple syrup.",
    ],
    safetyTip:
      "Remove crusts \u2014 they can be too hard. Center should be custardy, not dry.",
    caregiverNote:
      "The egg soak adds protein. Cut into small pieces and ensure each piece is moist with syrup.",
    tags: ["easy", "comfort-food", "quick-prep"],
  },
  {
    id: "r20",
    slug: "greek-lemon-chicken-soup",
    title: "Greek Lemon Chicken Soup (Avgolemono)",
    description:
      "Silky egg-lemon soup with tender shredded chicken \u2014 healing and delicious.",
    iddsiLevel: 6,
    iddsiLevelName: "Soft & Bite-Sized",
    mealType: "lunch",
    prepTimeMinutes: 30,
    servings: 4,
    ingredients: [
      "4 cups chicken broth",
      "1 cup cooked chicken, finely shredded",
      "1/2 cup orzo pasta",
      "3 eggs",
      "Juice of 2 lemons",
      "Salt and pepper",
    ],
    instructions: [
      "Bring broth to boil, add orzo, cook until very soft.",
      "Shred chicken into very small pieces.",
      "Whisk eggs and lemon juice together.",
      "Slowly ladle hot broth into egg mixture while whisking.",
      "Return to pot, add chicken, stir until thickened. Do not boil.",
    ],
    safetyTip:
      "Chicken must be finely shredded \u2014 no chunks. Orzo should be overcooked until very soft.",
    caregiverNote:
      "This soup is traditionally given to people recovering from illness in Greece. It\u2019s gentle, nourishing, and hydrating.",
    tags: ["healing", "hydrating", "high-protein"],
  },
  // NOTE: These recipes are IDDSI-informed original content and do not cover
  // all IDDSI levels. Level 0 (Thin), Level 1 (Slightly Thick), Level 2 (Mildly Thick),
  // and Level 7 (Easy to Chew/Regular) are not included.
  // Always follow the specific diet level prescribed by your SLP or physician.
  // Temperature: Serve foods at a comfortable eating temperature (not scalding hot).
  // Reheating: Textures may change when reheated — always re-test consistency.
];
