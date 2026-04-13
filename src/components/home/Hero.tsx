import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Plane, Users } from "lucide-react";
import japanImage from "@/assets/destinations/japan/covers/japan-tour.jpg";
import dubaiImage from "@/assets/destinations/dubai/gallery/12.png";
import europeImage from "@/assets/destinations/europe/covers/home-europe-tour.png";

const destinations = [
  { name: "Japan", image: japanImage, tagline: "Where tradition meets tomorrow" },
  { name: "Dubai", image: dubaiImage, tagline: "City of dreams & wonders" },
  { name: "Europe", image: europeImage, tagline: "History at every corner" },
];

const heroStats = [
  {
    value: "100K+",
    label: "Travellers",
    detail: "Families, couples, and groups who keep coming back.",
    icon: Users,
  },
  {
    value: "30+",
    label: "Destinations",
    detail: "Curated escapes across India and around the world.",
    icon: MapPin,
  },
  {
    value: "15K+",
    label: "Tours Completed",
    detail: "Planned end to end with our Ghar Se Ghar Tak service.",
    icon: Plane,
  },
];

export const Hero = () => {
  const navigate = useNavigate();
  const [activeDestination, setActiveDestination] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveDestination((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
            loading={index === 0 ? "eager" : "lazy"}
            decoding={index === 0 ? "sync" : "async"}
            fetchPriority={index === 0 ? "high" : "low"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/85" />
        </div>
      ))}

      {/* Floating Decorative Elements (hidden on very small screens) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <Plane className="absolute top-20 right-[15%] w-10 h-10 md:w-12 md:h-12 text-white/20 animate-float" />
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
            Stories & memories from Sun Tourism travellers exploring the world together.
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
            onClick={() => navigate("/stories")}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-semibold rounded-full border border-white/30 hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore Stories
          </button>
        </div>

        {/* Hero Stats */}
        <div
          className={`mt-1 mb-10 sm:mb-12 w-full max-w-6xl transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {heroStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-[26px] border border-white/20 bg-gradient-to-br from-slate-950/72 via-slate-900/60 to-slate-700/44 p-4 text-left shadow-[0_20px_65px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-accent/45 sm:p-5"
                  style={{ transitionDelay: `${600 + index * 120}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-accent/8" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
                  <div className="absolute -right-8 -top-10 h-20 w-20 rounded-full bg-accent/18 blur-3xl transition-transform duration-500 group-hover:scale-125" />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[2rem] font-bold leading-none text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)] sm:text-[2.4rem] lg:text-[2.8rem]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-accent drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)] sm:text-xs">
                        {stat.label}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-slate-900/35 text-accent shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  <p className="relative z-10 mt-3 max-w-[26ch] text-sm leading-7 text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.32)]">
                    {stat.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
};
