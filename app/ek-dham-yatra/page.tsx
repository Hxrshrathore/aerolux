'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { 
  Compass, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  ChevronRight,
  Flame,
  Award,
  Check,
  Send
} from "lucide-react"
import { siteConfig } from "@/lib/config"
import { WhatsAppIcon } from "@/components/WhatsAppIcon"
import { EkDhamHero } from "@/components/EkDhamHero"

// ─── Data: 3-Day Itinerary ───
const itineraryDays = [
  {
    day: "Day 01",
    title: "Arrival & Check-in at Phata",
    badge: "Acclimatization & Leisure",
    description: "Arrive at Phata, the serene gateway to the Kedarnath Valley. Check into your premium mountain hotel. Rest of the day is at your leisure to relax, take in Himalayan views, and acclimatize before tomorrow's sacred ascent.",
    stay: "Overnight Stay at Luxury Hotel, Phata",
    meal: "Dinner Included",
    highlights: [
      "Smooth hotel check-in and luggage assistance",
      "Briefing by dedicated AeroLux Yatra ground coordinator",
      "High altitude mountain acclimatization & rest",
      "Serene evening temple atmosphere and mountain views"
    ],
    image: "/assets/images/pilgrimage.jpg",
    fact: "Phata is located at an altitude of 1,500m (4,920 ft) alongside the Mandakini river, offering the optimal base for Kedarnath helicopter flights."
  },
  {
    day: "Day 02",
    title: "Phata ➔ Kedarnath by Helicopter ➔ Phata",
    badge: "The Sacred Darshan",
    description: "After an early satvik breakfast, proceed to the Phata Helipad. Board your dedicated helicopter for a breathtaking 9-minute mountain flight landing just 500 meters from Kedarnath Temple. Complete your VIP priority darshan at the holy sanctum, receive holy prasadam, and fly back to Phata.",
    stay: "Overnight Stay at Hotel, Phata",
    meal: "Breakfast & Dinner Included",
    highlights: [
      "Early breakfast and priority transfer to Phata Helipad",
      "Helicopter shuttle: Phata to Kedarnath helipad (9 mins flight)",
      "VIP Priority Darshan passes & temple sanctum escort",
      "Return helicopter flight to Phata & evening celebration dinner"
    ],
    image: "/assets/images/flight-pilgrimage.jpg",
    fact: "The helicopter flight saves over 16-18 hours of steep high-altitude mountain trekking, making it safe and effortless for elders and families."
  },
  {
    day: "Day 03",
    title: "Breakfast & Departure",
    badge: "Our Service Ends Here",
    description: "Wake up to fresh mountain air and enjoy a hearty satvik breakfast at the hotel. Complete check-out procedures with divine blessings and cherished memories of Shri Kedarnath Dham. Our service concludes here.",
    stay: "Check-out by 11:00 AM",
    meal: "Breakfast Included",
    highlights: [
      "Farewell mountain breakfast at the hotel",
      "Seamless checkout and departure assistance",
      "Holy Kedarnath Prasadam kit souvenir",
      "**OUR SERVICE ENDS HERE**"
    ],
    image: "/assets/images/fleet-hangar.jpg",
    fact: "Yatris carry divine peace and memories of one of India's most sacred Jyotirlingas nestled at 11,755 ft amidst snow-capped Himalayan peaks."
  }
]

