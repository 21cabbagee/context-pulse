import React, { useState } from 'react';
import { 
  Mic, 
  MicOff, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  User, 
  Building, 
  Tag, 
  AlertCircle, 
  Bell, 
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sampleIntakePresets } from '../data/mockContacts';
import { extractContextFromNote } from '../utils/contextExtractor';

export default function QuickIntakeWidget({ onAddContact }) {
  const [inputText, setInputText] = useState(sampleIntakePresets[0].text);
  const [isRecording, setIsRecording] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [parsedResult, setParsedResult] = useState(() => extractContextFromNote(sampleIntakePresets[0].text));
  const [addedStatus, setAddedStatus] = useState(false);

  // Audio recording simulation
  const handleToggleRecord = () => {
    if (!isRecording) {
      setIsRecording(true);
      // Simulate live transcription stream
      setTimeout(() => {
        setIsRecording(false);
        setInputText("Caught up with Marcus Vance over lunch. He's looking for early-stage B2B AI founders. Promised to send him our top 3 portfolio companies by next Tuesday. Also mentioned he is running the Chicago Marathon next month.");
        handleExtract("Caught up with Marcus Vance over lunch. He's looking for early-stage B2B AI founders. Promised to send him our top 3 portfolio companies by next Tuesday. Also mentioned he is running the Chicago Marathon next month.");
      }, 2500);
    } else {
      setIsRecording(false);
    }
  };

  const handleExtract = (textToParse = inputText) => {
    if (!textToParse.trim()) return;
    setIsParsing(true);
    setAddedStatus(false);
    setTimeout(() => {
      const result = extractContextFromNote(textToParse);
      setParsedResult(result);
      setIsParsing(false);
    }, 450);
  };

  const handleApplyPreset = (presetText) => {
    setInputText(presetText);
    handleExtract(presetText);
  };

  const handleCommitToDirectory = () => {
    if (!parsedResult) return;
    onAddContact(parsedResult);
    setAddedStatus(true);
    confetti({
      particleCount: 65,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="intake-widget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pulse-500/10 border border-pulse-500/30 text-pulse-300 text-xs font-mono font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Stage 1 & 2 • Live AI Context Parser</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Speak or Paste a 10-Second Interaction Note
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Zero complex forms. Voice dictate or paste raw conversation notes. Whisper + GPT-4o-mini auto-extracts promises, milestones, and personal tags.
        </p>
      </div>

      {/* Main Grid: Input Column vs Extraction Preview Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Intake Area (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Sample Preset Pills */}
          <div>
            <span className="text-xs font-semibold text-slate-300 block mb-2">
              Select Sample Interaction Preset:
            </span>
            <div className="flex flex-wrap gap-2">
              {sampleIntakePresets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleApplyPreset(preset.text)}
                  className="px-2.5 py-1.5 rounded-lg bg-dark-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-all text-left truncate max-w-full"
                >
                  ⚡ {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Text & Voice Input Box */}
          <div className="p-4 rounded-2xl bg-dark-900 border border-slate-800 focus-within:border-pulse-500 transition-colors shadow-lg shadow-pulse-500/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Voice Note / Raw Text Stream</span>
              </span>

              {/* Voice Record Button */}
              <button
                onClick={handleToggleRecord}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isRecording
                    ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse'
                    : 'bg-pulse-500/20 text-pulse-300 hover:bg-pulse-500/30 border border-pulse-500/40'
                }`}
              >
                {isRecording ? (
                  <>
                    <MicOff className="w-3.5 h-3.5" />
                    <span>Listening... (Speak now)</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-3.5 h-3.5" />
                    <span>Simulate Whisper Voice Note</span>
                  </>
                )}
              </button>
            </div>

            <textarea
              rows={5}
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                setAddedStatus(false);
              }}
              placeholder="e.g. Had coffee with Sarah Chen at Blue Bottle. She is raising Series A in November. Promised to introduce her to Marcus at Horizon Capital by Friday and send over the Kyoto matcha brand she loves..."
              className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none resize-none leading-relaxed font-sans"
            />

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">
                {inputText.length} characters • Whisper v3 Ready
              </span>

              <button
                onClick={() => handleExtract()}
                disabled={isParsing || !inputText.trim()}
                className="px-4 py-2 rounded-xl bg-pulse-600 hover:bg-pulse-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                {isParsing ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Extracting Entities...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Extract Context Schema</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Value Prop Note */}
          <div className="p-3.5 rounded-xl bg-pulse-950/30 border border-pulse-900/50 text-xs text-slate-300">
            <span className="font-semibold text-pulse-300">Why this matters:</span> Native phone contacts only store dead numbers. ContextPulse translates casual remarks like "daughter applying to Stanford" or "raising in November" into relationship equity.
          </div>
        </div>

        {/* RIGHT COLUMN: Real-Time Structured Extraction Output (6 cols) */}
        <div className="lg:col-span-6">
          <div className="p-5 rounded-2xl bg-dark-900/90 border border-pulse-500/40 shadow-xl space-y-4">
            
            {/* Output Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-pulse-500/20 text-pulse-400 flex items-center justify-center font-bold text-xs">
                  CP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Extracted Context Schema</h3>
                  <p className="text-[11px] text-slate-400 font-mono">Structured JSON Entity Output</p>
                </div>
              </div>

              {parsedResult && (
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block font-mono">Relationship Health</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {parsedResult.relationshipScore}% Strong
                  </span>
                </div>
              )}
            </div>

            {parsedResult ? (
              <div className="space-y-3.5 text-xs">
                
                {/* Contact & Company */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-dark-950 border border-slate-800">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block mb-0.5">Contact Identified</span>
                    <span className="font-bold text-white text-sm">{parsedResult.contactName}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-dark-950 border border-slate-800">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block mb-0.5">Organization</span>
                    <span className="font-bold text-pulse-300 text-sm">{parsedResult.company}</span>
                  </div>
                </div>

                {/* Commitments Made (Promises) */}
                <div className="p-3.5 rounded-xl bg-dark-950 border border-amber-500/30 space-y-1.5">
                  <span className="text-[10px] uppercase font-mono text-amber-400 font-bold flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Commitments Made to {parsedResult.contactName.split(' ')[0]} ({parsedResult.commitments.length})</span>
                  </span>
                  {parsedResult.commitments.length > 0 ? (
                    <ul className="space-y-1 pl-1">
                      {parsedResult.commitments.map((comm, idx) => (
                        <li key={idx} className="text-slate-200 flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{comm}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400 italic">No explicit promises detected in this note.</p>
                  )}
                </div>

                {/* Topics & Personal Context */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-dark-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Topics Discussed</span>
                    <div className="flex flex-wrap gap-1">
                      {parsedResult.topics.map((t, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-dark-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Personal Quirks / Memory</span>
                    <p className="text-[11px] text-purple-300">
                      {parsedResult.personalContext.length > 0 
                        ? parsedResult.personalContext.join('; ')
                        : 'No personal preferences mentioned'}
                    </p>
                  </div>
                </div>

                {/* Intelligent Follow-up Date & Milestone */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-pulse-950/60 to-dark-950 border border-pulse-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-pulse-400 block font-bold">
                      Automated Milestone Alert
                    </span>
                    <span className="text-xs font-bold text-white">{parsedResult.milestone}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-mono">Trigger Date</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">{parsedResult.followUpDate}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2">
                  {!addedStatus ? (
                    <button
                      onClick={handleCommitToDirectory}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pulse-600 via-pulse-500 to-indigo-600 hover:from-pulse-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-pulse-600/30 transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Sync to Living Contact Directory & Schedule Webhook</span>
                    </button>
                  ) : (
                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-1">
                      <div className="text-xs font-bold text-emerald-400 flex items-center justify-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Contact Memory Synchronized to CRM!</span>
                      </div>
                      <p className="text-[11px] text-slate-300">
                        {parsedResult.contactName}’s timeline updated. Webhook notification enqueued 3 days before {parsedResult.followUpDate}.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            ) : (
              <div className="py-12 text-center text-slate-500">
                <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-xs">Waiting for voice note transcription or text snippet...</p>
              </div>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
