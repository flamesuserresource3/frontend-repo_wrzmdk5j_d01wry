import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Database, Server, Code, Box } from 'lucide-react';

const skills = [
  { icon: Server, label: 'Spring Boot', level: 'Advanced' },
  { icon: Database, label: 'SQL & Schema Design', level: 'Advanced' },
  { icon: Code, label: 'React & Bootstrap', level: 'Intermediate' },
  { icon: Box, label: 'Microservices & APIs', level: 'Advanced' },
];

function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useTransform(y, [0, 1], [8, -8]);
  const ry = useTransform(x, [0, 1], [-8, 8]);
  const glare = useTransform([x, y], ([vx, vy]) => {
    const dx = (vx - 0.5) * 100;
    const dy = (vy - 0.5) * 100;
    return `radial-gradient(200px 200px at ${50 + dx/2}% ${50 + dy/2}%, rgba(255,255,255,0.12), transparent 60%)`;
  });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  const handleLeave = () => {
    animate(x, 0.5, { duration: 0.4 });
    animate(y, 0.5, { duration: 0.4 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className="group relative will-change-transform"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl" style={{ background: glare }} />
      {children}
    </motion.div>
  );
}

export default function SkillsShowcase() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Core Skills</h2>
        <p className="mt-2 text-slate-300">A quick snapshot of what I use to ship production-grade backends and clean UIs.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ icon: Icon, label, level }) => (
          <TiltCard key={label}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-teal-500/30 to-purple-500/30 p-2 text-white ring-1 ring-white/10">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="font-semibold">{label}</p>
                  <p className="text-xs text-slate-300">{level}</p>
                </div>
              </div>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
                />
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>

      <div className="pointer-events-none relative mt-10 h-20 w-full overflow-visible">
        <div className="absolute -inset-x-10 top-1/2 -translate-y-1/2">
          <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
