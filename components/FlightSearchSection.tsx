'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { 
  Plane, 
  ArrowLeftRight, 
  Calendar as CalendarIcon, 
  Users, 
  Search, 
  Sparkles, 
  Tag, 
  Check, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Clock, 
  ShieldCheck, 
  Flame, 
  ArrowRight, 
  Luggage, 
  Zap,
  Building2,
  HeartPulse,
  Compass,
  CheckCircle2,
  CalendarCheck,
  ArrowUpRight
} from "lucide-react"
import { siteConfig } from "@/lib/config"
import { WhatsAppIcon } from "./WhatsAppIcon"

export interface AirportOption {
  code: string
  city: string
  airport: string
  country: string
}

const flightAirports: AirportOption[] = [
  { code: "DEL", city: "Delhi", airport: "Indira Gandhi International Airport (VIP FBO Terminal)", country: "India" },
  { code: "BOM", city: "Mumbai", airport: "Chhatrapati Shivaji Maharaj Intl (General Aviation Terminal)", country: "India" },
  { code: "GOI", city: "Goa", airport: "Dabolim / Mopa International Airport (GOX)", country: "India" },
  { code: "BLR", city: "Bengaluru", airport: "Kempegowda International Airport (GA Facility)", country: "India" },
  { code: "HYD", city: "Hyderabad", airport: "Rajiv Gandhi International Airport (VIP Hangar)", country: "India" },
  { code: "AMD", city: "Ahmedabad", airport: "Sardar Vallabhbhai Patel Intl Airport", country: "India" },
  { code: "JAI", city: "Jaipur", airport: "Jaipur International Airport (VIP Lounge)", country: "India" },
  { code: "CCU", city: "Kolkata", airport: "Netaji Subhash Chandra Bose Intl", country: "India" },
  { code: "DXB", city: "Dubai", airport: "Al Maktoum International / Dubai Executive (DWC)", country: "UAE" },
  { code: "MLE", city: "Maldives", airport: "Velana International Airport, Malé", country: "Maldives" },
]

const joyrideAirportsFrom: AirportOption[] = [
  { code: "VAJJ", city: "Mumbai (Juhu)", airport: "Juhu Aerodrome Coastal Runway Base", country: "India" },
  { code: "BOM", city: "Mumbai (CSMIA)", airport: "Kalina General Aviation VIP Terminal", country: "India" },
  { code: "GOX", city: "Goa (Mopa)", airport: "Goa Coastal Aerial Tour Base", country: "India" },
]

const joyrideAirportsTo: AirportOption[] = [
  { code: "SKYLN", city: "Mumbai Coastal Loop", airport: "30-Min Non-Landing Skyline & Sea Link Aerial Tour", country: "India" },
  { code: "GOA-SEA", city: "Goa Coastal Aerial", airport: "45-Min Beaches & Fort Aguada Aerial Circuit", country: "India" },
]

const yatraAirportsFrom: AirportOption[] = [
  { code: "DED", city: "Dehradun", airport: "Sahastradhara Helipad Base (VIP Yatra Launch)", country: "India" },
  { code: "DEL", city: "Delhi (FBO)", airport: "Indira Gandhi Intl Airport (VIP Charter Gate)", country: "India" },
  { code: "HRD", city: "Haridwar", airport: "Haridwar Bypass Helipad", country: "India" },
]

const yatraAirportsTo: AirportOption[] = [
  { code: "KED", city: "Kedarnath Dham", airport: "Kedarnath Temple Helipad (Mandakini Valley)", country: "India" },
  { code: "BAD", city: "Badrinath Dham", airport: "Badrinath Helipad Base", country: "India" },
  { code: "CHAR", city: "Char Dham Circuit", airport: "Yamunotri, Gangotri, Kedarnath & Badrinath VIP Heli", country: "India" },
  { code: "PHT", city: "Phata Base", airport: "Phata Kedarnath Heli-Hub", country: "India" },
]

const ambulanceAirports: AirportOption[] = [
  { code: "DEL", city: "Delhi (AIIMS/Medanta)", airport: "DEL VIP Tarmac ➔ 45-Min Bed-to-Bed Launch", country: "India" },
  { code: "BOM", city: "Mumbai (Kokilaben)", airport: "BOM Kalina FBO ➔ Critical Care Air Ambulance", country: "India" },
  { code: "BLR", city: "Bengaluru (Manipal)", airport: "BLR Kempegowda Intl ICU Launch Hangar", country: "India" },
  { code: "HYD", city: "Hyderabad (Apollo)", airport: "HYD Begumpet / RGIA GA Terminal", country: "India" },
  { code: "CCU", city: "Kolkata (Apollo)", airport: "CCU Netaji Subhash Chandra Bose Intl", country: "India" },
  { code: "MAA", city: "Chennai (Apollo)", airport: "MAA Chennai International Airport", country: "India" },
  { code: "AMD", city: "Ahmedabad (Zydus)", airport: "AMD Sardar Vallabhbhai Patel Intl", country: "India" },
]

export const liveEmptyLegDeals = [
  {
    id: "EL-801",
    fromCity: "Mumbai",
    fromCode: "BOM",
    fromAirport: "Kalina General Aviation VIP Terminal",
    toCity: "Goa",
    toCode: "GOX",
    toAirport: "Mopa International General Aviation",
    date: "Tomorrow • 11:00 AM",
    duration: "55m nonstop",
    aircraft: "Hawker 900XP",
    category: "Midsize Jet",
    seats: 8,
    regularPrice: "₹6,80,000",
    dealPrice: "₹2,20,000",
    discountPercent: "70% OFF",
    statusTag: "Ready for Departure",
    image: "/assets/images/flight-charter.jpg"
  },
  {
    id: "EL-802",
    fromCity: "New Delhi",
    fromCode: "DEL",
    fromAirport: "Indira Gandhi Intl Airport (VIP FBO Terminal)",
    toCity: "Mumbai",
    toCode: "BOM",
    toAirport: "Chhatrapati Shivaji Maharaj GA Hangar",
    date: "17 Oct • 16:30 PM",
    duration: "1h 55m nonstop",
    aircraft: "Cessna Citation XLS+",
    category: "Midsize Jet",
    seats: 9,
    regularPrice: "₹8,50,000",
    dealPrice: "₹3,10,000",
    discountPercent: "65% OFF",
    statusTag: "Confirmed Repositioning",
    image: "/assets/images/hero-jet.jpg"
  },
  {
    id: "EL-803",
    fromCity: "Dehradun",
    fromCode: "DED",
    fromAirport: "Sahastradhara Helipad Base",
    toCity: "Phata Base",
    toCode: "PHT",
    toAirport: "Kedarnath Route Heli-Hub",
    date: "18 Oct • 07:30 AM",
    duration: "35m flight",
    aircraft: "Bell 407 Dual Engine",
    category: "Helicopter Shuttle",
    seats: 6,
    regularPrice: "₹2,90,000",
    dealPrice: "₹1,25,000",
    discountPercent: "60% OFF",
    statusTag: "Himalayan Repositioning",
    image: "/assets/images/cabin-interior.jpg"
  }
]

