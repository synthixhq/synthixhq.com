import React from 'react';
import { Send, Sparkles } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { Translation } from '../i18n/translations';

interface CallToActionProps {
  t: Translation['cta'];
}

export const CallToAction: React.FC<CallToActionProps> = ({ t }) => {
  return (
    <section id="cta" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] border border-[#334155] p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl">
          {/* Subtle Ambient Light */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7C3AED]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A] border border-[#334155] text-xs font-semibold text-[#2563EB]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
              {t.title}
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://t.me/synthixcards_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 min-h-[48px] rounded-xl text-base font-semibold bg-[#2563EB] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
              >
                <Send className="w-5 h-5" />
                <span>{t.primaryBtn}</span>
              </a>

              <a
                href="https://github.com/synthixhq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 min-h-[48px] rounded-xl text-base font-semibold bg-[#0F172A] hover:bg-[#1E293B] text-[#F8FAFC] border border-[#334155] hover:border-[#94A3B8] transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <GithubIcon className="w-5 h-5 text-[#94A3B8]" />
                <span>{t.githubBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
