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
    discountPercent: 9,
    departureDates: ['27 Dec 2025', '21 Jan 2026', '13 Feb 2026'],
    departureLocation: 'Pune',
    type: 'international',
    categories: ['Adventure tour', 'Ghar se Ghar tak Group Tours', 'International Tours', 'Senior Citizens'],
    accommodation: 'Stay in premium 4-star hotels like Dubai Grand by Fortune or Fortune Atrium, offering comfort, location, and great service.',
    bestSeason: 'October to February is the ideal time — cool weather, festive vibes, and perfect for sightseeing.',
    transportation: 'Travel in style with a 2x2 air-conditioned luxury coach for all sightseeing, plus flights and Ghar Se Ghar Tak transfers included.',
    region: 'Middle East',
    tagline: 'Luxury, Adventure & Desert Magic – Bling, Burj & Beyond',
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
    overview: 'Sun Tourism brings you the ultimate Dubai group tour package for 2025 — a 7-day adventure with sky-high towers, golden deserts, and that effortless Ghar Se Ghar Tak comfort. From Burj Khalifa selfies and desert dune adventures to Marina yacht rides and world-class shopping, this package covers every iconic Dubai experience. Plus, enjoy a bonus Abu Dhabi day trip with SeaWorld and the majestic Sheikh Zayed Grand Mosque.',
    itinerary: [
      { 
        day: 1, 
        title: 'Residence – United Arab Emirates', 
        description: 'Today enter the world of Sun Touriism Internationall Pvt Ltd as you begin your wonderful tour of Dubai. Pickup from your Residence and transfer to Mumbai Airport for your Flight to UAE. On arrival, after clearing immigration formalities, proceed to the hotel in Dubai for check in. Overnight stay in Dubai.',
        meals: 'Dinner'
      },
      { 
        day: 2, 
        title: 'Dubai – Desert Safari', 
        description: 'After breakfast at the hotel, morning free to relax or for personal activities. Roam around the malls nearby hotels to get a feel of this Shopper\'s Paradise. Afternoon, after lunch, proceed for Desert Safari. Experience the magnificence and harmony of the desert in our comfortable 4WD Luxury Vehicles. Enjoy the musical and colorful evening in a VIP Desert Camp. Overnight stay in Dubai.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      { 
        day: 3, 
        title: 'Dubai City Tour', 
        description: 'Breakfast at the hotel and proceed for Dubai City Tour. Start the tour with a photo stop at Jumeirah Beach, facing the stunning Burj Al Arab. Proceed to Jumeirah, the picturesque palace and residential area of Dubai, also home to the famous Jumeirah Mosque. Enroute to the Palm Island with a stop-over at the Atlantis – The Palm for a photo-shoot followed by a stop at King\'s Palace. We drive past the Creek and the oldest part of the city, Bastakiya – the old wind tower houses with their splendid architecture. Late Afternoon we visit Dubai Mall and the Dubai Aquarium (from outside). Later we shall visit Burj Khalifa and Enjoy the Gold Coffee at Burj Khalifa. Also enjoy the World\'s Biggest Water Fountain. Dinner and Overnight stay in Dubai.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      { 
        day: 4, 
        title: 'Dubai – Sharjah – Dubai (Miracle Garden & Global Village)', 
        description: 'After breakfast proceed for Sharjah city tour, "The Pearl of the Gulf". One of the many landmarks to see during the tour is King Faisal Mosque, drive via the Sharjah Corniche pass the Al Ittihad Monument, Sharjah Stadium (From Outside) etc. Afternoon transfer to Miracle Garden (If Open), launched on Valentine\'s Day in 2013. It occupies over 72,000 square metres, making it the world\'s largest flower garden, featuring over 50 million flowers and 250 million plants. Evening transfer to Global Village, a cultural destination in the city of Dubai. It has different pavilions to showcase the culture and traditions of each country across the Globe. Enjoy the evening shopping. Overnight stay in Dubai.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      { 
        day: 5, 
        title: 'Abu Dhabi Day Trip (BAPS Temple, Sheikh Zayed Mosque, SeaWorld)', 
        description: 'Morning after breakfast proceed to Abu Dhabi. First visit the newly opened BAPS Hindu Temple in Abu Dhabi. Later proceed to the capital town of the Emirates to enjoy a City Orientation Tour covering photo stops at Sheikh Zayed Grand Mosque followed by a drive along the beautiful Corniche, magnificent view of the Presidential Palace etc. Later transfer to Sea World to enjoy the beautiful Theme Park, covering over 35 interactive experiences and rides. These include attractions like the Manta Coaster, Eel Racer, Hypersphere 360°, Jelly Plunge, and Kelp Climb etc. Evening proceed for a photo stop at Ferrari World. Overnight stay in Dubai.',
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
        title: 'Mumbai – Pune – Residence', 
        description: 'Arrive Mumbai. After clearing the Custom and Immigration formalities, complimentary transfer to Pune and to your Residence. Arrive Home and Tour Ends.',
        meals: ''
      }
    ],
    inclusions: [
      'Residence – Airport - Residence COMPLIMENTARY Transfer (Ghar Se Ghar Tak for Pune, PCMC, Nashik & Mumbai Guests)',
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
    bestSeason: 'May departure falls in Europe\'s spring season, with pleasant weather (10°C–20°C) ideal for sightseeing and tulip viewing.',
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
      { day: 4, title: 'London – Amsterdam (Overnight Cruise)', description: 'Visit Madame Tussauds Wax Museum with lifelike celebrity figures. Board overnight Cruise to Netherlands.', meals: 'Breakfast, Dinner' },
      { day: 5, title: 'Amsterdam – Brussels', description: 'Visit Keukenhof Tulip Gardens (seasonal), Wooden Shoe factory, and Cheese Farm. Proceed to Belgium.', meals: 'Breakfast, Dinner' },
      { day: 6, title: 'Brussels – Paris', description: 'Paris City Tour including Arc De Triomphe, Eiffel Tower 2nd Level, and romantic Seine River Cruise.', meals: 'Breakfast, Dinner' },
      { day: 7, title: 'Paris – Versailles', description: 'Visit the famous Versailles Palace with its magnificent gardens. Proceed to Strasbourg.', meals: 'Breakfast, Dinner' },
      { day: 8, title: 'Switzerland', description: 'Black Forest scenic train journey, visit Rhine Falls - Europe\'s largest waterfall, and Zurich Lake orientation.', meals: 'Breakfast, Dinner' },
      { day: 9, title: 'Jungfraujoch - Top of Europe', description: 'Visit Top of Europe at 11,333 ft via cogwheel train. Explore Sphinx Observatory, Ice Palace, and Alpine snow experience.', meals: 'Breakfast, Dinner' },
      { day: 10, title: 'Mt. Titlis & Lucerne', description: 'Mt. Titlis by Rotair revolving cable car, Ice Grotto, Cliff Walk, and Lake Lucerne cruise with Chapel Bridge.', meals: 'Breakfast, Dinner' },
      { day: 11, title: 'Vaduz – Innsbruck', description: 'Visit Liechtenstein capital, Swarovski Crystal Showroom, and Innsbruck walking tour with Golden Roof.', meals: 'Breakfast, Dinner' },
      { day: 12, title: 'Venice Island', description: 'Venice Island tour by water taxi, St. Mark\'s Basilica, Doge\'s Palace, and romantic Gondola Ride through canals.', meals: 'Breakfast, Dinner' },
      { day: 13, title: 'Pisa – Florence', description: 'Visit the iconic Leaning Tower of Pisa for photos. Florence city tour with Duomo and leather shopping.', meals: 'Breakfast, Dinner' },
      { day: 14, title: 'Rome City Tour', description: 'Vatican City, St. Peter\'s Basilica, Sistine Chapel views, Colosseum photo stop, and wish at Trevi Fountain.', meals: 'Breakfast, Dinner' },
      { day: 15, title: 'Return Flight', description: 'Transfer to Rome Airport for flight to Mumbai.', meals: 'Breakfast' },
      { day: 16, title: 'Home Sweet Home', description: 'Arrive Mumbai, complimentary transfer to Residence. Tour Ends with beautiful memories.', meals: '' }
    ],
    inclusions: [
      'Residence – Airport - Residence Transfer (Ghar Se Ghar Tak)',
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
    title: 'Rajasthan Tour Package 2025 – 7 Days Jaipur, Udaipur, Pushkar & Mount Abu',
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
    transportation: 'Flights from Pune–Ahmedabad–Jaipur–Pune with AC coach transfers for all sightseeing.',
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
      { day: 1, title: 'Residence – Mount Abu', description: 'Flight from Pune to Ahmedabad. Transfer to Mount Abu - the only hill station in Rajasthan. Visit the exquisite Delwara Jain temples known for intricate marble carvings. Evening boat ride at Nakki Lake. Overnight at Mount Abu.', meals: 'Dinner' },
      { day: 2, title: 'Mount Abu – Udaipur', description: 'After breakfast, visit Haldighati Museum dedicated to Maharana Pratap and the famous war horse Chetak. Visit Chetak Smarak and proceed to Nathdwara for Shrinath Ji Temple darshan. Continue to Udaipur - City of Lakes. Overnight at Udaipur.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Udaipur City Tour', description: 'Full day Udaipur sightseeing. Visit the magnificent City Palace Museum overlooking Lake Pichola. Explore Sahelion-Ki-Bari (Garden of Maidens). Evening enjoy the enchanting folk dance show at Bagore Ki Haveli. Overnight at Udaipur.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Chittorgarh – Pushkar', description: 'Visit the majestic Chittorgarh Fort - the largest fort in India. See Vijay Stambh, Kirti Stambh, Meera Temple and Khumba Shyam Temple. Transfer to Pushkar - the holy city. Overnight at Pushkar.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Pushkar – Jaipur', description: 'Morning visit the sacred Brahma Temple - one of the few temples dedicated to Lord Brahma. Take a holy dip at Pushkar Lake and perform pooja. Proceed to Jaipur. Evening experience the magical Light & Sound Show at Amber Fort. Overnight at Jaipur.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Jaipur City Tour', description: 'Morning visit Birla Mandir. Day free for shopping at famous Jaipur markets for handicrafts, gems, and textiles. Evening experience authentic Rajasthani culture at Chokhi Dhani - a village-themed resort with folk performances and traditional dinner. Overnight at Jaipur.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Jaipur Sightseeing – Home', description: 'Visit the magnificent Amber Fort by jeep/elephant. Explore City Palace, Jantar Mantar observatory, and the iconic Hawa Mahal (Palace of Winds). Transfer to Jaipur Airport for flight to Pune. Transfer to Residence. Tour Ends.', meals: 'Breakfast, Lunch' }
    ],
    inclusions: [
      'Residence – Airport - Residence Transfer (Ghar Se Ghar Tak)',
      'Return Air Fare (Pune-Ahmedabad-Jaipur-Pune)',
      'All Meals – Breakfast, Lunch, Dinner',
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
      'Balance to be paid 45–30 days before departure'
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
    accommodation: 'Stay in 3–4 star deluxe hotels across Japan.',
    bestSeason: 'Perfectly timed for cherry blossom (Sakura) viewing in late March 2026.',
    transportation: 'Luxury AC coach,and flights',
    region: 'Asia',
    tagline: 'Where Ancient Tradition Meets Modern Wonder – Sakura Special',
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
    overview: 'Step into Sun Tourism\'s Japan Cherry Blossom Tour 2026 — an 8-day journey crafted for March departures, blending the vibrant energy of Tokyo with the serenity of Mt. Fuji, the historic spirit of Hiroshima, and the timeless beauty of Kyoto and Nara. From walking under the pink Sakura at Shinjuku Gyoen to riding the world-famous Shinkansen bullet train — this itinerary is designed for travelers who want culture, tradition, and natural beauty in one trip.',
    itinerary: [
      { day: 1, title: 'Pune – Mumbai', description: 'Welcome aboard! Today enter the world of Sun Tourism as you begin your memorable journey to Japan. Pick up from your Residence and transfer to Mumbai airport. On arrival check in for your flight to Japan.', meals: '' },
      { day: 2, title: 'Mumbai – Tokyo', description: 'Arrive Tokyo. After clearing the immigration formalities, enjoy transfer to your hotel. Enroute visit the Tokyo Sky Tree - one of the world\'s tallest towers. Evening free to relax and explore the surroundings. Overnight stay in Tokyo.', meals: 'Lunch, Dinner' },
      { day: 3, title: 'Tokyo City Tour', description: 'After breakfast transfer to enjoy Tokyo Guided City Tour. Visit the Oldest Temple of Tokyo City - Asakusa Senso-ji Temple. Later visit the Nakamise shopping Street followed by Imperial Palace Garden, Shibuya Crossing, and Shinjuku Gyoen National Garden to see the famous Sakura blooming. Evening visit Akihabara for shopping. Overnight in Tokyo.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Tokyo – Hakone – Mt. Fuji', description: 'After breakfast transfer to have an amazing and breathtaking view of mighty Mt. Fuji from Mt. Fuji 5th Station. Later enjoy Hakone Ropeway, Owakudani boiling valley for amazing Mt. Fuji views, followed by a lifetime experience of Pirate Cruise in Lake Ashi. Overnight stay in Lake Kawaguchi area.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Numazu – Hiroshima (Bullet Train)', description: 'After breakfast, proceed to Mishima station to take your first Bullet Train (Shinkansen) to Hiroshima. On arrival transfer to visit Miyajima Island by ferry. Enjoy the picture stop at Itsukushima Shrine and the famous Torii Gate in the water. Evening free to relax. Overnight stay in Hiroshima.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Hiroshima – Osaka (Bullet Train)', description: 'After breakfast, time to visit the historic Hiroshima Bomb site and monuments. Visit Hiroshima Peace Memorial Museum, Peace Memorial Park, Sadako Monument, Cenotaph Monument, and the Bomb Dome. Later transfer to Hiroshima Station for 2nd Bullet Train Ride to Osaka. On arrival visit Osaka Castle Park to enjoy the Sakura (Cherry Blossom). Later transfer to Shinsaibashi and Dotonbori area for shopping. Overnight stay in Osaka.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Osaka – Nara – Kyoto – Osaka', description: 'After breakfast checkout and transfer to Nara. On arrival visit the World Heritage Site of Todai-ji Temple housing the Great Buddha. Visit Nara Deer Park with over 1,200 wild Sika Deer. Later transfer to Kyoto. Visit the iconic Kinkaku-ji Temple (Golden Pavilion) and Kiyomizudera Temple, established in 780 AD - one of Japan\'s most celebrated temples. Evening free for shopping. Farewell dinner with your travel companions. Overnight in Osaka.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 8, title: 'Osaka – Mumbai – Home', description: 'After breakfast checkout from hotel and transfer to Osaka Airport for return flight to Mumbai. On arrival in Mumbai, after immigration and customs, transfer to your Residence in Pune. Arrive Home and Tour Ends.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Residence – Airport - Residence COMPLIMENTARY Transfer (Ghar Se Ghar Tak for Nashik, Mumbai, Pune, PCMC)',
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
    title: 'Singapore Malaysia Holiday Package – with Free Sri Lanka',
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
    tagline: '3 Countries, 9 Days – Explore the Best of Southeast Asia',
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
    overview: 'Experience the ultimate Singapore Malaysia tour package this December 2025 with a surprise twist — a free Sri Lanka trip. Explore 3 stunning countries in just 9 days with world-famous attractions, modern cities, and tropical beauty.',
    itinerary: [
      { day: 1, title: 'Residence – Mumbai', description: 'Pick up from Residence, transfer to Mumbai Airport for flight to Colombo.', meals: '' },
      { day: 2, title: 'Colombo – Singapore', description: 'Colombo City Orientation Tour covering main attractions. Evening flight to Singapore.', meals: 'Breakfast, Dinner' },
      { day: 3, title: 'Kuala Lumpur – Genting Highlands', description: 'Putrajaya tour visiting the administrative capital. Transfer to Genting Highlands by Asia\'s longest cable car - 3.38 km journey with stunning views.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Genting – Kuala Lumpur', description: 'Morning free at Genting Outdoor Theme Park. Visit the iconic Batu Caves - limestone caves with Hindu temple.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Kuala Lumpur City Tour', description: 'Full day KL city tour. Visit King\'s Palace (Istana Negara), iconic Petronas Twin Towers, KL Tower Observation Deck, and shopping.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Singapore City Tour', description: 'Transfer to Singapore. Visit Marina Bay Sands Sky Park, Gardens by the Bay with Flower Dome and Cloud Forest.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Singapore – Universal Studios', description: 'Full day at Universal Studios Singapore. Evening visit SEA Aquarium - one of the world\'s largest.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 8, title: 'Singapore – Sentosa Island', description: 'City Tour, Sentosa Island Cable Car, Madame Tussauds Singapore, Wings of Time spectacular show.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 9, title: 'Return Home', description: 'Flight to Mumbai, complimentary transfer to Residence. Tour Ends.', meals: 'Breakfast' }
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
    title: 'Kerala Kanyakumari Tour Package 2025 – Sun Tourism',
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
    tagline: 'God\'s Own Country – Hills, Backwaters & Coastal Beauty',
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
      { day: 1, title: 'Residence – Pune Airport', description: 'Today enter the world of Sun Tourism as you begin your wonderful tour of "Kerala - God\'s Own Country". Pick up from your residence and proceed to airport to board the flight to Cochin.', meals: '' },
      { day: 2, title: 'Pune Airport – Cochin', description: 'Arrive Cochin and check in to hotel. Explore Cochin - the Queen of Arabian Sea. Visit Fort Kochi, Chinese Fishing Nets, St. Francis Church, and Jewish Synagogue.', meals: 'Lunch, Dinner' },
      { day: 3, title: 'Cochin – Munnar', description: 'After breakfast proceed to Munnar - a beautiful hill station which was once the summer capital of the British Government in India. Enroute witness the beautiful nature, waterfalls. Overnight stay at Munnar.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Munnar Sightseeing', description: 'Explore Munnar\'s natural beauty. Visit Rajamala Wildlife Sanctuary (Eravikulam National Park), Echo Point for panoramic views, and Mattupetty Dam. Evening visit the local market. Overnight at Munnar.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Munnar – Thekkady (Periyar)', description: 'After breakfast, proceed to Thekkady - India\'s largest wildlife reserve. Visit famous Spice Plantations enroute. Post lunch enjoy Boat Ride at Thekkady Wildlife Reserve (or Jeep Safari if boat unavailable). Evening enjoy Kathakali dance show and Kalaripayattu martial arts show. Overnight at Thekkady.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Thekkady – Vagamon – Alleppey', description: 'After breakfast proceed to Alleppey. Enroute visit the most scenic Glass Bridge at Vagamon for beautiful photos with nature. On arrival in Alleppey enjoy the famous Kerala Backwater ride in Vembanad Lake. Overnight at Alleppey.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Alleppey – Jatayu – Varkala – Trivandrum', description: 'After breakfast check out and proceed towards Trivandrum. Enroute visit world\'s largest Bird Sculpture - Jatayu Earth\'s Centre. Later visit Varkala Beach - the only beach in southern Kerala with cliffs. Arrive Trivandrum. Overnight stay at Trivandrum.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 8, title: 'Trivandrum Sightseeing', description: 'Today after breakfast proceed to Trivandrum sightseeing which includes the ancient Padmanabh Swami Temple (one of the richest temples in the world), Napier Museum, and relaxation at Kovalam Beach. Overnight at Trivandrum.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 9, title: 'Trivandrum – Kanyakumari', description: 'Have breakfast and proceed to Kanyakumari - the southernmost tip of India. On arrival visit the Tri-Samudra Milan (confluence of three seas), Gandhi Mandapam, Swami Vivekananda Rock Memorial, Thiruvalluvar Statue & Kanyakumari Temple. Witness the spectacular sunset. Overnight Stay in Kanyakumari.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 10, title: 'Kanyakumari – Trivandrum – Home', description: 'Early morning optional sunrise viewing. After breakfast check out and proceed towards Trivandrum for your return flight home. Board flight from Trivandrum Airport and return home with wonderful memories. Upon arrival complimentary transfer to your residence.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Residence – Airport - Residence Complimentary Transfer (Ghar Se Ghar Tak for Pune & PCMC guests)',
      'Return Air Fare',
      'All Meals – Breakfast, Lunch, Dinner (set menu)',
      'All Tips – Guide, Driver & Restaurant',
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
    title: 'Andaman Tour Packages 2025–2026 from Pune | Sun Tourism',
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
    tagline: 'Tropical Paradise – Crystal Waters, White Sands & Island Adventures',
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
    overview: 'A 6-day group tour covering Andaman\'s best hits — from Port Blair\'s historic Cellular Jail to Havelock\'s crystal blue waters and Neil Island\'s golden hour glow. Experience the pristine beaches, vibrant coral reefs, and rich history of these tropical islands.',
    itinerary: [
      { day: 1, title: 'Residence – Port Blair', description: 'Flight from Pune/Mumbai to Port Blair. On arrival, visit the beautiful Corbyn\'s Cove Beach. Evening attend the emotional Light & Sound Show at Cellular Jail - reliving the freedom struggle history. Overnight at Port Blair.', meals: 'Lunch, Dinner' },
      { day: 2, title: 'Port Blair – Havelock Island', description: 'Morning ferry to Havelock Island - jewel of Andaman. Visit Elephant Beach for optional water sports and snorkeling among vibrant corals. Evening witness spectacular sunset at Radhanagar Beach - rated Asia\'s best beach. Overnight at Havelock.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Havelock – Neil Island', description: 'Morning ferry to the tranquil Neil Island - the "Vegetable Bowl of Andaman". Visit the Natural Coral Bridge (Howrah Bridge). Experience the breathtaking sunset at Laxmanpur Beach. Overnight at Neil Island beach resort.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Neil Island – Port Blair', description: 'Early morning sunrise at Bharatpur Beach. After breakfast, ferry back to Port Blair. Visit historic Ross Island - former British administrative headquarters, now reclaimed by nature. Explore the ruins and deer park. Overnight at Port Blair.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Port Blair City Tour', description: 'Full day Port Blair exploration. Visit Chatham Saw Mill (Asia\'s oldest operating saw mill), Anthropological Museum (tribal heritage), Naval Marine Museum (marine life exhibits). Evening free for shopping at Aberdeen Bazaar. Overnight at Port Blair.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Return Home', description: 'After breakfast, transfer to Port Blair Airport for flight to Mumbai/Pune. Complimentary transfer to Residence. Tour Ends with beautiful island memories.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Residence – Airport - Residence Transfer',
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
    image: '/andaman-tour.jpg',
    featured: true,
    whyPopular: [
      'Pristine untouched beaches',
      'Best snorkeling and water sports in India',
      'Historical significance - Cellular Jail visit',
      'Comfortable weather in winter months',
      'All-inclusive with comfortable accommodations',
      'Perfect for couples and families'
    ]
  }
];

// Upcoming departures for the homepage calendar
export const upcomingDepartures: Departure[] = [
  // December 2025
  // {
  //   id: 'dep-dubai-dec-25',
  //   tourId: 'dubai-2025',
  //   destination: 'Dubai & Abu Dhabi',
  //   duration: '7 Days',
  //   departureDate: '25 Dec 2025',
  //   departureLocation: 'Ex Pune',
  //   price: 105919,
  //   originalPrice: 115919,
  //   discountPercent: 9,
  //   spotsLeft: 8,
  //   tags: ['X-Mas Special', 'Ghar Se Ghar Tak'],
  //   image: '/dubai-tour.jpg',
  //   month: 'Dec 2025',
  //   type: 'international'
  // },
  {
    id: 'dep-dubai-dec-27',
    tourId: 'dubai-2025',
    destination: 'Dubai & Abu Dhabi',
    duration: '7 Days',
    departureDate: '27 Dec 2025',
    departureLocation: 'Ex Pune',
    // price: 105919,
    // originalPrice: 115919,
    spotsLeft: 6,
    tags: ['New Year Special', 'Ghar Se Ghar Tak'],
    image: '/dubai-tour.jpg',
    // link: 'https://suntourismpune.co.in/trip/dubai-tour-packages-2025-26-flights-visa-ghar-se-ghar-tak/',
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
    // price: 52919,
    // originalPrice: 62919,
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
    // price: 129919,
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
    // price: 62919,
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
    // price: 70919,
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
    // price: 105919,
    // originalPrice: 115919,
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
    // price: 105919,
    // originalPrice: 115919,
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
    // price: 65919,
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
    // price: 259919,
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
    // price: 394919,
    // originalPrice: 419919,
    // discountPercent: 6,
    spotsLeft: 22,
    tags: ['Trip of the Month', '7 Countries'],
    image: '/europe-tour.jpg',
    month: 'May 2026',
    type: 'international'
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

// Get tour by ID
export const getTourById = (id: string): Tour | undefined => {
  return tours.find(tour => tour.id === id);
};

// Get departures by tour ID
export const getDeparturesByTourId = (tourId: string): Departure[] => {
  return upcomingDepartures.filter(dep => dep.tourId === tourId);
};
