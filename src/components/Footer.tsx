import React from 'react';
import { Sparkles, ShieldCheck, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { Translation } from '../i18n/translations';

interface FooterProps {
  t: Translation['footer'];
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="border-t border-[#334155] bg-[#070B14] py-14 text-sm text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] p-[1.5px]">
                <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#2563EB]" />
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-[#F8FAFC]">
                Synthix<span className="text-[#2563EB]">HQ</span>
              </span>
            </div>
            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              {t.desc}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.status}</span>
            </div>
          </div>

          {/* Col 2: Ecosystem */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-[#F8FAFC]">
              {t.sections.ecosystem}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://t.me/synthixcards_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F8FAFC] transition-colors duration-200 inline-flex items-center gap-1 cursor-pointer py-1"
                >
                  <span>{t.links.cardsBot}</span>
                  <ExternalLink className="w-3 h-3 text-[#2563EB]" />
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-[#F8FAFC] transition-colors duration-200 cursor-pointer py-1 inline-block"
                >
                  {t.links.aiOps}
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="hover:text-[#F8FAFC] transition-colors duration-200 cursor-pointer py-1 inline-block"
                >
                  {t.links.architecture}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-[#F8FAFC]">
              {t.sections.resources}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://github.com/synthixhq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F8FAFC] transition-colors duration-200 inline-flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <GithubIcon className="w-4 h-4 text-[#94A3B8]" />
                  <span>{t.links.github}</span>
                </a>
              </li>
              <li>
                <a
                  href="#cta"
                  className="hover:text-[#F8FAFC] transition-colors duration-200 cursor-pointer py-1 inline-block"
                >
                  {t.links.contact}
                </a>
              </li>
              <li>
                <a
                  href="https://synthixhq.com"
                  className="hover:text-[#F8FAFC] transition-colors duration-200 cursor-pointer py-1 inline-block"
                >
                  {t.links.domain}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-[#334155] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div>{t.copyright}</div>
          <div className="flex items-center gap-6">
            <span>{t.hosting}</span>
            <span>DNS & Edge: Cloudflare</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
