import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, MessageCircle } from "lucide-react";
import communityImage from "@/assets/community-1.jpg";
import japanImage from "@/assets/japan-tour.jpg";
import dubaiImage from "@/assets/dubai-tour.jpg";
import europeImage from "@/assets/europe-tour.jpg";

export const Community = () => {
  const memories = [
    {
      id: 1,
      destination: "Japan",
      batch: "October 2025",
      quote: "The cherry blossoms were breathtaking! Our group had the best time.",
      image: japanImage,
    },
    {
      id: 2,
      destination: "Dubai",
      batch: "September 2025",
      quote: "Amazing hospitality and comfort throughout the journey!",
      image: dubaiImage,
    },
    {
      id: 3,
      destination: "Europe",
      batch: "August 2025",
      quote: "First time in Europe and it exceeded all expectations.",
      image: europeImage,
    },
    {
      id: 4,
      destination: "Group Tour",
      batch: "November 2025",
      quote: "Made lifelong friends on this amazing journey!",
      image: communityImage,
    },
  ];

  return (
    <section id="community" className="py-16 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            From Our Community
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real photos and memories from past tours.
          </p>
        </div>

        {/* Memory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-8">
          {memories.map((memory) => (
            <Card
              key={memory.id}
              className="group overflow-hidden cursor-pointer border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.destination}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="text-white">
                    <Quote className="h-5 w-5 mb-2 opacity-60" />
                    <p className="text-sm italic mb-3">{memory.quote}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold">{memory.destination}</span>
                      <span className="opacity-80">{memory.batch}</span>
                    </div>
                  </div>
                </div>

                {/* Static info (visible by default on mobile) */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <div className="text-white text-sm">
                    <span className="font-semibold">{memory.destination}</span>
                    <span className="mx-2">•</span>
                    <span className="opacity-80">{memory.batch}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* UGC CTA */}
        <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-dashed border-primary/30">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            Share Your Travel Story
          </h3>
          <p className="text-muted-foreground mb-6">
            Travelled with us? Share your photo or story via WhatsApp or Instagram and get
            featured here!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="default" size="lg">
              Share via WhatsApp
            </Button>
            <Button variant="outline" size="lg">
              Tag us on Instagram
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
