import {
  MasterclassSlot,
  Testimonial,
  BonusItem,
  SecretPillar,
  MasterclassScheduleItem,
  NichePreset,
  FaqItem,
} from '../types';

export const MASTERCLASS_SLOTS: MasterclassSlot[] = [
  {
    id: 'slot-today-7pm',
    dateLabel: 'Today (Special Live Session)',
    fullDate: 'Today, 7:00 PM IST (9:30 AM EST / 1:30 PM UTC)',
    timeIST: '7:00 PM - 8:30 PM IST',
    timeEST: '9:30 AM - 11:00 AM EST',
    timeUTC: '1:30 PM - 3:00 PM UTC',
    spotsLeft: 4,
    isPopular: true,
    status: 'almost_full',
  },
  {
    id: 'slot-tomorrow-11am',
    dateLabel: 'Tomorrow Morning',
    fullDate: 'Tomorrow, 11:00 AM IST (1:30 AM EST / 5:30 AM UTC)',
    timeIST: '11:00 AM - 12:30 PM IST',
    timeEST: '1:30 AM - 3:00 AM EST',
    timeUTC: '5:30 AM - 7:00 AM UTC',
    spotsLeft: 9,
    status: 'filling_fast',
  },
  {
    id: 'slot-tomorrow-7pm',
    dateLabel: 'Tomorrow Evening',
    fullDate: 'Tomorrow, 7:00 PM IST (9:30 AM EST / 1:30 PM UTC)',
    timeIST: '7:00 PM - 8:30 PM IST',
    timeEST: '9:30 AM - 11:00 AM EST',
    timeUTC: '1:30 PM - 3:00 PM UTC',
    spotsLeft: 12,
    status: 'open',
  },
];

export const THREE_PILLARS: SecretPillar[] = [
  {
    number: '01',
    title: 'The AI Niche Super-Connector',
    subtitle: 'Extract Hyper-Profitable $10,000/Mo Knowledge Angles in 15 Minutes',
    description:
      'Discover how to combine your personal life experience or passions with AI prompt chains to pinpoint unsaturated, high-ticket digital micro-niches that people are desperately willing to pay for right now.',
    keyPoints: [
      'The 4-Step "Ikigai + AI" formula to monetize skills you already possess',
      'How to validate real buyer demand in 8 minutes without running paid ads',
      'The exact prompt stack that reverse-engineers 6-figure competitor offers',
      'Avoiding the #1 generic trap that 95% of AI creators make',
    ],
    outcome: 'Lock in a bulletproof, validated $500–$2,000 offer concept with zero guesswork.',
    aiTechUsed: ['Gemini 2.5 Pro', 'Claude 3.7', 'Perplexity Pro', 'Ahrefs AI'],
    icon: 'Target',
  },
  {
    number: '02',
    title: 'The 24/7 AI Cashflow Engine',
    subtitle: 'Package Digital Assets, Mini-Courses & AI Copilots with Zero Coding',
    description:
      'Build self-selling digital knowledge products, AI tools, and interactive micro-communities in hours instead of months. Deploy AI avatar presenters, automated workbooks, and custom GPTs that deliver 10x value to students on autopilot.',
    keyPoints: [
      'The "Lego Block" method to build a complete 4-module video course in 48 hours',
      'Deploying custom AI Copilots that mentor your clients 24/7 so you never trade time for money',
      'Generating high-converting slides, scripts, worksheets, and mind maps in 1 click',
      'How to maintain 92%+ profit margins with virtually zero overhead or employee payroll',
    ],
    outcome: 'Launch a finished, world-class digital product ready to accept recurring payments.',
    aiTechUsed: ['HeyGen AI', 'Cursor / Lovable', 'NotebookLM', 'Gamma App'],
    icon: 'Cpu',
  },
  {
    number: '03',
    title: 'The Autonomous AI Traffic Flywheel',
    subtitle: 'Fill Your Webinars & Funnels with Eager Buyers Without Spending Thousands on Ads',
    description:
      'Turn 1 piece of seed content into 30 viral video shorts, LinkedIn carousels, and high-converting newsletters with autonomous AI distribution agents. Route warm leads to automated conversion funnels that close sales 24 hours a day.',
    keyPoints: [
      'The "1-to-30" AI Content Multiplier System for YouTube, Instagram & LinkedIn',
      'How automated AI DM agents qualify prospects and book masterclass seats hands-free',
      'The High-Converting "Venture Webinar" formula that achieves 18%–28% live conversion',
      'Scaling from $3,000/mo to $30,000/mo using automated AI retargeting loops',
    ],
    outcome: 'A self-sustaining machine generating consistent leads and sales while you sleep.',
    aiTechUsed: ['Make.com', 'ManyChat AI', 'ElevenLabs', 'Vapi AI Voice'],
    icon: 'TrendingUp',
  },
];