// ─── Data: Packages ───
const allPackages = [
  {
    name: "Kedarnath Yatra By Helicopter Package",
    badge: "Most Popular Ex-Phata",
    duration: "2 Nights & 3 Days",
    origin: "Ex-PHATA Base",
    price: "₹38,500 / person",
    description: "The complete, hassle-free Kedarnath pilgrimage package including Phata hotel stay, both-way helicopter flights, and VIP darshan clearances.",
    includes: [
      "2 Nights Premium Hotel Stay in Phata",
      "Round-Trip Helicopter: Phata - Kedarnath - Phata",
      "VIP Priority Darshan Pass at Kedarnath Temple",
      "All Meals: Breakfast & Dinner (Satvik Vegetarian)",
      "Dedicated Ground Escort & Helipad Marshals",
      "All Local Taxes and Priority Clearances"
    ],
    featured: true,
  },
  {
    name: "Same-Day Kedarnath VIP Charter",
    badge: "Express Same Day",
    duration: "Same-Day Return",
    origin: "Ex-Dehradun (Sahastradhara)",
    price: "Custom Private Charter",
    description: "Direct helicopter charter from Dehradun to Kedarnath and return on the same day. Perfect for time-sensitive business leaders and elders.",
    includes: [
      "Direct Helicopter from Dehradun Hub",
      "VIP Sanctum Escort & Priority Maha Puja",
      "Special Satvik Refreshments",
      "Return to Dehradun before sunset"
    ],
    featured: false,
  },
  {
    name: "Do Dham & Char Dham Sacred Expeditions",
    badge: "Kedarnath + Badrinath",
    duration: "1N/2D or 4N/5D",
    origin: "Ex-Dehradun / Delhi Charter",
    price: "All-Inclusive VIP",
    description: "Seamless multi-dham helicopter charters covering Kedarnath, Badrinath, Yamunotri, and Gangotri with 5-star mountain luxury stays.",
    includes: [
      "Complete Helicopter Transfers between Dhams",
      "Luxury Accommodations & Satvik Meals",
      "Palanquin / Poni assistance for Senior Citizens",
      "24/7 Dedicated Medical & Aviation Support"
    ],
    featured: false,
  }
]

