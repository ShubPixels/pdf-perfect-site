import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Globe } from "lucide-react";
import japanImage from "@/assets/japan-tour.jpg";
import dubaiImage from "@/assets/dubai-tour.jpg";
import europeImage from "@/assets/europe-tour.jpg";
import baliImage from "@/assets/bali-tour.jpg";

export const Destinations = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const destinations = [
    {
      id: "japan",
      name: "Japan",
      region: "Asia",
      tags: ["Culture", "Scenic", "Heritage"],
      description: "Where ancient traditions meet cutting-edge innovation",
      image: japanImage,
      stats: { tours: 12, travelers: 450 },
    },
    {
      id: "dubai",
      name: "Dubai & Abu Dhabi",
      region: "Middle East",
      tags: ["Modern", "Shopping", "Luxury"],
      description: "A playground of architectural wonders and desert dreams",
      image: dubaiImage,
      stats: { tours: 18, travelers: 680 },
    },
    {
      id: "europe",
      name: "Europe",
      region: "Europe",
      tags: ["Historic", "Scenic", "First-time"],
      description: "Timeless cities, art, and culinary treasures await",
      image: europeImage,
      stats: { tours: 24, travelers: 890 },
    },
    {
      id: "bali",
      name: "Bali",
      region: "Asia",
      tags: ["Beach", "Culture", "Relaxed"],
      description: "Island paradise where spirituality meets serenity",
      image: baliImage,
      stats: { tours: 8, travelers: 320 },
    },
  ];

  return (
    <section id="destinations" className="py-24 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Explore the World</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Popular <span className="text-primary">Destinations</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Discover where our travelers love to go, curated experiences for every journey
            </p>
          </div>
          <Link to="/explore" className="mt-6 md:mt-0">
            <Button variant="outline" className="rounded-full px-6 group">
              View All Destinations
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {destinations.map((destination, index) => (
            <Link 
              key={destination.id} 
              to={`/destination/${destination.id}`}
              className={`group relative rounded-3xl overflow-hidden ${
                index === 0 || index === 3 ? "md:col-span-1" : "md:col-span-1"
              } ${index === 0 ? "md:row-span-2 min-h-[500px]" : "min-h-[250px]"}`}
              onMouseEnter={() => setHoveredId(destination.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 transition-all duration-500 ${
                  hoveredId === destination.id 
                    ? "bg-gradient-to-t from-black/95 via-black/60 to-black/20" 
                    : "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                }`} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Region Badge */}
                <div className="mb-auto">
                  <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                    <MapPin className="w-3 h-3 mr-1" />
                    {destination.region}
                  </Badge>
                </div>

                {/* Destination Info */}
                <div>
                  <h3 className={`font-bold text-white mb-2 transition-all duration-300 ${
                    index === 0 ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
                  } ${hoveredId === destination.id ? "translate-y-0" : "translate-y-2"}`}>
                    {destination.name}
                  </h3>
                  
                  <p className={`text-white/80 mb-4 transition-all duration-300 ${
                    hoveredId === destination.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}>
                    {destination.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs px-3 py-1 rounded-full bg-primary/20 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats & CTA */}
                  <div className={`flex items-center justify-between transition-all duration-300 ${
                    hoveredId === destination.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}>
                    <div className="flex gap-4 text-white/60 text-sm">
                      <span>{destination.stats.tours} tours</span>
                      <span>{destination.stats.travelers}+ travelers</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
