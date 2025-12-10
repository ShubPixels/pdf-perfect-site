// Tour data extracted from suntourismpune.co.in - the parent website
// This is the central hub for all tour information

export interface Tour {
  id: string;
  title: string;
  shortTitle: string;
  destination: string;
  destinations: string[];
  duration: string;
  nights: number;
  days: number;
  price: number;
  originalPrice?: number;
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
  itinerary: { day: number; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  notes: string[];
  bookingAmount: number;
  image: string;
  featured?: boolean;
  tripOfMonth?: boolean;
}

export interface Departure {
  id: string;
  tourId: string;
  destination: string;
  duration: string;
  departureDate: string;
  departureLocation: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  spotsLeft?: number;
  tags: string[];
  image: string;
  month: string;
  type: 'international' | 'domestic';
}

// Featured tours from Sun Tourism
export const tours: Tour[] = [
  {
    id: 'dubai-2025',
    title: 'Dubai Tour Packages 2025 – With Abu Dhabi & Sharjah | Ghar Se Ghar Tak',
    shortTitle: 'Dubai & Abu Dhabi',
    destination: 'Dubai, Abu Dhabi & Sharjah',
    destinations: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    duration: '7 Days - 6 Nights',
    nights: 6,
    days: 7,
    price: 105919,
    originalPrice: 115919,
    discountPercent: 9,
    departureDates: ['25 Dec 2025', '27 Dec 2025', '21 Jan 2026', '13 Feb 2026'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Ghar se Ghar tak Group Tours', 'International Tours', 'Senior Citizens'],
    accommodation: 'Stay in premium 4-star hotels like Dubai Grand by Fortune or Fortune Atrium',
    bestSeason: 'October to February is the ideal time — cool weather, festive vibes, and perfect for sightseeing',
    transportation: 'Travel in style with a 2x2 air-conditioned luxury coach for all sightseeing, plus flights and Ghar Se Ghar Tak transfers included',
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
    overview: 'Sun Tourism brings you the ultimate Dubai group tour package for 2025 — a 7-day adventure with sky-high towers, golden deserts, and that effortless Ghar Se Ghar Tak comfort.',
    itinerary: [
      { day: 1, title: 'Residence – United Arab Emirates', description: 'Pickup from your Residence and transfer to Mumbai Airport for your Flight to UAE. On arrival, proceed to the hotel in Dubai for check in.' },
      { day: 2, title: 'Dubai – Desert Safari', description: 'Morning free to relax. Afternoon, proceed for Desert Safari. Experience the magnificence of the desert in luxury 4WD vehicles. Enjoy the musical evening in VIP Desert Camp.' },
      { day: 3, title: 'Dubai City Tour', description: 'Visit Jumeirah Beach, Burj Al Arab, Palm Island, Atlantis, Dubai Mall, Dubai Aquarium, and Burj Khalifa with Gold Coffee. Enjoy the World\'s Biggest Water Fountain.' },
      { day: 4, title: 'Sharjah & Miracle Garden', description: 'Sharjah city tour including King Faisal Mosque. Visit Miracle Garden with over 50 million flowers. Evening at Global Village.' },
      { day: 5, title: 'Abu Dhabi Day Trip', description: 'Visit BAPS Hindu Temple, Sheikh Zayed Grand Mosque, Sea World theme park, and Ferrari World photo stop.' },
      { day: 6, title: 'Shopping & Marina', description: 'Visit Meena Bazar & Gold Souk for shopping. Enjoy Abra Ride in Dubai Creek and memorable Yacht Ride in Dubai Marina.' },
      { day: 7, title: 'Return Home', description: 'Arrive Mumbai and transfer to your Residence. Tour Ends.' }
    ],
    inclusions: [
      'Residence – Airport - Residence COMPLIMENTARY Transfer (Ghar Se Ghar Tak)',
      'Return Economy Class Airfare',
      'Breakfast, Lunch, Dinner as per Itinerary',
      'All transfers and sightseeing by 2x2 A/C Luxury Coach',
      'Tourist Visa Charges',
      'Travel Insurance for Travel Duration',
      'Sun Tourism Tour Manager',
      'Tour Photos in Google Drive',
      '1 Drinking Water bottle Per Person Per Day'
    ],
    exclusions: [
      'GST @ 5% & TCS @ 5%',
      'Personal expenses',
      'Any meals not specified',
      'Optional activities'
    ],
    notes: [
      'Booking Amount Rs. 40,000/- per person (Non Refundable)',
      'Balance to be paid 45 days before departure',
      'Cost calculated at 1 USD @ INR 86.5'
    ],
    bookingAmount: 40000,
    image: '/dubai-tour.jpg',
    featured: true
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
    price: 394919,
    originalPrice: 419919,
    discountPercent: 6,
    departureDates: ['07 May 2026'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Ghar se Ghar tak Group Tours', 'International Tours', 'Senior Citizens'],
    accommodation: 'Stay in comfortable 3★ & 4★ hotels with twin/triple sharing rooms and one overnight cruise',
    bestSeason: 'May departure falls in Europe\'s spring season, with pleasant weather (10°C–20°C) ideal for sightseeing and tulip viewing',
    transportation: 'Economy airfare, luxury A/C coaches, overnight cruise, scenic trains, cable cars, boat rides, and city transfers',
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
    overview: 'Experience the magic of Europe with Sun Tourism\'s Grand Europe Tour Packages 2026, featuring 16 days of culture, history, and breathtaking landscapes from London to Rome.',
    itinerary: [
      { day: 1, title: 'Residence - Pune - Mumbai', description: 'Pick up from your Residence and transfer to Mumbai for flight to London.' },
      { day: 2, title: 'London', description: 'Arrive London. Visit the London Eye - one of the world\'s largest observation wheels.' },
      { day: 3, title: 'London City Tour', description: 'Guided City Tour – Tower Bridge, Big Ben, Buckingham Palace, Tower of London with Crown Jewels, Oxford Street.' },
      { day: 4, title: 'London – Amsterdam', description: 'Visit Madame Tussauds Wax Museum. Board overnight Cruise to Netherlands.' },
      { day: 5, title: 'Amsterdam – Brussels', description: 'Keukenhof Tulip Gardens, Wooden Shoe factory, Cheese Farm. Proceed to Belgium.' },
      { day: 6, title: 'Brussels – Paris', description: 'Paris City Tour including Arc De Triomphe, Eiffel Tower, Seine River Cruise.' },
      { day: 7, title: 'Paris – Versailles', description: 'Visit the famous Versailles Palace. Proceed to Strasbourg.' },
      { day: 8, title: 'Switzerland', description: 'Black Forest scenic train, Rhine Falls, Zurich Lake.' },
      { day: 9, title: 'Jungfraujoch', description: 'Visit Top of Europe at 11,333 ft. Sphinx Observatory, Ice Palace.' },
      { day: 10, title: 'Mt. Titlis & Lucerne', description: 'Mt. Titlis by Rotair cable car, Ice Grotto, Lake Lucerne cruise.' },
      { day: 11, title: 'Vaduz – Innsbruck', description: 'Liechtenstein, Swarovski Crystal Showroom, Innsbruck walking tour.' },
      { day: 12, title: 'Venice', description: 'Venice Island tour, St. Mark\'s Basilica, Gondola Ride.' },
      { day: 13, title: 'Pisa – Florence', description: 'Leaning Tower of Pisa, Florence city tour.' },
      { day: 14, title: 'Rome', description: 'Vatican, St. Peter\'s Church, Colosseum, Trevi Fountain.' },
      { day: 15, title: 'Return Flight', description: 'Transfer to Rome Airport for flight to Mumbai.' },
      { day: 16, title: 'Home', description: 'Arrive Mumbai, transfer to Residence.' }
    ],
    inclusions: [
      'Residence – Airport - Residence Transfer (Ghar Se Ghar Tak)',
      'Return Economy Class Airfare',
      'All Meals as per Itinerary',
      '3★ & 4★ Hotel Accommodation',
      'Schengen Visa Processing',
      'Travel Insurance',
      'Sun Tourism Tour Director',
      'All Sightseeing and Entry Tickets'
    ],
    exclusions: [
      'GST @ 5% & TCS @ 5%',
      'Personal expenses',
      'Optional activities'
    ],
    notes: [
      'Booking Amount Rs. 1,00,000/- per person',
      'Balance to be paid 60 days before departure'
    ],
    bookingAmount: 100000,
    image: '/europe-tour.jpg',
    featured: true,
    tripOfMonth: true
  },
  {
    id: 'rajasthan-2025',
    title: 'Rajasthan Tour Package 2025 – 7 Days Jaipur, Udaipur, Pushkar & Mount Abu',
    shortTitle: 'Royal Rajasthan',
    destination: 'Rajasthan',
    destinations: ['Mount Abu', 'Udaipur', 'Chittorgarh', 'Pushkar', 'Jaipur'],
    duration: '7 Days - 6 Nights',
    nights: 6,
    days: 7,
    price: 52919,
    originalPrice: 62919,
    discountPercent: 16,
    departureDates: ['23 Dec 2025'],
    departureLocation: 'Pune',
    type: 'domestic',
    categories: ['Culture and Heritage', 'Domestic Tour', 'Ghar se Ghar tak Group Tours', 'Senior Citizens'],
    accommodation: 'Stay in deluxe & star-rated hotels across Mount Abu, Udaipur, Pushkar, and Jaipur',
    bestSeason: 'December offers pleasant weather for sightseeing',
    transportation: 'Flights from Pune–Ahmedabad–Jaipur–Pune with AC coach transfers for all sightseeing',
    highlights: [
      'Delwara Jain Temples',
      'Nakki Lake',
      'Haldighati Museum',
      'City Palace Udaipur',
      'Bagore Ki Haveli Dance Show',
      'Chittorgarh Fort',
      'Brahma Temple Pushkar',
      'Amber Fort Light & Sound Show',
      'Chokhi Dhani',
      'Hawa Mahal'
    ],
    overview: 'A 7-day journey crafted for December departures, blending the cool hills of Mount Abu with the lakes of Udaipur, the sacred aura of Pushkar, and the royal charm of Jaipur.',
    itinerary: [
      { day: 1, title: 'Residence – Mount Abu', description: 'Flight to Ahmedabad, transfer to Mt Abu. Visit Delwara Jain temples and Nakki Lake.' },
      { day: 2, title: 'Mount Abu – Udaipur', description: 'Visit Haldighati Museum, Chetak Smarak, and Shrinath Ji Temple Nathdwara.' },
      { day: 3, title: 'Udaipur', description: 'City Tour: Palace Museum, Sahelion-Ki-Bari, Bagore Ki Haveli folk dance show.' },
      { day: 4, title: 'Chittorgarh – Pushkar', description: 'Visit Chittorgarh Fort, Meera and Khumba Shyam Temple. Transfer to Pushkar.' },
      { day: 5, title: 'Pushkar – Jaipur', description: 'Brahma Temple, Pushkar Lake pooja. Amber Fort Light & Sound Show.' },
      { day: 6, title: 'Jaipur', description: 'Birla Mandir, shopping, Chokhi Dhani village experience.' },
      { day: 7, title: 'Jaipur – Home', description: 'Amber Fort, City Palace, Jantar Mantar, Hawa Mahal. Flight home.' }
    ],
    inclusions: [
      'Residence – Airport - Residence Transfer (Ghar Se Ghar Tak)',
      'Air Fare',
      'All Meals – Breakfast, Lunch, Dinner',
      'Deluxe & Star Rated Hotels',
      'All Tips - Guide, Driver & Restaurant',
      'A/C Vehicle for all transfers',
      '1 Liter Water Bottle per person per day',
      'Sun Tourism Tour Manager',
      'Local Guide where required',
      'Basic Travel Insurance (Up to 60 years)'
    ],
    exclusions: [
      'Meals not specified',
      'Sightseeing not mentioned',
      'GST of 5%',
      'Personal expenses'
    ],
    notes: [
      'Booking Amount Rs. 20,000/- per person (NON REFUNDABLE)',
      'Balance to be paid 45 – 30 days before departure'
    ],
    bookingAmount: 20000,
    image: '/rajasthan-tour.jpg',
    featured: true
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
    price: 259919,
    departureDates: ['24 Mar 2026'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Ghar se Ghar tak Group Tours', 'International Tours', 'Senior Citizens'],
    accommodation: 'Stay in 3–4 star deluxe hotels across Japan',
    bestSeason: 'Perfectly timed for cherry blossom viewing in March 2026',
    transportation: 'Luxury AC coach, Shinkansen bullet train, and flights included',
    highlights: [
      'Tokyo Sky Tree',
      'Asakusa Senso-ji Temple',
      'Shinjuku Gyoen Cherry Blossoms',
      'Mt. Fuji 5th Station',
      'Lake Ashi Pirate Cruise',
      'Hiroshima Peace Memorial',
      'Shinkansen Bullet Train',
      'Osaka Castle Park Sakura',
      'Kinkaku-ji Golden Pavilion',
      'Nara Deer Park'
    ],
    overview: 'An 8-day journey crafted for March departures, blending the vibrant energy of Tokyo with the serenity of Mt. Fuji, the historic spirit of Hiroshima, and the timeless beauty of Kyoto.',
    itinerary: [
      { day: 1, title: 'Pune – Mumbai', description: 'Pick up from Residence, transfer to Mumbai airport for flight to Japan.' },
      { day: 2, title: 'Tokyo', description: 'Arrive Tokyo, visit Tokyo Sky Tree.' },
      { day: 3, title: 'Tokyo City Tour', description: 'Asakusa Senso-ji Temple, Imperial Palace Garden, Shibuya Crossing, Shinjuku Gyoen Sakura.' },
      { day: 4, title: 'Hakone – Mt. Fuji', description: 'Mt. Fuji 5th Station, Hakone Ropeway, Owakudani, Lake Ashi Pirate Cruise.' },
      { day: 5, title: 'Hiroshima', description: 'Bullet train to Hiroshima, Miyajima Island, Itsukushima Shrine.' },
      { day: 6, title: 'Hiroshima – Osaka', description: 'Hiroshima Peace Memorial, Bullet train to Osaka, Osaka Castle Park Sakura, Dotonbori.' },
      { day: 7, title: 'Nara – Kyoto', description: 'Todai-ji Temple, Nara Deer Park, Kinkaku-ji Golden Pavilion, Kiyomizudera Temple.' },
      { day: 8, title: 'Return Home', description: 'Flight from Osaka to Mumbai, transfer to Residence.' }
    ],
    inclusions: [
      'Residence – Airport - Residence Transfer',
      'Return Economy Class Airfare',
      'All Meals as per Itinerary',
      '3-4 Star Hotels',
      'Japan Tourist Visa',
      'Travel Insurance',
      'Sun Tourism Tour Manager',
      'Shinkansen Bullet Train Tickets'
    ],
    exclusions: [
      'GST @ 5% & TCS @ 5%',
      'Personal expenses',
      'Optional activities'
    ],
    notes: [
      'Booking Amount Rs. 50,000/- per person',
      'Balance to be paid 60 days before departure'
    ],
    bookingAmount: 50000,
    image: '/japan-tour.jpg',
    featured: true
  },
  {
    id: 'singapore-malaysia-2025',
    title: 'Singapore Malaysia Holiday Package – with Free Sri Lanka',
    shortTitle: 'Singapore Malaysia',
    destination: 'Singapore, Malaysia & Sri Lanka',
    destinations: ['Singapore', 'Malaysia', 'Sri Lanka'],
    duration: '9 Days - 8 Nights',
    nights: 8,
    days: 9,
    price: 129919,
    departureDates: ['24 Dec 2025'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Ghar se Ghar tak Group Tours', 'International Tours', 'Honeymoon special'],
    accommodation: 'Comfortable 3-star and 4-star hotels in Singapore, Malaysia, and Sri Lanka',
    bestSeason: 'October to January is the best time for pleasant weather, shopping, and festive vibes',
    transportation: 'All transfers and sightseeing via luxury 2x2 air-conditioned coach',
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
    overview: 'Experience the ultimate Singapore Malaysia tour package this December 2025 with a surprise twist — a free Sri Lanka trip. Explore 3 stunning countries in just 9 days.',
    itinerary: [
      { day: 1, title: 'Residence – Mumbai', description: 'Pick up from Residence, transfer to Mumbai Airport for flight to Colombo.' },
      { day: 2, title: 'Colombo', description: 'Colombo City Orientation Tour, evening flight to Singapore.' },
      { day: 3, title: 'Kuala Lumpur – Genting', description: 'Putrajaya tour, Genting Highlands by Asia\'s longest cable car.' },
      { day: 4, title: 'Genting – Kuala Lumpur', description: 'Genting Outdoor Theme Park, Batu Caves.' },
      { day: 5, title: 'Kuala Lumpur City Tour', description: 'King\'s Palace, Petronas Twin Towers, KL Tower Observation Deck.' },
      { day: 6, title: 'Singapore', description: 'Marina Bay Sands Sky Park, Gardens by the Bay, Flower Dome, Cloud Forest.' },
      { day: 7, title: 'Singapore', description: 'Universal Studios, SEA Aquarium.' },
      { day: 8, title: 'Singapore', description: 'City Tour, Sentosa Island Cable Car, Madame Tussauds, Wings of Time show.' },
      { day: 9, title: 'Return Home', description: 'Flight to Mumbai, transfer to Residence.' }
    ],
    inclusions: [
      'Residence – Airport - Residence Transfer',
      'Return Economy Class Airfare',
      'All Meals as per Itinerary',
      '3-4 Star Hotels',
      'Singapore & Malaysia Visa',
      'Travel Insurance',
      'Sun Tourism Tour Manager',
      'All Sightseeing Entry Tickets',
      'FREE Sri Lanka Tour'
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
    featured: true
  },
  {
    id: 'kerala-2025',
    title: 'Kerala Kanyakumari Tour Package 2025 – Sun Tourism',
    shortTitle: 'Kerala Kanyakumari',
    destination: 'Kerala & Kanyakumari',
    destinations: ['Cochin', 'Munnar', 'Thekkady', 'Alleppey', 'Trivandrum', 'Kanyakumari'],
    duration: '10 Days - 9 Nights',
    nights: 9,
    days: 10,
    price: 62919,
    departureDates: ['25 Dec 2025'],
    departureLocation: 'Pune',
    type: 'domestic',
    categories: ['Culture and Heritage', 'Domestic Tour', 'Ghar se Ghar tak Group Tours', 'South India'],
    accommodation: 'Comfortable stays in 3 & 4-star rated hotels',
    bestSeason: 'December for pleasant post-monsoon weather',
    transportation: 'AC private vehicle and round-trip flights included',
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
    overview: 'A 10-day journey from Pune to Kerala and Kanyakumari covering iconic destinations like Munnar, Alleppey, Thekkady, Trivandrum, and the southern tip of India.',
    itinerary: [
      { day: 1, title: 'Residence – Airport', description: 'Pick up and transfer to Pune Airport.' },
      { day: 2, title: 'Pune – Cochin', description: 'Flight to Cochin, arrival and check-in.' },
      { day: 3, title: 'Cochin – Munnar', description: 'Transfer to Munnar hill station.' },
      { day: 4, title: 'Munnar', description: 'Rajamala Wildlife Sanctuary, Echo Point, Mattupetty Dam.' },
      { day: 5, title: 'Thekkady', description: 'Spice Plantations, Periyar Boat Ride, Kathakali show.' },
      { day: 6, title: 'Alleppey', description: 'Vagamon Glass Bridge, Alleppey Backwater cruise.' },
      { day: 7, title: 'Trivandrum', description: 'Jatayu Earth\'s Centre, Varkala Beach.' },
      { day: 8, title: 'Trivandrum Sightseeing', description: 'Padmanabh Swami Temple, Napier Museum, Kovalam Beach.' },
      { day: 9, title: 'Kanyakumari', description: 'Tri-Samudra Milan, Gandhi Mandapam, Vivekananda Rock Memorial.' },
      { day: 10, title: 'Return Home', description: 'Flight from Trivandrum, transfer to Residence.' }
    ],
    inclusions: [
      'Residence – Airport - Residence Transfer (Ghar Se Ghar Tak)',
      'Return Airfare',
      'All Meals',
      '3 & 4-Star Hotels',
      'AC Vehicle',
      'Sun Tourism Tour Manager',
      'All Sightseeing Entry Tickets',
      'Travel Insurance'
    ],
    exclusions: [
      'GST @ 5%',
      'Personal expenses',
      'Optional activities'
    ],
    notes: [
      'Booking Amount Rs. 20,000/- per person',
      'Balance to be paid 30 days before departure'
    ],
    bookingAmount: 20000,
    image: '/kerala-tour.jpg',
    featured: true
  },
  {
    id: 'andaman-2025',
    title: 'Andaman Tour Packages 2025–2026 from Pune | Sun Tourism',
    shortTitle: 'Andaman Islands',
    destination: 'Andaman Islands',
    destinations: ['Port Blair', 'Havelock Island', 'Neil Island', 'Ross Island'],
    duration: '6 Days - 5 Nights',
    nights: 5,
    days: 6,
    price: 65919,
    departureDates: ['28 Dec 2025', '25 Feb 2026'],
    departureLocation: 'Pune',
    type: 'domestic',
    categories: ['Adventure tour', 'Domestic Tour', 'Ghar se Ghar tak Group Tours', 'Beach'],
    accommodation: 'Comfortable beach resorts with beachfront access',
    bestSeason: 'October to May for pleasant weather and calm seas',
    transportation: 'Flights, Inter-island cruises (Macruzz/Green/Nautika), private AC vehicles',
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
    overview: 'A 6-day group tour covering Andaman\'s best hits — from Port Blair\'s history to Havelock\'s blue waves and Neil Island\'s golden hour glow.',
    itinerary: [
      { day: 1, title: 'Residence – Port Blair', description: 'Flight to Port Blair. Corbyn\'s Cove Beach, Cellular Jail Light & Sound Show.' },
      { day: 2, title: 'Havelock Island', description: 'Ferry to Havelock, Elephant Beach, Radhanagar Beach sunset.' },
      { day: 3, title: 'Neil Island', description: 'Ferry to Neil Island, Natural Coral Bridge, Laxmanpur sunset.' },
      { day: 4, title: 'Port Blair', description: 'Ferry to Port Blair, Ross Island tour.' },
      { day: 5, title: 'Port Blair City Tour', description: 'Chatham Saw Mill, Anthropological Museum, Naval Marine Museum.' },
      { day: 6, title: 'Return Home', description: 'Flight to Mumbai, transfer to Residence.' }
    ],
    inclusions: [
      'Residence – Airport - Residence Transfer',
      'Return Airfare (Mumbai-Port Blair-Mumbai)',
      'All Meals from Day 1 Lunch to Day 6 Breakfast',
      'Deluxe & Star-Rated Hotels',
      'Beach Resort at Neil Island',
      'Inter-Island Ferry Tickets',
      'Private AC Vehicle',
      'Sun Tourism Tour Manager'
    ],
    exclusions: [
      'GST @ 5%',
      'Water Sports (Optional)',
      'Scuba Diving',
      'Personal expenses'
    ],
    notes: [
      'Rs. 10,000/- discount for first 10 seats',
      'Booking Amount Rs. 20,000/- per person',
      'Balance to be paid 30 days before departure'
    ],
    bookingAmount: 20000,
    image: '/andaman-tour.jpg',
    featured: true
  }
];

// Upcoming departures for the homepage calendar
export const upcomingDepartures: Departure[] = [
  // December 2025
  {
    id: 'dep-dubai-dec-25',
    tourId: 'dubai-2025',
    destination: 'Dubai & Abu Dhabi',
    duration: '7 Days',
    departureDate: '25 Dec 2025',
    departureLocation: 'Ex Pune',
    price: 105919,
    originalPrice: 115919,
    discountPercent: 9,
    spotsLeft: 8,
    tags: ['X-Mas Special', 'Ghar Se Ghar Tak'],
    image: '/dubai-tour.jpg',
    month: 'Dec 2025',
    type: 'international'
  },
  {
    id: 'dep-dubai-dec-27',
    tourId: 'dubai-2025',
    destination: 'Dubai & Abu Dhabi',
    duration: '7 Days',
    departureDate: '27 Dec 2025',
    departureLocation: 'Ex Pune',
    price: 105919,
    originalPrice: 115919,
    spotsLeft: 6,
    tags: ['New Year Special', 'Ghar Se Ghar Tak'],
    image: '/dubai-tour.jpg',
    month: 'Dec 2025',
    type: 'international'
  },
  {
    id: 'dep-rajasthan-dec',
    tourId: 'rajasthan-2025',
    destination: 'Royal Rajasthan',
    duration: '7 Days',
    departureDate: '23 Dec 2025',
    departureLocation: 'Ex Pune',
    price: 52919,
    originalPrice: 62919,
    discountPercent: 16,
    spotsLeft: 12,
    tags: ['Winter Special', 'Heritage'],
    image: '/rajasthan-tour.jpg',
    month: 'Dec 2025',
    type: 'domestic'
  },
  {
    id: 'dep-singapore-dec',
    tourId: 'singapore-malaysia-2025',
    destination: 'Singapore Malaysia + FREE Sri Lanka',
    duration: '9 Days',
    departureDate: '24 Dec 2025',
    departureLocation: 'Ex Pune',
    price: 129919,
    spotsLeft: 10,
    tags: ['3 Countries', 'X-Mas & New Year'],
    image: '/singapore-tour.jpg',
    month: 'Dec 2025',
    type: 'international'
  },
  {
    id: 'dep-kerala-dec',
    tourId: 'kerala-2025',
    destination: 'Kerala & Kanyakumari',
    duration: '10 Days',
    departureDate: '25 Dec 2025',
    departureLocation: 'Ex Pune',
    price: 62919,
    spotsLeft: 15,
    tags: ['God\'s Own Country', 'Backwaters'],
    image: '/kerala-tour.jpg',
    month: 'Dec 2025',
    type: 'domestic'
  },
  {
    id: 'dep-andaman-dec',
    tourId: 'andaman-2025',
    destination: 'Andaman Islands',
    duration: '6 Days',
    departureDate: '28 Dec 2025',
    departureLocation: 'Ex Pune',
    price: 70919,
    spotsLeft: 5,
    tags: ['New Year Beach Bash', 'Island Hopping'],
    image: '/andaman-tour.jpg',
    month: 'Dec 2025',
    type: 'domestic'
  },
  // January 2026
  {
    id: 'dep-dubai-jan',
    tourId: 'dubai-2025',
    destination: 'Dubai & Abu Dhabi',
    duration: '7 Days',
    departureDate: '21 Jan 2026',
    departureLocation: 'Ex Pune',
    price: 105919,
    originalPrice: 115919,
    spotsLeft: 18,
    tags: ['Winter Escape', 'Ghar Se Ghar Tak'],
    image: '/dubai-tour.jpg',
    month: 'Jan 2026',
    type: 'international'
  },
  // February 2026
  {
    id: 'dep-dubai-feb',
    tourId: 'dubai-2025',
    destination: 'Dubai & Abu Dhabi',
    duration: '7 Days',
    departureDate: '13 Feb 2026',
    departureLocation: 'Ex Pune',
    price: 105919,
    originalPrice: 115919,
    spotsLeft: 20,
    tags: ['Valentine Special', 'Ghar Se Ghar Tak'],
    image: '/dubai-tour.jpg',
    month: 'Feb 2026',
    type: 'international'
  },
  {
    id: 'dep-andaman-feb',
    tourId: 'andaman-2025',
    destination: 'Andaman Islands',
    duration: '6 Days',
    departureDate: '25 Feb 2026',
    departureLocation: 'Ex Pune',
    price: 65919,
    spotsLeft: 16,
    tags: ['Beach Paradise', 'Island Hopping'],
    image: '/andaman-tour.jpg',
    month: 'Feb 2026',
    type: 'domestic'
  },
  // March 2026
  {
    id: 'dep-japan-mar',
    tourId: 'japan-2026',
    destination: 'Cherry Blossom Japan',
    duration: '8 Days',
    departureDate: '24 Mar 2026',
    departureLocation: 'Ex Pune',
    price: 259919,
    spotsLeft: 14,
    tags: ['Sakura Special', 'Once in a Lifetime'],
    image: '/japan-tour.jpg',
    month: 'Mar 2026',
    type: 'international'
  },
  // May 2026
  {
    id: 'dep-europe-may',
    tourId: 'europe-2026',
    destination: 'Grand Europe',
    duration: '16 Days',
    departureDate: '07 May 2026',
    departureLocation: 'Ex Pune',
    price: 394919,
    originalPrice: 419919,
    discountPercent: 6,
    spotsLeft: 22,
    tags: ['Trip of the Month', '7 Countries'],
    image: '/europe-tour.jpg',
    month: 'May 2026',
    type: 'international'
  }
];

// Helper function to format price in Indian format
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

// Get tours by type
export const getToursByType = (type: 'international' | 'domestic'): Tour[] => {
  return tours.filter(tour => tour.type === type);
};

// Get featured tours
export const getFeaturedTours = (): Tour[] => {
  return tours.filter(tour => tour.featured);
};

// Get departures by month
export const getDeparturesByMonth = (month: string): Departure[] => {
  return upcomingDepartures.filter(dep => dep.month === month);
};

// Get available months
export const getAvailableMonths = (): string[] => {
  const months = [...new Set(upcomingDepartures.map(dep => dep.month))];
  return months.sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
  });
};