export default function EkDhamYatraPage() {
  const [activeDayIdx, setActiveDayIdx] = React.useState(0)
  
  // Interactive Booking Form State (Section 2)
  const [packageType, setPackageType] = React.useState("Kedarnath Yatra 2N/3D Ex-PHATA")
  const [travelDate, setTravelDate] = React.useState("")
  const [yatrisCount, setYatrisCount] = React.useState("2")
  const [fullName, setFullName] = React.useState("")
  const [whatsappNumber, setWhatsappNumber] = React.useState("")
  const [bookingStatus, setBookingStatus] = React.useState<"idle" | "submitted">("idle")

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!whatsappNumber) return
    
    // Create WhatsApp link with prefilled message
    const msg = encodeURIComponent(
      `🙏 Namaste AeroLux! I want to book Kedarnath Yatra by Helicopter.\n\n` +
      `📦 Package: ${packageType}\n` +
      `📅 Preferred Date: ${travelDate || "Upcoming available slot"}\n` +
      `👥 Number of Yatris: ${yatrisCount} Persons\n` +
      `👤 Name: ${fullName || "Yatri"}\n` +
      `📱 Contact: ${whatsappNumber}\n\n` +
      `Please provide immediate availability and slot confirmation.`
    )
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${msg}`, "_blank")
    setBookingStatus("submitted")
  }

  return (
    <main className="relative min-h-screen bg-white" style={{ backgroundColor: '#ffffff' }}>
      {/* Pinned Cinematic Video Hero (featuring ek-dham-hero.webm) */}
      <EkDhamHero />

      {/* Overlapping Content Container — curtains smoothly over the hero */}
      <div 
        className="relative z-10 w-full text-zinc-900 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-30px_70px_-15px_rgba(0,0,0,0.6)] overflow-clip bg-white"
        style={{ backgroundColor: '#ffffff', isolation: 'isolate' }}
      >
        {/* ─────────────────────────────────────────────────────────────
            SECTION 2: FAST YATRA BOOKING WIDGET
            ───────────────────────────────────────────────────────────── */}
        <section
          id="yatra-booking"
          className="relative z-20 pt-12 sm:pt-16 pb-6 max-w-6xl mx-auto px-4 sm:px-6"
        >
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] border border-zinc-200/90 text-zinc-900">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-100">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-1.5">
                Direct Heli-Ticket & Stay Booking
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                Reserve Your Holy Kedarnath Flight
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600">
              <ShieldCheck size={16} className="text-emerald-600" />
              DGCA Certified Operators • Priority Passes Included
            </div>
          </div>

          <form onSubmit={handleBookingSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Package Selector */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-700 flex items-center gap-1.5">
                  <Compass size={13} className="text-amber-500" />
                  Yatra Package
                </label>
                <select
                  value={packageType}
                  onChange={e => setPackageType(e.target.value)}
                  className="w-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-300 rounded-xl px-3.5 py-3 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-black transition-colors"
                >
                  <option value="Kedarnath Yatra 2N/3D Ex-PHATA">Kedarnath 2N/3D Ex-PHATA</option>
                  <option value="Same-Day Kedarnath Ex-Dehradun">Same-Day VIP Ex-Dehradun</option>
                  <option value="Do Dham (Kedarnath + Badrinath)">Do Dham (Kedar + Badri)</option>
                  <option value="Complete Char Dham VIP Charter">Complete Char Dham Expedition</option>
                </select>
              </div>

              {/* Travel Date */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-700 flex items-center gap-1.5">
                  <Calendar size={13} className="text-zinc-500" />
                  Travel Date
                </label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={e => setTravelDate(e.target.value)}
                  className="w-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              {/* Number of Yatris */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-700 flex items-center gap-1.5">
                  <Users size={13} className="text-zinc-500" />
                  Number of Yatris
                </label>
                <select
                  value={yatrisCount}
                  onChange={e => setYatrisCount(e.target.value)}
                  className="w-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-300 rounded-xl px-3.5 py-3 text-xs font-semibold text-zinc-900 focus:outline-none focus:border-black transition-colors"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons (Couple / Duo)</option>
                  <option value="4">4 Persons (Family)</option>
                  <option value="6">6 Persons (Full Helicopter Shuttle)</option>
                  <option value="8+">8+ Group Charter</option>
                </select>
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-700 flex items-center gap-1.5">
                  <Phone size={13} className="text-emerald-500" />
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={whatsappNumber}
                  onChange={e => setWhatsappNumber(e.target.value)}
                  required
                  className="w-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            {/* Bottom Row Form Submit */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs text-zinc-600 flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-500" />
                Zero cancellation fees on bad-weather rescheduled flights.
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-105 cursor-pointer"
              >
                <Send size={14} />
                Confirm Yatra Availability
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: LUXURY STORYTELLING & STATS (Inspired by About.tsx)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Storytelling & Values */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.05]">
              Holy Journey to Kedarnath. <br />
              <span className="font-serif italic font-normal text-zinc-500">Divine Comfort Guaranteed.</span>
            </h2>

            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
              Kedarnath Dham is one of the twelve sacred Jyotirlingas, revered by millions across the world. Nestled at 11,755 feet above sea level, reaching the temple traditionally entails an arduous 18 km trek through steep mountain slopes.
            </p>

            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
              With AeroLux’s <strong>Kedarnath Yatra By Helicopter Package (2 Nights & 3 Days Ex-PHATA)</strong>, elders, families, and busy devotees fly directly across the breathtaking Mandakini valley in just 9 minutes, landing right at the doorstep of Lord Shiva with VIP priority darshan assistance.
            </p>

            {/* Feature Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                <Heart className="text-red-500 mb-2" size={22} />
                <h4 className="font-bold text-sm text-zinc-900">Senior Citizen Care</h4>
                <p className="text-[11px] text-zinc-700 mt-0.5">Oxygen support, minimal walking, and physical escorts.</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                <ShieldCheck className="text-emerald-600 mb-2" size={22} />
                <h4 className="font-bold text-sm text-zinc-900">VIP Darshan Passes</h4>
                <p className="text-[11px] text-zinc-700 mt-0.5">Skip 6-8 hour lines with fast-track temple entry.</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                <Sparkles className="text-amber-500 mb-2" size={22} />
                <h4 className="font-bold text-sm text-zinc-900">Satvik Meals & Stay</h4>
                <p className="text-[11px] text-zinc-700 mt-0.5">Hygiene certified pure vegetarian meals in Phata.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 h-[480px]">
              <Image
                src="/assets/images/flight-pilgrimage.jpg"
                alt="Kedarnath Darshan Helicopter"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Stat Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Phata ➔ Kedarnath Shuttle
                  </span>
                  <span className="text-xs font-mono font-bold">9 Mins Flight</span>
                </div>
                <h4 className="font-bold text-lg text-white">Daily Helicopter Departures</h4>
                <p className="text-xs text-zinc-300 mt-1">
                  Operating with dual-engine helicopters adhering to strict DGCA civil aviation standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: DETAILED 3-DAY TOUR ITINERARY (Interactive Tabs)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-zinc-50 rounded-[40px] border border-zinc-200 my-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Detailed Tour Itinerary : <br />
            <span className="font-serif italic font-normal text-zinc-500">2 Night & 3 Days Ex-PHATA.</span>
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base">
            Every moment is meticulously planned to guarantee peace of mind, physical comfort, and uninterrupted spiritual devotion.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {itineraryDays.map((day, idx) => (
            <button
              key={day.day}
              onClick={() => setActiveDayIdx(idx)}
              className={`px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeDayIdx === idx
                  ? "bg-zinc-950 text-white shadow-xl shadow-zinc-950/20 scale-105"
                  : "bg-white text-zinc-600 hover:bg-zinc-200 border border-zinc-200"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeDayIdx === idx ? "bg-amber-400" : "bg-zinc-400"}`} />
              {day.day} : {day.badge}
            </button>
          ))}
        </div>

        {/* Active Day Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDayIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-zinc-200 shadow-xl"
          >
            {/* Left Column: Itinerary Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-mono font-bold">
                  {itineraryDays[activeDayIdx].day}
                </span>
                <span className="text-xs uppercase font-bold text-amber-700 tracking-wider">
                  {itineraryDays[activeDayIdx].badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                {itineraryDays[activeDayIdx].title}
              </h3>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
                {itineraryDays[activeDayIdx].description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  Key Schedule & Highlights
                </div>
                {itineraryDays[activeDayIdx].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Accommodation & Meals pill */}
              <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-zinc-100 text-xs text-zinc-600 font-semibold">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-zinc-400" />
                  {itineraryDays[activeDayIdx].stay}
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={14} className="text-amber-500" />
                  {itineraryDays[activeDayIdx].meal}
                </span>
              </div>
            </div>

            {/* Right Column: Visual Photo & Fact */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
                <Image
                  src={itineraryDays[activeDayIdx].image}
                  alt={itineraryDays[activeDayIdx].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 leading-relaxed font-medium">
                💡 <strong>Yatri Note:</strong> {itineraryDays[activeDayIdx].fact}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: PACKAGES COMPARISON (All Yatra Options)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Choose Your Yatra Package.
          </h2>
          <p className="text-zinc-600 text-sm">
            Whether embarking on the flagship Ex-Phata 2N/3D journey or a direct same-day charter from Dehradun, AeroLux provides unmatched devotion and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.featured
                  ? "bg-zinc-950 text-white shadow-2xl border-2 border-amber-400/80 scale-105"
                  : "bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-400 shadow-sm"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest shadow-md">
                  ★ Flagship Kedarnath Package ★
                </div>
              )}

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className={pkg.featured ? "text-amber-300" : "text-zinc-500"}>
                    {pkg.origin}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] ${pkg.featured ? "bg-white/10 text-white" : "bg-zinc-100 text-zinc-700"}`}>
                    {pkg.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight">{pkg.name}</h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${pkg.featured ? "text-zinc-300" : "text-zinc-600"}`}>
                  {pkg.description}
                </p>

                <div className="pt-4 border-t border-zinc-800/40 space-y-2.5">
                  <div className={`text-[10px] uppercase font-bold tracking-widest ${pkg.featured ? "text-zinc-400" : "text-zinc-500"}`}>
                    Package Inclusions
                  </div>
                  {pkg.includes.map((inc, i) => (
                    <div key={i} className="text-xs font-semibold flex items-start gap-2">
                      <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className={pkg.featured ? "text-zinc-200" : "text-zinc-800"}>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20AeroLux%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(pkg.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    pkg.featured
                      ? "bg-amber-400 hover:bg-amber-300 text-black shadow-lg shadow-amber-400/20"
                      : "bg-zinc-950 hover:bg-zinc-800 text-white shadow-md"
                  }`}
                >
                  Book Yatra Package
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: "READY TO TAKE OFF?" CALL TO ACTION BANNER
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 sm:p-14 md:p-16 border border-zinc-800 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Ready to take off? <br />
                <span className="font-serif italic font-normal text-amber-300">
                  Contact us today to Book Your Yatra.
                </span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                Slots for Kedarnath by Helicopter are limited and sell out rapidly during peak seasons. Connect with our dedicated Yatra flight desk right now to secure your dates and guaranteed boarding passes.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Phone size={14} className="text-emerald-400" /> +91 98765 43210
                </span>
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <CheckCircle2 size={14} className="text-amber-400" /> Instant WhatsApp Confirmation
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20AeroLux%2C%20I%20want%20to%20BOOK%20NOW%20for%20the%20Kedarnath%20Yatra%20by%20Helicopter%20Package.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-black text-sm uppercase tracking-widest px-9 py-5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <WhatsAppIcon size={20} className="shrink-0" />
                BOOK NOW
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                Direct Hotline: +91 98765 43210
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  )
}
