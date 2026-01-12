import { useState, useEffect } from "react";
import { ArrowDown, Play, MapPin, Plane, Sparkles, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-travel.jpg";
import japanImage from "@/assets/japan-tour.jpg";
import dubaiImage from "@/assets/Dubai/12.png";
import europeImage from "@/assets/europe-tour.png";
import { FloatingElement, MagneticButton } from "@/components/ui/interactive-card";

const destinations = [
  { name: "Japan", image: japanImage, tagline: "Where tradition meets tomorrow", emoji: "🗾" },
  { name: "Dubai", image: dubaiImage, tagline: "City of dreams & wonders", emoji: "🏙️" },
  { name: "Europe", image: europeImage, tagline: "History at every corner", emoji: "🏰" },
];

export const Hero = () => {
  const [activeDestination, setActiveDestination] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveDestination((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[600px] sm:min-h-screen overflow-hidden bg-black">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="wait">
        {destinations.map((dest, index) => (
          index === activeDestination && (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/85" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Animated Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <FloatingElement delay={0} duration={8} className="absolute top-20 right-[15%]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Plane className="w-10 h-10 md:w-12 md:h-12 text-white/30" />
          </motion.div>
        </FloatingElement>
        
        <FloatingElement delay={2} duration={7} className="absolute bottom-40 left-[10%]">
          <MapPin className="w-7 h-7 md:w-8 md:h-8 text-cta/50" />
        </FloatingElement>

        <FloatingElement delay={1} duration={6} className="absolute top-1/3 left-[20%]">
          <Sparkles className="w-6 h-6 text-cta/40" />
        </FloatingElement>

        <FloatingElement delay={3} duration={9} className="absolute top-1/4 right-[25%]">
          <Star className="w-5 h-5 text-highlight/30" />
        </FloatingElement>
        
        {/* Animated orbs */}
        <motion.div 
          className="absolute top-1/4 left-[5%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-[5%] w-32 h-32 md:w-40 md:h-40 rounded-full bg-cta/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-[600px] sm:min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 pt-24 pb-20 sm:pt-24 md:pt-28">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-cta"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs sm:text-sm text-white font-medium tracking-wide">
              NOW EXPLORING: {destinations[activeDestination].name.toUpperCase()} {destinations[activeDestination].emoji}
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading & Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center max-w-5xl"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight sm:leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-block"
            >
              All Tours
            </motion.span>
            <motion.span 
              className="block text-cta"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Ghar Se Ghar Tak
            </motion.span>
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeDestination}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 font-light"
            >
              {destinations[activeDestination].tagline}
            </motion.p>
          </AnimatePresence>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Stories, live moments & memories from Sun Tourism travellers exploring the world together.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          <MagneticButton
            onClick={() => scrollToSection("upcoming-departures")}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-semibold rounded-full border border-white/30 hover:bg-cta hover:text-black hover:border-cta transition-all duration-300 group"
          >
            <span className="flex items-center justify-center gap-2">
              Upcoming Departures
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </MagneticButton>
        </motion.div>

        {/* Destination Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-5"
        >
          {destinations.map((dest, index) => (
            <motion.button
              key={dest.name}
              onClick={() => setActiveDestination(index)}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden transition-all duration-300 ${
                index === activeDestination
                  ? "ring-4 ring-cta scale-110"
                  : "ring-2 ring-white/30 hover:ring-white/60 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
              {index === activeDestination && (
                <motion.div 
                  className="absolute inset-0 bg-cta/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layoutId="activeRing"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile / Tablet Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10 w-full max-w-md grid grid-cols-3 gap-4 text-center text-white lg:hidden"
        >
          {[
            { value: "15k+", label: "Tours" },
            { value: "75K+", label: "Travelers" },
            { value: "30+", label: "Countries" },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="text-xl sm:text-2xl font-bold text-cta"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("destinations")}
            className="flex flex-col items-center gap-1.5 sm:gap-2 text-white/60 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xs sm:text-sm tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Desktop Side Stats */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-8 text-white">
        {[
          { value: "15k+", label: "Tours" },
          { value: "75K+", label: "Travelers" },
          { value: "30+", label: "Countries" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-right group cursor-default"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + index * 0.15 }}
            whileHover={{ x: -5 }}
          >
            <motion.div 
              className="text-3xl font-bold text-cta group-hover:scale-110 transition-transform origin-right"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
            >
              {stat.value}
            </motion.div>
            <div className="text-sm text-white/60 group-hover:text-white transition-colors">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};