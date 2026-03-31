// Core types for HomeSLP

export type ContentPath = "child";
export type AccessTier = 'free' | 'trial' | 'paid';
export type SubscriptionStatus = 'trialing' | 'active' | 'past_due' | 'canceled' | 'incomplete' | 'unpaid';
export type QuizType = "speech-milestones";
export type RiskLevel = 'low' | 'moderate' | 'high';
export type ForumCategory = 'wins' | 'questions' | 'tips' | 'introductions';

export interface Profile {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
  active_path: ContentPath | null;
  child_name: string | null;
  child_age_months: number | null;
  care_relationship: string | null;
  condition: string | null;
  onboarding_completed: boolean;
  preferences: Record<string, unknown>;
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  stripe_price_id: string | null;
  status: SubscriptionStatus;
  trial_start: string | null;
  trial_end: string | null;
  current_period_start: string | null;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  content_id: string;
  content_type: string;
  completed: boolean;
  completed_at: string | null;
  xp_earned: number;
}

export interface UserStreak {
  user_id: string;
  current_streak: number;
  longest_streak: number;
  last_activity_date: string | null;
  total_xp: number;
}

export interface ForumTopic {
  id: string;
  user_id: string;
  title: string;
  body: string;
  path_tag: ContentPath | 'general';
  category: ForumCategory;
  pinned: boolean;
  locked: boolean;
  reply_count: number;
  last_reply_at: string | null;
  created_at: string;
  author?: Pick<Profile, 'display_name' | 'avatar_url'>;
}

export interface ForumReply {
  id: string;
  topic_id: string;
  user_id: string;
  body: string;
  created_at: string;
  author?: Pick<Profile, 'display_name' | 'avatar_url'>;
}

export interface EAT10Entry {
  id: string;
  user_id: string;
  answers: Record<number, number>;
  total_score: number;
  risk_level: RiskLevel;
  notes: string | null;
  created_at: string;
}

export interface QuizLead {
  id: string;
  email: string;
  quiz_type: QuizType;
  score: number | null;
  risk_level: RiskLevel | null;
  utm_source: string | null;
  utm_campaign: string | null;
  created_at: string;
}
