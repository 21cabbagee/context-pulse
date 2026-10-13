import React, { useState } from 'react';
import { TrendingUp, DollarSign, Clock, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function RoiCalculator({ openCabModal }) {
  const [monthlyContacts, setMonthlyContacts] = useState(60);
  const [dealValue, setDealValue] = useState(12000); // average advisory or deal value
  const [dropoffRate, setDropoffRate] = useState(35); // percent of forgotten follow-ups

  // Calculations
  const missedOpportunitiesPerYear = Math.round((monthlyContacts * 12) * (dropoffRate / 100) * 0.05); // 5% would have converted
  const annualLostRevenue = missedOpportunitiesPerYear * dealValue;
  const hoursSavedPerMonth = Math.round((monthlyContacts * 8) / 60); // 8 minutes saved per manual CRM log
  const annualContextPulseCost = 19 * 12; // $228/year
  const roiMultiplier = Math.round(annualLostRevenue / annualContextPulseCost);

  return (
    <section id="roi" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-800/80">
      
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold mb-2">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Interactive Relationship ROI Calculator</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          How Much Are Forgotten Follow-Ups Costing You?
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          When high-touch consultants, brokers, and founders rely on native phonebooks, 90% of promises get lost in the ether.
        </p>
      </div>

      <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-dark-900 border border-slate-800 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Sliders (7 cols) */}
        <div className="md:col-span-7 space-y-5">
          
          {/* Slider 1: Monthly Contacts */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="font-semibold text-slate-300">High-Context Contacts Met Monthly:</span>
              <span className="font-mono font-bold text-pulse-400 text-sm">{monthlyContacts} contacts</span>
            </div>
            <input
              type="range"
              min="15"
              max="200"
              step="5"
              value={monthlyContacts}
              onChange={(e) => setMonthlyContacts(parseInt(e.target.value))}
              className="w-full h-1.5 accent-pulse-500 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 2: Average Deal / Advisory Value */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="font-semibold text-slate-300">Average Contract / Advisory Value:</span>
              <span className="font-mono font-bold text-emerald-400 text-sm">${dealValue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="50000"
              step="1000"
              value={dealValue}
              onChange={(e) => setDealValue(parseInt(e.target.value))}
              className="w-full h-1.5 accent-emerald-500 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 3: Follow-Up Drop-Off Rate */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="font-semibold text-slate-300">Follow-Up Drop-off / Forgotten Commitments:</span>
              <span className="font-mono font-bold text-amber-400 text-sm">{dropoffRate}% dropped</span>
            </div>
            <input
              type="range"
              min="10"
              max="70"
              step="5"
              value={dropoffRate}
              onChange={(e) => setDropoffRate(parseInt(e.target.value))}
              className="w-full h-1.5 accent-amber-500 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div className="p-3 rounded-xl bg-dark-950 border border-slate-800 text-[11px] text-slate-400 font-mono">
            Hours saved from manual Salesforce/HubSpot logging: <strong className="text-white">{hoursSavedPerMonth} hours/month</strong>
          </div>

        </div>

        {/* Results Card (5 cols) */}
        <div className="md:col-span-5 p-5 rounded-xl bg-gradient-to-b from-pulse-950/60 via-dark-850 to-dark-850 border border-pulse-500/40 text-center space-y-3">
          <span className="text-[10px] uppercase font-mono text-pulse-400 font-bold block">
            Annual Relationship Value at Risk
          </span>

          <div className="text-3xl sm:text-4xl font-black text-white font-mono">
            ${annualLostRevenue.toLocaleString()}
          </div>
          <p className="text-[11px] text-slate-400">
            Estimated uncaptured pipeline from {missedOpportunitiesPerYear} dropped deals/advisory intros per year.
          </p>

          <div className="py-2.5 px-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs">
            <span className="text-[10px] text-emerald-400 font-mono block">ContextPulse ROI</span>
            <span className="font-extrabold text-emerald-300 text-sm">{roiMultiplier}x Annual Return</span>
          </div>

          <button
            onClick={openCabModal}
            className="w-full py-2.5 rounded-xl bg-pulse-600 hover:bg-pulse-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
          >
            <span>Lock 70% Lifetime CAB Rate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
}
