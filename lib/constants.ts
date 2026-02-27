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
  tagline: 'Your entire office, one agent away.',
  description: 'The first agentic infrastructure that answers your calls, triages your inbox, and manages your CRM. A divine workforce that talks, remembers, and acts.',
} as const;

export const FEATURES_LIVE = [
  { title: 'High-fidelity voice reception', description: 'Crystal-clear AI conversations that feel natural and professional.' },
  { title: 'Native iOS & Android apps', description: 'Direct Talk — your agent in your pocket, always accessible.' },
  { title: 'Automated transcription', description: 'Every call transcribed, searchable, and organized automatically.' },
  { title: 'Calendar booking', description: 'Seamless integration with Outlook and Google Calendar.' },
  { title: 'Multi-tenant security', description: 'Enterprise-grade isolation for every client and workspace.' },
] as const;

export const FEATURES_SOON = [
  { title: 'Email triage & drafting', description: 'Your agent reads, prioritizes, and drafts responses to your inbox.' },
  { title: 'Deep CRM synchronization', description: 'Bidirectional sync with your CRM — contacts, deals, and history.' },
  { title: 'Autonomous task execution', description: 'Powered by the Zylch engine — your agent acts independently.' },
  { title: 'Cross-channel proactive memory', description: 'One brain across calls, emails, messages. Total context, always.' },
] as const;

export const USE_CASES = [
  'Freelancers',
  'Medical practices',
  'Real estate',
  'Restaurants',
  'Dealerships',
  'Property managers',
] as const;

export const PRICING_PLANS = [
  {
    name: 'Essential',
    price: 25,
    minutes: '100 minutes',
    calls: '~50 calls',
    featured: false,
    features: [
      'MrCall AI with quick setup',
      'Email support (max 1 week response)',
      'WhatsApp/SMS caller notifications',
      'Key call information extraction',
      'Google My Business integration',
      'Knowledge base creation',
    ],
  },
  {
    name: 'Starter',
    price: 50,
    minutes: '220 minutes',
    calls: '~110 calls',
    featured: true,
    features: [
      'Everything in Essential, plus:',
      'Multilingual assistant',
      'Priority email support (max 3 days)',
      'Booking module + Google Calendar',
      'VoIP connection consultation',
      'Webhook integration',
      'Customizable data extraction',
      'Call transfer to extensions',
      'Post-call WhatsApp messages',
    ],
  },
  {
    name: 'Professional',
    price: 150,
    minutes: '700 minutes',
    calls: '~350 calls',
    featured: false,
    features: [
      'Everything in Starter, plus:',
      'Customized MrCall AI',
      'Same-day phone support',
      'WhatsApp notifications included',
      'External data read/write (CRM)',
      'Custom model development',
      'Business hours phone assistance',
    ],
  },
] as const;

