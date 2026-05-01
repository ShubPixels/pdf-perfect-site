import { ArrowRight, ArrowUpRight, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

import { LearnReviewShell } from "@/components/learn-review/LearnReviewShell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { learnCategories, learnHero, learnNextSteps } from "@/data/learn-content";

const featuredCategory = learnCategories[0];
const featuredArticle = featuredCategory.articles[0];

const Option4ModernEditorial = () => {
  return (
    <LearnReviewShell
      optionLabel="Option 4"
      optionTitle="Modern Editorial Feature Page"
      optionSummary="A sharper, more contemporary direction with stronger hierarchy, featured stories, and less reliance on repeated card shells."
      className="bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--secondary)/0.18)_22%,hsl(var(--background))_72%)]"
    >
      <section className="container mx-auto px-4 pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="rounded-[2rem] border-border/60 bg-card p-8 shadow-xl md:p-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Newspaper className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Editorial learn hub</span>
              </div>

              <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
                {learnHero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                This direction shifts the page from soft brochure styling to a clearer editorial system with one lead story, sharper content modules, and stronger visual hierarchy.
              </p>
            </Card>

            <Link to={featuredArticle.slug}>
              <Card className="group h-full rounded-[2rem] border-border/60 bg-foreground p-8 text-background shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-10">
                <div className="flex flex-wrap gap-2">
                  <Badge className="rounded-full border-0 bg-background/15 text-background">
                    Featured read
                  </Badge>
                  {featuredArticle.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="rounded-full border border-background/20 bg-transparent text-background"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="mt-10 text-xs uppercase tracking-[0.28em] text-background/70">
                  {featuredCategory.name}
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-background md:text-4xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-background/80 md:text-base">
                  {featuredArticle.description}
                </p>

                <div className="mt-10 flex items-center justify-between">
                  <span className="text-sm text-background/70">{featuredArticle.readTime}</span>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-background">
                    Open feature
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="mx-auto max-w-6xl space-y-10">
          {learnCategories.map((category, index) => {
            const [leadArticle, ...secondaryArticles] = category.articles;

            return (
              <section key={category.id}>
                <div className="mb-4 flex flex-col gap-3 border-b border-border/70 pb-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-primary">
                      Section {index + 1}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
                      {category.name}
                    </h2>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                    {category.summary}
                  </p>
                </div>

                <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
                  <Link to={leadArticle.slug}>
                    <Card className="group h-full rounded-[1.75rem] border-border/60 bg-card p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-7">
                      <div className="mb-4 flex flex-wrap gap-2">
                        <Badge className="rounded-full border-0 bg-primary text-primary-foreground">
                          Lead story
                        </Badge>
                        {leadArticle.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="max-w-xl text-3xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                        {leadArticle.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                        {leadArticle.description}
                      </p>
                      <div className="mt-8 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{leadArticle.readTime}</span>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                          Read feature
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Card>
                  </Link>

                  <div className="grid gap-4">
                    {secondaryArticles.map((article) => (
                      <Link key={article.title} to={article.slug}>
                        <Card className="group rounded-[1.5rem] border-border/60 bg-card p-5 shadow-xl transition-all duration-300 hover:border-primary/40">
                          <div className="mb-3 flex flex-wrap gap-2">
                            {article.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                                {article.title}
                              </h3>
                              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                {article.description}
                              </p>
                            </div>
                            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </div>

                          <div className="mt-5 text-sm text-muted-foreground">{article.readTime}</div>
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
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/60 bg-card p-6 shadow-xl md:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            {learnNextSteps.map((item) => {
              const Icon = item.icon;
              const content = (
                <Card className="group h-full rounded-[1.5rem] border-border/60 bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    {item.cta}
                    {item.external ? (
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    ) : (
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    )}
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

export default Option4ModernEditorial;
