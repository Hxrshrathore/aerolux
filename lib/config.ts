export const siteConfig = {
  name: "AeroLux",
  brandName: "AeroLux Aviation",
  slogan: "Redefining Luxury For You",
  headline: "30+ Aircrafts to Give you the Joy of Flying",
  url: "https://aerolux.design",
  description: "AeroLux is a conceptual luxury private aviation UI/UX design prototype created by hxrshrathore, featuring private jet charters, airplane joyrides, pilgrimage yatra flights, air ambulance services, and turnkey airborne corporate solutions.",
  designer: "hxrshrathore",
  isPrototype: true,
  disclaimer: "AeroLux is an independent design portfolio prototype created by hxrshrathore. It is not an official commercial aviation business. No real flights, bookings, or financial transactions are conducted on this platform.",
  contact: {
    email: "concierge@aerolux.design",
    phone: "+91 98765 43210",
    phoneRaw: "+919876543210",
    whatsapp: "919876543210",
    whatsappLink: "https://wa.me/919876543210",
    communityWhatsapp: "https://wa.me/919876543210?text=Hi%20AeroLux%2C%20I%20want%20to%20join%20the%20VIP%20AeroLux%20Community.",
  },
  socials: {
    instagram: "https://instagram.com/aerolux_design",
    linkedin: "https://linkedin.com/in/hxrshrathore",
    twitter: "https://twitter.com/hxrshrathore",
    whatsapp: "https://wa.me/919876543210",
  },
  logo: {
    url: "/assets/images/hero-jet.jpg",
  },
  address: "Juhu Airport, Juhu Tara Road, Airport Area, Juhu, Mumbai, Maharashtra, India",
  established: 2024,
  copyrightYear: 2026,

  // ─── Mega Navigation ───
  navigation: [
    {
      label: "Charters & Flights",
      href: "/book-flight",
      sections: [
        {
          title: "Private Flight Services",
          links: [
            { label: "Book Flight", href: "/book-flight" },
            { label: "Empty Leg Deals", href: "/#empty-legs" },
            { label: "Private Jets", href: "/book-flight#private-jets" },
            { label: "Airplane Joyride", href: "/airplane-joyride" },
            { label: "Business Trips", href: "/book-flight#business-trips" },
            { label: "Pilgrimage Charters (Ek Dham)", href: "/ek-dham-yatra" },
            { label: "Air Ambulance", href: "/book-flight#air-ambulance" },
            { label: "Group Charters", href: "/book-flight#group-charters" },
          ],
        },
      ],
    },
    {
      label: "Joyrides & Yatra",
      href: "/airplane-joyride",
      sections: [
        {
          title: "Experiences",
          links: [
            { label: "Book a Private Plane Joyride", href: "/airplane-joyride" },
            { label: "Mumbai Skyline Flight", href: "/airplane-joyride#skyline" },
            { label: "Ek Dham Yatra Charters", href: "/ek-dham-yatra" },
            { label: "Charter Deals & Community", href: "https://wa.me/919876543210?text=Hi%20AeroLux%2C%20I%20want%20to%20join%20the%20VIP%20AeroLux%20Community." },
          ],
        },
      ],
    },
    {
      label: "Airborne Solutions",
      href: "/#solutions",
      sections: [
        {
          title: "Aviation Consulting & Fleet",
          links: [
            { label: "Airborne Solutions by AeroLux", href: "/#solutions" },
            { label: "Aircraft Sales", href: "/#solutions" },
            { label: "Aircraft Maintenance", href: "/#solutions" },
            { label: "Flight Operations", href: "/#solutions" },
            { label: "Aviation Finance", href: "/#solutions" },
            { label: "Aviation Consulting", href: "/#solutions" },
          ],
        },
      ],
    },
    {
      label: "About & Contact",
      href: "/about-aerolux",
      sections: [
        {
          title: "AeroLux Aviation",
          links: [
            { label: "About AeroLux", href: "/about-aerolux" },
            { label: "Contact Us", href: "/contact-us" },
            { label: "Blog", href: "/blog" },
            { label: "Terms and Conditon", href: "/terms-and-conditon" },
          ],
        },
      ],
    },
  ],

  // ─── Quick links for footer and top banners ───
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Book Flight", href: "/book-flight" },
    { label: "Airplane Joyride", href: "/airplane-joyride" },
    { label: "Ek Dham Yatra", href: "/ek-dham-yatra" },
    { label: "Blog", href: "/blog" },
    { label: "About AeroLux", href: "/about-aerolux" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Terms and Conditon", href: "/terms-and-conditon" },
  ],
}