export const MASTERCLASS_SCHEDULE: MasterclassScheduleItem[] = [
  {
    minute: '00 - 15 MIN',
    title: 'The Great AI Wealth Transfer of 2026',
    summary:
      'Why the traditional 9-to-5 and manual freelance agency models are broken, and why solopreneurs using AI leverage are generating 10x the income with 90% less stress.',
    takeaways: [
      'The Shift from "Trading Time for Money" to "Trading AI Leverage for Wealth"',
      'The 5 Fatal Mistakes beginner AI entrepreneurs make that cause burnout',
    ],
    badge: 'Foundation',
  },
  {
    minute: '15 - 40 MIN',
    title: 'Live Breakdown: The AI Freedom Business Architecture',
    summary:
      'Watch a live, start-to-finish demonstration of packaging knowledge into a $497 digital product suite and building a high-ticket AI consulting funnel in under 25 minutes.',
    takeaways: [
      'The 3-Tier Product Ladder (Micro-Product, Core Mastermind, VIP Implementation)',
      'Live AI Prompting: Generating the curriculum, sales copy, and interactive assets on screen',
    ],
    badge: 'Live Demo',
  },
  {
    minute: '40 - 65 MIN',
    title: 'The Autonomous AI Lead & Cash System',
    summary:
      'How to setup AI agents that publish daily content, converse with potential buyers in your DMs, and drive hundreds of registered attendees to your automated weekly masterclass.',
    takeaways: [
      'The "Zero-Ad-Spend" Organic AI Traffic Matrix',
      'Deploying an automated WhatsApp & Email nurturing sequence that generates sales on repeat',
    ],
    badge: 'High Impact',
  },
  {
    minute: '65 - 80 MIN',
    title: 'Real 6-Figure Case Studies & The 90-Day Roadmap',
    summary:
      'Unpacking real student breakdowns across diverse niches (health, finance, tech, career, parenting) who scaled from $0 to $10,000+/month in under 90 days.',
    takeaways: [
      'The Week-by-Week Action Plan from Day 1 to First $1,000 Sale',
      'The exact template stack you can clone today to start immediately',
    ],
    badge: 'Proof & Scale',
  },
  {
    minute: '80 - 90 MIN',
    title: 'Live Interactive Q&A + Exclusive $1,497 AI Bonus Unlock',
    summary:
      'Get your specific questions answered live by the mentor and unlock instant access to all fast-action AI templates, swipe files, and community vaults.',
    takeaways: [
      'Live Niche Review for selected attendees',
      'Download link unlock for the 2026 AI Master Prompt Vault & Workflows',
    ],
    badge: 'VIP Rewards',
  },
];

