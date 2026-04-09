import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Radio, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import japanImage from "@/assets/destinations/japan/covers/japan-tour.jpg";

export const CurrentTours = () => {
  const currentTours = [
    {
      id: 1,
      destination: "Japan",
      batch: "Nov 2025 Batch",
      day: "Day 4 of 8",
      departure: "Ex Pune",
      image: japanImage,
      isLive: true,
      travelers: 24,
      highlight: "Currently in Kyoto visiting ancient temples",
    },
  ];

  const hasActiveTours = currentTours.length > 0;

  return (
    <section id="current-tours" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Radio className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Live Updates</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            On the Road <span className="text-primary">Right Now</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Follow along as our groups explore the world in real-time
          </p>
        </div>

        {hasActiveTours ? (
          <div className="max-w-5xl mx-auto">
            {currentTours.map((tour) => (
              <div
                key={tour.id}
                className="group relative rounded-3xl overflow-hidden bg-black"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={tour.image}
                    alt={tour.destination}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
                  {/* Live Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <Badge className="bg-red-500 text-white border-none px-4 py-1 text-sm font-bold animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-white mr-2 inline-block" />
                      LIVE
                    </Badge>
                    <span className="text-white/60 text-sm">{tour.day}</span>
                  </div>

                  {/* Destination */}
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {tour.destination}
                    <span className="block text-xl md:text-2xl font-normal text-white/60 mt-2">
                      {tour.batch}
                    </span>
                  </h3>

                  {/* Current Activity */}
                  <p className="text-accent text-lg mb-6 max-w-md">
                    "{tour.highlight}"
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-6 mb-8 text-white/80">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span>{tour.departure}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-accent" />
                      <span>{tour.travelers} Travelers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span>{tour.day}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link to={`/tour-diary/${tour.id}`}>
                    <Button className="bg-accent text-black hover:bg-accent/90 font-bold px-8 py-6 text-lg rounded-full group/btn">
                      View Tour Diary
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 hidden md:block">
                  <div className="w-24 h-24 rounded-full border-4 border-accent/30 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold">4</div>
                      <div className="text-xs text-white/60">of 8</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center max-w-2xl mx-auto">
            <div className="p-16 border-2 border-dashed border-muted rounded-3xl">
              <Users className="h-20 w-20 mx-auto mb-6 text-muted-foreground" />
              <h3 className="text-2xl font-bold text-foreground mb-3">
                No groups on the road today
              </h3>
              <p className="text-muted-foreground mb-8">
                We're busy planning the next incredible journeys.
              </p>
              <Button
                onClick={() => {
                  const element = document.getElementById("upcoming-departures");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-accent text-black hover:bg-accent/90 font-bold px-8 py-6 text-lg rounded-full"
              >
                See Upcoming Departures
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
