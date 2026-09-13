import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { language, isRtl } = useLanguage();
  const t = portfolioData[language].experience;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
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

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Line */}
          <div className={`absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent ${
            isRtl ? 'right-4 sm:right-8' : 'left-4 sm:left-8'
          }`} />

          <div className="space-y-12">
            {t.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative flex items-start gap-6 sm:gap-10 ${
                  isRtl ? 'pr-2 sm:pr-4' : 'pl-2 sm:pl-4'
                }`}
              >
                
                {/* Timeline Dot Node */}
                <div className="relative z-10 shrink-0">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-dark-bg border-2 border-purple-500 flex items-center justify-center shadow-glow-sm text-purple-400">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 glass-card rounded-3xl p-6 sm:p-8 border-purple-500/20 hover:border-purple-500/40 relative group overflow-hidden">
                  
                  {/* Subtle hover gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30 mb-2">
                        {item.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-purple-400">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 font-medium text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Description Lead */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-6">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pill tags */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300 group-hover:border-purple-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