const popularAirports: AirportOption[] = flightAirports

interface MatchedAircraft {
  id: string
  name: string
  category: string
  capacity: number
  speed: string
  range: string
  flightTime: string
  priceINR: number
  image: string
  features: string[]
}

const mockAircraftFleet: MatchedAircraft[] = [
  {
    id: "ac-1",
    name: "Cessna Citation CJ2+",
    category: "Light Jet",
    capacity: 6,
    speed: "760 km/h",
    range: "2,400 km",
    flightTime: "1h 45m",
    priceINR: 450000,
    image: "/assets/images/flight-charter.jpg",
    features: ["Quiet Soundproof Cabin", "Refreshment Bar", "Fast 15-Min Boarding", "Direct Tarmac Access"]
  },
  {
    id: "ac-2",
    name: "Hawker 800XP",
    category: "Midsize Jet",
    capacity: 8,
    speed: "830 km/h",
    range: "4,600 km",
    flightTime: "1h 55m",
    priceINR: 720000,
    image: "/assets/images/hero-jet.jpg",
    features: ["Stand-Up Luxury Cabin", "Enclosed Private Lavatory", "Gourmet Catering", "High-Speed Wi-Fi"]
  },
  {
    id: "ac-3",
    name: "Bombardier Challenger 605",
    category: "Super Midsize Jet",
    capacity: 12,
    speed: "870 km/h",
    range: "7,400 km",
    flightTime: "1h 40m",
    priceINR: 1280000,
    image: "/assets/images/cabin-interior.jpg",
    features: ["Full Lie-Flat Berths", "VIP Flight Attendant", "Intercontinental Range", "Satellite Phone & Media"]
  }
]

// ─── Custom Interactive Date Selector Modal Component ───
interface CustomDateSelectorProps {
  isOpen: boolean
  onClose: () => void
  selectedDate: string
  onSelectDate: (dateStr: string) => void
  minDate?: string
  title: string
}

