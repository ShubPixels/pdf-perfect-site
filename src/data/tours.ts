// Tour data extracted from suntourismpune.co.in - the parent website
// This is the central hub for all tour information
import amritsarImg from "@/assets/tours/upcoming-departures/amritsar.png";
import assamTeaEstateImg from "@/assets/tours/upcoming-departures/assam-tea-estate.jpg";
import baliImg from "@/assets/tours/upcoming-departures/bali.png";
import dubaiImg from "@/assets/tours/upcoming-departures/dubai.png";
import europeanGlimpsImg from "@/assets/tours/upcoming-departures/european glimps.png";
import hongKongImg from "@/assets/tours/upcoming-departures/hong kong.png";
import japanImg from "@/assets/tours/upcoming-departures/japan.png";
import kashmirImg from "@/assets/tours/upcoming-departures/kashmir.png";
import restOfEuropeImg from "@/assets/tours/upcoming-departures/rest of europe.png";
import southAfricaImg from "@/assets/tours/upcoming-departures/south-africa.png";
import tadobaSafariImg from "@/assets/tours/upcoming-departures/tadoba-safari.jpg";
import varanasiImg from "@/assets/tours/upcoming-departures/varanasi.png";
import europeImg from "@/assets/tours/upcoming-departures/europe.png";
import australiaTourImg from "@/assets/tours/upcoming-departures/australia-tour.png";
import nepalTourImg from "@/assets/destinations/nepal/gallery/nepal-tour.png";
import bhutanTourImg from "@/assets/tours/upcoming-departures/bhutan-palace.jpg";
import nainitalJimCorbettImg from "@/assets/tours/upcoming-departures/jim-corbett-tiger.jpg";

import andamanIMg from "@/assets/tours/upcoming-departures/andaman-tour.png";


export interface Tour {
  id: string;
  title: string;
  shortTitle: string;
  destination: string;
  destinations: string[];
  duration: string;
  nights: number;
  days: number;
  discountPercent?: number;
  departureDates: string[];
  departureLocation: string;
  type: 'international' | 'domestic';
  categories: string[];
  accommodation: string;
  bestSeason: string;
  transportation: string;
  highlights: string[];
  overview: string;
  tagline: string;
  itinerary: { day: number; title: string; description: string; meals?: string }[];
  inclusions: string[];
  exclusions: string[];
  notes: string[];
  bookingAmount: number;
  image: string;
  featured?: boolean;
  tripOfMonth?: boolean;
  region: string;
  idealFor: string[];
  whyPopular: string[];
}

export interface Departure {
  id: string;
  tourId: string;
  destination: string;
  duration: string;
  departureDate: string;
  departureLocation: string;
  discountPercent?: number;
  spotsLeft?: number;
  tags: string[];
  image: string;
  month: string;
  type: 'international' | 'domestic';
  link?: string;
}

