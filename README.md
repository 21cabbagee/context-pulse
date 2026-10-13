# ContextPulse — AI-Native Contacts & Context Intelligence

> **Living personal CRM for consultants, founders, and brokers that remembers every contextual interaction detail and triggers intelligent follow-ups.**

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?style=flat-square&logo=github)](https://21cabbagee.github.io/context-pulse/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-emerald?style=flat-square)](#)

---

## 1. Executive Summary & Problem Thesis
- **Product Name:** ContextPulse
- **One-Liner:** Living CRM for your personal and professional network that remembers every contextual interaction detail and triggers intelligent follow-ups.
- **Problem Thesis:** Native contacts apps (iOS, Google Contacts) are dumb phonebooks from 2007. They store static phone numbers and emails, completely oblivious to interaction history, ongoing projects, personal milestones, and mutual promises. Professionals lose deals, forget commitments, and fail to nurture high-value relationships because logging notes in heavy CRMs (Salesforce, HubSpot) has a 90% abandonment rate.

---

## 2. Market Sizing & Playbook Validation
- **Bottoms-Up TAM:** 1,000,000 high-touch professionals (founders, consultants, brokers, venture capitalists) * $19/mo ($228/yr) = **$228 Million TAM**.
- **Market Desperation:** Lost advisory deals, forgotten investor updates, and awkward relationship drop-offs.
- **Timing & Disruption:** The rapid expansion of autonomous agent workflows and multimodal AI creates an immediate requirement for this specialized micro-tool, unbundling bloated horizontal software.

---

## 3. Black Car Scope (V1 MVP Features)

### ✅ In-Scope (Fully Built & Functional)
1. **Quick Context Intake:** Voice note transcription (Whisper API simulation) or quick text snippet box: *"Had coffee with Sarah, she is raising Series A in Nov and loves matcha."*
2. **Entity & Context Extraction:** Auto-extracts Contact Name, Company, Topics Discussed, Commitments Made, and Follow-up Date via structured LLM schema.
3. **Living Contact Timeline View:** Fast, searchable directory displaying chronological interaction memory cards.
4. **Smart Reminder Engine:** Notification webhook (Telegram/Email/SMS) alerting you 3 days before critical milestones.
5. **Relationship ROI Calculator:** Interactive slider estimating annual revenue loss from dropped follow-ups.
6. **Customer Advisory Board (CAB) Modal:** 10-member cohort application with guaranteed 70% lifetime platform discount ($5.70/mo).

### ❌ Out-of-Scope (Strictly Excluded)
- No full email inbox scraping or permanent background device keylogging.
- No complex sales deal pipelines or enterprise quota trackers.

---

## 4. Technical Architecture

```
[Voice Note / Text Intake] 
          ↓
[Whisper Transcription + GPT-4o-mini Schema Extractor]
          ↓
  ┌───────────────────────┬────────────────────────┐
  ↓                       ↓                        ↓
[Contact Name & Org]   [Commitments & Quirks]   [Milestone & Follow-up Date]
  └───────────────────────┼────────────────────────┘
                          ↓
            [Living Timeline Memory Store]
                          ↓
       [Cron / Webhook Trigger (72h Pre-Milestone)]
                          ↓
        [Telegram Bot / Twilio SMS / Resend Alert]
```

### Tech Stack
- **Frontend Framework:** Next.js 14 / React with TailwindCSS & Lucide icons.
- **Extraction Engine:** OpenAI Whisper API + GPT-4o-mini structured JSON outputs.
- **Database / Memory:** Supabase Postgres with `pgvector` for semantic relationship retrieval.
- **Notification Rail:** Telegram Bot Webhook / Twilio SMS / Resend Email.
- **Deployment:** GitHub Pages / Vercel with automated GitHub Actions CI/CD.

---

## 5. Local Setup & Quickstart

```bash
# Clone the repository
git clone https://github.com/21cabbagee/context-pulse.git
cd context-pulse

# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production
npm run build
```

### Environment Variables (`.env.example`)
```env
NEXT_PUBLIC_APP_URL=https://21cabbagee.github.io/context-pulse
OPENAI_API_KEY=sk-proj-your-openai-api-key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=@founder_context_inbox
```

---

## 6. Go-To-Market & High-Intent SEO Setup
- **H1:** "The AI Contact Manager That Remembers Every Conversation Context"
- **URL Slug:** `/tools/ai-contacts-relationship-context-manager`
- **Target Long-Tail Keywords:**
  - `ai native contacts app`
  - `personal crm for consultants`
  - `voice note relationship manager`
  - `automated contact reminder ai`
- **Customer Advisory Board (CAB) Pitch Script:**
  *"We are assembling a 10-member Customer Advisory Board (CAB) for ContextPulse to solve this exact bottleneck. We are offering a 70% lifetime platform discount and dedicated onboarding for our first cohort."*
