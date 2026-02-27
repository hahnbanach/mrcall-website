export const URLS = {
  signup: 'https://dashboard.mrcall.ai/signup',
  signin: 'https://dashboard.mrcall.ai',
  contact: 'https://dashboard.mrcall.ai/contact',
  linkedin: 'https://linkedin.com/company/mrcall-ai/',
  youtube: 'https://youtube.com/@mrcall4241',
  appStoreIos: 'https://apps.apple.com/us/app/mrcall/id1638301178',
  appStoreAndroid: 'https://play.google.com/store/apps/details?id=ai.mrcall.app',
} as const;

export const CONTACT = {
  support: 'support@mrcall.ai',
  legal: 'legal@mrcall.ai',
  privacy: 'privacy@mrcall.ai',
  phone: '+39 02 30573 544',
  phoneRaw: '+390230573544',
  legalPhone: '+39 02 2110 2420',
  legalPhoneRaw: '+390221102420',
} as const;

export const SITE = {
  name: 'MrCall',
  domain: 'mrcall.ai',
} as const;

// Pricing plans — only non-translatable data
// Plan names and feature labels are in messages/{locale}.json under "pricing" namespace
export const PRICING_PLANS = [
  { key: 'essential', price: 25, minutes: '100', calls: '~50', featured: false, featureCount: 6 },
  { key: 'starter', price: 50, minutes: '220', calls: '~110', featured: true, featureCount: 9 },
  { key: 'professional', price: 150, minutes: '700', calls: '~350', featured: false, featureCount: 7 },
] as const;

// Use case badge keys — labels are in messages/{locale}.json under "useCaseBadges"
export const USE_CASE_KEYS = [
  'freelancers',
  'medicalPractices',
  'realEstate',
  'restaurants',
  'dealerships',
  'propertyManagers',
] as const;

// Use case details — only non-translatable data (icons, ids)
// All text is in messages/{locale}.json under "useCases.{id}"
export const USE_CASE_DETAILS = [
  { id: 'freelancers', icon: '\u{1F4BC}', featureCount: 5 },
  { id: 'medicalPractices', icon: '\u{1F3E5}', featureCount: 5 },
  { id: 'realEstate', icon: '\u{1F3E0}', featureCount: 5 },
  { id: 'restaurants', icon: '\u{1F37D}\u{FE0F}', featureCount: 5 },
  { id: 'dealerships', icon: '\u{1F697}', featureCount: 5 },
  { id: 'propertyManagers', icon: '\u{1F3E2}', featureCount: 5 },
] as const;

// Transcript line speakers — text is in messages/{locale}.json under "transcript"
export const TRANSCRIPT_SPEAKERS = [
  'agent', 'caller', 'agent', 'caller', 'agent', 'caller', 'agent',
] as const;

// Nav link hrefs — labels are in messages/{locale}.json under "nav"
export const NAV_LINKS = [
  { key: 'useCases', href: '/usecases' },
  { key: 'blog', href: '/blog' },
  { key: 'contacts', href: '/contacts' },
] as const;
