import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Layout,
  Zap,
  Layers,
  Boxes,
  CheckCircle2,
  Award,
  BookOpen
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { language } = useLanguage();
  const t = portfolioData[language].about;

  const pillarIcons = {
    Layout: Layout,
    Zap: Zap,
    Layers: Layers,
    Boxes: Boxes
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="glow-orb-indigo -bottom-20 -left-20 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <BookOpen className="w-3.5 h-3.5" />
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Education Primary Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="glass-card rounded-3xl p-7 sm:p-8 flex-1 flex flex-col justify-between border-purple-500/20 relative overflow-hidden group hover:border-purple-500/40">
              {/* Background gradient accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-600/20 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-[1.5px] shadow-glow-sm">
                    <div className="w-full h-full bg-dark-card rounded-[14px] flex items-center justify-center text-purple-400">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-500 border border-purple-500/30">
                    {t.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2">
                  {t.degreeTitle}
                </h3>
                <p className="text-sm font-semibold text-purple-400 mb-1">
                  {t.faculty}
                </p>
                <p className="text-sm text-slate-300 font-medium mb-5">
                  {t.university}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {t.educationDescription}
                </p>
              </div>

              {/* Education Highlights & Badges */}
              <div className="pt-5 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'en' ? 'Core: Algorithms, Data Structures & OOP' : 'المقررات: الخوارزميات، هياكل البيانات والبرمجة كائنية التوجه'}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'en' ? 'Specialization: Modern Web Architecture & Frontend' : 'التخصص: معمارية الويب الحديثة وهندسة الواجهات'}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'en' ? 'Location: Helwan / Giza, Egypt' : 'المقر: حلوان / الجيزة، مصر'}</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* 4 Focus Pillars Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {t.pillars.map((pillar, index) => {
                const IconComponent = pillarIcons[pillar.icon] || Layout;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:scale-[1.02] cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-glow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-100 mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
