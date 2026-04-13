import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

import logo from "@/assets/brand/logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/navigation";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    if (path === "/stories") {
      return (
        location.pathname === "/stories" ||
        location.pathname.startsWith("/stories/") ||
        location.pathname === "/community" ||
        location.pathname === "/explore"
      );
    }

    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-3 lg:h-20">
          <Link to="/" className="group flex min-w-0 items-center gap-2 sm:gap-3">
            <img
              src={logo}
              alt="Sun Tourism Logo"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105 sm:h-10"
            />

            <div className="min-w-0 flex flex-col leading-[1.05]">
              <span className="whitespace-nowrap text-[10px] font-bold tracking-[-0.01em] text-foreground sm:text-xs lg:text-sm">
                All Tours Ghar Se Ghar Tak
              </span>
              <span className="text-[10px] text-muted-foreground sm:text-xs">
                Sun Touriism Pune
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  isActiveLink(link.path)
                    ? "bg-secondary text-primary"
                    : "text-foreground hover:bg-secondary hover:text-primary",
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="mx-2 h-6 w-px bg-border" />

            <a
              href="https://suntourismpune.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Sun Tourism Tours
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out lg:hidden",
            isOpen ? "max-h-96 pb-4" : "max-h-0",
          )}
        >
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  isActiveLink(link.path)
                    ? "bg-secondary text-primary"
                    : "text-foreground hover:bg-secondary hover:text-primary",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="my-2 h-px bg-border" />

            <a
              href="https://suntourismpune.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              onClick={() => setIsOpen(false)}
            >
              Sun Tourism Tours
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
