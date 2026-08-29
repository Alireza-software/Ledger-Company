import React, { useState } from 'react';
import { Currency } from '../types';
import { CURRENCIES, SOFTWARE_APP_URL } from '../data/content';
import { 
  Calculator, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle,
  ArrowRight,
  Sparkles,
  Download,
  Gauge
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FinancialHealthCalculatorProps {
  currentCurrency: Currency;
  onOpenDemoModal: () => void;
}

export const FinancialHealthCalculator: React.FC<FinancialHealthCalculatorProps> = ({
  currentCurrency,
  onOpenDemoModal
}) => {
  const currencyInfo = CURRENCIES[currentCurrency];

  // Default values in USD
  const [revenue, setRevenue] = useState<number>(18500);
  const [expenses, setExpenses] = useState<number>(12000);
  const [cashBalance, setCashBalance] = useState<number>(95000);
  const [receivables, setReceivables] = useState<number>(8500);
  const [teamSize, setTeamSize] = useState<number>(5);

  const netMonthly = revenue - expenses;
  const isProfitable = netMonthly >= 0;
  
  // Calculate runway
  let runwayMonths = 999;
  if (!isProfitable) {
    const netBurn = Math.abs(netMonthly);
    runwayMonths = netBurn > 0 ? (cashBalance + receivables) / netBurn : 999;
  }

  // Health Score Calculation (0 - 100)
  let healthScore = 50;
  if (isProfitable) {
    healthScore = Math.min(98, 75 + Math.round((netMonthly / (revenue || 1)) * 25));
  } else {
    if (runwayMonths >= 18) healthScore = 80;
    else if (runwayMonths >= 12) healthScore = 68;
    else if (runwayMonths >= 6) healthScore = 48;
    else healthScore = 25;
  }

  const getStatus = () => {
    if (healthScore >= 80) return { label: 'Thriving & Investment Ready', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' };
    if (healthScore >= 60) return { label: 'Healthy & Sustainable', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/30' };
    if (healthScore >= 40) return { label: 'Caution: Moderate Runway', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' };
    return { label: 'Critical: Urgent Capital Action', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' };
  };

  const status = getStatus();

  const handleCelebrate = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="calculator" className="py-20 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Check Your Startup Financial Health
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Use this interactive calculator to evaluate your cash burn, calculate accurate runway months, and determine your enterprise health score.
          </p>
        </div>

        {/* Two-Column Diagnostic Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Input Sliders & Fields */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Enter Your Monthly Financial Parameters</span>
            </h3>

            {/* Input 1: Monthly Inflows / Revenue */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-slate-300">Monthly Revenue / Inflows</span>
                <span className="text-emerald-400 font-mono font-bold text-sm">
                  {currencyInfo.symbol}{(revenue * currencyInfo.rate).toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="500"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0</span>
                <span>$25k</span>
                <span>$50k</span>
                <span>$100k+</span>
              </div>
            </div>

            {/* Input 2: Monthly Operating Expenses / Outflows */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-slate-300">Monthly Operating Expenses (Payroll + Tools + Rent)</span>
                <span className="text-rose-400 font-mono font-bold text-sm">
                  {currencyInfo.symbol}{(expenses * currencyInfo.rate).toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="80000"
                step="500"
                value={expenses}
                onChange={(e) => setExpenses(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-rose-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>$500</span>
                <span>$20k</span>
                <span>$50k</span>
                <span>$80k+</span>
              </div>
            </div>

            {/* Input 3: Total Bank Cash Balance */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-slate-300">Current Liquid Bank Cash & Reserves</span>
                <span className="text-cyan-400 font-mono font-bold text-sm">
                  {currencyInfo.symbol}{(cashBalance * currencyInfo.rate).toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="500000"
                step="2000"
                value={cashBalance}
                onChange={(e) => setCashBalance(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>$2k</span>
                <span>$100k</span>
                <span>$250k</span>
                <span>$500k+</span>
              </div>
            </div>

            {/* Input 4: Pending Invoices / Receivables */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Unpaid Invoices (Receivables)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">$</span>
                  <input
                    type="number"
                    value={receivables}
                    onChange={(e) => setReceivables(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-7 pr-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Team Size (Full & Part Time)
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white font-mono focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Calculated locally in your browser. No private records stored without account.</span>
            </div>
          </div>

          {/* Right Column: Diagnostic Results Dashboard */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Financial State Diagnostic
              </span>
              <div className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${status.bg} ${status.color}`}>
                {status.label}
              </div>
            </div>

            {/* Health Score Gauge */}
            <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 text-center relative overflow-hidden">
              <span className="text-xs text-slate-400 font-medium">LEDGER Health Score</span>
              <div className="text-5xl font-black text-white font-heading mt-2 mb-1 flex items-baseline justify-center gap-1">
                <span>{healthScore}</span>
                <span className="text-base font-normal text-slate-500 font-sans">/100</span>
              </div>

              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mt-3">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    healthScore >= 75 ? 'bg-gradient-to-r from-emerald-500 to-teal-400' :
                    healthScore >= 50 ? 'bg-gradient-to-r from-cyan-500 to-emerald-400' :
                    healthScore >= 35 ? 'bg-gradient-to-r from-amber-500 to-yellow-400' :
                    'bg-gradient-to-r from-rose-600 to-rose-400'
                  }`}
                  style={{ width: `${healthScore}%` }}
                />
              </div>
            </div>

            {/* Key Diagnostic Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 font-medium block">Calculated Runway</span>
                <div className="text-xl font-extrabold text-white font-mono mt-1">
                  {isProfitable ? (
                    <span className="text-emerald-400">Profitable (∞)</span>
                  ) : (
                    <span>{runwayMonths.toFixed(1)} Mo</span>
                  )}
                </div>
                <span className="text-[10px] text-slate-500">
                  {isProfitable ? 'Self-sustaining' : 'Before zero balance'}
                </span>
              </div>

              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 font-medium block">Net Monthly Flow</span>
                <div className={`text-xl font-extrabold font-mono mt-1 ${isProfitable ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isProfitable ? '+' : '-'}{currencyInfo.symbol}{(Math.abs(netMonthly) * currencyInfo.rate).toLocaleString()}
                </div>
                <span className="text-[10px] text-slate-500">
                  {isProfitable ? 'Net Monthly Gain' : 'Monthly Net Burn'}
                </span>
              </div>
            </div>

            {/* Entrepreneur Action Recommendations */}
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 space-y-2">
              <span className="text-xs font-bold text-slate-300">Actionable Advice from LEDGER AI:</span>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {isProfitable ? (
                  <>
                    <li className="flex items-start gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>Positive net cashflow! Reinvest surplus into scalable client acquisition.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-slate-500 shrink-0" />
                      <span>Maintain a minimum 6-month operating cash cushion for unexpected slowdowns.</span>
                    </li>
                  </>
                ) : runwayMonths < 6 ? (
                  <>
                    <li className="flex items-start gap-1.5 text-rose-300">
                      <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>Runway is under 6 months. Prioritize collecting ${receivables} in receivables immediately.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 mt-0.5 text-rose-300 shrink-0" />
                      <span>Audit discretionary SaaS & marketing spend using LEDGER expense categorizer.</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-1.5 text-cyan-300">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>Comfortable runway buffer of {runwayMonths.toFixed(0)} months. Keep monitoring monthly burn.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-slate-500 shrink-0" />
                      <span>Export monthly P&L decks to keep angel investors updated.</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
              <a
                href={SOFTWARE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCelebrate}
                className="flex-1 py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 rounded-xl text-center shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Track This in LEDGER</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenDemoModal}
                className="px-4 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
              >
                Consult Founder
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
