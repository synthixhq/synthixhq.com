import React from 'react';
import { Shield, Lock, Terminal, Server, Check } from 'lucide-react';
import { Translation } from '../i18n/translations';

interface ArchitectureProps {
  t: Translation['architecture'];
}

export const Architecture: React.FC<ArchitectureProps> = ({ t }) => {
  const principles = [
    {
      title: t.principles.localFirst.title,
      description: t.principles.localFirst.desc,
      icon: <Lock className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      title: t.principles.zeroTrust.title,
      description: t.principles.zeroTrust.desc,
      icon: <Shield className="w-5 h-5 text-[#7C3AED]" />,
    },
    {
      title: t.principles.declarative.title,
      description: t.principles.declarative.desc,
      icon: <Terminal className="w-5 h-5 text-[#EC4899]" />,
    },
  ];

  return (
    <section id="architecture" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Principles */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                {t.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-2">
                {t.title}
              </h2>
              <p className="text-base text-[#94A3B8] mt-4 leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {principles.map((p, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center shrink-0 mt-1">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#F8FAFC]">{p.title}</h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mt-1">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Topology Diagram Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#1E293B] border border-[#334155] p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-[#334155] mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-[#94A3B8] ml-2">{t.topology.filename}</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {t.topology.synchronized}
                </span>
              </div>

              {/* Topology Layers */}
              <div className="space-y-4 font-mono text-xs">
                {/* Layer 1: Edge */}
                <div className="p-3.5 rounded-xl bg-[#0F172A] border border-[#334155] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <span className="text-[#F8FAFC]">{t.topology.layer1.name}</span>
                  </div>
                  <span className="text-[#94A3B8]">{t.topology.layer1.desc}</span>
                </div>

                {/* Layer 2: Public Bots & Apps */}
                <div className="p-3.5 rounded-xl bg-[#0F172A] border border-[#334155] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#EC4899]" />
                    <span className="text-[#F8FAFC]">{t.topology.layer2.name}</span>
                  </div>
                  <span className="text-[#94A3B8]">{t.topology.layer2.desc}</span>
                </div>

                {/* Layer 3: Zero Trust Mesh (No sensitive URLs!) */}
                <div className="p-3.5 rounded-xl bg-[#0F172A] border border-[#334155] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                    <span className="text-[#F8FAFC]">{t.topology.layer3.name}</span>
                  </div>
                  <span className="text-[#94A3B8]">{t.topology.layer3.desc}</span>
                </div>

                {/* Layer 4: Local R&D Core */}
                <div className="p-3.5 rounded-xl bg-[#0F172A] border border-[#334155] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-[#F8FAFC]">{t.topology.layer4.name}</span>
                  </div>
                  <span className="text-[#94A3B8]">{t.topology.layer4.desc}</span>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-6 pt-4 border-t border-[#334155]/60 flex items-center justify-between text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{t.topology.secureCircuit}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>{t.topology.checksPassed}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
