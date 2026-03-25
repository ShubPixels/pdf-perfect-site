import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Compass,
  FileText,
  Globe2,
  MapPin,
  MessageCircle,
  Plane,
  Shield,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const categories = [
  {
    id: "planning",
    name: "Trip Planning",
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
        description: "A simple framework for picking a tour that matches your comfort, pace, and interests.",
        readTime: "5 min read",
        tags: ["Beginner", "Planning"],
        slug: null,
      },
      {
        title: "Best Time to Visit Popular Destinations",
        description: "Season-by-season guidance for choosing the right month, weather, and crowd level.",
        readTime: "8 min read",
        tags: ["Planning", "Seasonal"],
        slug: null,
      },
    ],
  },
  {
    id: "documents",
    name: "Travel Documents",
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
        description: "Understand coverage, claims, and what actually matters before you travel.",
        readTime: "6 min read",
        tags: ["Insurance", "Safety"],
        slug: "/learn/travel-insurance-explained",
      },
      {
        title: "Passport and Visa Guide for Indian Travellers",
        description: "A plain-language overview of timelines, forms, and what to prepare in advance.",
        readTime: "10 min read",
        tags: ["Documents", "Visa"],
        slug: null,
      },
    ],
  },
  {
    id: "packing",
    name: "Packing Tips",
    icon: Plane,
    accent: "text-accent",
    summary: "Pack lighter, smarter, and with fewer last-minute surprises before departure day.",
    articles: [
      {
        title: "Packing light for 10-day tours",
        description: "A traveller-friendly approach to packing efficiently for longer group trips.",
        readTime: "7 min read",
        tags: ["Packing", "Tips"],
        slug: "/lifestyle/packing-light-10-day-tours",
      },
      {
        title: "Ultimate Packing List for Different Climates",
        description: "Know what changes between tropical escapes, cool weather, and layered itineraries.",
        readTime: "6 min read",
        tags: ["Packing", "Essentials"],
        slug: null,
      },
      {
        title: "Carry-on vs Checked Luggage",
        description: "A clearer way to decide what belongs in hand luggage and what can go below.",
        readTime: "5 min read",
        tags: ["Packing", "Flights"],
        slug: null,
      },
    ],
  },
  {
    id: "safety",
    name: "Travel Safety",
    icon: Shield,
    accent: "text-primary",
    summary: "A little preparation goes a long way when you want smoother, safer travel days.",
    articles: [
      {
        title: "Staying Safe While Travelling in Groups",
        description: "Simple habits that help you stay comfortable, aware, and prepared on tour.",
        readTime: "5 min read",
        tags: ["Safety", "Group Travel"],
        slug: null,
      },
      {
        title: "Health Precautions for International Travel",
        description: "Vaccinations, food safety, and smart preventive care before you depart.",
        readTime: "8 min read",
        tags: ["Health", "Safety"],
        slug: null,
      },
      {
        title: "Emergency Contacts and Helplines Abroad",
        description: "What to save before departure so help is easier to access when you need it.",
        readTime: "4 min read",
        tags: ["Emergency", "Planning"],
        slug: null,
      },
    ],
  },
];

const nextSteps = [
  {
    title: "See real traveller stories",
    description: "Browse the stories page for genuine memories, batches, and moments from recent departures.",
    cta: "Explore Stories",
    href: "/stories",
    icon: Compass,
    external: false,
  },
  {
    title: "Talk to the team",
    description: "If you already have a destination in mind, contact Sun Tourism for tailored guidance and support.",
    cta: "Contact Sun Tourism",
    href: "/contact",
    icon: MessageCircle,
    external: false,
  },
  {
    title: "Visit the main tour site",
    description: "Ready to compare departures and itineraries? Head to the official booking website.",
    cta: "Open Tour Site",
    href: "https://suntourismpune.co.in",
    icon: Globe2,
    external: true,
  },
];

const Learn = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-primary/10">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cta/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-highlight/5 blur-3xl" />
      </div>

      <Navigation />

      <main className="relative z-10">
        <section className="container mx-auto px-4 pb-12 pt-20 md:pb-16 md:pt-24">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/30 bg-card/70 p-8 backdrop-blur-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Knowledge Hub</span>
                </div>

                <h1 className="mb-5 font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
                  Travel guidance that feels calm, clear, and actually useful.
                </h1>

                <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  From planning and visa prep to packing and safety, this page brings together
                  the practical advice travellers usually need before a smooth group journey.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-3xl border border-border/30 bg-background/75 p-5">
                  <p className="text-3xl font-bold text-foreground">4</p>
                  <p className="mt-2 text-sm text-muted-foreground">Essential learning tracks for planning better trips.</p>
                </div>
                <div className="rounded-3xl border border-border/30 bg-background/75 p-5">
                  <p className="text-3xl font-bold text-foreground">6+</p>
                  <p className="mt-2 text-sm text-muted-foreground">Published guides already live, with more topics on the way.</p>
                </div>
                <div className="rounded-3xl border border-border/30 bg-background/75 p-5">
                  <p className="text-3xl font-bold text-foreground">1 place</p>
                  <p className="mt-2 text-sm text-muted-foreground">To prepare before your next Sun Tourism departure.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl space-y-6">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <section
                    key={category.id}
                    className="rounded-[2rem] border border-border/30 bg-card/65 p-6 backdrop-blur-sm md:p-8"
                  >
                    <div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                      <div>
                        <div className={`mb-4 inline-flex items-center gap-3 ${category.accent}`}>
                          <Icon className="h-6 w-6" />
                          <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                            {category.name}
                          </span>
                        </div>

                        <h2 className="font-heading text-3xl font-bold text-foreground">
                          {category.name}
                        </h2>
                      </div>

                      <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                        {category.summary}
                      </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                      {category.articles.map((article) => {
                        const content = (
                          <Card
                            className={`group h-full rounded-[1.75rem] border-border/30 bg-background/80 p-6 transition-all duration-300 ${
                              article.slug
                                ? "cursor-pointer hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                                : ""
                            }`}
                          >
                            <div className="mb-4 flex flex-wrap gap-2">
                              {article.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              <Badge
                                className={`rounded-full border-0 text-xs ${
                                  article.slug
                                    ? "bg-primary/10 text-primary"
                                    : "bg-secondary text-muted-foreground"
                                }`}
                              >
                                {article.slug ? "Read Article" : "Coming Soon"}
                              </Badge>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                              {article.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-muted-foreground">
                              {article.description}
                            </p>

                            <div className="mt-6 flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">{article.readTime}</span>
                              {article.slug && (
                                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                                  Read now
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                              )}
                            </div>
                          </Card>
                        );

                        return article.slug ? (
                          <Link key={article.title} to={article.slug}>
                            {content}
                          </Link>
                        ) : (
                          <div key={article.title}>{content}</div>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-highlight/10 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-highlight" />
                  <span className="text-sm font-medium text-highlight">Helpful Next Steps</span>
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Where to go after the reading is done
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {nextSteps.map((item) => {
                  const Icon = item.icon;

                  const card = (
                    <Card className="group h-full rounded-[2rem] border-border/30 bg-card/75 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>

                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                        {item.cta}
                        {item.external ? (
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        ) : (
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        )}
                      </div>
                    </Card>
                  );

                  return item.external ? (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card}
                    </a>
                  ) : (
                    <Link key={item.title} to={item.href}>
                      {card}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Learn;
