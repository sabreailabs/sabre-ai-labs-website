'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Globe, Cpu, FlaskConical, Zap, BarChart3, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Artificial Intelligence Solutions',
    desc: 'Custom ML models, NLP systems, computer vision, and AI pipelines tailored to your specific domain.',
    color: '#0ABFBC',
  },
  {
    icon: Globe,
    title: 'Full-Stack Development',
    desc: 'End-to-end web and mobile applications — from pixel-perfect frontends to robust, scalable backends.',
    color: '#38bdf8',
  },
  {
    icon: Cpu,
    title: 'Hardware & Embedded Systems',
    desc: 'Microcontroller programming, PCB design, FPGA development, and IoT device firmware.',
    color: '#a78bfa',
  },
  {
    icon: FlaskConical,
    title: 'Research & Prototyping',
    desc: 'Rapid prototyping, proof-of-concept development, and academic-to-industry research translation.',
    color: '#34d399',
  },
  {
    icon: Zap,
    title: 'Automation Systems',
    desc: 'Process automation, RPA, workflow optimization, and intelligent robotic system design.',
    color: '#F5A623',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    desc: 'Data pipelines, visualization dashboards, predictive analytics, and business intelligence.',
    color: '#f472b6',
  },
  {
    icon: Lightbulb,
    title: 'Startup Technical Consulting',
    desc: 'Architecture reviews, tech stack selection, MVP planning, and scalability consulting for early-stage teams.',
    color: '#fbbf24',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(rgba(10,191,188,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-tag"
          >
            What We Build
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
          >
            Our <span className="text-gradient-cyan">Services</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className={`glass-card p-6 glow-cyan-hover group ${
                i === 6 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
              style={{ borderColor: `${service.color}20` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${service.color}12` }}
              >
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {service.desc}
              </p>
              <div
                className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
