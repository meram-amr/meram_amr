import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Globe, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const { theme, toggleTheme, isDark } = useTheme();
  const { language, toggleLanguage, isRtl } = useLanguage();
  const t = portfolioData[language].nav;

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'about', label: t.about },
    { id: 'experience', label: t.experience },
    { id: 'projects', label: t.projects },
    { id: 'skills', label: t.skills },
    { id: 'contact', label: t.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
        <nav
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'glass-nav py-3 px-5 shadow-lg shadow-purple-950/10'
              : 'bg-transparent py-4 px-2'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand / Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-400 p-[1.5px] shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-dark-bg dark:bg-dark-bg bg-opacity-90 rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 text-sm tracking-wider">
                    MA
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-tight text-white dark:text-white text-slate-900 group-hover:text-purple-400 transition-colors">
                  Meram Amr
                </span>
                <span className="text-[11px] text-purple-400 font-medium tracking-wide uppercase">
                  Frontend Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 dark:bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 dark:border-white/10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white dark:text-white text-purple-600'
                        : 'text-slate-400 hover:text-slate-200 dark:text-slate-400 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-500/40 shadow-glow-sm"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Controls: Resume, Theme & Language Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Resume CTA (Desktop) */}
              <button
                onClick={onOpenResume}
                className="hidden lg:flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-xl border border-purple-500/30 text-purple-300 dark:text-purple-300 text-purple-700 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-200"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t.resume}</span>
              </button>

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                title={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 border border-white/10 text-slate-200 dark:text-slate-200 transition-all duration-200"
              >
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                <span>{language === 'en' ? 'عربي' : 'EN'}</span>
              </button>

              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                title={t.themeToggle}
                className="p-2 rounded-xl bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 border border-white/10 text-slate-200 dark:text-slate-200 transition-all duration-200 relative group overflow-hidden"
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? (
                    <Sun className="w-4 h-4 text-amber-300 group-hover:text-amber-200" />
                  ) : (
                    <Moon className="w-4 h-4 text-purple-600 group-hover:text-purple-700" />
                  )}
                </motion.div>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-white/5 dark:bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 p-5 rounded-2xl glass-nav md:hidden border border-purple-500/20 shadow-2xl shadow-purple-950/40"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-start px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm font-semibold"
                >
                  <FileText className="w-4 h-4" />
                  <span>{t.resume}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
