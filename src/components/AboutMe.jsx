import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
      >
        <div>
          <h2 className="flex items-center gap-3 text-3xl font-bold">
            <User className="text-teal-400" /> About Me
          </h2>
          <p className="mt-4 text-slate-300">
            I’m a third-year B.Tech student and backend developer who loves turning complex problems into elegant, scalable systems. I specialize in building RESTful services, authentication flows, and data-heavy features.
          </p>
          <ul className="mt-6 grid gap-3 text-slate-200">
            <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">• Spring Boot microservices and modular monoliths</li>
            <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">• SQL schema design, indexing, and query optimization</li>
            <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">• Production-ready API design with testing and docs</li>
            <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">• Comfortable with React and Bootstrap for clean UIs</li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/20 via-purple-500/20 to-cyan-500/20 p-1 backdrop-blur md:h-80"
        >
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_40%_80%,rgba(34,211,238,0.15),transparent_40%)]" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3">
            <GraduationCap className="h-10 w-10 text-white/90" />
            <p className="text-center text-sm text-slate-200">
              B.Tech (3rd Year) • Open to internships and freelance backend work
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
