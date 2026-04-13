import { ArrowRight, Bookmark, BookOpenText } from "lucide-react";
import { Link } from "react-router-dom";

import { LearnReviewShell } from "@/components/learn-review/LearnReviewShell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  learnCategories,
  learnHero,
  learnHeroStats,
  learnNextSteps,
} from "@/data/learn-content";

const Option2TravelHandbook = () => {
  return (
    <LearnReviewShell
      optionLabel="Option 2"
      optionTitle="Travel Handbook Layout"
      optionSummary="A more practical, guidebook-like direction with a sticky contents rail, stronger dividers, and article rows that feel more authoritative than decorative."
      className="bg-[linear-gradient(180deg,hsl(var(--secondary)/0.2),hsl(var(--background))_24%,hsl(var(--background)))]"
    >
      <section className="container mx-auto px-4 pb-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/70 bg-card p-8 shadow-lg md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
                <BookOpenText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Traveller Handbook</span>
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Start here before your next Sun Tourism departure.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                {learnHero.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {learnHeroStats.map((stat) => (
                <div key={stat.value} className="rounded-[1.25rem] bg-secondary/55 p-4">
                  <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Card className="rounded-[1.75rem] border-border/70 bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2 text-foreground">
                <Bookmark className="h-4 w-4 text-primary" />
                <h2 className="text-base font-semibold">Contents</h2>
              </div>

              <div className="mt-4 grid gap-2">
                {learnCategories.map((category, index) => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="rounded-2xl border border-border/60 px-4 py-3 transition-colors hover:border-primary/40 hover:bg-secondary/45"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Chapter {index + 1}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{category.name}</p>
                  </a>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                This direction prioritizes clarity, structure, and a guidebook feel over decorative card treatment.
              </p>
            </Card>
          </aside>

          <div className="space-y-8">
            {learnCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <section key={category.id} id={category.id}>
                  <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-sm md:p-8">
                    <div className="border-b border-border/70 pb-5">
                      <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-end">
                        <div>
                          <p className="text-xs uppercase tracking-[0.26em] text-primary">
                            Chapter {index + 1}
                          </p>
                          <div className="mt-3 flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <h2 className="text-3xl font-semibold text-foreground">
                              {category.name}
                            </h2>
                          </div>
                        </div>
                        <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                          {category.summary}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 divide-y divide-border/70">
                      {category.articles.map((article) => (
                        <Link key={article.title} to={article.slug} className="block">
                          <div className="group grid gap-4 py-5 md:grid-cols-[1fr_auto] md:items-center">
                            <div>
                              <div className="mb-3 flex flex-wrap gap-2">
                                {article.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="rounded-full bg-secondary/70"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <h3 className="text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                                {article.title}
                              </h3>
                              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                                {article.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-between gap-6 md:flex-col md:items-end md:justify-center">
                              <span className="text-sm text-muted-foreground">{article.readTime}</span>
                              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                                Read article
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}

            <Card className="rounded-[2rem] border-border/70 bg-card p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-semibold text-foreground">After the handbook</h2>
              <div className="mt-5 grid gap-3">
                {learnNextSteps.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="group flex items-start justify-between gap-4 rounded-[1.25rem] border border-border/60 px-4 py-4 transition-colors hover:border-primary/40 hover:bg-secondary/35">
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                        {item.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
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
            </Card>
          </div>
        </div>
      </section>
    </LearnReviewShell>
  );
};

export default Option2TravelHandbook;
