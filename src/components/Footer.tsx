import React, { useState } from 'react';
import { Layers, ExternalLink, ShieldCheck, Heart, Send, Check } from 'lucide-react';
import { SOFTWARE_APP_URL } from '../data/content';
import confetti from 'canvas-confetti';

export const Footer: React.FC = () => {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setSubscribed(true);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.9 } });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-[1.5px] shadow-lg shadow-emerald-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Layers className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight font-heading">
                LEDGER
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The financial intelligence and recording platform built for modern entrepreneurs, startups, and growing SMEs. Incubated at the National Incubation Center (NIC).
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>
                <strong className="text-slate-200">Founders:</strong> Shamsa Malik (CEO) & Kubra Batool (Head of Product)
              </p>
              <p>
                <strong className="text-slate-200">Incubator:</strong> National Incubation Center (NIC)
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>SOC-2 Ready • 256-Bit Data Encryption</span>
            </div>
          </div>

          {/* Col 3: Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Software</h4>
            <ul className="space-y-2">
              <li>
                <a href="#live-software" className="hover:text-emerald-400 transition-colors">
                  Live Software Sandbox
                </a>
              </li>
              <li>
                <a 
                  href={SOFTWARE_APP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>Launch Web App</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-400 transition-colors">
                  Runway & Health Calculator
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  Features & Tools
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-emerald-400 transition-colors">
                  Plans & Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & NIC */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company & Team</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Founders
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  NIC Incubation Story
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-emerald-400 transition-colors">
                  Founder Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  FAQ & Knowledge Base
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Founder Newsletter</h4>
            <p className="text-xs text-slate-400">
              Weekly startup financial guides, runway optimization strategies, and NIC community updates.
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="Your email address..."
                  className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3 h-3" />
                  <span>Subscribe</span>
                </button>
              </form>
            ) : (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscribed! Welcome to the founder circle.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} LEDGER Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-300">NIC Incubator</a>
            <span>•</span>
            <a href="#packages" className="hover:text-slate-300">Packages</a>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-300">Contact Us</a>
            <span>•</span>
            <a href={SOFTWARE_APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
              <span>App</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
