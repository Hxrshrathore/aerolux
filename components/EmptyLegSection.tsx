'use client'

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { 
  Plane, 
  Clock, 
  Users, 
  Luggage, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Bell, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Flame,
  Info,
  Calendar,
  X
} from "lucide-react"
import { siteConfig } from "@/lib/config"

export interface EmptyLegFlight {
  id: string
  originCode: string
  originCity: string
  originAirport: string
  destCode: string
  destCity: string
  destAirport: string
  duration: string
  date: string
  departureTimeWindow: string
  aircraftName: string
  aircraftCategory: string
  capacity: number
  luggage: string
  regularPrice: string
  emptyLegPrice: string
  savingsPercent: number
  perSeatApprox: string
  statusTag: string
  image: string
  categoryFilter: "all" | "metro" | "escapes" | "international"
  featured?: boolean
}

const emptyLegFlights: EmptyLegFlight[] = [
  {
    id: "el-1",
    originCode: "BOM",
    originCity: "Mumbai",
    originAirport: "Chhatrapati Shivaji Intl (BOM/VABB) - GA Terminal",
    destCode: "GOI",
    destCity: "Goa",
    destAirport: "Dabolim / Mopa Intl (GOX)",
    duration: "55m nonstop",
    date: "Tomorrow, 16 Oct",
    departureTimeWindow: "14:30 Departure (Flexible)",
    aircraftName: "Cessna Citation CJ2+",
    aircraftCategory: "Light Jet",
    capacity: 6,
    luggage: "6 Soft Bags",
    regularPrice: "₹4,80,000",
    emptyLegPrice: "₹1,65,000",
    savingsPercent: 66,
    perSeatApprox: "₹27,500",
    statusTag: "Ferrying Tomorrow",
    image: "/assets/images/flight-charter.jpg",
    categoryFilter: "escapes",
    featured: true,
  },
  {
    id: "el-2",
    originCode: "DEL",
    originCity: "New Delhi",
    originAirport: "Indira Gandhi Intl (DEL/VIDP) - VIP Lounge",
    destCode: "BOM",
    destCity: "Mumbai",
    destAirport: "Chhatrapati Shivaji Intl (BOM/VABB)",
    duration: "1h 55m nonstop",
    date: "Friday, 17 Oct",
    departureTimeWindow: "11:00 AM - 14:00 PM Window",
    aircraftName: "Hawker 800XP",
    aircraftCategory: "Midsize Jet",
    capacity: 8,
    luggage: "8 Large Bags",
    regularPrice: "₹8,20,000",
    emptyLegPrice: "₹2,95,000",
    savingsPercent: 64,
    perSeatApprox: "₹36,875",
    statusTag: "Hot Corridor",
    image: "/assets/images/hero-jet.jpg",
    categoryFilter: "metro",
    featured: true,
  },
  {
    id: "el-3",
    originCode: "DEL",
    originCity: "New Delhi",
    originAirport: "Indira Gandhi Intl VIP Terminal",
    destCode: "DXB",
    destCity: "Dubai",
    destAirport: "Al Maktoum Intl / Dubai (DWC)",
    duration: "3h 40m nonstop",
    date: "Sunday, 19 Oct",
    departureTimeWindow: "Morning Takeoff (09:30 AM)",
    aircraftName: "Bombardier Challenger 605",
    aircraftCategory: "Super Midsize Jet",
    capacity: 10,
    luggage: "12 VIP Luggage",
    regularPrice: "₹24,50,000",
    emptyLegPrice: "₹7,80,000",
    savingsPercent: 68,
    perSeatApprox: "₹78,000",
    statusTag: "VIP International",
    image: "/assets/images/cabin-interior.jpg",
    categoryFilter: "international",
    featured: true,
  },
  {
    id: "el-4",
    originCode: "BLR",
    originCity: "Bengaluru",
    originAirport: "Kempegowda Intl (BLR) - General Aviation",
    destCode: "HYD",
    destCity: "Hyderabad",
    destAirport: "Rajiv Gandhi Intl (HYD) - VIP Hangar",
    duration: "1h 10m nonstop",
    date: "Saturday, 18 Oct",
    departureTimeWindow: "Ready from 16:00 PM",
    aircraftName: "Beechcraft King Air 250",
    aircraftCategory: "VIP Turboprop",
    capacity: 7,
    luggage: "7 Medium Bags",
    regularPrice: "₹3,60,000",
    emptyLegPrice: "₹1,25,000",
    savingsPercent: 65,
    perSeatApprox: "₹17,850",
    statusTag: "Quick Commute",
    image: "/assets/images/fleet-hangar.jpg",
    categoryFilter: "metro",
  },
  {
    id: "el-5",
    originCode: "BOM",
    originCity: "Mumbai",
    originAirport: "Chhatrapati Shivaji Intl Airport",
    destCode: "MLE",
    destCity: "Maldives",
    destAirport: "Velana Intl Airport, Malé (MLE)",
    duration: "2h 45m nonstop",
    date: "Monday, 20 Oct",
    departureTimeWindow: "Flexible Departure",
    aircraftName: "Gulfstream G200",
    aircraftCategory: "Super Midsize Jet",
    capacity: 9,
    luggage: "10 Bags + Sports Gear",
    regularPrice: "₹21,00,000",
    emptyLegPrice: "₹7,90,000",
    savingsPercent: 62,
    perSeatApprox: "₹87,700",
    statusTag: "Island Repositioning",
    image: "/assets/images/joyride-scenic.jpg",
    categoryFilter: "international",
  },
  {
    id: "el-6",
    originCode: "AMD",
    originCity: "Ahmedabad",
    originAirport: "Sardar Vallabhbhai Patel Intl (AMD)",
    destCode: "BOM",
    destCity: "Mumbai",
    destAirport: "Chhatrapati Shivaji Intl Airport (BOM)",
    duration: "50m nonstop",
    date: "Saturday, 18 Oct",
    departureTimeWindow: "18:00 PM Slot",
    aircraftName: "Cessna Citation XLS",
    aircraftCategory: "Midsize Jet",
    capacity: 8,
    luggage: "8 Large Bags",
    regularPrice: "₹4,20,000",
    emptyLegPrice: "₹1,45,000",
    savingsPercent: 65,
    perSeatApprox: "₹18,125",
    statusTag: "Last-Minute Ferry",
    image: "/assets/images/group-charter.jpg",
    categoryFilter: "metro",
  },
]

