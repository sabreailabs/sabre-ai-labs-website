-- Sabre AI Labs - Supabase SQL Schema
-- Run this in your Supabase SQL editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Projects table
create table if not exists public.projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text not null,
  tech_stack text not null,
  image_url text,
  live_url text,
  github_url text,
  category text check (category in ('software', 'hardware', 'ai')) not null default 'software',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Contacts table
create table if not exists public.contacts (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security
alter table public.projects enable row level security;
alter table public.contacts enable row level security;

-- Allow public read access to projects
create policy "Allow public read projects"
  on public.projects for select
  using (true);

-- Allow public insert on contacts (for contact form)
create policy "Allow public insert contacts"
  on public.contacts for insert
  with check (true);

-- Optional: Insert sample project data
-- insert into public.projects (title, description, tech_stack, category) values
--   ('AI Vision System', 'Real-time object detection and classification system using computer vision.', 'Python, OpenCV, TensorFlow, FastAPI', 'ai'),
--   ('Smart IoT Dashboard', 'IoT sensor monitoring dashboard with real-time analytics.', 'React, Node.js, MQTT, PostgreSQL', 'hardware'),
--   ('NLP Pipeline', 'End-to-end natural language processing pipeline for text classification.', 'Python, HuggingFace, FastAPI, Docker', 'ai');
