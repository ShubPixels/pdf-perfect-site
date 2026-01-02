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
        <section className="relative py-16 w-full h-full overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full bg-no-repeat"
            style={{ backgroundImage: `url(${heroExplore})` }}
            aria-hidden="true"
          />

          {/* Overlay for readability */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Explore Destinations
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover the world through the eyes of our travelers. Find your next adventure with detailed insights,
                authentic stories, and practical tips from real group tour experiences.
              </p>
            </div>
          </div>
        </section>

        <Destinations />
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
