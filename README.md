# SM Infotech

Production-ready, minimalist digital marketing website for **SM Infotech**, built with Vite + React + TypeScript + Tailwind CSS, with a Supabase-powered jobs system and a simple admin panel.

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript, React Router DOM
- **Styling**: Tailwind CSS, Lucide React icons
- **Backend / DB**: Supabase (jobs only)

## Quick Start

```bash
npm install
cp .env.example .env   # then fill in your Supabase URL + anon key
npm run dev
```

Open http://localhost:5173

> The site renders fully without Supabase configured. Careers will simply show "No openings available currently", and the Admin panel will surface a clear notice until env vars are set.

## Environment Variables

Create a `.env` file in the project root:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Supabase Setup

Run this SQL in the Supabase SQL editor:

```sql
drop table if exists public.jobs cascade;

create table public.jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  department text not null,
  location text not null,
  type text not null,
  created_at timestamptz not null default now()
);

alter table public.jobs enable row level security;

-- Public can read jobs (Careers page)
create policy "jobs_read_public"
  on public.jobs for select
  to anon, authenticated
  using (true);

-- Allow inserts and deletes for both anon and authenticated roles.
-- (Supabase newer projects may resolve the anon key as 'authenticated' role
--  depending on your project settings, so we cover both.)
create policy "jobs_insert_anon"
  on public.jobs for insert
  to anon, authenticated
  with check (true);

create policy "jobs_delete_anon"
  on public.jobs for delete
  to anon, authenticated
  using (true);
```

## Routes

| Path        | Description                       |
| ----------- | --------------------------------- |
| `/`         | Home                              |
| `/about`    | About                             |
| `/services` | Services                          |
| `/careers`  | Careers (live jobs from Supabase) |
| `/contact`  | Contact form                      |
| `/admin`    | Admin panel (job management)      |

## Admin Panel

- Static credentials (intended for internal use):
  - **User ID:** `admin`
  - **Password:** `admin123`
- Session is kept in `sessionStorage` (cleared when the tab closes).
- From here you can add and delete job listings—changes appear immediately on `/careers`.

> For real production use, change the static credentials in `src/pages/Admin.tsx`, or migrate to Supabase Auth and tighten the RLS policies above.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build

## Project Structure

```
src/
  components/   # Layout, Navbar, Footer
  lib/          # supabase client, utils
  pages/        # Home, About, Services, Careers, Contact, Admin, NotFound
  App.tsx       # Routes (with lazy-loaded pages)
  main.tsx      # Entry point
  index.css     # Tailwind + design tokens
```

## Design Notes

- Light theme only, soft neutrals with a subtle blue accent.
- Mobile-first, responsive across breakpoints.
- Lazy-loaded routes for fast initial load.
- Graceful fallbacks when Supabase is unavailable.
