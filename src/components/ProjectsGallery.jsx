import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Search } from 'lucide-react';

const allProjects = [
  {
    title: 'Microservice Order API',
    stack: ['Spring Boot', 'Kafka', 'PostgreSQL'],
    description:
      'Event-driven order management with saga orchestration, resilient retries, and observability.',
    link: '#',
    repo: '#',
    category: 'Backend',
  },
  {
    title: 'Auth Service + Gateway',
    stack: ['Spring Security', 'JWT', 'API Gateway'],
    description:
      'Centralized authentication and service-to-service authorization with rate limiting.',
    link: '#',
    repo: '#',
    category: 'Backend',
  },
  {
    title: 'Inventory CQRS + Event Sourcing',
    stack: ['Spring Boot', 'Axon', 'MongoDB'],
    description:
      'Command and query segregation with snapshots and replay for auditability at scale.',
    link: '#',
    repo: '#',
    category: 'Backend',
  },
  {
    title: 'React Admin Dashboard',
    stack: ['React', 'Bootstrap', 'REST'],
    description:
      'Analytics dashboard consuming REST APIs with caching and role-based access.',
    link: '#',
    repo: '#',
    category: 'Frontend',
  },
  {
    title: 'Portfolio + Blog Platform',
    stack: ['React', 'Spring Boot', 'PostgreSQL'],
    description:
      'Fullstack portfolio with markdown blog, search, and content management.',
    link: '#',
    repo: '#',
    category: 'Fullstack',
  },
];

const categories = ['All', 'Backend', 'Frontend', 'Fullstack'];

export default function ProjectsGallery() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const inCategory = active === 'All' || p.category === active;
      const q = query.trim().toLowerCase();
      const inText = !q || [p.title, p.description, p.stack.join(' ')].join(' ').toLowerCase().includes(q);
      return inCategory && inText;
    });
  }, [active, query]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-6 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="mt-2 text-slate-300">Filter by type or search by tech, title, or description.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto">
          <div className="flex rounded-lg border border-white/10 bg-white/5 p-1 text-sm shadow-sm backdrop-blur">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-md px-3 py-1.5 transition ${
                  active === c ? 'bg-teal-500 text-black' : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-teal-400/60 focus:bg-white/10"
            />
          </div>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_-10%,rgba(45,212,191,0.15),transparent),radial-gradient(600px_200px_at_110%_110%,rgba(99,102,241,0.12),transparent)]" />
              <div className="relative z-10">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-slate-200">{p.category}</span>
                </div>
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
        {filtered.length === 0 && (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 text-center text-slate-400"
          >
            No projects match your search.
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}
