import React from 'react';
import { Layers, Cloud, Sparkles, Terminal, Network, Cpu, Code2 } from 'lucide-react';
import { Translation } from '../i18n/translations';

interface TechStackProps {
  t: Translation['tech'];
}

export const TechStack: React.FC<TechStackProps> = ({ t }) => {
  const techItems = [
    {
      name: 'Cloudflare Edge & Pages',
      category: t.items.cloudflare.category,
      role: t.items.cloudflare.desc,
      icon: <Cloud className="w-5 h-5 text-[#2563EB]" />,
      status: 'Edge',
    },
    {
      name: 'Google Gemini Flash',
      category: t.items.gemini.category,
      role: t.items.gemini.desc,
      icon: <Sparkles className="w-5 h-5 text-[#EC4899]" />,
      status: 'Cloud',
    },
    {
      name: 'Event-Driven Workflows',
      category: t.items.orchestration.category,
      role: t.items.orchestration.desc,
      icon: <Network className="w-5 h-5 text-[#7C3AED]" />,
      status: 'Mesh',
    },
    {
      name: 'AirLLM & PyTorch',
      category: t.items.airllm.category,
      role: t.items.airllm.desc,
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      status: 'Local',
    },
    {
      name: 'Ollama & Embeddings',
      category: t.items.ollama.category,
      role: t.items.ollama.desc,
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      status: 'Local',
    },
    {
      name: 'Go & TypeScript',
      category: t.items.gots.category,
      role: t.items.gots.desc,
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      status: 'Native',
    },
  ];

  return (
    <section id="tech" className="py-20 bg-[#070B14]/60 border-y border-[#334155]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#7C3AED] mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-md mt-4 md:mt-0">
            {t.subtitle}
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techItems.map((tech) => (
            <div
              key={tech.name}
              className="p-6 rounded-2xl bg-[#1E293B] border border-[#334155] hover:border-[#334155] hover:bg-[#1E293B]/90 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0F172A] border border-[#334155] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {tech.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#0F172A] border border-[#334155] text-[#94A3B8]">
                    {tech.status}
                  </span>
                </div>
                <div className="text-xs font-medium text-[#2563EB] mb-1">{tech.category}</div>
                <h3 className="font-heading text-lg font-bold text-[#F8FAFC] mb-2">{tech.name}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{tech.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
