import React, { useState } from 'react';
import { X, Check, Sparkles, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CabModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Boutique Consultant / Founder');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-dark-900 border border-pulse-500/40 rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-dark-850 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-pulse-500/20 text-pulse-400 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Customer Advisory Board (CAB)</h3>
              <p className="text-xs text-slate-400 font-mono">10-Member Founding Cohort Application</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Exact Pitch Script Box */}
              <div className="p-4 rounded-xl bg-pulse-950/40 border border-pulse-500/30 text-xs text-slate-200 leading-relaxed font-sans">
                <span className="font-bold text-pulse-300 block mb-1">Founding Member Invitation:</span>
                "We are assembling a 10-member Customer Advisory Board (CAB) for ContextPulse to solve this exact bottleneck. We are offering a <strong>70% lifetime platform discount</strong> ($5.70/mo instead of $19/mo) and dedicated onboarding for our first cohort."
              </div>

              {/* Form Fields */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-pulse-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Professional Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@firm.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-pulse-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Primary High-Touch Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-dark-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-pulse-500"
                >
                  <option value="Boutique Consultant / Founder">Boutique Consultant / Founder</option>
                  <option value="Venture Capitalist / Angel LP">Venture Capitalist / Angel LP</option>
                  <option value="Commercial Broker / Dealmaker">Commercial Broker / Dealmaker</option>
                  <option value="Executive Recruiter">Executive Recruiter</option>
                </select>
              </div>

              {/* Price Tag Lock */}
              <div className="p-3 rounded-xl bg-dark-950 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px]">Lifetime CAB Rate:</span>
                  <span className="text-base font-extrabold text-emerald-400 font-mono">$5.70/month</span>
                  <span className="text-slate-500 line-through text-[11px] ml-2 font-mono">$19/mo</span>
                </div>
                <span className="text-[10px] font-mono text-pulse-400 bg-pulse-500/10 px-2 py-0.5 rounded">
                  70% Off Locked
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-pulse-600 to-indigo-600 hover:from-pulse-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-pulse-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Reserving Advisory Seat...</span>
                  </>
                ) : (
                  <>
                    <HeartHandshake className="w-4 h-4" />
                    <span>Submit CAB Application & Claim 70% Discount</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-white">CAB Application Received!</h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Thank you, {name}! Your seat in the 10-member ContextPulse Customer Advisory Board has been reserved at the <strong>70% lifetime discount</strong> rate. We'll be in touch at <em>{email}</em> within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-pulse-600 hover:bg-pulse-500 text-white font-bold text-xs transition-colors"
              >
                Return to Living Dashboard
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
