import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import japanCommunity1 from "@/assets/japan community/20250328_105134.jpg";
import dubaiCommunity1 from "@/assets/dubai community/IMG_0068.jpg";
import baliCommunity1 from "@/assets/bali community/WhatsApp Image 2025-01-04 at 18.34.46.jpeg";
import europeCommunity1 from "@/assets/europe community/WhatsApp Image 2024-05-08 at 03.09.00.jpeg";
import australiaCommunity1 from "@/assets/australia community/20171031_095347.jpg";
import omanCommunity1 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 1.12.45 PM.jpeg";

const stories = [
  {
    id: 1,
    title: "Cherry Blossoms & Temple Bells",
    location: "Japan",
    excerpt: "24 travelers from Pune discovered the art of slow living in Kyoto, from tea ceremonies to bamboo forests that whispered ancient secrets.",
    image: japanCommunity1,
    travelers: 24,
    date: "October 2025",
  },
  {
    id: 2,
    title: "Desert Sunsets & City Lights",
    location: "Dubai",
    excerpt: "A family group experienced the magic of desert safaris at golden hour, followed by dinners overlooking the glittering skyline.",
    image: dubaiCommunity1,
    travelers: 32,
    date: "September 2025",
  },
  {
    id: 3,
    title: "Temples, Rice Fields & Ocean Waves",
    location: "Bali",
    excerpt: "Sunrise at Uluwatu, offering rituals at water temples, and evenings spent watching traditional Kecak dance under the stars.",
    image: baliCommunity1,
    travelers: 18,
    date: "January 2025",
  },
  {
    id: 4,
    title: "Castles, Canals & Cobblestones",
    location: "Europe",
    excerpt: "From the Eiffel Tower at dusk to gondola rides in Venice - a 15-day journey across 6 countries that felt like a dream.",
    image: europeCommunity1,
    travelers: 28,
    date: "August 2025",
  },
  {
    id: 5,
    title: "Land of the Southern Cross",
    location: "Australia",
    excerpt: "Koalas, coral reefs, and the vast outback - this group explored the wonders of the land down under with childlike wonder.",
    image: australiaCommunity1,
    travelers: 20,
    date: "April 2025",
  },
  {
    id: 6,
    title: "Frankincense Trails & Fjords",
    location: "Oman",
    excerpt: "Ancient forts, turquoise wadis, and the warmth of Omani hospitality made this journey one of our most unforgettable.",
    image: omanCommunity1,
    travelers: 22,
    date: "June 2025",
  },
];

export const FeaturedStories = () => {
  const featured = stories[0];
  const grid = stories.slice(1, 5);

  return (
    <section className="py-16 md:py-28 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Stories From The Road</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4">
            Every Trip Has a <span className="text-accent">Story</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Real journeys. Real moments. Told by the people who lived them.
          </p>
        </motion.div>

        {/* Featured Story - Large Editorial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <Link to="/stories" className="group block">
            <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[520px]">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-accent/90 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      Featured Story
                    </span>
                    <span className="text-white/60 text-sm">{featured.date}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
                    {featured.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-2">{featured.location}</p>
                  <p className="text-white/80 text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
                    {featured.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <span className="text-white/60 text-sm">{featured.travelers} travelers</span>
                    <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                      Read Story <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Story Grid - 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {grid.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to="/stories" className="group block">
                <div className="relative rounded-2xl overflow-hidden h-[280px] sm:h-[320px]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <p className="text-accent text-xs font-medium uppercase tracking-wider mb-1">
                      {story.location}
                    </p>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 leading-snug">
                      {story.title}
                    </h4>
                    <p className="text-white/60 text-xs line-clamp-2 mb-3">
                      {story.excerpt}
                    </p>
                    <div className="flex justify-end">
                      <span className="text-accent text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Stories CTA */}
        <div className="text-center">
          <Link to="/stories">
            <Button variant="outline" size="lg" className="rounded-full px-8 py-4 group text-base">
              Explore All Stories
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
