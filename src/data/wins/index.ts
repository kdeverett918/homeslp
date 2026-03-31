export interface ParentWin {
  id: string;
  childAgeMonths: number;
  category:
    | "first-word"
    | "new-sound"
    | "two-words"
    | "sentence"
    | "social"
    | "feeding"
    | "milestone"
    | "other";
  story: string;
  weeksOnPlatform: number;
  path: "child";
}

export const parentWins: ParentWin[] = [
  {
    id: "win-01",
    childAgeMonths: 14,
    category: "first-word",
    story:
      "He said 'ball' today. Clear as day. I was rolling it to him like the app said and he just... said it. I cried in the middle of the living room floor. My husband thought something was wrong.",
    weeksOnPlatform: 3,
    path: "child",
  },
  {
    id: "win-02",
    childAgeMonths: 18,
    category: "first-word",
    story:
      "After weeks of doing the pause-and-wait thing at snack time, she finally said 'mo' for more. It's not perfect but I KNOW what she means and she knows it works. She's been saying it all day.",
    weeksOnPlatform: 4,
    path: "child",
  },
  {
    id: "win-03",
    childAgeMonths: 22,
    category: "two-words",
    story:
      "My son said 'mama up' when he wanted to be picked up. TWO words together. His SLP said that's a huge deal and I didn't even realize it was happening because I was just doing the one-word-up thing every day.",
    weeksOnPlatform: 6,
    path: "child",
  },
  {
    id: "win-04",
    childAgeMonths: 16,
    category: "new-sound",
    story:
      "We've been doing animal sounds during play and today she said 'moo' while pointing at a cow in a book. First time she's ever imitated a sound on purpose. I replayed it in my head all night.",
    weeksOnPlatform: 2,
    path: "child",
  },
  {
    id: "win-05",
    childAgeMonths: 26,
    category: "sentence",
    story:
      "He said 'I want juice please' at dinner. A FULL SENTENCE. Four words. I almost dropped the plate. Three months ago he wasn't putting two words together. I don't know what happened but something clicked.",
    weeksOnPlatform: 12,
    path: "child",
  },
  {
    id: "win-06",
    childAgeMonths: 20,
    category: "social",
    story:
      "At the playground today another kid waved at my daughter and she waved BACK. Then she said 'hi.' She's never done that with a peer before. Only adults. I pretended to tie my shoe so no one would see me tearing up.",
    weeksOnPlatform: 5,
    path: "child",
  },
  {
    id: "win-07",
    childAgeMonths: 13,
    category: "social",
    story:
      "He pointed at an airplane in the sky today. Not because he wanted it -- he just wanted me to see it too. His pediatrician had asked about pointing at the last visit and I didn't have a good answer. Now I do.",
    weeksOnPlatform: 2,
    path: "child",
  },
  {
    id: "win-08",
    childAgeMonths: 30,
    category: "new-sound",
    story:
      "She finally said 'fish' instead of 'pish.' The /f/ sound just appeared out of nowhere at bath time. She was playing with her bath toys and said 'my fish' and I went WHAT. She looked at me like I was crazy.",
    weeksOnPlatform: 8,
    path: "child",
  },
  {
    id: "win-09",
    childAgeMonths: 24,
    category: "feeding",
    story:
      "He tried mashed potatoes today. VOLUNTARILY. He put the spoon in his mouth and didn't gag. He didn't eat a lot but he tried it. For a kid who only ate 6 foods two months ago this is everything.",
    weeksOnPlatform: 8,
    path: "child",
  },
  {
    id: "win-10",
    childAgeMonths: 17,
    category: "first-word",
    story:
      "We were reading Goodnight Moon for the millionth time and when I paused before 'moon' she whispered it. 'Moon.' Her first real word from a book. I read that book differently now.",
    weeksOnPlatform: 5,
    path: "child",
  },
  {
    id: "win-11",
    childAgeMonths: 28,
    category: "two-words",
    story:
      "He said 'no bath' when I started the water tonight. I've never been so happy to hear the word no. He's using words to PROTEST instead of just screaming. That's communication!",
    weeksOnPlatform: 7,
    path: "child",
  },
  {
    id: "win-12",
    childAgeMonths: 36,
    category: "sentence",
    story:
      "My daughter told her grandma on FaceTime 'I went to the park and I played on the slide.' Grandma looked at me with her mouth open. Six months ago she was barely combining words. I'm still in shock honestly.",
    weeksOnPlatform: 20,
    path: "child",
  },
  {
    id: "win-13",
    childAgeMonths: 15,
    category: "milestone",
    story:
      "He followed a two-step direction today. I said 'get the ball and bring it to daddy' and he DID IT. Both steps. No pointing. No repeating. He just understood. I had to text everyone I know.",
    weeksOnPlatform: 4,
    path: "child",
  },
  {
    id: "win-14",
    childAgeMonths: 19,
    category: "social",
    story:
      "She brought me a book and put it in my lap. Then she sat down and waited for me to read it. She initiated the interaction. She WANTED to share something with me. I ugly cried.",
    weeksOnPlatform: 3,
    path: "child",
  },
  {
    id: "win-15",
    childAgeMonths: 34,
    category: "new-sound",
    story:
      "He said 'snake' with a perfect /s/ today. No more 'nake.' We've been doing the snake hissing game at bath time and I guess it worked? He looked so proud of himself. I told him to say it 10 more times lol.",
    weeksOnPlatform: 10,
    path: "child",
  },
  {
    id: "win-16",
    childAgeMonths: 12,
    category: "first-word",
    story:
      "She signed 'more' at lunch today. I know it's not a spoken word but her SLP says signs count and honestly the RELIEF of knowing she can tell me what she wants... I can't explain it. The tantrums at meals already got better.",
    weeksOnPlatform: 2,
    path: "child",
  },
  {
    id: "win-17",
    childAgeMonths: 21,
    category: "two-words",
    story:
      "We were at the zoo and he said 'big bear' while pointing at the grizzly exhibit. Adjective + noun. I heard the SLP in my head saying 'listen for two-word combos' and there it was. In the wild. At the zoo.",
    weeksOnPlatform: 6,
    path: "child",
  },
  {
    id: "win-18",
    childAgeMonths: 40,
    category: "sentence",
    story:
      "She asked me 'Why is the moon out in the daytime?' A WHY question. With perfect grammar. She's been in therapy for a year and a half and I remember when she couldn't say her own name.",
    weeksOnPlatform: 24,
    path: "child",
  },
  {
    id: "win-19",
    childAgeMonths: 11,
    category: "social",
    story:
      "He started clapping when I sang 'If You're Happy and You Know It.' First time he's ever done an action to a song. It's not a word but it IS communication and I'm counting it.",
    weeksOnPlatform: 1,
    path: "child",
  },
  {
    id: "win-20",
    childAgeMonths: 32,
    category: "feeding",
    story:
      "She ate a chicken nugget at a restaurant. Not at home where everything is safe. At a RESTAURANT with people around and different plates and a different texture of nugget. I almost fell out of the booth.",
    weeksOnPlatform: 14,
    path: "child",
  },
  {
    id: "win-21",
    childAgeMonths: 16,
    category: "milestone",
    story:
      "He responded to his name the first time I called it today. Not the second or third time. THE FIRST TIME. Turned right around and looked at me. That's been my biggest worry and it happened so casually I almost missed it.",
    weeksOnPlatform: 4,
    path: "child",
  },
  {
    id: "win-22",
    childAgeMonths: 25,
    category: "first-word",
    story:
      "After being completely nonverbal until 22 months, he now has 15 words. FIFTEEN. In three months. His pediatrician said 'word explosion' and I cried right there in the office. She teared up too honestly.",
    weeksOnPlatform: 12,
    path: "child",
  },
  {
    id: "win-23",
    childAgeMonths: 29,
    category: "social",
    story:
      "My daughter said 'bye bye' to a stranger at the grocery store completely on her own. She waved and everything. The lady said 'oh she's so sweet' and my daughter SMILED at her. Social communication win of the century.",
    weeksOnPlatform: 9,
    path: "child",
  },
  {
    id: "win-24",
    childAgeMonths: 42,
    category: "other",
    story:
      "His preschool teacher pulled me aside today and said 'I just want you to know, he's doing really well. His language is right on track.' She doesn't know how far he's come. I thanked her and sobbed in my car for ten minutes.",
    weeksOnPlatform: 30,
    path: "child",
  },
  {
    id: "win-25",
    childAgeMonths: 18,
    category: "feeding",
    story:
      "He drank from a straw for the first time today. I know that sounds small but his oral motor skills have been so weak. His SLP has been working on lip closure and today it all came together with a juice box.",
    weeksOnPlatform: 6,
    path: "child",
  },
  {
    id: "win-26",
    childAgeMonths: 23,
    category: "two-words",
    story:
      "She said 'daddy home' when she heard the garage door open. She's using language to COMMENT on what's happening, not just to request things. That's a whole different level and I didn't even know to look for it until I read about it here.",
    weeksOnPlatform: 5,
    path: "child",
  },
  {
    id: "win-27",
    childAgeMonths: 20,
    category: "new-sound",
    story:
      "He said 'buh buh buh' while playing with bubbles. First time he's used a consonant-vowel combination during play. His therapist was SO excited at the next session when I told her. Baby steps but they add up.",
    weeksOnPlatform: 3,
    path: "child",
  },
  {
    id: "win-28",
    childAgeMonths: 48,
    category: "milestone",
    story:
      "She told me a story about what happened at school today. Beginning, middle, and end. 'First we played outside, then we had snack, then Jacob pushed me but the teacher helped.' I asked a follow-up question and she ANSWERED IT. We're having conversations now.",
    weeksOnPlatform: 28,
    path: "child",
  },
  {
    id: "win-29",
    childAgeMonths: 15,
    category: "social",
    story:
      "He made eye contact with me during peek-a-boo today and LAUGHED. Real belly laughing. He held eye contact for a few seconds and it was the most connected I've felt with him in months. I didn't realize how much I needed that.",
    weeksOnPlatform: 2,
    path: "child",
  },
  {
    id: "win-30",
    childAgeMonths: 27,
    category: "other",
    story:
      "I stopped Googling at 3am. I used to spiral every night reading about delays and worst-case scenarios. Having a plan and seeing progress changed everything. I actually sleep now. That's a win for the whole family.",
    weeksOnPlatform: 8,
    path: "child",
  },
  {
    id: "win-31",
    childAgeMonths: 33,
    category: "new-sound",
    story:
      "She said 'cup' instead of 'tup.' The /k/ sound is here! Her SLP said it might take months to generalize but she's already using it in 'cat' and 'car' too. Three for the price of one!",
    weeksOnPlatform: 11,
    path: "child",
  },
  {
    id: "win-32",
    childAgeMonths: 10,
    category: "milestone",
    story:
      "She babbled 'dadada' at my husband today and he looked at me and said 'did she just say dada?' I said close enough. She's making consonant sounds! That's all I wanted to hear this month.",
    weeksOnPlatform: 1,
    path: "child",
  },
  {
    id: "win-33",
    childAgeMonths: 38,
    category: "sentence",
    story:
      "He said 'I don't want the green one, I want the blue one.' That's a complex sentence with a negation and a comparison. A year ago his longest utterance was 'want that.' I don't even know how we got here but we're here.",
    weeksOnPlatform: 16,
    path: "child",
  },
  {
    id: "win-34",
    childAgeMonths: 19,
    category: "feeding",
    story:
      "She touched a piece of broccoli. Didn't eat it. Didn't lick it. She TOUCHED it. And she didn't scream. Her feeding therapist said that's the first step and to celebrate it. So I'm celebrating it.",
    weeksOnPlatform: 4,
    path: "child",
  },
  {
    id: "win-35",
    childAgeMonths: 24,
    category: "other",
    story:
      "I used the doctor visit script from the app at our 2-year checkup and for the first time I didn't freeze when the pediatrician said 'any concerns?' I said everything I needed to say and got the referral. I felt like a different person walking out of there.",
    weeksOnPlatform: 6,
    path: "child",
  },
  {
    id: "win-39",
    childAgeMonths: 31,
    category: "two-words",
    story:
      "He's been saying single words for months but today at breakfast he looked at the empty bowl and said 'more cereal.' I froze. He said it again. 'More cereal.' My late talker is combining words. It's really happening.",
    weeksOnPlatform: 14,
    path: "child",
  },
  {
    id: "win-40",
    childAgeMonths: 14,
    category: "social",
    story:
      "She played peek-a-boo with her older brother today. She pulled the blanket off his face and squealed. Then she put it BACK ON and waited. She initiated a game. She took turns. She's 14 months old and she gets it. My heart is so full.",
    weeksOnPlatform: 3,
    path: "child",
  },
];