export function EmptyLegSection() {
  const [activeTab, setActiveTab] = React.useState<"all" | "metro" | "escapes" | "international">("all")
  const [selectedRoute, setSelectedRoute] = React.useState<EmptyLegFlight | null>(null)
  
  // Custom alert subscription state
  const [alertOrigin, setAlertOrigin] = React.useState("")
  const [alertDest, setAlertDest] = React.useState("")
  const [alertPhone, setAlertPhone] = React.useState("")
  const [alertSubmitted, setAlertSubmitted] = React.useState(false)

  const filteredFlights = activeTab === "all" 
    ? emptyLegFlights 
    : emptyLegFlights.filter(f => f.categoryFilter === activeTab)

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!alertPhone) return
    setAlertSubmitted(true)
    setTimeout(() => {
      setAlertSubmitted(false)
      setAlertOrigin("")
      setAlertDest("")
      setAlertPhone("")
    }, 4000)
  }

  const getWhatsAppBookingLink = (flight: EmptyLegFlight) => {
    const text = encodeURIComponent(
      `Hello Flyyo! I am interested in booking the Empty Leg flight:\n\n✈️ Route: ${flight.originCity} (${flight.originCode}) ➔ ${flight.destCity} (${flight.destCode})\n📅 Date: ${flight.date} (${flight.departureTimeWindow})\n🛩️ Aircraft: ${flight.aircraftName} (${flight.capacity} Pax)\n💰 Offer Price: ${flight.emptyLegPrice} (Save ${flight.savingsPercent}%)\n\nPlease confirm availability and booking procedure.`
    )
    return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`
  }

  return (
    <section id="empty-legs" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-[11px] font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live Radar • Up to 75% Off Private Jet Routes
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950">
            Empty Leg <span className="font-serif italic font-normal text-zinc-500">Alerts & Flights.</span>
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed">
            When our luxury aircraft reposition between booked charters, you gain whole-cabin private jet access at fraction-of-cost pricing. All flights include private VIP terminal lounge access and 15-minute boarding.
          </p>
        </div>

        {/* Quick WhatsApp Action Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href={siteConfig.contact.communityWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            <Bell size={14} className="text-amber-400" />
            Join WhatsApp Flash Radar
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        {[
          { key: "all", label: "All Live Routes (6)" },
          { key: "metro", label: "Metro Corridors (3)" },
          { key: "escapes", label: "Goa & Leisure (1)" },
          { key: "international", label: "International (2)" },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === tab.key
                ? "bg-zinc-950 text-white shadow-lg shadow-zinc-950/20"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Flight Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredFlights.map((flight, idx) => (
          <motion.div
            key={flight.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="group relative flex flex-col justify-between rounded-3xl bg-white border border-zinc-200/90 hover:border-zinc-300 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Top Image Preview with Savings Tag */}
            <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
              <Image
                src={flight.image}
                alt={`${flight.aircraftName} - ${flight.originCity} to ${flight.destCity}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              {/* Status and Savings Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-emerald-500 text-black shadow-lg">
                  <Flame size={12} className="fill-black" />
                  Save {flight.savingsPercent}%
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/60 text-white backdrop-blur-md border border-white/10">
                  {flight.statusTag}
                </span>
              </div>

              {/* Date & Aircraft Label on bottom of image */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                <div>
                  <p className="font-semibold text-white drop-shadow-sm flex items-center gap-1.5">
                    <Calendar size={13} className="text-emerald-400" />
                    {flight.date}
                  </p>
                </div>
                <div className="text-[11px] font-medium text-zinc-300 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                  {flight.aircraftName}
                </div>
              </div>
            </div>

            {/* Flight Route Details */}
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
              {/* Origin ➔ Destination Route Banner */}
              <div className="relative bg-zinc-50 border border-zinc-100 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  {/* Origin */}
                  <div className="space-y-0.5">
                    <span className="text-2xl font-black tracking-tight text-zinc-900 font-mono">
                      {flight.originCode}
                    </span>
                    <p className="text-xs font-semibold text-zinc-700">{flight.originCity}</p>
                  </div>

                  {/* Flight Path Graphic */}
                  <div className="flex-1 px-4 flex flex-col items-center">
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider mb-1">
                      {flight.duration}
                    </span>
                    <div className="w-full relative flex items-center justify-center">
                      <div className="w-full h-[2px] bg-zinc-300 border-dashed" />
                      <div className="absolute bg-white p-1 rounded-full border border-zinc-300 shadow-sm">
                        <Plane size={14} className="text-zinc-800 rotate-45 transform" />
                      </div>
                    </div>
                    <span className="text-[9px] text-zinc-500 mt-1">Non-stop</span>
                  </div>

                  {/* Destination */}
                  <div className="space-y-0.5 text-right">
                    <span className="text-2xl font-black tracking-tight text-zinc-900 font-mono">
                      {flight.destCode}
                    </span>
                    <p className="text-xs font-semibold text-zinc-700">{flight.destCity}</p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-zinc-200/80 flex items-center justify-between text-[11px] text-zinc-600 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-zinc-500" />
                    {flight.departureTimeWindow}
                  </span>
                  <span className="text-zinc-500 text-[10px]">VIP FBO Access</span>
                </div>
              </div>

              {/* Specs & Capacity */}
              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-600">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50/80 border border-zinc-100">
                  <Users size={14} className="text-zinc-500" />
                  <div>
                    <p className="font-semibold text-zinc-900">{flight.capacity} Pax</p>
                    <p className="text-[10px] text-zinc-500">Whole Cabin</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50/80 border border-zinc-100">
                  <Luggage size={14} className="text-zinc-500" />
                  <div>
                    <p className="font-semibold text-zinc-900">{flight.luggage}</p>
                    <p className="text-[10px] text-zinc-500">Baggage Cap</p>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="pt-2 border-t border-zinc-100">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-xs text-zinc-500">Regular Charter:</span>
                  <span className="text-xs line-through text-zinc-600 font-mono">{flight.regularPrice}</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight font-mono">
                      {flight.emptyLegPrice}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      ~{flight.perSeatApprox} / seat
                    </span>
                  </div>
                </div>
                <p className="text-[10px] text-zinc-500 mt-1">
                  *Flat price for the entire aircraft. No per-seat surcharge.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="space-y-2 pt-2">
                <a
                  href={getWhatsAppBookingLink(flight)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-black font-extrabold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle size={16} className="fill-black" />
                  Claim Route via WhatsApp
                </a>

                <button
                  onClick={() => setSelectedRoute(flight)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  <Info size={14} />
                  View Route Itinerary & Inquire
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* "How Empty Legs Work" Transparency Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200/90 mb-16">
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-zinc-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">
            <Zap size={18} className="text-amber-400" />
          </div>
          <h4 className="font-bold text-base text-zinc-900">Why so affordable?</h4>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            Empty leg flights occur when an aircraft needs to reposition after dropping off passengers. Rather than flying empty, Flyyo offers the flight at deep operational discounts.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-zinc-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">
            <Users size={18} className="text-emerald-400" />
          </div>
          <h4 className="font-bold text-base text-zinc-900">Whole Jet Is Yours</h4>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            Unlike commercial airlines, the quote includes the entire aircraft cabin. You can bring family, friends, or executives up to maximum passenger capacity for no extra charge.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-zinc-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">
            <ShieldCheck size={18} className="text-blue-400" />
          </div>
          <h4 className="font-bold text-base text-zinc-900">Full VIP Experience</h4>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            You enjoy 100% of standard VIP private jet perks: private FBO lounge access, fast 15-minute tarmac boarding, complimentary gourmet beverages, and dedicated pilots.
          </p>
        </div>
      </div>

      {/* Custom Route Radar / Notification Subscription Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 sm:p-12 border border-zinc-800 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles size={12} />
              Bespoke Empty Leg Alerts
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Looking for a <span className="font-serif italic font-normal text-amber-300">Specific Corridor?</span>
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-lg">
              Empty legs are dynamic and often open 24 to 48 hours prior to flight. Tell us your frequent routes and we’ll alert you on WhatsApp the moment an aircraft is scheduled to fly.
            </p>
            <div className="flex items-center gap-4 text-xs text-zinc-400 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" /> No spam guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" /> WhatsApp priority ping
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            {alertSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-black mx-auto flex items-center justify-center font-bold">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-bold text-lg text-emerald-300">Radar Activated!</h4>
                <p className="text-xs text-zinc-300">
                  We have added your route radar. You will receive an instant WhatsApp alert as soon as an empty leg opens.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleAlertSubmit} className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                      From City / Airport
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mumbai (BOM)"
                      value={alertOrigin}
                      onChange={e => setAlertOrigin(e.target.value)}
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                      To City / Airport
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Goa (GOI) or Delhi"
                      value={alertDest}
                      onChange={e => setAlertDest(e.target.value)}
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                    Your WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={alertPhone}
                    onChange={e => setAlertPhone(e.target.value)}
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Bell size={14} />
                  Activate My Custom Route Radar
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Route Detail & Inquire Modal */}
      <AnimatePresence>
        {selectedRoute && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden text-zinc-900"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRoute(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Modal Header Image */}
              <div className="relative h-44 w-full bg-zinc-900">
                <Image
                  src={selectedRoute.image}
                  alt={selectedRoute.aircraftName}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-black">
                    Save {selectedRoute.savingsPercent}% OFF
                  </span>
                  <h3 className="text-2xl font-bold mt-1 text-white">
                    {selectedRoute.originCity} ({selectedRoute.originCode}) ➔ {selectedRoute.destCity} ({selectedRoute.destCode})
                  </h3>
                  <p className="text-xs text-zinc-300">
                    {selectedRoute.aircraftName} • {selectedRoute.aircraftCategory}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-100">
                    <p className="text-[10px] uppercase font-bold text-zinc-600 mb-0.5">Departure Date</p>
                    <p className="font-semibold text-zinc-900">{selectedRoute.date}</p>
                    <p className="text-[11px] text-zinc-700">{selectedRoute.departureTimeWindow}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-100">
                    <p className="text-[10px] uppercase font-bold text-zinc-600 mb-0.5">Aircraft & Pax</p>
                    <p className="font-semibold text-zinc-900">{selectedRoute.capacity} Passengers Max</p>
                    <p className="text-[11px] text-zinc-700">{selectedRoute.luggage}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs text-zinc-400">Total All-Inclusive Charter:</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-emerald-400">
                        {selectedRoute.emptyLegPrice}
                      </span>
                      <span className="text-xs line-through text-zinc-500">
                        {selectedRoute.regularPrice}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/40">
                      Approx {selectedRoute.perSeatApprox} / seat
                    </span>
                  </div>
                </div>

                <div className="text-xs text-zinc-600 space-y-1.5 bg-zinc-50 p-3.5 rounded-xl border border-zinc-100">
                  <p className="font-semibold text-zinc-900">What’s included in this empty leg charter?</p>
                  <ul className="list-disc pl-4 space-y-0.5 text-zinc-700">
                    <li>Entire aircraft private charter exclusively for your group</li>
                    <li>VIP terminal private lounges & expedited tarmac security</li>
                    <li>Complimentary high-altitude refreshments and beverages</li>
                    <li>Full crew: 2 DGCA-certified commercial airline pilots</li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={getWhatsAppBookingLink(selectedRoute)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-black font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <MessageCircle size={16} className="fill-black" />
                    Book Instantly on WhatsApp
                  </a>

                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="py-3.5 px-6 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center transition-all cursor-pointer"
                  >
                    Call Aviation Desk
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
