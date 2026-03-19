// Portfolio content — single source of truth
// All section data is organised by section key.

export const portfolioContent = {
  // ── HERO ────────────────────────────────────────────
  hero: {
    fullName: 'Allen Camacho',
    subHeadline: 'Business Development Executive | Certified HR Associate | Recruitment Strategist',
    ctaPrimary: 'View My Work',
    ctaSecondary: "Let's Connect",
  },

  // ── ABOUT ───────────────────────────────────────────
  about: {
    sectionLabel: 'About Allen',
    story: [
      'It started in a classroom at Rizal Technological University, where Allen pursued a degree in Human Resource Development Management — not just to land a job, but to understand people on a deeper level.',
      'Armed with a CHRA certification and an International Diploma in Office Administration & Management Technology, he stepped into the real world ready to do more than manage — he wanted to move mountains.',
      'Today, Allen operates at the intersection of people, business, and strategy — building client pipelines across Asia, managing the full recruitment lifecycle, and even piloting drones at international racing events on the side.',
    ],
    funFact:
      "Yes, I'm also a licensed drone pilot and live event operator. Life's too short for one career lane.",
    stats: [
      { metric: 'Years of Experience', value: '4+' },
      { metric: 'Clients Acquired', value: '20+' },
      { metric: 'Markets Served', value: 'PH · SG · APAC' },
      { metric: 'Certifications', value: '3' },
    ],
  },

  // ── EXPERIENCE ──────────────────────────────────────
  experience: {
    sectionLabel: 'My Career Journey',
    items: [
       {
  company: 'CXC Global',
  location: 'Philippines',
  role: 'Senior Client Acquisition',
  duration: 'Feb 2025 – Present',
  blurb:
    'In a senior acquisition role, Allen partners with organizations to unlock global workforce solutions through CXC’s comprehensive service offerings. He focuses on helping businesses scale internationally, optimize workforce strategies, and navigate complex compliance landscapes with confidence.',
  highlights: [
    'Provides access to an extended global talent pool of specialized resources and project-based teams',
    'Delivers blended onshore and offshore workforce solutions across multiple regions',
    'Enables greater business agility by helping companies scale and adjust workforce strategies efficiently',
    'Drives cost optimization and operational efficiency by consolidating global consulting, contracting, payroll, and workforce providers',
    'Supports hiring, onboarding, offboarding, payroll, and invoicing across 100+ countries',
    'Helps clients outsource risk and manage complexities in taxation, regulation, and compliance',
    'Empowers SMEs to expand into new markets without requiring a local entity presence',
    'Offers streamlined solutions for the gig economy and digital nomad workforce',
    'Implements flexible engagement models including SOW, co-managed services, managed capacity, staff augmentation, and project-based services',
    'Supports service delivery excellence through performance management, team leadership, coaching, and mentoring',
  ],
},
      {
        company: 'M and J Solutions Provider',
        location: 'Philippines',
        role: 'Business Development Executive',
        duration: 'January 2024 – January 2025',
        blurb:
          'Back on home turf and hitting the ground running. Allen leads business development initiatives targeting both local and international (ASIA) clients — blending hustle with strategy to consistently exceed acquisition quotas.',
        highlights: [
          'Sourcing and nurturing new client relationships from first contact to contract',
          'Leads presentations, negotiations, contract revisions, and accreditation processes',
          'Consistently achieving a quota of 3–5 new clients per month across local and APAC markets',
          'Provides ad hoc support across the full recruitment cycle',
        ],
      },
      {
        company: 'RRecruiter PTE LTD',
        location: 'Singapore',
        role: 'Business Development Executive',
        duration: 'June 2022 – September 2023',
        blurb:
          'Allen took the leap — from the Philippines to the competitive Singapore market — and thrived. Working with MNC and SME clients across the APAC region, he managed full-cycle recruitment while driving business growth through strategic client management.',
        highlights: [
          'Executed 360° recruitment: client sourcing + candidate sourcing simultaneously',
          'Managed full recruitment lifecycle: interview arrangement → onboarding',
          'Served MNC and SME clients across the SG market and broader APAC region',
          'Leveraged Jobstreet, MyCareersFuture, LinkedIn, and more',
          'Implemented tailored talent strategies to meet diverse client requirements',
        ],
      },
      {
        company: 'Mcfly Industries',
        location: '',
        role: 'Project Manager (Part-Time)',
        duration: '2020 – Present',
        blurb:
          "When he's not closing deals, Allen is in the field — managing operations for drone racing events, directing live coverage, and supporting international pilots.",
        highlights: [
          'Event management for competitive drone racing tournaments',
          'Certified drone pilot and timing system operator',
          'OBS operator for live streaming and recording; video/photo editing',
          'Camera operator and personal assistant to the CEO',
          'GitHub-tracked software project management',
          'Assisted foreign pilots with logistics and coordination',
        ],
      },
      {
        company: 'Sweet Harmony Gardens',
        location: '',
        role: 'Waiter and Setup Crew',
        duration: '2018 – 2019',
        blurb:
          "Every great career has a humble beginning. Allen's foundation in professionalism, service, and attention to detail was built one table at a time.",
        highlights: [],
      },
    ],
  },

  // ── SKILLS ──────────────────────────────────────────
  skills: {
    sectionLabel: 'What I Bring to the Table',
    technical: [
      { tool: 'Microsoft Office', category: 'Productivity' },
      { tool: 'Outlook', category: 'Communication' },
      { tool: 'Jobstreet, LinkedIn, Indeed, MCF', category: 'Talent Sourcing' },
      { tool: 'GitHub', category: 'Project Tracking' },
      { tool: 'OBS Studio', category: 'Live Production' },
      { tool: 'Adobe, Canva', category: 'Design & Media' },
      { tool: 'HubSpot', category: 'CRM / Sales' },
    ],
    soft: [
      'Fast Learner — picks up new tools, markets, and industries quickly',
      'Stress Management — stays composed under pressure and tight deadlines',
      'Decision Making — confident in high-stakes situations',
      'Critical Thinking — evaluates options before acting',
      'Goal-Oriented — quota-driven and self-motivated',
      'Sales — consultative selling with relationship-first approach',
      'Negotiation — from terms to talent, always finding the win-win',
    ],
    domain: [
      '360° Recruitment (End-to-End)',
      'Business Development & Client Acquisition',
      'Cross-Border Talent Management (SG / PH / APAC)',
      'Event Management & Live Production',
      'Contract Negotiation & Accreditation',
      'Drone Operations & Timing Systems',
    ],
  },

  // ── EDUCATION ───────────────────────────────────────
  education: {
    sectionLabel: 'Foundations That Built Me',
    items: [
      {
        credential: 'BSBA — Human Resource Development Management',
        institution: 'Rizal Technological University',
        year: '2018–2022',
      },
      {
        credential: 'Certified HR Associate (CHRA)',
        institution: 'HREAP',
        year: '—',
      },
      {
        credential: 'International Diploma in Office Administration & Management Technology',
        institution: '—',
        year: '—',
      },
    ],
  },

  // ── TESTIMONIALS ────────────────────────────────────
  testimonials: {
    sectionLabel: 'What People Say',
    items: [
      {
        name: 'Ren Espinosa',
        role: 'Recruitment Head / Operations Manager',
        quote:
          'Allen is one of those rare professionals who genuinely cares about outcomes — not just for the company, but for every candidate and client he works with. His ability to manage both sides of the recruitment table while driving business development results is remarkable. He brought energy, structure, and real results to our team.',
      },
      {
        name: 'Marlon Caras',
        role: 'CEO & Founder, MCFLY Industries',
        quote:
          "I've worked with Allen for years, and what sets him apart isn't just his skill set — it's his mindset. Whether he's behind a camera, managing event logistics, or coordinating with international pilots, he shows up fully committed. He's the kind of person you want in your corner when things get complicated.",
      },
      {
        name: 'Helen Fan Yi',
        role: 'Associate Director – Asia, CXC Global',
        quote:
          'Allen stood out immediately as someone who understood both the business side and the human side of recruitment. Working across the Asia market requires cultural awareness, persistence, and genuine relationship-building — and Allen delivers on all three.',
      },
    ],
  },

  // ── CONTACT ─────────────────────────────────────────
  contact: {
    sectionLabel: "Let's Build Something Together",
    location: 'Taytay, Rizal, Philippines',
    phone: '09511589090',
    email: 'allencamacho5@gmail.com',
  },
}