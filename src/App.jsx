import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickIntakeWidget from './components/QuickIntakeWidget';
import ContactDirectory from './components/ContactDirectory';
import ReminderEngine from './components/ReminderEngine';
import RoiCalculator from './components/RoiCalculator';
import CabModal from './components/CabModal';
import OutcomeChart from './components/OutcomeChart';
import Footer from './components/Footer';
import { initialContacts } from './data/mockContacts';

export default function App() {
  const [activeSection, setActiveSection] = useState('intake');
  const [contacts, setContacts] = useState(initialContacts);
  const [isCabModalOpen, setIsCabModalOpen] = useState(false);

  // Handle adding a newly extracted contact from the quick intake widget
  const handleAddExtractedContact = (extractedData) => {
    const newContact = {
      id: `c_${Date.now()}`,
      name: extractedData.contactName,
      role: 'Key Partner / Executive',
      company: extractedData.company,
      avatar: extractedData.contactName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
      avatarColor: 'from-pulse-500 to-indigo-600',
      email: `${extractedData.contactName.toLowerCase().replace(/\s+/g, '.')}@example.com`,
      phone: '+1 (555) 019-8472',
      tags: [...extractedData.topics.slice(0, 2), 'Recent Interaction'],
      relationshipScore: extractedData.relationshipScore,
      lastInteraction: 'Just now',
      nextFollowUp: extractedData.followUpDate,
      milestone: extractedData.milestone,
      reminderAlert: `Alert enqueued: ${extractedData.reminderOffset}`,
      timeline: [
        {
          id: `t_${Date.now()}`,
          date: 'Today',
          type: 'Voice Note Intake',
          location: 'Mobile Voice Log',
          summary: extractedData.summary,
          commitments: extractedData.commitments,
          topics: extractedData.topics
        }
      ]
    };

    setContacts(prev => [newContact, ...prev]);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans">
      
      {/* Navigation Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        openCabModal={() => setIsCabModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          openCabModal={() => setIsCabModalOpen(true)}
          scrollToWidget={() => {
            document.getElementById('intake-widget')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Julien Bek $1:$6 Economic Engine / Larry Ellison Proof */}
        <OutcomeChart onCtaClick={() => setIsCabModalOpen(true)} />

        {/* Quick Context Intake Widget (Stage 1 & 2 Core Functional Engine) */}
        <QuickIntakeWidget
          onAddContact={handleAddExtractedContact}
        />

        {/* Living Contact Directory & Timelines (Stage 3 User Dashboard) */}
        <ContactDirectory
          contacts={contacts}
        />

        {/* Smart Reminder Engine & Webhook Simulator (Stage 3 Notification Flow) */}
        <ReminderEngine
          contacts={contacts}
        />

        {/* Relationship Value Loss & ROI Calculator (Stage 1 High-Intent Tool) */}
        <RoiCalculator
          openCabModal={() => setIsCabModalOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer
        openCabModal={() => setIsCabModalOpen(true)}
        setActiveSection={setActiveSection}
      />

      {/* Customer Advisory Board (CAB) Modal */}
      <CabModal
        isOpen={isCabModalOpen}
        onClose={() => setIsCabModalOpen(false)}
      />

    </div>
  );
}
