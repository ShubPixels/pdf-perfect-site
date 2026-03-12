import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedStories } from "@/components/home/FeaturedStories";
import { TravelerQuoteStrip } from "@/components/home/TravelerQuoteStrip";
import { UpcomingDepartures } from "@/components/home/UpcomingDepartures";
import { LearnLifestyle } from "@/components/home/LearnLifestyle";
import { BlogsSection } from "@/components/home/BlogsSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { Community } from "@/components/home/Community";
import { Compass, Plane, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";
import img1 from "../assets/homepage/1.png";
import img2 from "../assets/homepage/2.png";
import img3 from "../assets/homepage/3.png";
import img4 from "../assets/homepage/4.png";

const Index = () => {
  const stories = useScrollReveal();
  const quoteStrip = useScrollReveal();
  const photoBridge = useScrollReveal();
  const bridge3 = useScrollReveal();
  const departures = useScrollReveal();
  const reviews = useScrollReveal();
  const community = useScrollReveal();
  const learnLifestyle = useScrollReveal();
  const blogs = useScrollReveal();
  const philosophy = useScrollReveal();
  const finalBridge = useScrollReveal();

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 via-background to-primary/10 relative overflow-hidden">
      {/* Page-level decorative patterns */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-cta/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cta/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>
      <Navigation />
      <main className="relative z-10">
        <Hero />

        {/* Featured Stories Section */}
        <div
          ref={stories.ref}
          className={`transition-all duration-1000 ${
            stories.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <FeaturedStories />
        </div>

        {/* Traveler Quotes Strip */}
        <div
          ref={quoteStrip.ref}
          className={`transition-all duration-1000 ${
            quoteStrip.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <TravelerQuoteStrip />
        </div>

        {/* Photo Mosaic Bridge - Travel imagery grid */}
        <div
          ref={photoBridge.ref}
          className={`relative py-20 overflow-hidden transition-all duration-1000 ${
            photoBridge.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Visual element */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="relative h-32 rounded-2xl overflow-hidden bg-white/60 shadow-sm ring-1 ring-black/5">
                        <img src={img1} alt="Travel moment 1" className="absolute inset-0 w-full h-full object-cover [object-position:center_top]" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/15" />
                      </div>
                      <div className="relative h-48 rounded-2xl overflow-hidden bg-white/60 shadow-sm ring-1 ring-black/5">
                        <img src={img2} alt="Travel moment 2" className="absolute inset-0 w-full h-full object-cover [object-position:center]" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/15" />
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="relative h-48 rounded-2xl overflow-hidden bg-white/60 shadow-sm ring-1 ring-black/5">
                        <img src={img3} alt="Travel moment 3" className="absolute inset-0 w-full h-full object-cover [object-position:center_35%]" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/15" />
                      </div>
                      <div className="relative h-32 rounded-2xl overflow-hidden bg-white/60 shadow-sm ring-1 ring-black/5">
                        <img src={img4} alt="Travel moment 4" className="absolute inset-0 w-full h-full object-cover [object-position:center]" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/15" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Text */}
                <div>
                  <Compass className="h-10 w-10 text-highlight mb-6" />
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    Where Will Your Story <span className="text-accent">Begin?</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every journey starts with a spark of curiosity. From the bustling streets of Tokyo to the 
                    romantic canals of Venice, from the modern marvels of Dubai to the tranquil rice terraces of Bali — 
                    each story is waiting to be written by you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Photo Memories (compact on home) */}
        <div
          ref={community.ref}
          className={`transition-all duration-1000 ${
            community.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Community />
        </div>

        {/* Story Bridge - Invitation */}
        <div 
          ref={bridge3.ref}
          className={`relative py-16 transition-all duration-1000 ${
            bridge3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-card/30 backdrop-blur-sm border border-border/30 rounded-3xl p-10 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-highlight rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-highlight rounded-br-3xl" />
                </div>
                <div className="relative">
                  <Compass className="h-12 w-12 text-accent mx-auto mb-6" />
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    And Soon, It Could Be <span className="text-highlight">You</span>
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Your next adventure is closer than you think. Take a look at what's coming up...
                  </p>
                  <div className="flex justify-center gap-2 mt-6">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Departures */}
        <div 
          ref={departures.ref}
          className={`transition-all duration-1000 ${
            departures.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <UpcomingDepartures />
        </div>

        {/* Reviews Section */}
        <div 
          ref={reviews.ref}
          className={`relative py-24 transition-all duration-1000 ${
            reviews.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-highlight/20 to-cta/20 rounded-full blur-xl" />
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border/30 rounded-full px-6 py-3">
                    <span className="text-sm font-medium text-muted-foreground">⭐ 75k+ Happy Travelers</span>
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  But Don't Just Take Our <span className="text-highlight">Word For It</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Real stories from real travelers. These memories were made with Sun Touriism.
                </p>
              </div>

              {/* Testimonial Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-2 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cta/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-highlight/10 rounded-full blur-xl" />
                  <div className="relative">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-accent text-xl">★</span>
                      ))}
                    </div>
                    <Quote className="h-10 w-10 text-highlight/30 mb-4" />
                    <p className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                      "We planned Personalised Bali tour and Sun Touriism helped us plan and execute exactly as we wanted. 
                      Once tour is planned, Sun Tour gives experience of sit back, relax and enjoy. 
                      Very well communication, very well execution. Always dil se dil tak ❤️"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-highlight to-cta p-0.5">
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                          <span className="text-xl font-bold text-highlight">MP</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Mandar Patil</p>
                        <p className="text-sm text-muted-foreground">Bali Customized Tour • 2024</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                    <p className="text-foreground mb-4 leading-relaxed">
                      "Best tour experience ever! The Ghar Se Ghar Tak service is absolutely amazing. 
                      No stress from start to end. Highly recommended for families!"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-bold text-primary text-sm">SJ</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Suresh Joshi</p>
                      <p className="text-xs text-muted-foreground">Dubai Tour • Dec 2024</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                    <p className="text-foreground mb-4 leading-relaxed">
                      "Tour managers didn't just show us places, they taught us how to travel smart. 
                      Now I feel confident exploring on my own too!"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center">
                      <span className="font-bold text-highlight text-sm">RK</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Rajesh Kulkarni</p>
                      <p className="text-xs text-muted-foreground">Europe Tour • Aug 2024</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                    <p className="text-foreground mb-4 leading-relaxed">
                      "As senior citizens, we were worried about long tours. But Sun Touriism made our 
                      Kerala trip so comfortable. Everything was taken care of!"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-cta/20 flex items-center justify-center">
                      <span className="font-bold text-cta text-sm">PD</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Prakash & Deepa</p>
                      <p className="text-xs text-muted-foreground">Kerala Tour • Jan 2025</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                    <p className="text-foreground mb-4 leading-relaxed">
                      "Singapore Malaysia trip with free Sri Lanka was unbelievable value! 
                      Three countries, zero hassle. Will definitely book again!"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-bold text-primary text-sm">AM</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Amit Mehta</p>
                      <p className="text-xs text-muted-foreground">Singapore Malaysia • 2024</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-highlight mb-1">75k+</p>
                  <p className="text-sm text-muted-foreground">Happy Travelers</p>
                </div>
                <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-1">18+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-1">25+</p>
                  <p className="text-sm text-muted-foreground">Destinations</p>
                </div>
                <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-highlight mb-1">4.7</p>
                  <p className="text-sm text-muted-foreground">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learn & Lifestyle */}
        <div 
          ref={learnLifestyle.ref}
          className={`transition-all duration-1000 ${
            learnLifestyle.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <LearnLifestyle />
        </div>

        {/* Blogs */}
        <div 
          ref={blogs.ref}
          className={`transition-all duration-1000 ${
            blogs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <BlogsSection />
        </div>

        {/* Philosophy */}
        <div 
          ref={philosophy.ref}
          className={`transition-all duration-1000 ${
            philosophy.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <PhilosophySection />
        </div>

        {/* Final CTA */}
        <div 
          ref={finalBridge.ref}
          className={`relative py-24 transition-all duration-1000 ${
            finalBridge.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute inset-0 rounded-3xl blur-3xl" />
              <div className="relative bg-card backdrop-blur-xl border border-border/30 rounded-3xl p-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/20 rounded-full mb-8">
                  <Plane className="h-4 w-4 text-cta" />
                  <span className="text-sm font-medium text-foreground">Your Adventure Awaits</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  Your Story <span className="text-accent">Starts Here</span>
                </h3>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                  Every great journey begins with a single step. Hundreds of travelers have already taken theirs with us.
                  Explore the packages, pick your destination, and get ready to create memories that will last forever.
                </p>
                <a
                  href="https://suntourismpune.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-cta text-foreground rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-cta/30 hover:scale-105 transition-all duration-300"
                >
                  <span>Explore Tour Packages</span>
                  <Plane className="h-5 w-5" />
                </a>
                <p className="text-sm text-muted-foreground mt-6">
                  Visit suntourismpune.co.in for bookings and pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
