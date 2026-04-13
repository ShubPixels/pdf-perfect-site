import {
  Compass,
  FileText,
  Globe2,
  type LucideIcon,
  MapPin,
  MessageCircle,
  Plane,
  Shield,
  Sparkles,
} from "lucide-react";

export interface LearnArticle {
  title: string;
  description: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export interface LearnCategory {
  id: string;
  name: string;
  eyebrow: string;
  icon: LucideIcon;
  accent: string;
  summary: string;
  articles: LearnArticle[];
}

export interface LearnNextStep {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
}

export interface LearnReviewOption {
  id: "option-1" | "option-2" | "option-3" | "option-4";
  shortLabel: string;
  title: string;
  summary: string;
  href: string;
}

export const learnHero = {
  badge: "Knowledge Hub",
  title: "Travel guidance that feels calm, clear, and actually useful.",
  description:
    "From planning and visa prep to packing and safety, this page brings together the practical advice travellers usually need before a smooth group journey.",
};

export const learnCategories: LearnCategory[] = [
  {
    id: "planning",
    name: "Trip Planning",
    eyebrow: "Pace, season, and fit",
    icon: MapPin,
    accent: "text-primary",
    summary: "Start with the right pace, season, and structure before you book the journey.",
    articles: [
      {
        title: "First-time Europe traveller? Start here",
        description: "Everything you need to know before your first European adventure.",
        readTime: "8 min read",
        tags: ["Beginner", "Europe", "Guide"],
        slug: "/learn/first-time-europe-traveler",
      },
      {
        title: "How to Choose Your First Group Tour",
        description:
          "A simple framework for picking a tour that matches your comfort, pace, and interests.",
        readTime: "5 min read",
        tags: ["Beginner", "Planning"],
        slug: "/learn/how-to-choose-your-first-group-tour",
      },
      {
        title: "Best Time to Visit Popular Destinations",
        description:
          "Season-by-season guidance for choosing the right month, weather, and crowd level.",
        readTime: "8 min read",
        tags: ["Planning", "Seasonal"],
        slug: "/learn/best-time-to-visit-popular-destinations",
      },
    ],
  },
  {
    id: "documents",
    name: "Travel Documents",
    eyebrow: "Passports, visas, and paperwork",
    icon: FileText,
    accent: "text-highlight",
    summary: "Keep passports, visas, and travel paperwork stress-free with a clearer checklist.",
    articles: [
      {
        title: "Visa documents checklist",
        description: "A practical checklist for assembling documents before your visa appointment.",
        readTime: "5 min read",
        tags: ["Documents", "Checklist"],
        slug: "/learn/visa-documents-checklist",
      },
      {
        title: "Travel insurance explained",
        description:
          "Understand coverage, claims, and what actually matters before you travel.",
        readTime: "6 min read",
        tags: ["Insurance", "Safety"],
        slug: "/learn/travel-insurance-explained",
      },
      {
        title: "Passport and Visa Guide for Indian Travellers",
        description:
          "A plain-language overview of timelines, forms, and what to prepare in advance.",
        readTime: "10 min read",
        tags: ["Documents", "Visa"],
        slug: "/learn/passport-and-visa-guide-indian-travellers",
      },
    ],
  },
  {
    id: "packing",
    name: "Packing Tips",
    eyebrow: "Bags, layers, and essentials",
    icon: Plane,
    accent: "text-accent",
    summary: "Pack lighter, smarter, and with fewer last-minute surprises before departure day.",
    articles: [
      {
        title: "Packing light for 10-day tours",
        description:
          "A traveller-friendly approach to packing efficiently for longer group trips.",
        readTime: "7 min read",
        tags: ["Packing", "Tips"],
        slug: "/learn/packing-light-10-day-tours",
      },
      {
        title: "Ultimate Packing List for Different Climates",
        description:
          "Know what changes between tropical escapes, cool weather, and layered itineraries.",
        readTime: "6 min read",
        tags: ["Packing", "Essentials"],
        slug: "/learn/ultimate-packing-list-for-different-climates",
      },
      {
        title: "Carry-on vs Checked Luggage",
        description:
          "A clearer way to decide what belongs in hand luggage and what can go below.",
        readTime: "5 min read",
        tags: ["Packing", "Flights"],
        slug: "/learn/carry-on-vs-checked-luggage",
      },
    ],
  },
  {
    id: "safety",
    name: "Travel Safety",
    eyebrow: "Awareness, health, and support",
    icon: Shield,
    accent: "text-primary",
    summary: "A little preparation goes a long way when you want smoother, safer travel days.",
    articles: [
      {
        title: "Staying Safe While Travelling in Groups",
        description:
          "Simple habits that help you stay comfortable, aware, and prepared on tour.",
        readTime: "5 min read",
        tags: ["Safety", "Group Travel"],
        slug: "/learn/staying-safe-while-travelling-in-groups",
      },
      {
        title: "Health Precautions for International Travel",
        description:
          "Vaccinations, food safety, and smart preventive care before you depart.",
        readTime: "8 min read",
        tags: ["Health", "Safety"],
        slug: "/learn/health-precautions-for-international-travel",
      },
      {
        title: "Emergency Contacts and Helplines Abroad",
        description:
          "What to save before departure so help is easier to access when you need it.",
        readTime: "4 min read",
        tags: ["Emergency", "Planning"],
        slug: "/learn/emergency-contacts-and-helplines-abroad",
      },
    ],
  },
  {
    id: "on-tour",
    name: "On-Tour Comfort",
    eyebrow: "Food, rhythm, and comfort",
    icon: Sparkles,
    accent: "text-accent",
    summary:
      "Add lighter reads on food, group rhythm, and the small details that make journeys feel easier.",
    articles: [
      {
        title: "5 veg-friendly dishes in Europe",
        description:
          "A simple food guide for travellers who want flavour, comfort, and easy vegetarian choices abroad.",
        readTime: "4 min read",
        tags: ["Food", "Europe"],
        slug: "/learn/veg-friendly-dishes-europe",
      },
      {
        title: "Fun group games for buses",
        description:
          "Easy ideas to keep long road stretches warmer, more social, and more memorable.",
        readTime: "3 min read",
        tags: ["Group Travel", "Fun"],
        slug: "/learn/fun-group-games-buses",
      },
    ],
  },
];

export const learnNextSteps: LearnNextStep[] = [
  {
    title: "See real traveller stories",
    description:
      "Browse the stories page for genuine memories, batches, and moments from recent departures.",
    cta: "Explore Stories",
    href: "/stories",
    icon: Compass,
    external: false,
  },
  {
    title: "Talk to the team",
    description:
      "If you already have a destination in mind, contact Sun Tourism for tailored guidance and support.",
    cta: "Contact Sun Tourism",
    href: "/contact",
    icon: MessageCircle,
    external: false,
  },
  {
    title: "Visit the main tour site",
    description:
      "Ready to compare departures and itineraries? Head to the official booking website.",
    cta: "Open Tour Site",
    href: "https://suntourismpune.co.in",
    icon: Globe2,
    external: true,
  },
];

export const learnReviewOptions: LearnReviewOption[] = [
  {
    id: "option-1",
    shortLabel: "Option 1",
    title: "Warm Guidance Chapters",
    summary:
      "Chapter-based sections with alternating bands, stronger separation, and a more trustworthy family-friendly reading rhythm.",
    href: "/learn-review/option-1",
  },
  {
    id: "option-2",
    shortLabel: "Option 2",
    title: "Travel Handbook Layout",
    summary:
      "A structured handbook with a sticky table of contents, cleaner dividers, and more authoritative article rows.",
    href: "/learn-review/option-2",
  },
  {
    id: "option-3",
    shortLabel: "Option 3",
    title: "Family-Friendly Journey Board",
    summary:
      "Welcoming color-zoned sections, simple guidance labels, and softer cues designed for broad audience comfort.",
    href: "/learn-review/option-3",
  },
  {
    id: "option-4",
    shortLabel: "Option 4",
    title: "Modern Editorial Feature Page",
    summary:
      "Sharper hierarchy, featured stories, and a more contemporary magazine-style reading experience.",
    href: "/learn-review/option-4",
  },
];

export const learnReviewChecklist = [
  "Can you tell where one category ends and the next begins within 5 seconds?",
  "Does the page feel trustworthy and easy for first-time or older travellers?",
  "Can you quickly spot what to read first?",
  "Do the article groups feel clearer on mobile and desktop?",
  "Does the CTA hierarchy feel supportive rather than distracting?",
];

export const learnReviewScoreLabels = [
  "Clarity",
  "Trust",
  "Warmth",
  "Ease of navigation",
  "Article discoverability",
  "Mobile friendliness",
];

export const learnTotalTracks = learnCategories.length;
export const learnTotalArticles = learnCategories.reduce(
  (count, category) => count + category.articles.length,
  0,
);

export const learnHeroStats = [
  {
    value: String(learnTotalTracks),
    description:
      "Practical learning tracks for planning, paperwork, packing, safety, and on-tour comfort.",
  },
  {
    value: String(learnTotalArticles),
    description:
      "Clickable guides now available across planning, packing, documents, safety, and lighter travel reads.",
  },
  {
    value: "1 place",
    description: "To prepare before your next Sun Tourism departure.",
  },
];
