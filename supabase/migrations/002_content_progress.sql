-- User progress tracking
create table public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  content_id text not null,
  content_type text not null,
  completed boolean default false,
  completed_at timestamptz,
  xp_earned int default 0,
  created_at timestamptz default now(),
  unique(user_id, content_id)
);

alter table public.user_progress enable row level security;

create policy "Users can view own progress"
  on public.user_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.user_progress for update
  using (auth.uid() = user_id);

-- User streaks
create table public.user_streaks (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  current_streak int default 0,
  longest_streak int default 0,
  last_activity_date date,
  total_xp int default 0
);

alter table public.user_streaks enable row level security;

create policy "Users can view own streaks"
  on public.user_streaks for select
  using (auth.uid() = user_id);

create policy "Users can upsert own streaks"
  on public.user_streaks for insert
  with check (auth.uid() = user_id);

create policy "Users can update own streaks"
  on public.user_streaks for update
  using (auth.uid() = user_id);
