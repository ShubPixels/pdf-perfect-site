import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Plane, Hotel, Camera, Utensils, Clock, Check, X } from "lucide-react";
import { ImmersiveGallery } from "@/components/destination/ImmersiveGallery";
import { tours, getDeparturesByTourId, Tour } from "@/data/tours";

// Image imports
import japanImage from "@/assets/destinations/japan/covers/japan-tour.jpg";
import dubaiImage from "@/assets/shared/placeholders/hero-travel.jpg";

//dubai gallery images
import Onedubai from "@/assets/destinations/dubai/gallery/1.png";
import Twodubai from "@/assets/destinations/dubai/gallery/2.png";
import Threedubai from "@/assets/destinations/dubai/gallery/3.png";
import Fourdubai from "@/assets/destinations/dubai/gallery/4.png";
import Fivedubai from "@/assets/destinations/dubai/gallery/5.png";
import Sixdubai from "@/assets/destinations/dubai/gallery/6.png";
import Eightdubai from "@/assets/destinations/dubai/gallery/8.png";
import Tendubai from "@/assets/destinations/dubai/gallery/10.png";
import Elevendubai from "@/assets/destinations/dubai/gallery/11.png";
import Ninedubai from "@/assets/destinations/dubai/gallery/9.png";
import Thirteendubai from "@/assets/destinations/dubai/gallery/13.png";

// Japan gallery images
import Onejapan from "@/assets/destinations/japan/gallery/1.png";
import Twojapan from "@/assets/destinations/japan/gallery/2.png";
import Threejapan from "@/assets/destinations/japan/gallery/3.png";
import Fourjapan from "@/assets/destinations/japan/gallery/4.png";
import Fivejapan from "@/assets/destinations/japan/gallery/5.png";
import Sixjapan from "@/assets/destinations/japan/gallery/6.png";
import Sevenjapan from "@/assets/destinations/japan/gallery/7.png";
import Eightjapan from "@/assets/destinations/japan/gallery/8.png";
import Ninejapan from "@/assets/destinations/japan/gallery/9.png";

// Europe gallery images
import Oneeurope from "@/assets/destinations/europe/gallery/1.png";
import Twoeurope from "@/assets/destinations/europe/gallery/2.png";
import Threeeurope from "@/assets/destinations/europe/gallery/3.png";
import Fourope from "@/assets/destinations/europe/gallery/4.png";
import Fiveeurope from "@/assets/destinations/europe/gallery/5.png";
import Sixeurope from "@/assets/destinations/europe/gallery/6.png";
import Seveneurope from "@/assets/destinations/europe/gallery/7.png";
import Eighteurope from "@/assets/destinations/europe/gallery/8.png";
import Nineeurope from "@/assets/destinations/europe/gallery/9.png";

//baku gallery images
import Twobaku  from "@/assets/destinations/baku/gallery/20250215_091615.jpg";
import Onebaku from "@/assets/destinations/baku/gallery/20250215_153534.jpg";
import Threebaku from "@/assets/destinations/baku/gallery/20250215_153822.jpg";
import Fourbaku from "@/assets/destinations/baku/gallery/20250216_134848.jpg";
import Fivebaku from "@/assets/destinations/baku/gallery/20250218_123633.jpg";
import Sixbaku from "@/assets/destinations/baku/gallery/20250218_125325.jpg";
import Sevenbaku from "@/assets/destinations/baku/gallery/20250218_131641.jpg";
import Eightbaku from "@/assets/destinations/baku/gallery/20250223_114453.jpg";
import Ninebaku from "@/assets/destinations/baku/gallery/20250223_123401.jpg";
import Tenbaku from "@/assets/destinations/baku/gallery/20250223_135311.jpg";


// Bali gallery images
import Onebali from "@/assets/destinations/bali/gallery/1.png";
import Twobali from "@/assets/destinations/bali/gallery/2.png";
import Threebali from "@/assets/destinations/bali/gallery/3.png";
import Fourbali from "@/assets/destinations/bali/gallery/4.png";
import Fivebali from "@/assets/destinations/bali/gallery/5.png";
import Sixbali from "@/assets/destinations/bali/gallery/6.png";
import Sevenbali from "@/assets/destinations/bali/gallery/7.png";
import Eightbali from "@/assets/destinations/bali/gallery/8.png";
import Ninebali from "@/assets/destinations/bali/gallery/9.png";