export const ATTENDEE_BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    title: 'The 2026 AI Revenue Prompt Vault',
    value: 297,
    tag: 'Instant Fast-Action Bonus',
    description:
      'Over 1,500+ battle-tested prompts designed specifically for market research, course creation, sales page copywriting, email funnels, and viral video scripts.',
    highlights: [
      'Copy-paste prompt chains that write entire sales funnels in 5 minutes',
      'Course syllabus & video script generator prompts with proven retention hooks',
      'Custom GPT system instructions for 24/7 client support bots',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'bonus-2',
    title: 'The 7-Figure AI Funnel & Notion Swipe File',
    value: 497,
    tag: 'Plug-and-Play Template',
    description:
      'Complete Notion workspace containing the exact landing page wireframes, email sequence triggers, webinar slide deck templates, and student onboarding workflows.',
    highlights: [
      '1-Click Notion Template ready to duplicate to your personal workspace',
      'High-converting 7-day post-webinar email drip campaign (38% open rate)',
      'Webinar slide deck template optimized for 20%+ live conversion',
    ],
    icon: 'FolderGit2',
  },
  {
    id: 'bonus-3',
    title: 'AI Autonomous Workflow Pack (Make.com & Zapier)',
    value: 397,
    tag: 'No-Code Blueprints',
    description:
      'Importable JSON blueprints to connect your lead capture forms, AI content repurposing pipelines, automated calendar bookings, and WhatsApp notifications with zero code.',
    highlights: [
      'Instant Make.com blueprint imports for autonomous social distribution',
      'Automatic student certificate & workbook delivery automation',
      'AI CRM webhook connectors for instant buyer follow-ups',
    ],
    icon: 'Workflow',
  },
  {
    id: 'bonus-4',
    title: 'Private AI Freedom Founders Club (30-Day VIP Pass)',
    value: 306,
    tag: 'Exclusive Community Access',
    description:
      'Join our private network of over 12,000+ active digital creators and AI entrepreneurs. Participate in weekly mastermind calls, peer review sessions, and live hackathons.',
    highlights: [
      'Weekly live "Hot Seat" review calls with seasoned 7-figure mentors',
      'Exclusive job board & partnership matchmaking channel',
      'Accountability pods to guarantee you launch your offer in 30 days',
    ],
    icon: 'Users',
  },
];

export const STUDENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vikram Mehta',
    role: 'Former Corporate IT Manager',
    niche: 'AI Productivity for Project Managers',
    earningsResult: '$14,200/Month',
    timeframe: 'Achieved in 68 Days',
    quote:
      'I was working 60-hour weeks in corporate. Following the AI Freedom Model, I packaged my Scrum & Agile knowledge with AI prompt templates. Now I run a community with 180 paying members and make more than my old IT salary!',
    detailedStory:
      'Vikram had 12 years of corporate experience but zero online marketing skills. Using the AI Niche Connector, he launched an "AI for PMs" micro-course and filled 3 cohorts in under 2 months with zero ad spend.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    badge: 'Diamond Hall of Fame',
    location: 'Mumbai / Dubai',
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Ananya Sharma',
    role: 'Nutritionist & Wellness Consultant',
    niche: 'AI Meal Planning & Holistic Health',
    earningsResult: '$9,800/Month',
    timeframe: 'Achieved in 45 Days',
    quote:
      'The 24/7 AI Copilot idea blew my mind. Instead of repeating the same advice on 1-on-1 calls all day, my custom AI wellness assistant helps my clients 24/7. My revenue tripled and I work 4 hours a day.',
    detailedStory:
      'Ananya was physically capped at 15 clients per month. By building an AI meal-planner toolkit and automated monthly community membership, she scaled to 340+ members across 14 countries.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    badge: '10K Club Winner',
    location: 'Bangalore',
    verified: true,
  },
  {
    id: 'test-3',
    name: 'David Reynolds',
    role: 'Freelance Copywriter',
    niche: 'AI B2B Email Systems for SaaS',
    earningsResult: '$26,500/Month',
    timeframe: 'Scaled in 90 Days',
    quote:
      'Transitioning from an hourly freelancer to an AI Freedom Business owner changed everything. I sell productized AI outbound systems. The masterclass was the single best 90 minutes of my career.',
    detailedStory:
      'David went from charging $50 per email to packaging an end-to-end "AI Cold Pipeline Suite" priced at $2,500 setup + $1,000/mo retainer. He now manages 14 clients with automated AI workflows.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    badge: 'Top Performer Award',
    location: 'London / Singapore',
    verified: true,
  },
  {
    id: 'test-4',
    name: 'Pooja Kulkarni',
    role: 'High School Math Teacher & Mother',
    niche: 'Gamified Math Mastery for Kids',
    earningsResult: '$7,400/Month',
    timeframe: 'Achieved in 60 Days',
    quote:
      'As a teacher and mother of two, I had zero time to spare. The AI content multiplier helped me create interactive math games and animated tutorials effortlessly during weekends. Financial freedom is real!',
    detailedStory:
      'Pooja utilized AI audio and video generation tools shown in the masterclass to create 50 animated math lessons. She now sells a $47/mo membership to parents globally.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    badge: 'Freedom Creator Badge',
    location: 'Pune',
    verified: true,
  },
];

