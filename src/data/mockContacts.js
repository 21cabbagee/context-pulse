export const initialContacts = [
  {
    id: 'c1',
    name: 'Sarah Chen',
    role: 'Co-Founder & CEO',
    company: 'Synapse Robotics',
    avatar: 'SC',
    avatarColor: 'from-purple-500 to-indigo-600',
    email: 'sarah@synapserobotics.io',
    phone: '+1 (415) 892-4102',
    tags: ['Founder', 'Series A', 'Hardware', 'Matcha Enthusiast'],
    relationshipScore: 94,
    lastInteraction: '2 days ago',
    nextFollowUp: '2026-11-02',
    milestone: 'Series A Term Sheet Review',
    reminderAlert: 'Alert active: 3 days before roadshow begins',
    timeline: [
      {
        id: 't1',
        date: 'Oct 11, 2026',
        type: 'Coffee / In-Person',
        location: 'Blue Bottle Cafe, SOMA',
        summary: 'Met for 45 mins. Sarah confirmed they closed $1.8M ARR. Raising $8M Series A target in early November. Loves Uji ceremonial matcha.',
        commitments: [
          'Introduce Sarah to Marcus Vance at Horizon Capital by Friday',
          'Send link to Kyoto single-origin matcha distributor'
        ],
        topics: ['Series A Pitch Deck', 'Hardware Supply Chain in Shenzhen', 'Executive Headcount']
      },
      {
        id: 't2',
        date: 'Sep 14, 2026',
        type: 'Quick Call',
        location: 'Phone',
        summary: 'Congratulated Sarah on their patent approval for pneumatic micro-actuators. Agreed to catch up in person next month.',
        commitments: [],
        topics: ['Patent Grant US-119420', 'Seed Extension Close']
      }
    ]
  },
  {
    id: 'c2',
    name: 'David Sterling',
    role: 'Managing Partner',
    company: 'Apex Growth Advisors',
    avatar: 'DS',
    avatarColor: 'from-emerald-500 to-teal-600',
    email: 'david@apexgrowth.com',
    phone: '+1 (212) 640-1934',
    tags: ['Consultant', 'M&A', 'Angel LP', 'Triathlete'],
    relationshipScore: 88,
    lastInteraction: '1 week ago',
    nextFollowUp: '2026-10-24',
    milestone: 'Q4 Advisory Retainer Renewal ($15k/mo)',
    reminderAlert: 'Alert enqueued: Send advisory impact summary',
    timeline: [
      {
        id: 't3',
        date: 'Oct 06, 2026',
        type: 'Zoom Strategy Session',
        location: 'Virtual',
        summary: 'Reviewed their portfolio audit. David mentioned his daughter is applying to Stanford early decision. Considering retaining our advisory firm for Q4.',
        commitments: [
          'Send benchmark valuation multiples report for B2B vertical SaaS',
          'Follow up regarding Stanford alumni admissions connection'
        ],
        topics: ['B2B SaaS Multiples', 'Stanford Early Action', 'Q4 Retainer Scope']
      }
    ]
  },
  {
    id: 'c3',
    name: 'Elena Rostova',
    role: 'Head of Product Design',
    company: 'Kinetix Studio',
    avatar: 'ER',
    avatarColor: 'from-amber-500 to-orange-600',
    email: 'elena@kinetixstudio.design',
    phone: '+1 (512) 773-8201',
    tags: ['Designer', 'Spatial UI', 'Austin Tech'],
    relationshipScore: 79,
    lastInteraction: '2 weeks ago',
    nextFollowUp: '2026-10-28',
    milestone: 'Design System Keynote in Berlin',
    reminderAlert: 'Wish good luck before Berlin flight',
    timeline: [
      {
        id: 't4',
        date: 'Sep 29, 2026',
        type: 'Dinner',
        location: 'Loro Austin, South Lamar',
        summary: 'Elena spoke about leading the spatial audio interface re-design for Apple Vision Pro app. Relocating to Berlin for 3 weeks for keynote.',
        commitments: [
          'Share contact of freelance 3D shader developer in Germany'
        ],
        topics: ['Spatial UI Design', 'Berlin Tech Keynote', 'Freelance Contractors']
      }
    ]
  }
];

export const sampleIntakePresets = [
  {
    label: 'Coffee with Founder (Series A + Matcha)',
    text: 'Had coffee with Sarah Chen at Blue Bottle. She is raising an $8M Series A in November. Her company Synapse Robotics just hit $1.8M ARR. I promised to introduce her to Marcus Vance at Horizon Capital by Friday and send over that Kyoto ceremonial matcha brand she loves.'
  },
  {
    label: 'Advisory Call with Consultant (Retainer + Daughter)',
    text: 'Call with David Sterling from Apex Growth. He loved our Q3 pipeline results. Discussed renewing our $15k/month advisory retainer on Oct 24th. He mentioned his daughter Chloe is applying to Stanford early decision. I agreed to send over the SaaS valuation benchmark deck.'
  },
  {
    label: 'Dinner with Lead Designer (Spatial UI + Berlin)',
    text: 'Met Elena Rostova from Kinetix Studio for dinner in Austin. She is delivering the opening keynote at the Berlin Design Summit on Oct 28th. She needs an intro to a top WebGL shader developer. Promised to connect her with our contractor in Munich.'
  }
];
