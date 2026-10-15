export const siteConfig = {
  name: "Flyyo",
  slogan: "Redefining Luxury For You",
  headline: "30+ Aircrafts to Give you the Joy of Flying",
  url: "https://flyyo.co.in",
  description: "Flyyo is India's premier private aviation platform offering bespoke private jet charters, airplane joyrides, pilgrimage yatra flights, air ambulance services, and turnkey airborne corporate solutions.",
  contact: {
    email: "flyyo.in@gmail.com",
    phone: "+91 95118 26428",
    phoneRaw: "+919511826428",
    whatsapp: "919511826428",
    whatsappLink: "https://wa.me/919511826428",
    communityWhatsapp: "https://chat.whatsapp.com/IVHW93LqNxqLW3ZlbVOWdz",
  },
  socials: {
    instagram: "https://instagram.com/flyyo_aviation",
    linkedin: "https://linkedin.com/company/flyyo",
    twitter: "https://twitter.com/flyyo_in",
    whatsapp: "https://wa.me/919511826428",
  },
  logo: {
    url: "/assets/images/hero-jet.jpg",
  },
  address: "Juhu Airport, Juhu Tara Road, Airport Area, Juhu, Mumbai, Maharashtra, India",
  established: 2024,
  copyrightYear: 2024,

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
            { label: "Charter Deals & Community", href: "https://chat.whatsapp.com/IVHW93LqNxqLW3ZlbVOWdz" },
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
            { label: "Airborne Solutions by Flyyo", href: "/#solutions" },
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
      href: "/about-flyyo",
      sections: [
        {
          title: "Flyyo Aviation",
          links: [
            { label: "About Flyyo", href: "/about-flyyo" },
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
    { label: "About Flyyo", href: "/about-flyyo" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Terms and Conditon", href: "/terms-and-conditon" },
  ],
}