// Andaman gallery images
import Oneandaman from "@/assets/destinations/andaman/gallery/1.png";
import Twoandaman from "@/assets/destinations/andaman/gallery/2.png";
import Threeandaman from "@/assets/destinations/andaman/gallery/3.png";
import Fourandaman from "@/assets/destinations/andaman/gallery/4.png";
import Fiveandaman from "@/assets/destinations/andaman/gallery/5.png";
import Sixandaman from "@/assets/destinations/andaman/gallery/6.png";
import Sevenandaman from "@/assets/destinations/andaman/gallery/7.png";
import Eightandaman from "@/assets/destinations/andaman/gallery/8.png";

// Kerala gallery images
import Onekerala from "@/assets/destinations/kerala/gallery/1.png";
import Twokerala from "@/assets/destinations/kerala/gallery/2.png";
import Threekerala from "@/assets/destinations/kerala/gallery/3.png";
import Fourkerala from "@/assets/destinations/kerala/gallery/4.png";
import Fivekerala from "@/assets/destinations/kerala/gallery/5.png";
import Sixkerala from "@/assets/destinations/kerala/gallery/6.png";
import Sevenkerala from "@/assets/destinations/kerala/gallery/7.png";
import Eightkerala from "@/assets/destinations/kerala/gallery/8.png";
import Ninekerala from "@/assets/destinations/kerala/gallery/9.png";

// Nepal gallery images
import Onenepal from "@/assets/destinations/nepal/gallery/1.png";
import Twonepal from "@/assets/destinations/nepal/gallery/2.png";
import Threenepal from "@/assets/destinations/nepal/gallery/3.png";
import Fournepal from "@/assets/destinations/nepal/gallery/4.png";
import Fivenepal from "@/assets/destinations/nepal/gallery/5.png";
import Sixnepal from "@/assets/destinations/nepal/gallery/6.png";
import Sevennepal from "@/assets/destinations/nepal/gallery/7.png";
import Eightnepal from "@/assets/destinations/nepal/gallery/8.png";
import Ninenepal from "@/assets/destinations/nepal/gallery/9.png";

// South Africa gallery images
import Onesouthafrica from "@/assets/destinations/south-africa/gallery/1.png";
import Twosouthafrica from "@/assets/destinations/south-africa/gallery/2.png";
import Threesouthafrica from "@/assets/destinations/south-africa/gallery/3.png";
import Foursouthafrica from "@/assets/destinations/south-africa/gallery/4.png";
import Fivesouthafrica from "@/assets/destinations/south-africa/gallery/5.png";
import Sixsouthafrica from "@/assets/destinations/south-africa/gallery/6.png";
import Sevensouthafrica from "@/assets/destinations/south-africa/gallery/7.png";
import Eightsouthafrica from "@/assets/destinations/south-africa/gallery/8.png";
import Ninesouthafrica from "@/assets/destinations/south-africa/gallery/9.png";
import Tensouthafrica from "@/assets/destinations/south-africa/gallery/10.png";

// Australia gallery images
import Oneaustralia from "@/assets/destinations/australia/gallery/1.png";
import Twoaustralia from "@/assets/destinations/australia/gallery/2.png";
import Threeaustralia from "@/assets/destinations/australia/gallery/3.png";
import Fouraustralia from "@/assets/destinations/australia/gallery/4.png";
import Fiveaustralia from "@/assets/destinations/australia/gallery/5.png";
import Sixaustralia from "@/assets/destinations/australia/gallery/6.png";
import Sevenaustralia from "@/assets/destinations/australia/gallery/7.png";
import Eightaustralia from "@/assets/destinations/australia/gallery/8.png";
import Nineaustralia from "@/assets/destinations/australia/gallery/9.png";

// Singapore gallery images
import Onesingapore from "@/assets/destinations/singapore/gallery/1.png";

import southAfricaImg from "@/assets/tours/upcoming-departures/south-africa.png";
import europeImage from "@/assets/destinations/europe/gallery/europe-tour.png";
import baliImage from "@/assets/destinations/bali/covers/bali-tour.jpg";
import heroImage from "@/assets/shared/placeholders/hero-travel.jpg";
import communityImage from "@/assets/shared/placeholders/community-1.jpg";
import andamanIMg from "@/assets/tours/upcoming-departures/andaman-tour.png";
import southAfricaGalleryImg from "@/assets/destinations/south-africa/gallery/1.png";
import australiaImg from "@/assets/tours/upcoming-departures/australia-tour.png";
import bakuImg from "@/assets/tours/upcoming-departures/baku-tour.png";
import baliImg from "@/assets/tours/upcoming-departures/bali-tour.png";
import keralaImg from "@/assets/tours/upcoming-departures/kerala-tour.png";
import nepalImg from "@/assets/destinations/nepal/gallery/nepal-tour.png";

