import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectCard({ project, onSelectProject }) {
  const { language } = useLanguage();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-3xl overflow-hidden flex flex-col border-purple-500/20 hover:border-purple-500/40 relative group"
    >
      {/* Project Mock Preview Banner */}
      <div className="border-b border-white/10 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-purple-950/40 via-dark-card to-indigo-950/30 flex items-center justify-center">
            <span className="text-purple-400 font-semibold">
              {project.title}
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Tag & Category */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-purple-500/15 text-purple-500 border border-purple-500/30">
              {project.tag}
            </span>
            <span className="text-[11px] font-medium text-slate-400">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors mb-2.5">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-6">
            {project.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/5 border border-white/10 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onSelectProject(project)}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-600 text-xs font-semibold transition-all cursor-pointer"
            >
              <span>{language === 'en' ? 'Details & Demo' : 'التفاصيل والمعاينة'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Code' : 'الكود'}</span>
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
