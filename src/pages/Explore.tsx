import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Destinations } from "@/components/home/Destinations";
import heroExplore from "@/assets/heroexplore.png"; // <- src/assets/heroexplore.png

const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[72vh] md:min-h-[82vh] flex items-center overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroExplore})` }}
            aria-hidden="true"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                <span className="text-accent">Explore</span> Destinations
              </h1>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Discover the world through the eyes of our travelers. Find your next adventure with detailed insights,
                authentic stories, and practical tips from real group tour experiences.
              </p>
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
