# Sabre AI Labs — Official Website

A production-grade website for Sabre AI Labs built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

---

## 📦 Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Supabase

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Run Supabase SQL Schema

In your Supabase dashboard → SQL Editor, run the contents of `supabase-schema.sql`.

This creates:
- `projects` table (with RLS — public read)
- `contacts` table (with RLS — public insert)

### 4. Run development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## 🗄️ Database Tables

### `projects`

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| title | text | Project name |
| description | text | Short description |
| tech_stack | text | Comma-separated tech list |
| image_url | text | Optional image URL |
| live_url | text | Optional live demo URL |
| github_url | text | Optional GitHub repo URL |
| category | text | `software`, `hardware`, or `ai` |
| created_at | timestamp | Auto-set |

### `contacts`

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| name | text | Submitter name |
| email | text | Submitter email |
| phone | text | Optional phone |
| message | text | Message content |
| created_at | timestamp | Auto-set |

---

## 🌐 Deployment on Vercel

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

### Custom Domain (sabreailabs.in)

In Vercel dashboard → Domains → Add `sabreailabs.in` and `www.sabreailabs.in`. Update your DNS provider accordingly.

---

## 📁 Project Structure

```
sabre-ai-labs/
├── app/
│   ├── globals.css        # Global styles, CSS variables, animations
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Main page assembly
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/
│   ├── ThemeProvider.tsx  # Light/Dark theme context
│   ├── Navbar.tsx         # Sticky navbar with blur
│   ├── NeuralBackground.tsx # Animated canvas background
│   ├── Hero.tsx           # Hero section with counters
│   ├── AnimatedCounters.tsx # Counting animation
│   ├── About.tsx          # About / Vision / Mission
│   ├── Services.tsx       # Services glass cards
│   ├── Projects.tsx       # Supabase-connected projects
│   ├── Achievements.tsx   # Achievements timeline
│   ├── Contact.tsx        # Contact form (saves to Supabase)
│   ├── Footer.tsx         # Footer with social links
│   └── WhatsAppButton.tsx # Floating WhatsApp button
├── lib/
│   └── supabase.ts        # Supabase client + types
├── public/
│   └── logo.jpeg          # Official Sabre AI Labs logo
├── supabase-schema.sql    # Database setup SQL
├── .env.local.example     # Environment variables template
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Features

- ✅ Dark/Light theme toggle
- ✅ Glassmorphism cards with glow effects
- ✅ Animated neural network background
- ✅ Framer Motion page animations
- ✅ Animated counting statistics
- ✅ Dynamic projects from Supabase
- ✅ Contact form with Supabase storage
- ✅ Floating WhatsApp button
- ✅ Mobile responsive
- ✅ SEO optimized (metadata, OpenGraph, sitemap, robots.txt)
- ✅ Custom scrollbar
- ✅ Vercel-ready

---

© 2026 Sabre AI Labs. All rights reserved.
