'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Cpu, FlaskConical, Zap, BarChart3, Eye } from 'lucide-react';

const domains = [
  { icon: Brain, label: 'Artificial Intelligence', color: '#0ABFBC' },
  { icon: Code2, label: 'Full-stack Software', color: '#38bdf8' },
  { icon: Zap, label: 'Automation', color: '#F5A623' },
  { icon: Cpu, label: 'Embedded Systems', color: '#a78bfa' },
  { icon: BarChart3, label: 'IoT Hardware Prototypes', color: '#34d399' },
  { icon: FlaskConical, label: 'Research & Architecture', color: '#f472b6' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(10,191,188,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="section-tag">About Us</p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
              >
                We Build{' '}
                <span className="text-gradient-cyan">Intelligent</span>
                {' '}Systems
              </h2>
              <p
                className="text-base md:text-lg mb-8 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Sabre AI Labs is an innovation-focused AI and technology lab that bridges
                the gap between cutting-edge research and real-world deployment. We work
                across the full spectrum — from algorithm design to hardware integration —
                building systems that genuinely solve problems.
              </p>

              {/* Vision & Mission */}
              <div className="space-y-4">
                <div className="glass-card p-5 glow-cyan">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-4 h-4" style={{ color: 'var(--accent-cyan)' }} />
                    <span
                      className="text-sm font-bold tracking-wider uppercase"
                      style={{ fontFamily: 'Syne, sans-serif', color: 'var(--accent-cyan)' }}
                    >
                      Vision
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    To build scalable intelligent systems that solve real-world challenges —
                    shaping a smarter, more connected future.
                  </p>
                </div>

                <div className="glass-card p-5 glow-cyan">
                  <div className="flex items-center gap-2 mb-2">
                    <FlaskConical className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
                    <span
                      className="text-sm font-bold tracking-wider uppercase"
                      style={{ fontFamily: 'Syne, sans-serif', color: 'var(--accent-gold)' }}
                    >
                      Mission
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    Advance AI, software, hardware, and automation research into practical,
                    deployable systems that create measurable impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — domains grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              className="text-sm font-mono tracking-widest uppercase mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Our Research Domains
            </p>
            <div className="grid grid-cols-2 gap-4">
              {domains.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="glass-card p-5 glow-cyan-hover cursor-default"
                  style={{ borderColor: `${d.color}20` }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${d.color}15` }}
                  >
                    <d.icon className="w-5 h-5" style={{ color: d.color }} />
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
                  >
                    {d.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
