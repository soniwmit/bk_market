export interface BusinessDetails {
  name: string;
  tagline: string;
  category: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  whatsapp: string;
  email: string;
  googleMapEmbedUrl: string;
  googleMapDirectionsUrl: string;
  workingHours: {
    days: string;
    timing: string;
    is24x7Emergency: boolean;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    whatsapp: string;
  };
}

export const BUSINESS_INFO: BusinessDetails = {
  name: "BK MARKET",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Pharmacy / Retail & Wholesale Medical Store",
  address: "Saedia Madarsa Rd, Paliganj, Bihar 801110",
  landmark: "Near Saedia Madarsa, Main Market Road",
  city: "Paliganj",
  state: "Bihar",
  pincode: "801110",
  phone: "9507424946",
  whatsapp: "9507424946",
  email: "contact@bkmarketpharmacy.com",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14435.390886025213!2d84.7865!3d25.3524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d249f05555555%3A0x1234567890abcdef!2sSaedia%20Madarsa%20Rd%2C%20Paliganj%2C%20Bihar%20801110!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapDirectionsUrl: "https://maps.google.com/?q=Saedia+Madarsa+Rd,+Paliganj,+Bihar+801110",
  workingHours: {
    days: "Monday - Sunday (Open All 7 Days)",
    timing: "7:30 AM - 10:00 PM",
    is24x7Emergency: true
  },
  socials: {
    facebook: "https://facebook.com/bkmarketpharmacy",
    instagram: "https://instagram.com/bkmarketpharmacy",
    whatsapp: "https://wa.me/919507424946"
  }
};

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  items: string[];
  featured: boolean;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines",
    iconName: "Pill",
    shortDesc: "100% genuine prescribed drugs from WHO-GMP certified pharmaceutical brands.",
    fullDesc: "We stock authentic prescription drugs across cardiac, diabetic, antibiotic, neurological, gastroenterology, and specialty treatments directly procured from trusted distributors.",
    badge: "100% Genuine",
    items: [
      "Antibiotics & Antibacterials",
      "Diabetic & Cardiac Care Drugs",
      "Hypertension & Thyroid Management",
      "Pain Killers & Anti-Inflammatory",
      "Pediatric & Gynecological Medicines"
    ],
    featured: true
  },
  {
    id: "otc-medicines",
    title: "OTC & Daily Essentials",
    iconName: "ShieldCheck",
    shortDesc: "Over-the-counter remedies for fever, cold, acidity, digestion, and pain relief.",
    fullDesc: "Immediate access to daily wellness medications, cough syrups, pain balms, antacids, digestive enzymes, oral rehydration solutions, and first-aid essentials.",
    badge: "Instant Access",
    items: [
      "Fever & Antipyretic Tablets",
      "Cold, Cough & Allergy Syrups",
      "Antacids & Digestives",
      "First Aid Sprays & Ointments",
      "Oral Rehydration Salts (ORS)"
    ],
    featured: true
  },
  {
    id: "health-devices",
    title: "Health & Diagnostic Devices",
    iconName: "Activity",
    shortDesc: "Digital BP monitors, blood glucose meters, pulse oximeters, and nebulizers.",
    fullDesc: "Empowering homes in Paliganj with reliable digital health monitoring equipment backed by warranty and user instruction guidance.",
    badge: "Certified Devices",
    items: [
      "Digital BP Monitors (Omron/Dr.Morepen)",
      "Glucometers & Test Strips",
      "Pulse Oximeters & Thermometers",
      "Compressor Nebulizers & Inhalers",
      "Vaporizers & Heating Pads"
    ],
    featured: true
  },
  {
    id: "baby-care",
    title: "Baby Care & Mother Wellness",
    iconName: "HeartPulse",
    shortDesc: "Infant nutrition, gentle baby soaps, lotion, diapers, and maternal care products.",
    fullDesc: "Complete baby care line featuring Himalaya, Johnson's Baby, Sebamed, Pampers, Lactogen, and Similac for healthy infant growth.",
    badge: "Dermatologist Tested",
    items: [
      "Baby Diapers & Wet Wipes",
      "Infant Formula & Cereals",
      "Baby Skincare Lotions & Oils",
      "Sippy Cups & Teethers",
      "Maternal Nutritional Drinks"
    ],
    featured: true
  },
  {
    id: "medical-equipment",
    title: "Medical & Surgical Supplies",
    iconName: "Stethoscope",
    shortDesc: "Dressings, bandages, syringes, IV sets, gloves, and surgical instruments.",
    fullDesc: "Serving local clinics, doctors, and home patients with sterilized surgical accessories, disposable syringes, gauze rolls, and orthopedic supports.",
    badge: "Sterilized Stock",
    items: [
      "Cotton Rolls & Sterile Gauze",
      "Crepe Bandages & Micropore Tape",
      "Disposable Syringes & Needles",
      "Surgical Gloves & Face Masks",
      "Knee Caps & Lumbar Belts"
    ],
    featured: true
  },
  {
    id: "supplements-nutrition",
    title: "Supplements & Energy Boosters",
    iconName: "Sparkles",
    shortDesc: "Multivitamins, calcium, protein powders, immunity boosters, and health drinks.",
    fullDesc: "Boost your daily vitality with certified dietary supplements, protein powders, calcium-D3 boosters, and herbal immunity formulations.",
    badge: "FSSAI Approved",
    items: [
      "Daily Multivitamin Capsules",
      "Calcium & Vitamin D3 Supplements",
      "Whey & Herbal Protein Powders",
      "Glucose & Electrolyte Drinks",
      "Chyawanprash & Herbal Tonics"
    ],
    featured: true
  },
  {
    id: "home-care-hygiene",
    title: "Home Hygiene & Sanitation",
    iconName: "Sparkles",
    shortDesc: "Antiseptics, hand sanitizers, surface disinfectants, and wellness hygiene.",
    fullDesc: "Keep your family safe with top-tier antiseptic solutions, hand hygiene gels, surface cleaners, and personal protection supplies.",
    badge: "Max Protection",
    items: [
      "Antiseptic Liquids (Dettol/Savlon)",
      "Alcohol Hand Sanitizers",
      "Sterile Alcohol Swabs",
      "Disinfectant Surface Sprays",
      "Hygiene Face Shields"
    ],
    featured: false
  },
  {
    id: "personal-dermatology",
    title: "Personal Care & Skincare",
    iconName: "Smile",
    shortDesc: "Dermatological creams, sunscreens, medicated soaps, and hair care.",
    fullDesc: "Medicated lotions, moisturizing creams, anti-dandruff shampoos, acne care cleansers, and oral care solutions.",
    badge: "Skin Care",
    items: [
      "Medicated Soaps & Face Washes",
      "Anti-Fungal Creams & Powders",
      "Sunscreen Lotions & Moisturizers",
      "Oral Care Mouthwashes & Pastes",
      "Anti-Dandruff Shampoos"
    ],
    featured: false
  }
];

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verifiedOrder: boolean;
}

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Ramesh Kumar Singh",
    location: "Paliganj Main Market",
    rating: 5,
    date: "12 days ago",
    comment: "BK MARKET is the most reliable pharmacy on Saedia Madarsa Road. They always have genuine medicines and the WhatsApp order delivery service is very fast for elderly parents.",
    verifiedOrder: true
  },
  {
    id: "rev-2",
    name: "Dr. Anjali Verma",
    location: "Paliganj Sub-Division",
    rating: 5,
    date: "3 weeks ago",
    comment: "Excellent inventory of prescription cardiac & diabetic drugs. The store staff is polite, knowledgeable, and maintains high standards of hygiene and drug storage.",
    verifiedOrder: true
  },
  {
    id: "rev-3",
    name: "Sunil Sharma",
    location: "Mahabalipur Rd, Paliganj",
    rating: 5,
    date: "1 month ago",
    comment: "I bought an Omron BP Monitor and diabetic glucometer here. They demonstrated how to use the device patiently and provided original tax invoice with manufacturer warranty.",
    verifiedOrder: true
  },
  {
    id: "rev-4",
    name: "Pooja Kumari",
    location: "Paliganj Bazar",
    rating: 5,
    date: "2 months ago",
    comment: "Great place for baby care products and diapers. Prices are very fair compared to other shops and they accept UPI payments easily.",
    verifiedOrder: true
  }
];

