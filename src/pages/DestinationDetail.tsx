import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Plane, Hotel, Camera, Utensils, Clock, TrendingUp } from "lucide-react";
import japanImage from "@/assets/japan-tour.jpg";
import dubaiImage from "@/assets/dubai-tour.jpg";
import europeImage from "@/assets/europe-tour.jpg";

export default function DestinationDetail() {
  const { destinationId } = useParams();

  // Mock data - would come from backend in real app
  const destinationData: Record<string, any> = {
    japan: {
      name: "Japan",
      region: "Asia",
      tagline: "Where Ancient Tradition Meets Modern Wonder",
      description: "Experience the perfect blend of ancient temples, cutting-edge technology, and warm hospitality. Japan offers an unforgettable journey through cherry blossoms, Mount Fuji, bustling Tokyo streets, and serene Kyoto gardens.",
      image: japanImage,
      bestTimeTitle: "Spring & Autumn",
      bestTimeDescription: "March-May for cherry blossoms, October-November for fall colors and pleasant weather.",
      tripDuration: "8-10 days",
      idealFor: ["Families", "Seniors", "Culture Lovers", "First-time Asia Travelers"],
      upcomingDepartures: [
        { date: "March 15, 2025", from: "Pune", price: "₹1,85,000", seats: 8 },
        { date: "April 10, 2025", from: "Mumbai", price: "₹1,92,000", seats: 4 },
        { date: "October 5, 2025", from: "Pune", price: "₹1,88,000", seats: 12 }
      ],
      experiences: [
        {
          icon: Camera,
          title: "Mount Fuji & Hakone",
          description: "Witness the iconic snow-capped peak, cruise on Lake Ashi, and relax in natural hot springs."
        },
        {
          icon: MapPin,
          title: "Tokyo's Electric Energy",
          description: "From the famous Shibuya crossing to peaceful temples, experience the city's contrasts."
        },
        {
          icon: Camera,
          title: "Kyoto's Golden Temples",
          description: "Walk through bamboo groves, visit stunning shrines, and experience a traditional tea ceremony."
        },
        {
          icon: Utensils,
          title: "Culinary Adventure",
          description: "Savor authentic ramen, fresh sushi, and street food in Osaka's Dotonbori district."
        }
      ],
      tripFlow: [
        {
          day: "1-2",
          title: "Tokyo Arrival & Exploration",
          activities: ["Airport pickup & hotel check-in", "Shibuya Crossing & Harajuku", "Tokyo Tower illumination", "Welcome dinner at izakaya"]
        },
        {
          day: "3",
          title: "Mount Fuji Day Trip",
          activities: ["Scenic drive to Hakone", "Mount Fuji viewpoints", "Lake Ashi cruise", "Hot spring experience"]
        },
        {
          day: "4-5",
          title: "Kyoto Heritage",
          activities: ["Bullet train to Kyoto", "Kinkaku-ji Golden Pavilion", "Arashiyama Bamboo Grove", "Traditional tea ceremony", "Geisha district walk"]
        },
        {
          day: "6",
          title: "Osaka Food & Fun",
          activities: ["Osaka Castle visit", "Dotonbori street food tour", "Shopping in Shinsaibashi", "Group dinner"]
        },
        {
          day: "7",
          title: "Hiroshima Peace & Miyajima",
          activities: ["Peace Memorial Park", "Ferry to Miyajima Island", "Itsukushima Shrine", "Local oyster lunch"]
        },
        {
          day: "8",
          title: "Return to Tokyo & Farewell",
          activities: ["Last-minute shopping", "Teamlab Borderless museum", "Farewell dinner", "Airport transfer"]
        }
      ],
      whyPopular: [
        "Safe and clean environment perfect for families and seniors",
        "Efficient public transport with comfortable travel",
        "Vegetarian-friendly food options available",
        "Rich cultural experiences without language barriers",
        "Perfect mix of modern cities and traditional culture"
      ],
      relatedDestinations: [
        { id: "dubai", name: "Dubai & Abu Dhabi", image: dubaiImage, price: "₹95,000" },
        { id: "bali", name: "Bali", image: japanImage, price: "₹78,000" }
      ]
    },
    dubai: {
      name: "Dubai & Abu Dhabi",
      region: "Middle East",
      tagline: "Luxury, Adventure & Desert Magic",
      description: "Experience the epitome of modern luxury in the UAE. From towering skyscrapers to golden deserts, world-class shopping to cultural heritage, Dubai and Abu Dhabi offer an unforgettable Arabian adventure.",
      image: dubaiImage,
      bestTimeTitle: "November to March",
      bestTimeDescription: "Pleasant winter weather perfect for sightseeing and outdoor activities.",
      tripDuration: "5-7 days",
      idealFor: ["Families", "Couples", "Luxury Seekers", "First-time Middle East"],
      upcomingDepartures: [
        { date: "February 20, 2025", from: "Mumbai", price: "₹95,000", seats: 6 },
        { date: "December 10, 2025", from: "Pune", price: "₹1,12,000", seats: 10 }
      ],
      experiences: [
        {
          icon: TrendingUp,
          title: "Burj Khalifa Experience",
          description: "Visit the world's tallest building and enjoy stunning views from the observation deck."
        },
        {
          icon: Camera,
          title: "Desert Safari Adventure",
          description: "Dune bashing, camel rides, and traditional BBQ dinner under the stars."
        },
        {
          icon: MapPin,
          title: "Sheikh Zayed Grand Mosque",
          description: "Marvel at one of the world's most beautiful mosques in Abu Dhabi."
        },
        {
          icon: Users,
          title: "Dubai Mall & Fountain Show",
          description: "Shop at the world's largest mall and watch the spectacular fountain show."
        }
      ],
      tripFlow: [
        {
          day: "1",
          title: "Dubai Arrival",
          activities: ["Airport pickup", "Hotel check-in", "Dubai Marina evening walk", "Welcome dinner"]
        },
        {
          day: "2",
          title: "Modern Dubai",
          activities: ["Burj Khalifa visit", "Dubai Mall shopping", "Dubai Fountain show", "Old Dubai souks"]
        },
        {
          day: "3",
          title: "Desert Safari",
          activities: ["Morning at leisure", "Afternoon desert safari", "Dune bashing", "BBQ dinner & entertainment"]
        },
        {
          day: "4",
          title: "Abu Dhabi Heritage",
          activities: ["Drive to Abu Dhabi", "Sheikh Zayed Mosque", "Louvre Museum", "Corniche walk"]
        },
        {
          day: "5",
          title: "Leisure & Departure",
          activities: ["Beach time or shopping", "Last-minute photos", "Airport transfer"]
        }
      ],
      whyPopular: [
        "Perfect for first-time Middle East travelers",
        "Luxurious yet comfortable travel experience",
        "Indian-friendly with many vegetarian options",
        "Short flight from India - ideal for short breaks",
        "Safe, clean, and family-friendly destination"
      ],
      relatedDestinations: [
        { id: "europe", name: "Europe Grand Tour", image: europeImage, price: "₹2,15,000" },
        { id: "japan", name: "Japan", image: japanImage, price: "₹1,85,000" }
      ]
    }
  };

  const destination = destinationData[destinationId || "japan"] || destinationData.japan;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                {destination.region}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {destination.name}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {destination.tagline}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Quick Info Bar */}
            <Card className="mb-12 border-primary/20">
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-semibold text-foreground">{destination.tripDuration}</div>
                  </div>
                  <div className="text-center">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground">Best Time</div>
                    <div className="font-semibold text-foreground">{destination.bestTimeTitle}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground">Group Size</div>
                    <div className="font-semibold text-foreground">15-25 people</div>
                  </div>
                  <div className="text-center">
                    <Plane className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground">Departures</div>
                    <div className="font-semibold text-foreground">Multiple cities</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Main Content Tabs */}
            <Tabs defaultValue="overview" className="mb-12">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="departures">Departures</TabsTrigger>
                <TabsTrigger value="why">Why This?</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-8 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    About {destination.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {destination.description}
                  </p>
                </div>

                {/* Signature Experiences */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Signature Experiences
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {destination.experiences.map((exp: any, idx: number) => (
                      <Card key={idx} className="group hover:border-primary transition-all">
                        <div className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              <exp.icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-2">
                                {exp.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {exp.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Best Time to Visit */}
                <Card className="bg-accent/10 border-accent">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <Calendar className="h-8 w-8 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          Best Time to Visit
                        </h3>
                        <div className="font-semibold text-accent mb-2">
                          {destination.bestTimeTitle}
                        </div>
                        <p className="text-muted-foreground">
                          {destination.bestTimeDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="itinerary" className="mt-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Typical Trip Flow
                </h2>
                <div className="space-y-4">
                  {destination.tripFlow.map((day: any, idx: number) => (
                    <Card key={idx} className="overflow-hidden hover:border-primary transition-all">
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold">Day {day.day}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                              {day.title}
                            </h3>
                            <ul className="space-y-2">
                              {day.activities.map((activity: string, aIdx: number) => (
                                <li key={aIdx} className="flex items-start gap-2 text-muted-foreground">
                                  <span className="text-primary mt-1">✓</span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="departures" className="mt-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Upcoming Departures
                </h2>
                <div className="grid gap-4">
                  {destination.upcomingDepartures.map((departure: any, idx: number) => (
                    <Card key={idx} className="hover:border-primary transition-all">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Calendar className="h-5 w-5 text-primary" />
                              <span className="font-semibold text-lg text-foreground">
                                {departure.date}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground ml-8">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                Ex {departure.from}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {departure.seats} seats left
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="text-sm text-muted-foreground">Starting from</div>
                              <div className="text-2xl font-bold text-primary">{departure.price}</div>
                            </div>
                            <Button size="lg">
                              Enquire Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="why" className="mt-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Why Travellers Love {destination.name}
                </h2>
                <Card>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {destination.idealFor.map((tag: string, idx: number) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ul className="space-y-4">
                      {destination.whyPopular.map((reason: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <span className="text-primary text-sm">✓</span>
                          </div>
                          <span className="text-muted-foreground text-lg">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Related Destinations */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                You Might Also Like
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {destination.relatedDestinations.map((related: any) => (
                  <Card key={related.id} className="group overflow-hidden cursor-pointer hover:border-primary transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-bold text-xl mb-1">{related.name}</h3>
                        <div className="text-sm">Starting from {related.price}</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <Button variant="ghost" className="w-full text-primary hover:text-primary-foreground hover:bg-primary">
                        Explore {related.name} →
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
