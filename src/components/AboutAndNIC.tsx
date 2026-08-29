import React from 'react';
import { FOUNDERS, NIC_DETAILS } from '../data/content';
import { 
  Building2, 
  Award, 
  Target, 
  Sparkles, 
  Quote, 
  ExternalLink, 
  CheckCircle2, 
  HeartHandshake, 
  Linkedin, 
  Twitter,
  Calendar,
  Compass,
  ArrowRight
} from 'lucide-react';

interface AboutAndNICProps {
  onOpenDemoModal: () => void;
}

export const AboutAndNIC: React.FC<AboutAndNICProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Founding Vision & Incubation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Story Behind LEDGER
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Born inside the National Incubation Center (NIC), LEDGER was founded with a singular purpose: empowering entrepreneurs to master their financial reality.
          </p>
        </div>

        {/* Incubation Showcase Banner */}
        <div className="mb-20 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold text-emerald-300">
                <Building2 className="w-4 h-4" />
                <span>National Incubation Center (NIC) Accelerated</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading leading-snug">
                Built to solve real accounting friction for fast-scaling startups
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                During their journey at the National Incubation Center, our founders noticed that high-potential tech and commercial startups were continually held back by chaotic financial spreadsheets, delayed tax filings, and opaque runway numbers.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                With the support of the NIC ecosystem, incubation mentors, and rigorous testing across 850+ pilot companies, LEDGER evolved from an internal founder dashboard into a complete financial operating system for modern business builders.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                {NIC_DETAILS.stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    <div className="text-lg font-black text-white font-mono">{stat.value}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80 space-y-4">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Incubation Journey Milestones
              </span>

              <div className="space-y-4">
                {NIC_DETAILS.milestones.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-3 relative">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 font-mono text-xs font-bold">
                      {m.year.slice(2)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{m.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Founders Spotlight Section */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Leadership Team</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Meet the Founders of LEDGER
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            Passionate entrepreneurs driving financial transparency, simplicity, and software excellence.
          </p>
        </div>

        {/* Two Founders Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-3xl p-8 shadow-xl flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-emerald-950/20"
            >
              <div>
                {/* Header Profile with Avatar & Role */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${founder.avatarColor} p-1 shadow-lg flex items-center justify-center text-2xl font-black text-white`}>
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white font-heading group-hover:text-emerald-300 transition-colors">
                      {founder.name}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      {founder.role}
                    </p>
                    <span className="text-[11px] text-slate-400">NIC Incubation Leader</span>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Quote Box */}
                <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 relative mb-6">
                  <Quote className="w-5 h-5 text-emerald-500/30 absolute top-3 right-3" />
                  <p className="text-xs italic text-slate-300 leading-relaxed pr-4">
                    "{founder.quote}"
                  </p>
                </div>

                {/* Core Specializations */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Expertise:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {founder.specialization.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-[11px] font-medium bg-slate-950 text-slate-300 rounded-lg border border-slate-800"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Founder Footer Connect */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={onOpenDemoModal}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <span>Connect with {founder.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Company Core Values Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Founder-First Simplicity</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every workflow is streamlined so entrepreneurs spend under 5 minutes a day managing records.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-3">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Uncompromising Accuracy</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Double-checked balance entries, automatic tax write-off classification, and immutable audit logs.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-3">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Ecosystem Support</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Direct founder mentorship, university grant discounts, and ongoing incubator partner support.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
