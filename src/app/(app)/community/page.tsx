"use client";

import { useState } from "react";
import { MessageCircle, ThumbsUp, Clock, User, Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

const CATEGORIES = ["all", "wins", "questions", "tips", "introductions"] as const;
type Category = (typeof CATEGORIES)[number];

const CATEGORY_COLORS: Record<string, string> = {
  wins: "bg-sage-100 text-sage-700",
  questions: "bg-blue-100 text-blue-700",
  tips: "bg-amber-100 text-amber-700",
  introductions: "bg-rose-100 text-rose-700",
};

const SAMPLE_TOPICS = [
  { id: "1", author: "Sarah M.", category: "wins" as const, title: "My son said his first two-word phrase today!", preview: "We've been doing the Wait and Model technique for 3 weeks and today at breakfast he said 'more milk'! I literally cried.", replies: 12, likes: 34, time: "2 hours ago" },
  { id: "2", author: "James R.", category: "questions" as const, title: "Any favorite ways to build language during snack time?", preview: "My son is motivated by crackers more than any toy in the house. Looking for snack routines that turn into easy communication practice instead of a battle.", replies: 8, likes: 15, time: "5 hours ago" },
  { id: "3", author: "Maria L.", category: "tips" as const, title: "Bath time language hack that worked for us", preview: "We bought foam letters for the bath and now my daughter tries to name every letter. She went from 10 words to 30 in a month.", replies: 6, likes: 28, time: "1 day ago" },
  { id: "4", author: "David K.", category: "wins" as const, title: "My daughter finally tolerated a new texture at dinner", preview: "She touched roasted sweet potato, smelled it, and actually took one tiny bite without gagging. Feeding progress can feel microscopic, but tonight felt huge.", replies: 21, likes: 67, time: "1 day ago" },
  { id: "5", author: "Ashley T.", category: "introductions" as const, title: "New here - 2 year old with speech delay", preview: "Hi everyone! Our pediatrician referred us for evaluation but the wait is 8 months. Found HomeSLP and starting Week 1 today. Any advice for beginners?", replies: 14, likes: 22, time: "2 days ago" },
  { id: "6", author: "Linda P.", category: "tips" as const, title: "The refrigerator card trick that changed our routine", preview: "I laminated the Week 1 fridge card and put it at eye level near the high chair. It stopped me from freezing up and helped grandparents follow the same language routines.", replies: 9, likes: 41, time: "3 days ago" },
  { id: "7", author: "Kevin W.", category: "questions" as const, title: "Is it normal for progress to feel slow?", preview: "We're on Week 3 and I feel like nothing has changed. My daughter still mostly points and grunts. When did you start seeing results?", replies: 17, likes: 19, time: "4 days ago" },
];

export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = activeCategory === "all"
    ? SAMPLE_TOPICS
    : SAMPLE_TOPICS.filter((t) => t.category === activeCategory);

  return (
    <div className="max-w-3xl space-y-6">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Dashboard
      </Link>

      <FadeIn>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-7 h-7 text-primary" />
              <h1 className="font-heading text-2xl font-bold sm:text-3xl">Community</h1>
            </div>
            <p className="mt-1.5 text-muted-foreground">Connect with families on the same journey.</p>
          </div>
          <button
            disabled
            title="Community posting opens soon"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary/50 px-4 py-2 text-sm font-medium text-primary-foreground cursor-not-allowed opacity-60"
          >
            <Plus className="w-4 h-4" /> New Post
          </button>
        </div>
      </FadeIn>

      {/* Category tabs */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-warm-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Topics */}
      <StaggerChildren className="space-y-3">
        {filtered.map((topic) => (
          <StaggerItem key={topic.id}>
            <div className="rounded-xl border bg-card p-5 space-y-2 hover:shadow-warm-sm transition-shadow cursor-pointer">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <span className="text-xs font-medium">{topic.author}</span>
                    <span className="text-xs text-muted-foreground ml-2 inline-flex items-center gap-1"><Clock className="w-3 h-3" />{topic.time}</span>
                  </div>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold capitalize ${CATEGORY_COLORS[topic.category]}`}>
                  {topic.category}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-sm">{topic.title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{topic.preview}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" />{topic.replies} replies</span>
                <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" />{topic.likes}</span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <p className="text-xs text-muted-foreground italic text-center">
        Posts in the community are from other members, not medical professionals. Never rely on community advice for medical decisions.
      </p>
    </div>
  );
}
