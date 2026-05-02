import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Community as CommunitySection } from "@/components/home/Community";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Camera, ArrowRight, Quote, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import keralaCommunity1 from "@/assets/stories/featured/kerala-nanda.webp";
import japanCommunity1 from "@/assets/stories/featured/japan-sheetal.webp";
import dubaiCommunity1 from "@/assets/stories/featured/dubai-poonam.webp";
import kashmirCommunity1 from "@/assets/stories/featured/kashmir-arunansu.webp";
import bhutanCommunity1 from "@/assets/stories/featured/bhutan-bhal.webp";
import singaporeCommunity1 from "@/assets/stories/featured/singapore-akanksha.webp";

const featuredStories = [
  {
    id: 1,
    title: "God's Own Country",
    location: "Kerala",
    date: "Traveler Story",
    excerpt: "A Kerala journey remembered for thoughtful planning, smooth arrangements, and the beauty that makes the state live up to its name.",
    image: keralaCommunity1,
    quote: "Kerala truly lives up to its name, God's Own Country. The entire program was well planned and smoothly arranged.",
    quoteAuthor: "Nanda Kundnani",
  },
  {
    id: 2,
    title: "A Lifetime Experience",
    location: "Japan",
    date: "26 March 2025",
    excerpt: "A Japan journey with Sun Tourism remembered as a once-in-a-lifetime travel experience.",
    image: japanCommunity1,
    quote: "We recently travelled to Japan (26th March 2025) with Sun Touriisum and I must say, it was a Lifetime experience !!!",
    quoteAuthor: "Sheetal Somwanshi",
  },
  {
    id: 3,
    title: "Excellent Dubai Memories",
    location: "Dubai",
    date: "Traveler Story",
    excerpt: "A Dubai trip remembered as a fabulous, superlative experience enjoyed from the first day to the end.",
    image: dubaiCommunity1,
    quote: "Dubai Trip was excellent. Superlative to be precise. Fabulous experience. We all enjoyed at core. Right from day 01 to end of trip.",
    quoteAuthor: "Poonam Singh",
  },
  {
    id: 4,
    title: "Culture Without the Rush",
    location: "Kashmir",
    date: "Traveler Story",
    excerpt: "A Kashmir itinerary planned with balance, giving travelers time to rest while still enjoying local culture.",
    image: kashmirCommunity1,
    quote: "The itinerary was planned in such a professional manner, it was not at all hectic and we got proper resting time and enjoyed the cities local culture too.",
    quoteAuthor: "Arunansu Sen",
  },
  {
    id: 5,
    title: "Ghar Se Ghar Tak",
    location: "Bhutan",
    date: "Traveler Story",
    excerpt: "A Bhutan tour remembered for the care behind Sun Tourism's Ghar Se Ghar Tak promise.",
    image: bhutanCommunity1,
    quote: 'Above all, "GHAR SE GHAR TAK" tagline & its implementation in true spirit makes the way of joy in the minds of each tourist and it automatically becomes "DIL SE DIL TAK" tour.',
    quoteAuthor: "Bhal Kulkarni",
  },
  {
    id: 6,
    title: "A Worry-Free Honeymoon",
    location: "Singapore",
    date: "Traveler Story",
    excerpt: "A customised Singapore honeymoon package that was smoothly managed from start to finish.",
    image: singaporeCommunity1,
    quote: "Though it was a customised package this time for me and Rohit for our honeymoon, it was well managed and we didn't have to worry for anything",
    quoteAuthor: "Akanksha Jamdar",
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
                          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-sm">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span className="text-foreground font-medium text-sm">{story.location}</span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                              <Camera className="w-3 h-3 text-accent" />
                              <span className="text-foreground/70 text-xs">{story.date}</span>
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
