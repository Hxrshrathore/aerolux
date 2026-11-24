export interface CharterOffering {
  id: number;
  title: string;
  tagline: string;
  location: string;
  status: string;
  price: string;
  specs: {
    beds: number | string; // maps to capacity / passengers
    area: string; // maps to range / cruise speed
    speed?: string;
    range?: string;
    crew?: string;
  };
  image: string;
  category: "Private Jets" | "Joyrides" | "Business Trips" | "Pilgrimage" | "Air Ambulance" | "Group Charters";
  description: string;
  features?: string[];
  amenities?: string[];
  gallery?: string[];
  aircraftType?: string;
  ctaText?: string;
  ctaLink?: string;
}

export type Property = CharterOffering;

export const properties: CharterOffering[] = [
  {
    id: 1,
    title: "Private Jets",
    tagline: "The Epitome of Luxury Travel",
    location: "Pan-India & International Bases",
    status: "Available 24/7",
    price: "From ₹85,000 / hr",
    specs: { beds: "4 - 16 Pax", area: "3,800 nm Range", speed: "850 km/h", crew: "2 Pilots + Flight Attendant" },
    image: "/assets/images/hero-jet.jpg",
    category: "Private Jets",
    description: "Experience the epitome of luxury with our bespoke private jet services. From personalized itineraries to exclusive in-flight amenities, we ensure that every aspect of your journey is perfectly tailored—Book Private Jet Flight Now With AeroLux.",
    features: [
      "Bespoke Flight Itineraries",
      "VIP Private Terminals (FBO Access)",
      "Gourmet In-Flight Dining",
      "Satellite Wi-Fi & Lie-Flat Berths",
      "Direct Boarding in 15 Minutes"
    ],
    amenities: ["Gourmet Catering", "Lie-Flat Beds", "VIP Airport Lounges", "Satellite Phone", "Pet Friendly"],
    gallery: [
      "/assets/images/hero-jet.jpg",
      "/assets/images/cabin-interior.jpg",
      "/assets/images/fleet-hangar.jpg"
    ],
    aircraftType: "Bombardier Challenger / Gulfstream G650 / Cessna Citation",
    ctaText: "Book Private Jet Flight Now",
    ctaLink: "/book-flight"
  },
  {
    id: 2,
    title: "Airplane Joyrides",
    tagline: "Breathtaking Views From Above",
    location: "Mumbai Juhu Airport & Coastal Corridors",
    status: "Popular Experience",
    price: "From ₹9,999 / seat",
    specs: { beds: "2 - 6 Pax", area: "30 - 60 Min Tour", speed: "Scenic Cruise", crew: "Senior Commercial Pilot" },
    image: "/assets/images/joyride-scenic.jpg",
    category: "Joyrides",
    description: "Elevate your sense of adventure with our exhilarating joyrides that offer breathtaking views from above. Whether you're celebrating a special occasion or simply craving an unforgettable experience, our joyrides promise moments of pure delight and wonder. Book AeroLux Joyride Now!",
    features: [
      "Panoramic Skyline & Coastal Views",
      "Celebration Cakes & Photo Packages",
      "Personalized Pilot Commentary",
      "Sunset & Sunrise Golden Hour Slots",
      "Complimentary Lounge Refreshments"
    ],
    amenities: ["Panoramic Windows", "Noise-Cancelling Headsets", "In-Flight Photos", "Celebration Decor", "VIP Ground Host"],
    gallery: [
      "/assets/images/joyride-scenic.jpg",
      "/assets/images/fleet-hangar.jpg",
      "/assets/images/cabin-interior.jpg"
    ],
    aircraftType: "Cessna 172 / Diamond DA42 / Beechcraft King Air",
    ctaText: "Book AeroLux Joyride Now",
    ctaLink: "/airplane-joyride"
  },
  {
    id: 3,
    title: "Business Trips",
    tagline: "Unrestricted Global Corporate Mobility",
    location: "Global & Domestic Flight Corridors",
    status: "Instant Dispatch",
    price: "On Demand Quoting",
    specs: { beds: "6 - 14 Pax", area: "Non-Stop Cross-Country", speed: "Mach 0.85", crew: "2 Captains + Cabin Crew" },
    image: "/assets/images/fleet-hangar.jpg",
    category: "Business Trips",
    description: "Book Your Private Flight journey without boundaries with our private international flights. Discover exotic destinations and traverse the globe in style and comfort, all while enjoying the highest standards of safety and service.",
    features: [
      "Multi-City Same-Day Itineraries",
      "Secure On-Board Meeting Spaces",
      "Fast-Track Customs & Immigration",
      "Zero Commercial Airport Delays",
      "Corporate Billing & Volume Discounts"
    ],
    amenities: ["Conference Table", "High-Speed Wi-Fi", "Dedicated Dispatcher", "Executive Concierge", "Chauffeur Pickup"],
    gallery: [
      "/assets/images/fleet-hangar.jpg",
      "/assets/images/cabin-interior.jpg",
      "/assets/images/hero-jet.jpg"
    ],
    aircraftType: "Dassault Falcon 2000 / Embraer Legacy 650",
    ctaText: "Book Business Charter",
    ctaLink: "/book-flight"
  },
  {
    id: 4,
    title: "Pilgrimage Charters (Ek Dham & Char Dham)",
    tagline: "Serene & Comfortable Spiritual Expeditions",
    location: "Dehradun, Kedarnath, Badrinath, Tirupati, Shirdi",
    status: "Seasonal Bookings Open",
    price: "All-Inclusive Packages",
    specs: { beds: "4 - 12 Pax", area: "Helipad to Holy Shrines", speed: "Direct Flight", crew: "Pilgrimage Flight Specialist" },
    image: "/assets/images/pilgrimage.jpg",
    category: "Pilgrimage",
    description: "Embark on a spiritual journey like never before with our specialized pilgrimage charter services. From holy sites to sacred destinations, we provide a comfortable and serene travel experience that complements the significance of your pilgrimage.",
    features: [
      "VIP Priority Darshan Assistance",
      "Helicopter Transfers to Shrines",
      "Elder-Friendly Comfort & Care",
      "Luxury Accommodations Arranged",
      "Ek Dham & 4 Dham Curated Packages"
    ],
    amenities: ["Priority Darshan", "Helipad Transfers", "Satvik Catering", "Medical Support", "Dedicated Yatra Guide"],
    gallery: [
      "/assets/images/pilgrimage.jpg",
      "/assets/images/joyride-scenic.jpg",
      "/assets/images/fleet-hangar.jpg"
    ],
    aircraftType: "Bell 407 Helicopter / Eurocopter EC130 / King Air B200",
    ctaText: "Explore Ek Dham Yatra",
    ctaLink: "/ek-dham-yatra"
  },
  {
    id: 5,
    title: "Air Ambulance",
    tagline: "Critical Care Aeromedical Evacuations",
    location: "24/7 Rapid Emergency Response Nationwide",
    status: "Emergency 24/7",
    price: "Immediate Lifesaving Quoting",
    specs: { beds: "1 Patient + 3 Attendants", area: "ICU On Wings", speed: "High-Speed Medevac", crew: "ICU Doctor + Flight Nurse + Pilots" },
    image: "/assets/images/air-ambulance.jpg",
    category: "Air Ambulance",
    description: "In times of medical emergencies, trust AeroLux's Air Ambulance Charters to provide swift and reliable transportation for critical care patients. Our dedicated team ensures safe and efficient medical evacuations with utmost professionalism and compassion.",
    features: [
      "Full On-Board ICU Setup (Ventilator, Defibrillator)",
      "Bed-to-Bed Transfer with Ground Ambulances",
      "Critical Care Certified Doctor & Paramedics",
      "Clearance & Takeoff Within 90 Minutes",
      "Pressurized Cabin for Delicate Patients"
    ],
    amenities: ["Ventilator & Oxygen", "Multipara Monitors", "Medical Stretcher", "Doctor On Board", "Zero Landing Delays"],
    gallery: [
      "/assets/images/air-ambulance.jpg",
      "/assets/images/cabin-interior.jpg",
      "/assets/images/fleet-hangar.jpg"
    ],
    aircraftType: "King Air C90 / Pilatus PC-12 / Learjet 45XR",
    ctaText: "Request Emergency Evacuation",
    ctaLink: "/book-flight#air-ambulance"
  },
  {
    id: 6,
    title: "Group Charters",
    tagline: "Customized Travel For Corporate & Sports Delegations",
    location: "Domestic & Global Multi-Destinations",
    status: "Custom Schedules",
    price: "Group Volume Pricing",
    specs: { beds: "18 - 180 Pax", area: "Commercial Range", speed: "Custom Schedule", crew: "Full Commercial Crew & Cabin Staff" },
    image: "/assets/images/group-charter.jpg",
    category: "Group Charters",
    description: "Book private jet group charters for seamless travel. Enjoy customized services, flexible scheduling & priority boarding. Ideal for corporate events, sports teams & social gatherings. Get personalized attention & comfort for your group.",
    features: [
      "Custom Flight Schedules to Your Agenda",
      "Exclusive Terminal Check-In & Boarding",
      "Branded In-Flight Headrest Covers & Menus",
      "Coordinated Group Luggage Handling",
      "Ideal for Weddings, Corporate Retreats & Sports Teams"
    ],
    amenities: ["Customized Menus", "Private Terminal Check-in", "Bulk Baggage Allowance", "Branded Cabins", "VIP Event Host"],
    gallery: [
      "/assets/images/group-charter.jpg",
      "/assets/images/cabin-interior.jpg",
      "/assets/images/fleet-hangar.jpg"
    ],
    aircraftType: "Boeing 737 VIP / Airbus A319 Corporate Jet / Bombardier CRJ",
    ctaText: "Request Group Charter Quote",
    ctaLink: "/book-flight"
  }
];

export const aircraftFleet = properties;
