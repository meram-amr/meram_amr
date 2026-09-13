import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const { language } = useLanguage();
  const t = portfolioData[language].footer;
  const nav = portfolioData[language].nav;
  const socials = portfolioData.socials;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-dark-bg/10 backdrop-blur-xl pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-400 p-[1.5px] shadow-glow-sm">
                <div className="w-full h-full bg-dark-bg rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 text-sm">
                    MA
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-base text-slate-100 block">
                  Meram Amr
                </span>
                <span className="text-xs text-purple-400 font-medium">
                  {language === 'en' ? 'Frontend Developer & CS Student' : 'مصممة ومطورة واجهات وطالبة علوم حاسب'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed mb-6">
              {t.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-purple-600/20 hover:text-purple-400 border border-white/10 transition-colors text-slate-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-indigo-600/20 hover:text-indigo-400 border border-white/10 transition-colors text-slate-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={socials.email}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-pink-600/20 hover:text-pink-400 border border-white/10 transition-colors text-slate-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  {nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  {nav.experience}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  {nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  {nav.skills}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  {nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                {language === 'en' ? 'Direct Contact' : 'معلومات التواصل'}
              </h4>
              <p className="text-xs text-slate-400 mb-1">
                meramamr8@gmail.com
              </p>
              <p className="text-xs text-slate-400 mb-1" dir="ltr">
                +20 155 514 4498
              </p>
              <p className="text-xs text-slate-400">
                Giza, Egypt
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/30 text-slate-300 hover:text-purple-300 text-xs font-semibold transition-all cursor-pointer"
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Meram Amr. {t.rights}</p>
          <p className="flex items-center gap-1">
            <span>{t.designedBy}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
