-- Private website inquiries stored in THY KINGDOM NETWORK - MAIN.
create table public.jesus_festival_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null constraint jesus_festival_inquiries_name_length check (char_length(name) between 1 and 120),
  email text not null constraint jesus_festival_inquiries_email_length check (char_length(email) between 3 and 180),
  phone text constraint jesus_festival_inquiries_phone_length check (phone is null or char_length(phone) <= 80),
  location text not null constraint jesus_festival_inquiries_location_length check (char_length(location) between 1 and 180),
  organization text constraint jesus_festival_inquiries_organization_length check (organization is null or char_length(organization) <= 180),
  message text not null constraint jesus_festival_inquiries_message_length check (char_length(message) between 8 and 5000),
  status text not null default 'new' constraint jesus_festival_inquiries_status check (status in ('new', 'in_progress', 'contacted', 'closed', 'spam')),
  source text not null default 'jesus-festival-movement' constraint jesus_festival_inquiries_source_length check (char_length(source) between 1 and 80),
  request_fingerprint text constraint jesus_festival_inquiries_fingerprint_length check (request_fingerprint is null or char_length(request_fingerprint) = 64),
  user_agent text constraint jesus_festival_inquiries_user_agent_length check (user_agent is null or char_length(user_agent) <= 500),
  metadata jsonb not null default '{}'::jsonb constraint jesus_festival_inquiries_metadata_object check (jsonb_typeof(metadata) = 'object')
);

comment on table public.jesus_festival_inquiries is
  'Private city-interest submissions from the Jesus Festival Movement website.';

comment on column public.jesus_festival_inquiries.request_fingerprint is
  'One-way salted request fingerprint used only for short-window abuse prevention.';

create index jesus_festival_inquiries_created_at_idx
  on public.jesus_festival_inquiries (created_at desc);

create index jesus_festival_inquiries_fingerprint_created_at_idx
  on public.jesus_festival_inquiries (request_fingerprint, created_at desc)
  where request_fingerprint is not null;

alter table public.jesus_festival_inquiries enable row level security;

revoke all privileges on table public.jesus_festival_inquiries from anon, authenticated;
grant select, insert, update on table public.jesus_festival_inquiries to service_role;
