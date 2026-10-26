import React, { useState } from 'react';
import { Sparkles, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Language, Translation } from '../i18n/translations';
import { GithubIcon } from './icons/GithubIcon';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translation['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange, t }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navLinks = [
    { label: t.solutions, href: '#solutions' },
    { label: t.tech, href: '#tech' },
    { label: t.architecture, href: '#architecture' },
    { label: t.metrics, href: '#metrics' },
  ];

  const languages: { code: Language; label: string; full: string }[] = [
    { code: 'en', label: 'EN', full: 'English' },
    { code: 'ru', label: 'RU', full: 'Русский' },
    { code: 'de', label: 'DE', full: 'Deutsch' },
    { code: 'es', label: 'ES', full: 'Español' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0F172A]/90 border-b border-[#334155]/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group cursor-pointer p-2 -ml-2 rounded-xl focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            aria-label="SynthixHQ Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#EC4899] p-[1.5px] transition-transform duration-200 group-hover:scale-105">
              <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#2563EB] group-hover:text-[#EC4899] transition-colors duration-200" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-tight text-[#F8FAFC]">
                Synthix<span className="text-[#2563EB]">HQ</span>
              </span>
              <span className="text-[11px] font-medium text-[#94A3B8] tracking-wider uppercase">
                AI Systems Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200 cursor-pointer py-2 focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher & GitHub / Contact */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="inline-flex items-center gap-2 px-3 min-h-[44px] rounded-xl text-xs font-semibold bg-[#1E293B] hover:bg-[#334155] text-[#F8FAFC] border border-[#334155] transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                aria-expanded={langDropdownOpen}
                aria-haspopup="true"
                aria-label="Switch Language"
              >
                <Globe className="w-4 h-4 text-[#2563EB]" />
                <span className="uppercase">{lang}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-36 rounded-xl bg-[#1E293B] border border-[#334155] shadow-xl py-1 z-50 animate-in fade-in duration-150"
                  role="menu"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        onLanguageChange(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`flex items-center justify-between w-full px-3.5 min-h-[44px] text-xs font-medium cursor-pointer transition-colors duration-150 ${
                        lang === l.code
                          ? 'text-[#2563EB] bg-[#0F172A]'
                          : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0F172A]/60'
                      }`}
                    >
                      <span>{l.full}</span>
                      <span className="text-[10px] uppercase font-bold text-[#94A3B8]">{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* GitHub Profile Button */}
            <a
              href="https://github.com/synthixhq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 min-h-[44px] rounded-xl text-sm font-semibold bg-[#1E293B] hover:bg-[#334155] text-[#F8FAFC] border border-[#334155] hover:border-[#2563EB] transition-all duration-200 cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              <GithubIcon className="w-4 h-4 text-[#94A3B8]" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu button & quick language pill */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Lang Button */}
            <button
              type="button"
              onClick={() => {
                const nextLang: Record<Language, Language> = { en: 'ru', ru: 'de', de: 'es', es: 'en' };
                onLanguageChange(nextLang[lang]);
              }}
              className="inline-flex items-center gap-1.5 px-3 min-h-[44px] rounded-xl text-xs font-bold uppercase bg-[#1E293B] border border-[#334155] text-[#2563EB] cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 min-w-[44px] min-h-[44px] rounded-xl text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B] border border-transparent hover:border-[#334155] transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#334155] bg-[#0F172A] px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3 rounded-lg text-base font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B] transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Language Selector Grid */}
          <div className="pt-3 border-t border-[#334155]">
            <div className="text-xs font-semibold text-[#94A3B8] mb-2 px-1">Language</div>
            <div className="grid grid-cols-4 gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => {
                    onLanguageChange(l.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`min-h-[44px] rounded-xl text-xs font-bold uppercase flex items-center justify-center cursor-pointer border ${
                    lang === l.code
                      ? 'bg-[#2563EB] text-white border-[#2563EB]'
                      : 'bg-[#1E293B] text-[#94A3B8] border-[#334155]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://github.com/synthixhq"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full min-h-[44px] px-4 rounded-xl text-sm font-semibold bg-[#1E293B] hover:bg-[#334155] text-white border border-[#334155] transition-colors duration-200 cursor-pointer"
            >
              <GithubIcon className="w-4 h-4 text-[#94A3B8]" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
