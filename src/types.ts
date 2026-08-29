export type Currency = 'USD' | 'PKR' | 'EUR' | 'GBP';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rate: number; // relative to USD = 1
  label: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  priceMonthlyUSD: number;
  priceAnnualMonthlyUSD: number;
  popular?: boolean;
  badge?: string;
  targetAudience: string;
  features: string[];
  limits: {
    transactionsPerMonth: string;
    entities: string;
    teamMembers: string;
    storage: string;
    reports: string;
  };
  ctaText: string;
  highlightColor: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  quote: string;
  specialization: string[];
  linkedinUrl?: string;
  twitterUrl?: string;
  avatarColor: string;
  image?: string;
}

export interface FeaturePillar {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string;
  badge: string;
  benefits: string[];
  metricLabel: string;
  metricValue: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  avatar: string;
  quote: string;
  metric: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'packages' | 'security' | 'nic_startups' | 'migration';
}

export interface FinancialHealthInputs {
  monthlyRevenue: number;
  monthlyExpenses: number;
  cashOnHand: number;
  unpaidReceivables: number;
  teamSize: number;
}

export interface FinancialHealthResult {
  runwayMonths: number;
  netBurnRate: number;
  profitMargin: number;
  healthScore: number; // 0 - 100
  status: 'Critical' | 'Cautious' | 'Healthy' | 'Thriving';
  recommendations: string[];
}

export interface DemoTransaction {
  id: string;
  date: string;
  description: string;
  category: 'Revenue' | 'Payroll' | 'Cloud Hosting' | 'Marketing' | 'Office' | 'Consulting';
  type: 'income' | 'expense';
  amount: number;
  status: 'reconciled' | 'pending';
}
