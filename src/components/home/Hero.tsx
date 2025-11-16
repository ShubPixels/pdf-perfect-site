import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Add a brief highlight effect
      element.classList.add("highlight-flash");
      setTimeout(() => element.classList.remove("highlight-flash"), 1000);
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-slide-up">
            All Tours Ghar Se Ghar Tak
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto animate-slide-up-delay">
            Stories, live moments & memories from Sun Tourism travellers.
          </p>

          {/* Quick Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {[
              { label: "Current Tours – On the Road Now", id: "current-tours" },
              { label: "Upcoming Departures", id: "upcoming-departures" },
              { label: "Past Tour Memories", id: "community" },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-6 py-3 bg-card/90 hover:bg-card text-card-foreground rounded-full text-sm font-medium border border-border hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md animate-slide-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground pt-4 animate-fade-in-delay">
            No bookings here, only stories. For packages & pricing, visit{" "}
            <a
              href="https://suntourismpune.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Sun Tourism Pune
            </a>
            .
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-foreground/60" />
        </div>
      </div>
    </section>
  );
};
