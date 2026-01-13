import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight, Plane, Percent, Users } from "lucide-react";
import { upcomingDepartures, getAvailableMonths } from "@/data/tours";
import { Link } from "react-router-dom";

export const UpcomingDepartures = () => {
  const availableMonths = getAvailableMonths();
  const [selectedMonth, setSelectedMonth] = useState(availableMonths[0] || "Dec 2025");

  const filteredDepartures = upcomingDepartures.filter((dep) => dep.month === selectedMonth);

  return (
    <section id="upcoming-departures" className="py-24  scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 mb-6">
            <Plane className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Ghar Se Ghar Tak</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Upcoming <span className="text-primary">Departures</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Fixed departure group tours with complete home-to-home service. Reserve your spot today!
          </p>
        </div>

        {/* Month Selector */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex bg-secondary rounded-full p-1 gap-1">
            {availableMonths.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 md:px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
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
          {filteredDepartures.map((departure) => (
            <div
              key={departure.id}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary transition-all duration-500 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-72 h-48 md:h-auto shrink-0">
                  <div 
                    className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.3))`
                    }}
                  >
                    <Plane className="w-16 h-16 text-foreground/20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                  
                  {/* Discount Badge */}
                  {departure.discountPercent && (
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white border-none">
                      <Percent className="w-3 h-3 mr-1" />
                      {departure.discountPercent}% OFF
                    </Badge>
                  )}
                  
                  {/* Spots Badge */}
                  {departure.spotsLeft && departure.spotsLeft <= 10 && (
                    <Badge className="absolute top-4 right-4 md:right-auto md:left-4 md:top-12 bg-orange-500 text-white border-none">
                      <Users className="w-3 h-3 mr-1" />
                      {departure.spotsLeft} spots left!
                    </Badge>
                  )}

                  {/* Type Badge */}
                  <Badge 
                    className={`absolute bottom-4 left-4 border-none ${
                      departure.type === 'international' 
                        ? 'bg-primary text-white' 
                        : 'bg-green-600 text-white'
                    }`}
                  >
                    {departure.type === 'international' ? 'International' : 'Domestic'}
                  </Badge>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {departure.destination}
                      </h3>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {departure.duration}
                        </span>
                        {/* <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {departure.departureLocation}
                        </span> */}
                        <span className="flex items-center gap-1 text-primary font-medium">
                          <Calendar className="w-4 h-4" />
                          {departure.departureDate}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {departure.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex flex-row md:flex-col items-center md:items-end gap-4">
                      {/* <div className="text-right">
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        {departure.originalPrice && (
                          <p className="text-lg text-muted-foreground line-through">
                            {formatPrice(departure.originalPrice)}
                          </p>
                        )}
                        <p className="text-3xl font-bold text-foreground">{formatPrice(departure.price)}</p>
                        <p className="text-xs text-muted-foreground">per person + GST</p>
                      </div> */}
                      <Link to={`/explore/${departure.tourId}`}>
                        <Button className="bg-accent text-black hover:bg-accent/90 font-bold px-6 py-5 rounded-full group/btn">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDepartures.length === 0 && (
          <div className="text-center py-16">
            <Clock className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground text-lg">
              No departures scheduled for {selectedMonth}. Check other months!
            </p>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/explore">
            <Button variant="outline" size="lg" className="rounded-full px-8 group">
              View All Tour Packages
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
