import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, FolderGit2, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import pulsefit from "../../assets/pulsefit.png";
import triptale from "../../assets/restaurentapp.png";
import eventhub from "../../assets/studenthub.png";

export const projects = [
  {
    title: "PulseFIT",
    image: pulsefit,
  },
  {
    title: "TripTale",
    image: triptale,
  },
  {
    title: "EventHub",
    image: eventhub,
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const t = portfolioData[language].projects;

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    ...new Set(t.items.map((project) => project.category))
  ];

  const filters = [
    { id: 'all', label: t.filterAll },
    ...categories.map((category) => ({
      id: category,
      label: category
    }))
  ];

  const filteredProjects = t.items.filter((project) => {
    if (activeFilter === 'all') return true;

    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="glow-orb-purple -top-20 -right-20 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t.title}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4"
          >
            {t.subtitle}
          </motion.h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${isActive
                  ? 'text-white shadow-glow-sm'
                  : 'text-slate-400 hover:text-slate-200 bg-white/5 border border-white/10'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 border border-purple-400/40 -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{f.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-dark-card border border-purple-500/30 rounded-3xl p-6 sm:p-4 shadow-2xl shadow-purple-950/50 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {selectedProject.tag}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">
                  {language === 'en' ? 'Key Architecture & Features' : 'أبرز المميزات والمعمارية'}
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">
                  {language === 'en' ? 'Built With' : 'التقنيات المستخدمة'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold shadow-glow-sm hover:scale-[1.02] transition-transform"
                >
                  <Github className="w-4 h-4" />
                  <span>{t.viewCode}</span>
                </a>

                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-bold transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t.liveDemo}</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
