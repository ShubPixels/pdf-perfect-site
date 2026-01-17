import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Plane, Percent, Users } from "lucide-react";
import { upcomingDepartures, getAvailableMonths } from "@/data/tours";
import { Link } from "react-router-dom";

export const UpcomingDepartures = () => {
  const availableMonths = getAvailableMonths();
  const [selectedMonth, setSelectedMonth] = useState(availableMonths[0] || "Dec 2026");

  const filteredDepartures = upcomingDepartures.filter((dep) => dep.month === selectedMonth);

  return (
    <section id="upcoming-departures" className="py-12 sm:py-16 md:py-24 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/20 mb-4 sm:mb-6">
            <Plane className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Ghar Se Ghar Tak</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl md:text-6xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Upcoming <span className="text-accent">Departures</span>
          </h2>
          <p className="text-muted-foreground max-w-xs sm:max-w-sm md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Fixed departure group tours with complete home-to-home service. Reserve your spot today!
          </p>
        </div>

        {/* Month Selector */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 overflow-x-auto pb-2">
          <div className="inline-flex bg-secondary rounded-full p-1 gap-1">
            {availableMonths.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-3 py-2 sm:px-4 md:px-6 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedMonth === month
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        {/* Departures List */}
        <div className="max-w-5xl mx-auto space-y-6">
          {filteredDepartures.map((departure) => {
            const detailsHref = departure.link ?? `/explore/${departure.tourId}`;
            const isExternal = detailsHref.startsWith("http");

            return (
              <div
                key={departure.id}
                className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative w-full md:w-72 h-40 sm:h-44 md:h-auto shrink-0">
                    <img
                      src={departure.image}
                      alt={departure.destination}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Discount Badge */}
                    {departure.discountPercent && (
                      <Badge className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-red-500 text-white border-none text-xs">
                        <Percent className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                        {departure.discountPercent}% OFF
                      </Badge>
                    )}

                    {/* Spots Badge */}
                    {departure.spotsLeft && departure.spotsLeft <= 10 && (
                      <Badge className="absolute top-2 right-2 sm:top-4 sm:right-4 md:right-auto md:left-4 md:top-12 bg-orange-500 text-white border-none text-xs">
                        <Users className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                        {departure.spotsLeft} spots left!
                      </Badge>
                    )}

                    {/* Type Badge */}
                    <Badge
                      className={`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 border-none text-xs ${
                        departure.type === "international"
                          ? "bg-primary text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      {departure.type === "international" ? "International" : "Domestic"}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 sm:p-5 md:p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {departure.destination}
                        </h3>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-muted-foreground mb-3 sm:mb-4">
                          <span className="flex items-center gap-1 text-sm">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            {departure.duration}
                          </span>
                          <span className="flex items-center gap-1 text-primary font-medium text-sm">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {departure.departureDate}
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {departure.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-row md:flex-col items-center md:items-end gap-3 sm:gap-4 mt-2 md:mt-0">
                        <Button
                          asChild
                          className="bg-accent text-white hover:bg-accent/90 font-bold px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-full group/btn text-sm sm:text-base"
                        >
                          {isExternal ? (
                            <a href={detailsHref} target="_blank" rel="noopener noreferrer">
                              View Details
                              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                          ) : (
                            <Link to={detailsHref}>
                              View Details
                              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDepartures.length === 0 && (
          <div className="text-center py-8 sm:py-12 md:py-16">
            <Clock className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-3 sm:mb-4 text-muted-foreground" />
            <p className="text-muted-foreground text-base sm:text-lg">
              No departures scheduled for {selectedMonth}. Check other months!
            </p>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          
            <Button asChild variant="outline" size="lg" className="rounded-full px-6 py-3 sm:px-8 sm:py-4 group text-sm sm:text-base">
              <a
                href="https://suntourismpune.co.in/trip-types/ghar-se-ghar-tak-group-tours/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Tour Packages
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
};
