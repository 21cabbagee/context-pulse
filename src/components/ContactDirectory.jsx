import React, { useState, useMemo } from 'react';
import { 
  Search, 
  User, 
  Building, 
  Calendar, 
  Clock, 
  AlertCircle, 
  Tag, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail,
  Filter,
  Plus
} from 'lucide-react';

export default function ContactDirectory({ contacts, onSelectContact }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeContactDetail, setActiveContactDetail] = useState(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const set = new Set();
    contacts.forEach(c => c.tags.forEach(t => set.add(t)));
    return ['All', ...Array.from(set)];
  }, [contacts]);

  // Filtered contacts
  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => {
      // Tag filter
      if (selectedTag !== 'All' && !contact.tags.includes(selectedTag)) return false;

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = contact.name.toLowerCase().includes(q);
        const matchesCompany = contact.company.toLowerCase().includes(q);
        const matchesTags = contact.tags.some(t => t.toLowerCase().includes(q));
        const matchesTimeline = contact.timeline.some(t => 
          t.summary.toLowerCase().includes(q) || 
          t.commitments.some(c => c.toLowerCase().includes(q))
        );
        return matchesName || matchesCompany || matchesTags || matchesTimeline;
      }

      return true;
    });
  }, [contacts, searchQuery, selectedTag]);

  return (
    <section id="directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-800/80">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pulse-500/10 border border-pulse-500/30 text-pulse-300 text-xs font-mono font-semibold mb-1">
            <span>Stage 3 • Living Timeline Engine</span>
          </div>
          <h2 className="text-2xl font-black text-white">
            Living Contact Directory ({contacts.length})
          </h2>
          <p className="text-xs text-slate-400">
            Search across past promises, shared coffee chats, and personal details.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, 'matcha', 'Series A'..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-dark-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pulse-500 font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white font-mono"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Filter Tag Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-6 pb-3 border-b border-slate-800/60">
        <span className="text-xs text-slate-500 font-mono mr-1">Filter Tags:</span>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              selectedTag === tag
                ? 'bg-pulse-600 text-white shadow-sm'
                : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredContacts.map(contact => (
          <div
            key={contact.id}
            className="rounded-2xl bg-dark-900/90 border border-slate-800/80 hover:border-pulse-500/50 transition-all duration-300 p-5 flex flex-col justify-between hover:-translate-y-0.5 shadow-lg shadow-pulse-500/5"
          >
            {/* Top Info */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${contact.avatarColor} text-white font-extrabold flex items-center justify-center text-sm shadow-md`}>
                    {contact.avatar}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">{contact.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">
                      {contact.role} • <span className="text-pulse-300">{contact.company}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block">Health</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {contact.relationshipScore}%
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {contact.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-dark-950 text-slate-300 border border-slate-800 text-[10px] font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Next Milestone Callout */}
              <div className="p-2.5 rounded-xl bg-dark-950 border border-pulse-500/30 text-xs mb-3 space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="text-pulse-400 font-bold">Upcoming Milestone</span>
                  <span>{contact.nextFollowUp}</span>
                </div>
                <div className="font-bold text-white text-xs">{contact.milestone}</div>
              </div>

              {/* Latest Timeline Snapshot */}
              {contact.timeline.length > 0 && (
                <div className="p-3 rounded-xl bg-dark-950/60 border border-slate-800 text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>Last Interaction ({contact.timeline[0].date})</span>
                    <span>{contact.timeline[0].type}</span>
                  </div>
                  <p className="text-slate-300 line-clamp-2 text-[11px] leading-relaxed">
                    "{contact.timeline[0].summary}"
                  </p>
                  
                  {contact.timeline[0].commitments.length > 0 && (
                    <div className="pt-1.5 border-t border-slate-800/80">
                      <span className="text-[10px] font-mono text-amber-400 font-bold block mb-0.5">
                        Pending Commitment:
                      </span>
                      <p className="text-[11px] text-slate-200 truncate">
                        • {contact.timeline[0].commitments[0]}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">
                {contact.timeline.length} logged interactions
              </span>

              <button
                onClick={() => setActiveContactDetail(contact)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1"
              >
                <span>Full Memory Log</span>
                <ArrowRight className="w-3.5 h-3.5 text-pulse-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredContacts.length === 0 && (
        <div className="text-center py-16 bg-dark-900/40 rounded-2xl border border-slate-800">
          <User className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">No contacts match your query</h3>
          <p className="text-xs text-slate-400 mt-1">Try searching for keywords like "matcha", "Series A", or "consultant".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTag('All');
            }}
            className="mt-4 px-4 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-white hover:bg-slate-700"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* DETAIL MODAL FOR CONTACT TIMELINE */}
      {activeContactDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-dark-900 border border-pulse-500/40 rounded-2xl shadow-2xl overflow-hidden my-6">
            
            {/* Modal Header */}
            <div className="bg-dark-850 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeContactDetail.avatarColor} text-white font-extrabold flex items-center justify-center text-sm shadow-md`}>
                  {activeContactDetail.avatar}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{activeContactDetail.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {activeContactDetail.role} • {activeContactDetail.company}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveContactDetail(null)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white text-xs"
              >
                Close
              </button>
            </div>

            {/* Modal Body: Chronological Memory Timeline */}
            <div className="p-6 max-h-[70vh] overflow-y-auto space-y-5">
              
              {/* Contact Snapshot */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-dark-950 border border-slate-800">
                  <span className="text-[10px] text-slate-500 font-mono block mb-0.5">Email & Phone</span>
                  <div className="text-slate-300 font-mono text-[11px]">{activeContactDetail.email}</div>
                  <div className="text-slate-400 font-mono text-[11px]">{activeContactDetail.phone}</div>
                </div>

                <div className="p-3 rounded-xl bg-dark-950 border border-slate-800">
                  <span className="text-[10px] text-slate-500 font-mono block mb-0.5">Next Milestone Alert</span>
                  <div className="text-white font-bold">{activeContactDetail.milestone}</div>
                  <div className="text-emerald-400 font-mono text-[11px]">{activeContactDetail.nextFollowUp}</div>
                </div>
              </div>

              {/* Timeline Header */}
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Chronological Memory Stream ({activeContactDetail.timeline.length} Entries)
              </div>

              {/* Entries */}
              <div className="space-y-4">
                {activeContactDetail.timeline.map((entry, idx) => (
                  <div key={entry.id} className="p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pulse-400"></span>
                        <span>{entry.type}</span>
                        <span className="text-[11px] text-slate-500 font-normal">({entry.location})</span>
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">{entry.date}</span>
                    </div>

                    <p className="text-xs text-slate-200 leading-relaxed">
                      {entry.summary}
                    </p>

                    {/* Commitments Made */}
                    {entry.commitments.length > 0 && (
                      <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/30 text-xs space-y-1">
                        <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block">
                          Commitments Made:
                        </span>
                        {entry.commitments.map((c, cIdx) => (
                          <div key={cIdx} className="text-slate-200 text-[11px]">
                            • {c}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {entry.topics.map((t, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] font-mono border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="bg-dark-850 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px]">Living Contact Profile • Encrypted SQLite / pgvector</span>
              <button
                onClick={() => setActiveContactDetail(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
