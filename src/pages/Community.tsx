import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Community as CommunitySection } from "@/components/home/Community";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Heart, Camera, MapPin } from "lucide-react";

const Community = () => {
  const stats = [
    { icon: Users, label: "Travelers", value: "2,500+" },
    { icon: Heart, label: "Tours Completed", value: "150+" },
    { icon: Camera, label: "Memories Shared", value: "10,000+" },
    { icon: MapPin, label: "Destinations", value: "25+" },
  ];

  const featuredTravelers = [
    {
      id: 1,
      name: "Priya & Raj Sharma",
      tours: 3,
      location: "Mumbai",
      quote: "Traveling with All Tours feels like traveling with family. Every trip is a new adventure!",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Anjali Desai",
      tours: 5,
      location: "Ahmedabad",
      quote: "The best decision was joining these tours. Made lifelong friends and unforgettable memories.",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Ramesh & Sunita Patel",
      tours: 2,
      location: "Pune",
      quote: "Perfect for seniors like us. Everything is taken care of, we just enjoy the journey.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        

        {/* ✅ Community Memories: show full grid on this page */}
        <CommunitySection variant="page" />

        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Travel Community</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join thousands of travelers who have discovered the joy of exploring the world together. Share your
                stories, connect with fellow adventurers, and inspire others.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="p-6 text-center border-border hover:border-primary transition-colors"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Travelers */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Meet Our Travel Enthusiasts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredTravelers.map((traveler) => (
                <Card
                  key={traveler.id}
                  className="p-6 border-border hover:border-primary transition-all hover:shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{traveler.name}</h3>
                      <p className="text-sm text-muted-foreground">{traveler.location}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {traveler.tours} Tours Completed
                  </Badge>
                  <p className="text-muted-foreground italic">"{traveler.quote}"</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Community CTA */}
        <section className="py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Join Our Community?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Start your journey with us and become part of a community that loves to explore, share, and create
              memories together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="gap-2">
                  View Current Tours
                </Button>
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  Contact Us on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
