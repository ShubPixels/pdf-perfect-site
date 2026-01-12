import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { tours } from "@/data/tours";

// Import images
import japanImage from "@/assets/japan-tour.jpg";
import dubaiImage from "@/assets/dubai-tour.jpg";
import europeImage from "@/assets/europe-tour.jpg"; 
import singaporeimage from "@/assets/Singapore/1.png";
import southafrica from "@/assets/SA/1.png";
import baliImage from "@/assets/bali-tour.jpg";

// Map tour IDs to images and display data
const destinationImages: Record<string, string> = {
  'japan-2026': japanImage,
  'dubai-2025': dubaiImage,
  'europe-2026': europeImage,
  'singapore-malaysia-2025': singaporeimage,
  'rajasthan-2025': southafrica,
  'kerala-2025': baliImage,
  'andaman-2025': baliImage,
  'nepal-2025': japanImage,
  'bali-2025': baliImage,
  'baku-2025': dubaiImage,
  'australia-2026': europeImage,
};

const destinationMeta: Record<string, { region: string; tags: string[]; stats: { tours: number; travelers: number } }> = {
  'japan-2026': { region: 'Asia', tags: ['Culture', 'Scenic', 'Heritage'], stats: { tours: 12, travelers: 450 } },
  'dubai-2025': { region: 'Middle East', tags: ['Modern', 'Shopping', 'Luxury'], stats: { tours: 18, travelers: 680 } },
  'europe-2026': { region: 'Europe', tags: ['Historic', 'Scenic', 'First-time'], stats: { tours: 24, travelers: 890 } },
  'singapore-malaysia-2025': { region: 'Asia', tags: ['Citylines', 'Culture', 'Relaxed'], stats: { tours: 8, travelers: 320 } },
  'rajasthan-2025': { region: 'India', tags: ['Heritage', 'Culture', 'Royal'], stats: { tours: 15, travelers: 520 } },
  'kerala-2025': { region: 'India', tags: ['Backwaters', 'Nature', 'Relaxing'], stats: { tours: 10, travelers: 380 } },
  'andaman-2025': { region: 'India', tags: ['Beach', 'Islands', 'Adventure'], stats: { tours: 8, travelers: 290 } },
  'nepal-2025': { region: 'Asia', tags: ['Spiritual', 'Mountains', 'Heritage'], stats: { tours: 6, travelers: 180 } },
  'bali-2025': { region: 'Asia', tags: ['Beach', 'Culture', 'Romantic'], stats: { tours: 10, travelers: 420 } },
  'baku-2025': { region: 'Asia', tags: ['Modern', 'Historic', 'Unique'], stats: { tours: 5, travelers: 150 } },
  'australia-2026': { region: 'Oceania', tags: ['Wildlife', 'Nature', 'Adventure'], stats: { tours: 4, travelers: 120 } },
};

interface DestinationsProps {
  showAll?: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  }),
};

export const Destinations = ({ showAll = false }: DestinationsProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Get destinations from tours data
  const allDestinations = tours.map(tour => ({
    id: tour.id,
    name: tour.shortTitle,
    region: destinationMeta[tour.id]?.region || tour.region,
    tags: destinationMeta[tour.id]?.tags || tour.categories.slice(0, 3),
    description: tour.tagline,
    image: destinationImages[tour.id] || dubaiImage,
    stats: destinationMeta[tour.id]?.stats || { tours: 5, travelers: 200 },
  }));

  // Show 5 on home, all on explore
  const destinations = showAll ? allDestinations : allDestinations.slice(0, 5);

  return (
    <section id="destinations" className="py-24 bg-secondary/30 scroll-mt-20 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">Explore the World</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Popular <motion.span 
                className="text-primary inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Destinations
              </motion.span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Discover where our travelers love to go, curated experiences for every journey
            </p>
          </div>
          <Link to="/explore" className="mt-6 md:mt-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="rounded-full px-6 group hover:bg-primary hover:text-primary-foreground transition-colors">
                View All Destinations
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link 
                to={`/destination/${destination.id}`}
                className={`group relative rounded-3xl overflow-hidden block ${
                  index === 0 || index === 3 ? "md:col-span-1" : "md:col-span-1"
                } ${index === 0 ? "md:row-span-2 min-h-[500px]" : "min-h-[250px]"}`}
                onMouseEnter={() => setHoveredId(destination.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <motion.div 
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <motion.img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      animate={{
                        background: hoveredId === destination.id 
                          ? "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%)"
                          : "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Region Badge */}
                    <motion.div 
                      className="mb-auto"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-colors">
                        <MapPin className="w-3 h-3 mr-1" />
                        {destination.region}
                      </Badge>
                    </motion.div>

                    {/* Destination Info */}
                    <div>
                      <motion.h3 
                        className={`font-bold text-white mb-2 ${
                          index === 0 ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
                        }`}
                        animate={{ y: hoveredId === destination.id ? 0 : 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {destination.name}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-white/80 mb-4"
                        animate={{ 
                          opacity: hoveredId === destination.id ? 1 : 0,
                          y: hoveredId === destination.id ? 0 : 10
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {destination.description}
                      </motion.p>

                      {/* Tags */}
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-4"
                        animate={{ 
                          opacity: hoveredId === destination.id ? 1 : 0.7
                        }}
                      >
                        {destination.tags.map((tag, i) => (
                          <motion.span 
                            key={tag} 
                            className="text-xs px-3 py-1 rounded-full bg-primary/30 text-white backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * i }}
                            whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--cta) / 0.5)" }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>

                      {/* Stats & CTA */}
                      <motion.div 
                        className="flex items-center justify-between"
                        animate={{ 
                          opacity: hoveredId === destination.id ? 1 : 0,
                          y: hoveredId === destination.id ? 0 : 15
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex gap-4 text-white/60 text-sm">
                          <span>{destination.stats.tours} tours</span>
                          <span>{destination.stats.travelers}+ travelers</span>
                        </div>
                        <motion.div 
                          className="flex items-center gap-2 text-cta font-medium"
                          whileHover={{ x: 5 }}
                        >
                          <span>Explore</span>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover sparkle effect */}
                  {hoveredId === destination.id && (
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      <Sparkles className="w-6 h-6 text-cta" />
                    </motion.div>
                  )}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
