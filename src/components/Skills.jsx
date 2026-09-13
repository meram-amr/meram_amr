import React from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  Code2,
  Palette,
  Braces,
  FileCode2,
  Route,
  Cpu,
  Sparkles,
  LayoutGrid,
  Component,
  Zap,
  GitBranch,
  Network,
  Languages,
  Globe2
} from 'lucide-react';
import { Github, ReactIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Palette: Palette,
  Braces: Braces,
  FileCode2: FileCode2,
  Atom: ReactIcon,
  Route: Route,
  Cpu: Cpu,
  Sparkles: Sparkles,
  LayoutGrid: LayoutGrid,
  Component: Component,
  Zap: Zap,
  GitBranch: GitBranch,
  Github: Github,
  Network: Network,
  Languages: Languages,
  Globe2: Globe2,
};

export default function Skills() {
  const { language } = useLanguage();
  const t = portfolioData[language].skills;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>{t.title}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            {t.subtitle}
          </motion.h2>
        </div>

        {/* 4 Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {t.categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className="glass-card rounded-3xl p-7 sm:p-8 border-purple-500/20 hover:border-purple-500/40 relative group flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-purple-600/10 border border-white/5 hover:border-purple-500/30 transition-all duration-300 group/skill"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 group-hover/skill:bg-purple-600 group-hover/skill:text-white transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-semibold text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-500 font-medium">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Glowing Line */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span>{cat.skills.length} {language === 'en' ? 'Core Competencies' : 'كفاءات معتمدة'}</span>
                <span className="text-purple-400 font-medium">✓ Verified</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
