import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { CurrentTours } from "@/components/home/CurrentTours";
import { UpcomingDepartures } from "@/components/home/UpcomingDepartures";
import { Destinations } from "@/components/home/Destinations";
import { Community } from "@/components/home/Community";
import { LearnLifestyle } from "@/components/home/LearnLifestyle";
import { BlogsSection } from "@/components/home/BlogsSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { Quote, Compass, Map, Heart, Sparkles, Plane, Globe, Camera } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";
import img1 from "../assets/homepage/1.png";
import img2 from "../assets/homepage/2.png";
import img3 from "../assets/homepage/3.png";
import img4 from "../assets/homepage/4.png";


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
  const blogs = useScrollReveal();
  const philosophy = useScrollReveal();
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
        
        <div
          ref={destinations.ref}
          className={`transition-all duration-1000 ${
            destinations.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Destinations />
        </div>
        {/* Story Bridge 1 - Immersive Transition */}
        {/* <div className="relative min-h-[60vh]"> */}
          {/* Story card (top layer) */}
          {/* <div
            ref={bridge1.ref}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
              showStory ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative max-w-4xl mx-auto px-4"> */}
              {/* Floating icons around the quote */}
              {/* <motion.div
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
                  Right now, at this moment, someone from our community is waking up in a new country, <br className="hidden md:block"/>camera in hand, create memories that will last a lifetime...
                </p>
              </div>
            </div>
          </div> */}

          {/* Current Tours (bottom layer) */}
          {/* <div
            className={`transition-all duration-700 ${
              showCurrentTours ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CurrentTours />
          </div> */}
        {/* </div> */}

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
                      <div className="relative h-32 rounded-2xl overflow-hidden bg-white/60 shadow-sm ring-1 ring-black/5">
                        <img
                          src={img1}
                          alt="Travel highlight 1"
                          className="absolute inset-0 w-full h-full object-cover [object-position:center_top]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/15" />
                      </div>

                      <div className="relative h-48 rounded-2xl overflow-hidden bg-white/60 shadow-sm ring-1 ring-black/5">
                        <img
                          src={img2}
                          alt="Travel highlight 2"
                          className="absolute inset-0 w-full h-full object-cover [object-position:center]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/15" />
                      </div>
                    </div>

                    <div className="space-y-4 pt-8">
                      <div className="relative h-48 rounded-2xl overflow-hidden bg-white/60 shadow-sm ring-1 ring-black/5">
                        <img
                          src={img3}
                          alt="Travel highlight 3"
                          className="absolute inset-0 w-full h-full object-cover [object-position:center_35%]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/15" />
                      </div>

                      <div className="relative h-32 rounded-2xl overflow-hidden bg-white/60 shadow-sm ring-1 ring-black/5">
                        <img
                          src={img4}
                          alt="Travel highlight 4"
                          className="absolute inset-0 w-full h-full object-cover [object-position:center]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/15" />
                      </div>
                    </div>

                  </div>
                </div>

                
                {/* Right side - Text */}
                <div>
                  <Map className="h-10 w-10 text-highlight mb-6" />
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    Where Will Your Story <span className="text-accent">Take You?</span>
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
          ref={community.ref}
          className={`transition-all duration-1000 ${
            community.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Community />
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

        <div 
          ref={departures.ref}
          className={`transition-all duration-1000 ${
            departures.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <UpcomingDepartures />
        </div>

        

        

        {/* Story Bridge 5 - Enhanced Testimonials Section */}
        <div 
          ref={bridge5.ref}
          className={`relative py-24 transition-all duration-1000 ${
            bridge5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

              {/* Testimonial Cards Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Testimonial 1 - Featured Large */}
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
                        <span key={i} className="text-accent  text-xl">★</span>
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

                {/* Testimonial 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
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

                {/* Testimonial 3 */}
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

                {/* Testimonial 4 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
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

                {/* Testimonial 5 */}
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
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="font-bold text-green-600 text-sm">AM</span>
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
                  <p className="text-3xl md:text-4xl font-bold text-green-500 mb-1">4.7</p>
                  <p className="text-sm text-muted-foreground">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Story Bridge 6 - Learning Transition */}
        {/* <div 
          ref={bridge6.ref}
          className={`relative py-20 transition-all duration-1000 ${
            bridge6.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-gradient-to-r from-card/50 via-card/80 to-card/50 backdrop-blur-sm border border-border/30 rounded-3xl p-10 overflow-hidden">
                
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
        </div> */}

        {/* Story Bridge 7 - Learning Intro */}
        {/* <div 
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
        </div> */}

        <div 
          ref={learnLifestyle.ref}
          className={`transition-all duration-1000 ${
            learnLifestyle.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <LearnLifestyle />
        </div>

        {/* Blogs Section */}
        <div 
          ref={blogs.ref}
          className={`transition-all duration-1000 ${
            blogs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <BlogsSection />
        </div>

        {/* Philosophy Section */}
        <div 
          ref={philosophy.ref}
          className={`transition-all duration-1000 ${
            philosophy.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <PhilosophySection />
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
              {/* <div className="absolute inset-0 bg-gradient-to-r from-highlight/10 via-cta/20 to-highlight/10 rounded-3xl blur-3xl" /> */}
              <div className="absolute inset-0 rounded-3xl blur-3xl" />
              {/* <div className="relative bg-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-12"> */}
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
