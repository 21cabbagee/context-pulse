import React, { useState } from 'react';
import { 
  Bell, 
  Send, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Smartphone, 
  Mail, 
  MessageSquare, 
  Check, 
  Copy, 
  ExternalLink,
  Sparkles,
  AlertTriangle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReminderEngine({ contacts }) {
  const [selectedChannel, setSelectedChannel] = useState('telegram'); // 'telegram', 'sms', 'email'
  const [testSent, setTestSent] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [completedReminders, setCompletedReminders] = useState([]);

  // Active upcoming milestone reminders
  const reminders = [
    {
      id: 'r1',
      contactName: 'Sarah Chen',
      company: 'Synapse Robotics',
      milestone: 'Series A Term Sheet Roadshow',
      dueDate: '2026-11-02',
      daysUntil: 20,
      alertTiming: 'Triggered 3 days prior (Oct 30)',
      commitmentText: 'Introduce Sarah to Marcus Vance at Horizon Capital; send Kyoto matcha brand link.',
      channelIcon: '✈️'
    },
    {
      id: 'r2',
      contactName: 'David Sterling',
      company: 'Apex Growth Advisors',
      milestone: 'Q4 Advisory Retainer Renewal ($15k/mo)',
      dueDate: '2026-10-24',
      daysUntil: 11,
      alertTiming: 'Triggered 3 days prior (Oct 21)',
      commitmentText: 'Deliver SaaS valuation multiples report; check on daughter Chloe Stanford application.',
      channelIcon: '💼'
    },
    {
      id: 'r3',
      contactName: 'Elena Rostova',
      company: 'Kinetix Studio',
      milestone: 'Berlin Design Summit Keynote',
      dueDate: '2026-10-28',
      daysUntil: 15,
      alertTiming: 'Triggered 3 days prior (Oct 25)',
      commitmentText: 'Share contact of freelance 3D shader contractor in Munich before Berlin flight.',
      channelIcon: '🎨'
    }
  ];

  const simulatedPayload = {
    webhook_url: "https://api.telegram.org/bot<TOKEN>/sendMessage",
    chat_id: "@founder_context_inbox",
    priority: "HIGH_TOUCH_RELATIONSHIP",
    notification: {
      title: "⚡ ContextPulse Milestone Alert (3-Day Horizon)",
      contact: "Sarah Chen (Synapse Robotics)",
      milestone: "Series A Term Sheet Review (Nov 02)",
      commitments_due: [
        "Intro to Marcus Vance (Horizon Capital)",
        "Send Kyoto matcha link"
      ],
      personal_context: "Prefers ceremonial Uji matcha; Series A goal is $8M at $1.8M ARR.",
      suggested_message: "Hey Sarah! Hope the week is treating you well. As you ramp into the Series A roadshow in early November, wanted to connect you with Marcus Vance as promised..."
    }
  };

  const handleSendTestWebhook = () => {
    setTestSent(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setTestSent(false), 3500);
  };

  const handleToggleComplete = (id) => {
    if (completedReminders.includes(id)) {
      setCompletedReminders(completedReminders.filter(rId => rId !== id));
    } else {
      setCompletedReminders([...completedReminders, id]);
    }
  };

  const copyPayload = () => {
    navigator.clipboard.writeText(JSON.stringify(simulatedPayload, null, 2));
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  return (
    <section id="reminders" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-800/80">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pulse-500/10 border border-pulse-500/30 text-pulse-300 text-xs font-mono font-semibold mb-1">
            <Bell className="w-3.5 h-3.5" />
            <span>Stage 3 • Smart Reminder Engine</span>
          </div>
          <h2 className="text-2xl font-black text-white">
            Automated Webhook Alerts (3 Days Prior)
          </h2>
          <p className="text-xs text-slate-400">
            Never forget a promise or milestone. ContextPulse pings your Telegram or SMS with context-rich talking points before critical dates.
          </p>
        </div>

        {/* Channel Selector */}
        <div className="flex items-center gap-2 bg-dark-900 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setSelectedChannel('telegram')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              selectedChannel === 'telegram'
                ? 'bg-pulse-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Telegram Bot
          </button>

          <button
            onClick={() => setSelectedChannel('sms')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              selectedChannel === 'sms'
                ? 'bg-pulse-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            Twilio SMS
          </button>

          <button
            onClick={() => setSelectedChannel('email')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              selectedChannel === 'email'
                ? 'bg-pulse-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            Resend Email
          </button>
        </div>
      </div>

      {/* Grid: Active Queued Reminders vs Webhook Dispatcher */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Queued Milestone Reminders (7 cols) */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Enqueued Relationship Horizons ({reminders.length})</span>
            <span className="text-emerald-400">Cron Rule: 72 Hours Pre-Event</span>
          </div>

          {reminders.map(rem => {
            const isCompleted = completedReminders.includes(rem.id);
            return (
              <div
                key={rem.id}
                className={`p-4 rounded-xl border transition-all ${
                  isCompleted
                    ? 'bg-dark-950/40 border-slate-800/50 opacity-60'
                    : 'bg-dark-900 border-slate-800 hover:border-pulse-500/40 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base">{rem.channelIcon}</span>
                      <h4 className={`text-sm font-bold ${isCompleted ? 'line-through text-slate-400' : 'text-white'}`}>
                        {rem.contactName} ({rem.company})
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pulse-500/10 text-pulse-300 border border-pulse-500/20">
                        {rem.alertTiming}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      Milestone: {rem.milestone}
                    </div>

                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      <strong>Promises Made:</strong> {rem.commitmentText}
                    </p>
                  </div>

                  <button
                    onClick={() => handleToggleComplete(rem.id)}
                    className={`p-2 rounded-lg border text-xs transition-colors shrink-0 ${
                      isCompleted
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Target Date: {rem.dueDate} ({rem.daysUntil} days left)</span>
                  <span className="text-pulse-400">Webhook Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Webhook Dispatch Simulator (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-dark-900 border border-pulse-500/40 shadow-xl space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-pulse-500/20 text-pulse-400 flex items-center justify-center font-bold text-xs">
                  WH
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Live Webhook Dispatcher</h4>
                  <p className="text-[10px] text-slate-400 font-mono">Telegram / Webhook JSON Format</p>
                </div>
              </div>

              <button
                onClick={copyPayload}
                className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-750 text-slate-300 text-[10px] font-mono flex items-center gap-1 transition-colors"
              >
                {copiedPayload ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedPayload ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Telegram Notification Mock Bubble */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-sans space-y-2">
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span className="text-pulse-400 font-bold">@ContextPulseBot</span>
                <span>Just Now</span>
              </div>
              <p className="text-slate-100 font-medium">
                ⚡ <strong>Sarah Chen</strong> (Synapse Robotics) is kicking off her <em>Series A roadshow</em> in 3 days!
              </p>
              <div className="p-2.5 rounded-lg bg-dark-900 border border-slate-800/80 text-[11px] text-slate-300 space-y-1">
                <div>• Promised intro to Marcus Vance (Horizon Capital)</div>
                <div>• Sarah loves ceremonial Uji matcha</div>
              </div>
              <div className="text-[10px] font-mono text-pulse-300">
                Suggested message drafted and ready to send via WhatsApp / iMessage.
              </div>
            </div>

            {/* Action Trigger Button */}
            <div>
              {!testSent ? (
                <button
                  onClick={handleSendTestWebhook}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pulse-600 to-indigo-600 hover:from-pulse-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Dispatch Simulated 3-Day Milestone Alert</span>
                </button>
              ) : (
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center text-xs text-emerald-400 font-mono flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Webhook Dispatched (HTTP 200 OK — Telegram / SMS Delivered)</span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
