import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { CurrentTours } from "@/components/home/CurrentTours";
import { UpcomingDepartures } from "@/components/home/UpcomingDepartures";
import { Destinations } from "@/components/home/Destinations";
import { Community } from "@/components/home/Community";
import { LearnLifestyle } from "@/components/home/LearnLifestyle";
import { Quote, Compass, Map, Heart, Sparkles, Plane, Globe, Camera } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";

const Index = () => {
  const bridge1 = useScrollReveal();
  const tours = useScrollReveal();
  const bridge2 = useScrollReveal();
  const bridge3 = useScrollReveal();
  const departures = useScrollReveal();
  const bridge4 = useScrollReveal();
  const destinations = useScrollReveal();
  const bridge5 = useScrollReveal();
  const community = useScrollReveal();
  const bridge6 = useScrollReveal();
  const bridge7 = useScrollReveal();
  const learnLifestyle = useScrollReveal();
  const finalBridge = useScrollReveal();
  const [bridge1Done, setBridge1Done] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [showCurrentTours, setShowCurrentTours] = useState(false);


useEffect(() => {
  if (bridge1.isVisible) {
    setShowStory(true);

    // Duration matches typing (3s) + fade (0.7s)
    const timer = setTimeout(() => {
      setShowStory(false);          // fade story card OUT
      setShowCurrentTours(true);    // fade current tours IN
    }, 3700);

    return () => clearTimeout(timer);
  }
}, [bridge1.isVisible]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 via-background to-primary/10 relative overflow-hidden">
      {/* Page-level decorative patterns */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-cta/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cta/5 rounded-full blur-3xl" />
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>
      <Navigation />
      <main className="relative z-10">
        <Hero />
        
        {/* Story Bridge 1 - Immersive Transition */}
        <div className="relative min-h-[60vh]">
          {/* Story card (top layer) */}
          <div
            ref={bridge1.ref}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
              showStory ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative max-w-4xl mx-auto px-4">
              {/* Floating icons around the quote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showStory ? 1 : 0 }}
                className="absolute -top-8 -left-8 md:-left-16"
              >
                <Plane className="h-8 w-8 text-cta/40 animate-pulse" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showStory ? 1 : 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -right-8 md:-right-12"
              >
                <Globe className="h-6 w-6 text-highlight/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showStory ? 1 : 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 left-1/4"
              >
                <Camera className="h-7 w-7 text-primary/40 animate-pulse" style={{ animationDelay: '1s' }} />
              </motion.div>
              
              <div className="bg-card/20 backdrop-blur-xl border border-border/30 rounded-3xl p-8 md:p-12">
                <Sparkles className="h-8 w-8 text-cta mx-auto mb-6" />
                <p className="text-xl md:text-3xl font-heading typewriter text-center leading-relaxed">
                  Right now, at this very moment, someone from our community is waking up in a new country, <br className="hidden md:block"/>camera in hand, ready to create memories that will last a lifetime...
                </p>
              </div>
            </div>
          </div>

          {/* Current Tours (bottom layer) */}
          <div
            className={`transition-all duration-700 ${
              showCurrentTours ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CurrentTours />
          </div>
        </div>



        {/* Story Bridge 2 - Creative Testimonial */}
        <div 
          ref={bridge2.ref}
          className={`relative py-20 transition-all duration-1000 ${
            bridge2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto relative">
              {/* Background decorative element */}
              <div className="absolute inset-0 bg-gradient-to-r from-highlight/5 via-cta/10 to-highlight/5 rounded-3xl blur-2xl" />
              
              <div className="relative grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                {/* Left decorative line */}
                <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-border to-border" />
                
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/20 rounded-full mb-6">
                    <Heart className="h-4 w-4 text-cta" />
                    <span className="text-sm font-medium text-foreground">Traveler Story</span>
                  </div>
                </div>
                
                {/* Right decorative line */}
                <div className="hidden md:block h-px bg-gradient-to-l from-transparent via-border to-border" />
              </div>
              
              <blockquote className="relative text-center mt-8">
                <Quote className="h-16 w-16 text-highlight/20 mx-auto mb-4" />
                <p className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  "I never thought I'd travel internationally at 65. But Sun Tourism made it so comfortable and easy.
                  The group became my travel family, and Japan became the trip of a lifetime."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-highlight to-cta p-0.5">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="text-2xl font-bold text-highlight">SM</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Sunita Mehta</p>
                    <p className="text-sm text-muted-foreground">Pune • Japan Tour, October 2024</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Story Bridge 3 - Invitation */}
        <div 
          ref={bridge3.ref}
          className={`relative py-16 transition-all duration-1000 ${
            bridge3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-card/30 backdrop-blur-sm border border-border/30 rounded-3xl p-10 text-center overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-highlight rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-highlight rounded-br-3xl" />
                </div>
                
                <div className="relative">
                  <Compass className="h-12 w-12 text-cta mx-auto mb-6" />
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    And Soon, It Could Be <span className="text-highlight">You</span>
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Your next adventure is closer than you think. Take a look at what's coming up...
                  </p>
                  <div className="flex justify-center gap-2 mt-6">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-cta animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={departures.ref}
          className={`transition-all duration-1000 ${
            departures.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <UpcomingDepartures />
        </div>

        {/* Story Bridge 4 - Destination Intro */}
        <div 
          ref={bridge4.ref}
          className={`relative py-20 overflow-hidden transition-all duration-1000 ${
            bridge4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Visual element */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="h-32 bg-gradient-to-br from-highlight/20 to-highlight/5 rounded-2xl flex items-center justify-center">
                        <span className="text-4xl">🗼</span>
                      </div>
                      <div className="h-48 bg-gradient-to-br from-cta/20 to-cta/5 rounded-2xl flex items-center justify-center">
                        <span className="text-5xl">🏔️</span>
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                        <span className="text-5xl">🌊</span>
                      </div>
                      <div className="h-32 bg-gradient-to-br from-highlight/20 to-highlight/5 rounded-2xl flex items-center justify-center">
                        <span className="text-4xl">🏛️</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Text */}
                <div>
                  <Map className="h-10 w-10 text-highlight mb-6" />
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    Where Will Your Story <span className="text-cta">Take You?</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every destination has its own story to tell. From the bustling streets of Tokyo to the 
                    romantic canals of Venice, from the modern marvels of Dubai to the tranquil beaches of Bali.
                    Each journey is crafted with care, each moment designed to become a cherished memory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={destinations.ref}
          className={`transition-all duration-1000 ${
            destinations.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Destinations />
        </div>

        {/* Story Bridge 5 - Community Lead */}
        <div 
          ref={bridge5.ref}
          className={`relative py-20 transition-all duration-1000 ${
            bridge5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-highlight/20 to-cta/20 rounded-full blur-xl" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/30 rounded-full px-6 py-3">
                  <span className="text-sm font-medium text-muted-foreground">Real Stories from Real Travelers</span>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                But Don't Just Take Our <span className="text-highlight">Word For It</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                The best stories come from those who've traveled with us. Real photos, real moments, 
                real friendships formed thousands of miles from home.
              </p>
              
              {/* Decorative photo stack preview */}
              <div className="flex justify-center items-center gap-4 mt-10">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-highlight/30 to-cta/30 border border-border/50"
                    style={{ 
                      transform: `rotate(${(i - 2) * 8}deg)`,
                      zIndex: 5 - Math.abs(i - 2)
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          ref={community.ref}
          className={`transition-all duration-1000 ${
            community.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Community />
        </div>

        {/* Story Bridge 6 - Learning Transition */}
        <div 
          ref={bridge6.ref}
          className={`relative py-20 transition-all duration-1000 ${
            bridge6.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-gradient-to-r from-card/50 via-card/80 to-card/50 backdrop-blur-sm border border-border/30 rounded-3xl p-10 overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cta to-cta/60 flex items-center justify-center mx-auto md:mx-0">
                    <Quote className="h-10 w-10 text-foreground" />
                  </div>
                  
                  <blockquote>
                    <p className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                      "The tour managers didn't just show us places, they taught us how to travel smart. 
                      Now I feel confident exploring on my own too!"
                    </p>
                    <footer className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center">
                        <span className="font-bold text-highlight">RK</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Rajesh Kulkarni</p>
                        <p className="text-sm text-muted-foreground">Mumbai • Europe Tour, August 2024</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Bridge 7 - Learning Intro */}
        <div 
          ref={bridge7.ref}
          className={`relative py-16 transition-all duration-1000 ${
            bridge7.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-highlight/10 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-highlight" />
              <span className="text-sm font-medium text-highlight">Travel Wisdom</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Start Your Journey with <span className="text-cta">Knowledge</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Whether you're a first-time traveler or a seasoned explorer, there's always something new to learn.
              Our guides and tips will help you prepare for the adventure of a lifetime.
            </p>
          </div>
        </div>

        <div 
          ref={learnLifestyle.ref}
          className={`transition-all duration-1000 ${
            learnLifestyle.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <LearnLifestyle />
        </div>

        {/* Final Story Close */}
        <div 
          ref={finalBridge.ref}
          className={`relative py-24 transition-all duration-1000 ${
            finalBridge.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-highlight/10 via-cta/20 to-highlight/10 rounded-3xl blur-3xl" />
              
              <div className="relative bg-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/20 rounded-full mb-8">
                  <Plane className="h-4 w-4 text-cta" />
                  <span className="text-sm font-medium text-foreground">Your Adventure Awaits</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  Your Story <span className="text-highlight">Starts Here</span>
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
