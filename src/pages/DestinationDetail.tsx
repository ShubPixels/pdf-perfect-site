import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Plane, Hotel, Camera, Utensils, Clock, TrendingUp, Check, X } from "lucide-react";
import { ImmersiveGallery } from "@/components/destination/ImmersiveGallery";
import { tours, getDeparturesByTourId, Tour } from "@/data/tours";

// Image imports
import japanImage from "@/assets/japan-tour.jpg";
import dubaiImage from "@/assets/hero-travel.jpg";
import Onedubai from "@/assets/Dubai/1.png";
import Twodubai from "@/assets/Dubai/2.png";
import Threedubai from "@/assets/Dubai/3.png";
import Fourdubai from "@/assets/Dubai/4.png";
import Fivedubai from "@/assets/Dubai/5.png";
import Sixdubai from "@/assets/Dubai/6.png";
import Eightdubai from "@/assets/Dubai/8.png";
import Tendubai from "@/assets/Dubai/10.png";
import Elevendubai from "@/assets/Dubai/11.png";
import Ninedubai from "@/assets/Dubai/9.png";
import europeImage from "@/assets/europe-tour.jpg";
import baliImage from "@/assets/bali-tour.jpg";
import heroImage from "@/assets/hero-travel.jpg";
import communityImage from "@/assets/community-1.jpg";

// Map tour IDs to destination slugs
const tourIdToSlug: Record<string, string> = {
  'dubai-2025': 'dubai',
  'japan-2026': 'japan',
  'europe-2026': 'europe',
  'rajasthan-2025': 'rajasthan',
  'singapore-malaysia-2025': 'singapore',
  'kerala-2025': 'kerala',
  'andaman-2025': 'andaman'
};

const slugToTourId: Record<string, string> = {
  'dubai': 'dubai-2025',
  'japan': 'japan-2026',
  'europe': 'europe-2026',
  'rajasthan': 'rajasthan-2025',
  'singapore': 'singapore-malaysia-2025',
  'kerala': 'kerala-2025',
  'andaman': 'andaman-2025',
  'nepal': 'nepal-2026',
  'bali': 'bali-2026',
  'baku': 'baku-2026',
  'australia': 'australia-2026'
};

// Gallery images for each destination
const destinationGalleries: Record<string, Array<{ id: number; src: string; alt: string; caption: string; category: string }>> = {
  dubai: [
    { id: 1, src: Tendubai, alt: "Burj Khalifa at sunset", caption: "The world's tallest building glowing at dusk", category: "architecture" },
    { id: 2, src: Fourdubai, alt: "Desert safari adventure", caption: "Thrilling dune bashing in the Arabian desert", category: "adventure" },
    { id: 3, src: Eightdubai, alt: "Sheikh Zayed Mosque", caption: "The magnificent Grand Mosque in Abu Dhabi", category: "culture" },
    { id: 4, src: Sixdubai, alt: "Dubai Marina skyline", caption: "Stunning waterfront views at Marina", category: "architecture" },
    { id: 5, src: Ninedubai, alt: "Traditional souks", caption: "Gold and spice souks in old Dubai", category: "culture" },
    { id: 6, src: Onedubai, alt: "Palm Jumeirah", caption: "Aerial view of the iconic man-made island", category: "architecture" },
    { id: 7, src: Fivedubai, alt: "Dubai Fountain show", caption: "Spectacular water and light performance", category: "entertainment" },
    { id: 8, src: Elevendubai, alt: "Camel ride experience", caption: "Traditional desert experience at sunset", category: "adventure" },
  ],
  japan: [
    { id: 1, src: japanImage, alt: "Cherry blossoms at Mount Fuji", caption: "Spring cherry blossoms frame the iconic Mount Fuji", category: "nature" },
    { id: 2, src: heroImage, alt: "Tokyo Shibuya crossing", caption: "The famous Shibuya crossing at night", category: "city" },
    { id: 3, src: communityImage, alt: "Traditional tea ceremony", caption: "Experience authentic Japanese hospitality", category: "culture" },
    { id: 4, src: baliImage, alt: "Kyoto bamboo grove", caption: "Walking through the mystical Arashiyama bamboo forest", category: "nature" },
    { id: 5, src: europeImage, alt: "Golden Pavilion temple", caption: "The stunning Kinkaku-ji in Kyoto", category: "culture" },
    { id: 6, src: japanImage, alt: "Japanese cuisine spread", caption: "Fresh sushi and local delicacies", category: "food" },
    { id: 7, src: heroImage, alt: "Bullet train experience", caption: "Traveling at 300km/h on the Shinkansen", category: "city" },
    { id: 8, src: communityImage, alt: "Geisha district", caption: "Evening stroll in Gion, Kyoto", category: "culture" },
  ],
  europe: [
    { id: 1, src: europeImage, alt: "Eiffel Tower", caption: "The iconic Eiffel Tower in Paris", category: "architecture" },
    { id: 2, src: heroImage, alt: "Venice canals", caption: "Romantic gondola ride through Venice", category: "city" },
    { id: 3, src: communityImage, alt: "Swiss Alps", caption: "Breathtaking views from Jungfraujoch", category: "nature" },
    { id: 4, src: baliImage, alt: "London Bridge", caption: "Historic Tower Bridge in London", category: "architecture" },
  ],
  rajasthan: [
    { id: 1, src: heroImage, alt: "Amber Fort", caption: "Majestic Amber Fort in Jaipur", category: "architecture" },
    { id: 2, src: communityImage, alt: "Lake Palace", caption: "The stunning City Palace of Udaipur", category: "culture" },
    { id: 3, src: baliImage, alt: "Hawa Mahal", caption: "The iconic Palace of Winds", category: "architecture" },
    { id: 4, src: europeImage, alt: "Desert camp", caption: "Traditional camp in the Rajasthan desert", category: "adventure" },
  ],
  singapore: [
    { id: 1, src: heroImage, alt: "Marina Bay Sands", caption: "The iconic Marina Bay Sands at night", category: "architecture" },
    { id: 2, src: communityImage, alt: "Gardens by the Bay", caption: "Futuristic Supertrees light up the night", category: "nature" },
    { id: 3, src: baliImage, alt: "Universal Studios", caption: "Thrilling rides at Universal Studios", category: "entertainment" },
    { id: 4, src: europeImage, alt: "Petronas Towers", caption: "The magnificent twin towers of KL", category: "architecture" },
  ],
  kerala: [
    { id: 1, src: heroImage, alt: "Backwaters of Alleppey", caption: "Serene houseboat cruise on backwaters", category: "nature" },
    { id: 2, src: communityImage, alt: "Munnar tea gardens", caption: "Rolling hills of tea plantations", category: "nature" },
    { id: 3, src: baliImage, alt: "Kathakali dancer", caption: "Traditional Kathakali performance", category: "culture" },
    { id: 4, src: europeImage, alt: "Kanyakumari sunrise", caption: "Sunrise at India's southernmost point", category: "nature" },
  ],
  andaman: [
    { id: 1, src: heroImage, alt: "Radhanagar Beach", caption: "Asia's best beach - crystal clear waters", category: "nature" },
    { id: 2, src: communityImage, alt: "Cellular Jail", caption: "Historic Cellular Jail at sunset", category: "culture" },
    { id: 3, src: baliImage, alt: "Underwater corals", caption: "Vibrant coral reefs for snorkeling", category: "adventure" },
    { id: 4, src: europeImage, alt: "Neil Island sunset", caption: "Golden hour at Laxmanpur Beach", category: "nature" },
  ]
};

