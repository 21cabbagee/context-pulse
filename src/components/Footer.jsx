import React from 'react';
import { Zap, ShieldCheck, Heart, Sparkles, Terminal } from 'lucide-react';

export default function Footer({ openCabModal, setActiveSection }) {
  return (
    <footer className="border-t border-slate-800/80 bg-dark-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-pulse-600 flex items-center justify-center text-white font-black text-xs">
                CP
              </div>
              <span className="font-bold text-white text-base">ContextPulse</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Living personal & professional CRM that remembers every contextual interaction detail and triggers intelligent follow-ups.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-pulse-400">
              <span className="w-2 h-2 rounded-full bg-pulse-400"></span>
              <span>Whisper + GPT-4o-mini Extraction Pipeline</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
              Core Modules
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => setActiveSection('intake')}
                  className="hover:text-white transition-colors"
                >
                  Quick Context Intake (Voice & Text)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('directory')}
                  className="hover:text-white transition-colors"
                >
                  Living Contact Directory & Timelines
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('reminders')}
                  className="hover:text-white transition-colors"
                >
                  Smart Reminders & Webhook Dispatcher
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('roi')}
                  className="hover:text-white transition-colors"
                >
                  Relationship Value ROI Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* High-Intent SEO Keywords */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
              Target Solutions
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>AI Native Contacts App</li>
              <li>Personal CRM for Consultants</li>
              <li>Voice Note Relationship Manager</li>
              <li>Automated Contact Reminder AI</li>
            </ul>
          </div>

          {/* CAB Program */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
              Customer Advisory Board
            </h4>
            <p className="text-xs text-slate-400">
              Join our 10-member founding cohort for a 70% lifetime platform discount.
            </p>
            <button
              onClick={openCabModal}
              className="px-3 py-1.5 rounded-lg bg-pulse-500/20 text-pulse-300 border border-pulse-500/30 hover:bg-pulse-500/30 text-xs font-semibold transition-colors"
            >
              Apply for CAB Seat ($5.70/mo) →
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © 2026 ContextPulse • Canonical: <code>/tools/ai-contacts-relationship-context-manager</code>
          </div>
          <div className="flex items-center gap-4">
            <span>Next.js 14 App Router</span>
            <span>•</span>
            <span>Supabase pgvector</span>
            <span>•</span>
            <span>Telegram Webhook</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