// Map tour IDs to destination slugs
const tourIdToSlug: Record<string, string> = {
  'dubai-2025': 'dubai',
  'japan-2026': 'japan',
  'europe-2026': 'europe',
  'rajasthan-2025': 'rajasthan',
  'singapore-malaysia-2025': 'singapore',
  'kerala-2025': 'kerala',
  'andaman-2025': 'andaman',
  'nepal-2026': 'nepal',
  'bali-2026': 'bali',
  'baku-2026': 'baku',
  'australia-2026': 'australia',
  'south-africa-2026': 'south-africa'
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
  'australia': 'australia-2026',
  'south-africa': 'south-africa-2026'
};

// Gallery images for each destination
const destinationGalleries: Record<string, Array<{ id: number; src: string; alt: string; caption: string; category: string }>> = {
  dubai: [
    { id: 1, src: Tendubai, alt: "Burj Khalifa", caption: "The world's tallest building dominating Dubai's skyline", category: "architecture" },
    { id: 2, src: Fourdubai, alt: "Dubai Desert Safari", caption: "Thrilling desert adventure with dune bashing and traditional BBQ", category: "adventure" },
    { id: 3, src: Eightdubai, alt: "Dubai Marina", caption: "Luxurious waterfront district with stunning high-rises", category: "architecture" },
    { id: 4, src: Sixdubai, alt: "Palm Jumeirah", caption: "Iconic man-made island shaped like a palm tree", category: "architecture" },
    { id: 5, src: Ninedubai, alt: "Dubai Souks", caption: "Traditional Middle Eastern markets with gold and spices", category: "culture" },
    { id: 6, src: Onedubai, alt: "Dubai Fountain", caption: "Spectacular water, light and music show at Burj Khalifa Lake", category: "entertainment" },
    { id: 7, src: Fivedubai, alt: "Dubai Mall", caption: "World's largest shopping and entertainment destination", category: "entertainment" },
    { id: 8, src: Elevendubai, alt: "Dubai Creek", caption: "Historic waterway and traditional dhow boats", category: "culture" },
    { id: 9, src: Thirteendubai, alt: "Jumeirah Beach", caption: "Pristine beach with luxury hotels and Burj Al Arab", category: "nature" },
  ],
  japan: [
    { id: 1, src: Onejapan, alt: "Mount Fuji", caption: "Iconic Mount Fuji with cherry blossoms in spring", category: "nature" },
    { id: 2, src: Twojapan, alt: "Tokyo Shibuya Crossing", caption: "The world's busiest pedestrian crossing in Shibuya", category: "city" },
    { id: 3, src: Threejapan, alt: "Traditional Tea Ceremony", caption: "Authentic Japanese tea ceremony experience", category: "culture" },
    { id: 4, src: Fourjapan, alt: "Kyoto Bamboo Grove", caption: "Walking through the mystical Arashiyama bamboo forest", category: "nature" },
    { id: 5, src: Fivejapan, alt: "Golden Pavilion Temple", caption: "The stunning Kinkaku-ji temple in Kyoto", category: "culture" },
    { id: 6, src: Sixjapan, alt: "Japanese Cuisine", caption: "Fresh sushi and traditional Japanese delicacies", category: "food" },
    { id: 7, src: Sevenjapan, alt: "Bullet Train", caption: "High-speed Shinkansen bullet train experience", category: "transport" },
    { id: 8, src: Eightjapan, alt: "Geisha District", caption: "Evening stroll in Gion, Kyoto's geisha district", category: "culture" },
    { id: 9, src: Ninejapan, alt: "Tokyo Tower", caption: "Iconic communications tower in Tokyo", category: "architecture" },
  ],
  europe: [
    { id: 1, src: Oneeurope, alt: "Eiffel Tower", caption: "The iconic Eiffel Tower in Paris at sunset", category: "architecture" },
    { id: 2, src: Twoeurope, alt: "Venice Canals", caption: "Romantic gondola ride through Venice's canals", category: "city" },
    { id: 3, src: Threeeurope, alt: "Swiss Alps", caption: "Breathtaking views from Jungfraujoch in Switzerland", category: "nature" },
    { id: 4, src: Fourope, alt: "London Landmarks", caption: "Historic Tower Bridge and London skyline", category: "architecture" },
    { id: 5, src: Fiveeurope, alt: "Rome Colosseum", caption: "Ancient Roman Colosseum in Rome", category: "culture" },
    { id: 6, src: Sixeurope, alt: "Amsterdam Canals", caption: "Picturesque canals and architecture in Amsterdam", category: "city" },
    { id: 7, src: Seveneurope, alt: "Paris Seine River", caption: "Seine River cruise in Paris", category: "city" },
    { id: 8, src: Eighteurope, alt: "Scottish Highlands", caption: "Stunning landscapes in the Scottish Highlands", category: "nature" },
    { id: 9, src: Nineeurope, alt: "Barcelona Gaudi", caption: "Sagrada Familia and Gaudi architecture in Barcelona", category: "architecture" },
  ],
  rajasthan: [
    { id: 1, src: heroImage, alt: "Amber Fort", caption: "Majestic Amber Fort in Jaipur with stunning architecture", category: "architecture" },
    { id: 2, src: communityImage, alt: "Lake Palace", caption: "The stunning City Palace of Udaipur on Lake Pichola", category: "culture" },
    { id: 3, src: baliImage, alt: "Hawa Mahal", caption: "The iconic Palace of Winds in Jaipur", category: "architecture" },
    { id: 4, src: europeImage, alt: "Desert Camp", caption: "Traditional camp in the Rajasthan desert with camel safari", category: "adventure" },
  ],
  singapore: [
    { id: 1, src: Onesingapore, alt: "Marina Bay Sands", caption: "The iconic Marina Bay Sands at night with infinity pool", category: "architecture" },
    { id: 2, src: communityImage, alt: "Gardens by the Bay", caption: "Futuristic Supertrees light up the night sky", category: "nature" },
    { id: 3, src: baliImage, alt: "Universal Studios", caption: "Thrilling rides at Universal Studios Singapore", category: "entertainment" },
    { id: 4, src: europeImage, alt: "Petronas Towers", caption: "The magnificent twin towers of Kuala Lumpur", category: "architecture" },
  ],
  kerala: [
    { id: 1, src: Onekerala, alt: "Backwaters of Alleppey", caption: "Serene houseboat cruise on the backwaters", category: "nature" },
    { id: 2, src: Twokerala, alt: "Munnar Tea Gardens", caption: "Rolling hills of lush tea plantations", category: "nature" },
    { id: 3, src: Threekerala, alt: "Kathakali Dancer", caption: "Traditional Kathakali dance performance", category: "culture" },
    { id: 4, src: Fourkerala, alt: "Kanyakumari Sunrise", caption: "Sunrise at India's southernmost point", category: "nature" },
    { id: 5, src: Fivekerala, alt: "Periyar Wildlife", caption: "Wildlife sanctuary in Periyar National Park", category: "nature" },
    { id: 6, src: Sixkerala, alt: "Kerala Backwaters", caption: "Traditional Kerala houseboats on backwaters", category: "nature" },
    { id: 7, src: Sevenkerala, alt: "Fort Kochi", caption: "Historic Fort Kochi with Dutch Cemetery", category: "culture" },
    { id: 8, src: Eightkerala, alt: "Wayanad Hills", caption: "Scenic hills and waterfalls in Wayanad", category: "nature" },
    { id: 9, src: Ninekerala, alt: "Kerala Cuisine", caption: "Traditional Kerala sadhya feast", category: "food" },
  ],
  andaman: [
    { id: 1, src: Oneandaman, alt: "Radhanagar Beach", caption: "Asia's best beach with crystal clear waters", category: "nature" },
    { id: 2, src: Twoandaman, alt: "Cellular Jail", caption: "Historic Cellular Jail at sunset", category: "culture" },
    { id: 3, src: Threeandaman, alt: "Coral Reefs", caption: "Vibrant coral reefs for snorkeling and diving", category: "adventure" },
    { id: 4, src: Fourandaman, alt: "Neil Island", caption: "Golden hour at Laxmanpur Beach, Neil Island", category: "nature" },
    { id: 5, src: Fiveandaman, alt: "Havelock Island", caption: "Beautiful beaches and island scenery", category: "nature" },
    { id: 6, src: Sixandaman, alt: "Port Blair", caption: "Port Blair harbor and waterfront", category: "city" },
    { id: 7, src: Sevenandaman, alt: "Andaman Sea", caption: "Crystal clear waters of the Andaman Sea", category: "nature" },
    { id: 8, src: Eightandaman, alt: "Island Hopping", caption: "Scenic boat ride between islands", category: "adventure" },
  ],
  'south-africa': [
    { id: 1, src: Onesouthafrica, alt: "Table Mountain", caption: "Iconic Table Mountain overlooking Cape Town", category: "nature" },
    { id: 2, src: Twosouthafrica, alt: "Pilanesberg Safari", caption: "Big Five safari in Pilanesberg National Park", category: "adventure" },
    { id: 3, src: Threesouthafrica, alt: "Cape Peninsula", caption: "Scenic drive along the Cape Peninsula", category: "nature" },
    { id: 4, src: Foursouthafrica, alt: "Sun City Resort", caption: "Luxury resort with Valley of Waves", category: "entertainment" },
    { id: 5, src: Fivesouthafrica, alt: "Whale Watching", caption: "Southern Right whales in Hermanus", category: "nature" },
    { id: 6, src: Sixsouthafrica, alt: "Garden Route", caption: "Beautiful coastal drive through Garden Route", category: "nature" },
    { id: 7, src: Sevensouthafrica, alt: "Cape Town Waterfront", caption: "Modern waterfront development in Cape Town", category: "city" },
    { id: 8, src: Eightsouthafrica, alt: "Kruger National Park", caption: "Safari experience in Kruger National Park", category: "adventure" },
    { id: 9, src: Ninesouthafrica, alt: "Stellenbosch Winelands", caption: "Beautiful vineyards in Stellenbosch", category: "nature" },
    { id: 10, src: Tensouthafrica, alt: "Drakensberg Mountains", caption: "Stunning Drakensberg mountain range", category: "nature" },
  ],
  australia: [
    { id: 1, src: Oneaustralia, alt: "Sydney Opera House", caption: "Iconic performing arts venue in Sydney Harbour", category: "architecture" },
    { id: 2, src: Twoaustralia, alt: "Great Barrier Reef", caption: "Vibrant coral reefs and marine life", category: "nature" },
    { id: 3, src: Threeaustralia, alt: "Uluru", caption: "Sacred red rock formation in the desert", category: "nature" },
    { id: 4, src: Fouraustralia, alt: "Melbourne CBD", caption: "Modern cityscape with historic architecture", category: "city" },
    { id: 5, src: Fiveaustralia, alt: "Kangaroo Spotting", caption: "Wildlife encounters in Australian bush", category: "adventure" },
    { id: 6, src: Sixaustralia, alt: "Gold Coast Beaches", caption: "Beautiful beaches and coastal scenery", category: "nature" },
    { id: 7, src: Sevenaustralia, alt: "Blue Mountains", caption: "Scenic Blue Mountains wilderness", category: "nature" },
    { id: 8, src: Eightaustralia, alt: "Daintree Rainforest", caption: "Ancient rainforest and wildlife", category: "nature" },
    { id: 9, src: Nineaustralia, alt: "Twelve Apostles", caption: "Iconic limestone stacks on Victoria's coast", category: "nature" },
  ],
  baku: [
  { id: 1, src: Fivebaku,  alt: "I love Baku sign",         caption: "Iconic photo spot celebrating the city",                  category: "city" },
  { id: 2, src: Twobaku,   alt: "Modern Baku skyline",      caption: "Contemporary architecture rising over the city",          category: "culture" },
  { id: 3, src: Threebaku, alt: "Historic stone arches",    caption: "Ancient structures and layered history in the Old City",   category: "culture" },
  // { id: 4, src: Fourbaku,  alt: "Mud volcanoes landscape",  caption: "Surreal mud volcano terrain near Baku",                   category: "nature" },
  { id: 5, src: Onebaku,   alt: "Old City lane",            caption: "Narrow stone alleyways inside Icherisheher",           category: "architecture" },
  { id: 6, src: Sixbaku,   alt: "Classic vintage car",      caption: "Retro automobile showcase in a museum-style display",     category: "culture" },
  { id: 7, src: Sevenbaku, alt: "Heydar Aliyev Center",     caption: "Futuristic curves and landmark modern design",             category: "architecture" },
  { id: 8, src: Eightbaku, alt: "City viewpoint panorama",  caption: "Wide skyline views from an elevated lookout",              category: "city" },
  { id: 9, src: Ninebaku,  alt: "Historic fortress walls",  caption: "Old stone structures and city heritage",                   category: "culture" },
  { id: 10, src: Tenbaku,  alt: "Palace grounds",           caption: "Grand building set within green gardens",                  category: "city" },
],

  bali: [
    { id: 1, src: Onebali, alt: "Ubud Rice Terraces", caption: "Stunning terraced rice fields in the hills of Ubud", category: "nature" },
    { id: 2, src: Twobali, alt: "Tanah Lot Temple", caption: "Iconic sea temple on a rock formation at sunset", category: "culture" },
    { id: 3, src: Threebali, alt: "Mount Batur", caption: "Active volcano with sunrise trekking opportunities", category: "adventure" },
    { id: 4, src: Fourbali, alt: "Seminyak Beach", caption: "Popular beach area with luxury resorts and cafes", category: "nature" },
    { id: 5, src: Fivebali, alt: "Uluwatu Temple", caption: "Cliffside temple with traditional Kecak dance performances", category: "culture" },
    { id: 6, src: Sixbali, alt: "Bali Beaches", caption: "Beautiful beaches and coastal scenery", category: "nature" },
    { id: 7, src: Sevenbali, alt: "Sacred Monkey Forest", caption: "Sacred monkey forest sanctuary in Ubud", category: "nature" },
    { id: 8, src: Eightbali, alt: "Bali Rice Fields", caption: "Traditional Balinese rice field landscapes", category: "nature" },
    { id: 9, src: Ninebali, alt: "Tirta Empul Temple", caption: "Holy water temple with traditional purification rituals", category: "culture" },
  ],
  nepal: [
    { id: 1, src: Onenepal, alt: "Mount Everest", caption: "Majestic Mount Everest from base camp", category: "nature" },
    { id: 2, src: Twonepal, alt: "Kathmandu Durbar Square", caption: "Historic royal palace square in Kathmandu", category: "culture" },
    { id: 3, src: Threenepal, alt: "Pokhara Lakeside", caption: "Beautiful lakeside view in Pokhara", category: "nature" },
    { id: 4, src: Fournepal, alt: "Bhaktapur", caption: "Ancient city with medieval architecture", category: "culture" },
    { id: 5, src: Fivenepal, alt: "Annapurna Circuit", caption: "Scenic mountain trekking routes", category: "adventure" },
    { id: 6, src: Sixnepal, alt: "Lumbini", caption: "Birthplace of Buddha with sacred gardens", category: "culture" },
    { id: 7, src: Sevennepal, alt: "Chitwan National Park", caption: "Wildlife safari in jungle grasslands", category: "nature" },
    { id: 8, src: Eightnepal, alt: "Nepal Himalayas", caption: "Breathtaking Himalayan mountain ranges", category: "nature" },
    { id: 9, src: Ninenepal, alt: "Traditional Nepali Architecture", caption: "Colorful traditional houses and temples", category: "culture" },
  ]
};

