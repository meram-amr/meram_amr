import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare,
  ArrowUpRight,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { language, isRtl } = useLanguage();
  const t = portfolioData[language].contact;
  const socials = portfolioData.socials;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(key);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = language === 'en' ? 'Name is required' : 'يرجى إدخال الاسم';
    }
    if (!formData.email.trim()) {
      errors.email = language === 'en' ? 'Email is required' : 'يرجى إدخال البريد الإلكتروني';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = language === 'en' ? 'Please enter a valid email address' : 'صيغة البريد الإلكتروني غير صحيحة';
    }
    if (!formData.message.trim()) {
      errors.message = language === 'en' ? 'Message is required' : 'يرجى كتابة رسالتك';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8b5cf6', '#6366f1', '#a855f7', '#ec4899', '#38bdf8']
        });
      } catch (e) {
        // graceful fallback if canvas not available
      }
    }, 1200);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow Backdrop */}
      <div className="glow-orb-purple -bottom-20 -right-20 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
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
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            {t.pitch}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Touchpoint Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6 border-purple-500/20 hover:border-purple-500/40 relative group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider">
                      {t.infoCards.email.label}
                    </span>
                    <h4 className="text-sm font-bold text-slate-100 break-all">
                      {t.infoCards.email.value}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {t.infoCards.email.sub}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard(socials.emailPlain, 'email')}
                    title="Copy Email"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
                  >
                    {copiedItem === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={socials.email}
                    className="p-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {copiedItem === 'email' && (
                <div className="mt-3 text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>{t.copiedAlert}</span>
                </div>
              )}
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-3xl p-6 border-purple-500/20 hover:border-purple-500/40 relative group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                      {t.infoCards.phone.label}
                    </span>
                    <h4 className="text-sm font-bold text-slate-100" dir="ltr">
                      {t.infoCards.phone.value}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {t.infoCards.phone.sub}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard(socials.phonePlain, 'phone')}
                    title="Copy Phone"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
                  >
                    {copiedItem === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={socials.phone}
                    className="p-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {copiedItem === 'phone' && (
                <div className="mt-3 text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>{t.copiedAlert}</span>
                </div>
              )}
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-6 border-purple-500/20 hover:border-purple-500/40 relative group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-pink-400 uppercase tracking-wider">
                    {t.infoCards.location.label}
                  </span>
                  <h4 className="text-sm font-bold text-slate-100">
                    {t.infoCards.location.value}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {t.infoCards.location.sub}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-7 sm:p-9 border-purple-500/20 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 shadow-glow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">
                      {t.form.successTitle}
                    </h3>
                    <p className="text-sm text-slate-400 max-w-md mb-8 leading-relaxed">
                      {t.form.successMsg}
                    </p>
                    <button
                      onClick={resetForm}
                      className="px-6 py-3 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 shadow-glow-sm transition-all"
                    >
                      {t.form.sendAnotherBtn}
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-100 mb-2">
                      {t.form.title}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          {t.form.nameLabel} <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t.form.namePlaceholder}
                          className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                            formErrors.name ? 'border-rose-500/80 bg-rose-500/5' : 'border-white/10 hover:border-white/20'
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{formErrors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          {t.form.emailLabel} <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t.form.emailPlaceholder}
                          className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                            formErrors.email ? 'border-rose-500/80 bg-rose-500/5' : 'border-white/10 hover:border-white/20'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{formErrors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.form.subjectLabel}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={t.form.subjectPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.form.messageLabel} <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.form.messagePlaceholder}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none ${
                          formErrors.message ? 'border-rose-500/80 bg-rose-500/5' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {formErrors.message && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-glow-md hover:shadow-glow-lg transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>{t.form.sendingBtn}</span>
                      ) : (
                        <>
                          <span>{t.form.submitBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
