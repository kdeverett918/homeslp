-- EAT-10 self-monitoring entries
create table public.eat10_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  answers jsonb not null,
  total_score int not null,
  risk_level text not null,
  notes text,
  created_at timestamptz default now()
);

create index idx_eat10_user_date on public.eat10_entries(user_id, created_at desc);

alter table public.eat10_entries enable row level security;

create policy "Users can view own entries"
  on public.eat10_entries for select
  using (auth.uid() = user_id);

create policy "Users can insert own entries"
  on public.eat10_entries for insert
  with check (auth.uid() = user_id);

-- Quiz lead capture (pre-signup)
create table public.quiz_leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  quiz_type text not null,
  score int,
  risk_level text,
  utm_source text,
  utm_campaign text,
  utm_content text,
  created_at timestamptz default now()
);

-- No RLS needed - service role only inserts via API
alter table public.quiz_leads enable row level security;