// Get main image for each destination
const getMainImage = (slug: string): string => {
  const imageMap: Record<string, string> = {
    dubai: dubaiImage,
    japan: japanImage,
    europe: europeImage,
    rajasthan: heroImage,
    singapore: Onesingapore,
    kerala: keralaImg,
    andaman: andamanIMg,
    nepal: nepalImg,
    'south-africa': southAfricaImg,
    australia: australiaImg,
    baku: bakuImg,
    bali: baliImg
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
  const { destinationId } = useParams<{ destinationId: string }>();

  // param can be either:
  // - tourId like "dubai-2025" (coming from Destinations.tsx)
  // - slug like "dubai" (used by your related links + older logic)
  const param = destinationId || "dubai";

  // 1) try direct tour id match
  const directTour = tours.find((t) => t.id === param);

  // 2) fallback: treat it as slug and map to tour id
  const mappedTourId = slugToTourId[param];
  const mappedTour = mappedTourId ? tours.find((t) => t.id === mappedTourId) : undefined;

  const tour = directTour ?? mappedTour;

  if (!tour) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-primary/10">
        <Navigation />
        <main className="flex flex-1 items-center justify-center px-4 py-24">
          <div className="rounded-[2rem] border border-border/30 bg-card/75 p-8 text-center backdrop-blur-sm">
            <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">Destination Not Found</h1>
            <p className="mb-8 text-muted-foreground">
              The destination you're looking for doesn't exist.
            </p>
            <Link to="/explore">
              <Button className="rounded-full px-6">Explore All Destinations</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Normalize everything downstream to use the actual tour.id + a clean slug
  const tourId = tour.id;
  const slug = tourIdToSlug[tourId] ?? param;

  const departures = getDeparturesByTourId(tourId);
  const gallery = destinationGalleries[slug] || [];
  const relatedDestinations = getRelatedDestinations(slug);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-primary/10">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cta/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-highlight/5 blur-3xl" />
      </div>
      <Navigation />
      
      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pb-10 pt-20 md:pb-12 md:pt-24">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="rounded-[2rem] border border-border/30 bg-card/75 p-8 backdrop-blur-sm md:p-10">
              <Badge className="mb-5 rounded-full bg-primary/10 px-4 py-2 text-primary hover:bg-primary/10">
                {tour.region}
              </Badge>
              <h1 className="mb-4 font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
                {tour.destination}
              </h1>
              <p className="text-lg leading-8 text-foreground/80 md:text-xl">
                {tour.tagline}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                {tour.overview}
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {tour.departureDates.slice(0, 3).map((date) => (
                  <span
                    key={date}
                    className="rounded-full border border-border/40 bg-background/75 px-3 py-1.5 text-sm text-foreground/80"
                  >
                    {date}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-full px-6">
                  <Link to="/contact">Plan This Tour</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6">
                  <a href="#tour-details">View Tour Details</a>
                </Button>
              </div>
            </div>

            <div className="group rounded-[2rem] border border-border/30 bg-card/70 p-4 backdrop-blur-sm shadow-[0_24px_80px_-48px_rgba(15,23,42,0.55)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-background/40">
                <img
                  src={getMainImage(slug)}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
                <img
                  src={getMainImage(slug)}
                  alt={tour.destination}
                  className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
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
            
        <div id="tour-details" className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Quick Info Bar */}
            <Card className="mb-12 rounded-[2rem] border-border/30 bg-card/75 backdrop-blur-sm">
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
              <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 rounded-[1.5rem] border border-border/30 bg-card/75 p-2 backdrop-blur-sm">
                <TabsTrigger value="overview" className="rounded-full px-4 py-2">Overview</TabsTrigger>
                <TabsTrigger value="itinerary" className="rounded-full px-4 py-2">Itinerary</TabsTrigger>
                {/* <TabsTrigger value="departures">Departures</TabsTrigger> */}
                <TabsTrigger value="inclusions" className="rounded-full px-4 py-2">Inclusions</TabsTrigger>
                <TabsTrigger value="why" className="rounded-full px-4 py-2">Why This Tour</TabsTrigger>
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
                <Card className="rounded-[2rem] border-accent bg-accent/10">
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
                  <Card className="rounded-[2rem] border-border/30 bg-card/75 p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <Hotel className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Accommodation</h3>
                        <p className="text-muted-foreground text-sm">{tour.accommodation}</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="rounded-[2rem] border-border/30 bg-card/75 p-6 backdrop-blur-sm">
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
                    <Card key={idx} className="overflow-hidden rounded-[2rem] border-border/30 bg-card/75 backdrop-blur-sm transition-all hover:border-primary/40">
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
                    <Card className="rounded-[2rem] border-border/30 bg-card/75 p-6 backdrop-blur-sm">
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
                    <Card className="rounded-[2rem] border-border/30 bg-card/75 p-6 backdrop-blur-sm">
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
                <Card className="rounded-[2rem] border-border/30 bg-card/75 backdrop-blur-sm">
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
                            <Check className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span className="text-muted-foreground text-lg">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>

                {/* Best Season */}
                <Card className="mt-6 rounded-[2rem] border-primary/20 bg-primary/5">
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
                    <Card className="group overflow-hidden cursor-pointer rounded-[2rem] border-border/30 bg-card/75 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-bold text-xl mb-1">{related.name}</h3>
                          <div className="text-sm">{related.duration}</div>
                        </div>
                      </div>
                      <div className="p-4">
                        <Button variant="ghost" className="w-full rounded-full text-primary hover:bg-primary hover:text-primary-foreground">
                          Explore {related.name}
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
