import React from 'react';
import { UserCheck, Sparkles, Bell, Calendar, Zap, Shield, ArrowRight } from 'lucide-react';

export default function Header({ activeSection, setActiveSection, openCabModal }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-dark-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveSection('intake')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pulse-500 via-pulse-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-pulse-500/25 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-white stroke-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                ContextPulse
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-pulse-500/15 text-pulse-300 border border-pulse-500/30">
                AI CRM
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
              AI-Native Contacts & Context Intelligence
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-900 p-1 rounded-xl border border-slate-800/80">
          <button
            onClick={() => setActiveSection('intake')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeSection === 'intake'
                ? 'bg-pulse-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            Quick Context Intake
          </button>

          <button
            onClick={() => setActiveSection('directory')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeSection === 'directory'
                ? 'bg-pulse-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            Living Contact Directory
          </button>

          <button
            onClick={() => setActiveSection('reminders')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeSection === 'reminders'
                ? 'bg-pulse-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            Smart Reminders
          </button>

          <button
            onClick={() => setActiveSection('roi')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeSection === 'roi'
                ? 'bg-pulse-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Lost Relationship ROI
          </button>
        </nav>

        {/* CAB CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-pulse-300 bg-pulse-950/60 border border-pulse-800/60 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-pulse-400 animate-pulse"></span>
            <span>CAB Cohort Open</span>
          </div>

          <button
            onClick={openCabModal}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-pulse-600 to-indigo-600 hover:from-pulse-500 hover:to-indigo-500 text-white shadow-md shadow-pulse-600/30 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Advisory Board (70% Off)</span>
          </button>
        </div>

      </div>
    </header>
  );
}
