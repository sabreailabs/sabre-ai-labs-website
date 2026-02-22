'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
  icon: string;
}

function Counter({ value, label, suffix = '', icon }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (value / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="counter-card"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div
        className="text-3xl md:text-4xl font-bold text-gradient-cyan mb-1"
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        {count}{suffix}
      </div>
      <div className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'DM Sans, sans-serif' }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function AnimatedCounters() {
  const stats = [
    { value: 25, label: 'Hackathons Participated', suffix: '+', icon: '🏆' },
    { value: 1, label: 'National Level Finalist', suffix: '', icon: '🥇' },
    { value: 15, label: 'Real Projects Built', suffix: '+', icon: '🚀' },
    { value: 1, label: 'Research-Focused Team', suffix: '', icon: '🔬' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Counter key={stat.label} {...stat} />
      ))}
    </div>
  );
}
