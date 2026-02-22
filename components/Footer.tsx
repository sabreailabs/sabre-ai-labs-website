'use client';

import Image from 'next/image';
import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const social = [
    { icon: Instagram, href: 'https://instagram.com/sabreailabs', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/sabre-ai-labs', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/sabreailabs', label: 'GitHub' },
    { icon: Mail, href: 'mailto:sabrelabs.in@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:6301875483', label: 'Phone' },
  ];

  return (
    <footer
      className="relative py-16 border-t border-[var(--border-glow)]"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[var(--accent-cyan)]/30">
                <Image src="/logo.jpeg" alt="Sabre AI Labs" fill className="object-cover rounded-full" />
              </div>
              <div>
                <p
                  className="text-lg font-bold leading-none"
                  style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
                >
                  Sabre <span className="text-gradient-cyan">AI</span> Labs
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  Building Intelligent Systems
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: 'var(--text-secondary)' }}
            >
              Innovation-driven AI & technology research lab designing intelligent
              software, hardware, and research-based systems for real-world impact.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: 'var(--accent-cyan)' }}
            >
              Navigation
            </p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--accent-cyan)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: 'var(--accent-cyan)' }}
            >
              Connect
            </p>
            <ul className="space-y-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm transition-colors hover:text-[var(--accent-cyan)] group"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <s.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t border-[var(--border-glow)] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p
            className="text-sm text-center sm:text-left"
            style={{ color: 'var(--text-secondary)' }}
          >
            © 2026 Sabre AI Labs. All rights reserved.
          </p>
          <p
            className="text-xs font-mono"
            style={{ color: 'var(--text-secondary)', opacity: 0.5 }}
          >
            sabreailabs.in
          </p>
        </div>
      </div>
    </footer>
  );
}
