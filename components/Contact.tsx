'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Phone, MapPin } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [lastSubmit, setLastSubmit] = useState(0);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Name must be at least 2 characters';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Please enter a valid email';
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastSubmit < 30000) {
      setErrors({ _: 'Please wait 30 seconds before submitting again.' });
      return;
    }
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('loading');
    try {
      const { error } = await supabase.from('contacts').insert([{
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        message: form.message.trim(),
      }]);
      if (error) throw error;
      setStatus('success');
      setLastSubmit(now);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 border focus:border-[var(--accent-cyan)]`;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] pointer-events-none -translate-y-1/2"
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
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
          >
            Let&apos;s <span className="text-gradient-cyan">Connect</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Have a project in mind? Want to collaborate on research? Looking for technical
              consulting? We&apos;d love to hear from you.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'sabrelabs.in@gmail.com', href: 'mailto:sabrelabs.in@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 63018 75483', href: 'tel:6301875483' },
                { icon: MapPin, label: 'Location', value: 'India', href: undefined },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(10,191,188,0.1)' }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: 'var(--accent-cyan)' }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium hover:text-[var(--accent-cyan)] transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#34d399' }} />
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 btn-outline text-sm"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errors._ && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errors._}
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again.
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`${inputClass} ${errors.name ? 'border-red-500/60' : 'border-[var(--border-glow)]'}`}
                    style={{ color: '#f0f6ff', backgroundColor: 'rgba(7,13,23,0.8)' }}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`${inputClass} ${errors.email ? 'border-red-500/60' : 'border-[var(--border-glow)]'}`}
                    style={{ color: '#f0f6ff', backgroundColor: 'rgba(7,13,23,0.8)' }}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={`${inputClass} border-[var(--border-glow)]`}
                    style={{ color: '#f0f6ff', backgroundColor: 'rgba(7,13,23,0.8)' }}
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Your Message *"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none ${errors.message ? 'border-red-500/60' : 'border-[var(--border-glow)]'}`}
                    style={{ color: '#f0f6ff', backgroundColor: 'rgba(7,13,23,0.8)' }}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full flex items-center justify-center gap-2 text-base py-3"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
