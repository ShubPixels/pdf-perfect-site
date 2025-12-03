import { useState, useEffect } from "react";
import { ArrowDown, Play, MapPin, Plane } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import japanImage from "@/assets/japan-tour.jpg";
import dubaiImage from "@/assets/dubai-tour.jpg";
import europeImage from "@/assets/europe-tour.jpg";

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
    <section className="relative min-h-screen overflow-hidden bg-black">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        </div>
      ))}

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Plane className="absolute top-20 right-[15%] w-12 h-12 text-white/20 animate-float" />
        <MapPin className="absolute bottom-40 left-[10%] w-8 h-8 text-accent/40 animate-float-delayed" />
        <div className="absolute top-1/4 left-[5%] w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-[5%] w-40 h-40 rounded-full bg-accent/10 blur-3xl animate-pulse-slow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 pt-20">
        {/* Animated Badge */}
        <div 
          className={`mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white text-sm font-medium tracking-wide">
              NOW TRAVELING: {destinations[activeDestination].name.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div 
          className={`text-center max-w-5xl transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            All Tours
            <span className="block text-accent">Ghar Se Ghar Tak</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-4 font-light">
            {destinations[activeDestination].tagline}
          </p>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
            Stories, live moments & memories from Sun Tourism travellers exploring the world together.
          </p>
        </div>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => scrollToSection("current-tours")}
            className="group px-8 py-4 bg-accent text-black font-bold rounded-full shadow-lg hover:shadow-accent/30 hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Play className="w-5 h-5 group-hover:animate-pulse" />
            Watch Live Tours
          </button>

          <button
            onClick={() => scrollToSection("upcoming-departures")}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white hover:text-black transition-all duration-300"
          >
            Upcoming Departures
          </button>
        </div>

        {/* Destination Selector */}
        <div 
          className={`flex items-center gap-4 transition-all duration-1000 delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {destinations.map((dest, index) => (
            <button
              key={dest.name}
              onClick={() => setActiveDestination(index)}
              className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden transition-all duration-300 ${
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

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-800 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => scrollToSection("current-tours")}
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span className="text-sm tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce-subtle" />
          </button>
        </div>
      </div>

      {/* Side Stats */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-8 text-white">
        {[
          { value: "150+", label: "Tours" },
          { value: "2.5K+", label: "Travelers" },
          { value: "25+", label: "Countries" },
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
