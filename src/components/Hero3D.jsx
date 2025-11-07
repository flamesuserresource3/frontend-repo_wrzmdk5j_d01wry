import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur">
            <Rocket size={16} className="text-teal-300" />
            <span>Backend Engineer • Spring Boot • React • SQL</span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight md:text-6xl">
            Crafting reliable backends with a passion for interactive experiences
          </h1>

          <p className="mx-auto max-w-2xl text-pretty text-base text-slate-200 md:text-lg">
            I’m a B.Tech 3rd year developer who builds scalable APIs, designs robust data models, and ships delightful UIs when needed. Explore my projects, stacks, and how I think.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-teal-500 px-5 py-3 font-semibold text-black shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5 text-slate-200">
            <a href="https://github.com/" aria-label="GitHub" className="transition hover:text-white">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/" aria-label="LinkedIn" className="transition hover:text-white">
              <Linkedin size={22} />
            </a>
            <a href="mailto:you@example.com" aria-label="Email" className="transition hover:text-white">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
