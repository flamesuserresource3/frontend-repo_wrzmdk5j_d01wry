import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Code, Box } from 'lucide-react';

const skills = [
  { icon: Server, label: 'Spring Boot', level: 'Advanced' },
  { icon: Database, label: 'SQL & Schema Design', level: 'Advanced' },
  { icon: Code, label: 'React & Bootstrap', level: 'Intermediate' },
  { icon: Box, label: 'Microservices & APIs', level: 'Advanced' },
];

export default function SkillsShowcase() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Core Skills</h2>
        <p className="mt-2 text-slate-300">A quick snapshot of what I use to ship production-grade backends and clean UIs.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ icon: Icon, label, level }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-br from-teal-500/30 to-purple-500/30 p-2 text-white">
                <Icon size={22} />
              </div>
              <div>
                <p className="font-semibold">{label}</p>
                <p className="text-xs text-slate-300">{level}</p>
              </div>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
