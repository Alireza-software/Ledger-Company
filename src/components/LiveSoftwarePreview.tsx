import React, { useState } from 'react';
import { Currency, DemoTransaction } from '../types';
import { CURRENCIES, INITIAL_DEMO_TRANSACTIONS, SOFTWARE_APP_URL } from '../data/content';
import { 
  Plus, 
  Search, 
  Filter, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Download, 
  RefreshCw, 
  ExternalLink,
  CheckCircle,
  Clock,
  PieChart,
  Layers,
  Sparkles,
  SlidersHorizontal,
  Wallet,
  Receipt,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LiveSoftwarePreviewProps {
  currentCurrency: Currency;
}

export const LiveSoftwarePreview: React.FC<LiveSoftwarePreviewProps> = ({ currentCurrency }) => {
  const currencyInfo = CURRENCIES[currentCurrency];
  const [transactions, setTransactions] = useState<DemoTransaction[]>(INITIAL_DEMO_TRANSACTIONS);
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'ledger' | 'pnl' | 'cashflow'>('ledger');
  
  // New transaction modal state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDesc, setNewDesc] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newType, setNewType] = useState<'income' | 'expense'>('income');
  const [newCategory, setNewCategory] = useState<'Revenue' | 'Payroll' | 'Cloud Hosting' | 'Marketing' | 'Office' | 'Consulting'>('Revenue');

  const filteredTransactions = transactions.filter(tx => {
    const matchesFilter = filterType === 'all' || tx.type === filterType;
    const matchesSearch = tx.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tx.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalIncome = transactions
    .filter(tx => tx.type === 'income')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const totalExpenses = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const netBalance = totalIncome - totalExpenses;

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDesc.trim() || !newAmount || parseFloat(newAmount) <= 0) return;

    const newTx: DemoTransaction = {
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      date: 'Just now',
      description: newDesc.trim(),
      category: newCategory,
      type: newType,
      amount: parseFloat(newAmount),
      status: 'reconciled'
    };

    setTransactions([newTx, ...transactions]);
    setNewDesc('');
    setNewAmount('');
    setShowAddForm(false);

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handleResetData = () => {
    setTransactions(INITIAL_DEMO_TRANSACTIONS);
    setFilterType('all');
    setSearchQuery('');
  };

  return (
    <section id="live-software" className="py-20 bg-slate-950 relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Software Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See LEDGER in Action
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Experience our software UI directly below. Add transactions, test multi-currency conversions, and explore how easily entrepreneurs maintain clean ledgers.
          </p>
        </div>

        {/* The Live Interactive Sandbox Container */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl overflow-hidden">
          
          {/* Top Application Bar */}
          <div className="bg-slate-950 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                L
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">LEDGER Workspace Demo</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-mono">
                    LIVE PREVIEW
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Company: Apex Tech Innovations (NIC Cohort)</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleResetData}
                title="Reset sample dataset"
                className="px-2.5 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span className="hidden sm:inline">Reset Data</span>
              </button>

              <a
                href={SOFTWARE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <span>Open Full Web Software</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-slate-950/60 px-4 sm:px-6 py-2.5 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('ledger')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                  activeTab === 'ledger'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>General Ledger</span>
              </button>

              <button
                onClick={() => setActiveTab('pnl')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                  activeTab === 'pnl'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <PieChart className="w-3.5 h-3.5" />
                <span>Profit & Loss View</span>
              </button>

              <button
                onClick={() => setActiveTab('cashflow')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                  activeTab === 'cashflow'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Wallet className="w-3.5 h-3.5" />
                <span>Runway Projection</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowAddForm(true)}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Record New Entry</span>
              </button>
            </div>
          </div>

          {/* Quick Financial Summary Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-800 border-b border-slate-800">
            <div className="bg-slate-900/90 p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium">Total Inflows (Revenue)</span>
                <div className="text-xl font-extrabold text-emerald-400 font-mono mt-0.5">
                  +{currencyInfo.symbol}{(totalIncome * currencyInfo.rate).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ArrowDownLeft className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-slate-900/90 p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium">Total Outflows (Expenses)</span>
                <div className="text-xl font-extrabold text-rose-400 font-mono mt-0.5">
                  -{currencyInfo.symbol}{(totalExpenses * currencyInfo.rate).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-slate-900/90 p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium">Net Operational Gain</span>
                <div className={`text-xl font-extrabold font-mono mt-0.5 ${netBalance >= 0 ? 'text-white' : 'text-amber-400'}`}>
                  {netBalance >= 0 ? '+' : ''}{currencyInfo.symbol}{(netBalance * currencyInfo.rate).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Wallet className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Modal for Recording New Transaction */}
          {showAddForm && (
            <div className="p-4 sm:p-6 bg-slate-950/90 border-b border-slate-800 animate-in fade-in slide-in-from-top-3">
              <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-700/80 rounded-xl p-5 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-sm font-bold text-white">Record Financial Transaction</h4>
                  </div>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>

                <form onSubmit={handleAddTransaction} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Transaction Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setNewType('income');
                            setNewCategory('Revenue');
                          }}
                          className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                            newType === 'income'
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                              : 'bg-slate-950 text-slate-400 border-slate-800'
                          }`}
                        >
                          + Income (Deposit)
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setNewType('expense');
                            setNewCategory('Payroll');
                          }}
                          className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                            newType === 'expense'
                              ? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
                              : 'bg-slate-950 text-slate-400 border-slate-800'
                          }`}
                        >
                          - Expense (Outflow)
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Amount (USD equivalent)</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">$</span>
                        <input
                          type="number"
                          step="any"
                          required
                          value={newAmount}
                          onChange={(e) => setNewAmount(e.target.value)}
                          placeholder="e.g. 1500"
                          className="w-full pl-7 pr-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Description / Memo</label>
                      <input
                        type="text"
                        required
                        value={newDesc}
                        onChange={(e) => setNewDesc(e.target.value)}
                        placeholder="e.g. Retainer Payment from Client A"
                        className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Ledger Category</label>
                      <select
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Revenue">Revenue / Client Retainer</option>
                        <option value="Consulting">Consulting / Advisory</option>
                        <option value="Payroll">Team Payroll & Salaries</option>
                        <option value="Cloud Hosting">Cloud & Server Infrastructure</option>
                        <option value="Marketing">Marketing & Advertising</option>
                        <option value="Office">Office & Incubation Rent</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="px-4 py-2 text-xs text-slate-300 hover:text-white bg-slate-800 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md shadow-emerald-500/20"
                    >
                      Save to Ledger
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* TAB 1: General Ledger View */}
          {activeTab === 'ledger' && (
            <div className="p-4 sm:p-6">
              
              {/* Search & Filter Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by description or category..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-slate-400 mr-1 hidden sm:inline">Filter:</span>
                  {(['all', 'income', 'expense'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setFilterType(t)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md capitalize transition-colors ${
                        filterType === t
                          ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30'
                          : 'text-slate-400 hover:text-white bg-slate-950 border border-slate-800'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Transactions Table */}
              <div className="border border-slate-800/80 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-400 font-semibold uppercase tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="py-3 px-4">Ref ID</th>
                        <th className="py-3 px-4">Date / Time</th>
                        <th className="py-3 px-4">Description</th>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4 text-right">Amount ({currentCurrency})</th>
                        <th className="py-3 px-4 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 bg-slate-900/60">
                      {filteredTransactions.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-slate-500">
                            No ledger transactions match the search filter.
                          </td>
                        </tr>
                      ) : (
                        filteredTransactions.map((tx) => (
                          <tr key={tx.id} className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-3 px-4 font-mono text-slate-400">{tx.id}</td>
                            <td className="py-3 px-4 text-slate-300">{tx.date}</td>
                            <td className="py-3 px-4 font-medium text-white">{tx.description}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-0.5 text-[11px] rounded bg-slate-800 text-slate-300 border border-slate-700">
                                {tx.category}
                              </span>
                            </td>
                            <td className={`py-3 px-4 text-right font-mono font-bold ${
                              tx.type === 'income' ? 'text-emerald-400' : 'text-rose-400'
                            }`}>
                              {tx.type === 'income' ? '+' : '-'}{currencyInfo.symbol}{(tx.amount * currencyInfo.rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                <CheckCircle className="w-3 h-3" />
                                <span>Reconciled</span>
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: P&L Statement View */}
          {activeTab === 'pnl' && (
            <div className="p-5 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h4 className="text-base font-bold text-white">Profit & Loss Statement (Fiscal Year 2026)</h4>
                  <p className="text-xs text-slate-400">Generated automatically in accordance with Standard Accounting Principles.</p>
                </div>
                <button
                  onClick={() => alert("Sample P&L Statement downloaded in PDF format.")}
                  className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 rounded-lg flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Export P&L</span>
                </button>
              </div>

              <div className="space-y-4 text-xs font-mono">
                {/* Revenue Section */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="flex justify-between font-bold text-sm text-emerald-400 pb-2 border-b border-slate-800">
                    <span>1. TOTAL OPERATING REVENUE</span>
                    <span>+{currencyInfo.symbol}{(totalIncome * currencyInfo.rate).toLocaleString()}</span>
                  </div>
                  <div className="pt-2 space-y-1.5 text-slate-400">
                    <div className="flex justify-between">
                      <span className="font-sans">Client Subscriptions & Retainers</span>
                      <span>{currencyInfo.symbol}{((totalIncome * 0.75) * currencyInfo.rate).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans">Fintech Consulting & Advisory Services</span>
                      <span>{currencyInfo.symbol}{((totalIncome * 0.25) * currencyInfo.rate).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Expenses Section */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="flex justify-between font-bold text-sm text-rose-400 pb-2 border-b border-slate-800">
                    <span>2. OPERATING EXPENSES (OPEX)</span>
                    <span>-{currencyInfo.symbol}{(totalExpenses * currencyInfo.rate).toLocaleString()}</span>
                  </div>
                  <div className="pt-2 space-y-1.5 text-slate-400">
                    <div className="flex justify-between">
                      <span className="font-sans">Salaries & Contractor Payroll</span>
                      <span>{currencyInfo.symbol}{(3400 * currencyInfo.rate).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans">Cloud Hosting, Servers & AI APIs</span>
                      <span>{currencyInfo.symbol}{(620 * currencyInfo.rate).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans">Marketing & Customer Acquisition</span>
                      <span>{currencyInfo.symbol}{(780 * currencyInfo.rate).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans">Office, Coworking & Incubation Utilities</span>
                      <span>{currencyInfo.symbol}{(250 * currencyInfo.rate).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Net Income Summary */}
                <div className="bg-gradient-to-r from-emerald-950/60 to-cyan-950/60 p-4 rounded-xl border border-emerald-500/30 flex justify-between items-center">
                  <div>
                    <span className="text-sm font-bold text-white font-sans">NET NET PROFIT (EBITDA)</span>
                    <p className="text-[11px] text-slate-400 font-sans">Gross Margin: 58.9%</p>
                  </div>
                  <span className="text-xl font-extrabold text-emerald-400">
                    +{currencyInfo.symbol}{(netBalance * currencyInfo.rate).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Runway Projection */}
          {activeTab === 'cashflow' && (
            <div className="p-5 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h4 className="text-base font-bold text-white">Startup Cashflow & Runway Radar</h4>
                  <p className="text-xs text-slate-400">Predictive intelligence based on trailing 90-day cash burn.</p>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                  Status: High Capital Stability
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400">Current Cash Reserve</span>
                  <div className="text-2xl font-extrabold text-white font-mono mt-1">
                    {currencyInfo.symbol}{(128500 * currencyInfo.rate).toLocaleString()}
                  </div>
                  <span className="text-[11px] text-emerald-400 mt-2 block">100% Liquid Bank Accounts</span>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400">Monthly Net Burn Rate</span>
                  <div className="text-2xl font-extrabold text-amber-400 font-mono mt-1">
                    {currencyInfo.symbol}{(5050 * currencyInfo.rate).toLocaleString()} / mo
                  </div>
                  <span className="text-[11px] text-slate-400 mt-2 block">Expenses minus Inflows</span>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/40">
                  <span className="text-xs text-slate-400">Calculated Runway Horizon</span>
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono mt-1">
                    25.4 Months
                  </div>
                  <span className="text-[11px] text-emerald-300 mt-2 block">Zero imminent dilution risk</span>
                </div>
              </div>

              {/* Visual Runway Progress Bar */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span className="font-semibold">Cash Runway Safe Zone</span>
                  <span className="font-mono text-emerald-400">25.4 / 36 Months Horizon</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full w-[70%]" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-mono pt-1">
                  <span>0 Mo (Depletion)</span>
                  <span>12 Mo (Safety Line)</span>
                  <span>24 Mo (Target)</span>
                  <span>36 Mo (Scale)</span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Footer Note */}
          <div className="bg-slate-950/80 px-6 py-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Connected to LEDGER Engine v2.4 • SOC-2 Compliance Certified</span>
            </div>
            <a
              href={SOFTWARE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              <span>Switch to Live Production App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
