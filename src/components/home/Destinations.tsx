import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Globe } from "lucide-react";
import { tours } from "@/data/tours";

// placeholder images (swap later)
import japanImage from "@/assets/japan-tour.jpg";
import dubaiImage from "@/assets/dubai-tour.jpg";
import europeImage from "@/assets/europe-tour.jpg";
import baliImage from "@/assets/bali-tour.jpg";

const destinationImages: Record<string, string> = {
  "japan-2026": japanImage,
  "dubai-2025": dubaiImage,
  "europe-2026": europeImage,
  "kerala-2025": baliImage,
  "andaman-2025": baliImage,
  "nepal-2025": japanImage,
  "bali-2025": baliImage,
  "baku-2025": dubaiImage,
  "australia-2026": europeImage,
};

const destinationMeta: Record<
  string,
  { region: string; tags: string[]; stats: { tours: number; travelers: number } }
> = {
  "japan-2026": { region: "Asia", tags: ["Culture", "Scenic", "Heritage"], stats: { tours: 12, travelers: 450 } },
  "dubai-2025": { region: "Middle East", tags: ["Modern", "Shopping", "Luxury"], stats: { tours: 18, travelers: 680 } },
  "europe-2026": { region: "Europe", tags: ["Historic", "Scenic", "First-time"], stats: { tours: 24, travelers: 890 } },
  "kerala-2025": { region: "India", tags: ["Backwaters", "Nature", "Relaxing"], stats: { tours: 10, travelers: 380 } },
  "andaman-2025": { region: "India", tags: ["Beach", "Islands", "Adventure"], stats: { tours: 8, travelers: 290 } },
  "nepal-2025": { region: "Asia", tags: ["Spiritual", "Mountains", "Heritage"], stats: { tours: 6, travelers: 180 } },
  "bali-2025": { region: "Asia", tags: ["Beach", "Culture", "Romantic"], stats: { tours: 10, travelers: 420 } },
  "baku-2025": { region: "Asia", tags: ["Modern", "Historic", "Unique"], stats: { tours: 5, travelers: 150 } },
  "australia-2026": { region: "Oceania", tags: ["Wildlife", "Nature", "Adventure"], stats: { tours: 4, travelers: 120 } },
};

interface DestinationsProps {
  showAll?: boolean;
}

/**
 * ✅ Deterministic bento templates (NO refresh randomness)
 * - Home: 5 items → perfect rectangular bento
 * - Explore: repeatable 8-tile block that stays “shaped”
 */
const HOME_SPANS = [
  "md:col-span-2 md:row-span-2", // big
  "md:col-span-2 md:row-span-1", // wide
  "md:col-span-2 md:row-span-1", // wide
  "md:col-span-1 md:row-span-1", // small
  "md:col-span-3 md:row-span-1", // long
];

const EXPLORE_SPANS = [
  "md:col-span-2 md:row-span-2", // big
  "md:col-span-2 md:row-span-1", // wide
  "md:col-span-2 md:row-span-1", // wide
  "md:col-span-1 md:row-span-1", // small
  "md:col-span-1 md:row-span-1", // small
  "md:col-span-1 md:row-span-1", // small
  "md:col-span-1 md:row-span-1", // small
  "md:col-span-4 md:row-span-1", // banner row (keeps the block shape)
];

export const Destinations = ({ showAll = false }: DestinationsProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const HIDE_DESTINATION_IDS = useMemo(
    () => new Set<string>(["rajasthan-2025", "singapore-malaysia-2025"]),
    []
  );

  const allDestinations = useMemo(() => {
    return tours
      .map((tour) => ({
        id: tour.id,
        name: tour.shortTitle,
        region: destinationMeta[tour.id]?.region || tour.region,
        tags: destinationMeta[tour.id]?.tags || tour.categories.slice(0, 3),
        description: tour.tagline,
        image: destinationImages[tour.id] || dubaiImage,
        stats: destinationMeta[tour.id]?.stats || { tours: 5, travelers: 200 },
      }))
      .filter((d) => !HIDE_DESTINATION_IDS.has(d.id));
  }, [HIDE_DESTINATION_IDS]);

  // ✅ deterministic order (no reordering on refresh)
  const ordered = useMemo(() => {
  const PRIORITY = ["dubai-2025"]; // add more ids here if needed

  return [...allDestinations].sort((a, b) => {
    const ai = PRIORITY.indexOf(a.id);
    const bi = PRIORITY.indexOf(b.id);

    if (ai !== -1 || bi !== -1) return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);

    return a.name.localeCompare(b.name);
  });
}, [allDestinations]);


  const destinations = showAll ? ordered : ordered.slice(0, 5);
  const spansPattern = showAll ? EXPLORE_SPANS : HOME_SPANS;

  return (
    <section id="destinations" className="py-24 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Explore the World</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Popular <span className="text-accent">Destinations</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Discover where our travelers love to go, curated experiences for every journey
          </p>

          <div className="mt-8 flex justify-center">
            <Link to="/explore">
              <Button variant="outline" className="rounded-full px-6 group">
                View All Destinations
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>


        {/* ✅ Bento Grid (stable + shaped) */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:auto-rows-[250px] md:grid-flow-dense">
            {destinations.map((destination, index) => {
              const span = spansPattern[index % spansPattern.length];
              const isTall = span.includes("row-span-2") || span.includes("col-span-4");

              return (
                <Link
                  key={destination.id}
                  to={`/destination/${destination.id}`}
                  className={`group relative rounded-3xl overflow-hidden ${span}`}
                  onMouseEnter={() => setHoveredId(destination.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* stronger overlay so text never “disappears” */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        hoveredId === destination.id
                          ? "bg-gradient-to-t from-black/90 via-black/60 to-black/20"
                          : "bg-gradient-to-t from-black/85 via-black/45 to-transparent"
                      }`}
                    />
                  </div>

                  {/* Region badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                      <MapPin className="w-3 h-3 mr-1" />
                      {destination.region}
                    </Badge>
                  </div>

                  {/* ✅ Content box pinned bottom (fixes misplaced tags/text) */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <div className="p-0">
                    {/* <div className="rounded-2xl bg-black/25 backdrop-blur-sm border border-white/10 p-4 md:p-5"> */}
                      <h3
                        className={`
                          font-bold text-white leading-tight drop-shadow
                          ${isTall ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"}
                        `}
                      >
                        {destination.name}
                      </h3>

                      {/* show description only if there's room */}
                      {isTall && (
                        <p className="text-white/85 mt-2 line-clamp-2">
                          {destination.description}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mt-3">
                        {destination.tags.slice(0, isTall ? 4 : 3).map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Optional subtle CTA */}
                      <div className="mt-3 flex items-center gap-2 text-accent font-medium">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