export const NICHE_PRESETS: NichePreset[] = [
  {
    id: 'niche-1',
    category: 'Productivity & Tech',
    nicheTitle: 'AI Workflows for Corporate Managers & Executives',
    problemSolved: 'Executives wasting 15+ hours/week on emails, status reports, and slide decks.',
    aiOfferIdea: 'The 10-Hour Executive: Custom AI Assistants & Prompt Suite for Outlook & Notion.',
    ticketPrice: '$497 one-time or $97/mo VIP community',
    targetSalesPerMonth: 21,
    monthlyPotential: '$10,437 / month',
    aiTools: ['Claude 3.7', 'Gemini Workspace', 'NotebookLM', 'Fathom AI'],
    promptExample:
      'Act as a Fortune 500 Chief of Staff. Analyze the following 5 project updates and draft an executive briefing with risks, blockers, and KPI progress in under 200 words...',
  },
  {
    id: 'niche-2',
    category: 'Health & Fitness',
    nicheTitle: 'AI-Powered Personalized Nutrition & Biohacking',
    problemSolved: 'People struggling with generic diets that do not account for blood work, sleep, and lifestyle.',
    aiOfferIdea: 'The Smart Biohack Blueprint: AI Meal Generator + Custom Habit Copilot.',
    ticketPrice: '$297 package + $49/mo coaching app access',
    targetSalesPerMonth: 35,
    monthlyPotential: '$10,395 / month',
    aiTools: ['HeyGen', 'Custom GPT', 'Typeform AI', 'Stripe Billing'],
    promptExample:
      'You are an elite sports nutritionist. Given the user metabolic profile (Age: 38, Weight: 82kg, Sedentary Desk Job, Goal: Fat Loss), generate a 7-day anti-inflammatory meal schedule with exact grocery item quantities...',
  },
  {
    id: 'niche-3',
    category: 'Sales & Real Estate',
    nicheTitle: 'AI Lead Generation & Video Tours for Real Estate Agents',
    problemSolved: 'Realtors spending hours driving to showings and failing to follow up with buyer inquiries.',
    aiOfferIdea: 'The Autonomous Realtor: AI Virtual Staging & Instant WhatsApp Tour Booking Agent.',
    ticketPrice: '$1,497 setup + $297/mo retainer',
    targetSalesPerMonth: 8,
    monthlyPotential: '$14,352 / month',
    aiTools: ['Vapi AI Voice', 'Midjourney v6', 'ManyChat', 'Make.com'],
    promptExample:
      'You are an experienced luxury real estate concierge. A prospect just messaged asking about 3-bedroom penthouses in Downtown under $800k. Qualify their budget, pre-approval status, and offer 2 virtual tour slots this Saturday...',
  },
  {
    id: 'niche-4',
    category: 'Finance & Investing',
    nicheTitle: 'AI Financial Literacy & Budgeting for Young Freelancers',
    problemSolved: 'Freelancers with irregular cash flow suffering tax penalties and zero retirement savings.',
    aiOfferIdea: 'Freelance Wealth Accelerator: Automated Tax Estimation & Cashflow Predictor Tool.',
    ticketPrice: '$197 core course + $37/mo spreadsheet updates',
    targetSalesPerMonth: 50,
    monthlyPotential: '$11,700 / month',
    aiTools: ['Gemini Code Execution', 'Airtable AI', 'Notion', 'Stripe'],
    promptExample:
      'Given an irregular monthly freelance income stream across USD/EUR/GBP, calculate the ideal 3-bucket tax reserve, emergency buffer, and automated index fund allocation...',
  },
  {
    id: 'niche-5',
    category: 'Education & Parenting',
    nicheTitle: 'AI-Enhanced Language Learning for Immigrant Families',
    problemSolved: 'Parents wanting children to retain their native language while mastering English fluency.',
    aiOfferIdea: 'Bilingual Kid Genius: AI Storybook Creator & Interactive Voice Tutor.',
    ticketPrice: '$347 annual family pass',
    targetSalesPerMonth: 30,
    monthlyPotential: '$10,410 / month',
    aiTools: ['ElevenLabs Multilingual', 'DALL-E 3', 'Voiceflow', 'Skool'],
    promptExample:
      'Generate a 5-chapter interactive children bedtime story in English and Spanish side-by-side with phonics pronunciation guides and audio narration triggers for key vocabulary words...',
  },
  {
    id: 'niche-6',
    category: 'Marketing & Design',
    nicheTitle: 'AI Brand Identity & Social Content Engine for E-Commerce',
    problemSolved: 'Shopify brand owners spending $3,000/mo on ad agencies with zero return on ad spend.',
    aiOfferIdea: 'The E-com Creative Matrix: 100 Viral UGC Ads in 48 Hours with AI Avatars.',
    ticketPrice: '$997 system implementation',
    targetSalesPerMonth: 12,
    monthlyPotential: '$11,964 / month',
    aiTools: ['HeyGen', 'CapCut AI', 'Runway Gen-3', 'Cursor'],
    promptExample:
      'Create 5 distinct high-hook TikTok ad scripts for an ergonomic desk chair, targeting remote workers with back pain. Structure with Hook (0-3s), Problem Agitation (3-8s), AI Solution (8-20s), and Social Proof CTA...',
  },
];