// Get main image for each destination
const getMainImage = (slug: string): string => {
  const imageMap: Record<string, string> = {
    dubai: dubaiImage,
    japan: japanImage,
    europe: europeImage,
    rajasthan: heroImage,
    singapore: heroImage,
    kerala: heroImage,
    andaman: baliImage
  };
  return imageMap[slug] || heroImage;
};

// Get related destinations
const getRelatedDestinations = (
  currentSlug: string
): Array<{ id: string; name: string; image: string; duration: string }> => {
  const allDestinations = Object.keys(slugToTourId);

  return allDestinations
    .filter((slug) => slug !== currentSlug)
    .slice(0, 2)
    .map((slug) => {
      const tour = tours.find((t) => t.id === slugToTourId[slug]);

      return {
        id: slug,
        name: tour?.shortTitle ?? slug,
        image: getMainImage(slug),
        duration: tour?.duration ?? "Contact for details",
      };
    });
};


export default function DestinationDetail() {
  const { destinationId } = useParams();
  const slug = destinationId || 'dubai';
  const tourId = slugToTourId[slug];
  const tour = tours.find(t => t.id === tourId);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
            <p className="text-muted-foreground mb-8">The destination you're looking for doesn't exist.</p>
            <Link to="/explore">
              <Button>Explore All Destinations</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const departures = getDeparturesByTourId(tourId);
  const gallery = destinationGalleries[slug] || [];
  const relatedDestinations = getRelatedDestinations(slug);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src={getMainImage(slug)}
            alt={tour.destination}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                {tour.region}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {tour.destination}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {tour.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Immersive Gallery */}
            {gallery.length > 0 && (
              <ImmersiveGallery 
                images={gallery} 
                destinationName={tour.destination}
              />
            )}
            
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Quick Info Bar */}
            <Card className="mb-12 border-primary/20">
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                  <div className="flex flex-col items-center text-center">
                    <Calendar className="h-8 w-8 mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="mt-1 min-h-[3rem] flex items-center justify-center font-semibold text-foreground">
                      {tour.duration}
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <Clock className="h-8 w-8 mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground">Best Time</div>
                    <div className="mt-1 min-h-[3rem] flex items-center justify-center font-semibold text-foreground">
                      <span className="text-sm leading-snug text-balance">
                        {tour.bestSeason.split(".")[0]}
                      </span>
                    </div>
                  </div>

                  {/* centers the 3rd item on small screens (2-col layout) */}
                  <div className="flex flex-col items-center text-center col-span-2 md:col-span-1">
                    <Users className="h-8 w-8 mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground">Group Size</div>
                    <div className="mt-1 min-h-[3rem] flex items-center justify-center font-semibold text-foreground">
                      25-35 people
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Main Content Tabs */}
            <Tabs defaultValue="overview" className="mb-12">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="departures">Departures</TabsTrigger>
                <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                <TabsTrigger value="why">Why This?</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-8 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    About This Tour
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {tour.overview}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Tour Highlights
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tour.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                          <Camera className="h-5 w-5" />
                        </div>
                        <span className="text-foreground font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Destinations Covered */}
                <Card className="bg-accent/10 border-accent">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-8 w-8 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          Destinations Covered
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {tour.destinations.map((dest, idx) => (
                            <Badge key={idx} variant="secondary" className="text-sm">
                              {dest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Accommodation & Transport */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Hotel className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Accommodation</h3>
                        <p className="text-muted-foreground text-sm">{tour.accommodation}</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Plane className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Transportation</h3>
                        <p className="text-muted-foreground text-sm">{tour.transportation}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="mt-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Day-by-Day Itinerary
                </h2>
                <div className="space-y-4">
                  {tour.itinerary.map((day, idx) => (
                    <Card key={idx} className="overflow-hidden hover:border-primary transition-all">
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-sm">Day {day.day}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-foreground">
                                {day.title}
                              </h3>
                              {day.meals && (
                                <Badge variant="outline" className="text-xs">
                                  <Utensils className="h-3 w-3 mr-1" />
                                  {day.meals}
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {day.description}
                            </p>
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
                  {tour.departureDates.map((date, idx) => {
                    const departure = departures.find(d => d.departureDate === date);
                    return (
                      <Card key={idx} className="hover:border-primary transition-all">
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Calendar className="h-5 w-5 text-primary" />
                                <span className="font-semibold text-lg text-foreground">
                                  {date}
                                </span>
                                {departure?.tags?.map((tag, tIdx) => (
                                  <Badge key={tIdx} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center gap-4 text-muted-foreground ml-8">
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  Ex {tour.departureLocation}
                                </span>
                                {departure?.spotsLeft && (
                                  <span className="flex items-center gap-1 text-accent">
                                    <Users className="h-4 w-4" />
                                    {departure.spotsLeft} seats left
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              {/* <div className="text-right">
                                <div className="text-sm text-muted-foreground">Starting from</div>
                                <div className="text-2xl font-bold text-primary">
                                  {formatPrice(departure?.price || tour.price)}
                                </div>
                                {tour.originalPrice && (
                                  <div className="text-sm text-muted-foreground line-through">
                                    {formatPrice(tour.originalPrice)}
                                  </div>
                                )}
                              </div> */}
                              <Button size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground">
                                Enquire Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                {/* Booking Info */}
                {/* <Card className="mt-6 bg-accent/10 border-accent">
                  {/* <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Booking Information</h3>
                    <ul className="space-y-2">
                      {/* {tour.notes.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{note}</span>
                        </li>
                      ))} */}
                    {/* </ul>
                  </div> */}
                {/* </Card> */} 
              </TabsContent>

              <TabsContent value="inclusions" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Inclusions */}
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Check className="h-6 w-6 text-green-500" />
                      What's Included
                    </h2>
                    <Card className="p-6">
                      <ul className="space-y-3">
                        {tour.inclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                              <Check className="h-3 w-3 text-green-600" />
                            </div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  {/* Exclusions */}
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <X className="h-6 w-6 text-red-500" />
                      What's Not Included
                    </h2>
                    <Card className="p-6">
                      <ul className="space-y-3">
                        {tour.exclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                              <X className="h-3 w-3 text-red-600" />
                            </div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="why" className="mt-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Why Travellers Love This Tour
                </h2>
                <Card>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tour.idealFor.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ul className="space-y-4">
                      {tour.whyPopular.map((reason, idx) => (
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

                {/* Best Season */}
                <Card className="mt-6 bg-primary/5 border-primary/20">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <Calendar className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          Best Time to Visit
                        </h3>
                        <p className="text-muted-foreground">
                          {tour.bestSeason}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Related Destinations */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                You Might Also Like
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedDestinations.map((related) => (
                  <Link key={related.id} to={`/destination/${related.id}`}>
                    <Card className="group overflow-hidden cursor-pointer hover:border-primary transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-bold text-xl mb-1">{related.name}</h3>
                          <div className="text-sm">{related.duration}</div>
                        </div>
                      </div>
                      <div className="p-4">
                        <Button variant="ghost" className="w-full text-primary hover:text-primary-foreground hover:bg-primary">
                          Explore {related.name} →
                        </Button>
                      </div>
                    </Card>
                  </Link>
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
