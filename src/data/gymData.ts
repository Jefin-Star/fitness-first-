/**
 * Gym Data & Configuration
 * All contact details, membership fees, operating hours, and leadership credentials
 * are centralized here for easy updates and maintenance.
 */

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  type: 'gym-only' | 'gym-cardio' | 'personal-training' | 'premium-sessions';
  basePrice: number;
  admissionFee: number;
  totalPrice: number;
  monthlyEquivalent?: number;
  savings?: number;
  popular?: boolean;
  features: string[];
  description: string;
}

export interface OperatingHour {
  day: string;
  open: string;
  close: string;
  isOpen: boolean;
  dayIndex: number; // 0 = Sunday, 1 = Monday, etc.
}

export const GYM_CONTACT = {
  name: "Team Fitness First",
  tagline: "Build Your Strength. Transform Your Life.",
  shortName: "TEAM FITNESS FIRST",
  phoneDisplay: "+91 95443 32213",
  phoneRaw: "9544332213",
  whatsappNumber: "9544332213",
  whatsappUrl: "https://wa.me/919544332213",
  email: "melwinpaulbis@gmail.com",
  instagramUrl: "https://www.instagram.com/team_fitness_first_amala?dlrf=dTJieHAyZHd1cG8y",
  instagramHandle: "@team_fitness_first_amala",
  locationName: "Amala, Thrissur, Kerala",
  fullAddress: "Fitness First, Near Amala Nagar, Thrissur, Kerala 680555",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.3895411287904!2d76.17065029999999!3d10.5600098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ec189e0a99f9%3A0x8cc89db8676e17d8!2sFitness%20First!5e1!3m2!1sen!2sin!4v1792077361156!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=Fitness+First+Amala+Thrissur",
  leadership: [
    {
      title: "District Secretary",
      organization: "Bodybuilding and Fitness Association of Thrissur (BBFAT)"
    },
    {
      title: "State Treasurer",
      organization: "Bodybuilding Association of Kerala (BBAK)"
    }
  ],
  certifications: [
    "CCPFT",
    "CCBBC",
    "Skill India Level 4",
    "EREPS Level 4",
    "Junior National Medalist",
    "BBAK State Judge"
  ],
  credentialsList: [
    { label: "CCPFT", full: "Certificate in Comprehensive Personal Fitness Training" },
    { label: "CCBBC", full: "Certificate in Comprehensive Bodybuilding Coaching" },
    { label: "Skill India Level 4", full: "NSDC Certified Fitness Trainer Level 4" },
    { label: "EREPS Level 4", full: "European Register of Exercise Professionals Level 4" },
    { label: "Junior National Medalist", full: "Competitive Bodybuilding Podium Achievement" },
    { label: "BBAK State Judge", full: "Official Bodybuilding Association of Kerala State Judge" }
  ]
};

export const OPERATING_HOURS: OperatingHour[] = [
  { day: "Monday", open: "6:00 AM", close: "9:30 PM", isOpen: true, dayIndex: 1 },
  { day: "Tuesday", open: "6:00 AM", close: "9:30 PM", isOpen: true, dayIndex: 2 },
  { day: "Wednesday", open: "6:00 AM", close: "9:30 PM", isOpen: true, dayIndex: 3 },
  { day: "Thursday", open: "6:00 AM", close: "9:30 PM", isOpen: true, dayIndex: 4 },
  { day: "Friday", open: "6:00 AM", close: "9:30 PM", isOpen: true, dayIndex: 5 },
  { day: "Saturday", open: "6:00 AM", close: "9:30 PM", isOpen: true, dayIndex: 6 },
  { day: "Sunday", open: "Closed", close: "Closed", isOpen: false, dayIndex: 0 },
];