export const FREQUENTLY_ASKED_QUESTIONS: FaqItem[] = [
  {
    category: 'General',
    question: 'Is this masterclass truly 100% free? What is the catch?',
    answer:
      'Yes, the 90-minute live masterclass is 100% free. Siddharth and the AI Freedom Network host these live training sessions to empower ambitious professionals, creators, and consultants to understand how to leverage AI ethically. At the end of the session, there is an optional invitation to join our advanced implementation academy for those who want hands-on 1-on-1 mentorship, but the masterclass itself is packed with complete, actionable, stand-alone value.',
  },
  {
    category: 'Tech & AI',
    question: 'Do I need any coding, programming, or advanced tech background?',
    answer:
      'Absolutely not. The entire AI Freedom Business Model is built on intuitive, no-code AI tools, conversational prompts (English language), and drag-and-drop workflow platforms. If you know how to send an email, search Google, or type in a chat box, you have all the technical skills required.',
  },
  {
    category: 'Schedule',
    question: 'What if I register but cannot make it to the live session?',
    answer:
      'Due to the interactive live demonstrations, real-time Q&A, and live niche audits, recordings are generally not provided to non-attendees. Furthermore, the $1,497 fast-action AI bonus pack is only unlocked for those who stay until the end of the live broadcast. We strongly recommend blocking out 90 distraction-free minutes on your calendar for the slot you choose.',
  },
  {
    category: 'Investment',
    question: 'How much capital or budget is required to start this business?',
    answer:
      'Unlike traditional physical businesses, e-commerce, or franchises that require thousands of dollars in inventory, physical offices, or employee salaries, an AI Knowledge Business has near-zero overhead. You can start with basic free/low-cost AI tools (typically under $20–$50/month total for AI subscriptions) and scale as you generate revenue.',
  },
  {
    category: 'Tech & AI',
    question: 'How is this different from dropshipping, crypto, or generic affiliate marketing?',
    answer:
      'Those outdated models rely on low margins, zero control over suppliers, and high ad burn rates. The AI Freedom Business Model focuses on building a legitimate, high-margin (90%+) intellectual property asset where YOU own the customer relationships, recurring community subscriptions, and automated digital delivery systems.',
  },
  {
    category: 'General',
    question: 'I have a busy 9-to-5 job. How many hours per week do I need?',
    answer:
      'Over 60% of our most successful students started while working demanding full-time jobs. Because AI handles 80% of content research, asset creation, and lead qualification, you only need 5 to 7 focused hours per week (about 1 hour per day or dedicated weekend blocks) to build and launch your first digital asset within 60-90 days.',
  },
];
