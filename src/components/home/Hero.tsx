import { useState, useEffect } from "react";
import { ArrowDown, Play, MapPin, Plane } from "lucide-react";
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
      {destinations.map((dest, index) => (
        <div
          key={dest.name}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeDestination ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/85" />
        </div>
      ))}

      {/* Floating Decorative Elements (hidden on very small screens) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <Plane className="absolute top-20 right-[15%] w-10 h-10 md:w-12 md:h-12 text-white/20 animate-float" />
        <MapPin className="absolute bottom-40 left-[10%] w-7 h-7 md:w-8 md:h-8 text-accent/40 animate-float-delayed" />
        <div className="absolute top-1/4 left-[5%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-[5%] w-32 h-32 md:w-40 md:h-40 rounded-full bg-accent/10 blur-3xl animate-pulse-slow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-[600px] sm:min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 pt-24 pb-20 sm:pt-24 md:pt-28">
        {/* Animated Badge */}
        {/* <div
          className={`mb-6 sm:mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs sm:text-sm text-white font-medium tracking-wide">
              NOW TRAVELING: {destinations[activeDestination].name.toUpperCase()}
            </span>
          </div>
        </div> */}

        {/* Main Heading & Text */}
        <div
          className={`text-center max-w-5xl transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight sm:leading-tight">
            All Tours
            <span className="block text-accent">Ghar Se Ghar Tak</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 font-light">
            {destinations[activeDestination].tagline}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto mb-10 sm:mb-12">
            Stories, live moments & memories from Sun Tourism travellers exploring the world together.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* <button
            onClick={() => scrollToSection("current-tours")}
            className="group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-accent text-black text-sm sm:text-base font-bold rounded-full shadow-lg hover:shadow-accent/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
            Watch Live Tours
          </button> */}

          <button
            onClick={() => scrollToSection("upcoming-departures")}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-semibold rounded-full border border-white/30 hover:bg-white hover:text-black transition-all duration-300"
          >
            Upcoming Departures
          </button>
        </div>

        {/* Destination Selector */}
        <div
          className={`flex flex-wrap justify-center items-center gap-4 sm:gap-5 transition-all duration-1000 delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {destinations.map((dest, index) => (
            <button
              key={dest.name}
              onClick={() => setActiveDestination(index)}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden transition-all duration-300 ${
                index === activeDestination
                  ? "ring-4 ring-accent scale-110"
                  : "ring-2 ring-white/30 hover:ring-white/60 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
              {index === activeDestination && (
                <div className="absolute inset-0 bg-accent/20" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile / Tablet Stats */}
        <div
          className={`mt-10 w-full max-w-md grid grid-cols-3 gap-4 text-center text-white lg:hidden transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { value: "15k+", label: "Tours" },
            { value: "75K+", label: "Travelers" },
            { value: "30+", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-xl sm:text-2xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-800 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => scrollToSection("current-tours")}
            className="flex flex-col items-center gap-1.5 sm:gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span className="text-xs sm:text-sm tracking-widest uppercase">
              Scroll
            </span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce-subtle" />
          </button>
        </div>
      </div>

      {/* Desktop Side Stats */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-8 text-white">
        {[
          { value: "15k+", label: "Tours" },
          { value: "75K+", label: "Travelers" },
          { value: "30+", label: "Countries" },
        ].map((stat, index) => (
          <div
            key={stat.label}
            className={`text-right transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: `${600 + index * 100}ms` }}
          >
            <div className="text-3xl font-bold text-accent">{stat.value}</div>
            <div className="text-sm text-white/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