export interface FAQ {
  question: string;
  answer: string;
  category: "Orders" | "Medicines" | "Store" | "Delivery";
}

export const FAQS: FAQ[] = [
  {
    question: "How can I order medicines via WhatsApp from BK MARKET?",
    answer: "Simply click on our 'WhatsApp Order' button, fill out your name, address, and medicine list, or upload a clear photo of your prescription. Our team in Paliganj will confirm stock instantly and dispatch your order.",
    category: "Orders"
  },
  {
    question: "Are all medicines at BK MARKET authentic and genuine?",
    answer: "Yes, 100%. BK MARKET directly sources all medications from authorized pharmaceutical distributors and WHO-GMP certified manufacturers. We do not compromise on quality or batch expiry checks.",
    category: "Medicines"
  },
  {
    question: "What are the store operating hours at Saedia Madarsa Rd, Paliganj?",
    answer: "Our medical store is open every day (Monday to Sunday) from 7:30 AM to 10:00 PM. We also offer emergency assistance for urgent life-saving prescriptions.",
    category: "Store"
  },
  {
    question: "Do you deliver home medicine orders in nearby areas around Paliganj?",
    answer: "Yes, we offer fast doorstep delivery across Paliganj town and surrounding local areas upon receiving valid WhatsApp requests or phone inquiries.",
    category: "Delivery"
  },
  {
    question: "Is a doctor prescription compulsory for buying medicines?",
    answer: "Prescription is compulsory for Schedule H and Schedule H1 drugs (such as antibiotics, psychotropics, and cardiac drugs) to ensure patient safety. OTC products do not require a prescription.",
    category: "Medicines"
  },
  {
    question: "What payment options are accepted at BK MARKET?",
    answer: "We accept Cash, PhonePe, Google Pay, Paytm, UPI QR scanning, and major Debit/Credit cards.",
    category: "Store"
  }
];

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
}

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: "tip-1",
    title: "Essential Tips for Storing Medicines Safely at Home",
    category: "Medicine Safety",
    date: "July 24, 2026",
    readTime: "3 min read",
    summary: "Improper humidity and temperature can diminish medicine effectiveness. Learn simple storage rules for your family.",
    content: "Store medicines in a cool, dry place away from direct sunlight and bathroom moisture. Keep syrups tightly closed and refrigerate insulin or vaccines as directed.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tip-2",
    title: "How to Accurately Monitor Blood Pressure at Home",
    category: "Device Guide",
    date: "July 15, 2026",
    readTime: "4 min read",
    summary: "Getting accurate digital BP readings requires correct cuff placement, sitting position, and resting before measurement.",
    content: "Rest silently for 5 minutes before taking readings. Keep arm supported at heart level. Take two readings 1 minute apart and record the average.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tip-3",
    title: "Understanding Antibiotic Resistance & Responsible Usage",
    category: "Health Awareness",
    date: "July 02, 2026",
    readTime: "5 min read",
    summary: "Stopping antibiotics early or using them for viral colds harms your immunity. Always complete the full prescribed dose.",
    content: "Antibiotics work against bacteria, not viral infections like seasonal flu. Always take antibiotics under a doctor's guidance and finish the complete course.",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80"
  }
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Store View" | "Medicine Shelves" | "Health Devices" | "Baby Care" | "Equipment";
  imageUrl: string;
  caption: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "BK MARKET Front Entrance",
    category: "Store View",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80",
    caption: "Clean, brightly lit store counter located at Saedia Madarsa Rd, Paliganj."
  },
  {
    id: "gal-2",
    title: "Organized Prescription Medicine Counter",
    category: "Medicine Shelves",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80",
    caption: "Temperature-controlled pharmaceutical racks managed by qualified medical staff."
  },
  {
    id: "gal-3",
    title: "Health & Diagnostic Monitoring Section",
    category: "Health Devices",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    caption: "Latest certified digital blood pressure monitors, glucometers, and oximeters."
  },
  {
    id: "gal-4",
    title: "Baby Care & Infant Nutrition Display",
    category: "Baby Care",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80",
    caption: "Complete assortment of dermatological baby products, diapers, and nutrition."
  },
  {
    id: "gal-5",
    title: "Surgical Dressings & Home Care Supplies",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1000&q=80",
    caption: "Sterile surgical kits, bandages, masks, syringes, and first-aid supplies."
  },
  {
    id: "gal-6",
    title: "Wellness & Nutritional Supplements Counter",
    category: "Store View",
    imageUrl: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=1000&q=80",
    caption: "Wide range of vitamin supplements, immunity boosters, and health drinks."
  }
];

export const TIMELINE_EVENTS = [
  {
    year: "Established",
    title: "Foundation of BK MARKET",
    description: "Started with a vision to make genuine, affordable medicines easily accessible to every family in Paliganj and surrounding rural regions."
  },
  {
    year: "Expansion",
    title: "Cold-Chain & Health Devices Integration",
    description: "Upgraded store infrastructure with specialized medical refrigeration and brought branded digital diagnostic equipment to local residents."
  },
  {
    year: "Digital Age",
    title: "Instant WhatsApp Medicine Delivery",
    description: "Launched dedicated WhatsApp order fulfillment to enable senior citizens and rural patients to order home delivery effortlessly."
  },
  {
    year: "Present",
    title: "Paliganj's Most Trusted Pharmacy",
    description: "Serving over 5,000+ satisfied families with 100% genuine healthcare products, surgical goods, and professional consultation."
  }
];
