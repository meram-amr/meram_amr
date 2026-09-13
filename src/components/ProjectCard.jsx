import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Check, ArrowUpRight, ShoppingBag, LayoutDashboard } from 'lucide-react';
import { Github, SmartwatchIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectCard({ project, onSelectProject }) {
  const { language } = useLanguage();

  // Custom UI mockup preview graphics matching modern Figma portfolio aesthetic
  const renderProjectMockup = (id) => {
    if (id === 'restaurant-ordering-app') {
      return (
        <div className="w-full h-48 bg-gradient-to-br from-purple-950/40 via-dark-card to-indigo-950/30 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_50%)]" />
          
          {/* Mockup Header bar */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-200">GourmetBite App</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">
              API Connected
            </span>
          </div>

          {/* Mock UI Cards */}
          <div className="grid grid-cols-2 gap-2 relative z-10 my-auto">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-full h-10 rounded-lg bg-gradient-to-r from-purple-500/30 to-indigo-500/30 mb-2 flex items-center justify-center">
                <span className="text-[10px] text-purple-200 font-medium">Special Burger</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-400 font-mono">$12.50</span>
                <span className="px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-300 font-bold">+ Add</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-full h-10 rounded-lg bg-gradient-to-r from-indigo-500/30 to-purple-500/30 mb-2 flex items-center justify-center">
                <span className="text-[10px] text-indigo-200 font-medium">Pasta Truffle</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-400 font-mono">$15.00</span>
                <span className="px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-300 font-bold">+ Add</span>
              </div>
            </div>
          </div>

          {/* Mock Cart Bar */}
          <div className="flex items-center justify-between text-[10px] pt-2 border-t border-white/10 relative z-10 text-slate-400">
            <span>2 Items in Cart</span>
            <span className="text-purple-400 font-semibold">Total: $27.50 →</span>
          </div>
        </div>
      );
    }

    if (id === 'student-hub-dashboard') {
      return (
        <div className="w-full h-48 bg-gradient-to-br from-indigo-950/40 via-dark-card to-violet-950/30 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <LayoutDashboard className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-200">Student-Hub V2</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 font-medium">
              4 Pending
            </span>
          </div>

          {/* Dashboard action items mock */}
          <div className="space-y-2 relative z-10 my-auto">
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-slate-300 font-medium">Algorithms Assignment #3</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">Done</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-slate-300 font-medium">React State Management Lab</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold">In Progress</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] pt-2 border-t border-white/10 relative z-10 text-slate-400">
            <span>Dynamic CRUD & Validation</span>
            <span className="text-indigo-400 font-semibold">+ New Resource</span>
          </div>
        </div>
      );
    }

    // PulseFit
    return (
      <div className="w-full h-48 bg-gradient-to-br from-violet-950/40 via-dark-card to-pink-950/30 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.15),transparent_50%)]" />
        
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400">
              <SmartwatchIcon className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-200">PulseFit Landing</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30 font-medium">
            Dark / Light
          </span>
        </div>

        {/* Watch visual mock */}
        <div className="flex items-center justify-center relative z-10 my-auto">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-purple-500 to-indigo-600 p-0.5 shadow-glow-sm">
            <div className="w-full h-full bg-dark-bg rounded-[14px] flex flex-col items-center justify-center p-1 text-center">
              <span className="text-[9px] text-slate-400">BPM</span>
              <span className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">128</span>
              <span className="text-[8px] text-emerald-400">Active Mode</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] pt-2 border-t border-white/10 relative z-10 text-slate-400">
          <span>Smooth Micro-animations</span>
          <span className="text-pink-400 font-semibold">100% Mobile First</span>
        </div>
      </div>
    );
  };

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
      <div className="border-b border-white/10 relative">
        {renderProjectMockup(project.id)}
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Tag & Category */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
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
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300 text-xs font-semibold transition-all cursor-pointer"
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
