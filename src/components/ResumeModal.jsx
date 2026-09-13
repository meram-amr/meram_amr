import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase, Code, Globe } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const { language } = useLanguage();
  const t = portfolioData[language];
  const socials = portfolioData.socials;

  if (!isOpen) return null;

  const handleViewCV = () => {
    window.open("/Meram_Amr_Resume.pdf", "_blank");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Meram_Amr_Resume.pdf";
    link.download = "Meram_Amr_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md -z-10"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-dark-bg border border-purple-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-purple-950/50 my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Actions Bar (Screen Only) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 no-print">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500" />
            <h3 className="text-lg font-bold text-slate-100">
              {t.resumeModal.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleViewCV}
              className="flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-glow-sm transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View CV</span>
            </button>

            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.resumeModal.downloadBtn}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content Sheet */}
        <div id="printable-resume" className="space-y-8 text-slate-200">

          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-1">
              Meram Amr
            </h1>
            <p className="text-base text-purple-400 font-semibold mb-4">
              {language === 'en' ? 'Frontend Developer & Computer Science Student' : 'مصممة ومطورة واجهات وطالبة علوم حاسب'}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                meramamr8@gmail.com
              </span>
              <span className="flex items-center gap-1.5" dir="ltr">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                +20 155 514 4498
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Giza, Egypt
              </span>
              <a href="https://github.com/meram-amr" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-purple-300 hover:underline">
                <Github className="w-3.5 h-3.5" />
                github.com/meram-amr
              </a>
              <a href="https://linkedin.com/in/meram-amr" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-purple-300 hover:underline">
                <Linkedin className="w-3.5 h-3.5" />
                linkedin.com/in/meram-amr
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-purple-400 uppercase tracking-wider mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>{language === 'en' ? 'Education' : 'التعليم الأكاديمي'}</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                <h4 className="text-sm font-bold text-slate-100">
                  {t.about.degreeTitle}
                </h4>
                <span className="text-xs text-purple-300 font-mono">2023 – Present</span>
              </div>
              <p className="text-xs text-slate-300">
                {t.about.faculty}, {t.about.university}
              </p>
              <p className="text-xs text-slate-400 mt-2">
                {t.about.educationDescription}
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-purple-400 uppercase tracking-wider mb-3">
              <Briefcase className="w-4 h-4" />
              <span>{language === 'en' ? 'Work Experience & Internships' : 'الخبرات والتدريب المهني'}</span>
            </div>
            <div className="space-y-4">
              {t.experience.items.map((exp, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">{exp.role}</h4>
                      <p className="text-xs text-purple-300 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">{exp.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-slate-300 list-disc list-inside">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-purple-400 uppercase tracking-wider mb-3">
              <Code className="w-4 h-4" />
              <span>{language === 'en' ? 'Featured Projects' : 'أبرز المشاريع'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.projects.items.map((proj, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-100 mb-1">{proj.title}</h4>
                    <p className="text-[11px] text-slate-400 mb-2">{proj.description}</p>
                  </div>
                  <div className="text-[10px] text-purple-300 font-mono">
                    {proj.technologies.slice(0, 3).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-purple-400 uppercase tracking-wider mb-3">
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'Technical Skills & Languages' : 'المهارات التقنية واللغات'}</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
              <p>
                <strong className="text-purple-300">Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, React Router, Context API, Tailwind CSS, Bootstrap, Material UI
              </p>
              <p>
                <strong className="text-purple-300">Tools:</strong> Vite, Git, GitHub, RESTful APIs, Node.js/Express basics
              </p>
              <p>
                <strong className="text-purple-300">Languages:</strong> Arabic (Native), English (Intermediate)
              </p>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
