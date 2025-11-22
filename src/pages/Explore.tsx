import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Destinations } from "@/components/home/Destinations";

const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
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