export const NAV_LINKS = [
  { label: 'Use cases', href: '/usecases' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contacts' },
] as const;

export const USE_CASE_DETAILS = [
  {
    id: 'freelancers',
    name: 'Freelancers',
    icon: '\u{1F4BC}',
    tagline: 'Never miss a client call again.',
    problem: 'As a freelancer, you are often busy with client work and cannot answer every phone call. Missed calls mean missed opportunities — potential clients move on to the next provider, and your reputation for responsiveness suffers.',
    features: [
      { title: 'Automated Call Management', description: 'MrCall answers calls when you are busy, capturing client details and intent automatically.' },
      { title: 'Client Scheduling', description: 'Let callers book available slots directly through your calendar integration.' },
      { title: 'FAQ Handling', description: 'Your agent answers common questions about your services, pricing, and availability.' },
      { title: 'Instant Notifications', description: 'Get real-time transcriptions and summaries so you never lose context.' },
      { title: 'Professional Image', description: 'Present a consistent, professional front even as a solo operator.' },
    ],
  },
  {
    id: 'medical-practices',
    name: 'Medical Practices',
    icon: '\u{1F3E5}',
    tagline: 'Focus on patients, not the phone.',
    problem: 'Medical practices handle dozens of calls daily — appointment requests, prescription inquiries, lab results. Staff are overwhelmed, patients wait on hold, and critical calls can be missed during busy hours.',
    features: [
      { title: 'Patient Management', description: 'Identify returning patients and greet them with personalized context from previous interactions.' },
      { title: 'Appointment Scheduling', description: 'Automate booking, rescheduling, and cancellations with calendar integration.' },
      { title: 'Appointment Reminders', description: 'Reduce no-shows with automated reminder messages via WhatsApp or SMS.' },
      { title: 'Triage Routing', description: 'Route urgent calls to the right staff member while handling routine inquiries autonomously.' },
      { title: 'After-Hours Coverage', description: 'Provide 24/7 phone coverage so patients always reach a helpful response.' },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: '\u{1F3E0}',
    tagline: 'Capture every lead, day and night.',
    problem: 'Real estate agents are constantly on the move — showing properties, meeting clients, driving between locations. Incoming leads call once and if no one answers, they call the next agency. Speed of response is everything.',
    features: [
      { title: '24/7 Lead Capture', description: 'Every call is answered instantly, capturing buyer or seller intent and contact details.' },
      { title: 'Property Info Delivery', description: 'Your agent provides details about listings, pricing, and availability from your knowledge base.' },
      { title: 'Viewing Scheduling', description: 'Callers can book property viewings directly through your synced calendar.' },
      { title: 'Lead Qualification', description: 'Intelligent questions qualify leads by budget, timeline, and preferences before you follow up.' },
      { title: 'Multilingual Support', description: 'Handle international buyers in their language with multilingual AI conversations.' },
    ],
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    icon: '\u{1F37D}\u{FE0F}',
    tagline: 'Every reservation, every question, handled.',
    problem: 'During peak hours, restaurant staff cannot answer the phone. Customers calling for reservations, menu questions, or directions are left waiting or simply hang up. Each missed call is a lost cover.',
    features: [
      { title: 'Reservation Handling', description: 'Accept, modify, and cancel reservations automatically with real-time table availability.' },
      { title: 'Menu & Hours Info', description: 'Instantly answer questions about your menu, allergens, opening hours, and specials.' },
      { title: 'Multilingual Support', description: 'Serve tourists and international guests in their own language.' },
      { title: 'Directions & Parking', description: 'Provide location details, parking info, and nearby landmarks to callers.' },
      { title: 'Event Inquiries', description: 'Handle group booking and private event requests with intelligent information gathering.' },
    ],
  },
  {
    id: 'dealerships',
    name: 'Dealerships',
    icon: '\u{1F697}',
    tagline: 'Convert more inquiries into test drives.',
    problem: 'Dealerships receive high volumes of calls about inventory, pricing, financing, and service appointments. Sales staff on the floor cannot always pick up, and every missed call is a potential sale walking to a competitor.',
    features: [
      { title: 'Inventory Inquiries', description: 'Answer questions about available vehicles, features, and pricing from your connected database.' },
      { title: 'Test Drive Scheduling', description: 'Let callers book test drives directly into your showroom calendar.' },
      { title: 'Service Appointments', description: 'Handle routine service and maintenance bookings without burdening reception staff.' },
      { title: 'Lead Capture & CRM', description: 'Capture caller details and intent, syncing directly to your CRM for sales follow-up.' },
      { title: 'After-Hours Availability', description: 'Keep generating leads even when the showroom is closed.' },
    ],
  },
  {
    id: 'property-managers',
    name: 'Property Managers',
    icon: '\u{1F3E2}',
    tagline: 'Manage tenants without managing the phone.',
    problem: 'Property managers juggle calls from tenants, prospective renters, contractors, and owners. Maintenance emergencies, rent inquiries, and showing requests pile up — and missing a critical call can mean costly delays.',
    features: [
      { title: 'Tenant Communication', description: 'Handle routine tenant inquiries about rent, lease terms, and building policies autonomously.' },
      { title: 'Maintenance Requests', description: 'Log maintenance issues with details and urgency level, routing emergencies immediately.' },
      { title: 'Showing Scheduling', description: 'Let prospective tenants book property viewings through your integrated calendar.' },
      { title: 'Owner Notifications', description: 'Keep property owners informed with automated summaries of tenant interactions.' },
      { title: 'Multi-Property Support', description: 'One agent handles calls across your entire portfolio with property-specific knowledge.' },
    ],
  },
] as const;

export const TRANSCRIPT_LINES = [
  { speaker: 'agent', text: 'Good morning, thank you for calling Studio Rossi. How can I help you?' },
  { speaker: 'caller', text: "Hi, I'd like to schedule an appointment with Dr. Rossi for next week." },
  { speaker: 'agent', text: "Of course. I can see Dr. Rossi has availability on Tuesday at 10:00 AM or Thursday at 2:30 PM. Which works better for you?" },
  { speaker: 'caller', text: 'Thursday at 2:30 would be perfect.' },
  { speaker: 'agent', text: "Excellent. I've booked Thursday at 2:30 PM for you. You'll receive a confirmation SMS shortly. Is there anything else I can help with?" },
  { speaker: 'caller', text: "No, that's all. Thank you!" },
  { speaker: 'agent', text: "You're welcome. Have a great day!" },
] as const;
