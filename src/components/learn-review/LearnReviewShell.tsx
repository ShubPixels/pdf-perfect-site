import { type ReactNode } from "react";
import { Eye, MonitorSmartphone } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { ReviewSwitcher } from "./ReviewSwitcher";

interface LearnReviewShellProps {
  optionLabel: string;
  optionTitle: string;
  optionSummary: string;
  children: ReactNode;
  className?: string;
}

export const LearnReviewShell = ({
  optionLabel,
  optionTitle,
  optionSummary,
  children,
  className,
}: LearnReviewShellProps) => {
  return (
    <div className={cn("min-h-screen bg-white", className)}>
      <Navigation />

      <main className="pt-20 md:pt-24">
        <section className="container mx-auto px-4 pb-8">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-primary/15 bg-card/90 p-6 shadow-lg backdrop-blur md:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                  <Eye className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Internal Learn Review</span>
                </div>

                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full border-0 bg-foreground text-background">
                    {optionLabel}
                  </Badge>
                  <span className="text-sm text-muted-foreground">Preview-only variant</span>
                </div>

                <h1 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
                  {optionTitle}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  {optionSummary}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-border/60 bg-background/85 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <MonitorSmartphone className="h-4 w-4 text-primary" />
                  Review on desktop and mobile
                </div>
                <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                  Use the switcher to compare section separation, warmth, scanability, and CTA clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {children}
      </main>

      <Footer />
      <ReviewSwitcher />
    </div>
  );
};
