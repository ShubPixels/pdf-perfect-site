import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight, Plane } from "lucide-react";
import dubaiImage from "@/assets/dubai-tour.jpg";
import europeImage from "@/assets/europe-tour.jpg";
import baliImage from "@/assets/bali-tour.jpg";

export const UpcomingDepartures = () => {
  const [selectedMonth, setSelectedMonth] = useState("Dec 2025");

  const months = ["Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026"];

  const departures = [
    {
      id: 1,
      destination: "Dubai & Abu Dhabi",
      duration: "6 Days",
      departure: "Ex Pune",
      nextDate: "15 Dec 2025",
      price: "₹85,000",
      spotsLeft: 8,
      tags: ["Family Friendly", "First-time Middle East"],
      image: dubaiImage,
      month: "Dec 2025",
    },
    {
      id: 2,
      destination: "Europe Highlights",
      duration: "10 Days",
      departure: "Ex Pune",
      nextDate: "12 Jan 2026",
      price: "₹1,85,000",
      spotsLeft: 12,
      tags: ["First-time Europe", "Scenic"],
      image: europeImage,
      month: "Jan 2026",
    },
    {
      id: 3,
      destination: "Bali Island Paradise",
      duration: "7 Days",
      departure: "Ex Mumbai",
      nextDate: "20 Dec 2025",
      price: "₹95,000",
      spotsLeft: 4,
      tags: ["Beach", "Relaxed Pace"],
      image: baliImage,
      month: "Dec 2025",
    },
  ];

  const filteredDepartures = departures.filter((dep) => dep.month === selectedMonth);

  return (
    <section id="upcoming-departures" className="py-24 bg-background scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 mb-6">
            <Plane className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Book Your Adventure</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Upcoming <span className="text-primary">Departures</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ghar Se Ghar Tak journeys starting soon. Reserve your spot!
          </p>
        </div>

        {/* Month Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-secondary rounded-full p-1">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
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
          {filteredDepartures.map((departure, index) => (
            <div
              key={departure.id}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary transition-all duration-500 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-72 h-48 md:h-auto shrink-0">
                  <img
                    src={departure.image}
                    alt={departure.destination}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                  
                  {/* Spots Badge */}
                  {departure.spotsLeft <= 5 && (
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white border-none">
                      Only {departure.spotsLeft} spots left!
                    </Badge>
                  )}
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
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {departure.departure}
                        </span>
                        <span className="flex items-center gap-1 text-primary font-medium">
                          <Calendar className="w-4 h-4" />
                          {departure.nextDate}
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
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-3xl font-bold text-foreground">{departure.price}</p>
                        <p className="text-xs text-muted-foreground">per person</p>
                      </div>
                      <Button className="bg-accent text-black hover:bg-accent/90 font-bold px-6 py-5 rounded-full group/btn">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
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
          <Button variant="outline" size="lg" className="rounded-full px-8 group">
            View All Tour Packages
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
