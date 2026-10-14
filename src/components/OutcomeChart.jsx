import React, { useState } from 'react';
import { TrendingUp, BrainCircuit, HeartHandshake, Clock, Zap, DollarSign, Sparkles, MessageSquare } from 'lucide-react';

/**
 * OutcomeChart for ContextPulse (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $6,500/mo business development agency retainers & lost pipeline from cold relationships ($6 layer)
 * with Voice-to-Context Autonomous Follow-up Autopilot ($1 software layer).
 */
export default function OutcomeChart({
  serviceName = "Autonomous Relationship Context & Follow-Up Autopilot",
  defaultKeyRelationships = 50, // high-value relationships managed
  onCtaClick
}) {
  const [contacts, setContacts] = useState(defaultKeyRelationships);

  // Legacy agency/assistant costs: $3,500/mo personal CRM assistant + $4,200/mo lost deal pipeline from forgotten follow-ups (~$150/relationship/mo)
  const legacyServicesCost = contacts * 150;
  // ContextPulse software fee: $29/mo flat + $0.50/contact
  const autoSoftwareCost = 29 + Math.round(contacts * 0.5);
  const netRelationshipValueReclaimed = legacyServicesCost - autoSoftwareCost;
  const savingsPercent = Math.round(((legacyServicesCost - autoSoftwareCost) / legacyServicesCost) * 100);

  const maxCost = Math.max(legacyServicesCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoSoftwareCost / maxCost) * 100), 6);

  return (
    <div className="relative rounded-2xl border border-purple-500/30 bg-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-900 border-purple-500/40 text-purple-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs $6,500/mo BD Agency Retainers ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Relationship Pipeline Economics: <span className="text-purple-400">{savingsPercent}% Overhead Crushed</span>
          </h3>
          <p className="text-sm text-slate-300 mt-1 max-w-xl">
            Phonebooks and Salesforce are where contacts go to die. Founders lose six-figure deals because warm intros go cold after 90 days. ContextPulse turns 10-second voice memos into active, context-rich follow-up schedules.
          </p>
        </div>

        <div className="text-right bg-slate-900/80 border border-purple-500/30 rounded-xl p-3 px-4 min-w-[200px]">
          <span className="text-[11px] text-slate-400 block font-medium">Monthly Pipeline Protected</span>
          <span className="text-2xl md:text-3xl font-black text-purple-400">
            ${netRelationshipValueReclaimed.toLocaleString()}
          </span>
          <span className="text-[10px] text-purple-300/80 flex items-center justify-end gap-1 font-semibold font-mono">
            <TrendingUp className="w-3 h-3" /> 0% Warm Leads Dropped
          </span>
        </div>
      </div>

      {/* Interactive Volume Slider */}
      <div className="py-6 border-b border-white/10">
        <div className="flex items-center justify-between text-sm mb-3">
          <label className="text-slate-300 font-semibold flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-purple-400" />
            High-Value Active Relationships & Client Stakeholders:
          </label>
          <span className="text-base font-bold text-white bg-slate-900 px-3 py-1 rounded-lg border border-purple-500/30 font-mono">
            {contacts} Contacts (${(legacyServicesCost * 12).toLocaleString()}/yr Relationship Value)
          </span>
        </div>
        <input 
          type="range" 
          min={10} 
          max={150} 
          step={10}
          value={contacts}
          onChange={(e) => setContacts(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
        />
        <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
          <span>10 Contacts (Boutique Consultant)</span>
          <span>50 Contacts (Active Founder/Partner)</span>
          <span>150+ Contacts (Enterprise Dealmaker)</span>
        </div>
      </div>

      {/* Bklit UI Visual Comparison Chart & Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
        {/* SVG Visual Bars */}
        <div className="md:col-span-5 bg-slate-900 rounded-xl p-5 border border-white/10">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between font-mono">
            <span>Relationship Management Cost</span>
            <span className="text-[10px] text-slate-500">Live ROI Calculation</span>
          </div>

          <div className="space-y-4">
            {/* Legacy Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Lost Deals & BD Retainers ($6 Layer)
                </span>
                <span className="font-mono font-bold text-rose-300">${legacyServicesCost.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden border border-rose-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-rose-600 to-purple-600 transition-all duration-300 rounded-lg"
                  style={{ width: `${legacyBarHeight}%` }}
                />
              </div>
            </div>

            {/* Autonomous Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-purple-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  ContextPulse Neural CRM ($1 Layer)
                </span>
                <span className="font-mono font-bold text-purple-300">${autoSoftwareCost.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden border border-purple-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 rounded-lg shadow-lg shadow-purple-500/30"
                  style={{ width: `${autoBarHeight}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Annual Net Pipeline Retained:</span>
            <span className="text-sm font-bold text-purple-400">+${(netRelationshipValueReclaimed * 12).toLocaleString()}</span>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
              <BrainCircuit className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Voice Note to Context Extraction</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Speak for 15 seconds after a dinner or meeting. Automatically parses spouse names, kids, hobbies, investment size, and agreed follow-up dates.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Intelligent Relationship Cadence Alarms</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Categorize contacts by tier (A-List: 30 days, B-List: 60 days). Proactively surfaces warm personalized reconnect prompts before relationships fade.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Zero Clunky Forms or Database Admin</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                No complex CRM setups or field mapping. Works entirely via audio, Telegram, or SMS. Your personal executive memory without the admin fatigue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