function CustomDateSelector({ isOpen, onClose, selectedDate, onSelectDate, minDate, title }: CustomDateSelectorProps) {
  const initialDate = selectedDate ? new Date(selectedDate) : new Date(2026, 9, 16)
  const [viewYear, setViewYear] = React.useState(initialDate.getFullYear())
  const [viewMonth, setViewMonth] = React.useState(initialDate.getMonth()) // 0-indexed

  if (!isOpen) return null

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  // Days in current month
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  // First day of current month (0: Sunday, 1: Monday, ...)
  const firstDayIndex = new Date(viewYear, viewMonth, 1).getDay()

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear(viewYear - 1)
    } else {
      setViewMonth(viewMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear(viewYear + 1)
    } else {
      setViewMonth(viewMonth + 1)
    }
  }

  const handleSelectDay = (dayNum: number) => {
    const formatted = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`
    onSelectDate(formatted)
    onClose()
  }

  const handleQuickPreset = (offsetDays: number) => {
    const d = new Date(2026, 9, 16) // Reference active date
    d.setDate(d.getDate() + offsetDays)
    const formatted = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
    onSelectDate(formatted)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        data-lenis-prevent
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden text-zinc-900 p-6 overscroll-contain"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">Flight Date</span>
            <h3 className="text-base font-bold text-zinc-950">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors cursor-pointer"
          >
            <X size={15} />
          </button>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-1.5 py-3 border-b border-zinc-100 overflow-x-auto scrollbar-hide">
          <button
            type="button"
            onClick={() => handleQuickPreset(0)}
            className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            Today
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset(1)}
            className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            Tomorrow
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset(2)}
            className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            This Weekend
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset(7)}
            className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            Next Week
          </button>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-between py-3">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="font-bold text-sm text-zinc-900">
            {monthNames[viewMonth]} {viewYear}
          </span>
          <button
            type="button"
            onClick={handleNextMonth}
            className="w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-zinc-400 mb-1">
          {dayNames.map((d) => (
            <div key={d} className="py-1">{d}</div>
          ))}
        </div>

        {/* Days Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {/* Empty spacer slots for offset */}
          {Array.from({ length: firstDayIndex }).map((_, i) => (
            <div key={`empty-${i}`} className="h-9" />
          ))}

          {/* Day Numbers */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNum = i + 1
            const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`
            const isSelected = selectedDate === dateStr

            return (
              <button
                key={dateStr}
                type="button"
                onClick={() => handleSelectDay(dayNum)}
                className={`h-9 w-9 mx-auto rounded-full text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                  isSelected
                    ? "bg-zinc-950 text-white shadow-lg scale-105"
                    : "text-zinc-800 hover:bg-zinc-100 hover:text-black"
                }`}
              >
                {dayNum}
              </button>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

interface FlightSearchSectionProps {
  className?: string
  hideTopBanner?: boolean
}

export function FlightSearchSection({ className = "", hideTopBanner = false }: FlightSearchSectionProps = {}) {
  // Service category tabs (matching the top of IndiGo screenshot)
  const [activeCategory, setActiveCategory] = React.useState<"flights" | "joyrides" | "yatra" | "ambulance" | "emptyLegs">("flights")
  
  // Trip type radio: One Way, Round Trip, Multi City
  const [tripType, setTripType] = React.useState<"oneway" | "roundtrip" | "multicity">("oneway")
  
  // Currency selection
  const [currency, setCurrency] = React.useState<"INR" | "USD" | "AED" | "EUR">("INR")
  const [isCurrencyOpen, setIsCurrencyOpen] = React.useState(false)

  // From & To Airports
  const [fromAirport, setFromAirport] = React.useState<AirportOption>(popularAirports[0]) // Delhi
  const [toAirport, setToAirport] = React.useState<AirportOption>(popularAirports[1]) // Mumbai
  const [searchFilterFrom, setSearchFilterFrom] = React.useState("")
  const [searchFilterTo, setSearchFilterTo] = React.useState("")
  const [isSelectingFrom, setIsSelectingFrom] = React.useState(false)
  const [isSelectingTo, setIsSelectingTo] = React.useState(false)

  // Custom Date Picker Modal States
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false)
  const [datePickerTarget, setDatePickerTarget] = React.useState<"departure" | "return">("departure")
  const [departureDate, setDepartureDate] = React.useState<string>("2026-10-16")
  const [returnDate, setReturnDate] = React.useState<string>("2026-10-19")

  // Travellers & Aircraft selection
  const [passengers, setPassengers] = React.useState<number>(4)
  const [aircraftPreference, setAircraftPreference] = React.useState<string>("Midsize Jet (Up to 8 Pax)")
  const [isPaxModalOpen, setIsPaxModalOpen] = React.useState(false)

  // Pay With selection
  const [payMode, setPayMode] = React.useState<"cash" | "miles">("cash")

  // Special Fares
  const [selectedOffer, setSelectedOffer] = React.useState<string | null>("VIP FBO Fast-Track")

  // Promocode
  const [showPromocodeInput, setShowPromocodeInput] = React.useState(false)
  const [promocode, setPromocode] = React.useState("")
  const [promocodeApplied, setPromocodeApplied] = React.useState(false)

  // Deals and Offers Side Tab Toggle
  const [isDealsSidebarOpen, setIsDealsSidebarOpen] = React.useState(false)

  // Search results state
  const [isSearching, setIsSearching] = React.useState(false)
  const [hasSearched, setHasSearched] = React.useState(false)

  // Format currency helpers
  const formatPrice = (priceINR: number) => {
    if (currency === "USD") return `$${Math.round(priceINR / 84).toLocaleString()}`
    if (currency === "AED") return `AED ${Math.round(priceINR / 23).toLocaleString()}`
    if (currency === "EUR") return `€${Math.round(priceINR / 91).toLocaleString()}`
    return `₹${priceINR.toLocaleString()}`
  }

  // Swap From & To Airports
  const handleSwapAirports = () => {
    const temp = fromAirport
    setFromAirport(toAirport)
    setToAirport(temp)
  }

  // Dynamic airport pool based on type selection
  const currentPoolFrom = React.useMemo(() => {
    if (activeCategory === "joyrides") return joyrideAirportsFrom
    if (activeCategory === "yatra") return yatraAirportsFrom
    if (activeCategory === "ambulance") return ambulanceAirports
    return flightAirports
  }, [activeCategory])

  const currentPoolTo = React.useMemo(() => {
    if (activeCategory === "joyrides") return joyrideAirportsTo
    if (activeCategory === "yatra") return yatraAirportsTo
    if (activeCategory === "ambulance") return ambulanceAirports
    return flightAirports
  }, [activeCategory])

  // Handle Tab Switch Actions (Prefills appropriate routes & aircrafts, disables fields)
  const handleCategorySwitch = (catId: "flights" | "joyrides" | "yatra" | "ambulance" | "emptyLegs") => {
    setActiveCategory(catId)
    setHasSearched(false)
    setIsSelectingFrom(false)
    setIsSelectingTo(false)

    if (catId === "joyrides") {
      setTripType("oneway")
      setFromAirport(joyrideAirportsFrom[0]) // Mumbai Juhu
      setToAirport(joyrideAirportsTo[0]) // Mumbai Coastal Loop
      setAircraftPreference("Scenic Tourer (Cirrus SR22 / Cessna 172)")
      setPassengers(2)
      setSelectedOffer("VIP FBO Fast-Track")
    } else if (catId === "yatra") {
      setTripType("roundtrip")
      setFromAirport(yatraAirportsFrom[0]) // Dehradun Sahastradhara
      setToAirport(yatraAirportsTo[0]) // Kedarnath Temple Helipad
      setAircraftPreference("VIP Helicopter (Airbus H130 / Bell 407)")
      setPassengers(2)
      setSelectedOffer("VIP FBO Fast-Track")
    } else if (catId === "ambulance") {
      setTripType("oneway")
      setFromAirport(ambulanceAirports[0]) // Delhi AIIMS/Medanta
      setToAirport(ambulanceAirports[1]) // Mumbai Kokilaben
      setAircraftPreference("Critical Care ICU Jet (King Air B200 / PC-24)")
      setPassengers(2)
      setSelectedOffer("VIP FBO Fast-Track")
    } else if (catId === "emptyLegs") {
      setTripType("oneway")
      setDepartureDate("") // Null date / flexible
      setAircraftPreference("All Repositioning Fleet (Up to 70% Off)")
      setSelectedOffer("Empty Leg Special")
    } else {
      // Default Private Flights
      setTripType("oneway")
      setFromAirport(flightAirports[0]) // Delhi
      setToAirport(flightAirports[1]) // Mumbai
      setDepartureDate("2026-10-16")
      setAircraftPreference("Midsize Jet (Up to 8 Pax)")
      setPassengers(2)
      setSelectedOffer("VIP FBO Fast-Track")
    }
  }

  // Handle Search Submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setHasSearched(true)
      const resultsEl = document.getElementById("search-results-anchor")
      if (resultsEl) {
        resultsEl.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 600)
  }

  const getDayOfWeek = (dateStr: string) => {
    if (!dateStr) return ""
    const d = new Date(dateStr)
    return d.toLocaleDateString("en-US", { weekday: "long" })
  }

  const getFormattedDate = (dateStr: string) => {
    if (!dateStr) return ""
    const d = new Date(dateStr)
    return d.toLocaleDateString("en-US", { day: "numeric", month: "short" })
  }

  const filteredAirportsFrom = currentPoolFrom.filter(a => 
    a.city.toLowerCase().includes(searchFilterFrom.toLowerCase()) || 
    a.code.toLowerCase().includes(searchFilterFrom.toLowerCase()) ||
    a.airport.toLowerCase().includes(searchFilterFrom.toLowerCase())
  )

  const filteredAirportsTo = currentPoolTo.filter(a => 
    a.city.toLowerCase().includes(searchFilterTo.toLowerCase()) || 
    a.code.toLowerCase().includes(searchFilterTo.toLowerCase()) ||
    a.airport.toLowerCase().includes(searchFilterTo.toLowerCase())
  )

  return (
    <section className={`relative max-w-7xl mx-auto ${className || "py-12 px-4 sm:px-8 xl:px-14"}`}>
      {/* ─── Top Promotion Ribbon (Inspired by screenshot "Celebrating 2 years of IndiGo BluChip") ─── */}
      {!hideTopBanner && (
        <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-zinc-700 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              Celebrating <strong>30+ Fleet Aircraft</strong> at AeroLux. Dedicated VIP FBO lounges &amp; 15-min tarmac boarding.
            </span>
          </div>
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-black underline underline-offset-4"
          >
            <span>SkyClub Member Access</span>
            <ArrowRight size={13} className="shrink-0" />
          </Link>
        </div>
      )}

      {/* ─── Main Flight Search Card Container ─── */}
      <div className="relative rounded-3xl bg-white border border-zinc-200 shadow-2xl overflow-visible transition-all duration-300">
        
        {/* "Deals and Offers" Right Vertical Floating Ribbon - Positioned outside card to prevent overlapping form */}
        <button
          onClick={() => setIsDealsSidebarOpen(true)}
          className="hidden md:flex absolute left-full top-1/2 -translate-y-1/2 z-30 bg-zinc-950 hover:bg-black text-white text-[13px] sm:text-[14px] font-medium tracking-tight antialiased py-4 px-2 rounded-r-xl shadow-xl transition-all hover:pl-3 cursor-pointer items-center justify-center [writing-mode:vertical-rl] gap-2 border-r border-y border-zinc-800"
          title="View Exclusive Charter Deals & Offers"
        >
          <Sparkles size={14} className="text-amber-400 rotate-90 shrink-0" />
          <span>Deals &amp; Offers</span>
        </button>

        {/* ─── 1. Category Tabs Header (Flights, Joyrides, Yatra, Ambulance, Empty Legs) ─── */}
        <div className="flex items-center border-b border-zinc-200 bg-zinc-50/70 rounded-t-3xl overflow-x-auto scrollbar-hide">
          {[
            { 
              id: "flights", 
              label: "Private Flights", 
              icon: <Plane size={16} />,
              activeBg: "bg-zinc-950 text-white",
              activeIcon: "text-amber-400",
              hoverText: "hover:text-zinc-950",
            },
            { 
              id: "joyrides", 
              label: "Airplane Joyrides", 
              icon: <Sparkles size={16} />,
              activeBg: "bg-pink-600 text-white",
              activeIcon: "text-pink-100",
              hoverText: "hover:text-pink-600",
            },
            { 
              id: "yatra", 
              label: "Ek Dham Yatra", 
              icon: <Compass size={16} />,
              activeBg: "bg-orange-600 text-white",
              activeIcon: "text-amber-200",
              hoverText: "hover:text-orange-600",
            },
            { 
              id: "ambulance", 
              label: "Air Ambulance", 
              icon: <HeartPulse size={16} />,
              activeBg: "bg-red-600 text-white",
              activeIcon: "text-red-100",
              hoverText: "hover:text-red-600",
            },
            { 
              id: "emptyLegs", 
              label: "Empty Leg Radar", 
              icon: <Zap size={16} />,
              activeBg: "bg-indigo-600 text-white",
              activeIcon: "text-amber-300",
              hoverText: "hover:text-indigo-600",
            },
          ].map((tab, idx) => {
            const isActive = activeCategory === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => handleCategorySwitch(tab.id as any)}
                className={`flex items-center gap-2.5 py-4 px-6 text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer whitespace-nowrap border-r border-zinc-200/80 ${idx === 0 ? "first:rounded-tl-3xl" : ""} ${
                  isActive
                    ? `${tab.activeBg} shadow-inner`
                    : `text-zinc-600 ${tab.hoverText} hover:bg-zinc-100`
                }`}
              >
                <span className={isActive ? tab.activeIcon : "text-zinc-500 transition-colors"}>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* ─── 2. Search Controls Subheader: Trip Types & Currency Dropdown ─── */}
        <div className="p-6 pb-4 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 bg-white">
          {/* Trip Type Radios */}
          <div className="flex items-center gap-6 text-xs sm:text-sm font-semibold text-zinc-700">
            {[
              { id: "oneway", label: "One Way" },
              { id: "roundtrip", label: "Round Trip" },
              { id: "multicity", label: "Multi City" },
            ].map((type) => (
              <label
                key={type.id}
                className="flex items-center gap-2 cursor-pointer group select-none"
              >
                <input
                  type="radio"
                  name="tripType"
                  checked={tripType === type.id}
                  onChange={() => setTripType(type.id as any)}
                  className="w-4 h-4 text-zinc-950 focus:ring-zinc-950 border-zinc-300 accent-zinc-950 cursor-pointer"
                />
                <span className={`group-hover:text-zinc-950 ${tripType === type.id ? "text-zinc-950 font-bold" : "text-zinc-600"}`}>
                  {type.label}
                </span>
              </label>
            ))}
          </div>

          {/* Currency Dropdown (From Screenshot ₹ INR) */}
          <div className="relative">
            <button
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-xs font-bold text-zinc-800 transition-colors cursor-pointer"
            >
              <span>{currency === "INR" ? "₹ INR" : currency === "USD" ? "$ USD" : currency === "AED" ? "د.إ AED" : "€ EUR"}</span>
              <ChevronDown size={14} className="text-zinc-500" />
            </button>

            {isCurrencyOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-white rounded-xl shadow-xl border border-zinc-200 py-1 z-40 text-xs font-semibold">
                {(["INR", "USD", "AED", "EUR"] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr)
                      setIsCurrencyOpen(false)
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-zinc-100 flex items-center justify-between text-zinc-800 cursor-pointer"
                  >
                    <span>{curr}</span>
                    {currency === curr && <Check size={12} className="text-zinc-950" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ─── 3. Segmented Flight Search Grid (Exact 12-Column Division, Pixel-Perfect Swap Button) ─── */}
        <div className="p-6">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-12 border border-zinc-200 rounded-2xl overflow-visible bg-white divide-y md:divide-y-0 md:divide-x divide-zinc-200 shadow-sm relative">
              
              {/* FROM SECTION (Col span 3) */}
              {activeCategory === "emptyLegs" ? (
                <div className="md:col-span-3 p-4 bg-zinc-50/70 cursor-not-allowed select-none">
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-1">
                    <span>From</span>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
                      Auto-Filtered
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                      All Hubs
                    </span>
                    <span className="text-xs font-bold font-mono text-zinc-500">
                      (BOM, DEL, DED)
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 font-medium truncate mt-0.5">
                    Active repositioning departure airfields
                  </p>
                </div>
              ) : (
                <div 
                  className="md:col-span-3 p-4 hover:bg-zinc-50/80 transition-colors cursor-pointer relative group"
                  onClick={() => { setIsSelectingFrom(!isSelectingFrom); setIsSelectingTo(false); setIsPaxModalOpen(false) }}
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1 flex items-center justify-between">
                    <span>From</span>
                    {activeCategory === "joyrides" && (
                      <span className="text-[10px] font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                        Joyride Base
                      </span>
                    )}
                    {activeCategory === "yatra" && (
                      <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                        Heli Gateway
                      </span>
                    )}
                    {activeCategory === "ambulance" && (
                      <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                        ICU Airfield
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                      {fromAirport.city}
                    </span>
                    <span className="text-xs font-bold font-mono text-zinc-600">
                      ({fromAirport.code})
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 font-medium truncate mt-0.5">
                    {fromAirport.airport}
                  </p>

                  {/* Swap Button: Centered On The Exact Divider Line (Only if not Joyride) */}
                  {activeCategory !== "joyrides" && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleSwapAirports()
                      }}
                      title="Swap Origin and Destination"
                      className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-zinc-300 hover:border-zinc-950 shadow-md items-center justify-center text-zinc-700 hover:text-zinc-950 transition-all hover:scale-110 active:rotate-180 duration-300 cursor-pointer"
                    >
                      <ArrowLeftRight size={13} className="shrink-0" />
                    </button>
                  )}

                  {/* From Airport Picker Popover with Live Search */}
                  {isSelectingFrom && (
                    <>
                      <div 
                        className="fixed inset-0 z-40 bg-transparent" 
                        onClick={(e) => { e.stopPropagation(); setIsSelectingFrom(false) }} 
                      />
                      <div 
                        data-lenis-prevent
                        className="absolute left-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-zinc-200 p-3 z-50 text-zinc-900 overscroll-contain"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-100">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                            {activeCategory === "yatra" ? "Pilgrimage Launch Helipad" : activeCategory === "joyrides" ? "Joyride Runway Base" : "Departure Airport"}
                          </span>
                          <button onClick={() => setIsSelectingFrom(false)} className="text-zinc-400 hover:text-black cursor-pointer">
                            <X size={14} />
                          </button>
                        </div>

                        <div className="mb-2">
                          <input
                            type="text"
                            placeholder="Search city or code..."
                            value={searchFilterFrom}
                            onChange={(e) => setSearchFilterFrom(e.target.value)}
                            className="w-full text-xs px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 focus:outline-none focus:border-black"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>

                        <div 
                          data-lenis-prevent
                          className="max-h-56 overflow-y-auto space-y-1 overscroll-contain pr-1"
                          onWheel={(e) => e.stopPropagation()}
                          onTouchMove={(e) => e.stopPropagation()}
                        >
                          {filteredAirportsFrom.map((item) => (
                            <div
                              key={`from-${item.code}`}
                              onClick={() => { setFromAirport(item); setIsSelectingFrom(false); setSearchFilterFrom("") }}
                              className={`p-2.5 rounded-xl hover:bg-zinc-100 cursor-pointer flex items-center justify-between transition-colors ${
                                fromAirport.code === item.code ? "bg-zinc-100 font-bold" : ""
                              }`}
                            >
                              <div>
                                <div className="text-xs font-bold text-zinc-900">{item.city} ({item.code})</div>
                                <div className="text-[10px] text-zinc-600 truncate max-w-[190px]">{item.airport}</div>
                              </div>
                              <span className="text-xs font-mono font-bold text-zinc-600">{item.code}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Mobile-Only Swap Button Strip */}
              {activeCategory !== "emptyLegs" && activeCategory !== "joyrides" && (
                <div className="md:hidden flex justify-center py-1.5 bg-zinc-50 border-y border-zinc-200">
                  <button
                    type="button"
                    onClick={handleSwapAirports}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-300 text-xs font-bold text-zinc-800 shadow-sm active:rotate-180 transition-transform"
                  >
                    <ArrowLeftRight size={13} />
                    <span>Swap Cities</span>
                  </button>
                </div>
              )}

              {/* TO SECTION (Col span 3) */}
              {activeCategory === "emptyLegs" ? (
                <div className="md:col-span-3 p-4 bg-zinc-50/70 cursor-not-allowed select-none">
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-1">
                    <span>To</span>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
                      Auto-Filtered
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                      All Sectors
                    </span>
                    <span className="text-xs font-bold font-mono text-zinc-500">
                      (GOX, BOM, PHT)
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 font-medium truncate mt-0.5">
                    Live repositioning arrival destinations
                  </p>
                </div>
              ) : activeCategory === "joyrides" ? (
                <div className="md:col-span-3 p-4 bg-zinc-50/70 cursor-not-allowed select-none">
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-1">
                    <span>To</span>
                    <span className="text-[10px] font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                      Aerial Loop
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                      {toAirport.city}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 font-medium truncate mt-0.5">
                    {toAirport.airport}
                  </p>
                </div>
              ) : (
                <div 
                  className="md:col-span-3 p-4 hover:bg-zinc-50/80 transition-colors cursor-pointer relative"
                  onClick={() => { setIsSelectingTo(!isSelectingTo); setIsSelectingFrom(false); setIsPaxModalOpen(false) }}
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1 flex items-center justify-between">
                    <span>To</span>
                    {activeCategory === "yatra" && (
                      <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                        Sacred Shrine
                      </span>
                    )}
                    {activeCategory === "ambulance" && (
                      <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                        Hospital Base
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                      {toAirport.city}
                    </span>
                    <span className="text-xs font-bold font-mono text-zinc-600">
                      ({toAirport.code})
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 font-medium truncate mt-0.5">
                    {toAirport.airport}
                  </p>

                  {/* To Airport Picker Popover with Live Search */}
                  {isSelectingTo && (
                    <>
                      <div 
                        className="fixed inset-0 z-40 bg-transparent" 
                        onClick={(e) => { e.stopPropagation(); setIsSelectingTo(false) }} 
                      />
                      <div 
                        data-lenis-prevent
                        className="absolute left-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-zinc-200 p-3 z-50 text-zinc-900 overscroll-contain"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-100">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                            {activeCategory === "yatra" ? "Select Shrine Helipad" : "Destination Airport"}
                          </span>
                          <button onClick={() => setIsSelectingTo(false)} className="text-zinc-400 hover:text-black cursor-pointer">
                            <X size={14} />
                          </button>
                        </div>

                        <div className="mb-2">
                          <input
                            type="text"
                            placeholder="Search city or code..."
                            value={searchFilterTo}
                            onChange={(e) => setSearchFilterTo(e.target.value)}
                            className="w-full text-xs px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 focus:outline-none focus:border-black"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>

                        <div 
                          data-lenis-prevent
                          className="max-h-56 overflow-y-auto space-y-1 overscroll-contain pr-1"
                          onWheel={(e) => e.stopPropagation()}
                          onTouchMove={(e) => e.stopPropagation()}
                        >
                          {filteredAirportsTo.map((item) => (
                            <div
                              key={`to-${item.code}`}
                              onClick={() => { setToAirport(item); setIsSelectingTo(false); setSearchFilterTo("") }}
                              className={`p-2.5 rounded-xl hover:bg-zinc-100 cursor-pointer flex items-center justify-between transition-colors ${
                                toAirport.code === item.code ? "bg-zinc-100 font-bold" : ""
                              }`}
                            >
                              <div>
                                <div className="text-xs font-bold text-zinc-900">{item.city} ({item.code})</div>
                                <div className="text-[10px] text-zinc-600 truncate max-w-[190px]">{item.airport}</div>
                              </div>
                              <span className="text-xs font-mono font-bold text-zinc-600">{item.code}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* DEPARTURE DATE (Col span 2) - Custom Date Picker Trigger */}
              {activeCategory === "emptyLegs" ? (
                <div className="md:col-span-2 p-4 bg-zinc-50/70 cursor-not-allowed select-none">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-1 flex items-center justify-between">
                    <span>Departure</span>
                    <Clock size={12} className="text-amber-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                    Flexible / Live
                  </div>
                  <div className="text-xs text-zinc-600 font-medium mt-0.5">
                    Today &amp; Upcoming 7 Days
                  </div>
                </div>
              ) : (
                <div 
                  className="md:col-span-2 p-4 hover:bg-zinc-50/80 transition-colors cursor-pointer"
                  onClick={() => { setDatePickerTarget("departure"); setIsDatePickerOpen(true) }}
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1 flex items-center justify-between">
                    <span>Departure</span>
                    <CalendarIcon size={12} className="text-zinc-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                    {getFormattedDate(departureDate)}
                  </div>
                  <div className="flex items-center justify-between text-xs text-zinc-600 font-medium mt-0.5">
                    <span>{getDayOfWeek(departureDate)}</span>
                    <span className="text-[10px] text-zinc-400 font-semibold">Select ▾</span>
                  </div>
                </div>
              )}

              {/* RETURN DATE (Col span 2) - Custom Date Picker Trigger */}
              {activeCategory === "emptyLegs" || activeCategory === "joyrides" || activeCategory === "ambulance" ? (
                <div className="md:col-span-2 p-4 bg-zinc-50/70 cursor-not-allowed select-none">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-1">
                    Return
                  </div>
                  <div className="text-base sm:text-lg font-bold text-zinc-800 tracking-tight">
                    One-Way Only
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    {activeCategory === "emptyLegs" ? "Repositioning sector" : activeCategory === "joyrides" ? "Aerial loop flight" : "Emergency ICU transport"}
                  </div>
                </div>
              ) : (
                <div 
                  className={`md:col-span-2 p-4 transition-colors cursor-pointer ${
                    tripType === "oneway" ? "bg-zinc-50/50 hover:bg-zinc-100/70" : "hover:bg-zinc-50/80"
                  }`}
                  onClick={() => { 
                    if (tripType === "oneway") setTripType("roundtrip")
                    setDatePickerTarget("return")
                    setIsDatePickerOpen(true)
                  }}
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1 flex items-center justify-between">
                    <span>Return</span>
                    <CalendarCheck size={12} className="text-zinc-500" />
                  </div>
                  {tripType === "roundtrip" ? (
                    <>
                      <div className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                        {getFormattedDate(returnDate)}
                      </div>
                      <div className="flex items-center justify-between text-xs text-zinc-600 font-medium mt-0.5">
                        <span>{getDayOfWeek(returnDate)}</span>
                        <span className="text-[10px] text-zinc-400 font-semibold">Select ▾</span>
                      </div>
                    </>
                  ) : (
                    <div className="text-xs text-zinc-600 font-medium leading-tight">
                      <span className="block text-zinc-800 font-bold mb-0.5">+ Add Return</span>
                      <span className="text-[11px] text-zinc-500">Save up to 15% on roundtrip!</span>
                    </div>
                  )}
                </div>
              )}

              {/* TRAVELLERS + AIRCRAFT CLASS (Col span 2) */}
              {activeCategory === "emptyLegs" ? (
                <div className="md:col-span-2 p-4 bg-zinc-50/70 cursor-not-allowed select-none">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-1 flex items-center justify-between">
                    <span>Travellers &amp; Fleet</span>
                    <Zap size={12} className="text-amber-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                    Whole Cabin
                  </div>
                  <p className="text-xs text-zinc-600 font-medium truncate mt-0.5">
                    Up to 70% Off Fixed Flights
                  </p>
                </div>
              ) : activeCategory === "ambulance" ? (
                <div className="md:col-span-2 p-4 bg-zinc-50/70 cursor-not-allowed select-none">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-1 flex items-center justify-between">
                    <span>Medical Crew &amp; Pax</span>
                    <HeartPulse size={12} className="text-red-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                    Patient + 2 Pax
                  </div>
                  <p className="text-xs text-zinc-600 font-medium truncate mt-0.5">
                    Doctor + Paramedic + Attendant
                  </p>
                </div>
              ) : (
                <div 
                  className="md:col-span-2 p-4 hover:bg-zinc-50/80 transition-colors cursor-pointer relative"
                  onClick={() => { setIsPaxModalOpen(!isPaxModalOpen); setIsSelectingFrom(false); setIsSelectingTo(false) }}
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 mb-1 flex items-center justify-between">
                    <span>Travellers &amp; Fleet</span>
                    <ChevronDown size={12} className="text-zinc-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                    {passengers} {passengers === 1 ? "Pax" : "Passengers"}
                  </div>
                  <p className="text-xs text-zinc-600 font-medium truncate mt-0.5">
                    {aircraftPreference}
                  </p>

                  {/* Travellers & Aircraft Popover */}
                  {isPaxModalOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-40 bg-transparent" 
                        onClick={(e) => { e.stopPropagation(); setIsPaxModalOpen(false) }} 
                      />
                      <div 
                        data-lenis-prevent
                        className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-zinc-200 p-4 z-50 text-zinc-900 overscroll-contain"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                      >
                        <div className="space-y-4">
                          <div>
                            <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 block mb-1.5">
                              Total Passengers
                            </label>
                            <div className="flex items-center justify-between bg-zinc-100 rounded-xl p-1.5">
                              <button
                                type="button"
                                onClick={() => setPassengers(Math.max(1, passengers - 1))}
                                className="w-8 h-8 rounded-lg bg-white font-bold text-sm shadow-sm flex items-center justify-center hover:bg-zinc-200 cursor-pointer"
                              >
                                -
                              </button>
                              <span className="font-bold text-sm text-zinc-900">{passengers} Passengers</span>
                              <button
                                type="button"
                                onClick={() => setPassengers(Math.min(18, passengers + 1))}
                                className="w-8 h-8 rounded-lg bg-white font-bold text-sm shadow-sm flex items-center justify-center hover:bg-zinc-200 cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 block mb-1.5">
                              Preferred Aircraft Category
                            </label>
                            <select
                              value={aircraftPreference}
                              onChange={(e) => setAircraftPreference(e.target.value)}
                              className="w-full text-xs font-semibold p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none cursor-pointer"
                            >
                              {activeCategory === "joyrides" ? (
                                <>
                                  <option>Scenic Tourer (Cirrus SR22)</option>
                                  <option>Cessna 172 Skyhawk (3 Pax)</option>
                                </>
                              ) : activeCategory === "yatra" ? (
                                <>
                                  <option>VIP Helicopter (Airbus H130 / Bell 407)</option>
                                  <option>Twin-Engine Chopper (Bell 429)</option>
                                </>
                              ) : (
                                <>
                                  <option>Light Jet (Up to 6 Pax)</option>
                                  <option>Midsize Jet (Up to 8 Pax)</option>
                                  <option>Super Midsize (Up to 10 Pax)</option>
                                  <option>Heavy Jet (Up to 16 Pax)</option>
                                  <option>VIP Turboprop (Up to 7 Pax)</option>
                                </>
                              )}
                            </select>
                          </div>

                          <button
                            type="button"
                            onClick={() => setIsPaxModalOpen(false)}
                            className="w-full py-2.5 bg-zinc-950 text-white rounded-xl text-[14px] font-medium tracking-tight antialiased hover:bg-zinc-800 transition-colors cursor-pointer border border-zinc-900/10"
                          >
                            Apply Fleet Configuration
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* ─── 4. Lower Control Strip (Payment mode, special offer badges, promocode, Search button) ─── */}
            <div className="mt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pt-4 border-t border-zinc-100">
              
              {/* Left: Pay With Toggle */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-zinc-600">
                  Pay with
                </span>
                <div className="inline-flex rounded-xl p-1 bg-zinc-100 border border-zinc-200 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setPayMode("cash")}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      payMode === "cash" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    ₹ Cash / Wire
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayMode("miles")}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      payMode === "miles" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    AeroLux SkyClub + Cash
                  </button>
                </div>
              </div>

              {/* Middle: Special Offer Chips (From screenshot: 6Exclusive Offer, Students Offer, + ADD PROMOCODE) */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "VIP FBO Fast-Track", label: "VIP FBO Fast-Track", badge: "Included" },
                  { id: "Empty Leg Special", label: "Empty Leg Special", badge: "Save 70%" },
                ].map((offer) => (
                  <button
                    key={offer.id}
                    type="button"
                    onClick={() => setSelectedOffer(selectedOffer === offer.id ? null : offer.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                      selectedOffer === offer.id
                        ? "bg-zinc-950 text-white border-zinc-950 shadow-sm"
                        : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100"
                    }`}
                  >
                    <span>{offer.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold uppercase ${
                      selectedOffer === offer.id ? "bg-amber-400 text-black" : "bg-zinc-200 text-zinc-700"
                    }`}>
                      {offer.badge}
                    </span>
                  </button>
                ))}

                {/* Add Promocode */}
                {showPromocodeInput ? (
                  <div className="inline-flex items-center gap-1 bg-zinc-50 border border-zinc-300 rounded-full px-3 py-1 text-xs">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promocode}
                      onChange={(e) => setPromocode(e.target.value.toUpperCase())}
                      className="bg-transparent border-none text-xs font-bold uppercase focus:outline-none w-28 text-zinc-900"
                    />
                    <button
                      type="button"
                      onClick={() => { if (promocode) setPromocodeApplied(true); setShowPromocodeInput(false) }}
                      className="text-[10px] font-bold text-emerald-600 uppercase cursor-pointer"
                    >
                      Apply
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPromocodeInput(false)}
                      className="text-zinc-400 hover:text-black ml-1 cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowPromocodeInput(true)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-zinc-700 hover:text-zinc-950 border border-dashed border-zinc-300 hover:border-zinc-950 transition-colors cursor-pointer"
                  >
                    <span>+ Add Promocode</span>
                    {promocodeApplied && <CheckCircle2 size={12} className="text-emerald-500" />}
                  </button>
                )}
              </div>

              {/* Right: Primary Search Button (Exact typography & design as Navbar CTA) */}
              <div>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#09090b] hover:opacity-90 text-white text-[14px] sm:text-[15px] font-medium tracking-tight antialiased transition-all duration-200 shadow-sm border border-zinc-900/10 cursor-pointer disabled:opacity-50"
                >
                  <Search size={16} className="stroke-[2] text-white shrink-0" />
                  <span>{isSearching ? "Matching 30+ Aircraft..." : "Search Charters"}</span>
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2] text-white shrink-0"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* ─── 5. Bottom Navigation / Service Pills (With Centered Arrows) ─── */}
        <div className="px-6 py-4 bg-zinc-50/90 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-600 font-semibold rounded-b-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#empty-legs"
              className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-white border border-zinc-200 hover:border-black text-zinc-800 transition-colors"
            >
              <Zap size={13} className="text-amber-500 shrink-0" />
              <span>Empty Leg Flash Deals</span>
              <ArrowRight size={13} className="-rotate-45 shrink-0 text-zinc-400" />
            </Link>

            <Link
              href="/airplane-joyride"
              className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-white border border-zinc-200 hover:border-black text-zinc-800 transition-colors"
            >
              <Sparkles size={13} className="text-emerald-500 shrink-0" />
              <span>Mumbai Joyride Slots</span>
              <ArrowRight size={13} className="-rotate-45 shrink-0 text-zinc-400" />
            </Link>

            <Link
              href="/ek-dham-yatra"
              className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-white border border-zinc-200 hover:border-black text-zinc-800 transition-colors"
            >
              <Compass size={13} className="text-blue-500 shrink-0" />
              <span>Kedarnath Heli-Yatra</span>
              <ArrowRight size={13} className="-rotate-45 shrink-0 text-zinc-400" />
            </Link>
          </div>

          {/* Floating Pill: Instant Quote in 15 mins */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span>Instant Quote &amp; Availability in 15 mins</span>
          </div>
        </div>
      </div>

      {/* ─── 6. Real-Time Search Results (Revealed after searching or for Empty Legs) ─── */}
      <div id="search-results-anchor" />

      {/* Live Empty Leg Deals (Shown directly when Empty Leg category is active) */}
      {activeCategory === "emptyLegs" && (
        <div className="mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-zinc-950 text-white shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 font-mono">
                  Live Repositioning Radar • Up to 70% Off
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Active Empty Leg Charters Ready For Takeoff
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Book whole-cabin private repositioning sectors at fractional rates. VIP FBO lounge clearance and 15-min airside tarmac boarding included.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-bold">
              <Sparkles size={14} className="text-yellow-400" />
              <span>Instant WhatsApp Dispatch</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-3">
            {liveEmptyLegDeals.map((el) => (
              <div
                key={el.id}
                className="relative rounded-3xl p-6 pt-8 bg-white border border-zinc-200 hover:border-black/30 transition-all flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md overflow-visible"
              >
                {/* Yellow 70% discount badge in top right corner ON TOP of the card */}
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-yellow-400 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-md border border-yellow-300 z-10">
                  {el.discountPercent}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-zinc-400">{el.id}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      {el.statusTag}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xl font-bold text-zinc-900">{el.fromCity} ({el.fromCode}) ➔ {el.toCity} ({el.toCode})</div>
                    <div className="text-xs text-zinc-500 font-medium">{el.aircraft} • {el.category}</div>
                    <div className="text-xs font-mono text-amber-700 font-bold pt-1">{el.date} • {el.duration}</div>
                  </div>

                  <div className="pt-2 border-t border-zinc-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-400 line-through">{el.regularPrice}</span>
                      <div className="text-2xl font-black font-mono text-zinc-900">{el.dealPrice}</div>
                    </div>
                    <span className="text-xs text-zinc-500 font-medium">{el.seats} Seats Full Jet</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20AeroLux%2C%20I%20want%20to%20instant%20book%20Empty%20Leg%20${el.id}%20from%20${el.fromCity}%20to%20${el.toCity}%20at%20${el.dealPrice}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest text-center transition-colors block cursor-pointer shadow-sm"
                >
                  Instant Book Empty Leg
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence>
        {hasSearched && activeCategory !== "emptyLegs" && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 space-y-6"
          >
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-zinc-950 text-white">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                  Fleet Ready For Dispatch
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {fromAirport.city} ({fromAirport.code}) ➔ {toAirport.city} ({toAirport.code})
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Departure: {getFormattedDate(departureDate)} • {passengers} Passengers • Direct FBO Access
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs font-semibold text-zinc-400 block">Pricing Guarantee:</span>
                <span className="text-xs font-bold text-emerald-400">Fixed Quotation • No Hidden Fees</span>
              </div>
            </div>

            {/* Aircraft Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockAircraftFleet.map((aircraft) => {
                const totalFormatted = formatPrice(aircraft.priceINR)
                const perSeatFormatted = formatPrice(Math.round(aircraft.priceINR / passengers))

                return (
                  <div
                    key={aircraft.id}
                    className="rounded-3xl bg-white border border-zinc-200 hover:border-zinc-400 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Aircraft Photo */}
                      <div className="relative h-44 w-full bg-zinc-900 overflow-hidden">
                        <Image
                          src={aircraft.image}
                          alt={aircraft.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/20">
                          {aircraft.category}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                          <span className="font-bold">{aircraft.name}</span>
                          <span className="text-zinc-300 flex items-center gap-1 font-mono">
                            <Clock size={12} /> {aircraft.flightTime}
                          </span>
                        </div>
                      </div>

                      {/* Specs & Features */}
                      <div className="p-5 space-y-4">
                        <div className="grid grid-cols-2 gap-2 text-xs text-zinc-700">
                          <div className="p-2 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center gap-1.5">
                            <Users size={13} className="text-zinc-400 shrink-0" />
                            <span>Up to {aircraft.capacity} Pax</span>
                          </div>
                          <div className="p-2 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center gap-1.5">
                            <Plane size={13} className="text-zinc-400 shrink-0" />
                            <span>Speed: {aircraft.speed}</span>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                            Included VIP Amenities
                          </span>
                          {aircraft.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                              <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Pricing & Booking Action */}
                    <div className="p-5 pt-3 border-t border-zinc-100 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] text-zinc-400 block">Whole Charter ({currency}):</span>
                          <span className="text-2xl font-black font-mono text-zinc-950">
                            {totalFormatted}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            ~{perSeatFormatted} / seat
                          </span>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20AeroLux%2C%20I%20am%20inquiring%20about%20chartering%20the%20${encodeURIComponent(aircraft.name)}%20from%20${fromAirport.city}%20(${fromAirport.code})%20to%20${toAirport.city}%20(${toAirport.code})%20on%20${departureDate}%20for%20${passengers}%20Passengers.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-black text-[14px] sm:text-[15px] font-medium tracking-tight antialiased transition-all duration-200 shadow-sm cursor-pointer"
                      >
                        <WhatsAppIcon size={16} className="shrink-0" />
                        <span>Book this aircraft on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── 7. Custom Date Picker Modal ─── */}
      <AnimatePresence>
        {isDatePickerOpen && (
          <CustomDateSelector
            isOpen={isDatePickerOpen}
            onClose={() => setIsDatePickerOpen(false)}
            selectedDate={datePickerTarget === "departure" ? departureDate : returnDate}
            onSelectDate={(newDate) => {
              if (datePickerTarget === "departure") {
                setDepartureDate(newDate)
              } else {
                setReturnDate(newDate)
              }
            }}
            title={datePickerTarget === "departure" ? "Select Departure Date" : "Select Return Date"}
          />
        )}
      </AnimatePresence>

      {/* ─── 8. Deals and Offers Slide-Out Sidebar Modal ─── */}
      <AnimatePresence>
        {isDealsSidebarOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm" onClick={() => setIsDealsSidebarOpen(false)}>
            <motion.div
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto overscroll-contain"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
                  <div className="flex items-center gap-2 text-zinc-950 font-bold text-lg">
                    <Sparkles size={18} className="text-amber-500" />
                    <h3>Exclusive Deals &amp; Offers</h3>
                  </div>
                  <button
                    onClick={() => setIsDealsSidebarOpen(false)}
                    className="p-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Offer Cards */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-full">
                      Flash Deal
                    </span>
                    <h4 className="font-bold text-sm text-zinc-900">Up to 70% Off Empty Leg Routes</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Pan-India repositioning flights between Mumbai, Delhi, Goa, and Bengaluru available at operational costs.
                    </p>
                    <Link
                      href="/#empty-legs"
                      onClick={() => setIsDealsSidebarOpen(false)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 underline mt-1"
                    >
                      View Live Empty Legs <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-200/60 px-2 py-0.5 rounded-full">
                      Member Privilege
                    </span>
                    <h4 className="font-bold text-sm text-zinc-900">Complimentary VIP FBO Terminal Access</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      All charters include access to private lounges, priority customs &amp; direct tarmac luxury vehicle transfers.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-600 bg-zinc-200 px-2 py-0.5 rounded-full">
                      Promo Code
                    </span>
                    <h4 className="font-bold text-sm text-zinc-900">Code: AEROLUXSKYCLUB</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Get ₹25,000 credit towards catering and ground limousine services on your first intercity private jet flight.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-100">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20AeroLux%2C%20please%20send%20me%20your%20latest%20charter%20deals%20and%20offers.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-zinc-950 text-white text-[14px] sm:text-[15px] font-medium tracking-tight antialiased hover:bg-zinc-800 transition-colors cursor-pointer border border-zinc-900/10"
                >
                  <WhatsAppIcon size={16} className="shrink-0" />
                  <span>Chat with Charter Specialist</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
