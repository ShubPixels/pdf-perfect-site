import { useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Destinations } from "@/components/home/Destinations";
import heroExplore from "@/assets/heroexplore.png"; // <- src/assets/heroexplore.png

const Explore = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const viewH = window.innerHeight;

        // progress from -viewH..sectionH -> 0..1 (clamped)
        const total = rect.height + viewH;
        const p = Math.min(1, Math.max(0, (viewH - rect.top) / total));

        // move bg up/down smoothly
        const translateY = (p - 0.5) * 90; // adjust 60 for stronger/weaker
        bg.style.transform = `translate3d(0, ${translateY}px, 0) scale(1.08)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section
          ref={sectionRef}
          className="relative min-h-[72vh] md:min-h-[82vh] flex items-center overflow-hidden"
        >

          {/* Background image */}
          <div
            ref={bgRef}
            className="absolute -inset-x-0 -top-16 -bottom-16 bg-cover bg-center bg-no-repeat will-change-transform"

            style={{ backgroundImage: `url(${heroExplore})` }}
            aria-hidden="true"
          />




          {/* Overlay */}
          <div
            className="absolute inset-0 shadow-[inset_0_80px_120px_rgba(0,0,0,0.25),inset_0_-120px_160px_rgba(0,0,0,0.45),inset_80px_0_140px_rgba(0,0,0,0.20),inset_-80px_0_140px_rgba(0,0,0,0.20)]"
            aria-hidden="true"
          />


          {/* Content */}
          <div className="relative container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="rounded-3xl bg-black/35 backdrop-blur-md border border-white/10 px-6 py-8 md:px-10 md:py-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <span className="text-accent">Explore</span> Destinations
                </h1>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  Discover the world through the eyes of our travelers. Find your next adventure with detailed insights,
                  authentic stories, and practical tips from real group tour experiences.
                </p>
              </div>
            </div>
          </div>

        </section>

        <Destinations showAll={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
