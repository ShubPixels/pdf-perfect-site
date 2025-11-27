import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      element.classList.add("highlight-flash");
      setTimeout(() => element.classList.remove("highlight-flash"), 1000);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-end justify-center pb-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Soft White Bottom Fade (like screenshot) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        
        {/* Heading (Georgia Bold Italic) */}
        <h1 className="text-3xl md:text-5xl font-heading text-black font-bold italic  mb-4">
          All Tours Ghar Se Ghar Tak
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl  text-black  mb-8">
          Stories, live moments & memories from Sun Tourism travellers.
        </p>

        {/* Buttons – EXACT as screenshot */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection("current-tours")}
            className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-full shadow hover:bg-yellow-300 transition"
          >
            Current Tours – On the Road Now
          </button>

          <button
            onClick={() => scrollToSection("upcoming-departures")}
            className="px-6 py-3 bg-white text-black font-medium rounded-full border shadow hover:bg-muted transition"
          >
            Upcoming Departures
          </button>

          <button
            onClick={() => scrollToSection("community")}
            className="px-6 py-3 bg-white text-black font-medium rounded-full border shadow hover:bg-muted transition"
          >
            Past Tour Memories
          </button>
        </div>
      </div>
    </section>
  );
};
