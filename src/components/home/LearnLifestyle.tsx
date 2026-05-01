import {
  ArrowRight,
  Backpack,
  BookOpen,
  Compass,
  FileText,
  Gamepad2,
  Shield,
  Sparkles,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const learningTracks = [
  {
    title: "Trip Planning",
    description: "Pick the right destination, season, and travel pace before you book.",
    icon: Compass,
  },
  {
    title: "Travel Documents",
    description: "Prepare visas, passports, and insurance with less last-minute stress.",
    icon: FileText,
  },
  {
    title: "Packing & Comfort",
    description: "Pack lighter, move easier, and travel with more confidence.",
    icon: Backpack,
  },
  {
    title: "On-Tour Tips",
    description: "Food, group rhythm, and small details that make journeys feel better.",
    icon: Sparkles,
  },
  {
    title: "Travel Safety",
    description: "Simple precautions that help every departure feel calmer and smoother.",
    icon: Shield,
  },
];

const featuredRead = {
  title: "First-time Europe traveller? Start here",
  description: "A calm starting point for travellers who want clearer planning before their first big international journey.",
  category: "Guide",
  readTime: "8 min read",
  slug: "/learn/first-time-europe-traveler",
  icon: Compass,
};

const supportingReads = [
  {
    title: "Visa documents checklist",
    description: "A clearer paperwork checklist for applications, appointments, and travel prep.",
    category: "Documents",
    readTime: "5 min read",
    slug: "/learn/visa-documents-checklist",
    icon: FileText,
  },
  {
    title: "Packing light for 10-day tours",
    description: "Travel with less baggage and a lot more day-to-day ease.",
    category: "Packing",
    readTime: "7 min read",
    slug: "/learn/packing-light-10-day-tours",
    icon: Backpack,
  },
  {
    title: "Fun group games for buses",
    description: "Easy ideas that keep long travel stretches warm, social, and memorable.",
    category: "On Tour",
    readTime: "3 min read",
    slug: "/learn/fun-group-games-buses",
    icon: Gamepad2,
  },
  {
    title: "5 veg-friendly dishes in Europe",
    description: "Helpful food inspiration for travellers who want simpler vegetarian choices abroad.",
    category: "Food",
    readTime: "4 min read",
    slug: "/learn/veg-friendly-dishes-europe",
    icon: Utensils,
  },
];

export const LearnLifestyle = () => {
  const FeaturedIcon = featuredRead.icon;

  return (
    <section className="relative overflow-hidden py-24 scroll-mt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-highlight/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Knowledge Hub</span>
            </div>

            <h2 className="mb-6 text-4xl font-heading font-bold text-foreground md:text-5xl">
              Learn <span className="text-muted-foreground">&bull;</span> Plan{" "}
              <span className="text-muted-foreground">&bull;</span>{" "}
              <span className="text-accent">Enjoy</span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              One place for practical travel guidance, lighter on-tour reads, and
              the kind of advice that makes a journey feel easier before it begins.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="rounded-[32px] border border-border/30 bg-gradient-to-br from-card/90 via-card/75 to-highlight/10 p-6 shadow-xl backdrop-blur-sm md:p-8">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="max-w-xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-medium">Travel Smarter</span>
                  </div>

                  <h3 className="text-3xl font-heading font-bold text-foreground">
                    Learn page, now with the useful lighter reads folded in.
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                    We&apos;ve combined planning, paperwork, packing, safety, food,
                    and on-tour tips into one cleaner reading flow, so visitors get
                    a more focused content experience in one place.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {learningTracks.map((track) => {
                  const TrackIcon = track.icon;

                  return (
                    <div
                      key={track.title}
                      className="flex items-start gap-4 rounded-[24px] border border-border/30 bg-background/75 p-4 shadow-xl"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <TrackIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{track.title}</h4>
                        <p className="mt-1 text-sm leading-7 text-muted-foreground">
                          {track.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button asChild className="mt-8 rounded-full px-6 group">
                <Link to="/learn">
                  Explore Learn
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </article>

            <div className="space-y-4">
              <Link to={featuredRead.slug} className="block group">
                <Card className="rounded-[28px] border-border/30 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <FeaturedIcon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {featuredRead.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{featuredRead.readTime}</span>
                      </div>

                      <h3 className="text-2xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                        {featuredRead.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                        {featuredRead.description}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                        Read article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>

              <div className="grid gap-4 sm:grid-cols-2">
                {supportingReads.map((article) => {
                  const ArticleIcon = article.icon;

                  return (
                    <Link key={article.title} to={article.slug} className="block group">
                      <Card className="h-full rounded-[24px] border-border/30 bg-card/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-md">
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                            <ArticleIcon className="h-5 w-5" />
                          </div>
                          <span className="text-xs text-muted-foreground">{article.readTime}</span>
                        </div>

                        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
                          {article.category}
                        </span>

                        <h4 className="mt-4 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                          {article.title}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {article.description}
                        </p>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
