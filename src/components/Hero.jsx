import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  Terminal,
  Code,
  Cpu,
  Layers,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { language, isRtl } = useLanguage();
  const t = portfolioData[language].hero;
  const socials = portfolioData.socials;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="glow-orb-purple -top-20 -left-20 animate-pulse-slow" />
      <div className="glow-orb-indigo top-1/3 -right-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Main Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-6 shadow-glow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.statusBadge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4 text-slate-100 dark:text-slate-100"
            >
              <span className="text-slate-400 dark:text-slate-400 font-medium text-2xl sm:text-3xl block mb-2">
                {t.greeting}{' '}
                <span className="text-slate-100 dark:text-slate-100 font-bold">{t.name}</span>
              </span>
              <span className="text-gradient-purple block">
                {t.role}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {t.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
              >
                <span>{t.viewProjectsBtn}</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 border border-purple-500/30 text-purple-300 dark:text-purple-300 text-purple-700 font-semibold text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{t.downloadResumeBtn}</span>
              </button>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-3 pt-4 border-t border-white/10 w-full"
            >
              <span className="text-xs font-medium text-slate-400">
                {language === 'en' ? 'Social Profiles:' : 'تواصل معي:'}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="p-2.5 text-indigo-300  rounded-xl bg-white/5 hover:bg-purple-600/20 hover:text-purple-400 border border-white/10 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  className="p-2.5 text-indigo-300 rounded-xl bg-white/5 hover:bg-indigo-600/20 hover:text-indigo-400 border border-white/10 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={socials.email}
                  title="Send Email"
                  className="p-2.5 text-indigo-300  rounded-xl bg-white/5 hover:bg-pink-600/20 hover:text-pink-400 border border-white/10 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Showcase Card / Tech Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Glow container */}
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-purple-500/40 via-indigo-500/20 to-transparent shadow-glow-md">
              <div className="glass-card rounded-3xl p-6 sm:p-7 relative overflow-hidden">

                {/* Window header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-purple-300 font-mono">
                    <Terminal className="w-3 h-3 text-purple-400" />
                    <span>meram.dev ~ portfolio</span>
                  </div>
                </div>

                {/* Developer Persona Highlights */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <div className="w-10 h-10 rounded-xl bg-purple-600/30 flex items-center justify-center text-purple-500">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        {language === 'en' ? 'Helwan University (FCAI)' : 'جامعة حلوان (حاسبات وذكاء اصطناعي)'}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {language === 'en' ? '4th Year Computer Science Student' : 'طالبة بالسنة الرابعة - علوم حاسب'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/30 flex items-center justify-center text-purple-500">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        {language === 'en' ? 'Modern Frontend Stack' : 'تقنيات الواجهات الحديثة'}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        React.js • TypeScript • Tailwind CSS • Vite
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-violet-500/10 border border-violet-500/20">
                    <div className="w-10 h-10 rounded-xl bg-violet-600/30 flex items-center justify-center text-purple-500">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        {language === 'en' ? 'Active Trainee' : 'تدريب مهني مستمر'}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        DEPI Initiative & TechMaster Academy
                      </p>
                    </div>
                  </div>
                </div>

                {/* Micro Code Snippet */}
                <div className="mt-5 pt-4 border-t border-white/10 font-mono text-xs text-slate-300 leading-relaxed bg-black/30 p-3.5 rounded-xl border border-white/5">
                  <p className="text-purple-400">// Ready to collaborate</p>
                  <p>
                    <span className="text-indigo-400">const</span> developer = {'{'}
                  </p>
                  <p className="pl-4">
                    name: <span className="text-emerald-400">"Meram Amr"</span>,
                  </p>
                  <p className="pl-4">
                    focus: <span className="text-emerald-400">"High-Performance React"</span>,
                  </p>
                  <p className="pl-4">
                    status: <span className="text-amber-400">"Open to Internships"</span>
                  </p>
                  <p>{'}'};</p>
                </div>

                {/* Floating micro stats */}
                <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-white/10">
                  {t.stats.map((stat, i) => (
                    <div key={i} className="text-center p-2 rounded-xl bg-white/5 border border-white/5">
                      <div className="font-extrabold text-sm text-gradient-purple">{stat.value}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">{stat.label}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
