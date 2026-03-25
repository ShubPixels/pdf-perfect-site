import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Quote } from "lucide-react";
import japanImage from "@/assets/japan-tour.jpg";

export default function TourDiary() {
  const { tourId } = useParams();
  const [selectedDay, setSelectedDay] = useState(4);

  // Mock data - would come from backend in real app
  const tourData = {
    id: tourId,
    name: "Japan - Nov 2025 Batch",
    currentDay: 4,
    totalDays: 8,
    departure: "Ex Pune",
    startDate: "Nov 15, 2025",
    status: "live"
  };

  const days = [
    {
      day: 1,
      date: "Nov 15",
      title: "Arrival in Tokyo",
      location: "Tokyo, Japan",
      photos: [japanImage, japanImage, japanImage],
      description: "Our journey begins! The group arrived at Narita Airport and we're all set for an incredible adventure.",
      managerNotes: "Everyone's energy is high! We had a smooth immigration process and our first group dinner at a local izakaya.",
      highlights: ["Airport pickup", "Hotel check-in", "Welcome dinner", "Team bonding"]
    },
    {
      day: 2,
      date: "Nov 16",
      title: "Tokyo Exploration",
      location: "Tokyo, Japan",
      photos: [japanImage, japanImage],
      description: "Explored the vibrant streets of Shibuya and experienced the famous crossing. The group loved the blend of modern and traditional.",
      managerNotes: "Great weather today! Everyone enjoyed the Tokyo Tower visit. Mrs. Sharma got some amazing photos at Senso-ji Temple.",
      highlights: ["Shibuya Crossing", "Tokyo Tower", "Senso-ji Temple", "Street food tour"]
    },
    {
      day: 3,
      date: "Nov 17",
      title: "Mount Fuji Day Trip",
      location: "Hakone, Japan",
      photos: [japanImage, japanImage, japanImage, japanImage],
      description: "A breathtaking view of Mount Fuji! The weather was perfect and everyone got stunning photos.",
      managerNotes: "The cable car ride was a highlight. Mr. Patel said this was his dream moment. Beautiful day overall!",
      highlights: ["Mount Fuji viewpoint", "Hakone ropeway", "Lake Ashi cruise", "Hot spring visit"]
    },
    {
      day: 4,
      date: "Nov 18",
      title: "Kyoto Temples & Gardens",
      location: "Kyoto, Japan",
      photos: [japanImage, japanImage, japanImage],
      description: "Today we explored the magnificent temples of Kyoto. The golden pavilion left everyone speechless!",
      managerNotes: "Currently here! The group is loving the peaceful atmosphere. We're heading to a traditional tea ceremony next.",
      highlights: ["Kinkaku-ji Temple", "Bamboo Grove", "Tea ceremony", "Geisha district walk"],
      isToday: true
    },
    {
      day: 5,
      date: "Nov 19",
      title: "Osaka Food & Culture",
      location: "Osaka, Japan",
      photos: [],
      description: "Coming soon...",
      managerNotes: "",
      highlights: ["Osaka Castle", "Dotonbori district", "Street food tour", "Shopping time"],
      upcoming: true
    },
    {
      day: 6,
      date: "Nov 20",
      title: "Hiroshima Peace Memorial",
      location: "Hiroshima, Japan",
      photos: [],
      description: "Coming soon...",
      managerNotes: "",
      highlights: ["Peace Memorial Park", "Miyajima Island", "Itsukushima Shrine", "Local lunch"],
      upcoming: true
    },
    {
      day: 7,
      date: "Nov 21",
      title: "Back to Tokyo",
      location: "Tokyo, Japan",
      photos: [],
      description: "Coming soon...",
      managerNotes: "",
      highlights: ["Shopping in Harajuku", "Teamlab Borderless", "Farewell dinner", "Group photo session"],
      upcoming: true
    },
    {
      day: 8,
      date: "Nov 22",
      title: "Sayonara Japan",
      location: "Tokyo, Japan",
      photos: [],
      description: "Coming soon...",
      managerNotes: "",
      highlights: ["Airport transfer", "Last minute shopping", "Group goodbyes"],
      upcoming: true
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      avatar: "",
      date: "Day 3",
      quote: "Seeing Mount Fuji in person was beyond words! Our tour manager Rajesh made sure we got the best spots for photos. This trip is everything I dreamed of and more!",
      rating: 5
    },
    {
      name: "Amit Patel",
      avatar: "",
      date: "Day 2",
      quote: "The attention to detail is incredible. From vegetarian food options to comfortable travel arrangements, All Tours thinks of everything. Highly recommend!",
      rating: 5
    }
  ];

  const selectedDayData = days.find(d => d.day === selectedDay) || days[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {tourData.status === "live" && (
                <Badge className="mb-4 bg-accent text-accent-foreground animate-pulse">
                  LIVE NOW
                </Badge>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {tourData.name}
              </h1>
              <div className="flex flex-wrap gap-6 justify-center text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Day {tourData.currentDay} of {tourData.totalDays}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {tourData.departure}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Started {tourData.startDate}
                </span>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow along as our travellers explore the wonders of Japan. Updates posted daily!
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Sticky Timeline Navigation */}
            <aside className="lg:w-64 lg:sticky lg:top-24 h-fit">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-4">Trip Timeline</h3>
                <div className="space-y-2">
                  {days.map((day) => (
                    <button
                      key={day.day}
                      onClick={() => setSelectedDay(day.day)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        selectedDay === day.day
                          ? "bg-primary text-primary-foreground"
                          : day.isToday
                          ? "bg-accent/50 text-accent-foreground border-2 border-accent"
                          : day.upcoming
                          ? "bg-muted/30 text-muted-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">Day {day.day}</span>
                        {day.isToday && (
                          <Badge variant="outline" className="text-xs">Now</Badge>
                        )}
                      </div>
                      <div className="text-xs opacity-90">{day.date}</div>
                      <div className="text-sm font-medium mt-1">{day.title}</div>
                    </button>
                  ))}
                </div>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Day Details */}
              <Card className="mb-8">
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-3xl font-bold text-foreground">
                          Day {selectedDayData.day}: {selectedDayData.title}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedDayData.location}</span>
                        <span className="mx-2">•</span>
                        <span>{selectedDayData.date}</span>
                      </div>
                    </div>
                    {selectedDayData.isToday && (
                      <Badge className="bg-accent text-accent-foreground">Today</Badge>
                    )}
                  </div>

                  {selectedDayData.upcoming ? (
                    <div className="text-center py-12">
                      <Clock className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Coming Soon!
                      </h3>
                      <p className="text-muted-foreground">
                        We'll update this day as the group experiences it.
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Photo Gallery */}
                      {selectedDayData.photos.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-foreground mb-4">
                            Photo Gallery ({selectedDayData.photos.length})
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {selectedDayData.photos.map((photo, idx) => (
                              <div
                                key={idx}
                                className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                              >
                                <img
                                  src={photo}
                                  alt={`Day ${selectedDayData.day} - Photo ${idx + 1}`}
                                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          Today's Story
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedDayData.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          Highlights
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedDayData.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Tour Manager Notes */}
                      {selectedDayData.managerNotes && (
                        <Card className="bg-accent/10 border-accent">
                          <div className="p-6">
                            <div className="flex items-start gap-3">
                              <Avatar>
                                <AvatarFallback>TM</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="font-semibold text-foreground mb-1">
                                  Tour Manager's Note
                                </div>
                                <p className="text-sm text-muted-foreground italic">
                                  "{selectedDayData.managerNotes}"
                                </p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      )}
                    </>
                  )}
                </div>
              </Card>

              {/* Traveller Testimonials */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  What Travellers Are Saying
                </h2>
                <div className="grid gap-6">
                  {testimonials.map((testimonial, idx) => (
                    <Card key={idx}>
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={testimonial.avatar} />
                            <AvatarFallback>
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="font-semibold text-foreground">
                                  {testimonial.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {testimonial.date}
                                </div>
                              </div>
                              <div className="flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <span key={i} className="text-primary">★</span>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Quote className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                              <p className="text-muted-foreground italic">
                                {testimonial.quote}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
