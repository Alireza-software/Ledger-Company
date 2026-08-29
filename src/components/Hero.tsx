import React from 'react';
import { Currency } from '../types';
import { CURRENCIES, SOFTWARE_APP_URL } from '../data/content';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  BarChart3, 
  ExternalLink,
  Award,
  Zap,
  DollarSign,
  ArrowUpRight,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface HeroProps {
  currentCurrency: Currency;
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentCurrency, onOpenDemoModal }) => {
  const currencyInfo = CURRENCIES[currentCurrency];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-emerald-600/15 via-teal-600/10 to-cyan-500/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-semibold text-emerald-300 shadow-lg shadow-emerald-950/40 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Incubated at National Incubation Center (NIC)</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-300">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Led by Shamsa Malik & Kubra Batool</span>
          </div>
        </div>

        {/* Main Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Take Full Control of Your{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Financial State
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            The smart financial recording and cashflow intelligence platform engineered specifically for entrepreneurs, startups, and growing enterprises. No tedious spreadsheets, no accounting headaches.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <a
              id="hero-launch-live-software"
              href={SOFTWARE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Launch Live Software</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              id="hero-explore-packages"
              href="#packages"
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>View Packages & Pricing</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </a>

            <button
              id="hero-book-demo"
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-transparent hover:bg-slate-900/50 rounded-xl transition-all"
            >
              Request Founder Walkthrough
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero Accounting Background Needed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>Bank-Grade 256-Bit Encryption</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Real-Time Multi-Currency Engine</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Financial Snapshot Graphic */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-700/60 via-slate-800/40 to-slate-900/80 shadow-2xl shadow-emerald-950/30">
            
            {/* Top software window bar */}
            <div className="bg-slate-950 rounded-t-xl px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">ledger.app/dashboard/financial-overview</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono">LIVE CLOUD SYNC</span>
              </div>
            </div>

            {/* Dashboard Mockup Grid */}
            <div className="bg-slate-900/90 rounded-b-xl p-5 sm:p-7 backdrop-blur-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                
                {/* Metric 1: Total Revenue */}
                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 relative overflow-hidden">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-slate-400 font-medium">Monthly Revenue (MRR)</span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      +28.4% MoM
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono">
                    {currencyInfo.symbol}{(28450 * currencyInfo.rate).toLocaleString()}
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-400">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>$6,450 over forecast target</span>
                  </div>
                </div>

                {/* Metric 2: Net Burn Rate */}
                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-slate-400 font-medium">Monthly Operational Burn</span>
                    <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                      Optimized
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono">
                    {currencyInfo.symbol}{(11200 * currencyInfo.rate).toLocaleString()}
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-400">
                    <span>Payroll: 62% • SaaS: 18% • Ops: 20%</span>
                  </div>
                </div>

                {/* Metric 3: Runway Health */}
                <div className="bg-slate-950/70 border border-emerald-500/30 rounded-xl p-4 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-slate-400 font-medium">Estimated Runway</span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      High Safety
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                    22.4 Months
                  </div>
                  <div className="mt-2 text-[11px] text-slate-400">
                    Cash buffer: {currencyInfo.symbol}{(250880 * currencyInfo.rate).toLocaleString()}
                  </div>
                </div>

                {/* Metric 4: Net Profit Margin */}
                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-slate-400 font-medium">Net Profit Margin</span>
                    <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                      Profitable
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono">
                    +60.6%
                  </div>
                  <div className="mt-2 text-[11px] text-slate-400">
                    Net Monthly Gain: +{currencyInfo.symbol}{(17250 * currencyInfo.rate).toLocaleString()}
                  </div>
                </div>

              </div>

              {/* Mini Interactive Preview Bar */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Experience the full LEDGER live environment</h4>
                    <p className="text-xs text-slate-400">Test real-time ledger entries, P&L reporting, and startup forecasting.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <a
                    href="#live-software"
                    className="flex-1 md:flex-none px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg text-center transition-colors"
                  >
                    Test Interactive Sandbox
                  </a>
                  <a
                    href={SOFTWARE_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg text-center flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
                  >
                    <span>Open Software</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Global Impact Numbers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-800/80">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">850+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Active Startups</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-heading">$48M+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Transactions Logged</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-heading">NIC Cohort</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Incubated Venture</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-heading">99.98%</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Audit Accuracy</div>
          </div>
        </div>

      </div>
    </section>
  );
};
