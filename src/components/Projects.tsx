import React from 'react';
import { Bot, Cpu, Workflow, CheckCircle2, Sparkles, Terminal, ArrowUpRight, Lock } from 'lucide-react';
import { Translation } from '../i18n/translations';

interface ProjectsProps {
  t: Translation['solutions'];
}

export const Projects: React.FC<ProjectsProps> = ({ t }) => {
  return (
    <section id="solutions" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#2563EB] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-4 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 1. Autonomous Agents & AI Ops */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#1E293B] border border-[#334155] p-6 lg:p-8 hover:border-[#7C3AED]/70 transition-all duration-200 shadow-md">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {t.items.aiOps.badge}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#334155] flex items-center justify-center text-[#7C3AED]">
                  <Cpu className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-heading text-xl lg:text-2xl font-bold text-[#F8FAFC] tracking-tight mb-3">
                {t.items.aiOps.title}
              </h3>
              <p className="text-sm lg:text-base text-[#94A3B8] leading-relaxed mb-6">
                {t.items.aiOps.desc}
              </p>

              <ul className="space-y-2.5 mb-6" aria-label={t.items.aiOps.title}>
                {t.items.aiOps.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs lg:text-sm text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#334155]/60 mb-6">
                {t.items.aiOps.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#0F172A] border border-[#334155] text-[11px] font-medium text-[#94A3B8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 min-h-[44px] px-3.5 py-2 rounded-xl bg-[#0F172A]/60 border border-[#334155] text-xs text-[#94A3B8]">
                <Terminal className="w-4 h-4 text-[#7C3AED]" />
                <span>{t.items.aiOps.status}</span>
              </div>
            </div>
          </div>

          {/* 2. Synthix Cards - Pilot Micro-SaaS */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#1E293B] border border-[#334155] p-6 lg:p-8 hover:border-[#2563EB]/70 transition-all duration-200 shadow-md">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {t.items.cards.badge}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#334155] flex items-center justify-center text-[#2563EB]">
                  <Bot className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-heading text-xl lg:text-2xl font-bold text-[#F8FAFC] tracking-tight mb-3">
                {t.items.cards.title}
              </h3>
              <p className="text-sm lg:text-base text-[#94A3B8] leading-relaxed mb-6">
                {t.items.cards.desc}
              </p>

              <ul className="space-y-2.5 mb-6" aria-label={t.items.cards.title}>
                {t.items.cards.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs lg:text-sm text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#334155]/60 mb-6">
                {t.items.cards.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#0F172A] border border-[#334155] text-[11px] font-medium text-[#94A3B8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://t.me/synthixcards_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full min-h-[44px] px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#2563EB] hover:bg-blue-600 text-white transition-all duration-200 cursor-pointer shadow-sm group focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span>{t.items.cards.cta}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* 3. Systems Automation (NO internal links!) */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#1E293B] border border-[#334155] p-6 lg:p-8 hover:border-[#EC4899]/70 transition-all duration-200 shadow-md">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {t.items.automation.badge}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#334155] flex items-center justify-center text-[#EC4899]">
                  <Workflow className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-heading text-xl lg:text-2xl font-bold text-[#F8FAFC] tracking-tight mb-3">
                {t.items.automation.title}
              </h3>
              <p className="text-sm lg:text-base text-[#94A3B8] leading-relaxed mb-6">
                {t.items.automation.desc}
              </p>

              <ul className="space-y-2.5 mb-6" aria-label={t.items.automation.title}>
                {t.items.automation.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs lg:text-sm text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#EC4899] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#334155]/60 mb-6">
                {t.items.automation.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#0F172A] border border-[#334155] text-[11px] font-medium text-[#94A3B8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 min-h-[44px] px-3.5 py-2 rounded-xl bg-[#0F172A]/60 border border-[#334155] text-xs text-[#94A3B8]">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>{t.items.automation.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
