import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function ContactMe() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // Local UX only for now; backend hook can be added later
    setStatus('loading');
    try {
      await new Promise((r) => setTimeout(r, 600));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
      >
        <div className="mb-6 flex items-center gap-3">
          <Mail className="text-teal-400" />
          <h2 className="text-2xl font-semibold">Let’s build something</h2>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-teal-400/60 focus:bg-white/10"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email address"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-teal-400/60 focus:bg-white/10"
              required
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Tell me about your project..."
            rows={5}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-teal-400/60 focus:bg-white/10"
            required
          />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-lg bg-teal-500 px-5 py-3 font-semibold text-black shadow-lg shadow-teal-500/30 transition hover:bg-teal-400 disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && <span className="text-sm text-teal-300">Message sent! I’ll get back to you soon.</span>}
            {status === 'error' && <span className="text-sm text-rose-300">Something went wrong. Try again.</span>}
          </div>
        </form>
      </motion.div>
    </section>
  );
}
