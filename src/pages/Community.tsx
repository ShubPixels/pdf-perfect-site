import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Community as CommunitySection } from "@/components/home/Community";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Camera, ArrowRight, Quote, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import japanCommunity1 from "@/assets/destinations/japan/community/20250328_105134.jpg";
import dubaiCommunity1 from "@/assets/destinations/dubai/community/IMG_0068.jpg";
import baliCommunity1 from "@/assets/destinations/bali/community/WhatsApp Image 2025-01-04 at 18.34.46.jpeg";
import europeCommunity1 from "@/assets/destinations/europe/community/WhatsApp Image 2024-05-08 at 03.09.00.jpeg";
import australiaCommunity1 from "@/assets/destinations/australia/community/20171031_095347.jpg";
import omanCommunity1 from "@/assets/destinations/oman/community/WhatsApp Image 2025-10-25 at 1.12.45 PM.jpeg";

const featuredStories = [
  {
    id: 1,
    title: "Cherry Blossoms & Temple Bells",
    location: "Japan",
    date: "October 2025",
    excerpt: "24 travelers from Pune discovered the art of slow living in Kyoto, from tea ceremonies to bamboo forests that whispered ancient secrets.",
    image: japanCommunity1,
    quote: "I've never felt more at peace than standing under the cherry blossoms in Kyoto.",
    quoteAuthor: "Priya Sharma",
  },
  {
    id: 2,
    title: "Desert Sunsets & City Lights",
    location: "Dubai",
    date: "September 2025",
    excerpt: "A family group experienced the magic of desert safaris at golden hour, followed by dinners overlooking the glittering skyline.",
    image: dubaiCommunity1,
    quote: "The desert safari at sunset was the most beautiful thing I've ever seen.",
    quoteAuthor: "Suresh Joshi",
  },
  {
    id: 3,
    title: "Temples, Rice Fields & Ocean Waves",
    location: "Bali",
    date: "January 2025",
    excerpt: "Sunrise at Uluwatu, offering rituals at water temples, and evenings spent watching traditional Kecak dance under the stars.",
    image: baliCommunity1,
    quote: "Bali changed how I see the world. The culture, the people, everything was magical.",
    quoteAuthor: "Mandar Patil",
  },
  {
    id: 4,
    title: "Castles, Canals & Cobblestones",
    location: "Europe",
    date: "August 2025",
    excerpt: "From the Eiffel Tower at dusk to gondola rides in Venice - a 15-day journey across 6 countries that felt like a dream.",
    image: europeCommunity1,
    quote: "Waking up in a different country every few days - that's the kind of life I want.",
    quoteAuthor: "Rajesh Kulkarni",
  },
  {
    id: 5,
    title: "Land of the Southern Cross",
    location: "Australia",
    date: "April 2025",
    excerpt: "Koalas, coral reefs, and the vast outback - this group explored the wonders of the land down under.",
    image: australiaCommunity1,
    quote: "Holding a koala was a dream I didn't know I had. Thank you Sun Tourism!",
    quoteAuthor: "Anjali Desai",
  },
  {
    id: 6,
    title: "Frankincense Trails & Fjords",
    location: "Oman",
    date: "June 2025",
    excerpt: "Ancient forts, turquoise wadis, and the warmth of Omani hospitality made this journey unforgettable.",
    image: omanCommunity1,
    quote: "Oman surprised us at every turn. A hidden gem we're so glad we discovered.",
    quoteAuthor: "Prakash & Deepa",
  },
];

const Stories = () => {
  const gallerySection = useScrollReveal();
  const ctaSection = useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Cinematic Hero */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background collage */}
          <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-30">
            {featuredStories.map((story) => (
              <div key={story.id} className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          
          <div className="relative z-10 text-center px-4 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Travel Stories</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Stories Worth <span className="text-accent">Telling</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Real journeys, real people, real emotions. Every photo here carries a story of discovery, 
                laughter, and the kind of memories that stay with you forever.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Stories - Magazine Layout */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
              {featuredStories.map((story, index) => {
                const isReversed = index % 2 !== 0;
                
                return (
                  <motion.article
                    key={story.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative"
                  >
                    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${isReversed ? 'md:[direction:rtl]' : ''}`}>
                      {/* Image */}
                      <div className={`${isReversed ? 'md:[direction:ltr]' : ''}`}>
                        <div className="relative rounded-3xl overflow-hidden h-[300px] shadow-xl sm:h-[380px] md:h-[450px] group">
                          <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span className="text-white font-medium text-sm">{story.location}</span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/30 backdrop-blur-sm rounded-full">
                              <Camera className="w-3 h-3 text-white/70" />
                              <span className="text-white/70 text-xs">{story.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`${isReversed ? 'md:[direction:ltr]' : ''} space-y-5`}>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold uppercase tracking-widest text-accent">
                            {story.location}
                          </span>
                          <span className="w-8 h-px bg-accent" />
                          <span className="text-xs text-muted-foreground">{story.date}</span>
                        </div>
                        
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                          {story.title}
                        </h2>
                        
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                          {story.excerpt}
                        </p>

                        {/* Inline quote */}
                        <div className="relative bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-5 shadow-xl">
                          <Quote className="w-6 h-6 text-accent/30 mb-2" />
                          <p className="text-foreground italic text-sm md:text-base leading-relaxed mb-3">
                            "{story.quote}"
                          </p>
                          <p className="text-xs text-muted-foreground font-medium">- {story.quoteAuthor}</p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Divider with sparkle */}
        <div className="flex items-center justify-center py-8">
          <div className="w-16 h-px bg-border" />
          <Sparkles className="w-5 h-5 text-accent mx-4" />
          <div className="w-16 h-px bg-border" />
        </div>

        {/* Full Photo Gallery */}
        <div
          ref={gallerySection.ref}
          className={`transition-all duration-1000 ${
            gallerySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <CommunitySection variant="page" showShareCta={false} />
        </div>

        {/* Share Your Story CTA */}
        <div
          ref={ctaSection.ref}
          className={`py-20 transition-all duration-1000 ${
            ctaSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto relative">
              <div className="relative bg-card backdrop-blur-xl border border-border/30 rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-xl">
                <div className="absolute top-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-highlight/10 rounded-full blur-3xl" />
                
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Your Story Deserves to be <span className="text-accent">Told</span>
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                    Travelled with us? Your photos and stories inspire others to take the leap. 
                    Share via WhatsApp or tag us on Instagram and get featured on this page!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-accent text-white hover:bg-accent/90 font-bold px-8 py-5 text-base rounded-full">
                      <a href="https://wa.link/97984j" target="_blank" rel="noopener noreferrer">
                        Share via WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="px-8 py-5 text-base rounded-full">
                      <a href="https://www.instagram.com/suntourismpune/" target="_blank" rel="noopener noreferrer">
                        Tag us on Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Stories;
