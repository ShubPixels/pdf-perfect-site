import { ArrowRight, BookOpen } from "lucide-react";
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

const bandClasses = [
  "bg-card",
  "bg-secondary/45",
  "bg-card",
  "bg-secondary/45",
  "bg-card",
];

const Option1WarmGuidance = () => {
  return (
    <LearnReviewShell
      optionLabel="Option 1"
      optionTitle="Warm Guidance Chapters"
      optionSummary="A chapter-led layout with clearer section breaks, softer utility blocks, and a more trustworthy reading rhythm for broad travellers."
      className="bg-[linear-gradient(180deg,hsl(var(--secondary)/0.45),hsl(var(--background))_28%,hsl(var(--background)))]"
    >
      <section className="container mx-auto px-4 pb-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/50 bg-card p-8 shadow-xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">{learnHero.badge}</span>
              </div>

              <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
                {learnHero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {learnHero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {learnCategories.map((category, index) => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="rounded-full border border-border bg-secondary/70 px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    Chapter {index + 1}: {category.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {learnHeroStats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-[1.5rem] border border-border/60 bg-secondary/35 p-5"
                >
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="mx-auto max-w-6xl space-y-8">
          {learnCategories.map((category, index) => {
            const Icon = category.icon;
            const [featuredArticle, ...secondaryArticles] = category.articles;

            return (
              <section
                key={category.id}
                id={category.id}
                className={`rounded-[2rem] border border-border/50 p-6 shadow-xl md:p-8 ${bandClasses[index]}`}
              >
                <div className="mb-8 border-t-4 border-primary/60 pt-6">
                  <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                        Chapter {index + 1}
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-heading text-3xl font-bold text-foreground">
                            {category.name}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                      {category.summary}
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
                  <Link to={featuredArticle.slug}>
                    <Card className="group h-full rounded-[1.75rem] border-border/50 bg-background/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg md:p-7">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {featuredArticle.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="rounded-full">
                            {tag}
                          </Badge>
                        ))}
                        <Badge className="rounded-full border-0 bg-primary text-primary-foreground">
                          Start here
                        </Badge>
                      </div>

                      <h3 className="max-w-xl text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                        {featuredArticle.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                        {featuredArticle.description}
                      </p>

                      <div className="mt-8 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{featuredArticle.readTime}</span>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                          Read article
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Card>
                  </Link>

                  <div className="grid gap-4">
                    {secondaryArticles.map((article) => (
                      <Link key={article.title} to={article.slug}>
                        <Card className="group h-full rounded-[1.5rem] border-border/50 bg-background/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                          <div className="mb-3 flex flex-wrap gap-2">
                            {article.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <h3 className="text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                            {article.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">
                            {article.description}
                          </p>
                          <div className="mt-5 flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{article.readTime}</span>
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                              Read now
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/50 bg-card p-6 shadow-xl md:p-8">
          <div className="flex flex-col gap-4 border-b border-border/60 pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-highlight">
                Helpful Next Steps
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground">
                Keep the momentum going
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
              This version reduces end-of-page clutter and keeps the closing actions short, clear, and supportive.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {learnNextSteps.map((item) => {
              const Icon = item.icon;
              const content = (
                <Card className="group h-full rounded-[1.5rem] border-border/50 bg-background/85 p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
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
    </LearnReviewShell>
  );
};

export default Option1WarmGuidance;