export const MEMBERSHIP_PLANS: PricingPlan[] = [
  // 1 Month Plans
  {
    id: "1m-gym-only",
    name: "1 Month - Gym Only",
    duration: "1 Month",
    type: "gym-only",
    basePrice: 800,
    admissionFee: 1000,
    totalPrice: 1800,
    features: [
      "Full access to Heavy Weight Training Arena",
      "Free Weights & professional dumbbell training zone",
      "Custom routine orientation",
      "One-time admission fee included"
    ],
    description: "Ideal for trying out the facility and kicking off your fitness routine."
  },
  {
    id: "1m-gym-cardio",
    name: "1 Month - Gym + Cardio",
    duration: "1 Month",
    type: "gym-cardio",
    basePrice: 1500,
    admissionFee: 1000,
    totalPrice: 2500,
    features: [
      "Full Gym & Strength Arena Access",
      "High-tech Cardio Conditioning Suite",
      "Treadmills, Ellipticals & Spin Bikes",
      "One-time admission fee included"
    ],
    description: "Complete strength and cardiovascular conditioning for fast results."
  },

  // 3 Months Plans (No Admission Fee)
  {
    id: "3m-gym-only",
    name: "3 Months - Gym Only",
    duration: "3 Months",
    type: "gym-only",
    basePrice: 2000,
    admissionFee: 0,
    totalPrice: 2000,
    monthlyEquivalent: 667,
    savings: 400,
    popular: false,
    features: [
      "NO ADMISSION FEE (Save ₹1,000 instantly)",
      "₹667 / month equivalent",
      "Save ₹400 compared to monthly rate",
      "Full strength & floor access",
      "Workout tracking & form guidance"
    ],
    description: "Consistent 90-day foundation phase to lock in visible muscle definition."
  },
  {
    id: "3m-gym-cardio",
    name: "3 Months - Gym + Cardio",
    duration: "3 Months",
    type: "gym-cardio",
    basePrice: 3750,
    admissionFee: 0,
    totalPrice: 3750,
    monthlyEquivalent: 1250,
    savings: 750,
    popular: true,
    features: [
      "NO ADMISSION FEE (Save ₹1,000 instantly)",
      "₹1,250 / month equivalent",
      "Save ₹750 compared to monthly rate",
      "Unlimited gym floor + cardio machines",
      "Cardio endurance & fat burning routines"
    ],
    description: "Our most popular quarter plan for total body recomposition."
  },

  // 6 Months Plans (No Admission Fee)
  {
    id: "6m-gym-only",
    name: "6 Months - Gym Only",
    duration: "6 Months",
    type: "gym-only",
    basePrice: 3799,
    admissionFee: 0,
    totalPrice: 3799,
    monthlyEquivalent: 633,
    savings: 1001,
    features: [
      "NO ADMISSION FEE",
      "₹633 / month equivalent",
      "Save ₹1,001 compared to monthly rate",
      "Strength progression benchmarks",
      "Continuous equipment updates & access"
    ],
    description: "Serious commitment for dedicated bodybuilders and strength enthusiasts."
  },
  {
    id: "6m-gym-cardio",
    name: "6 Months - Gym + Cardio",
    duration: "6 Months",
    type: "gym-cardio",
    basePrice: 7200,
    admissionFee: 0,
    totalPrice: 7200,
    monthlyEquivalent: 1200,
    savings: 1800,
    features: [
      "NO ADMISSION FEE",
      "₹1,200 / month equivalent",
      "Save ₹1,800 compared to monthly rate",
      "Full multi-discipline access",
      "Cardio VO2 max & conditioning support"
    ],
    description: "Half-year comprehensive transformation package with major savings."
  },

  // 1 Year Plans (No Admission Fee - Best Value)
  {
    id: "1y-gym-only",
    name: "1 Year - Gym Only",
    duration: "1 Year",
    type: "gym-only",
    basePrice: 6999,
    admissionFee: 0,
    totalPrice: 6999,
    monthlyEquivalent: 583,
    savings: 2601,
    popular: false,
    features: [
      "NO ADMISSION FEE",
      "Just ₹583 / month equivalent",
      "Massive ₹2,601 savings vs 12 monthly fees",
      "365 days of elite gym floor access",
      "Priority equipment maintenance & locker access"
    ],
    description: "Ultimate value for continuous year-round strength progression."
  },
  {
    id: "1y-gym-cardio",
    name: "1 Year - Gym + Cardio",
    duration: "1 Year",
    type: "gym-cardio",
    basePrice: 13200,
    admissionFee: 0,
    totalPrice: 13200,
    monthlyEquivalent: 1100,
    savings: 4800,
    popular: true,
    features: [
      "NO ADMISSION FEE",
      "Just ₹1,100 / month equivalent",
      "Huge ₹4,800 savings vs 12 monthly fees",
      "365 days unlimited Gym + Cardio access",
      "Year-long body transformation roadmap"
    ],
    description: "Full year master pass with the highest discount across all categories."
  }
];

export const PERSONAL_TRAINING_PLANS = [
  {
    id: "pt-1m",
    name: "Personal Training - 1 Month",
    duration: "1 Month",
    price: 6000,
    originalPrice: 6000,
    isSpecialOffer: false,
    savings: 0,
    features: [
      "1-on-1 Certified Personal Coach",
      "Customized hypertrophy or weight loss workout plan",
      "Weekly body composition & form analysis",
      "Nutritional blueprint & meal timing guide",
      "Injury prevention & biomechanics instruction"
    ],
    badge: "1-on-1 Coaching"
  },
  {
    id: "pt-3m",
    name: "Personal Training - 3 Months (Special Offer)",
    duration: "3 Months",
    price: 15000,
    originalPrice: 18000,
    isSpecialOffer: true,
    savings: 3000,
    features: [
      "Save ₹3,000 on the 3-Month Transformation Package",
      "Dedicated 1-on-1 personal mentorship",
      "Phase-by-phase progressive overload programming",
      "Macro-calculated nutrition adjustments",
      "Continuous motivation & milestone tracking"
    ],
    badge: "Special Offer · Save ₹3,000"
  }
];

export const PREMIUM_TRAINING_SESSIONS = [
  {
    id: "premium-15",
    name: "Premium Training - 15 Sessions",
    sessions: 15,
    price: 7500,
    perSession: 500,
    features: [
      "15 High-Intensity Private Coaching Sessions",
      "₹500 per dedicated session",
      "Flexible booking around your schedule",
      "Curriculum by state-certified bodybuilding leadership"
    ]
  },
  {
    id: "premium-30",
    name: "Premium Training - 30 Sessions",
    sessions: 30,
    price: 13500,
    perSession: 450,
    popular: true,
    features: [
      "30 High-Intensity Private Coaching Sessions",
      "Discounted to ₹450 per session",
      "Comprehensive biomechanics & posture tuning",
      "Competition preparation or aesthetic sculpting"
    ]
  },
  {
    id: "premium-90",
    name: "Premium Training - 90 Sessions",
    sessions: 90,
    price: 31500,
    perSession: 350,
    features: [
      "90 Complete Master Coaching Sessions",
      "Unmatched ₹350 per session rate",
      "Elite competitive physique mastery",
      "Direct oversight from Association leaders (BBFAT & BBAK)"
    ]
  }
];
