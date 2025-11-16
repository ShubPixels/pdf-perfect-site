import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import japanImage from "@/assets/japan-tour.jpg";

export const CurrentTours = () => {
  const currentTours = [
    {
      id: 1,
      destination: "Japan – Nov 2025 Batch",
      day: "Day 4 of 8",
      departure: "Ex Pune",
      image: japanImage,
      isLive: true,
    },
  ];

  const hasActiveTours = currentTours.length > 0;

  return (
    <section id="current-tours" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            On the Road Right Now
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Groups currently travelling with Sun Tourism.
          </p>
        </div>

        {hasActiveTours ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {currentTours.map((tour) => (
              <Card
                key={tour.id}
                className="group overflow-hidden cursor-pointer border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.destination}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {tour.isLive && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground animate-pulse">
                      LIVE
                    </Badge>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{tour.destination}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {tour.day}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {tour.departure}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <Button
                    variant="ghost"
                    className="w-full text-primary hover:text-primary-foreground hover:bg-primary"
                  >
                    View Tour Diary →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center max-w-2xl mx-auto">
            <Card className="p-12 border-dashed border-2">
              <Users className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No groups on the road today
              </h3>
              <p className="text-muted-foreground mb-6">
                We're busy planning the next journeys.
              </p>
              <Button
                onClick={() => {
                  const element = document.getElementById("upcoming-departures");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See Upcoming Departures
              </Button>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};
