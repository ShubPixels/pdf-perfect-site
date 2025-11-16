import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import japanImage from "@/assets/japan-tour.jpg";
import dubaiImage from "@/assets/dubai-tour.jpg";
import europeImage from "@/assets/europe-tour.jpg";
import baliImage from "@/assets/bali-tour.jpg";

export const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedTheme, setSelectedTheme] = useState("All");

  const regions = ["All", "Europe", "Asia", "Middle East"];
  const themes = ["All", "Family", "Seniors", "Honeymoon", "Beach"];

  const destinations = [
    {
      id: 1,
      name: "Japan",
      region: "Asia",
      theme: "Seniors",
      tags: ["Culture", "Scenic", "Heritage"],
      description: "Popular for families & culture enthusiasts.",
      image: japanImage,
    },
    {
      id: 2,
      name: "Dubai & Abu Dhabi",
      region: "Middle East",
      theme: "Family",
      tags: ["Modern", "Shopping", "Luxury"],
      description: "Perfect for first-time Middle East travellers.",
      image: dubaiImage,
    },
    {
      id: 3,
      name: "Europe",
      region: "Europe",
      theme: "Family",
      tags: ["Historic", "Scenic", "First-time Europe"],
      description: "Classic European experience with comfort.",
      image: europeImage,
    },
    {
      id: 4,
      name: "Bali",
      region: "Asia",
      theme: "Honeymoon",
      tags: ["Beach", "Culture", "Relaxed Pace"],
      description: "Popular for families & couples.",
      image: baliImage,
    },
  ];

  const filteredDestinations = destinations.filter(
    (dest) =>
      (selectedRegion === "All" || dest.region === selectedRegion) &&
      (selectedTheme === "All" || dest.theme === selectedTheme)
  );

  return (
    <section id="destinations" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Explore Destinations with Our Travellers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See where our groups love to go, and what they do there.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          {/* Region Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm font-medium text-muted-foreground self-center mr-2">
              Region:
            </span>
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? "default" : "outline"}
                onClick={() => setSelectedRegion(region)}
                size="sm"
              >
                {region}
              </Button>
            ))}
          </div>

          <div className="h-px md:h-8 md:w-px bg-border md:mx-4" />

          {/* Theme Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm font-medium text-muted-foreground self-center mr-2">
              Theme:
            </span>
            {themes.map((theme) => (
              <Button
                key={theme}
                variant={selectedTheme === theme ? "secondary" : "ghost"}
                onClick={() => setSelectedTheme(theme)}
                size="sm"
              >
                {theme}
              </Button>
            ))}
          </div>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredDestinations.map((destination) => (
            <Card
              key={destination.id}
              className="group overflow-hidden cursor-pointer border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-xl mb-2">{destination.name}</h3>
                  <div className="flex flex-wrap gap-1">
                    {destination.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-white/20 text-white border-white/40"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-3">
                  {destination.description}
                </p>
                <span className="text-sm text-primary font-medium group-hover:underline">
                  View stories & tips →
                </span>
              </div>
            </Card>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No destinations match your selected filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
