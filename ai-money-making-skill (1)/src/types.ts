export interface MasterclassSlot {
  id: string;
  dateLabel: string;
  fullDate: string;
  timeIST: string;
  timeEST: string;
  timeUTC: string;
  spotsLeft: number;
  isPopular?: boolean;
  status: 'filling_fast' | 'almost_full' | 'open';
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  slotId: string;
  experienceLevel: string;
  primaryGoal: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  niche: string;
  earningsResult: string;
  timeframe: string;
  quote: string;
  detailedStory: string;
  avatar: string;
  badge: string;
  location: string;
  verified: boolean;
}

export interface BonusItem {
  id: string;
  title: string;
  value: number;
  tag: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface SecretPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  outcome: string;
  aiTechUsed: string[];
  icon: string;
}

export interface MasterclassScheduleItem {
  minute: string;
  title: string;
  summary: string;
  takeaways: string[];
  badge?: string;
}

export interface NichePreset {
  id: string;
  category: string;
  nicheTitle: string;
  problemSolved: string;
  aiOfferIdea: string;
  ticketPrice: string;
  targetSalesPerMonth: number;
  monthlyPotential: string;
  aiTools: string[];
  promptExample: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Tech & AI' | 'Schedule' | 'Investment';
}
