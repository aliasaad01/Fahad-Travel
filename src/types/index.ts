/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ProblemPainPoint {
  id: string;
  title: string;
  description: string;
  highlightedWord: string;
}

export interface ProblemSectionType {
  title: string;
  subtitle: string;
  introText: string;
  painPoints: ProblemPainPoint[];
  solutionSummary: string;
}

export interface StorytellingNarrative {
  title: string;
  subtitle: string;
  paragraphs: string[];
  imageAlt: string;
  imageUrl: string;
  quote: {
    text: string;
    author: string;
  };
}

export interface PackageFeature {
  text: string;
  isPremiumHighlight?: boolean;
}

export interface TravelPackage {
  id: string;
  title: string;
  tagline: string;
  emotionalGoal: string;
  vibe: string;
  duration: string;
  imageUrl: string;
  features: PackageFeature[];
  pricingPlaceholder: string;
  whatsappMessage: string;
}

export interface TrustFactor {
  id: string;
  title: string;
  description: string;
  details: string;
}

export interface FearOption {
  id: string;
  title: string;
  fear: string;
  assurance: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  tripPackage: string;
  reviewText: string;
  durationOfMarriage: string;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LandingPageContent {
  brandName: string;
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    trustBullet1: string;
    trustBullet2: string;
    ctaPrimaryText: string;
    ctaSecondaryText: string;
    heroImageUrl: string;
  };
  problem: ProblemSectionType;
  storytelling: StorytellingNarrative;
  stats: StatItem[];
  packages: TravelPackage[];
  trust: {
    title: string;
    subtitle: string;
    items: TrustFactor[];
  };
  fears: {
    title: string;
    subtitle: string;
    items: FearOption[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  faqs: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  finalCta: {
    headline: string;
    subheadline: string;
    whatsappCtaText: string;
    formCtaText: string;
    formTitle: string;
    formSubtitle: string;
  };
}
