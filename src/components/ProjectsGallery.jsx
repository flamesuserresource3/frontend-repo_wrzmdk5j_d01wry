import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Microservice Order API',
    stack: ['Spring Boot', 'Kafka', 'PostgreSQL'],
    description:
      'Event-driven order management with saga orchestration, resilient retries, and observability.',
    link: '#',
    repo: '#',
  },
  {
    title: 'Auth Service + Gateway',
    stack: ['Spring Security', 'JWT', 'API Gateway'],
    description:
      'Centralized authentication and service-to-service authorization with rate limiting.',
    link: '#',
    repo: '#',
  },
  {
    title: 'React Admin Dashboard',
    stack: ['React', 'Bootstrap', 'REST'],
    description:
      'Analytics dashboard consuming REST APIs with caching and role-based access.',
    link: '#',
    repo: '#',
  },
];

export default function ProjectsGallery() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="mt-2 text-slate-300">Real work that highlights scalability, reliability, and DX.</p>
        </div>
        <a
          href="#"
          className="hidden rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 md:block"
        >
          See All
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 backdrop-blur"
          >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_10%_-10%,rgba(45,212,191,0.15),transparent),radial-gradient(600px_200px_at_110%_110%,rgba(99,102,241,0.12),transparent)]" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-4">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-slate-200 hover:text-white">
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
