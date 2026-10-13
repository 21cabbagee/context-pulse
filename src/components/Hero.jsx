import React from 'react';
import { 
  Sparkles, 
  Mic, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  Calendar, 
  HeartHandshake, 
  ArrowRight,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';

export default function Hero({ openCabModal, scrollToWidget }) {
  return (
    <div className="relative pt-8 pb-12 overflow-hidden border-b border-slate-800/60 bg-radial-glow">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow SEO Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pulse-500/10 border border-pulse-500/30 text-pulse-300 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-pulse-400 animate-ping"></span>
            ai native contacts app
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono">
            personal crm for consultants
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono">
            voice note relationship manager
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono">
            automated contact reminder ai
          </span>
        </div>

        {/* Target H1 & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            The AI Contact Manager That{' '}
            <span className="bg-gradient-to-r from-pulse-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Remembers Every Conversation
            </span>{' '}
            Context
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Native contacts apps are dumb phonebooks from 2007. ContextPulse remembers interaction history, personal milestones, and mutual promises—triggering intelligent follow-ups before high-value relationships go cold.
          </p>
        </div>

        {/* Customer Advisory Board (CAB) Pitch Banner */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-pulse-950/80 via-dark-900 to-dark-900 border border-pulse-500/40 shadow-xl shadow-pulse-500/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-pulse-400 bg-pulse-500/20 px-2 py-0.5 rounded">
                  Cohort Recruitment Notice
                </span>
                <span className="text-xs text-slate-400 font-mono">10 Founding Seats</span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                "We are assembling a 10-member Customer Advisory Board (CAB) for ContextPulse to solve this exact bottleneck. We are offering a <strong>70% lifetime platform discount</strong> and dedicated onboarding for our first cohort."
              </p>
            </div>

            <button
              onClick={openCabModal}
              className="px-4 py-2.5 rounded-xl bg-pulse-600 hover:bg-pulse-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>Apply for CAB Seat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Key Metrics / Bottoms-Up TAM Callouts */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-slate-800/80">
            <div className="text-2xl font-black text-white font-mono">$228M</div>
            <div className="text-xs text-slate-400 mt-0.5">Bottoms-Up TAM (1M Pros)</div>
          </div>
          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-slate-800/80">
            <div className="text-2xl font-black text-pulse-400 font-mono">90%</div>
            <div className="text-xs text-slate-400 mt-0.5">Traditional CRM Drop-off</div>
          </div>
          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-slate-800/80">
            <div className="text-2xl font-black text-emerald-400 font-mono">10 Seconds</div>
            <div className="text-xs text-slate-400 mt-0.5">Voice Note Intake Speed</div>
          </div>
          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-slate-800/80">
            <div className="text-2xl font-black text-indigo-400 font-mono">3 Days</div>
            <div className="text-xs text-slate-400 mt-0.5">Pre-Milestone Webhook Alerts</div>
          </div>
        </div>

      </div>
    </div>
  );
}
