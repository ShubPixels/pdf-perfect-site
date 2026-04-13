import { ArrowRight, ClipboardCheck, MonitorSmartphone, NotebookTabs } from "lucide-react";
import { Link } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  learnReviewChecklist,
  learnReviewOptions,
  learnReviewScoreLabels,
} from "@/data/learn-content";

const LearnReviewIndex = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20 md:pt-24">
        <section className="container mx-auto px-4 pb-10">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-primary/15 bg-card/90 p-8 shadow-xl backdrop-blur md:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <NotebookTabs className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Internal Learn Review</span>
            </div>

            <h1 className="max-w-4xl font-heading text-4xl font-bold text-foreground md:text-6xl">
              Four design directions. One comparison space.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              These routes are for internal review only. Each option uses the same Learn content,
              article inventory, and next-step links so the comparison stays focused on design,
              hierarchy, and audience fit.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-5">
              {learnReviewOptions.map((option) => (
                <Link key={option.id} to={option.href}>
                  <Card className="group rounded-[1.75rem] border-border/50 bg-card/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="max-w-2xl">
                        <Badge className="rounded-full border-0 bg-primary/10 text-primary">
                          {option.shortLabel}
                        </Badge>
                        <h2 className="mt-4 text-2xl font-semibold text-foreground">
                          {option.title}
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                          {option.summary}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                        Open preview
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="grid gap-5">
              <Card className="rounded-[1.75rem] border-border/50 bg-card/90 p-6">
                <div className="flex items-center gap-2 text-foreground">
                  <ClipboardCheck className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Review Checklist</h3>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  {learnReviewChecklist.map((item) => (
                    <li key={item} className="rounded-2xl bg-secondary/60 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="rounded-[1.75rem] border-border/50 bg-card/90 p-6">
                <div className="flex items-center gap-2 text-foreground">
                  <MonitorSmartphone className="h-5 w-5 text-highlight" />
                  <h3 className="text-lg font-semibold">Score Each Option 1-5</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {learnReviewScoreLabels.map((label) => (
                    <Badge key={label} variant="secondary" className="rounded-full px-3 py-1.5">
                      {label}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Review on both desktop and mobile. Focus on first impression, section
                  separation, scanability, audience fit, and CTA clarity.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LearnReviewIndex;
