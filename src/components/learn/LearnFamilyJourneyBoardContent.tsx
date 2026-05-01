import { ArrowRight, HeartHandshake, Star } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  learnCategories,
  learnHero,
  learnNextSteps,
  learnTotalArticles,
  learnTotalTracks,
} from "@/data/learn-content";

const zoneClasses = [
  "border-primary/20 bg-primary/5",
  "border-highlight/20 bg-highlight/5",
  "border-accent/20 bg-accent/5",
  "border-primary/20 bg-primary/5",
  "border-accent/20 bg-accent/5",
];

export const LearnFamilyJourneyBoardContent = () => {
  return (
    <>
      <section className="container mx-auto px-4 pb-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/50 bg-card p-8 shadow-xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-highlight/10 px-4 py-2">
                <HeartHandshake className="h-4 w-4 text-highlight" />
                <span className="text-sm font-medium text-highlight">Easy before-tour reading</span>
              </div>

              <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
                Travel advice that feels welcoming, not overwhelming.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {learnHero.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[1.5rem] border border-border/60 bg-secondary/60 p-5">
                <p className="text-2xl font-semibold text-foreground">
                  {learnTotalTracks} easy zones
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Clear topic areas so visitors know where to start.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-border/60 bg-secondary/60 p-5">
                <p className="text-2xl font-semibold text-foreground">{learnTotalArticles} guides</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Practical reads for planning, documents, packing, and safety.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-border/60 bg-secondary/60 p-5">
                <p className="text-2xl font-semibold text-foreground">Easy to follow</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Clear, supportive guidance from the first planning step to departure day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="mx-auto max-w-6xl space-y-7">
          {learnCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <section
                key={category.id}
                className={`rounded-[2rem] border p-6 shadow-xl md:p-8 ${zoneClasses[index % zoneClasses.length]}`}
              >
                <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-card/80 px-4 py-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                        {category.eyebrow}
                      </span>
                    </div>
                    <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                      {category.name}
                    </h2>
                  </div>

                  <div className="max-w-xl rounded-[1.5rem] bg-card/80 p-4">
                    <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      <Star className="h-4 w-4" />
                      What you will learn here
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground md:text-base">
                      {category.summary}
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {category.articles.map((article, articleIndex) => (
                    <Link key={article.title} to={article.slug}>
                      <Card className="group h-full rounded-[1.75rem] border-border/40 bg-card/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                        <div className="mb-4 flex flex-wrap gap-2">
                          <Badge className="rounded-full border-0 bg-primary/10 text-primary">
                            {articleIndex === 0 ? "Best place to start" : "Easy guide"}
                          </Badge>
                          {article.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <h3 className="text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                          {article.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                          {article.description}
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{article.readTime}</span>
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                            Read guide
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/50 bg-card p-6 shadow-xl md:p-8">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-highlight">
                Keep Going
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground">
                Helpful after-reading actions
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
              Clear next steps keep the page supportive and easy to act on after the reading is done.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {learnNextSteps.map((item) => {
              const Icon = item.icon;
              const content = (
                <Card className="group h-full rounded-[1.75rem] border-border/50 bg-secondary/35 p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-card">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    {item.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              );

              return item.external ? (
                <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <Link key={item.title} to={item.href}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
