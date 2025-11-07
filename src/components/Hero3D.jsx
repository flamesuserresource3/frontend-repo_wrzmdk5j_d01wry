import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero3D() {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 80, damping: 20, mass: 0.4 });
  const smy = useSpring(my, { stiffness: 80, damping: 20, mass: 0.4 });

  const orb1X = useTransform(smx, [0, 1], [20, -20]);
  const orb1Y = useTransform(smy, [0, 1], [10, -10]);
  const orb2X = useTransform(smx, [0, 1], [-30, 30]);
  const orb2Y = useTransform(smy, [0, 1], [15, -15]);
  const ringX = useTransform(smx, [0, 1], [-10, 10]);
  const ringY = useTransform(smy, [0, 1], [8, -8]);

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width; // 0..1
    const ny = (e.clientY - rect.top) / rect.height; // 0..1
    mx.set(nx);
    my.set(ny);
  };

  return (
    <section ref={ref} onMouseMove={onMove} className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking gradient overlay to keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* 3D-feel floating orbs and rings (non-interactive, parallaxed) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-10 top-16 h-24 w-24 rounded-full bg-cyan-400/20 blur-xl"
        style={{ x: orb1X, y: orb1Y }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-20 right-14 h-28 w-28 rounded-full bg-fuchsia-400/20 blur-xl"
        style={{ x: orb2X, y: orb2Y }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2"
        style={{ x: ringX, y: ringY }}
      >
        <div className="h-40 w-40 rounded-full border border-cyan-300/20" />
        <div className="-mt-36 ml-10 h-28 w-28 rounded-full border border-fuchsia-300/20" />
      </motion.div>

      {/* Content */}
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
