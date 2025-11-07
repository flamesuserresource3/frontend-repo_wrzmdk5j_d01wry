import React from 'react';
import Hero3D from './components/Hero3D.jsx';
import AboutMe from './components/AboutMe.jsx';
import SkillsShowcase from './components/SkillsShowcase.jsx';
import ProjectsGallery from './components/ProjectsGallery.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100">
      <Hero3D />
      <AboutMe />
      <SkillsShowcase />
      <ProjectsGallery />
      <footer className="py-10 text-center text-sm text-slate-400">
        <p>
          Built with React, Tailwind, and a playful 3D touch. © {new Date().getFullYear()} — Your Name
        </p>
      </footer>
    </div>
  );
}
