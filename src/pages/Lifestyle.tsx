import {
  ArrowRight,
  ArrowUpRight,
  Backpack,
  Camera,
  Coffee,
  Gamepad2,
  Heart,
  ShoppingBag,
  Sparkles,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const featuredReads = [
  {
    title: "5 veg-friendly dishes in Europe",
    subtitle: "A simple food guide for travellers who want flavour without compromise.",
    category: "Food",
    readTime: "4 min read",
    slug: "/lifestyle/veg-friendly-dishes-europe",
    icon: Utensils,
  },
  {
    title: "Fun group games for buses",
    subtitle: "Easy ways to keep long road stretches light, warm, and memorable.",
    category: "Fun",
    readTime: "3 min read",
    slug: "/lifestyle/fun-group-games-buses",
    icon: Gamepad2,
  },
  {
    title: "Packing light for 10-day tours",
    subtitle: "Pack with more clarity so the journey feels easier from day one.",
    category: "Tips",
    readTime: "7 min read",
    slug: "/lifestyle/packing-light-10-day-tours",
    icon: Backpack,
  },
];

const lifestyleThemes = [
  {
    icon: Utensils,
    title: "Food and Culture",
    description: "Discover how meals, markets, and local flavours become some of the strongest memories on tour.",
  },
  {
    icon: Camera,
    title: "Photos and Memory-Making",
    description: "Think beyond snapshots and capture the small emotional moments that make a trip unforgettable.",
  },
  {
    icon: Heart,
    title: "Comfort and Wellness",
    description: "Travel better with habits that keep your energy, rhythm, and ease intact on busy itineraries.",
  },
  {
    icon: ShoppingBag,
    title: "Souvenirs and Street Finds",
    description: "Learn what makes a purchase feel meaningful instead of just another thing in the suitcase.",
  },
  {
    icon: Coffee,
    title: "Slow Travel Rituals",
    description: "From a morning walk to an evening tea stop, small rituals shape how a journey feels in hindsight.",
  },
  {
    icon: Sparkles,
    title: "Special Group Moments",
    description: "The laughter, shared celebrations, and unexpected conversations that keep groups connected.",
  },
];

const inspirationNotes = [
  {
    title: "Meeting locals changes the trip",
    description: "Even a short conversation can turn a sightseeing day into a real story you remember for years.",
  },
  {
    title: "The best photos are rarely the perfect ones",
    description: "Candid laughter, shared meals, and quiet pauses often carry more feeling than posed frames.",
  },
  {
    title: "Comfort matters more than overpacking",
    description: "Travellers enjoy more when luggage is lighter, mornings are easier, and the day starts calmly.",
  },
  {
    title: "Food is one of the fastest ways to connect",
    description: "Trying a local dish or finding a vegetarian favourite can become the highlight of the entire day.",
  },
  {
    title: "Group energy shapes the journey",
    description: "The right people make the bus ride, the tea stop, and the sightseeing day feel richer and warmer.",
  },
  {
    title: "Travel style is part of the memory",
    description: "How we move, pause, eat, and notice things often matters just as much as where we go.",
  },
];

const Lifestyle = () => {
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
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Travel Lifestyle</span>
                </div>

                <h1 className="mb-5 font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
                  The softer side of travel deserves a place on the site too.
                </h1>

                <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  This page is about the feeling of travel - what we eat, how we pack, what we
                  notice, and the little rituals that turn a tour into a memory worth keeping.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-3xl border border-border/30 bg-background/75 p-5">
                  <p className="text-3xl font-bold text-foreground">3</p>
                  <p className="mt-2 text-sm text-muted-foreground">Published lifestyle reads already live on the site.</p>
                </div>
                <div className="rounded-3xl border border-border/30 bg-background/75 p-5">
                  <p className="text-3xl font-bold text-foreground">6</p>
                  <p className="mt-2 text-sm text-muted-foreground">Travel-life themes that shape how journeys actually feel.</p>
                </div>
                <div className="rounded-3xl border border-border/30 bg-background/75 p-5">
                  <p className="text-3xl font-bold text-foreground">Real</p>
                  <p className="mt-2 text-sm text-muted-foreground">Insights inspired by group travel, not generic content filler.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-accent">Featured Reads</p>
                  <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                    Lifestyle stories already worth opening
                  </h2>
                </div>

                <Button asChild variant="outline" className="hidden rounded-full px-6 md:inline-flex">
                  <Link to="/stories">See Traveller Stories</Link>
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {featuredReads.map((article, index) => {
                  const Icon = article.icon;

                  return (
                    <Link key={article.title} to={article.slug}>
                      <Card className="group h-full rounded-[2rem] border-border/30 bg-card/75 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                        <div className="mb-6 flex items-start justify-between">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <Badge variant="secondary" className="rounded-full">
                            {article.category}
                          </Badge>
                        </div>

                        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">
                          Feature {index + 1}
                        </p>
                        <h3 className="text-2xl font-semibold leading-snug text-foreground">
                          {article.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {article.subtitle}
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{article.readTime}</span>
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                            Open article
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/30 bg-card/65 p-6 backdrop-blur-sm md:p-8">
              <div className="mb-8 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-accent">Travel Moods</p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  The themes that give a trip its personality
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {lifestyleThemes.map((theme) => {
                  const Icon = theme.icon;

                  return (
                    <Card
                      key={theme.title}
                      className="h-full rounded-[1.75rem] border-border/30 bg-background/80 p-6"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{theme.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {theme.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.25em] text-accent">Fresh Inspiration</p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Small observations that make travel feel richer
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {inspirationNotes.map((note) => (
                  <Card
                    key={note.title}
                    className="rounded-[1.75rem] border-border/30 bg-card/75 p-6 backdrop-blur-sm"
                  >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5">
                      <Sparkles className="h-4 w-4 text-highlight" />
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        Travel note
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold leading-snug text-foreground">{note.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{note.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-border/30 bg-card/75 p-8 text-center backdrop-blur-sm md:p-12">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Keep Exploring</span>
              </div>

              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Want the real memories behind these travel moments?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                Browse the Stories page for real traveller galleries, or contact the team if you
                are ready to plan a journey of your own.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild className="rounded-full px-6">
                  <Link to="/stories">
                    Explore Stories
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6">
                  <Link to="/contact">
                    Contact Sun Tourism
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Lifestyle;
