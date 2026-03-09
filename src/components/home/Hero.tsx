import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import japanImage from "@/assets/japan-tour.jpg";
import dubaiImage from "@/assets/Dubai/12.png";
import europeImage from "@/assets/europe-tour.png";

const destinations = [
  { name: "Japan", image: japanImage, tagline: "Where tradition meets tomorrow" },
  { name: "Dubai", image: dubaiImage, tagline: "City of dreams & wonders" },
  { name: "Europe", image: europeImage, tagline: "History at every corner" },
];

export const Hero = () => {
  const [activeDestination, setActiveDestination] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveDestination((prev) => (prev + 1) % destinations.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen overflow-hidden">
      {/* Background Images with Crossfade */}
      {destinations.map((dest, index) => (
        <div
          key={dest.name}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            index === activeDestination ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>
      ))}

      {/* Main Content — Journal Cover style */}
      <div className="relative z-10 min-h-[85vh] sm:min-h-screen flex flex-col justify-end items-start px-6 sm:px-10 lg:px-16 pb-20 sm:pb-28 pt-32">
        {/* Issue tag */}
        <div
          className={`mb-6 sm:mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/60 font-body">
            Stories from the road
          </span>
        </div>

        {/* Title */}
        <div
          className={`max-w-3xl transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-white leading-[1.1] mb-4 sm:mb-6">
            All Tours
            <span className="block text-accent/90 mt-1 sm:mt-2">Ghar Se Ghar Tak</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-body font-light">
            A collection of memories, reflections & moments shared by the Sun Tourism community — 
            exploring the world together, one journey at a time.
          </p>
        </div>

        {/* Subtle destination indicator */}
        <div
          className={`mt-10 sm:mt-14 flex items-center gap-6 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3">
            {destinations.map((dest, index) => (
              <button
                key={dest.name}
                onClick={() => setActiveDestination(index)}
                className={`transition-all duration-500 ${
                  index === activeDestination
                    ? "w-10 h-1 bg-accent rounded-full"
                    : "w-4 h-1 bg-white/30 rounded-full hover:bg-white/50"
                }`}
                aria-label={dest.name}
              />
            ))}
          </div>
          <span className="text-sm text-white/50 font-body tracking-wide">
            {destinations[activeDestination].name}
          </span>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-6 sm:bottom-8 right-6 sm:right-10 transition-all duration-1000 delay-800 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => scrollToSection("featured-story")}
            className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          >
            <span className="text-xs tracking-[0.2em] uppercase font-body">Read</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
