import { FlaskConical, Layers3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { learnReviewOptions } from "@/data/learn-content";
import { cn } from "@/lib/utils";

export const ReviewSwitcher = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-[calc(100vw-2rem)]">
      <Card className="w-full rounded-[1.5rem] border-primary/20 bg-card/95 p-4 shadow-2xl backdrop-blur md:w-[22rem]">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-primary" />
              <p className="text-sm font-semibold text-foreground">Learn Review Lab</p>
            </div>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Internal comparison routes for desktop and mobile review.
            </p>
          </div>
          <Badge className="rounded-full border-0 bg-primary/10 text-primary">
            Review only
          </Badge>
        </div>

        <div className="mb-3 grid grid-cols-1 gap-2">
          <Link
            to="/learn-review"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors",
              location.pathname === "/learn-review"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/70 text-foreground hover:bg-secondary",
            )}
          >
            <Layers3 className="h-4 w-4" />
            Review home
          </Link>

          <div className="grid grid-cols-2 gap-2">
            {learnReviewOptions.map((option) => {
              const isActive = location.pathname === option.href;

              return (
                <Link
                  key={option.id}
                  to={option.href}
                  className={cn(
                    "rounded-2xl px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/70 text-foreground hover:bg-secondary",
                  )}
                >
                  {option.shortLabel}
                </Link>
              );
            })}
          </div>
        </div>

        <p className="text-[11px] leading-5 text-muted-foreground">
          Compare section separation, scanability, warmth, and CTA hierarchy before picking a final direction.
        </p>
      </Card>
    </div>
  );
};
