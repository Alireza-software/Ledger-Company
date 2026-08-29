import React, { useState } from 'react';
import { FEATURE_PILLARS } from '../data/content';
import { 
  FileSpreadsheet, 
  TrendingUp, 
  Globe, 
  PieChart, 
  ShieldCheck, 
  Users, 
  CheckCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-emerald-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-cyan-400" />,
  Globe: <Globe className="w-6 h-6 text-teal-400" />,
  PieChart: <PieChart className="w-6 h-6 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
  Users: <Users className="w-6 h-6 text-blue-400" />
};

export const FeaturesGrid: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>(FEATURE_PILLARS[0].id);
  const activePillar = FEATURE_PILLARS.find(p => p.id === selectedFeature) || FEATURE_PILLARS[0];

  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for Modern Entrepreneurs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything You Need to Master Your Finances
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Say goodbye to clunky enterprise accounting tools. LEDGER gives founders real-time financial control in an intuitive, lightning-fast interface.
          </p>
        </div>

        {/* Feature Grid with Interactive Detail Modal / Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_PILLARS.map((pillar) => {
            const isSelected = pillar.id === selectedFeature;

            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedFeature(pillar.id)}
                className={`group relative p-7 rounded-2xl border transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-slate-900 border-emerald-500/80 shadow-xl shadow-emerald-950/40 ring-1 ring-emerald-500/30 -translate-y-1' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[pillar.iconName]}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {pillar.shortDesc}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  {pillar.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Metric Badge */}
                <div className="mt-6 pt-3 flex items-center justify-between text-xs bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/60">
                  <span className="text-slate-400">{pillar.metricLabel}</span>
                  <span className="font-mono font-bold text-emerald-400">{pillar.metricValue}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">Need a customized integration for your startup incubator or franchise?</h4>
            <p className="text-xs sm:text-sm text-slate-400">Our engineering team provisions custom API webhooks, local tax compliance matrices, and bulk seats.</p>
          </div>
          <a
            href="#packages"
            className="shrink-0 px-5 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20"
          >
            Explore All Packages
          </a>
        </div>

      </div>
    </section>
  );
};
