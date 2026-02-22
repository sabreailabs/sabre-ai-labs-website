'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Star, BookOpen, Rocket } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    year: '2023–2024',
    title: '25+ Hackathon Participations',
    desc: 'Consistently competed in national and regional hackathons, building solutions in AI, IoT, and software under intense time constraints.',
    color: '#F5A623',
    highlight: '25+',
  },
  {
    icon: Star,
    year: '2024',
    title: 'National Level Finalist',
    desc: 'Recognized as a national level finalist in a prestigious technology competition, validating our team\'s capabilities on a national stage.',
    color: '#0ABFBC',
    highlight: '#1',
  },
  {
    icon: BookOpen,
    year: 'Ongoing',
    title: 'Research Contributions',
    desc: 'Active contributions to applied AI research, embedded systems design, and innovative system architectures bridging theory and practice.',
    color: '#a78bfa',
    highlight: 'R&D',
  },
  {
    icon: Rocket,
    year: '2023–2026',
    title: '15+ Real-World Projects',
    desc: 'Delivered 15+ production-grade projects spanning AI models, IoT systems, web platforms, and automation tools for real clients.',
    color: '#34d399',
    highlight: '15+',
  },
];

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-24 md:py-32"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(10,191,188,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-tag"
          >
            Milestones
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
          >
            Our <span className="text-gradient-gold">Achievements</span>
          </motion.h2>
        </div>

        {/* Timeline grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="glass-card p-6 group glow-cyan-hover relative overflow-hidden"
              style={{ borderColor: `${item.color}20` }}
            >
              {/* Big background number */}
              <span
                className="absolute -top-2 -right-2 text-8xl font-black opacity-[0.04] select-none pointer-events-none"
                style={{ fontFamily: 'Syne, sans-serif', color: item.color }}
              >
                {item.highlight}
              </span>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}12` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <div>
                  <div
                    className="text-xs font-mono tracking-wider uppercase mb-1"
                    style={{ color: item.color }}
                  >
                    {item.year}
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>

              <div
                className="mt-5 h-0.5 w-full rounded-full opacity-20"
                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
