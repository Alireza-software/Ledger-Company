import React, { useState } from 'react';
import { Currency } from '../types';
import { CURRENCIES, PRICING_PACKAGES, SOFTWARE_APP_URL } from '../data/content';
import { 
  Check, 
  Sparkles, 
  Award, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Percent,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PackagesSectionProps {
  currentCurrency: Currency;
  onOpenDemoModal: (packageName?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  currentCurrency,
  onOpenDemoModal
}) => {
  const currencyInfo = CURRENCIES[currentCurrency];
  const [isAnnual, setIsAnnual] = useState(true);
  const [hasNicDiscount, setHasNicDiscount] = useState(false);

  const handleSelectPlan = (packageName: string) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    onOpenDemoModal(packageName);
  };

  return (
    <section id="packages" className="py-24 bg-slate-900/40 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing for Every Growth Stage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Plans & Packages Designed for Founders
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Invest in clarity. Start with our 14-day risk-free trial, upgrade as your transaction volume scales, or leverage our National Incubation Center (NIC) founder grant.
          </p>
        </div>

        {/* Toggle Controls: Billing Frequency & NIC Discount */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          
          {/* Monthly / Annual Switch */}
          <div className="flex items-center bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                !isAnnual
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                isAnnual ? 'bg-slate-950 text-emerald-300' : 'bg-emerald-500/20 text-emerald-400'
              }`}>
                SAVE 25%
              </span>
            </button>
          </div>

          {/* NIC Incubation Affiliate Toggle */}
          <div 
            onClick={() => setHasNicDiscount(!hasNicDiscount)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              hasNicDiscount
                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 shadow-md shadow-emerald-950/30'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className={`w-4 h-4 rounded border flex items-center justify-center ${
              hasNicDiscount ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-600 bg-slate-900'
            }`}>
              {hasNicDiscount && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold">NIC Startup Ecosystem Grant (-25%)</span>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const basePrice = isAnnual ? pkg.priceAnnualMonthlyUSD : pkg.priceMonthlyUSD;
            const finalPriceUSD = hasNicDiscount ? Math.round(basePrice * 0.75) : basePrice;
            const displayPrice = Math.round(finalPriceUSD * currencyInfo.rate);

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all ${pkg.highlightColor} ${
                  pkg.popular ? 'shadow-2xl shadow-emerald-950/40 lg:-translate-y-2' : 'hover:border-slate-600'
                }`}
              >
                {/* Popular / Recommended Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 text-[11px] font-extrabold rounded-full shadow-lg shadow-emerald-500/20 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{pkg.badge || 'Recommended'}</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white font-heading">{pkg.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{pkg.tagline}</p>
                  </div>

                  {/* Pricing Display */}
                  <div className="py-4 my-2 border-y border-slate-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                        {currencyInfo.symbol}{displayPrice}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ month</span>
                    </div>
                    
                    <div className="text-[11px] text-slate-400 mt-1">
                      {isAnnual ? 'Billed annually' : 'Billed monthly'}
                      {hasNicDiscount && (
                        <span className="text-emerald-400 ml-1 font-semibold">• NIC Grant Applied</span>
                      )}
                    </div>
                  </div>

                  {/* Limits Summary */}
                  <div className="bg-slate-950/70 rounded-xl p-3 my-4 border border-slate-800/60 space-y-1 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-500">Volume:</span>
                      <span className="font-semibold">{pkg.limits.transactionsPerMonth}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-500">Entities:</span>
                      <span className="font-semibold">{pkg.limits.entities}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-500">Team:</span>
                      <span className="font-semibold">{pkg.limits.teamMembers}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 my-5">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Included in Package:
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="pt-4 mt-auto">
                  <button
                    onClick={() => handleSelectPlan(pkg.name)}
                    className={`w-full py-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 shadow-lg shadow-emerald-500/20'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Security & Guarantee Guarantee Footer */}
        <div className="mt-14 p-6 bg-slate-950 border border-slate-800 rounded-2xl flex flex-wrap items-center justify-around gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>14-Day Full Access Free Trial • No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Cancel or Switch Packages Anytime with 1-Click</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>NIC Incubator Mentorship Supported</span>
          </div>
        </div>

      </div>
    </section>
  );
};
