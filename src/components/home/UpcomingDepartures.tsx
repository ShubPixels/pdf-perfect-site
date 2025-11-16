import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import dubaiImage from "@/assets/dubai-tour.jpg";
import europeImage from "@/assets/europe-tour.jpg";
import baliImage from "@/assets/bali-tour.jpg";

export const UpcomingDepartures = () => {
  const [selectedMonth, setSelectedMonth] = useState("Dec 2025");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const months = ["Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026"];
  const regions = ["All", "Europe", "Asia", "Middle East"];

  const departures = [
    {
      id: 1,
      destination: "Dubai & Abu Dhabi",
      duration: "6 Days",
      departure: "Ex Pune",
      nextDate: "15 Dec 2025",
      tags: ["Family Friendly", "First-time Middle East"],
      image: dubaiImage,
      region: "Middle East",
      month: "Dec 2025",
    },
    {
      id: 2,
      destination: "Europe Highlights",
      duration: "10 Days",
      departure: "Ex Pune",
      nextDate: "12 Jan 2026",
      tags: ["First-time Europe", "Scenic"],
      image: europeImage,
      region: "Europe",
      month: "Jan 2026",
    },
    {
      id: 3,
      destination: "Bali Island Paradise",
      duration: "7 Days",
      departure: "Ex Mumbai",
      nextDate: "20 Dec 2025",
      tags: ["Beach", "Relaxed Pace"],
      image: baliImage,
      region: "Asia",
      month: "Dec 2025",
    },
  ];

  const filteredDepartures = departures.filter(
    (dep) =>
      dep.month === selectedMonth &&
      (selectedRegion === "All" || dep.region === selectedRegion)
  );

  return (
    <section id="upcoming-departures" className="py-16 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Upcoming Departures – Ghar Se Ghar Tak Journeys
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See which tours are leaving in the next few months.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          {/* Month Selector */}
          <div className="flex flex-wrap gap-2 justify-center">
            {months.map((month) => (
              <Button
                key={month}
                variant={selectedMonth === month ? "default" : "outline"}
                onClick={() => setSelectedMonth(month)}
                className="min-w-[100px]"
              >
                {month}
              </Button>
            ))}
          </div>

          <div className="h-px md:h-8 md:w-px bg-border md:mx-4" />

          {/* Region Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? "secondary" : "ghost"}
                onClick={() => setSelectedRegion(region)}
                size="sm"
              >
                {region}
              </Button>
            ))}
          </div>
        </div>

        {/* Departure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredDepartures.map((departure) => (
            <Card
              key={departure.id}
              className="group overflow-hidden cursor-pointer border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={departure.image}
                  alt={departure.destination}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-xl text-foreground mb-2">
                  {departure.destination}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{departure.departure}</span>
                  <span>•</span>
                  <span>{departure.duration}</span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">
                    Next Departure: {departure.nextDate}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {departure.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  View Details →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredDepartures.length === 0 && (
          <div className="text-center py-12">
            <Clock className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              No departures scheduled for this month and region.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