// Featured tours from Sun Tourism
export const tours: Tour[] = [
  {
    id: 'dubai-2025',
    title: 'Dubai Tour Packages 2025 - With Abu Dhabi & Sharjah | Ghar Se Ghar Tak',
    shortTitle: 'Dubai & Abu Dhabi',
    destination: 'Dubai, Abu Dhabi & Sharjah',
    destinations: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    duration: '7 Days - 6 Nights',
    nights: 6,
    days: 7,
    discountPercent: 9,
    departureDates: ['27 Dec 2025', '21 Jan 2026', '13 Feb 2026'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Ghar se Ghar tak Group Tours', 'International Tours', 'Senior Citizens'],
    accommodation: 'Stay in premium 4-star hotels like Dubai Grand by Fortune or Fortune Atrium, offering comfort, location, and great service.',
    bestSeason: 'October to February is the ideal time - cool weather, festive vibes, and perfect for sightseeing.',
    transportation: 'Travel in style with a 2x2 air-conditioned luxury coach for all sightseeing, plus flights and Ghar Se Ghar Tak transfers included.',
    region: 'Middle East',
    tagline: 'Luxury, Adventure & Desert Magic - Bling, Burj & Beyond',
    idealFor: ['Families', 'Couples', 'Luxury Seekers', 'First-time Middle East', 'Senior Citizens'],
    highlights: [
      'Burj Khalifa with Gold Coffee',
      'Desert Safari with VIP Camp',
      'Dubai Marina Yacht Ride',
      'Abu Dhabi SeaWorld',
      'Sheikh Zayed Grand Mosque',
      'BAPS Hindu Temple Abu Dhabi',
      'Global Village',
      'Miracle Garden',
      'Dubai Aquarium',
      'Traditional Abra Ride'
    ],
    overview: 'Sun Tourism brings you the ultimate Dubai group tour package - a 7-day adventure with sky-high towers, golden deserts, and that effortless Ghar Se Ghar Tak comfort. From Burj Khalifa selfies and desert dune adventures to Marina yacht rides and world-class shopping, this package covers every iconic Dubai experience. Plus, enjoy a bonus Abu Dhabi day trip with SeaWorld and the majestic Sheikh Zayed Grand Mosque.',
    itinerary: [
      { 
        day: 1, 
        title: 'Residence - United Arab Emirates', 
        description: 'Today enter the world of Sun Tourism International Pvt. Ltd. as you begin your wonderful tour of Dubai. Pickup from your residence and transfer to Mumbai Airport for your flight to the UAE. On arrival, after clearing immigration formalities, proceed to the hotel in Dubai for check in. Overnight stay in Dubai.',
        meals: 'Dinner'
      },
      { 
        day: 2, 
        title: 'Dubai - Desert Safari', 
        description: 'After breakfast at the hotel, morning free to relax or for personal activities. Roam around the malls nearby hotels to get a feel of this Shopper\'s Paradise. Afternoon, after lunch, proceed for Desert Safari. Experience the magnificence and harmony of the desert in our comfortable 4WD Luxury Vehicles. Enjoy the musical and colorful evening in a VIP Desert Camp. Overnight stay in Dubai.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      { 
        day: 3, 
        title: 'Dubai City Tour', 
        description: 'Breakfast at the hotel and proceed for Dubai City Tour. Start the tour with a photo stop at Jumeirah Beach, facing the stunning Burj Al Arab. Proceed to Jumeirah, the picturesque palace and residential area of Dubai, also home to the famous Jumeirah Mosque. Enroute to the Palm Island with a stop-over at the Atlantis - The Palm for a photo-shoot followed by a stop at King\'s Palace. We drive past the Creek and the oldest part of the city, Bastakiya - the old wind tower houses with their splendid architecture. Late Afternoon we visit Dubai Mall and the Dubai Aquarium (from outside). Later we shall visit Burj Khalifa and Enjoy the Gold Coffee at Burj Khalifa. Also enjoy the World\'s Biggest Water Fountain. Dinner and Overnight stay in Dubai.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      { 
        day: 4, 
        title: 'Dubai - Sharjah - Dubai (Miracle Garden & Global Village)', 
        description: 'After breakfast proceed for the Sharjah city tour, "The Pearl of the Gulf". One of the many landmarks to see during the tour is King Faisal Mosque. Drive via the Sharjah Corniche, pass the Al Ittihad Monument, and Sharjah Stadium (from outside). Afternoon transfer to Miracle Garden (if open), launched on Valentine\'s Day in 2013. It occupies over 72,000 square metres, making it the world\'s largest flower garden, featuring over 50 million flowers and 250 million plants. Evening transfer to Global Village, a cultural destination in the city of Dubai. It has different pavilions showcasing the culture and traditions of each country across the globe. Enjoy the evening shopping. Overnight stay in Dubai.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      { 
        day: 5, 
        title: 'Abu Dhabi Day Trip (BAPS Temple, Sheikh Zayed Mosque, SeaWorld)', 
        description: 'Morning after breakfast proceed to Abu Dhabi. First visit the newly opened BAPS Hindu Temple in Abu Dhabi. Later proceed to the capital town of the Emirates to enjoy a City Orientation Tour covering photo stops at Sheikh Zayed Grand Mosque followed by a drive along the beautiful Corniche, magnificent view of the Presidential Palace etc. Later transfer to Sea World to enjoy the beautiful Theme Park, covering over 35 interactive experiences and rides. These include attractions like the Manta Coaster, Eel Racer, Hypersphere 360, Jelly Plunge, and Kelp Climb etc. Evening proceed for a photo stop at Ferrari World. Overnight stay in Dubai.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      { 
        day: 6, 
        title: 'Shopping Day & Dubai Marina Yacht Ride', 
        description: 'After an easy and relaxed breakfast, transfer to the Meena Bazar & Gold Souk areas for shopping time. Enjoy the traditional Abra Ride in Dubai Creek. Finally its time to enjoy a Beautiful and memorable Yacht Ride in Dubai Marina, before proceeding to airport for your return home flight.',
        meals: 'Breakfast, Lunch'
      },
      { 
        day: 7, 
        title: 'Mumbai - Pune - Residence', 
        description: 'Arrive Mumbai. After clearing the Custom and Immigration formalities, complimentary transfer to Pune and to your Residence. Arrive Home and Tour Ends.',
        meals: ''
      }
    ],
    inclusions: [
      'Residence - Airport - Residence COMPLIMENTARY Transfer (Ghar Se Ghar Tak for Pune, PCMC, Nashik & Mumbai Guests)',
      'Return Economy Class Airfare',
      'Breakfast, Lunch, Dinner as per Itinerary',
      'All Sightseeing Entry Charges, Tips, Guide Fee',
      'All transfers and sightseeing by 2x2 A/C Luxury Coach',
      'Tourist Visa Charges for Tour Duration',
      'Travel Insurance for Travel Duration (International Sector)',
      'Services of Sun Tourism Tour Manager',
      'Your Tour Photos in form of Google Drive',
      '1 Drinking Water bottle Per Person Per Day'
    ],
    exclusions: [
      'GST @ 5% & TCS @ 5% (Or as applicable)',
      'Any increase in Airfare, Visa fees, Airport taxes, Govt Taxes, Fuel Surcharges',
      'Any COVID / COVID TEST related charges (If Any)',
      'Personal expenses like telephone calls, laundry, shopping',
      'Any services or activity not included in the group tour itinerary'
    ],
    notes: [
      'Booking Amount Rs. 40,000/- per person (Non Refundable)',
      'Balance to be paid 45 days before departure',
      'Cost calculated at 1 USD @ INR 86.5'
    ],
    bookingAmount: 40000,
    image: '/dubai-tour.jpg',
    featured: true,
    whyPopular: [
      'Perfect for first-time Middle East travelers',
      'Luxurious yet comfortable travel experience',
      'Indian-friendly with many vegetarian options',
      'Short flight from India - ideal for short breaks',
      'Safe, clean, and family-friendly destination',
      'Ghar Se Ghar Tak - Zero stress doorstep service'
    ]
  },
  {
    id: 'europe-2026',
    title: 'Europe Tour Packages 2026 | Sun Tourism International',
    shortTitle: 'Grand Europe',
    destination: 'Europe',
    destinations: ['London', 'Amsterdam', 'Brussels', 'Paris', 'Switzerland', 'Venice', 'Rome'],
    duration: '16 Days - 15 Nights',
    nights: 15,
    days: 16,
    discountPercent: 6,
    departureDates: ['07 May 2026'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Ghar se Ghar tak Group Tours', 'International Tours', 'Senior Citizens'],
    accommodation: 'Stay in comfortable 3★ & 4★ hotels with twin/triple sharing rooms and one overnight cruise.',
    bestSeason: 'May departure falls in Europe\'s spring season, with pleasant weather (10°C-20°C) ideal for sightseeing and tulip viewing.',
    transportation: 'Economy airfare, luxury A/C coaches, overnight cruise, scenic trains, cable cars, boat rides, and city transfers.',
    region: 'Europe',
    tagline: '7 Countries, 16 Days of Culture, History & Breathtaking Landscapes',
    idealFor: ['Families', 'Culture Lovers', 'First-time Europe', 'Senior Citizens', 'Honeymooners'],
    highlights: [
      'London Eye & Tower of London',
      'Madame Tussauds Wax Museum',
      'Keukenhof Tulip Gardens',
      'Eiffel Tower & Seine River Cruise',
      'Versailles Palace',
      'Jungfraujoch - Top of Europe',
      'Mt. Titlis Snow Activities',
      'Venice Gondola Ride',
      'Leaning Tower of Pisa',
      'Vatican & Trevi Fountain'
    ],
    overview: 'Experience the magic of Europe with Sun Tourism\'s Grand Europe Tour Packages 2026, featuring 16 days of culture, history, and breathtaking landscapes from London to Rome. Visit 7 countries including UK, Netherlands, Belgium, France, Switzerland, Liechtenstein, and Italy.',
    itinerary: [
      { day: 1, title: 'Residence - Pune - Mumbai', description: 'Pick up from your Residence and transfer to Mumbai for flight to London.', meals: '' },
      { day: 2, title: 'London Arrival', description: 'Arrive London. Visit the London Eye - one of the world\'s largest observation wheels offering panoramic views of the city.', meals: 'Dinner' },
      { day: 3, title: 'London City Tour', description: 'Guided City Tour covering Tower Bridge, Big Ben, Buckingham Palace, Tower of London with Crown Jewels, and shopping at Oxford Street.', meals: 'Breakfast, Dinner' },
      { day: 4, title: 'London - Amsterdam (Overnight Cruise)', description: 'Visit Madame Tussauds Wax Museum with lifelike celebrity figures. Board overnight Cruise to Netherlands.', meals: 'Breakfast, Dinner' },
      { day: 5, title: 'Amsterdam - Brussels', description: 'Visit Keukenhof Tulip Gardens (seasonal), Wooden Shoe factory, and Cheese Farm. Proceed to Belgium.', meals: 'Breakfast, Dinner' },
      { day: 6, title: 'Brussels - Paris', description: 'Paris City Tour including Arc De Triomphe, Eiffel Tower 2nd Level, and romantic Seine River Cruise.', meals: 'Breakfast, Dinner' },
      { day: 7, title: 'Paris - Versailles', description: 'Visit the famous Versailles Palace with its magnificent gardens. Proceed to Strasbourg.', meals: 'Breakfast, Dinner' },
      { day: 8, title: 'Switzerland', description: 'Black Forest scenic train journey, visit Rhine Falls - Europe\'s largest waterfall, and Zurich Lake orientation.', meals: 'Breakfast, Dinner' },
      { day: 9, title: 'Jungfraujoch - Top of Europe', description: 'Visit Top of Europe at 11,333 ft via cogwheel train. Explore Sphinx Observatory, Ice Palace, and Alpine snow experience.', meals: 'Breakfast, Dinner' },
      { day: 10, title: 'Mt. Titlis & Lucerne', description: 'Mt. Titlis by Rotair revolving cable car, Ice Grotto, Cliff Walk, and Lake Lucerne cruise with Chapel Bridge.', meals: 'Breakfast, Dinner' },
      { day: 11, title: 'Vaduz - Innsbruck', description: 'Visit Liechtenstein capital, Swarovski Crystal Showroom, and Innsbruck walking tour with Golden Roof.', meals: 'Breakfast, Dinner' },
      { day: 12, title: 'Venice Island', description: 'Venice Island tour by water taxi, St. Mark\'s Basilica, Doge\'s Palace, and romantic Gondola Ride through canals.', meals: 'Breakfast, Dinner' },
      { day: 13, title: 'Pisa - Florence', description: 'Visit the iconic Leaning Tower of Pisa for photos. Florence city tour with Duomo and leather shopping.', meals: 'Breakfast, Dinner' },
      { day: 14, title: 'Rome City Tour', description: 'Vatican City, St. Peter\'s Basilica, Sistine Chapel views, Colosseum photo stop, and wish at Trevi Fountain.', meals: 'Breakfast, Dinner' },
      { day: 15, title: 'Return Flight', description: 'Transfer to Rome Airport for flight to Mumbai.', meals: 'Breakfast' },
      { day: 16, title: 'Home Sweet Home', description: 'Arrive Mumbai, complimentary transfer to Residence. Tour Ends with beautiful memories.', meals: '' }
    ],
    inclusions: [
      'Residence - Airport - Residence Transfer (Ghar Se Ghar Tak)',
      'Return Economy Class Airfare',
      'All Meals (Breakfast & Dinner) as per Itinerary',
      '3★ & 4★ Hotel Accommodation + Overnight Cruise',
      'Schengen Visa Processing & Documentation',
      'Travel Insurance',
      'Sun Tourism Tour Director',
      'All Sightseeing and Entry Tickets as per itinerary',
      'Luxury A/C Coach throughout Europe'
    ],
    exclusions: [
      'GST @ 5% & TCS @ 5%',
      'Personal expenses and shopping',
      'Optional activities not in itinerary',
      'Any increase in currency rates'
    ],
    notes: [
      'Booking Amount Rs. 1,00,000/- per person',
      'Balance to be paid 60 days before departure'
    ],
    bookingAmount: 100000,
    image: '/europe-tour.jpg',
    featured: true,
    tripOfMonth: true,
    whyPopular: [
      '7 countries covered in one comprehensive tour',
      'Iconic landmarks: Eiffel Tower, Colosseum, Jungfraujoch',
      'Vegetarian Indian food arrangements available',
      'Experienced Sun Tourism guide throughout',
      'Perfect blend of culture, adventure, and relaxation',
      'Once-in-a-lifetime experiences included'
    ]
  },
  {
    id: 'rajasthan-2025',
    title: 'Rajasthan Tour Package 2025 - 7 Days Jaipur, Udaipur, Pushkar & Mount Abu',
    shortTitle: 'Royal Rajasthan',
    destination: 'Rajasthan',
    destinations: ['Mount Abu', 'Udaipur', 'Chittorgarh', 'Pushkar', 'Jaipur'],
    duration: '7 Days - 6 Nights',
    nights: 6,
    days: 7,
    discountPercent: 16,
    departureDates: ['23 Dec 2025'],
    departureLocation: 'Pune',
    type: 'domestic',
    categories: ['Culture and Heritage', 'Domestic Tour', 'Ghar se Ghar tak Group Tours', 'Senior Citizens'],
    accommodation: 'Stay in deluxe & star-rated hotels across Mount Abu, Udaipur, Pushkar, and Jaipur.',
    bestSeason: 'December offers pleasant weather perfect for sightseeing and outdoor exploration.',
    transportation: 'Flights from Pune-Ahmedabad-Jaipur-Pune with AC coach transfers for all sightseeing.',
    region: 'North India',
    tagline: 'Royal Heritage, Desert Magic & Timeless Culture',
    idealFor: ['Families', 'Culture Lovers', 'Seniors', 'Photography Enthusiasts', 'History Buffs'],
    highlights: [
      'Delwara Jain Temples',
      'Nakki Lake',
      'Haldighati Museum',
      'City Palace Udaipur',
      'Bagore Ki Haveli Dance Show',
      'Chittorgarh Fort',
      'Brahma Temple Pushkar',
      'Amber Fort Light & Sound Show',
      'Chokhi Dhani Village Experience',
      'Hawa Mahal'
    ],
    overview: 'A 7-day journey crafted for December departures, blending the cool hills of Mount Abu with the lakes of Udaipur, the sacred aura of Pushkar, and the royal charm of Jaipur. Experience royal palaces, ancient forts, and vibrant Rajasthani culture.',
    itinerary: [
      { day: 1, title: 'Residence - Mount Abu', description: 'Flight from Pune to Ahmedabad. Transfer to Mount Abu - the only hill station in Rajasthan. Visit the exquisite Delwara Jain temples known for intricate marble carvings. Evening boat ride at Nakki Lake. Overnight at Mount Abu.', meals: 'Dinner' },
      { day: 2, title: 'Mount Abu - Udaipur', description: 'After breakfast, visit Haldighati Museum dedicated to Maharana Pratap and the famous war horse Chetak. Visit Chetak Smarak and proceed to Nathdwara for Shrinath Ji Temple darshan. Continue to Udaipur - City of Lakes. Overnight at Udaipur.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Udaipur City Tour', description: 'Full day Udaipur sightseeing. Visit the magnificent City Palace Museum overlooking Lake Pichola. Explore Sahelion-Ki-Bari (Garden of Maidens). Evening enjoy the enchanting folk dance show at Bagore Ki Haveli. Overnight at Udaipur.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Chittorgarh - Pushkar', description: 'Visit the majestic Chittorgarh Fort - the largest fort in India. See Vijay Stambh, Kirti Stambh, Meera Temple and Khumba Shyam Temple. Transfer to Pushkar - the holy city. Overnight at Pushkar.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Pushkar - Jaipur', description: 'Morning visit the sacred Brahma Temple - one of the few temples dedicated to Lord Brahma. Take a holy dip at Pushkar Lake and perform pooja. Proceed to Jaipur. Evening experience the magical Light & Sound Show at Amber Fort. Overnight at Jaipur.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Jaipur City Tour', description: 'Morning visit Birla Mandir. Day free for shopping at famous Jaipur markets for handicrafts, gems, and textiles. Evening experience authentic Rajasthani culture at Chokhi Dhani - a village-themed resort with folk performances and traditional dinner. Overnight at Jaipur.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Jaipur Sightseeing - Home', description: 'Visit the magnificent Amber Fort by jeep/elephant. Explore City Palace, Jantar Mantar observatory, and the iconic Hawa Mahal (Palace of Winds). Transfer to Jaipur Airport for flight to Pune. Transfer to Residence. Tour Ends.', meals: 'Breakfast, Lunch' }
    ],
    inclusions: [
      'Residence - Airport - Residence Transfer (Ghar Se Ghar Tak)',
      'Return Air Fare (Pune-Ahmedabad-Jaipur-Pune)',
      'All Meals - Breakfast, Lunch, Dinner',
      'Deluxe & Star Rated Hotels',
      'All Tips - Guide, Driver & Restaurant',
      'A/C Vehicle for all transfers and sightseeing',
      '1 Liter Water Bottle per person per day',
      'Sun Tourism Tour Manager',
      'Local Guide where required',
      'Basic Travel Insurance (Up to 60 years)'
    ],
    exclusions: [
      'Meals not specified in itinerary',
      'Sightseeing not mentioned',
      'GST of 5%',
      'Personal expenses',
      'Camera fees at monuments'
    ],
    notes: [
      'Booking Amount Rs. 20,000/- per person (NON REFUNDABLE)',
      'Balance to be paid 45-30 days before departure'
    ],
    bookingAmount: 20000,
    image: '/rajasthan-tour.jpg',
    featured: true,
    whyPopular: [
      'Perfect introduction to Royal Rajasthan',
      'Comfortable weather in December',
      'Mix of culture, heritage, and spirituality',
      'Vegetarian-friendly tour with authentic Rajasthani cuisine',
      'Safe for families and senior citizens',
      'All-inclusive with no hidden costs'
    ]
  },
  {
    id: 'japan-2026',
    title: 'Japan Cherry Blossom Tour 2026 | 8-Day Sakura Special',
    shortTitle: 'Cherry Blossom Japan',
    destination: 'Japan',
    destinations: ['Tokyo', 'Hakone', 'Mt. Fuji', 'Hiroshima', 'Osaka', 'Nara', 'Kyoto'],
    duration: '8 Days - 7 Nights',
    nights: 7,
    days: 8,
    departureDates: ['24 Mar 2026'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Ghar se Ghar tak Group Tours', 'International Tours', 'Senior Citizens'],
    accommodation: 'Stay in 3-4 star deluxe hotels across Japan.',
    bestSeason: 'Perfectly timed for cherry blossom (Sakura) viewing in late March 2026.',
    transportation: 'Luxury AC coach,and flights',
    region: 'Asia',
    tagline: 'Where Ancient Tradition Meets Modern Wonder - Sakura Special',
    idealFor: ['Families', 'Seniors', 'Culture Lovers', 'First-time Asia Travelers', 'Photography Enthusiasts'],
    highlights: [
      'Tokyo Sky Tree',
      'Asakusa Senso-ji Temple',
      'Shinjuku Gyoen Cherry Blossoms',
      'Mt. Fuji 5th Station',
      'Lake Ashi Pirate Cruise',
      'Hiroshima Peace Memorial',
      'Shinkansen Bullet Train (2 rides)',
      'Osaka Castle Park Sakura',
      'Kinkaku-ji Golden Pavilion',
      'Nara Deer Park'
    ],
    overview: 'Step into Sun Tourism\'s Japan Cherry Blossom Tour 2026 - an 8-day journey crafted for March departures, blending the vibrant energy of Tokyo with the serenity of Mt. Fuji, the historic spirit of Hiroshima, and the timeless beauty of Kyoto and Nara. From walking under the pink Sakura at Shinjuku Gyoen to riding the world-famous Shinkansen bullet train - this itinerary is designed for travelers who want culture, tradition, and natural beauty in one trip.',
    itinerary: [
      { day: 1, title: 'Pune - Mumbai', description: 'Welcome aboard! Today enter the world of Sun Tourism as you begin your memorable journey to Japan. Pick up from your Residence and transfer to Mumbai airport. On arrival check in for your flight to Japan.', meals: '' },
      { day: 2, title: 'Mumbai - Tokyo', description: 'Arrive Tokyo. After clearing the immigration formalities, enjoy transfer to your hotel. Enroute visit the Tokyo Sky Tree - one of the world\'s tallest towers. Evening free to relax and explore the surroundings. Overnight stay in Tokyo.', meals: 'Lunch, Dinner' },
      { day: 3, title: 'Tokyo City Tour', description: 'After breakfast transfer to enjoy Tokyo Guided City Tour. Visit the Oldest Temple of Tokyo City - Asakusa Senso-ji Temple. Later visit the Nakamise shopping Street followed by Imperial Palace Garden, Shibuya Crossing, and Shinjuku Gyoen National Garden to see the famous Sakura blooming. Evening visit Akihabara for shopping. Overnight in Tokyo.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Tokyo - Hakone - Mt. Fuji', description: 'After breakfast transfer to have an amazing and breathtaking view of mighty Mt. Fuji from Mt. Fuji 5th Station. Later enjoy Hakone Ropeway, Owakudani boiling valley for amazing Mt. Fuji views, followed by a lifetime experience of Pirate Cruise in Lake Ashi. Overnight stay in Lake Kawaguchi area.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Numazu - Hiroshima (Bullet Train)', description: 'After breakfast, proceed to Mishima station to take your first Bullet Train (Shinkansen) to Hiroshima. On arrival transfer to visit Miyajima Island by ferry. Enjoy the picture stop at Itsukushima Shrine and the famous Torii Gate in the water. Evening free to relax. Overnight stay in Hiroshima.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Hiroshima - Osaka (Bullet Train)', description: 'After breakfast, time to visit the historic Hiroshima Bomb site and monuments. Visit Hiroshima Peace Memorial Museum, Peace Memorial Park, Sadako Monument, Cenotaph Monument, and the Bomb Dome. Later transfer to Hiroshima Station for 2nd Bullet Train Ride to Osaka. On arrival visit Osaka Castle Park to enjoy the Sakura (Cherry Blossom). Later transfer to Shinsaibashi and Dotonbori area for shopping. Overnight stay in Osaka.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Osaka - Nara - Kyoto - Osaka', description: 'After breakfast checkout and transfer to Nara. On arrival visit the World Heritage Site of Todai-ji Temple housing the Great Buddha. Visit Nara Deer Park with over 1,200 wild Sika Deer. Later transfer to Kyoto. Visit the iconic Kinkaku-ji Temple (Golden Pavilion) and Kiyomizudera Temple, established in 780 AD - one of Japan\'s most celebrated temples. Evening free for shopping. Farewell dinner with your travel companions. Overnight in Osaka.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 8, title: 'Osaka - Mumbai - Home', description: 'After breakfast checkout from hotel and transfer to Osaka Airport for return flight to Mumbai. On arrival in Mumbai, after immigration and customs, transfer to your Residence in Pune. Arrive Home and Tour Ends.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Residence - Airport - Residence COMPLIMENTARY Transfer (Ghar Se Ghar Tak for Nashik, Mumbai, Pune, PCMC)',
      'Return Economy Class Air Ticket (Cathay Pacific / Singapore Airlines)',
      'Stay in 3/4 star deluxe hotels',
      'Breakfast, Lunch, Dinner as per itinerary',
      'Everyday 2 Water Bottles in Coach',
      'Tea/Coffee at various places',
      'Japan Tourist Visa and Basic Health Insurance',
      'Shinkansen Bullet Train Tickets (2 rides)',
      'All transfers and sightseeing by 2x2 A/C Luxury Coach',
      'Travel Insurance (Up to 60 Years of age)',
      'Services of Sun Tourism Tour Manager',
      'Complimentary Travel Kit (Travel Bag, Cap, Passport Pouch, Snacks)',
      'More than 1000 Tour Photos in Google Drive'
    ],
    exclusions: [
      'GST @ 5% & TCS @ 5%',
      'Personal expenses and shopping',
      'Optional activities',
      'Any increase in currency rates'
    ],
    notes: [
      'Booking Amount Rs. 50,000/- per person (Non-refundable)',
      'Balance to be paid 45 days before departure',
      'Cost calculated at 1 USD = ₹89.20 and 1 JPY = ₹0.60'
    ],
    bookingAmount: 50000,
    image: '/japan-tour.jpg',
    featured: true,
    whyPopular: [
      'Perfectly timed for cherry blossom season',
      'Safe and clean environment for families and seniors',
      'Efficient public transport with Bullet Train experience',
      'Vegetarian-friendly food options available',
      'Rich cultural experiences without language barriers',
      'Once-in-a-lifetime Sakura experience'
    ]
  },
  {
    id: 'singapore-malaysia-2025',
    title: 'Singapore Malaysia Holiday Package - with Free Sri Lanka',
    shortTitle: 'Singapore Malaysia',
    destination: 'Singapore, Malaysia & Sri Lanka',
    destinations: ['Singapore', 'Malaysia', 'Sri Lanka'],
    duration: '9 Days - 8 Nights',
    nights: 8,
    days: 9,
    departureDates: ['24 Dec 2025'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Ghar se Ghar tak Group Tours', 'International Tours', 'Honeymoon special'],
    accommodation: 'Comfortable 3-star and 4-star hotels in Singapore, Malaysia, and Sri Lanka.',
    bestSeason: 'October to January is the best time for pleasant weather, shopping, and festive vibes.',
    transportation: 'All transfers and sightseeing via luxury 2x2 air-conditioned coach.',
    region: 'Southeast Asia',
    tagline: '3 Countries, 9 Days - Explore the Best of Southeast Asia',
    idealFor: ['Families', 'Couples', 'Honeymooners', 'First-time International Travelers'],
    highlights: [
      'Marina Bay Sands Sky Park',
      'Gardens by the Bay',
      'Universal Studios Singapore',
      'SEA Aquarium',
      'Sentosa Island Cable Car',
      'Genting Highlands',
      'Batu Caves',
      'Petronas Twin Towers',
      'KL Tower Observation Deck',
      'Colombo City Tour (FREE)'
    ],
    overview: 'Experience the ultimate Singapore Malaysia tour package this December 2025 with a surprise twist - a free Sri Lanka trip. Explore 3 stunning countries in just 9 days with world-famous attractions, modern cities, and tropical beauty.',
    itinerary: [
      { day: 1, title: 'Residence - Mumbai', description: 'Pick up from Residence, transfer to Mumbai Airport for flight to Colombo.', meals: '' },
      { day: 2, title: 'Colombo - Singapore', description: 'Colombo City Orientation Tour covering main attractions. Evening flight to Singapore.', meals: 'Breakfast, Dinner' },
      { day: 3, title: 'Kuala Lumpur - Genting Highlands', description: 'Putrajaya tour visiting the administrative capital. Transfer to Genting Highlands by Asia\'s longest cable car - 3.38 km journey with stunning views.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Genting - Kuala Lumpur', description: 'Morning free at Genting Outdoor Theme Park. Visit the iconic Batu Caves - limestone caves with Hindu temple.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Kuala Lumpur City Tour', description: 'Full day KL city tour. Visit King\'s Palace (Istana Negara), iconic Petronas Twin Towers, KL Tower Observation Deck, and shopping.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Singapore City Tour', description: 'Transfer to Singapore. Visit Marina Bay Sands Sky Park, Gardens by the Bay with Flower Dome and Cloud Forest.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Singapore - Universal Studios', description: 'Full day at Universal Studios Singapore. Evening visit SEA Aquarium - one of the world\'s largest.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 8, title: 'Singapore - Sentosa Island', description: 'City Tour, Sentosa Island Cable Car, Madame Tussauds Singapore, Wings of Time spectacular show.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 9, title: 'Return Home', description: 'Flight to Mumbai, complimentary transfer to Residence. Tour Ends.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Residence - Airport - Residence Transfer',
      'Return Economy Class Airfare',
      'All Meals as per Itinerary',
      '3-4 Star Hotels',
      'Singapore & Malaysia Visa',
      'Travel Insurance',
      'Sun Tourism Tour Manager',
      'All Sightseeing Entry Tickets',
      'FREE Sri Lanka Tour included'
    ],
    exclusions: [
      'GST @ 5% & TCS @ 5%',
      'Personal expenses',
      'Optional activities'
    ],
    notes: [
      'Booking Amount Rs. 40,000/- per person',
      'Balance to be paid 45 days before departure'
    ],
    bookingAmount: 40000,
    image: '/singapore-tour.jpg',
    featured: true,
    whyPopular: [
      '3 countries in 1 trip - amazing value',
      'FREE Sri Lanka add-on worth ₹20,000',
      'Universal Studios and Sentosa Island included',
      'Perfect for families and couples',
      'X-Mas & New Year special departures',
      'Indian food arrangements available'
    ]
  },
  {
    id: 'kerala-2025',
    title: 'Kerala Kanyakumari Tour Package 2025 - Sun Tourism',
    shortTitle: 'Kerala Kanyakumari',
    destination: 'Kerala & Kanyakumari',
    destinations: ['Cochin', 'Munnar', 'Thekkady', 'Alleppey', 'Trivandrum', 'Kanyakumari'],
    duration: '10 Days - 9 Nights',
    nights: 9,
    days: 10,
    departureDates: ['25 Dec 2025'],
    departureLocation: 'Pune',
    type: 'domestic',
    categories: ['Culture and Heritage', 'Domestic Tour', 'Ghar se Ghar tak Group Tours', 'South India'],
    accommodation: 'Comfortable stays in 3 & 4-star rated hotels.',
    bestSeason: 'December for pleasant post-monsoon weather and ideal sightseeing conditions.',
    transportation: 'AC private vehicle and round-trip flights included.',
    region: 'South India',
    tagline: 'God\'s Own Country - Hills, Backwaters & Coastal Beauty',
    idealFor: ['Families', 'Nature Lovers', 'Senior Citizens', 'Spiritual Seekers'],
    highlights: [
      'Munnar Hill Station',
      'Periyar Wildlife Sanctuary',
      'Alleppey Backwater Cruise',
      'Jatayu Earth\'s Centre',
      'Varkala Beach',
      'Padmanabh Swami Temple',
      'Kovalam Beach',
      'Kanyakumari Sunrise',
      'Vivekananda Rock Memorial',
      'Kathakali Dance Show'
    ],
    overview: 'A 10-day journey from Pune to Kerala and Kanyakumari covering iconic destinations like Munnar, Alleppey, Thekkady, Trivandrum, and the southern tip of India. Experience God\'s Own Country with its misty hills, serene backwaters, wildlife, and spiritual heritage.',
    itinerary: [
      { day: 1, title: 'Residence - Pune Airport', description: 'Today enter the world of Sun Tourism as you begin your wonderful tour of "Kerala - God\'s Own Country". Pick up from your residence and proceed to airport to board the flight to Cochin.', meals: '' },
      { day: 2, title: 'Pune Airport - Cochin', description: 'Arrive Cochin and check in to hotel. Explore Cochin - the Queen of Arabian Sea. Visit Fort Kochi, Chinese Fishing Nets, St. Francis Church, and Jewish Synagogue.', meals: 'Lunch, Dinner' },
      { day: 3, title: 'Cochin - Munnar', description: 'After breakfast proceed to Munnar - a beautiful hill station which was once the summer capital of the British Government in India. Enroute witness the beautiful nature, waterfalls. Overnight stay at Munnar.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Munnar Sightseeing', description: 'Explore Munnar\'s natural beauty. Visit Rajamala Wildlife Sanctuary (Eravikulam National Park), Echo Point for panoramic views, and Mattupetty Dam. Evening visit the local market. Overnight at Munnar.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Munnar - Thekkady (Periyar)', description: 'After breakfast, proceed to Thekkady - India\'s largest wildlife reserve. Visit famous Spice Plantations enroute. Post lunch enjoy Boat Ride at Thekkady Wildlife Reserve (or Jeep Safari if boat unavailable). Evening enjoy Kathakali dance show and Kalaripayattu martial arts show. Overnight at Thekkady.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Thekkady - Vagamon - Alleppey', description: 'After breakfast proceed to Alleppey. Enroute visit the most scenic Glass Bridge at Vagamon for beautiful photos with nature. On arrival in Alleppey enjoy the famous Kerala Backwater ride in Vembanad Lake. Overnight at Alleppey.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Alleppey - Jatayu - Varkala - Trivandrum', description: 'After breakfast check out and proceed towards Trivandrum. Enroute visit world\'s largest Bird Sculpture - Jatayu Earth\'s Centre. Later visit Varkala Beach - the only beach in southern Kerala with cliffs. Arrive Trivandrum. Overnight stay at Trivandrum.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 8, title: 'Trivandrum Sightseeing', description: 'Today after breakfast proceed to Trivandrum sightseeing which includes the ancient Padmanabh Swami Temple (one of the richest temples in the world), Napier Museum, and relaxation at Kovalam Beach. Overnight at Trivandrum.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 9, title: 'Trivandrum - Kanyakumari', description: 'Have breakfast and proceed to Kanyakumari - the southernmost tip of India. On arrival visit the Tri-Samudra Milan (confluence of three seas), Gandhi Mandapam, Swami Vivekananda Rock Memorial, Thiruvalluvar Statue & Kanyakumari Temple. Witness the spectacular sunset. Overnight Stay in Kanyakumari.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 10, title: 'Kanyakumari - Trivandrum - Home', description: 'Early morning optional sunrise viewing. After breakfast check out and proceed towards Trivandrum for your return flight home. Board flight from Trivandrum Airport and return home with wonderful memories. Upon arrival complimentary transfer to your residence.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Residence - Airport - Residence Complimentary Transfer (Ghar Se Ghar Tak for Pune & PCMC guests)',
      'Return Air Fare',
      'All Meals - Breakfast, Lunch, Dinner (set menu)',
      'All Tips - Guide, Driver & Restaurant',
      'Entrance fees of all sightseeing places as per itinerary',
      'Accommodation in 3 & 4-star comfortable hotels',
      'A/C Vehicle as per Group Size',
      '1 Lt. Water Bottle per person per day',
      'Sun Tourism Tour Manager Services',
      'Tour Photos Google Link'
    ],
    exclusions: [
      'Any meals not specified in the itinerary',
      'Any sightseeing not mentioned in the itinerary',
      'Any expenses of personal nature',
      'GST of 5%',
      'Any COVID Test charges (If Any)'
    ],
    notes: [
      'Booking Amount Rs. 25,000/- per person (NON REFUNDABLE)',
      'Balance to be paid 45-30 days before departure',
      '"Ghar Se Ghar Tak" is Complimentary Service'
    ],
    bookingAmount: 25000,
    image: '/kerala-tour.jpg',
    featured: true,
    whyPopular: [
      'Experience God\'s Own Country comprehensively',
      'Perfect mix of hills, backwaters, beaches, and wildlife',
      'Kathakali and martial arts cultural shows',
      'Comfortable weather in December',
      'All-inclusive vegetarian meals',
      'Safe for families and senior citizens'
    ]
  },
  {
    id: 'andaman-2025',
    title: 'Andaman Tour Packages 2025-2026 from Pune | Sun Tourism',
    shortTitle: 'Andaman Islands',
    destination: 'Andaman Islands',
    destinations: ['Port Blair', 'Havelock Island', 'Neil Island', 'Ross Island'],
    duration: '6 Days - 5 Nights',
    nights: 5,
    days: 6,
    departureDates: ['28 Dec 2025', '25 Feb 2026'],
    departureLocation: 'Pune',
    type: 'domestic',
    categories: ['Adventure tour', 'Domestic Tour', 'Ghar se Ghar tak Group Tours', 'Beach'],
    accommodation: 'Comfortable beach resorts with beachfront access.',
    bestSeason: 'October to May for pleasant weather and calm seas, perfect for water activities.',
    transportation: 'Flights, Inter-island cruises (Macruzz/Green/Nautika), private AC vehicles.',
    region: 'Bay of Bengal',
    tagline: 'Tropical Paradise - Crystal Waters, White Sands & Island Adventures',
    idealFor: ['Couples', 'Honeymooners', 'Beach Lovers', 'Adventure Seekers', 'Families'],
    highlights: [
      'Cellular Jail Light & Sound Show',
      'Ross Island Heritage Walk',
      'Radhanagar Beach (Asia\'s Best)',
      'Elephant Beach Snorkeling',
      'Neil Island Coral Bridge',
      'Laxmanpur Sunset',
      'Bharatpur Beach Sunrise',
      'Corbyn\'s Cove Beach',
      'Water Sports Activities',
      'Scuba Diving (Optional)'
    ],
    overview: 'A 6-day group tour covering Andaman\'s best hits - from Port Blair\'s historic Cellular Jail to Havelock\'s crystal blue waters and Neil Island\'s golden hour glow. Experience the pristine beaches, vibrant coral reefs, and rich history of these tropical islands.',
    itinerary: [
      { day: 1, title: 'Residence - Port Blair', description: 'Flight from Pune/Mumbai to Port Blair. On arrival, visit the beautiful Corbyn\'s Cove Beach. Evening attend the emotional Light & Sound Show at Cellular Jail - reliving the freedom struggle history. Overnight at Port Blair.', meals: 'Lunch, Dinner' },
      { day: 2, title: 'Port Blair - Havelock Island', description: 'Morning ferry to Havelock Island - jewel of Andaman. Visit Elephant Beach for optional water sports and snorkeling among vibrant corals. Evening witness spectacular sunset at Radhanagar Beach - rated Asia\'s best beach. Overnight at Havelock.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Havelock - Neil Island', description: 'Morning ferry to the tranquil Neil Island - the "Vegetable Bowl of Andaman". Visit the Natural Coral Bridge (Howrah Bridge). Experience the breathtaking sunset at Laxmanpur Beach. Overnight at Neil Island beach resort.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Neil Island - Port Blair', description: 'Early morning sunrise at Bharatpur Beach. After breakfast, ferry back to Port Blair. Visit historic Ross Island - former British administrative headquarters, now reclaimed by nature. Explore the ruins and deer park. Overnight at Port Blair.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Port Blair City Tour', description: 'Full day Port Blair exploration. Visit Chatham Saw Mill (Asia\'s oldest operating saw mill), Anthropological Museum (tribal heritage), Naval Marine Museum (marine life exhibits). Evening free for shopping at Aberdeen Bazaar. Overnight at Port Blair.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Return Home', description: 'After breakfast, transfer to Port Blair Airport for flight to Mumbai/Pune. Complimentary transfer to Residence. Tour Ends with beautiful island memories.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Residence - Airport - Residence Transfer',
      'Return Airfare (Mumbai-Port Blair-Mumbai)',
      'All Meals from Day 1 Lunch to Day 6 Breakfast',
      'Deluxe & Star-Rated Hotels',
      'Beach Resort at Neil Island',
      'Inter-Island Ferry Tickets (Macruzz/Green/Nautika)',
      'Private AC Vehicle for all transfers',
      'Sun Tourism Tour Manager',
      'All Entry Tickets as per itinerary'
    ],
    exclusions: [
      'GST @ 5%',
      'Water Sports (Optional) - Snorkeling, Jet Ski, Banana Ride',
      'Scuba Diving',
      'Sea Walking',
      'Personal expenses'
    ],
    notes: [
      'Rs. 10,000/- discount for first 10 seats',
      'Booking Amount Rs. 20,000/- per person',
      'Balance to be paid 30 days before departure',
      'Ferry timings subject to weather and availability'
    ],
    bookingAmount: 20000,
    image: andamanIMg,
    featured: true,
    whyPopular: [
      'Pristine untouched beaches',
      'Best snorkeling and water sports in India',
      'Historical significance - Cellular Jail visit',
      'Comfortable weather in winter months',
      'All-inclusive with comfortable accommodations',
      'Perfect for couples and families'
    ]
  },
  {
    id: 'nepal-2026',
    title: 'Nepal Tour Package 2026 - Kathmandu, Chitwan & Pokhara | 8 Days',
    shortTitle: 'Nepal Himalayan',
    destination: 'Nepal',
    destinations: ['Kathmandu', 'Chitwan', 'Pokhara', 'Manakamana'],
    duration: '8 Days - 7 Nights',
    nights: 7,
    days: 8,
    departureDates: ['15 Mar 2026', '10 Oct 2026'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Ghar se Ghar tak Group Tours', 'International Tours', 'Spiritual'],
    accommodation: 'Stay in comfortable 3-star and 4-star hotels across Nepal.',
    bestSeason: 'March-May and October-November for clear Himalayan views and pleasant weather.',
    transportation: 'Economy flights, domestic flight Pokhara-Kathmandu, AC vehicle for all transfers.',
    region: 'South Asia',
    tagline: 'Land of the Himalayas - Temples, Tigers & Tranquility',
    idealFor: ['Spiritual Seekers', 'Nature Lovers', 'Adventure Enthusiasts', 'Families', 'Senior Citizens'],
    highlights: [
      'Pashupatinath Temple',
      'Boudhanath Stupa',
      'Swayambhunath (Monkey Temple)',
      'Chitwan Wildlife Safari',
      'Phewa Lake Boating',
      'Sarangkot Sunrise',
      'Manakamana Temple Cable Car',
      'Kathmandu Durbar Square',
      'Mountain Views of Annapurna'
    ],
    overview: 'Experience the spiritual and natural beauty of Nepal with Sun Tourism\'s 8-day journey covering Kathmandu\'s ancient temples, Chitwan\'s wildlife, and Pokhara\'s stunning lake views. From jungle safaris to Himalayan sunrises, this tour offers the complete Nepal experience.',
    itinerary: [
      { day: 1, title: 'Residence - Kathmandu', description: 'Pick up from Residence and transfer to Mumbai Airport. Flight to Kathmandu. On arrival, transfer to hotel. Evening orientation walk. Overnight in Kathmandu.', meals: 'Dinner' },
      { day: 2, title: 'Kathmandu Sightseeing', description: 'Full day Kathmandu Valley tour. Visit Pashupatinath Temple (one of the holiest Hindu shrines), Boudhanath Stupa (largest Buddhist stupa in Nepal), and Swayambhunath Temple (Monkey Temple). Evening visit Thamel for shopping. Overnight in Kathmandu.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Kathmandu - Chitwan', description: 'After breakfast, scenic drive to Chitwan National Park (UNESCO World Heritage Site). Afternoon Tharu village walk and cultural dance show in evening. Overnight at jungle resort.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Chitwan Wildlife Safari', description: 'Early morning bird watching. After breakfast, jungle activities including Elephant Safari/Jeep Safari through the jungle to spot one-horned rhinos, deer, and if lucky, the Royal Bengal Tiger. Canoe ride on Rapti River. Overnight at Chitwan.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Chitwan - Pokhara', description: 'After breakfast, scenic drive to Pokhara - the lake city. Afternoon visit Phewa Lake for boating with views of Machapuchare (Fishtail Mountain). Visit Tal Barahi Temple on the island. Evening free at Lakeside. Overnight in Pokhara.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Pokhara Sightseeing', description: 'Early morning drive to Sarangkot for spectacular sunrise over Annapurna range. After breakfast, visit Davis Falls, Gupteshwor Cave, and Peace Pagoda. Afternoon free for shopping or paragliding (optional). Overnight in Pokhara.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Pokhara - Manakamana - Kathmandu', description: 'Morning flight from Pokhara to Kathmandu. Enroute visit Manakamana Temple by cable car (one of Nepal\'s most sacred temples). Continue to Kathmandu. Evening farewell dinner. Overnight in Kathmandu.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 8, title: 'Kathmandu - Home', description: 'After breakfast, transfer to Kathmandu Airport for return flight. Arrive Mumbai and complimentary transfer to Residence. Tour Ends with Himalayan memories.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Residence - Airport - Residence Transfer (Ghar Se Ghar Tak)',
      'Return Economy Class Airfare',
      'Domestic Flight Pokhara-Kathmandu',
      'All Meals as per Itinerary',
      '3-4 Star Hotel Accommodation',
      'All Sightseeing Entry Tickets',
      'Wildlife Safari in Chitwan',
      'Nepal Tourist Visa Assistance',
      'Travel Insurance',
      'Sun Tourism Tour Manager'
    ],
    exclusions: [
      'GST @ 5% & TCS @ 5%',
      'Nepal Visa Fee (approx $30)',
      'Personal expenses and tips',
      'Optional activities like Paragliding'
    ],
    notes: [
      'Booking Amount Rs. 30,000/- per person (Non-refundable)',
      'Balance to be paid 45 days before departure'
    ],
    bookingAmount: 30000,
    image: '/nepal-tour.jpg',
    featured: false,
    whyPopular: [
      'Close to India - short flight, no jet lag',
      'Spiritual significance - Pashupatinath & Manakamana',
      'Stunning Himalayan views',
      'Wildlife safari experience',
      'Indian-friendly food and culture',
      'Affordable international destination'
    ]
  },
  {
    id: 'bali-2026',
    title: 'Bali Tour Package 2026 - Island Paradise | 6 Days',
    shortTitle: 'Bali Paradise',
    destination: 'Bali, Indonesia',
    destinations: ['Ubud', 'Seminyak', 'Nusa Dua', 'Tanah Lot', 'Kintamani'],
    duration: '6 Days - 5 Nights',
    nights: 5,
    days: 6,
    departureDates: ['Apr 2026', 'Sep 2026'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'International Tours', 'Honeymoon special', 'Beach'],
    accommodation: 'Stay in premium 4-star resorts with pool access.',
    bestSeason: 'April-October for dry season with minimal rainfall and perfect beach weather.',
    transportation: 'Private AC vehicle for all transfers and sightseeing.',
    region: 'Southeast Asia',
    tagline: 'Island of Gods - Temples, Rice Terraces & Tropical Bliss',
    idealFor: ['Couples', 'Honeymooners', 'Beach Lovers', 'Photography Enthusiasts', 'Adventure Seekers'],
    highlights: [
      'Tegallalang Rice Terraces',
      'Tanah Lot Sunset Temple',
      'Ubud Monkey Forest',
      'Kintamani Volcano View',
      'Seminyak Beach',
      'Nusa Dua Water Sports',
      'Uluwatu Temple',
      'Kecak Fire Dance',
      'Balinese Spa Experience',
      'Traditional Art Villages'
    ],
    overview: 'Discover the magic of Bali with Sun Tourism\'s 6-day island adventure. From ancient temples and lush rice terraces to pristine beaches and vibrant culture, experience the best of the Island of Gods with personalized service.',
    itinerary: [
      { day: 1, title: 'Arrival in Bali', description: 'Arrive at Ngurah Rai International Airport, Bali. Meet and greet by our representative. Transfer to your resort in Seminyak/Kuta area. Evening free to explore the vibrant beach area. Overnight in Bali.', meals: 'Dinner' },
      { day: 2, title: 'Ubud Cultural Tour', description: 'After breakfast, full day Ubud tour. Visit the famous Tegallalang Rice Terraces for stunning photo opportunities. Explore Ubud Monkey Forest, Ubud Palace, and traditional art villages. Experience authentic Balinese cuisine. Return to hotel. Overnight in Bali.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Kintamani Volcano & Temples', description: 'Morning visit to Tirta Empul Holy Water Temple for purification experience. Proceed to Kintamani for panoramic views of Mount Batur and Lake Batur. Lunch with volcano view. Evening visit Tanah Lot Temple for spectacular sunset. Overnight in Bali.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Nusa Dua Beach Day', description: 'Transfer to Nusa Dua beach area. Full day for water sports activities (optional) - parasailing, jet ski, banana boat, snorkeling. Alternatively, relax at the pristine beach. Evening Balinese spa experience included. Overnight in Bali.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Uluwatu & Kecak Dance', description: 'Morning free for shopping or pool time. Afternoon visit Uluwatu Temple perched on dramatic cliffs. Evening enjoy the famous Kecak Fire Dance performance with sunset backdrop. Farewell dinner at a beachside restaurant. Overnight in Bali.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Departure', description: 'After breakfast, free time until transfer to Bali Airport for your return flight. Arrive home with beautiful island memories.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Return Economy Class Airfare',
      '5 Nights in 4-Star Resort',
      'Daily Breakfast, Lunch & Dinner',
      'All Sightseeing as per Itinerary',
      'Private AC Vehicle',
      'English Speaking Guide',
      'One Balinese Spa Session',
      'All Entry Tickets',
      'Travel Insurance'
    ],
    exclusions: [
      'GST @ 5% & TCS @ 5%',
      'Indonesia Visa (Free on Arrival for Indians)',
      'Water Sports Activities',
      'Personal expenses',
      'Optional activities'
    ],
    notes: [
      'Customizable itinerary available',
      'Contact for group tour dates and pricing',
      'Honeymoon special arrangements on request'
    ],
    bookingAmount: 35000,
    image: '/bali-tour.jpg',
    featured: false,
    whyPopular: [
      'Perfect honeymoon destination',
      'Blend of culture, beaches, and adventure',
      'Visa-free for Indian passport holders',
      'Affordable luxury experience',
      'Instagram-worthy locations everywhere',
      'Vegetarian food easily available'
    ]
  },
  {
    id: 'baku-2026',
    title: 'Azerbaijan Baku Tour Package 2026 - Land of Fire | 7 Days',
    shortTitle: 'Azerbaijan Baku',
    destination: 'Azerbaijan Baku',
    destinations: ['Baku', 'Gabala', 'Shahdag', 'Shamakhi'],
    duration: '7 Days - 6 Nights',
    nights: 6,
    days: 7,
    departureDates: ['May 2026', 'Sep 2026'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Ghar se Ghar tak Group Tours', 'International Tours'],
    accommodation: 'Stay in 4-star hotels in Baku and mountain resorts in Gabala.',
    bestSeason: 'April-June and September-October for pleasant weather.',
    transportation: 'Private AC vehicle and domestic transfers included.',
    region: 'Caucasus',
    tagline: 'Land of Fire - Ancient Meets Ultra-Modern',
    idealFor: ['Couples', 'Families', 'Photography Enthusiasts', 'First-time Europe-adjacent'],
    highlights: [
      'Flame Towers',
      'Old City (Icherisheher)',
      'Heydar Aliyev Center',
      'Mud Volcanoes',
      'Gabala Cable Car',
      'Nohur Lake',
      'Gobustan Petroglyphs',
      'Highland Park',
      'Ateshgah Fire Temple',
      'Yanar Dag (Burning Mountain)'
    ],
    overview: 'Discover Azerbaijan - the Land of Fire - with Sun Tourism\'s 7-day journey. From Baku\'s stunning modern architecture to ancient fire temples, mud volcanoes, and the mountain resort of Gabala, experience this hidden gem of the Caucasus.',
    itinerary: [
      { day: 1, title: 'Residence - Baku', description: 'Pick up from Residence and transfer to Mumbai Airport. Flight to Baku. On arrival, transfer to hotel. Evening free to explore the Baku Boulevard along the Caspian Sea. Overnight in Baku.', meals: 'Dinner' },
      { day: 2, title: 'Baku City Tour', description: 'Full day Baku city tour. Visit the UNESCO World Heritage Old City (Icherisheher), Maiden Tower, Palace of the Shirvanshahs. See the iconic Flame Towers and Heydar Aliyev Center (photo stop). Evening visit Highland Park for panoramic city views. Overnight in Baku.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Baku Outskirts Tour', description: 'Morning visit Ateshgah Fire Temple (ancient Zoroastrian temple), Yanar Dag (naturally burning hillside), and Bibi-Heybat Mosque. Afternoon visit Gobustan National Park for ancient rock petroglyphs (UNESCO site) and mud volcanoes. Overnight in Baku.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Baku - Shamakhi - Gabala', description: 'After breakfast, scenic drive to Gabala via Shamakhi. Visit Shamakhi Juma Mosque (one of the oldest mosques in the Caucasus) and Seven Beauties Waterfall. Arrive Gabala - the mountain resort town. Overnight in Gabala.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Gabala Exploration', description: 'Full day in Gabala. Ride the Gabala Cable Car for stunning mountain views. Visit Nohur Lake and enjoy the pine forests. Optional activities: shooting range, horse riding, zip-lining. Evening relaxation at resort. Overnight in Gabala.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Gabala - Baku', description: 'After breakfast, return to Baku. Afternoon free for shopping at Nizami Street and local markets. Evening farewell dinner at a traditional Azerbaijani restaurant with live music. Overnight in Baku.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Departure', description: 'After breakfast, transfer to Baku Airport for return flight. Arrive Mumbai and complimentary transfer to Residence. Tour Ends.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Residence - Airport - Residence Transfer',
      'Return Economy Class Airfare',
      '6 Nights in 4-Star Hotels/Resorts',
      'All Meals as per Itinerary',
      'All Sightseeing and Entry Tickets',
      'Private AC Vehicle',
      'Azerbaijan E-Visa Assistance',
      'Travel Insurance',
      'Sun Tourism Tour Manager'
    ],
    exclusions: [
      'GST @ 5% & TCS @ 5%',
      'Azerbaijan Visa Fee (E-Visa ~$26)',
      'Optional activities in Gabala',
      'Personal expenses'
    ],
    notes: [
      'Booking Amount Rs. 40,000/- per person',
      'Contact for confirmed departure dates'
    ],
    bookingAmount: 40000,
    image: '/baku-tour.jpg',
    featured: false,
    whyPopular: [
      'Unique destination - less crowded than Europe',
      'E-visa makes it easy for Indians',
      'Blend of ancient and ultra-modern',
      'Natural wonders - fire temples, mud volcanoes',
      'Safe and tourist-friendly',
      'Great value for money'
    ]
  },
  {
    id: 'australia-2026',
    title: 'Australia Tour Package 2026 - Sydney to Melbourne | 12 Days',
    shortTitle: 'Australia Adventure',
    destination: 'Australia',
    destinations: ['Sydney', 'Cairns', 'Gold Coast', 'Melbourne'],
    duration: '12 Days - 11 Nights',
    nights: 11,
    days: 12,
    departureDates: ['24 Oct 2026'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Ghar se Ghar tak Group Tours', 'International Tours'],
    accommodation: 'Stay in 3-4 star hotels across Sydney, Cairns, Gold Coast, and Melbourne.',
    bestSeason: 'September-November (Australian Spring) for pleasant weather across all regions.',
    transportation: 'Domestic flights, luxury coach, Great Barrier Reef cruise included.',
    region: 'Oceania',
    tagline: 'Down Under Dreams - Reefs, Wildlife & Iconic Landmarks',
    idealFor: ['Families', 'Adventure Seekers', 'Nature Lovers', 'First-time Australia'],
    highlights: [
      'Sydney Opera House',
      'Sydney Harbour Bridge',
      'Bondi Beach',
      'Great Barrier Reef',
      'Kuranda Rainforest',
      'Gold Coast Theme Parks',
      'Great Ocean Road',
      'Phillip Island Penguin Parade',
      'Melbourne City Tour',
      'Aboriginal Cultural Experience'
    ],
    overview: 'Experience the ultimate Australian adventure with Sun Tourism\'s 12-day comprehensive tour. From Sydney\'s iconic Opera House to the wonders of the Great Barrier Reef, theme park thrills on the Gold Coast, and Melbourne\'s cultural charm - this is Australia at its best.',
    itinerary: [
      { day: 1, title: 'Residence - Australia', description: 'Pick up from Residence and transfer to Mumbai Airport for your flight to Sydney. Overnight in flight.', meals: '' },
      { day: 2, title: 'Arrive Sydney', description: 'Arrive Sydney - Australia\'s vibrant harbor city. Transfer to hotel. Afternoon city orientation tour to get a feel of this beautiful city. Evening free to explore. Overnight in Sydney.', meals: 'Dinner' },
      { day: 3, title: 'Sydney City Tour', description: 'Full day Sydney tour. Visit the iconic Bondi Beach, The Rocks historic area, Harbour Bridge views, Darling Harbour, and Chinatown. Guided tour inside the Sydney Opera House. Visit Sydney Tower for 360-degree city views. Evening Sydney Harbour Dinner Cruise. Overnight in Sydney.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Sydney - Cairns', description: 'Morning flight to Cairns. Visit Kuranda Rainforest via Skyrail Cableway (7.5 km over tropical rainforest). Experience the WWII Army Duck rainforest tour. Visit Pamagirri Aboriginal Cultural Park for traditional dance and boomerang throwing. Overnight in Cairns.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Great Barrier Reef', description: 'Full day Great Barrier Reef tour. Cruise to the Marine National Park - the world\'s largest coral reef system visible from space. Enjoy snorkeling, glass-bottom boat viewing, and underwater observatory. Semi-submersible coral viewing included. Overnight in Cairns.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Cairns - Gold Coast', description: 'Flight to Gold Coast - Australia\'s theme park capital. Afternoon at leisure to explore Surfers Paradise beach and shopping areas. Overnight at Gold Coast.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Warner Bros Movie World', description: 'Full day at Warner Bros Movie World. Enjoy thrilling rides, meet your favorite characters, and watch spectacular shows. Experience Hollywood on the Gold Coast. Overnight at Gold Coast.', meals: 'Breakfast, Dinner' },
      { day: 8, title: 'Gold Coast Free Day', description: 'Free day for optional activities - Sea World, Dreamworld, or Wet\'n\'Wild Water World. Alternatively, relax at the beautiful beaches. Evening transfer to Brisbane Airport for flight to Melbourne. Overnight in Melbourne.', meals: 'Breakfast' },
      { day: 9, title: 'Melbourne City Tour', description: 'Full day Melbourne city tour. Visit Federation Square, Flinders Street Station, St. Paul\'s Cathedral, Eureka Skydeck for panoramic views. Explore the famous Melbourne laneways and street art. Evening free at Southbank. Overnight in Melbourne.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 10, title: 'Great Ocean Road', description: 'Full day Great Ocean Road tour - one of the world\'s most scenic coastal drives. Visit the famous Twelve Apostles rock formations, Loch Ard Gorge, and London Bridge. Experience the stunning coastal scenery. Overnight in Melbourne.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 11, title: 'Phillip Island Penguin Parade', description: 'Morning free in Melbourne. Afternoon excursion to Phillip Island. Visit the Koala Conservation Centre. Evening witness the famous Penguin Parade - watch hundreds of little penguins waddle ashore. A once-in-a-lifetime experience. Overnight in Melbourne.', meals: 'Breakfast, Dinner' },
      { day: 12, title: 'Melbourne - Home', description: 'After breakfast, transfer to Melbourne Airport for your return flight to India. Arrive Mumbai and complimentary transfer to Residence. Tour Ends with incredible Australian memories.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Residence - Airport - Residence Transfer (Ghar Se Ghar Tak)',
      'Return Economy Class International Airfare',
      'All Domestic Flights within Australia',
      '11 Nights in 3-4 Star Hotels',
      'Meals as per Itinerary',
      'Great Barrier Reef Cruise with Snorkeling',
      'Kuranda Rainforest Experience',
      'Warner Bros Movie World Entry',
      'Phillip Island Penguin Parade',
      'Great Ocean Road Tour',
      'Sydney Harbour Dinner Cruise',
      'Sydney Opera House Guided Tour',
      'All Transfers by Luxury Coach',
      'Australian Tourist Visa Assistance',
      'Travel Insurance',
      'Sun Tourism Tour Manager'
    ],
    exclusions: [
      'GST @ 5% & TCS @ 5%',
      'Australian Visa Fee',
      'Optional Theme Parks (Sea World, Dreamworld)',
      'Personal expenses and tips',
      'Water sports and activities not mentioned'
    ],
    notes: [
      'Booking Amount Rs. 1,00,000/- per person (Non-refundable)',
      'Balance to be paid 60 days before departure',
      'Early bird discounts available'
    ],
    bookingAmount: 100000,
    image: '/australia-tour.jpg',
    featured: false,
    whyPopular: [
      'Comprehensive Australia experience',
      'Great Barrier Reef - bucket list destination',
      'Unique wildlife - penguins, koalas, kangaroos',
      'Indian-friendly food arrangements',
      'Mix of nature, adventure, and city experiences',
      'Safe and family-friendly destination'
    ]
  },

  // South Africa Tour
  {
    id: 'south-africa-2026',
    title: 'Sunny South Africa Tour 2026 - 10N/11D Ghar Se Ghar Tak | Cape Town, Sun City & Pilanesberg Safari',
    shortTitle: 'Sunny South Africa',
    destination: 'Sunny South Africa',
    destinations: ['Cape Town', 'Hermanus', 'Knysna', 'Mossel Bay', 'Sun City', 'Pilanesberg', 'Johannesburg'],
    duration: '10 Nights / 11 Days',
    nights: 10,
    days: 11,
    departureDates: ['11 July 2026'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Chota break', 'Corporate Travel', 'Culture and Heritage', 'Ghar se Ghar tak Group Tours', 'Honeymoon special', 'International Tours', 'Long Weekend'],
    accommodation: 'Comfortable stays in 3★ deluxe and 4★ hotels throughout the tour.',
    bestSeason: 'July offers pleasant weather, perfect for safaris and sightseeing.',
    transportation: 'Travel in a spacious, air-conditioned luxury coach for all transfers and excursions.',
    region: 'Africa',
    tagline: 'Experience adventure and luxury with Sun Tourism\'s Sunny South Africa Tour',
    idealFor: ['Families', 'Couples', 'Adventure Seekers', 'Nature Lovers', 'Wildlife Enthusiasts'],
    highlights: [
      'Table Mountain Cable Car Ride',
      'Cape Peninsula Tour including Cape Point',
      'Whale Watching in Hermanus',
      'Garden Route Scenic Drive',
      'Congo Caves Tour',
      'Ostrich Farm Visit',
      'Pilanesberg Big Five Safari',
      'Sun City Resort & Valley of Waves',
      'Johannesburg City Tour'
    ],
    overview: 'Step into Sun Tourism\'s Sunny South Africa Tour 2026 - an 11-day July journey that captures the essence of nature, wildlife, and modern marvels. From the breathtaking Table Mountain in Cape Town to the exciting Pilanesberg Safari, and from Hermanus whale watching to the luxury of Sun City, this tour blends adventure, comfort, and scenic beauty in one unforgettable experience.',
    itinerary: [
      { day: 1, title: 'Pune/Mumbai - Cape Town', description: 'Pickup from residence and transfer to Mumbai for flight to Cape Town. Overnight in flight.' },
      { day: 2, title: 'Cape Town', description: 'Arrival in Cape Town. Guided city tour including Table Mountain cable car, V&A Waterfront, and more. Overnight in Cape Town.' },
      { day: 3, title: 'Cape Town - Peninsula Tour', description: 'Full day Cape Peninsula tour including Chapman\'s Peak Drive, Cape Point, and Boulders Beach. Overnight in Cape Town.' },
      { day: 4, title: 'Cape Town - Hermanus', description: 'Transfer to Hermanus with wine tasting en route. Whale watching tour. Overnight in Hermanus.' },
      { day: 5, title: 'Hermanus - Knysna - Mossel Bay', description: 'Transfer to Mossel Bay via Garden Route. Visit Knysna Waterfront. Overnight in Mossel Bay.' },
      { day: 6, title: 'Mossel Bay - Oudtshoorn - Mossel Bay', description: 'Congo Caves tour and Ostrich Farm visit. Overnight in Mossel Bay.' },
      { day: 7, title: 'Mossel Bay - George - Johannesburg - Sun City', description: 'Flight to Johannesburg and transfer to Sun City. Evening at leisure. Overnight in Sun City.' },
      { day: 8, title: 'Sun City - Pilanesberg - Sun City', description: 'Game drive in Pilanesberg National Park. Valley of Waves. Overnight in Sun City.' },
      { day: 9, title: 'Sun City - Johannesburg', description: 'Optional hot air balloon. Transfer to Johannesburg for city tour. Overnight in Johannesburg.' },
      { day: 10, title: 'Johannesburg - Mumbai - Pune', description: 'Flight back to Mumbai and transfer to Pune/residence.' },
      { day: 11, title: 'Arrival', description: 'Arrive home. Tour ends.' }
    ],
    inclusions: [
      'Residence - Airport - Residence COMPLIMENTARY Transfer (Ghar Se Ghar Tak)',
      'Return Economy Class Airfare',
      'Breakfast, Lunch, Dinner, Sightseeing Entry Charges, Tips, Guide Fee',
      'All transfers and sightseeing by 2x2 A/C Luxury Coach',
      'Tourist Visa Charges',
      'Services of Sun Tourism International Pvt. Ltd. Tour Manager',
      'A Complimentary Travel Kit',
      'Overseas Travel insurance (Up to 60 Years of age)',
      'Your Tour Photo in Google drive',
      '1 Drinking Water bottle Per Person Per Day'
    ],
    exclusions: [
      'GST @ 05 % & TCS @ 05%',
      'Any increase in Visa fees, Airport taxes, Govt Taxes, Fuel Surcharges',
      'Any Increase in the rate of exchange',
      'Any extra expense due to unforeseen circumstances',
      'Porterage, laundry, telephone charges, shopping, wines and alcoholic beverages',
      'Any extra cost incurred on behalf of an individual due to illness, accident, hospitalization',
      'Any services or activity charges other than those included'
    ],
    notes: [
      'Booking Amount Rs. 50,000/- per person (Non - Refundable)',
      'Tour cost calculated as 1 ZAR @ 5 INR and 1 USD @ 90 INR',
      'Complete Final payment in INR as per prevailing Market Card Rate',
      'Balance payment 45 - 30 days before departure',
      'If balance not paid D - 30 days, booking cancelled and amount forfeited',
      'Visa rejection: Visa Fee and Hotel/Airline charges chargeable'
    ],
    bookingAmount: 50000,
    image: southAfricaImg,
    featured: false,
    tripOfMonth: false,
    whyPopular: [
      'Comprehensive coverage of South Africa\'s highlights',
      'Ghar Se Ghar Tak service',
      'Big Five safari experience',
      'Mix of adventure, nature, and luxury',
      'Certified South Africa Tourism guide'
    ]
  }
];

// upcoming departures images for the homepage calendar
export const upcomingDepartures: Departure[] = [
  // March 2026
  {
    id: 'dep-dubai-mar-24',
    tourId: 'dubai-2026',
    destination: 'Dubai with Abu Dhabi & Sharjah',
    duration: '7 Days',
    departureDate: '24 March 2026',
    departureLocation: 'Ex Pune',
    tags: ['City Escape', 'Ghar Se Ghar Tak'],
    image: dubaiImg,
    month: 'Mar 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/dubai-tour-packages-2025-26-flights-visa-ghar-se-ghar-tak/'
  },
  {
    id: 'dep-japan-mar-24',
    tourId: 'japan-2026',
    destination: 'Japan Cherry Blossom',
    duration: '8 Days',
    departureDate: '24 March 2026',
    departureLocation: 'Ex Pune',
    tags: ['Sakura Season', 'Bucket List'],
    image: japanImg,
    month: 'Mar 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/japan-cherry-blossom-tour-2026/'
  },
  {
    id: 'dep-akva-mar-25',
    tourId: 'kashmir-vaishnodevi-amritsar-2026',
    destination: 'Kashmir, Vaishno Devi & Amritsar',
    duration: '9 Days',
    departureDate: '25 March 2026',
    departureLocation: 'Ex Pune',
    tags: ['Scenic Journey', 'Spiritual Circuit'],
    image: amritsarImg,
    month: 'Mar 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/kashmir-vaishno-devi-amritsar-tour-package-summer-2026/'
  },

  // April 2026
  {
    id: 'dep-kashmir-apr-01',
    tourId: 'kashmir-2026',
    destination: 'Kashmir',
    duration: '6 Days',
    departureDate: '01 April 2026',
    departureLocation: 'Ex Pune',
    tags: ['Mountain Escape', 'Spring Valley'],
    image: kashmirImg,
    month: 'Apr 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/kashmir-tour-packages/'
  },
  {
    id: 'dep-akva-apr-02',
    tourId: 'kashmir-vaishnodevi-amritsar-2026',
    destination: 'Kashmir, Vaishno Devi & Amritsar',
    duration: '9 Days',
    departureDate: '02 April 2026',
    departureLocation: 'Ex Pune',
    tags: ['Scenic Journey', 'Pilgrimage Trail'],
    image: amritsarImg,
    month: 'Apr 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/kashmir-vaishno-devi-amritsar-tour-package-summer-2026/'
  },
  {
    id: 'dep-kashmir-apr-06',
    tourId: 'kashmir-2026',
    destination: 'Kashmir',
    duration: '6 Days',
    departureDate: '06 April 2026',
    departureLocation: 'Ex Pune',
    tags: ['Tulip Season', 'Himalayan Views'],
    image: kashmirImg,
    month: 'Apr 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/kashmir-tour-packages/'
  },
  {
    id: 'dep-dubai-apr',
    tourId: 'dubai-2026',
    destination: 'Dubai with Abu Dhabi & Sharjah',
    duration: '7 Days',
    departureDate: '15 April 2026',
    departureLocation: 'Ex Pune',
    tags: ['City Break', 'Mid-April Batch'],
    image: dubaiImg,
    month: 'Apr 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/dubai-tour-packages-2025-26-flights-visa-ghar-se-ghar-tak/'
  },
  {
    id: 'dep-assam-apr',
    tourId: 'assam-meghalaya-2026',
    destination: 'Assam & Meghalaya',
    duration: '7 Days',
    departureDate: '15 April 2026',
    departureLocation: 'Ex Pune',
    tags: ['Northeast Escape', 'Mid-April Batch'],
    image: assamTeaEstateImg,
    month: 'Apr 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/assam-meghalaya-group-tour-from-pune/'
  },
  {
    id: 'dep-shimla-apr-20',
    tourId: 'shimla-manali-2026',
    destination: 'Shimla & Manali',
    duration: '7 Days',
    departureDate: '20 April 2026',
    departureLocation: 'Ex Pune',
    tags: ['Hill Holiday', 'Snowy Landscapes'],
    image: kashmirImg,
    month: 'Apr 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/shimla-manali-tour-2026/'
  },
  {
    id: 'dep-shimla-apr-26',
    tourId: 'shimla-manali-2026',
    destination: 'Shimla & Manali',
    duration: '7 Days',
    departureDate: '26 April 2026',
    departureLocation: 'Ex Pune',
    tags: ['Hill Escape', 'Late April Batch'],
    image: kashmirImg,
    month: 'Apr 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/shimla-manali-tour-2026/'
  },
  // May 2026
  {
    id: 'dep-grand-europe-may-03',
    tourId: 'grand-europe-2026',
    destination: 'Grand Europe',
    duration: '16 Days',
    departureDate: '03 May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Tulip Season', 'Signature Tour'],
    image: europeImg,
    month: 'May 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/europe-tour-packages/'
  },
  {
    id: 'dep-malaysia-may',
    tourId: 'malaysia-singapore-2026',
    destination: 'Malaysia, Singapore & Sri Lanka',
    duration: '9 Days',
    departureDate: 'May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Sri Lanka Free', 'Family Favorite'],
    image: hongKongImg,
    month: 'May 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/malaysia-singapore-group-tour-from-pune/'
  },
  {
    id: 'dep-sikkim-may',
    tourId: 'sikkim-darjeeling-2026',
    destination: 'Sikkim & Darjeeling',
    duration: '8 Days',
    departureDate: 'May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Tea Trails', 'May Departures'],
    image: nepalTourImg,
    month: 'May 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/sikkim-darjeeling-tour-from-pune-group-tour-with-ghar-se-ghar-tak/'
  },
  {
    id: 'dep-bhutan-may',
    tourId: 'bhutan-2026',
    destination: 'Bhutan',
    duration: '8 Days',
    departureDate: 'May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Peaceful Kingdom', 'May Departures'],
    image: bhutanTourImg,
    month: 'May 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/bhutan-group-tour-from-pune-ghar-se-ghar-tak-holiday-package/'
  },
  {
    id: 'dep-nainital-may',
    tourId: 'nainital-jim-corbett-2026',
    destination: 'Nainital, Mussoorie & Jim Corbett',
    duration: '7 Days',
    departureDate: 'May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Lake District', 'Wildlife Stay'],
    image: tadobaSafariImg,
    month: 'May 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/nainital-jim-corbett-tour-from-pune/'
  },
  {
    id: 'dep-hong-kong-may',
    tourId: 'hong-kong-macau-shenzhen-2026',
    destination: 'Hong Kong, Macau & Shenzhen',
    duration: '8 Days',
    departureDate: 'May 2026',
    departureLocation: 'Ex Pune',
    tags: ['City Lights', 'May Departures'],
    image: hongKongImg,
    month: 'May 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/hong-kong-macau-shenzhen-tour-package-from-india/'
  },
  {
    id: 'dep-dubai-may',
    tourId: 'dubai-2026',
    destination: 'Dubai with Abu Dhabi & Sharjah',
    duration: '7 Days',
    departureDate: 'May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Shopping Season', 'May Departures'],
    image: dubaiImg,
    month: 'May 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/dubai-tour-packages-2025-26-flights-visa-ghar-se-ghar-tak/'
  },
  {
    id: 'dep-nepal-may',
    tourId: 'nepal-2026',
    destination: 'Nepal',
    duration: '8 Days',
    departureDate: 'May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Himalayan Views', 'May Departure'],
    image: nepalTourImg,
    month: 'May 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/nepal-tour-from-pune-8-days-ghar-se-ghar-tak-group-tour-2026/'
  },
  {
    id: 'dep-tadoba-may-09',
    tourId: 'tadoba-2026',
    destination: 'Tadoba Jungle Safari',
    duration: '3 Days',
    departureDate: '09 May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Wildlife Escape', 'Short Break'],
    image: nainitalJimCorbettImg,
    month: 'May 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/tadoba-jungle-safari-tour-pune/'
  },
  {
    id: 'dep-tadoba-may-11',
    tourId: 'tadoba-2026',
    destination: 'Tadoba Jungle Safari',
    duration: '3 Days',
    departureDate: '11 May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Wildlife Escape', 'Weekend Batch'],
    image: nainitalJimCorbettImg,
    month: 'May 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/tadoba-jungle-safari-tour-pune/'
  },
  {
    id: 'dep-bangkok-may',
    tourId: 'bangkok-pattaya-2026',
    destination: 'Bangkok & Pattaya',
    duration: '7 Days',
    departureDate: 'May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Urban Fun', 'May Departures'],
    image: hongKongImg,
    month: 'May 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/bangkok-pattaya-group-tour-from-pune/'
  },
  {
    id: 'dep-europe-may-09',
    tourId: 'europe-2026',
    destination: '9 Countries Europe',
    duration: '14 Days',
    departureDate: '09 May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Classic Europe', 'Multi-Country'],
    image: restOfEuropeImg,
    month: 'May 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/europe-tour-package-from-pune/'
  },
  {
    id: 'dep-european-glimps-may-10',
    tourId: 'european-glimps-2026',
    destination: 'European Glimps',
    duration: '9 Days',
    departureDate: '10 May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Paris to Alps', 'Curated Escape'],
    image: europeanGlimpsImg,
    month: 'May 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/european-glimps-tour-2026-paris-switzerland-germany-tour/'
  },
  {
    id: 'dep-shimla-may-11',
    tourId: 'shimla-manali-2026',
    destination: 'Shimla & Manali',
    duration: '7 Days',
    departureDate: '11 May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Summer Hills', 'Family Escape'],
    image: kashmirImg,
    month: 'May 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/shimla-manali-tour-2026/'
  },
  {
    id: 'dep-shimla-may-17',
    tourId: 'shimla-manali-2026',
    destination: 'Shimla & Manali',
    duration: '7 Days',
    departureDate: '17 May 2026',
    departureLocation: 'Ex Pune',
    tags: ['Summer Hills', 'Late May Batch'],
    image: kashmirImg,
    month: 'May 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/shimla-manali-tour-2026/'
  },

  // June 2026
  {
    id: 'dep-bali-jun',
    tourId: 'bali-2026',
    destination: 'Bali',
    duration: '6 Days',
    departureDate: 'June 2026',
    departureLocation: 'Ex Pune',
    tags: ['Island Escape', 'June Departure'],
    image: baliImg,
    month: 'Jun 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/bali-group-tour-from-pune/'
  },

  // July 2026
  {
    id: 'dep-south-africa-jul-11',
    tourId: 'south-africa-2026',
    destination: 'Sunny South Africa',
    duration: '11 Days',
    departureDate: '11 July 2026',
    departureLocation: 'Ex Pune',
    tags: ['Safari Adventure', 'Long Haul Special'],
    image: southAfricaImg,
    month: 'Jul 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/sunny-south-africa-tour-2026/'
  },

  // September 2026
  {
    id: 'dep-tamil-nadu-sep-27',
    tourId: 'tamil-nadu-2026',
    destination: 'Tamil Nadu',
    duration: '8 Days',
    departureDate: '27 September 2026',
    departureLocation: 'Ex Pune',
    tags: ['Temple Trail', 'Cultural South India'],
    image: varanasiImg,
    month: 'Sep 2026',
    type: 'domestic',
    link: 'https://suntourismpune.co.in/trip/tamil-nadu-tour-from-pune/'
  },

  // October 2026
  {
    id: 'dep-australia-oct',
    tourId: 'australia-2026',
    destination: 'Australian Delight',
    duration: '12 Days',
    departureDate: 'Oct 2026',
    departureLocation: 'Ex Pune',
    tags: ['Down Under', 'Oct Departure'],
    image: australiaTourImg,
    month: 'Oct 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/australia-tour-packages/'
  },

  // November 2026
  {
    id: 'dep-china-nov',
    tourId: 'china-2026',
    destination: 'Wonderful China',
    duration: '11 Days',
    departureDate: 'Nov 2026',
    departureLocation: 'Ex Pune',
    tags: ['Far East Explorer', 'Nov Departure'],
    image: hongKongImg,
    month: 'Nov 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/china-tour-package-2026/'
  },
  {
    id: 'dep-phuket-nov',
    tourId: 'phuket-krabi-2026',
    destination: 'Phuket & Krabi',
    duration: '6 Days',
    departureDate: 'November 2026',
    departureLocation: 'Ex Pune',
    tags: ['Island Escape', 'Nov Departure'],
    image: baliImg,
    month: 'Nov 2026',
    type: 'international',
    link: 'https://suntourismpune.co.in/trip/phuket-krabi-tour-from-pune/'
  }
];

// Helper function to format price in Indian format
// export const formatPrice = (price: number): string => {
//   return new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR',
//     maximumFractionDigits: 0
//   }).format(price);
// };

// Get tours by type
export const getToursByType = (type: 'international' | 'domestic'): Tour[] => {
  return tours.filter(tour => tour.type === type);
};

// Get featured tours
export const getFeaturedTours = (): Tour[] => {
  return tours.filter(tour => tour.featured);
};

const monthNameToIndex: Record<string, number> = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

const getMonthIndex = (value: string): number | null => {
  const normalized = value.trim().toLowerCase();
  return monthNameToIndex[normalized] ?? null;
};

const parseMonthLabel = (value: string): Date | null => {
  const match = value.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);

  if (!match) {
    return null;
  }

  const monthIndex = getMonthIndex(match[1]);
  const year = Number(match[2]);

  if (monthIndex === null || Number.isNaN(year)) {
    return null;
  }

  return new Date(year, monthIndex, 1);
};

const parseDepartureDisplayDate = (value: string): Date | null => {
  const exactDateMatch = value.trim().match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);

  if (exactDateMatch) {
    const day = Number(exactDateMatch[1]);
    const monthIndex = getMonthIndex(exactDateMatch[2]);
    const year = Number(exactDateMatch[3]);

    if (monthIndex === null || Number.isNaN(day) || Number.isNaN(year)) {
      return null;
    }

    return new Date(year, monthIndex, day);
  }

  const monthOnlyMatch = value.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);

  if (!monthOnlyMatch) {
    return null;
  }

  const monthIndex = getMonthIndex(monthOnlyMatch[1]);
  const year = Number(monthOnlyMatch[2]);

  if (monthIndex === null || Number.isNaN(year)) {
    return null;
  }

  // Month-only departures stay visible throughout that month.
  return new Date(year, monthIndex + 1, 0);
};

const getDepartureComparisonDate = (departure: Departure): Date | null =>
  parseDepartureDisplayDate(departure.departureDate) ?? parseMonthLabel(departure.month);

const startOfDay = (value: Date) =>
  new Date(value.getFullYear(), value.getMonth(), value.getDate());

export const getUpcomingDepartures = (referenceDate: Date = new Date()): Departure[] => {
  const today = startOfDay(referenceDate);

  return upcomingDepartures.filter((departure) => {
    const comparisonDate = getDepartureComparisonDate(departure);

    return comparisonDate ? comparisonDate >= today : true;
  });
};

// Get departures by month
export const getDeparturesByMonth = (
  month: string,
  referenceDate: Date = new Date(),
): Departure[] => {
  return getUpcomingDepartures(referenceDate).filter(dep => dep.month === month);
};

// Get available months
export const getAvailableMonths = (referenceDate: Date = new Date()): string[] => {
  const months = [...new Set(getUpcomingDepartures(referenceDate).map(dep => dep.month))];
  return months.sort((a, b) => {
    const dateA = parseMonthLabel(a);
    const dateB = parseMonthLabel(b);

    if (!dateA || !dateB) {
      return a.localeCompare(b);
    }

    return dateA.getTime() - dateB.getTime();
  });
};

// Get tour by ID
export const getTourById = (id: string): Tour | undefined => {
  return tours.find(tour => tour.id === id);
};

// Get departures by tour ID
export const getDeparturesByTourId = (tourId: string): Departure[] => {
  return upcomingDepartures.filter(dep => dep.tourId === tourId);
};
