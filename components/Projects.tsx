'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, FolderOpen } from 'lucide-react';
import Image from 'next/image';
import { supabase, type Project } from '@/lib/supabase';

const CATEGORY_COLORS: Record<string, string> = {
  ai: '#0ABFBC',
  software: '#38bdf8',
  hardware: '#a78bfa',
};

const CATEGORY_LABELS: Record<string, string> = {
  ai: 'AI',
  software: 'Software',
  hardware: 'Hardware',
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'ai' | 'software' | 'hardware'>('all');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });
        if (!error && data) setProjects(data as Project[]);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 md:py-32"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(10,191,188,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-tag"
          >
            What We Have Built
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
          >
            Our <span className="text-gradient-cyan">Projects</span>
          </motion.h2>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {(['all', 'ai', 'software', 'hardware'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  filter === cat
                    ? 'border-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]'
                    : 'border-[var(--border-glow)] hover:border-[var(--accent-cyan)]/40'
                }`}
                style={{
                  fontFamily: 'Syne, sans-serif',
                  color: filter === cat ? undefined : 'var(--text-secondary)',
                }}
              >
                {cat === 'all' ? 'All' : CATEGORY_LABELS[cat]}
              </button>
            ))}
          </motion.div>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="glass-card p-6 animate-pulse h-64" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <FolderOpen className="w-16 h-16 mx-auto mb-4 opacity-30" style={{ color: 'var(--accent-cyan)' }} />
            <p
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
            >
              Projects will be updated soon
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              We&apos;re currently working on something amazing. Check back shortly.
            </p>
          </motion.div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card overflow-hidden glow-cyan-hover group flex flex-col"
              >
                {/* Image */}
                {project.image_url ? (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent" />
                  </div>
                ) : (
                  <div
                    className="h-32 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${CATEGORY_COLORS[project.category]}15, transparent)`,
                    }}
                  >
                    <span className="text-4xl opacity-30">
                      {project.category === 'ai' ? '🤖' : project.category === 'hardware' ? '🔌' : '💻'}
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* Category badge */}
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-3 w-fit"
                    style={{
                      background: `${CATEGORY_COLORS[project.category]}15`,
                      color: CATEGORY_COLORS[project.category],
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {CATEGORY_LABELS[project.category]}
                  </span>

                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4 flex-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech_stack.split(',').map((tech) => (
                      <span key={tech.trim()} className="tech-badge">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-3 border-t border-[var(--border-glow)]">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--accent-cyan)]"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--accent-cyan)]"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
