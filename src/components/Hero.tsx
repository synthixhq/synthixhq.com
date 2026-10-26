import React from 'react';
import { ArrowDown, Bot, Cpu, Zap, ShieldCheck, Layers } from 'lucide-react';
import { Translation } from '../i18n/translations';

interface HeroProps {
  t: Translation['hero'];
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Glow Accents */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#2563EB]/20 via-[#7C3AED]/20 to-[#EC4899]/15 blur-3xl rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-medium text-[#94A3B8]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
            </span>
            <span className="tracking-wide text-[#F8FAFC]">{t.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12]">
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 min-h-[48px] rounded-xl text-base font-semibold bg-[#2563EB] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
            >
              <Layers className="w-5 h-5" />
              <span>{t.exploreBtn}</span>
            </a>
            <a
              href="#cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 min-h-[48px] rounded-xl text-base font-semibold bg-[#1E293B] hover:bg-[#334155] text-[#F8FAFC] border border-[#334155] hover:border-[#94A3B8] transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              <span>{t.contactBtn}</span>
              <ArrowDown className="w-4 h-4 text-[#94A3B8]" />
            </a>
          </div>
        </div>

        {/* Feature Cards Grid (Block-based highlight metrics) */}
        <div id="metrics" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-8 border-t border-[#334155]/60">
          <div className="p-5 rounded-2xl bg-[#1E293B]/70 border border-[#334155] hover:border-[#2563EB] transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">{t.metrics.latency.label}</span>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-[#2563EB]">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-[#F8FAFC]">{t.metrics.latency.value}</div>
              <p className="text-xs text-[#94A3B8] mt-1">{t.metrics.latency.desc}</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#1E293B]/70 border border-[#334155] hover:border-[#7C3AED] transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">{t.metrics.inference.label}</span>
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-[#7C3AED]">
                <Cpu className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-[#F8FAFC]">{t.metrics.inference.value}</div>
              <p className="text-xs text-[#94A3B8] mt-1">{t.metrics.inference.desc}</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#1E293B]/70 border border-[#334155] hover:border-[#EC4899] transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">{t.metrics.reliability.label}</span>
              <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-[#EC4899]">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-[#F8FAFC]">{t.metrics.reliability.value}</div>
              <p className="text-xs text-[#94A3B8] mt-1">{t.metrics.reliability.desc}</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#1E293B]/70 border border-[#334155] hover:border-emerald-500 transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">{t.metrics.gitops.label}</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Bot className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-[#F8FAFC]">{t.metrics.gitops.value}</div>
              <p className="text-xs text-[#94A3B8] mt-1">{t.metrics.gitops.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
