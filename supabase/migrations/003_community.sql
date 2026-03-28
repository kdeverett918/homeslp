-- Forum topics
create table public.forum_topics (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  body text not null,
  path_tag text check (path_tag in ('child', 'adult', 'general')),
  category text check (category in ('wins', 'questions', 'tips', 'introductions')),
  pinned boolean default false,
  locked boolean default false,
  reply_count int default 0,
  last_reply_at timestamptz,
  created_at timestamptz default now()
);

alter table public.forum_topics enable row level security;

create policy "Authenticated users can view topics"
  on public.forum_topics for select
  to authenticated
  using (true);

create policy "Authenticated users can create topics"
  on public.forum_topics for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can update own topics"
  on public.forum_topics for update
  using (auth.uid() = user_id);

-- Forum replies
create table public.forum_replies (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid references public.forum_topics(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz default now()
);

alter table public.forum_replies enable row level security;

create policy "Authenticated users can view replies"
  on public.forum_replies for select
  to authenticated
  using (true);

create policy "Authenticated users can create replies"
  on public.forum_replies for insert
  to authenticated
  with check (auth.uid() = user_id);
