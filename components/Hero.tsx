'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';
import AnimatedCounters from './AnimatedCounters';

const NeuralBackground = dynamic(() => import('./NeuralBackground'), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Neural background */}
      <NeuralBackground />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(10,191,188,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10,191,188,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,191,188,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 20}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${6 + i * 0.8}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div
            className="h-px w-12"
            style={{ background: 'var(--accent-cyan)' }}
          />
          <span className="section-tag">
            Building Intelligent Systems
          </span>
          <div
            className="h-px w-12"
            style={{ background: 'var(--accent-cyan)' }}
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl"
          style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
        >
          Innovation-Driven{' '}
          <span className="text-gradient-cyan">AI</span>
          {' & '}
          <span className="relative">
            Technology
            <span
              className="absolute -bottom-1 left-0 h-0.5 w-full"
              style={{ background: 'linear-gradient(90deg, var(--accent-cyan), transparent)' }}
            />
          </span>
          {' '}Lab
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          style={{ color: 'var(--text-secondary)', fontFamily: 'DM Sans, sans-serif' }}
        >
          We design intelligent software systems, AI solutions, hardware prototypes,
          and research-based technologies for real-world impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a href="#projects" className="btn-primary inline-flex items-center gap-2 text-base">
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-outline inline-flex items-center gap-2 text-base">
            Contact Us
          </a>
        </motion.div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <AnimatedCounters />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: 'var(--text-secondary)' }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4" style={{ color: 'var(--accent-cyan)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
