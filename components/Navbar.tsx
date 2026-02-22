'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[var(--bg-primary)]/80 border-b border-[var(--border-glow)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-[var(--accent-cyan)]/30 group-hover:ring-[var(--accent-cyan)]/60 transition-all duration-300">
              <Image
                src="/logo.jpeg"
                alt="Sabre AI Labs"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span
                className="font-display font-bold text-lg tracking-tight"
                style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
              >
                Sabre{' '}
                <span className="text-gradient-cyan">AI</span>{' '}
                Labs
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/5"
                style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--text-secondary)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-[var(--border-glow)] hover:border-[var(--accent-cyan)]/40 transition-all duration-200 hover:bg-[var(--accent-cyan)]/5"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[var(--accent-gold)]" />
              ) : (
                <Moon className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
              )}
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
            >
              <span>Get in Touch</span>
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-lg border border-[var(--border-glow)]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
              ) : (
                <Menu className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden backdrop-blur-xl border-b border-[var(--border-glow)]"
            style={{ background: 'var(--bg-primary)' }}
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--accent-cyan)]/5 hover:text-[var(--accent-cyan)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
